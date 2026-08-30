import { GraphApiDiffNodeData, GraphApiDiffNodeMeta, GraphApiNodeData, GraphApiNodeKind, GraphApiNodeMeta, GraphSchemaDiffNodeValue, GraphSchemaNodeValue, IModelTreeNode, JsonSchemaDiffNodeMeta, JsonSchemaDiffNodeValue, JsonSchemaNodeKind, JsonSchemaNodeMeta, JsonSchemaNodeValue } from '../../../../api-data-model/src';
export type NodeId = string;
export type AnyTreeNode = IModelTreeNode<JsonSchemaNodeValue, JsonSchemaNodeKind, JsonSchemaNodeMeta> | IModelTreeNode<JsonSchemaDiffNodeValue, JsonSchemaNodeKind, JsonSchemaDiffNodeMeta> | IModelTreeNode<GraphApiNodeData, GraphApiNodeKind, GraphApiNodeMeta> | IModelTreeNode<GraphApiDiffNodeData, GraphApiNodeKind, GraphApiDiffNodeMeta>;
export type AnyTreeNodeValue = JsonSchemaDiffNodeValue | JsonSchemaNodeValue | GraphSchemaDiffNodeValue | GraphSchemaNodeValue;
export type AnyTreeNodeMeta = JsonSchemaDiffNodeMeta | JsonSchemaNodeMeta | GraphApiDiffNodeMeta | GraphApiNodeMeta;
