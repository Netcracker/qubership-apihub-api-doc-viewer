import { CustomizationOptions } from '../../contexts/CustomizationOptionsContext';
import { DisplayMode } from '../../types/DisplayMode';
import { FC } from '../../../../../node_modules/react';
import { PrecededBy } from '../shared-components/WithPrecededByProps';
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
    /**
     * Opt-in `data-precededby` of the first row (the root's title row, or with a suppressed root nesting
     * indicator its first child): lets an embedding viewer control the gap above the schema (OpenAPI).
     * Without it the rows keep their own spacing.
     */
    firstRowPrecededBy?: PrecededBy;
};
export declare const JsonSchemaViewer: FC<JsonSchemaViewerProps>;
