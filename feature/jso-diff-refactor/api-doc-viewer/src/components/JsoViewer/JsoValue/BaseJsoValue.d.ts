import { JsoPropertyValueType } from '../../../../../next-data-model/src/model/jso/types/node-value-type';
import { FC } from '../../../../../../node_modules/react';
type BaseJsoValueProps = {
    showSubheader: boolean;
    resolvedValue: unknown;
    resolvedValueType: JsoPropertyValueType;
    styleClasses: string[];
    valueClasses: string[];
};
export declare const BaseJsoValue: FC<BaseJsoValueProps>;
export {};
