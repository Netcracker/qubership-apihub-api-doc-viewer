import { AsyncApiTreeNode } from "@netcracker/qubership-apihub-next-data-model/model/async-api/types/aliases"
import { AsyncApiTreeNodeKind, AsyncApiTreeNodeKinds } from "@netcracker/qubership-apihub-next-data-model/model/async-api/types/node-kind"

const DISPLAY_PRIORITY_MAP_OPERATION_CHILDREN: Partial<Record<AsyncApiTreeNodeKind, number>> = {
  [AsyncApiTreeNodeKinds.BINDINGS]: 1,
  [AsyncApiTreeNodeKinds.CHANNEL]: 2,
  [AsyncApiTreeNodeKinds.MESSAGES]: 3,
}

export function sortNodesByDisplayPriority(
  sortFor: AsyncApiTreeNodeKind,
  nodes: AsyncApiTreeNode[],
): AsyncApiTreeNode[] {
  switch (sortFor) {
    case AsyncApiTreeNodeKinds.OPERATION:
      return nodes.sort((a, b) => {
        const aPriority = DISPLAY_PRIORITY_MAP_OPERATION_CHILDREN[a.kind] ?? 0
        const bPriority = DISPLAY_PRIORITY_MAP_OPERATION_CHILDREN[b.kind] ?? 0
        return aPriority - bPriority
      })
    default:
      return nodes
  }
}