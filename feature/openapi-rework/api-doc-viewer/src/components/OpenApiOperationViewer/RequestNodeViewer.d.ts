import { OpenApiBodyElements } from '../../../../next-data-model/src/model/openapi/layout';
import { OpenApiTreeNode } from '../../../../next-data-model/src/model/openapi/types/aliases';
import { OpenApiTreeNodeKinds } from '../../../../next-data-model/src/model/openapi/types/node-kind';
import { FC } from '../../../../../node_modules/react';
import { StackBlock } from '../shared-components/Layout/StackLayout';
export declare const REQUEST_SECTION_TITLE = "Request";
export type RequestNode = OpenApiTreeNode<typeof OpenApiTreeNodeKinds.REQUEST>;
export type RequestBodyNode = OpenApiTreeNode<typeof OpenApiTreeNodeKinds.REQUEST_BODY>;
type RequestNodeViewerProps = {
    /** Its elements (title row, sub-blocks), built by `buildRequestBlock` (the parent needs them for the Request's own edges). */
    blocks: readonly StackBlock[];
};
/**
 * "Request" (h2): parameter groups and the Body in config order. Layout block: `request-blocks.tsx`.
 * Design: entities/parameters.md, entities/request-body.md.
 */
export declare const RequestNodeViewer: FC<RequestNodeViewerProps>;
type RequestTitleRowProps = {
    node: RequestNode;
};
export declare const RequestTitleRow: FC<RequestTitleRowProps>;
type RequestBodyNodeViewerProps = {
    node: RequestBodyNode;
    /** The Body's elements, decided by `buildRequestBodyBlock` (`OpenApiBlockEdges.bodyElements`). */
    elements: OpenApiBodyElements;
};
export declare const RequestBodyNodeViewer: FC<RequestBodyNodeViewerProps>;
export {};
