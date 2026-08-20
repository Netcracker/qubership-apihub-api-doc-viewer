import { type JsonSchemaNextSamplesStoryObj } from "./json-schema-next-samples-common";
declare const meta: {
    id: string;
    title: string;
    component: (_props: import("./json-schema-next-samples-common").JsonSchemaNextCaseStoryComponentProps) => null;
    argTypes: {
        caseId: {
            control: {
                disable: true;
            };
            table: {
                disable: true;
            };
        };
    };
};
export default meta;
type Story = JsonSchemaNextSamplesStoryObj;
export declare const Case_001_oneof_nested_anyof: Story;
