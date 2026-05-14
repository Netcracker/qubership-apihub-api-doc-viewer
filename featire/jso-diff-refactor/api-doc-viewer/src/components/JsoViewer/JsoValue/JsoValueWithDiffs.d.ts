import { HighlightVariant } from '../../../../../next-data-model/src/model/abstract/tree-with-diffs/tree-node.interface';
import { FC } from '../../../../../../node_modules/react';
import { JsoValueWithDiffsAppearance } from "./useJsoValueWithDiffsStyles";
export type JsoValueWithDiffsProps = {
    isVisible: boolean;
    value: unknown;
    appearance: JsoValueWithDiffsAppearance;
    textHighlighterColor?: Exclude<HighlightVariant, HighlightVariant.Gray>;
    borderShadowColor?: HighlightVariant;
    backgroundColor?: HighlightVariant;
    blockClassName?: string;
};
export declare const JsoValueWithDiffs: FC<JsoValueWithDiffsProps>;
