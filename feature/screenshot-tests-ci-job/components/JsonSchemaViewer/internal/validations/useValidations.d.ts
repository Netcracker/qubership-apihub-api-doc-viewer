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
import { JsonSchemaDiffNodeValue, JsonSchemaDiffTreeNode } from '@netcracker/qubership-apihub-api-data-model';
export type UseValidationsReturnType = Partial<{
    any: {
        allowedValues?: unknown[];
    };
    string: {
        minLength?: number;
        maxLength?: number;
        pattern?: string;
    };
    number: {
        minimum?: number;
        maximum?: number;
        exclusiveMinimum?: number;
        exclusiveMaximum?: number;
        multipleOf?: number;
    };
    object: {
        allowedPropertyNames?: unknown[];
        minProperties?: number;
        maxProperties?: number;
    };
    array: {
        uniqueItems?: boolean;
        minItems?: number;
        maxItems?: number;
    };
}>;
export declare function useValidations(node?: JsonSchemaDiffTreeNode | null, nodeValue?: JsonSchemaDiffNodeValue | any | null): UseValidationsReturnType;
