import { useLayoutMode } from "@apihub/contexts/LayoutModeContext"
import { CHANGED_LAYOUT_SIDE, LayoutSide, ORIGIN_LAYOUT_SIDE } from "@apihub/types/internal/LayoutSide"
import { INLINE_DIFFS_LAYOUT_MODE, SIDE_BY_SIDE_DIFFS_LAYOUT_MODE } from "@apihub/types/LayoutMode"
import type { Diff } from "@netcracker/qubership-apihub-api-diff"
import { FC, memo, ReactElement, useMemo } from "react"
import { NestingIndicator } from "../common/NestingIndicator"
import { Expander } from "./Expander"

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
  const { value, diff, expandable, expanded, onClickExpander, level, variant, layoutSide } = props

  const layoutMode = useLayoutMode()
  const isSideBySideDiffsLayoutMode = layoutMode === SIDE_BY_SIDE_DIFFS_LAYOUT_MODE

  const width = isSideBySideDiffsLayoutMode ? 'w-1/2' : 'w-full'

  return (
    <div className={`flex flex-row gap-5 ${width}`}>
      <NestingIndicator level={level} />
      <Expander
        expandable={expandable}
        expanded={expanded}
        onClickExpander={onClickExpander}
        level={level}
      />
      <TitleRowValue {...props} />
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
  const { value, diff, variant } = props

  const resolvedValue = useMemo(() => resolveValue(value, diff), [diff, value])

  return (
    <div className={`${FONT_SIZE_MAP[variant]}`}>
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
      <div className='flex flex-row relative'>
        <TitleRowContent {...props} layoutSide={ORIGIN_LAYOUT_SIDE} />
        <TitleRowContent {...props} layoutSide={CHANGED_LAYOUT_SIDE} />
      </div>
    )
  }

  return (
    <div className='flex flex-row relative'>
      <TitleRowContent {...props} layoutSide={CHANGED_LAYOUT_SIDE} />
    </div>
  )
})
