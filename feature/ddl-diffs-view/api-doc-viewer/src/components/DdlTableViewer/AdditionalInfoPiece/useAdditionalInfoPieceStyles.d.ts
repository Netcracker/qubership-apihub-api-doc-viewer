import { HighlightVariant } from '../../../../../next-data-model/src/model/abstract/tree-with-diffs/tree-node.interface';
export type AdditionalInfoPieceStyles = {
    blockClassName: string;
    valueClassName: string;
};
export declare function useAdditionalInfoPieceStyles(textHighlighterColor?: Exclude<HighlightVariant, HighlightVariant.Gray>): AdditionalInfoPieceStyles;
