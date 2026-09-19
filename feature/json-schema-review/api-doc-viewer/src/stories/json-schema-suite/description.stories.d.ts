import { type JsonSchemaSamplesStoryObj } from "./json-schema-samples-common";
declare const meta: {
    id: string;
    title: string;
    component: (_props: import("./json-schema-samples-common").JsonSchemaCaseStoryComponentProps) => null;
    argTypes: {
        caseId: {
            control: {
                disable: true;
            };
            table: {
                disable: true;
            };
        };
        sampleYaml: {
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
type Story = JsonSchemaSamplesStoryObj;
export declare const Case_001_short_single_line: Story;
export declare const Case_002_short_multi_line: Story;
export declare const Case_003_long_single_line: Story;
export declare const Case_004_long_multi_line: Story;
