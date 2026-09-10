import { LayoutSide } from '../../../types/internal/LayoutSide';
import { JsonSchemaTreeNode, JsonSchemaTreeNodeWithDiffs } from '../../../../../next-data-model/src/model/json-schema/types/aliases';
import { JsonSchemaTreeNodeKind } from '../../../../../next-data-model/src/model/json-schema/types/node-kind';
export declare function isJsonSchemaRootNode(node: JsonSchemaTreeNode): boolean;
export declare function isJsonSchemaCombinerOwnerNode(node: JsonSchemaTreeNode): boolean;
export declare function isJsonSchemaCombinerNestedKind(kind: JsonSchemaTreeNodeKind): boolean;
/**
 * A primitive type (string/number/integer/boolean) has no children, so the nesting-indicator
 * row above a node's children list has nothing to introduce - hide it on that basis.
 */
export declare function isJsonSchemaNestingIndicatorHiddenForPlainNode(node: JsonSchemaTreeNode): boolean;
/** Per-side counterpart of {@link isJsonSchemaNestingIndicatorHiddenForPlainNode} for diffed nodes. */
export declare function isJsonSchemaNestingIndicatorHiddenForSide(node: JsonSchemaTreeNodeWithDiffs, layoutSide: LayoutSide): boolean;
