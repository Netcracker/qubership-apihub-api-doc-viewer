import type { LayoutSide } from '../../../types/internal/LayoutSide';
import type { ChangedPropertyMetaData, NodeDescendantDiffs, NodeDiffsSeverities, NodeDiffsSeverityPlacemennt } from '../../../../../next-data-model/src/model/abstract/tree-with-diffs/tree-node.interface';
import { TextValueVariant } from "../TextValue/types";
export type TextRowProps = {
    value?: string;
    variant: TextValueVariant;
    label?: string;
    fontWeight?: 'normal' | 'bold';
    diff?: ChangedPropertyMetaData;
    descendantDiffs?: NodeDescendantDiffs;
    diffsSeverities?: NodeDiffsSeverities;
    diffsSeverityPlacement?: NodeDiffsSeverityPlacemennt;
};
export type TextRowContentProps = TextRowProps & {
    layoutSide: LayoutSide;
};
