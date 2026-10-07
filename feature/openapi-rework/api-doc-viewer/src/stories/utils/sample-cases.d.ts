/**
 * Fixture-folder conventions shared by every sample-driven story suite: one folder per case under
 * `packages/samples/`, the folder name is the case id, and the folder holds either one sample file
 * (`sample.sql`, `sample.yaml`, ...) or a `before.<ext>` / `after.<ext>` pair. Suites map the raw
 * source texts returned here onto their own typed case shape.
 */
/** `import.meta.glob(..., { query: "?raw", import: "default", eager: true })` result: file path -> file text. */
export type RawSampleSources = Record<string, string>;
export type SampleSource = {
    caseId: string;
    source: string;
};
export type BeforeAfterSampleSource = {
    caseId: string;
    before: string;
    after: string;
};
/** Case id = name of the folder that holds a file ending with one of `fileNames` (e.g. `"/sample.sql"`). */
export declare const extractSampleCaseId: (samplePath: string, fileNames: readonly string[]) => string | undefined;
/** One sample file per case folder, sorted by case id (numeric-aware). */
export declare const collectSampleSources: (sampleFiles: RawSampleSources, fileNames: readonly string[]) => SampleSource[];
/**
 * `before.<extension>` / `after.<extension>` pairs per case folder, sorted by case id
 * (numeric-aware). Cases without a matching `after` file are skipped.
 */
export declare const collectBeforeAfterSampleSources: (beforeFiles: RawSampleSources, afterFiles: RawSampleSources, extension: string) => BeforeAfterSampleSource[];
export declare const createSampleById: <TSample extends {
    caseId: string;
}>(sampleCases: readonly TSample[]) => Record<string, TSample>;
