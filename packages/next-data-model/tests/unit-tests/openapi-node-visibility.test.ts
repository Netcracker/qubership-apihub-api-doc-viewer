import { OpenApiTreeBuilder } from '../../src/building-service/openapi/tree/builder'
import { OpenApiDisplayLabels } from '../../src/model/openapi/display/labels'
import { OpenApiNodeVisibility } from '../../src/model/openapi/node-visibility'
import { OpenApiRowDiffs } from '../../src/model/openapi/tree-with-diffs/row-diffs'
import { OpenApiTreeNodeValueTypeSecurityScheme } from '../../src/model/openapi/types/node-value'
import { loadNormalizedOpenApiSample } from '../helpers/openapi-fixtures'

const scheme = (type: string, requiredScopesKind: OpenApiTreeNodeValueTypeSecurityScheme['requiredScopesKind']): OpenApiTreeNodeValueTypeSecurityScheme => ({
  name: type,
  isResolved: true,
  type,
  requiredScopes: ['openid', 'admin'],
  requiredScopesKind,
})

describe('OpenAPI security scheme: required scope list', () => {
  it.each([
    ['oauth2', 'scopes', true],
    ['openIdConnect', 'scopes', true],
    ['apiKey', 'roles', true],
    ['http', 'roles', true],
    ['apiKey', 'ignored', false],
  ] as const)('%s (%s): list shown in detailed mode = %s', (type, kind, shown) => {
    expect(OpenApiNodeVisibility.resolveSecurityScheme(scheme(type, kind), 'detailed').showRequiredScopeList).toBe(shown)
    expect(OpenApiNodeVisibility.resolveSecurityScheme(scheme(type, kind), 'simple').showRequiredScopeList).toBe(false)
  })

  it.each([
    ['oas30/fields/security/15-openid-connect-required-scope', 'openid-connect', ['openid'], 'Scopes'],
    ['oas31/fields/security/02-roles-on-api-key', 'api_key', ['admin', 'auditor'], 'Roles'],
  ])('%s: every requirement scope is a required row (no flows)', (caseId, schemeName, names, label) => {
    const tree = new OpenApiTreeBuilder({ source: loadNormalizedOpenApiSample(caseId), operationKeys: { path: '/orders', method: 'post' } }).build()
    const alternatives = tree.root?.childrenNodes().find(child => child.kind === 'security')?.childrenNodes() ?? []
    const node = alternatives.flatMap(alternative => alternative.childrenNodes()).find(candidate => candidate.key === schemeName)
    expect(node).toBeDefined()
    const rows = OpenApiRowDiffs.SecurityScheme.resolveUndeclaredRequiredScopeRows(node!)
    expect(rows.map(row => [row.name, row.origin?.required, row.changed?.required])).toEqual(names.map(name => [name, true, true]))
    const value = node!.value()
    expect(value && 'requiredScopesKind' in value ? OpenApiDisplayLabels.requiredScopeListLabel(value.requiredScopesKind) : undefined).toBe(label)
  })
})

