import { DiffMetaKeys } from '../../../building-service/abstract/tree-with-diffs/node-diffs-data/diff-meta-keys'
import { BuildingServiceLogger } from '../../../loggers'
import { OperationKeys } from './operation-keys'

export type AsyncApiTreeBuilderParams = {
  source: unknown
  /**
   * Which operation to show. A single-version document is keyed by that version alone, so these
   * are simply *the* keys - there is no other side to fall back to.
   */
  operationKeys?: OperationKeys
  referenceNamePropertyKey: symbol
  logger?: BuildingServiceLogger
}

export type AsyncApiTreeWithDiffsBuilderParams = {
  source: unknown
  /**
   * The changed side's keys. A mapped node in a merged document is keyed by the after side, so
   * these resolve directly whenever the caller is looking at the current version.
   */
  operationKeys?: OperationKeys
  /**
   * The origin side's keys, for a caller that only has those - a link into the changelog, say.
   * Needed because an AsyncAPI generator embeds a hash of description text in its ids, so the same
   * entity can be named differently in the two versions being compared.
   *
   * Only meaningful here: a merged document is the one place two versions' keys coexist.
   */
  previousOperationKeys?: OperationKeys
  /**
   * api-diff's `beforeKeyProperty`: the before-key it recorded on every node it mapped. Named
   * exactly as api-diff names it - the existing `referenceNamePropertyKey` renames api-diff's
   * `firstReferenceKeyProperty`, and that alias costs more than it buys, so it is not repeated.
   */
  beforeKeyProperty?: symbol
  referenceNamePropertyKey: symbol
  diffsMetaKeys: DiffMetaKeys
  logger?: BuildingServiceLogger
}
