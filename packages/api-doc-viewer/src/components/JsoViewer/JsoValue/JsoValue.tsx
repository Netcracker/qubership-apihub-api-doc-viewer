import { FC, memo } from "react"
import { ResolvedJsoSideState } from "../resolve-jso-side-state"
import { BaseJsoValue } from "./BaseJsoValue"
import { useJsoValueStyles } from "./useJsoValueStyles"

type JsoValueProps = {
  sideState: ResolvedJsoSideState
}

export const JsoValue: FC<JsoValueProps> = memo<JsoValueProps>((props) => {
  const { sideState } = props
  const {
    showSubheader,
    resolvedValue,
    resolvedValueType,
    isPredefinedValueSet,
  } = sideState
  const { valueClasses } = useJsoValueStyles({ isPredefinedValueSet })

  return (
    <div>
      <BaseJsoValue
        showSubheader={showSubheader}
        resolvedValue={resolvedValue}
        resolvedValueType={resolvedValueType}
        styleClasses={[]}
        valueClasses={valueClasses}
      />
    </div>
  )
})
