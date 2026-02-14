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
    component: import('../../../../../node_modules/react').FC<{
        source: object | null;
        displayMode?: import("../..").DisplayMode | undefined;
        initialLevel?: number | undefined;
        supportJsonSchema?: boolean | undefined;
    }>;
    parameters: {};
    argTypes: {
        source: {
            control: "object";
        };
        supportJsonSchema: {
            control: "boolean";
        };
    };
    args: {
        source: {};
        supportJsonSchema: true;
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const PrimitiveProperties: Story;
export declare const PrimitiveObjectProperty: Story;
export declare const PrimitiveArrayProperty: Story;
export declare const NestedObjectProperty: Story;
export declare const NestedArrayProperty: Story;
export declare const AllKindsOfObjectProperties: Story;
export declare const AllKindsOfArrayItems: Story;
export declare const PrimitivePropAndPrimitiveSchema: Story;
export declare const PrimitivePropAndObjectSchema: Story;
export declare const PrimitivePropAndArraySchema: Story;
export declare const PrimitivePropAndCombinerSchema: Story;
export declare const ObjectPropAndPrimitiveSchema: Story;
export declare const ArrayPropAndPrimitiveSchema: Story;
export declare const SecondLevelPrimitivePropAndPrimitiveSchema: Story;
export declare const SecondLevelPrimitivePropAndObjectSchema: Story;
export declare const SecondLevelPrimitivePropAndArraySchema: Story;
export declare const SecondLevelPrimitivePropAndCombinerSchema: Story;
export declare const SecondLevelObjectPropAndPrimitiveSchema: Story;
export declare const SecondLevelArrayPropAndPrimitiveSchema: Story;
