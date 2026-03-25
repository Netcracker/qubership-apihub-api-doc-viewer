import { AbstractNodeDiffsAggregator } from "@apihub/next-data-model/building-service/abstract/tree-with-diffs/node-diffs-data/node-diffs-aggregator";
import { AsyncApiTreeNodeKind, AsyncApiTreeNodeKinds } from "@apihub/next-data-model/model/async-api/types/node-kind";
import { AsyncApiNodeDiffsAggregatorKindAny } from "./kind-any";
import { AsyncApiNodeDiffsAggregatorKindServer } from "./kind-server";

export type DiffMetaKeys = {
  diffsMetaKey: symbol;
  aggregatedDiffsMetaKey: symbol;
}

export class AsyncApiNodeDiffsAggregatorFactory {
  private static readonly instances = new Map<AsyncApiTreeNodeKind | null, AbstractNodeDiffsAggregator>();

  public static instance(
    kind: AsyncApiTreeNodeKind,
  ): AbstractNodeDiffsAggregator {
    switch (kind) {
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