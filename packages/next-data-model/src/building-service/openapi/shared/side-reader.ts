import { Diff, DiffAction, DiffType, isDiffAdd, isDiffRemove, isDiffRename, isDiffReplace } from "@netcracker/qubership-apihub-api-diff"
import { JsonPath } from "@netcracker/qubership-apihub-json-crawl"
import { DiffsRecord, isArray, isObjective, takeIfDiffsRecord } from "../../../utilities"
import { AbstractNodeDiffsSeveritiesAggregator } from "../../abstract/tree-with-diffs/node-diffs-data/node-diffs-severities-aggregator"

/** Whether the current object exists on each side of a merged document. */
export type OpenApiSideContext = {
  readonly before: boolean
  readonly after: boolean
}

export const BOTH_SIDES: OpenApiSideContext = { before: true, after: true }

/** One field of a merged object, reconstructed per side. */
export type OpenApiFieldSides = {
  readonly beforePresent: boolean
  readonly afterPresent: boolean
  readonly before: unknown
  readonly after: unknown
  /** The field's own diff in its parent's record, if any. */
  readonly diff: Diff | undefined
}

const SYNTHETIC_DIFF_SCOPE = 'openapi-operation-viewer'

/**
 * Reads a merged `apiDiff` document per side and builds synthetic diffs from per-side values.
 * `apiDiff` keeps removed keys / array items in the merged object with their BEFORE value (E18),
 * so a field is absent on a side when it or an ancestor carries an add (before) / remove (after).
 * Design: docs/design/openapi/entities/parameters.md -> "Step 1".
 */
export class OpenApiSideReader {
  constructor(public readonly diffsMetaKey: symbol) { }

  public record(value: unknown): DiffsRecord | undefined {
    return isObjective(value) ? takeIfDiffsRecord(value[this.diffsMetaKey]) : undefined
  }

  public readField(owner: unknown, key: PropertyKey, context: OpenApiSideContext): OpenApiFieldSides {
    const merged = isObjective(owner) ? owner[key] : undefined
    const diff = typeof key === 'symbol' ? undefined : this.record(owner)?.[String(key)]
    let beforePresent = context.before && merged !== undefined
    let afterPresent = context.after && merged !== undefined
    let before = merged
    if (diff && isDiffAdd(diff)) {
      beforePresent = false
    }
    if (diff && isDiffRemove(diff)) {
      afterPresent = false
    }
    if (diff && isDiffReplace(diff)) {
      before = diff.beforeValue
      beforePresent = context.before && before !== undefined
    }
    return {
      beforePresent,
      afterPresent,
      before: beforePresent ? before : undefined,
      after: afterPresent ? merged : undefined,
      diff,
    }
  }

  public childContext(field: OpenApiFieldSides): OpenApiSideContext {
    return { before: field.beforePresent, after: field.afterPresent }
  }

  /** Diff between two shown values: none when equal, else add / remove / replace. */
  public diffShownValues(
    before: unknown,
    after: unknown,
    causes: readonly (Diff | undefined)[],
  ): Diff | undefined {
    const beforeShown = before !== undefined
    const afterShown = after !== undefined
    if (!beforeShown && !afterShown) {
      return undefined
    }
    if (beforeShown && afterShown && OpenApiSideReader.deepEqual(before, after)) {
      return undefined
    }
    if (!beforeShown) {
      return this.createDiff(DiffAction.add, { afterValue: after }, causes)
    }
    if (!afterShown) {
      return this.createDiff(DiffAction.remove, { beforeValue: before }, causes)
    }
    return this.createDiff(DiffAction.replace, { beforeValue: before, afterValue: after }, causes)
  }

  /** Synthetic whole add / remove when presence flips; `undefined` otherwise. */
  public diffPresence(
    presence: OpenApiSideContext,
    value: unknown,
    causes: readonly (Diff | undefined)[],
  ): Diff | undefined {
    if (presence.before === presence.after) {
      return undefined
    }
    return presence.after
      ? this.createDiff(DiffAction.add, { afterValue: value }, causes)
      : this.createDiff(DiffAction.remove, { beforeValue: value }, causes)
  }

  public createDiff(
    action: typeof DiffAction.add | typeof DiffAction.remove | typeof DiffAction.replace,
    values: { beforeValue?: unknown, afterValue?: unknown },
    causes: readonly (Diff | undefined)[],
  ): Diff {
    const contributing = causes.filter((cause): cause is Diff => cause !== undefined)
    const type: DiffType = AbstractNodeDiffsSeveritiesAggregator.maxDiffByDiffType(...contributing)?.type ?? 'annotation'
    const beforeDeclarationPaths: JsonPath[] = contributing.flatMap(cause => 'beforeDeclarationPaths' in cause ? cause.beforeDeclarationPaths : [])
    const afterDeclarationPaths: JsonPath[] = contributing.flatMap(cause => 'afterDeclarationPaths' in cause ? cause.afterDeclarationPaths : [])
    switch (action) {
      case DiffAction.add:
        return { type, scope: SYNTHETIC_DIFF_SCOPE, action, afterValue: values.afterValue, afterDeclarationPaths }
      case DiffAction.remove:
        return { type, scope: SYNTHETIC_DIFF_SCOPE, action, beforeValue: values.beforeValue, beforeDeclarationPaths }
      case DiffAction.replace:
        return {
          type,
          scope: SYNTHETIC_DIFF_SCOPE,
          action,
          beforeValue: values.beforeValue,
          afterValue: values.afterValue,
          beforeDeclarationPaths,
          afterDeclarationPaths,
        }
    }
  }

  /** Every diff below `value` (own records included); cycle-safe. */
  public collectDiffs(value: unknown, result: Diff[] = [], visited: Set<object> = new Set()): Diff[] {
    if (!isObjective(value) || visited.has(value)) {
      return result
    }
    visited.add(value)
    for (const diff of Object.values(this.record(value) ?? {})) {
      if (diff) {
        result.push(diff)
      }
    }
    for (const nested of Object.values(value)) {
      this.collectDiffs(nested, result, visited)
    }
    return result
  }

  /** Writes a diff into `owner`'s own record (a fresh record object - raw records are never mutated). */
  public writeDiff(owner: object, key: string, diff: Diff | undefined): void {
    if (!diff) {
      return
    }
    Reflect.set(owner, this.diffsMetaKey, { ...(this.record(owner) ?? {}), [key]: diff })
  }

  public writeRecord(owner: object, record: DiffsRecord | undefined): void {
    if (!record || Object.keys(record).length === 0) {
      return
    }
    Reflect.set(owner, this.diffsMetaKey, { ...(this.record(owner) ?? {}), ...record })
  }

  public static isWholeChange(diff: Diff | undefined): boolean {
    return diff !== undefined && (isDiffAdd(diff) || isDiffRemove(diff))
  }

  public static isRename(diff: Diff | undefined): boolean {
    return diff !== undefined && isDiffRename(diff)
  }

  public static deepEqual(a: unknown, b: unknown, visited: WeakMap<object, object> = new WeakMap()): boolean {
    if (Object.is(a, b)) {
      return true
    }
    if (!isObjective(a) || !isObjective(b) || isArray(a) !== isArray(b)) {
      return false
    }
    if (visited.get(a) === b) {
      return true
    }
    visited.set(a, b)
    const keysA = Object.keys(a)
    const keysB = Object.keys(b)
    if (keysA.length !== keysB.length) {
      return false
    }
    return keysA.every(key => Object.prototype.hasOwnProperty.call(b, key) && OpenApiSideReader.deepEqual(a[key], b[key], visited))
  }
}
