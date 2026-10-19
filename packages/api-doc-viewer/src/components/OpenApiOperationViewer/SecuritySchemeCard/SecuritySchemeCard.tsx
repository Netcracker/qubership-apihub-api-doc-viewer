import { useDisplayMode } from "@apihub/contexts/DisplayModeContext"
import { maxDiffType } from "@apihub/utils/common/changes"
import { CHANGED_LAYOUT_SIDE, LayoutSide, ORIGIN_LAYOUT_SIDE } from "@apihub/types/internal/LayoutSide"
import { getOpenApiChildren, isOpenApiOAuthFlowNode } from "@apihub/utils/openapi/node-type-checkers"
import { DiffsClassesBuilder } from "@netcracker/qubership-apihub-next-data-model/building-service/abstract/tree-with-diffs/node-diffs-data/utilities"
import { isDetailedDisplayMode } from "@netcracker/qubership-apihub-next-data-model/model/abstract/guards/display-mode"
import {
  ChangedPropertyMetaData,
  NodeDiffsSeverity,
  NodeDiffsSeverityPlacemennt,
} from "@netcracker/qubership-apihub-next-data-model/model/abstract/tree-with-diffs/tree-node.interface"
import {
  OPENAPI_OAUTH_FLOW_HEADER_PREFIX,
  OPENAPI_SECURITY_PROP_LABELS,
  OPENAPI_UNRESOLVED_SECURITY_SCHEME_TEXT,
  OpenApiDisplayLabels,
} from "@netcracker/qubership-apihub-next-data-model/model/openapi/display/labels"
import { OpenApiBlockEdges, OpenApiLayoutPlanner } from "@netcracker/qubership-apihub-next-data-model/model/openapi/layout"
import { OpenApiNodeVisibility } from "@netcracker/qubership-apihub-next-data-model/model/openapi/node-visibility"
import { OpenApiRowDiffs, OpenApiScopeRow } from "@netcracker/qubership-apihub-next-data-model/model/openapi/tree-with-diffs/row-diffs"
import { OpenApiTreeNode } from "@netcracker/qubership-apihub-next-data-model/model/openapi/types/aliases"
import { OpenApiTreeNodeKinds } from "@netcracker/qubership-apihub-next-data-model/model/openapi/types/node-kind"
import { FC, Fragment, ReactElement, ReactNode, useState } from "react"
import { FramePosition } from "../../shared-components/Frame/types"
import { MarkdownTextRow } from "../../shared-components/MarkdownTextRow/MarkdownTextRow"
import {
  SecurityFlowHeaderContent,
  SecurityFrameRow,
  SecurityPropContent,
  SecurityPropValue,
  SecurityRow,
  SecurityScopeContent,
  SecurityScopesToggleContent,
} from "../../shared-components/Security/SecurityRows"
import { resolveValueHighlighter } from "../../shared-components/Security/value-highlighter"
import { TextRow } from "../../shared-components/TextRow/TextRow"
import { TextValueVariant } from "../../shared-components/TextValue/types"
import { TitleRow } from "../../shared-components/TitleRow/TitleRow"
import { PrecededBy } from "../../shared-components/WithPrecededByProps"
import { takeOpenApiSeverities } from "../diff-state"
import { OpenApiBlock, OpenApiLayout } from "../OpenApiLayout"
import { useOpenApiViewerContext } from "../OpenApiViewerContext"

type SchemeNode = OpenApiTreeNode<typeof OpenApiTreeNodeKinds.SECURITY_SCHEME>
type FlowNode = OpenApiTreeNode<typeof OpenApiTreeNodeKinds.OAUTH_FLOW>

type SecuritySchemeCardProps = {
  node: SchemeNode
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
 * Framed card of one security scheme of the selected alternative: an opening frame row (border at its
 * top), the content rows with the separators around them, a closing frame row (border at its
 * bottom); frame row heights and tones from `OpenApiLayoutPlanner.frameRow`. The space outside the
 * border is the card's own half-gap in the separators of the Security level.
 * Design: entities/security.md -> "Scheme card", features/vertical-gaps.md.
 */
export const SecuritySchemeCard: FC<SecuritySchemeCardProps> = (props) => {
  const { node } = props
  const displayMode = useDisplayMode()
  const { spacing } = useOpenApiViewerContext()
  const detailed = isDetailedDisplayMode(displayMode)
  const value = node.value()
  const severities = takeOpenApiSeverities(node)
  const visibility = OpenApiNodeVisibility.resolveSecurityScheme(value, displayMode)
  const flows = getOpenApiChildren(node, isOpenApiOAuthFlowNode)
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
  const titleDiff = OpenApiRowDiffs.SecurityScheme.takeTitleRowDiff(node)
  card.add({
    key: 'title',
    diff: titleDiff,
    severity: severities?.[NodeDiffsSeverityPlacemennt.TitleRow],
    render: (framePosition) => (
      <TitleRow
        data-precededby={PrecededBy.OPENAPI_ROW}
        value={value?.name ?? String(node.key)}
        expandable={false}
        variant={TextValueVariant.h4}
        subheader={(side) => <SchemeTypeText node={node} layoutSide={side} />}
        diff={titleDiff}
        diffsSeverities={severities}
        framePosition={framePosition}
      />
    ),
  })
  if (visibility.showUnresolved) {
    const unresolvedDiff = OpenApiRowDiffs.Section.takeHeaderRowDiff(node)
    card.add({
      key: 'unresolved',
      diff: unresolvedDiff,
      severity: undefined,
      render: (framePosition) => (
        <TextRow
          data-precededby={PrecededBy.OPENAPI_ROW}
          value={OPENAPI_UNRESOLVED_SECURITY_SCHEME_TEXT}
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
    const descriptionDiff = OpenApiRowDiffs.SecurityScheme.takeFieldRowDiff(node, 'description')
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
    const locationDiff = OpenApiRowDiffs.SecurityScheme.takeParameterLocationTextDiff(node)
    const labelOf = (side: LayoutSide): ReactNode => {
      const { place, suffix } = OpenApiRowDiffs.SecurityScheme.resolveParameterNameLabel(node, side)
      return <><span className={`security-prop-label-place ${resolveValueHighlighter(locationDiff, side)}`}>{place}</span>{suffix}</>
    }
    card.add(fieldPropRow({
      key: 'parameterName',
      node,
      field: 'parameterName',
      label: labelOf,
      rowDiff: OpenApiRowDiffs.SecurityScheme.takeParameterNameRowDiff(node),
      severity: severities?.[NodeDiffsSeverityPlacemennt.SecuritySchemeParameterNameRow],
    }))
  }
  const schemeFields: ReadonlyArray<readonly [boolean, string, string, NodeDiffsSeverityPlacemennt, boolean]> = [
    [visibility.showHttpScheme, 'scheme', OPENAPI_SECURITY_PROP_LABELS.httpAuthorizationScheme, NodeDiffsSeverityPlacemennt.SecuritySchemeHttpSchemeRow, false],
    [visibility.showBearerFormat, 'bearerFormat', OPENAPI_SECURITY_PROP_LABELS.bearerFormat, NodeDiffsSeverityPlacemennt.SecuritySchemeBearerFormatRow, false],
    [visibility.showOpenIdConnectUrl, 'openIdConnectUrl', OPENAPI_SECURITY_PROP_LABELS.openIdConnectUrl, NodeDiffsSeverityPlacemennt.SecuritySchemeOpenIdConnectUrlRow, true],
  ]
  for (const [shown, field, label, placement, link] of schemeFields) {
    if (shown) {
      card.add(fieldPropRow({
        key: field,
        node,
        field,
        label: () => label,
        rowDiff: OpenApiRowDiffs.SecurityScheme.takeFieldRowDiff(node, field),
        severity: severities?.[placement],
        link,
      }))
    }
  }
  if (detailed) {
    flows.forEach(flow => addFlowRows(card, flow, node, displayMode, collapsedScopes, toggleScopes))
  }

  // The scheme's own list of required scopes (rows with `*`): every required scope for openIdConnect
  // and OAS 3.1 roles (no flows), the ones no flow declares for oauth2. No separate prop row.
  if (visibility.showRequiredScopeList && value) {
    const requiredOnly = OpenApiRowDiffs.SecurityScheme.resolveUndeclaredRequiredScopeRows(node)
    if (requiredOnly.length > 0) {
      addScopeRows(
        card,
        'required',
        OpenApiDisplayLabels.requiredScopeListLabel(value.requiredScopesKind),
        requiredOnly,
        OpenApiRowDiffs.NodeLevel.takeWholeNodeDiff(node),
        severities?.[NodeDiffsSeverityPlacemennt.TitleRow],
        collapsedScopes,
        toggleScopes,
      )
    }
  }

  const isPresent = (side: LayoutSide): boolean => OpenApiRowDiffs.SecurityScheme.isCardPresentOnSide(node, side)
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
  node: SchemeNode | FlowNode
  field: string
  label: (side: LayoutSide) => ReactNode
  rowDiff: ChangedPropertyMetaData | undefined
  severity: NodeDiffsSeverity | undefined
  link?: boolean
}

/** `label <gap> value`: the value per side; a replaced value gets the text highlighter. */
function fieldPropRow(params: FieldPropRowParams): CardRow {
  const { key, node, field, label, rowDiff, severity, link = false } = params
  const valueDiff = OpenApiRowDiffs.NodeLevel.takeRowDiff(node, field)
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
          const text = OpenApiRowDiffs.NodeLevel.resolveSideField(node, field, side)
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
  scheme: SchemeNode,
  displayMode: ReturnType<typeof useDisplayMode>,
  collapsedScopes: ReadonlySet<string>,
  toggleScopes: (key: string) => void,
): void {
  const value = flow.value()
  const severities = takeOpenApiSeverities(flow)
  const visibility = OpenApiNodeVisibility.resolveOAuthFlow(value, displayMode)
  const blockDiff = OpenApiRowDiffs.Section.takeHeaderRowDiff(flow)
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
            prefix={OPENAPI_OAUTH_FLOW_HEADER_PREFIX}
            name={value ? OpenApiDisplayLabels.oauthFlowName(value.flowType) : String(flow.key)}
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
      const label = OPENAPI_SECURITY_PROP_LABELS[field]
      card.add(fieldPropRow({
        key: `${flowKey}-${field}`,
        node: flow,
        field,
        label: () => label,
        rowDiff: OpenApiRowDiffs.OAuthFlow.takeFieldRowDiff(flow, field),
        severity: severities?.[placement],
        link: true,
      }))
    }
  }
  if (visibility.showScopes) {
    addScopeRows(card, flowKey, OPENAPI_SECURITY_PROP_LABELS.scopes, OpenApiRowDiffs.OAuthFlow.resolveScopeRows(flow, scheme), blockDiff, severities?.[NodeDiffsSeverityPlacemennt.TitleRow], collapsedScopes, toggleScopes)
  }
}

/** `Scopes ▾` / `Roles ▾` toggle (expanded by default) and the 2nd-level scope rows under it. */
function addScopeRows(
  card: CardRows,
  key: string,
  label: string,
  scopes: readonly OpenApiScopeRow[],
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
const SchemeTypeText: FC<{ node: SchemeNode, layoutSide: LayoutSide }> = ({ node, layoutSide }) => {
  const label = OpenApiDisplayLabels.securitySchemeType(OpenApiRowDiffs.NodeLevel.resolveSideField(node, 'type', layoutSide))
  if (!label) {
    return <></>
  }
  const highlighter = DiffsClassesBuilder.highlighter(OpenApiRowDiffs.SecurityScheme.resolveTypeTextHighlight(node, layoutSide))
  return <span className={`title-row-subheader-value subheader text ${highlighter}`}>{label}</span>
}
