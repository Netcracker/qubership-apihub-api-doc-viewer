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
import { DiffNodeMeta, DiffNodeValue, NodeChange } from '@netcracker/qubership-apihub-api-data-model';
import type { FC } from '../../../../node_modules/react';
import { LayoutSide } from '../../../types/internal/LayoutSide';
export type DiffTagsProps = {
    requiredChanged?: boolean;
    nullableChanged?: boolean;
    readOnly: boolean | undefined;
    writeOnly: boolean | undefined;
    deprecated?: boolean;
    deprecationReason?: string;
    layoutSide: LayoutSide;
    isNodeChanged: boolean;
    isContentChanged: boolean;
    $nodeChange?: NodeChange;
    $metaChanges?: DiffNodeMeta['$metaChanges'];
    $valueChanges?: DiffNodeValue['$changes'];
};
export declare const DiffTags: FC<DiffTagsProps>;
