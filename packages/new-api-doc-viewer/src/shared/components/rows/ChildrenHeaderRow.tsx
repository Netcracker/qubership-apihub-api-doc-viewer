import { ADV, isMultipleElement } from "@netcracker/qubership-apihub-new-api-data-model";
import type { FC } from "react";
import { memo } from "react";
import { Level } from "../elements/Level";

type ChildrenHeaderRowProps = {
  row: ADV.Row
}

export const ChildrenHeaderRow: FC<ChildrenHeaderRowProps> = memo<ChildrenHeaderRowProps>(({ row }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <Level level={row.level} />
      <div className="row-content" style={{ marginBottom: -3 }}>
        {row.elements.map((element, index) => {
          if (isMultipleElement(element)) {
            return null
          }
          switch (element.kind) {
            case ADV.ElementKind.NODE_TITLE:
              return <span key={index} className='children-header-row'>{element.afterValue as any}</span>
            case ADV.ElementKind.NODE_TYPE:
              return <span key={index} className='children-header-row'>{element.afterValue as any}</span>
            case ADV.ElementKind.NODE_TYPE_NAME:
              return <span key={index} className="children-header-row" style={{ marginRight: 10 }}>{'<'}{element.afterValue as any}{'>'}</span>
            default:
              return null
          }
        })}
      </div>
    </div>
  )
})
