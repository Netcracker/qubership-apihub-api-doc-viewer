import { ChangedPropertyMetaData } from '../../../../../next-data-model/src/model/abstract/tree-with-diffs/tree-node.interface';
import { LayoutSide } from '../../../types/internal/LayoutSide';
import { JsoPropertyValueType } from '../../../../../next-data-model/src/model/jso/types/node-value-type';
import { FC } from '../../../../../../node_modules/react';
type JsoValueProps = {
    value: unknown;
    valueType: JsoPropertyValueType;
    isPredefinedValueSet: boolean;
    layoutSide: LayoutSide;
    diff?: ChangedPropertyMetaData;
};
export declare const JsoValue: FC<JsoValueProps>;
export {};
