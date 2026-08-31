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
export declare const DefaultValueBackslash: Story;
export declare const DefaultValueCr: Story;
export declare const DefaultValueCrlf: Story;
export declare const DefaultValueEmbeddedSingleQuotes: Story;
export declare const DefaultValueLf: Story;
export declare const DefaultValueQuoted: Story;
export declare const DefaultValueTab: Story;
export declare const DefaultValueUnicode: Story;
export declare const GeneratedExpressionComposite: Story;
export declare const GeneratedExpressionQuoted: Story;
