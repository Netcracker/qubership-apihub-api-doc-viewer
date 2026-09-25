# Table

A named structure of rows and columns in one schema (for example `public.orders`). The root of the
doc view.

## Reference

| Case | Frequency |
| --- | --- |
| 5–30 columns | typical |
| Single-column integer or UUID primary key named `id` | typical |
| 2–5 foreign keys | typical |
| Junction table (`order_items`, `user_roles`): composite PK over two FK columns | common special case |
| Wide table (50+ columns) | less typical |
| No primary key (log, staging, import tables) | less typical |
| Table comment | uncommon in practice |

## Display

| Element | Condition | ddlapi source |
| --- | --- | --- |
| Table name (h1) | always, unless `noHeading` | `Table.name` |
| Schema name row | schema is not `public` | parent `Schema.name` |
| Description | detailed mode, comment present | `Table.attrs` → `Comment.text` |
| `Columns` section | ≥1 column | `Table.columns` |
| `Indexes` section | ≥1 index | `Table.indexes` (primary key excluded) |

## Example

```sql
CREATE SCHEMA reporting;
CREATE TABLE reporting.sales_summary (id integer);
COMMENT ON TABLE reporting.sales_summary IS 'Monthly sales aggregated by region.';
```

```text
sales_summary
reporting
Monthly sales aggregated by region.
Columns
  id  integer
```
