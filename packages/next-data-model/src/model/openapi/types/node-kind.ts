export const OpenApiTreeNodeKinds = {
  OPERATION: 'operation',
  SECURITY: 'security',
  SECURITY_REQUIREMENT: 'securityRequirement',
  SECURITY_SCHEME: 'securityScheme',
  OAUTH_FLOW: 'oauthFlow',
  EXTENSIONS: 'extensions',
  REQUEST: 'request',
  PARAMETERS: 'parameters',
  REQUEST_BODY: 'requestBody',
  CONTENT: 'content',
  MEDIA_TYPE: 'mediaType',
  RESPONSES: 'responses',
  RESPONSE: 'response',
  RESPONSE_HEADERS: 'responseHeaders',
} as const

export type OpenApiTreeNodeKind = typeof OpenApiTreeNodeKinds[keyof typeof OpenApiTreeNodeKinds]

export const OpenApiTreeNodeKindsList: OpenApiTreeNodeKind[] = Object.values(OpenApiTreeNodeKinds)

export function isOpenApiTreeNodeKind(kind: string): kind is OpenApiTreeNodeKind {
  return OpenApiTreeNodeKindsList.some(openApiKind => openApiKind === kind)
}
