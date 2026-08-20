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
export declare function applyCombinerSelection(complexNode: JsonSchemaTreeNode, selections: CombinerSelections, combinerNodeId: NodeId, selectedNestedNodeId: NodeId): CombinerSelections;
