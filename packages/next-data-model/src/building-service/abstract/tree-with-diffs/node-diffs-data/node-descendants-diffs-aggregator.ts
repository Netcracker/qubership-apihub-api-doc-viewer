import { DiffMetaKeys } from "@apihub/next-data-model/building-service/async-api/tree-with-diffs/node-diffs-data/node-diffs/factory";
import { NodeDescendantDiffs } from "@apihub/next-data-model/model/abstract/tree-with-diffs/tree-node.interface";

export abstract class AbstractNodeDescendantsDiffsAggregator<
  V extends object | null = object | null,
> {
  public abstract aggregate(value: V, diffsMetaKeys: DiffMetaKeys): NodeDescendantDiffs | undefined;
}
