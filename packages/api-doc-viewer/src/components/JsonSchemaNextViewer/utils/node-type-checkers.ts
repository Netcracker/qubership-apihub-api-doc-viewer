import { TreeNodeComplexityTypes } from "@netcracker/qubership-apihub-next-data-model/model/abstract/tree/tree-node.interface"
import { JsonSchemaTreeNode } from "@netcracker/qubership-apihub-next-data-model/model/json-schema/types/aliases"
import { JsonSchemaTreeNodeKind, JsonSchemaTreeNodeKinds } from "@netcracker/qubership-apihub-next-data-model/model/json-schema/types/node-kind"
import { isPlainCombinerNodeKind } from "@netcracker/qubership-apihub-next-data-model/building-service/json-schema/tree/node-visibility-data/kind-combiner"

export function isJsonSchemaRootNode(node: JsonSchemaTreeNode): boolean {
  return node.kind === JsonSchemaTreeNodeKinds.ROOT
}

export function isJsonSchemaCombinerOwnerNode(node: JsonSchemaTreeNode): boolean {
  return node.type === TreeNodeComplexityTypes.COMPLEX && node.nestedNodes().length > 0
}

export function isJsonSchemaCombinerNestedKind(kind: JsonSchemaTreeNodeKind): boolean {
  return isPlainCombinerNodeKind(kind)
}
