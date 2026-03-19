import { DiffMetaKeys } from "@apihub/next-data-model/building-service/async-api/tree-with-diffs/diffs-data-aggregators/node-diffs/factory";
import { DiffType } from "@netcracker/qubership-apihub-api-diff";

export abstract class AbstractNodeDescendantsDiffsAggregator<
  V extends object | null = object | null,
> {
  public abstract aggregate(value: V, diffsMetaKeys: DiffMetaKeys): Set<DiffType> | undefined;
}
