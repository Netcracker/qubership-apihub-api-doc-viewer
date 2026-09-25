import { TreeNodeComplexityTypes } from "@apihub/next-data-model/model/abstract/tree/tree-node.interface"
import { JsonSchemaTreeNodeWithDiffs } from "@apihub/next-data-model/model/json-schema/types/aliases"
import { NodeId } from "@apihub/next-data-model/utility-types"
import { hasOwnChangeSignals } from "./has-own-change-signals"
import { JsonSchemaNodeChangedOptions } from "./types"

type VisitState = {
  visiting: Set<NodeId>
}

function isJsonSchemaNodeChangedInternal(
  node: JsonSchemaTreeNodeWithDiffs,
  options: JsonSchemaNodeChangedOptions | undefined,
  state: VisitState,
): boolean {
  if (node.isCycle) {
    return hasOwnChangeSignals(node, options)
  }

  if (state.visiting.has(node.id)) {
    return false
  }

  state.visiting.add(node.id)

  try {
    if (hasOwnChangeSignals(node, options)) {
      return true
    }

    if (node.type === TreeNodeComplexityTypes.COMPLEX) {
      return node.nestedNodes().some((nestedNode) => (
        isJsonSchemaNodeChangedInternal(nestedNode, options, state)
      ))
    }

    return node.childrenNodes().some((childNode) => (
      isJsonSchemaNodeChangedInternal(childNode, options, state)
    ))
  } finally {
    state.visiting.delete(node.id)
  }
}

export function isJsonSchemaNodeChanged(
  node: JsonSchemaTreeNodeWithDiffs,
  options?: JsonSchemaNodeChangedOptions,
): boolean {
  return isJsonSchemaNodeChangedInternal(node, options, { visiting: new Set() })
}
