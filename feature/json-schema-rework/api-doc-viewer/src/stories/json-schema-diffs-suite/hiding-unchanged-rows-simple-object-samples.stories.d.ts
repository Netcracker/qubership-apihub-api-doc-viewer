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
export declare const Case_1_1_two_added_three_removed: Story;
export declare const Case_1_2_second_and_fifth_added_others_unchanged: Story;
export declare const Case_1_3_root_description_replaced: Story;
export declare const Case_1_4_property_metadata_and_constraints_changed: Story;
