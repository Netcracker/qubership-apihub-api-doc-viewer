import { ChangedPropertyMetaData } from '../../../../../next-data-model/src/model/abstract/tree-with-diffs/tree-node.interface';
import { LayoutSide } from '../../../types/internal/LayoutSide';
import { FC } from '../../../../../../node_modules/react';
import { TextValueVariant } from "./types";
type TextValueProps = {
    value?: string;
    variant: TextValueVariant;
    layoutSide: LayoutSide;
    onClick?: () => void;
    diffs?: ChangedPropertyMetaData;
};
export declare const TextValue: FC<TextValueProps>;
export {};
