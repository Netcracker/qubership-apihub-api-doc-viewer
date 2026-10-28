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
export declare const Case_3_1_third_level_changes_with_unchanged_siblings: Story;
export declare const Case_3_2_fourth_level_change: Story;
export declare const Case_3_3_changes_in_two_branches_unchanged_branch_between: Story;
export declare const Case_3_4_json_schema_value_changed: Story;
