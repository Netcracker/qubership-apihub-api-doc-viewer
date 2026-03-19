import { FC, memo, ReactElement, useMemo } from "react"
import { TitleVariant, type TitleRowContentProps } from "./types"

export const TitleRowValue: FC<TitleRowContentProps> = memo<TitleRowContentProps>((props) => {
  const { value, diffs, variant, expandable, onClickExpander } = props

  const resolvedValue = useMemo(
    () => resolveValue(value, diffs),
    [diffs, value],
  )

  const styledResolvedValue = useMemo(() => {
    const commonStyles = `title-row font-Inter-Medium text-black ${expandable ? "hover:cursor-pointer" : ""}`
    const commonProps = { className: commonStyles, onClick: onClickExpander }
    switch (variant) {
      case TitleVariant.h1:
        return <h1 {...commonProps}>{resolvedValue}</h1>
      case TitleVariant.h2:
        return <h2 {...commonProps}>{resolvedValue}</h2>
      case TitleVariant.h3:
        return <h3 {...commonProps}>{resolvedValue}</h3>
      case TitleVariant.h4:
        return <h4 {...commonProps}>{resolvedValue}</h4>
      case TitleVariant.h5:
        return <h5 {...commonProps}>{resolvedValue}</h5>
      case TitleVariant.h6:
        return <h6 {...commonProps}>{resolvedValue}</h6>
      case TitleVariant.body:
        return <span {...commonProps}>{resolvedValue}</span>
    }
  }, [resolvedValue, variant, expandable, onClickExpander])

  return styledResolvedValue
})

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function resolveValue(currentValue?: string, _diffs?: unknown): string | ReactElement | undefined {
  return currentValue
}
