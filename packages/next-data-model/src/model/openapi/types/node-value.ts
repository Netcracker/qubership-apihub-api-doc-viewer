import { OpenApiSpecVersion } from "@netcracker/qubership-apihub-api-unifier"
import { OpenApiHttpMethod } from "../../../shared/openapi/types/http-method"
import { OpenApiResponseCodeClass } from "../../../shared/openapi/types/response-code"
import { SpecificationExtensionKey } from "../../specification-extension-key"
import { OpenApiTreeNodeKind, OpenApiTreeNodeKinds } from "./node-kind"

export type OpenApiParameterLocation = 'path' | 'query' | 'header' | 'cookie'

export const OPENAPI_PARAMETER_LOCATIONS: readonly OpenApiParameterLocation[] = ['path', 'query', 'header', 'cookie']

export type OpenApiOAuthFlowType = 'implicit' | 'password' | 'clientCredentials' | 'authorizationCode'

export const OPENAPI_OAUTH_FLOW_TYPES: readonly OpenApiOAuthFlowType[] = ['implicit', 'password', 'clientCredentials', 'authorizationCode']

/** How the scopes list of a Security Requirement Object is read for one scheme (dialect decision). */
export type OpenApiRequiredScopesKind = 'scopes' | 'roles' | 'ignored'

export type OpenApiExternalDocs = {
  readonly url: string
  readonly description?: string
}

/** JSON Schema object built from parameters or headers: one property per entry. */
export type OpenApiSynthesizedObjectSchema = {
  type: 'object'
  properties: Record<string, unknown>
  required: string[]
}

export interface OpenApiTreeNodeValueTypeOperation {
  readonly path: string
  readonly method: OpenApiHttpMethod
  readonly specVersion: OpenApiSpecVersion
  readonly title?: string
  readonly operationId?: string
  readonly description?: string
  readonly externalDocs?: OpenApiExternalDocs
  readonly deprecated?: boolean
}

export interface OpenApiTreeNodeValueTypeSecurity {
  readonly isInheritedFromDocument: boolean
}

export interface OpenApiTreeNodeValueTypeSecurityRequirement {
  readonly schemeNames: string[]
  readonly isAnonymous: boolean
}

export interface OpenApiTreeNodeValueTypeSecurityScheme {
  readonly name: string
  readonly isResolved: boolean
  readonly type?: string
  readonly description?: string
  readonly in?: string
  readonly parameterName?: string
  readonly scheme?: string
  readonly bearerFormat?: string
  readonly openIdConnectUrl?: string
  readonly requiredScopes: string[]
  readonly requiredScopesKind: OpenApiRequiredScopesKind
}

export interface OpenApiTreeNodeValueTypeOAuthFlow {
  readonly flowType: OpenApiOAuthFlowType
  readonly authorizationUrl?: string
  readonly tokenUrl?: string
  readonly refreshUrl?: string
  readonly scopes: Record<string, string>
}

export interface OpenApiTreeNodeValueTypeExtensions {
  readonly rawValues: Record<SpecificationExtensionKey, unknown>
}

export interface OpenApiTreeNodeValueTypeRequest { }

export interface OpenApiTreeNodeValueTypeParameters {
  readonly location: OpenApiParameterLocation
  readonly schema: OpenApiSynthesizedObjectSchema
}

export interface OpenApiTreeNodeValueTypeRequestBody {
  readonly description?: string
  readonly required?: boolean
}

export interface OpenApiTreeNodeValueTypeContent { }

export interface OpenApiTreeNodeValueTypeMediaType {
  readonly mediaType: string
  readonly schema?: unknown
}

export interface OpenApiTreeNodeValueTypeResponses { }

export interface OpenApiTreeNodeValueTypeResponse {
  readonly code: string
  readonly codeClass: OpenApiResponseCodeClass
  readonly description?: string
}

export interface OpenApiTreeNodeValueTypeResponseHeaders {
  readonly schema: OpenApiSynthesizedObjectSchema
}

export type OpenApiTreeNodeValue<T extends OpenApiTreeNodeKind> =
  T extends typeof OpenApiTreeNodeKinds.OPERATION ? OpenApiTreeNodeValueTypeOperation
  : T extends typeof OpenApiTreeNodeKinds.SECURITY ? OpenApiTreeNodeValueTypeSecurity
  : T extends typeof OpenApiTreeNodeKinds.SECURITY_REQUIREMENT ? OpenApiTreeNodeValueTypeSecurityRequirement
  : T extends typeof OpenApiTreeNodeKinds.SECURITY_SCHEME ? OpenApiTreeNodeValueTypeSecurityScheme
  : T extends typeof OpenApiTreeNodeKinds.OAUTH_FLOW ? OpenApiTreeNodeValueTypeOAuthFlow
  : T extends typeof OpenApiTreeNodeKinds.EXTENSIONS ? OpenApiTreeNodeValueTypeExtensions
  : T extends typeof OpenApiTreeNodeKinds.REQUEST ? OpenApiTreeNodeValueTypeRequest
  : T extends typeof OpenApiTreeNodeKinds.PARAMETERS ? OpenApiTreeNodeValueTypeParameters
  : T extends typeof OpenApiTreeNodeKinds.REQUEST_BODY ? OpenApiTreeNodeValueTypeRequestBody
  : T extends typeof OpenApiTreeNodeKinds.CONTENT ? OpenApiTreeNodeValueTypeContent
  : T extends typeof OpenApiTreeNodeKinds.MEDIA_TYPE ? OpenApiTreeNodeValueTypeMediaType
  : T extends typeof OpenApiTreeNodeKinds.RESPONSES ? OpenApiTreeNodeValueTypeResponses
  : T extends typeof OpenApiTreeNodeKinds.RESPONSE ? OpenApiTreeNodeValueTypeResponse
  : T extends typeof OpenApiTreeNodeKinds.RESPONSE_HEADERS ? OpenApiTreeNodeValueTypeResponseHeaders
  : never

export type OpenApiAnyTreeNodeValue = OpenApiTreeNodeValue<OpenApiTreeNodeKind>
