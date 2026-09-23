import type { StoryObj } from "@storybook/react";
declare const meta: {
    title: string;
    component: ({ beforeYaml, afterYaml, hideUnchangedNodes, }: import("../json-schema-diffs-suite/json-schema-diffs-utils").JsonSchemaDiffCaseStoryComponentProps) => import('../../../../../node_modules/react/jsx-runtime').JSX.Element;
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
        hideUnchangedNodes: {
            control: {
                type: "boolean";
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
export declare const Case_01_primitive_removed: Story;
export declare const Case_02_object_removed: Story;
export declare const Case_03_array_removed: Story;
export declare const Case_04_json_schema_removed: Story;
export declare const Case_05_replaced_to_primitive: Story;
export declare const Case_06_replaced_to_object: Story;
export declare const Case_07_replaced_to_array: Story;
export declare const Case_08_replaced_to_json_schema: Story;
export declare const Case_09_added_and_removed: Story;
export declare const Case_10_removed_and_replaced: Story;
export declare const Case_11_added_and_replaced: Story;
export declare const Case_12_both_replaced: Story;
export declare const Case_13_both_added: Story;
export declare const Case_14_both_removed: Story;
