import { NODE_LEVEL_DIFF_KEY } from '@apihub/next-data-model/model/abstract/tree-with-diffs/tree-node.interface'
import { buildFromDdl } from '@netcracker/qubership-apihub-ddlapi/parser'
import { apiDiff, DiffAction } from '@netcracker/qubership-apihub-api-diff'
import { createBuildingServiceLogger } from '../../src/loggers'
import { DdlApiSpecWithDiffsTransformer } from '../../src/building-service/ddlapi/shared/ddlapi-spec-with-diffs-transformer'
import { DdlApiTreeWithDiffsBuilder } from '../../src/building-service/ddlapi/tree-with-diffs/builder'
import { DdlApiTreeNodeKinds } from '../../src/model/ddlapi/types/node-kind'

const TEST_DIFFS_META_KEY = Symbol('test-ddl-diffs-meta-key')
const TEST_AGGREGATED_DIFFS_META_KEY = Symbol('test-ddl-aggregated-diffs-meta-key')
const TEST_DIFF_META_KEYS = {
  diffsMetaKey: TEST_DIFFS_META_KEY,
  aggregatedDiffsMetaKey: TEST_AGGREGATED_DIFFS_META_KEY,
}

async function mergeSql(beforeSql: string, afterSql: string) {
  const before = await buildFromDdl(beforeSql)
  const after = await buildFromDdl(afterSql)
  return apiDiff(before, after, {
    metaKey: TEST_DIFFS_META_KEY,
    normalizedResult: false,
  }).merged
}

describe('DdlApiSpecWithDiffsTransformer', () => {
  const transformer = new DdlApiSpecWithDiffsTransformer(
    createBuildingServiceLogger(),
    TEST_DIFF_META_KEYS,
  )

  it('maps whole-column add diffs onto the transformed column row', async () => {
    const merged = await mergeSql(
      'create table t(id int);',
      'create table t(id int, name varchar(50));',
    )
    const spec = transformer.transformSourceToTableOrientedSpecWithDiffs(merged, {
      schemaName: 'public',
      name: 't',
    })

    const nameColumn = spec?.columns.items.find(column => column.columnName === 'name')
    const columnDiffs = nameColumn?.[TEST_DIFFS_META_KEY] as Record<string, { action?: string }> | undefined

    expect(columnDiffs?.[NODE_LEVEL_DIFF_KEY]?.action).toBe(DiffAction.add)
  })

  it('maps type-name replace diffs onto columnType.label', async () => {
    const merged = await mergeSql(
      'create table t(id int);',
      'create table t(id bigint);',
    )
    const spec = transformer.transformSourceToTableOrientedSpecWithDiffs(merged, {
      schemaName: 'public',
      name: 't',
    })

    const idColumn = spec?.columns.items.find(column => column.columnName === 'id')
    const columnTypeDiffs = idColumn?.columnType[TEST_DIFFS_META_KEY] as Record<string, { action?: string }> | undefined

    expect(columnTypeDiffs?.label?.action).toBe(DiffAction.replace)
  })

  it('maps nullability diffs onto isNotNull', async () => {
    const merged = await mergeSql(
      'create table t(id int);',
      'create table t(id int not null);',
    )
    const spec = transformer.transformSourceToTableOrientedSpecWithDiffs(merged, {
      schemaName: 'public',
      name: 't',
    })

    const idColumn = spec?.columns.items.find(column => column.columnName === 'id')
    const columnDiffs = idColumn?.[TEST_DIFFS_META_KEY] as Record<
      string,
      { action?: string; beforeValue?: unknown; afterValue?: unknown }
    > | undefined

    expect(columnDiffs?.isNotNull?.action).toBe(DiffAction.replace)
    expect(columnDiffs?.isNotNull?.beforeValue).toBe(false)
    expect(columnDiffs?.isNotNull?.afterValue).toBe(true)
  })

  it('normalizes the implicit not-null change of a new primary key as add', async () => {
    const merged = await mergeSql(
      'create table t(id int, code int);',
      'create table t(id int, code int primary key);',
    )
    const tree = new DdlApiTreeWithDiffsBuilder({
      source: merged,
      tableKey: {
        schemaName: 'public',
        name: 't',
      },
      diffsMetaKeys: TEST_DIFF_META_KEYS,
    }).build()

    const codeColumn = Array.from(tree.nodes.values()).find(
      node => node.kind === DdlApiTreeNodeKinds.COLUMN && node.key === 'code',
    )

    expect(codeColumn?.diffs.isNotNull?.data.action).toBe(DiffAction.add)
  })

  it('maps default add diffs onto defaultValue', async () => {
    const merged = await mergeSql(
      'create table t(id int);',
      'create table t(id int default 5);',
    )
    const spec = transformer.transformSourceToTableOrientedSpecWithDiffs(merged, {
      schemaName: 'public',
      name: 't',
    })

    const idColumn = spec?.columns.items.find(column => column.columnName === 'id')
    const columnDiffs = idColumn?.[TEST_DIFFS_META_KEY] as Record<string, { action?: string }> | undefined

    expect(columnDiffs?.defaultValue?.action).toBe(DiffAction.add)
  })

  it('maps whole-index add diffs onto the transformed index row', async () => {
    const merged = await mergeSql(
      'create table t(id int);',
      'create table t(id int); create unique index idx on t(id);',
    )
    const spec = transformer.transformSourceToTableOrientedSpecWithDiffs(merged, {
      schemaName: 'public',
      name: 't',
    })

    const indexRow = spec?.indexes.items[0]
    const indexDiffs = indexRow?.[TEST_DIFFS_META_KEY] as Record<string, { action?: string }> | undefined

    expect(indexDiffs?.[NODE_LEVEL_DIFF_KEY]?.action).toBe(DiffAction.add)
  })

  it('maps identity add diffs onto isGenerated', async () => {
    const merged = await mergeSql(
      'create table t(id int);',
      'create table t(id int generated always as identity);',
    )
    const spec = transformer.transformSourceToTableOrientedSpecWithDiffs(merged, {
      schemaName: 'public',
      name: 't',
    })

    const idColumn = spec?.columns.items.find(column => column.columnName === 'id')
    const columnDiffs = idColumn?.[TEST_DIFFS_META_KEY] as Record<string, { action?: string }> | undefined

    expect(columnDiffs?.isGenerated?.action).toBe(DiffAction.add)
    expect(columnDiffs?.generatedExpression).toBeUndefined()
  })

  it('maps generated-expression add diffs onto isGenerated and generatedExpression', async () => {
    const merged = await mergeSql(
      'create table t(v int);',
      'create table t(v int generated always as (1) stored);',
    )
    const spec = transformer.transformSourceToTableOrientedSpecWithDiffs(merged, {
      schemaName: 'public',
      name: 't',
    })

    const vColumn = spec?.columns.items.find(column => column.columnName === 'v')
    const columnDiffs = vColumn?.[TEST_DIFFS_META_KEY] as Record<string, { action?: string }> | undefined

    expect(columnDiffs?.isGenerated?.action).toBe(DiffAction.add)
    expect(columnDiffs?.generatedExpression?.action).toBe(DiffAction.add)
  })

  it('maps identity generation replace diffs onto isGenerated', async () => {
    const merged = await mergeSql(
      'create table t(id int generated always as identity);',
      'create table t(id int generated by default as identity);',
    )
    const spec = transformer.transformSourceToTableOrientedSpecWithDiffs(merged, {
      schemaName: 'public',
      name: 't',
    })

    const idColumn = spec?.columns.items.find(column => column.columnName === 'id')
    const columnDiffs = idColumn?.[TEST_DIFFS_META_KEY] as Record<string, { action?: string }> | undefined

    expect(columnDiffs?.isGenerated?.action).toBe(DiffAction.replace)
    expect(columnDiffs?.generatedExpression).toBeUndefined()
  })

  it('maps a generated-expression removal onto generatedExpression as remove', async () => {
    const merged = await mergeSql(
      'create table t(v int generated always as (1) stored);',
      'create table t(v int);',
    )
    const spec = transformer.transformSourceToTableOrientedSpecWithDiffs(merged, {
      schemaName: 'public',
      name: 't',
    })

    const vColumn = spec?.columns.items.find(column => column.columnName === 'v')
    const columnDiffs = vColumn?.[TEST_DIFFS_META_KEY] as Record<string, { action?: string }> | undefined

    expect(columnDiffs?.generatedExpression?.action).toBe(DiffAction.remove)
    expect(columnDiffs?.isGenerated?.action).toBe(DiffAction.remove)
  })

  it('maps sample 505 lost generated expression onto isGenerated and generatedExpression removes', async () => {
    const merged = await mergeSql(
      `CREATE TABLE public.t (
        id integer,
        a integer,
        b integer,
        summary text GENERATED ALWAYS AS (
          'A=' || a::text || ', B=' || b::text || ', TOTAL=' || (a + b)::text || ', NOTE=' || repeat('x', 10)
        ) STORED
      );`,
      `CREATE TABLE public.t (
        id integer,
        a integer,
        b integer,
        summary text
      );`,
    )
    const spec = transformer.transformSourceToTableOrientedSpecWithDiffs(merged, {
      schemaName: 'public',
      name: 't',
    })

    const summaryColumn = spec?.columns.items.find(column => column.columnName === 'summary')
    const columnDiffs = summaryColumn?.[TEST_DIFFS_META_KEY] as Record<string, { action?: string }> | undefined

    expect(summaryColumn?.isGenerated).toBe(true)
    expect(columnDiffs?.generatedExpression?.action).toBe(DiffAction.remove)
    expect(columnDiffs?.isGenerated?.action).toBe(DiffAction.remove)

    const tree = new DdlApiTreeWithDiffsBuilder({
      source: merged,
      tableKey: {
        schemaName: 'public',
        name: 't',
      },
      diffsMetaKeys: TEST_DIFF_META_KEYS,
    }).build()
    const summaryNode = Array.from(tree.nodes.values()).find(
      node => node.kind === DdlApiTreeNodeKinds.COLUMN && node.key === 'summary',
    )

    expect(summaryNode?.diffs.isGenerated?.data.action).toBe(DiffAction.remove)
    expect(summaryNode?.diffs.generatedExpression?.data.action).toBe(DiffAction.remove)
  })

  it('maps an identity-to-expression change onto generatedExpression as add', async () => {
    const merged = await mergeSql(
      'create table t(v int generated always as identity);',
      'create table t(v int generated always as (1) stored);',
    )
    const spec = transformer.transformSourceToTableOrientedSpecWithDiffs(merged, {
      schemaName: 'public',
      name: 't',
    })

    const vColumn = spec?.columns.items.find(column => column.columnName === 'v')
    const columnDiffs = vColumn?.[TEST_DIFFS_META_KEY] as Record<string, { action?: string }> | undefined

    expect(columnDiffs?.generatedExpression?.action).toBe(DiffAction.add)
    expect(columnDiffs?.isGenerated).toBeUndefined()
  })

  it('maps an expression-to-identity change onto generatedExpression as remove', async () => {
    const merged = await mergeSql(
      'create table t(v int generated always as (1) stored);',
      'create table t(v int generated always as identity);',
    )
    const spec = transformer.transformSourceToTableOrientedSpecWithDiffs(merged, {
      schemaName: 'public',
      name: 't',
    })

    const vColumn = spec?.columns.items.find(column => column.columnName === 'v')
    const columnDiffs = vColumn?.[TEST_DIFFS_META_KEY] as Record<string, { action?: string }> | undefined

    expect(columnDiffs?.generatedExpression?.action).toBe(DiffAction.remove)
    expect(columnDiffs?.isGenerated).toBeUndefined()
  })

  it('keeps a generated-expression value change as replace', async () => {
    const merged = await mergeSql(
      'create table t(v text generated always as (\'AAA\') stored);',
      'create table t(v text generated always as (\'BBB\') stored);',
    )
    const spec = transformer.transformSourceToTableOrientedSpecWithDiffs(merged, {
      schemaName: 'public',
      name: 't',
    })

    const vColumn = spec?.columns.items.find(column => column.columnName === 'v')
    const columnDiffs = vColumn?.[TEST_DIFFS_META_KEY] as Record<string, { action?: string }> | undefined

    expect(columnDiffs?.generatedExpression?.action).toBe(DiffAction.replace)
    expect(columnDiffs?.isGenerated).toBeUndefined()
  })

  it('builds a diffs tree for generated kind switches without isGenerated flag diffs', async () => {
    const merged = await mergeSql(
      `CREATE TABLE public.t (
        id integer,
        a integer,
        b integer,
        code integer GENERATED ALWAYS AS (
          (a + b) * 10 + abs(a - b) + greatest(coalesce(a, 0), coalesce(b, 0)) * 2
        ) STORED
      );`,
      'CREATE TABLE public.t (id integer, a integer, b integer, code integer GENERATED ALWAYS AS IDENTITY);',
    )
    const spec = transformer.transformSourceToTableOrientedSpecWithDiffs(merged, {
      schemaName: 'public',
      name: 't',
    })

    const codeColumn = spec?.columns.items.find(column => column.columnName === 'code')
    const columnDiffs = codeColumn?.[TEST_DIFFS_META_KEY] as Record<string, { action?: string }> | undefined

    expect(columnDiffs?.generatedExpression?.action).toBe(DiffAction.remove)
    expect(columnDiffs?.isGenerated).toBeUndefined()

    const tree = new DdlApiTreeWithDiffsBuilder({
      source: merged,
      tableKey: {
        schemaName: 'public',
        name: 't',
      },
      diffsMetaKeys: TEST_DIFF_META_KEYS,
    }).build()
    const codeColumnNode = Array.from(tree.nodes.values()).find(
      node => node.kind === DdlApiTreeNodeKinds.COLUMN && node.key === 'code',
    )

    expect(codeColumnNode?.diffs.isGenerated).toBeUndefined()
    expect(codeColumnNode?.diffs.generatedExpression).toBeDefined()
  })

  it('omits isGenerated when only a generated-expression body changes', async () => {
    const merged = await mergeSql(
      `CREATE TABLE public.t (
        id integer,
        a integer,
        b integer,
        summary text GENERATED ALWAYS AS (
          'A=' || a::text || ', B=' || b::text || ', TOTAL=' || (a + b)::text || ', NOTE=' || repeat('x', 10)
        ) STORED
      );`,
      `CREATE TABLE public.t (
        id integer,
        a integer,
        b integer,
        summary text GENERATED ALWAYS AS (
          'A=' || a::text || ', B=' || b::text || ', PRODUCT=' || (a * b)::text || ', PADDING=' || repeat('y', 12)
        ) STORED
      );`,
    )
    const spec = transformer.transformSourceToTableOrientedSpecWithDiffs(merged, {
      schemaName: 'public',
      name: 't',
    })

    const summaryColumn = spec?.columns.items.find(column => column.columnName === 'summary')
    const columnDiffs = summaryColumn?.[TEST_DIFFS_META_KEY] as Record<string, { action?: string }> | undefined

    expect(columnDiffs?.generatedExpression?.action).toBe(DiffAction.replace)
    expect(columnDiffs?.isGenerated).toBeUndefined()
  })

  it('maps foreign-key reference changes onto foreignKeyTargets diffs', async () => {
    const merged = await mergeSql(
      `CREATE TABLE public.target (id integer PRIMARY KEY);
       CREATE TABLE public.t (ref_id integer REFERENCES public.target(id));`,
      `CREATE TABLE public.target (code integer PRIMARY KEY);
       CREATE TABLE public.t (ref_id integer REFERENCES public.target(code));`,
    )
    const spec = transformer.transformSourceToTableOrientedSpecWithDiffs(merged, {
      schemaName: 'public',
      name: 't',
    })

    const refIdColumn = spec?.columns.items.find(column => column.columnName === 'ref_id')
    const columnDiffs = refIdColumn?.[TEST_DIFFS_META_KEY] as Record<
      string,
      Record<string, { action?: string }> | { action?: string }
    > | undefined
    const targetDiffs = columnDiffs?.foreignKeyTargets as Record<string, { action?: string }> | undefined

    expect(refIdColumn?.foreignKeyTargets).toHaveLength(2)
    expect(Object.values(targetDiffs ?? {}).map(diff => diff.action).sort()).toEqual(['add', 'remove'])
  })

  it('builds a diffs tree for foreign-key reference changes without throwing', async () => {
    const merged = await mergeSql(
      `CREATE TABLE public.target (id integer PRIMARY KEY);
       CREATE TABLE public.t (ref_id integer REFERENCES public.target(id));`,
      `CREATE TABLE public.target (code integer PRIMARY KEY);
       CREATE TABLE public.t (ref_id integer REFERENCES public.target(code));`,
    )

    expect(() => new DdlApiTreeWithDiffsBuilder({
      source: merged,
      tableKey: {
        schemaName: 'public',
        name: 't',
      },
      diffsMetaKeys: TEST_DIFF_META_KEYS,
    }).build()).not.toThrow()
  })

  it('aggregates rollup metadata on the transformed table document', async () => {
    const merged = await mergeSql(
      'create table t(id int);',
      'create table t(id int, name varchar(50));',
    )
    const spec = transformer.transformSourceToTableOrientedSpecWithDiffs(merged, {
      schemaName: 'public',
      name: 't',
    })

    expect(spec?.[TEST_AGGREGATED_DIFFS_META_KEY]).toBeDefined()
  })
})
