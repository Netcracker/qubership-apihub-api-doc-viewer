import { ITreeNodeWithDiffs } from "../../../../../model/abstract/tree-with-diffs/tree-node.interface"
import { OPENAPI_MEDIA_TYPE_OPTIONS_DIFF_KEY, OPENAPI_RESPONSE_OPTIONS_DIFF_KEY } from "../../../../../model/openapi/tree-with-diffs/diff-keys"
import { OpenApiTreeNodeKind, OpenApiTreeNodeKinds } from "../../../../../model/openapi/types/node-kind"
import { OpenApiTreeNodeMeta } from "../../../../../model/openapi/types/node-meta"
import { OpenApiAnyTreeNodeValue } from "../../../../../model/openapi/types/node-value"
import { RecordDrivenNodeDiffsAggregator } from "../../../../abstract/tree-with-diffs/node-diffs-data/record-driven-aggregators"
import { SECURITY_SYNTHETIC_FIELD_DIFF_KEYS } from "../../../../security/tree-with-diffs/aggregation-tables"
import { OPENAPI_NODE_VALUE_PROPS } from "../../../tree/node-data/builder"

/** Field diffs that are not value props: synthetic row diffs written by the with-diffs transformer. */
const SYNTHETIC_FIELD_DIFF_KEYS: Readonly<Partial<Record<OpenApiTreeNodeKind, readonly string[]>>> = {
  ...SECURITY_SYNTHETIC_FIELD_DIFF_KEYS,
  [OpenApiTreeNodeKinds.REQUEST_BODY]: [OPENAPI_MEDIA_TYPE_OPTIONS_DIFF_KEY],
  [OpenApiTreeNodeKinds.CONTENT]: [OPENAPI_MEDIA_TYPE_OPTIONS_DIFF_KEY],
  [OpenApiTreeNodeKinds.RESPONSES]: [OPENAPI_RESPONSE_OPTIONS_DIFF_KEY],
}

type OpenApiValue = OpenApiAnyTreeNodeValue | null
export type OpenApiTreeNodeWithDiffsForAggregation = ITreeNodeWithDiffs<OpenApiValue, OpenApiTreeNodeKind, OpenApiTreeNodeMeta, OpenApiValue>

/**
 * One record-driven aggregator serves every OpenAPI kind: all kind-specific diff semantics are
 * prepared by `OpenApiSpecWithDiffsTransformer`; row-level composition lives in `OpenApiRowDiffs` /
 * `SecurityRowDiffs`. A kind aggregates its value props and its synthetic row keys.
 */
export class OpenApiNodeDiffsAggregatorKindAny extends RecordDrivenNodeDiffsAggregator<OpenApiValue, OpenApiTreeNodeKind, OpenApiTreeNodeMeta> {
  constructor(protected readonly kind: OpenApiTreeNodeKind) {
    super([...OPENAPI_NODE_VALUE_PROPS[kind], ...(SYNTHETIC_FIELD_DIFF_KEYS[kind] ?? [])])
  }
}
