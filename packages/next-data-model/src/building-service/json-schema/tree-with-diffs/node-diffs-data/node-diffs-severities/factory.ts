import { AbstractNodeDiffsSeveritiesAggregator } from "@apihub/next-data-model/building-service/abstract/tree-with-diffs/node-diffs-data/node-diffs-severities-aggregator"
import { JsonSchemaTreeNodeKind } from "@apihub/next-data-model/model/json-schema/types/node-kind"
import { JsonSchemaTreeNodeValue } from "@apihub/next-data-model/model/json-schema/types/node-value"
import { JsonSchemaNodeDiffsSeveritiesAggregatorKindAny } from "./kind-any"

export class JsonSchemaNodeDiffsSeveritiesAggregatorFactory {
  private static readonly kindAnyInstance = new JsonSchemaNodeDiffsSeveritiesAggregatorKindAny()

  public static instance(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    kind: JsonSchemaTreeNodeKind,
  ): AbstractNodeDiffsSeveritiesAggregator<JsonSchemaTreeNodeValue | null> {
    return this.kindAnyInstance
  }
}
