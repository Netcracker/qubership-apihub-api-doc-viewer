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
import { Diff } from "@netcracker/qubership-apihub-api-diff";
export type ValueRangeInitialData = Partial<{
    minimum: number;
    exclusiveMinimum: boolean;
    maximum: number;
    exclusiveMaximum: boolean;
}>;
export type ValueRangeDiffData = Partial<{
    minimum: Diff;
    exclusiveMinimum: Diff;
    maximum: Diff;
    exclusiveMaximum: Diff;
}>;
type ValueRange = Partial<{
    lower: string;
    upper: string;
}>;
type ValueRangeChange = Partial<{
    lower: Diff;
    upper: Diff;
}>;
type UseValueRangeValidationResult = {
    data: ValueRange;
    changes: ValueRangeChange;
    changesKeys: string[];
    visible: boolean;
};
export declare function useValueRangeValidation(data: ValueRangeInitialData, changes: ValueRangeDiffData, originalChangeKeys: string[]): UseValueRangeValidationResult;
export {};
