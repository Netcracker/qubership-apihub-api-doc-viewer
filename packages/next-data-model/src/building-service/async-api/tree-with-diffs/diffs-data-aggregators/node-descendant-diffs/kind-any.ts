import { AbstractNodeDescendantsDiffsAggregator } from "@apihub/next-data-model/building-service/abstract/tree-with-diffs/diffs-data-aggregation/abstract-node-descendants-diffs-aggregator";
import { DiffType } from "@netcracker/qubership-apihub-api-diff";
import { DiffMetaKeys } from "../node-diffs/factory";

export class AsyncApiNodeDescendantDiffsAggregatorKindAny extends AbstractNodeDescendantsDiffsAggregator {
  public aggregate(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    value: object | null,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    diffsMetaKeys: DiffMetaKeys,
  ): Set<DiffType> | undefined {
    return undefined;
  }
}