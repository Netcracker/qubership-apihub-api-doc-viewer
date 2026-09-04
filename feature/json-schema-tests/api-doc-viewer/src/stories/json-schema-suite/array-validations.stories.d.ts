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
export declare const Case_001_default_arbitrary_array: Story;
export declare const Case_002_example_arbitrary_array: Story;
export declare const Case_003_examples_two_items: Story;
export declare const Case_004_min_items_0: Story;
export declare const Case_005_min_items_2: Story;
export declare const Case_006_max_items_5: Story;
export declare const Case_007_min_items_0_max_items_5: Story;
export declare const Case_008_min_items_2_max_items_5: Story;
export declare const Case_009_unique_items_false: Story;
export declare const Case_010_unique_items_true: Story;
