import { ColumnRowBadgesFlagDiffs } from '../../components/DdlTableViewer/ColumnRowBadges/types';
import { DdlApiTreeNodeWithDiffs } from '../../../../next-data-model/src/model/ddlapi/types/aliases';
export declare function takeColumnForeignKeyTargetDiffs(node: DdlApiTreeNodeWithDiffs): Partial<Record<string, import('../../../../next-data-model/src/model/abstract/tree-with-diffs/tree-node.interface').ChangedPropertyMetaData>> | undefined;
export declare function takeColumnFlagDiffs(node: DdlApiTreeNodeWithDiffs): ColumnRowBadgesFlagDiffs | undefined;
export declare function takeIndexFlagDiffs(node: DdlApiTreeNodeWithDiffs): ColumnRowBadgesFlagDiffs | undefined;
