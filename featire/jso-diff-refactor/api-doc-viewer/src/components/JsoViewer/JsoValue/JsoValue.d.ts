import { FC } from '../../../../../../node_modules/react';
import { JsoValueAppearance } from "./useJsoValueStyles";
export type JsoValueProps = {
    isVisible: boolean;
    value: unknown;
    appearance: JsoValueAppearance;
    textClassName?: string;
    blockClassName?: string;
};
export declare const JsoValue: FC<JsoValueProps>;
