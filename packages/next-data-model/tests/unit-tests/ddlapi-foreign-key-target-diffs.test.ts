import { NodeDiffsSeverityPlacemennt } from '@apihub/next-data-model/model/abstract/tree-with-diffs/tree-node.interface'
import { formatForeignKeyTargetKey } from '@apihub/next-data-model/model/ddlapi/tree-with-diffs/property-row-diffs'
import { DdlApiForeignKeyTarget } from '@apihub/next-data-model/model/ddlapi/tree/node-value'
import { buildFromDdl } from '@netcracker/qubership-apihub-ddlapi/parser'
import { apiDiff, DiffAction } from '@netcracker/qubership-apihub-api-diff'
import { DdlApiTreeWithDiffsBuilder } from '../../src/building-service/ddlapi/tree-with-diffs/builder'
import { DdlApiTreeNodeKinds } from '../../src/model/ddlapi/types/node-kind'

const TEST_DIFFS_META_KEY = Symbol('test-ddl-diffs-meta-key')
const TEST_AGGREGATED_DIFFS_META_KEY = Symbol('test-ddl-aggregated-diffs-meta-key')
const TEST_DIFF_META_KEYS = {
  diffsMetaKey: TEST_DIFFS_META_KEY,
  aggregatedDiffsMetaKey: TEST_AGGREGATED_DIFFS_META_KEY,
}

async function buildTree(beforeSql: string, afterSql: string, tableName: string) {
  const before = await buildFromDdl(beforeSql)
  const after = await buildFromDdl(afterSql)
  const merged = apiDiff(before, after, {
    metaKey: TEST_DIFFS_META_KEY,
    normalizedResult: false,
  }).merged

  return new DdlApiTreeWithDiffsBuilder({
    source: merged,
    tableKey: { schemaName: 'public', name: tableName },
    diffsMetaKeys: TEST_DIFF_META_KEYS,
  }).build()
}

function findColumn(tree: ReturnType<DdlApiTreeWithDiffsBuilder['build']>, key: string) {
  return Array.from(tree.nodes.values()).find(node => node.kind === DdlApiTreeNodeKinds.COLUMN && node.key === key)!
}

const target = (tableName: string, columnName: string): DdlApiForeignKeyTarget => ({
  schemaName: 'public',
  tableName,
  columnName,
})

type ExpectedTargetChange = {
  column: string
  target: DdlApiForeignKeyTarget
  action: typeof DiffAction.add | typeof DiffAction.remove
  causedAt: string
}

// A foreign key that exists on both sides but changed its columns, referenced columns or
// referenced table shows, on each affected column row, the target that went away as removed and
// the target that appeared as added. The merged document holds only the after values, so the
// removed target is added to the row from the diff.
describe('foreign key target diffs when a key changes in place', () => {
  it.each<[string, string, string, string, ExpectedTargetChange[]]>([
    [
      'change-foreign-key-columns',
      `create table parent (id int primary key);
       create table child (a int, b int, constraint fk_child_parent foreign key (a) references parent (id));`,
      `create table parent (id int primary key);
       create table child (a int, b int, constraint fk_child_parent foreign key (b) references parent (id));`,
      'child',
      [
        { column: 'a', target: target('parent', 'id'), action: DiffAction.remove, causedAt: 'columns' },
        { column: 'b', target: target('parent', 'id'), action: DiffAction.add, causedAt: 'columns' },
      ],
    ],
    [
      'change-referenced-columns',
      `create table t (id int unique, code int unique);
       create table u (ref int, constraint fk_u_t foreign key (ref) references t (id));`,
      `create table t (id int unique, code int unique);
       create table u (ref int, constraint fk_u_t foreign key (ref) references t (code));`,
      'u',
      [
        { column: 'ref', target: target('t', 'id'), action: DiffAction.remove, causedAt: 'refColumns' },
        { column: 'ref', target: target('t', 'code'), action: DiffAction.add, causedAt: 'refColumns' },
      ],
    ],
    [
      'change-referenced-table',
      `create table legacy (id int primary key);
       create table target (id int primary key);
       create table u (ref int, constraint fk_u_ref foreign key (ref) references legacy (id));`,
      `create table legacy (id int primary key);
       create table target (id int primary key);
       create table u (ref int, constraint fk_u_ref foreign key (ref) references target (id));`,
      'u',
      [
        { column: 'ref', target: target('legacy', 'id'), action: DiffAction.remove, causedAt: 'refTable' },
        { column: 'ref', target: target('target', 'id'), action: DiffAction.add, causedAt: 'refTable' },
      ],
    ],
  ])('%s', async (_, beforeSql, afterSql, tableName, expectedChanges) => {
    const tree = await buildTree(beforeSql, afterSql, tableName)

    for (const { column: columnName, target: expectedTarget, action, causedAt } of expectedChanges) {
      const column = findColumn(tree, columnName)
      const targetDiff = column.diffs.foreignKeyTargetDiffs?.[formatForeignKeyTargetKey(expectedTarget)]

      expect(column.value()?.foreignKeyTargets).toContainEqual(expectedTarget)
      expect(targetDiff?.data.action).toBe(action)
      expect(targetDiff?.styles.before.isContentVisible).toBe(action === DiffAction.remove)
      expect(targetDiff?.styles.after.isContentVisible).toBe(action === DiffAction.add)
      expect(column.diffsSeverities?.[NodeDiffsSeverityPlacemennt.TitleRow]?.causedAt?.at(-1)).toBe(causedAt)
    }
  })
})
