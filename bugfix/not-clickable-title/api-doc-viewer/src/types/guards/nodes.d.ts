import { GraphApiDiffNodeMeta, GraphApiDiffTreeNode, GraphApiTreeNode, GraphSchemaDiffNodeValue } from '../../../../api-data-model/src';
import { IModelStateCombinaryNode, IModelStateNode, IModelStatePropNode } from '../../../../api-state-model/src';
import { AnyTreeNode, AnyTreeNodeMeta, AnyTreeNodeValue } from '../aliases/nodes';
export declare function isRefNode(node: AnyTreeNode | null): boolean;
export declare function isDiffNodeValue(value?: AnyTreeNodeValue): value is GraphSchemaDiffNodeValue;
export declare function isDiffNodeMeta(meta?: AnyTreeNodeMeta): meta is GraphApiDiffNodeMeta;
export declare function isPropNodeState(state: IModelStateNode<GraphApiDiffTreeNode> | IModelStateNode<GraphApiTreeNode> | null): state is IModelStatePropNode<GraphApiDiffTreeNode> | IModelStatePropNode<GraphApiTreeNode>;
export declare function isCombinerNodeState(state: IModelStateNode<GraphApiDiffTreeNode> | IModelStateNode<GraphApiTreeNode> | null): state is IModelStateCombinaryNode<GraphApiDiffTreeNode> | IModelStateCombinaryNode<GraphApiTreeNode>;
