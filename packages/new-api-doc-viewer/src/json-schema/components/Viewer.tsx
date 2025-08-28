import { HeaderRow } from '@adv/json-schema/components/rows/HeaderRow'
import { AdditionalInfoRow } from '@adv/shared/components/rows/AdditionalInfoRow'
import { ChildrenHeaderRow } from '@adv/shared/components/rows/ChildrenHeaderRow'
import { CombinerHeaderRow } from '@adv/shared/components/rows/CombinerHeaderRow'
import { CombinerSelectorRow } from '@adv/shared/components/rows/CombinerSelectorRow'
import { TextRow } from '@adv/shared/components/rows/TextRow'
import { ADV, collapse, expand, mapPathsByChoice } from '@netcracker/qubership-apihub-new-api-data-model'
import { memo, useCallback, useState, type FC } from 'react'

const DEFAULT_MAX_DEPTH = 1

type ViewerProps = {
  model: ADV.Row[],
  depth?: number
}

export const Viewer: FC<ViewerProps> = memo<ViewerProps>(({ model, depth = DEFAULT_MAX_DEPTH }) => {
  console.log('Model', model)

  const [$model, setModel] = useState<ADV.Row[]>(() => {
    return model.map(row => {
      if (row.level === depth) {
        row.visible = [
          ADV.RowType.HEADER_ROW,
          ADV.RowType.TEXT_ROW,
          ADV.RowType.ADDITIONAL_INFO_ROW,
        ].some(rowType => row.type === rowType)
        if (row.type === ADV.RowType.HEADER_ROW) {
          row.expanded = false
        }
      } else if (row.level > depth) {
        row.visible = false
        if (row.type === ADV.RowType.HEADER_ROW) {
          row.expanded = false
        }
      }
      return row
    })
  })

  const onSelect = useCallback((path: ADV.Path) => {
    setModel(previousModel => mapPathsByChoice(previousModel, path))
  }, [])

  const onToggle = useCallback((row: ADV.Row) => {
    setModel(previousModel => {
      return !row.expanded
        ? expand(previousModel, row)
        : collapse(previousModel, row)
    })
  }, [])

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      {$model.map((row: ADV.Row, index: number) => {
        if (!row.visible) {
          return null
        }
        switch (row.type) {
          case ADV.RowType.HEADER_ROW:
            return <HeaderRow key={index} row={row} expanded={row.expanded} onToggle={onToggle} />
          case ADV.RowType.TEXT_ROW:
            return <TextRow key={index} row={row} />
          case ADV.RowType.ADDITIONAL_INFO_ROW:
            return <AdditionalInfoRow key={index} row={row} />
          case ADV.RowType.CHILDREN_HEADER_ROW:
            return <ChildrenHeaderRow key={index} row={row} />
          case ADV.RowType.COMBINER_HEADER_ROW:
            return <CombinerHeaderRow key={index} row={row} />
          case ADV.RowType.COMBINER_SELECTOR_ROW:
            return <CombinerSelectorRow key={index} row={row} onSelect={onSelect} />
          default:
            return <span key={index} style={{ color: 'red' }}>Unknown row type: {row.type}</span>
        }
      })}
    </div>
  )
})
