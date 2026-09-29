import { type DdlSamplesStoryObj } from "./ddl-samples-common";
declare const meta: {
    id: string;
    title: string;
    component: (_props: import("./ddl-samples-utils").DdlCaseStoryComponentProps) => null;
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
export declare const Users: Story;
export declare const Employees: Story;
export declare const Projects: Story;
export declare const EmployeesProjects: Story;
export declare const UsersPlusIdx: Story;
export declare const Petstore: Story;
export declare const NoHeadingWithTableName: Story;
