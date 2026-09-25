# Foreign key

A constraint linking referencing columns of this table to referenced columns of another table
(or of the same table).

## Reference

| Case | Frequency |
| --- | --- |
| Single-column FK to the `id` of another table | typical |
| No explicit ON DELETE / ON UPDATE action | typical |
| ON DELETE CASCADE | common |
| ON DELETE SET NULL | less typical |
| Composite FK; FK to a non-PK unique column; self-referential FK | less typical |
| Several FKs to the same target table | rare |

## Display

- Each referencing column shows **FK** followed by a link to the referenced column, as the last
  badge on the title row.
- Link text: `table.column` when the target is in `public`, `schema.table.column` otherwise.
- A column referencing several targets shows one **FK** badge and link per target.
- The link is produced by the host's `navigationLinkBuilder` and rendered by
  `navigationLinkComponent` (default: `DefaultNavigationLink`).
- A target that cannot be resolved (partial realm) shows no badge.
- Constraint name, ON DELETE, and ON UPDATE are not shown.

## Example

```sql
CREATE SCHEMA finance;
CREATE TABLE customers (id integer PRIMARY KEY);
CREATE TABLE finance.currencies (id integer PRIMARY KEY);
CREATE TABLE orders (
    customer_id  integer  REFERENCES customers(id),
    currency_id  integer  REFERENCES finance.currencies(id)
);
```

```text
customer_id  integer  FK customers.id
currency_id  integer  FK finance.currencies.id
```
