import { AsyncApiTreeNode } from '../../../../next-data-model/src/model/async-api/types/aliases';
import { AsyncApiTreeNodeKinds } from '../../../../next-data-model/src/model/async-api/types/node-kind';
import { FC } from '../../../../../node_modules/react';
type MessageSectionViewerProps = {
    node: AsyncApiTreeNode<typeof AsyncApiTreeNodeKinds.MESSAGE_CONTENT | typeof AsyncApiTreeNodeKinds.MESSAGE_CHANNEL | typeof AsyncApiTreeNodeKinds.MESSAGE_OPERATION>;
};
export declare const MessageSectionViewer: FC<MessageSectionViewerProps>;
export {};
