import { useDisplayMode } from "@apihub/contexts/DisplayModeContext"
import { maxDiffType } from "@apihub/utils/common/changes"
import { LayoutSide, ORIGIN_LAYOUT_SIDE } from "@apihub/types/internal/LayoutSide"
import { getOpenApiChildren, isOpenApiOAuthFlowNode } from "@apihub/utils/openapi/node-type-checkers"
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
import { OpenApiNodeVisibility } from "@netcracker/qubership-apihub-next-data-model/model/openapi/node-visibility"
import { OpenApiRowDiffs, OpenApiScopeRow } from "@netcracker/qubership-apihub-next-data-model/model/openapi/tree-with-diffs/row-diffs"
import { OpenApiTreeNode } from "@netcracker/qubership-apihub-next-data-model/model/openapi/types/aliases"
import { OpenApiTreeNodeKinds } from "@netcracker/qubership-apihub-next-data-model/model/openapi/types/node-kind"
import { FC, Fragment, ReactElement, useState } from "react"
import { FramePosition } from "../../shared-components/Frame/types"
import { MarkdownTextRow } from "../../shared-components/MarkdownTextRow/MarkdownTextRow"
import {
  SecurityFlowHeaderContent,
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

type SchemeNode = OpenApiTreeNode<typeof OpenApiTreeNodeKinds.SECURITY_SCHEME>
type FlowNode = OpenApiTreeNode<typeof OpenApiTreeNodeKinds.OAUTH_FLOW>

type SecuritySchemeCardProps = {
  node: SchemeNode
  /** What the card title row follows: the toolbar for the first card, a card for the next ones. */
  precededBy: PrecededBy
}

const MUTED_TEXT_COLOR = '#8F9EB4'

type FramePositionResolver = (side: LayoutSide) => FramePosition | undefined

/** One row of the card: rendered by `render(framePosition)` once its frame position is known. */
type CardRow = {
  readonly key: string
  readonly render: (framePosition: FramePositionResolver) => ReactElement
}

/**
 * Frame positions of the rows in one pass over the rows that will be rendered (DDL
 * `buildColumnViewerContexts` pattern): rows never inspect their neighbours.
 */
function resolveFramePosition(index: number, count: number): FramePosition {
  if (count === 1) {
    return 'single'
  }
  if (index === 0) {
    return 'first'
  }
  return index === count - 1 ? 'last' : 'middle'
}

const severityOf = (diff: ChangedPropertyMetaData | undefined): NodeDiffsSeverity | undefined =>
  diff ? { type: diff.data.type, causedAt: [] } : undefined

/** The diff with the strongest type (floating badge of a row with several diffs). */
function strongestDiff(...diffs: (ChangedPropertyMetaData | undefined)[]): ChangedPropertyMetaData | undefined {
  const present = diffs.filter((diff): diff is ChangedPropertyMetaData => diff !== undefined)
  const strongest = maxDiffType(new Set(present.map(diff => diff.data.type)))
  return present.find(diff => diff.data.type === strongest)
}

/** Collects card rows (the grid columns are fixed fractions of the card, nothing to measure). */
class CardRows {
  public readonly rows: CardRow[] = []

  public add(row: CardRow): void {
    this.rows.push(row)
  }
}

/** Framed card of one security scheme of the selected alternative. Design: entities/security.md -> "Scheme card". */
export const SecuritySchemeCard: FC<SecuritySchemeCardProps> = (props) => {
  const { node, precededBy } = props
  const displayMode = useDisplayMode()
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
  card.add({
    key: 'title',
    render: (framePosition) => (
      <TitleRow
        data-precededby={precededBy}
        value={value?.name ?? String(node.key)}
        expandable={false}
        variant={TextValueVariant.h4}
        subheader={(side) => <SchemeTypeText node={node} layoutSide={side} />}
        diff={OpenApiRowDiffs.Section.takeHeaderRowDiff(node)}
        diffsSeverities={severities}
        framePosition={framePosition}
      />
    ),
  })
  if (visibility.showUnresolved) {
    card.add({
      key: 'unresolved',
      render: (framePosition) => (
        <TextRow
          data-precededby={PrecededBy.MESSAGE_SECTION_HEADER_LOW_LEVEL}
          value={OPENAPI_UNRESOLVED_SECURITY_SCHEME_TEXT}
          variant={TextValueVariant.body2}
          textFontWeight="normal"
          textColor={MUTED_TEXT_COLOR}
          diff={OpenApiRowDiffs.Section.takeHeaderRowDiff(node)}
          framePosition={framePosition}
        />
      ),
    })
  }
  if (visibility.showDescription) {
    card.add({
      key: 'description',
      render: (framePosition) => (
        <MarkdownTextRow
          data-precededby={PrecededBy.MESSAGE_SECTION_HEADER_LOW_LEVEL}
          value={value?.description ?? ''}
          variant={TextValueVariant.body2}
          diff={OpenApiRowDiffs.SecurityScheme.takeFieldRowDiff(node, 'description')}
          diffsSeverities={severities}
          diffsSeverityPlacement={NodeDiffsSeverityPlacemennt.DescriptionRow}
          framePosition={framePosition}
        />
      ),
    })
  }

  if (visibility.showParameterName) {
    const labelOf = (side: LayoutSide): string => OpenApiRowDiffs.SecurityScheme.resolveParameterNameLabel(node, side)
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
    flows.forEach((flow, index) => {
      if (index > 0) {
        addSpacer(card, `flow-${String(flow.key)}-gap`, OpenApiRowDiffs.Section.takeHeaderRowDiff(flow))
      }
      addFlowRows(card, flow, node, displayMode, collapsedScopes, toggleScopes)
    })
  }

  // The scheme's own list of required scopes (rows with `*`): every required scope for openIdConnect
  // and OAS 3.1 roles (no flows), the ones no flow declares for oauth2. No separate prop row.
  if (visibility.showRequiredScopeList && value) {
    const requiredOnly = OpenApiRowDiffs.SecurityScheme.resolveUndeclaredRequiredScopeRows(node)
    if (requiredOnly.length > 0) {
      if (detailed && flows.length > 0) {
        addSpacer(card, 'required-scopes-gap', undefined)
      }
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

  // Closing row: keeps the card's bottom indent and border off the content rows, so toggling
  // `Scopes` (which changes which content row is last) never changes a row's height.
  card.add({
    key: 'frame-end',
    render: (framePosition) => (
      <SecurityRow variant="frame-end" framePosition={framePosition} diff={OpenApiRowDiffs.Section.takeHeaderRowDiff(node)} renderSide={() => null} />
    ),
  })

  const isPresent = (side: LayoutSide): boolean => OpenApiRowDiffs.SecurityScheme.isCardPresentOnSide(node, side)
  return (
    <div data-testid={`security-scheme-${String(node.key)}`} className="flex flex-col">
      {card.rows.map((row, index) => {
        const position = resolveFramePosition(index, card.rows.length)
        return <Fragment key={row.key}>{row.render(side => isPresent(side) ? position : undefined)}</Fragment>
      })}
    </div>
  )
}

type FieldPropRowParams = {
  key: string
  node: SchemeNode | FlowNode
  field: string
  label: (side: LayoutSide) => string
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
    render: (framePosition) => (
      <SecurityRow
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

function addSpacer(card: CardRows, key: string, diff: ChangedPropertyMetaData | undefined): void {
  card.add({
    key,
    render: (framePosition) => <SecurityRow variant="spacer" framePosition={framePosition} diff={diff} renderSide={() => null} />,
  })
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
    render: (framePosition) => (
      <SecurityRow
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
    render: (framePosition) => (
      <SecurityRow
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
      render: (framePosition) => (
        <SecurityRow
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

/** Gray type text in the title row (JSON Schema / DDL type-label look); a type change highlights it. */
const SchemeTypeText: FC<{ node: SchemeNode, layoutSide: LayoutSide }> = ({ node, layoutSide }) => {
  const label = OpenApiDisplayLabels.securitySchemeType(OpenApiRowDiffs.NodeLevel.resolveSideField(node, 'type', layoutSide))
  if (!label) {
    return <></>
  }
  const highlighter = resolveValueHighlighter(OpenApiRowDiffs.SecurityScheme.takeTypeTextDiff(node), layoutSide)
  return <span className={`title-row-subheader-value subheader text ${highlighter}`}>{label}</span>
}
