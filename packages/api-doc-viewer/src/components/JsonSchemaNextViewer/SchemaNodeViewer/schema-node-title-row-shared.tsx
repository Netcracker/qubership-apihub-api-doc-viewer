import { useCustomizationOptions } from "@apihub/contexts/CustomizationOptionsContext"
import { JsonSchemaTreeNode } from "@netcracker/qubership-apihub-next-data-model/model/json-schema/types/aliases"
import { JsonSchemaTreeNodeValue } from "@netcracker/qubership-apihub-next-data-model/model/json-schema/types/node-value"
import { JsonSchemaPropertyRowVisibility } from "@netcracker/qubership-apihub-next-data-model/building-service/json-schema/tree/node-visibility-data/types"
import { resolvePlainPropertyListLastRowFlags } from "@netcracker/qubership-apihub-next-data-model/building-service/json-schema/tree/node-visibility-data/kind-property"
import { useMemo } from "react"
import {
  isJsonSchemaBooleanAdditionalPropertiesNode,
  resolveJsonSchemaNodeTitleDisplay,
} from "../utils/resolve-json-schema-node-title"
import { JsonSchemaNodeTitle } from "./JsonSchemaNodeTitle"

export type SchemaNodeTitleRowSharedInput = {
  ownerNode: JsonSchemaTreeNode
  displayNode: JsonSchemaTreeNode
  displayValue?: JsonSchemaTreeNodeValue | null
  contentVisibility: JsonSchemaPropertyRowVisibility
  isLastInList: boolean
}

export function useSchemaNodeTitleRowShared(input: SchemaNodeTitleRowSharedInput) {
  const {
    ownerNode,
    displayNode,
    displayValue,
    contentVisibility,
    isLastInList,
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
    () => <JsonSchemaNodeTitle display={titleDisplay} />,
    [titleDisplay],
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
