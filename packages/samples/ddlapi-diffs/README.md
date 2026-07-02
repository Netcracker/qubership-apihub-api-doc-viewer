# DDL API diff fixtures

These fixtures feed screenshot-diff scenarios for DDL table changes.

- Total cases: 147
- Layout: `ddlapi-diffs/<group>/<case-id>/before.sql` and `.../after.sql`
- Case ids are numbered from `01` (or `001` in groups with 100+ cases) within each group.

## Groups

| Group | Cases | Description |
| --- | ---: | --- |
| `whole-table-changes` | 3 | Wholly added/removed tables and schema moves |
| `column-changes-except-types` | 19 | Column add/remove and constraint/badge changes |
| `index-changes` | 18 | Index add/remove, uniqueness, and column list changes |
| `column-type-changes` | 107 | Base type matrix, parameter changes, and enum changes |

## Storybook and screenshot tests

Hand-written suites live under `packages/api-doc-viewer/src/stories/ddlapi-diffs-suite/` and
`packages/api-doc-viewer/src/it/ddlapi-diffs-suite/`. Each group file exports one story per case
(following the Async API Diffs Suite pattern). Shared helpers are in `ddlapi-diffs-utils.tsx`.

| Group | Story title | Story / IT files |
| --- | --- | --- |
| `whole-table-changes` | `DDL API Diffs Suite/Whole Table Changes Samples` | `whole-table-changes-samples.*` |
| `column-changes-except-types` | `DDL API Diffs Suite/Column Changes Except Types Samples` | `column-changes-except-types-samples.*` |
| `index-changes` | `DDL API Diffs Suite/Index Changes Samples` | `index-changes-samples.*` |
| `column-type-changes` | `DDL API Diffs Suite/Column Type Changes Samples` | `column-type-changes-samples.*` |

Story id pattern: `{meta-id}--case-{case-id}` (for example
`ddl-api-diffs-suite-whole-table-changes-samples--case-01-wholly-added-table`). When adding a
case, append matching exports to the group story file and an `it(...)` to the paired IT file.

```bash
npm run regenerate-screenshots
```
