import { Diff } from '@netcracker/qubership-apihub-api-diff';
import { FC } from '../../../../../../node_modules/react';
import { LayoutSide } from '../../../types/internal/LayoutSide';
import { LayoutMode } from '../../../types/LayoutMode';
export type BadgeWithDiffsProps = {
    label: string;
    colorSchema?: string;
    layoutMode: LayoutMode;
    layoutSide: LayoutSide;
    diff?: Diff;
};
export declare const BadgeWithDiffs: FC<BadgeWithDiffsProps>;
