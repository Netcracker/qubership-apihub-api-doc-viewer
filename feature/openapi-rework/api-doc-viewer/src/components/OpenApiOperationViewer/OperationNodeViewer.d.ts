import { OpenApiTreeNode } from '../../../../next-data-model/src/model/openapi/types/aliases';
import { OpenApiTreeNodeKinds } from '../../../../next-data-model/src/model/openapi/types/node-kind';
import { FC } from '../../../../../node_modules/react';
export declare const OPERATION_ID_ROW_LABEL = "Operation ID";
type OperationNodeViewerProps = {
    node: OpenApiTreeNode<typeof OpenApiTreeNodeKinds.OPERATION>;
    noHeading: boolean;
};
/** Header rows (title, operation ID, address, external docs, description), then sections in config order. */
export declare const OperationNodeViewer: FC<OperationNodeViewerProps>;
export {};
