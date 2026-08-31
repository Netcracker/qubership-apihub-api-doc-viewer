import type { Meta, StoryObj } from "@storybook/react";
import type { JsonSchemaSampleCase } from "../utils/json-schema-samples-cases";
export type JsonSchemaCaseStoryComponentProps = {
    caseId: string;
};
export declare const JsonSchemaSampleStory: (_props: JsonSchemaCaseStoryComponentProps) => null;
export type JsonSchemaSamplesStoryMeta = Meta<typeof JsonSchemaSampleStory>;
export type JsonSchemaSamplesStoryObj = StoryObj<JsonSchemaSamplesStoryMeta>;
export declare const jsonSchemaSamplesStoryMetaBase: {
    component: (_props: JsonSchemaCaseStoryComponentProps) => null;
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
export declare const createCaseStoryFactory: (sampleById: Record<string, JsonSchemaSampleCase>) => (caseId: string) => JsonSchemaSamplesStoryObj;
