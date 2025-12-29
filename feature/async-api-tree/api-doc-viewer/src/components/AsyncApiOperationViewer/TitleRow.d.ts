import { LayoutSide } from '../../types/internal/LayoutSide';
import type { Diff } from "@netcracker/qubership-apihub-api-diff";
import { FC, ReactElement } from '../../../../../node_modules/react';
export declare const TitleVariant: {
    readonly h1: "h1";
    readonly h2: "h2";
    readonly h3: "h3";
    readonly h4: "h4";
    readonly body: "body";
};
export type TitleVariant = typeof TitleVariant[keyof typeof TitleVariant];
type TitleRowProps = {
    value?: string;
    diff?: Diff;
    expandable: boolean;
    expanded?: boolean;
    onClickExpander?: () => void;
    variant: TitleVariant;
    subheader?: (layoutSide: LayoutSide) => ReactElement;
};
export declare const TitleRow: FC<TitleRowProps>;
export {};
