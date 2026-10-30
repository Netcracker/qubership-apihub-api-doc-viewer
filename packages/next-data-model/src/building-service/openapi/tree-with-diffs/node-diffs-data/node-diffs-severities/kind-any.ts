import { NodeDiffsSeverityPlacemennt } from "../../../../../model/abstract/tree-with-diffs/tree-node.interface"
import { OPENAPI_MEDIA_TYPE_OPTIONS_DIFF_KEY, OPENAPI_RESPONSE_OPTIONS_DIFF_KEY } from "../../../../../model/openapi/tree-with-diffs/diff-keys"
import { OpenApiTreeNodeKind, OpenApiTreeNodeKinds } from "../../../../../model/openapi/types/node-kind"
import { OpenApiAnyTreeNodeValue } from "../../../../../model/openapi/types/node-value"
import { FieldPlacements } from "../../../../../model/abstract/tree-with-diffs/field-placements"
import { RecordDrivenNodeDiffsSeveritiesAggregator } from "../../../../abstract/tree-with-diffs/node-diffs-data/record-driven-aggregators"
import { SECURITY_FIELD_PLACEMENTS, SECURITY_NODE_PLACEMENTS } from "../../../../../model/security/tree-with-diffs/placements"

const Placement = NodeDiffsSeverityPlacemennt

/** Field diff -> the row it belongs to. One placement per row instance (D7). */
const FIELD_PLACEMENTS: Readonly<Partial<Record<OpenApiTreeNodeKind, FieldPlacements>>> = {
  ...SECURITY_FIELD_PLACEMENTS,
  [OpenApiTreeNodeKinds.OPERATION]: {
    title: Placement.TitleRow,
    // The `deprecated` tag sits on the title row, else the operation ID row, else the address row
    // (view-dependent: `noHeading`): every candidate gets a placement with the tag merged in.
    deprecated: [Placement.TitleRow, Placement.OperationIdRowWithDeprecatedTag, Placement.AddressRowWithDeprecatedTag],
    operationId: [Placement.OperationIdRow, Placement.OperationIdRowWithDeprecatedTag],
    path: [Placement.AddressRow, Placement.AddressRowWithDeprecatedTag],
    externalDocs: Placement.ExternalDocsRow,
    description: Placement.DescriptionRow,
  },
  [OpenApiTreeNodeKinds.REQUEST_BODY]: {
    required: Placement.TitleRow,
    // The media-type selector sits in the Body title row.
    [OPENAPI_MEDIA_TYPE_OPTIONS_DIFF_KEY]: Placement.TitleRow,
    description: Placement.DescriptionRow,
  },
  [OpenApiTreeNodeKinds.CONTENT]: {
    [OPENAPI_MEDIA_TYPE_OPTIONS_DIFF_KEY]: Placement.TitleRow,
  },
  [OpenApiTreeNodeKinds.RESPONSES]: {
    // The response-code selector sits in the Responses title row.
    [OPENAPI_RESPONSE_OPTIONS_DIFF_KEY]: Placement.TitleRow,
  },
  [OpenApiTreeNodeKinds.RESPONSE]: {
    description: Placement.DescriptionRow,
  },
}

/** Rows a node renders: a whole add / remove badges each of them. */
const NODE_PLACEMENTS: Readonly<Partial<Record<OpenApiTreeNodeKind, readonly NodeDiffsSeverityPlacemennt[]>>> = {
  ...SECURITY_NODE_PLACEMENTS,
  [OpenApiTreeNodeKinds.OPERATION]: [
    Placement.TitleRow,
    Placement.OperationIdRow,
    Placement.OperationIdRowWithDeprecatedTag,
    Placement.AddressRow,
    Placement.AddressRowWithDeprecatedTag,
    Placement.ExternalDocsRow,
    Placement.DescriptionRow,
  ],
  [OpenApiTreeNodeKinds.REQUEST_BODY]: [Placement.TitleRow, Placement.DescriptionRow],
  [OpenApiTreeNodeKinds.RESPONSE]: [Placement.DescriptionRow],
}

/** Severities of every OpenAPI kind from its placement tables (the Security kinds' are shared). */
export class OpenApiNodeDiffsSeveritiesAggregatorKindAny extends RecordDrivenNodeDiffsSeveritiesAggregator<OpenApiAnyTreeNodeValue | null> {
  constructor(kind: OpenApiTreeNodeKind) {
    super(FIELD_PLACEMENTS[kind] ?? {}, NODE_PLACEMENTS[kind] ?? [NodeDiffsSeverityPlacemennt.TitleRow])
  }
}
