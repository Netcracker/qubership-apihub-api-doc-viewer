import { FC, PropsWithChildren } from '../../../../../../../node_modules/react';
export type UxTooltipProps = PropsWithChildren & {
    text: string;
    floatingContainer?: boolean;
    /**
     * Tailwind max-width class (literal, e.g. `max-w-sm`) that lets long text wrap. Omitted = the
     * single-line `w-max` popup every existing tooltip uses.
     */
    maxWidthClass?: string;
};
export declare const UxTooltip: FC<UxTooltipProps>;
