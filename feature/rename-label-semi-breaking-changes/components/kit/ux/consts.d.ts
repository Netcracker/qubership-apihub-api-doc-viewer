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
import { DiffType } from '@netcracker/qubership-apihub-api-diff';
import { BadgeKind } from './types';
export declare const COLOR_SCHEMAS: Record<BadgeKind, string>;
export declare const BREAKING_CHANGE_SEVERITY = "breaking";
export declare const NON_BREAKING_CHANGE_SEVERITY = "non-breaking";
export declare const SEMI_BREAKING_CHANGE_SEVERITY = "semi-breaking";
export declare const DEPRECATED_CHANGE_SEVERITY = "deprecated";
export declare const ANNOTATION_CHANGE_SEVERITY = "annotation";
export declare const UNCLASSIFIED_CHANGE_SEVERITY = "unclassified";
export declare const CUSTOM_CHANGE_SEVERITY = "custom";
export declare const DIFF_TYPE_COLORS: Record<DiffType, string>;
export declare const CHANGE_SEVERITY_NAME_MAP: Record<DiffType | 'custom', string>;
export declare const COMMON_LAYOUT_STYLE_WITHOUT_BORDER = "rounded-md px-2 pb-px text-xs font-normal";
export declare const COMMON_LAYOUT_STYLE: string;
