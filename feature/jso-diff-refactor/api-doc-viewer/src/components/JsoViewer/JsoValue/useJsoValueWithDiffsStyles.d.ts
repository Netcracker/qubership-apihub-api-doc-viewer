import { HighlightVariant } from '../../../../../next-data-model/src/model/abstract/tree-with-diffs/tree-node.interface';
export type JsoValueWithDiffsAppearance = 'text' | 'block';
export type UseJsoValueWithDiffsStylesInput = {
    appearance: JsoValueWithDiffsAppearance;
    textHighlighterColor?: Exclude<HighlightVariant, HighlightVariant.Gray>;
    borderShadowColor?: HighlightVariant;
    backgroundColor?: HighlightVariant;
    blockClassName?: string;
};
export declare function useJsoValueWithDiffsStyles(input: UseJsoValueWithDiffsStylesInput): string;
