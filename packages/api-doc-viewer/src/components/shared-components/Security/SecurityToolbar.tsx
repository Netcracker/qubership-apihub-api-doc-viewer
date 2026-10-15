import { useLayoutMode } from "@apihub/contexts/LayoutModeContext"
import { CHANGED_LAYOUT_SIDE, LayoutSide, ORIGIN_LAYOUT_SIDE } from "@apihub/types/internal/LayoutSide"
import { SIDE_BY_SIDE_DIFFS_LAYOUT_MODE } from "@apihub/types/LayoutMode"
import { buildDiffCauseByPathCausedAt } from "@apihub/utils/common/changes"
import { resolveStripScrollState, resolveStripScrollTarget, StripItemBox } from "@apihub/utils/common/strip-scroll"
import { DiffsClassesBuilder } from "@netcracker/qubership-apihub-next-data-model/building-service/abstract/tree-with-diffs/node-diffs-data/utilities"
import { ITreeNode } from "@netcracker/qubership-apihub-next-data-model/model/abstract/tree/tree-node.interface"
import {
  ChangedPropertyMetaData,
  NodeDiffsSeverity,
} from "@netcracker/qubership-apihub-next-data-model/model/abstract/tree-with-diffs/tree-node.interface"
import { ReactElement, useCallback, useEffect, useRef, useState } from "react"
import { ChevronIcon } from "../../kit/icons/ChevronIcon"
import { DiffFloatingBadgeWrapper } from "../DiffFloatingBadgeWrapper/DiffFloatingBadgeWrapper"
import { OneSideLayout } from "../Layout/OneSideLayout"
import { SideBySideLayout } from "../Layout/SideBySideLayout"
import { Selector, SelectorOption } from "../Selector/Selector"
import { SelectorVariant } from "../Selector/types"
import { ATTRIBUTE_PRECEDED_BY, WithPrecededByProps } from "../WithPrecededByProps"
import { X_AXIS_PADDING_ROWS_ASYNC_API } from "../../shared-styles/tailwind-classnames"

type SecurityToolbarProps<N extends ITreeNode> = WithPrecededByProps & {
  options: SelectorOption<N>[]
  selectedOption: SelectorOption<N> | null
  onSelectOption: (option: SelectorOption<N>) => void
  /** Row background: a whole section add / remove, or `replace` when an option was added / removed. */
  diff?: ChangedPropertyMetaData
  severity?: NodeDiffsSeverity
}

/**
 * Security toolbar: `‹ [option] [option] … ›`. The options form one non-wrapping line in a strip;
 * each arrow scrolls by one option and is disabled (gray, not interactive) at its edge.
 * Shared by every security section (OpenAPI operations now, AsyncAPI servers later).
 * Design: docs/design/openapi/entities/security.md -> "Security toolbar".
 */
export function SecurityToolbar<N extends ITreeNode>(props: SecurityToolbarProps<N>): ReactElement {
  const { diff, severity, [ATTRIBUTE_PRECEDED_BY]: precededBy } = props
  const layoutMode = useLayoutMode()

  const renderSide = (layoutSide: LayoutSide): ReactElement => {
    const styles = diff ? (layoutSide === ORIGIN_LAYOUT_SIDE ? diff.styles.before : diff.styles.after) : undefined
    return (
      <div
        data-precededby={precededBy}
        data-testid="security-toolbar"
        className={`security-toolbar flex w-full h-full items-center gap-1 ${X_AXIS_PADDING_ROWS_ASYNC_API} ${styles ? DiffsClassesBuilder.background(styles.backgroundColor) : ''}`}
      >
        <SecurityOptionsStrip {...props} layoutSide={layoutSide} />
      </div>
    )
  }

  if (layoutMode === SIDE_BY_SIDE_DIFFS_LAYOUT_MODE) {
    return (
      <DiffFloatingBadgeWrapper diffType={severity?.type} diffTypeCause={buildDiffCauseByPathCausedAt(severity?.causedAt)} hidden={false}>
        <SideBySideLayout left={renderSide(ORIGIN_LAYOUT_SIDE)} right={renderSide(CHANGED_LAYOUT_SIDE)} />
      </DiffFloatingBadgeWrapper>
    )
  }
  return <OneSideLayout content={renderSide(CHANGED_LAYOUT_SIDE)} />
}

function SecurityOptionsStrip<N extends ITreeNode>(props: SecurityToolbarProps<N> & { layoutSide: LayoutSide }): ReactElement {
  const { options, selectedOption, onSelectOption, layoutSide } = props
  const stripRef = useRef<HTMLDivElement>(null)
  const [scrollState, setScrollState] = useState({ canScrollLeft: false, canScrollRight: false })

  const updateScrollState = useCallback(() => {
    const strip = stripRef.current
    if (strip) {
      setScrollState(resolveStripScrollState(strip.scrollLeft, strip.clientWidth, strip.scrollWidth))
    }
  }, [])

  useEffect(() => {
    updateScrollState()
    const strip = stripRef.current
    if (!strip || typeof ResizeObserver === 'undefined') {
      return
    }
    const observer = new ResizeObserver(updateScrollState)
    observer.observe(strip)
    return () => observer.disconnect()
  }, [updateScrollState, options])

  const scrollBy = (direction: 'left' | 'right'): void => {
    const strip = stripRef.current
    // strip > inset wrapper > options line > option buttons
    const buttons = strip?.firstElementChild?.firstElementChild?.children
    if (!strip || !buttons) {
      return
    }
    const items: StripItemBox[] = Array.from(buttons)
      .filter((button): button is HTMLElement => button instanceof HTMLElement)
      .map(button => ({ left: button.offsetLeft, width: button.offsetWidth }))
    const target = resolveStripScrollTarget(items, strip.scrollLeft, strip.clientWidth, direction, OPTION_DECORATION_INSET)
    if (target !== undefined) {
      strip.scrollTo({ left: target, behavior: 'smooth' })
    }
  }

  return (
    <>
      <StripArrow direction="left" enabled={scrollState.canScrollLeft} onClick={() => scrollBy('left')} />
      <div
        ref={stripRef}
        onScroll={updateScrollState}
        className="security-toolbar-strip relative min-w-0 flex-1 overflow-x-auto"
        style={{ scrollbarWidth: 'none' }}
      >
        {/* Inset: round markers and border shadows sit outside the option boxes; the scrolling strip
            would clip them at its edges otherwise. A block wrapper, so an option's max-width (100%)
            is the strip's width; the right inset is the last option's margin (Selector.css). */}
        <div className="security-toolbar-strip-inset" style={{ padding: `${OPTION_DECORATION_INSET}px 0 ${OPTION_DECORATION_INSET}px ${OPTION_DECORATION_INSET}px` }}>
          <Selector
            options={options}
            selectedOption={selectedOption}
            onSelectOption={onSelectOption}
            variant={SelectorVariant.Secondary}
            layoutSide={layoutSide}
            noWrap={true}
          />
        </div>
      </div>
      <StripArrow direction="right" enabled={scrollState.canScrollRight} onClick={() => scrollBy('right')} />
    </>
  )
}

/** Px around the options inside the strip: a diff round marker overhangs its option by 5px. */
const OPTION_DECORATION_INSET = 6

// `p-0 border-0 bg-transparent`: the package's global `button` rule (index.css) adds padding,
// a border, and a background that would squeeze the 24px arrow to nothing.
const ARROW_RESET_CLASSES = 'p-0 border-0 bg-transparent'
const ENABLED_ARROW_CLASSES = 'text-blue-600 hover:bg-blue-50 cursor-pointer'
const DISABLED_ARROW_CLASSES = 'text-gray-300 cursor-default pointer-events-none'

function StripArrow(props: { direction: 'left' | 'right', enabled: boolean, onClick: () => void }): ReactElement {
  const { direction, enabled, onClick } = props
  return (
    <button
      type="button"
      data-testid={`security-toolbar-arrow-${direction}`}
      aria-label={direction === 'left' ? 'Scroll left' : 'Scroll right'}
      disabled={!enabled}
      onClick={(event) => {
        event.preventDefault()
        event.stopPropagation()
        onClick()
      }}
      className={`${ARROW_RESET_CLASSES} flex h-6 w-6 shrink-0 items-center justify-center rounded ${enabled ? ENABLED_ARROW_CLASSES : DISABLED_ARROW_CLASSES}`}
    >
      <ChevronIcon direction={direction} />
    </button>
  )
}
