import { isDiffAdd, isDiffRemove, isDiffRename } from "@netcracker/qubership-apihub-api-diff"
import { NodeDescendantDiffs } from "../../../../../model/abstract/tree-with-diffs/tree-node.interface"
import { OpenApiChangedPropertyMetaData } from "../../../../../model/openapi/tree-with-diffs/changed-property-metadata"
import { isObjective, takeIfDiffsRecord } from "../../../../../utilities"
import { DiffMetaKeys } from "../../../../abstract/tree-with-diffs/node-diffs-data/diff-meta-keys"
import { AbstractNodeDescendantsDiffsAggregator } from "../../../../abstract/tree-with-diffs/node-diffs-data/node-descendants-diffs-aggregator"

/**
 * Child diffs keyed by child key: the transformer writes every child-section / option / scheme
 * add, remove, and rename into the parent's own record under the child's key.
 */
export class OpenApiNodeDescendantDiffsAggregatorKindAny extends AbstractNodeDescendantsDiffsAggregator {
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
        descendantDiffs[key] = OpenApiChangedPropertyMetaData.build(diff)
      }
    }
    return descendantDiffs
  }
}
