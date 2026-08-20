import { TreeNodeComplexityTypes } from "@netcracker/qubership-apihub-next-data-model/model/abstract/tree/tree-node.interface"
import { isPlainCombinerNodeKind } from "@netcracker/qubership-apihub-next-data-model/building-service/json-schema/tree/node-visibility-data/kind-combiner"
import { JsonSchemaTreeNode } from "@netcracker/qubership-apihub-next-data-model/model/json-schema/types/aliases"
import { JsonSchemaTreeNodeKind, JsonSchemaTreeNodeKinds } from "@netcracker/qubership-apihub-next-data-model/model/json-schema/types/node-kind"

export function isJsonSchemaRootNode(node: JsonSchemaTreeNode): boolean {
  return node.kind === JsonSchemaTreeNodeKinds.ROOT
}

export function isJsonSchemaCombinerOwnerNode(node: JsonSchemaTreeNode): boolean {
  if (node.type !== TreeNodeComplexityTypes.COMPLEX) {
    return false
  }

  const nestedNodes = node.nestedNodes()
  if (nestedNodes.length === 0) {
    return false
  }

  if (isJsonSchemaRootNode(node)) {
    return true
  }

  return nestedNodes.every((nestedNode) => isPlainCombinerNodeKind(nestedNode.kind))
}

export function isJsonSchemaCombinerNestedKind(kind: JsonSchemaTreeNodeKind): boolean {
  return isPlainCombinerNodeKind(kind)
}
