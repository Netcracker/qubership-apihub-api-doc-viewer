import type { LayoutSide } from '../../../types/internal/LayoutSide';
import type { NodeDiffs, NodeDiffsSeverities } from '../../../../../next-data-model/src/model/abstract/tree-with-diffs/tree-node.interface';
import type { ReactElement } from '../../../../../../node_modules/react';
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
export type TitleRowProps<V extends object | null = object | null> = {
    value?: string;
    expandable: boolean;
    expanded?: boolean;
    onClickExpander?: () => void;
    variant: TitleVariant;
    enableMainHeader?: boolean;
    subheader?: (layoutSide: LayoutSide) => ReactElement;
    diffs?: NodeDiffs<V>;
    diffsSeverities?: NodeDiffsSeverities;
};
export type TitleRowContentProps = TitleRowProps & {
    layoutSide: LayoutSide;
};
