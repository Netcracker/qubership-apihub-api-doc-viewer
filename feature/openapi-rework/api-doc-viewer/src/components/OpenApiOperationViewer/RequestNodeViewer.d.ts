import { OpenApiTreeNode } from '../../../../next-data-model/src/model/openapi/types/aliases';
import { OpenApiTreeNodeKinds } from '../../../../next-data-model/src/model/openapi/types/node-kind';
import { FC } from '../../../../../node_modules/react';
import { WithPrecededByProps } from '../shared-components/WithPrecededByProps';
export declare const REQUEST_SECTION_TITLE = "Request";
type RequestNodeViewerProps = WithPrecededByProps & {
    node: OpenApiTreeNode<typeof OpenApiTreeNodeKinds.REQUEST>;
};
/** "Request" (h2): parameter groups and the Body in config order. Design: entities/parameters.md, entities/request-body.md. */
export declare const RequestNodeViewer: FC<RequestNodeViewerProps>;
export {};
