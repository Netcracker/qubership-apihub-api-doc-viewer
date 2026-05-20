import { AbstractNodeDiffsAggregator } from "@apihub/next-data-model/building-service/abstract/tree-with-diffs/node-diffs-data/node-diffs-aggregator";
import { AsyncApiTreeNodeKind, AsyncApiTreeNodeKinds } from "@apihub/next-data-model/model/async-api/types/node-kind";
import { AsyncApiTreeNodeMeta } from "@apihub/next-data-model/model/async-api/types/node-meta";
import { AsyncApiTreeNodeValue } from "@apihub/next-data-model/model/async-api/types/node-value";
import { AsyncApiNodeDiffsAggregatorKindAny } from "./kind-any";
import { AsyncApiNodeDiffsAggregatorKindBinding } from "./kind-binding";
import { AsyncApiNodeDiffsAggregatorKindMessage } from "./kind-message";
import { AsyncApiNodeDiffsAggregatorKindServer } from "./kind-server";

export type DiffMetaKeys = {
  diffsMetaKey: symbol;
  aggregatedDiffsMetaKey: symbol;
}

export class AsyncApiNodeDiffsAggregatorFactory {
  private static readonly instances = new Map<
    AsyncApiTreeNodeKind | null,
    AbstractNodeDiffsAggregator<
      AsyncApiTreeNodeValue<AsyncApiTreeNodeKind> | null,
      AsyncApiTreeNodeKind,
      AsyncApiTreeNodeMeta,
      AsyncApiTreeNodeValue<AsyncApiTreeNodeKind> | null
    >
  >();

  public static instance(
    kind: AsyncApiTreeNodeKind,
  ): AbstractNodeDiffsAggregator<
    AsyncApiTreeNodeValue<AsyncApiTreeNodeKind> | null,
    AsyncApiTreeNodeKind,
    AsyncApiTreeNodeMeta,
    AsyncApiTreeNodeValue<AsyncApiTreeNodeKind> | null
  > {
    switch (kind) {
      case AsyncApiTreeNodeKinds.BINDING:
        if (!this.instances.has(AsyncApiTreeNodeKinds.BINDING)) {
          this.instances.set(AsyncApiTreeNodeKinds.BINDING, new AsyncApiNodeDiffsAggregatorKindBinding());
        }
        return this.instances.get(AsyncApiTreeNodeKinds.BINDING)!;
      case AsyncApiTreeNodeKinds.MESSAGE:
        if (!this.instances.has(AsyncApiTreeNodeKinds.MESSAGE)) {
          this.instances.set(AsyncApiTreeNodeKinds.MESSAGE, new AsyncApiNodeDiffsAggregatorKindMessage());
        }
        return this.instances.get(AsyncApiTreeNodeKinds.MESSAGE)!;
      case AsyncApiTreeNodeKinds.SERVER:
        if (!this.instances.has(AsyncApiTreeNodeKinds.SERVER)) {
          this.instances.set(AsyncApiTreeNodeKinds.SERVER, new AsyncApiNodeDiffsAggregatorKindServer());
        }
        return this.instances.get(AsyncApiTreeNodeKinds.SERVER)!;
      default:
        if (!this.instances.has(null)) {
          this.instances.set(null, new AsyncApiNodeDiffsAggregatorKindAny());
        }
        return this.instances.get(null)!;
    }
  }
}