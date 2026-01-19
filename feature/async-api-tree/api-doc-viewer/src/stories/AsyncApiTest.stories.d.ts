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
    component: import('../../../../node_modules/react').FC<{
        source: unknown;
        operationType?: string | undefined;
        operationName?: string | undefined;
        displayMode?: import("..").DisplayMode | undefined;
    }>;
    parameters: {};
    argTypes: {
        source: {
            control: "object";
        };
    };
    args: {
        source: {};
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Test: Story;
export declare const KafkaE2E: Story;
export declare const SendOperationWithNothing: Story;
export declare const SendOperationWithTitle: Story;
export declare const SendOperationWithDescription: Story;
export declare const SendOperationWithTitleAndDescription: Story;
export declare const SendOperationWithRootLevelChannelWithNothing: Story;
export declare const SendOperationWithRootLevelChannelWithTitle: Story;
export declare const SendOperationWithRootLevelChannelWithDescription: Story;
export declare const SendOperationWithRootLevelChannelWithTitleAndDescription: Story;
export declare const SendOperationWithRootLevelChannelWithBindingWithNothing: Story;
export declare const SendOperationWithRootLevelChannelWithDescriptionAndBindingWithNothing: Story;
export declare const SendOperationWithRootLevelChannelWithTwoBindings: Story;
export declare const SendOperationWithDescriptionAndRootLevelChannelWithNothing: Story;
export declare const SendOperationWithBindingsKafkaWithNothing: Story;
export declare const SendOperationWithBindingsKafkaWithOnlyPrimitiveProps: Story;
export declare const SendOperationWithBindingsKafkaWithObjectProps: Story;
export declare const SendOperationWithBindingsKafkaWithSchemaProps: Story;
export declare const SendOperationTwoBindings: Story;
export declare const SendOperationWithDescriptionAndBindingsWithNothing: Story;
export declare const SendOperationWithMessageWithNothing: Story;
export declare const SendOperationWithMessageWithName: Story;
export declare const SendOperationWithMessageWithTitle: Story;
export declare const SendOperationWithMessageWithDescription: Story;
export declare const SendOperationWithMessageWithNameAndDescription: Story;
export declare const SendOperationWithMessageWithTitleAndDescription: Story;
export declare const SendOperationWithMessageWithNameAndTitleAndDescription: Story;
export declare const SendOperationWithMessageWithPrimitiveHeaders: Story;
export declare const SendOperationWithMessageWithObjectiveHeaders: Story;
export declare const SendOperationWithMessageWithPrimitivePayload: Story;
export declare const SendOperationWithMessageWithObjectivePayload: Story;
export declare const SendOperationWithMessageWithPrimitiveHeadersAndPayload: Story;
export declare const SendOperationWithMessageWithObjectiveHeadersAndPayload: Story;
export declare const SendOperationWithMessageWithPrimitiveHeadersAndObjectivePayload: Story;
export declare const SendOperationWithMessageWithObjectiveHeadersAndPrimitivePayload: Story;
export declare const SendOperationWithMessageWithBindingsWithNothing: Story;
export declare const SendOperationWithMessageWithBindingsWithPrimitiveProps: Story;
export declare const SendOperationWithMessageWithBindingsWithObjectProps: Story;
export declare const SendOperationWithMessageWithBindingsWithSchemaProps: Story;
export declare const SendOperationWithMessageWithTwoBindings: Story;
export declare const SendOperationWithMessageWithDescriptionAndHeaders: Story;
export declare const SendOperationWithMessageWithDescriptionAndPayload: Story;
export declare const SendOperationWithMessageWithDescriptionAndBindingWithNothing: Story;
export declare const SendOperationWithTwoMessagesWithNames: Story;
export declare const SendOperationWithDescriptionAndMessageWithNothing: Story;
export declare const SendOperationWithMinimalOverallStructure: Story;
export declare const ReceiveOperationWithNothing: Story;
