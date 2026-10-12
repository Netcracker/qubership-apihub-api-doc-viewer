import { LayoutSide } from '../../../types/internal/LayoutSide';
import { ChangedPropertyMetaData } from '../../../../../next-data-model/src/model/abstract/tree-with-diffs/tree-node.interface';
import { DdlApiForeignKeyTarget } from '../../../../../next-data-model/src/model/ddlapi/tree/node-value';
import { DdlApiForeignKeyTargetDiffs } from '../../../../../next-data-model/src/model/ddlapi/tree-with-diffs/property-row-diffs';
export type ColumnRowBadgesValue = {
    isPrimaryKey?: boolean;
    isUnique?: boolean;
    isNotNull?: boolean;
    isGenerated?: boolean;
    isForeignKey?: boolean;
    foreignKeyTargets?: readonly DdlApiForeignKeyTarget[];
};
export type ColumnRowBadgesFlagDiffs = {
    isPrimaryKey?: ChangedPropertyMetaData;
    isUnique?: ChangedPropertyMetaData;
    isNotNull?: ChangedPropertyMetaData;
    isGenerated?: ChangedPropertyMetaData;
};
export type ColumnRowBadgesProps = {
    columnId: string;
    value: ColumnRowBadgesValue;
    flagDiffs?: ColumnRowBadgesFlagDiffs;
    foreignKeyTargetDiffs?: DdlApiForeignKeyTargetDiffs;
};
export type ColumnRowBadgesContentProps = ColumnRowBadgesProps & {
    layoutSide: LayoutSide;
};
