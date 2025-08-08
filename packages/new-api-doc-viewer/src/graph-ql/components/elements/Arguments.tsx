import { ADV, isMultipleElement, isSingleElement } from "@netcracker/qubership-apihub-new-api-data-model";
import { memo, type FC } from "react";

type ArgumentProps = {
  element: ADV.MultipleElement
  last: boolean // for displaying commas
}

export const Argument: FC<ArgumentProps> = memo(({ element, last }) => {
  const { elements: subElements } = element
  if (subElements.length === 0) {
    return null
  }
  const [nameElement, requiredElement] = subElements
  if (isSingleElement(nameElement)) {
    return (
      <span>
        <span>{`${nameElement.afterValue}`}</span>
        {(
          requiredElement &&
          isSingleElement(requiredElement) &&
          requiredElement.afterValue === true
        )
          ? <span style={{ color: 'red' }}>*</span>
          : null}
        {!last ? <span style={{ marginRight: 5 }}>,</span> : null}
      </span>
    )
  }
  return null
})

type ArgumentsProps = {
  element: ADV.MultipleElement
}

export const Arguments: FC<ArgumentsProps> = memo(({ element }) => {
  if (element.elements.length === 0) {
    return null
  }
  return (
    <span className='arguments-in-header' style={{ marginRight: 10 }}>
      {'('}
      {element.elements.map((subElement, index) => {
        if (isMultipleElement(subElement)) {
          return (
            <Argument
              key={`argument-${index}`}
              element={subElement}
              last={index === element.elements.length - 1}
            />
          )
        }
        return null
      })}
      {')'}
    </span>
  )
})