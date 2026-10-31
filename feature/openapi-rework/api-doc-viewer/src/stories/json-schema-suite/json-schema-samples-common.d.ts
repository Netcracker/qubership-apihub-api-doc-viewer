import { DisplayMode } from '../../types/DisplayMode';
import { Meta, StoryObj } from '@storybook/react-vite';
import { JsonSchemaSampleCase } from '../utils/json-schema-samples-cases';
export type JsonSchemaCaseStoryComponentProps = {
    caseId: string;
    sampleYaml: string;
    displayMode?: DisplayMode;
};
export declare const JsonSchemaSampleStory: (_props: JsonSchemaCaseStoryComponentProps) => null;
export type JsonSchemaSamplesStoryMeta = Meta<typeof JsonSchemaSampleStory>;
export type JsonSchemaSamplesStoryObj = StoryObj<JsonSchemaSamplesStoryMeta>;
/** YAML text of the effective schema passed to the viewer, for read-only display in Controls. */
export declare const toSampleYaml: (schema: Record<string, unknown>) => string;
export declare const jsonSchemaSampleReferenceArgTypes: {
    displayMode: {
        readonly control: {
            readonly type: "select";
        };
        readonly options: readonly DisplayMode[];
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
export declare const jsonSchemaSamplesStoryMetaBase: {
    component: (_props: JsonSchemaCaseStoryComponentProps) => null;
    argTypes: {
        displayMode: {
            readonly control: {
                readonly type: "select";
            };
            readonly options: readonly DisplayMode[];
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
export type JsonSchemaCaseStoryFactoryOptions = {
    /** Per case: the viewer's `topLevelPropsMediaTypes` (root property key -> media type badge). */
    topLevelPropsMediaTypes?: Partial<Record<string, Record<string, string>>>;
};
export declare const createCaseStoryFactory: (sampleById: Record<string, JsonSchemaSampleCase>, options?: JsonSchemaCaseStoryFactoryOptions) => (caseId: string) => JsonSchemaSamplesStoryObj;
