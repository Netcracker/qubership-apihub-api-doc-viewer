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
export declare const Case_001_value_range_min_0_inclusive: Story;
export declare const Case_002_value_range_min_1_inclusive: Story;
export declare const Case_003_value_range_min_1_exclusive_oas30: Story;
export declare const Case_004_value_range_max_0_inclusive: Story;
export declare const Case_005_value_range_max_10_inclusive: Story;
export declare const Case_006_value_range_max_10_exclusive_oas30: Story;
export declare const Case_007_value_range_min_0_max_10_both_inclusive: Story;
export declare const Case_008_value_range_min_1_max_10_both_inclusive: Story;
export declare const Case_009_value_range_min_0_max_10_max_exclusive_oas30: Story;
export declare const Case_010_value_range_min_1_max_10_max_exclusive_oas30: Story;
export declare const Case_011_value_range_min_1_exclusive_max_10_inclusive_oas30: Story;
export declare const Case_012_value_range_min_1_inclusive_max_10_exclusive_oas30: Story;
export declare const Case_013_value_range_min_1_exclusive_max_10_exclusive_oas30: Story;
