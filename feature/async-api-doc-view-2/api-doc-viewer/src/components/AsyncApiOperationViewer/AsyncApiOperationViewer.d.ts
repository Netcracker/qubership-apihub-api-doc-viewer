import { DisplayMode } from '../../types/DisplayMode';
import { FC } from '../../../../../node_modules/react';
import { OperationKeys } from '../../../../next-data-model/src/shared/async-api/types/operation-keys';
export type AsyncApiOperationViewerProps = {
    source: unknown;
    operationKeys?: OperationKeys;
    displayMode?: DisplayMode;
    referenceNamePropertyKey: symbol;
};
export declare const AsyncApiOperationViewer: FC<AsyncApiOperationViewerProps>;
