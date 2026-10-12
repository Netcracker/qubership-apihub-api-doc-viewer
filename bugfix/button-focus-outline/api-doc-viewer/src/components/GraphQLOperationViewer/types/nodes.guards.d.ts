import { GraphApiTreeNode } from '../../../../../api-data-model/src';
import { IModelStateCombinaryNode, IModelStateNode, IModelStatePropNode } from '../../../../../api-state-model/src';
export declare function isPropNodeState(state: IModelStateNode<GraphApiTreeNode> | null): state is IModelStatePropNode<GraphApiTreeNode>;
export declare function isCombinerNodeState(state: IModelStateNode<GraphApiTreeNode> | null): state is IModelStateCombinaryNode<GraphApiTreeNode>;
