export type RawJsonSources = Record<string, string>;
export type SampleCase = {
    caseId: string;
    beforeJson: string;
    afterJson: string;
};
export declare const collectSampleCases: (beforeFiles: RawJsonSources, afterFiles: RawJsonSources) => SampleCase[];
