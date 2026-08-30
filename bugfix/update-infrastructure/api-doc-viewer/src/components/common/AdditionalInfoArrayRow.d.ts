import { FC } from '../../../../../node_modules/react';
import { PropsWithChanges } from '../../types/internal/PropsWithChanges';
import { PropsWithShift } from '../../types/internal/PropsWithShift';
import { PropsWithoutChangesSummary } from '../../types/PropsWithoutChangesSummary';
export type AdditionalInfoArrayRowProps = PropsWithoutChangesSummary<PropsWithShift & {
    $changesKey: string;
    title: string;
    items: unknown[];
    isPredefinedValuesSet?: boolean;
} & PropsWithChanges>;
export declare const AdditionalInfoArrayRow: FC<AdditionalInfoArrayRowProps>;
