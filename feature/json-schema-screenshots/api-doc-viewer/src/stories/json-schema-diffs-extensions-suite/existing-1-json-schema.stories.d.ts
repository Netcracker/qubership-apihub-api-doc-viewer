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
export declare const Case_01_add_primitive: Story;
export declare const Case_02_add_object: Story;
export declare const Case_03_add_array: Story;
export declare const Case_04_add_json_schema: Story;
export declare const Case_05_replace_to_primitive: Story;
export declare const Case_06_replace_to_object: Story;
export declare const Case_07_replace_to_array: Story;
export declare const Case_08_replace_to_json_schema: Story;
