import { OpenApiTreeNode } from '../../../../next-data-model/src/model/openapi/types/aliases';
import { OpenApiTreeNodeKinds } from '../../../../next-data-model/src/model/openapi/types/node-kind';
import { FC } from '../../../../../node_modules/react';
import { OpenApiBlock } from './OpenApiLayout';
import { OpenApiViewState } from './OpenApiViewStateContext';
type SecurityNode = OpenApiTreeNode<typeof OpenApiTreeNodeKinds.SECURITY>;
/**
 * The Security section as a layout block. Its elements: the title row, the toolbar row, then the
 * selected alternative's "No authentication" text or its scheme cards (each card one element; 4px
 * outside its border). The toolbar and content come from `SecuritySectionBase`; the selection lives
 * in the operation view state.
 */
export declare function buildSecurityBlock(node: SecurityNode, view: OpenApiViewState): OpenApiBlock;
/** "Security" (h2), the security toolbar (alternatives, OR, always shown), framed scheme cards (AND). */
export declare const SecurityNodeViewer: FC<{
    blocks: readonly OpenApiBlock[];
}>;
export {};
