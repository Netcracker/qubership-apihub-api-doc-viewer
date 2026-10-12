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
export declare const Case_001_additional_items_added: Story;
export declare const Case_002_additional_items_removed: Story;
export declare const Case_003_additional_items_type_changed: Story;
export declare const Case_004_items_schema_to_array: Story;
export declare const Case_005_tuple_item_appended: Story;
export declare const Case_006_tuple_item_removed: Story;
export declare const Case_007_items_schema_description_changed: Story;
