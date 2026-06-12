import type { LayoutSide } from '../../../types/internal/LayoutSide';
import type { ChangedPropertyMetaData, NodeDescendantDiffs, NodeDiffsSeverities, NodeDiffsSeverityPlacemennt } from '../../../../../next-data-model/src/model/abstract/tree-with-diffs/tree-node.interface';
import { TextValueVariant } from "../TextValue/types";
import { WithPrecededByProps } from "../WithPrecededByProps";
export type TextRowProps = WithPrecededByProps & {
    value?: string;
    variant: TextValueVariant;
    label?: string;
    textFontWeight?: 'normal' | 'medium' | 'bold';
    labelFontWeight?: 'normal' | 'medium' | 'bold';
    labelColor?: string;
    textColor?: string;
    diff?: ChangedPropertyMetaData;
    descendantDiffs?: NodeDescendantDiffs;
    diffsSeverities?: NodeDiffsSeverities;
    diffsSeverityPlacement?: NodeDiffsSeverityPlacemennt;
};
export type TextRowContentProps = TextRowProps & {
    layoutSide: LayoutSide;
};
