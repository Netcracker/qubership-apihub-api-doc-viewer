# DDL API diff fixtures

These fixtures feed screenshot-diff scenarios for DDL table changes.

- Total cases: 266
- Layout: `ddlapi-diffs/<group>/<case-id>/before.sql` and `.../after.sql`
- Case ids are numbered from `01` (or `001` in groups with 100+ cases) within each group.
- **`column-changes-except-types`** uses semantic hundred blocks (`101`–`102`, `201`–`206`, …)
  — see the `api-doc-viewer-testing` skill.
- **`column-default-changes`** uses semantic hundred blocks (`101`–`124` add, `201`–`224` remove,
  `301`–`324` replace) — regenerate fixtures, stories, and IT files with
  `packages/api-doc-viewer/bin/generate-column-default-changes-samples.mjs`.

## Groups

| Group | Cases | Description |
| --- | ---: | --- |
| `whole-table-changes` | 3 | Wholly added/removed tables and schema moves |
| `column-changes-except-types` | 34 | Column add/remove, constraint/badge, and description changes |
| `foreign-key-reference-changes` | 12 | Referenced schema, table, and column changes |
| `index-changes` | 18 | Index add/remove, uniqueness, and column list changes |
| `column-type-changes` | 127 | Base type matrix (`001`–`090`), parameter changes (`091`–`103`), enum-to-enum (`104`–`107`), scalar-to-enum (`108`–`117`), enum-to-scalar (`118`–`127`) |
| `column-default-changes` | 72 | Column `DEFAULT` add/remove/replace per PostgreSQL scalar storage type |

### `column-default-changes` — type coverage

Cases use one canonical name per PostgreSQL storage family from the ddlapi scalar guard list. Each
type has three cases: **add** (`101`–`124`), **remove** (`201`–`224`), **replace** (`301`–`324`).

| Slot | Type | Notes |
| ---: | --- | --- |
| 101–124 | `bigint`, `bit(3)`, `bit varying(4)`, `boolean`, `bytea`, `char(3)`, `date`, `double precision`, `integer`, `interval`, `json`, `jsonb`, `money`, `numeric(10,2)`, `real`, `smallint`, `text`, `time`, `time with time zone`, `timestamp`, `timestamp with time zone`, `uuid`, `character varying(50)`, `public.sample_status` enum | Constant `DEFAULT` literals valid in PostgreSQL |
| — | *(excluded)* | `serial` / `bigserial` / `smallserial` and name aliases (`int4`, `bool`, `varchar`, …) — serial shorthand attaches a sequence default; identity/generation is covered in `column-changes-except-types` |

## Storybook and screenshot tests

Hand-written suites live under `packages/api-doc-viewer/src/stories/ddlapi-diffs-suite/` and
`packages/api-doc-viewer/src/it/ddlapi-diffs-suite/`. Each group file exports one story per case
(following the Async API Diffs Suite pattern). Shared helpers are in `ddlapi-diffs-utils.tsx`.

| Group | Story title | Story / IT files |
| --- | --- | --- |
| `whole-table-changes` | `DDL API Diffs Suite/Whole Table Changes Samples` | `whole-table-changes-samples.*` |
| `column-changes-except-types` | `DDL API Diffs Suite/Column Changes Except Types Samples` | `column-changes-except-types-samples.*` |
| `foreign-key-reference-changes` | `DDL API Diffs Suite/Foreign Key Reference Changes Samples` | `foreign-key-reference-changes-samples.*` |
| `index-changes` | `DDL API Diffs Suite/Index Changes Samples` | `index-changes-samples.*` |
| `column-type-changes` | `DDL API Diffs Suite/Column Type Changes Samples` | `column-type-changes-samples.*` |
| `column-default-changes` | `DDL API Diffs Suite/Column Default Changes Samples` | `column-default-changes-samples.*` |

Story id pattern: `{meta-id}--case-{case-id}` (for example
`ddl-api-diffs-suite-whole-table-changes-samples--case-01-wholly-added-table`). When adding a
case, append matching exports to the group story file and an `it(...)` to the paired IT file.

```bash
npm run regenerate-screenshots
```
