import { Diff } from '@netcracker/qubership-apihub-api-diff';
import { FC } from '../../../../../../node_modules/react';
import { LayoutSide } from '../../../types/internal/LayoutSide';
import { LayoutMode } from '../../../types/LayoutMode';
type DiffBadgeProps = {
    label: string;
    colorSchema?: string;
    layoutMode: LayoutMode;
    layoutSide: LayoutSide;
    isNodeChanged: boolean;
    isContentChanged: boolean;
    $changes?: Diff;
};
export declare const DiffBadge: FC<DiffBadgeProps>;
export {};
