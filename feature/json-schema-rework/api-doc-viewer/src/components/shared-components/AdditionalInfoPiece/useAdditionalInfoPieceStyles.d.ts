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
    /**
     * Legacy parity (`DEFAULT_SERIES_ITEM_TEXT_COLOR`): the `<empty string>` placeholder gets its
     * own muted color, distinct from `isFontMuted` (diff-replace muting) — different concept,
     * different color.
     */
    isEmptyStringPlaceholder?: boolean;
};
export declare function useAdditionalInfoPieceStyles(input?: UseAdditionalInfoPieceStylesInput): AdditionalInfoPieceStyles;
