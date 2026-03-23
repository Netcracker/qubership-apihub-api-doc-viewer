import { AbstractNodeDescendantsDiffsSummaryAggregator } from "@apihub/next-data-model/building-service/abstract/tree-with-diffs/diffs-data-aggregation/abstract-node-descendants-diffs-summary-aggregator";
import { NodeDescendantDiffsSummary } from "@apihub/next-data-model/model/abstract/tree-with-diffs/tree-node.interface";
import { DiffMetaKeys } from "../node-diffs/factory";

export class AsyncApiNodeDescendantDiffsSummaryAggregatorKindAny extends AbstractNodeDescendantsDiffsSummaryAggregator {
  public aggregate(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    value: object | null,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    diffsMetaKeys: DiffMetaKeys,
  ): NodeDescendantDiffsSummary | undefined {
    return undefined;
  }
}