import {
  KeyCandidates,
  resolveOperationKeys,
} from '../src/building-service/async-api/shared/async-api-key-resolution'
import { BuildingServiceLogger } from '../src/loggers'

/**
 * Locating an operation in a *merged* document. A mapped node is keyed by the after side, so a
 * caller holding the previous version's keys - a link out of a changelog - finds nothing by own
 * key whenever a generated id changed. api-diff records what it mapped, and this reads that
 * decision rather than guessing.
 */

const silentLogger = (): BuildingServiceLogger => ({
  debug: () => undefined,
  error: () => undefined,
} as unknown as BuildingServiceLogger)

/** `key -> beforeKey`; a `null` before-key models a node api-diff added rather than mapped. */
const candidates = (entries: Record<string, string | null>): KeyCandidates => ({
  keys: Object.keys(entries),
  beforeKeyOf: (key) => entries[key] ?? undefined,
})

const MERGED_OPERATIONS = candidates({ sendOrder_2002: 'sendOrder_1001' })
const MERGED_MESSAGES = candidates({ OrderEvent_2002: 'OrderEvent_1001' })
const messagesFor = (): KeyCandidates => MERGED_MESSAGES

describe('resolveOperationKeys', () => {
  it('matches the merged documents own keys', () => {
    const resolution = resolveOperationKeys(
      MERGED_OPERATIONS,
      messagesFor,
      { operationKeys: { operationKey: 'sendOrder_2002', messageKey: 'OrderEvent_2002' } },
      silentLogger(),
    )

    expect(resolution).toEqual({
      kind: 'current',
      keys: { operationKey: 'sendOrder_2002', messageKey: 'OrderEvent_2002' },
    })
  })

  it('matches previous-side keys against the recorded before-keys', () => {
    // The whole point: the caller knows only the ids the previous version used, and the merged
    // document is keyed by the new ones.
    const resolution = resolveOperationKeys(
      MERGED_OPERATIONS,
      messagesFor,
      { previousOperationKeys: { operationKey: 'sendOrder_1001', messageKey: 'OrderEvent_1001' } },
      silentLogger(),
    )

    expect(resolution).toEqual({
      kind: 'previous',
      keys: { operationKey: 'sendOrder_2002', messageKey: 'OrderEvent_2002' },
    })
  })

  it('prefers the current side when both are given', () => {
    const resolution = resolveOperationKeys(
      MERGED_OPERATIONS,
      messagesFor,
      {
        operationKeys: { operationKey: 'sendOrder_2002', messageKey: 'OrderEvent_2002' },
        previousOperationKeys: { operationKey: 'sendOrder_1001', messageKey: 'OrderEvent_1001' },
      },
      silentLogger(),
    )

    expect(resolution.kind).toBe('current')
  })

  it('falls back to the before-key when the current-side keys are stale', () => {
    // In comparison mode the merged document is keyed by the after side, so `operationKeys` is
    // normally the right first guess - but a caller that has them from the previous version still
    // resolves, and is reported as `current` because that is the argument that matched.
    const resolution = resolveOperationKeys(
      MERGED_OPERATIONS,
      messagesFor,
      { operationKeys: { operationKey: 'sendOrder_1001', messageKey: 'OrderEvent_1001' } },
      silentLogger(),
    )

    expect(resolution).toEqual({
      kind: 'current',
      keys: { operationKey: 'sendOrder_2002', messageKey: 'OrderEvent_2002' },
    })
  })

  it('guesses the first entry when nothing matches, and says it guessed', () => {
    // `guessed` carries no side on purpose: the transformer must not attribute one side's diff
    // records to a node nobody asked for.
    const resolution = resolveOperationKeys(
      MERGED_OPERATIONS,
      messagesFor,
      { operationKeys: { operationKey: 'nothingLikeThis', messageKey: 'norThis' } },
      silentLogger(),
    )

    expect(resolution).toEqual({
      kind: 'guessed',
      keys: { operationKey: 'sendOrder_2002', messageKey: 'OrderEvent_2002' },
    })
  })

  it('guesses when no keys are requested at all', () => {
    const resolution = resolveOperationKeys(MERGED_OPERATIONS, messagesFor, {}, silentLogger())

    expect(resolution.kind).toBe('guessed')
  })

  it('reports notFound when there is nothing to guess', () => {
    const empty = candidates({})

    expect(resolveOperationKeys(empty, () => empty, {}, silentLogger())).toEqual({ kind: 'notFound' })
  })

  it('reports notFound when an operation has no messages', () => {
    const noMessages = candidates({})

    expect(resolveOperationKeys(MERGED_OPERATIONS, () => noMessages, {}, silentLogger()))
      .toEqual({ kind: 'notFound' })
  })

  it('does not match an added node, which has no before-key', () => {
    // Absence of a before-key means exactly "this node was added", so previous-side keys must not
    // resolve onto it.
    const withAdded = candidates({ sendOrder_2002: null })

    const resolution = resolveOperationKeys(
      withAdded,
      messagesFor,
      { previousOperationKeys: { operationKey: 'sendOrder_1001', messageKey: 'OrderEvent_1001' } },
      silentLogger(),
    )

    expect(resolution.kind).toBe('guessed')
  })
})
