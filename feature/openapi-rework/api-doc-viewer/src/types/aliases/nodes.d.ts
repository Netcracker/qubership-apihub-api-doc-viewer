import { GraphApiDiffNodeData, GraphApiDiffNodeMeta, GraphApiNodeData, GraphApiNodeKind, GraphApiNodeMeta, GraphSchemaDiffNodeValue, GraphSchemaNodeValue, IModelTreeNode } from '../../../../api-data-model/src';
export type NodeId = string;
export type AnyTreeNode = IModelTreeNode<GraphApiNodeData, GraphApiNodeKind, GraphApiNodeMeta> | IModelTreeNode<GraphApiDiffNodeData, GraphApiNodeKind, GraphApiDiffNodeMeta>;
export type AnyTreeNodeValue = GraphSchemaDiffNodeValue | GraphSchemaNodeValue;
export type AnyTreeNodeMeta = GraphApiDiffNodeMeta | GraphApiNodeMeta;
