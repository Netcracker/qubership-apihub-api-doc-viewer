import { AsyncApiTreeNode } from '../../../../next-data-model/src/model/async-api/types/aliases';
import { AsyncApiTreeNodeKinds } from '../../../../next-data-model/src/model/async-api/types/node-kind';
import { FC } from '../../../../../node_modules/react';
type MessageContentNodeViewerProps = {
    node: AsyncApiTreeNode<typeof AsyncApiTreeNodeKinds.MESSAGE_CONTENT>;
};
export declare const MessageContentNodeViewer: FC<MessageContentNodeViewerProps>;
export {};
