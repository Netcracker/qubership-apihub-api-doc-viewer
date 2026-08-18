import { LayoutSide } from '../../../types/internal/LayoutSide';
import { ChangedPropertyMetaData } from '../../../../../next-data-model/src/model/abstract/tree-with-diffs/tree-node.interface';
import { FC } from '../../../../../../node_modules/react';
import { TextRowUsage } from "../TextRow/types";
import { TextValueVariant } from "../TextValue/types";
type MarkdownTextValueProps = {
    value: string;
    variant?: TextValueVariant;
    usage?: TextRowUsage;
    layoutSide: LayoutSide;
    diff?: ChangedPropertyMetaData;
};
export declare const MarkdownTextValue: FC<MarkdownTextValueProps>;
export {};
