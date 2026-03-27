import { NodeDiffs, NodeDiffsSeverities } from "@apihub/next-data-model/model/abstract/tree-with-diffs/tree-node.interface";

export abstract class AbstractNodeDiffsSeveritiesAggregator<
  V extends object | null = object | null,
> {
  public abstract aggregate(nodeDiffs: NodeDiffs<V>): NodeDiffsSeverities | undefined;
}
