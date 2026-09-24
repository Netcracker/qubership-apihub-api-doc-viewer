import type { Meta, StoryObj } from "@storybook/react";
import type { JsonSchemaSampleCase } from "../utils/json-schema-samples-cases";
export type JsonSchemaCaseStoryComponentProps = {
    caseId: string;
    sampleYaml: string;
};
export declare const JsonSchemaSampleStory: (_props: JsonSchemaCaseStoryComponentProps) => null;
export type JsonSchemaSamplesStoryMeta = Meta<typeof JsonSchemaSampleStory>;
export type JsonSchemaSamplesStoryObj = StoryObj<JsonSchemaSamplesStoryMeta>;
/** YAML text of the effective schema passed to the viewer, for read-only display in Controls. */
export declare const toSampleYaml: (schema: Record<string, unknown>) => string;
export declare const jsonSchemaSampleReferenceArgTypes: {
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
export declare const createCaseStoryFactory: (sampleById: Record<string, JsonSchemaSampleCase>) => (caseId: string) => JsonSchemaSamplesStoryObj;
