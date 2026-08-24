# Number validation — value range (programmatic samples)

Value-range diff cases for the **JSON Schema Diffs Suite** are **not** stored as YAML pairs under
this folder. They are built programmatically so the same logical case can be rendered in OAS 3.0
(boolean `exclusiveMinimum` / `exclusiveMaximum`) and OAS 3.1 (numeric exclusive bounds) forms.

## Case catalogue (57 logical cases)

| Suite | Storybook cases | OpenAPI wrapper |
| --- | --- | --- |
| OAS 3.0 value range | 53 | `prepareJsonDiffSchema` |
| OAS 3.1 value range | 57 (includes 4 numeric-exclusive-only cases) | `prepareJsonDiffSchemaOas31` |

## Source of truth

Case definitions use a **normal `.ts` filename** (committed). Do **not** use
`.generated.ts` — that suffix is reserved for external compatibility-suite output and is
gitignored (`*.generated.*` in the repo root `.gitignore`).

| Role | Path |
| --- | --- |
| Case definitions (before/after schema builders) | [`value-range-diff-case-definitions.ts`](../../../../api-doc-viewer/src/stories/json-schema-diffs-suite/value-range-diff-case-definitions.ts) |
| OAS 3.0 resolver + YAML preview for Storybook controls | [`value-range-diff-samples.ts`](../../../../api-doc-viewer/src/stories/json-schema-diffs-suite/value-range-diff-samples.ts) |
| OAS 3.1 resolver (boolean → numeric exclusive conversion) | [`value-range-diff-oas-31-samples.ts`](../../../../api-doc-viewer/src/stories/json-schema-diffs-suite/value-range-diff-oas-31-samples.ts) |
| Diff side-entry / partial-bound dialect logic | [`value-range-diff-side-display.ts`](../../../../next-data-model/src/model/json-schema/value-range-diff-side-display.ts) |

## Storybook and screenshot ITs

| Suite | Stories | Screenshot ITs | Story utils |
| --- | --- | --- | --- |
| OAS 3.0 | [`number-validation-value-range-samples.stories.tsx`](../../../../api-doc-viewer/src/stories/json-schema-diffs-suite/number-validation-value-range-samples.stories.tsx) | [`number-validation-value-range-samples.it-test.ts`](../../../../api-doc-viewer/src/it/json-schema-diffs-suite/number-validation-value-range-samples.it-test.ts) | [`json-schema-diffs-utils.tsx`](../../../../api-doc-viewer/src/stories/json-schema-diffs-suite/json-schema-diffs-utils.tsx) |
| OAS 3.1 | [`number-validation-value-range-oas-3-1-samples.stories.tsx`](../../../../api-doc-viewer/src/stories/json-schema-diffs-suite/number-validation-value-range-oas-3-1-samples.stories.tsx) | [`number-validation-value-range-oas-3-1-samples.it-test.ts`](../../../../api-doc-viewer/src/it/json-schema-diffs-suite/number-validation-value-range-oas-3-1-samples.it-test.ts) | [`json-schema-diffs-oas-3-1-utils.tsx`](../../../../api-doc-viewer/src/stories/json-schema-diffs-suite/json-schema-diffs-oas-3-1-utils.tsx) |

Regenerate story/IT exports after editing case definitions:

```bash
cd packages/api-doc-viewer
node --experimental-strip-types bin/generate-value-range-diff-stories.mjs
```

Running `bin/generate-json-schema-type-changes-samples.mjs` also invokes the script above; it does
**not** recreate YAML fixtures for value range.

## Unit tests

| Area | Path |
| --- | --- |
| Side entries + colorizing expectations | [`json-schema-with-diffs.test.ts`](../../../../next-data-model/tests/unit-tests/json-schema-with-diffs.test.ts) |
| Programmatic fixture access | [`value-range-diff-fixtures.ts`](../../../../next-data-model/tests/helpers/value-range-diff-fixtures.ts) |
| Boolean exclusive flag scan (OAS 3.0 form) | [`json-schema-value-range-scan.test.ts`](../../../../next-data-model/tests/unit-tests/json-schema-value-range-scan.test.ts) |

## Adding or changing a case

1. Edit `getValueRangeDiffCaseDefinitions()` in `value-range-diff-case-definitions.ts`.
2. Regenerate stories/ITs (command above).
3. Extend expectations in `json-schema-with-diffs.test.ts` when diff behaviour is non-obvious.
4. Refresh screenshot snapshots for affected Storybook cases when visual output changes.

## Public API (for stories and tests)

```typescript
import {
  listValueRangeDiffCases,
  resolveValueRangeDiffSchemas,
  buildValueRangeDiffProgrammaticSampleCases,
} from ".../value-range-diff-samples";

import {
  resolveValueRangeDiffSchemasOas31,
  buildValueRangeDiffOas31ProgrammaticSampleCases,
} from ".../value-range-diff-oas-31-samples";
```

Options: `includeOas31Only: true` lists all 57 cases; `false` lists 53 OAS 3.0 cases. Optional
`type: "integer" | "number"` override applies on the OAS 3.0 resolver only (OAS 3.1 builder sets
`type: "number"` and converts exclusive flags).
