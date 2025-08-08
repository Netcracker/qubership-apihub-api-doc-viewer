import { ADV, isMultipleElement } from "@netcracker/qubership-apihub-new-api-data-model";
import type { FC } from "react";
import { memo } from "react";
import { Level } from "../elements/Level";

type CombinerHeaderRowProps = {
  row: ADV.Row
}

export const CombinerHeaderRow: FC<CombinerHeaderRowProps> = memo<CombinerHeaderRowProps>(({ row }) => {
  const { elements } = row

  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <Level level={row.level} />
      {elements.map((element, index) => {
        if (isMultipleElement(element)) {
          return null
        }
        switch (element.kind) {
          case ADV.ElementKind.NODE_TITLE:
            return <span key={index} className="children-header-row">{element.afterValue as any}</span>
          default:
            return null
        }
      })}
    </div>
  )
})
