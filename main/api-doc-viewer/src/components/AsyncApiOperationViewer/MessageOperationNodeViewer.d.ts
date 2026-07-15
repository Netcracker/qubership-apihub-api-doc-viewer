import { AsyncApiTreeNode } from '../../../../next-data-model/src/model/async-api/types/aliases';
import { AsyncApiTreeNodeKinds } from '../../../../next-data-model/src/model/async-api/types/node-kind';
import { FC } from '../../../../../node_modules/react';
import { WithPrecededByProps } from "../shared-components/WithPrecededByProps";
type MessageOperationNodeViewerProps = WithPrecededByProps & {
    node: AsyncApiTreeNode<typeof AsyncApiTreeNodeKinds.MESSAGE_OPERATION>;
};
export declare const MessageOperationNodeViewer: FC<MessageOperationNodeViewerProps>;
export {};
