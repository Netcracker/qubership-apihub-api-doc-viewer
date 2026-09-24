import { HighlightVariant } from '../../../../../next-data-model/src/model/abstract/tree-with-diffs/tree-node.interface';
export type AdditionalInfoPieceStyles = {
    blockClassName: string;
    valueClassName: string;
};
export type UseAdditionalInfoPieceStylesInput = {
    textHighlighterColor?: Exclude<HighlightVariant, HighlightVariant.Gray>;
    borderShadowColor?: HighlightVariant;
    isFontMuted?: boolean;
};
export declare function useAdditionalInfoPieceStyles(input?: UseAdditionalInfoPieceStylesInput): AdditionalInfoPieceStyles;
