import { AbstractNodeDiffsAggregator } from "@apihub/next-data-model/building-service/abstract/tree-with-diffs/node-diffs-data/node-diffs-aggregator"
import { JsonSchemaTreeNodeKind } from "@apihub/next-data-model/model/json-schema/types/node-kind"
import { JsonSchemaTreeNodeMeta } from "@apihub/next-data-model/model/json-schema/types/node-meta"
import { JsonSchemaTreeNodeValue } from "@apihub/next-data-model/model/json-schema/types/node-value"
import { JsonSchemaNodeDiffsAggregatorKindAny } from "./kind-any"

export class JsonSchemaNodeDiffsAggregatorFactory {
  private static readonly kindAnyInstance = new JsonSchemaNodeDiffsAggregatorKindAny()

  public static instance(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    kind: JsonSchemaTreeNodeKind,
  ): AbstractNodeDiffsAggregator<
    JsonSchemaTreeNodeValue | null,
    JsonSchemaTreeNodeKind,
    JsonSchemaTreeNodeMeta,
    JsonSchemaTreeNodeValue | null
  > {
    return this.kindAnyInstance
  }
}
