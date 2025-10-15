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
export declare const QUERY_OPERATION_METHOD = "query";
export declare const MUTATION_OPERATION_METHOD = "mutation";
export declare const SUBSCRIPTION_OPERATION_METHOD = "subscription";
export type GraphQlOperationMethod = typeof QUERY_OPERATION_METHOD | typeof MUTATION_OPERATION_METHOD | typeof SUBSCRIPTION_OPERATION_METHOD;
