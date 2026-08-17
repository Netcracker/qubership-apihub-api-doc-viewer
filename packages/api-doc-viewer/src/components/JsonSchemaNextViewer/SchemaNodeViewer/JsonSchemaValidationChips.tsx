import { AdditionalInfoPiece } from "@apihub/components/shared-components/AdditionalInfoPiece/AdditionalInfoPiece"
import { AdditionalInfoPieceUsage } from "@apihub/components/shared-components/AdditionalInfoPiece/types"
import { FC, memo } from "react"

export type JsonSchemaValidationChipsProps = {
  values: string[]
}

export const JsonSchemaValidationChips: FC<JsonSchemaValidationChipsProps> = memo<JsonSchemaValidationChipsProps>((props) => {
  const { values } = props

  if (!values.length) {
    return null
  }

  return (
    <div className="flex flex-wrap items-center gap-2">
      {values.map((value, index) => (
        <AdditionalInfoPiece
          key={`${value}-${index}`}
          isVisible={true}
          value={value}
          usage={AdditionalInfoPieceUsage.JsonSchemaValidation}
        />
      ))}
    </div>
  )
})
