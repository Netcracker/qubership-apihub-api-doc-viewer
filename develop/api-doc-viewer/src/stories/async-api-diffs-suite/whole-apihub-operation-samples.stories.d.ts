import type { StoryObj } from "@storybook/react";
declare const meta: {
    title: string;
    component: ({ caseId }: {
        caseId: string;
    }) => import('../../../../../node_modules/react/jsx-runtime').JSX.Element;
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Case_1_1_message_removed_from_operation_channel_and_document: Story;
export declare const Case_1_2_message_added_to_operation_channel_and_document: Story;
