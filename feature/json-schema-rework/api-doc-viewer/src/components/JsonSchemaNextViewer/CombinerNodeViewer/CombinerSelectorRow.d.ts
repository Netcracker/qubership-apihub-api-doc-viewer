import { SelectorOption } from '../../shared-components/Selector/Selector';
import { ChangedPropertyMetaData, NodeDiffsSeverities } from '../../../../../next-data-model/src/model/abstract/tree-with-diffs/tree-node.interface';
import { JsonSchemaTreeNode } from '../../../../../next-data-model/src/model/json-schema/types/aliases';
import { DiffAction } from "@netcracker/qubership-apihub-api-diff";
export type CombinerSelectorRowProps<N extends JsonSchemaTreeNode = JsonSchemaTreeNode> = {
    combinerKindLabel?: string;
    showSelector?: boolean;
    options: SelectorOption<N>[];
    selectedOption: SelectorOption<N> | null;
    onSelectOption: (option: SelectorOption<N>) => void;
    selectorRowDiff?: ChangedPropertyMetaData;
    diffsSeverities?: NodeDiffsSeverities;
    levelReductionAction?: typeof DiffAction.add | typeof DiffAction.remove;
};
export declare const CombinerSelectorRow: <N extends JsonSchemaTreeNode>(props: CombinerSelectorRowProps<N>) => JSX.Element;
