import { ITreeNode } from "@netcracker/qubership-apihub-next-data-model/model/abstract/tree/tree-node.interface"
import { SecurityTreeNode } from "@netcracker/qubership-apihub-next-data-model/model/security/types/aliases"
import { SecurityTreeNodeKind, SecurityTreeNodeKinds } from "@netcracker/qubership-apihub-next-data-model/model/security/types/node-kind"

/**
 * Kind guards of the Security section nodes, for every API type's tree (OpenAPI, AsyncAPI). The
 * shared presenters (`SecuritySchemeCardBase`, `SecuritySectionBase`) navigate with them.
 */
type SecurityKindGuard<K extends SecurityTreeNodeKind> = (node: ITreeNode | null | undefined) => node is SecurityTreeNode<K>

function createKindGuard<K extends SecurityTreeNodeKind>(kind: K): SecurityKindGuard<K> {
  return (node): node is SecurityTreeNode<K> => !!node && node.kind === kind
}

export const isSecuritySectionNode = createKindGuard(SecurityTreeNodeKinds.SECURITY)
export const isSecurityRequirementNode = createKindGuard(SecurityTreeNodeKinds.SECURITY_REQUIREMENT)
export const isSecuritySchemeNode = createKindGuard(SecurityTreeNodeKinds.SECURITY_SCHEME)
export const isSecurityOAuthFlowNode = createKindGuard(SecurityTreeNodeKinds.OAUTH_FLOW)

/** Children of a node narrowed by a security kind guard (no `as` casts at call sites). */
export function getSecurityChildren<K extends SecurityTreeNodeKind>(
  node: ITreeNode | null | undefined,
  guard: SecurityKindGuard<K>,
): SecurityTreeNode<K>[] {
  const children: ITreeNode[] = node?.childrenNodes() ?? []
  return children.filter(guard)
}

/** The selected alternative of a Security section: the chosen one, else the first (index 0 of the merged list). */
export function resolveSelectedSecurityAlternative(
  security: SecurityTreeNode<typeof SecurityTreeNodeKinds.SECURITY>,
  selectedId: string | undefined,
): SecurityTreeNode<typeof SecurityTreeNodeKinds.SECURITY_REQUIREMENT> | undefined {
  const alternatives = getSecurityChildren(security, isSecurityRequirementNode)
  return alternatives.find(alternative => alternative.id === selectedId) ?? alternatives[0]
}
