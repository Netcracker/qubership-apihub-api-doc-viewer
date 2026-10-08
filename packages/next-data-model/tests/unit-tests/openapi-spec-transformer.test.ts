import { createBuildingServiceLogger } from '../../src/loggers'
import { OpenApiSpecTransformer } from '../../src/building-service/openapi/shared/openapi-spec-transformer'
import { OpenApiTreeBuilder } from '../../src/building-service/openapi/tree/builder'
import { OpenApiTreeNodeKinds } from '../../src/model/openapi/types/node-kind'
import { OpenApiResponseCode } from '../../src/shared/openapi/types/response-code'
import { loadNormalizedOpenApiSample } from '../helpers/openapi-fixtures'

const transformer = new OpenApiSpecTransformer(createBuildingServiceLogger())

describe('OpenAPI spec transformer (plain)', () => {
  it('builds the full OAS 3.0 operation', () => {
    const source = loadNormalizedOpenApiSample('oas30/01-full-operation')
    const spec = transformer.transform(source, { path: '/pets/{petId}/photos', method: 'POST' })

    expect(spec).not.toBeNull()
    expect(spec?.method).toBe('post')
    expect(spec?.specVersion).toBe('openapi-3.0')
    expect(spec?.title).toBe('Upload a photo of a pet')
    expect(spec?.operationId).toBe('uploadPetPhoto')
    expect(spec?.externalDocs).toEqual({ url: 'https://example.com/docs/photos', description: 'Photo upload guide' })
    expect(Object.keys(spec?.data.extensions ?? {})).toEqual(['x-rate-limit', 'x-audience'])

    const security = spec?.data.security
    expect(security?.isInheritedFromDocument).toBe(false)
    expect(security?.alternatives.map(alternative => alternative.schemeNames)).toEqual([
      ['petstore_auth'],
      ['api_key', 'request_signature'],
    ])
    const oauth = security?.alternatives[0].schemes.petstore_auth
    expect(oauth?.type).toBe('oauth2')
    expect(oauth?.requiredScopes).toEqual(['write:pets', 'read:pets'])
    expect(oauth?.requiredScopesKind).toBe('scopes')
    expect(Object.keys(oauth?.flows ?? {})).toEqual(['clientCredentials', 'authorizationCode'])

    const parameters = spec?.data.request?.parameters
    expect(Object.keys(parameters ?? {})).toEqual(['path', 'query', 'header', 'cookie'])
    expect(Object.keys(parameters?.path?.schema.properties ?? {})).toEqual(['petId'])
    expect(parameters?.path?.schema.required).toEqual(['petId'])
    expect(parameters?.header?.schema.required).toEqual(['X-Request-Id'])

    expect(Object.keys(spec?.data.request?.requestBody?.content ?? {})).toEqual(['image/png', 'multipart/form-data'])
    expect(spec?.data.request?.requestBody?.required).toBe(true)

    expect(Object.keys(spec?.data.responses ?? {})).toEqual(['201', '303', '400', '404', '5XX', 'default'])
    expect(Object.keys(spec?.data.responses?.['201']?.headers?.schema.properties ?? {})).toEqual(['Location', 'X-Rate-Limit-Remaining'])
  })

  it('takes the document security when the operation has none, and none for an empty list', () => {
    const source = loadNormalizedOpenApiSample('oas30/03-security-alternatives')
    const inherited = transformer.transform(source, { path: '/reports', method: 'get' })
    expect(inherited?.data.security?.isInheritedFromDocument).toBe(true)
    expect(inherited?.data.security?.alternatives.map(alternative => alternative.schemeNames)).toEqual([['api_key']])

    const anonymous = transformer.transform(source, { path: '/reports', method: 'post' })
    expect(anonymous?.data.security?.alternatives.map(alternative => alternative.isAnonymous)).toEqual([false, false, true])

    const publicOperation = transformer.transform(source, { path: '/reports', method: 'delete' })
    expect(publicOperation?.data.security).toBeUndefined()
    expect(publicOperation?.deprecated).toBe(true)
  })

  it('reads OAS 3.1 role scopes and mutualTLS', () => {
    const source = loadNormalizedOpenApiSample('oas31/03-security-mutual-tls-and-roles')
    const spec = transformer.transform(source, { path: '/admin/keys', method: 'post' })
    expect(spec?.specVersion).toBe('openapi-3.1')
    const [first, second] = spec?.data.security?.alternatives ?? []
    expect(first.schemes.mtls.type).toBe('mutualTLS')
    expect(first.schemes.bearer.requiredScopesKind).toBe('roles')
    expect(second.schemes.api_key.requiredScopes).toEqual(['admin'])
  })

  it('synthesizes parameters from the path item, $ref, and content', () => {
    const source = loadNormalizedOpenApiSample('oas30/04-parameters-sources')
    const spec = transformer.transform(source, { path: '/orders/{orderId}', method: 'get' })
    const query = spec?.data.request?.parameters?.query?.schema.properties ?? {}
    expect(Object.keys(query)).toEqual(['pageSize', 'filter'])
    expect(query.filter).toMatchObject({
      type: 'object',
      description: 'JSON-encoded filter, described with `content` instead of `schema`.',
      customAnnotations: { mediaType: { label: 'Media type', value: 'application/json' } },
    })
  })

  it('omits responses for OAS 3.1 without responses and keeps media types with a schema only', () => {
    const spec = transformer.transform(loadNormalizedOpenApiSample('oas31/02-no-responses'), undefined)
    expect(spec?.path).toBe('/events')
    expect(spec?.data.responses).toBeUndefined()
    expect(spec?.title).toBe('Fire-and-forget event')
  })

  it('orders response codes canonically', () => {
    expect(OpenApiResponseCode.sort(['500', '101', '200', '2XX', '302', '404', '4XX', '503', 'default', 'x-weird']))
      .toEqual(['101', '200', '2XX', '302', '404', '4XX', '500', '503', 'x-weird', 'default'])
  })
})

describe('OpenAPI tree builder (plain)', () => {
  it('builds simple nodes for every section', () => {
    const source = loadNormalizedOpenApiSample('oas30/01-full-operation')
    const tree = new OpenApiTreeBuilder({ source, operationKeys: { path: '/pets/{petId}/photos', method: 'post' } }).build()
    const root = tree.root
    expect(root?.kind).toBe(OpenApiTreeNodeKinds.OPERATION)
    expect(root?.childrenNodes().map(child => child.kind)).toEqual([
      OpenApiTreeNodeKinds.SECURITY,
      OpenApiTreeNodeKinds.EXTENSIONS,
      OpenApiTreeNodeKinds.REQUEST,
      OpenApiTreeNodeKinds.RESPONSES,
    ])
    const responses = root?.childrenNodes().find(child => child.kind === OpenApiTreeNodeKinds.RESPONSES)
    expect(responses?.childrenNodes().map(child => child.key)).toEqual(['201', '303', '400', '404', '5XX', 'default'])
    const created = responses?.childrenNodes()[0]
    expect(created?.value()).toEqual({ code: '201', codeClass: '2XX', description: 'Photo stored.' })
    expect(created?.childrenNodes().map(child => child.kind)).toEqual([
      OpenApiTreeNodeKinds.RESPONSE_HEADERS,
      OpenApiTreeNodeKinds.CONTENT,
    ])
    const security = root?.childrenNodes()[0]
    const firstAlternative = security?.childrenNodes()[0]
    const scheme = firstAlternative?.childrenNodes()[0]
    expect(scheme?.kind).toBe(OpenApiTreeNodeKinds.SECURITY_SCHEME)
    expect(scheme?.childrenNodes().map(child => child.key)).toEqual(['clientCredentials', 'authorizationCode'])
  })
})
