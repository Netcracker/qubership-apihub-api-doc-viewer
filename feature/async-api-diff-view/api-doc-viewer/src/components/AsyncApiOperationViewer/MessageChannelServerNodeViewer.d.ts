import { AsyncApiTreeNode } from '../../../../next-data-model/src/model/async-api/types/aliases';
import { AsyncApiTreeNodeKinds } from '../../../../next-data-model/src/model/async-api/types/node-kind';
import { FC } from '../../../../../node_modules/react';
type MessageChannelServerNodeViewerProps = {
    node: AsyncApiTreeNode<typeof AsyncApiTreeNodeKinds.SERVER>;
};
export declare const MessageChannelServerNodeViewer: FC<MessageChannelServerNodeViewerProps>;
export {};
