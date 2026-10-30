import { DisplayMode } from '../../types/DisplayMode';
import { LayoutMode } from '../../types/LayoutMode';
import { FC } from '../../../../../node_modules/react';
import { OpenApiViewerContextValue } from './OpenApiViewerContext';
import { OperationNode } from './OperationNodeViewer';
type OpenApiViewerRootProps = {
    operation: OperationNode;
    noHeading: boolean;
    viewerContext: OpenApiViewerContextValue;
    displayMode: DisplayMode;
    layoutMode: LayoutMode;
    testId: string;
};
/**
 * What both OpenAPI root viewers render once their tree is built: the common contexts (viewer
 * context, display / layout mode, level, layout spacing) and the root element carrying the spacing
 * numbers as CSS custom properties. The diffs root wraps it in its diff contexts.
 * Design: docs/design/openapi/features/operation-viewer.md -> "Root component shape".
 */
export declare const OpenApiViewerRoot: FC<OpenApiViewerRootProps>;
export {};
