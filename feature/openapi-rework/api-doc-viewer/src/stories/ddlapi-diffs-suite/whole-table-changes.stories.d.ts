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
export declare const Case_01_wholly_added_table: Story;
export declare const Case_02_wholly_removed_table: Story;
export declare const Case_03_wholly_added_table_with_index: Story;
export declare const Case_04_wholly_removed_table_with_index: Story;
