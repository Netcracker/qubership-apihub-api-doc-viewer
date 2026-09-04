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
    };
};
export default meta;
type Story = JsonSchemaSamplesStoryObj;
export declare const Case_001_default_empty_object: Story;
export declare const Case_002_default_small_object: Story;
export declare const Case_003_example_empty_object: Story;
export declare const Case_004_example_small_object: Story;
export declare const Case_005_examples_empty_object: Story;
export declare const Case_006_examples_small_object: Story;
export declare const Case_007_examples_two_objects: Story;
export declare const Case_008_min_properties_0: Story;
export declare const Case_009_min_properties_1: Story;
export declare const Case_010_max_properties_1: Story;
