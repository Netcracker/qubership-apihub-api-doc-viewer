import { JsonSchemaTreeNodeWithDiffs } from "@netcracker/qubership-apihub-next-data-model/model/json-schema/types/aliases"
import { JsonSchemaTreeNodeValue } from "@netcracker/qubership-apihub-next-data-model/model/json-schema/types/node-value"
import { JsonSchemaPropertyRowVisibility } from "@netcracker/qubership-apihub-next-data-model/building-service/json-schema/tree/node-visibility-data/types"
import {
  isDiffSideHeaderVisible,
  takeAddRemoveDiffIfPresent,
} from "@netcracker/qubership-apihub-next-data-model/model/abstract/tree-with-diffs/list-side-display"
import { FC, useMemo } from "react"
import { TitleRowProps } from "../../shared-components/TitleRow/types"
import { WithPrecededByProps } from "../../shared-components/WithPrecededByProps"
import { buildJsonSchemaTitleRowDiffProps } from "../utils/json-schema-title-row-diff-props"
import { JsonSchemaTitleSubheaderWithDiffs } from "./JsonSchemaTitleSubheader"
import { SchemaNodeTitleRowBase } from "./SchemaNodeTitleRowBase"

export type SchemaNodeTitleRowWithDiffsProps = WithPrecededByProps & {
  ownerNode: JsonSchemaTreeNodeWithDiffs
  displayNode?: JsonSchemaTreeNodeWithDiffs
  displayValue?: JsonSchemaTreeNodeValue | null
  contentVisibility: JsonSchemaPropertyRowVisibility
  isLastInList?: boolean
  expandable?: boolean
  expanded?: boolean
  onClickExpander?: () => void
  titleRowDiffProps?: Pick<TitleRowProps, "diff" | "descendantDiffs" | "diffsSeverities">
}

export const SchemaNodeTitleRowWithDiffs: FC<SchemaNodeTitleRowWithDiffsProps> = (props) => {
  const {
    ownerNode,
    displayNode = ownerNode,
    displayValue,
    contentVisibility,
    isLastInList = false,
    expandable = false,
    expanded = false,
    onClickExpander,
    titleRowDiffProps: titleRowDiffPropsOverride,
    ...precededByProps
  } = props

  const titleRowDiffProps = useMemo(
    () => titleRowDiffPropsOverride ?? buildJsonSchemaTitleRowDiffProps(displayNode),
    [displayNode, titleRowDiffPropsOverride],
  )

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
      titleRowDiffProps={titleRowDiffProps}
      renderSubheader={({
        layoutSide,
        displayMeta,
        displayNode: subheaderDisplayNode,
        showTypeSubheader,
      }) => {
        if (!isDiffSideHeaderVisible(takeAddRemoveDiffIfPresent(titleRowDiffProps.diff), layoutSide)) {
          return <></>
        }

        return (
          <JsonSchemaTitleSubheaderWithDiffs
            meta={displayMeta}
            node={displayNode}
            isCycle={subheaderDisplayNode.isCycle}
            layoutSide={layoutSide}
            showTypeLabel={showTypeSubheader}
          />
        )
      }}
    />
  )
}
