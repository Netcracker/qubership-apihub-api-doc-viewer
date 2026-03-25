import { AbstractNodeDiffsSeveritiesAggregator } from "@apihub/next-data-model/building-service/abstract/tree-with-diffs/node-diffs-data/node-diffs-severities-aggregator";
import { AsyncApiTreeNodeKind } from "@apihub/next-data-model/model/async-api/types/node-kind";
import { AsyncApiNodeDiffsSeveritiesAggregatorKindAny } from "./kind-any";

export class AsyncApiNodeDiffsSeveritiesAggregatorFactory {
  private static readonly instances = new Map<AsyncApiTreeNodeKind | null, AbstractNodeDiffsSeveritiesAggregator>();

  public static instance(
    kind: AsyncApiTreeNodeKind,
  ): AbstractNodeDiffsSeveritiesAggregator {
    switch (kind) {
      default:
        return new AsyncApiNodeDiffsSeveritiesAggregatorKindAny();
    }
  }
}