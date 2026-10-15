import { OpenApiTreeNode } from '../../../../next-data-model/src/model/openapi/types/aliases';
import { OpenApiTreeNodeKinds } from '../../../../next-data-model/src/model/openapi/types/node-kind';
import { FC } from '../../../../../node_modules/react';
import { WithPrecededByProps } from '../shared-components/WithPrecededByProps';
import { OpenApiSectionTail } from './section-preceded-by';
export declare const REQUEST_SECTION_TITLE = "Request";
type RequestNode = OpenApiTreeNode<typeof OpenApiTreeNodeKinds.REQUEST>;
type RequestNodeViewerProps = WithPrecededByProps & {
    node: RequestNode;
    /** What the row after the Request section assumes about its end (see `OpenApiSectionEntry`). */
    closing: OpenApiSectionTail;
};
/** How the Request section ends (its last sub-section, or its own title row when it has none). */
export declare function resolveRequestTail(node: RequestNode): OpenApiSectionTail;
/** "Request" (h2): parameter groups and the Body in config order. Design: entities/parameters.md, entities/request-body.md. */
export declare const RequestNodeViewer: FC<RequestNodeViewerProps>;
export {};
