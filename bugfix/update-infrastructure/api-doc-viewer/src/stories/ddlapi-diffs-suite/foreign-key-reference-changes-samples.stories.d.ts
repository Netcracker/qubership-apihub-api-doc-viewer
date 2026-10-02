import { DdlDiffsSamplesStoryObj } from './ddlapi-diffs-utils';
declare const meta: {
    title: string;
    component: (_props: import('./ddlapi-diffs-utils').DdlDiffCaseStoryComponentProps) => null;
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
export declare const Case_01_replaced_foreign_key_column: Story;
export declare const Case_02_replaced_foreign_key_table: Story;
export declare const Case_03_replaced_foreign_key_schema_public_to_custom: Story;
export declare const Case_04_replaced_foreign_key_schema_custom1_to_custom2: Story;
export declare const Case_05_replaced_foreign_key_schema_custom_to_public: Story;
export declare const Case_06_replaced_foreign_key_table_and_column: Story;
export declare const Case_07_replaced_foreign_key_schema_public_to_custom_and_table: Story;
export declare const Case_08_replaced_foreign_key_schema_custom_to_public_and_table: Story;
export declare const Case_09_replaced_foreign_key_schema_custom1_to_custom2_and_table: Story;
export declare const Case_10_replaced_foreign_key_schema_public_to_custom_table_and_column: Story;
export declare const Case_11_replaced_foreign_key_schema_custom_to_public_table_and_column: Story;
export declare const Case_12_replaced_foreign_key_schema_custom1_to_custom2_table_and_column: Story;
export declare const Case_13_renamed_foreign_key: Story;
export declare const Case_14_unnamed_foreign_key_became_named: Story;
export declare const Case_15_removed_foreign_key_next_to_kept_one_with_same_target: Story;
export declare const Case_16_foreign_key_moved_off_column_next_to_kept_one_with_same_target: Story;
export declare const Case_17_unchanged_unnamed_foreign_key_with_index_description_added: Story;
