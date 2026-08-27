import { JsonSchemaTreeNode } from "@netcracker/qubership-apihub-next-data-model/model/json-schema/types/aliases"
import { JsonSchemaTreeNodeValue } from "@netcracker/qubership-apihub-next-data-model/model/json-schema/types/node-value"
import { JsonSchemaPropertyRowVisibility } from "@netcracker/qubership-apihub-next-data-model/building-service/json-schema/tree/node-visibility-data/types"
import { FC } from "react"
import { WithPrecededByProps } from "../../shared-components/WithPrecededByProps"
import { JsonSchemaTitleSubheader } from "./JsonSchemaTitleSubheader"
import { SchemaNodeTitleRowBase } from "./SchemaNodeTitleRowBase"

export type SchemaNodeTitleRowProps = WithPrecededByProps & {
  ownerNode: JsonSchemaTreeNode
  displayNode?: JsonSchemaTreeNode
  displayValue?: JsonSchemaTreeNodeValue | null
  contentVisibility: JsonSchemaPropertyRowVisibility
  isLastInList?: boolean
  expandable?: boolean
  expanded?: boolean
  onClickExpander?: () => void
}

export const SchemaNodeTitleRow: FC<SchemaNodeTitleRowProps> = (props) => {
  const {
    ownerNode,
    displayNode = ownerNode,
    displayValue,
    contentVisibility,
    isLastInList = false,
    expandable = false,
    expanded = false,
    onClickExpander,
    ...precededByProps
  } = props

  return (
    <SchemaNodeTitleRowBase
      {...precededByProps}
      ownerNode={ownerNode}
      displayNode={displayNode}
      displayValue={displayValue}
      contentVisibility={contentVisibility}
      isLastInList={isLastInList}
      expandable={expandable}
      expanded={expanded}
      onClickExpander={onClickExpander}
      renderSubheader={({
        layoutSide,
        displayValueResolved,
        displayMeta,
        displayNode: subheaderDisplayNode,
        showTypeSubheader,
      }) => (
        <JsonSchemaTitleSubheader
          value={displayValueResolved}
          meta={displayMeta}
          isCycle={subheaderDisplayNode.isCycle}
          layoutSide={layoutSide}
          showTypeLabel={showTypeSubheader}
        />
      )}
    />
  )
}
