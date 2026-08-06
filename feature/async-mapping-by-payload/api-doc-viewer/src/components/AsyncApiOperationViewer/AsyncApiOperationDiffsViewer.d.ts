import { DisplayMode } from '../../types/DisplayMode';
import { FC } from '../../../../../node_modules/react';
import { OperationKeys } from '../../../../next-data-model/src/shared/async-api/types/operation-keys';
import { DiffType } from "@netcracker/qubership-apihub-api-diff";
import { DiffMetaKeys } from "../../types/DiffMetaKeys";
export type AsyncApiOperationDiffsViewerProps = {
    mergedSource: unknown;
    operationKeys?: OperationKeys;
    /** The origin side's keys, for a caller that only holds those. */
    previousOperationKeys?: OperationKeys;
    /** api-diff's `beforeKeyProperty`, so a node whose key changed is still found. */
    beforeKeyProperty?: symbol;
    displayMode?: DisplayMode;
    devMode?: boolean;
    noHeading?: boolean;
    referenceNamePropertyKey: symbol;
    diffMetaKeys: DiffMetaKeys;
    diffTypes?: ReadonlyArray<DiffType>;
};
export declare const AsyncApiOperationDiffsViewer: FC<AsyncApiOperationDiffsViewerProps>;
