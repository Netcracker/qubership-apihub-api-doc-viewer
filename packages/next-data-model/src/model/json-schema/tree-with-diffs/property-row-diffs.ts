import {
  LayoutSide,
  ORIGIN_LAYOUT_SIDE,
} from "@apihub/next-data-model/model/abstract/layout-side"
import {
  type ListSideItem,
} from "@apihub/next-data-model/model/abstract/tree-with-diffs/list-side-display"
import {
  ChangedPropertyMetaData,
  NODE_LEVEL_DIFF_KEY,
} from "@apihub/next-data-model/model/abstract/tree-with-diffs/tree-node.interface"
import {
  JSON_SCHEMA_META_FLAG_DIFF_KEYS,
  JSON_SCHEMA_TITLE_ROW_DIFF_KEY,
  JsonSchemaKindAnyNodeDiffs,
  JsonSchemaKindPropertyNodeDiffs,
  JsonSchemaListValueDiffs,
  JsonSchemaSharedRowDiffs,
} from "@apihub/next-data-model/model/json-schema/tree-with-diffs/property-row-diffs.types"
import {
  resolveJsonSchemaTypeLabelSideDisplay
} from "@apihub/next-data-model/model/json-schema/tree-with-diffs/type-label-diffs"
import {
  formatJsonSchemaValidationRowChipDisplay,
  resolveValidationSourceKeyDisplayIndex,
} from "@apihub/next-data-model/model/json-schema/tree-with-diffs/validation-row-chip-display"
import {
  JsonSchemaValidationRowKey,
  JsonSchemaValidationRowKeys,
} from "@apihub/next-data-model/model/json-schema/tree-with-diffs/validation-row-source-keys"
import { JsonSchemaTreeNodeWithDiffs } from "@apihub/next-data-model/model/json-schema/types/aliases"
import { JsonSchemaTreeNodeKinds } from "@apihub/next-data-model/model/json-schema/types/node-kind"
import {
  resolveValueRangeDiffSideEntries,
  resolveValueRangeSideInputFromNodeValue,
  ValueRangeCrawlDiffData,
} from "@apihub/next-data-model/model/json-schema/value-range-diff-side-display"
import { asJsonSchemaTypedNodeValue } from "@apihub/next-data-model/shared/json-schema/guards/schema-value"
import { Diff, DiffAction, isDiffAdd, isDiffRemove, isDiffReplace } from "@netcracker/qubership-apihub-api-diff"

/** Side-visible list item without diff styling — use {@link valueDiffKey} for chip highlight lookup. */
export type JsonSchemaListSideEntry = {
  readonly text: string
  readonly valueDiffKey?: string
}

export {
  JSON_SCHEMA_META_FLAG_DIFF_KEYS,
  JSON_SCHEMA_TITLE_ROW_DIFF_KEY,
  JSON_SCHEMA_TYPE_LABEL_FIELD_DIFF_KEYS
} from "./property-row-diffs.types"
export type {
  JsonSchemaListValueDiffs,
  JsonSchemaKindPropertyNodeDiffs as JsonSchemaPropertyRowDiffs,
  JsonSchemaSharedRowDiffs,
  JsonSchemaTypeLabelFieldDiffKey,
  JsonSchemaTypeLabelFieldDiffs
} from "./property-row-diffs.types"
export {
  resolveJsonSchemaTypeLabelSideDisplay,
  takeJsonSchemaTypeLabelFieldDiffs
} from "./type-label-diffs"
export type { JsonSchemaTypeLabelSideSegment } from "./type-label-diffs"

export type JsonSchemaPropertyNodeWithDiffs =
  JsonSchemaTreeNodeWithDiffs<typeof JsonSchemaTreeNodeKinds.PROPERTY>

export type JsonSchemaNodeWithDiffs = JsonSchemaTreeNodeWithDiffs

function takeSharedRowDiffs(
  node: JsonSchemaTreeNodeWithDiffs,
): JsonSchemaSharedRowDiffs {
  return node.diffs as JsonSchemaSharedRowDiffs
}

export function takeJsonSchemaTitleRowDiff(
  node: JsonSchemaTreeNodeWithDiffs,
): ChangedPropertyMetaData | undefined {
  return takeSharedRowDiffs(node)[JSON_SCHEMA_TITLE_ROW_DIFF_KEY]
    ?? node.diffs[NODE_LEVEL_DIFF_KEY]
}

function takeKindAnyNodeDiffs(
  node: JsonSchemaTreeNodeWithDiffs,
): JsonSchemaKindAnyNodeDiffs {
  return node.diffs as JsonSchemaKindAnyNodeDiffs
}

export function takeJsonSchemaReadOnlyDiff(
  node: JsonSchemaTreeNodeWithDiffs,
): ChangedPropertyMetaData | undefined {
  return takeKindAnyNodeDiffs(node).readOnly
}

export function takeJsonSchemaWriteOnlyDiff(
  node: JsonSchemaTreeNodeWithDiffs,
): ChangedPropertyMetaData | undefined {
  return takeKindAnyNodeDiffs(node).writeOnly
}

export function takeJsonSchemaDeprecatedDiff(
  node: JsonSchemaTreeNodeWithDiffs,
): ChangedPropertyMetaData | undefined {
  return takeKindAnyNodeDiffs(node).deprecated
}

export function takeJsonSchemaRequiredMetaDiff(
  node: JsonSchemaTreeNodeWithDiffs,
): ChangedPropertyMetaData | undefined {
  return takePropertyRowDiffsForRequired(node)?.required
}

export function normalizeJsonSchemaRequiredMetaDiffForDisplay(
  requiredMeta: ChangedPropertyMetaData | undefined,
): Diff | undefined {
  if (!requiredMeta?.data) {
    return undefined
  }

  const diff = requiredMeta.data
  if (isDiffAdd(diff)) {
    return {
      type: diff.type,
      scope: diff.scope,
      description: diff.description,
      action: DiffAction.add,
      afterValue: true,
      afterDeclarationPaths: diff.afterDeclarationPaths,
    }
  }

  if (isDiffRemove(diff)) {
    return {
      type: diff.type,
      scope: diff.scope,
      description: diff.description,
      action: DiffAction.remove,
      beforeValue: true,
      beforeDeclarationPaths: diff.beforeDeclarationPaths,
    }
  }

  if (isDiffReplace(diff)) {
    return {
      type: diff.type,
      scope: diff.scope,
      description: diff.description,
      action: DiffAction.replace,
      beforeValue: true,
      afterValue: true,
      beforeDeclarationPaths: diff.beforeDeclarationPaths,
      afterDeclarationPaths: diff.afterDeclarationPaths,
    }
  }

  return diff
}

export function takeJsonSchemaRequiredMetaDiffForDisplay(
  node: JsonSchemaTreeNodeWithDiffs,
): Diff | undefined {
  return normalizeJsonSchemaRequiredMetaDiffForDisplay(takeJsonSchemaRequiredMetaDiff(node))
}

function takePropertyRowDiffsForRequired(
  node: JsonSchemaTreeNodeWithDiffs,
): JsonSchemaKindPropertyNodeDiffs | undefined {
  if (node.kind !== JsonSchemaTreeNodeKinds.PROPERTY) {
    return undefined
  }
  return node.diffs as JsonSchemaKindPropertyNodeDiffs
}

export type JsonSchemaMetaFlagRawDiffs = Partial<{
  readOnly: Diff
  writeOnly: Diff
  deprecated: Diff
  required: Diff
}>

export function takeJsonSchemaMetaFlagRawDiffs(
  node: JsonSchemaTreeNodeWithDiffs,
): JsonSchemaMetaFlagRawDiffs {
  const kindAnyDiffs = takeKindAnyNodeDiffs(node)
  const propertyDiffs = takePropertyRowDiffsForRequired(node)
  const rawDiffs: JsonSchemaMetaFlagRawDiffs = {}

  for (const key of JSON_SCHEMA_META_FLAG_DIFF_KEYS) {
    const meta = kindAnyDiffs[key]
    if (meta?.data) {
      rawDiffs[key] = meta.data
    }
  }

  const requiredMeta = propertyDiffs?.required
  if (requiredMeta?.data) {
    rawDiffs.required = normalizeJsonSchemaRequiredMetaDiffForDisplay(requiredMeta)
  }

  return rawDiffs
}

export function hasJsonSchemaMetaFlagContentChange(
  node: JsonSchemaTreeNodeWithDiffs,
): boolean {
  return Object.keys(takeJsonSchemaMetaFlagRawDiffs(node)).length > 0
}

export function resolveJsonSchemaTypeLabelSideDisplayForNode(
  node: JsonSchemaTreeNodeWithDiffs,
  layoutSide: LayoutSide,
): ReturnType<typeof resolveJsonSchemaTypeLabelSideDisplay> {
  return resolveJsonSchemaTypeLabelSideDisplay(node, node.meta(), layoutSide)
}

function takePropertyRowDiffs(
  node: JsonSchemaPropertyNodeWithDiffs,
): JsonSchemaKindPropertyNodeDiffs {
  return node.diffs as JsonSchemaKindPropertyNodeDiffs
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

export function takeJsonSchemaEnumDiff(
  node: JsonSchemaPropertyNodeWithDiffs,
): ChangedPropertyMetaData | undefined {
  return takePropertyRowDiffs(node).enumDiff
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

export function takeJsonSchemaExamplesDiff(
  node: JsonSchemaPropertyNodeWithDiffs,
): ChangedPropertyMetaData | undefined {
  return takePropertyRowDiffs(node).examplesDiff
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

export function takeJsonSchemaValidationRowValueDiffs(
  node: JsonSchemaPropertyNodeWithDiffs,
  rowKey: JsonSchemaValidationRowKey,
): JsonSchemaListValueDiffs | undefined {
  return takePropertyRowDiffs(node).validationRowValueDiffs?.[rowKey]
}

export function takeJsonSchemaValidationRowColorizingDiff(
  node: JsonSchemaPropertyNodeWithDiffs,
  rowKey: JsonSchemaValidationRowKey,
): ChangedPropertyMetaData | undefined {
  return takePropertyRowDiffs(node).validationRowColorizingDiffs?.[rowKey]
}

export function takeJsonSchemaValueRangeCrawlDiffs(
  node: JsonSchemaPropertyNodeWithDiffs,
): ValueRangeCrawlDiffData | undefined {
  return takePropertyRowDiffs(node).valueRangeCrawlDiffs
}

export function hasJsonSchemaValidationRowSemanticDiffs(
  node: JsonSchemaPropertyNodeWithDiffs,
  rowKey: JsonSchemaValidationRowKey,
): boolean {
  if (takeJsonSchemaValidationRowDiff(node, rowKey)) {
    return true
  }
  if (takeJsonSchemaValidationRowColorizingDiff(node, rowKey)) {
    return true
  }
  const valueDiffs = takeJsonSchemaValidationRowValueDiffs(node, rowKey)
  if (!valueDiffs) {
    return false
  }
  return Object.values(valueDiffs).some((diff) => diff !== undefined)
}

export function formatJsonSchemaListDisplayValue(value: unknown): string {
  if (typeof value === "string") {
    return value
  }
  return JSON.stringify(value)
}

export function resolveJsonSchemaDefaultSideEntries(
  mergedDefault: unknown | undefined,
  defaultDiff: ChangedPropertyMetaData | undefined,
  layoutSide: LayoutSide,
): readonly JsonSchemaListSideEntry[] {
  if (!defaultDiff) {
    if (mergedDefault === undefined) {
      return []
    }
    return [{ text: formatJsonSchemaListDisplayValue(mergedDefault) }]
  }

  const isOrigin = layoutSide === ORIGIN_LAYOUT_SIDE
  const { data } = defaultDiff

  if (isDiffAdd(data)) {
    if (isOrigin) {
      return []
    }
    return [{ text: formatJsonSchemaListDisplayValue(data.afterValue ?? mergedDefault) }]
  }
  if (isDiffRemove(data)) {
    if (!isOrigin) {
      return []
    }
    return [{ text: formatJsonSchemaListDisplayValue(data.beforeValue ?? mergedDefault) }]
  }
  if (isDiffReplace(data)) {
    const sideValue = isOrigin
      ? (data.beforeValue ?? mergedDefault)
      : (data.afterValue ?? mergedDefault)
    return [{ text: formatJsonSchemaListDisplayValue(sideValue) }]
  }

  if (mergedDefault === undefined) {
    return []
  }
  return [{ text: formatJsonSchemaListDisplayValue(mergedDefault) }]
}

export function resolveJsonSchemaDefaultSideDisplay(
  node: JsonSchemaPropertyNodeWithDiffs,
  layoutSide: LayoutSide,
): string | undefined {
  const sideEntries = resolveJsonSchemaDefaultSideEntries(
    asJsonSchemaTypedNodeValue(node.value())?.default,
    takeJsonSchemaDefaultDiff(node),
    layoutSide,
  )
  return sideEntries[0]?.text
}

function formatListDisplayValue(value: unknown): string {
  return formatJsonSchemaListDisplayValue(value)
}

function resolveJsonSchemaWholeListSideEntries(
  mergedValues: readonly unknown[],
  listDiff: ChangedPropertyMetaData,
  layoutSide: LayoutSide,
): readonly JsonSchemaListSideEntry[] {
  const isOrigin = layoutSide === ORIGIN_LAYOUT_SIDE
  const { data } = listDiff

  if (isDiffAdd(data)) {
    if (isOrigin) {
      return []
    }
    const values = Array.isArray(data.afterValue) ? data.afterValue : mergedValues
    return values.map((value) => ({ text: formatListDisplayValue(value) }))
  }

  if (isDiffRemove(data)) {
    if (!isOrigin) {
      return []
    }
    const values = Array.isArray(data.beforeValue) ? data.beforeValue : mergedValues
    return values.map((value) => ({ text: formatListDisplayValue(value) }))
  }

  if (isDiffReplace(data)) {
    const values = isOrigin
      ? (Array.isArray(data.beforeValue) ? data.beforeValue : mergedValues)
      : (Array.isArray(data.afterValue) ? data.afterValue : mergedValues)
    return values.map((value) => ({ text: formatListDisplayValue(value) }))
  }

  return mergedValues.map((value) => ({ text: formatListDisplayValue(value) }))
}

function resolveJsonSchemaPartialListSideEntries(
  mergedValues: readonly unknown[],
  itemDiffs: JsonSchemaListValueDiffs | undefined,
  layoutSide: LayoutSide,
): readonly JsonSchemaListSideEntry[] {
  const isOrigin = layoutSide === ORIGIN_LAYOUT_SIDE
  const processedDiffKeys = new Set<string>()
  const entries: JsonSchemaListSideEntry[] = []

  for (let index = 0; index < mergedValues.length; index++) {
    const valueDiffKey = String(index)
    const diff = itemDiffs?.[valueDiffKey]
    const mergedText = formatListDisplayValue(mergedValues[index])

    if (!diff) {
      entries.push({ text: mergedText })
      continue
    }
    if (processedDiffKeys.has(valueDiffKey)) {
      continue
    }
    processedDiffKeys.add(valueDiffKey)

    const { data } = diff
    if (isDiffAdd(data)) {
      if (!isOrigin) {
        entries.push({
          text: formatListDisplayValue(data.afterValue ?? mergedValues[index]),
          valueDiffKey,
        })
      }
      continue
    }
    if (isDiffRemove(data)) {
      if (isOrigin) {
        entries.push({
          text: formatListDisplayValue(data.beforeValue ?? mergedValues[index]),
          valueDiffKey,
        })
      }
      continue
    }
    if (isDiffReplace(data)) {
      entries.push({
        text: isOrigin
          ? formatListDisplayValue(data.beforeValue ?? mergedValues[index])
          : formatListDisplayValue(data.afterValue ?? mergedValues[index]),
        valueDiffKey,
      })
    }
  }

  for (const [valueDiffKey, diff] of Object.entries(itemDiffs ?? {})) {
    if (!diff || processedDiffKeys.has(valueDiffKey)) {
      continue
    }
    if (isDiffRemove(diff.data) && isOrigin) {
      entries.push({
        text: formatListDisplayValue(diff.data.beforeValue),
        valueDiffKey,
      })
      processedDiffKeys.add(valueDiffKey)
    }
  }

  const indexOf = (text: string): number => {
    for (let index = 0; index < mergedValues.length; index++) {
      if (formatListDisplayValue(mergedValues[index]) === text) {
        return index
      }
    }
    return mergedValues.length
  }

  return entries.sort((left, right) => indexOf(left.text) - indexOf(right.text))
}

function resolveValidationRowChipDisplayText(
  rowKey: JsonSchemaValidationRowKey,
  sourceKey: string,
  rawValue: unknown,
  formattedFallback: string,
): string {
  if (rawValue === undefined) {
    return formattedFallback
  }
  return formatJsonSchemaValidationRowChipDisplay(rowKey, sourceKey, rawValue)
}

function findValidationRowSourceKeyDiffForDisplayIndex(
  mergedDisplayValues: readonly unknown[],
  itemDiffs: JsonSchemaListValueDiffs | undefined,
  displayIndex: number,
): string | undefined {
  if (!itemDiffs) {
    return undefined
  }
  return Object.keys(itemDiffs).find(
    (sourceKey) => resolveValidationSourceKeyDisplayIndex(sourceKey, mergedDisplayValues) === displayIndex,
  )
}

function resolveJsonSchemaValidationRowPartialSideEntries(
  rowKey: JsonSchemaValidationRowKey,
  mergedValues: readonly unknown[],
  itemDiffs: JsonSchemaListValueDiffs | undefined,
  layoutSide: LayoutSide,
): readonly JsonSchemaListSideEntry[] {
  const isOrigin = layoutSide === ORIGIN_LAYOUT_SIDE
  const processedDiffKeys = new Set<string>()
  const entries: JsonSchemaListSideEntry[] = []

  for (let displayIndex = 0; displayIndex < mergedValues.length; displayIndex++) {
    const valueDiffKey = findValidationRowSourceKeyDiffForDisplayIndex(
      mergedValues,
      itemDiffs,
      displayIndex,
    )
    const diff = valueDiffKey ? itemDiffs?.[valueDiffKey] : undefined
    const mergedText = formatListDisplayValue(mergedValues[displayIndex])

    if (!diff || !valueDiffKey) {
      entries.push({ text: mergedText })
      continue
    }
    if (processedDiffKeys.has(valueDiffKey)) {
      continue
    }
    processedDiffKeys.add(valueDiffKey)

    const { data } = diff
    if (isDiffAdd(data)) {
      if (!isOrigin) {
        entries.push({
          text: resolveValidationRowChipDisplayText(
            rowKey,
            valueDiffKey,
            data.afterValue ?? mergedValues[displayIndex],
            mergedText,
          ),
          valueDiffKey,
        })
      }
      continue
    }
    if (isDiffRemove(data)) {
      if (isOrigin) {
        entries.push({
          text: resolveValidationRowChipDisplayText(
            rowKey,
            valueDiffKey,
            data.beforeValue ?? mergedValues[displayIndex],
            mergedText,
          ),
          valueDiffKey,
        })
      }
      continue
    }
    if (isDiffReplace(data)) {
      entries.push({
        text: isOrigin
          ? resolveValidationRowChipDisplayText(
            rowKey,
            valueDiffKey,
            data.beforeValue ?? mergedValues[displayIndex],
            mergedText,
          )
          : resolveValidationRowChipDisplayText(
            rowKey,
            valueDiffKey,
            data.afterValue ?? mergedValues[displayIndex],
            mergedText,
          ),
        valueDiffKey,
      })
    }
  }

  for (const [valueDiffKey, diff] of Object.entries(itemDiffs ?? {})) {
    if (!diff || processedDiffKeys.has(valueDiffKey)) {
      continue
    }
    if (isDiffRemove(diff.data) && isOrigin) {
      entries.push({
        text: resolveValidationRowChipDisplayText(
          rowKey,
          valueDiffKey,
          diff.data.beforeValue,
          formatListDisplayValue(diff.data.beforeValue),
        ),
        valueDiffKey,
      })
      processedDiffKeys.add(valueDiffKey)
    }
  }

  const chipIndexOf = (valueDiffKey: string | undefined, text: string): number => {
    if (valueDiffKey) {
      return resolveValidationSourceKeyDisplayIndex(valueDiffKey, mergedValues)
    }
    for (let displayIndex = 0; displayIndex < mergedValues.length; displayIndex++) {
      if (formatListDisplayValue(mergedValues[displayIndex]) === text) {
        return displayIndex
      }
    }
    return mergedValues.length
  }

  return entries.sort((left, right) => (
    chipIndexOf(left.valueDiffKey, left.text) - chipIndexOf(right.valueDiffKey, right.text)
  ))
}

export function resolveJsonSchemaEnumSideEntries(
  mergedValues: readonly unknown[],
  enumDiff: ChangedPropertyMetaData | undefined,
  enumValueDiffs: JsonSchemaListValueDiffs | undefined,
  layoutSide: LayoutSide,
): readonly JsonSchemaListSideEntry[] {
  if (enumDiff) {
    return resolveJsonSchemaWholeListSideEntries(mergedValues, enumDiff, layoutSide)
  }
  return resolveJsonSchemaPartialListSideEntries(mergedValues, enumValueDiffs, layoutSide)
}

export function resolveJsonSchemaExamplesSideEntries(
  mergedValues: readonly unknown[],
  examplesDiff: ChangedPropertyMetaData | undefined,
  examplesValueDiffs: JsonSchemaListValueDiffs | undefined,
  layoutSide: LayoutSide,
): readonly JsonSchemaListSideEntry[] {
  if (examplesDiff) {
    return resolveJsonSchemaWholeListSideEntries(mergedValues, examplesDiff, layoutSide)
  }
  return resolveJsonSchemaPartialListSideEntries(mergedValues, examplesValueDiffs, layoutSide)
}

export function resolveJsonSchemaValidationRowSideEntries(
  rowKey: JsonSchemaValidationRowKey,
  mergedValues: readonly unknown[],
  validationRowDiff: ChangedPropertyMetaData | undefined,
  validationRowValueDiffs: JsonSchemaListValueDiffs | undefined,
  layoutSide: LayoutSide,
  valueRangeContext?: {
    nodeValue: {
      minimum?: number
      maximum?: number
      exclusiveMinimum?: number | boolean
      exclusiveMaximum?: number | boolean
    } | null | undefined
    crawlDiffs: ValueRangeCrawlDiffData
  },
): readonly JsonSchemaListSideEntry[] {
  if (rowKey === JsonSchemaValidationRowKeys.VALUE_RANGE && valueRangeContext?.crawlDiffs) {
    return resolveValueRangeDiffSideEntries(
      resolveValueRangeSideInputFromNodeValue(valueRangeContext.nodeValue),
      valueRangeContext.crawlDiffs,
      layoutSide,
      validationRowDiff,
      validationRowValueDiffs,
    )
  }
  if (validationRowDiff) {
    return resolveJsonSchemaWholeListSideEntries(mergedValues, validationRowDiff, layoutSide)
  }
  return resolveJsonSchemaValidationRowPartialSideEntries(
    rowKey,
    mergedValues,
    validationRowValueDiffs,
    layoutSide,
  )
}

export function takeJsonSchemaListValueDiffAtKey(
  itemDiffs: JsonSchemaListValueDiffs | undefined,
  valueDiffKey: string | undefined,
): ChangedPropertyMetaData | undefined {
  if (!valueDiffKey) {
    return undefined
  }
  const diff = itemDiffs?.[valueDiffKey]
  return diff
}

export function resolveJsonSchemaListValueSideItems(
  mergedValues: readonly unknown[],
  itemDiffs: JsonSchemaListValueDiffs | undefined,
  layoutSide: LayoutSide,
): readonly ListSideItem[] {
  const isOrigin = layoutSide === ORIGIN_LAYOUT_SIDE
  const processedDiffs = new Set<ChangedPropertyMetaData>()
  const items: ListSideItem[] = []

  for (let index = 0; index < mergedValues.length; index++) {
    const diff = itemDiffs?.[String(index)]
    const mergedText = formatListDisplayValue(mergedValues[index])

    if (!diff) {
      items.push({ text: mergedText })
      continue
    }
    if (processedDiffs.has(diff)) {
      continue
    }
    processedDiffs.add(diff)

    const { data } = diff
    if (isDiffAdd(data)) {
      if (!isOrigin) {
        items.push({
          text: formatListDisplayValue(data.afterValue ?? mergedValues[index]),
          diff,
        })
      }
      continue
    }
    if (isDiffRemove(data)) {
      if (isOrigin) {
        items.push({
          text: formatListDisplayValue(data.beforeValue ?? mergedValues[index]),
          diff,
        })
      }
      continue
    }
    if (isDiffReplace(data)) {
      items.push({
        text: isOrigin
          ? formatListDisplayValue(data.beforeValue ?? mergedValues[index])
          : formatListDisplayValue(data.afterValue ?? mergedValues[index]),
        diff,
      })
    }
  }

  for (const [, diff] of Object.entries(itemDiffs ?? {})) {
    if (!diff || processedDiffs.has(diff)) {
      continue
    }
    if (isDiffRemove(diff.data) && isOrigin) {
      items.push({
        text: formatListDisplayValue(diff.data.beforeValue),
        diff,
      })
      processedDiffs.add(diff)
    }
  }

  const indexOf = (text: string): number => {
    for (let index = 0; index < mergedValues.length; index++) {
      if (formatListDisplayValue(mergedValues[index]) === text) {
        return index
      }
    }
    return mergedValues.length
  }

  return items.sort((left, right) => indexOf(left.text) - indexOf(right.text))
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
