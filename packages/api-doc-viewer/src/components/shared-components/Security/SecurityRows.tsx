import { useLayoutMode } from "@apihub/contexts/LayoutModeContext"
import { CHANGED_LAYOUT_SIDE, LayoutSide, ORIGIN_LAYOUT_SIDE } from "@apihub/types/internal/LayoutSide"
import { SIDE_BY_SIDE_DIFFS_LAYOUT_MODE } from "@apihub/types/LayoutMode"
import { buildDiffCauseByPathCausedAt } from "@apihub/utils/common/changes"
import { DiffsClassesBuilder } from "@netcracker/qubership-apihub-next-data-model/building-service/abstract/tree-with-diffs/node-diffs-data/utilities"
import {
  ChangedPropertyMetaData,
  NodeDiffsSeverity,
} from "@netcracker/qubership-apihub-next-data-model/model/abstract/tree-with-diffs/tree-node.interface"
import { FC, ReactElement, ReactNode } from "react"
import { TagsWithDiffs } from "../diffs/TagsWithDiffs"
import { DiffFloatingBadgeWrapper } from "../DiffFloatingBadgeWrapper/DiffFloatingBadgeWrapper"
import { Expander } from "../Expander"
import { WithFramePositionProps } from "../Frame/types"
import { OneSideLayout } from "../Layout/OneSideLayout"
import { SideBySideLayout } from "../Layout/SideBySideLayout"
import { NODE_TITLE_TEXT_CLASSES, X_AXIS_PADDING_ROWS_ASYNC_API } from "../../shared-styles/tailwind-classnames"
import "../../shared-styles/frame.css"
import "../SubheaderValue/SubheaderValue.css"
import "./SecurityRows.css"

/**
 * Building blocks of a security scheme card: one per-side row frame plus the contents that go into
 * it (label / value prop, flow header, scopes toggle, scope row). Shared by every security section
 * (OpenAPI operations now, AsyncAPI servers later); containers pass precomputed diffs only.
 * Design: docs/design/openapi/entities/security.md -> "Scheme card".
 */

type SecurityRowProps = WithFramePositionProps & {
  /** Content of one side; called only on a side where the row has content. */
  renderSide: (layoutSide: LayoutSide) => ReactNode
  /** Row background; a whole add / remove leaves the absent side empty and gray. */
  diff?: ChangedPropertyMetaData
  /** Floating severity badge of this row (own changes only, never an inherited block diff). */
  severity?: NodeDiffsSeverity
  testId?: string
  /**
   * `spacer`: the fixed gap before a flow part, painted like the block that follows it.
   * `frame-end`: the closing row of a card (bottom indent + border), always last.
   */
  variant?: 'default' | 'spacer' | 'frame-end'
}

/**
 * One card row on both sides. Vertical spacing is padding inside the row (never margins between
 * rows), so neighbouring highlighted rows join into one colored block without white seams.
 */
export const SecurityRow: FC<SecurityRowProps> = (props) => {
  const { renderSide, diff, severity, framePosition, testId, variant = 'default' } = props
  const layoutMode = useLayoutMode()

  const renderContent = (layoutSide: LayoutSide): ReactElement => {
    const styles = layoutSide === ORIGIN_LAYOUT_SIDE ? diff?.styles.before : diff?.styles.after
    const visible = styles?.isContentVisible ?? true
    return (
      <div
        data-testid={testId}
        data-frame-position={framePosition?.(layoutSide)}
        className={`security-row ${variant === 'default' ? '' : `security-row_${variant}`} flex w-full h-full items-center ${X_AXIS_PADDING_ROWS_ASYNC_API} ${styles ? DiffsClassesBuilder.background(styles.backgroundColor) : ''}`}
      >
        {visible && renderSide(layoutSide)}
      </div>
    )
  }

  if (layoutMode === SIDE_BY_SIDE_DIFFS_LAYOUT_MODE) {
    return (
      <DiffFloatingBadgeWrapper diffType={severity?.type} diffTypeCause={buildDiffCauseByPathCausedAt(severity?.causedAt)} hidden={false}>
        <SideBySideLayout left={renderContent(ORIGIN_LAYOUT_SIDE)} right={renderContent(CHANGED_LAYOUT_SIDE)} />
      </DiffFloatingBadgeWrapper>
    )
  }
  return <OneSideLayout content={renderContent(CHANGED_LAYOUT_SIDE)} />
}

type SecurityPropContentProps = {
  label: string
  value: ReactNode
}

/**
 * Grid of every security prop (1st and 2nd level): label column = 40% of the card, then a 20px gap
 * and the value. Cells align to the top. One template for both levels, so all values of a card
 * start at the same x.
 */
const SECURITY_PROP_GRID_CLASSES = 'grid w-full grid-cols-[40%_minmax(0,1fr)] items-start gap-x-5'

/**
 * 1st-level security prop: `label <20px> value`. The label uses the JSON Schema property-title text
 * (`NODE_TITLE_TEXT_CLASSES`) and wraps inside its column when longer than 40% of the card.
 */
export const SecurityPropContent: FC<SecurityPropContentProps> = ({ label, value }) => (
  <div className={`security-prop ${SECURITY_PROP_GRID_CLASSES}`}>
    <div className="security-prop-label min-w-0 break-words">
      <span className={NODE_TITLE_TEXT_CLASSES}>{label}</span>
    </div>
    <div className="security-prop-value min-w-0 break-words">{value}</div>
  </div>
)

type SecurityPropValueProps = {
  text: string
  /** Renders the value as a link (URLs). */
  href?: boolean
  highlighterClass?: string
}

export const SecurityPropValue: FC<SecurityPropValueProps> = ({ text, href = false, highlighterClass = '' }) => (
  href
    ? <a className={`security-prop-link ${highlighterClass}`} href={text} target="_blank" rel="noopener noreferrer">{text}</a>
    : <span className={`security-prop-text ${highlighterClass}`}>{text}</span>
)

/** Flow part header: `Flow type **Authorization Code**` on a light-gray plate. */
export const SecurityFlowHeaderContent: FC<{ prefix: string, name: string }> = ({ prefix, name }) => (
  <span className="security-flow-header">
    {prefix} <b>{name}</b>
  </span>
)

/**
 * `Scopes ▾` - label and expander only (no value), JSON Schema title pattern: the text and the
 * expander are both clickable; the expander comes after the text.
 */
export const SecurityScopesToggleContent: FC<{ label: string, expanded: boolean, onToggle: () => void }> = (props) => {
  const { label, expanded, onToggle } = props
  return (
    <div data-testid="security-scopes-toggle" className="security-scopes-toggle flex items-center gap-1">
      <span className={`inline-flex hover:cursor-pointer ${NODE_TITLE_TEXT_CLASSES}`} onClick={onToggle}>
        {label}
      </span>
      <Expander expandable={true} expanded={expanded} onClick={onToggle} level={0} />
    </div>
  )
}

type SecurityScopeContentProps = {
  name: string
  description: string
  required: boolean
  /** Text highlighter of a replaced description. */
  descriptionHighlighterClass: string
  /** Diffs mode: the `required` badge after the description when the required status changed. */
  requiredDiff?: ChangedPropertyMetaData
  layoutSide: LayoutSide
}

/**
 * 2nd-level security prop (one scope): `<20px offset> name * <20px> description [required]`. Same
 * grid as 1st-level props; the 20px offset is padding inside the first cell, so the name gets 40% of
 * the card minus the offset and the description starts where 1st-level values start.
 */
export const SecurityScopeContent: FC<SecurityScopeContentProps> = (props) => {
  const { name, description, required, descriptionHighlighterClass, requiredDiff, layoutSide } = props
  return (
    <div className={`security-scope ${SECURITY_PROP_GRID_CLASSES}`}>
      <div className="min-w-0 break-words pl-5">
        <span className={NODE_TITLE_TEXT_CLASSES}>{name}</span>
        {required && <sup className="ml-0.5 text-red-500">*</sup>}
      </div>
      <div className="flex min-w-0 flex-wrap items-start gap-2">
        <span className={`title-row-subheader-value subheader text ${descriptionHighlighterClass}`}>{description}</span>
        {requiredDiff && (
          <TagsWithDiffs requiredChanged={true} requiredDiff={requiredDiff} readOnly={false} writeOnly={false} layoutSide={layoutSide} />
        )}
      </div>
    </div>
  )
}
