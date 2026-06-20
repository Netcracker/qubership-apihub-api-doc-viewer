import { LevelContext, useLevelContext } from "@apihub/contexts/LevelContext"
import { getColumnChildNodes } from "@apihub/utils/ddlapi/node-type-checkers"
import { DdlApiTreeNode } from "@netcracker/qubership-apihub-next-data-model/model/ddlapi/types/aliases"
import { DdlApiTreeNodeKinds } from "@netcracker/qubership-apihub-next-data-model/model/ddlapi/types/node-kind"
import { FC } from "react"
import { TextValueVariant } from "../shared-components/TextValue/types"
import { TitleRow } from "../shared-components/TitleRow/TitleRow"
import { ATTRIBUTE_PRECEDED_BY, PrecededBy, WithPrecededByProps } from "../shared-components/WithPrecededByProps"
import { ColumnNodeViewer } from "./ColumnNodeViewer"

type ColumnsNodeViewerProps = WithPrecededByProps & {
  node: DdlApiTreeNode<typeof DdlApiTreeNodeKinds.COLUMNS>
}

export const ColumnsNodeViewer: FC<ColumnsNodeViewerProps> = (props) => {
  const { node, [ATTRIBUTE_PRECEDED_BY]: precededBy } = props

  const level = useLevelContext()
  const value = node.value()
  const columnNodes = getColumnChildNodes(node.childrenNodes())

  return (
    <div data-testid="ddl-columns-node-viewer" className="flex flex-col">
      <TitleRow
        data-precededby={precededBy}
        value={value?.title ?? 'Columns'}
        expandable={false}
        expanded={true}
        variant={TextValueVariant.h2}
      />
      <LevelContext.Provider value={level + 1}>
        {columnNodes.map((columnNode, index) => (
          <ColumnNodeViewer
            key={columnNode.id}
            data-precededby={
              index === 0
                ? PrecededBy.DDL_SECTION_HEADER
                : PrecededBy.DDL_COLUMN_ROW
            }
            node={columnNode}
          />
        ))}
      </LevelContext.Provider>
    </div>
  )
}
