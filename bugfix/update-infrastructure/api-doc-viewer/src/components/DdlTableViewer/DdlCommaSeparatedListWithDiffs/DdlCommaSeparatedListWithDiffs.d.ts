import { LayoutSide } from "../../../types/internal/LayoutSide";
import { ChangedPropertyMetaData } from '../../../../../next-data-model/src/model/abstract/tree-with-diffs/tree-node.interface';
import { DdlListSideSegment } from '../../../../../next-data-model/src/model/ddlapi/tree-with-diffs/property-row-diffs';
import { FC } from '../../../../../../node_modules/react';
export type DdlCommaSeparatedListDisplay = {
    readonly kind: "plain";
    readonly text: string;
} | {
    readonly kind: "monolithic";
    readonly text: string;
    readonly diff: ChangedPropertyMetaData;
} | {
    readonly kind: "segmented";
    readonly segments: readonly DdlListSideSegment[];
};
type DdlCommaSeparatedListWithDiffsProps = {
    layoutSide: LayoutSide;
    display: DdlCommaSeparatedListDisplay;
};
export declare const DdlCommaSeparatedListWithDiffs: FC<DdlCommaSeparatedListWithDiffsProps>;
export {};
