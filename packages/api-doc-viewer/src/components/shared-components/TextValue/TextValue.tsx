import { DescriptionFontSize } from "@apihub/components/common/annotations/Description/types/DescriptionFontSize";
import { ChangedPropertyMetaData, DiffHighlightingApplicationMode, HighlightVariant } from "@apihub/next-data-model/model/abstract/tree-with-diffs/tree-node.interface";
import { CHANGED_LAYOUT_SIDE, LayoutSide, ORIGIN_LAYOUT_SIDE } from "@apihub/types/internal/LayoutSide";
import { ArrayUtils } from "@apihub/utils/common/arrays";
import { isDiffAdd, isDiffRemove, isDiffRename, isDiffReplace } from "@netcracker/qubership-apihub-api-diff";
import { DiffsClassesBuilder } from "@netcracker/qubership-apihub-next-data-model/building-service/abstract/tree-with-diffs/node-diffs-data/utilities";
import { Dispatch, FC, memo, ReactNode, SetStateAction, useCallback, useMemo, useState } from "react";
import { TitleRowUsage } from "../TitleRow/types";
import './TextValue.css';
import { TextValueVariant } from "./types";

type TextValueProps = {
  value?: string
  variant: TextValueVariant
  layoutSide: LayoutSide
  onClick?: () => void
  fontWeight?: 'normal' | 'bold'
  fontColor?: string
  label?: string
  // diffs
  diff?: ChangedPropertyMetaData
  usage?: TitleRowUsage
  highlightingMode?: DiffHighlightingApplicationMode
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
  const { value, variant, layoutSide, onClick, diff, usage, highlightingMode = DiffHighlightingApplicationMode.Default } = props

  const isDefaultDiffHighlighting = highlightingMode === DiffHighlightingApplicationMode.Default
  const isInvisibleDiffHighlighting = highlightingMode === DiffHighlightingApplicationMode.Invisible

  // value/font specific
  const { fontWeight, fontColor, label } = props

  const [expanded, setExpanded] = useState(false)

  const renderElement = useCallback((
    resolvedValue: string | undefined,
    diffsStyleClasses: string[],
    isInvisible: boolean,
  ) => {
    if (isInvisible) {
      return null
    }
    const diffsStyles = isInvisibleDiffHighlighting ? '' : diffsStyleClasses.join(' ')
    const commonStylesWithoutDiffs = `text-value ${onClick ? 'hover:cursor-pointer' : ''} ${fontWeight ? `font-${fontWeight}` : ''}`.trim()
    const commonStyles = `${commonStylesWithoutDiffs} ${diffsStyles}`.trim()
    const commonProps = {
      onClick: onClick,
      ...fontColor?.trim() ? { style: { color: fontColor } } : {},
    }
    resolvedValue = expanded ? resolvedValue : shortenValue(resolvedValue)

    const renderByVariant = (content: ReactNode, className: string) => {
      const variantProps = {
        ...commonProps,
        className,
      }
      switch (variant) {
        case TextValueVariant.h1:
          return <h1 {...variantProps}>{content}</h1>
        case TextValueVariant.h2:
          return <h2 {...variantProps}>{content}</h2>
        case TextValueVariant.h3:
          return <h3 {...variantProps}>{content}</h3>
        case TextValueVariant.h4:
          return <h4 {...variantProps}>{content}</h4>
        case TextValueVariant.h5:
          return <h5 {...variantProps}>{content}</h5>
        case TextValueVariant.h6:
          return <h6 {...variantProps}>{content}</h6>
        case TextValueVariant.body:
          return <span {...variantProps}>{content}</span>
      }
    }

    if (label) {
      return renderByVariant(
        <>
          <span className="font-bold">{`${label}: `}</span>
          <span className={diffsStyles}>{resolvedValue}</span>
        </>,
        commonStylesWithoutDiffs,
      )
    }

    return renderByVariant(resolvedValue, commonStyles)
  }, [expanded, fontColor, fontWeight, isInvisibleDiffHighlighting, label, onClick, variant])

  const renderValue = useCallback((value: string | undefined): [string | undefined, string[], boolean] => {
    const diffsStyleClasses: string[] = []
    let resolvedValue: string | undefined = value
    let isInvisible = false
    if (diff) {
      const { data, styles } = diff
      switch (layoutSide) {
        case ORIGIN_LAYOUT_SIDE:
          diffsStyleClasses.push(DiffsClassesBuilder.highlighter(styles.before.textHighlighterColor))
          if (isDefaultDiffHighlighting && usage !== TitleRowUsage.AsyncApiSection) {
            if (isDiffRemove(data)) {
              resolvedValue = stringOrUndefined(data.beforeValue)
            }
            if (isDiffReplace(data)) {
              if (usage === TitleRowUsage.JsoProperty && !isInvisibleDiffHighlighting) {
                diffsStyleClasses.push(DiffsClassesBuilder.highlighter(HighlightVariant.Yellow))
              }
              resolvedValue = stringOrUndefined(data.beforeValue)
            }
            if (isDiffRename(data)) {
              resolvedValue = stringOrUndefined(data.beforeKey)
            }
          }
          if (isDiffAdd(data)) {
            isInvisible = true
          }
          break
        case CHANGED_LAYOUT_SIDE:
          diffsStyleClasses.push(DiffsClassesBuilder.highlighter(styles.after.textHighlighterColor))
          if (isDefaultDiffHighlighting && usage !== TitleRowUsage.AsyncApiSection) {
            if (isDiffAdd(data)) {
              resolvedValue = stringOrUndefined(data.afterValue)
            }
            if (isDiffReplace(data)) {
              if (usage === TitleRowUsage.JsoProperty && !isInvisibleDiffHighlighting) {
                diffsStyleClasses.push(DiffsClassesBuilder.highlighter(HighlightVariant.Yellow))
              }
              resolvedValue = stringOrUndefined(data.afterValue)
            }
            if (isDiffRename(data)) {
              resolvedValue = stringOrUndefined(data.afterKey)
            }
          }
          if (isDiffRemove(data)) {
            isInvisible = true
          }
          break
      }
    }
    return [resolvedValue, diffsStyleClasses, isInvisible]
  }, [diff, isDefaultDiffHighlighting, isInvisibleDiffHighlighting, layoutSide, usage])

  const [resolvedValue, diffsStyleClasses, isInvisible] = renderValue(value)

  const content = useMemo(() => <>
    {renderElement(resolvedValue, diffsStyleClasses, isInvisible)}
    <Expander
      isExpandable={isExpandable(resolvedValue)}
      expanded={expanded}
      setExpanded={setExpanded}
    />
  </>, [renderElement, resolvedValue, diffsStyleClasses, isInvisible, expanded, setExpanded])

  return content
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

function stringOrUndefined(value: unknown | undefined): string | undefined {
  return typeof value === 'string' ? value : undefined
}
