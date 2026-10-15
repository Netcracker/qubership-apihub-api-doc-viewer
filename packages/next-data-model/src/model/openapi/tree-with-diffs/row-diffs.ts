import { Diff, DiffAction, isDiffAdd, isDiffRemove, isDiffRename, isDiffReplace } from "@netcracker/qubership-apihub-api-diff"
import { CHANGED_LAYOUT_SIDE, LayoutSide, ORIGIN_LAYOUT_SIDE } from "../../abstract/layout-side"
import {
  ChangedPropertyMetaData,
  HighlightVariant,
  NODE_LEVEL_DIFF_KEY,
  NodeDescendantDiffsSummary,
  NodeDiffsSeverityPlacemennt,
} from "../../abstract/tree-with-diffs/tree-node.interface"
import { OpenApiDeprecatedTagRow, OpenApiOperationHeaderRow } from "../node-visibility"
import { OpenApiTreeNode, OpenApiTreeNodeWithDiffs } from "../types/aliases"
import { OpenApiExternalDocs } from "../types/node-value"
import { OpenApiApiKeyParameterNameLabel, OpenApiDisplayLabels } from "../display/labels"
import { OpenApiChangedPropertyMetaData } from "./changed-property-metadata"
import { OPENAPI_SECURITY_ALTERNATIVES_DIFF_KEY } from "./diff-keys"

type AnyOpenApiNode = OpenApiTreeNode | OpenApiTreeNodeWithDiffs

const BOTH_LAYOUT_SIDES: readonly LayoutSide[] = [ORIGIN_LAYOUT_SIDE, CHANGED_LAYOUT_SIDE]

/** One chip of a side-aware list. */
export type OpenApiSideListItem = {
  readonly text: string
  /** Tooltip text (OAuth scope description). */
  readonly hint?: string
  /** `added` on the changed side / `removed` on the origin side; absent for unchanged items. */
  readonly change?: 'added' | 'removed'
}

function isWithDiffs(node: AnyOpenApiNode): node is OpenApiTreeNodeWithDiffs {
  return 'diffs' in node && 'descendantDiffsSummary' in node
}

function isChangedPropertyMetaData(value: unknown): value is ChangedPropertyMetaData {
  return typeof value === 'object' && value !== null && 'data' in value && 'styles' in value
}

function fieldDiff(node: AnyOpenApiNode, key: string): ChangedPropertyMetaData | undefined {
  if (!isWithDiffs(node)) {
    return undefined
  }
  const diff: unknown = Reflect.get(node.diffs, key)
  return isChangedPropertyMetaData(diff) ? diff : undefined
}

function isWholeChange(diff: Diff | undefined): boolean {
  return diff !== undefined && (isDiffAdd(diff) || isDiffRemove(diff))
}

function sideValue(diff: Diff, side: LayoutSide): unknown {
  if (side === ORIGIN_LAYOUT_SIDE) {
    return isDiffRemove(diff) || isDiffReplace(diff) ? diff.beforeValue : undefined
  }
  return isDiffAdd(diff) || isDiffReplace(diff) ? diff.afterValue : undefined
}

function toStringList(value: unknown): string[] {
  return Array.isArray(value) ? value.filter((item): item is string => typeof item === 'string') : []
}

function toStringMap(value: unknown): Record<string, string> {
  const result: Record<string, string> = {}
  if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
    for (const [key, item] of Object.entries(value)) {
      result[key] = typeof item === 'string' ? item : ''
    }
  }
  return result
}

function toExternalDocs(value: unknown): OpenApiExternalDocs | null {
  if (typeof value !== 'object' || value === null) {
    return null
  }
  const url: unknown = Reflect.get(value, 'url')
  const description: unknown = Reflect.get(value, 'description')
  return typeof url === 'string'
    ? { url, ...(typeof description === 'string' ? { description } : {}) }
    : null
}

/**
 * A row diff derived from a list / map diff (one scope out of a `scopes` map replace): same type and
 * declaration paths as the parent, the row's own action and values.
 */
function deriveDiff(parent: Diff, action: 'add' | 'remove' | 'replace', beforeValue: unknown, afterValue: unknown): Diff {
  const beforeDeclarationPaths = 'beforeDeclarationPaths' in parent ? parent.beforeDeclarationPaths : []
  const afterDeclarationPaths = 'afterDeclarationPaths' in parent ? parent.afterDeclarationPaths : []
  const base = { type: parent.type, scope: parent.scope }
  switch (action) {
    case 'add':
      return { ...base, action: DiffAction.add, afterValue, afterDeclarationPaths }
    case 'remove':
      return { ...base, action: DiffAction.remove, beforeValue, beforeDeclarationPaths }
    case 'replace':
      return { ...base, action: DiffAction.replace, beforeValue, afterValue, beforeDeclarationPaths, afterDeclarationPaths }
  }
}

function sideItems(before: readonly string[], after: readonly string[], side: LayoutSide, hints: Record<string, string> = {}): OpenApiSideListItem[] {
  if (side === ORIGIN_LAYOUT_SIDE) {
    return before.map(text => ({ text, hint: hints[text], ...(after.includes(text) ? {} : { change: 'removed' as const }) }))
  }
  return after.map(text => ({ text, hint: hints[text], ...(before.includes(text) ? {} : { change: 'added' as const }) }))
}

class NodeLevel {
  /** Node-level diff of any action (rename included). */
  public static takeNodeLevelDiff(node: AnyOpenApiNode): ChangedPropertyMetaData | undefined {
    return isWithDiffs(node) ? node.diffs[NODE_LEVEL_DIFF_KEY] : undefined
  }

  /** Node-level diff unless it is a rename: "the whole node was added / removed / replaced". */
  public static takeWholeNodeDiff(node: AnyOpenApiNode): ChangedPropertyMetaData | undefined {
    const diff = NodeLevel.takeNodeLevelDiff(node)
    return diff && !isDiffRename(diff.data) ? diff : undefined
  }

  /** Whether the node exists on a side: false on the side where it was wholly added / removed. */
  public static isPresentOnSide(node: AnyOpenApiNode, side: LayoutSide): boolean {
    const diff = NodeLevel.takeNodeLevelDiff(node)?.data
    if (diff && isDiffAdd(diff)) {
      return side === CHANGED_LAYOUT_SIDE
    }
    if (diff && isDiffRemove(diff)) {
      return side === ORIGIN_LAYOUT_SIDE
    }
    return true
  }

  /** Field diff, else the whole-node diff (a row of a wholly added / removed node). */
  public static takeRowDiff(node: AnyOpenApiNode, field: string): ChangedPropertyMetaData | undefined {
    return fieldDiff(node, field) ?? NodeLevel.takeWholeNodeDiff(node)
  }

  /**
   * A string field as shown on a side: the diff's before / after value when the field changed,
   * else the merged value on the sides where the node exists.
   */
  public static resolveSideField(node: AnyOpenApiNode, field: string, side: LayoutSide): string | undefined {
    if (!NodeLevel.isPresentOnSide(node, side)) {
      return undefined
    }
    const diff = fieldDiff(node, field)?.data
    if (diff && !isDiffRename(diff)) {
      const value = sideValue(diff, side)
      return typeof value === 'string' ? value : undefined
    }
    const value: unknown = Reflect.get(node.value() ?? {}, field)
    return typeof value === 'string' ? value : undefined
  }

  /** Key of an option per side (rename aware): media types, response codes. */
  public static resolveSideKey(node: AnyOpenApiNode, side: LayoutSide): string {
    const diff = NodeLevel.takeNodeLevelDiff(node)?.data
    if (diff && isDiffRename(diff)) {
      return String(side === ORIGIN_LAYOUT_SIDE ? diff.beforeKey : diff.afterKey)
    }
    return String(node.key)
  }
}

class Section {
  /** Header-row diff of a section / subsection: a whole add / remove only. */
  public static takeHeaderRowDiff(node: AnyOpenApiNode): ChangedPropertyMetaData | undefined {
    const diff = NodeLevel.takeWholeNodeDiff(node)
    return diff && isWholeChange(diff.data) ? diff : undefined
  }
}

class Operation {
  /** Whole operation -> summary -> a deprecated change painted as a yellow title row. */
  public static takeTitleRowDiff(node: AnyOpenApiNode): ChangedPropertyMetaData | undefined {
    return NodeLevel.takeWholeNodeDiff(node)
      ?? fieldDiff(node, 'title')
      ?? Operation.takeDeprecatedRowReplace(node, 'title', 'title')
  }

  /** Whole operation -> operation ID -> a deprecated change when this row carries the tag (no title row). */
  public static takeOperationIdRowDiff(node: AnyOpenApiNode, deprecatedTagRow: OpenApiDeprecatedTagRow): ChangedPropertyMetaData | undefined {
    return NodeLevel.takeRowDiff(node, 'operationId') ?? Operation.takeDeprecatedRowReplace(node, deprecatedTagRow, 'operationId')
  }

  /** Whole operation -> path -> a deprecated change when this row carries the tag (no title, no operation ID). */
  public static takeAddressRowDiff(node: AnyOpenApiNode, deprecatedTagRow: OpenApiDeprecatedTagRow): ChangedPropertyMetaData | undefined {
    return NodeLevel.takeRowDiff(node, 'path') ?? Operation.takeDeprecatedRowReplace(node, deprecatedTagRow, 'address')
  }

  /**
   * Severity placement of the operation ID row: with the `deprecated` tag merged in when the row
   * carries the tag (the severities aggregator writes both variants; the strongest diff wins).
   */
  public static resolveOperationIdRowSeverityPlacement(deprecatedTagRow: OpenApiDeprecatedTagRow): NodeDiffsSeverityPlacemennt {
    return deprecatedTagRow === 'operationId'
      ? NodeDiffsSeverityPlacemennt.OperationIdRowWithDeprecatedTag
      : NodeDiffsSeverityPlacemennt.OperationIdRow
  }

  /**
   * Severity placement each operation header row renders (its floating badge). One accessor for the
   * rows and the layout edges, so a separator's badge stub always matches the row's real badge.
   */
  public static resolveHeaderRowSeverityPlacement(row: OpenApiOperationHeaderRow, deprecatedTagRow: OpenApiDeprecatedTagRow): NodeDiffsSeverityPlacemennt {
    switch (row) {
      case 'title':
        return NodeDiffsSeverityPlacemennt.TitleRow
      case 'operationId':
        return Operation.resolveOperationIdRowSeverityPlacement(deprecatedTagRow)
      case 'address':
        return Operation.resolveAddressRowSeverityPlacement(deprecatedTagRow)
      case 'description':
        return NodeDiffsSeverityPlacemennt.DescriptionRow
      case 'externalDocs':
        return NodeDiffsSeverityPlacemennt.ExternalDocsRow
    }
  }

  /** Severity placement of the address row, as {@link resolveOperationIdRowSeverityPlacement}. */
  public static resolveAddressRowSeverityPlacement(deprecatedTagRow: OpenApiDeprecatedTagRow): NodeDiffsSeverityPlacemennt {
    return deprecatedTagRow === 'address'
      ? NodeDiffsSeverityPlacemennt.AddressRowWithDeprecatedTag
      : NodeDiffsSeverityPlacemennt.AddressRow
  }

  /** The row diff of one operation header row (the diff that paints it). */
  public static takeHeaderRowDiff(node: AnyOpenApiNode, row: OpenApiOperationHeaderRow, deprecatedTagRow: OpenApiDeprecatedTagRow): ChangedPropertyMetaData | undefined {
    switch (row) {
      case 'title':
        return Operation.takeTitleRowDiff(node)
      case 'operationId':
        return Operation.takeOperationIdRowDiff(node, deprecatedTagRow)
      case 'address':
        return Operation.takeAddressRowDiff(node, deprecatedTagRow)
      case 'description':
        return Operation.takeDescriptionRowDiff(node)
      case 'externalDocs':
        return Operation.takeExternalDocsRowDiff(node)
    }
  }

  /**
   * A deprecated change as a yellow row (no text highlighter) on the row that carries the tag. Built
   * from a value-less `replace` copy: the deprecated add / remove itself would hide the row's text on
   * one side, and a boolean before / after value would be shown in place of the text.
   */
  private static takeDeprecatedRowReplace(node: AnyOpenApiNode, deprecatedTagRow: OpenApiDeprecatedTagRow, row: OpenApiDeprecatedTagRow): ChangedPropertyMetaData | undefined {
    const deprecated = fieldDiff(node, 'deprecated')?.data
    return deprecated && deprecatedTagRow === row
      ? OpenApiChangedPropertyMetaData.buildRowReplace(deriveDiff(deprecated, 'replace', undefined, undefined))
      : undefined
  }

  public static takeDescriptionRowDiff(node: AnyOpenApiNode): ChangedPropertyMetaData | undefined {
    return NodeLevel.takeRowDiff(node, 'description')
  }

  /** The deprecated tag's own diff; never borrowed from the node. */
  public static takeDeprecatedTagDiff(node: AnyOpenApiNode): ChangedPropertyMetaData | undefined {
    return fieldDiff(node, 'deprecated')
  }

  public static isDeprecatedOnSide(node: AnyOpenApiNode, side: LayoutSide): boolean {
    const diff = fieldDiff(node, 'deprecated')?.data
    if (diff && !isDiffRename(diff)) {
      return sideValue(diff, side) === true
    }
    const value = node.value()
    return NodeLevel.isPresentOnSide(node, side) && !!value && 'deprecated' in value && value.deprecated === true
  }

  /**
   * Row diff of the external docs link: a whole add / remove, or a replace of the URL or of the
   * description (Q16, option A: the row is yellow and the link text highlighted; each side's tooltip
   * shows its own description).
   */
  public static takeExternalDocsRowDiff(node: AnyOpenApiNode): ChangedPropertyMetaData | undefined {
    return fieldDiff(node, 'externalDocs') ?? NodeLevel.takeWholeNodeDiff(node)
  }

  public static resolveExternalDocsSide(node: AnyOpenApiNode, side: LayoutSide): OpenApiExternalDocs | null {
    if (!NodeLevel.isPresentOnSide(node, side)) {
      return null
    }
    const diff = fieldDiff(node, 'externalDocs')?.data
    if (!diff || isDiffRename(diff)) {
      const value = node.value()
      return toExternalDocs(value && 'externalDocs' in value ? value.externalDocs : undefined)
    }
    return toExternalDocs(sideValue(diff, side))
  }
}

class RequestBody {
  /** Whole body add / remove -> a required change painted as a yellow header row. */
  public static takeHeaderRowDiff(node: AnyOpenApiNode): ChangedPropertyMetaData | undefined {
    const required = fieldDiff(node, 'required')
    return Section.takeHeaderRowDiff(node)
      ?? (required ? OpenApiChangedPropertyMetaData.buildRowReplace(required.data) : undefined)
  }

  /** Side-exclusive required star. */
  public static isRequiredStarVisibleOnSide(node: AnyOpenApiNode, side: LayoutSide): boolean {
    if (!NodeLevel.isPresentOnSide(node, side)) {
      return false
    }
    const diff = fieldDiff(node, 'required')?.data
    if (diff && !isDiffRename(diff)) {
      return sideValue(diff, side) === true
    }
    const value = node.value()
    return !!value && 'required' in value && value.required === true
  }

  /** The `required` tag: only for a required change of a body that exists on both sides. */
  public static takeRequiredTagDiff(node: AnyOpenApiNode): ChangedPropertyMetaData | undefined {
    return Section.takeHeaderRowDiff(node) ? undefined : fieldDiff(node, 'required')
  }
}

class MediaType {
  /** Title of a media-type option per side (rename aware). */
  public static resolveSideTitle(node: AnyOpenApiNode, side: LayoutSide): string {
    return NodeLevel.resolveSideKey(node, side)
  }
}

class Response {
  /** Code of a response option per side (rename aware, e.g. `4xx` -> `4XX`). */
  public static resolveSideCode(node: AnyOpenApiNode, side: LayoutSide): string {
    return NodeLevel.resolveSideKey(node, side)
  }

  /** Inner changes of the response only - empty for a wholly added / removed / inherited response. */
  public static takeChangesMarkerSummary(node: AnyOpenApiNode): NodeDescendantDiffsSummary {
    return isWithDiffs(node) ? node.descendantDiffsSummary : new Set()
  }
}

class Security {
  /**
   * Security toolbar row: a whole section add / remove, else a yellow row when any alternative
   * (toolbar option) was wholly added or removed - the option itself keeps its green / red border.
   */
  public static takeToolbarRowDiff(node: AnyOpenApiNode): ChangedPropertyMetaData | undefined {
    const options = fieldDiff(node, OPENAPI_SECURITY_ALTERNATIVES_DIFF_KEY)
    return Section.takeHeaderRowDiff(node) ?? (options ? OpenApiChangedPropertyMetaData.buildRowReplace(options.data) : undefined)
  }

}

/** One side of a scope row; absent = the scope does not exist on that side. */
export type OpenApiScopeRowSide = {
  readonly description: string
  readonly required: boolean
}

/** A 2nd-level security prop: one OAuth scope (or a required scope no flow declares). */
export type OpenApiScopeRow = {
  readonly name: string
  readonly origin?: OpenApiScopeRowSide
  readonly changed?: OpenApiScopeRowSide
  /**
   * Row background: scope added / removed / description replaced (text highlighter); a synthetic
   * yellow `replace` when only the required status changed; or the inherited whole-block diff.
   */
  readonly rowDiff?: ChangedPropertyMetaData
  /** `required` badge + side-exclusive `*`: the scope exists on both sides and its required status changed. */
  readonly requiredDiff?: ChangedPropertyMetaData
}

function requiredScopesOnSide(scheme: AnyOpenApiNode, side: LayoutSide): ReadonlySet<string> {
  return NodeLevel.isPresentOnSide(scheme, side)
    ? new Set(SecurityScheme.resolveRequiredScopesSideItems(scheme, side).map(item => item.text))
    : new Set()
}

function buildScopeRow(
  name: string,
  origin: OpenApiScopeRowSide | undefined,
  changed: OpenApiScopeRowSide | undefined,
  scopesDiff: Diff | undefined,
  requiredScopesDiff: Diff | undefined,
  inheritedDiff: ChangedPropertyMetaData | undefined,
): OpenApiScopeRow {
  let ownRowDiff: Diff | undefined
  if (scopesDiff && origin && !changed) {
    ownRowDiff = deriveDiff(scopesDiff, 'remove', origin.description, undefined)
  } else if (scopesDiff && !origin && changed) {
    ownRowDiff = deriveDiff(scopesDiff, 'add', undefined, changed.description)
  } else if (scopesDiff && origin && changed && origin.description !== changed.description) {
    ownRowDiff = deriveDiff(scopesDiff, 'replace', origin.description, changed.description)
  }
  const requiredChanged = !!origin && !!changed && origin.required !== changed.required
  const requiredDiff = requiredChanged && requiredScopesDiff
    ? deriveDiff(requiredScopesDiff, changed.required ? 'add' : 'remove', origin.required || undefined, changed.required || undefined)
    : undefined
  // Row background: the scope's own change; else a synthetic yellow `replace` (no text highlighter)
  // when only its required status changed; else the inherited whole-block diff.
  const rowDiff = ownRowDiff
    ? OpenApiChangedPropertyMetaData.build(ownRowDiff)
    : requiredDiff ? OpenApiChangedPropertyMetaData.buildRowReplace(requiredDiff) : inheritedDiff
  return {
    name,
    ...(origin ? { origin } : {}),
    ...(changed ? { changed } : {}),
    ...(rowDiff ? { rowDiff } : {}),
    ...(requiredDiff ? { requiredDiff: OpenApiChangedPropertyMetaData.build(requiredDiff) } : {}),
  }
}

class SecurityScheme {
  public static takeFieldRowDiff(node: AnyOpenApiNode, field: string): ChangedPropertyMetaData | undefined {
    return NodeLevel.takeRowDiff(node, field)
  }

  /**
   * Card title row: a whole card add / remove, else a synthetic yellow `replace` (no text
   * highlighter) when the scheme type changed. Built from a value-less copy of the type diff, so the
   * origin title keeps the scheme name (a string `beforeValue` would be shown in its place).
   */
  public static takeTitleRowDiff(node: AnyOpenApiNode): ChangedPropertyMetaData | undefined {
    const type = SecurityScheme.takeTypeTextDiff(node)?.data
    return Section.takeHeaderRowDiff(node)
      ?? (type ? OpenApiChangedPropertyMetaData.buildRowReplace(deriveDiff(type, 'replace', undefined, undefined)) : undefined)
  }

  /**
   * The gray type text's own diff (highlighter). A type change is shown on that text only: painting
   * the title row with it would make the origin side's title read the before TYPE instead of the name.
   */
  public static takeTypeTextDiff(node: AnyOpenApiNode): ChangedPropertyMetaData | undefined {
    return Section.takeHeaderRowDiff(node) ? undefined : fieldDiff(node, 'type')
  }

  /**
   * Text highlighter of the gray type text on a side: yellow for a replaced type; green on the
   * changed side when the type appeared (e.g. the scheme definition was added to `components`);
   * red on the origin side when it disappeared. `undefined` = no marker.
   */
  public static resolveTypeTextHighlight(node: AnyOpenApiNode, side: LayoutSide): Exclude<HighlightVariant, HighlightVariant.Gray> | undefined {
    const diff = SecurityScheme.takeTypeTextDiff(node)
    if (!diff) {
      return undefined
    }
    if (isDiffAdd(diff.data)) {
      return side === CHANGED_LAYOUT_SIDE ? HighlightVariant.Green : undefined
    }
    if (isDiffRemove(diff.data)) {
      return side === ORIGIN_LAYOUT_SIDE ? HighlightVariant.Red : undefined
    }
    return (side === ORIGIN_LAYOUT_SIDE ? diff.styles.before : diff.styles.after).textHighlighterColor
  }

  /** apiKey prop label per side, from `in`: `Header parameter name`, `Query parameter name`, … */
  public static resolveParameterNameLabel(node: AnyOpenApiNode, side: LayoutSide): OpenApiApiKeyParameterNameLabel {
    return OpenApiDisplayLabels.apiKeyParameterNameLabel(NodeLevel.resolveSideField(node, 'in', side))
  }

  /**
   * The apiKey location's own diff: its text highlighter marks the place word of the label
   * (`Header` / `Query` …) on a replace; ` parameter name` and the value are never marked by it.
   */
  public static takeParameterLocationTextDiff(node: AnyOpenApiNode): ChangedPropertyMetaData | undefined {
    return fieldDiff(node, 'in')
  }

  /** apiKey prop row: a name change (highlighted value), else a location change (label only), else the whole card. */
  public static takeParameterNameRowDiff(node: AnyOpenApiNode): ChangedPropertyMetaData | undefined {
    const location = fieldDiff(node, 'in')
    return fieldDiff(node, 'parameterName')
      ?? (location ? OpenApiChangedPropertyMetaData.buildRowReplace(location.data) : undefined)
      ?? NodeLevel.takeWholeNodeDiff(node)
  }

  /** Whether the card exists on a side (no frame on the side where it was wholly added / removed). */
  public static isCardPresentOnSide(node: AnyOpenApiNode, side: LayoutSide): boolean {
    return NodeLevel.isPresentOnSide(node, side)
  }

  public static resolveRequiredScopesSideItems(node: AnyOpenApiNode, side: LayoutSide): OpenApiSideListItem[] {
    const value = node.value()
    const merged = toStringList(value && 'requiredScopes' in value ? value.requiredScopes : undefined)
    const diff = fieldDiff(node, 'requiredScopes')?.data
    if (!diff || isDiffRename(diff)) {
      return merged.map(text => ({ text }))
    }
    return sideItems(toStringList(sideValue(diff, ORIGIN_LAYOUT_SIDE)), toStringList(sideValue(diff, CHANGED_LAYOUT_SIDE)), side)
  }

  /**
   * The scheme's own list of required scopes (rows with `*`): required scopes that no flow of the
   * scheme declares on either side - for oauth2 the undeclared ones (flows mark the rest), for
   * openIdConnect and OAS 3.1 roles (no flows) all of them.
   */
  public static resolveUndeclaredRequiredScopeRows(scheme: AnyOpenApiNode): OpenApiScopeRow[] {
    const declared = new Set<string>()
    for (const flow of scheme.childrenNodes()) {
      for (const side of BOTH_LAYOUT_SIDES) {
        Object.keys(OAuthFlow.resolveSideScopes(flow, side) ?? {}).forEach(name => declared.add(name))
      }
    }
    const origin = requiredScopesOnSide(scheme, ORIGIN_LAYOUT_SIDE)
    const changed = requiredScopesOnSide(scheme, CHANGED_LAYOUT_SIDE)
    const names = [...new Set([...changed, ...origin])].filter(name => !declared.has(name))
    const requiredScopesDiff = fieldDiff(scheme, 'requiredScopes')?.data
    return names.map(name => buildScopeRow(
      name,
      origin.has(name) ? { description: '', required: true } : undefined,
      changed.has(name) ? { description: '', required: true } : undefined,
      requiredScopesDiff,
      undefined,
      NodeLevel.takeWholeNodeDiff(scheme),
    ))
  }
}

class OAuthFlow {
  public static takeFieldRowDiff(node: AnyOpenApiNode, field: string): ChangedPropertyMetaData | undefined {
    return NodeLevel.takeRowDiff(node, field)
  }

  /** Scope map of the flow on a side; `undefined` where the flow does not exist. */
  public static resolveSideScopes(node: AnyOpenApiNode, side: LayoutSide): Record<string, string> | undefined {
    if (!NodeLevel.isPresentOnSide(node, side)) {
      return undefined
    }
    const diff = fieldDiff(node, 'scopes')?.data
    if (diff && !isDiffRename(diff)) {
      return toStringMap(sideValue(diff, side))
    }
    const value = node.value()
    return toStringMap(value && 'scopes' in value ? value.scopes : undefined)
  }

  /**
   * 2nd-level scope rows of a flow: the union of both sides' scopes (after-side order, removed
   * scopes after them), each with its per-side description and required status (from the scheme's
   * requirement), its row diff, and its required diff.
   */
  public static resolveScopeRows(flow: AnyOpenApiNode, scheme: AnyOpenApiNode): OpenApiScopeRow[] {
    const originScopes = OAuthFlow.resolveSideScopes(flow, ORIGIN_LAYOUT_SIDE)
    const changedScopes = OAuthFlow.resolveSideScopes(flow, CHANGED_LAYOUT_SIDE)
    const originRequired = requiredScopesOnSide(scheme, ORIGIN_LAYOUT_SIDE)
    const changedRequired = requiredScopesOnSide(scheme, CHANGED_LAYOUT_SIDE)
    const names = [...new Set([...Object.keys(changedScopes ?? {}), ...Object.keys(originScopes ?? {})])]
    const scopesDiff = fieldDiff(flow, 'scopes')?.data
    const requiredScopesDiff = fieldDiff(scheme, 'requiredScopes')?.data
    return names.map(name => buildScopeRow(
      name,
      originScopes && name in originScopes ? { description: originScopes[name], required: originRequired.has(name) } : undefined,
      changedScopes && name in changedScopes ? { description: changedScopes[name], required: changedRequired.has(name) } : undefined,
      scopesDiff && !isDiffRename(scopesDiff) ? scopesDiff : undefined,
      requiredScopesDiff && !isDiffRename(requiredScopesDiff) ? requiredScopesDiff : undefined,
      NodeLevel.takeWholeNodeDiff(flow),
    ))
  }
}

/**
 * Row-level diff accessors of the OpenAPI tree. Viewer containers read these instead of
 * `node.diffs[...]`, so row semantics stay in the data layer.
 * Design: docs/design/openapi/features/diffs.md -> "Row diff accessors".
 */
export class OpenApiRowDiffs {
  public static readonly NodeLevel = NodeLevel
  public static readonly Section = Section
  public static readonly Operation = Operation
  public static readonly RequestBody = RequestBody
  public static readonly MediaType = MediaType
  public static readonly Response = Response
  public static readonly Security = Security
  public static readonly SecurityScheme = SecurityScheme
  public static readonly OAuthFlow = OAuthFlow
}
