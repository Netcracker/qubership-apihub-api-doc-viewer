import { LayoutSide } from "../../../types/internal/LayoutSide";
import { DdlApiTreeNodeWithDiffs } from '../../../../../next-data-model/src/model/ddlapi/types/aliases';
import { DdlApiTreeNodeKinds } from '../../../../../next-data-model/src/model/ddlapi/types/node-kind';
import { FC } from '../../../../../../node_modules/react';
type ColumnTypeLabelWithDiffsProps = {
    node: DdlApiTreeNodeWithDiffs<typeof DdlApiTreeNodeKinds.COLUMN>;
    layoutSide: LayoutSide;
};
export declare const ColumnTypeLabelWithDiffs: FC<ColumnTypeLabelWithDiffsProps>;
export {};
