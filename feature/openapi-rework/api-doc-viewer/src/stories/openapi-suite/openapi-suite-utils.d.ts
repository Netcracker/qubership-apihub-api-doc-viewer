/** `packages/samples/openapi/<dialect>/<case-id>/sample.yaml` texts by case id. */
export declare const collectOpenApiSamples: (sampleFiles: Record<string, string>) => Record<string, string>;
export declare const takeOpenApiSample: (samples: Record<string, string>, caseId: string) => string;
/**
 * A method template (`oas30/http-methods/template`) served as `method`: the only operation of the
 * path item at `path` moves under the `method` key; the rest of the document is kept.
 */
export declare const serveTemplateOperationAs: (document: Record<string, unknown>, path: string, method: string) => Record<string, unknown>;
