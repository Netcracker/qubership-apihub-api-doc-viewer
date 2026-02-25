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
export declare const ChannelID: Story;
export declare const Title: Story;
export declare const Address: Story;
export declare const Description: Story;
export declare const Summary: Story;
export declare const AddressParameters: Story;
export declare const AddressParametersWithLocation: Story;
export declare const Extensions: Story;
export declare const BindingsOneOption: Story;
export declare const BindingsTwoOptionsSelectedFirst: Story;
export declare const BindingsTwoOptionsSelectedSecond: Story;
export declare const ServersOneServer: Story;
export declare const ServersTwoServers: Story;
export declare const DescriptionSummary: Story;
export declare const DescriptionAddressParameters: Story;
export declare const DescriptionExtensions: Story;
export declare const DescriptionBindingsOneOption: Story;
export declare const DescriptionServersOneServer: Story;
export declare const AddressParametersExtensions: Story;
export declare const AddressParametersBindingsOneOption: Story;
export declare const AddressParametersServersOneServer: Story;
export declare const ExtensionsBindingsOneOption: Story;
export declare const ExtensionsServersOneServer: Story;
export declare const EdgeCaseBrokenRefBindings: Story;
export declare const EdgeCaseBrokenRefAddressParameter: Story;
export declare const EdgeCaseBrokenRefServer: Story;
