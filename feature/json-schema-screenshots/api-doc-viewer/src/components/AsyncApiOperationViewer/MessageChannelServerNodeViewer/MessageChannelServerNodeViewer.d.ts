import { AsyncApiTreeNode, AsyncApiTreeNodeWithDiffs } from '../../../../../next-data-model/src/model/async-api/types/aliases';
import { AsyncApiTreeNodeKinds } from '../../../../../next-data-model/src/model/async-api/types/node-kind';
import { FC } from '../../../../../../node_modules/react';
import { WithPrecededByProps } from '../../shared-components/WithPrecededByProps';
type MessageChannelServerNodeViewerProps = WithPrecededByProps & {
    node: AsyncApiTreeNode<typeof AsyncApiTreeNodeKinds.SERVER> | AsyncApiTreeNodeWithDiffs<typeof AsyncApiTreeNodeKinds.SERVER>;
};
export declare const MessageChannelServerNodeViewer: FC<MessageChannelServerNodeViewerProps>;
export {};
