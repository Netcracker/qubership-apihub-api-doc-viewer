import { LayoutSide } from '../../../types/internal/LayoutSide';
import { ChangedPropertyMetaData } from '../../../../../next-data-model/src/model/abstract/tree-with-diffs/tree-node.interface';
import { DdlApiForeignKeyTarget } from '../../../../../next-data-model/src/model/ddlapi/tree/node-value';
export type ColumnRowBadgesValue = {
    isPrimaryKey?: boolean;
    isUnique?: boolean;
    isNotNull?: boolean;
    isGenerated?: boolean;
    isForeignKey?: boolean;
    foreignKeyTarget?: DdlApiForeignKeyTarget;
};
export type ColumnRowBadgesFlagDiffs = {
    isPrimaryKey?: ChangedPropertyMetaData;
    isUnique?: ChangedPropertyMetaData;
    isNotNull?: ChangedPropertyMetaData;
    isGenerated?: ChangedPropertyMetaData;
    isForeignKey?: ChangedPropertyMetaData;
};
export type ColumnRowBadgesProps = {
    columnId: string;
    value: ColumnRowBadgesValue;
    flagDiffs?: ColumnRowBadgesFlagDiffs;
};
export type ColumnRowBadgesContentProps = ColumnRowBadgesProps & {
    layoutSide: LayoutSide;
};
