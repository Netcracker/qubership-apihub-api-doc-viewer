import { parseYamlSource } from "./parse-yaml-source";

export type RawJsonSchemaSources = Record<string, string>;

export type JsonSchemaSampleCase = {
  caseId: string;
  schema: Record<string, unknown>;
};

const SAMPLE_SUFFIXES = ["/sample.yaml", "/sample.json"] as const;

export const extractJsonSchemaCaseId = (samplePath: string): string | undefined => {
  const normalized = samplePath.replaceAll("\\", "/");
  const suffix = SAMPLE_SUFFIXES.find((candidate) => normalized.endsWith(candidate));
  if (!suffix) {
    return undefined;
  }

  const trimmed = normalized.slice(0, -suffix.length);
  const parts = trimmed.split("/");
  return parts[parts.length - 1];
};

export const collectJsonSchemaSampleCases = (
  sampleFiles: RawJsonSchemaSources,
): JsonSchemaSampleCase[] => {
  const cases: JsonSchemaSampleCase[] = [];

  for (const [samplePath, sourceText] of Object.entries(sampleFiles)) {
    const caseId = extractJsonSchemaCaseId(samplePath);
    if (!caseId) {
      continue;
    }

    cases.push({ caseId, schema: parseYamlSource(sourceText) });
  }

  return cases.sort((left, right) =>
    left.caseId.localeCompare(right.caseId, undefined, { numeric: true }),
  );
};

export const createJsonSchemaSampleById = (
  sampleCases: readonly JsonSchemaSampleCase[],
): Record<string, JsonSchemaSampleCase> =>
  sampleCases.reduce<Record<string, JsonSchemaSampleCase>>((accumulator, sampleCase) => {
    accumulator[sampleCase.caseId] = sampleCase;
    return accumulator;
  }, {});
