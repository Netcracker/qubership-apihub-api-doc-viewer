import { GraphApiDiffNodeMeta, GraphApiDiffTreeNode, GraphApiTreeNode, GraphSchemaDiffNodeValue, JsonSchemaDiffNodeMeta, JsonSchemaDiffNodeValue, JsonSchemaDiffTreeNode } from '../../../../api-data-model/src';
import { IModelStateCombinaryNode, IModelStateNode, IModelStatePropNode } from '../../../../api-state-model/src';
import { AnyTreeNode, AnyTreeNodeMeta, AnyTreeNodeValue } from '../aliases/nodes';
export declare function isRefNode(node: AnyTreeNode | null): boolean;
export declare function isDiffNodeValue(value?: AnyTreeNodeValue): value is JsonSchemaDiffNodeValue | GraphSchemaDiffNodeValue;
export declare function isDiffNodeMeta(meta?: AnyTreeNodeMeta): meta is JsonSchemaDiffNodeMeta | GraphApiDiffNodeMeta;
export declare function isPropNodeState(state: IModelStateNode<JsonSchemaDiffTreeNode> | IModelStateNode<GraphApiDiffTreeNode> | IModelStateNode<GraphApiTreeNode> | null): state is IModelStatePropNode<JsonSchemaDiffTreeNode> | IModelStatePropNode<GraphApiDiffTreeNode> | IModelStatePropNode<GraphApiTreeNode>;
export declare function isCombinerNodeState(state: IModelStateNode<JsonSchemaDiffTreeNode> | IModelStateNode<GraphApiDiffTreeNode> | IModelStateNode<GraphApiTreeNode> | null): state is IModelStateCombinaryNode<JsonSchemaDiffTreeNode> | IModelStateCombinaryNode<GraphApiDiffTreeNode> | IModelStateCombinaryNode<GraphApiTreeNode>;
