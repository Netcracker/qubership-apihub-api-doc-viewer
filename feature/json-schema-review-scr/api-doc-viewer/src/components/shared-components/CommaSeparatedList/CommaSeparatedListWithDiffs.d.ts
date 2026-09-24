import { LayoutSide } from '../../../types/internal/LayoutSide';
import { SideListDisplay } from '../../../../../next-data-model/src/model/abstract/tree-with-diffs/list-side-display';
import { FC } from '../../../../../../node_modules/react';
export type { SideListDisplay };
type CommaSeparatedListWithDiffsProps = {
    layoutSide: LayoutSide;
    display: SideListDisplay;
};
export declare const CommaSeparatedListWithDiffs: FC<CommaSeparatedListWithDiffsProps>;
