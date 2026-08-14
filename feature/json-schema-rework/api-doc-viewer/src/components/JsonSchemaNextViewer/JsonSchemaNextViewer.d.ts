import { DisplayMode } from '../../types/DisplayMode';
import { FC } from '../../../../../node_modules/react';
export type JsonSchemaNextViewerProps = {
    schema: unknown;
    expandedDepth?: number;
    displayMode?: DisplayMode;
    devMode?: boolean;
    initialLevel?: number;
};
export declare const JsonSchemaNextViewer: FC<JsonSchemaNextViewerProps>;
