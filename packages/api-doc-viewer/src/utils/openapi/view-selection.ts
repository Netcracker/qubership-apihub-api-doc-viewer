import { OpenApiTreeNode } from "@netcracker/qubership-apihub-next-data-model/model/openapi/types/aliases"
import { OpenApiTreeNodeKinds } from "@netcracker/qubership-apihub-next-data-model/model/openapi/types/node-kind"
import { OpenApiResponseCodeClasses } from "@netcracker/qubership-apihub-next-data-model/shared/openapi/types/response-code"
import {
  findOpenApiChild,
  getOpenApiChildren,
  isOpenApiContentNode,
  isOpenApiMediaTypeNode,
  isOpenApiResponseNode,
  isOpenApiSecurityRequirementNode,
} from "./node-type-checkers"

/**
 * View-state selection of the OpenAPI operation viewer: owner node id -> selected child node id
 * (security -> alternative, responses -> response, request body / response -> media type). An owner
 * without an entry shows its default option. CSS-free so it can be unit tested.
 * Design: docs/design/openapi/features/operation-viewer.md -> "View state".
 */
export type OpenApiSelection = ReadonlyMap<string, string>

type SecurityNode = OpenApiTreeNode<typeof OpenApiTreeNodeKinds.SECURITY>
type ResponsesNode = OpenApiTreeNode<typeof OpenApiTreeNodeKinds.RESPONSES>
type MediaTypeOwnerNode = OpenApiTreeNode<typeof OpenApiTreeNodeKinds.REQUEST_BODY> | OpenApiTreeNode<typeof OpenApiTreeNodeKinds.RESPONSE>

/** The selected security alternative: the chosen one, else the first (index 0 of the merged list). */
export function resolveSelectedAlternative(security: SecurityNode, selection: OpenApiSelection): OpenApiTreeNode<typeof OpenApiTreeNodeKinds.SECURITY_REQUIREMENT> | undefined {
  const alternatives = getOpenApiChildren(security, isOpenApiSecurityRequirementNode)
  return alternatives.find(alternative => alternative.id === selection.get(security.id)) ?? alternatives[0]
}

/** The selected response: the chosen one, else the first 2XX, else the first (features/response-code-selector.md). */
export function resolveSelectedResponse(responses: ResponsesNode, selection: OpenApiSelection): OpenApiTreeNode<typeof OpenApiTreeNodeKinds.RESPONSE> | undefined {
  const codes = getOpenApiChildren(responses, isOpenApiResponseNode)
  return codes.find(response => response.id === selection.get(responses.id))
    ?? codes.find(response => response.value()?.codeClass === OpenApiResponseCodeClasses.SUCCESS)
    ?? codes[0]
}

/** Media types of a body owner (request body, or a response for its body), in document order. */
export function getOpenApiMediaTypes(owner: MediaTypeOwnerNode): OpenApiTreeNode<typeof OpenApiTreeNodeKinds.MEDIA_TYPE>[] {
  return getOpenApiChildren(findOpenApiChild(owner, isOpenApiContentNode), isOpenApiMediaTypeNode)
}

/** The selected media type of a body owner: the chosen one, else the first. */
export function resolveSelectedMediaType(owner: MediaTypeOwnerNode, selection: OpenApiSelection): OpenApiTreeNode<typeof OpenApiTreeNodeKinds.MEDIA_TYPE> | undefined {
  const mediaTypes = getOpenApiMediaTypes(owner)
  return mediaTypes.find(mediaType => mediaType.id === selection.get(owner.id)) ?? mediaTypes[0]
}
