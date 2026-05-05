import { DiffMetaKeys } from '../../../../api-data-model/src';
import { DiffType } from "@netcracker/qubership-apihub-api-diff";
import { FC } from '../../../../../node_modules/react';
import { DisplayMode } from "../..";
type JsoDiffsViewerProps = {
    mergedSource: unknown;
    displayMode?: DisplayMode;
    initialLevel?: number;
    supportJsonSchema?: boolean;
    diffMetaKeys: DiffMetaKeys;
    diffTypes?: ReadonlyArray<DiffType>;
};
export declare const JsoDiffsViewer: FC<JsoDiffsViewerProps>;
export {};
