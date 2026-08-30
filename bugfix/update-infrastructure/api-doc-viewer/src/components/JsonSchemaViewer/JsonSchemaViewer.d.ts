import { CustomizationOptions } from '../../contexts/CustomizationOptionsContext';
import { FC } from '../../../../../node_modules/react';
import { DisplayMode } from '../../types/DisplayMode';
import { PropsWithOverriddenKind } from '../../types/internal/PropsWithState';
import { PropsWithTopLevelPropsMediaTypesMap } from '../../types/internal/PropsWithTopLevelPropsMediaTypesMap';
export type JsonSchemaViewerProps = {
    schema: unknown;
    expandedDepth?: number;
    displayMode?: DisplayMode;
} & PropsWithOverriddenKind & PropsWithTopLevelPropsMediaTypesMap & {
    customizationOptions?: CustomizationOptions;
    initialLevel?: number;
};
export declare const JsonSchemaViewer: FC<JsonSchemaViewerProps>;
