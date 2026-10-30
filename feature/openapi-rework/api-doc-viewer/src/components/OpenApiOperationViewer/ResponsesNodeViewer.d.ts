import { OpenApiTreeNode } from '../../../../next-data-model/src/model/openapi/types/aliases';
import { OpenApiTreeNodeKinds } from '../../../../next-data-model/src/model/openapi/types/node-kind';
import { FC } from '../../../../../node_modules/react';
import { StackBlock } from '../shared-components/Layout/StackLayout';
export type ResponsesNode = OpenApiTreeNode<typeof OpenApiTreeNodeKinds.RESPONSES>;
type ResponsesNodeViewerProps = {
    /** Its elements (title row, sections), built by `buildResponsesBlock` (the parent needs them for the section's own edges). */
    blocks: readonly StackBlock[];
};
/**
 * "Responses" (h2) with the toned response-code selector in its subheader, the selected response's
 * sections, and the Responses Object extensions - in config order. Layout block: `responses-blocks.tsx`.
 */
export declare const ResponsesNodeViewer: FC<ResponsesNodeViewerProps>;
type ResponsesTitleRowProps = {
    node: ResponsesNode;
};
/**
 * "Responses" (h2) with the code selector: one line of codes in the shared `ArrowScrollStrip`, which
 * takes the rest of the row. The selection lives in the operation view state.
 */
export declare const ResponsesTitleRow: FC<ResponsesTitleRowProps>;
export {};
