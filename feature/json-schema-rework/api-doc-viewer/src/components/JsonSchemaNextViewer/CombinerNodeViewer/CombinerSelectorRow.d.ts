import { SelectorOption } from '../../shared-components/Selector/Selector';
import { JsonSchemaTreeNode } from '../../../../../next-data-model/src/model/json-schema/types/aliases';
import { WithPrecededByProps } from "../../shared-components/WithPrecededByProps";
export type CombinerSelectorRowProps<N extends JsonSchemaTreeNode = JsonSchemaTreeNode> = WithPrecededByProps & {
    options: SelectorOption<N>[];
    selectedOption: SelectorOption<N> | null;
    onSelectOption: (option: SelectorOption<N>) => void;
};
export declare const CombinerSelectorRow: <N extends JsonSchemaTreeNode>(props: CombinerSelectorRowProps<N>) => JSX.Element;
