import { JsonSchemaSamplesStoryObj } from './json-schema-samples-common';
declare const meta: {
    id: string;
    title: string;
    component: (_props: import('./json-schema-samples-common').JsonSchemaCaseStoryComponentProps) => null;
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
export declare const Case_001_oneof_nested_anyof: Story;
