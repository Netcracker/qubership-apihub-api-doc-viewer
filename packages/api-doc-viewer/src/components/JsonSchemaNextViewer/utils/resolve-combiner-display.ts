import { isPlainCombinerNodeKind } from "@netcracker/qubership-apihub-next-data-model/building-service/json-schema/tree/node-visibility-data/kind-combiner"
import { TreeNodeComplexityTypes } from "@netcracker/qubership-apihub-next-data-model/model/abstract/tree/tree-node.interface"
import { JsonSchemaTreeNode } from "@netcracker/qubership-apihub-next-data-model/model/json-schema/types/aliases"
import { JsonSchemaTreeNodeValue } from "@netcracker/qubership-apihub-next-data-model/model/json-schema/types/node-value"
import { isJsonSchemaComplexValue } from "@netcracker/qubership-apihub-next-data-model/shared/json-schema/guards/schema-value"
import { isObject } from "@netcracker/qubership-apihub-next-data-model/utilities"

export function resolveCombinerBranchDisplayValue(
  node: JsonSchemaTreeNode,
): JsonSchemaTreeNodeValue | null {
  const directValue = node.value()
  if (directValue !== null) {
    return typeof directValue === "boolean" ? null : directValue
  }

  const fragment = node.meta()?._fragment
  if (!isObject(fragment) || isJsonSchemaComplexValue(fragment)) {
    return null
  }

  return fragment as JsonSchemaTreeNodeValue
}

export function resolveCombinerLeafStructuralChildren(
  node: JsonSchemaTreeNode,
): JsonSchemaTreeNode[] {
  if (node.type === TreeNodeComplexityTypes.SIMPLE) {
    return node.childrenNodes()
  }

  const nestedNodes = node.nestedNodes()
  if (nestedNodes.length > 0 && nestedNodes.every((nestedNode) => !isPlainCombinerNodeKind(nestedNode.kind))) {
    return nestedNodes
  }

  return node.childrenNodes()
}
