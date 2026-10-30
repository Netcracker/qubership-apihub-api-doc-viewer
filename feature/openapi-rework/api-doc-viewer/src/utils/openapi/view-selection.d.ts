import { OpenApiTreeNode } from '../../../../next-data-model/src/model/openapi/types/aliases';
import { OpenApiTreeNodeKinds } from '../../../../next-data-model/src/model/openapi/types/node-kind';
import { SecurityTreeNode } from '../../../../next-data-model/src/model/security/types/aliases';
import { SecurityTreeNodeKinds } from '../../../../next-data-model/src/model/security/types/node-kind';
/**
 * View-state selection of the OpenAPI operation viewer: owner node id -> selected child node id
 * (security -> alternative, responses -> response, request body / response -> media type). An owner
 * without an entry shows its default option. CSS-free so it can be unit tested.
 * Design: docs/design/openapi/features/operation-viewer.md -> "View state".
 */
export type OpenApiSelection = ReadonlyMap<string, string>;
type SecurityNode = OpenApiTreeNode<typeof OpenApiTreeNodeKinds.SECURITY>;
type ResponsesNode = OpenApiTreeNode<typeof OpenApiTreeNodeKinds.RESPONSES>;
type MediaTypeOwnerNode = OpenApiTreeNode<typeof OpenApiTreeNodeKinds.REQUEST_BODY> | OpenApiTreeNode<typeof OpenApiTreeNodeKinds.RESPONSE>;
export declare class OpenApiViewSelection {
    /** The selected security alternative: the chosen one, else the first (index 0 of the merged list). */
    static alternative(security: SecurityNode, selection: OpenApiSelection): SecurityTreeNode<typeof SecurityTreeNodeKinds.SECURITY_REQUIREMENT> | undefined;
    /** The selected response: the chosen one, else the default code (`OpenApiResponseCode.pickDefault`, features/response-code-selector.md). */
    static response(responses: ResponsesNode, selection: OpenApiSelection): OpenApiTreeNode<typeof OpenApiTreeNodeKinds.RESPONSE> | undefined;
    /** Media types of a body owner (request body, or a response for its body), in document order. */
    static mediaTypes(owner: MediaTypeOwnerNode): OpenApiTreeNode<typeof OpenApiTreeNodeKinds.MEDIA_TYPE>[];
    /** The selected media type of a body owner: the chosen one, else the first. */
    static mediaType(owner: MediaTypeOwnerNode, selection: OpenApiSelection): OpenApiTreeNode<typeof OpenApiTreeNodeKinds.MEDIA_TYPE> | undefined;
}
export {};
