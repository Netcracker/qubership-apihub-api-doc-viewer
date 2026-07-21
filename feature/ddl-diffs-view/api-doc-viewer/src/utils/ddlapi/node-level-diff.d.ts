import { TitleRowProps } from '../../components/shared-components/TitleRow/types';
import { DdlApiPropertyNodeWithDiffs, takeDdlPropertyNodeDiffIfPresent } from '../../../../next-data-model/src/model/ddlapi/tree-with-diffs/property-row-diffs';
export type { DdlApiPropertyNodeWithDiffs, DdlApiPropertyRowValue, } from '../../../../next-data-model/src/model/ddlapi/tree-with-diffs/property-row-diffs';
export { DDL_COLUMN_FLAG_DIFF_KEYS, DDL_INDEX_FLAG_DIFF_KEYS, } from '../../../../next-data-model/src/model/ddlapi/tree-with-diffs/property-row-diffs';
export declare const takeNodeDiffIfPresent: typeof takeDdlPropertyNodeDiffIfPresent;
export declare function buildDdlPropertyTitleRowDiffProps(node: DdlApiPropertyNodeWithDiffs): Pick<TitleRowProps, "diff" | "descendantDiffs" | "diffsSeverities" | "highlightingMode">;
