import { OpenApiTreeNode } from '../../../../next-data-model/src/model/openapi/types/aliases';
import { OpenApiTreeNodeKinds } from '../../../../next-data-model/src/model/openapi/types/node-kind';
import { FC } from '../../../../../node_modules/react';
import { OpenApiBlock } from './OpenApiLayout';
import { OpenApiViewState } from './OpenApiViewStateContext';
export declare const RESPONSES_SECTION_TITLE = "Responses";
type ResponsesNode = OpenApiTreeNode<typeof OpenApiTreeNodeKinds.RESPONSES>;
type ExtensionsNode = OpenApiTreeNode<typeof OpenApiTreeNodeKinds.EXTENSIONS>;
/** The Responses section as a layout block: its h2 title row with the code selector, then its sub-blocks - elements of one level. */
export declare function buildResponsesBlock(node: ResponsesNode, extensionsNode: ExtensionsNode | undefined, view: OpenApiViewState): OpenApiBlock;
type ResponsesNodeViewerProps = {
    /** Its elements (title row, sections), built by `buildResponsesBlock` (the parent needs them for the section's own edges). */
    blocks: readonly OpenApiBlock[];
};
/**
 * "Responses" (h2) with the toned response-code selector in its subheader, the selected response's
 * sections, and the Responses Object extensions - in config order.
 */
export declare const ResponsesNodeViewer: FC<ResponsesNodeViewerProps>;
export {};
