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
export declare const SendOperationWithBindingsKafkaWithNothing: Story;
export declare const SendOperationWithBindingsKafkaWithOnlyPrimitiveProps: Story;
export declare const SendOperationWithBindingsKafkaWithObjectProps: Story;
export declare const SendOperationWithBindingsKafkaWithSchemaProps: Story;
export declare const SendOperationTwoBindings: Story;
export declare const SendOperationWithDescriptionAndBindingsWithNothing: Story;
