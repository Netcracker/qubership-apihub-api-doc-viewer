import { TitleRowProps } from '../../components/shared-components/TitleRow/types';
import { ChangedPropertyMetaData } from '../../../../next-data-model/src/model/abstract/tree-with-diffs/tree-node.interface';
import { DdlApiTreeNodeWithDiffs } from '../../../../next-data-model/src/model/ddlapi/types/aliases';
import { LayoutSide } from '../../types/internal/LayoutSide';
export declare function takeNodeDiffIfPresent(node: DdlApiTreeNodeWithDiffs): ChangedPropertyMetaData | undefined;
export declare function buildDdlPropertyTitleRowDiffProps(node: DdlApiTreeNodeWithDiffs): Pick<TitleRowProps, "diff" | "descendantDiffs" | "diffsSeverities" | "highlightingMode">;
export declare function isNodeSubheaderVisible(nodeLevelDiff: ChangedPropertyMetaData | undefined, layoutSide: LayoutSide): boolean;
