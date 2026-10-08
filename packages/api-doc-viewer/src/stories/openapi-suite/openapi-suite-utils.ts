import { collectSampleSources } from "../utils/sample-cases";

/** `packages/samples/openapi/<dialect>/<case-id>/sample.yaml` texts by case id. */
export const collectOpenApiSamples = (sampleFiles: Record<string, string>): Record<string, string> =>
  Object.fromEntries(collectSampleSources(sampleFiles, ["/sample.yaml"]).map(({ caseId, source }) => [caseId, source]));

export const takeOpenApiSample = (samples: Record<string, string>, caseId: string): string => {
  const sample = samples[caseId];
  if (sample === undefined) {
    throw new Error(`OpenAPI sample case not found: ${caseId}`);
  }
  return sample;
};
