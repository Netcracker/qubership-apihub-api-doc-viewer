import { OpenApiTreeNode } from '../../../../next-data-model/src/model/openapi/types/aliases';
import { OpenApiTreeNodeKinds } from '../../../../next-data-model/src/model/openapi/types/node-kind';
import { FC } from '../../../../../node_modules/react';
export declare const OPERATION_ID_ROW_LABEL = "Operation ID";
export type OperationNode = OpenApiTreeNode<typeof OpenApiTreeNodeKinds.OPERATION>;
type OperationNodeViewerProps = {
    node: OperationNode;
    noHeading: boolean;
};
/**
 * The operation: the header block (title, operation ID, address, description, external docs), then
 * the sections in config order, planned as one level (separator rows between blocks, the viewer's
 * top / bottom halves when configured). Owns the view state (selections) every level reads.
 * Design: features/operation-viewer.md, features/vertical-gaps.md.
 */
export declare const OperationNodeViewer: FC<OperationNodeViewerProps>;
export {};
