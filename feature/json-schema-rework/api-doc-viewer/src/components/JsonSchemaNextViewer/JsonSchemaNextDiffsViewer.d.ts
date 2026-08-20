import { CustomizationOptions } from '../../contexts/CustomizationOptionsContext';
import { DiffMetaKeys } from '../../types/DiffMetaKeys';
import { DisplayMode } from '../../types/DisplayMode';
import { DiffType } from "@netcracker/qubership-apihub-api-diff";
import { FC } from '../../../../../node_modules/react';
export type JsonSchemaNextDiffsViewerProps = {
    schema: unknown;
    expandedDepth?: number;
    displayMode?: DisplayMode;
    devMode?: boolean;
    initialLevel?: number;
    customizationOptions?: CustomizationOptions;
    diffMetaKeys: DiffMetaKeys;
    diffTypes?: ReadonlyArray<DiffType>;
    hideUnchangedNodes?: boolean;
};
export declare const JsonSchemaNextDiffsViewer: FC<JsonSchemaNextDiffsViewerProps>;
