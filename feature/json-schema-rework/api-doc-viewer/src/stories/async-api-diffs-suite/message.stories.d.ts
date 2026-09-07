import type { StoryObj } from "@storybook/react";
import { type AsyncApiCaseStoryComponentProps } from "./async-api-diffs-utils";
declare const meta: {
    title: string;
    component: ({ beforeYaml, afterYaml, }: AsyncApiCaseStoryComponentProps) => import('../../../../../node_modules/react/jsx-runtime').JSX.Element;
    argTypes: {
        beforeYaml: {
            control: {
                type: "text";
            };
            table: {
                category: string;
            };
            description: string;
        };
        afterYaml: {
            control: {
                type: "text";
            };
            table: {
                category: string;
            };
            description: string;
        };
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Case_1_1_message_title_changed: Story;
export declare const Case_1_2_message_title_removed: Story;
export declare const Case_1_3_message_title_added: Story;
export declare const Case_2_1_message_description_changed: Story;
export declare const Case_2_2_message_description_removed: Story;
export declare const Case_2_3_message_description_added: Story;
export declare const Case_2_4_message_long_description_changed: Story;
export declare const Case_2_5_message_long_description_removed: Story;
export declare const Case_2_6_message_long_description_added: Story;
export declare const Case_2_7_message_summary_changed: Story;
export declare const Case_2_8_message_summary_removed: Story;
export declare const Case_2_9_message_summary_added: Story;
export declare const Case_2_10_message_long_summary_changed: Story;
export declare const Case_2_11_message_long_summary_removed: Story;
export declare const Case_2_12_message_long_summary_added: Story;
export declare const Case_2_13_message_description_moved_to_summary: Story;
export declare const Case_2_14_message_long_description_moved_to_summary: Story;
export declare const Case_2_15_message_long_description_moved_to_long_summary: Story;
export declare const Case_2_16_message_description_moved_to_long_summary: Story;
export declare const Case_2_17_message_summary_moved_to_description: Story;
export declare const Case_2_18_message_long_summary_moved_to_description: Story;
export declare const Case_2_19_message_long_summary_moved_to_long_description: Story;
export declare const Case_2_20_message_summary_moved_to_long_description: Story;
export declare const Case_3_1_message_bindings_add_one_more_binding: Story;
export declare const Case_3_2_message_bindings_remove_one_of_several_bindings: Story;
export declare const Case_3_3_message_bindings_add_bindings: Story;
export declare const Case_3_4_message_bindings_remove_bindings: Story;
export declare const Case_4_1_message_bindings_kafka_bindingVersion_changed: Story;
export declare const Case_4_2_message_bindings_kafka_bindingVersion_removed: Story;
export declare const Case_4_3_message_bindings_kafka_bindingVersion_added: Story;
export declare const Case_5_1_message_bindings_kafka_internal_jso_changes: Story;
export declare const Case_6_1_message_x_second_added: Story;
export declare const Case_6_2_message_x_second_removed: Story;
export declare const Case_6_3_message_x_second_changed: Story;
export declare const Case_6_4_message_x_first_and_x_second_added: Story;
export declare const Case_6_5_message_x_first_and_x_second_removed: Story;
export declare const Case_7_1_message_headers_object_schema_added: Story;
export declare const Case_7_2_message_headers_object_schema_removed: Story;
export declare const Case_7_3_message_headers_description_changed: Story;
export declare const Case_7_4_message_payload_object_schema_added: Story;
export declare const Case_7_5_message_payload_object_schema_removed: Story;
export declare const Case_7_6_message_payload_description_changed: Story;
export declare const Case_8_1_message_headers_object_schema_added_extensions: Story;
export declare const Case_8_2_message_headers_object_schema_removed_extensions: Story;
export declare const Case_8_3_message_headers_object_schema_changed_extensions: Story;
export declare const Case_8_4_message_headers_object_schema_added_property_with_extensions: Story;
export declare const Case_8_5_message_headers_object_schema_removed_property_with_extensions: Story;
export declare const Case_8_6_message_payload_object_schema_added_extensions: Story;
export declare const Case_8_7_message_payload_object_schema_removed_extensions: Story;
export declare const Case_8_8_message_payload_object_schema_changed_extensions: Story;
export declare const Case_8_9_message_payload_object_schema_added_property_with_extensions: Story;
export declare const Case_8_10_message_payload_object_schema_removed_property_with_extensions: Story;
