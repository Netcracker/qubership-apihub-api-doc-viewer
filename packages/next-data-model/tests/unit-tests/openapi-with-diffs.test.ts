import { DiffAction } from '@netcracker/qubership-apihub-api-diff'
import { OpenApiTreeWithDiffsBuilder } from '../../src/building-service/openapi/tree-with-diffs/builder'
import { NODE_LEVEL_DIFF_KEY } from '../../src/model/abstract/tree-with-diffs/tree-node.interface'
import { CHANGED_LAYOUT_SIDE, ORIGIN_LAYOUT_SIDE } from '../../src/model/abstract/layout-side'
import { OpenApiRowDiffs } from '../../src/model/openapi/tree-with-diffs/row-diffs'
import { OpenApiTreeWithDiffs } from '../../src/model/openapi/tree-with-diffs/tree.impl'
import { OpenApiTreeNodeWithDiffs } from '../../src/model/openapi/types/aliases'
import { OpenApiTreeNodeKind, OpenApiTreeNodeKinds } from '../../src/model/openapi/types/node-kind'
import { isOpenApiTreeNodeWithDiffs } from '../../src/shared/openapi/guards/tree-node'
import { isObject } from '../../src/utilities'
import { loadMergedOpenApiSample, OPENAPI_TEST_DIFF_META_KEYS } from '../helpers/openapi-fixtures'

const M = OPENAPI_TEST_DIFF_META_KEYS.diffsMetaKey
const OPERATION = { path: '/orders/{orderId}', method: 'post' }

function build(caseId: string, operationKeys = OPERATION): OpenApiTreeWithDiffs {
  return new OpenApiTreeWithDiffsBuilder({
    source: loadMergedOpenApiSample(caseId),
    operationKeys,
    diffsMetaKeys: OPENAPI_TEST_DIFF_META_KEYS,
  }).build()
}

function root(tree: OpenApiTreeWithDiffs): OpenApiTreeNodeWithDiffs {
  const node = tree.root
  if (!node || !isOpenApiTreeNodeWithDiffs(node)) {
    throw new Error('no root')
  }
  return node
}

function child(node: OpenApiTreeNodeWithDiffs, kind: OpenApiTreeNodeKind, key?: string | number): OpenApiTreeNodeWithDiffs {
  const found = node.childrenNodes().find(candidate => candidate.kind === kind && (key === undefined || String(candidate.key) === String(key)))
  if (!found) {
    throw new Error(`no ${kind} ${key ?? ''} under ${node.kind}`)
  }
  return found
}

function wholeAction(node: OpenApiTreeNodeWithDiffs): string | undefined {
  return node.diffs[NODE_LEVEL_DIFF_KEY]?.data.action
}

function recordOf(value: unknown): Record<string, { action: string, beforeValue?: unknown, afterValue?: unknown, beforeKey?: unknown, afterKey?: unknown }> {
  const record = isObject(value) || Array.isArray(value) ? Reflect.get(value, M) : undefined
  return isObject(record) ? record as never : {}
}

function parametersSchema(tree: OpenApiTreeWithDiffs, location: string): Record<string, unknown> {
  const group = child(child(root(tree), OpenApiTreeNodeKinds.REQUEST), OpenApiTreeNodeKinds.PARAMETERS, location)
  const value = group.value()
  return isObject(value) && isObject(value.schema) ? value.schema : {}
}

function queryProperty(tree: OpenApiTreeWithDiffs, name: string): Record<string, unknown> {
  const properties = parametersSchema(tree, 'query').properties
  const property = isObject(properties) ? properties[name] : undefined
  return isObject(property) ? property : {}
}

function security(tree: OpenApiTreeWithDiffs): OpenApiTreeNodeWithDiffs {
  return child(root(tree), OpenApiTreeNodeKinds.SECURITY)
}

function requestBody(tree: OpenApiTreeWithDiffs): OpenApiTreeNodeWithDiffs {
  return child(child(root(tree), OpenApiTreeNodeKinds.REQUEST), OpenApiTreeNodeKinds.REQUEST_BODY)
}

function responsesNode(tree: OpenApiTreeWithDiffs): OpenApiTreeNodeWithDiffs {
  return child(root(tree), OpenApiTreeNodeKinds.RESPONSES)
}

describe('OpenAPI with diffs: operation', () => {
  it('summary replace paints the title field', () => {
    expect(root(build('operation/01-summary-changed')).diffs.title?.data.action).toBe(DiffAction.replace)
  })

  it('path rename becomes an address replace and a path-parameter rename', () => {
    const tree = build('operation/05-path-parameter-renamed', { path: '/orders/{id}', method: 'post' })
    const pathDiff = root(tree).diffs.path?.data
    expect(pathDiff?.action).toBe(DiffAction.replace)
    expect(pathDiff && 'beforeValue' in pathDiff ? pathDiff.beforeValue : undefined).toBe('/orders/{orderId}')
    expect(wholeAction(root(tree))).toBeUndefined()
    const properties = parametersSchema(tree, 'path').properties
    expect(recordOf(properties).id).toMatchObject({ action: DiffAction.rename, beforeKey: 'orderId', afterKey: 'id' })
  })

  it('a wholly added operation is inherited by every node and lights no change marker', () => {
    const tree = build('operation/06-whole-operation-added')
    expect(wholeAction(root(tree))).toBe(DiffAction.add)
    const responses = responsesNode(tree)
    expect(responses.diffs[NODE_LEVEL_DIFF_KEY]?.inherited).toBe(true)
    for (const response of responses.childrenNodes()) {
      expect(wholeAction(response)).toBe(DiffAction.add)
      expect([...response.descendantDiffsSummary]).toEqual([])
    }
  })

  it('deprecated and operation ID changes are field diffs', () => {
    expect(root(build('operation/09-deprecated-added')).diffs.deprecated?.data.action).toBe(DiffAction.add)
    expect(root(build('operation/08-operation-id-changed')).diffs.operationId?.data.action).toBe(DiffAction.replace)
  })
})

describe('OpenAPI with diffs: parameters', () => {
  it('a group whose parameters were all removed is wholly removed; a mixed group is not', () => {
    const removed = child(child(root(build('request/02-all-headers-removed')), OpenApiTreeNodeKinds.REQUEST), OpenApiTreeNodeKinds.PARAMETERS, 'header')
    expect(wholeAction(removed)).toBe(DiffAction.remove)
    const mixed = child(child(root(build('request/03-mixed-header-changes')), OpenApiTreeNodeKinds.REQUEST), OpenApiTreeNodeKinds.PARAMETERS, 'header')
    expect(wholeAction(mixed)).toBeUndefined()
  })

  it('required change is a required-array item diff', () => {
    const schema = parametersSchema(build('request/04-parameter-required-changed'), 'query')
    expect(Array.isArray(schema.required) ? [...schema.required] : undefined).toEqual(['dryRun'])
    expect(recordOf(schema.required)['0']).toMatchObject({ action: DiffAction.add, afterValue: 'dryRun' })
  })

  it.each([
    ['request/11-description-moved-entry-to-schema', undefined],
    ['request/12-description-entry-removed-schema-added', DiffAction.replace],
    ['request/13-description-schema-removed-entry-added', DiffAction.replace],
    ['request/14-description-both-places-changed', DiffAction.replace],
    ['request/15-description-schema-changed-under-entry', undefined],
  ])('description precedence: %s', (caseId, expected) => {
    const property = queryProperty(build(caseId), 'dryRun')
    expect(recordOf(property).description?.action).toBe(expected)
  })

  it('both-places change shows the entry text only', () => {
    const property = queryProperty(build('request/14-description-both-places-changed'), 'dryRun')
    expect(property.description).toBe('Entry text v2.')
    expect(recordOf(property).description).toMatchObject({ beforeValue: 'Entry text v1.', afterValue: 'Entry text v2.' })
  })

  it('schema -> content switch: per-key schema diffs, description replace, media type added', () => {
    const property = queryProperty(build('request/16-parameter-schema-to-content'), 'dryRun')
    const record = recordOf(property)
    expect(record.type).toMatchObject({ action: DiffAction.replace, beforeValue: 'boolean', afterValue: 'object' })
    expect(record.properties?.action).toBe(DiffAction.add)
    expect(record.description).toMatchObject({ action: DiffAction.replace, beforeValue: 'Boolean flag.', afterValue: 'JSON options.' })
    expect(recordOf(property.customAnnotations).mediaType?.action).toBe(DiffAction.add)
  })

  it('content media type change with the same schema changes only the media type annotation', () => {
    const property = queryProperty(build('request/17-parameter-content-media-type-renamed'), 'dryRun')
    const record = recordOf(property)
    expect(record.type).toBeUndefined()
    expect(record.description).toBeUndefined()
    const annotations = property.customAnnotations
    const mediaType = isObject(annotations) ? annotations.mediaType : undefined
    expect(recordOf(mediaType).value).toMatchObject({ action: DiffAction.replace, beforeValue: 'application/json', afterValue: 'application/json; charset=utf-8' })
  })

  it('entry extensions move flat into the property with their diffs', () => {
    const changed = queryProperty(build('request/24-parameter-extension-added-and-changed'), 'dryRun')
    expect(changed['x-owner']).toBe('billing-team')
    expect(recordOf(changed)['x-owner']?.action).toBe(DiffAction.replace)
    expect(recordOf(changed)['x-internal']?.action).toBe(DiffAction.add)
    const moved = queryProperty(build('request/25-parameter-extension-moved-to-schema'), 'dryRun')
    expect(moved['x-owner']).toBe('orders-team')
    expect(recordOf(moved)['x-owner']).toBeUndefined()
  })
})

describe('OpenAPI with diffs: request body', () => {
  it.each([
    ['request/23-body-removed', DiffAction.remove],
    ['request/19-body-only-media-type-removed', DiffAction.remove],
    ['request/20-body-only-schema-removed', DiffAction.remove],
    ['request/21-body-only-schema-added', DiffAction.add],
    ['request/22-body-media-type-removed-description-kept', undefined],
    ['request/09-request-body-added', DiffAction.add],
  ])('presence of the Body: %s', (caseId, expected) => {
    expect(wholeAction(requestBody(build(caseId)))).toBe(expected)
  })

  it('the only schema removed also removes its media type option', () => {
    const content = child(requestBody(build('request/20-body-only-schema-removed')), OpenApiTreeNodeKinds.CONTENT)
    const option = content.childrenNodes()[0]
    expect(wholeAction(option)).toBe(DiffAction.remove)
  })

  it('renamed media type stays one option with a rename diff', () => {
    const content = child(requestBody(build('request/07-body-media-type-renamed')), OpenApiTreeNodeKinds.CONTENT)
    expect(content.childrenNodes().map(option => [option.key, wholeAction(option)])).toEqual([
      ['application/json; charset=utf-8', DiffAction.rename],
    ])
  })

  it('required became false', () => {
    expect(requestBody(build('request/10-request-body-became-optional')).diffs.required?.data.action).toBe(DiffAction.remove)
  })

  it('request body and media type extensions are cloned into the schema root with precedence', () => {
    const option = child(requestBody(build('request/27-body-and-media-type-extensions-changed')), OpenApiTreeNodeKinds.CONTENT).childrenNodes()[0]
    const value = option.value()
    const schema = isObject(value) && isObject(value.schema) ? value.schema : {}
    expect(schema['x-max-size']).toBe('5MB')
    expect(recordOf(schema)['x-max-size']?.action).toBe(DiffAction.replace)
    expect(recordOf(schema)['x-codec']?.action).toBe(DiffAction.add)

    const shadowing = child(requestBody(build('request/28-media-type-extension-shadows-schema-root')), OpenApiTreeNodeKinds.CONTENT).childrenNodes()[0]
    const shadowingValue = shadowing.value()
    const shadowingSchema = isObject(shadowingValue) && isObject(shadowingValue.schema) ? shadowingValue.schema : {}
    expect(shadowingSchema['x-codec']).toBe('gzip')
    expect(recordOf(shadowingSchema)['x-codec']).toMatchObject({ action: DiffAction.replace, beforeValue: 'none', afterValue: 'gzip' })
  })
})

describe('OpenAPI with diffs: responses', () => {
  function response(tree: OpenApiTreeWithDiffs, code: string): OpenApiTreeNodeWithDiffs {
    return child(responsesNode(tree), OpenApiTreeNodeKinds.RESPONSE, code)
  }

  it.each([
    ['responses/01-response-added', '404', []],
    ['responses/10-response-added-with-headers-and-body', '404', []],
    ['responses/02-response-code-case-renamed', '4XX', []],
    ['responses/11-response-code-renamed-and-description-changed', '4XX', ['annotation']],
    ['responses/03-response-description-changed', '200', ['annotation']],
    ['responses/06-response-schema-property-added', '200', ['non-breaking']],
    ['responses/07-response-body-only-media-type-removed', '200', ['breaking']],
    ['responses/12-response-changes-of-different-severity', '200', ['breaking', 'non-breaking', 'annotation']],
  ])('change marker summary of %s %s', (caseId, code, expectedTypes) => {
    const summary = [...response(build(caseId), code).descendantDiffsSummary].sort()
    expect(summary).toEqual([...expectedTypes].sort())
  })

  it('response option add / rename', () => {
    expect(wholeAction(response(build('responses/01-response-added'), '404'))).toBe(DiffAction.add)
    expect(wholeAction(response(build('responses/02-response-code-case-renamed'), '4XX'))).toBe(DiffAction.rename)
  })

  it('response sections presence: Body and Headers wholly removed', () => {
    expect(wholeAction(child(response(build('responses/07-response-body-only-media-type-removed'), '200'), OpenApiTreeNodeKinds.CONTENT))).toBe(DiffAction.remove)
    expect(wholeAction(child(response(build('responses/08-response-body-only-schema-removed'), '200'), OpenApiTreeNodeKinds.CONTENT))).toBe(DiffAction.remove)
    expect(wholeAction(child(response(build('responses/09-response-all-headers-removed'), '200'), OpenApiTreeNodeKinds.RESPONSE_HEADERS))).toBe(DiffAction.remove)
  })

  it('Response and Responses Object extensions', () => {
    const tree = build('responses/13-responses-and-response-extensions-changed')
    const responsesExtensions = child(root(tree), OpenApiTreeNodeKinds.EXTENSIONS, 'responsesExtensions')
    expect(wholeAction(responsesExtensions)).toBe(DiffAction.add)
    const responseExtensions = child(response(tree, '200'), OpenApiTreeNodeKinds.EXTENSIONS)
    const rawValues = responseExtensions.value()
    expect(recordOf(isObject(rawValues) ? rawValues.rawValues : undefined)['x-cache']?.action).toBe(DiffAction.replace)
  })
})

describe('OpenAPI with diffs: security', () => {
  it('alternative added', () => {
    const alternatives = security(build('security/01-alternative-added')).childrenNodes()
    expect(alternatives.map(wholeAction)).toEqual([undefined, DiffAction.add])
  })

  it('scope added becomes a requiredScopes replace with both lists', () => {
    const scheme = security(build('security/02-scope-added')).childrenNodes()[0].childrenNodes()[0]
    expect(scheme.diffs.requiredScopes?.data).toMatchObject({
      action: DiffAction.replace,
      beforeValue: ['orders:write'],
      afterValue: ['orders:write', 'orders:read'],
    })
  })

  it('scheme added to an alternative is a wholly added card', () => {
    const alternative = security(build('security/03-scheme-added-to-alternative')).childrenNodes()[0]
    expect(alternative.childrenNodes().map(scheme => [scheme.key, wholeAction(scheme)])).toEqual([
      ['oauth', undefined],
      ['basic', DiffAction.add],
    ])
  })

  it('scheme definition changes reach the flow rows', () => {
    const flow = security(build('security/04-scheme-definition-changed')).childrenNodes()[0].childrenNodes()[0].childrenNodes()[0]
    expect(flow.diffs.tokenUrl?.data.action).toBe(DiffAction.replace)
    expect(flow.diffs.scopes?.data.action).toBe(DiffAction.replace)
  })

  it('switch from the document security to an operation override', () => {
    const node = security(build('security/05-root-security-overridden'))
    expect(node.childrenNodes().map(alternative => [alternative.value(), wholeAction(alternative)])).toEqual([
      [{ schemeNames: ['oauth'], isAnonymous: false }, DiffAction.add],
      [{ schemeNames: ['api_key'], isAnonymous: false }, DiffAction.remove],
    ])
  })

  it('security: [] removes the whole section', () => {
    expect(wholeAction(security(build('security/06-security-removed')))).toBe(DiffAction.remove)
  })
})

describe('OpenAPI with diffs: side accessors', () => {
  it('resolves a replaced field per side', () => {
    const flow = security(build('security/04-scheme-definition-changed')).childrenNodes()[0].childrenNodes()[0].childrenNodes()[0]
    expect(OpenApiRowDiffs.NodeLevel.resolveSideField(flow, 'tokenUrl', ORIGIN_LAYOUT_SIDE)).toBe('https://auth.example.com/token')
    expect(OpenApiRowDiffs.NodeLevel.resolveSideField(flow, 'tokenUrl', CHANGED_LAYOUT_SIDE)).toBe('https://auth.example.com/oauth2/token')
  })

  it('hides fields of a wholly added node on the origin side and keeps its type badge undecorated', () => {
    const scheme = child(security(build('security/03-scheme-added-to-alternative')).childrenNodes()[0], OpenApiTreeNodeKinds.SECURITY_SCHEME, 'basic')
    expect(OpenApiRowDiffs.NodeLevel.resolveSideField(scheme, 'type', ORIGIN_LAYOUT_SIDE)).toBeUndefined()
    expect(OpenApiRowDiffs.NodeLevel.resolveSideField(scheme, 'type', CHANGED_LAYOUT_SIDE)).toBe('http')
    expect(OpenApiRowDiffs.SecurityScheme.takeTypeBadgeDiff(scheme)).toBeUndefined()
  })
})
