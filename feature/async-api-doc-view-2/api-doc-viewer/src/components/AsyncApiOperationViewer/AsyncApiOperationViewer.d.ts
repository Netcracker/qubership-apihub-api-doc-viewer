import { DisplayMode } from '../../types/DisplayMode';
import { FC } from '../../../../../node_modules/react';
export type AsyncApiOperationViewerProps = {
    source: unknown;
    operationKey?: string;
    messageKey?: string;
    displayMode?: DisplayMode;
    referenceNamePropertyKey?: symbol;
};
export declare const AsyncApiOperationViewer: FC<AsyncApiOperationViewerProps>;
