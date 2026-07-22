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
export declare const Case_101_add_one_more_column_no_badges: Story;
export declare const Case_102_remove_one_more_column_no_badges: Story;
export declare const Case_201_add_column_primary_key: Story;
export declare const Case_202_add_column_foreign_key: Story;
export declare const Case_203_add_column_unique: Story;
export declare const Case_204_add_column_not_null: Story;
export declare const Case_205_add_column_generated_identity: Story;
export declare const Case_206_add_column_generated_expression: Story;
export declare const Case_301_remove_column_primary_key: Story;
export declare const Case_302_remove_column_foreign_key: Story;
export declare const Case_303_remove_column_unique: Story;
export declare const Case_304_remove_column_not_null: Story;
export declare const Case_305_remove_column_generated_identity: Story;
export declare const Case_306_remove_column_generated_expression: Story;
export declare const Case_401_existing_column_became_primary_key: Story;
export declare const Case_402_existing_column_became_foreign_key: Story;
export declare const Case_403_existing_column_became_unique: Story;
export declare const Case_404_existing_column_became_generated_identity: Story;
export declare const Case_405_existing_column_became_generated_expression: Story;
export declare const Case_406_existing_column_became_not_null: Story;
export declare const Case_501_existing_column_lost_primary_key: Story;
export declare const Case_502_existing_column_lost_foreign_key: Story;
export declare const Case_503_existing_column_lost_unique: Story;
export declare const Case_504_existing_column_lost_generated_identity: Story;
export declare const Case_505_existing_column_lost_generated_expression: Story;
export declare const Case_506_existing_column_lost_not_null: Story;
