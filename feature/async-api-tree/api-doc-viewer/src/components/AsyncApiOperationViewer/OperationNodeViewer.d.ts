import { ITreeNode } from '../../../../next-data-model/src/model/abstract/tree/tree-node.interface';
import { AsyncApiTreeNodeKinds } from '../../../../next-data-model/src/model/async-api/types/node-kind';
import { AsyncApiNodeMeta } from '../../../../next-data-model/src/model/async-api/types/node-meta';
import { AsyncApiTreeNodeValue } from '../../../../next-data-model/src/model/async-api/types/node-value';
import { FC } from '../../../../../node_modules/react';
type OperationNodeViewerProps = {
    node: ITreeNode<AsyncApiTreeNodeValue<typeof AsyncApiTreeNodeKinds.OPERATION> | null, typeof AsyncApiTreeNodeKinds.OPERATION, AsyncApiNodeMeta>;
};
export declare const OperationNodeViewer: FC<OperationNodeViewerProps>;
export {};
