import { OpenApiSpecVersion, SPEC_TYPE_OPEN_API_30 } from "@netcracker/qubership-apihub-api-unifier"
import { OpenApiRequiredScopesKind } from "../../../../model/openapi/types/node-value"
import { OpenApiDialectBase } from "./dialect"

export class OpenApi30Dialect extends OpenApiDialectBase {
  public readonly specVersion: OpenApiSpecVersion = SPEC_TYPE_OPEN_API_30
  public readonly securitySchemeTypes: ReadonlySet<string> = new Set(['apiKey', 'http', 'oauth2', 'openIdConnect'])
  public readonly isResponsesObjectRequired = true

  /** OAS 3.0: the list MUST be empty for other scheme types - a non-empty list is ignored. */
  protected resolveNonOAuthScopesKind(): OpenApiRequiredScopesKind {
    return 'ignored'
  }
}
