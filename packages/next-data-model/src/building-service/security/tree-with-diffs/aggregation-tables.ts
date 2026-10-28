import { NodeDiffsSeverityPlacemennt } from "../../../model/abstract/tree-with-diffs/tree-node.interface"
import { SECURITY_ALTERNATIVES_DIFF_KEY } from "../../../model/security/tree-with-diffs/diff-keys"
import { SecurityTreeNodeKind, SecurityTreeNodeKinds } from "../../../model/security/types/node-kind"
import { SECURITY_NODE_VALUE_PROPS } from "../../../model/security/types/node-value"
import { RecordDrivenFieldPlacements } from "../../abstract/tree-with-diffs/node-diffs-data/record-driven-aggregators"

const Placement = NodeDiffsSeverityPlacemennt

/** Field diffs that are not value props: synthetic row diffs written by the security with-diffs builders. */
export const SECURITY_SYNTHETIC_FIELD_DIFF_KEYS: Readonly<Partial<Record<SecurityTreeNodeKind, readonly string[]>>> = {
  [SecurityTreeNodeKinds.SECURITY]: [SECURITY_ALTERNATIVES_DIFF_KEY],
}

/** Field diff -> the row it belongs to. One placement per row instance. */
export const SECURITY_FIELD_PLACEMENTS: Readonly<Partial<Record<SecurityTreeNodeKind, RecordDrivenFieldPlacements>>> = {
  [SecurityTreeNodeKinds.SECURITY]: {
    // The `Optional` badge (anonymous access) sits in the section title row.
    allowsAnonymous: Placement.TitleRow,
    [SECURITY_ALTERNATIVES_DIFF_KEY]: Placement.SelectorRow,
  },
  [SecurityTreeNodeKinds.SECURITY_SCHEME]: {
    type: Placement.TitleRow,
    description: Placement.DescriptionRow,
    // The parameter-name row (OpenAPI `apiKey`, AsyncAPI `httpApiKey`) or the API key location row
    // (AsyncAPI `apiKey`): one of them per scheme type, so they share the placement.
    in: Placement.SecuritySchemeParameterNameRow,
    parameterName: Placement.SecuritySchemeParameterNameRow,
    scheme: Placement.SecuritySchemeHttpSchemeRow,
    bearerFormat: Placement.SecuritySchemeBearerFormatRow,
    openIdConnectUrl: Placement.SecuritySchemeOpenIdConnectUrlRow,
    requiredScopes: Placement.SecurityRequiredScopesRow,
  },
  [SecurityTreeNodeKinds.OAUTH_FLOW]: {
    authorizationUrl: Placement.OAuthFlowAuthorizationUrlRow,
    tokenUrl: Placement.OAuthFlowTokenUrlRow,
    refreshUrl: Placement.OAuthFlowRefreshUrlRow,
    scopes: Placement.OAuthFlowScopesRow,
  },
}

/** Rows a node renders: a whole add / remove badges each of them. */
export const SECURITY_NODE_PLACEMENTS: Readonly<Partial<Record<SecurityTreeNodeKind, readonly NodeDiffsSeverityPlacemennt[]>>> = {
  [SecurityTreeNodeKinds.SECURITY]: [Placement.TitleRow, Placement.SelectorRow],
  [SecurityTreeNodeKinds.SECURITY_SCHEME]: [
    Placement.TitleRow,
    Placement.DescriptionRow,
    Placement.SecuritySchemeParameterNameRow,
    Placement.SecuritySchemeHttpSchemeRow,
    Placement.SecuritySchemeBearerFormatRow,
    Placement.SecuritySchemeOpenIdConnectUrlRow,
    Placement.SecurityRequiredScopesRow,
  ],
  [SecurityTreeNodeKinds.OAUTH_FLOW]: [
    Placement.TitleRow,
    Placement.OAuthFlowAuthorizationUrlRow,
    Placement.OAuthFlowTokenUrlRow,
    Placement.OAuthFlowRefreshUrlRow,
    Placement.OAuthFlowScopesRow,
  ],
}

/** The diffs a security node aggregates: its value props and its synthetic row keys. */
export function securityFieldDiffKeys(kind: SecurityTreeNodeKind): readonly string[] {
  return [...SECURITY_NODE_VALUE_PROPS[kind], ...(SECURITY_SYNTHETIC_FIELD_DIFF_KEYS[kind] ?? [])]
}
