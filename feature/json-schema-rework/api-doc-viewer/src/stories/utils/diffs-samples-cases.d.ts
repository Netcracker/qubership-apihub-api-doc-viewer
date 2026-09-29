import { type RawSampleSources } from "./sample-cases";
export type RawYamlSources = RawSampleSources;
export type SampleCase = {
    caseId: string;
    beforeYaml: string;
    afterYaml: string;
};
export declare const collectSampleCases: (beforeFiles: RawYamlSources, afterFiles: RawYamlSources) => SampleCase[];
