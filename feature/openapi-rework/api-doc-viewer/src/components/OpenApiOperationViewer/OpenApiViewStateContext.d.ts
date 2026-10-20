import { OpenApiSelection } from '../../utils/openapi/view-selection';
/**
 * The operation viewer's view state, shared by every container: the layout of one level depends on
 * the selections and the collapsed sections of the levels below it (a Body's selected media type, or
 * a collapsed Body, decides where Request ends). Owned by `OperationNodeViewer`, reset when the
 * operation node changes. Design: docs/design/openapi/features/collapsible-sections.md,
 * docs/design/openapi/features/block-separators.md -> "Cost and collapsible blocks".
 */
export type OpenApiViewState = {
    readonly selection: OpenApiSelection;
    readonly select: (ownerNodeId: string, selectedNodeId: string) => void;
    /** Node ids of the collapsed 2nd-level sections; every section is expanded until toggled. */
    readonly collapsed: ReadonlySet<string>;
    readonly toggleCollapsed: (sectionNodeId: string) => void;
};
export declare const OpenApiViewStateContext: import('../../../../../node_modules/react').Context<OpenApiViewState>;
export declare function useOpenApiViewState(): OpenApiViewState;
/** Whether a collapsible section is expanded (the default). */
export declare function isOpenApiSectionExpanded(view: OpenApiViewState, sectionNodeId: string): boolean;
