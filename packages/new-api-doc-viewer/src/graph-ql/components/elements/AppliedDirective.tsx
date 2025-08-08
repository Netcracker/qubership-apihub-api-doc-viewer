import { isMultipleElement, type ADV } from "@netcracker/qubership-apihub-new-api-data-model"
import { memo, type FC } from "react"

type AppliedDirectiveProps = {
  element: ADV.Element
}

export const AppliedDirective: FC<AppliedDirectiveProps> = memo<AppliedDirectiveProps>(({ element }) => {
  if (isMultipleElement(element)) {
    return null
  }

  return (
    <span style={{ color: '#4FC0F8', marginLeft: '5px' }}>
      @{element.afterValue as any}
    </span>
  )
})