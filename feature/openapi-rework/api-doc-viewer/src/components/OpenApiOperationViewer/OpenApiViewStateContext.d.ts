import { OpenApiSelection } from '../../utils/openapi/view-selection';
/**
 * The operation viewer's view state, shared by every container: the layout of one level depends on
 * the selections of the levels below it (a Body's selected media type decides where Request ends).
 * Owned by `OperationNodeViewer`, reset when the operation node changes.
 * Design: docs/design/openapi/features/block-separators.md -> "Cost and collapsible blocks".
 */
export type OpenApiViewState = {
    readonly selection: OpenApiSelection;
    readonly select: (ownerNodeId: string, selectedNodeId: string) => void;
};
export declare const OpenApiViewStateContext: import('../../../../../node_modules/react').Context<OpenApiViewState>;
export declare function useOpenApiViewState(): OpenApiViewState;
