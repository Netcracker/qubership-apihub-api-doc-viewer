import { DisplayMode } from '../../types/DisplayMode';
import { FC } from '../../../../../node_modules/react';
import { OperationKeys } from '../../../../next-data-model/src/shared/async-api/types/operation-keys';
import { DiffMetaKeys } from "./types/DiffMetaKeys";
import { DiffType } from "@netcracker/qubership-apihub-api-diff";
export type AsyncApiOperationDiffsViewerProps = {
    mergedSource: unknown;
    operationKeys?: OperationKeys;
    displayMode?: DisplayMode;
    devMode?: boolean;
    referenceNamePropertyKey: symbol;
    diffMetaKeys?: DiffMetaKeys;
    diffTypes?: ReadonlyArray<DiffType>;
};
export declare const AsyncApiOperationDiffsViewer: FC<AsyncApiOperationDiffsViewerProps>;
