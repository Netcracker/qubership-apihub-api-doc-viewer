import type { StoryObj } from '@storybook/react';
declare const meta: {
    title: string;
    component: import('../../../../../node_modules/react').FC<import('../../components/AsyncApiOperationViewer/AsyncApiOperationDiffsViewer').AsyncApiOperationDiffsViewerProps>;
    parameters: {};
    argTypes: {
        mergedSource: {
            control: "object";
        };
    };
    args: {
        mergedSource: {};
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const AddressDescriptionSummary: Story;
