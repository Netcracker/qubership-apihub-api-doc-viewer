export type RawYamlSources = Record<string, string>;
export type SampleCase = {
    caseId: string;
    beforeYaml: string;
    afterYaml: string;
};
export declare const collectSampleCases: (beforeFiles: RawYamlSources, afterFiles: RawYamlSources) => SampleCase[];
