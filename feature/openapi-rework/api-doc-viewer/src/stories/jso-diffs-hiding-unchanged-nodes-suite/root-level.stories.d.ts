import { StoryObj } from '@storybook/react-vite';
declare const meta: {
    title: string;
    component: ({ beforeYaml, afterYaml, hideUnchangedNodes, }: import('../jso-diffs-suite/jso-diffs-utils').JsoCaseStoryComponentProps) => import("react").JSX.Element;
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
export declare const Case_1_1_two_changed_three_unchanged_one_changed: Story;
export declare const Case_1_2_three_unchanged_one_changed_two_unchanged: Story;
export declare const Case_1_3_removed_and_added_between_unchanged: Story;
export declare const Case_1_4_nothing_changed: Story;
export declare const Case_1_5_everything_changed: Story;
