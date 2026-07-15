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
export declare const CoveringInclude: Story;
export declare const Expression: Story;
export declare const NullsNotDistinct: Story;
export declare const OneColumn: Story;
export declare const OneColumnUnique: Story;
export declare const Partial: Story;
export declare const TwoColumns: Story;
export declare const TwoColumnsUnique: Story;
