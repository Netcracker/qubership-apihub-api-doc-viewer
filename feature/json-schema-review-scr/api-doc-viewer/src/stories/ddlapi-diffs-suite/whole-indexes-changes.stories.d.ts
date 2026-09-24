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
export declare const Case_01_add_two_indexes_when_none_present: Story;
export declare const Case_02_remove_two_indexes_when_two_present: Story;
