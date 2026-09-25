# Column

A named, typed slot of a table row. Can take part in the primary key, foreign keys, unique
indexes, and non-unique indexes at the same time.

## Reference

| Case | Frequency |
| --- | --- |
| NOT NULL on core columns (`id`, `created_at`, status) | typical |
| Nullable optional attributes (`description`, `deleted_at`) | typical |
| Integer, varchar/text, boolean, timestamp, decimal types | typical |
| UUID type | common in modern applications |
| Default on timestamps, booleans, status fields (literal or function call) | common |
| Enum type (PostgreSQL) | present, not universal |
| JSON / JSONB column | increasingly common |
| Generated column | less typical |
| Binary, spatial, array types | rare in OLTP schemas |

## Display

Title row: `name  type-label  badges`.

| Element | Condition | Source |
| --- | --- | --- |
| Name | always | `Column.name` |
| Type label | always; parameters folded in | `Column.type` → formatted label, fallback `ColumnType.raw`, then `unknown` |
| **PK** | column in the primary key | [primary-key.md](primary-key.md) |
| **unique** | column is the only part of a unique index | `Table.indexes` |
| **not null** | `ColumnType.null === false`, and **PK** is not shown | `Column.type.null` |
| **generated** | IDENTITY or `GENERATED ALWAYS AS` | `Identity` / `GeneratedExpr` attr |
| **FK** + link | one per referenced target, always last | [foreign-key.md](foreign-key.md) |
| Description row | detailed mode, comment present | `Column.attrs` → `Comment.text` |
| `Values` row | detailed mode, enum type | `EnumType.values` |
| `Default` row | detailed mode, default present | `formatDdlExpr(Column.default)` |
| `As` row | detailed mode, expression-generated column | `GeneratedExpr.expr` |

- Nullable is the SQL default and is never marked.
- The **generated** badge text does not distinguish identity from expression; only expression
  columns get an `As` row. A generated column has no `Default` row.
- `not null` is not suppressed by **generated**.
- Type labels by kind are listed in [../display-coverage.md](../display-coverage.md#column-type-label).

## Examples

```sql
CREATE TYPE order_status AS ENUM ('pending', 'shipped', 'delivered');
CREATE TABLE products (
    id          integer        PRIMARY KEY,
    name        varchar(100)   NOT NULL,
    price       decimal(10,2)  NOT NULL,
    status      order_status   NOT NULL,
    updated_at  timestamp(3)   DEFAULT now(),
    full_name   text           GENERATED ALWAYS AS (upper(name)) STORED
);
```

```text
id          integer                  PK
name        character varying (100)  not null
price       numeric (10, 2)          not null
status      order_status             not null
  Values    pending  shipped  delivered
updated_at  timestamp (3)
  Default   now()
full_name   text                     generated
  As        upper(name)
```
