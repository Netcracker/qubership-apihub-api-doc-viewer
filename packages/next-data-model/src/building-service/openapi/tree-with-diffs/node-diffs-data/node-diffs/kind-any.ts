import { Diff, isDiffAdd, isDiffRemove } from "@netcracker/qubership-apihub-api-diff"
import { ITreeNodeWithDiffs, NODE_LEVEL_DIFF_KEY, NodeDiffs } from "../../../../../model/abstract/tree-with-diffs/tree-node.interface"
import { OpenApiChangedPropertyMetaData } from "../../../../../model/openapi/tree-with-diffs/changed-property-metadata"
import { OpenApiTreeNodeKind } from "../../../../../model/openapi/types/node-kind"
import { OpenApiTreeNodeMeta } from "../../../../../model/openapi/types/node-meta"
import { OpenApiAnyTreeNodeValue } from "../../../../../model/openapi/types/node-value"
import { isObjective, takeIfDiffsRecord } from "../../../../../utilities"
import { NodeKey } from "../../../../../utility-types"
import { DiffMetaKeys } from "../../../../abstract/tree-with-diffs/node-diffs-data/diff-meta-keys"
import { AbstractNodeDiffsAggregator } from "../../../../abstract/tree-with-diffs/node-diffs-data/node-diffs-aggregator"
import { OPENAPI_NODE_VALUE_PROPS } from "../../../tree/node-data/builder"

type OpenApiValue = OpenApiAnyTreeNodeValue | null
export type OpenApiTreeNodeWithDiffsForAggregation = ITreeNodeWithDiffs<OpenApiValue, OpenApiTreeNodeKind, OpenApiTreeNodeMeta, OpenApiValue>

/**
 * Inheritance + node-level diff + field diffs of one kind.
 * 1. A wholly added / removed parent -> inherited, stop.
 * 2. Else the parent's descendant diff for this key (option / section / scheme add, remove, rename).
 *    Add / remove stop; a rename continues (the node's own field diffs still apply).
 * 3. Field diffs: only the value props of the kind - the transformer keeps child-section diffs in
 *    the same record, they are not fields.
 * One class serves every kind: all OpenAPI kind-specific diff semantics are prepared by
 * `OpenApiSpecWithDiffsTransformer`; row-level composition lives in `OpenApiRowDiffs`.
 */
export class OpenApiNodeDiffsAggregatorKindAny extends AbstractNodeDiffsAggregator<OpenApiValue, OpenApiTreeNodeKind, OpenApiTreeNodeMeta, OpenApiValue> {
  constructor(protected readonly kind: OpenApiTreeNodeKind) {
    super()
  }

  public aggregate(
    crawlValue: object | boolean | null,
    diffsMetaKeys: DiffMetaKeys,
    nodeKey: NodeKey,
    parentNode?: OpenApiTreeNodeWithDiffsForAggregation,
    containerNode?: OpenApiTreeNodeWithDiffsForAggregation,
  ): NodeDiffs<OpenApiValue> | undefined {
    const nodeDiffs: NodeDiffs<OpenApiValue> = {}
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
      nodeDiffs[NODE_LEVEL_DIFF_KEY] = OpenApiChangedPropertyMetaData.build(rootDiff)
      if (isDiffAdd(rootDiff) || isDiffRemove(rootDiff)) {
        return nodeDiffs
      }
    }
    this.aggregateFields(record, nodeDiffs)
    return nodeDiffs
  }

  protected aggregateFields(record: Partial<Record<string, Diff>>, nodeDiffs: NodeDiffs<OpenApiValue>): void {
    for (const key of OPENAPI_NODE_VALUE_PROPS[this.kind]) {
      const diff = record[key]
      if (diff) {
        // Keys come from the kind's value-prop list, i.e. they are keys of the node value.
        Reflect.set(nodeDiffs, key, OpenApiChangedPropertyMetaData.build(diff))
      }
    }
  }
}
