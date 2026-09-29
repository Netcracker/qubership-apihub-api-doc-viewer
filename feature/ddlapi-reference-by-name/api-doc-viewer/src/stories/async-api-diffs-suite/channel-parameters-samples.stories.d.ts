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
export declare const Case_1_channel_parameters_two_added: Story;
export declare const Case_2_channel_parameters_two_removed: Story;
export declare const Case_3_channel_parameters_second_added: Story;
export declare const Case_4_channel_parameters_second_removed: Story;
export declare const Case_5_channel_parameters_key_renamed: Story;
export declare const Case_6_channel_parameters_fields_added: Story;
export declare const Case_7_channel_parameters_fields_removed: Story;
export declare const Case_8_channel_parameters_fields_changed: Story;
