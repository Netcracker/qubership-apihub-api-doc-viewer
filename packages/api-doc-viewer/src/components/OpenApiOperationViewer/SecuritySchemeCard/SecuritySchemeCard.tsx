import { BLOCK_CONTENT_DIFF_COLOR_MAP } from "../../../consts/changes"
import { useDisplayMode } from "@apihub/contexts/DisplayModeContext"
import { LayoutSide, ORIGIN_LAYOUT_SIDE } from "@apihub/types/internal/LayoutSide"
import { getOpenApiChildren, isOpenApiOAuthFlowNode } from "@apihub/utils/openapi/node-type-checkers"
import {
  ChangedPropertyMetaData,
  HighlightVariant,
  NodeDiffsSeverities,
  NodeDiffsSeverityPlacemennt,
} from "@netcracker/qubership-apihub-next-data-model/model/abstract/tree-with-diffs/tree-node.interface"
import { OPENAPI_UNRESOLVED_SECURITY_SCHEME_TEXT, OpenApiDisplayLabels } from "@netcracker/qubership-apihub-next-data-model/model/openapi/display/labels"
import { OpenApiNodeVisibility } from "@netcracker/qubership-apihub-next-data-model/model/openapi/node-visibility"
import { OpenApiRowDiffs, OpenApiSideListItem } from "@netcracker/qubership-apihub-next-data-model/model/openapi/tree-with-diffs/row-diffs"
import { OpenApiTreeNode } from "@netcracker/qubership-apihub-next-data-model/model/openapi/types/aliases"
import { OpenApiTreeNodeKinds } from "@netcracker/qubership-apihub-next-data-model/model/openapi/types/node-kind"
import { FC, Fragment, ReactElement } from "react"
import { getUxBadgeColorSchema } from "../../kit/ux/UxBadge/consts"
import { BADGE_KIND_DEFAULT } from "../../kit/ux/UxBadge/types"
import { UxBadge } from "../../kit/ux/UxBadge/UxBadge"
import { UxTooltip } from "../../kit/ux/UxTooltip/UxTooltip"
import { AdditionalInfoPiece } from "../../shared-components/AdditionalInfoPiece/AdditionalInfoPiece"
import { AdditionalInfoRow } from "../../shared-components/AdditionalInfoRow/AdditionalInfoRow"
import { FramePosition } from "../../shared-components/Frame/types"
import { MarkdownTextRow } from "../../shared-components/MarkdownTextRow/MarkdownTextRow"
import { TextRow } from "../../shared-components/TextRow/TextRow"
import { TextValueVariant } from "../../shared-components/TextValue/types"
import { TitleRow } from "../../shared-components/TitleRow/TitleRow"
import { PrecededBy } from "../../shared-components/WithPrecededByProps"
import '../../shared-styles/frame.css'
import { takeOpenApiSeverities } from "../diff-state"

type SchemeNode = OpenApiTreeNode<typeof OpenApiTreeNodeKinds.SECURITY_SCHEME>
type FlowNode = OpenApiTreeNode<typeof OpenApiTreeNodeKinds.OAUTH_FLOW>

type SecuritySchemeCardProps = {
  node: SchemeNode
  /** What the card title row follows: the selector row for the first card, a card for the next ones. */
  precededBy: PrecededBy
}

const MUTED_TEXT_COLOR = '#8F9EB4'

/** One row of the card: rendered by `render(framePosition)` once its frame position is known. */
type CardRow = {
  readonly key: string
  readonly render: (framePosition: (side: LayoutSide) => FramePosition | undefined) => ReactElement
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

/** Framed card of one security scheme of the selected alternative. Design: entities/security.md -> "Scheme card". */
export const SecuritySchemeCard: FC<SecuritySchemeCardProps> = (props) => {
  const { node, precededBy } = props
  const displayMode = useDisplayMode()
  const value = node.value()
  const severities = takeOpenApiSeverities(node)
  const visibility = OpenApiNodeVisibility.resolveSecurityScheme(value, displayMode)
  const flows = getOpenApiChildren(node, isOpenApiOAuthFlowNode)

  const rows: CardRow[] = []
  rows.push({
    key: 'title',
    render: (framePosition) => (
      <TitleRow
        data-precededby={precededBy}
        value={value?.name ?? String(node.key)}
        expandable={false}
        variant={TextValueVariant.h4}
        subheader={(side) => <SchemeTypeBadge node={node} layoutSide={side} />}
        diff={OpenApiRowDiffs.Section.takeHeaderRowDiff(node)}
        diffsSeverities={severities}
        framePosition={framePosition}
      />
    ),
  })
  if (visibility.showUnresolved) {
    rows.push({
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
    rows.push({
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
  const fieldRows: ReadonlyArray<readonly [boolean, string, string, NodeDiffsSeverityPlacemennt]> = [
    [visibility.showLocation, 'in', 'In', NodeDiffsSeverityPlacemennt.SecuritySchemeLocationRow],
    [visibility.showParameterName, 'parameterName', 'Name', NodeDiffsSeverityPlacemennt.SecuritySchemeParameterNameRow],
    [visibility.showHttpScheme, 'scheme', 'Scheme', NodeDiffsSeverityPlacemennt.SecuritySchemeHttpSchemeRow],
    [visibility.showBearerFormat, 'bearerFormat', 'Bearer format', NodeDiffsSeverityPlacemennt.SecuritySchemeBearerFormatRow],
    [visibility.showOpenIdConnectUrl, 'openIdConnectUrl', 'OpenID Connect URL', NodeDiffsSeverityPlacemennt.SecuritySchemeOpenIdConnectUrlRow],
  ]
  for (const [shown, field, label, placement] of fieldRows) {
    if (shown) {
      rows.push({
        key: field,
        render: (framePosition) => (
          <FieldChipRow
            node={node}
            field={field}
            label={label}
            diff={OpenApiRowDiffs.SecurityScheme.takeFieldRowDiff(node, field)}
            diffsSeverities={severities}
            placement={placement}
            framePosition={framePosition}
          />
        ),
      })
    }
  }
  if (visibility.showRequiredScopes && value) {
    rows.push({
      key: 'requiredScopes',
      render: (framePosition) => (
        <ListChipRow
          label={OpenApiDisplayLabels.requiredScopesLabel(value.requiredScopesKind)}
          resolveItems={(side) => OpenApiRowDiffs.SecurityScheme.resolveRequiredScopesSideItems(node, side)}
          diff={OpenApiRowDiffs.NodeLevel.takeWholeNodeDiff(node)}
          diffsSeverities={severities}
          placement={NodeDiffsSeverityPlacemennt.SecurityRequiredScopesRow}
          framePosition={framePosition}
        />
      ),
    })
  }
  for (const flow of flows) {
    rows.push(...buildFlowRows(flow, displayMode))
  }

  const isPresent = (side: LayoutSide): boolean => OpenApiRowDiffs.SecurityScheme.isCardPresentOnSide(node, side)
  return (
    <div data-testid={`security-scheme-${String(node.key)}`} className="flex flex-col">
      {rows.map((row, index) => {
        const position = resolveFramePosition(index, rows.length)
        return <Fragment key={row.key}>{row.render(side => isPresent(side) ? position : undefined)}</Fragment>
      })}
    </div>
  )
}

function buildFlowRows(flow: FlowNode, displayMode: ReturnType<typeof useDisplayMode>): CardRow[] {
  const value = flow.value()
  const severities = takeOpenApiSeverities(flow)
  const visibility = OpenApiNodeVisibility.resolveOAuthFlow(value, displayMode)
  const rows: CardRow[] = [{
    key: `flow-${String(flow.key)}`,
    render: (framePosition) => (
      <TitleRow
        data-precededby={PrecededBy.MESSAGE_SECTION_HEADER_LOW_LEVEL}
        value={value ? OpenApiDisplayLabels.oauthFlowTitle(value.flowType) : String(flow.key)}
        expandable={false}
        variant={TextValueVariant.h5}
        diff={OpenApiRowDiffs.Section.takeHeaderRowDiff(flow)}
        diffsSeverities={severities}
        framePosition={framePosition}
      />
    ),
  }]
  const urlRows: ReadonlyArray<readonly [boolean, string, string, NodeDiffsSeverityPlacemennt]> = [
    [visibility.showAuthorizationUrl, 'authorizationUrl', 'Authorization URL', NodeDiffsSeverityPlacemennt.OAuthFlowAuthorizationUrlRow],
    [visibility.showTokenUrl, 'tokenUrl', 'Token URL', NodeDiffsSeverityPlacemennt.OAuthFlowTokenUrlRow],
    [visibility.showRefreshUrl, 'refreshUrl', 'Refresh URL', NodeDiffsSeverityPlacemennt.OAuthFlowRefreshUrlRow],
  ]
  for (const [shown, field, label, placement] of urlRows) {
    if (shown) {
      rows.push({
        key: `flow-${String(flow.key)}-${field}`,
        render: (framePosition) => (
          <FieldChipRow
            node={flow}
            field={field}
            label={label}
            diff={OpenApiRowDiffs.OAuthFlow.takeFieldRowDiff(flow, field)}
            diffsSeverities={severities}
            placement={placement}
            framePosition={framePosition}
          />
        ),
      })
    }
  }
  if (visibility.showScopes) {
    rows.push({
      key: `flow-${String(flow.key)}-scopes`,
      render: (framePosition) => (
        <ListChipRow
          label="Available scopes"
          resolveItems={(side) => OpenApiRowDiffs.OAuthFlow.resolveScopesSideItems(flow, side)}
          diff={OpenApiRowDiffs.NodeLevel.takeWholeNodeDiff(flow)}
          diffsSeverities={severities}
          placement={NodeDiffsSeverityPlacemennt.OAuthFlowScopesRow}
          framePosition={framePosition}
        />
      ),
    })
  }
  return rows
}

const SchemeTypeBadge: FC<{ node: SchemeNode, layoutSide: LayoutSide }> = ({ node, layoutSide }) => {
  const label = OpenApiDisplayLabels.securitySchemeType(OpenApiRowDiffs.NodeLevel.resolveSideField(node, 'type', layoutSide))
  if (!label) {
    return <></>
  }
  const diff = OpenApiRowDiffs.SecurityScheme.takeTypeBadgeDiff(node)?.data
  const colorSchema = diff
    ? `${getUxBadgeColorSchema(BADGE_KIND_DEFAULT)} ${BLOCK_CONTENT_DIFF_COLOR_MAP[diff.action] ?? ''}`
    : undefined
  return <UxBadge text={label} colorSchema={colorSchema} />
}

type FramedRowProps = {
  diff?: ChangedPropertyMetaData
  diffsSeverities?: NodeDiffsSeverities
  placement: NodeDiffsSeverityPlacemennt
  framePosition: (side: LayoutSide) => FramePosition | undefined
}

/** `Label: [value]` - the value per side, with the diff's text highlighter on a replaced value. */
const FieldChipRow: FC<FramedRowProps & { node: SchemeNode | FlowNode, field: string, label: string }> = (props) => {
  const { node, field, label, diff, diffsSeverities, placement, framePosition } = props
  return (
    <AdditionalInfoRow
      data-precededby={PrecededBy.MESSAGE_SECTION_HEADER_LOW_LEVEL}
      label={label}
      colorizingDiff={diff}
      diffsSeverities={diffsSeverities}
      diffsSeverityPlacement={placement}
      framePosition={framePosition}
      subheader={(side) => {
        const text = OpenApiRowDiffs.NodeLevel.resolveSideField(node, field, side)
        const styles = side === ORIGIN_LAYOUT_SIDE ? diff?.styles.before : diff?.styles.after
        return <AdditionalInfoPiece isVisible={text !== undefined} value={text ?? ''} textHighlighterColor={styles?.textHighlighterColor} />
      }}
    />
  )
}

/** `Label: [a] [b] …` - added / removed items get a green / red border; a hint becomes a tooltip. */
const ListChipRow: FC<FramedRowProps & { label: string, resolveItems: (side: LayoutSide) => OpenApiSideListItem[] }> = (props) => {
  const { label, resolveItems, diff, diffsSeverities, placement, framePosition } = props
  return (
    <AdditionalInfoRow
      data-precededby={PrecededBy.MESSAGE_SECTION_HEADER_LOW_LEVEL}
      label={label}
      colorizingDiff={diff}
      diffsSeverities={diffsSeverities}
      diffsSeverityPlacement={placement}
      framePosition={framePosition}
      subheader={(side) => (
        <div className="flex flex-row flex-wrap gap-1">
          {resolveItems(side).map(item => {
            const chip = (
              <AdditionalInfoPiece
                isVisible={true}
                value={item.text}
                borderShadowColor={item.change === 'added' ? HighlightVariant.Green : item.change === 'removed' ? HighlightVariant.Red : undefined}
              />
            )
            return item.hint
              ? <UxTooltip key={item.text} text={item.hint} maxWidthClass="max-w-sm">{chip}</UxTooltip>
              : <div key={item.text}>{chip}</div>
          })}
        </div>
      )}
    />
  )
}
