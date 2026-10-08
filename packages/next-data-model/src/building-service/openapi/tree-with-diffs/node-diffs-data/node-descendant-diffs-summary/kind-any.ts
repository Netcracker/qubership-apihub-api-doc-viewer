import { isDiffAdd, isDiffRemove } from "@netcracker/qubership-apihub-api-diff"
import {
  NODE_LEVEL_DIFF_KEY,
  NodeDescendantDiffs,
  NodeDescendantDiffsSummary,
  NodeDiffs,
} from "../../../../../model/abstract/tree-with-diffs/tree-node.interface"
import { takeAggregatedDiffs } from "../../../../abstract/tree-with-diffs/node-diffs-data/aggregated-diff-types"
import { DiffMetaKeys } from "../../../../abstract/tree-with-diffs/node-diffs-data/diff-meta-keys"
import { AbstractNodeDescendantsDiffsSummaryAggregator } from "../../../../abstract/tree-with-diffs/node-diffs-data/node-descendants-diffs-summary-aggregator"

/**
 * Forward summary from the document rollup (`aggregatedDiffsMetaKey`) of the TRANSFORMED node value:
 * every displayed change below the node, nested schemas and extensions included. A node that is
 * wholly added / removed (own or inherited) gets an empty summary - changes inferred from a whole
 * change are not "changes inside" (response-code change markers,
 * docs/design/openapi/entities/responses.md).
 */
export class OpenApiNodeDescendantDiffsSummaryAggregatorKindAny extends AbstractNodeDescendantsDiffsSummaryAggregator {
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
