import { FC } from '../../../../../node_modules/react';
import { PropsWithChanges } from '../../types/internal/PropsWithChanges';
import { PropsWithShift } from '../../types/internal/PropsWithShift';
import { PropsWithoutChangesSummary } from '../../types/PropsWithoutChangesSummary';
export type AdditionalInfoObjectRowProps = PropsWithoutChangesSummary<PropsWithShift & {
    title: string;
    items: Record<string | number, unknown>;
    isPredefinedValuesSet?: boolean;
    $changesKeys: string[];
} & PropsWithChanges>;
export declare const AdditionalInfoObjectRow: FC<AdditionalInfoObjectRowProps>;
