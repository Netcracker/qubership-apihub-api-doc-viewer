/** `packages/samples/openapi/<dialect>/<case-id>/sample.yaml` texts by case id. */
export declare const collectOpenApiSamples: (sampleFiles: Record<string, string>) => Record<string, string>;
export declare const takeOpenApiSample: (samples: Record<string, string>, caseId: string) => string;
