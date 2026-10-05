import { StoryObj } from '@storybook/react-vite';
declare const meta: {
    title: string;
    component: import('../../../../node_modules/react').FC<import('..').GraphQLOperationViewerProps>;
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
export declare const Union: Story;
export declare const SelfCycled: Story;
export declare const SelfCycledInput: Story;
export declare const TwoBranchesSelfCycled: Story;
export declare const TwoBranchesSelfCycledInput: Story;
