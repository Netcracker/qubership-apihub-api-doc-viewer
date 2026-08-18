import { AbstractNodeDiffsAggregator } from "@apihub/next-data-model/building-service/abstract/tree-with-diffs/node-diffs-data/node-diffs-aggregator"
import { JsonSchemaTreeNodeKind, JsonSchemaTreeNodeKinds } from "@apihub/next-data-model/model/json-schema/types/node-kind"
import { JsonSchemaTreeNodeMeta } from "@apihub/next-data-model/model/json-schema/types/node-meta"
import { JsonSchemaTreeNodeValue } from "@apihub/next-data-model/model/json-schema/types/node-value"
import { JsonSchemaNodeDiffsAggregatorKindAny } from "./kind-any"
import { JsonSchemaNodeDiffsAggregatorKindProperty } from "./kind-property"

export class JsonSchemaNodeDiffsAggregatorFactory {
  private static readonly kindAnyInstance = new JsonSchemaNodeDiffsAggregatorKindAny()
  private static readonly kindPropertyInstance = new JsonSchemaNodeDiffsAggregatorKindProperty()

  public static instance(
    kind: JsonSchemaTreeNodeKind,
  ): AbstractNodeDiffsAggregator<
    JsonSchemaTreeNodeValue | null,
    JsonSchemaTreeNodeKind,
    JsonSchemaTreeNodeMeta,
    JsonSchemaTreeNodeValue | null
  > {
    if (kind === JsonSchemaTreeNodeKinds.PROPERTY) {
      return this.kindPropertyInstance
    }
    return this.kindAnyInstance
  }
}
