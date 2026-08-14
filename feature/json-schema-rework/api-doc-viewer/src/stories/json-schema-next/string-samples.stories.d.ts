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
export declare const Case_001_type_only: Story;
export declare const Case_002_header: Story;
export declare const Case_003_description: Story;
export declare const Case_004_header_description: Story;
export declare const Case_005_additional_info: Story;
export declare const Case_006_header_additional_info: Story;
export declare const Case_007_description_additional_info: Story;
export declare const Case_008_header_description_additional_info: Story;
