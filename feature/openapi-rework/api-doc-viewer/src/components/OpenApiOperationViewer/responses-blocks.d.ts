import { OpenApiTreeNode } from '../../../../next-data-model/src/model/openapi/types/aliases';
import { OpenApiTreeNodeKinds } from '../../../../next-data-model/src/model/openapi/types/node-kind';
import { StackBlock } from '../shared-components/Layout/StackLayout';
import { OpenApiViewState } from './OpenApiViewStateContext';
import { ResponsesNode } from './ResponsesNodeViewer';
type ExtensionsNode = OpenApiTreeNode<typeof OpenApiTreeNodeKinds.EXTENSIONS>;
/** The Responses section as a layout block: its h2 title row with the code selector, then its sub-blocks - elements of one level. */
export declare function buildResponsesBlock(node: ResponsesNode, extensionsNode: ExtensionsNode | undefined, view: OpenApiViewState): StackBlock;
export {};
