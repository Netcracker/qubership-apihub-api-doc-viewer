import { LevelContext, useLevelContext } from "@apihub/contexts/LevelContext"
import { getIndexChildNodes } from "@apihub/utils/ddlapi/node-type-checkers"
import { DdlApiTreeNode } from "@netcracker/qubership-apihub-next-data-model/model/ddlapi/types/aliases"
import { DdlApiTreeNodeKinds } from "@netcracker/qubership-apihub-next-data-model/model/ddlapi/types/node-kind"
import { FC } from "react"
import { TextValueVariant } from "../shared-components/TextValue/types"
import { TitleRow } from "../shared-components/TitleRow/TitleRow"
import { ATTRIBUTE_PRECEDED_BY, PrecededBy, WithPrecededByProps } from "../shared-components/WithPrecededByProps"
import { IndexNodeViewer } from "./IndexNodeViewer"

type IndexesNodeViewerProps = WithPrecededByProps & {
  node: DdlApiTreeNode<typeof DdlApiTreeNodeKinds.INDEXES>
}

export const IndexesNodeViewer: FC<IndexesNodeViewerProps> = (props) => {
  const { node, [ATTRIBUTE_PRECEDED_BY]: precededBy } = props

  const level = useLevelContext()
  const value = node.value()
  const indexNodes = getIndexChildNodes(node.childrenNodes())

  if (indexNodes.length === 0) {
    return null
  }

  return (
    <div data-testid="ddl-indexes-node-viewer" className="flex flex-col">
      <TitleRow
        data-precededby={precededBy}
        value={value?.title ?? 'Indexes'}
        expandable={false}
        expanded={true}
        variant={TextValueVariant.h2}
      />
      <LevelContext.Provider value={level + 1}>
        {indexNodes.map((indexNode, index) => (
          <IndexNodeViewer
            key={indexNode.id}
            data-precededby={
              index === 0
                ? PrecededBy.DDL_SECTION_HEADER
                : PrecededBy.DDL_INDEX_ROW
            }
            node={indexNode}
          />
        ))}
      </LevelContext.Provider>
    </div>
  )
}
