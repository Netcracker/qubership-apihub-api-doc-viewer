export type RawJsonSchemaSources = Record<string, string>;
export type JsonSchemaSampleCase = {
    caseId: string;
    schema: Record<string, unknown>;
};
export declare const extractJsonSchemaCaseId: (samplePath: string) => string | undefined;
export declare const collectJsonSchemaSampleCases: (sampleFiles: RawJsonSchemaSources) => JsonSchemaSampleCase[];
export declare const createJsonSchemaSampleById: (sampleCases: readonly JsonSchemaSampleCase[]) => Record<string, JsonSchemaSampleCase>;
