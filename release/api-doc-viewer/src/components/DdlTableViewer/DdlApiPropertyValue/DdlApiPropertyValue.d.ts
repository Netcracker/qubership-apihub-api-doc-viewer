import { FC } from '../../../../../../node_modules/react';
import { DdlApiPropertyValueAppearance } from "./useDdlApiPropertyValueStyles";
export type DdlApiPropertyValueProps = {
    isVisible: boolean;
    value: unknown;
    appearance: DdlApiPropertyValueAppearance;
};
export declare const DdlApiPropertyValue: FC<DdlApiPropertyValueProps>;
