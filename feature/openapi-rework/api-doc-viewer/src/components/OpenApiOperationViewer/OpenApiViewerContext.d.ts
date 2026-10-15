import { OpenApiSpacingConfig } from '../../../../next-data-model/src/model/openapi/layout';
/** Values the nested OpenAPI containers need from the root viewer. */
export type OpenApiViewerContextValue = {
    readonly devMode: boolean;
    /** Forwarded to nested JSON Schema viewers; their own default when omitted. */
    readonly expandedDepth?: number;
    /** Forwarded to nested `JsonSchemaDiffsViewer`s; their own default when omitted. */
    readonly hideUnchangedNodes?: boolean;
    /** Vertical layout numbers and rules (row padding, separators, card frame rows). */
    readonly spacing: OpenApiSpacingConfig;
};
export declare const OpenApiViewerContext: import('../../../../../node_modules/react').Context<OpenApiViewerContextValue>;
export declare function useOpenApiViewerContext(): OpenApiViewerContextValue;
