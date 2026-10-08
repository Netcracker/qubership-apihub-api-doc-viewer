import { OpenApiOAuthFlowType, OpenApiParameterLocation, OpenApiRequiredScopesKind } from "../types/node-value"

const SECURITY_SCHEME_TYPE_LABELS: Readonly<Record<string, string>> = {
  apiKey: 'API key',
  http: 'HTTP',
  oauth2: 'OAuth 2.0',
  openIdConnect: 'OpenID Connect',
  mutualTLS: 'Mutual TLS',
}

const OAUTH_FLOW_TITLES: Readonly<Record<OpenApiOAuthFlowType, string>> = {
  implicit: 'Implicit flow',
  password: 'Password flow',
  clientCredentials: 'Client credentials flow',
  authorizationCode: 'Authorization code flow',
}

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

  public static requiredScopesLabel(kind: OpenApiRequiredScopesKind): string {
    return kind === 'roles' ? 'Required roles' : 'Required scopes'
  }

  public static oauthFlowTitle(flowType: OpenApiOAuthFlowType): string {
    return OAUTH_FLOW_TITLES[flowType]
  }

  public static parameterGroupTitle(location: OpenApiParameterLocation): string {
    return PARAMETER_GROUP_TITLES[location]
  }
}
