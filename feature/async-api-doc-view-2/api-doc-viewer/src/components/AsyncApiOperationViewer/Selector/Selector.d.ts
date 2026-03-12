import { AsyncApiTreeNode } from '../../../../../next-data-model/src/model/async-api/types/aliases';
import { FC } from '../../../../../../node_modules/react';
import { SizeVariant } from "../types/SizeVariant";
export type SelectorOption = {
    title: string;
    node: AsyncApiTreeNode;
    testId?: string;
};
type SelectorProps = {
    options: SelectorOption[];
    selectedOption: SelectorOption | null;
    onSelectOption: (option: SelectorOption) => void;
    variant: SizeVariant;
};
export declare const Selector: FC<SelectorProps>;
export {};
