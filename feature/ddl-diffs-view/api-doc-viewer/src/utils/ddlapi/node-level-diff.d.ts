import { TitleRowProps } from '../../components/shared-components/TitleRow/types';
import { ChangedPropertyMetaData } from '../../../../next-data-model/src/model/abstract/tree-with-diffs/tree-node.interface';
import { DdlApiColumnRowValue, DdlApiIndexRowValue } from '../../../../next-data-model/src/model/ddlapi/tree/node-value';
import { DdlApiTreeNodeWithDiffs } from '../../../../next-data-model/src/model/ddlapi/types/aliases';
import { DdlApiTreeNodeKinds } from '../../../../next-data-model/src/model/ddlapi/types/node-kind';
import { LayoutSide } from '../../types/internal/LayoutSide';
/** Row value for DDL property list items rendered with a title row + subheader (column, index). */
export type DdlApiPropertyRowValue = DdlApiColumnRowValue | DdlApiIndexRowValue;
export type DdlApiPropertyNodeWithDiffs = DdlApiTreeNodeWithDiffs<typeof DdlApiTreeNodeKinds.COLUMN> | DdlApiTreeNodeWithDiffs<typeof DdlApiTreeNodeKinds.INDEX>;
export declare function takeNodeDiffIfPresent(node: DdlApiPropertyNodeWithDiffs): ChangedPropertyMetaData | undefined;
export declare function buildDdlPropertyTitleRowDiffProps(node: DdlApiPropertyNodeWithDiffs): Pick<TitleRowProps, "diff" | "descendantDiffs" | "diffsSeverities" | "highlightingMode">;
export declare function isNodeSubheaderVisible(nodeLevelDiff: ChangedPropertyMetaData | undefined, layoutSide: LayoutSide): boolean;
