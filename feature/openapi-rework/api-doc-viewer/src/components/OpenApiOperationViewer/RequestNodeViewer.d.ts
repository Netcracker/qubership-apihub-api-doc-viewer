import { OpenApiTreeNode } from '../../../../next-data-model/src/model/openapi/types/aliases';
import { OpenApiTreeNodeKinds } from '../../../../next-data-model/src/model/openapi/types/node-kind';
import { FC } from '../../../../../node_modules/react';
import { OpenApiBlock } from './OpenApiLayout';
import { OpenApiViewState } from './OpenApiViewStateContext';
export declare const REQUEST_SECTION_TITLE = "Request";
type RequestNode = OpenApiTreeNode<typeof OpenApiTreeNodeKinds.REQUEST>;
/** The Request section as a layout block: its h2 title row, then its sub-blocks - elements of one level. */
export declare function buildRequestBlock(node: RequestNode, view: OpenApiViewState): OpenApiBlock;
type RequestNodeViewerProps = {
    /** Its elements (title row, sub-blocks), built by `buildRequestBlock` (the parent needs them for the Request's own edges). */
    blocks: readonly OpenApiBlock[];
};
/** "Request" (h2): parameter groups and the Body in config order. Design: entities/parameters.md, entities/request-body.md. */
export declare const RequestNodeViewer: FC<RequestNodeViewerProps>;
export {};
