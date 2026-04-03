import { ChangedPropertyMetaData } from "@apihub/next-data-model/model/abstract/tree-with-diffs/tree-node.interface";
import { CHANGED_LAYOUT_SIDE, LayoutSide, ORIGIN_LAYOUT_SIDE } from "@apihub/types/internal/LayoutSide";
import { isDiffAdd, isDiffRemove, isDiffRename, isDiffReplace } from "@netcracker/qubership-apihub-api-diff";
import { DiffsClassesBuilder } from "@netcracker/qubership-apihub-next-data-model/building-service/abstract/tree-with-diffs/node-diffs-data/utilities";
import { JsoPropertyValueType } from "@netcracker/qubership-apihub-next-data-model/model/jso/types/node-value-type";
import { FC, memo, useCallback } from "react";
import '../styles/TextValue.css';

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
    isInvisible: boolean,
  ) => {
    if (isInvisible) {
      return null
    }
    const commonStyles = `jso-value subheader text-slate-500 ${diffsStyleClasses.join(' ')}`.trim()
    switch (valueType) {
      case 'string':
      case 'number':
      case 'boolean':
        return (
          <span className={`${commonStyles} ${isPredefinedValueSet ? 'bg-gray-100 px-2 rounded-md' : ''}`}>
            {`${value}`}
          </span>
        )
    }
  }, [value, valueType, isPredefinedValueSet])

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
    return [resolvedValue, diffsStyleClasses, isInvisible]
  }, [diff, layoutSide])

  const [resolvedValue, diffsStyleClasses, isInvisible] = renderValue(`${value}`)

  return (
    <div>
      {renderElement(resolvedValue, diffsStyleClasses, isInvisible)}
    </div>
  )
})
