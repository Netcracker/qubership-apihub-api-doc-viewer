import type { Meta, StoryObj } from "@storybook/react";
import type { JsonSchemaSampleCase } from "../utils/json-schema-samples-cases";
export type JsonSchemaNextCaseStoryComponentProps = {
    caseId: string;
};
export declare const JsonSchemaNextSampleStory: (_props: JsonSchemaNextCaseStoryComponentProps) => null;
export type JsonSchemaNextSamplesStoryMeta = Meta<typeof JsonSchemaNextSampleStory>;
export type JsonSchemaNextSamplesStoryObj = StoryObj<JsonSchemaNextSamplesStoryMeta>;
export declare const jsonSchemaNextSamplesStoryMetaBase: {
    component: (_props: JsonSchemaNextCaseStoryComponentProps) => null;
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
export declare const createNextCaseStoryFactory: (sampleById: Record<string, JsonSchemaSampleCase>) => (caseId: string) => JsonSchemaNextSamplesStoryObj;
