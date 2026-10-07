import { FC } from '../../../../../../../node_modules/react';
import { DiffType } from '@netcracker/qubership-apihub-api-diff';
export type UxDiffFloatingBadgeProps = {
    variant: DiffType;
    message: string | undefined;
    backgroundColor?: string;
};
export declare const UxDiffFloatingBadge: FC<UxDiffFloatingBadgeProps>;
