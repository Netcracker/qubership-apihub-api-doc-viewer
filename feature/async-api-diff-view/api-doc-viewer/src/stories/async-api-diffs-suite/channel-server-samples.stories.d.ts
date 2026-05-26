import type { StoryObj } from "@storybook/react";
declare const meta: {
    title: string;
    component: ({ caseId }: {
        caseId: string;
    }) => import('../../../../../node_modules/react/jsx-runtime').JSX.Element;
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Case_1_1_channel_servers_host_protocol_changed: Story;
export declare const Case_1_2_channel_servers_description_set: Story;
export declare const Case_1_3_channel_servers_summary_set: Story;
export declare const Case_2_1_channel_servers0_bindings_add_one_more_binding: Story;
export declare const Case_2_2_channel_servers0_bindings_remove_one_of_several_bindings: Story;
export declare const Case_2_3_channel_servers0_bindings_add_bindings: Story;
export declare const Case_2_4_channel_servers0_bindings_remove_bindings: Story;
export declare const Case_2_3_channel_servers_all_added: Story;
export declare const Case_2_4_channel_servers_all_removed: Story;
export declare const Case_3_1_channel_servers0_bindings_kafka_bindingVersion_changed: Story;
export declare const Case_3_2_channel_servers0_bindings_kafka_bindingVersion_removed: Story;
export declare const Case_3_3_channel_servers0_bindings_kafka_bindingVersion_added: Story;
export declare const Case_4_1_channel_server_bindings_kafka_internal_jso_changes: Story;
export declare const Case_5_1_channel_servers_one_item_removed: Story;
export declare const Case_5_2_channel_servers_one_item_added: Story;
