import { OpenApiBodyElements } from '../../../../next-data-model/src/model/openapi/layout';
import { OpenApiTreeNode } from '../../../../next-data-model/src/model/openapi/types/aliases';
import { OpenApiTreeNodeKinds } from '../../../../next-data-model/src/model/openapi/types/node-kind';
import { FC } from '../../../../../node_modules/react';
export type ResponseNode = OpenApiTreeNode<typeof OpenApiTreeNodeKinds.RESPONSE>;
export type ContentNode = OpenApiTreeNode<typeof OpenApiTreeNodeKinds.CONTENT>;
type ResponseNodeProps = {
    node: ResponseNode;
};
type ResponseBodyViewerProps = ResponseNodeProps & {
    /** The response's `content` node: paints the Body title row and keeps its collapsed state. */
    content: ContentNode;
    /** The Body's elements, decided by `response-blocks.tsx` (`OpenApiBlockEdges.bodyElements`). */
    elements: OpenApiBodyElements;
};
/** The response Body; its media-type selection is kept per response in the view state. Layout blocks: `response-blocks.tsx`. */
export declare const ResponseBodyViewer: FC<ResponseBodyViewerProps>;
/** The response description row. */
export declare const ResponseDescriptionRow: FC<ResponseNodeProps>;
export {};
