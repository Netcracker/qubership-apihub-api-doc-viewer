import { readFileSync } from 'fs'
import { join } from 'path'
import {
  ChangedPropertyMetaData,
  HighlightVariant,
  NODE_LEVEL_DIFF_KEY,
} from '../../src/model/abstract/tree-with-diffs/tree-node.interface'
import { buildFromDdl } from '@netcracker/qubership-apihub-ddlapi/parser'
import { apiDiff, breaking, Diff, DiffAction, DiffType, nonBreaking } from '@netcracker/qubership-apihub-api-diff'
import {
  aggregateUniformWholeNodeDescendantDiff,
  buildPropertyListSectionWholeNodeChangedPropertyMetaData,
} from '../../src/building-service/ddlapi/tree-with-diffs/node-diffs-data/shared/property-list-section-diff-utils'
import { DdlApiTreeWithDiffsBuilder } from '../../src/building-service/ddlapi/tree-with-diffs/builder'
import { DdlApiTreeWithDiffs } from '../../src/model/ddlapi/tree-with-diffs/tree.impl'
import type { DdlApiTreeNodeWithDiffs } from '../../src/model/ddlapi/types/aliases'
import { DdlApiTreeNodeKinds } from '../../src/model/ddlapi/types/node-kind'

const TEST_DIFFS_META_KEY = Symbol('test-ddl-diffs-meta-key')
const TEST_AGGREGATED_DIFFS_META_KEY = Symbol('test-ddl-aggregated-diffs-meta-key')
const TEST_DIFF_META_KEYS = {
  diffsMetaKey: TEST_DIFFS_META_KEY,
  aggregatedDiffsMetaKey: TEST_AGGREGATED_DIFFS_META_KEY,
}

function buildDescendantDiff(action: typeof DiffAction.add | typeof DiffAction.remove): ChangedPropertyMetaData {
  const diff: Diff<DiffType> = action === DiffAction.add
    ? { type: nonBreaking, action, scope: 'root', afterValue: {}, afterDeclarationPaths: [] }
    : { type: breaking, action, scope: 'root', beforeValue: {}, beforeDeclarationPaths: [] }

  return buildPropertyListSectionWholeNodeChangedPropertyMetaData(diff)
}

async function buildTreeFromSample(baseDir: string, caseId: string) {
  const base = join(__dirname, '../../../samples/ddlapi-diffs', baseDir, caseId)
  const before = await buildFromDdl(readFileSync(join(base, 'before.sql'), 'utf8'))
  const after = await buildFromDdl(readFileSync(join(base, 'after.sql'), 'utf8'))
  const merged = apiDiff(before, after, {
    metaKey: TEST_DIFFS_META_KEY,
    normalizedResult: false,
  }).merged

  return new DdlApiTreeWithDiffsBuilder({
    source: merged,
    tableKey: { schemaName: 'public', name: 't' },
    diffsMetaKeys: TEST_DIFF_META_KEYS,
  }).build()
}

function findNode(
  tree: DdlApiTreeWithDiffs,
  kind: DdlApiTreeNodeWithDiffs['kind'],
): DdlApiTreeNodeWithDiffs | undefined {
  return Array.from(tree.nodes.values()).find(node => node.kind === kind)
}

describe('DDL property-list section pseudo-diffs', () => {
  it('aggregateUniformWholeNodeDescendantDiff sets NODE_LEVEL when every descendant shares add', () => {
    const nodeDiffs = {}
    const nodeDescendantDiffs = {
      id: buildDescendantDiff(DiffAction.add),
      code: buildDescendantDiff(DiffAction.add),
    }

    const result = aggregateUniformWholeNodeDescendantDiff(nodeDiffs, nodeDescendantDiffs, 2)

    expect(result?.[NODE_LEVEL_DIFF_KEY]?.data.action).toBe(DiffAction.add)
    expect(result?.[NODE_LEVEL_DIFF_KEY]?.styles.after.backgroundColor).toBe(HighlightVariant.Green)
    expect(result?.[NODE_LEVEL_DIFF_KEY]?.styles.before.isHeaderVisible).toBe(false)
    expect(result?.[NODE_LEVEL_DIFF_KEY]?.styles.after.isHeaderVisible).toBe(true)
  })

  it('aggregateUniformWholeNodeDescendantDiff skips mixed descendant actions', () => {
    const nodeDiffs = {}
    const nodeDescendantDiffs = {
      id: buildDescendantDiff(DiffAction.remove),
      code: buildDescendantDiff(DiffAction.add),
    }

    const result = aggregateUniformWholeNodeDescendantDiff(nodeDiffs, nodeDescendantDiffs, 2)

    expect(result?.[NODE_LEVEL_DIFF_KEY]).toBeUndefined()
  })

  it('aggregateUniformWholeNodeDescendantDiff preserves an existing NODE_LEVEL diff', () => {
    const inherited = buildDescendantDiff(DiffAction.add)
    const nodeDiffs = { [NODE_LEVEL_DIFF_KEY]: inherited }
    const nodeDescendantDiffs = {
      id: buildDescendantDiff(DiffAction.add),
    }

    const result = aggregateUniformWholeNodeDescendantDiff(nodeDiffs, nodeDescendantDiffs, 1)

    expect(result?.[NODE_LEVEL_DIFF_KEY]).toBe(inherited)
  })

  it('case 203: COLUMNS has no pseudo-diff when only one of two columns changed', async () => {
    const tree = await buildTreeFromSample('column-changes-except-types', '203-add-column-unique')
    const columnsSection = findNode(tree, DdlApiTreeNodeKinds.COLUMNS)

    expect(columnsSection?.descendantDiffs.code?.data.action).toBe(DiffAction.add)
    expect(columnsSection?.diffs[NODE_LEVEL_DIFF_KEY]).toBeUndefined()
  })

  it('case 01 index-changes: INDEXES gets pseudo-diff when all indexes are added uniformly', async () => {
    const tree = await buildTreeFromSample('index-changes', '01-add-index-when-none-present')
    const indexesSection = findNode(tree, DdlApiTreeNodeKinds.INDEXES)

    expect(indexesSection?.descendantDiffs.idx_t_code?.data.action).toBe(DiffAction.add)
    expect(indexesSection?.diffs[NODE_LEVEL_DIFF_KEY]?.data.action).toBe(DiffAction.add)
    expect(indexesSection?.diffs[NODE_LEVEL_DIFF_KEY]?.styles.after.backgroundColor).toBe(HighlightVariant.Green)
    expect(indexesSection?.diffs[NODE_LEVEL_DIFF_KEY]?.styles.before.isHeaderVisible).toBe(false)
    expect(indexesSection?.diffs[NODE_LEVEL_DIFF_KEY]?.styles.after.isHeaderVisible).toBe(true)
  })
})
