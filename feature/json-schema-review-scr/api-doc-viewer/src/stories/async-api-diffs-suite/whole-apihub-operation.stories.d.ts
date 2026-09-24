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
export declare const Case_1_1_message_removed_from_operation_channel_and_document: Story;
export declare const Case_1_2_message_added_to_operation_channel_and_document: Story;
