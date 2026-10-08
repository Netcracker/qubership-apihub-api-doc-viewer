import { DisplayMode } from "../abstract/display-mode"
import { isDetailedDisplayMode } from "../abstract/guards/display-mode"
import {
  OpenApiTreeNodeValueTypeOAuthFlow,
  OpenApiTreeNodeValueTypeOperation,
  OpenApiTreeNodeValueTypeRequestBody,
  OpenApiTreeNodeValueTypeResponse,
  OpenApiTreeNodeValueTypeSecurityScheme,
} from "./types/node-value"

export type OpenApiOperationRowVisibility = {
  readonly showTitle: boolean
  readonly showOperationId: boolean
  readonly showExternalDocs: boolean
  readonly showDescription: boolean
}

export type OpenApiSecuritySchemeRowVisibility = {
  readonly showDescription: boolean
  readonly showLocation: boolean
  readonly showParameterName: boolean
  readonly showHttpScheme: boolean
  readonly showBearerFormat: boolean
  readonly showOpenIdConnectUrl: boolean
  readonly showRequiredScopes: boolean
  readonly showUnresolved: boolean
}

export type OpenApiOAuthFlowRowVisibility = {
  readonly showAuthorizationUrl: boolean
  readonly showTokenUrl: boolean
  readonly showRefreshUrl: boolean
  readonly showScopes: boolean
}

function hasText(value: unknown): boolean {
  return typeof value === 'string' && value.length > 0
}

/**
 * Row visibility of the OpenAPI layer. Works for plain and merged trees alike: a merged node value
 * keeps removed values (E18), so "has content on either side" is "has a merged value".
 * Design: docs/design/openapi/features/diffs.md -> "Row visibility".
 */
export class OpenApiNodeVisibility {
  public static resolveOperation(value: OpenApiTreeNodeValueTypeOperation | null, noHeading: boolean): OpenApiOperationRowVisibility {
    return {
      showTitle: !noHeading && hasText(value?.title),
      showOperationId: hasText(value?.operationId),
      showExternalDocs: hasText(value?.externalDocs?.url),
      showDescription: hasText(value?.description),
    }
  }

  /** Detail rows of a security card are `detailed`-mode only; titles always show. */
  public static resolveSecurityScheme(value: OpenApiTreeNodeValueTypeSecurityScheme | null, displayMode: DisplayMode): OpenApiSecuritySchemeRowVisibility {
    const detailed = isDetailedDisplayMode(displayMode)
    return {
      showDescription: detailed && hasText(value?.description),
      showLocation: detailed && value?.type === 'apiKey' && hasText(value.in),
      showParameterName: detailed && value?.type === 'apiKey' && hasText(value.parameterName),
      showHttpScheme: detailed && value?.type === 'http' && hasText(value.scheme),
      showBearerFormat: detailed && value?.type === 'http' && hasText(value.bearerFormat),
      showOpenIdConnectUrl: detailed && value?.type === 'openIdConnect' && hasText(value.openIdConnectUrl),
      showRequiredScopes: detailed && !!value && value.requiredScopesKind !== 'ignored' && value.requiredScopes.length > 0,
      showUnresolved: !!value && !value.isResolved,
    }
  }

  public static resolveOAuthFlow(value: OpenApiTreeNodeValueTypeOAuthFlow | null, displayMode: DisplayMode): OpenApiOAuthFlowRowVisibility {
    const detailed = isDetailedDisplayMode(displayMode)
    return {
      showAuthorizationUrl: detailed && hasText(value?.authorizationUrl),
      showTokenUrl: detailed && hasText(value?.tokenUrl),
      showRefreshUrl: detailed && hasText(value?.refreshUrl),
      showScopes: detailed && Object.keys(value?.scopes ?? {}).length > 0,
    }
  }

  public static showRequestBodyDescription(value: OpenApiTreeNodeValueTypeRequestBody | null): boolean {
    return hasText(value?.description)
  }

  public static showResponseDescription(value: OpenApiTreeNodeValueTypeResponse | null): boolean {
    return hasText(value?.description)
  }
}
