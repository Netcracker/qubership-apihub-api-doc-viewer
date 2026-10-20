import { useDisplayMode } from "@apihub/contexts/DisplayModeContext"
import { CHANGED_LAYOUT_SIDE, LayoutSide, ORIGIN_LAYOUT_SIDE } from "@apihub/types/internal/LayoutSide"
import { maxDiffType } from "@apihub/utils/common/changes"
import { takeSecuritySeverities } from "@apihub/utils/security/diff-state"
import { getSecurityChildren, isSecurityOAuthFlowNode } from "@apihub/utils/security/node-type-checkers"
import { DiffsClassesBuilder } from "@netcracker/qubership-apihub-next-data-model/building-service/abstract/tree-with-diffs/node-diffs-data/utilities"
import { isDetailedDisplayMode } from "@netcracker/qubership-apihub-next-data-model/model/abstract/guards/display-mode"
import {
  ChangedPropertyMetaData,
  NodeDiffsSeverity,
  NodeDiffsSeverityPlacemennt,
} from "@netcracker/qubership-apihub-next-data-model/model/abstract/tree-with-diffs/tree-node.interface"
import { OpenApiBlockEdges, OpenApiLayoutPlanner } from "@netcracker/qubership-apihub-next-data-model/model/openapi/layout"
import { SECURITY_OAUTH_FLOW_HEADER_PREFIX, SECURITY_PROP_LABELS } from "@netcracker/qubership-apihub-next-data-model/model/security/display/labels"
import { SecurityPresentation } from "@netcracker/qubership-apihub-next-data-model/model/security/presentation"
import { SecurityRowDiffs, SecurityScopeRow } from "@netcracker/qubership-apihub-next-data-model/model/security/tree-with-diffs/row-diffs"
import { SecurityTreeNode } from "@netcracker/qubership-apihub-next-data-model/model/security/types/aliases"
import { SecurityTreeNodeKinds } from "@netcracker/qubership-apihub-next-data-model/model/security/types/node-kind"
import { FC, Fragment, ReactElement, ReactNode, useState } from "react"
import { OpenApiBlock, OpenApiLayout } from "../../OpenApiOperationViewer/OpenApiLayout"
import { useOpenApiViewerContext } from "../../OpenApiOperationViewer/OpenApiViewerContext"
import { FramePosition } from "../Frame/types"
import { MarkdownTextRow } from "../MarkdownTextRow/MarkdownTextRow"
import { TextRow } from "../TextRow/TextRow"
import { TextValueVariant } from "../TextValue/types"
import { TitleRow } from "../TitleRow/TitleRow"
import { PrecededBy } from "../WithPrecededByProps"
import {
  SecurityFlowHeaderContent,
  SecurityFrameRow,
  SecurityPropContent,
  SecurityPropValue,
  SecurityRow,
  SecurityScopeContent,
  SecurityScopesToggleContent,
} from "./SecurityRows"
import { resolveValueHighlighter } from "./value-highlighter"

export type SecuritySchemeNode = SecurityTreeNode<typeof SecurityTreeNodeKinds.SECURITY_SCHEME>
type FlowNode = SecurityTreeNode<typeof SecurityTreeNodeKinds.OAUTH_FLOW>

/** Props of the API-type cards (`OpenApiSecuritySchemeCard`, `AsyncApiSecuritySchemeCard`). */
export type SecuritySchemeCardProps = {
  node: SecuritySchemeNode
}

type SecuritySchemeCardBaseProps = SecuritySchemeCardProps & {
  /** Labels and row visibility of the API type (data-layer instances). */
  presentation: SecurityPresentation
  /** Scheme name size; smaller than the section title it sits under (default h4 under an h2 / h3 title). */
  titleVariant?: TextValueVariant
}

const MUTED_TEXT_COLOR = '#8F9EB4'

type FramePositionResolver = (side: LayoutSide) => FramePosition | undefined

/**
 * One content row of the card; `diff` paints it and `severity` is its floating badge (the separators
 * around it continue both).
 */
type CardRow = {
  readonly key: string
  readonly diff: ChangedPropertyMetaData | undefined
  readonly severity: NodeDiffsSeverity | undefined
  readonly render: (framePosition: FramePositionResolver) => ReactElement
}

const severityOf = (diff: ChangedPropertyMetaData | undefined): NodeDiffsSeverity | undefined =>
  diff ? { type: diff.data.type, causedAt: [] } : undefined

/** The diff with the strongest type (floating badge of a row with several diffs). */
function strongestDiff(...diffs: (ChangedPropertyMetaData | undefined)[]): ChangedPropertyMetaData | undefined {
  const present = diffs.filter((diff): diff is ChangedPropertyMetaData => diff !== undefined)
  const strongest = maxDiffType(new Set(present.map(diff => diff.data.type)))
  return present.find(diff => diff.data.type === strongest)
}

/** Collects the card rows in order (the grid columns are fixed fractions of the card, nothing to measure). */
class CardRows {
  public readonly rows: CardRow[] = []

  public add(row: CardRow): void {
    this.rows.push(row)
  }

  /** Each row as a layout element: edges from its own diff and badge (next-data-model). */
  public toBlocks(framePosition: FramePositionResolver): OpenApiBlock[] {
    return this.rows.map(row => ({
      id: row.key,
      ...OpenApiBlockEdges.single(OpenApiBlockEdges.row(row)),
      payload: () => <Fragment key={row.key}>{row.render(framePosition)}</Fragment>,
    }))
  }
}

/**
 * Framed card of one security scheme of the selected alternative, for every API type: an opening
 * frame row (border at its top), the content rows with the separators around them, a closing frame
 * row (border at its bottom); frame row heights and tones from `OpenApiLayoutPlanner.frameRow`. The
 * space outside the border is the card's own half-gap in the separators of the Security level.
 * Labels (scheme types, unresolved text) and which rows a scheme type has come from `presentation`.
 * Design: docs/design/openapi/entities/security.md -> "Scheme card", docs/design/async-api/features/security.md.
 */
export const SecuritySchemeCardBase: FC<SecuritySchemeCardBaseProps> = (props) => {
  const { node, presentation, titleVariant = TextValueVariant.h4 } = props
  const { labels } = presentation
  const displayMode = useDisplayMode()
  const { spacing } = useOpenApiViewerContext()
  const detailed = isDetailedDisplayMode(displayMode)
  const value = node.value()
  const severities = takeSecuritySeverities(node)
  const visibility = presentation.visibility.resolveSecurityScheme(value, displayMode)
  const flows = getSecurityChildren(node, isSecurityOAuthFlowNode)
  const [collapsedScopes, setCollapsedScopes] = useState<ReadonlySet<string>>(new Set())
  const toggleScopes = (key: string): void => setCollapsedScopes(current => {
    const next = new Set(current)
    if (next.has(key)) {
      next.delete(key)
    } else {
      next.add(key)
    }
    return next
  })

  const card = new CardRows()
  const titleDiff = SecurityRowDiffs.Scheme.takeTitleRowDiff(node)
  card.add({
    key: 'title',
    diff: titleDiff,
    severity: severities?.[NodeDiffsSeverityPlacemennt.TitleRow],
    render: (framePosition) => (
      <TitleRow
        data-precededby={PrecededBy.OPENAPI_ROW}
        value={value?.name ?? String(node.key)}
        expandable={false}
        variant={titleVariant}
        subheader={(side) => <SchemeTypeText node={node} presentation={presentation} layoutSide={side} />}
        diff={titleDiff}
        diffsSeverities={severities}
        framePosition={framePosition}
      />
    ),
  })
  if (visibility.showUnresolved) {
    const unresolvedDiff = SecurityRowDiffs.Section.takeHeaderRowDiff(node)
    card.add({
      key: 'unresolved',
      diff: unresolvedDiff,
      severity: undefined,
      render: (framePosition) => (
        <TextRow
          data-precededby={PrecededBy.OPENAPI_ROW}
          value={labels.unresolvedSchemeText}
          variant={TextValueVariant.body2}
          textFontWeight="normal"
          textColor={MUTED_TEXT_COLOR}
          diff={unresolvedDiff}
          framePosition={framePosition}
        />
      ),
    })
  }
  if (visibility.showDescription) {
    const descriptionDiff = SecurityRowDiffs.Scheme.takeFieldRowDiff(node, 'description')
    card.add({
      key: 'description',
      diff: descriptionDiff,
      severity: severities?.[NodeDiffsSeverityPlacemennt.DescriptionRow],
      render: (framePosition) => (
        <MarkdownTextRow
          data-precededby={PrecededBy.OPENAPI_ROW}
          value={value?.description ?? ''}
          variant={TextValueVariant.body1}
          diff={descriptionDiff}
          diffsSeverities={severities}
          diffsSeverityPlacement={NodeDiffsSeverityPlacemennt.DescriptionRow}
          framePosition={framePosition}
        />
      ),
    })
  }

  if (visibility.showParameterName) {
    // Only the place word (`Header` / `Query` ...) takes the location's highlighter, never ` parameter name`.
    const locationDiff = SecurityRowDiffs.Scheme.takeParameterLocationTextDiff(node)
    const labelOf = (side: LayoutSide): ReactNode => {
      const { place, suffix } = SecurityRowDiffs.Scheme.resolveParameterNameLabel(node, side, labels)
      return <><span className={`security-prop-label-place ${resolveValueHighlighter(locationDiff, side)}`}>{place}</span>{suffix}</>
    }
    card.add(fieldPropRow({
      key: 'parameterName',
      node,
      field: 'parameterName',
      label: labelOf,
      rowDiff: SecurityRowDiffs.Scheme.takeParameterNameRowDiff(node),
      severity: severities?.[NodeDiffsSeverityPlacemennt.SecuritySchemeParameterNameRow],
    }))
  }
  if (visibility.showApiKeyLocation) {
    // AsyncAPI `apiKey`: `in` is where the key goes (`user` / `password`), shown as its label.
    card.add(fieldPropRow({
      key: 'apiKeyLocation',
      node,
      field: 'in',
      label: () => SECURITY_PROP_LABELS.apiKeyLocation,
      rowDiff: SecurityRowDiffs.Scheme.takeFieldRowDiff(node, 'in'),
      severity: severities?.[NodeDiffsSeverityPlacemennt.SecuritySchemeParameterNameRow],
      format: location => labels.apiKeyLocation(location),
    }))
  }
  const schemeFields: ReadonlyArray<readonly [boolean, string, string, NodeDiffsSeverityPlacemennt, boolean]> = [
    [visibility.showHttpScheme, 'scheme', SECURITY_PROP_LABELS.httpAuthorizationScheme, NodeDiffsSeverityPlacemennt.SecuritySchemeHttpSchemeRow, false],
    [visibility.showBearerFormat, 'bearerFormat', SECURITY_PROP_LABELS.bearerFormat, NodeDiffsSeverityPlacemennt.SecuritySchemeBearerFormatRow, false],
    [visibility.showOpenIdConnectUrl, 'openIdConnectUrl', SECURITY_PROP_LABELS.openIdConnectUrl, NodeDiffsSeverityPlacemennt.SecuritySchemeOpenIdConnectUrlRow, true],
  ]
  for (const [shown, field, label, placement, link] of schemeFields) {
    if (shown) {
      card.add(fieldPropRow({
        key: field,
        node,
        field,
        label: () => label,
        rowDiff: SecurityRowDiffs.Scheme.takeFieldRowDiff(node, field),
        severity: severities?.[placement],
        link,
      }))
    }
  }
  if (detailed) {
    flows.forEach(flow => addFlowRows(card, flow, node, presentation, displayMode, collapsedScopes, toggleScopes))
  }

  // The scheme's own list of required scopes (rows with `*`): every required scope for openIdConnect
  // and OAS 3.1 roles (no flows), the ones no flow declares for oauth2. No separate prop row.
  if (visibility.showRequiredScopeList && value) {
    const requiredOnly = SecurityRowDiffs.Scheme.resolveUndeclaredRequiredScopeRows(node)
    if (requiredOnly.length > 0) {
      addScopeRows(
        card,
        'required',
        labels.requiredScopeListLabel(value.requiredScopesKind),
        requiredOnly,
        SecurityRowDiffs.NodeLevel.takeWholeNodeDiff(node),
        severities?.[NodeDiffsSeverityPlacemennt.TitleRow],
        collapsedScopes,
        toggleScopes,
      )
    }
  }

  const isPresent = (side: LayoutSide): boolean => SecurityRowDiffs.Scheme.isCardPresentOnSide(node, side)
  const middle: FramePositionResolver = (side) => isPresent(side) ? 'middle' : undefined
  const frameRow = OpenApiLayoutPlanner.frameRow(node, spacing)
  const presence = { before: isPresent(ORIGIN_LAYOUT_SIDE), after: isPresent(CHANGED_LAYOUT_SIDE) }
  return (
    <div data-testid={`security-scheme-${String(node.key)}`} className="flex flex-col">
      <SecurityFrameRow frameRow={frameRow} position="first" presence={presence} />
      <OpenApiLayout
        blocks={card.toBlocks(middle)}
        level="card"
        outerHalves={true}
        separatorFramePositions={{ before: middle(ORIGIN_LAYOUT_SIDE), after: middle(CHANGED_LAYOUT_SIDE) }}
      />
      {/* Always the last row, so toggling `Scopes` never moves the border onto a content row. */}
      <SecurityFrameRow frameRow={frameRow} position="last" presence={presence} />
    </div>
  )
}

type FieldPropRowParams = {
  key: string
  node: SecuritySchemeNode | FlowNode
  field: string
  label: (side: LayoutSide) => ReactNode
  rowDiff: ChangedPropertyMetaData | undefined
  severity: NodeDiffsSeverity | undefined
  link?: boolean
  /** Display text of the side's raw value (a location code -> its label); the raw value by default. */
  format?: (text: string) => string | undefined
}

/** `label <gap> value`: the value per side; a replaced value gets the text highlighter. */
function fieldPropRow(params: FieldPropRowParams): CardRow {
  const { key, node, field, label, rowDiff, severity, link = false, format } = params
  const valueDiff = SecurityRowDiffs.NodeLevel.takeRowDiff(node, field)
  return {
    key,
    diff: rowDiff,
    severity,
    render: (framePosition) => (
      <SecurityRow
        data-precededby={PrecededBy.OPENAPI_ROW}
        testId={`security-prop-${key}`}
        framePosition={framePosition}
        diff={rowDiff}
        severity={severity}
        renderSide={(side) => {
          const raw = SecurityRowDiffs.NodeLevel.resolveSideField(node, field, side)
          const text = raw === undefined || !format ? raw : format(raw)
          return (
            <SecurityPropContent
              label={label(side)}
              value={text === undefined ? null : <SecurityPropValue text={text} href={link} highlighterClass={resolveValueHighlighter(valueDiff, side)} />}
            />
          )
        }}
      />
    ),
  }
}

function addFlowRows(
  card: CardRows,
  flow: FlowNode,
  scheme: SecuritySchemeNode,
  presentation: SecurityPresentation,
  displayMode: ReturnType<typeof useDisplayMode>,
  collapsedScopes: ReadonlySet<string>,
  toggleScopes: (key: string) => void,
): void {
  const value = flow.value()
  const severities = takeSecuritySeverities(flow)
  const visibility = presentation.visibility.resolveOAuthFlow(value, displayMode)
  const blockDiff = SecurityRowDiffs.Section.takeHeaderRowDiff(flow)
  const flowKey = `flow-${String(flow.key)}`
  card.add({
    key: flowKey,
    diff: blockDiff,
    severity: severities?.[NodeDiffsSeverityPlacemennt.TitleRow],
    render: (framePosition) => (
      <SecurityRow
        data-precededby={PrecededBy.OPENAPI_ROW}
        testId={`security-${flowKey}`}
        framePosition={framePosition}
        diff={blockDiff}
        severity={severities?.[NodeDiffsSeverityPlacemennt.TitleRow]}
        renderSide={() => (
          <SecurityFlowHeaderContent
            prefix={SECURITY_OAUTH_FLOW_HEADER_PREFIX}
            name={value ? presentation.labels.oauthFlowName(value.flowType) : String(flow.key)}
          />
        )}
      />
    ),
  })
  const urlFields: ReadonlyArray<readonly [boolean, 'authorizationUrl' | 'tokenUrl' | 'refreshUrl', NodeDiffsSeverityPlacemennt]> = [
    [visibility.showAuthorizationUrl, 'authorizationUrl', NodeDiffsSeverityPlacemennt.OAuthFlowAuthorizationUrlRow],
    [visibility.showTokenUrl, 'tokenUrl', NodeDiffsSeverityPlacemennt.OAuthFlowTokenUrlRow],
    [visibility.showRefreshUrl, 'refreshUrl', NodeDiffsSeverityPlacemennt.OAuthFlowRefreshUrlRow],
  ]
  for (const [shown, field, placement] of urlFields) {
    if (shown) {
      const label = SECURITY_PROP_LABELS[field]
      card.add(fieldPropRow({
        key: `${flowKey}-${field}`,
        node: flow,
        field,
        label: () => label,
        rowDiff: SecurityRowDiffs.OAuthFlow.takeFieldRowDiff(flow, field),
        severity: severities?.[placement],
        link: true,
      }))
    }
  }
  if (visibility.showScopes) {
    addScopeRows(card, flowKey, SECURITY_PROP_LABELS.scopes, SecurityRowDiffs.OAuthFlow.resolveScopeRows(flow, scheme), blockDiff, severities?.[NodeDiffsSeverityPlacemennt.TitleRow], collapsedScopes, toggleScopes)
  }
}

/** `Scopes ▾` / `Roles ▾` toggle (expanded by default) and the 2nd-level scope rows under it. */
function addScopeRows(
  card: CardRows,
  key: string,
  label: string,
  scopes: readonly SecurityScopeRow[],
  blockDiff: ChangedPropertyMetaData | undefined,
  /** Severity of the whole block (flow / card): the badge of rows painted only by the block diff. */
  blockSeverity: NodeDiffsSeverity | undefined,
  collapsedScopes: ReadonlySet<string>,
  toggleScopes: (key: string) => void,
): void {
  const expanded = !collapsedScopes.has(key)
  card.add({
    key: `${key}-scopes`,
    diff: blockDiff,
    severity: blockDiff ? blockSeverity : undefined,
    render: (framePosition) => (
      <SecurityRow
        data-precededby={PrecededBy.OPENAPI_ROW}
        framePosition={framePosition}
        diff={blockDiff}
        severity={blockDiff ? blockSeverity : undefined}
        renderSide={() => (
          <SecurityScopesToggleContent label={label} expanded={expanded} onToggle={() => toggleScopes(key)} />
        )}
      />
    ),
  })
  if (!expanded) {
    return
  }
  for (const scope of scopes) {
    // A row painted only by the whole-block diff takes the block's severity; otherwise the strongest
    // of the scope's own diffs (added / removed / description replaced, required changed).
    const ownRowDiff = scope.rowDiff !== blockDiff ? scope.rowDiff : undefined
    const rowSeverity = ownRowDiff || scope.requiredDiff
      ? severityOf(strongestDiff(ownRowDiff, scope.requiredDiff))
      : scope.rowDiff ? blockSeverity : undefined
    card.add({
      key: `${key}-scope-${scope.name}`,
      diff: scope.rowDiff,
      severity: rowSeverity,
      render: (framePosition) => (
        <SecurityRow
          data-precededby={PrecededBy.OPENAPI_ROW}
          testId={`security-scope-${scope.name}`}
          framePosition={framePosition}
          diff={scope.rowDiff}
          severity={rowSeverity}
          renderSide={(side) => {
            const sideScope = side === ORIGIN_LAYOUT_SIDE ? scope.origin : scope.changed
            return sideScope
              ? (
                <SecurityScopeContent
                  name={scope.name}
                  description={sideScope.description}
                  required={sideScope.required}
                  descriptionHighlighterClass={resolveValueHighlighter(ownRowDiff, side)}
                  requiredDiff={scope.requiredDiff}
                  layoutSide={side}
                />
              )
              : null
          }}
        />
      ),
    })
  }
}

/** Gray type text in the title row (JSON Schema / DDL type-label look); marked yellow / green / red when the type was replaced / appeared / disappeared. */
const SchemeTypeText: FC<{ node: SecuritySchemeNode, presentation: SecurityPresentation, layoutSide: LayoutSide }> = ({ node, presentation, layoutSide }) => {
  const label = presentation.labels.securitySchemeType(SecurityRowDiffs.NodeLevel.resolveSideField(node, 'type', layoutSide))
  if (!label) {
    return <></>
  }
  const highlighter = DiffsClassesBuilder.highlighter(SecurityRowDiffs.Scheme.resolveTypeTextHighlight(node, layoutSide))
  return <span className={`title-row-subheader-value subheader text ${highlighter}`}>{label}</span>
}
