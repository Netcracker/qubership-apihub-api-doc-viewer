import { DisplayMode } from "@apihub/next-data-model/model/abstract/display-mode"
import { isDetailedDisplayMode } from "@apihub/next-data-model/model/abstract/guards/display-mode"
import { JsonSchemaTreeNodeWithDiffs } from "@apihub/next-data-model/model/json-schema/types/aliases"
import { JsonSchemaTreeNodeKinds } from "@apihub/next-data-model/model/json-schema/types/node-kind"
import {
  takeJsonSchemaDefaultDiff,
  takeJsonSchemaDefaultRowColorizingDiff,
  takeJsonSchemaEnumDiff,
  takeJsonSchemaEnumRowColorizingDiff,
  takeJsonSchemaEnumValueDiffs,
  takeJsonSchemaExamplesDiff,
  takeJsonSchemaExamplesRowColorizingDiff,
  takeJsonSchemaExamplesValueDiffs,
  takeJsonSchemaValidationRowColorizingDiff,
  takeJsonSchemaValidationRowDiff,
} from "@apihub/next-data-model/model/json-schema/tree-with-diffs/property-row-diffs"
import {
  JSON_SCHEMA_VALIDATION_ROW_SOURCE_KEYS,
  JsonSchemaValidationRowKey,
} from "@apihub/next-data-model/model/json-schema/tree-with-diffs/validation-row-source-keys"
import { resolveValidationKeysForType } from "@apihub/next-data-model/model/json-schema/validation-keys"
import {
  PlainPropertyNodeVisibilityManager,
  resolvePlainPropertyAdditionalInfoRowUsesAfterRowPrecededBy,
  resolvePlainPropertyListLastRowFlags,
} from "../../tree/node-visibility-data/kind-property"
import type {
  JsonSchemaPropertyAdditionalInfoRowKind,
  JsonSchemaPropertyListLastRowFlags,
  JsonSchemaPropertyRowVisibility,
} from "../../tree/node-visibility-data/types"

const plainPropertyNodeVisibilityManager = new PlainPropertyNodeVisibilityManager()

function hasDefinedValue(value: unknown): boolean {
  return value !== undefined && value !== null
}

function hasValidationRowDiffs(
  node: JsonSchemaTreeNodeWithDiffs<typeof JsonSchemaTreeNodeKinds.PROPERTY>,
): boolean {
  return (Object.keys(JSON_SCHEMA_VALIDATION_ROW_SOURCE_KEYS) as JsonSchemaValidationRowKey[])
    .some((rowKey) => (
      !!takeJsonSchemaValidationRowDiff(node, rowKey)
      || !!takeJsonSchemaValidationRowColorizingDiff(node, rowKey)
    ))
}

export class JsonSchemaNodeVisibilityManagerKindProperty {
  public resolveNodeVisibility(
    node: JsonSchemaTreeNodeWithDiffs<typeof JsonSchemaTreeNodeKinds.PROPERTY>,
    displayMode: DisplayMode,
  ): JsonSchemaPropertyRowVisibility {
    const value = node.value()
    const plainVisibility = plainPropertyNodeVisibilityManager.resolveNodeVisibility(node, displayMode)
    const detailed = isDetailedDisplayMode(displayMode)

    const showDescription = detailed
      && (!!value?.description || !!node.diffs.description)
    const showEnumValuesRow = detailed && (
      plainVisibility.showEnumValuesRow
      || !!takeJsonSchemaEnumDiff(node)
      || !!takeJsonSchemaEnumValueDiffs(node)
      || !!takeJsonSchemaEnumRowColorizingDiff(node)
    )
    const showDefaultRow = detailed && (
      hasDefinedValue(value?.default)
      || !!takeJsonSchemaDefaultDiff(node)
      || !!takeJsonSchemaDefaultRowColorizingDiff(node)
    )
    const showExamplesRow = detailed && (
      plainVisibility.showExamplesRow
      || !!takeJsonSchemaExamplesDiff(node)
      || !!takeJsonSchemaExamplesValueDiffs(node)
      || !!takeJsonSchemaExamplesRowColorizingDiff(node)
    )
    const showValidationsSection = detailed && (
      resolveValidationKeysForType(value).length > 0
      || hasValidationRowDiffs(node)
    )
    const showAnyAdditionalInfoRow = showDefaultRow || showExamplesRow || showEnumValuesRow
      || showValidationsSection || plainVisibility.showExtensionsRow
    const showContentSection = showDescription
      || plainVisibility.showDeprecationReasonRow
      || showAnyAdditionalInfoRow

    return {
      ...plainVisibility,
      showDescription,
      showDefaultRow,
      showExamplesRow,
      showEnumValuesRow,
      showValidationsSection,
      showContentSection,
      showAnyAdditionalInfoRow,
    }
  }

  public resolveListLastRowFlags(
    isLastInList: boolean,
    visibility: JsonSchemaPropertyRowVisibility,
  ): JsonSchemaPropertyListLastRowFlags {
    return resolvePlainPropertyListLastRowFlags(isLastInList, visibility)
  }

  public resolveAdditionalInfoRowUsesAfterRowPrecededBy(
    visibility: Pick<JsonSchemaPropertyRowVisibility, "showEnumValuesRow" | "showDefaultRow">,
    rowKind: JsonSchemaPropertyAdditionalInfoRowKind,
  ): boolean {
    return resolvePlainPropertyAdditionalInfoRowUsesAfterRowPrecededBy(visibility, rowKind)
  }
}

const defaultInstance = new JsonSchemaNodeVisibilityManagerKindProperty()

export function resolveJsonSchemaPropertyNodeVisibility(
  node: JsonSchemaTreeNodeWithDiffs<typeof JsonSchemaTreeNodeKinds.PROPERTY>,
  displayMode: DisplayMode,
): JsonSchemaPropertyRowVisibility {
  return defaultInstance.resolveNodeVisibility(node, displayMode)
}

export function resolveJsonSchemaPropertyListLastRowFlags(
  isLastInList: boolean,
  visibility: JsonSchemaPropertyRowVisibility,
): JsonSchemaPropertyListLastRowFlags {
  return defaultInstance.resolveListLastRowFlags(isLastInList, visibility)
}

export function resolveJsonSchemaPropertyAdditionalInfoRowUsesAfterRowPrecededBy(
  visibility: Pick<JsonSchemaPropertyRowVisibility, "showEnumValuesRow" | "showDefaultRow">,
  rowKind: JsonSchemaPropertyAdditionalInfoRowKind,
): boolean {
  return defaultInstance.resolveAdditionalInfoRowUsesAfterRowPrecededBy(visibility, rowKind)
}
