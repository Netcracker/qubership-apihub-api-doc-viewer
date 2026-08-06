import { OperationKeys } from "@apihub/next-data-model/shared/async-api/types/operation-keys";
import { BuildingServiceLogger } from "../../../loggers";

/**
 * How a pair of keys was arrived at.
 *
 * `kind` exists so a caller reading side-specific records - the diffs transformer - knows which
 * side the keys came from. `guessed` deliberately carries no side: the keys are a fallback pick,
 * not a match on anything the caller asked for, so no side-specific record may be attributed to it.
 *
 * A single union covering all four outcomes, rather than a union plus `null`: two error strategies
 * in one signature is one too many.
 */
export type KeyResolution =
  | { kind: "current"; keys: OperationKeys }
  | { kind: "previous"; keys: OperationKeys }
  | { kind: "guessed"; keys: OperationKeys }
  | { kind: "notFound" }

/**
 * One level of the lookup: the entries available at that level, and how to read an entry's own key
 * and the before-key api-diff recorded on it.
 *
 * Deliberately free of AsyncAPI vocabulary - it says nothing about operations or messages. The
 * caller supplies the extractors, so the resolution *order* below can be reused by any spec type
 * that locates an entity in a merged document by a caller-supplied key.
 */
export interface KeyCandidates {
  /** Entry keys as they appear in the merged document, in document order. */
  readonly keys: readonly string[]
  /** The before-key recorded on the entry under `key`, when it was mapped. */
  readonly beforeKeyOf: (key: string) => string | undefined
}

const findByOwnKey = (candidates: KeyCandidates, wanted: string): string | undefined =>
  candidates.keys.find(key => key === wanted)

const findByBeforeKey = (candidates: KeyCandidates, wanted: string): string | undefined =>
  candidates.keys.find(key => candidates.beforeKeyOf(key) === wanted)

/**
 * Resolves the keys an entity is actually stored under in a merged document.
 *
 * Order:
 * 1. the requested keys as the merged document's own keys - today's path, and the common one;
 * 2. the requested keys matched against the before-keys api-diff recorded. An **exact** lookup of
 *    "the entry whose before-key was X", not a heuristic, which is what makes this incapable of
 *    drifting from api-diff's decision;
 * 3. the first entry at each level, which is a guess and says so;
 * 4. nothing.
 *
 * Both `operationKeys` and `previousOperationKeys` are tried at step 2, since a caller may hold
 * either side's keys and the merged document is keyed by neither in particular once ids change.
 */
export const resolveOperationKeys = (
  operationCandidates: KeyCandidates,
  messageCandidatesFor: (operationKey: string) => KeyCandidates,
  requested: {
    readonly operationKeys?: OperationKeys
    readonly previousOperationKeys?: OperationKeys
  },
  logger: BuildingServiceLogger,
): KeyResolution => {
  const { operationKeys, previousOperationKeys } = requested

  for (const [kind, wanted] of [
    ["current", operationKeys],
    ["previous", previousOperationKeys],
  ] as const) {
    if (!wanted) {
      continue
    }
    // Own key first for both sides: a caller holding previous-side keys still matches directly
    // whenever those ids did not change, which is the overwhelmingly common case.
    const operationKey = findByOwnKey(operationCandidates, wanted.operationKey)
      ?? findByBeforeKey(operationCandidates, wanted.operationKey)
    if (operationKey === undefined) {
      continue
    }
    const messageCandidates = messageCandidatesFor(operationKey)
    const messageKey = findByOwnKey(messageCandidates, wanted.messageKey)
      ?? findByBeforeKey(messageCandidates, wanted.messageKey)
    if (messageKey === undefined) {
      continue
    }
    return { kind, keys: { operationKey, messageKey } }
  }

  if (operationKeys ?? previousOperationKeys) {
    logger.error(
      "Cannot locate the requested operation in the source by either its own key or its before-key. " +
      "Falling back to the first operation and message.",
    )
  } else {
    logger.error("Operation key or message key is not provided. Looking for first operation and message in source...")
  }

  const [firstOperationKey] = operationCandidates.keys
  if (firstOperationKey === undefined) {
    logger.error("Cannot find first operation in source.")
    return { kind: "notFound" }
  }
  const [firstMessageKey] = messageCandidatesFor(firstOperationKey).keys
  if (firstMessageKey === undefined) {
    logger.error("Cannot find first operation message key in source.")
    return { kind: "notFound" }
  }
  return { kind: "guessed", keys: { operationKey: firstOperationKey, messageKey: firstMessageKey } }
}
