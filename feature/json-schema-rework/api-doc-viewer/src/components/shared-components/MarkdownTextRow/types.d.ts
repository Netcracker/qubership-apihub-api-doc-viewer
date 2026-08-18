import type { LayoutSide } from '../../../types/internal/LayoutSide';
import type { ChangedPropertyMetaData, NodeDescendantDiffs, NodeDiffsSeverities, NodeDiffsSeverityPlacemennt } from '../../../../../next-data-model/src/model/abstract/tree-with-diffs/tree-node.interface';
import { TextRowUsage } from "../TextRow/types";
import { TextValueVariant } from "../TextValue/types";
import { WithPrecededByProps } from "../WithPrecededByProps";
export type MarkdownTextRowProps = WithPrecededByProps & {
    value: string;
    variant?: TextValueVariant;
    usage?: TextRowUsage;
    diff?: ChangedPropertyMetaData;
    descendantDiffs?: NodeDescendantDiffs;
    diffsSeverities?: NodeDiffsSeverities;
    diffsSeverityPlacement?: NodeDiffsSeverityPlacemennt;
    hideLevelIndicatorWhenSideEmpty?: boolean;
};
export type MarkdownTextRowContentProps = MarkdownTextRowProps & {
    layoutSide: LayoutSide;
};
