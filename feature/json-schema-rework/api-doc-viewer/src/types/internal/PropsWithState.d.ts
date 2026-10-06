import { IModelStateCombinaryNode, IModelStatePropNode } from '../../../../api-state-model/src';
import { GraphApiDiffTreeNode, GraphApiTreeNode } from '../../../../api-data-model/src';
import { AnyTreeNode } from '../aliases/nodes';
export type GraphPropNodePropsWithState = {
    state: IModelStatePropNode<GraphApiDiffTreeNode> | IModelStatePropNode<GraphApiTreeNode>;
};
export type GraphCombinerNodePropsWithState = {
    state: IModelStateCombinaryNode<GraphApiDiffTreeNode> | IModelStateCombinaryNode<GraphApiTreeNode>;
};
export type AnyNodePropsWithState = {
    state: IModelStatePropNode<AnyTreeNode>;
};
