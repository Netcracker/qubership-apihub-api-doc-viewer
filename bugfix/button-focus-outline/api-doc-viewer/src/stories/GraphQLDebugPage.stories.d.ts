import { StoryObj } from '@storybook/react-vite';
declare const meta: {
    title: string;
    component: import('../../../../node_modules/react').FC;
    parameters: {
        layout: string;
    };
    argTypes: {};
    args: {};
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
