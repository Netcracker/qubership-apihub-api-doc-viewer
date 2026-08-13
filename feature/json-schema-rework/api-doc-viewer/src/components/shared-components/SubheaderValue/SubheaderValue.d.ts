import { FC } from '../../../../../../node_modules/react';
import { SubheaderValueAppearance } from "./types";
export type SubheaderValueProps = {
    isVisible: boolean;
    value: unknown;
    appearance?: SubheaderValueAppearance;
};
export declare const SubheaderValue: FC<SubheaderValueProps>;
