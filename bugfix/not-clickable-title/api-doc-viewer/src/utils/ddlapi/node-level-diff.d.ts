import { TitleRowProps } from '../../components/shared-components/TitleRow/types';
import { DdlApiPropertyNodeWithDiffs, DdlApiTableHeaderNodeWithDiffs } from '../../../../next-data-model/src/model/ddlapi/tree-with-diffs/property-row-diffs';
export type { DdlApiPropertyNodeWithDiffs, DdlApiPropertyRowValue, } from '../../../../next-data-model/src/model/ddlapi/tree-with-diffs/property-row-diffs';
export { DDL_COLUMN_FLAG_DIFF_KEYS, DDL_INDEX_FLAG_DIFF_KEYS, } from '../../../../next-data-model/src/model/ddlapi/tree-with-diffs/property-row-diffs';
export declare const takeNodeDiffIfPresent: (node: DdlApiPropertyNodeWithDiffs) => import('../../../../next-data-model/src/model/abstract/tree-with-diffs/tree-node.interface').ChangedPropertyMetaData | undefined;
export declare function buildDdlPropertyTitleRowDiffProps(node: DdlApiPropertyNodeWithDiffs): Pick<TitleRowProps, "diff" | "descendantDiffs" | "diffsSeverities" | "highlightingMode">;
export declare function buildDdlTableTitleRowDiffProps(node: DdlApiTableHeaderNodeWithDiffs): Pick<TitleRowProps, "diff" | "descendantDiffs" | "diffsSeverities" | "highlightingMode">;
export declare const takeTableNodeDiffIfPresent: (node: DdlApiTableHeaderNodeWithDiffs) => import('../../../../next-data-model/src/model/abstract/tree-with-diffs/tree-node.interface').ChangedPropertyMetaData | undefined;
