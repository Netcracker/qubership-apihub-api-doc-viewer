import { DisplayMode } from "../abstract/display-mode"
import { isDetailedDisplayMode } from "../abstract/guards/display-mode"
import { SecurityTreeNodeValueTypeOAuthFlow, SecurityTreeNodeValueTypeScheme } from "./types/node-value"

export type SecuritySchemeRowVisibility = {
  readonly showDescription: boolean
  /** `<Place> parameter name  <name>` (OpenAPI `apiKey`, AsyncAPI `httpApiKey`). */
  readonly showParameterName: boolean
  /** `API key location  User / Password` (AsyncAPI `apiKey`). */
  readonly showApiKeyLocation: boolean
  readonly showHttpScheme: boolean
  readonly showBearerFormat: boolean
  readonly showOpenIdConnectUrl: boolean
  /** The scheme's own `Scopes ▾` / `Roles ▾` list of required scopes (rows with `*`); hidden for `ignored` kinds. */
  readonly showRequiredScopeList: boolean
  readonly showUnresolved: boolean
}

export type SecurityOAuthFlowRowVisibility = {
  readonly showAuthorizationUrl: boolean
  readonly showTokenUrl: boolean
  readonly showRefreshUrl: boolean
  readonly showScopes: boolean
}

function hasText(value: unknown): boolean {
  return typeof value === 'string' && value.length > 0
}

/**
 * Row visibility of a security card. Works for plain and merged trees alike: a merged node value
 * keeps removed values, so "has content on either side" is "has a merged value". Detail rows are
 * `detailed`-mode only; titles always show. Each API type says which scheme types carry which rows.
 */
export abstract class SecurityNodeVisibility {
  /** Scheme types with a parameter name (`name` + `in`). */
  protected abstract readonly parameterNameTypes: ReadonlySet<string>
  /** Scheme types whose `in` is an API key location (no name). */
  protected abstract readonly apiKeyLocationTypes: ReadonlySet<string>

  public resolveSecurityScheme(value: SecurityTreeNodeValueTypeScheme | null, displayMode: DisplayMode): SecuritySchemeRowVisibility {
    const detailed = isDetailedDisplayMode(displayMode)
    const type = value?.type ?? ''
    return {
      showDescription: detailed && hasText(value?.description),
      showParameterName: detailed && this.parameterNameTypes.has(type) && hasText(value?.parameterName),
      showApiKeyLocation: detailed && this.apiKeyLocationTypes.has(type) && hasText(value?.in),
      showHttpScheme: detailed && type === 'http' && hasText(value?.scheme),
      showBearerFormat: detailed && type === 'http' && hasText(value?.bearerFormat),
      showOpenIdConnectUrl: detailed && type === 'openIdConnect' && hasText(value?.openIdConnectUrl),
      showRequiredScopeList: detailed && !!value && value.requiredScopesKind !== 'ignored',
      showUnresolved: !!value && !value.isResolved,
    }
  }

  public resolveOAuthFlow(value: SecurityTreeNodeValueTypeOAuthFlow | null, displayMode: DisplayMode): SecurityOAuthFlowRowVisibility {
    const detailed = isDetailedDisplayMode(displayMode)
    return {
      showAuthorizationUrl: detailed && hasText(value?.authorizationUrl),
      showTokenUrl: detailed && hasText(value?.tokenUrl),
      showRefreshUrl: detailed && hasText(value?.refreshUrl),
      showScopes: detailed && Object.keys(value?.scopes ?? {}).length > 0,
    }
  }
}
