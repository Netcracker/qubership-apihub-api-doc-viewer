import { DdlSamplesStoryObj } from '../ddlapi-suite/ddl-samples-common';
declare const meta: {
    id: string;
    title: string;
    component: (_props: import('../ddlapi-suite/ddl-samples-utils').DdlCaseStoryComponentProps) => null;
    argTypes: {
        displayMode: {
            readonly control: {
                readonly type: "select";
            };
            readonly options: readonly import('../..').DisplayMode[];
            readonly table: {
                readonly category: "Viewer";
            };
        };
        caseId: {
            control: {
                type: "text";
            };
            table: {
                category: string;
            };
            description: string;
        };
        sampleSql: {
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
type Story = DdlSamplesStoryObj;
export declare const Case_01_table_description: Story;
export declare const Case_02_column_description: Story;
export declare const Case_03_column_default: Story;
export declare const Case_04_column_enum_values: Story;
export declare const Case_05_column_generated_expression: Story;
export declare const Case_06_index_description: Story;
