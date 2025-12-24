import { LayoutSide } from '../../types/internal/LayoutSide';
import type { Diff } from "@netcracker/qubership-apihub-api-diff";
import { FC, ReactElement } from '../../../../../node_modules/react';
declare const TitleVariant: {
    readonly h1: "h1";
    readonly h2: "h2";
    readonly h3: "h3";
    readonly body: "body";
};
type TitleVariant = typeof TitleVariant[keyof typeof TitleVariant];
type TitleRowProps = {
    value?: string;
    diff?: Diff;
    expandable: boolean;
    expanded?: boolean;
    onClickExpander?: () => void;
    level: number;
    variant: TitleVariant;
    subheader?: (layoutSide: LayoutSide) => ReactElement;
};
export declare const TitleRow: FC<TitleRowProps>;
export {};
