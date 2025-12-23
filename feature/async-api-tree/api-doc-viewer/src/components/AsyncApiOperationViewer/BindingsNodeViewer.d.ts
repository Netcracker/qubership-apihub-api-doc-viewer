import { ITreeNode } from '../../../../next-data-model/src/model/abstract/tree/tree-node.interface';
import { AsyncApiTreeNodeKinds } from '../../../../next-data-model/src/model/async-api/types/node-kind';
import { AsyncApiNodeMeta } from '../../../../next-data-model/src/model/async-api/types/node-meta';
import { AsyncApiTreeNodeValue } from '../../../../next-data-model/src/model/async-api/types/node-value';
import { FC } from '../../../../../node_modules/react';
type BindingsNodeViewerProps = {
    node: ITreeNode<AsyncApiTreeNodeValue<typeof AsyncApiTreeNodeKinds.BINDINGS> | null, typeof AsyncApiTreeNodeKinds.BINDINGS, AsyncApiNodeMeta>;
    level: number;
};
export declare const BindingsNodeViewer: FC<BindingsNodeViewerProps>;
export {};
