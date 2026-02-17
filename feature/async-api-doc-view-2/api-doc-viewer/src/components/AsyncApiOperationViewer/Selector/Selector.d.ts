import { AsyncApiTreeNode } from '../../../../../next-data-model/src/model/async-api/types/aliases';
import { FC } from '../../../../../../node_modules/react';
export type SelectorOption = {
    title: string;
    node: AsyncApiTreeNode;
    testId?: string;
};
type SelectorProps = {
    options: SelectorOption[];
    selectedOption: SelectorOption | null;
    onSelectOption: (option: SelectorOption) => void;
    variant: 'primary' | 'secondary';
};
export declare const Selector: FC<SelectorProps>;
export {};
