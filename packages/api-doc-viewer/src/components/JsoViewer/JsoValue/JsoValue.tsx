import { FC, memo } from "react"
import { JsoValueBase } from "./JsoValueBase"
import { JsoValueAppearance, useJsoValueStyles } from "./useJsoValueStyles"

export type JsoValueProps = {
  isVisible: boolean
  value: unknown
  appearance: JsoValueAppearance
  textClassName?: string
  blockClassName?: string
}

export const JsoValue: FC<JsoValueProps> = memo<JsoValueProps>((props) => {
  const {
    isVisible,
    value,
    appearance,
    textClassName,
    blockClassName,
  } = props
  const className = useJsoValueStyles({
    appearance,
    textClassName,
    blockClassName,
  })

  return (
    <JsoValueBase
      isVisible={isVisible}
      value={value}
      className={className}
    />
  )
})
