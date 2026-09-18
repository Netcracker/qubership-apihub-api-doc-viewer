import { useCustomizationOptions } from "@apihub/contexts/CustomizationOptionsContext"
import { LayoutSide } from "@apihub/types/internal/LayoutSide"
import { Diff } from "@netcracker/qubership-apihub-api-diff"
import { resolvePlainPropertyListLastRowFlags } from "@netcracker/qubership-apihub-next-data-model/building-service/json-schema/tree/node-visibility-data/kind-property"
import { JsonSchemaPropertyRowVisibility } from "@netcracker/qubership-apihub-next-data-model/building-service/json-schema/tree/node-visibility-data/types"
import { isDiffSideContentVisible, isDiffSideHeaderVisible, takeAddRemoveDiffIfPresent } from "@netcracker/qubership-apihub-next-data-model/model/abstract/tree-with-diffs/list-side-display"
import { ChangedPropertyMetaData } from "@netcracker/qubership-apihub-next-data-model/model/abstract/tree-with-diffs/tree-node.interface"
import { JsonSchemaViewerTreeNode } from "@netcracker/qubership-apihub-next-data-model/model/json-schema/types/aliases"
import { JsonSchemaTreeNodeStoredValue } from "@netcracker/qubership-apihub-next-data-model/model/json-schema/types/node-value"
import { asJsonSchemaTypedNodeValue } from "@netcracker/qubership-apihub-next-data-model/shared/json-schema/guards/schema-value"
import { useMemo } from "react"
import {
  isJsonSchemaBooleanAdditionalPropertiesNode,
  resolveJsonSchemaNodeTitleDisplay,
} from "../utils/resolve-json-schema-node-title"
import { JsonSchemaNodeTitlePlain, JsonSchemaNodeTitleWithDiffs } from "./JsonSchemaNodeTitle"

export type SchemaNodeTitleRowSharedInput = {
  ownerNode: JsonSchemaViewerTreeNode
  displayNode: JsonSchemaViewerTreeNode
  displayValue?: JsonSchemaTreeNodeStoredValue | null
  contentVisibility: JsonSchemaPropertyRowVisibility
  isLastInList: boolean
  requiredDiff?: Diff
  withRequiredDiffIndicator?: boolean
  titleRowDiff?: ChangedPropertyMetaData
}

export function useSchemaNodeTitleRowShared(input: SchemaNodeTitleRowSharedInput) {
  const {
    ownerNode,
    displayNode,
    displayValue,
    contentVisibility,
    isLastInList,
    requiredDiff,
    withRequiredDiffIndicator = false,
    titleRowDiff,
  } = input

  const customizationOptions = useCustomizationOptions()
  const ownerMeta = ownerNode.meta()
  const displayValueResolved = asJsonSchemaTypedNodeValue(displayValue ?? displayNode.value())
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
    () => (layoutSide: LayoutSide) => {
      const addRemoveDiff = takeAddRemoveDiffIfPresent(titleRowDiff)
      const isVisible = addRemoveDiff
        ? isDiffSideHeaderVisible(addRemoveDiff, layoutSide)
        : isDiffSideContentVisible(titleRowDiff, layoutSide)

      if (!isVisible) {
        return null
      }

      return withRequiredDiffIndicator
        ? (
          <JsonSchemaNodeTitleWithDiffs
            display={titleDisplay}
            required={ownerMeta?.required}
            requiredDiff={requiredDiff}
            layoutSide={layoutSide}
          />
        )
        : (
          <JsonSchemaNodeTitlePlain
            display={titleDisplay}
            required={ownerMeta?.required}
          />
        )
    },
    [ownerMeta?.required, requiredDiff, titleDisplay, titleRowDiff, withRequiredDiffIndicator],
  )

  const showTypeSubheader = useMemo(
    () => !isJsonSchemaBooleanAdditionalPropertiesNode(displayNode, displayMeta),
    [displayMeta, displayNode],
  )

  return {
    displayValueResolved,
    displayMeta,
    listLastRowFlags,
    titleContent,
    showTypeSubheader,
  }
}
