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
/// <reference types="react" />
import type { StoryObj } from '@storybook/react';
declare const meta: {
    title: string;
    component: import('../../../../node_modules/react').FC<import("../components/GraphQLOperationViewer/GraphQLOperationDiffViewer").GraphQLOperationDiffViewerProps>;
    parameters: {};
    argTypes: {};
    args: {
        source: {};
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Test: Story;
export declare const DeprecatedQuery: Story;
export declare const UnDeprecatedQuery: Story;
export declare const DeprecatedWithReasonQuery: Story;
export declare const UnDeprecatedWithReasonQuery: Story;
export declare const SimpleEnum: Story;
export declare const WhollyAddedSimpleEnum: Story;
export declare const WhollyRemovedSimpleEnum: Story;
export declare const ComplexEnum: Story;
export declare const WhollyAddedComplexEnum: Story;
export declare const WhollyRemovedComplexEnum: Story;
export declare const WhollyAddedDirective: Story;
export declare const WhollyRemovedDirective: Story;
export declare const AppendDirective: Story;
export declare const PopDirective: Story;
export declare const AddedDirectiveLocation: Story;
export declare const RemovedDirectiveLocation: Story;
export declare const ReplacedDirectiveLocation: Story;
export declare const AddedDirectiveDescription: Story;
export declare const RemovedDirectiveDescription: Story;
export declare const ReplacedDirectiveDescription: Story;
export declare const StringToStringOrInt: Story;
export declare const StringToIntOrFloat: Story;
export declare const StringToStringOrEnum: Story;
export declare const StringToEnum1OrEnum2: Story;
export declare const ListToStringOrInt: Story;
export declare const DirectiveUsageAddedArgValue: Story;
export declare const DirectiveUsageRemovedArgValue: Story;
export declare const DirectiveUsageChangedArgValue: Story;
export declare const ChangedUnion: Story;
export declare const ChangedObjectiveUnion: Story;
export declare const TypeToInput: Story;
export declare const EnumChanges: Story;
export declare const DirectiveUsageLocationsChanged: Story;
export declare const ChangedCircularMethods: Story;
export declare const ChangedCircularProperties: Story;
export declare const BugWithWhollyRemoved: Story;
