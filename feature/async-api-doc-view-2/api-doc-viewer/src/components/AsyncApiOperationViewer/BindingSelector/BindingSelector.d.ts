import { AsyncApiTreeNode } from '../../../../../next-data-model/src/model/async-api/types/aliases';
import { AsyncApiTreeNodeKinds } from '../../../../../next-data-model/src/model/async-api/types/node-kind';
import { FC } from '../../../../../../node_modules/react';
type BindingSelectorProps = {
    options: AsyncApiTreeNode<typeof AsyncApiTreeNodeKinds.BINDING>[];
    selectedOption: AsyncApiTreeNode<typeof AsyncApiTreeNodeKinds.BINDING> | null;
    onSelectOption: (option: AsyncApiTreeNode<typeof AsyncApiTreeNodeKinds.BINDING>) => void;
};
export declare const BindingSelector: FC<BindingSelectorProps>;
export {};
