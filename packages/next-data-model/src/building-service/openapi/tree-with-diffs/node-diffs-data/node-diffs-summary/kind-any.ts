import { NodeDiffs, NodeDiffsSummary } from "../../../../../model/abstract/tree-with-diffs/tree-node.interface"
import { AbstractNodeDiffsSummaryAggregator } from "../../../../abstract/tree-with-diffs/node-diffs-data/node-diffs-summary-aggregator"

export class OpenApiNodeDiffsSummaryAggregatorKindAny extends AbstractNodeDiffsSummaryAggregator {
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
