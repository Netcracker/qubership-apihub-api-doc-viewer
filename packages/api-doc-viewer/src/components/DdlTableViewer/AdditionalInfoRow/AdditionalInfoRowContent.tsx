import { X_AXIS_PADDING_ROWS_ASYNC_API } from "@apihub/components/shared-styles/tailwind-classnames"
import { useLevelContext } from "@apihub/contexts/LevelContext"
import { FC, memo } from "react"
import '../../shared-styles/preceded-by.css'
import { LevelIndicator } from "../../shared-components/LevelIndicator"
import { ATTRIBUTE_PRECEDED_BY } from "../../shared-components/WithPrecededByProps"
import { AdditionalInfoRowContentProps } from "./types"

export const AdditionalInfoRowContent: FC<AdditionalInfoRowContentProps> = memo<AdditionalInfoRowContentProps>((props) => {
  const {
    label,
    subheader,
    layoutSide,
  } = props

  const { [ATTRIBUTE_PRECEDED_BY]: precededBy } = props
  const level = useLevelContext()

  return (
    <div
      data-testid="additional-info-row-content"
      data-precededby={precededBy}
      className={`additional-info-row-content flex items-center h-full ${X_AXIS_PADDING_ROWS_ASYNC_API} min-h-[26px] gap-2`}
    >
      {level > 0 && (
        <div data-precededby={precededBy} className="flex items-stretch self-stretch">
          <LevelIndicator level={level} />
          <div className="w-4" aria-hidden="true" />
        </div>
      )}
      <span className="additional-info-row-label">{`${label}:`}</span>
      {subheader?.(layoutSide)}
    </div>
  )
})
