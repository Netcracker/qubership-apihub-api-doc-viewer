import { JsoPropertyValueType, JsoPropertyValueTypes } from "@netcracker/qubership-apihub-next-data-model/model/jso/types/node-value-type"
import { FC, memo } from "react"

type BaseJsoValueProps = {
  showSubheader: boolean
  resolvedValue: unknown
  resolvedValueType: JsoPropertyValueType
  styleClasses: string[]
  valueClasses: string[]
}

export const BaseJsoValue: FC<BaseJsoValueProps> = memo<BaseJsoValueProps>((props) => {
  const { showSubheader, resolvedValue, resolvedValueType, styleClasses, valueClasses } = props

  if (!showSubheader) {
    return null
  }

  const commonStyles = `jso-value subheader text-slate-500 ${styleClasses.join(" ")} ${valueClasses.join(" ")}`.trim()
  switch (resolvedValueType) {
    case JsoPropertyValueTypes.STRING:
    case JsoPropertyValueTypes.NUMBER:
    case JsoPropertyValueTypes.BOOLEAN:
    case JsoPropertyValueTypes.NULL:
      return (
        <span className={commonStyles}>
          {`${resolvedValue}`}
        </span>
      )
    default:
      return null
  }
})
