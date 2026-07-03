import { DdlTableDiffsViewer } from "@apihub/components/DdlTableViewer/DdlTableDiffsViewer";
import { apiDiff } from "@netcracker/qubership-apihub-api-diff";
import type { Realm } from "@netcracker/qubership-apihub-ddlapi";
import type { ArgTypes, Meta, StoryObj } from "@storybook/react";
import { NavigationLinkBuilder } from "@netcracker/qubership-apihub-next-data-model/shared/ddlapi/types/navigation-link-builder";
import { TableKey } from "@netcracker/qubership-apihub-next-data-model/shared/ddlapi/types/table-key";
import { buildFromDdlInBrowser } from "../ddlapi-suite/build-from-ddl-browser";
import { TEST_DIFF_META_KEYS } from "./shared-test-data";

export type DdlDiffSampleCase = {
  caseId: string;
  beforeSql: string;
  afterSql: string;
};

export type DdlDiffCaseStoryComponentProps = Pick<
  DdlDiffSampleCase,
  "caseId" | "beforeSql" | "afterSql"
>;

export const ddlDiffSampleReadonlyArgTypes = {
  caseId: {
    control: { type: "text" },
    table: { category: "Sample" },
    description: "Sample case identifier. The viewer always uses the bundled fixture for this case.",
  },
  beforeSql: {
    control: { type: "text" },
    table: { category: "Sample" },
    description:
      "Before sample SQL for reference. The viewer always uses the bundled fixture for the selected case.",
  },
  afterSql: {
    control: { type: "text" },
    table: { category: "Sample" },
    description:
      "After sample SQL for reference. The viewer always uses the bundled fixture for the selected case.",
  },
} satisfies Partial<ArgTypes<DdlDiffCaseStoryComponentProps>>;

export const DdlDiffSampleStory = (_props: DdlDiffCaseStoryComponentProps) => null;

export type DdlDiffsSamplesStoryMeta = Meta<typeof DdlDiffSampleStory>;
export type DdlDiffsSamplesStoryObj = StoryObj<DdlDiffsSamplesStoryMeta>;

export const ddlDiffsSamplesStoryMetaBase = {
  component: DdlDiffSampleStory,
  argTypes: ddlDiffSampleReadonlyArgTypes,
} satisfies Pick<DdlDiffsSamplesStoryMeta, "component" | "argTypes">;

export type RawSqlSources = Record<string, string>;

const BEFORE_SUFFIX = "/before.sql";
const AFTER_SUFFIX = "/after.sql";

const DEFAULT_TABLE_KEY: TableKey = {
  schemaName: "public",
  name: "t",
};

const TABLE_KEYS_BY_CASE_ID: Record<string, TableKey> = {
  "03-changed-schema-of-table": { schemaName: "audit", name: "t" },
};

const navigationLinkBuilder: NavigationLinkBuilder = (schema, table, column) =>
  `#${schema}.${table}.${column}`;

const extractCaseId = (beforePath: string): string | undefined => {
  const normalized = beforePath.replaceAll("\\", "/");
  if (!normalized.endsWith(BEFORE_SUFFIX)) {
    return undefined;
  }

  const trimmed = normalized.slice(0, -BEFORE_SUFFIX.length);
  const parts = trimmed.split("/");
  return parts[parts.length - 1];
};

export const collectDdlDiffSampleCases = (
  beforeFiles: RawSqlSources,
  afterFiles: RawSqlSources,
): DdlDiffSampleCase[] => {
  const cases: DdlDiffSampleCase[] = [];

  for (const [beforePath, beforeSql] of Object.entries(beforeFiles)) {
    const caseId = extractCaseId(beforePath);
    if (!caseId) {
      continue;
    }

    const afterPath = beforePath.replace(BEFORE_SUFFIX, AFTER_SUFFIX);
    const afterSql = afterFiles[afterPath];
    if (!afterSql) {
      continue;
    }

    cases.push({ caseId, beforeSql, afterSql });
  }

  return cases.sort((left, right) =>
    left.caseId.localeCompare(right.caseId, undefined, { numeric: true }),
  );
};

export const createDdlDiffSampleById = <TSample extends DdlDiffSampleCase>(
  sampleCases: readonly TSample[],
): Record<string, TSample> =>
  sampleCases.reduce<Record<string, TSample>>((accumulator, sampleCase) => {
    accumulator[sampleCase.caseId] = sampleCase;
    return accumulator;
  }, {});

export const resolveTableKey = (caseId: string): TableKey =>
  TABLE_KEYS_BY_CASE_ID[caseId] ?? DEFAULT_TABLE_KEY;

function emptyRealmLike(present: Realm): Realm {
  return {
    ddlapi: present.ddlapi,
    schemas: (present.schemas ?? []).map((schema) => ({ name: schema.name, tables: [] })),
  };
}

async function prepareDdlDiffsMergedSource(
  beforeSql: string,
  afterSql: string,
): Promise<Realm> {
  const beforeRealm = await buildFromDdlInBrowser(beforeSql);
  const afterRealm = await buildFromDdlInBrowser(afterSql);
  const present = afterRealm ?? beforeRealm;
  const before = beforeRealm ?? emptyRealmLike(present);
  const after = afterRealm ?? emptyRealmLike(present);

  const { merged } = apiDiff(before, after, {
    unify: true,
    validate: true,
    metaKey: TEST_DIFF_META_KEYS.diffsMetaKey,
    normalizedResult: false,
  }) as { merged: Realm };

  return merged;
}

type LoaderData = {
  mergedSource: Realm;
  tableKey: TableKey;
};

export const createDdlDiffCaseStoryFactory = (
  sampleById: Record<string, DdlDiffSampleCase>,
) => (caseId: string): DdlDiffsSamplesStoryObj => {
  const sample = sampleById[caseId];
  if (!sample) {
    throw new Error(`Sample case not found: ${caseId}`);
  }

  return {
    name: caseId,
    args: {
      caseId,
      beforeSql: sample.beforeSql,
      afterSql: sample.afterSql,
    },
    argTypes: ddlDiffSampleReadonlyArgTypes,
    loaders: [
      async () => ({
        mergedSource: await prepareDdlDiffsMergedSource(sample.beforeSql, sample.afterSql),
        tableKey: resolveTableKey(caseId),
      } satisfies LoaderData),
    ],
    render: (_args, { loaded }) => (
      <DdlTableDiffsViewer
        mergedSource={loaded!.mergedSource}
        tableKey={loaded!.tableKey}
        navigationLinkBuilder={navigationLinkBuilder}
        diffMetaKeys={TEST_DIFF_META_KEYS}
        devMode
      />
    ),
  };
};
