import { HighlightVariant } from '../../../../../next-data-model/src/model/abstract/tree-with-diffs/tree-node.interface';
import { FC } from '../../../../../../node_modules/react';
import { SubheaderValueAppearance } from "./types";
export type SubheaderValueWithDiffsProps = {
    isVisible: boolean;
    value: unknown;
    appearance?: SubheaderValueAppearance;
    textHighlighterColor?: Exclude<HighlightVariant, HighlightVariant.Gray>;
    backgroundColor?: HighlightVariant;
};
export declare const SubheaderValueWithDiffs: FC<SubheaderValueWithDiffsProps>;
