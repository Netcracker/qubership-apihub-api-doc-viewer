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
export declare const REQUEST_HEADER_TARGET = "request-header";
export declare const REQUEST_COOKIE_TARGET = "request-cookie";
export declare const PATH_PARAMETER_TARGET = "path-parameter";
export declare const QUERY_PARAMETER_TARGET = "query-parameter";
export declare const REQUEST_BODY_TARGET = "request-body";
export declare const RESPONSE_HEADER_TARGET = "response-header";
export declare const RESPONSE_200_BODY_TARGET = "response-200-body";
export declare const RESPONSE_401_BODY_TARGET = "response-401-body";
export declare const RESPONSE_403_BODY_TARGET = "response-403-body";
export declare const RESPONSE_404_BODY_TARGET = "response-404-body";
export declare const RESPONSE_500_BODY_TARGET = "response-500-body";
export type OASTarget = typeof REQUEST_HEADER_TARGET | typeof REQUEST_COOKIE_TARGET | typeof PATH_PARAMETER_TARGET | typeof QUERY_PARAMETER_TARGET | typeof REQUEST_BODY_TARGET | typeof RESPONSE_HEADER_TARGET | typeof RESPONSE_200_BODY_TARGET | typeof RESPONSE_401_BODY_TARGET | typeof RESPONSE_403_BODY_TARGET | typeof RESPONSE_404_BODY_TARGET | typeof RESPONSE_500_BODY_TARGET;
export type JsonSchemaOptions = {
    schema: unknown;
    additionalComponents?: Record<PropertyKey, unknown>;
    target: OASTarget;
    circular?: boolean;
};
export declare function prepareJsonSchema(options: JsonSchemaOptions): unknown;
type JsonSchemaFromOASOptions = {
    source: unknown;
    path: PropertyKey[];
    circular?: boolean;
};
export declare function prepareJsonSchemaFromOAS(options: JsonSchemaFromOASOptions): unknown;
type JsonDiffSchemaFromOASOptions = {
    beforeSource: unknown;
    afterSource: unknown;
    path: PropertyKey[];
    circular?: boolean;
};
export declare function prepareJsonDiffSchemaFromOAS(options: JsonDiffSchemaFromOASOptions): unknown;
export type JsonDiffSchemaOptions = {
    beforeSchema?: unknown;
    afterSchema: unknown;
    beforeAdditionalComponents?: Record<PropertyKey, unknown>;
    afterAdditionalComponents?: Record<PropertyKey, unknown>;
    target: OASTarget;
    circular?: boolean;
};
export declare function prepareJsonDiffSchema(options: JsonDiffSchemaOptions): unknown;
export type GraphApiSchemaOptions = {
    source: unknown;
    circular?: boolean;
};
export declare function prepareGraphApiSchema(options: GraphApiSchemaOptions): unknown;
export type GraphApiDiffSchemaOptions = {
    beforeSource?: unknown;
    afterSource: unknown;
    circular?: boolean;
};
export declare function prepareGraphApiDiffSchema(options: GraphApiDiffSchemaOptions): unknown;
export declare function generateSyntheticObjectPropsFromArray(...arr: Record<PropertyKey, unknown>[]): Record<PropertyKey, unknown>;
type AsyncApiDocumentOptions = {
    source: unknown;
    circular?: boolean;
    referenceNamePropertyKey?: symbol;
    storyName?: string;
};
export declare function prepareAsyncApiDocument(options: AsyncApiDocumentOptions): unknown;
export {};
