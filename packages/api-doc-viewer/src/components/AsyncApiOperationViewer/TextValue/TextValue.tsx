import { DescriptionFontSize } from "@apihub/components/common/annotations/Description/types/DescriptionFontSize";
import { ChangedPropertyMetaData, HighlightVariant } from "@apihub/next-data-model/model/abstract/tree-with-diffs/tree-node.interface";
import { CHANGED_LAYOUT_SIDE, LayoutSide, ORIGIN_LAYOUT_SIDE } from "@apihub/types/internal/LayoutSide";
import { ArrayUtils } from "@apihub/utils/common/arrays";
import { isDiffAdd, isDiffRemove, isDiffRename, isDiffReplace } from "@netcracker/qubership-apihub-api-diff";
import { DiffsClassesBuilder } from "@netcracker/qubership-apihub-next-data-model/building-service/abstract/tree-with-diffs/node-diffs-data/utilities";
import { Dispatch, FC, memo, SetStateAction, useCallback, useState } from "react";
import '../styles/TextValue.css';
import { TextValueVariant } from "./types";

type TextValueProps = {
  value?: string
  variant: TextValueVariant
  layoutSide: LayoutSide
  onClick?: () => void
  fontWeight?: 'normal' | 'bold'
  label?: string
  forcedTextHighlighterColor?: Exclude<HighlightVariant, HighlightVariant.Gray>
  // diffs
  diff?: ChangedPropertyMetaData
}

export type TextExpanderProps = Partial<{
  isExpandable: boolean
  expanded: boolean
  setExpanded: Dispatch<SetStateAction<boolean>>
  fontSize?: DescriptionFontSize
}>

const Expander: FC<TextExpanderProps> = props => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { isExpandable, expanded, setExpanded, fontSize = DescriptionFontSize.LEGACY } = props

  const onClick = useCallback(() => {
    setExpanded?.(prev => !prev)
  }, [setExpanded])

  return <>
    {isExpandable && (
      <div className="mt-2">
        <a className='text-blue-600 hover:text-blue-500 hover:cursor-pointer' onClick={onClick}        >
          {!expanded ? 'Show more' : 'Show less'}
        </a>
      </div>
    )}
  </>
}

export const TextValue: FC<TextValueProps> = memo<TextValueProps>((props) => {
  const { value, variant, layoutSide, onClick, diff, forcedTextHighlighterColor } = props

  // value/font specific
  const { fontWeight, label } = props

  const [expanded, setExpanded] = useState(false)

  const renderElement = useCallback((
    resolvedValue: string | undefined,
    diffsStyleClasses: string[],
    isInvisible: boolean,
  ) => {
    if (isInvisible) {
      return null
    }
    const commonStyles = `text-value ${onClick ? 'hover:cursor-pointer' : ''} ${diffsStyleClasses.join(' ')}`.trim()
    const commonProps = { className: commonStyles, onClick: onClick }
    resolvedValue = expanded ? resolvedValue : shortenValue(resolvedValue)
    switch (variant) {
      case TextValueVariant.h1:
        return <h1 {...commonProps}>{resolvedValue}</h1>
      case TextValueVariant.h2:
        return <h2 {...commonProps}>{resolvedValue}</h2>
      case TextValueVariant.h3:
        return <h3 {...commonProps}>{resolvedValue}</h3>
      case TextValueVariant.h4:
        return <h4 {...commonProps}>{resolvedValue}</h4>
      case TextValueVariant.h5:
        return <h5 {...commonProps}>{resolvedValue}</h5>
      case TextValueVariant.h6:
        return <h6 {...commonProps}>{resolvedValue}</h6>
      case TextValueVariant.body:
        return <span {...commonProps}>{resolvedValue}</span>
    }
  }, [expanded, onClick, variant])

  const renderValue = useCallback((value: string | undefined): [string | undefined, string[], boolean] => {
    const diffsStyleClasses: string[] = []
    let resolvedValue: string | undefined = value
    let isInvisible = false
    if (diff) {
      const { data, styles } = diff
      switch (layoutSide) {
        case ORIGIN_LAYOUT_SIDE:
          diffsStyleClasses.push(DiffsClassesBuilder.highlighter(styles.before.textHighlighterColor))
          if (isDiffRemove(data) || isDiffReplace(data)) {
            // TODO 26.03.26 // This is a WA, fix it later. It's important to detect if diff is not for value but for whole node
            resolvedValue = typeof data.beforeValue !== typeof value ? value : data.beforeValue as string | undefined
          } else if (isDiffRename(data)) {
            resolvedValue = data.beforeKey as string | undefined
          }
          if (isDiffAdd(data)) {
            isInvisible = true
          }
          break
        case CHANGED_LAYOUT_SIDE:
          diffsStyleClasses.push(DiffsClassesBuilder.highlighter(styles.after.textHighlighterColor))
          if (isDiffAdd(data) || isDiffReplace(data)) {
            // TODO 26.03.26 // This is a WA, fix it later. It's important to detect if diff is not for value but for whole node
            resolvedValue = typeof data.afterValue !== typeof value ? value : data.afterValue as string | undefined
          } else if (isDiffRename(data)) {
            resolvedValue = data.afterKey as string | undefined
          }
          if (isDiffRemove(data)) {
            isInvisible = true
          }
          break
      }
    }
    diffsStyleClasses.push(DiffsClassesBuilder.highlighter(forcedTextHighlighterColor))
    const resolvedValueWithLabel = label ? `${label}: ${resolvedValue}` : resolvedValue
    return [resolvedValueWithLabel, diffsStyleClasses, isInvisible]
  }, [diff, forcedTextHighlighterColor, label, layoutSide])

  const [resolvedValue, diffsStyleClasses, isInvisible] = renderValue(value)

  return (
    <div className={`${fontWeight ? `font-${fontWeight}` : ''}`}>
      {renderElement(resolvedValue, diffsStyleClasses, isInvisible)}
      <Expander
        isExpandable={isExpandable(resolvedValue)}
        expanded={expanded}
        setExpanded={setExpanded}
      />
    </div>
  )
})

const OVERFLOW_LINES_AMOUNT = 5

function isExpandable(value: string | undefined): boolean {
  if (!value) {
    return false
  }
  return ArrayUtils.trim(value.split('\n')).length > OVERFLOW_LINES_AMOUNT
}

function shortenValue(value: string | undefined): string | undefined {
  if (!value) {
    return undefined
  }
  return ArrayUtils.trim(value.split('\n')).slice(0, OVERFLOW_LINES_AMOUNT).join('\n')
}
