import type { StoryObj } from "@storybook/react";
declare const meta: {
    title: string;
    component: ({ beforeYaml, afterYaml, }: import("./json-schema-diffs-utils").JsonSchemaDiffCaseStoryComponentProps) => import('../../../../../node_modules/react/jsx-runtime').JSX.Element;
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
export declare const Case_2_1_root_description_changed: Story;
export declare const Case_2_2_primitive_props_added: Story;
export declare const Case_2_3_nested_object_props_added: Story;
export declare const Case_2_4_primitive_added_nested_removed: Story;
export declare const Case_2_5_nested_prop_added_and_removed: Story;
export declare const Case_2_6_nested_prop_added_object_removed: Story;
export declare const Case_2_7_object_added_nested_prop_removed: Story;
export declare const Case_2_8_nested_property_metadata_and_constraints_changed: Story;
