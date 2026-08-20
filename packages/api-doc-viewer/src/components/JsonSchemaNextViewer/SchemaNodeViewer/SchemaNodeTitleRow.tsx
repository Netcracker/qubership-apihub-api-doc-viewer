import { useCustomizationOptions } from "@apihub/contexts/CustomizationOptionsContext"
import { LayoutSide } from "@apihub/types/internal/LayoutSide"
import { JsonSchemaTreeNode, JsonSchemaTreeNodeWithDiffs } from "@netcracker/qubership-apihub-next-data-model/model/json-schema/types/aliases"
import { JsonSchemaTreeNodeValue } from "@netcracker/qubership-apihub-next-data-model/model/json-schema/types/node-value"
import { JsonSchemaPropertyRowVisibility } from "@netcracker/qubership-apihub-next-data-model/building-service/json-schema/tree/node-visibility-data/types"
import { resolvePlainPropertyListLastRowFlags } from "@netcracker/qubership-apihub-next-data-model/building-service/json-schema/tree/node-visibility-data/kind-property"
import { FC, useCallback, useMemo } from "react"
import { TextValueVariant } from "@apihub/components/shared-components/TextValue/types"
import { TitleRow } from "@apihub/components/shared-components/TitleRow/TitleRow"
import { TitleRowUsage } from "@apihub/components/shared-components/TitleRow/types"
import { TitleRowProps } from "../../shared-components/TitleRow/types"
import { ATTRIBUTE_PRECEDED_BY, WithPrecededByProps } from "../../shared-components/WithPrecededByProps"
import {
  isJsonSchemaBooleanAdditionalPropertiesNode,
  resolveJsonSchemaNodeTitleDisplay,
} from "../utils/resolve-json-schema-node-title"
import { isJsonSchemaRootNode } from "../utils/node-type-checkers"
import { JsonSchemaNodeTitle } from "./JsonSchemaNodeTitle"
import { JsonSchemaTitleSubheader } from "./JsonSchemaTitleSubheader"
import { buildRowDiffProps, useNodeDiffState } from "../../shared-components/diffs/node-diff-props"
import { isJsonSchemaTreeNodeWithDiffs } from "@netcracker/qubership-apihub-next-data-model/shared/json-schema/guards/tree-node"
import {
  isDiffSideHeaderVisible,
  takeAddRemoveDiffIfPresent,
} from "@netcracker/qubership-apihub-next-data-model/model/abstract/tree-with-diffs/list-side-display"

export type SchemaNodeTitleRowProps = WithPrecededByProps & {
  ownerNode: JsonSchemaTreeNode | JsonSchemaTreeNodeWithDiffs
  displayNode?: JsonSchemaTreeNode | JsonSchemaTreeNodeWithDiffs
  displayValue?: JsonSchemaTreeNodeValue | null
  contentVisibility: JsonSchemaPropertyRowVisibility
  isLastInList?: boolean
  expandable?: boolean
  expanded?: boolean
  onClickExpander?: () => void
  titleRowDiffProps?: Pick<TitleRowProps, "diff" | "descendantDiffs" | "diffsSeverities">
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
    titleRowDiffProps: titleRowDiffPropsOverride,
    [ATTRIBUTE_PRECEDED_BY]: precededBy,
  } = props

  const customizationOptions = useCustomizationOptions()
  const ownerMeta = ownerNode.meta()
  const displayValueResolved = displayValue ?? displayNode.value()
  const displayMeta = displayNode.meta()

  const listLastRowFlags = useMemo(
    () => resolvePlainPropertyListLastRowFlags(isLastInList, contentVisibility),
    [contentVisibility, isLastInList],
  )

  const titleDisplay = useMemo(
    () => resolveJsonSchemaNodeTitleDisplay({
      node: ownerNode,
      meta: ownerMeta,
      headerRowTitle: customizationOptions?.headerRowTitle,
    }),
    [customizationOptions?.headerRowTitle, ownerMeta, ownerNode],
  )

  const titleContent = useMemo(
    () => <JsonSchemaNodeTitle display={titleDisplay} />,
    [titleDisplay],
  )

  const showTypeSubheader = useMemo(
    () => !isJsonSchemaBooleanAdditionalPropertiesNode(displayNode, displayMeta),
    [displayMeta, displayNode],
  )

  const nodeDiffState = useNodeDiffState(displayNode, isJsonSchemaTreeNodeWithDiffs)
  const titleRowDiffProps: Pick<TitleRowProps, "diff" | "descendantDiffs" | "diffsSeverities"> = useMemo(
    () => titleRowDiffPropsOverride ?? buildRowDiffProps(nodeDiffState),
    [nodeDiffState, titleRowDiffPropsOverride],
  )

  const subheader = useCallback(
    (layoutSide: LayoutSide) => {
      if (!isDiffSideHeaderVisible(takeAddRemoveDiffIfPresent(titleRowDiffProps.diff), layoutSide)) {
        return <></>
      }

      return (
        <JsonSchemaTitleSubheader
          value={displayValueResolved}
          meta={displayMeta}
          isCycle={displayNode.isCycle}
          layoutSide={layoutSide}
          showTypeLabel={showTypeSubheader}
        />
      )
    },
    [displayMeta, displayNode.isCycle, displayValueResolved, showTypeSubheader, titleRowDiffProps.diff],
  )

  return (
    <TitleRow
      {...listLastRowFlags}
      data-precededby={precededBy}
      titleContent={titleContent}
      expandable={expandable}
      expanded={expanded}
      isRoot={isJsonSchemaRootNode(ownerNode)}
      onClickExpander={expandable ? onClickExpander : undefined}
      variant={TextValueVariant.body2}
      subheader={subheader}
      usage={TitleRowUsage.JsonSchemaProperty}
      {...titleRowDiffProps}
    />
  )
}
