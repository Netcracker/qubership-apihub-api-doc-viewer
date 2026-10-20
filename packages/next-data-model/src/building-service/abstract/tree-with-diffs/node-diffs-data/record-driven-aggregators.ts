import { Diff, isDiffAdd, isDiffRemove, isDiffRename } from "@netcracker/qubership-apihub-api-diff"
import { RowChangedPropertyMetaData } from "../../../../model/abstract/tree-with-diffs/row-changed-property-metadata"
import {
  ITreeNodeWithDiffs,
  NODE_LEVEL_DIFF_KEY,
  NodeDescendantDiffs,
  NodeDescendantDiffsSummary,
  NodeDiffs,
  NodeDiffsSeverities,
  NodeDiffsSeverity,
  NodeDiffsSeverityPlacemennt,
  NodeDiffsSummary,
} from "../../../../model/abstract/tree-with-diffs/tree-node.interface"
import { isObjective, takeIfDiffsRecord } from "../../../../utilities"
import { NodeKey } from "../../../../utility-types"
import { takeAggregatedDiffs } from "./aggregated-diff-types"
import { DiffMetaKeys } from "./diff-meta-keys"
import { AbstractNodeDescendantsDiffsAggregator } from "./node-descendants-diffs-aggregator"
import { AbstractNodeDescendantsDiffsSummaryAggregator } from "./node-descendants-diffs-summary-aggregator"
import { AbstractNodeDiffsAggregator } from "./node-diffs-aggregator"
import { AbstractNodeDiffsSeveritiesAggregator } from "./node-diffs-severities-aggregator"
import { AbstractNodeDiffsSummaryAggregator } from "./node-diffs-summary-aggregator"

/**
 * Aggregators for "record-driven" node kinds: every kind-specific diff semantic (presence, synthetic
 * whole-section diffs, option rows, side-reading) is prepared once by a with-diffs spec transformer
 * as plain diff records on the crawl input; these only read the records and map them to rows. Used
 * by every OpenAPI kind and by the Security section kinds of every API type.
 */

/** A field diff badges one row, or several alternative rows (the viewer reads the one it renders). */
export type RecordDrivenFieldPlacements = Readonly<Record<string, NodeDiffsSeverityPlacemennt | readonly NodeDiffsSeverityPlacemennt[]>>

/**
 * Inheritance + node-level diff + field diffs of one kind.
 * 1. A wholly added / removed owner -> inherited, stop.
 * 2. Else the owner's descendant diff for this key (option / section / scheme add, remove, rename).
 *    Add / remove stop; a rename continues (the node's own field diffs still apply).
 * 3. The node's own record: its root diff (`''`), then its fields - `fieldKeys` only (the value
 *    props of the kind and its synthetic row keys); child-section diffs in the same record are not fields.
 */
export class RecordDrivenNodeDiffsAggregator<
  V extends object | boolean | null,
  K extends string,
  M extends object,
> extends AbstractNodeDiffsAggregator<V, K, M, V> {
  constructor(protected readonly fieldKeys: readonly string[]) {
    super()
  }

  public aggregate(
    crawlValue: object | boolean | null,
    diffsMetaKeys: DiffMetaKeys,
    nodeKey: NodeKey,
    parentNode?: ITreeNodeWithDiffs<V, K, M, V>,
    containerNode?: ITreeNodeWithDiffs<V, K, M, V>,
  ): NodeDiffs<V> | undefined {
    const nodeDiffs: NodeDiffs<V> = {}
    const owner = containerNode ?? parentNode
    if (owner) {
      const ownerWholeDiff = owner.diffs[NODE_LEVEL_DIFF_KEY]
      if (ownerWholeDiff && (isDiffAdd(ownerWholeDiff.data) || isDiffRemove(ownerWholeDiff.data))) {
        nodeDiffs[NODE_LEVEL_DIFF_KEY] = { ...ownerWholeDiff, inherited: true }
        return nodeDiffs
      }
      const ownDiff = owner.descendantDiffs[nodeKey]
      if (ownDiff) {
        nodeDiffs[NODE_LEVEL_DIFF_KEY] = ownDiff
        if (isDiffAdd(ownDiff.data) || isDiffRemove(ownDiff.data)) {
          return nodeDiffs
        }
      }
    }

    const record = isObjective(crawlValue) ? takeIfDiffsRecord(crawlValue[diffsMetaKeys.diffsMetaKey]) : undefined
    if (!record) {
      return nodeDiffs
    }
    const rootDiff = record[NODE_LEVEL_DIFF_KEY]
    if (rootDiff) {
      nodeDiffs[NODE_LEVEL_DIFF_KEY] = RowChangedPropertyMetaData.build(rootDiff)
      if (isDiffAdd(rootDiff) || isDiffRemove(rootDiff)) {
        return nodeDiffs
      }
    }
    for (const key of this.fieldKeys) {
      const diff = record[key]
      if (diff) {
        // Keys come from the kind's value-prop list (keys of the node value) or its synthetic row keys.
        Reflect.set(nodeDiffs, key, RowChangedPropertyMetaData.build(diff))
      }
    }
    return nodeDiffs
  }
}

/**
 * Child diffs keyed by child key: the transformer writes every child-section / option / scheme
 * add, remove, and rename into the parent's own record under the child's key.
 */
export class RecordDrivenNodeDescendantDiffsAggregator extends AbstractNodeDescendantsDiffsAggregator {
  public aggregate(value: object | boolean | null, diffsMetaKeys: DiffMetaKeys): NodeDescendantDiffs | undefined {
    const record = isObjective(value) ? takeIfDiffsRecord(value[diffsMetaKeys.diffsMetaKey]) : undefined
    if (!record) {
      return undefined
    }
    const descendantDiffs: NodeDescendantDiffs = {}
    for (const [key, diff] of Object.entries(record)) {
      if (key === '' || !diff) {
        continue
      }
      if (isDiffAdd(diff) || isDiffRemove(diff) || isDiffRename(diff)) {
        descendantDiffs[key] = RowChangedPropertyMetaData.build(diff)
      }
    }
    return descendantDiffs
  }
}

/**
 * Severity per row placement: a whole add / remove badges every row the kind renders
 * (`nodePlacements`, default the title row); else the node-level diff badges the title row and each
 * field diff its own row(s) (`fieldPlacements`), the strongest diff winning a shared placement.
 */
export class RecordDrivenNodeDiffsSeveritiesAggregator<V extends object | boolean | null> extends AbstractNodeDiffsSeveritiesAggregator<V> {
  constructor(
    private readonly fieldPlacements: RecordDrivenFieldPlacements = {},
    private readonly nodePlacements: readonly NodeDiffsSeverityPlacemennt[] = [NodeDiffsSeverityPlacemennt.TitleRow],
  ) {
    super()
  }

  public aggregate(nodeDiffs: NodeDiffs<V>): NodeDiffsSeverities | undefined {
    const severities: NodeDiffsSeverities = {}
    const wholeDiff = nodeDiffs[NODE_LEVEL_DIFF_KEY]?.data
    if (wholeDiff && (isDiffAdd(wholeDiff) || isDiffRemove(wholeDiff))) {
      for (const placement of this.nodePlacements) {
        severities[placement] = RecordDrivenNodeDiffsSeveritiesAggregator.toSeverity(wholeDiff)
      }
      return severities
    }
    if (wholeDiff) {
      severities[NodeDiffsSeverityPlacemennt.TitleRow] = RecordDrivenNodeDiffsSeveritiesAggregator.toSeverity(wholeDiff)
    }
    for (const [field, fieldPlacements] of Object.entries(this.fieldPlacements)) {
      const diff: Diff | undefined = Reflect.get(nodeDiffs, field)?.data
      if (!diff) {
        continue
      }
      for (const placement of typeof fieldPlacements === 'string' ? [fieldPlacements] : fieldPlacements) {
        const current = severities[placement]
        if (!current || AbstractNodeDiffsSeveritiesAggregator.compareDiffTypes(diff.type, current.type) > 0) {
          severities[placement] = RecordDrivenNodeDiffsSeveritiesAggregator.toSeverity(diff)
        }
      }
    }
    return Object.keys(severities).length > 0 ? severities : undefined
  }

  private static toSeverity(diff: Diff): NodeDiffsSeverity {
    const causedAt = isDiffAdd(diff)
      ? diff.afterDeclarationPaths[0]
      : 'beforeDeclarationPaths' in diff ? diff.beforeDeclarationPaths[0] : undefined
    return { type: diff.type, causedAt: causedAt ?? [] }
  }
}

/** The diff types of the node's own diffs. */
export class RecordDrivenNodeDiffsSummaryAggregator extends AbstractNodeDiffsSummaryAggregator {
  public aggregate(nodeDiffs?: NodeDiffs): NodeDiffsSummary | undefined {
    const summary: NodeDiffsSummary = new Set()
    for (const diff of Object.values(nodeDiffs ?? {})) {
      if (diff) {
        summary.add(diff.data.type)
      }
    }
    return summary
  }
}

/**
 * Forward summary from the document rollup (`aggregatedDiffsMetaKey`) of the TRANSFORMED node value:
 * every displayed change below the node. A node that is wholly added / removed (own or inherited)
 * gets an empty summary - changes inferred from a whole change are not "changes inside" (selector
 * option change markers).
 */
export class RecordDrivenNodeDescendantDiffsSummaryAggregator extends AbstractNodeDescendantsDiffsSummaryAggregator {
  public aggregate(
    nodeDiffs?: NodeDiffs,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    nodeDescendantDiffs?: NodeDescendantDiffs,
    crawlValue?: object | null,
    diffsMetaKeys?: DiffMetaKeys,
  ): NodeDescendantDiffsSummary | undefined {
    const summary: NodeDescendantDiffsSummary = new Set()
    const wholeDiff = nodeDiffs?.[NODE_LEVEL_DIFF_KEY]?.data
    if (wholeDiff && (isDiffAdd(wholeDiff) || isDiffRemove(wholeDiff))) {
      return summary
    }
    for (const diff of takeAggregatedDiffs(crawlValue, diffsMetaKeys)) {
      if (diff !== wholeDiff) {
        summary.add(diff.type)
      }
    }
    return summary
  }
}
