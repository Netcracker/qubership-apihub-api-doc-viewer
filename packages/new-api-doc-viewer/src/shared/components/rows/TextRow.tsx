import { ADV, isMultipleElement } from "@netcracker/qubership-apihub-new-api-data-model";
import type { FC } from "react";
import { memo } from "react";
import { Level } from "../elements/Level";

type TextRowProps = {
  row: ADV.Row
}

export const TextRow: FC<TextRowProps> = memo<TextRowProps>(({ row }) => {
  const { elements } = row

  return (
    <div data-rowType={row.type} style={{ display: 'flex', flexDirection: 'row' }}>
      <Level level={row.level} />
      <div className="row-content">
        {elements.map((element, index) => {
          if (isMultipleElement(element)) {
            return null
          }
          switch (element.kind) {
            case ADV.ElementKind.NODE_DESCRIPTION:
            case ADV.ElementKind.GRAPHQL_NODE_DEPRECATION_REASON: // TODO 07.08.25 // Get rid of this
              return <span key={index} className="text-row-text">{element.afterValue as any}</span>
            default:
              return null
          }
        })}
      </div>
    </div>
  )
}) 