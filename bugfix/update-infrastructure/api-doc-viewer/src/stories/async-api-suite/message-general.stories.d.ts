import { StoryObj } from '@storybook/react-vite';
declare const meta: {
    title: string;
    component: import('../../../../../node_modules/react').FC<import('../..').AsyncApiOperationViewerProps>;
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
export declare const MessageIdSend: Story;
export declare const MessageIdReceive: Story;
export declare const Name: Story;
export declare const Title: Story;
export declare const NameTitle: Story;
export declare const Address: Story;
export declare const AddressDescription: Story;
export declare const AddressSummary: Story;
export declare const AddressDescriptionSummary: Story;
export declare const NoHeadingWithName: Story;
export declare const NoHeadingWithoutName: Story;
