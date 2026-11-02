import { ChangedPropertyMetaData, DiffHighlightingApplicationMode } from '../../../../../next-data-model/src/model/abstract/tree-with-diffs/tree-node.interface';
import { LayoutSide } from '../../../types/internal/LayoutSide';
import { Dispatch, FC, ReactNode, SetStateAction } from '../../../../../../node_modules/react';
import { TitleRowUsage } from '../TitleRow/types';
import { TextValueVariant } from './types';
type TextValueProps = {
    value?: string;
    variant: TextValueVariant;
    layoutSide: LayoutSide;
    onClick?: () => void;
    labelFontWeight?: 'normal' | 'medium' | 'bold';
    textFontWeight?: 'normal' | 'medium' | 'bold';
    labelColor?: string;
    textColor?: string;
    label?: string;
    diff?: ChangedPropertyMetaData;
    usage?: TitleRowUsage;
    highlightingMode?: DiffHighlightingApplicationMode;
    /** Renders the resolved (shortened, side-specific) text, e.g. to add line-break opportunities; plain text by default. */
    renderText?: (text: string) => ReactNode;
};
export type TextExpanderProps = Partial<{
    isExpandable: boolean;
    expanded: boolean;
    setExpanded: Dispatch<SetStateAction<boolean>>;
    variant: TextValueVariant;
}>;
export declare const TextValue: FC<TextValueProps>;
export {};
