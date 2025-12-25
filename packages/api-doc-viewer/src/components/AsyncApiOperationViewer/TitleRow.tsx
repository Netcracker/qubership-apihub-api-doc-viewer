import { useLayoutMode } from "@apihub/contexts/LayoutModeContext"
import { CHANGED_LAYOUT_SIDE, LayoutSide, ORIGIN_LAYOUT_SIDE } from "@apihub/types/internal/LayoutSide"
import { INLINE_DIFFS_LAYOUT_MODE, SIDE_BY_SIDE_DIFFS_LAYOUT_MODE } from "@apihub/types/LayoutMode"
import type { Diff } from "@netcracker/qubership-apihub-api-diff"
import { FC, memo, ReactElement, useMemo } from "react"
import { Expander } from "./Expander"
import { LevelIndicator } from "./LevelIndicator"

const TitleVariant = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  body: 'body',
} as const
type TitleVariant = typeof TitleVariant[keyof typeof TitleVariant]

type TitleRowProps = {
  value?: string // Document Mode
  diff?: Diff  // Comparison Mode
  expandable: boolean
  expanded?: boolean
  onClickExpander?: () => void
  level: number
  variant: TitleVariant
  subheader?: (layoutSide: LayoutSide) => ReactElement
}

export const TitleRow: FC<TitleRowProps> = memo<TitleRowProps>(props => {
  const { value, diff, expandable, expanded = false, onClickExpander, level, variant } = props

  const layoutMode = useLayoutMode()

  if (layoutMode === INLINE_DIFFS_LAYOUT_MODE) {
    return (
      <div style={{ fontSize: 12, marginTop: 4, marginBottom: 4 }}>
        This layout mode ({layoutMode}) is not supported.
      </div>
    )
  }

  return <TitleRowContainer {...props} />
})

type TitleRowContentProps = TitleRowProps & {
  layoutSide: LayoutSide
}

const TitleRowContent: FC<TitleRowContentProps> = memo<TitleRowContentProps>((props) => {
  const { value, diff, expandable, expanded, onClickExpander, level, variant, layoutSide, subheader } = props

  const layoutMode = useLayoutMode()
  const isSideBySideDiffsLayoutMode = layoutMode === SIDE_BY_SIDE_DIFFS_LAYOUT_MODE

  const width = isSideBySideDiffsLayoutMode ? 'w-1/2' : 'w-full'

  const showLevelAndExpanderGroup = level > 0 || expandable

  return (
    <div className={`flex flex-row items-center gap-2 ${width}`}>
      {showLevelAndExpanderGroup && (
        <div className='flex flex-row items-stretch h-full'>
          <LevelIndicator level={level} />
          <Expander
            expandable={expandable}
            expanded={expanded}
            onClick={onClickExpander}
            level={level}
          />
        </div>
      )}
      <TitleRowValue {...props} />
      {subheader?.(layoutSide)}
    </div>
  )
})

const FONT_SIZE_MAP: Record<TitleVariant, string> = {
  [TitleVariant.h1]: 'text-xl',
  [TitleVariant.h2]: 'text-lg',
  [TitleVariant.h3]: 'text-base',
  [TitleVariant.body]: 'text-xs',
}

const TitleRowValue: FC<TitleRowContentProps> = memo<TitleRowContentProps>((props) => {
  const { value, diff, variant, expandable, onClickExpander } = props

  const resolvedValue = useMemo(() => resolveValue(value, diff), [diff, value])

  const classes = useMemo(() => ([
    'font-Inter-Medium',
    FONT_SIZE_MAP[variant],
    variant !== TitleVariant.body ? 'font-bold' : '',
    expandable ? 'hover:cursor-pointer' : '',
  ].join(' ')), [])

  return (
    <div className={classes} onClick={onClickExpander}>
      {resolvedValue}
    </div>
  )
})

function resolveValue(currentValue?: string, diff?: Diff): string | ReactElement | undefined {
  return currentValue
}

const TitleRowContainer: FC<TitleRowProps> = memo<TitleRowProps>((props) => {
  const { value, diff, expandable, expanded, onClickExpander, level, variant } = props

  const layoutMode = useLayoutMode()

  const sideBySideLayout = layoutMode === SIDE_BY_SIDE_DIFFS_LAYOUT_MODE

  if (sideBySideLayout) {
    return (
      <div className='flex flex-row'>
        <TitleRowContent {...props} layoutSide={ORIGIN_LAYOUT_SIDE} />
        <TitleRowContent {...props} layoutSide={CHANGED_LAYOUT_SIDE} />
      </div>
    )
  }

  return (
    <div className='flex flex-row'>
      <TitleRowContent {...props} layoutSide={CHANGED_LAYOUT_SIDE} />
    </div>
  )
})
