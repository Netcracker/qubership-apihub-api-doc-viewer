# JSON Schema validation samples (plain mode)

YAML fixtures and programmatic value-range cases for **JSON Schema Next** validation-row
coverage (`JsonSchemaNextViewer`). Each group lives under `packages/samples/json-schema/`
as `{type}-validations/`.

## Groups

| Directory | Cases | Source |
| --- | --- | --- |
| `array-validations/` | 10 | YAML (default, example, examples, items count, unique items) |
| `boolean-validations/` | 7 | YAML (default, example, examples) |
| `integer-validations/` | 13 | YAML (default, example, examples, multipleOf) |
| `object-validations/` | 10 | YAML (default, example, examples, properties count) |
| `string-validations/` | 24 | YAML (default, example, examples, enum, value length, pattern) |
| `number-validations/` | — | Programmatic value range only (see README in folder) |
| Value range (integer) | 13 / 19 | Programmatic — OAS 3.0 / OAS 3.1 story suites |
| Value range (number) | 13 / 19 | Programmatic — OAS 3.0 / OAS 3.1 story suites |

Value-range cases are **not** stored as YAML. They are built from
`value-range-plain-case-definitions.ts` via `buildValueRangeSchema()` in
`src/stories/shared/value-range-schema-builder.ts` (shared with diff case definitions).

## Case titles

Each schema `title` starts with the validation subset in square brackets, for example
`[default] default = false` or `[value-range-min-0-inclusive] Minimum 0 (inclusive)`.

## Regenerate

From `packages/api-doc-viewer/`:

```bash
node bin/generate-json-schema-validation-samples.mjs
node --experimental-strip-types bin/generate-json-schema-validation-suite-stories.mjs
node --experimental-strip-types bin/generate-json-schema-validation-suite-tests.mjs
```

After visual changes, refresh snapshots:

```bash
npm run regenerate-screenshots
```

## Storybook suites

| Suite | Stories | ITs |
| --- | --- | --- |
| Array Validations | `array-validations.stories.tsx` | `array-validations.it-test.ts` |
| Boolean Validations | `boolean-validations.stories.tsx` | `boolean-validations.it-test.ts` |
| Integer Validations | `integer-validations.stories.tsx` | `integer-validations.it-test.ts` |
| Object Validations | `object-validations.stories.tsx` | `object-validations.it-test.ts` |
| String Validations | `string-validations.stories.tsx` | `string-validations.it-test.ts` |
| Integer value range (OAS 3.0) | `integer-validations-value-range.stories.tsx` | paired IT |
| Integer value range (OAS 3.1) | `integer-validations-value-range-oas-3-1.stories.tsx` | paired IT |
| Number value range (OAS 3.0) | `number-validations-value-range.stories.tsx` | paired IT |
| Number value range (OAS 3.1) | `number-validations-value-range-oas-3-1.stories.tsx` | paired IT |

Storybook root title prefix: **JSON Schema Next/**.
