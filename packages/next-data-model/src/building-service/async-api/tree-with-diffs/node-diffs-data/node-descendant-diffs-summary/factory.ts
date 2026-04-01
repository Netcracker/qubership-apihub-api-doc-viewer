import { AbstractNodeDescendantsDiffsSummaryAggregator } from "@apihub/next-data-model/building-service/abstract/tree-with-diffs/node-diffs-data/node-descendants-diffs-summary-aggregator";
import { AsyncApiTreeNodeKind } from "@apihub/next-data-model/model/async-api/types/node-kind";
import { AsyncApiNodeDescendantDiffsSummaryAggregatorKindAny } from "./kind-any";

export class AsyncApiNodeDescendantDiffsAggregatorFactory {
  private static readonly instances = new Map<AsyncApiTreeNodeKind | null, AbstractNodeDescendantsDiffsSummaryAggregator>();

  public static instance(
    kind: AsyncApiTreeNodeKind,
  ): AbstractNodeDescendantsDiffsSummaryAggregator {
    switch (kind) {
      default:
        if (!this.instances.has(null)) {
          const instance = new AsyncApiNodeDescendantDiffsSummaryAggregatorKindAny();
          this.instances.set(null, instance);
        }
        return this.instances.get(null)!;
    }
  }
}
