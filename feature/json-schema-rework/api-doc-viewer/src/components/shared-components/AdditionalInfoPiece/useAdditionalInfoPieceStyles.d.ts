import { HighlightVariant } from '../../../../../next-data-model/src/model/abstract/tree-with-diffs/tree-node.interface';
import { AdditionalInfoPieceUsage } from "./types";
export type AdditionalInfoPieceStyles = {
    blockClassName: string;
    valueClassName: string;
};
export type UseAdditionalInfoPieceStylesInput = {
    usage?: AdditionalInfoPieceUsage;
    textHighlighterColor?: Exclude<HighlightVariant, HighlightVariant.Gray>;
    borderShadowColor?: HighlightVariant;
    isFontMuted?: boolean;
};
export declare function useAdditionalInfoPieceStyles(input?: UseAdditionalInfoPieceStylesInput): AdditionalInfoPieceStyles;
