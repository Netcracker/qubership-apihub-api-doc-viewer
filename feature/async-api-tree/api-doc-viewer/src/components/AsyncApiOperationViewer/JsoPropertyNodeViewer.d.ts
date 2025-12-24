import { AsyncApiTreeNode } from '../../../../next-data-model/src/model/async-api/types/aliases';
import { AsyncApiTreeNodeKinds } from '../../../../next-data-model/src/model/async-api/types/node-kind';
import { FC } from '../../../../../node_modules/react';
type JsoPropertyNodeViewerProps = {
    node: AsyncApiTreeNode<typeof AsyncApiTreeNodeKinds.JSO_PROPERTY>;
    expandable: boolean;
    expanded?: boolean;
    level: number;
};
export declare const JsoPropertyNodeViewer: FC<JsoPropertyNodeViewerProps>;
export {};
