import { OpenApiOAuthFlowType, OpenApiParameterLocation, OpenApiRequiredScopesKind } from "../types/node-value"

const SECURITY_SCHEME_TYPE_LABELS: Readonly<Record<string, string>> = {
  apiKey: 'API key',
  http: 'HTTP',
  oauth2: 'OAuth 2.0',
  openIdConnect: 'OpenID Connect',
  mutualTLS: 'Mutual TLS',
}

const OAUTH_FLOW_NAMES: Readonly<Record<OpenApiOAuthFlowType, string>> = {
  implicit: 'Implicit',
  password: 'Password',
  clientCredentials: 'Client Credentials',
  authorizationCode: 'Authorization Code',
}

const API_KEY_LOCATION_LABELS: Readonly<Record<string, string>> = {
  header: 'Header',
  query: 'Query',
  cookie: 'Cookie',
  path: 'Path',
}

/** Labels of the security props (label / value rows of a security scheme card). */
export const OPENAPI_SECURITY_PROP_LABELS = {
  httpAuthorizationScheme: 'HTTP Authorization Scheme',
  bearerFormat: 'Bearer Format',
  openIdConnectUrl: 'OpenID Connect URL',
  authorizationUrl: 'Authorization URL',
  tokenUrl: 'Token URL',
  refreshUrl: 'Refresh URL',
  scopes: 'Scopes',
  roles: 'Roles',
} as const

/** apiKey prop label split into the place word (from `in`) and the common rest: `Header` + ` parameter name`. */
export type OpenApiApiKeyParameterNameLabel = {
  readonly place: string
  readonly suffix: string
}

const API_KEY_PARAMETER_NAME_LABEL_SUFFIX = ' parameter name'

/** Plain text before the bold flow name in a flow part header: `Flow type **Authorization Code**`. */
export const OPENAPI_OAUTH_FLOW_HEADER_PREFIX = 'Flow type'

const PARAMETER_GROUP_TITLES: Readonly<Record<OpenApiParameterLocation, string>> = {
  path: 'Path Parameters',
  query: 'Query Parameters',
  header: 'Headers',
  cookie: 'Cookies',
}

export const OPENAPI_NO_AUTHENTICATION_TITLE = 'No authentication'
export const OPENAPI_NO_AUTHENTICATION_TEXT = 'Authentication is not required.'
export const OPENAPI_UNRESOLVED_SECURITY_SCHEME_TEXT = 'Security scheme is not defined in components.'

/** Display labels of the OpenAPI layer, resolved in the data layer (never in JSX). */
export class OpenApiDisplayLabels {
  /** Option title of a security alternative: scheme names joined with ` + `. */
  public static securityRequirementTitle(schemeNames: readonly string[]): string {
    return schemeNames.length === 0 ? OPENAPI_NO_AUTHENTICATION_TITLE : schemeNames.join(' + ')
  }

  public static securitySchemeType(type: string | undefined): string | undefined {
    return type === undefined ? undefined : SECURITY_SCHEME_TYPE_LABELS[type] ?? type
  }

  /** Label of a scheme's own list of required scopes: `Roles` for OAS 3.1 roles, else `Scopes`. */
  public static requiredScopeListLabel(kind: OpenApiRequiredScopesKind): string {
    return kind === 'roles' ? OPENAPI_SECURITY_PROP_LABELS.roles : OPENAPI_SECURITY_PROP_LABELS.scopes
  }


  /** Bold part of a flow part header (`Flow type **Authorization Code**`). */
  public static oauthFlowName(flowType: OpenApiOAuthFlowType): string {
    return OAUTH_FLOW_NAMES[flowType]
  }

  /** apiKey prop label from `in`: `Header parameter name`, `Query parameter name`, … */
  public static apiKeyParameterNameLabel(location: string | undefined): OpenApiApiKeyParameterNameLabel {
    const place = location === undefined ? undefined : API_KEY_LOCATION_LABELS[location]
    return { place: place ?? 'API key', suffix: API_KEY_PARAMETER_NAME_LABEL_SUFFIX }
  }

  public static parameterGroupTitle(location: OpenApiParameterLocation): string {
    return PARAMETER_GROUP_TITLES[location]
  }
}
