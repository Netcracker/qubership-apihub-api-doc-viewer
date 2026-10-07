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
export declare const Case_001_default_added_empty_array: Story;
export declare const Case_002_default_removed_empty_array: Story;
export declare const Case_003_default_replaced_empty_to_array: Story;
export declare const Case_004_default_replaced_array_to_empty: Story;
export declare const Case_005_default_replaced_array_to_array: Story;
