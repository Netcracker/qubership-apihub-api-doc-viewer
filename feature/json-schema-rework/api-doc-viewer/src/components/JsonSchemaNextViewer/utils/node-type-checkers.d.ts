import { JsonSchemaTreeNode } from '../../../../../next-data-model/src/model/json-schema/types/aliases';
import { JsonSchemaTreeNodeKind } from '../../../../../next-data-model/src/model/json-schema/types/node-kind';
export declare function isJsonSchemaRootNode(node: JsonSchemaTreeNode): boolean;
export declare function isJsonSchemaCombinerOwnerNode(node: JsonSchemaTreeNode): boolean;
export declare function isJsonSchemaCombinerNestedKind(kind: JsonSchemaTreeNodeKind): boolean;
