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
import { ActionType, DiffType } from '@netcracker/qubership-apihub-api-diff';
export declare const NODE_DIFF_COLOR_MAP: Partial<Record<ActionType, string>>;
export declare const BLOCK_CONTENT_DIFF_COLOR_MAP: Partial<Record<ActionType, string>>;
export declare const INLINE_CONTENT_DIFF_COLOR_SCHEMAS: Partial<Record<ActionType, string>>;
export declare const CHANGE_SEVERITIES: Record<DiffType, number>;
export declare const DEFAULT_STRIKETHROUGH_VALUE_CLASS = "line-through";
