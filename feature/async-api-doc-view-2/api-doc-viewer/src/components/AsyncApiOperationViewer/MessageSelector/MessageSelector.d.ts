import { AsyncApiTreeNode } from '../../../../../next-data-model/src/model/async-api/types/aliases';
import { AsyncApiTreeNodeKinds } from '../../../../../next-data-model/src/model/async-api/types/node-kind';
import { FC } from '../../../../../../node_modules/react';
type MessageSelectorProps = {
    options: AsyncApiTreeNode<typeof AsyncApiTreeNodeKinds.MESSAGE>[];
    selectedOption: AsyncApiTreeNode<typeof AsyncApiTreeNodeKinds.MESSAGE> | null;
    onSelectOption: (option: AsyncApiTreeNode<typeof AsyncApiTreeNodeKinds.MESSAGE>) => void;
};
export declare const MessageSelector: FC<MessageSelectorProps>;
export {};
