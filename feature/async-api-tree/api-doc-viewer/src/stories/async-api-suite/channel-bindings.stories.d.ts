/// <reference types="react" />
import type { StoryObj } from '@storybook/react';
declare const meta: {
    title: string;
    component: import('../../../../../node_modules/react').FC<{
        source: unknown;
        operationType?: string | undefined;
        operationName?: string | undefined;
        displayMode?: import("../..").DisplayMode | undefined;
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
export declare const SendOperationWithRootLevelChannelWithBindingWithNothing: Story;
export declare const SendOperationWithRootLevelChannelWithBindingWithPrimitiveProps: Story;
export declare const SendOperationWithRootLevelChannelWithBindingWithObjectProps: Story;
export declare const SendOperationWithRootLevelChannelWithBindingWithSchemaProps: Story;
export declare const SendOperationWithRootLevelChannelWithDescriptionAndBindingWithNothing: Story;
export declare const SendOperationWithRootLevelChannelWithTwoBindings: Story;
