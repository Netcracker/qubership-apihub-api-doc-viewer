import { IModelTreeNode, JsonSchemaTreeNode } from '../../../../../api-data-model/src';
import { IModelStateCombinaryNode, IModelStateNode, IModelStatePropNode } from '../../../../../api-state-model/src';
export declare function isPropNodeState<T extends IModelTreeNode<any, any, any> = JsonSchemaTreeNode>(state: IModelStateNode<T> | null): state is IModelStatePropNode<T>;
export declare function isCombinerNodeState<T extends IModelTreeNode<any, any, any> = JsonSchemaTreeNode>(state: IModelStateNode<T> | null): state is IModelStateCombinaryNode<T>;
