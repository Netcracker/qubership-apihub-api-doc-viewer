import { Diff, DiffAction, isDiffAdd, isDiffRemove, isDiffRename, isDiffReplace } from "@netcracker/qubership-apihub-api-diff"
import { CHANGED_LAYOUT_SIDE, LayoutSide, ORIGIN_LAYOUT_SIDE } from "../../abstract/layout-side"
import { ChangedPropertyMetaData, NODE_LEVEL_DIFF_KEY, NodeDescendantDiffsSummary } from "../../abstract/tree-with-diffs/tree-node.interface"
import { OpenApiTreeNode, OpenApiTreeNodeWithDiffs } from "../types/aliases"
import { OpenApiExternalDocs } from "../types/node-value"
import { OpenApiDisplayLabels } from "../display/labels"
import { OpenApiChangedPropertyMetaData } from "./changed-property-metadata"
import { OPENAPI_SECURITY_ALTERNATIVES_DIFF_KEY } from "./diff-keys"

type AnyOpenApiNode = OpenApiTreeNode | OpenApiTreeNodeWithDiffs

const BOTH_LAYOUT_SIDES: readonly LayoutSide[] = [ORIGIN_LAYOUT_SIDE, CHANGED_LAYOUT_SIDE]

/** One chip of a side-aware list. */
export type OpenApiSideListItem = {
  readonly text: string
  /** Tooltip text (OAuth scope description). */
  readonly hint?: string
  /** `added` on the changed side / `removed` on the origin side; absent for unchanged items. */
  readonly change?: 'added' | 'removed'
}

function isWithDiffs(node: AnyOpenApiNode): node is OpenApiTreeNodeWithDiffs {
  return 'diffs' in node && 'descendantDiffsSummary' in node
}

function isChangedPropertyMetaData(value: unknown): value is ChangedPropertyMetaData {
  return typeof value === 'object' && value !== null && 'data' in value && 'styles' in value
}

function fieldDiff(node: AnyOpenApiNode, key: string): ChangedPropertyMetaData | undefined {
  if (!isWithDiffs(node)) {
    return undefined
  }
  const diff: unknown = Reflect.get(node.diffs, key)
  return isChangedPropertyMetaData(diff) ? diff : undefined
}

function isWholeChange(diff: Diff | undefined): boolean {
  return diff !== undefined && (isDiffAdd(diff) || isDiffRemove(diff))
}

function sideValue(diff: Diff, side: LayoutSide): unknown {
  if (side === ORIGIN_LAYOUT_SIDE) {
    return isDiffRemove(diff) || isDiffReplace(diff) ? diff.beforeValue : undefined
  }
  return isDiffAdd(diff) || isDiffReplace(diff) ? diff.afterValue : undefined
}

function toStringList(value: unknown): string[] {
  return Array.isArray(value) ? value.filter((item): item is string => typeof item === 'string') : []
}

function toStringMap(value: unknown): Record<string, string> {
  const result: Record<string, string> = {}
  if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
    for (const [key, item] of Object.entries(value)) {
      result[key] = typeof item === 'string' ? item : ''
    }
  }
  return result
}

function toExternalDocs(value: unknown): OpenApiExternalDocs | null {
  if (typeof value !== 'object' || value === null) {
    return null
  }
  const url: unknown = Reflect.get(value, 'url')
  const description: unknown = Reflect.get(value, 'description')
  return typeof url === 'string'
    ? { url, ...(typeof description === 'string' ? { description } : {}) }
    : null
}

/**
 * A row diff derived from a list / map diff (one scope out of a `scopes` map replace): same type and
 * declaration paths as the parent, the row's own action and values.
 */
function deriveDiff(parent: Diff, action: 'add' | 'remove' | 'replace', beforeValue: unknown, afterValue: unknown): Diff {
  const beforeDeclarationPaths = 'beforeDeclarationPaths' in parent ? parent.beforeDeclarationPaths : []
  const afterDeclarationPaths = 'afterDeclarationPaths' in parent ? parent.afterDeclarationPaths : []
  const base = { type: parent.type, scope: parent.scope }
  switch (action) {
    case 'add':
      return { ...base, action: DiffAction.add, afterValue, afterDeclarationPaths }
    case 'remove':
      return { ...base, action: DiffAction.remove, beforeValue, beforeDeclarationPaths }
    case 'replace':
      return { ...base, action: DiffAction.replace, beforeValue, afterValue, beforeDeclarationPaths, afterDeclarationPaths }
  }
}

function sideItems(before: readonly string[], after: readonly string[], side: LayoutSide, hints: Record<string, string> = {}): OpenApiSideListItem[] {
  if (side === ORIGIN_LAYOUT_SIDE) {
    return before.map(text => ({ text, hint: hints[text], ...(after.includes(text) ? {} : { change: 'removed' as const }) }))
  }
  return after.map(text => ({ text, hint: hints[text], ...(before.includes(text) ? {} : { change: 'added' as const }) }))
}

class NodeLevel {
  /** Node-level diff of any action (rename included). */
  public static takeNodeLevelDiff(node: AnyOpenApiNode): ChangedPropertyMetaData | undefined {
    return isWithDiffs(node) ? node.diffs[NODE_LEVEL_DIFF_KEY] : undefined
  }

  /** Node-level diff unless it is a rename: "the whole node was added / removed / replaced". */
  public static takeWholeNodeDiff(node: AnyOpenApiNode): ChangedPropertyMetaData | undefined {
    const diff = NodeLevel.takeNodeLevelDiff(node)
    return diff && !isDiffRename(diff.data) ? diff : undefined
  }

  /** Whether the node exists on a side: false on the side where it was wholly added / removed. */
  public static isPresentOnSide(node: AnyOpenApiNode, side: LayoutSide): boolean {
    const diff = NodeLevel.takeNodeLevelDiff(node)?.data
    if (diff && isDiffAdd(diff)) {
      return side === CHANGED_LAYOUT_SIDE
    }
    if (diff && isDiffRemove(diff)) {
      return side === ORIGIN_LAYOUT_SIDE
    }
    return true
  }

  /** Field diff, else the whole-node diff (a row of a wholly added / removed node). */
  public static takeRowDiff(node: AnyOpenApiNode, field: string): ChangedPropertyMetaData | undefined {
    return fieldDiff(node, field) ?? NodeLevel.takeWholeNodeDiff(node)
  }

  /**
   * A string field as shown on a side: the diff's before / after value when the field changed,
   * else the merged value on the sides where the node exists.
   */
  public static resolveSideField(node: AnyOpenApiNode, field: string, side: LayoutSide): string | undefined {
    if (!NodeLevel.isPresentOnSide(node, side)) {
      return undefined
    }
    const diff = fieldDiff(node, field)?.data
    if (diff && !isDiffRename(diff)) {
      const value = sideValue(diff, side)
      return typeof value === 'string' ? value : undefined
    }
    const value: unknown = Reflect.get(node.value() ?? {}, field)
    return typeof value === 'string' ? value : undefined
  }

  /** Key of an option per side (rename aware): media types, response codes. */
  public static resolveSideKey(node: AnyOpenApiNode, side: LayoutSide): string {
    const diff = NodeLevel.takeNodeLevelDiff(node)?.data
    if (diff && isDiffRename(diff)) {
      return String(side === ORIGIN_LAYOUT_SIDE ? diff.beforeKey : diff.afterKey)
    }
    return String(node.key)
  }
}

class Section {
  /** Header-row diff of a section / subsection: a whole add / remove only. */
  public static takeHeaderRowDiff(node: AnyOpenApiNode): ChangedPropertyMetaData | undefined {
    const diff = NodeLevel.takeWholeNodeDiff(node)
    return diff && isWholeChange(diff.data) ? diff : undefined
  }
}

class Operation {
  /** Whole operation -> summary -> a deprecated change painted as a yellow title row. */
  public static takeTitleRowDiff(node: AnyOpenApiNode): ChangedPropertyMetaData | undefined {
    const deprecated = fieldDiff(node, 'deprecated')
    return NodeLevel.takeWholeNodeDiff(node)
      ?? fieldDiff(node, 'title')
      ?? (deprecated ? OpenApiChangedPropertyMetaData.buildRowReplace(deprecated.data) : undefined)
  }

  public static takeOperationIdRowDiff(node: AnyOpenApiNode): ChangedPropertyMetaData | undefined {
    return NodeLevel.takeRowDiff(node, 'operationId')
  }

  public static takeAddressRowDiff(node: AnyOpenApiNode): ChangedPropertyMetaData | undefined {
    return NodeLevel.takeRowDiff(node, 'path')
  }

  public static takeDescriptionRowDiff(node: AnyOpenApiNode): ChangedPropertyMetaData | undefined {
    return NodeLevel.takeRowDiff(node, 'description')
  }

  /** The deprecated tag's own diff; never borrowed from the node. */
  public static takeDeprecatedTagDiff(node: AnyOpenApiNode): ChangedPropertyMetaData | undefined {
    return fieldDiff(node, 'deprecated')
  }

  public static isDeprecatedOnSide(node: AnyOpenApiNode, side: LayoutSide): boolean {
    const diff = fieldDiff(node, 'deprecated')?.data
    if (diff && !isDiffRename(diff)) {
      return sideValue(diff, side) === true
    }
    const value = node.value()
    return NodeLevel.isPresentOnSide(node, side) && !!value && 'deprecated' in value && value.deprecated === true
  }

  /**
   * Row diff of the external docs link: a whole add / remove, or a changed URL. A description-only
   * change does not paint the row (open question Q16); each side still shows its own description.
   */
  public static takeExternalDocsRowDiff(node: AnyOpenApiNode): ChangedPropertyMetaData | undefined {
    const diff = fieldDiff(node, 'externalDocs')
    if (diff && isDiffReplace(diff.data)) {
      const before = Operation.resolveExternalDocsSide(node, ORIGIN_LAYOUT_SIDE)
      const after = Operation.resolveExternalDocsSide(node, CHANGED_LAYOUT_SIDE)
      return before?.url !== after?.url ? diff : undefined
    }
    return diff ?? NodeLevel.takeWholeNodeDiff(node)
  }

  public static resolveExternalDocsSide(node: AnyOpenApiNode, side: LayoutSide): OpenApiExternalDocs | null {
    if (!NodeLevel.isPresentOnSide(node, side)) {
      return null
    }
    const diff = fieldDiff(node, 'externalDocs')?.data
    if (!diff || isDiffRename(diff)) {
      const value = node.value()
      return toExternalDocs(value && 'externalDocs' in value ? value.externalDocs : undefined)
    }
    return toExternalDocs(sideValue(diff, side))
  }
}

class RequestBody {
  /** Whole body add / remove -> a required change painted as a yellow header row. */
  public static takeHeaderRowDiff(node: AnyOpenApiNode): ChangedPropertyMetaData | undefined {
    const required = fieldDiff(node, 'required')
    return Section.takeHeaderRowDiff(node)
      ?? (required ? OpenApiChangedPropertyMetaData.buildRowReplace(required.data) : undefined)
  }

  /** Side-exclusive required star. */
  public static isRequiredStarVisibleOnSide(node: AnyOpenApiNode, side: LayoutSide): boolean {
    if (!NodeLevel.isPresentOnSide(node, side)) {
      return false
    }
    const diff = fieldDiff(node, 'required')?.data
    if (diff && !isDiffRename(diff)) {
      return sideValue(diff, side) === true
    }
    const value = node.value()
    return !!value && 'required' in value && value.required === true
  }

  /** The `required` tag: only for a required change of a body that exists on both sides. */
  public static takeRequiredTagDiff(node: AnyOpenApiNode): ChangedPropertyMetaData | undefined {
    return Section.takeHeaderRowDiff(node) ? undefined : fieldDiff(node, 'required')
  }
}

class MediaType {
  /** Title of a media-type option per side (rename aware). */
  public static resolveSideTitle(node: AnyOpenApiNode, side: LayoutSide): string {
    return NodeLevel.resolveSideKey(node, side)
  }
}

class Response {
  /** Code of a response option per side (rename aware, e.g. `4xx` -> `4XX`). */
  public static resolveSideCode(node: AnyOpenApiNode, side: LayoutSide): string {
    return NodeLevel.resolveSideKey(node, side)
  }

  /** Inner changes of the response only - empty for a wholly added / removed / inherited response. */
  public static takeChangesMarkerSummary(node: AnyOpenApiNode): NodeDescendantDiffsSummary {
    return isWithDiffs(node) ? node.descendantDiffsSummary : new Set()
  }
}

class Security {
  /**
   * Security toolbar row: a whole section add / remove, else a yellow row when any alternative
   * (toolbar option) was wholly added or removed - the option itself keeps its green / red border.
   */
  public static takeToolbarRowDiff(node: AnyOpenApiNode): ChangedPropertyMetaData | undefined {
    const options = fieldDiff(node, OPENAPI_SECURITY_ALTERNATIVES_DIFF_KEY)
    return Section.takeHeaderRowDiff(node) ?? (options ? OpenApiChangedPropertyMetaData.buildRowReplace(options.data) : undefined)
  }

}

/** One side of a scope row; absent = the scope does not exist on that side. */
export type OpenApiScopeRowSide = {
  readonly description: string
  readonly required: boolean
}

/** A 2nd-level security prop: one OAuth scope (or a required scope no flow declares). */
export type OpenApiScopeRow = {
  readonly name: string
  readonly origin?: OpenApiScopeRowSide
  readonly changed?: OpenApiScopeRowSide
  /** Row background: scope added / removed / description replaced (text highlighter), or the inherited whole-block diff. */
  readonly rowDiff?: ChangedPropertyMetaData
  /** `required` badge + side-exclusive `*`: the scope exists on both sides and its required status changed. */
  readonly requiredDiff?: ChangedPropertyMetaData
}

function requiredScopesOnSide(scheme: AnyOpenApiNode, side: LayoutSide): ReadonlySet<string> {
  return NodeLevel.isPresentOnSide(scheme, side)
    ? new Set(SecurityScheme.resolveRequiredScopesSideItems(scheme, side).map(item => item.text))
    : new Set()
}

function buildScopeRow(
  name: string,
  origin: OpenApiScopeRowSide | undefined,
  changed: OpenApiScopeRowSide | undefined,
  scopesDiff: Diff | undefined,
  requiredScopesDiff: Diff | undefined,
  inheritedDiff: ChangedPropertyMetaData | undefined,
): OpenApiScopeRow {
  let ownRowDiff: Diff | undefined
  if (scopesDiff && origin && !changed) {
    ownRowDiff = deriveDiff(scopesDiff, 'remove', origin.description, undefined)
  } else if (scopesDiff && !origin && changed) {
    ownRowDiff = deriveDiff(scopesDiff, 'add', undefined, changed.description)
  } else if (scopesDiff && origin && changed && origin.description !== changed.description) {
    ownRowDiff = deriveDiff(scopesDiff, 'replace', origin.description, changed.description)
  }
  const requiredChanged = !!origin && !!changed && origin.required !== changed.required
  const requiredDiff = requiredChanged && requiredScopesDiff
    ? deriveDiff(requiredScopesDiff, changed.required ? 'add' : 'remove', origin.required || undefined, changed.required || undefined)
    : undefined
  return {
    name,
    ...(origin ? { origin } : {}),
    ...(changed ? { changed } : {}),
    ...(ownRowDiff ? { rowDiff: OpenApiChangedPropertyMetaData.build(ownRowDiff) } : inheritedDiff ? { rowDiff: inheritedDiff } : {}),
    ...(requiredDiff ? { requiredDiff: OpenApiChangedPropertyMetaData.build(requiredDiff) } : {}),
  }
}

class SecurityScheme {
  public static takeFieldRowDiff(node: AnyOpenApiNode, field: string): ChangedPropertyMetaData | undefined {
    return NodeLevel.takeRowDiff(node, field)
  }

  /**
   * The gray type text's own diff (highlighter). A type change is shown on that text only: painting
   * the title row with it would make the origin side's title read the before TYPE instead of the name.
   */
  public static takeTypeTextDiff(node: AnyOpenApiNode): ChangedPropertyMetaData | undefined {
    return Section.takeHeaderRowDiff(node) ? undefined : fieldDiff(node, 'type')
  }

  /** apiKey prop label per side, from `in`: `Header parameter name`, `Query parameter name`, … */
  public static resolveParameterNameLabel(node: AnyOpenApiNode, side: LayoutSide): string {
    return OpenApiDisplayLabels.apiKeyParameterNameLabel(NodeLevel.resolveSideField(node, 'in', side))
  }

  /** apiKey prop row: a name change (highlighted value), else a location change (label only), else the whole card. */
  public static takeParameterNameRowDiff(node: AnyOpenApiNode): ChangedPropertyMetaData | undefined {
    const location = fieldDiff(node, 'in')
    return fieldDiff(node, 'parameterName')
      ?? (location ? OpenApiChangedPropertyMetaData.buildRowReplace(location.data) : undefined)
      ?? NodeLevel.takeWholeNodeDiff(node)
  }

  /** Whether the card exists on a side (no frame on the side where it was wholly added / removed). */
  public static isCardPresentOnSide(node: AnyOpenApiNode, side: LayoutSide): boolean {
    return NodeLevel.isPresentOnSide(node, side)
  }

  public static resolveRequiredScopesSideItems(node: AnyOpenApiNode, side: LayoutSide): OpenApiSideListItem[] {
    const value = node.value()
    const merged = toStringList(value && 'requiredScopes' in value ? value.requiredScopes : undefined)
    const diff = fieldDiff(node, 'requiredScopes')?.data
    if (!diff || isDiffRename(diff)) {
      return merged.map(text => ({ text }))
    }
    return sideItems(toStringList(sideValue(diff, ORIGIN_LAYOUT_SIDE)), toStringList(sideValue(diff, CHANGED_LAYOUT_SIDE)), side)
  }

  /**
   * oauth2: required scopes that no flow of the scheme declares (on either side). They are shown in a
   * trailing scope list, because flows mark required scopes inside their own scope lists.
   */
  public static resolveUndeclaredRequiredScopeRows(scheme: AnyOpenApiNode): OpenApiScopeRow[] {
    const declared = new Set<string>()
    for (const flow of scheme.childrenNodes()) {
      for (const side of BOTH_LAYOUT_SIDES) {
        Object.keys(OAuthFlow.resolveSideScopes(flow, side) ?? {}).forEach(name => declared.add(name))
      }
    }
    const origin = requiredScopesOnSide(scheme, ORIGIN_LAYOUT_SIDE)
    const changed = requiredScopesOnSide(scheme, CHANGED_LAYOUT_SIDE)
    const names = [...new Set([...changed, ...origin])].filter(name => !declared.has(name))
    const requiredScopesDiff = fieldDiff(scheme, 'requiredScopes')?.data
    return names.map(name => buildScopeRow(
      name,
      origin.has(name) ? { description: '', required: true } : undefined,
      changed.has(name) ? { description: '', required: true } : undefined,
      requiredScopesDiff,
      undefined,
      NodeLevel.takeWholeNodeDiff(scheme),
    ))
  }
}

class OAuthFlow {
  public static takeFieldRowDiff(node: AnyOpenApiNode, field: string): ChangedPropertyMetaData | undefined {
    return NodeLevel.takeRowDiff(node, field)
  }

  /** Scope map of the flow on a side; `undefined` where the flow does not exist. */
  public static resolveSideScopes(node: AnyOpenApiNode, side: LayoutSide): Record<string, string> | undefined {
    if (!NodeLevel.isPresentOnSide(node, side)) {
      return undefined
    }
    const diff = fieldDiff(node, 'scopes')?.data
    if (diff && !isDiffRename(diff)) {
      return toStringMap(sideValue(diff, side))
    }
    const value = node.value()
    return toStringMap(value && 'scopes' in value ? value.scopes : undefined)
  }

  /**
   * 2nd-level scope rows of a flow: the union of both sides' scopes (after-side order, removed
   * scopes after them), each with its per-side description and required status (from the scheme's
   * requirement), its row diff, and its required diff.
   */
  public static resolveScopeRows(flow: AnyOpenApiNode, scheme: AnyOpenApiNode): OpenApiScopeRow[] {
    const originScopes = OAuthFlow.resolveSideScopes(flow, ORIGIN_LAYOUT_SIDE)
    const changedScopes = OAuthFlow.resolveSideScopes(flow, CHANGED_LAYOUT_SIDE)
    const originRequired = requiredScopesOnSide(scheme, ORIGIN_LAYOUT_SIDE)
    const changedRequired = requiredScopesOnSide(scheme, CHANGED_LAYOUT_SIDE)
    const names = [...new Set([...Object.keys(changedScopes ?? {}), ...Object.keys(originScopes ?? {})])]
    const scopesDiff = fieldDiff(flow, 'scopes')?.data
    const requiredScopesDiff = fieldDiff(scheme, 'requiredScopes')?.data
    return names.map(name => buildScopeRow(
      name,
      originScopes && name in originScopes ? { description: originScopes[name], required: originRequired.has(name) } : undefined,
      changedScopes && name in changedScopes ? { description: changedScopes[name], required: changedRequired.has(name) } : undefined,
      scopesDiff && !isDiffRename(scopesDiff) ? scopesDiff : undefined,
      requiredScopesDiff && !isDiffRename(requiredScopesDiff) ? requiredScopesDiff : undefined,
      NodeLevel.takeWholeNodeDiff(flow),
    ))
  }
}

/**
 * Row-level diff accessors of the OpenAPI tree. Viewer containers read these instead of
 * `node.diffs[...]`, so row semantics stay in the data layer.
 * Design: docs/design/openapi/features/diffs.md -> "Row diff accessors".
 */
export class OpenApiRowDiffs {
  public static readonly NodeLevel = NodeLevel
  public static readonly Section = Section
  public static readonly Operation = Operation
  public static readonly RequestBody = RequestBody
  public static readonly MediaType = MediaType
  public static readonly Response = Response
  public static readonly Security = Security
  public static readonly SecurityScheme = SecurityScheme
  public static readonly OAuthFlow = OAuthFlow
}
