import { DiffMetaKeys } from '../../../../api-data-model/src';
import { DiffType } from '@netcracker/qubership-apihub-api-diff';
import { FC } from '../../../../../node_modules/react';
import { DisplayMode } from '../../types/DisplayMode';
import { LayoutMode } from '../../types/LayoutMode';
import { PropsWithOverriddenKind } from '../../types/internal/PropsWithState';
import { PropsWithTopLevelPropsMediaTypesMap } from '../../types/internal/PropsWithTopLevelPropsMediaTypesMap';
export type JsonSchemaDiffViewerProps = {
    schema: unknown;
    expandedDepth?: number;
    displayMode?: DisplayMode;
    layoutMode?: LayoutMode;
    filters?: ReadonlyArray<DiffType>;
    metaKeys: DiffMetaKeys;
} & PropsWithOverriddenKind & PropsWithTopLevelPropsMediaTypesMap;
export declare const JsonSchemaDiffViewer: FC<JsonSchemaDiffViewerProps>;
