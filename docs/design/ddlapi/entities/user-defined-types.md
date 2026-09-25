# User-defined types

PostgreSQL types created with `CREATE TYPE` or `CREATE DOMAIN` and used as column types.

## Reference

| Kind | Definition | Frequency |
| --- | --- | --- |
| Enum | ordered list of string labels (`AS ENUM (…)`) | present, common for status fields |
| Domain | alias over a base type with optional NOT NULL / CHECK | carefully normalized schemas |
| Composite | named record of typed fields | less common |
| Range | contiguous range of a subtype (`int4range`, `tsrange`, …) | specialized |

Enum values are string literals and are case-sensitive.

## Display

| Kind | Type label | Extra rows |
| --- | --- | --- |
| Enum | the enum type name | `Values` row with every label (detailed mode) |
| Domain | the domain name (base type is resolved but not shown) | — |
| Composite, range, other | the type name, or `ColumnType.raw` | — |
