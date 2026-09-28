import { LayoutSide } from '../../../types/internal/LayoutSide';
import { JsonSchemaTreeNode, JsonSchemaTreeNodeWithDiffs } from '../../../../../next-data-model/src/model/json-schema/types/aliases';
import { JsonSchemaTreeNodeMeta } from '../../../../../next-data-model/src/model/json-schema/types/node-meta';
/**
 * Generic structural "what kind of node is this" checks, reused across the title, plain-content,
 * and type-value rendering domains. Combiner-specific checks live on {@link JsonSchemaCombiner}
 * (`resolve-combiner.ts`) instead - grouped with the rest of the combiner domain rather than here.
 */
export declare class JsonSchemaNodeTypeCheckers {
    static isRootNode(node: JsonSchemaTreeNode): boolean;
    /** `additionalProperties`'s own schema node - the one whose parent `propertyNames` constrains it. */
    static isAdditionalPropertiesNode(node: JsonSchemaTreeNode): boolean;
    static isBooleanAdditionalPropertiesNode(node: JsonSchemaTreeNode, meta: JsonSchemaTreeNodeMeta | null | undefined): boolean;
    /**
     * A primitive type (string/number/integer/boolean) has no children, so the nesting-indicator
     * row above a node's children list has nothing to introduce - hide it on that basis.
     */
    static isNestingIndicatorHiddenForPlainNode(node: JsonSchemaTreeNode): boolean;
    /** Per-side counterpart of {@link isNestingIndicatorHiddenForPlainNode} for diffed nodes. */
    static isNestingIndicatorHiddenForSide(node: JsonSchemaTreeNodeWithDiffs, layoutSide: LayoutSide): boolean;
}
