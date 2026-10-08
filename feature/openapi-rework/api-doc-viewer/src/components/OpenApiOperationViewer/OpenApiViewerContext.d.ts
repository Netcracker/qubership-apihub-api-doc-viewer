/** Values the nested OpenAPI containers need from the root viewer. */
export type OpenApiViewerContextValue = {
    readonly devMode: boolean;
    /** Forwarded to nested JSON Schema viewers; their own default when omitted. */
    readonly expandedDepth?: number;
    /** Forwarded to nested `JsonSchemaDiffsViewer`s; their own default when omitted. */
    readonly hideUnchangedNodes?: boolean;
};
export declare const OpenApiViewerContext: import('../../../../../node_modules/react').Context<OpenApiViewerContextValue>;
export declare function useOpenApiViewerContext(): OpenApiViewerContextValue;
