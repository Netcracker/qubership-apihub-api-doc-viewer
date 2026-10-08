import { OpenApiSpecVersion, SPEC_TYPE_OPEN_API_31 } from "@netcracker/qubership-apihub-api-unifier"
import { OpenApiRequiredScopesKind } from "../../../../model/openapi/types/node-value"
import { OpenApiDialectBase } from "./dialect"

export class OpenApi31Dialect extends OpenApiDialectBase {
  public readonly specVersion: OpenApiSpecVersion = SPEC_TYPE_OPEN_API_31
  public readonly securitySchemeTypes: ReadonlySet<string> = new Set(['apiKey', 'http', 'mutualTLS', 'oauth2', 'openIdConnect'])
  public readonly isResponsesObjectRequired = false

  /** OAS 3.1: the list MAY contain role names for every other scheme type. */
  protected resolveNonOAuthScopesKind(): OpenApiRequiredScopesKind {
    return 'roles'
  }
}
