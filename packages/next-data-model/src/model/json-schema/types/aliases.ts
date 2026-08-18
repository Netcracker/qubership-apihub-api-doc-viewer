import { ITreeNodeWithDiffs } from "@apihub/next-data-model/model/abstract/tree-with-diffs/tree-node.interface"
import { ITreeNode } from "@apihub/next-data-model/model/abstract/tree/tree-node.interface"
import { JsonSchemaTreeNodeValue } from "@apihub/next-data-model/model/json-schema/types/node-value"
import { JsonSchemaTreeNodeKind } from "@apihub/next-data-model/model/json-schema/types/node-kind"
import { JsonSchemaTreeNodeMeta } from "@apihub/next-data-model/model/json-schema/types/node-meta"

export type JsonSchemaTreeNode<K extends JsonSchemaTreeNodeKind = JsonSchemaTreeNodeKind> =
  ITreeNode<JsonSchemaTreeNodeValue | null, K, JsonSchemaTreeNodeMeta>

export type JsonSchemaTreeNodeWithDiffs<K extends JsonSchemaTreeNodeKind = JsonSchemaTreeNodeKind> =
  ITreeNodeWithDiffs<
    JsonSchemaTreeNodeValue | null,
    K,
    JsonSchemaTreeNodeMeta,
    JsonSchemaTreeNodeValue | null
  >
