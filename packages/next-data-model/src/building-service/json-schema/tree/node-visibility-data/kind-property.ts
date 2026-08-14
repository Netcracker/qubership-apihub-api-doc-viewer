import { DisplayMode } from "@apihub/next-data-model/model/abstract/display-mode"
import { isDetailedDisplayMode } from "@apihub/next-data-model/model/abstract/guards/display-mode"
import { JsonSchemaTreeNode } from "@apihub/next-data-model/model/json-schema/types/aliases"
import { JsonSchemaTreeNodeKinds } from "@apihub/next-data-model/model/json-schema/types/node-kind"
import { JsonSchemaTreeNodeValue } from "@apihub/next-data-model/model/json-schema/types/node-value"
import { resolveValidationKeysForType } from "@apihub/next-data-model/model/json-schema/validation-keys"
import type {
  JsonSchemaPropertyAdditionalInfoRowKind,
  JsonSchemaPropertyListLastRowFlags,
  JsonSchemaPropertyRowVisibility,
} from "./types"

function hasDefinedValue(value: unknown): boolean {
  return value !== undefined && value !== null
}

function hasExtensions(value: JsonSchemaTreeNodeValue | null | undefined): boolean {
  return !!value?.extensions && Object.keys(value.extensions).length > 0
}

const DEPRECATION_REASON_EXTENSION_KEY = "x-deprecated-reason"

function resolveDeprecationReason(value: JsonSchemaTreeNodeValue | null | undefined): string | undefined {
  const reason = value?.extensions?.[DEPRECATION_REASON_EXTENSION_KEY]
  return typeof reason === "string" && reason.length > 0 ? reason : undefined
}

export class PlainPropertyNodeVisibilityManager {
  public resolveNodeVisibility(
    node: JsonSchemaTreeNode<typeof JsonSchemaTreeNodeKinds.PROPERTY>,
    displayMode: DisplayMode,
  ): JsonSchemaPropertyRowVisibility {
    const value = node.value()
    const detailed = isDetailedDisplayMode(displayMode)

    const deprecationReason = resolveDeprecationReason(value)
    const showDescription = detailed && !!value?.description
    const showDeprecationReasonRow = detailed && !!deprecationReason
    const showDefaultRow = detailed && hasDefinedValue(value?.default)
    const showExamplesRow = detailed && Array.isArray(value?.examples) && value.examples.length > 0
    const showEnumValuesRow = detailed && Array.isArray(value?.enum) && value.enum.length > 0
    const showValidationsSection = detailed && resolveValidationKeysForType(value).length > 0
    const showExtensionsRow = detailed && hasExtensions(value)
    const showAnyAdditionalInfoRow = showDefaultRow || showExamplesRow || showEnumValuesRow
      || showValidationsSection || showExtensionsRow
    const showContentSection = showDescription || showDeprecationReasonRow || showAnyAdditionalInfoRow

    return {
      showDescription,
      showDeprecationReasonRow,
      deprecationReason,
      showDefaultRow,
      showExamplesRow,
      showEnumValuesRow,
      showValidationsSection,
      showExtensionsRow,
      showContentSection,
      showAnyAdditionalInfoRow,
    }
  }

  public resolveListLastRowFlags(
    isLastInList: boolean,
    visibility: JsonSchemaPropertyRowVisibility,
  ): JsonSchemaPropertyListLastRowFlags {
    const {
      showDescription,
      showContentSection,
      showEnumValuesRow,
      showDefaultRow,
      showExamplesRow,
    } = visibility

    return {
      isTitleListLastRow: isLastInList && !showContentSection,
      isDescriptionListLastRow: isLastInList && showDescription && !showEnumValuesRow
        && !showDefaultRow && !showExamplesRow,
      isEnumAdditionalInfoListLastRow: isLastInList && showEnumValuesRow && !showDefaultRow && !showExamplesRow,
      isDefaultAdditionalInfoListLastRow: isLastInList && showDefaultRow && !showExamplesRow,
      isExamplesAdditionalInfoListLastRow: isLastInList && showExamplesRow,
    }
  }

  public resolveAdditionalInfoRowUsesAfterRowPrecededBy(
    visibility: Pick<JsonSchemaPropertyRowVisibility, "showEnumValuesRow" | "showDefaultRow">,
    rowKind: JsonSchemaPropertyAdditionalInfoRowKind,
  ): boolean {
    if (rowKind === "default") {
      return visibility.showEnumValuesRow
    }
    if (rowKind === "examples") {
      return visibility.showEnumValuesRow || visibility.showDefaultRow
    }
    return false
  }

  public resolveIsExpandable(node: JsonSchemaTreeNode): boolean {
    if (node.isCycle) {
      return false
    }
    return node.childrenNodes().length > 0
  }

  public resolveInitiallyExpanded(node: JsonSchemaTreeNode): boolean {
    if (node.isCycle) {
      return false
    }
    const children = node.childrenNodes()
    return children.length === 0
  }
}

const defaultInstance = new PlainPropertyNodeVisibilityManager()

export function resolvePlainPropertyNodeVisibility(
  node: JsonSchemaTreeNode<typeof JsonSchemaTreeNodeKinds.PROPERTY>,
  displayMode: DisplayMode,
): JsonSchemaPropertyRowVisibility {
  return defaultInstance.resolveNodeVisibility(node, displayMode)
}

export function resolvePlainPropertyListLastRowFlags(
  isLastInList: boolean,
  visibility: JsonSchemaPropertyRowVisibility,
): JsonSchemaPropertyListLastRowFlags {
  return defaultInstance.resolveListLastRowFlags(isLastInList, visibility)
}

export function resolvePlainPropertyAdditionalInfoRowUsesAfterRowPrecededBy(
  visibility: Pick<JsonSchemaPropertyRowVisibility, "showEnumValuesRow" | "showDefaultRow">,
  rowKind: JsonSchemaPropertyAdditionalInfoRowKind,
): boolean {
  return defaultInstance.resolveAdditionalInfoRowUsesAfterRowPrecededBy(visibility, rowKind)
}

export function resolvePlainPropertyIsExpandable(node: JsonSchemaTreeNode): boolean {
  return defaultInstance.resolveIsExpandable(node)
}

export function resolvePlainPropertyInitiallyExpanded(node: JsonSchemaTreeNode): boolean {
  return defaultInstance.resolveInitiallyExpanded(node)
}
