import { HighlightVariant } from '../../../../../next-data-model/src/model/abstract/tree-with-diffs/tree-node.interface';
import { FC } from '../../../../../../node_modules/react';
import { AdditionalInfoPieceUsage } from "./types";
export type AdditionalInfoPieceProps = {
    isVisible: boolean;
    value: unknown;
    usage?: AdditionalInfoPieceUsage;
    textHighlighterColor?: Exclude<HighlightVariant, HighlightVariant.Gray>;
    borderShadowColor?: HighlightVariant;
    isFontMuted?: boolean;
};
export declare const AdditionalInfoPiece: FC<AdditionalInfoPieceProps>;
