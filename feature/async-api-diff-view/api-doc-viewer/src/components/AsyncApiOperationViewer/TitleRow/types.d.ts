import type { LayoutSide } from '../../../types/internal/LayoutSide';
import type { ChangedPropertyMetaData, NodeDescendantDiffs, NodeDiffsSeverities } from '../../../../../next-data-model/src/model/abstract/tree-with-diffs/tree-node.interface';
import type { ReactElement } from '../../../../../../node_modules/react';
import { TextValueVariant } from "../TextValue/types";
export type TitleRowProps = {
    value?: string;
    expandable: boolean;
    expanded?: boolean;
    onClickExpander?: () => void;
    variant: TextValueVariant;
    enableMainHeader?: boolean;
    subheader?: (layoutSide: LayoutSide) => ReactElement;
    diff?: ChangedPropertyMetaData;
    descendantDiffs?: NodeDescendantDiffs;
    diffsSeverities?: NodeDiffsSeverities;
};
export type TitleRowContentProps = TitleRowProps & {
    layoutSide: LayoutSide;
};
