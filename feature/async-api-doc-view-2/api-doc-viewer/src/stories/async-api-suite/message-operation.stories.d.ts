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
export declare const OperationId: Story;
export declare const Title: Story;
export declare const Description: Story;
export declare const Summary: Story;
export declare const Extensions: Story;
export declare const BindingsOneOption: Story;
export declare const BindingsTwoOptionsSelectedFirst: Story;
export declare const BindingsTwoOptionsSelectedSecond: Story;
export declare const DescriptionSummary: Story;
export declare const DescriptionExtensions: Story;
export declare const DescriptionBindingsOneOption: Story;
export declare const ExtensionsBindingsOneOption: Story;
export declare const EdgeCaseBrokenRefBindings: Story;
