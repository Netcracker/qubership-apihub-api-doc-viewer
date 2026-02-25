import { AsyncApiTreeNode } from '../../../../next-data-model/src/model/async-api/types/aliases';
import { AsyncApiTreeNodeKinds } from '../../../../next-data-model/src/model/async-api/types/node-kind';
import { FC } from '../../../../../node_modules/react';
type MessageChannelNodeViewerProps = {
    node: AsyncApiTreeNode<typeof AsyncApiTreeNodeKinds.MESSAGE_CHANNEL>;
};
export declare const MessageChannelNodeViewer: FC<MessageChannelNodeViewerProps>;
export {};
