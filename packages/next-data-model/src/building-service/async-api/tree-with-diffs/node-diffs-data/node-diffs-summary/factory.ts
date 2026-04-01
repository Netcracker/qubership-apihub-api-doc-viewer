import { AbstractNodeDiffsSummaryAggregator } from "@apihub/next-data-model/building-service/abstract/tree-with-diffs/node-diffs-data/node-diffs-summary-aggregator";
import { AsyncApiTreeNodeKind, AsyncApiTreeNodeKinds } from "@apihub/next-data-model/model/async-api/types/node-kind";
import { AsyncApiNodeDiffsSummaryKindAny } from "./kind-any";
import { AsyncApiNodeDiffsSummaryKindBinding } from "./kind-binding";
import { AsyncApiNodeDiffsSummaryKindMessage } from "./kind-message";

export class AsyncApiNodeDiffsSummaryAggregatorFactory {

  public static instance(kind: AsyncApiTreeNodeKind): AbstractNodeDiffsSummaryAggregator {
    switch (kind) {
      case AsyncApiTreeNodeKinds.MESSAGE:
        return new AsyncApiNodeDiffsSummaryKindMessage()
      case AsyncApiTreeNodeKinds.BINDING:
        return new AsyncApiNodeDiffsSummaryKindBinding()
      default:
        return new AsyncApiNodeDiffsSummaryKindAny()
    }
  }
}