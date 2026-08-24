import {
  JsonSchemaBoundRangeInput,
  JsonSchemaBoundRangeLabel,
  resolveBoundRangeLabel,
} from "@apihub/next-data-model/model/json-schema/bound-range"
import { LayoutSide, ORIGIN_LAYOUT_SIDE } from "@apihub/next-data-model/model/abstract/layout-side"
import { JsonSchemaListValueDiffs } from "@apihub/next-data-model/model/json-schema/tree-with-diffs/property-row-diffs.types"
import { ChangedPropertyMetaData } from "@apihub/next-data-model/model/abstract/tree-with-diffs/tree-node.interface"
import {
  Diff,
  DiffAction,
  DiffAdd,
  DiffRemove,
  DiffReplace,
  DiffType,
  isDiffAdd,
  isDiffRemove,
  isDiffReplace,
} from "@netcracker/qubership-apihub-api-diff"
import { isObject } from "@apihub/next-data-model/utilities"

export const VALUE_RANGE_LOWER_CHIP_DIFF_KEY = "0"
export const VALUE_RANGE_UPPER_CHIP_DIFF_KEY = "1"

export type ValueRangeWholeRowAction = typeof DiffAction.add | typeof DiffAction.remove

export type ValueRangeSideEntry = {
  readonly text: string
  readonly valueDiffKey?: string
}

export type ValueRangeCrawlDiffData = Partial<{
  minimum: Diff
  exclusiveMinimum: Diff
  maximum: Diff
  exclusiveMaximum: Diff
}>

export type ValueRangeSideInput = JsonSchemaBoundRangeInput & {
  minimum?: number
  maximum?: number
  exclusiveMinimum?: number | boolean
  exclusiveMaximum?: number | boolean
}

type ValueRangeSideLabels = JsonSchemaBoundRangeLabel

function isDefined(value: unknown): value is NonNullable<unknown> {
  return value !== undefined && value !== null
}

function isExclusiveActive(value: number | boolean | undefined): boolean {
  return value !== undefined && value !== false
}

function isExclusiveDiffValueActive(value: unknown): boolean {
  return value !== undefined && value !== false
}

function diffAdd(diff?: Diff): boolean {
  return !!diff && isDiffAdd(diff)
}

function diffRemove(diff?: Diff): boolean {
  return !!diff && isDiffRemove(diff)
}

function diffReplace(diff?: Diff): boolean {
  return !!diff && isDiffReplace(diff)
}

function readDiffAfterValue(diff: Diff | undefined): unknown {
  if (!diff) {
    return undefined
  }
  if (isDiffAdd(diff) || isDiffReplace(diff)) {
    return diff.afterValue
  }
  return undefined
}

function readNumericDiffBeforeValue(diff: Diff | undefined): number | undefined {
  if (!diff || !(isDiffRemove(diff) || isDiffReplace(diff))) {
    return undefined
  }
  const value = diff.beforeValue
  return typeof value === "number" ? value : undefined
}

function readExclusiveDiffBeforeValue(diff: Diff | undefined): number | boolean | undefined {
  if (!diff || !(isDiffRemove(diff) || isDiffReplace(diff))) {
    return undefined
  }
  const value = diff.beforeValue
  if (typeof value === "number" || typeof value === "boolean") {
    return value
  }
  return undefined
}

function resolveBeforeAfterLabels(
  data: ValueRangeSideInput,
  changes: ValueRangeCrawlDiffData,
): { before: ValueRangeSideLabels; after: ValueRangeSideLabels } {
  const minimum = data.minimum
  const exclusiveMinimum = data.exclusiveMinimum
  const maximum = data.maximum
  const exclusiveMaximum = data.exclusiveMaximum
  const diffMinimum = changes.minimum
  const diffExclusiveMinimum = changes.exclusiveMinimum
  const diffMaximum = changes.maximum
  const diffExclusiveMaximum = changes.exclusiveMaximum

  const hasMinimum = isDefined(minimum)
  const hasMaximum = isDefined(maximum)
  const hasMinimumChanged = isDefined(diffMinimum)
  const hasMaximumChanged = isDefined(diffMaximum)
  const hasExclusiveMinimumChanged = isDefined(diffExclusiveMinimum)
  const hasExclusiveMaximumChanged = isDefined(diffExclusiveMaximum)
  const minimumAdded = diffAdd(diffMinimum)
  const minimumRemoved = diffRemove(diffMinimum)
  const minimumReplaced = diffReplace(diffMinimum)
  const maximumAdded = diffAdd(diffMaximum)
  const maximumRemoved = diffRemove(diffMaximum)
  const maximumReplaced = diffReplace(diffMaximum)

  const after = resolveBoundRangeLabel({
    min: hasMinimum && (!hasMinimumChanged || minimumAdded || minimumReplaced) ? minimum : undefined,
    max: hasMaximum && (!hasMaximumChanged || maximumAdded || maximumReplaced) ? maximum : undefined,
    exclusiveMin: isExclusiveActive(exclusiveMinimum) && (
      !hasExclusiveMinimumChanged
      || diffAdd(diffExclusiveMinimum)
      || (diffReplace(diffExclusiveMinimum) && isExclusiveDiffValueActive(readDiffAfterValue(diffExclusiveMinimum)))
    ) ? exclusiveMinimum : undefined,
    exclusiveMax: isExclusiveActive(exclusiveMaximum) && (
      !hasExclusiveMaximumChanged
      || diffAdd(diffExclusiveMaximum)
      || (diffReplace(diffExclusiveMaximum) && isExclusiveDiffValueActive(readDiffAfterValue(diffExclusiveMaximum)))
    ) ? exclusiveMaximum : undefined,
  }).data

  const hasAnyChange = hasMinimumChanged || hasExclusiveMinimumChanged || hasMaximumChanged || hasExclusiveMaximumChanged
  if (!hasAnyChange) {
    return { before: { ...after }, after }
  }

  let beforeMinimum: number | undefined
  let beforeMaximum: number | undefined
  let beforeExclusiveMin: number | boolean | undefined
  let beforeExclusiveMax: number | boolean | undefined

  if (hasMinimum && !hasMinimumChanged) {
    beforeMinimum = minimum
  }
  if (minimumRemoved || minimumReplaced) {
    beforeMinimum = readNumericDiffBeforeValue(diffMinimum)
  }

  if (hasMaximum && !hasMaximumChanged) {
    beforeMaximum = maximum
  }
  if (maximumRemoved || maximumReplaced) {
    beforeMaximum = readNumericDiffBeforeValue(diffMaximum)
  }

  if (isExclusiveActive(exclusiveMinimum) && !hasExclusiveMinimumChanged) {
    beforeExclusiveMin = exclusiveMinimum
  }
  if (diffReplace(diffExclusiveMinimum) || diffRemove(diffExclusiveMinimum)) {
    const beforeExclusiveValue = readExclusiveDiffBeforeValue(diffExclusiveMinimum)
    if (isExclusiveDiffValueActive(beforeExclusiveValue)) {
      beforeExclusiveMin = beforeExclusiveValue
    }
  }

  if (isExclusiveActive(exclusiveMaximum) && !hasExclusiveMaximumChanged) {
    beforeExclusiveMax = exclusiveMaximum
  }
  if (diffReplace(diffExclusiveMaximum) || diffRemove(diffExclusiveMaximum)) {
    const beforeExclusiveValue = readExclusiveDiffBeforeValue(diffExclusiveMaximum)
    if (isExclusiveDiffValueActive(beforeExclusiveValue)) {
      beforeExclusiveMax = beforeExclusiveValue
    }
  }

  const before = resolveBoundRangeLabel({
    min: beforeMinimum,
    max: beforeMaximum,
    exclusiveMin: beforeExclusiveMin,
    exclusiveMax: beforeExclusiveMax,
  }).data

  return { before, after }
}

function chipTextsFromLabels(labels: ValueRangeSideLabels): string[] {
  return [labels.lower, labels.upper].filter((chip): chip is string => Boolean(chip))
}

function resolveSlotValueDiffKey(
  slot: "lower" | "upper",
  valueDiffs: JsonSchemaListValueDiffs | undefined,
): string | undefined {
  if (!valueDiffs) {
    return undefined
  }
  const slotKey = slot === "lower" ? VALUE_RANGE_LOWER_CHIP_DIFF_KEY : VALUE_RANGE_UPPER_CHIP_DIFF_KEY
  if (valueDiffs[slotKey]) {
    return slotKey
  }
  if (slot === "lower") {
    if (valueDiffs.minimum) {
      return "minimum"
    }
    if (valueDiffs.exclusiveMinimum) {
      return "exclusiveMinimum"
    }
    return undefined
  }
  if (valueDiffs.maximum) {
    return "maximum"
  }
  if (valueDiffs.exclusiveMaximum) {
    return "exclusiveMaximum"
  }
  return undefined
}

function resolveChipDiffType(...diffs: Array<Diff | undefined>): DiffType | undefined {
  for (const diff of diffs) {
    if (diff) {
      return diff.type
    }
  }
  return undefined
}

export function compareValueRangeChipStrings(
  diffType: DiffType | undefined,
  beforeText: string | undefined,
  afterText: string | undefined,
): DiffAdd | DiffRemove | DiffReplace | undefined {
  if (diffType === undefined || beforeText === afterText) {
    return undefined
  }
  if (beforeText === undefined && afterText !== undefined) {
    return {
      type: diffType,
      action: DiffAction.add,
      afterValue: afterText,
    } as DiffAdd
  }
  if (beforeText !== undefined && afterText === undefined) {
    return {
      type: diffType,
      action: DiffAction.remove,
      beforeValue: beforeText,
    } as DiffRemove
  }
  return {
    type: diffType,
    action: DiffAction.replace,
    beforeValue: beforeText,
    afterValue: afterText,
  } as DiffReplace
}

export function classifyValueRangeWholeRowAction(
  data: ValueRangeSideInput,
  changes: ValueRangeCrawlDiffData,
): ValueRangeWholeRowAction | undefined {
  const { before, after } = resolveBeforeAfterLabels(data, changes)
  const beforeVisible = !!(before.lower || before.upper)
  const afterVisible = !!(after.lower || after.upper)
  if (!beforeVisible && afterVisible) {
    return DiffAction.add
  }
  if (beforeVisible && !afterVisible) {
    return DiffAction.remove
  }
  return undefined
}

export type ValueRangeChipStringDiffs = Partial<{
  [VALUE_RANGE_LOWER_CHIP_DIFF_KEY]: DiffAdd | DiffRemove | DiffReplace
  [VALUE_RANGE_UPPER_CHIP_DIFF_KEY]: DiffAdd | DiffRemove | DiffReplace
}>

export function buildValueRangeChipStringDiffs(
  data: ValueRangeSideInput,
  changes: ValueRangeCrawlDiffData,
): ValueRangeChipStringDiffs {
  const { before, after } = resolveBeforeAfterLabels(data, changes)
  const lowerDiffType = resolveChipDiffType(changes.minimum, changes.exclusiveMinimum)
  const upperDiffType = resolveChipDiffType(changes.maximum, changes.exclusiveMaximum)
  const result: ValueRangeChipStringDiffs = {}

  const lowerDiff = compareValueRangeChipStrings(lowerDiffType, before.lower, after.lower)
  if (lowerDiff) {
    result[VALUE_RANGE_LOWER_CHIP_DIFF_KEY] = lowerDiff
  }
  const upperDiff = compareValueRangeChipStrings(upperDiffType, before.upper, after.upper)
  if (upperDiff) {
    result[VALUE_RANGE_UPPER_CHIP_DIFF_KEY] = upperDiff
  }
  return result
}

function isValueRangeInclusiveChipText(chipText: unknown): boolean {
  return typeof chipText === "string"
    && (chipText.startsWith(">=") || chipText.startsWith("<="))
}

/**
 * Single-slot bound add/remove where the changed chip uses an inclusive operator (>= / <=).
 * Row gets replace colorizing; the changed chip gets add/remove highlighting.
 */
export function isValueRangePartialInclusiveBoundChange(
  data: ValueRangeSideInput,
  changes: ValueRangeCrawlDiffData,
): boolean {
  const chipStringDiffs = buildValueRangeChipStringDiffs(data, changes)
  const changedChipDiffs = [
    chipStringDiffs[VALUE_RANGE_LOWER_CHIP_DIFF_KEY],
    chipStringDiffs[VALUE_RANGE_UPPER_CHIP_DIFF_KEY],
  ].filter((diff): diff is DiffAdd | DiffRemove | DiffReplace => diff !== undefined)

  if (changedChipDiffs.length !== 1) {
    return false
  }

  const chipDiff = changedChipDiffs[0]
  if (!isDiffAdd(chipDiff) && !isDiffRemove(chipDiff)) {
    return false
  }

  const chipText = isDiffAdd(chipDiff) ? chipDiff.afterValue : chipDiff.beforeValue
  return isValueRangeInclusiveChipText(chipText)
}

function buildSideEntriesFromLabels(
  labels: ValueRangeSideLabels,
  valueDiffs: JsonSchemaListValueDiffs | undefined,
  oppositeLabels: ValueRangeSideLabels,
): readonly ValueRangeSideEntry[] {
  const entries: ValueRangeSideEntry[] = []

  const slots: Array<{ slot: "lower" | "upper"; text?: string; oppositeText?: string }> = [
    { slot: "lower", text: labels.lower, oppositeText: oppositeLabels.lower },
    { slot: "upper", text: labels.upper, oppositeText: oppositeLabels.upper },
  ]

  for (const { slot, text, oppositeText } of slots) {
    if (!text) {
      continue
    }
    const valueDiffKey = text !== oppositeText
      ? resolveSlotValueDiffKey(slot, valueDiffs)
      : undefined
    entries.push({
      text,
      valueDiffKey,
    })
  }

  return entries
}

export function resolveValueRangeDiffSideEntries(
  data: ValueRangeSideInput,
  crawlDiffs: ValueRangeCrawlDiffData,
  layoutSide: LayoutSide,
  validationRowDiff: ChangedPropertyMetaData | undefined,
  validationRowValueDiffs: JsonSchemaListValueDiffs | undefined,
): readonly ValueRangeSideEntry[] {
  const { before, after } = resolveBeforeAfterLabels(data, crawlDiffs)
  const isOrigin = layoutSide === ORIGIN_LAYOUT_SIDE

  if (validationRowDiff) {
    const diff = validationRowDiff.data
    if (isDiffAdd(diff) || isDiffRemove(diff)) {
      const labels = isOrigin ? before : after
      const opposite = isOrigin ? after : before
      return buildSideEntriesFromLabels(labels, validationRowValueDiffs, opposite)
    }
  }

  const labels = isOrigin ? before : after
  const opposite = isOrigin ? after : before
  return buildSideEntriesFromLabels(labels, validationRowValueDiffs, opposite)
}

export function extractValueRangeCrawlDiffs(
  crawlValue: object,
  diffsMetaKey: symbol,
): ValueRangeCrawlDiffData {
  const crawlDiffs = Reflect.get(crawlValue, diffsMetaKey) as Partial<Record<string, Diff>> | undefined
  if (!crawlDiffs || typeof crawlDiffs !== "object") {
    return {}
  }
  return {
    minimum: crawlDiffs.minimum,
    exclusiveMinimum: crawlDiffs.exclusiveMinimum,
    maximum: crawlDiffs.maximum,
    exclusiveMaximum: crawlDiffs.exclusiveMaximum,
  }
}

export function isBooleanExclusiveBoundFlagDiff(sourceKey: string, diff: Diff): boolean {
  if (sourceKey !== "exclusiveMinimum" && sourceKey !== "exclusiveMaximum") {
    return false
  }
  const value = isDiffAdd(diff)
    ? diff.afterValue
    : isDiffRemove(diff)
      ? diff.beforeValue
      : isDiffReplace(diff)
        ? (diff.beforeValue ?? diff.afterValue)
        : undefined
  return typeof value === "boolean"
}

export function filterValueRangeSemanticSourceKeys(
  activeSourceKeys: readonly string[],
  crawlDiffs: Partial<Record<string, Diff>>,
): string[] {
  return activeSourceKeys.filter((sourceKey) => {
    const diff = crawlDiffs[sourceKey]
    if (!diff) {
      return false
    }
    if (sourceKey === "exclusiveMinimum" || sourceKey === "exclusiveMaximum") {
      return !isBooleanExclusiveBoundFlagDiff(sourceKey, diff)
    }
    return true
  })
}

export type ValueRangeBoundFields = {
  minimum?: number
  maximum?: number
  exclusiveMinimum?: number | boolean
  exclusiveMaximum?: number | boolean
}

function isExclusiveBoundValue(value: unknown): value is number | boolean {
  return typeof value === "number" || typeof value === "boolean"
}

export function readValueRangeBoundFields(value: unknown): ValueRangeBoundFields {
  if (!isObject(value)) {
    return {}
  }

  const fields: ValueRangeBoundFields = {}
  if (typeof value.minimum === "number") {
    fields.minimum = value.minimum
  }
  if (typeof value.maximum === "number") {
    fields.maximum = value.maximum
  }
  if (isExclusiveBoundValue(value.exclusiveMinimum)) {
    fields.exclusiveMinimum = value.exclusiveMinimum
  }
  if (isExclusiveBoundValue(value.exclusiveMaximum)) {
    fields.exclusiveMaximum = value.exclusiveMaximum
  }
  return fields
}

export function resolveValueRangeSideInputFromNodeValue(value: unknown): ValueRangeSideInput {
  const fields = readValueRangeBoundFields(value)
  return {
    ...fields,
    min: fields.minimum,
    max: fields.maximum,
    exclusiveMin: fields.exclusiveMinimum,
    exclusiveMax: fields.exclusiveMaximum,
  }
}

/** @internal Exported for unit tests */
export function resolveValueRangeBeforeAfterLabelsForTest(
  data: ValueRangeSideInput,
  changes: ValueRangeCrawlDiffData,
): { before: ValueRangeSideLabels; after: ValueRangeSideLabels } {
  return resolveBeforeAfterLabels(data, changes)
}

/** @internal Exported for unit tests */
export function resolveValueRangeChipTextsForTest(
  data: ValueRangeSideInput,
  changes: ValueRangeCrawlDiffData,
  layoutSide: LayoutSide,
): string[] {
  const { before, after } = resolveBeforeAfterLabels(data, changes)
  return chipTextsFromLabels(layoutSide === ORIGIN_LAYOUT_SIDE ? before : after)
}
