import { ADV, isSingleElement } from "@netcracker/qubership-apihub-new-api-data-model";
import type { FC } from "react";
import { memo } from "react";

type OutputTypeProps = {
  element: ADV.MultipleElement
  bold?: boolean
}

export const OutputType: FC<OutputTypeProps> = memo(({ element, bold = true }) => {
  const { elements: subElements } = element
  if (subElements.length === 0) {
    return null
  }
  const [nameElement, requiredElement] = subElements
  if (isSingleElement(nameElement)) {
    return <>
      <span className='node-type' style={{ fontWeight: bold ? 'bold' : 'normal' }}>{`${nameElement.afterValue}`}</span>
      {(
        requiredElement &&
        isSingleElement(requiredElement) &&
        requiredElement.afterValue
      )
        ? <span style={{ color: 'red' }}>*</span>
        : null}
    </>
  }
  return null
})
