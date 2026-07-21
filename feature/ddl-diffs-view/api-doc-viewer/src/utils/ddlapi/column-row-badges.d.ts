import { ColumnRowBadgesFlagDiffs } from '../../components/DdlTableViewer/ColumnRowBadges/types';
import { DdlApiTreeNodeWithDiffs } from '../../../../next-data-model/src/model/ddlapi/types/aliases';
export declare const COLUMN_FLAG_DIFF_KEYS: readonly ["isPrimaryKey", "isUnique", "isNotNull", "isGenerated", "isForeignKey"];
export declare const INDEX_FLAG_DIFF_KEYS: readonly ["isUnique"];
export declare function takeColumnFlagDiffs(node: DdlApiTreeNodeWithDiffs): ColumnRowBadgesFlagDiffs | undefined;
export declare function takeIndexFlagDiffs(node: DdlApiTreeNodeWithDiffs): ColumnRowBadgesFlagDiffs | undefined;
