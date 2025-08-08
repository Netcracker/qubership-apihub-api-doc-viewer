import { Level } from "@adv/shared/components/elements/Level";
import { printValue } from "@adv/shared/utilities/render-unknown";
import { ADV, isSingleElement } from "@netcracker/qubership-apihub-new-api-data-model";
import type { FC } from "react";

type MultilineAdditionalInfoRowTitleProps = {
  row: ADV.Row
}

export const MultilineAdditionalInfoRowTitle: FC<MultilineAdditionalInfoRowTitleProps> = ({ row }) => {
  if (row.elements.length === 0) {
    return null
  }

  const [titleElement] = row.elements

  if (!titleElement || !isSingleElement(titleElement)) {
    return null
  }

  return (
    <div style={{ display: 'flex' }}>
      <Level level={row.level} />
      <span style={{ color: 'gray' }}>
        {`${titleElement.afterValue}:`}
      </span>
    </div>
  )
}

type MultilineAdditionalInfoRowValueProps = {
  row: ADV.Row
}

export const MultilineAdditionalInfoRowValue: FC<MultilineAdditionalInfoRowValueProps> = ({ row }) => {
  if (row.elements.length === 0) {
    return null
  }

  let valueElement: ADV.Element | undefined
  let deprecationReasonElement: ADV.Element | undefined
  let descriptionElement: ADV.Element | undefined

  if (row.elements.length >= 1) {
    const element = row.elements[0]
    if (isSingleElement(element)) {
      valueElement = element
    }
  }
  if (row.elements.length >= 2) {
    const element = row.elements[1]
    if (isSingleElement(element)) {
      if (element.kind === ADV.ElementKind.GRAPHQL_NODE_DEPRECATION_REASON) {
        deprecationReasonElement = element
      }
      if (element.kind === ADV.ElementKind.NODE_DESCRIPTION) {
        descriptionElement = element
      }
    }
  }
  if (row.elements.length >= 3) {
    const element1 = row.elements[1]
    const element2 = row.elements[2]
    if (isSingleElement(element1) && isSingleElement(element2)) {
      deprecationReasonElement = element1
      descriptionElement = element2
    }
  }

  return (
    <div style={{ display: 'flex', gap: '10px' }}>
      <Level level={row.level} />
      <div
        style={{
          color: 'gray',
          padding: '1px 10px',
          background: '#EFEFEF',
          borderRadius: 5,
        }}
      >
        {printValue(valueElement!.afterValue)}
      </div>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        {deprecationReasonElement && (
          <div>
            <b>Deprecation reason:</b> {printValue(deprecationReasonElement.afterValue)}
          </div>
        )}
        {descriptionElement && (
          <div>
            {printValue(descriptionElement.afterValue)}
          </div>
        )}
      </div>
    </div>
  )
}
