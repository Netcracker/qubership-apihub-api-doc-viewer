import { Diff, isDiffAdd, isDiffRemove } from "@netcracker/qubership-apihub-api-diff"
import {
  NODE_LEVEL_DIFF_KEY,
  NodeDiffs,
  NodeDiffsSeverities,
  NodeDiffsSeverity,
  NodeDiffsSeverityPlacemennt,
} from "../../../../../model/abstract/tree-with-diffs/tree-node.interface"
import { OpenApiTreeNodeKind, OpenApiTreeNodeKinds } from "../../../../../model/openapi/types/node-kind"
import { OpenApiAnyTreeNodeValue } from "../../../../../model/openapi/types/node-value"
import { AbstractNodeDiffsSeveritiesAggregator } from "../../../../abstract/tree-with-diffs/node-diffs-data/node-diffs-severities-aggregator"

type FieldPlacements = Readonly<Record<string, NodeDiffsSeverityPlacemennt>>

const Placement = NodeDiffsSeverityPlacemennt

/** Field diff -> the row it belongs to. One placement per row instance (D7). */
const FIELD_PLACEMENTS: Readonly<Partial<Record<OpenApiTreeNodeKind, FieldPlacements>>> = {
  [OpenApiTreeNodeKinds.OPERATION]: {
    title: Placement.TitleRow,
    deprecated: Placement.TitleRow,
    operationId: Placement.OperationIdRow,
    path: Placement.AddressRow,
    externalDocs: Placement.ExternalDocsRow,
    description: Placement.DescriptionRow,
  },
  [OpenApiTreeNodeKinds.REQUEST_BODY]: {
    required: Placement.TitleRow,
    description: Placement.DescriptionRow,
  },
  [OpenApiTreeNodeKinds.RESPONSE]: {
    description: Placement.DescriptionRow,
  },
  [OpenApiTreeNodeKinds.SECURITY_SCHEME]: {
    type: Placement.TitleRow,
    description: Placement.DescriptionRow,
    in: Placement.SecuritySchemeLocationRow,
    parameterName: Placement.SecuritySchemeParameterNameRow,
    scheme: Placement.SecuritySchemeHttpSchemeRow,
    bearerFormat: Placement.SecuritySchemeBearerFormatRow,
    openIdConnectUrl: Placement.SecuritySchemeOpenIdConnectUrlRow,
    requiredScopes: Placement.SecurityRequiredScopesRow,
  },
  [OpenApiTreeNodeKinds.OAUTH_FLOW]: {
    authorizationUrl: Placement.OAuthFlowAuthorizationUrlRow,
    tokenUrl: Placement.OAuthFlowTokenUrlRow,
    refreshUrl: Placement.OAuthFlowRefreshUrlRow,
    scopes: Placement.OAuthFlowScopesRow,
  },
}

/** Rows a node renders: a whole add / remove badges each of them. */
const NODE_PLACEMENTS: Readonly<Partial<Record<OpenApiTreeNodeKind, readonly NodeDiffsSeverityPlacemennt[]>>> = {
  [OpenApiTreeNodeKinds.OPERATION]: [Placement.TitleRow, Placement.OperationIdRow, Placement.AddressRow, Placement.ExternalDocsRow, Placement.DescriptionRow],
  [OpenApiTreeNodeKinds.SECURITY]: [Placement.TitleRow, Placement.SelectorRow],
  [OpenApiTreeNodeKinds.REQUEST_BODY]: [Placement.TitleRow, Placement.DescriptionRow],
  [OpenApiTreeNodeKinds.RESPONSE]: [Placement.DescriptionRow],
  [OpenApiTreeNodeKinds.SECURITY_SCHEME]: [
    Placement.TitleRow,
    Placement.DescriptionRow,
    Placement.SecuritySchemeLocationRow,
    Placement.SecuritySchemeParameterNameRow,
    Placement.SecuritySchemeHttpSchemeRow,
    Placement.SecuritySchemeBearerFormatRow,
    Placement.SecuritySchemeOpenIdConnectUrlRow,
    Placement.SecurityRequiredScopesRow,
  ],
  [OpenApiTreeNodeKinds.OAUTH_FLOW]: [
    Placement.TitleRow,
    Placement.OAuthFlowAuthorizationUrlRow,
    Placement.OAuthFlowTokenUrlRow,
    Placement.OAuthFlowRefreshUrlRow,
    Placement.OAuthFlowScopesRow,
  ],
}

export class OpenApiNodeDiffsSeveritiesAggregatorKindAny extends AbstractNodeDiffsSeveritiesAggregator<OpenApiAnyTreeNodeValue | null> {
  constructor(private readonly kind: OpenApiTreeNodeKind) {
    super()
  }

  public aggregate(nodeDiffs: NodeDiffs<OpenApiAnyTreeNodeValue | null>): NodeDiffsSeverities | undefined {
    const severities: NodeDiffsSeverities = {}
    const wholeDiff = nodeDiffs[NODE_LEVEL_DIFF_KEY]?.data
    if (wholeDiff && (isDiffAdd(wholeDiff) || isDiffRemove(wholeDiff))) {
      for (const placement of NODE_PLACEMENTS[this.kind] ?? [Placement.TitleRow]) {
        severities[placement] = OpenApiNodeDiffsSeveritiesAggregatorKindAny.toSeverity(wholeDiff)
      }
      return severities
    }
    if (wholeDiff) {
      severities[Placement.TitleRow] = OpenApiNodeDiffsSeveritiesAggregatorKindAny.toSeverity(wholeDiff)
    }
    const placements = FIELD_PLACEMENTS[this.kind] ?? {}
    for (const [field, placement] of Object.entries(placements)) {
      const diff: Diff | undefined = Reflect.get(nodeDiffs, field)?.data
      if (!diff) {
        continue
      }
      const current = severities[placement]
      if (!current || AbstractNodeDiffsSeveritiesAggregator.compareDiffTypes(diff.type, current.type) > 0) {
        severities[placement] = OpenApiNodeDiffsSeveritiesAggregatorKindAny.toSeverity(diff)
      }
    }
    return Object.keys(severities).length > 0 ? severities : undefined
  }

  private static toSeverity(diff: Diff): NodeDiffsSeverity {
    const causedAt = isDiffAdd(diff)
      ? diff.afterDeclarationPaths[0]
      : 'beforeDeclarationPaths' in diff ? diff.beforeDeclarationPaths[0] : undefined
    return { type: diff.type, causedAt: causedAt ?? [] }
  }
}
