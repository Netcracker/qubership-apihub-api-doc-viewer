import { GraphApiDiffNodeMeta, GraphApiNodeData, GraphApiNodeKind, GraphApiNodeMeta, GraphSchemaDiffNodeValue, GraphSchemaNodeKind, IModelTreeNode } from '../../../../../api-data-model/src';
export type GraphNode = IModelTreeNode<GraphSchemaDiffNodeValue, GraphSchemaNodeKind, GraphApiDiffNodeMeta> | IModelTreeNode<GraphApiNodeData, GraphApiNodeKind, GraphApiNodeMeta>;
