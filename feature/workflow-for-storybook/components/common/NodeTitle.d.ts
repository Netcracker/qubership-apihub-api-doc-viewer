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
import { DiffRecord } from '@netcracker/qubership-apihub-api-data-model';
import { Diff } from '@netcracker/qubership-apihub-api-diff';
import type { FC } from '../../../node_modules/react';
import { LayoutSide } from '../../types/internal/LayoutSide';
import { LayoutMode } from '../../types/LayoutMode';
import { NodeTitleData } from '../../types/NodeTitleData';
export type NodeTitleProps = NodeTitleData & {
    showRequired?: boolean;
    showNullable?: boolean;
    layoutMode?: LayoutMode;
    layoutSide?: LayoutSide;
    requiredChange?: Diff | DiffRecord;
    nullableChange?: Diff | DiffRecord;
};
export declare const NodeTitle: FC<NodeTitleProps>;
