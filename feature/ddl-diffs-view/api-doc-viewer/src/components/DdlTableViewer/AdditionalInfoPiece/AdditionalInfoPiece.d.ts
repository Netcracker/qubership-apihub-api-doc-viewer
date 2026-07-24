import { HighlightVariant } from '../../../../../next-data-model/src/model/abstract/tree-with-diffs/tree-node.interface';
import { FC } from '../../../../../../node_modules/react';
export type AdditionalInfoPieceProps = {
    isVisible: boolean;
    value: unknown;
    textHighlighterColor?: Exclude<HighlightVariant, HighlightVariant.Gray>;
};
export declare const AdditionalInfoPiece: FC<AdditionalInfoPieceProps>;
