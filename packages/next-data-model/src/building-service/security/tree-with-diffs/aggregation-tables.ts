import { SECURITY_ALTERNATIVES_DIFF_KEY } from "../../../model/security/tree-with-diffs/diff-keys"
import { SecurityTreeNodeKind, SecurityTreeNodeKinds } from "../../../model/security/types/node-kind"
import { SECURITY_NODE_VALUE_PROPS } from "../../../model/security/types/node-value"

// The placement tables the aggregators fill live in the model (`model/security/tree-with-diffs/placements.ts`):
// the card rows read the same tables.

/** Field diffs that are not value props: synthetic row diffs written by the security with-diffs builders. */
export const SECURITY_SYNTHETIC_FIELD_DIFF_KEYS: Readonly<Partial<Record<SecurityTreeNodeKind, readonly string[]>>> = {
  [SecurityTreeNodeKinds.SECURITY]: [SECURITY_ALTERNATIVES_DIFF_KEY],
}

/** The diffs a security node aggregates: its value props and its synthetic row keys. */
export function securityFieldDiffKeys(kind: SecurityTreeNodeKind): readonly string[] {
  return [...SECURITY_NODE_VALUE_PROPS[kind], ...(SECURITY_SYNTHETIC_FIELD_DIFF_KEYS[kind] ?? [])]
}
