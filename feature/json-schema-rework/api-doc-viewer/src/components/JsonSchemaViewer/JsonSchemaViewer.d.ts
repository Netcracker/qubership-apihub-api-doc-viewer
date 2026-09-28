import { CustomizationOptions } from '../../contexts/CustomizationOptionsContext';
import { DisplayMode } from '../../types/DisplayMode';
import { FC } from '../../../../../node_modules/react';
export type JsonSchemaViewerProps = {
    schema: unknown;
    expandedDepth?: number;
    displayMode?: DisplayMode;
    devMode?: boolean;
    initialLevel?: number;
    customizationOptions?: CustomizationOptions;
};
export declare const JsonSchemaViewer: FC<JsonSchemaViewerProps>;
