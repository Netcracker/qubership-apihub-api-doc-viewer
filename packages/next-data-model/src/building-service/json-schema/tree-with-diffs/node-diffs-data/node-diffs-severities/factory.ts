import { AbstractNodeDiffsSeveritiesAggregator } from "@apihub/next-data-model/building-service/abstract/tree-with-diffs/node-diffs-data/node-diffs-severities-aggregator"
import { JsonSchemaTreeNodeKind, JsonSchemaTreeNodeKinds } from "@apihub/next-data-model/model/json-schema/types/node-kind"
import { JsonSchemaTreeNodeStoredValue } from "@apihub/next-data-model/model/json-schema/types/node-value"
import { JsonSchemaNodeDiffsSeveritiesAggregatorKindAny } from "./kind-any"
import { JsonSchemaNodeDiffsSeveritiesAggregatorKindProperty } from "./kind-property"

export class JsonSchemaNodeDiffsSeveritiesAggregatorFactory {
  private static readonly kindAnyInstance = new JsonSchemaNodeDiffsSeveritiesAggregatorKindAny()
  private static readonly kindPropertyInstance = new JsonSchemaNodeDiffsSeveritiesAggregatorKindProperty()

  public static instance(
    kind: JsonSchemaTreeNodeKind,
  ): AbstractNodeDiffsSeveritiesAggregator<JsonSchemaTreeNodeStoredValue | null> {
    switch (kind) {
      case JsonSchemaTreeNodeKinds.ROOT:
      case JsonSchemaTreeNodeKinds.PROPERTY:
        return this.kindPropertyInstance
      default:
        return this.kindAnyInstance
    }
  }
}
