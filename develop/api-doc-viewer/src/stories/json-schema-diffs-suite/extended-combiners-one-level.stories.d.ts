import { StoryObj } from '@storybook/react-vite';
declare const meta: {
    title: string;
    component: ({ beforeYaml, afterYaml, hideUnchangedNodes, }: import('./json-schema-diffs-utils').JsonSchemaDiffCaseStoryComponentProps) => import("react").JSX.Element;
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
export declare const Case_001_append_variant_string: Story;
export declare const Case_002_append_variant_object: Story;
export declare const Case_003_append_variant_array: Story;
export declare const Case_004_remove_variant_string: Story;
export declare const Case_005_remove_variant_object: Story;
export declare const Case_006_remove_variant_array: Story;
export declare const Case_007_change_variant_string: Story;
export declare const Case_008_change_variant_object: Story;
export declare const Case_009_change_variant_array: Story;
export declare const Case_010_append_variant_nested_combiner: Story;
export declare const Case_011_remove_variant_nested_combiner: Story;
