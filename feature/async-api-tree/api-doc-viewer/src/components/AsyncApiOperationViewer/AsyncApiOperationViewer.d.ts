import { DisplayMode } from '../../types/DisplayMode';
import { FC } from '../../../../../node_modules/react';
type AsyncApiOperationViewerProps = {
    source: unknown;
    operationType?: string;
    operationName?: string;
    displayMode?: DisplayMode;
};
export declare const AsyncApiOperationViewer: FC<AsyncApiOperationViewerProps>;
export {};
