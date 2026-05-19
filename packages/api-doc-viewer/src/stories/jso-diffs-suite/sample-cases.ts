export type RawJsonSources = Record<string, string>;

export type SampleCase = {
  caseId: string;
  beforeJson: string;
  afterJson: string;
};

const BEFORE_SUFFIX = "/before.json";
const AFTER_SUFFIX = "/after.json";

const extractCaseId = (beforePath: string): string | undefined => {
  const normalized = beforePath.replaceAll("\\", "/");
  if (!normalized.endsWith(BEFORE_SUFFIX)) {
    return undefined;
  }

  const trimmed = normalized.slice(0, -BEFORE_SUFFIX.length);
  const parts = trimmed.split("/");
  return parts[parts.length - 1];
};

export const collectSampleCases = (beforeFiles: RawJsonSources, afterFiles: RawJsonSources): SampleCase[] => {
  const cases: SampleCase[] = [];

  for (const [beforePath, beforeJson] of Object.entries(beforeFiles)) {
    const caseId = extractCaseId(beforePath);
    if (!caseId) {
      continue;
    }

    const afterPath = beforePath.replace(BEFORE_SUFFIX, AFTER_SUFFIX);
    const afterJson = afterFiles[afterPath];
    if (!afterJson) {
      continue;
    }

    cases.push({ caseId, beforeJson, afterJson });
  }

  return cases.sort((a, b) => a.caseId.localeCompare(b.caseId, undefined, { numeric: true }));
};
