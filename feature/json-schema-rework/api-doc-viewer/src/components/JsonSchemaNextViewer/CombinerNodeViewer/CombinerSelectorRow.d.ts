import { SelectorOption } from '../../shared-components/Selector/Selector';
import { ChangedPropertyMetaData, NodeDiffsSeverities } from '../../../../../next-data-model/src/model/abstract/tree-with-diffs/tree-node.interface';
import { JsonSchemaTreeNode } from '../../../../../next-data-model/src/model/json-schema/types/aliases';
import { WithPrecededByProps } from "../../shared-components/WithPrecededByProps";
export type CombinerSelectorRowProps<N extends JsonSchemaTreeNode = JsonSchemaTreeNode> = WithPrecededByProps & {
    combinerKindLabel?: string;
    showSelector?: boolean;
    options: SelectorOption<N>[];
    selectedOption: SelectorOption<N> | null;
    onSelectOption: (option: SelectorOption<N>) => void;
    selectorRowDiff?: ChangedPropertyMetaData;
    diffsSeverities?: NodeDiffsSeverities;
};
export declare const CombinerSelectorRow: <N extends JsonSchemaTreeNode>(props: CombinerSelectorRowProps<N>) => JSX.Element;
