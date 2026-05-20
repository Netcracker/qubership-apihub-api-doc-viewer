import { DescriptionFontSize } from '../../common/annotations/Description/types/DescriptionFontSize';
import { ChangedPropertyMetaData, DiffHighlightingApplicationMode } from '../../../../../next-data-model/src/model/abstract/tree-with-diffs/tree-node.interface';
import { LayoutSide } from '../../../types/internal/LayoutSide';
import { Dispatch, FC, SetStateAction } from '../../../../../../node_modules/react';
import { TitleRowUsage } from "../TitleRow/types";
import { TextValueVariant } from "./types";
type TextValueProps = {
    value?: string;
    variant: TextValueVariant;
    layoutSide: LayoutSide;
    onClick?: () => void;
    fontWeight?: 'normal' | 'bold';
    fontColor?: string;
    label?: string;
    diff?: ChangedPropertyMetaData;
    usage?: TitleRowUsage;
    highlightingMode?: DiffHighlightingApplicationMode;
};
export type TextExpanderProps = Partial<{
    isExpandable: boolean;
    expanded: boolean;
    setExpanded: Dispatch<SetStateAction<boolean>>;
    fontSize?: DescriptionFontSize;
}>;
export declare const TextValue: FC<TextValueProps>;
export {};
