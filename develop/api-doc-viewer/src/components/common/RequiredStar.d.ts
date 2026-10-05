import { DiffRecord } from '../../../../api-data-model/src';
import { Diff } from '@netcracker/qubership-apihub-api-diff';
import { FC } from '../../../../../node_modules/react';
import { LayoutMode } from '../../types/LayoutMode';
import { LayoutSide } from '../../types/internal/LayoutSide';
type RequiredStarProps = Partial<{
    value: boolean;
    valueChange: Diff | DiffRecord;
    layoutMode: LayoutMode;
    layoutSide: LayoutSide;
}>;
export declare const RequiredStar: FC<RequiredStarProps>;
export {};
