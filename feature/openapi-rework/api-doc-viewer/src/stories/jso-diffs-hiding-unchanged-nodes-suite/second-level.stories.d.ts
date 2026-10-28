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
export declare const Case_2_1_two_changed_three_unchanged_one_changed: Story;
export declare const Case_2_2_three_unchanged_one_changed_two_unchanged: Story;
export declare const Case_2_3_nested_object_added: Story;
export declare const Case_2_4_nested_object_removed: Story;
export declare const Case_2_5_nested_primitive_to_object: Story;
export declare const Case_2_6_array_item_replaced: Story;
export declare const Case_2_7_array_object_item_changed: Story;
