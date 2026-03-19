import { ChangedPropertyMetaData } from "@apihub/next-data-model/model/abstract/tree-with-diffs/tree-node.interface";
import { CHANGED_LAYOUT_SIDE, LayoutSide, ORIGIN_LAYOUT_SIDE } from "@apihub/types/internal/LayoutSide";
import { isDiffAdd, isDiffRemove, isDiffRename, isDiffReplace } from "@netcracker/qubership-apihub-api-diff";
import { FC, memo, ReactElement, useCallback } from "react";
import { TextValueVariant } from "./types";

type TextValueProps = {
  value?: string
  variant: TextValueVariant
  layoutSide: LayoutSide
  onClick?: () => void
  // diffs
  diff?: ChangedPropertyMetaData
}

export const TextValue: FC<TextValueProps> = memo<TextValueProps>((props) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { value, variant, layoutSide, onClick, diff } = props

  const renderElement = useCallback((
    children: ReactElement | string | number | boolean | null | undefined,
    diffsStyleClasses: string[],
    isInvisible: boolean,
  ) => {
    const commonStyles = `text-value ${onClick ? 'hover:cursor-pointer' : ''} ${isInvisible ? 'invisible' : ''} ${diffsStyleClasses.join(' ')}`.trim()
    const commonProps = { className: commonStyles, onClick: onClick }
    switch (variant) {
      case TextValueVariant.h1:
        return <h1 {...commonProps}>{children}</h1>
      case TextValueVariant.h2:
        return <h2 {...commonProps}>{children}</h2>
      case TextValueVariant.h3:
        return <h3 {...commonProps}>{children}</h3>
      case TextValueVariant.h4:
        return <h4 {...commonProps}>{children}</h4>
      case TextValueVariant.h5:
        return <h5 {...commonProps}>{children}</h5>
      case TextValueVariant.h6:
        return <h6 {...commonProps}>{children}</h6>
      case TextValueVariant.body:
        return <span {...commonProps}>{children}</span>
    }
  }, [onClick, variant])

  const renderValue = useCallback((value: string | number | boolean | ReactElement | null | undefined): [unknown, string[], boolean] => {
    const diffsStyleClasses: string[] = []
    let resolvedValue: unknown = value
    let isInvisible = false
    if (diff) {
      const { data, styles } = diff
      switch (layoutSide) {
        case ORIGIN_LAYOUT_SIDE:
          diffsStyleClasses.push(styles.before.textHighlighterColor ? `diffs-higlighter_${styles.before.textHighlighterColor}` : '')
          if (isDiffRemove(data) || isDiffReplace(data)) {
            resolvedValue = data.beforeValue
          } else if (isDiffRename(data)) {
            resolvedValue = data.beforeKey
          }
          if (isDiffAdd(data)) {
            isInvisible = true
          }
          break
        case CHANGED_LAYOUT_SIDE:
          diffsStyleClasses.push(styles.after.textHighlighterColor ? `diffs-higlighter_${styles.after.textHighlighterColor}` : '')
          if (isDiffAdd(data) || isDiffReplace(data)) {
            resolvedValue = data.afterValue
          } else if (isDiffRename(data)) {
            resolvedValue = data.afterKey
          }
          if (isDiffRemove(data)) {
            isInvisible = true
          }
          break
      }
    }
    return [resolvedValue, diffsStyleClasses, isInvisible]
  }, [diff, layoutSide])

  const [resolvedValue, diffsStyleClasses, isInvisible] = renderValue(value)

  // TODO 19.03.2026 // Fix it later
  if (!isRenderable(resolvedValue)) {
    return null
  }

  return renderElement(resolvedValue, diffsStyleClasses, isInvisible)
})

function isRenderable(value: unknown): value is string | number | boolean | ReactElement | null | undefined {
  return true
}