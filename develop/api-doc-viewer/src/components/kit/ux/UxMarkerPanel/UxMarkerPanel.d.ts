import { FC } from '../../../../../../../node_modules/react';
import { DiffType } from '@netcracker/qubership-apihub-api-diff';
export type UxMarkerPanelProps = {
    values: DiffType[];
    filter?: (key: DiffType) => boolean;
};
export declare const UxMarkerPanel: FC<UxMarkerPanelProps>;
