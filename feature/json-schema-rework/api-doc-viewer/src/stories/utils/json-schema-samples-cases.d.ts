import { RawSampleSources } from './sample-cases';
export type RawJsonSchemaSources = RawSampleSources;
export type JsonSchemaSampleCase = {
    caseId: string;
    schema: Record<string, unknown>;
};
export declare const collectJsonSchemaSampleCases: (sampleFiles: RawJsonSchemaSources) => JsonSchemaSampleCase[];
