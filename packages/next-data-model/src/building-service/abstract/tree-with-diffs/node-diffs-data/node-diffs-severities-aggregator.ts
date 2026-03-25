import { DiffMetaKeys } from "@apihub/next-data-model/building-service/async-api/tree-with-diffs/node-diffs-data/node-diffs/factory";
import { NodeDiffsSeverities } from "@apihub/next-data-model/model/abstract/tree-with-diffs/tree-node.interface";

export abstract class AbstractNodeDiffsSeveritiesAggregator<
  V extends object | null = object | null,
> {
  public abstract aggregate(value: V, diffsMetaKeys: DiffMetaKeys): NodeDiffsSeverities | undefined;
}
