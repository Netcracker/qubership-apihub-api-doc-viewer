export declare const OpenApiSectionIds: {
    readonly SECURITY: "security";
    readonly OPERATION_EXTENSIONS: "operationExtensions";
    readonly REQUEST: "request";
    readonly RESPONSES: "responses";
    readonly PATH_PARAMETERS: "pathParameters";
    readonly QUERY_PARAMETERS: "queryParameters";
    readonly HEADER_PARAMETERS: "headerParameters";
    readonly COOKIE_PARAMETERS: "cookieParameters";
    readonly REQUEST_BODY: "requestBody";
    readonly SELECTED_RESPONSE: "selectedResponse";
    readonly RESPONSES_EXTENSIONS: "responsesExtensions";
    readonly RESPONSE_DESCRIPTION: "responseDescription";
    readonly RESPONSE_HEADERS: "responseHeaders";
    readonly RESPONSE_EXTENSIONS: "responseExtensions";
    readonly RESPONSE_BODY: "responseBody";
};
export type OpenApiSectionId = typeof OpenApiSectionIds[keyof typeof OpenApiSectionIds];
type OperationSectionId = typeof OpenApiSectionIds.SECURITY | typeof OpenApiSectionIds.OPERATION_EXTENSIONS | typeof OpenApiSectionIds.REQUEST | typeof OpenApiSectionIds.RESPONSES;
type RequestSectionId = typeof OpenApiSectionIds.PATH_PARAMETERS | typeof OpenApiSectionIds.QUERY_PARAMETERS | typeof OpenApiSectionIds.HEADER_PARAMETERS | typeof OpenApiSectionIds.COOKIE_PARAMETERS | typeof OpenApiSectionIds.REQUEST_BODY;
type ResponsesSectionId = typeof OpenApiSectionIds.SELECTED_RESPONSE | typeof OpenApiSectionIds.RESPONSES_EXTENSIONS;
type ResponseSectionId = typeof OpenApiSectionIds.RESPONSE_DESCRIPTION | typeof OpenApiSectionIds.RESPONSE_HEADERS | typeof OpenApiSectionIds.RESPONSE_EXTENSIONS | typeof OpenApiSectionIds.RESPONSE_BODY;
/**
 * Order of every section the OpenAPI layer renders - the one place to reorder them
 * (docs/design/openapi/features/operation-viewer.md -> "Section order"). A section id stays in its own
 * list; nested JSON Schema / JSO viewers are out of scope.
 */
export declare const OPENAPI_SECTION_ORDER: {
    readonly operation: readonly OperationSectionId[];
    readonly request: readonly RequestSectionId[];
    readonly responses: readonly ResponsesSectionId[];
    readonly response: readonly ResponseSectionId[];
};
/** Allowed ids per list (the unit test checks each list is a permutation of these). */
export declare const OPENAPI_SECTION_IDS_BY_LEVEL: {
    readonly [K in keyof typeof OPENAPI_SECTION_ORDER]: readonly OpenApiSectionId[];
};
export {};
