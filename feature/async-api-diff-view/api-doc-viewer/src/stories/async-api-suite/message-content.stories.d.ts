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
export declare const Headers: Story;
export declare const HeadersMultiSchemaObject: Story;
export declare const Extensions: Story;
export declare const BindingsOneOption: Story;
export declare const BindingsTwoOptionsSelectedFirst: Story;
export declare const BindingsTwoOptionsSelectedSecond: Story;
export declare const Payload: Story;
export declare const PayloadMultiSchemaObject: Story;
export declare const HeadersExtensions: Story;
export declare const HeadersBindingsOneOption: Story;
export declare const HeadersPayload: Story;
export declare const ExtensionsBindingsOneOption: Story;
export declare const ExtensionsPayload: Story;
export declare const BindingsOneOptionPayload: Story;
export declare const EdgeCaseBrokenRefBindings: Story;
