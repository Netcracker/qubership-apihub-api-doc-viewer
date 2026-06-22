import { useDisplayMode } from "@apihub/contexts/DisplayModeContext"
import { getDdlApiChildNodes, isColumnsNode, isIndexesNode } from "@apihub/utils/ddlapi/node-type-checkers"
import { DdlApiTreeNode } from "@netcracker/qubership-apihub-next-data-model/model/ddlapi/types/aliases"
import { DdlApiTreeNodeKinds } from "@netcracker/qubership-apihub-next-data-model/model/ddlapi/types/node-kind"
import { FC } from "react"
import { DETAILED_DISPLAY_MODE } from "../../types/DisplayMode"
import { TextRow } from "../shared-components/TextRow/TextRow"
import { DEFAULT_LONG_TEXT_COLOR } from "../shared-components/TextRow/consts"
import { TextValueVariant } from "../shared-components/TextValue/types"
import { TitleRow } from "../shared-components/TitleRow/TitleRow"
import { ATTRIBUTE_PRECEDED_BY, PrecededBy, WithPrecededByProps } from "../shared-components/WithPrecededByProps"
import { ColumnsNodeViewer } from "./ColumnsNodeViewer"
import { DdlSchemaNameBlock } from "./DdlSchemaNameBlock/DdlSchemaNameBlock"
import { IndexesNodeViewer } from "./IndexesNodeViewer"

type TableNodeViewerProps = WithPrecededByProps & {
  node: DdlApiTreeNode<typeof DdlApiTreeNodeKinds.TABLE>
}

export const TableNodeViewer: FC<TableNodeViewerProps> = (props) => {
  const { node, [ATTRIBUTE_PRECEDED_BY]: precededBy = PrecededBy.ROOT } = props

  const displayMode = useDisplayMode()
  const value = node.value()
  const children = getDdlApiChildNodes(node)

  const columnsChild = children.find(isColumnsNode)
  const indexesChild = children.find(isIndexesNode)

  const isSchemaNameDisplayed = !!value?.schemaName
  const isDescriptionDisplayed =
    displayMode === DETAILED_DISPLAY_MODE && !!value?.description

  return (
    <div data-testid="ddl-table-node-viewer" className="flex flex-col">
      <TitleRow
        data-precededby={precededBy}
        value={value?.tableName ?? ''}
        expandable={false}
        expanded={true}
        variant={TextValueVariant.h1}
      />
      {isSchemaNameDisplayed && (
        <DdlSchemaNameBlock
          data-precededby={PrecededBy.DDL_TABLE_HEADER_ROW}
          schemaName={value?.schemaName ?? ''}
        />
      )}
      {isDescriptionDisplayed && (
        <TextRow
          data-precededby={
            isSchemaNameDisplayed
              ? PrecededBy.DDL_TABLE_SCHEMA_ROW
              : PrecededBy.DDL_TABLE_HEADER_ROW
          }
          value={value?.description ?? ''}
          variant={TextValueVariant.h4}
          textFontWeight="normal"
          textColor={DEFAULT_LONG_TEXT_COLOR}
        />
      )}
      {columnsChild && (
        <ColumnsNodeViewer
          data-precededby={
            isDescriptionDisplayed
              ? PrecededBy.DDL_TABLE_DESCRIPTION_ROW
              : isSchemaNameDisplayed
                ? PrecededBy.DDL_TABLE_SCHEMA_ROW
                : PrecededBy.DDL_TABLE_HEADER_ROW
          }
          node={columnsChild}
        />
      )}
      {indexesChild && (
        <IndexesNodeViewer
          data-precededby={
            columnsChild?.childrenNodes().length
              ? PrecededBy.DDL_COLUMN_ROW
              : isDescriptionDisplayed
                ? PrecededBy.DDL_TABLE_DESCRIPTION_ROW
                : isSchemaNameDisplayed
                  ? PrecededBy.DDL_TABLE_SCHEMA_ROW
                  : PrecededBy.DDL_TABLE_HEADER_ROW
          }
          node={indexesChild}
        />
      )}
    </div>
  )
}
