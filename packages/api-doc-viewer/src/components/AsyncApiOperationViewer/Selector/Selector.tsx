import { CHANGED_LAYOUT_SIDE, LayoutSide, ORIGIN_LAYOUT_SIDE } from "@apihub/types/internal/LayoutSide"
import { maxDiffType } from "@apihub/utils/common/changes"
import { DiffAction } from "@netcracker/qubership-apihub-api-diff"
import { DiffsClassesBuilder } from "@netcracker/qubership-apihub-next-data-model/building-service/abstract/tree-with-diffs/node-diffs-data/utilities"
import { NodeDescendantDiffsSummary, NodeDiffs } from "@netcracker/qubership-apihub-next-data-model/model/abstract/tree-with-diffs/tree-node.interface"
import { AsyncApiTreeNode } from "@netcracker/qubership-apihub-next-data-model/model/async-api/types/aliases"
import { FC } from "react"
import "../styles/styles.css"
import { SizeVariant } from "../types/SizeVariant"

export type SelectorOption<V extends object | null = object | null> = {
  title: string
  node: AsyncApiTreeNode
  testId?: string
  // diifs
  diffs?: NodeDiffs<V>
  descendantDiffsSummary?: NodeDescendantDiffsSummary
}

type SelectorProps<V extends object | null = object | null> = {
  options: SelectorOption<V>[]
  selectedOption: SelectorOption<V> | null
  onSelectOption: (option: SelectorOption<V>) => void
  variant: SizeVariant
  layoutSide?: LayoutSide
}

export const Selector: FC<SelectorProps> = (props) => {
  const { options, selectedOption, onSelectOption, variant, layoutSide = CHANGED_LAYOUT_SIDE } = props

  if (options.length === 0) {
    return null
  }

  return (
    <div className='flex flex-row gap-2'>
      {options.map((option) => {
        const { diffs, descendantDiffsSummary: descendantDiffs } = option
        const diffsRelatedClassesList = []
        let isInvisible = false
        if (diffs || descendantDiffs) {
          // resolve diffs
          const diffWholeNode = diffs?.[""]
          if (diffWholeNode) {
            const { styles } = diffWholeNode
            switch (layoutSide) {
              case ORIGIN_LAYOUT_SIDE:
                diffsRelatedClassesList.push(DiffsClassesBuilder.borderShadow(styles.before.borderShadowColor))
                isInvisible = diffWholeNode.data.action === DiffAction.add
                break;
              case CHANGED_LAYOUT_SIDE:
                diffsRelatedClassesList.push(styles.after.borderShadowColor ? DiffsClassesBuilder.borderShadow(styles.after.borderShadowColor) : '')
                isInvisible = diffWholeNode.data.action === DiffAction.remove
                break;
            }
          }
          if (descendantDiffs) {
            const resolvedDescendantDiffType = maxDiffType(descendantDiffs)
            diffsRelatedClassesList.push(resolvedDescendantDiffType ? DiffsClassesBuilder.roundMarker(resolvedDescendantDiffType) : '')
          }
        }
        if (isInvisible) {
          return null
        }
        const diffsRelatedClasses = diffsRelatedClassesList.join(' ')
        return (
          <button
            key={option.node.id}
            data-testid={option.testId}
            className={`button-selector-option button-selector-option_${variant} ${selectedOption === option ? 'selected' : ''} ${diffsRelatedClasses}`}
            onClick={(event) => {
              event.preventDefault()
              event.stopPropagation()
              onSelectOption(option)
            }}
          >
            {option.title}
          </button>
        )
      })}
    </div>
  )
}
