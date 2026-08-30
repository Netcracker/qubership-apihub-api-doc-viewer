import { Diff } from '@netcracker/qubership-apihub-api-diff';
import { Dispatch, FC, SetStateAction } from '../../../../../../../node_modules/react';
import { LayoutSide } from '../../../../types/internal/LayoutSide';
import { PropsWithChanges } from '../../../../types/internal/PropsWithChanges';
import { PropsWithShift } from '../../../../types/internal/PropsWithShift';
import { LayoutMode } from '../../../../types/LayoutMode';
import { PropsWithoutChangesSummary } from '../../../../types/PropsWithoutChangesSummary';
import { DescriptionFontSize } from './types/DescriptionFontSize';
export type DescriptionRowProps = PropsWithoutChangesSummary<PropsWithShift & {
    value: string;
    fontSize?: DescriptionFontSize;
} & PropsWithChanges>;
export declare const DescriptionRow: FC<DescriptionRowProps>;
type ValueProps = {
    value: string;
    fontSize?: DescriptionFontSize;
    expanded?: boolean;
    setIsExpandable?: Dispatch<SetStateAction<boolean>>;
    enableDiffs: boolean;
    layoutMode: LayoutMode;
    layoutSide: LayoutSide;
    $changes?: Diff;
    highlightWholeDiff?: boolean;
};
export declare const DescriptionValue: FC<ValueProps>;
export type DescriptionExpanderProps = Partial<{
    isExpandable: boolean;
    expanded: boolean;
    setExpanded: Dispatch<SetStateAction<boolean>>;
    fontSize?: DescriptionFontSize;
}>;
export declare const DescriptionExpander: FC<Partial<{
    isExpandable: boolean;
    expanded: boolean;
    setExpanded: Dispatch<SetStateAction<boolean>>;
    fontSize?: DescriptionFontSize;
}>>;
export {};
