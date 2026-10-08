import { OpenApiTreeNode } from "@netcracker/qubership-apihub-next-data-model/model/openapi/types/aliases"
import { OpenApiTreeNodeKind, OpenApiTreeNodeKinds } from "@netcracker/qubership-apihub-next-data-model/model/openapi/types/node-kind"

type OpenApiKindGuard<K extends OpenApiTreeNodeKind> = (node: OpenApiTreeNode | null | undefined) => node is OpenApiTreeNode<K>

function createKindGuard<K extends OpenApiTreeNodeKind>(kind: K): OpenApiKindGuard<K> {
  return (node): node is OpenApiTreeNode<K> => !!node && node.kind === kind
}

export const isOpenApiOperationNode = createKindGuard(OpenApiTreeNodeKinds.OPERATION)
export const isOpenApiSecurityNode = createKindGuard(OpenApiTreeNodeKinds.SECURITY)
export const isOpenApiSecurityRequirementNode = createKindGuard(OpenApiTreeNodeKinds.SECURITY_REQUIREMENT)
export const isOpenApiSecuritySchemeNode = createKindGuard(OpenApiTreeNodeKinds.SECURITY_SCHEME)
export const isOpenApiOAuthFlowNode = createKindGuard(OpenApiTreeNodeKinds.OAUTH_FLOW)
export const isOpenApiExtensionsNode = createKindGuard(OpenApiTreeNodeKinds.EXTENSIONS)
export const isOpenApiRequestNode = createKindGuard(OpenApiTreeNodeKinds.REQUEST)
export const isOpenApiParametersNode = createKindGuard(OpenApiTreeNodeKinds.PARAMETERS)
export const isOpenApiRequestBodyNode = createKindGuard(OpenApiTreeNodeKinds.REQUEST_BODY)
export const isOpenApiContentNode = createKindGuard(OpenApiTreeNodeKinds.CONTENT)
export const isOpenApiMediaTypeNode = createKindGuard(OpenApiTreeNodeKinds.MEDIA_TYPE)
export const isOpenApiResponsesNode = createKindGuard(OpenApiTreeNodeKinds.RESPONSES)
export const isOpenApiResponseNode = createKindGuard(OpenApiTreeNodeKinds.RESPONSE)
export const isOpenApiResponseHeadersNode = createKindGuard(OpenApiTreeNodeKinds.RESPONSE_HEADERS)

/** Children of a node narrowed by a kind guard (no `as` casts at call sites). */
export function getOpenApiChildren<K extends OpenApiTreeNodeKind>(
  node: OpenApiTreeNode | null | undefined,
  guard: OpenApiKindGuard<K>,
): OpenApiTreeNode<K>[] {
  return (node?.childrenNodes() ?? []).filter(guard)
}

/** First child of a kind (optionally with a key). */
export function findOpenApiChild<K extends OpenApiTreeNodeKind>(
  node: OpenApiTreeNode | null | undefined,
  guard: OpenApiKindGuard<K>,
  key?: string,
): OpenApiTreeNode<K> | undefined {
  return getOpenApiChildren(node, guard).find(child => key === undefined || String(child.key) === key)
}
