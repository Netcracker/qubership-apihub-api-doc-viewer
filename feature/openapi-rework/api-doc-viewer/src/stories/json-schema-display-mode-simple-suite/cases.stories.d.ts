import { JsonSchemaSamplesStoryObj } from '../json-schema-suite/json-schema-samples-common';
declare const meta: {
    id: string;
    title: string;
    component: (_props: import('../json-schema-suite/json-schema-samples-common').JsonSchemaCaseStoryComponentProps) => null;
    argTypes: {
        displayMode: {
            readonly control: {
                readonly type: "select";
            };
            readonly options: readonly import('../..').DisplayMode[];
            readonly table: {
                readonly category: "Viewer";
            };
        };
        caseId: {
            control: {
                disable: true;
            };
            table: {
                disable: true;
            };
        };
        sampleYaml: {
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
type Story = JsonSchemaSamplesStoryObj;
export declare const Case_01_description: Story;
export declare const Case_02_deprecation_reason: Story;
export declare const Case_03_allowed_values: Story;
export declare const Case_04_default: Story;
export declare const Case_05_examples: Story;
export declare const Case_06_value_range: Story;
export declare const Case_07_value_length: Story;
export declare const Case_08_value_pattern: Story;
export declare const Case_09_value_multiple_of: Story;
export declare const Case_10_properties_count: Story;
export declare const Case_11_items_count: Story;
export declare const Case_12_unique_items: Story;
export declare const Case_13_allowed_property_names: Story;
export declare const Case_14_top_level_props_media_types: Story;
