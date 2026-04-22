import { ChangedPropertyMetaData } from "@apihub/next-data-model/model/abstract/tree-with-diffs/tree-node.interface";
import { CHANGED_LAYOUT_SIDE, LayoutSide, ORIGIN_LAYOUT_SIDE } from "@apihub/types/internal/LayoutSide";
import { isDiffAdd, isDiffRemove, isDiffReplace } from "@netcracker/qubership-apihub-api-diff";
import { DiffsClassesBuilder } from "@netcracker/qubership-apihub-next-data-model/building-service/abstract/tree-with-diffs/node-diffs-data/utilities";
import { getValueType, isPredefinedValueSet as checkIsPredefinedValueSet } from "@netcracker/qubership-apihub-next-data-model/building-service/jso/json-crawl-entities/transformers/inline-jso-property-params";
import { JsoPropertyValueType } from "@netcracker/qubership-apihub-next-data-model/model/jso/types/node-value-type";
import { FC, memo, useCallback } from "react";

type JsoValueProps = {
  value: unknown
  valueType: JsoPropertyValueType
  isPredefinedValueSet: boolean
  layoutSide: LayoutSide
  // diffs
  diff?: ChangedPropertyMetaData
}

export const JsoValue: FC<JsoValueProps> = memo<JsoValueProps>((props) => {
  const { value, valueType, isPredefinedValueSet, layoutSide, diff } = props

  const renderElement = useCallback((
    resolvedValue: string | undefined,
    diffsStyleClasses: string[],
    isVisible: boolean,
  ) => {
    if (!isVisible) {
      return null
    }
    const commonStyles = `jso-value subheader text-slate-500 ${diffsStyleClasses.join(' ')}`.trim()
    switch (valueType) {
      case 'string':
      case 'number':
      case 'boolean':
      case 'null':
        return (
          <span className={`${commonStyles} ${isPredefinedValueSet ? 'bg-gray-100 px-2 rounded-md' : ''}`}>
            {`${resolvedValue}`}
          </span>
        )
    }
  }, [valueType, isPredefinedValueSet])

  const renderValue = useCallback((value: string | undefined): [string | undefined, string[], boolean] => {
    const diffsStyleClasses: string[] = []
    let resolvedValue: string | undefined = value
    let isVisible = false
    if (diff) {
      const { data, styles } = diff
      switch (layoutSide) {
        case ORIGIN_LAYOUT_SIDE:
          if (isDiffReplace(data)) {
            isVisible = styles.before.isContentVisible
            resolvedValue = data.beforeValue as string | undefined
            const beforeValueType = getValueType(data.beforeValue)
            if (checkIsPredefinedValueSet(beforeValueType)) {
              diffsStyleClasses.push('bg-gray-100 px-2 rounded-md')
              diffsStyleClasses.push(DiffsClassesBuilder.borderShadow(styles.before.borderShadowColor))
            } else {
              diffsStyleClasses.push(DiffsClassesBuilder.highlighter(styles.before.textHighlighterColor))
            }
          }
          if (isDiffAdd(data)) {
            isVisible = styles.before.isContentVisible
          }
          break
        case CHANGED_LAYOUT_SIDE:
          if (isDiffReplace(data)) {
            isVisible = styles.after.isContentVisible
            resolvedValue = data.afterValue as string | undefined
            const afterValueType = getValueType(data.afterValue)
            if (checkIsPredefinedValueSet(afterValueType)) {
              diffsStyleClasses.push('bg-gray-100 px-2 rounded-md')
              diffsStyleClasses.push(DiffsClassesBuilder.borderShadow(styles.after.borderShadowColor))
            } else {
              diffsStyleClasses.push(DiffsClassesBuilder.highlighter(styles.after.textHighlighterColor))
            }
          }
          if (isDiffRemove(data)) {
            isVisible = styles.after.isContentVisible
          }
          break
      }
    } else {
      isVisible = true
    }
    return [resolvedValue, diffsStyleClasses, isVisible]
  }, [diff, layoutSide])

  const [resolvedValue, diffsStyleClasses, isVisible] = renderValue(`${value}`)

  return (
    <div>
      {renderElement(resolvedValue, diffsStyleClasses, isVisible)}
    </div>
  )
})
