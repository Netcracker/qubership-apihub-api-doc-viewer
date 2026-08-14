import { ITreeNode } from "@apihub/next-data-model/model/abstract/tree/tree-node.interface"
import { JsonSchemaTreeNodeValue } from "@apihub/next-data-model/model/json-schema/types/node-value"
import { JsonSchemaTreeNodeKind } from "@apihub/next-data-model/model/json-schema/types/node-kind"
import { JsonSchemaTreeNodeMeta } from "@apihub/next-data-model/model/json-schema/types/node-meta"

export function isRequiredJsonSchemaProperty(
  key: string | number,
  parent: ITreeNode<JsonSchemaTreeNodeValue | null, JsonSchemaTreeNodeKind, JsonSchemaTreeNodeMeta> | null,
): boolean {
  if (!parent || typeof key === "number" || !key) {
    return false
  }
  const value = parent.value()
  return !!value
    && "required" in value
    && Array.isArray(value.required)
    && value.required.includes(String(key))
}
