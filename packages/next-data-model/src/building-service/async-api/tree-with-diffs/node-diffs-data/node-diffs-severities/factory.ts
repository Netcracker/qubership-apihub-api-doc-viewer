import { AbstractNodeDiffsSeveritiesAggregator } from "@apihub/next-data-model/building-service/abstract/tree-with-diffs/node-diffs-data/node-diffs-severities-aggregator";
import { AsyncApiTreeNodeKind } from "@apihub/next-data-model/model/async-api/types/node-kind";
import { AsyncApiTreeNodeValue } from "@apihub/next-data-model/model/async-api/types/node-value";
import { AsyncApiNodeDiffsSeveritiesAggregatorKindAny } from "./kind-any";
import { isSecurityTreeNodeKind } from "@apihub/next-data-model/model/security/types/node-kind";
import { SecurityNodeAggregators } from "@apihub/next-data-model/building-service/security/tree-with-diffs/aggregators";

export class AsyncApiNodeDiffsSeveritiesAggregatorFactory {
  private static readonly instances = new Map<
    AsyncApiTreeNodeKind | null,
    AbstractNodeDiffsSeveritiesAggregator<AsyncApiTreeNodeValue<AsyncApiTreeNodeKind> | null>
  >();

  public static instance(
    kind: AsyncApiTreeNodeKind,
  ): AbstractNodeDiffsSeveritiesAggregator<AsyncApiTreeNodeValue<AsyncApiTreeNodeKind> | null> {
    // Security sections: record-driven, shared with OpenAPI (records prepared by the security builders).
    if (isSecurityTreeNodeKind(kind)) {
      return SecurityNodeAggregators.severities<AsyncApiTreeNodeValue<AsyncApiTreeNodeKind> | null>(kind);
    }
    switch (kind) {
      default:
        return new AsyncApiNodeDiffsSeveritiesAggregatorKindAny();
    }
  }
}