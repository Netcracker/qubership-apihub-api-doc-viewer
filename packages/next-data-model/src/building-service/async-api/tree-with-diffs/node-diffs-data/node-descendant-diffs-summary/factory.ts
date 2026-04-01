import { AbstractNodeDescendantsDiffsSummaryAggregator } from "@apihub/next-data-model/building-service/abstract/tree-with-diffs/node-diffs-data/node-descendants-diffs-summary-aggregator";
import { AsyncApiTreeNodeKind, AsyncApiTreeNodeKinds } from "@apihub/next-data-model/model/async-api/types/node-kind";
import { AsyncApiNodeDescendantDiffsSummaryAggregatorKindAny } from "./kind-any";
import { AsyncApiNodeDescendantDiffsSummaryAggregatorKindBinding } from "./kind-binding";
import { AsyncApiNodeDescendantDiffsSummaryAggregatorKindChannel } from "./kind-message-channel";
import { AsyncApiNodeDescendantDiffsSummaryAggregatorKindContent } from "./kind-message-content";
import { AsyncApiNodeDescendantDiffsSummaryAggregatorKindOperation } from "./kind-message-operation";

export class AsyncApiNodeDescendantDiffsAggregatorFactory {
  private static readonly instances = new Map<AsyncApiTreeNodeKind | null, AbstractNodeDescendantsDiffsSummaryAggregator>();

  public static instance(
    kind: AsyncApiTreeNodeKind,
  ): AbstractNodeDescendantsDiffsSummaryAggregator {
    switch (kind) {
      case AsyncApiTreeNodeKinds.MESSAGE_CONTENT:
        if (!this.instances.has(AsyncApiTreeNodeKinds.MESSAGE_CONTENT)) {
          this.instances.set(AsyncApiTreeNodeKinds.MESSAGE_CONTENT, new AsyncApiNodeDescendantDiffsSummaryAggregatorKindContent());
        }
        return this.instances.get(AsyncApiTreeNodeKinds.MESSAGE_CONTENT)!;
      case AsyncApiTreeNodeKinds.MESSAGE_CHANNEL:
        if (!this.instances.has(AsyncApiTreeNodeKinds.MESSAGE_CHANNEL)) {
          this.instances.set(AsyncApiTreeNodeKinds.MESSAGE_CHANNEL, new AsyncApiNodeDescendantDiffsSummaryAggregatorKindChannel());
        }
        return this.instances.get(AsyncApiTreeNodeKinds.MESSAGE_CHANNEL)!;
      case AsyncApiTreeNodeKinds.MESSAGE_OPERATION:
        if (!this.instances.has(AsyncApiTreeNodeKinds.MESSAGE_OPERATION)) {
          this.instances.set(AsyncApiTreeNodeKinds.MESSAGE_OPERATION, new AsyncApiNodeDescendantDiffsSummaryAggregatorKindOperation());
        }
        return this.instances.get(AsyncApiTreeNodeKinds.MESSAGE_OPERATION)!;
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
