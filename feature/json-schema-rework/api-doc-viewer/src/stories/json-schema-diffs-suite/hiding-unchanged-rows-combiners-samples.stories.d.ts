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
export declare const Case_3_1_oneof_variant_added: Story;
export declare const Case_4_1_oneof_variant_content_changed: Story;
export declare const Case_5_1_oneof_three_variants_unchanged: Story;
export declare const Case_5_2_root_description_changed_oneof_unchanged: Story;
