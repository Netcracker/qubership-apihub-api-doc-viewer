import {
  ChangedPropertyMetaData,
  NODE_LEVEL_DIFF_KEY,
} from "@apihub/next-data-model/model/abstract/tree-with-diffs/tree-node.interface"
import {
  LayoutSide,
} from "@apihub/next-data-model/model/abstract/layout-side"
import {
  resolveFieldSideText,
  resolveListSideItems,
} from "@apihub/next-data-model/model/abstract/tree-with-diffs/list-side-display"
import { JsonSchemaTreeNodeWithDiffs } from "@apihub/next-data-model/model/json-schema/types/aliases"
import { JsonSchemaTreeNodeKinds } from "@apihub/next-data-model/model/json-schema/types/node-kind"
import {
  JsonSchemaListValueDiffs,
  JsonSchemaPropertyRowDiffs,
} from "@apihub/next-data-model/model/json-schema/tree-with-diffs/property-row-diffs.types"
import { JsonSchemaValidationRowKey } from "@apihub/next-data-model/model/json-schema/tree-with-diffs/validation-row-source-keys"

export type {
  JsonSchemaListValueDiffs,
  JsonSchemaPropertyRowDiffs,
} from "./property-row-diffs.types"

export type JsonSchemaPropertyNodeWithDiffs =
  JsonSchemaTreeNodeWithDiffs<typeof JsonSchemaTreeNodeKinds.PROPERTY>

function takePropertyRowDiffs(
  node: JsonSchemaPropertyNodeWithDiffs,
): JsonSchemaPropertyRowDiffs {
  return node.diffs as JsonSchemaPropertyRowDiffs
}

export function takeJsonSchemaDefaultDiff(
  node: JsonSchemaPropertyNodeWithDiffs,
): ChangedPropertyMetaData | undefined {
  return takePropertyRowDiffs(node).default
}

export function takeJsonSchemaDefaultRowColorizingDiff(
  node: JsonSchemaPropertyNodeWithDiffs,
): ChangedPropertyMetaData | undefined {
  return takePropertyRowDiffs(node).defaultRowColorizingDiff
}

export function takeJsonSchemaEnumValueDiffs(
  node: JsonSchemaPropertyNodeWithDiffs,
): JsonSchemaListValueDiffs | undefined {
  return takePropertyRowDiffs(node).enumValueDiffs
}

export function takeJsonSchemaEnumRowColorizingDiff(
  node: JsonSchemaPropertyNodeWithDiffs,
): ChangedPropertyMetaData | undefined {
  return takePropertyRowDiffs(node).enumRowColorizingDiff
}

export function takeJsonSchemaExamplesValueDiffs(
  node: JsonSchemaPropertyNodeWithDiffs,
): JsonSchemaListValueDiffs | undefined {
  return takePropertyRowDiffs(node).examplesValueDiffs
}

export function takeJsonSchemaExamplesRowColorizingDiff(
  node: JsonSchemaPropertyNodeWithDiffs,
): ChangedPropertyMetaData | undefined {
  return takePropertyRowDiffs(node).examplesRowColorizingDiff
}

export function takeJsonSchemaValidationRowDiff(
  node: JsonSchemaPropertyNodeWithDiffs,
  rowKey: JsonSchemaValidationRowKey,
): ChangedPropertyMetaData | undefined {
  return takePropertyRowDiffs(node).validationRowDiffs?.[rowKey]
}

export function takeJsonSchemaValidationRowColorizingDiff(
  node: JsonSchemaPropertyNodeWithDiffs,
  rowKey: JsonSchemaValidationRowKey,
): ChangedPropertyMetaData | undefined {
  return takePropertyRowDiffs(node).validationRowColorizingDiffs?.[rowKey]
}

export function resolveJsonSchemaDefaultSideDisplay(
  node: JsonSchemaPropertyNodeWithDiffs,
  layoutSide: LayoutSide,
): string | undefined {
  const mergedDefault = node.value()?.default
  return resolveFieldSideText(
    mergedDefault !== undefined ? String(mergedDefault) : undefined,
    takeJsonSchemaDefaultDiff(node),
    layoutSide,
  )
}

function formatListDisplayValue(value: unknown): string {
  if (typeof value === "string") {
    return value
  }
  return JSON.stringify(value)
}

export function resolveJsonSchemaListValueSideItems(
  mergedValues: readonly unknown[],
  itemDiffs: JsonSchemaListValueDiffs | undefined,
  layoutSide: LayoutSide,
): ReturnType<typeof resolveListSideItems> {
  const mergedOrder = mergedValues.map(formatListDisplayValue)
  return resolveListSideItems(mergedOrder, itemDiffs, layoutSide)
}

export function isJsonSchemaWholePropertyAddOrRemove(
  node: JsonSchemaPropertyNodeWithDiffs,
): boolean {
  const nodeLevelDiff = node.diffs[NODE_LEVEL_DIFF_KEY]
  if (!nodeLevelDiff) {
    return false
  }
  const { data } = nodeLevelDiff
  return data.action === "add" || data.action === "remove"
}
