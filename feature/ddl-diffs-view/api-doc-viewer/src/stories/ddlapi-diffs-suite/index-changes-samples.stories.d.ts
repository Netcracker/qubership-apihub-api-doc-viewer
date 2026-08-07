import { type DdlDiffsSamplesStoryObj } from "./ddlapi-diffs-utils";
declare const meta: {
    title: string;
    component: (_props: import("./ddlapi-diffs-utils").DdlDiffCaseStoryComponentProps) => null;
    argTypes: {
        caseId: {
            control: {
                type: "text";
            };
            table: {
                category: string;
            };
            description: string;
        };
        beforeSql: {
            control: {
                type: "text";
            };
            table: {
                category: string;
            };
            description: string;
        };
        afterSql: {
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
type Story = DdlDiffsSamplesStoryObj;
export declare const Case_01_add_index_when_none_present: Story;
export declare const Case_02_add_index_unique_when_none_present: Story;
export declare const Case_03_remove_index_when_none_present: Story;
export declare const Case_04_remove_index_unique_when_none_present: Story;
export declare const Case_05_add_one_more_index_without_unique: Story;
export declare const Case_06_add_one_more_index_with_unique: Story;
export declare const Case_07_remove_one_more_index_without_unique: Story;
export declare const Case_08_remove_one_more_index_with_unique: Story;
export declare const Case_09_append_new_column_in_index: Story;
export declare const Case_10_remove_new_column_in_index: Story;
export declare const Case_11_replaced_column_in_index: Story;
export declare const Case_12_index_became_unique: Story;
export declare const Case_13_index_not_unique: Story;
export declare const Case_14_remove_one_more_index_without_unique: Story;
export declare const Case_15_remove_one_more_index_with_unique: Story;
export declare const Case_16_remove_new_column_in_index: Story;
export declare const Case_17_index_not_unique: Story;
export declare const Case_18_unnamed_index_became_titled: Story;
export declare const Case_19_titled_index_became_unnamed: Story;
export declare const Case_20_unnamed_index_append_column: Story;
export declare const Case_21_unnamed_index_pop_column: Story;
export declare const Case_22_unnamed_index_replaced_column: Story;
export declare const Case_23_unnamed_index_became_unique: Story;
export declare const Case_24_unnamed_index_lost_unique: Story;
export declare const Case_25_add_index_description: Story;
export declare const Case_26_remove_index_description: Story;
export declare const Case_27_replace_index_description: Story;
