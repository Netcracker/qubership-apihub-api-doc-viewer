import { OpenApiTreeNodeKind, OpenApiTreeNodeKinds } from "../../../../model/openapi/types/node-kind"
import { OpenApiTreeNodeMeta } from "../../../../model/openapi/types/node-meta"
import {
  OpenApiAnyTreeNodeValue,
  OpenApiTreeNodeValueTypeExtensions,
  OpenApiTreeNodeValueTypeMediaType,
  OpenApiTreeNodeValueTypeOAuthFlow,
  OpenApiTreeNodeValueTypeOperation,
  OpenApiTreeNodeValueTypeParameters,
  OpenApiTreeNodeValueTypeRequestBody,
  OpenApiTreeNodeValueTypeResponse,
  OpenApiTreeNodeValueTypeResponseHeaders,
  OpenApiTreeNodeValueTypeSecurity,
  OpenApiTreeNodeValueTypeSecurityRequirement,
  OpenApiTreeNodeValueTypeSecurityScheme,
} from "../../../../model/openapi/types/node-value"
import { isObject, isObjectWithStringKeys, isString } from "../../../../utilities"
import { AbstractNodeDataBuilder, NodeDataPickFunction } from "../../../abstract/tree/node-data/builder"

const OPERATION_VALUE_PROPS = [
  'path', 'method', 'specVersion', 'title', 'operationId', 'description', 'externalDocs', 'deprecated',
] as const satisfies readonly (keyof OpenApiTreeNodeValueTypeOperation)[]

const SECURITY_VALUE_PROPS = ['isInheritedFromDocument'] as const satisfies readonly (keyof OpenApiTreeNodeValueTypeSecurity)[]

const SECURITY_REQUIREMENT_VALUE_PROPS = [
  'schemeNames', 'isAnonymous',
] as const satisfies readonly (keyof OpenApiTreeNodeValueTypeSecurityRequirement)[]

const SECURITY_SCHEME_VALUE_PROPS = [
  'name', 'isResolved', 'type', 'description', 'in', 'parameterName', 'scheme', 'bearerFormat',
  'openIdConnectUrl', 'requiredScopes', 'requiredScopesKind',
] as const satisfies readonly (keyof OpenApiTreeNodeValueTypeSecurityScheme)[]

const OAUTH_FLOW_VALUE_PROPS = [
  'flowType', 'authorizationUrl', 'tokenUrl', 'refreshUrl', 'scopes',
] as const satisfies readonly (keyof OpenApiTreeNodeValueTypeOAuthFlow)[]

const EXTENSIONS_VALUE_PROPS = ['rawValues'] as const satisfies readonly (keyof OpenApiTreeNodeValueTypeExtensions)[]

const PARAMETERS_VALUE_PROPS = ['location', 'schema'] as const satisfies readonly (keyof OpenApiTreeNodeValueTypeParameters)[]

const REQUEST_BODY_VALUE_PROPS = ['description', 'required'] as const satisfies readonly (keyof OpenApiTreeNodeValueTypeRequestBody)[]

const MEDIA_TYPE_VALUE_PROPS = ['mediaType', 'schema'] as const satisfies readonly (keyof OpenApiTreeNodeValueTypeMediaType)[]

const RESPONSE_VALUE_PROPS = ['code', 'codeClass', 'description'] as const satisfies readonly (keyof OpenApiTreeNodeValueTypeResponse)[]

const RESPONSE_HEADERS_VALUE_PROPS = ['schema'] as const satisfies readonly (keyof OpenApiTreeNodeValueTypeResponseHeaders)[]

/** Value props per kind. Also the allow-list of field diffs a node aggregates. */
export const OPENAPI_NODE_VALUE_PROPS: Readonly<Record<OpenApiTreeNodeKind, readonly string[]>> = {
  [OpenApiTreeNodeKinds.OPERATION]: OPERATION_VALUE_PROPS,
  [OpenApiTreeNodeKinds.SECURITY]: SECURITY_VALUE_PROPS,
  [OpenApiTreeNodeKinds.SECURITY_REQUIREMENT]: SECURITY_REQUIREMENT_VALUE_PROPS,
  [OpenApiTreeNodeKinds.SECURITY_SCHEME]: SECURITY_SCHEME_VALUE_PROPS,
  [OpenApiTreeNodeKinds.OAUTH_FLOW]: OAUTH_FLOW_VALUE_PROPS,
  [OpenApiTreeNodeKinds.EXTENSIONS]: EXTENSIONS_VALUE_PROPS,
  [OpenApiTreeNodeKinds.REQUEST]: [],
  [OpenApiTreeNodeKinds.PARAMETERS]: PARAMETERS_VALUE_PROPS,
  [OpenApiTreeNodeKinds.REQUEST_BODY]: REQUEST_BODY_VALUE_PROPS,
  [OpenApiTreeNodeKinds.CONTENT]: [],
  [OpenApiTreeNodeKinds.MEDIA_TYPE]: MEDIA_TYPE_VALUE_PROPS,
  [OpenApiTreeNodeKinds.RESPONSES]: [],
  [OpenApiTreeNodeKinds.RESPONSE]: RESPONSE_VALUE_PROPS,
  [OpenApiTreeNodeKinds.RESPONSE_HEADERS]: RESPONSE_HEADERS_VALUE_PROPS,
}

export class OpenApiNodeDataBuilder extends AbstractNodeDataBuilder<OpenApiAnyTreeNodeValue | null, OpenApiTreeNodeMeta> {
  public override createNodeMeta(value: unknown): OpenApiTreeNodeMeta {
    const unresolvedSecurityScheme = isObject(value) && value.isResolved === false && isString(value.name)
      ? value.name
      : undefined
    return {
      ...(unresolvedSecurityScheme !== undefined ? { unresolvedSecurityScheme } : {}),
      _fragment: value,
    }
  }

  public override createNodeValue(
    kind: OpenApiTreeNodeKind,
    _key: PropertyKey,
    value: unknown,
    pick: NodeDataPickFunction,
  ): OpenApiAnyTreeNodeValue | null {
    if (!isObjectWithStringKeys(value)) {
      return null
    }
    // `pick` keeps only the listed props; the pick lists are checked against the value types above.
    return pick<OpenApiAnyTreeNodeValue>(value, OPENAPI_NODE_VALUE_PROPS[kind] as readonly (keyof OpenApiAnyTreeNodeValue)[])
  }
}
