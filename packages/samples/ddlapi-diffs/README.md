# DDL API diff fixtures

These fixtures feed screenshot-diff scenarios for DDL table changes.

- Total cases: 147
- Layout: `ddlapi-diffs/<group>/<case-id>/before.sql` and `.../after.sql`

## Groups

| Group | Cases | Description |
| --- | ---: | --- |
| `whole-table-changes` | 3 | Wholly added/removed tables and schema moves |
| `column-changes-except-types` | 19 | Column add/remove and constraint/badge changes |
| `index-changes` | 18 | Index add/remove, uniqueness, and column list changes |
| `column-type-changes` | 107 | Base type matrix, parameter changes, and enum changes |
