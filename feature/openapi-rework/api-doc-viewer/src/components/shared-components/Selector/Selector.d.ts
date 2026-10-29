import { LayoutSide } from '../../../types/internal/LayoutSide';
import { ITreeNode } from '../../../../../next-data-model/src/model/abstract/tree/tree-node.interface';
import { NodeDescendantDiffsSummary, NodeDiffs, NodeDiffsSummary } from '../../../../../next-data-model/src/model/abstract/tree-with-diffs/tree-node.interface';
import { ReactNode } from '../../../../../../node_modules/react';
import { SelectorVariant } from './types';
export type SelectorOption<N extends ITreeNode, V extends object | null = object | null> = {
    /** Plain content, or a `(layoutSide) => ReactNode` for content that differs per diff side (see `NestingIndicatorTitleRow`'s `title` prop for the same pattern). */
    title: ReactNode | ((layoutSide: LayoutSide) => ReactNode);
    node: N;
    testId?: string;
    /**
     * Option color class from the caller's color config (`components/shared-styles/colors/`, e.g.
     * `openapi-response-code_2xx`); omitted = the neutral grey look (unchanged markup).
     */
    toneClass?: string;
    diffs?: NodeDiffs<V>;
    diffsSummary?: NodeDiffsSummary;
    descendantDiffsSummary?: NodeDescendantDiffsSummary;
};
type SelectorProps<N extends ITreeNode, V extends object | null = object | null> = {
    options: SelectorOption<N, V>[];
    selectedOption: SelectorOption<N, V> | null;
    onSelectOption: (option: SelectorOption<N, V>) => void;
    variant: SelectorVariant;
    layoutSide?: LayoutSide;
    /**
     * One non-wrapping line of options for an `ArrowScrollStrip` (security toolbar, response codes); each option is
     * cropped with an ellipsis down to one character. Omitted = today's wrapping layout.
     */
    noWrap?: boolean;
};
export declare function Selector<N extends ITreeNode, V extends object | null = object | null>(props: SelectorProps<N, V>): JSX.Element | null;
export {};
