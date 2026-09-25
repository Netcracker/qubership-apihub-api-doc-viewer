# Primary key

A table-level constraint that uniquely identifies each row. One per table; backed by an implicit
unique index; its columns are implicitly NOT NULL.

## Reference

| Case | Frequency |
| --- | --- |
| Single-column integer or UUID key named `id` | typical |
| Auto-increment (`SERIAL`, `IDENTITY`) | typical |
| Composite key in a junction table (`(user_id, role_id)`) | common for association tables |
| Composite natural key in an entity table | less typical |
| No primary key | less typical |

## Display

- Every column of the key shows a **PK** badge; composite keys mark each participating column.
- **PK** suppresses **not null** on the same column.
- The primary key is never listed in the `Indexes` section.

## Example

```sql
CREATE TABLE orders (
    id         integer    PRIMARY KEY,
    placed_at  timestamp  NOT NULL,
    note       text
);
```

```text
id         integer    PK
placed_at  timestamp  not null
note       text
```
