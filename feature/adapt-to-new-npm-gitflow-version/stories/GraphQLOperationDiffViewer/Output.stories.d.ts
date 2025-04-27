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
    component: import('../../../node_modules/react').FC<Omit<import("../..").GraphQLOperationDiffViewerProps, "source"> & import("../preprocess").GraphApiDiffSchemaOptions>;
    parameters: {};
    argTypes: {
        beforeSource: {
            control: "object";
        };
        afterSource: {
            control: "object";
        };
        layoutMode: {
            control: "radio";
            options: string[];
        };
        filters: {
            control: "check";
            options: string[];
        };
    };
    args: {
        layoutMode: "side-by-side-diffs";
        diffMetaKey: symbol;
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const QueryNoArgsChangedPrimitiveOutput: Story;
export declare const QueryNoArgsPrimitiveOutputMarkedAsNotNullable: Story;
export declare const QueryNoArgsPrimitiveOutputMarkedAsNullable: Story;
export declare const QueryPrimitiveOutputAddedArgs: Story;
export declare const QueryPrimitiveOutputRemovedArgs: Story;
export declare const QueryPrimitiveOutputAddedNewArg: Story;
export declare const QueryPrimitiveOutputRemovedExistingArg: Story;
export declare const QueryWithArgsChangedPrimitiveToObjectOutput: Story;
export declare const QueryWithArgsChangedObjectToPrimitiveOutput: Story;
export declare const QueryWithArgsChangedArrayOfPrimitiveToArrayOfObjectOutput: Story;
export declare const QueryWithArgsChangedArrayOfObjectOutputToArrayOfPrimitive: Story;
export declare const QueryWithArgsChangedArrayOfObjectOutputToObjectOutput: Story;
export declare const QueryWithArgsChangedObjectOutputToArrayOfObjectOutput: Story;
export declare const QueryNoArgsChangedObjectOutputToOneOfOutput: Story;
export declare const QueryNoArgsChangedOneOfOutputToObjectOutput: Story;
export declare const QueryNoArgsReturnsUtilityAdded1Method: Story;
export declare const QueryNoArgsReturnsUtilityRemoved1Method: Story;
export declare const QueryNoArgsReturnsUtility1MethodAdded1Arg: Story;
export declare const QueryNoArgsReturnsUtility1MethodRemoved1Arg: Story;
