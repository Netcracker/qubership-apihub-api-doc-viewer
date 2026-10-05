import { HighlightVariant } from '../../../../../next-data-model/src/model/abstract/tree-with-diffs/tree-node.interface';
import { DdlApiPropertyValueAppearance } from './useDdlApiPropertyValueStyles';
export type UseDdlApiPropertyValueWithDiffsStylesInput = {
    appearance: DdlApiPropertyValueAppearance;
    textHighlighterColor?: Exclude<HighlightVariant, HighlightVariant.Gray>;
    backgroundColor?: HighlightVariant;
};
export declare function useDdlApiPropertyValueWithDiffsStyles(input: UseDdlApiPropertyValueWithDiffsStylesInput): string;
