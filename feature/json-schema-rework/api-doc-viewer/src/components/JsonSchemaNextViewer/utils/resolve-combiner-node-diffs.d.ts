import { SelectorOption } from '../../shared-components/Selector/Selector';
import { ChangedPropertyMetaData, NodeDiffsSeverities } from '../../../../../next-data-model/src/model/abstract/tree-with-diffs/tree-node.interface';
import { JsonSchemaTreeNode, JsonSchemaTreeNodeWithDiffs } from '../../../../../next-data-model/src/model/json-schema/types/aliases';
export type CombinerSelectorRowPresentation = {
    selectorRowDiff?: ChangedPropertyMetaData;
    diffsSeverities?: NodeDiffsSeverities;
};
export declare function hasCombinerOwnerChanges(ownerNode: JsonSchemaTreeNode | JsonSchemaTreeNodeWithDiffs): boolean;
export declare function buildCombinerSelectorRowDiff(combinerNode: JsonSchemaTreeNode | JsonSchemaTreeNodeWithDiffs): ChangedPropertyMetaData | undefined;
export declare function buildCombinerSelectorRowDiffsSeverities(combinerNode: JsonSchemaTreeNode | JsonSchemaTreeNodeWithDiffs): NodeDiffsSeverities | undefined;
export declare function buildCombinerSelectorRowPresentation(combinerNode: JsonSchemaTreeNode | JsonSchemaTreeNodeWithDiffs): CombinerSelectorRowPresentation;
export declare function buildCombinerSelectorOption(nestedNode: JsonSchemaTreeNode | JsonSchemaTreeNodeWithDiffs, index: number): SelectorOption<JsonSchemaTreeNode | JsonSchemaTreeNodeWithDiffs>;
