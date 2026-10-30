import { StackBlock } from '../shared-components/Layout/StackLayout';
import { OpenApiViewState } from './OpenApiViewStateContext';
import { RequestNode } from './RequestNodeViewer';
/** The Request section as a layout block: its h2 title row, then its sub-blocks - elements of one level. */
export declare function buildRequestBlock(node: RequestNode, view: OpenApiViewState): StackBlock;
