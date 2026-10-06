import { DiffRecord } from '../../../../api-data-model/src';
import { Diff } from '@netcracker/qubership-apihub-api-diff';
import { FC } from '../../../../../node_modules/react';
import { LayoutSide } from '../../types/internal/LayoutSide';
import { LayoutMode } from '../../types/LayoutMode';
type NullableAsteriskProps = Partial<{
    value: boolean;
    valueChange: Diff | DiffRecord;
    layoutMode: LayoutMode;
    layoutSide: LayoutSide;
}>;
export declare const NullableAsterisk: FC<NullableAsteriskProps>;
export {};
