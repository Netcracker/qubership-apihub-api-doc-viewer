import type { StoryObj } from "@storybook/react";
declare const meta: {
    title: string;
    component: ({ caseId }: {
        caseId: string;
    }) => import('../../../../../node_modules/react/jsx-runtime').JSX.Element;
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Case_1_channel_parameters_two_added: Story;
export declare const Case_2_channel_parameters_two_removed: Story;
export declare const Case_3_channel_parameters_second_added: Story;
export declare const Case_4_channel_parameters_second_removed: Story;
export declare const Case_5_channel_parameters_key_renamed: Story;
export declare const Case_6_channel_parameters_fields_added: Story;
export declare const Case_7_channel_parameters_fields_removed: Story;
export declare const Case_8_channel_parameters_fields_changed: Story;
