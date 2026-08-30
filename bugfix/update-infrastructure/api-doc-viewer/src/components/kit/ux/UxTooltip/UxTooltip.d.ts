import { FC, PropsWithChildren } from '../../../../../../../node_modules/react';
export type UxTooltipProps = PropsWithChildren & {
    text: string;
    floatingContainer?: boolean;
};
export declare const UxTooltip: FC<UxTooltipProps>;
