import { CustomizationOptions } from '../../contexts/CustomizationOptionsContext';
import { DisplayMode } from '../../types/DisplayMode';
import { FC } from '../../../../../node_modules/react';
import { TopLevelPropsMediaTypesMap } from './utils/top-level-props-media-types';
export type JsonSchemaViewerProps = {
    schema: unknown;
    expandedDepth?: number;
    displayMode?: DisplayMode;
    devMode?: boolean;
    initialLevel?: number;
    customizationOptions?: CustomizationOptions;
    /**
     * Root's direct property key -> media type, shown as a badge next to the property name (e.g.
     * OpenAPI parameters described with `content`). Not supported by `JsonSchemaDiffsViewer`.
     */
    topLevelPropsMediaTypes?: TopLevelPropsMediaTypesMap;
};
export declare const JsonSchemaViewer: FC<JsonSchemaViewerProps>;
