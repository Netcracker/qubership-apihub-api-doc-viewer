import { AsyncApiTreeNode, AsyncApiTreeNodeWithDiffs } from '../../../../next-data-model/src/model/async-api/types/aliases';
import { AsyncApiTreeNodeKinds } from '../../../../next-data-model/src/model/async-api/types/node-kind';
import { FC } from '../../../../../node_modules/react';
import { WithPrecededByProps } from "../shared-components/WithPrecededByProps";
type MessageChannelParametersNodeViewerProps = WithPrecededByProps & {
    node: AsyncApiTreeNode<typeof AsyncApiTreeNodeKinds.MESSAGE_CHANNEL_PARAMETERS> | AsyncApiTreeNodeWithDiffs<typeof AsyncApiTreeNodeKinds.MESSAGE_CHANNEL_PARAMETERS>;
};
export declare const MessageChannelParametersNodeViewer: FC<MessageChannelParametersNodeViewerProps>;
export {};
