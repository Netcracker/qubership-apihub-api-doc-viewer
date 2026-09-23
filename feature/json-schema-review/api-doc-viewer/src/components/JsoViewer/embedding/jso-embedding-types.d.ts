import { CustomizationOptions } from '../../../contexts/CustomizationOptionsContext';
import { DiffMetaKeys } from '../../../types/DiffMetaKeys';
import { DisplayMode } from '../../../types/DisplayMode';
import { DiffType } from "@netcracker/qubership-apihub-api-diff";
import { FC } from '../../../../../../node_modules/react';
export type JsoEmbeddedSchemaComponentProps = {
    schema: unknown;
    expandedDepth?: number;
    displayMode?: DisplayMode;
    customizationOptions?: CustomizationOptions;
};
export type JsoEmbeddedSchemaComponent = FC<JsoEmbeddedSchemaComponentProps>;
export type JsoEmbeddedSchemaDiffsComponentProps = {
    schema: unknown;
    expandedDepth?: number;
    displayMode?: DisplayMode;
    diffMetaKeys: DiffMetaKeys;
    diffTypes?: ReadonlyArray<DiffType>;
    customizationOptions?: CustomizationOptions;
    hideUnchangedNodes?: boolean;
};
export type JsoEmbeddedSchemaDiffsComponent = FC<JsoEmbeddedSchemaDiffsComponentProps>;
