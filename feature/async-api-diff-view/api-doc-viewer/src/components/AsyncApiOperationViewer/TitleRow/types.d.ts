import type { LayoutSide } from '../../../types/internal/LayoutSide';
import type { ChangedPropertyMetaData, NodeDescendantDiffs, NodeDiffsSeverities } from '../../../../../next-data-model/src/model/abstract/tree-with-diffs/tree-node.interface';
import type { ReactElement } from '../../../../../../node_modules/react';
import { TextValueVariant } from "../TextValue/types";
export declare const TitleVariant: {
    readonly h1: "h1";
    readonly h2: "h2";
    readonly h3: "h3";
    readonly h4: "h4";
    readonly h5: "h5";
    readonly h6: "h6";
    readonly body: "body";
};
export type TitleVariant = typeof TitleVariant[keyof typeof TitleVariant];
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
