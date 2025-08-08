import { Level } from "@adv/shared/components/elements/Level";
import { ADV, isMultipleElement } from "@netcracker/qubership-apihub-new-api-data-model";
import type { FC } from "react";
import { memo, useCallback } from "react";

type HeaderRowProps = {
  row: ADV.Row
  expanded?: boolean
  onToggle: (row: ADV.Row) => void
}

export const HeaderRow: FC<HeaderRowProps> = memo<HeaderRowProps>(({ row, expanded = false, onToggle }) => {
  const { elements } = row

  const onToggleClick = useCallback(() => { onToggle(row) }, [onToggle, row])

  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <Level level={row.level} />
      <button className="toggle-button" onClick={onToggleClick}>
        {expanded ? '-' : '+'}
      </button>
      {elements.map((element, index) => {
        if (isMultipleElement(element)) {
          return null
        }
        switch (element.kind) {
          case ADV.ElementKind.NODE_TITLE:
            return <span key={index} style={{ fontWeight: 'bold', marginRight: '10px' }}>{element.afterValue as any}</span>
          case ADV.ElementKind.NODE_TYPE:
            return <span key={index} className='node-type'>{element.afterValue as any}</span>
          case ADV.ElementKind.NODE_TYPE_NAME:
            return <span key={index} className='node-type' style={{ marginRight: 10 }}>{'<'}{element.afterValue as any}{'>'}</span>
          default:
            return null
        }
      })}
    </div>
  )
})