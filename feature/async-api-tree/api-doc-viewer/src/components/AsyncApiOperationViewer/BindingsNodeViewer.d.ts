import { AsyncApiTreeNode } from '../../../../next-data-model/src/model/async-api/types/aliases';
import { AsyncApiTreeNodeKind, AsyncApiTreeNodeKinds } from '../../../../next-data-model/src/model/async-api/types/node-kind';
import { FC } from '../../../../../node_modules/react';
type BindingsNodeViewerProps = {
    node: AsyncApiTreeNode<typeof AsyncApiTreeNodeKinds.BINDINGS>;
    relatedTo: AsyncApiTreeNodeKind;
    level: number;
};
export declare const BindingsNodeViewer: FC<BindingsNodeViewerProps>;
export {};
