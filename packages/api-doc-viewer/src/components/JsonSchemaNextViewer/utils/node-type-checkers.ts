import { LayoutSide } from "@apihub/types/internal/LayoutSide"
import { TreeNodeComplexityTypes } from "@netcracker/qubership-apihub-next-data-model/model/abstract/tree/tree-node.interface"
import { isPlainCombinerNodeKind } from "@netcracker/qubership-apihub-next-data-model/building-service/json-schema/tree/node-visibility-data/kind-combiner"
import { resolveJsonSchemaTypeSideValue } from "@netcracker/qubership-apihub-next-data-model/model/json-schema/tree-with-diffs/property-row-diffs"
import { JsonSchemaTreeNode, JsonSchemaTreeNodeWithDiffs } from "@netcracker/qubership-apihub-next-data-model/model/json-schema/types/aliases"
import { JsonSchemaTreeNodeKind, JsonSchemaTreeNodeKinds } from "@netcracker/qubership-apihub-next-data-model/model/json-schema/types/node-kind"
import { asJsonSchemaTypedNodeValue, isJsonSchemaPrimitiveValueType } from "@netcracker/qubership-apihub-next-data-model/shared/json-schema/guards/schema-value"

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

/**
 * A primitive type (string/number/integer/boolean) has no children, so the nesting-indicator
 * row above a node's children list has nothing to introduce - hide it on that basis.
 */
export function isJsonSchemaNestingIndicatorHiddenForPlainNode(node: JsonSchemaTreeNode): boolean {
  return isJsonSchemaPrimitiveValueType(asJsonSchemaTypedNodeValue(node.value())?.type)
}

/** Per-side counterpart of {@link isJsonSchemaNestingIndicatorHiddenForPlainNode} for diffed nodes. */
export function isJsonSchemaNestingIndicatorHiddenForSide(
  node: JsonSchemaTreeNodeWithDiffs,
  layoutSide: LayoutSide,
): boolean {
  return isJsonSchemaPrimitiveValueType(resolveJsonSchemaTypeSideValue(node, layoutSide))
}
