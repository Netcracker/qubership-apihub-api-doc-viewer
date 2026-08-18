import { JsonSchemaNextViewer } from '../../components/JsonSchemaNextViewer/JsonSchemaNextViewer';
import type { ComponentProps } from '../../../../../node_modules/react';
export type JsonSchemaDiffSampleCase = {
    caseId: string;
    beforeYaml: string;
    afterYaml: string;
};
export type JsonSchemaDiffCaseStoryComponentProps = Pick<JsonSchemaDiffSampleCase, "caseId" | "beforeYaml" | "afterYaml">;
export declare const jsonSchemaDiffSampleReadonlyArgTypes: {
    beforeYaml: {
        control: {
            type: "text";
        };
        table: {
            category: string;
        };
        description: string;
    };
    afterYaml: {
        control: {
            type: "text";
        };
        table: {
            category: string;
        };
        description: string;
    };
};
type JsonSchemaNextViewerProps = ComponentProps<typeof JsonSchemaNextViewer>;
type JsonSchemaDiffCaseStoryArgs = {
    name: string;
    args: JsonSchemaDiffCaseStoryComponentProps;
    argTypes: typeof jsonSchemaDiffSampleReadonlyArgTypes;
    render: (args: JsonSchemaDiffCaseStoryComponentProps) => JSX.Element;
};
export declare const createJsonSchemaNextViewerArgs: (beforeSourceText: string, afterSourceText: string) => JsonSchemaNextViewerProps;
export declare const createJsonSchemaDiffSampleById: <TSample extends JsonSchemaDiffSampleCase>(sampleCases: readonly TSample[]) => Record<string, TSample>;
export declare const createJsonSchemaDiffCaseStoryFactory: (StoryComponent: (props: JsonSchemaDiffCaseStoryComponentProps) => JSX.Element, sampleById: Record<string, JsonSchemaDiffSampleCase>) => (caseId: string) => JsonSchemaDiffCaseStoryArgs;
export declare const JsonSchemaDiffSamplesStory: ({ beforeYaml, afterYaml, }: JsonSchemaDiffCaseStoryComponentProps) => import('../../../../../node_modules/react/jsx-runtime').JSX.Element;
export {};
