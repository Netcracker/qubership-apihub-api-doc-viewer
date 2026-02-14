import { DiffType } from "@netcracker/qubership-apihub-api-diff";
import { DisplayMode } from "../..";
import { FC } from '../../../../../node_modules/react';
export type MetaKeys = {
    entityKeyMetaKey: symbol;
    diffsMetaKey: symbol;
    aggregatedDiffsMetaKey: symbol;
};
export type AsyncApiOperationDiffViewerProps = {
    source: unknown;
    operationType?: string;
    operationKey?: string;
    messageKey?: string;
    displayMode?: DisplayMode;
    metaKeys: MetaKeys;
    displayedDiffTypes?: ReadonlyArray<DiffType>;
};
export declare const AsyncApiOperationDiffViewer: FC<AsyncApiOperationDiffViewerProps>;
