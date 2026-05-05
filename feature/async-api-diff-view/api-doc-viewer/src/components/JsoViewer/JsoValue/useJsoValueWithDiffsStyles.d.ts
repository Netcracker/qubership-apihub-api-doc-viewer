import { DiffStyles, HighlightVariant } from '../../../../../next-data-model/src/model/abstract/tree-with-diffs/tree-node.interface';
type UseJsoValueWithDiffsStylesInput = {
    isPredefinedValueSet: boolean;
    sideStyles?: DiffStyles;
    forcedBackgroundColor?: HighlightVariant;
    forcedTextHighlighterColor?: Exclude<HighlightVariant, HighlightVariant.Gray>;
};
type UseJsoValueWithDiffsStylesResult = {
    styleClasses: string[];
    valueClasses: string[];
};
export declare function useJsoValueWithDiffsStyles(input: UseJsoValueWithDiffsStylesInput): UseJsoValueWithDiffsStylesResult;
export {};
