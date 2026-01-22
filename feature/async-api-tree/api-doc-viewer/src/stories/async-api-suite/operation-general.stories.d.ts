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
export declare const SendOperationWithNothing: Story;
export declare const SendOperationWithTitle: Story;
export declare const SendOperationWithDescription: Story;
export declare const SendOperationWithTitleAndDescription: Story;
export declare const ReceiveOperationWithNothing: Story;
