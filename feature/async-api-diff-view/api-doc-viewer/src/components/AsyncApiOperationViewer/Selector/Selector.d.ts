import { LayoutSide } from '../../../types/internal/LayoutSide';
import { DiffType } from "@netcracker/qubership-apihub-api-diff";
import { NodeDiffs } from '../../../../../next-data-model/src/model/abstract/tree-with-diffs/tree-node.interface';
import { AsyncApiTreeNode } from '../../../../../next-data-model/src/model/async-api/types/aliases';
import { FC } from '../../../../../../node_modules/react';
import { SizeVariant } from "../types/SizeVariant";
export type SelectorOption<V extends object | null = object | null> = {
    title: string;
    node: AsyncApiTreeNode;
    testId?: string;
    diffs?: NodeDiffs<V>;
    descendantDiffs?: Set<DiffType>;
};
type SelectorProps<V extends object | null = object | null> = {
    options: SelectorOption<V>[];
    selectedOption: SelectorOption<V> | null;
    onSelectOption: (option: SelectorOption<V>) => void;
    variant: SizeVariant;
    layoutSide?: LayoutSide;
};
export declare const Selector: FC<SelectorProps>;
export {};
