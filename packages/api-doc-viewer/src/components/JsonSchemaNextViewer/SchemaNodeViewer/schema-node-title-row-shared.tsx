import { useCustomizationOptions } from "@apihub/contexts/CustomizationOptionsContext"
import { LayoutSide } from "@apihub/types/internal/LayoutSide"
import { JsonSchemaTreeNode } from "@netcracker/qubership-apihub-next-data-model/model/json-schema/types/aliases"
import { JsonSchemaTreeNodeValue } from "@netcracker/qubership-apihub-next-data-model/model/json-schema/types/node-value"
import { JsonSchemaPropertyRowVisibility } from "@netcracker/qubership-apihub-next-data-model/building-service/json-schema/tree/node-visibility-data/types"
import { resolvePlainPropertyListLastRowFlags } from "@netcracker/qubership-apihub-next-data-model/building-service/json-schema/tree/node-visibility-data/kind-property"
import { Diff } from "@netcracker/qubership-apihub-api-diff"
import { useMemo } from "react"
import {
  isJsonSchemaBooleanAdditionalPropertiesNode,
  resolveJsonSchemaNodeTitleDisplay,
} from "../utils/resolve-json-schema-node-title"
import { JsonSchemaNodeTitlePlain, JsonSchemaNodeTitleWithDiffs } from "./JsonSchemaNodeTitle"

export type SchemaNodeTitleRowSharedInput = {
  ownerNode: JsonSchemaTreeNode
  displayNode: JsonSchemaTreeNode
  displayValue?: JsonSchemaTreeNodeValue | null
  contentVisibility: JsonSchemaPropertyRowVisibility
  isLastInList: boolean
  requiredDiff?: Diff
  withRequiredDiffIndicator?: boolean
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
  } = input

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
    () => (layoutSide: LayoutSide) => withRequiredDiffIndicator
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
      ),
    [ownerMeta?.required, requiredDiff, titleDisplay, withRequiredDiffIndicator],
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
