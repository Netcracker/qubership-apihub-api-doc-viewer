import type { StoryObj } from "@storybook/react";
import { type JsonSchemaDiffCaseStoryComponentProps } from "./json-schema-diffs-utils";
declare const meta: {
    title: string;
    component: ({ beforeYaml, afterYaml, hideUnchangedNodes }: JsonSchemaDiffCaseStoryComponentProps) => import('../../../../../node_modules/react/jsx-runtime').JSX.Element;
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
export declare const Case_01_renamed_only: Story;
export declare const Case_02_renamed_and_description_changed: Story;
export declare const Case_03_renamed_and_type_changed: Story;
export declare const Case_04_renamed_and_validation_changed: Story;
export declare const Case_05_renamed_and_deprecated: Story;
export declare const Case_06_renamed_object_parameter: Story;
export declare const Case_07_two_parameters_renamed: Story;
export declare const Case_08_renamed_with_query_parameter_added: Story;
export declare const Case_09_query_parameter_renamed_is_removed_and_added: Story;
