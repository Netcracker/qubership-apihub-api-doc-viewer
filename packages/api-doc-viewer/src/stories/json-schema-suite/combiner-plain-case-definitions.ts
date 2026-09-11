import {
  COMBINER_KINDS,
  COMBINER_SCHEMA_TYPES,
  FORMAT_VALUE,
  buildComprehensiveTypeSchema,
  combinerKindSlug,
  titleLabelFor,
  wrapInCombiner,
  type CombinerKind,
} from "../shared/combiner-schema-builder.ts";

export type CombinerPlainCaseDefinition = {
  slug: string;
  schema: Record<string, unknown>;
  summary: string;
};

export type CombinerPlainCase = CombinerPlainCaseDefinition & {
  caseId: string;
};

const pushCase = (
  definitions: CombinerPlainCaseDefinition[],
  slug: string,
  schema: Record<string, unknown>,
  summary: string,
) => definitions.push({ slug, schema, summary });

/**
 * Suite 1 "Simple combiner" + Suite 2 "Complex combiner (2 levels)" cases for one combiner kind
 * (matches the sample sub-directory: oneOf / anyOf / allOf). See combiners-cases.md for the full
 * matrix and terminology.
 */
export function getCombinerPlainCaseDefinitions(
  combinerKind: CombinerKind,
): CombinerPlainCaseDefinition[] {
  const definitions: CombinerPlainCaseDefinition[] = [];

  // Suite 1, case 1: 1st-combiner contains 1 option = comprehensive type-schema (per type).
  for (const type of COMBINER_SCHEMA_TYPES) {
    pushCase(
      definitions,
      `${type}-schema`,
      wrapInCombiner(combinerKind, [buildComprehensiveTypeSchema(type)]),
      `Simple combiner: single ${type} option (comprehensive schema)`,
    );
  }

  // Suite 1, case 2: 1st-combiner contains all possible type options (single, not iterated per type).
  pushCase(
    definitions,
    "all-types-schema",
    wrapInCombiner(
      combinerKind,
      COMBINER_SCHEMA_TYPES.map((type) => buildComprehensiveTypeSchema(type)),
    ),
    "Simple combiner: options of all schema types",
  );

  // Suite 1, cases 3-4: title/format matrix (type-title-format-schema), per type.
  for (const type of COMBINER_SCHEMA_TYPES) {
    const titleLabel = titleLabelFor(type);

    pushCase(
      definitions,
      `${type}-${titleLabel}-NULL-schema`,
      wrapInCombiner(combinerKind, [buildComprehensiveTypeSchema(type, { title: titleLabel })]),
      `Simple combiner: single ${type} option with title "${titleLabel}", no format`,
    );
    pushCase(
      definitions,
      `${type}-NULL-${FORMAT_VALUE}-schema`,
      wrapInCombiner(combinerKind, [buildComprehensiveTypeSchema(type, { format: FORMAT_VALUE })]),
      `Simple combiner: single ${type} option with format "${FORMAT_VALUE}", no title`,
    );
    pushCase(
      definitions,
      `${type}-${titleLabel}-${FORMAT_VALUE}-schema`,
      wrapInCombiner(combinerKind, [
        buildComprehensiveTypeSchema(type, { title: titleLabel, format: FORMAT_VALUE }),
      ]),
      `Simple combiner: single ${type} option with title "${titleLabel}" and format "${FORMAT_VALUE}"`,
    );
  }

  // Suite 2, case 1 (term 6, type-schema-combinerKind): single-level, named with this directory's
  // own combiner kind as suffix (structurally identical to Suite 1 case 1, kept as its own case per
  // the requested matrix so the Suite 2 story/test set is self-contained).
  const selfSlug = combinerKindSlug(combinerKind);
  for (const type of COMBINER_SCHEMA_TYPES) {
    pushCase(
      definitions,
      `${type}-schema-${selfSlug}`,
      wrapInCombiner(combinerKind, [buildComprehensiveTypeSchema(type)]),
      `Complex combiner: single ${type} option (1 level, ${combinerKind})`,
    );
  }

  // Suite 2, cases 2-4 (term 7, type-schema-combinerKind1-combinerKind2): 1st-combiner (this
  // directory's kind) has 1 option, itself a nested combiner (oneOf/anyOf/allOf) wrapping the
  // type-schema.
  for (const nestedKind of COMBINER_KINDS) {
    const nestedSlug = combinerKindSlug(nestedKind);
    for (const type of COMBINER_SCHEMA_TYPES) {
      pushCase(
        definitions,
        `${type}-schema-${selfSlug}-${nestedSlug}`,
        wrapInCombiner(combinerKind, [
          wrapInCombiner(nestedKind, [buildComprehensiveTypeSchema(type)]),
        ]),
        `Complex combiner: single ${type} option nested one level deeper inside ${nestedKind}`,
      );
    }
  }

  return definitions;
}

export function listCombinerPlainCases(combinerKind: CombinerKind): CombinerPlainCase[] {
  return getCombinerPlainCaseDefinitions(combinerKind).map((definition, index) => ({
    ...definition,
    caseId: `${String(index + 1).padStart(3, "0")}-${definition.slug}`,
  }));
}

export function resolveCombinerPlainSchema(
  combinerKind: CombinerKind,
  caseId: string,
): Record<string, unknown> {
  const sampleCase = listCombinerPlainCases(combinerKind).find((entry) => entry.caseId === caseId);
  if (!sampleCase) {
    throw new Error(`Combiner plain case not found: ${combinerKind}/${caseId}`);
  }
  return sampleCase.schema;
}

export const toCombinerCaseExportName = (caseId: string): string =>
  `Case_${caseId.replace(/[.-]/g, "_")}`;
