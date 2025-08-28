import { printValue } from "@adv/shared/utilities/render-unknown";
import { ADV, isMultipleElement } from "@netcracker/qubership-apihub-new-api-data-model";
import type { FC } from "react";
import { memo } from "react";
import { Level } from "../elements/Level";

type AdditionalInfoRowProps = {
  row: ADV.Row
}

export const AdditionalInfoRow: FC<AdditionalInfoRowProps> = memo<AdditionalInfoRowProps>(({ row }) => {
  const { elements } = row

  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <Level level={row.level} />
      {elements.map((element, index) => {
        if (isMultipleElement(element)) {
          return null
        }
        switch (element.kind) {
          case ADV.ElementKind.ADDITIONAL_INFO_TITLE:
            return <span key={index} style={{ color: 'gray', marginRight: '10px' }}>{element.afterValue as any}</span>
          case ADV.ElementKind.ADDITIONAL_INFO_VALUE:
            return (
              <div
                key={index}
                style={{
                  color: 'gray',
                  padding: '1px 10px',
                  background: '#EFEFEF',
                  borderRadius: 5,
                  marginRight: '5px',
                }}
              >
                {printValue(element.afterValue)}
              </div>
            )
          default:
            return null
        }
      })}
    </div>
  )
})
