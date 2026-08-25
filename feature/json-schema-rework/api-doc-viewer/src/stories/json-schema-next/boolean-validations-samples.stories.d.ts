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
export declare const Case_001_default_false: Story;
export declare const Case_002_default_true: Story;
export declare const Case_003_example_false: Story;
export declare const Case_004_example_true: Story;
export declare const Case_005_examples_false: Story;
export declare const Case_006_examples_true: Story;
export declare const Case_007_examples_true_false: Story;
