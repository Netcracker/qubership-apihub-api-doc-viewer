/// <reference types="react" />
import type { StoryObj } from '@storybook/react';
declare const meta: {
    title: string;
    component: import('../../../../../node_modules/react').FC<import('../../components/AsyncApiOperationViewer/AsyncApiOperationViewer').AsyncApiOperationViewerProps>;
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
export declare const SendOperationWithMessageWithBindingsWithNothing: Story;
export declare const SendOperationWithMessageWithBindingsWithPrimitiveProps: Story;
export declare const SendOperationWithMessageWithBindingsWithObjectProps: Story;
export declare const SendOperationWithMessageWithBindingsWithSchemaProps: Story;
export declare const SendOperationWithMessageWithTwoBindings: Story;
export declare const SendOperationWithMessageWithDescriptionAndBindingWithNothing: Story;
