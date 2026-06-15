import { AsyncApiTreeNode } from '../../../../next-data-model/src/model/async-api/types/aliases';
import { AsyncApiTreeNodeKinds } from '../../../../next-data-model/src/model/async-api/types/node-kind';
import { FC } from '../../../../../node_modules/react';
type MessageNodeViewerProps = {
    node: AsyncApiTreeNode<typeof AsyncApiTreeNodeKinds.MESSAGE>;
};
export declare const MessageNodeViewer: FC<MessageNodeViewerProps>;
export {};
