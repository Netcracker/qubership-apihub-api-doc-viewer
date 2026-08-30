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
export declare const Case_01_add_two_columns_to_empty_table: Story;
export declare const Case_02_remove_two_columns_from_table_with_two_columns: Story;
