import { StackBlock } from '../shared-components/Layout/StackLayout';
import { OpenApiViewState } from './OpenApiViewStateContext';
import { SecurityNode } from './SecurityNodeViewer';
/**
 * The Security section as a layout block. Its elements: the title row (with the `Optional` badge of
 * anonymous access), the toolbar row when there is an alternative, then the selected alternative's
 * scheme cards (each card one element; 4px outside its border). The toolbar and content come from
 * `security-section-blocks.ts`; the selection lives in the operation view state.
 */
export declare function buildSecurityBlock(node: SecurityNode, view: OpenApiViewState): StackBlock;
