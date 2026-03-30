import { NodeDescendantDiffs, NodeDescendantDiffsSummary } from "@apihub/next-data-model/model/abstract/tree-with-diffs/tree-node.interface";

export abstract class AbstractNodeDescendantsDiffsSummaryAggregator {
  public abstract aggregate(
    nodeDescendantDiffs: NodeDescendantDiffs,
  ): NodeDescendantDiffsSummary | undefined;
}
