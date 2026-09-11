import { JsonSchemaTreeNode } from '../../../../../next-data-model/src/model/json-schema/types/aliases';
import { NodeId } from '../../../../../next-data-model/src/utility-types';
export type CombinerSelections = ReadonlyMap<NodeId, NodeId>;
export type CombinerSelectorLevel<N extends JsonSchemaTreeNode = JsonSchemaTreeNode> = {
    combinerNode: N;
    nestedNodes: N[];
    selectedNestedNode: N;
    showSelector: boolean;
    combinerKindLabel: string | undefined;
};
export declare function resolveCombinerSelectorLevels<N extends JsonSchemaTreeNode>(complexNode: N, selections: CombinerSelections): CombinerSelectorLevel<N>[];
export declare function resolveActiveLeafNode<N extends JsonSchemaTreeNode>(complexNode: N, selections: CombinerSelections): N;
/**
 * The leaf reached from `node` by always taking the first nested-combiner variant at every
 * level (ignoring any live user selection) - i.e. what an as-yet-unselected combiner option's
 * own type value would resolve to, recursively through nested combiners. Reuses
 * {@link resolveActiveLeafNode} with an empty selections map, since `resolveSelectedNestedNode`
 * already falls back to `nestedNodes[0]` when no selection is recorded for a given combiner id.
 */
export declare function resolveCombinerOptionLeafNode<N extends JsonSchemaTreeNode>(node: N): N;
export declare function applyCombinerSelection(complexNode: JsonSchemaTreeNode, selections: CombinerSelections, combinerNodeId: NodeId, selectedNestedNodeId: NodeId): CombinerSelections;
