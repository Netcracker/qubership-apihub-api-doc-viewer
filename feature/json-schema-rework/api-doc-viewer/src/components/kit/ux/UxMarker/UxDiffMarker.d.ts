import { DiffType } from '@netcracker/qubership-apihub-api-diff';
import { FC } from '../../../../../../../node_modules/react';
type FloatingVariant = 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
export type UxDiffMarkerProps = {
    variant: DiffType;
    tooltip?: DiffType;
    floating?: FloatingVariant;
};
export declare const UxDiffMarker: FC<UxDiffMarkerProps>;
export {};
