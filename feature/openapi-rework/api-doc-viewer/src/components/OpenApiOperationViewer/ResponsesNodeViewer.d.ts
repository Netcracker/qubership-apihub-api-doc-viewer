import { OpenApiTreeNode } from '../../../../next-data-model/src/model/openapi/types/aliases';
import { OpenApiTreeNodeKinds } from '../../../../next-data-model/src/model/openapi/types/node-kind';
import { FC } from '../../../../../node_modules/react';
import { WithPrecededByProps } from '../shared-components/WithPrecededByProps';
export declare const RESPONSES_SECTION_TITLE = "Responses";
type ResponsesNodeViewerProps = WithPrecededByProps & {
    node: OpenApiTreeNode<typeof OpenApiTreeNodeKinds.RESPONSES>;
    /** Responses Object `x-*`: a child of the operation node, rendered inside this section. */
    extensionsNode?: OpenApiTreeNode<typeof OpenApiTreeNodeKinds.EXTENSIONS>;
};
/**
 * "Responses" (h2) with the toned response-code selector in its subheader, the selected response,
 * and the Responses Object extensions - in config order.
 */
export declare const ResponsesNodeViewer: FC<ResponsesNodeViewerProps>;
export {};
