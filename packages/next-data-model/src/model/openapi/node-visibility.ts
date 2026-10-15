import { DisplayMode } from "../abstract/display-mode"
import { isDetailedDisplayMode } from "../abstract/guards/display-mode"
import {
  OpenApiTreeNodeValueTypeOAuthFlow,
  OpenApiTreeNodeValueTypeOperation,
  OpenApiTreeNodeValueTypeRequestBody,
  OpenApiTreeNodeValueTypeResponse,
  OpenApiTreeNodeValueTypeSecurityScheme,
} from "./types/node-value"

/** The rows of the operation header block, in their fixed display order. */
export const OPENAPI_OPERATION_HEADER_ROWS = ['title', 'operationId', 'address', 'description', 'externalDocs'] as const

export type OpenApiOperationHeaderRow = typeof OPENAPI_OPERATION_HEADER_ROWS[number]

/** The header row that carries the operation `deprecated` tag. */
export type OpenApiDeprecatedTagRow = Extract<OpenApiOperationHeaderRow, 'title' | 'operationId' | 'address'>

export type OpenApiOperationRowVisibility = {
  readonly showTitle: boolean
  readonly showOperationId: boolean
  readonly showExternalDocs: boolean
  readonly showDescription: boolean
  /** The title row, else the operation ID row, else the always-present address row. */
  readonly deprecatedTagRow: OpenApiDeprecatedTagRow
}

export type OpenApiSecuritySchemeRowVisibility = {
  readonly showDescription: boolean
  readonly showParameterName: boolean
  readonly showHttpScheme: boolean
  readonly showBearerFormat: boolean
  readonly showOpenIdConnectUrl: boolean
  /** The scheme's own `Scopes ▾` / `Roles ▾` list of required scopes (rows with `*`); hidden for `ignored` kinds. */
  readonly showRequiredScopeList: boolean
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
    const showTitle = !noHeading && hasText(value?.title)
    const showOperationId = hasText(value?.operationId)
    return {
      showTitle,
      showOperationId,
      showExternalDocs: hasText(value?.externalDocs?.url),
      showDescription: hasText(value?.description),
      deprecatedTagRow: showTitle ? 'title' : showOperationId ? 'operationId' : 'address',
    }
  }

  /** The visible header rows in display order (the address row always shows). */
  public static resolveOperationHeaderRows(visibility: OpenApiOperationRowVisibility): OpenApiOperationHeaderRow[] {
    const shown: Readonly<Record<OpenApiOperationHeaderRow, boolean>> = {
      title: visibility.showTitle,
      operationId: visibility.showOperationId,
      address: true,
      description: visibility.showDescription,
      externalDocs: visibility.showExternalDocs,
    }
    return OPENAPI_OPERATION_HEADER_ROWS.filter(row => shown[row])
  }

  /** Detail rows of a security card are `detailed`-mode only; titles always show. */
  public static resolveSecurityScheme(value: OpenApiTreeNodeValueTypeSecurityScheme | null, displayMode: DisplayMode): OpenApiSecuritySchemeRowVisibility {
    const detailed = isDetailedDisplayMode(displayMode)
    return {
      showDescription: detailed && hasText(value?.description),
      showParameterName: detailed && value?.type === 'apiKey' && hasText(value.parameterName),
      showHttpScheme: detailed && value?.type === 'http' && hasText(value.scheme),
      showBearerFormat: detailed && value?.type === 'http' && hasText(value.bearerFormat),
      showOpenIdConnectUrl: detailed && value?.type === 'openIdConnect' && hasText(value.openIdConnectUrl),
      showRequiredScopeList: detailed && !!value && value.requiredScopesKind !== 'ignored',
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
