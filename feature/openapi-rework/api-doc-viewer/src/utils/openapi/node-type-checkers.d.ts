import { OpenApiTreeNode } from '../../../../next-data-model/src/model/openapi/types/aliases';
import { OpenApiTreeNodeKind } from '../../../../next-data-model/src/model/openapi/types/node-kind';
type OpenApiKindGuard<K extends OpenApiTreeNodeKind> = (node: OpenApiTreeNode | null | undefined) => node is OpenApiTreeNode<K>;
export declare const isOpenApiOperationNode: OpenApiKindGuard<"operation">;
export declare const isOpenApiSecurityNode: OpenApiKindGuard<"security">;
export declare const isOpenApiExtensionsNode: OpenApiKindGuard<"extensions">;
export declare const isOpenApiRequestNode: OpenApiKindGuard<"request">;
export declare const isOpenApiParametersNode: OpenApiKindGuard<"parameters">;
export declare const isOpenApiRequestBodyNode: OpenApiKindGuard<"requestBody">;
export declare const isOpenApiContentNode: OpenApiKindGuard<"content">;
export declare const isOpenApiMediaTypeNode: OpenApiKindGuard<"mediaType">;
export declare const isOpenApiResponsesNode: OpenApiKindGuard<"responses">;
export declare const isOpenApiResponseNode: OpenApiKindGuard<"response">;
export declare const isOpenApiResponseHeadersNode: OpenApiKindGuard<"responseHeaders">;
/**
 * Children of a node narrowed by a kind guard (no `as` casts at call sites). Never for the options of
 * a complex selector container (`responses`, `content`): those are nested nodes (`getOpenApiOptions`).
 */
export declare function getOpenApiChildren<K extends OpenApiTreeNodeKind>(node: OpenApiTreeNode | null | undefined, guard: OpenApiKindGuard<K>): OpenApiTreeNode<K>[];
/**
 * The options of a complex selector container (`responses` -> codes, `content` -> media types), in
 * tree order, narrowed by a kind guard. Docs: docs/design/shared/features/selector-options.md.
 */
export declare function getOpenApiOptions<K extends OpenApiTreeNodeKind>(container: OpenApiTreeNode | null | undefined, guard: OpenApiKindGuard<K>): OpenApiTreeNode<K>[];
/** First child of a kind (optionally with a key). */
export declare function findOpenApiChild<K extends OpenApiTreeNodeKind>(node: OpenApiTreeNode | null | undefined, guard: OpenApiKindGuard<K>, key?: string): OpenApiTreeNode<K> | undefined;
export {};
