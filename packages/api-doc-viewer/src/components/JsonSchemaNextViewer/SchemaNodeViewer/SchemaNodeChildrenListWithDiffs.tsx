import { ShowUnchangedRow } from "@apihub/components/shared-components/ShowUnchangedRow/ShowUnchangedRow"
import { useDiffTypes } from "@apihub/contexts/DiffTypesContext"
import { DiffType } from "@netcracker/qubership-apihub-api-diff"
import { resolveJsonSchemaUnchangedBlocks } from "@netcracker/qubership-apihub-next-data-model/building-service/json-schema/tree-with-diffs/changed-only"
import { JsonSchemaTreeNodeWithDiffs } from "@netcracker/qubership-apihub-next-data-model/model/json-schema/types/aliases"
import { FC, Fragment, useMemo } from "react"
import {
  ATTRIBUTE_PRECEDED_BY,
  PrecededBy,
  WithPrecededByProps,
} from "../../shared-components/WithPrecededByProps"
import { JsonSchemaNodeViewerWithDiffs } from "../JsonSchemaNodeViewerWithDiffs"
import { useUnchangedBlocksContext } from "../UnchangedBlocksContext"

export type SchemaNodeChildrenListWithDiffsProps = WithPrecededByProps & {
  children: readonly JsonSchemaTreeNodeWithDiffs[]
}

export const SchemaNodeChildrenListWithDiffs: FC<SchemaNodeChildrenListWithDiffsProps> = (props) => {
  const { children, [ATTRIBUTE_PRECEDED_BY]: precededBy } = props
  const { hideUnchangedNodes, revealedBlockIds, revealBlock } = useUnchangedBlocksContext()
  const diffTypes = useDiffTypes()

  const diffTypesSet = useMemo(
    () => (diffTypes ? new Set<DiffType>(diffTypes) : undefined),
    [diffTypes],
  )

  const { visibleSequence } = useMemo(
    () => resolveJsonSchemaUnchangedBlocks(children, {
      hideUnchangedNodes,
      diffTypes: diffTypesSet,
    }),
    [children, diffTypesSet, hideUnchangedNodes],
  )

  return (
    <>
      {visibleSequence.map((item, visibleIndex) => {
        const isLastInList = visibleIndex === visibleSequence.length - 1
        const rowPrecededBy = precededBy ?? PrecededBy.JSON_SCHEMA_VIEWER

        if (item.kind === "placeholder") {
          if (revealedBlockIds.has(item.unchangedBlockId)) {
            return (
              <Fragment key={item.unchangedBlockId}>
                {children
                  .slice(item.sourceIndex, item.sourceIndex + item.blockSize)
                  .map((blockChild, blockChildIndex) => (
                    <JsonSchemaNodeViewerWithDiffs
                      key={blockChild.id}
                      data-precededby={rowPrecededBy}
                      node={blockChild}
                      isLastInList={isLastInList && blockChildIndex === item.blockSize - 1}
                    />
                  ))}
              </Fragment>
            )
          }

          return (
            <ShowUnchangedRow
              key={item.unchangedBlockId}
              data-precededby={rowPrecededBy}
              unchangedBlockId={item.unchangedBlockId}
              count={item.blockSize}
              onReveal={revealBlock}
            />
          )
        }

        return (
          <JsonSchemaNodeViewerWithDiffs
            key={item.node.id}
            data-precededby={rowPrecededBy}
            node={item.node}
            isLastInList={isLastInList}
          />
        )
      })}
    </>
  )
}
