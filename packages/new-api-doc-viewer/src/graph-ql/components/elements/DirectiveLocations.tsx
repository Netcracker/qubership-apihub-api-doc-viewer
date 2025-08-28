import { isSingleElement, type ADV } from "@netcracker/qubership-apihub-new-api-data-model"
import { memo, type FC } from "react"

type DirectiveLocationsProps = {
  element: ADV.MultipleElement
}

export const DirectiveLocations: FC<DirectiveLocationsProps> = memo<DirectiveLocationsProps>(({ element }) => {
  if (isSingleElement(element)) {
    return null
  }

  return (
    <span className='directive-locations-in-header'>
      on {element.elements.filter(isSingleElement).map((e) => e.afterValue as any).join(' | ')}
    </span>
  )
})
