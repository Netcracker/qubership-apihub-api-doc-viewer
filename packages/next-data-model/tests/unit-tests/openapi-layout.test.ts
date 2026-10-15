import { OpenApiTreeWithDiffsBuilder } from '../../src/building-service/openapi/tree-with-diffs/builder'
import { HighlightVariant } from '../../src/model/abstract/tree-with-diffs/tree-node.interface'
import {
  DEFAULT_OPENAPI_SPACING_CONFIG,
  OpenApiBlockEdge,
  OpenApiBlockEdges,
  OpenApiLayoutBlock,
  OpenApiLayoutPlanner,
  OpenApiSpacing,
} from '../../src/model/openapi/layout'
import { OpenApiNodeVisibility } from '../../src/model/openapi/node-visibility'
import { OpenApiTreeNodeWithDiffs } from '../../src/model/openapi/types/aliases'
import { OpenApiTreeNodeKind, OpenApiTreeNodeKinds } from '../../src/model/openapi/types/node-kind'
import { isOpenApiTreeNodeWithDiffs } from '../../src/shared/openapi/guards/tree-node'
import { loadMergedOpenApiSample, OPENAPI_TEST_DIFF_META_KEYS } from '../helpers/openapi-fixtures'

const OPERATION = { path: '/orders/{orderId}', method: 'post' }

function operation(caseId: string): OpenApiTreeNodeWithDiffs {
  const node = new OpenApiTreeWithDiffsBuilder({
    source: loadMergedOpenApiSample(caseId),
    operationKeys: OPERATION,
    diffsMetaKeys: OPENAPI_TEST_DIFF_META_KEYS,
  }).build().root
  if (!node || !isOpenApiTreeNodeWithDiffs(node)) {
    throw new Error('no root')
  }
  return node
}

function child(node: OpenApiTreeNodeWithDiffs, kind: OpenApiTreeNodeKind, key?: string): OpenApiTreeNodeWithDiffs {
  const found = node.childrenNodes().find(candidate => candidate.kind === kind && (key === undefined || String(candidate.key) === key))
  if (!found) {
    throw new Error(`no ${kind} ${key ?? ''} under ${node.kind}`)
  }
  return found
}

const row = (before?: HighlightVariant, after?: HighlightVariant): OpenApiBlockEdge => ({ kind: 'row', tones: { before, after } })
const frame = (before?: HighlightVariant, after?: HighlightVariant): OpenApiBlockEdge => ({ kind: 'frame', tones: { before, after } })
const block = (id: string, head: OpenApiBlockEdge, tail = head): OpenApiLayoutBlock<string> => ({ id, head, tail, payload: id })

describe('OpenAPI layout: spacing config', () => {
  it('derives the separator height from the block gap and the row padding', () => {
    expect(OpenApiSpacing.separatorHeight(DEFAULT_OPENAPI_SPACING_CONFIG)).toBe(12)
    expect(OpenApiSpacing.separatorHeight(OpenApiSpacing.withOverrides({ blockGap: 24 }))).toBe(16)
  })

  it('keeps one band for equal tones and splits into halves for different tones', () => {
    const { splitBands } = DEFAULT_OPENAPI_SPACING_CONFIG
    expect(splitBands(undefined, undefined, 12)).toEqual([{ height: 12, tone: undefined }])
    expect(splitBands(HighlightVariant.Green, HighlightVariant.Green, 12)).toEqual([{ height: 12, tone: HighlightVariant.Green }])
    expect(splitBands(HighlightVariant.Red, HighlightVariant.Green, 12)).toEqual([
      { height: 6, tone: HighlightVariant.Red },
      { height: 6, tone: HighlightVariant.Green },
    ])
  })

  it('adds no separator next to a card frame row', () => {
    const { needsSeparator } = DEFAULT_OPENAPI_SPACING_CONFIG
    expect(needsSeparator(row(), row())).toBe(true)
    expect(needsSeparator(row(), frame())).toBe(false)
    expect(needsSeparator(frame(), row())).toBe(false)
  })
})

describe('OpenAPI layout: planner', () => {
  it('interleaves separators between blocks, never before the first or after the last', () => {
    const items = OpenApiLayoutPlanner.plan([block('a', row()), block('b', row()), block('c', row())], DEFAULT_OPENAPI_SPACING_CONFIG)
    expect(items.map(item => item.type === 'block' ? item.block.id : item.separator.id)).toEqual(['a', 'a|b', 'b', 'b|c', 'c'])
  })

  it('splits each side independently by the tones of the rows around it', () => {
    const [, separator] = OpenApiLayoutPlanner.plan(
      [block('removed', row(HighlightVariant.Red, HighlightVariant.Gray)), block('added', row(HighlightVariant.Gray, HighlightVariant.Green))],
      DEFAULT_OPENAPI_SPACING_CONFIG,
    )
    expect(separator).toEqual({
      type: 'separator',
      separator: {
        id: 'removed|added',
        before: [{ height: 6, tone: HighlightVariant.Red }, { height: 6, tone: HighlightVariant.Gray }],
        after: [{ height: 6, tone: HighlightVariant.Gray }, { height: 6, tone: HighlightVariant.Green }],
      },
    })
  })

  it('leaves cards (frame edges) without separators', () => {
    const items = OpenApiLayoutPlanner.plan([block('toolbar', row()), block('card1', frame()), block('card2', frame()), block('next', row())], DEFAULT_OPENAPI_SPACING_CONFIG)
    expect(items.every(item => item.type === 'block')).toBe(true)
  })

  it('follows a config override (one band always)', () => {
    const config = OpenApiSpacing.withOverrides({ splitBands: (above, _below, height) => [{ height, tone: above }] })
    const [, separator] = OpenApiLayoutPlanner.plan([block('a', row(HighlightVariant.Yellow)), block('b', row())], config)
    expect(separator.type === 'separator' && separator.separator.before).toEqual([{ height: 12, tone: HighlightVariant.Yellow }])
  })
})

describe('OpenAPI layout: block edges on fixtures', () => {
  it('a changed description ends the operation header block in yellow', () => {
    const node = operation('operation/09-description-changed')
    const edges = OpenApiBlockEdges.operationHeader(node, OpenApiNodeVisibility.resolveOperation(node.value(), false))
    expect(edges.head.tones).toEqual({ before: undefined, after: undefined })
    expect(edges.tail.tones).toEqual({ before: HighlightVariant.Yellow, after: HighlightVariant.Yellow })
  })

  it('a wholly added parameter group is green on the changed side and gray on the origin side, schema end included', () => {
    const group = child(child(operation('query-parameters/19-all-added'), OpenApiTreeNodeKinds.REQUEST), OpenApiTreeNodeKinds.PARAMETERS, 'query')
    const edges = OpenApiBlockEdges.parameters(group)
    expect(edges.head.tones.after).toBe(HighlightVariant.Green)
    expect(edges.tail).toEqual(edges.head)
    expect(edges.tail.tones.before).toBe(edges.head.tones.before)
  })

  it('a collapsed parameter group ends with its title row', () => {
    const group = child(child(operation('query-parameters/08-description-changed'), OpenApiTreeNodeKinds.REQUEST), OpenApiTreeNodeKinds.PARAMETERS, 'query')
    expect(OpenApiBlockEdges.parameters(group, { expanded: false }).tail).toEqual(OpenApiBlockEdges.parameters(group).head)
  })

  it('an added card has green frame edges; a type change paints the title row but not the frame', () => {
    const security = (caseId: string): OpenApiTreeNodeWithDiffs => child(operation(caseId), OpenApiTreeNodeKinds.SECURITY)
    const added = child(security('security/09-scheme-added-to-alternative').childrenNodes()[0], OpenApiTreeNodeKinds.SECURITY_SCHEME, 'basic')
    expect(OpenApiBlockEdges.card(added).head).toEqual({ kind: 'frame', tones: { before: HighlightVariant.Gray, after: HighlightVariant.Green } })
    const retyped = security('security/15-scheme-type-changed').childrenNodes()[0].childrenNodes()[0]
    expect(OpenApiBlockEdges.card(retyped).head.tones).toEqual({ before: undefined, after: undefined })
    expect(OpenApiLayoutPlanner.frameRow(retyped, DEFAULT_OPENAPI_SPACING_CONFIG)).toEqual({ height: 24, borderOffset: 12, tones: { before: undefined, after: undefined } })
  })

  it('a container ends with the tail of its last child, or its header row without children', () => {
    const header = row(HighlightVariant.Yellow)
    const container = OpenApiBlockEdges.container(undefined, [{ head: row(), tail: header }])
    expect(container.tail).toBe(header)
    expect(OpenApiBlockEdges.container(undefined, []).tail).toEqual(row())
  })
})
