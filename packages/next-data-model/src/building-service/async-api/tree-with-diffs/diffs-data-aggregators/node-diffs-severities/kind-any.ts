import { AbstractNodeDiffsSeveritiesAggregator } from "@apihub/next-data-model/building-service/abstract/tree-with-diffs/node-diffs-data/node-diffs-severities-aggregator";
import { NodeDiffsSeverities } from "@apihub/next-data-model/model/abstract/tree-with-diffs/tree-node.interface";
import { DiffMetaKeys } from "../node-diffs/factory";

export class AsyncApiNodeDiffsSeveritiesAggregatorKindAny extends AbstractNodeDiffsSeveritiesAggregator {
  public aggregate(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    value: object | null,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    diffsMetaKeys: DiffMetaKeys,
  ): NodeDiffsSeverities | undefined {
    return undefined;
  }
}