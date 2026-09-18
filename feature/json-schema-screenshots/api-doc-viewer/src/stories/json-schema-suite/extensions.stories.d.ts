import { type JsonSchemaSamplesStoryObj } from "./json-schema-samples-common";
declare const meta: {
    id: string;
    title: string;
    component: (_props: import("./json-schema-samples-common").JsonSchemaCaseStoryComponentProps) => null;
    argTypes: {
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
export declare const Case_001_root_primitive: Story;
export declare const Case_002_root_object: Story;
export declare const Case_003_root_array: Story;
export declare const Case_004_root_json_schema: Story;
export declare const Case_005_property_primitive: Story;
export declare const Case_006_property_object: Story;
export declare const Case_007_property_array: Story;
export declare const Case_008_property_json_schema: Story;
export declare const Case_009_items_primitive: Story;
export declare const Case_010_items_object: Story;
export declare const Case_011_items_array: Story;
export declare const Case_012_items_json_schema: Story;
export declare const Case_013_root_mixed_set: Story;
