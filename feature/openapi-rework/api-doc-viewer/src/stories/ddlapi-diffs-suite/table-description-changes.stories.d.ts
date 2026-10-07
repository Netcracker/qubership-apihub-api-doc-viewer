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
export declare const Case_01_add_table_description: Story;
export declare const Case_02_remove_table_description: Story;
export declare const Case_03_replace_table_description: Story;
export declare const Case_04_add_long_table_description: Story;
export declare const Case_05_remove_long_table_description: Story;
export declare const Case_06_replace_long_table_description: Story;
export declare const Case_07_replace_short_to_long_table_description: Story;
export declare const Case_08_replace_long_to_short_table_description: Story;
