import { JsonSchemaTreeNode } from "@netcracker/qubership-apihub-next-data-model/model/json-schema/types/aliases"
import { isJsonSchemaCombinerNestedKind } from "./node-type-checkers"

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
