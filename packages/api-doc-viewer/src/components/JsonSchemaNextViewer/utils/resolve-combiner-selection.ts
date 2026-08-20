import { resolvePlainCombinerNodeVisibility } from "@netcracker/qubership-apihub-next-data-model/building-service/json-schema/tree/node-visibility-data/kind-combiner"
import { JsonSchemaTreeNode } from "@netcracker/qubership-apihub-next-data-model/model/json-schema/types/aliases"
import { NodeId } from "@netcracker/qubership-apihub-next-data-model/utility-types"
import { isJsonSchemaCombinerOwnerNode } from "./node-type-checkers"
import { resolveJsonSchemaCombinerNestingIndicatorTitle } from "./resolve-json-schema-nesting-indicator-title"

export type CombinerSelections = ReadonlyMap<NodeId, NodeId>

export type CombinerSelectorLevel<N extends JsonSchemaTreeNode = JsonSchemaTreeNode> = {
  combinerNode: N
  nestedNodes: N[]
  selectedNestedNode: N
  showSelector: boolean
  combinerKindLabel: string | undefined
}

function resolveSelectedNestedNode<N extends JsonSchemaTreeNode>(
  combinerNode: N,
  nestedNodes: N[],
  selections: CombinerSelections,
): N | undefined {
  const selectedId = selections.get(combinerNode.id)
  if (selectedId) {
    const explicitMatch = nestedNodes.find((nestedNode) => nestedNode.id === selectedId)
    if (explicitMatch) {
      return explicitMatch
    }
  }
  return nestedNodes[0]
}

export function resolveCombinerSelectorLevels<N extends JsonSchemaTreeNode>(
  complexNode: N,
  selections: CombinerSelections,
): CombinerSelectorLevel<N>[] {
  const levels: CombinerSelectorLevel<N>[] = []
  let currentCombinerNode: N | null = complexNode

  while (currentCombinerNode && isJsonSchemaCombinerOwnerNode(currentCombinerNode)) {
    const nestedNodes = currentCombinerNode.nestedNodes() as N[]
    const selectedNestedNode: N | undefined = resolveSelectedNestedNode(
      currentCombinerNode,
      nestedNodes,
      selections,
    )
    if (!selectedNestedNode) {
      break
    }

    const visibility = resolvePlainCombinerNodeVisibility(currentCombinerNode)
    levels.push({
      combinerNode: currentCombinerNode,
      nestedNodes,
      selectedNestedNode,
      showSelector: visibility.showSelector,
      combinerKindLabel: resolveJsonSchemaCombinerNestingIndicatorTitle(currentCombinerNode),
    })

    if (isJsonSchemaCombinerOwnerNode(selectedNestedNode)) {
      currentCombinerNode = selectedNestedNode
      continue
    }

    break
  }

  return levels
}

export function resolveActiveLeafNode<N extends JsonSchemaTreeNode>(
  complexNode: N,
  selections: CombinerSelections,
): N {
  let current: N = complexNode

  while (isJsonSchemaCombinerOwnerNode(current)) {
    const nestedNodes = current.nestedNodes() as N[]
    const branch: N | undefined = resolveSelectedNestedNode(current, nestedNodes, selections)
    if (!branch) {
      break
    }
    current = branch
  }

  return current
}

export function applyCombinerSelection(
  complexNode: JsonSchemaTreeNode,
  selections: CombinerSelections,
  combinerNodeId: NodeId,
  selectedNestedNodeId: NodeId,
): CombinerSelections {
  const nextSelections = new Map(selections)
  nextSelections.set(combinerNodeId, selectedNestedNodeId)

  const activePathCombinerIds = new Set(
    resolveCombinerSelectorLevels(complexNode, nextSelections).map((level) => level.combinerNode.id),
  )

  for (const combinerId of nextSelections.keys()) {
    if (!activePathCombinerIds.has(combinerId)) {
      nextSelections.delete(combinerId)
    }
  }

  return nextSelections
}
