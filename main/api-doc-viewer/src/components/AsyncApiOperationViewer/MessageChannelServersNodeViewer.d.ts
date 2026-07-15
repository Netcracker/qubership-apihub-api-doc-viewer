import { AsyncApiTreeNode } from '../../../../next-data-model/src/model/async-api/types/aliases';
import { AsyncApiTreeNodeKinds } from '../../../../next-data-model/src/model/async-api/types/node-kind';
import { FC } from '../../../../../node_modules/react';
import { WithPrecededByProps } from "../shared-components/WithPrecededByProps";
type MessageChannelServersNodeViewerProps = WithPrecededByProps & {
    node: AsyncApiTreeNode<typeof AsyncApiTreeNodeKinds.SERVERS>;
};
export declare const MessageChannelServersNodeViewer: FC<MessageChannelServersNodeViewerProps>;
export {};
