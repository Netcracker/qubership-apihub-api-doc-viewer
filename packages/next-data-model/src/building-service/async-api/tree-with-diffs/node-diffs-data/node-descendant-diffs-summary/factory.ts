import { AbstractNodeDescendantsDiffsSummaryAggregator } from "@apihub/next-data-model/building-service/abstract/tree-with-diffs/node-diffs-data/node-descendants-diffs-summary-aggregator";
import { AsyncApiTreeNodeKind, AsyncApiTreeNodeKinds } from "@apihub/next-data-model/model/async-api/types/node-kind";
import { AsyncApiNodeDescendantDiffsSummaryAggregatorKindAny } from "./kind-any";
import { AsyncApiNodeDescendantDiffsSummaryAggregatorKindBinding } from "./kind-binding";

export class AsyncApiNodeDescendantDiffsAggregatorFactory {
  private static readonly instances = new Map<AsyncApiTreeNodeKind | null, AbstractNodeDescendantsDiffsSummaryAggregator>();

  public static instance(
    kind: AsyncApiTreeNodeKind,
  ): AbstractNodeDescendantsDiffsSummaryAggregator {
    switch (kind) {
      case AsyncApiTreeNodeKinds.BINDING:
        if (!this.instances.has(AsyncApiTreeNodeKinds.BINDING)) {
          this.instances.set(AsyncApiTreeNodeKinds.BINDING, new AsyncApiNodeDescendantDiffsSummaryAggregatorKindBinding());
        }
        return this.instances.get(AsyncApiTreeNodeKinds.BINDING)!;
      default:
        if (!this.instances.has(null)) {
          const instance = new AsyncApiNodeDescendantDiffsSummaryAggregatorKindAny();
          this.instances.set(null, instance);
        }
        return this.instances.get(null)!;
    }
  }
}
