import { DiffMetaKeys } from "@apihub/next-data-model/building-service/async-api/tree-with-diffs/diffs-data-aggregators/node-diffs/factory";
import { NodeDiffs } from "@apihub/next-data-model/model/abstract/tree-with-diffs/tree-node.interface";

export abstract class AbstractNodeDiffsAggregator<
  V extends object | null = object | null,
> {
  public abstract aggregate(value: V, diffsMetaKeys: DiffMetaKeys): NodeDiffs<V> | undefined;
}