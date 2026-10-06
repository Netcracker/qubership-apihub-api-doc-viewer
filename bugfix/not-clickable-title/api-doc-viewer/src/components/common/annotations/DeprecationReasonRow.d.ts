import { Diff, DiffMetaRecord } from '@netcracker/qubership-apihub-api-diff';
import { FC } from '../../../../../../node_modules/react';
import { LayoutSide } from '../../../types/internal/LayoutSide';
import { PropsWithChanges } from '../../../types/internal/PropsWithChanges';
import { PropsWithShift } from '../../../types/internal/PropsWithShift';
import { LayoutMode } from '../../../types/LayoutMode';
import { PropsWithoutChangesSummary } from '../../../types/PropsWithoutChangesSummary';
export type DeprecationReasonRowProps = PropsWithoutChangesSummary<PropsWithShift & {
    value: string;
} & PropsWithChanges>;
export declare const DeprecationReasonRow: FC<DeprecationReasonRowProps>;
type ValueProps = {
    value: string | undefined;
    strikethrough?: boolean;
    enableDiffs: boolean;
    layoutMode: LayoutMode;
    layoutSide: LayoutSide;
    $changes?: Diff | DiffMetaRecord;
    highlightWholeDiff?: boolean;
};
export declare const DeprecationReasonValue: FC<ValueProps>;
export {};
