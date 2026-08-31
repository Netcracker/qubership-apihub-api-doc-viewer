import { HighlightVariant } from '../../../../../next-data-model/src/model/abstract/tree-with-diffs/tree-node.interface';
import { FC } from '../../../../../../node_modules/react';
import { DdlApiPropertyValueAppearance } from "./useDdlApiPropertyValueStyles";
export type DdlApiPropertyValueWithDiffsProps = {
    isVisible: boolean;
    value: unknown;
    appearance: DdlApiPropertyValueAppearance;
    textHighlighterColor?: Exclude<HighlightVariant, HighlightVariant.Gray>;
    backgroundColor?: HighlightVariant;
};
export declare const DdlApiPropertyValueWithDiffs: FC<DdlApiPropertyValueWithDiffsProps>;
