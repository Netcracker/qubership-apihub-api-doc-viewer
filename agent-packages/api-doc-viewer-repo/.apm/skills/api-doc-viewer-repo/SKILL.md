---
name: api-doc-viewer-repo
description: Repository orientation for qubership-apihub-api-doc-viewer — view/data split, sample suites, generated-filename rules, and cross-package diff workflows.
---

# api-doc-viewer monorepo — repository orientation

Instructions for AI assistants working on **qubership-apihub-api-doc-viewer**.

## Repository role

| Package | Path | Role |
| --- | --- | --- |
| **api-doc-viewer** | `packages/api-doc-viewer/` | React viewers (JSON Schema, GraphQL, AsyncAPI, JSO, DDL) |
| **next-data-model** | `packages/next-data-model/` | Tree builders, crawl rules, diff aggregators for viewer data |

**View / data split:** React components render precomputed tree nodes. Diff aggregation,
transformers, and crawl logic belong in **next-data-model** — not in the view layer.

## Clarification before coding

- Do **not** generate or modify code until task requirements are clear.
- Ask targeted questions when scope, layout, or acceptance criteria are ambiguous.
- Consult `packages/api-doc-viewer/ddlapi-display-coverage.md` before treating missing DDL UI
  as a bug.
- If you must assume something, state assumptions explicitly and keep changes minimal until
  confirmed.

## Primary skills (APM)

Install or refresh agent packages from the repository root:

```bash
apm install --target cursor,claude --legacy-skill-paths
```

| Skill | When |
| --- | --- |
| `api-doc-viewer-repo` | Repository orientation, sample suites, naming conventions (this skill) |
| `api-doc-viewer-authoring` | React viewers, rows, diff chrome, Storybook |
| `next-data-model-authoring` | Builders, aggregators, crawl rules |
| `api-doc-viewer-testing` | Screenshot ITs, fixtures, snapshot regeneration |
| `api-doc-viewer-using` | Integrator-facing consumption patterns |
| `next-data-model-using` | Consuming tree builders from another TypeScript project |
| `ddlapi-using` | ddlapi Realm / merged diff documents (external package) |
| `json-crawl-using` | json-crawl rules (external package) |

Canonical skill sources live under `agent-packages/`. After editing skills there, run
`apm install` so `.cursor/`, `.claude/`, and `.agents/` stay in sync.

## Always-on conventions

- **Legacy viewers** — do not change `JsonSchemaViewer`, `GraphSchemaViewer`, or
  `GraphQLOperationViewer` without explicit approval.
- **Type guards over casts** — reusable guards in `src/utils/<spec>/` (viewer) or
  `src/shared/<spec>/guards/` (data layer).
- **Plain → with-diffs builders** — `<Spec>TreeWithDiffsBuilder` extends `<Spec>TreeBuilder`;
  **JSO is exceptional** (parallel plain / with-diffs stacks).
- **Property lists** — list parents precompute sibling context; item viewers render stacked rows
  only.

## Generated filenames (`*.generated.*`) — important

`.gitignore` excludes `*.generated.*` (see root `.gitignore`).

**Use the `.generated` suffix only for artifacts driven by the external**
[`qubership-apihub-compatibility-suites`](https://github.com/Netcracker/qubership-apihub-compatibility-suites)
**repository** — for example compatibility-suite
`*.generated.stories.tsx` and `*.generated.it-test.ts` under
`src/stories/compatibility-suite/` and `src/it/compatibility-suite/`.

**Do not** name in-repo script or utility output with `.generated.ts`, `.generated.stories.tsx`,
or `.generated.it-test.ts`. Those files are **internal** (not from an external source) and must
be **committed** under normal filenames.

| Correct (committed, in-repo) | Wrong (gitignored, do not use) |
| --- | --- |
| `value-range-diff-case-definitions.ts` | `value-range-diff-case-definitions.generated.ts` |
| `number-validation-value-range-samples.stories.tsx` | `…samples.generated.stories.tsx` |
| `src/it/ddlapi-suite/*.it-test.ts` (DDL generator) | `*.generated.it-test.ts` for local suites |

Regenerated local suites (DDL API, JSON Schema type-changes YAML, value-range programmatic
stories) use **plain** names even when a bin script rewrites them. Details:
`api-doc-viewer-testing` skill — **Generated vs hand-written suites**;
`api-doc-viewer-repo/.../json-schema-validation-rows.md` — validation-row display rules.

## JSON Schema Diffs Suite (type changes)

YAML pairs under `packages/samples/json-schema-diffs/type-changes/` exercise validation-row and
metadata diffs with **`hideUnchangedNodes: false`**.

1. **Case definitions** — `packages/api-doc-viewer/bin/json-schema-type-changes-cases.mjs`
2. **Generate** — `node bin/generate-json-schema-type-changes-samples.mjs` writes fixtures,
   `src/stories/json-schema-diffs-suite/*`, and `src/it/json-schema-diffs-suite/*`
3. **Catalogue** — `packages/samples/json-schema-diffs/type-changes/README.md`
4. Storybook root title: **`JSON Schema Diffs Suite`**

### Value range (programmatic — not YAML)

Number validation **value-range** cases are **not** YAML pairs. They are built programmatically
(OAS 3.0 and OAS 3.1 dialects). Hub:
`packages/samples/json-schema-diffs/type-changes/number-validation/README.md`.

| Role | Path |
| --- | --- |
| Case definitions (source of truth) | `src/stories/json-schema-diffs-suite/value-range-diff-case-definitions.ts` |
| OAS 3.0 resolver | `value-range-diff-samples.ts` |
| OAS 3.1 resolver | `value-range-diff-oas-31-samples.ts` |
| Regenerate stories/ITs | `node bin/generate-value-range-diff-stories.mjs` |

### Validation rows (plain and with-diffs)

Constraint rows (`Value range`, `Value length`, `Value pattern`, …) have dedicated display and diff
rules. Full reference (grouped by plain vs diffs, then row kind):

`agent-packages/api-doc-viewer-repo/.apm/skills/api-doc-viewer-repo/json-schema-validation-rows.md`

Apply when changing validation-row chips, row colorizing, OAS 3.0/3.1 bound dialects, or value-range
sample cases.

### Meta flags and `required` (type-flags diffs)

`readOnly`, `writeOnly`, `deprecated`, and parent **`required`** are parent-derived or schema-meta
diffs — not validation rows. Full reference (legacy propagation, crawl-fragment traps, viewer layout):

`agent-packages/api-doc-viewer-repo/.apm/skills/api-doc-viewer-repo/json-schema-meta-flags-and-required.md`

Apply when changing type-flags samples (`type-changes/type-flags/`), `resolveRequiredMetaDiff`,
title-row required asterisk, or subheader `required` badge behaviour.

## JSON Schema Next diffs (hiding unchanged rows)

Hand-written YAML pairs under `packages/samples/json-schema-diffs/hiding-unchanged-rows/`.
Stories: `src/stories/json-schema-diffs-hiding-unchanged-nodes-suite/` with
**`JsonSchemaNextDiffsViewer`** (`hideUnchangedNodes` defaults to `true`).

Design notes: `packages/api-doc-viewer/json-schema-hiding-nodes-design.md`,
`packages/api-doc-viewer/json-schema-next-stack-analysis.md` Appendix B.

## Cross-package DDL diffs workflow

1. **Transformer** — `DdlApiSpecWithDiffsTransformer`
2. **Aggregators** — `node-diffs-data/node-diffs/` and `node-diffs-severities/`
3. **Viewer** — `DdlTableDiffsViewer` consumes precomputed diff fields; do not re-derive in React
4. **Fixtures** — SQL under `packages/samples/ddlapi-diffs/`
5. **Tests** — unit tests in `packages/next-data-model/tests/`; screenshot ITs after visual changes

## Related repositories

| Repository | Relationship |
| --- | --- |
| [qubership-apihub-compatibility-suites](https://github.com/Netcracker/qubership-apihub-compatibility-suites) | **Only** external source for `*.generated.*` stories/tests |
| [qubership-apihub-ddlapi](https://github.com/Netcracker/qubership-apihub-ddlapi) | DDL schema model and merged diff documents |
| [qubership-apihub-json-crawl](https://github.com/Netcracker/qubership-apihub-json-crawl) | Document crawl engine |
| [qubership-apihub-api-diff](https://github.com/Netcracker/qubership-apihub-api-diff) | Diff types for with-diffs builders |

## Cross-platform development

Prefer repo-relative paths and portable bash. When bulk-renumbering sample case folders, rename
from **highest index downward** via a temporary prefix.

## Documentation

- Coverage baselines: `packages/api-doc-viewer/ddlapi-display-coverage.md`,
  `packages/samples/ddlapi-diffs/README.md`,
  `packages/samples/json-schema-diffs/hiding-unchanged-rows/README.md`.
- JSON Schema validation rows (plain + diffs): `agent-packages/api-doc-viewer-repo/.apm/skills/api-doc-viewer-repo/json-schema-validation-rows.md`.
- Do **not** add minor feature notes to the repository root `README.md` unless asked.
