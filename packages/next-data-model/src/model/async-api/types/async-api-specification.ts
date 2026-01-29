export type SpecificationExtensions = {
  [key: `x-${string}`]: unknown
}

export interface ReferenceObject {
  $ref: string
}

export type ReferenceOr<T> = T | ReferenceObject

export type TagsObject = Array<TagObject | ReferenceObject>

export interface AsyncApiSpecification extends SpecificationExtensions {
  asyncapi: string
  id?: string
  info: InfoObject
  servers?: ServersObject
  defaultContentType?: string
  channels?: ChannelsObject
  operations?: OperationsObject
  components?: ComponentsObject
}

export interface InfoObject extends SpecificationExtensions {
  title: string
  version: string
  description?: string
  termsOfService?: string
  contact?: ContactObject
  license?: LicenseObject
  tags?: TagsObject
  externalDocs?: ExternalDocumentationObject | ReferenceObject
}

export interface ContactObject extends SpecificationExtensions {
  name?: string
  url?: string
  email?: string
}

export interface LicenseObject extends SpecificationExtensions {
  name: string
  url?: string
}

export type ServersObject = Record<string, ReferenceOr<ServerObject>>

export interface ServerObject extends SpecificationExtensions {
  host: string
  protocol: string
  protocolVersion?: string
  pathname?: string
  description?: string
  title?: string
  summary?: string
  variables?: Record<string, ReferenceOr<ServerVariableObject>>
  security?: Array<SecuritySchemeObject | ReferenceObject>
  tags?: TagsObject
  externalDocs?: ExternalDocumentationObject | ReferenceObject
  bindings?: ServerBindingsObject | ReferenceObject
}

export interface ServerVariableObject extends SpecificationExtensions {
  enum?: string[]
  default: string
  description?: string
  examples?: string[]
}

export type ChannelsObject = Record<string, ReferenceOr<ChannelObject>>

export interface ChannelObject extends SpecificationExtensions {
  address?: string | null
  messages?: MessagesObject
  title?: string
  summary?: string
  description?: string
  servers?: ReferenceObject[]
  parameters?: ParametersObject
  tags?: TagsObject
  externalDocs?: ExternalDocumentationObject | ReferenceObject
  bindings?: ChannelBindingsObject | ReferenceObject
}

export type MessagesObject = Record<string, ReferenceOr<MessageObject>>

export type OperationsObject = Record<string, ReferenceOr<OperationObject>>

export interface OperationObject extends SpecificationExtensions {
  action: "send" | "receive"
  channel: ReferenceObject
  title?: string
  summary?: string
  description?: string
  security?: Array<SecuritySchemeObject | ReferenceObject>
  tags?: TagsObject
  externalDocs?: ExternalDocumentationObject | ReferenceObject
  bindings?: OperationBindingsObject | ReferenceObject
  traits?: Array<OperationTraitObject | ReferenceObject>
  messages?: ReferenceOr<MessageObject>[] // wrong corresponding to specification, but correct for document with resolved refs
  reply?: OperationReplyObject | ReferenceObject
}

export interface OperationTraitObject extends SpecificationExtensions {
  title?: string
  summary?: string
  description?: string
  security?: Array<SecuritySchemeObject | ReferenceObject>
  tags?: TagsObject
  externalDocs?: ExternalDocumentationObject | ReferenceObject
  bindings?: OperationBindingsObject | ReferenceObject
}

export interface OperationReplyObject extends SpecificationExtensions {
  address?: OperationReplyAddressObject | ReferenceObject
  channel?: ReferenceObject
  messages?: ReferenceObject[]
}

export interface OperationReplyAddressObject extends SpecificationExtensions {
  description?: string
  location: string
}

export type ParametersObject = Record<string, ReferenceOr<ParameterObject>>

export interface ParameterObject extends SpecificationExtensions {
  enum?: string[]
  default?: string
  description?: string
  examples?: string[]
  location?: string
}

export type ServerBindingsObject = Record<string, unknown> & SpecificationExtensions
export type ChannelBindingsObject = Record<string, unknown> & SpecificationExtensions
export type OperationBindingsObject = Record<string, unknown> & SpecificationExtensions
export type MessageBindingsObject = Record<string, unknown> & SpecificationExtensions

export interface MessageObject extends SpecificationExtensions {
  headers?: MessageSchema
  payload?: MessageSchema
  correlationId?: CorrelationIdObject | ReferenceObject
  contentType?: string
  name?: string
  title?: string
  summary?: string
  description?: string
  tags?: TagsObject
  externalDocs?: ExternalDocumentationObject | ReferenceObject
  bindings?: MessageBindingsObject | ReferenceObject
  examples?: MessageExampleObject[]
  traits?: Array<MessageTraitObject | ReferenceObject>
}

export interface MessageTraitObject extends SpecificationExtensions {
  headers?: MessageSchema
  correlationId?: CorrelationIdObject | ReferenceObject
  contentType?: string
  name?: string
  title?: string
  summary?: string
  description?: string
  tags?: TagsObject
  externalDocs?: ExternalDocumentationObject | ReferenceObject
  bindings?: MessageBindingsObject | ReferenceObject
  examples?: MessageExampleObject[]
}

export interface MessageExampleObject extends SpecificationExtensions {
  headers?: Record<string, unknown>
  payload?: unknown
  name?: string
  summary?: string
}

export interface TagObject extends SpecificationExtensions {
  name: string
  description?: string
  externalDocs?: ExternalDocumentationObject | ReferenceObject
}

export interface ExternalDocumentationObject extends SpecificationExtensions {
  description?: string
  url: string
}

export interface ComponentsObject extends SpecificationExtensions {
  schemas?: Record<string, SchemaObject | MultiFormatSchemaObject | ReferenceObject | boolean>
  servers?: Record<string, ServerObject | ReferenceObject>
  channels?: Record<string, ChannelObject | ReferenceObject>
  operations?: Record<string, OperationObject | ReferenceObject>
  messages?: Record<string, MessageObject | ReferenceObject>
  securitySchemes?: Record<string, SecuritySchemeObject | ReferenceObject>
  serverVariables?: Record<string, ServerVariableObject | ReferenceObject>
  parameters?: Record<string, ParameterObject | ReferenceObject>
  correlationIds?: Record<string, CorrelationIdObject | ReferenceObject>
  replies?: Record<string, OperationReplyObject | ReferenceObject>
  replyAddresses?: Record<string, OperationReplyAddressObject | ReferenceObject>
  externalDocs?: Record<string, ExternalDocumentationObject | ReferenceObject>
  tags?: Record<string, TagObject | ReferenceObject>
  operationTraits?: Record<string, OperationTraitObject | ReferenceObject>
  messageTraits?: Record<string, MessageTraitObject | ReferenceObject>
  serverBindings?: Record<string, ServerBindingsObject | ReferenceObject>
  channelBindings?: Record<string, ChannelBindingsObject | ReferenceObject>
  operationBindings?: Record<string, OperationBindingsObject | ReferenceObject>
  messageBindings?: Record<string, MessageBindingsObject | ReferenceObject>
}

export interface MultiFormatSchemaObject extends SpecificationExtensions {
  schemaFormat?: string
  schema: unknown
}

export type JsonSchemaType = "null" | "boolean" | "object" | "array" | "number" | "integer" | "string"

export interface SchemaObject extends SpecificationExtensions {
  $id?: string
  $schema?: string
  $comment?: string
  title?: string
  description?: string
  default?: unknown
  type?: JsonSchemaType | JsonSchemaType[]
  format?: string
  multipleOf?: number
  maximum?: number
  exclusiveMaximum?: number
  minimum?: number
  exclusiveMinimum?: number
  maxLength?: number
  minLength?: number
  pattern?: string
  maxItems?: number
  minItems?: number
  uniqueItems?: boolean
  maxProperties?: number
  minProperties?: number
  enum?: unknown[]
  const?: unknown
  examples?: unknown[]
  if?: SchemaObject | ReferenceObject | boolean
  then?: SchemaObject | ReferenceObject | boolean
  else?: SchemaObject | ReferenceObject | boolean
  readOnly?: boolean
  writeOnly?: boolean
  properties?: Record<string, SchemaObject | ReferenceObject | boolean>
  patternProperties?: Record<string, SchemaObject | ReferenceObject | boolean>
  additionalProperties?: SchemaObject | ReferenceObject | boolean
  additionalItems?: SchemaObject | ReferenceObject | boolean
  items?: SchemaObject | ReferenceObject | boolean | Array<SchemaObject | ReferenceObject | boolean>
  propertyNames?: SchemaObject | ReferenceObject | boolean
  contains?: SchemaObject | ReferenceObject | boolean
  allOf?: Array<SchemaObject | ReferenceObject | boolean>
  oneOf?: Array<SchemaObject | ReferenceObject | boolean>
  anyOf?: Array<SchemaObject | ReferenceObject | boolean>
  not?: SchemaObject | ReferenceObject | boolean
  required?: string[]
  discriminator?: string
  externalDocs?: ExternalDocumentationObject | ReferenceObject
  deprecated?: boolean
  [key: string]: unknown
}

export interface SecuritySchemeObject extends SpecificationExtensions {
  type: SecuritySchemeType
  description?: string
  name?: string
  in?: "user" | "password" | "query" | "header" | "cookie"
  scheme?: string
  bearerFormat?: string
  flows?: OAuthFlowsObject
  openIdConnectUrl?: string
  scopes?: string[]
}

export type SecuritySchemeType =
  | "userPassword"
  | "apiKey"
  | "X509"
  | "symmetricEncryption"
  | "asymmetricEncryption"
  | "httpApiKey"
  | "http"
  | "oauth2"
  | "openIdConnect"
  | "plain"
  | "scramSha256"
  | "scramSha512"
  | "gssapi"

export interface OAuthFlowsObject extends SpecificationExtensions {
  implicit?: OAuthFlowObject
  password?: OAuthFlowObject
  clientCredentials?: OAuthFlowObject
  authorizationCode?: OAuthFlowObject
}

export interface OAuthFlowObject extends SpecificationExtensions {
  authorizationUrl?: string
  tokenUrl?: string
  refreshUrl?: string
  availableScopes: Record<string, string>
}

export interface CorrelationIdObject extends SpecificationExtensions {
  description?: string
  location: string
}

export type MessageSchema =
  | MultiFormatSchemaObject
  | SchemaObject
  | ReferenceObject
  | boolean

export function isAsyncApiSpecification(value: unknown): value is AsyncApiSpecification {
  return typeof value === 'object' && value !== null && 'asyncapi' in value && typeof value.asyncapi === 'string'
}

export function isReferenceObject(value: unknown): value is ReferenceObject {
  return typeof value === 'object' && value !== null && '$ref' in value && typeof value.$ref === 'string'
}
