import { HighlightVariant } from '../../../../../next-data-model/src/model/abstract/tree-with-diffs/tree-node.interface';
import { SubheaderValueAppearance } from "./types";
export type UseSubheaderValueWithDiffsStylesInput = {
    appearance: SubheaderValueAppearance;
    textHighlighterColor?: Exclude<HighlightVariant, HighlightVariant.Gray>;
    backgroundColor?: HighlightVariant;
};
export declare function useSubheaderValueWithDiffsStyles(input: UseSubheaderValueWithDiffsStylesInput): string;
