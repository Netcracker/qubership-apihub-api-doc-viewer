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
import { TestSpecType } from '@netcracker/qubership-apihub-compatibility-suites';
export type GraphQLCompatibilitySuiteStoryArgs = {
    before: string;
    after: string;
};
export declare function GraphQLStoryComponent({ before, after }: GraphQLCompatibilitySuiteStoryArgs): import('../../../../../node_modules/react/jsx-runtime').JSX.Element;
export declare function getStoryArgs(suiteType: TestSpecType, suiteId: string, testId: string): GraphQLCompatibilitySuiteStoryArgs;
export type AsyncApiCompatibilitySuiteStoryArgs = {
    before: string;
    after: string;
};
export declare function AsyncApiStoryComponent({ before, after }: AsyncApiCompatibilitySuiteStoryArgs): import('../../../../../node_modules/react/jsx-runtime').JSX.Element;
export declare function getAsyncApiStoryArgs(suiteType: TestSpecType, suiteId: string, testId: string): AsyncApiCompatibilitySuiteStoryArgs;
