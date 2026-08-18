import { JsonSchemaTreeNode } from "@netcracker/qubership-apihub-next-data-model/model/json-schema/types/aliases"
import { resolveJsonSchemaTypeLabel } from "@netcracker/qubership-apihub-next-data-model/model/json-schema/type-label"
import { isJsonSchemaCombinerNestedKind } from "./node-type-checkers"

export function resolveJsonSchemaPropertyNestingIndicatorTitle(
  node: JsonSchemaTreeNode,
): string {
  return resolveJsonSchemaTypeLabel(node.value(), node.meta())
}

export function resolveJsonSchemaCombinerNestingIndicatorTitle(
  node: JsonSchemaTreeNode,
): string | undefined {
  const nestedNodes = node.nestedNodes()
  const combinerKind = nestedNodes[0]?.kind
  if (!combinerKind || !isJsonSchemaCombinerNestedKind(combinerKind)) {
    return undefined
  }
  return combinerKind
}
