# Index

A table-level structure that speeds up queries on some columns or expressions. A unique index also
enforces uniqueness; the doc view treats unique constraints and unique indexes as one concept.

## Reference

| Case | Frequency |
| --- | --- |
| Non-unique index on an FK column | typical |
| Single-column unique index on a natural key (`email`, `slug`) | common |
| Single-column index on a filtered column (`status`, `created_at`) | common |
| Composite index for a query pattern | less typical |
| Unique composite index on a junction table | less typical |
| Partial index (PostgreSQL) | less typical |
| Expression index | rare |

## Display

The `Indexes` section lists `Table.indexes` after the columns; each index is one non-expandable row.

| Element | Condition | Source |
| --- | --- | --- |
| Title | always | `Index.name`, or `<unnamed>` |
| Part list `(c1, c2)` | ≥1 part | column names or formatted expressions, ordered by `seqNo` |
| **unique** badge | unique index | `Index.unique` |
| Description row | detailed mode, comment present | `Index.attrs` → `Comment.text` |

- A single-column unique index also puts **unique** on its column; the index is still listed.
- Non-unique index membership is not shown on columns.
- The primary key is not listed.
- `DESC`, INCLUDE, operator classes, index type, and partial-index predicates are not shown.

## Example

```sql
CREATE TABLE orders (
    id integer PRIMARY KEY, customer_id integer NOT NULL, status text NOT NULL, total numeric
);
CREATE INDEX idx_orders_customer ON orders (customer_id);
CREATE UNIQUE INDEX uq_orders_ref ON orders (customer_id, status);
CREATE INDEX ON orders (total);
```

```text
Indexes
  idx_orders_customer  (customer_id)
  uq_orders_ref        (customer_id, status)  unique
  <unnamed>            (total)
```
