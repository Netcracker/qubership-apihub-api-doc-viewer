/**
 * Copyright 2024-2025 NetCracker Technology Corporation
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import { FC } from '../../../../../node_modules/react';
import { DisplayMode } from '../../types/DisplayMode';
import { LayoutMode } from '../../types/LayoutMode';
import { PropsWithOverriddenKind } from '../../types/internal/PropsWithState';
import { PropsWithTopLevelPropsMediaTypesMap } from '../../types/internal/PropsWithTopLevelPropsMediaTypesMap';
import { DiffType } from '@netcracker/qubership-apihub-api-diff';
export type JsonSchemaDiffViewerProps = {
    schema: unknown;
    expandedDepth?: number;
    displayMode?: DisplayMode;
    layoutMode?: LayoutMode;
    filters?: ReadonlyArray<DiffType>;
    metaKeys: {
        diffsMetaKey: symbol;
        aggregatedDiffsMetaKey: symbol;
    };
} & PropsWithOverriddenKind & PropsWithTopLevelPropsMediaTypesMap;
export declare const JsonSchemaDiffViewer: FC<JsonSchemaDiffViewerProps>;
