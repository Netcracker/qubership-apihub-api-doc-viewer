import { DiffType } from "@netcracker/qubership-apihub-api-diff";
import { FC, ReactElement } from '../../../../../../node_modules/react';
type DiffFloatingBadgeWrapperProps = {
    children: ReactElement;
    diffType: DiffType | undefined;
    diffTypeCause: string | undefined;
    hidden?: boolean;
};
export declare const DiffFloatingBadgeWrapper: FC<DiffFloatingBadgeWrapperProps>;
export {};
