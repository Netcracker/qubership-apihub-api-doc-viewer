import { Level } from "@adv/shared/components/elements/Level";
import { printValue } from "@adv/shared/utilities/render-unknown";
import { ADV, isSingleElement } from "@netcracker/qubership-apihub-new-api-data-model";
import type { FC } from "react";
import { memo, useEffect, useState } from "react";
import '../../styles/CombinerSelectorRow.css';

type CombinerSelectorRowProps = {
  row: ADV.Row
  onSelect: (path: ADV.Path) => void
}

export const CombinerSelectorRow: FC<CombinerSelectorRowProps> = memo<CombinerSelectorRowProps>(({ row, onSelect }) => {
  const [selected, setSelected] = useState<ADV.PathItem | undefined>(undefined)

  useEffect(() => {
    setSelected(0)
    onSelect([...row.path, 0])
  }, [row, onSelect])

  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <Level level={row.level} />
      <div style={{ paddingTop: 10, paddingBottom: 5 }}>
        {row.elements.map((element: ADV.Element | ADV.MultipleElement, index) => {
          if (isSingleElement(element)) {
            return null
          }

          // TODO 05.08.25 // Add type guard
          const firstSubElement = element.elements[0] as ADV.Element
          return (
            <button
              key={index}
              className={`combiner-selector-button ${selected === firstSubElement.group ? 'selected' : ''}`}
              onClick={() => {
                setSelected(firstSubElement.group ?? 0)
                onSelect([...row.path, firstSubElement.group ?? 0])
              }}
            >
              {element.elements.map((subElement, subIndex) => {
                switch (subElement.kind) {
                  case ADV.ElementKind.NODE_TYPE:
                    return (
                      <span key={subIndex}>
                        {printValue(subElement.afterValue)}
                      </span>
                    )
                  case ADV.ElementKind.NODE_TYPE_NAME:
                    return (
                      <span key={subIndex}>
                        {'<'}
                        {printValue(subElement.afterValue)}
                        {'>'}
                      </span>
                    )
                  case ADV.ElementKind.NODE_TYPE_COMBINER_KEY:
                    return (
                      <span key={subIndex}>
                        {' ('}
                        {printValue(subElement.afterValue)}
                        {')'}
                      </span>
                    )
                  default:
                    return null
                }
              })}
            </button>
          )
        })}
      </div>
    </div>
  )
}, (prevProps, nextProps) => {
  return prevProps.row === nextProps.row
})