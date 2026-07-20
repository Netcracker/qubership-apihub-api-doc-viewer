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
export declare const Case_01_add_one_more_column_no_badges: Story;
export declare const Case_02_remove_one_more_column_no_badges: Story;
export declare const Case_03_add_column_primary_key: Story;
export declare const Case_04_add_column_foreign_key: Story;
export declare const Case_05_add_column_unique: Story;
export declare const Case_06_add_column_not_null: Story;
export declare const Case_07_add_column_generated_identity: Story;
export declare const Case_08_remove_column_primary_key: Story;
export declare const Case_09_remove_column_foreign_key: Story;
export declare const Case_10_remove_column_unique: Story;
export declare const Case_11_remove_column_not_null: Story;
export declare const Case_12_remove_column_generated_identity: Story;
export declare const Case_13_existing_column_became_primary_key: Story;
export declare const Case_14_existing_column_became_foreign_key: Story;
export declare const Case_15_existing_column_became_unique: Story;
export declare const Case_16_existing_column_became_generated_identity: Story;
export declare const Case_17_existing_column_became_generated_expression: Story;
export declare const Case_18_existing_column_became_not_null: Story;
export declare const Case_19_existing_column_lost_primary_key: Story;
export declare const Case_20_existing_column_lost_foreign_key: Story;
export declare const Case_21_existing_column_lost_unique: Story;
export declare const Case_22_existing_column_lost_generated_identity: Story;
export declare const Case_23_existing_column_lost_generated_expression: Story;
export declare const Case_24_existing_column_lost_not_null: Story;
