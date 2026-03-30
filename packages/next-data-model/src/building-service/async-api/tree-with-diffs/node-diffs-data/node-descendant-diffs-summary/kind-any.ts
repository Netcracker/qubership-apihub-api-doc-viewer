import { AbstractNodeDescendantsDiffsSummaryAggregator } from "@apihub/next-data-model/building-service/abstract/tree-with-diffs/node-diffs-data/node-descendants-diffs-summary-aggregator";
import { NodeDescendantDiffs, NodeDescendantDiffsSummary } from "@apihub/next-data-model/model/abstract/tree-with-diffs/tree-node.interface";

export class AsyncApiNodeDescendantDiffsSummaryAggregatorKindAny extends AbstractNodeDescendantsDiffsSummaryAggregator {
  public aggregate(
    nodeDescendantDiffs: NodeDescendantDiffs,
  ): NodeDescendantDiffsSummary | undefined {
    const summary: NodeDescendantDiffsSummary = new Set();
    for (const diff of Object.values(nodeDescendantDiffs)) {
      if (!diff) {
        continue;
      }
      const diffType = diff.data.type;
      summary.add(diffType);
    }
    return summary;
  }
}