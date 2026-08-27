import { isDiffAdd, isDiffRemove, isDiffReplace } from "@netcracker/qubership-apihub-api-diff"
import { TYPE_UNKNOWN } from "@apihub/next-data-model/model/abstract/constants"
import {
  LayoutSide,
} from "@apihub/next-data-model/model/abstract/layout-side"
import {
  ChangedPropertyMetaData,
  HighlightVariant,
} from "@apihub/next-data-model/model/abstract/tree-with-diffs/tree-node.interface"
import {
  ListSideSegment,
  resolveFieldSideText,
  SideListDisplay,
  SideListDisplayKinds,
} from "@apihub/next-data-model/model/abstract/tree-with-diffs/list-side-display"
import { resolveJsonSchemaTypeLabel } from "@apihub/next-data-model/model/json-schema/type-label"
import { JsonSchemaTreeNodeWithDiffs } from "@apihub/next-data-model/model/json-schema/types/aliases"
import { JsonSchemaTreeNodeMeta } from "@apihub/next-data-model/model/json-schema/types/node-meta"
import { JsonSchemaTreeNodeValue } from "@apihub/next-data-model/model/json-schema/types/node-value"
import {
  JSON_SCHEMA_TYPE_LABEL_FIELD_DIFF_KEYS,
  JsonSchemaSharedRowDiffs,
  JsonSchemaTypeLabelFieldDiffKey,
  JsonSchemaTypeLabelFieldDiffs,
} from "./property-row-diffs.types"

export type JsonSchemaTypeLabelSideSegment = ListSideSegment

const NULLABLE_SUFFIX = " or null"

export function takeJsonSchemaTypeLabelFieldDiffs(
  node: JsonSchemaTreeNodeWithDiffs,
): JsonSchemaTypeLabelFieldDiffs | undefined {
  const typeLabelFieldDiffs = (node.diffs as JsonSchemaSharedRowDiffs).typeLabelFieldDiffs
  if (!typeLabelFieldDiffs || Object.keys(typeLabelFieldDiffs).length === 0) {
    return undefined
  }
  return typeLabelFieldDiffs
}

export function resolveJsonSchemaTypeLabelSideDisplay(
  node: JsonSchemaTreeNodeWithDiffs,
  meta: JsonSchemaTreeNodeMeta | null | undefined,
  layoutSide: LayoutSide,
): SideListDisplay {
  if (meta?.brokenRef) {
    return { kind: SideListDisplayKinds.NO_DIFFS, text: `$ref: ${meta.brokenRef}` }
  }

  const value = node.value()
  const fieldDiffs = takeJsonSchemaTypeLabelFieldDiffs(node)
  if (!fieldDiffs) {
    return {
      kind: SideListDisplayKinds.NO_DIFFS,
      text: resolveJsonSchemaTypeLabel(value, meta),
    }
  }

  if (shouldUseMonolithicTypeLabelHighlight(fieldDiffs)) {
    const representativeDiff = Object.values(fieldDiffs).find(Boolean)
    if (!representativeDiff) {
      return {
        kind: SideListDisplayKinds.NO_DIFFS,
        text: resolveJsonSchemaTypeLabel(value, meta),
      }
    }

    return {
      kind: SideListDisplayKinds.WHOLE_DIFFS,
      text: buildMonolithicSideLabel(value, fieldDiffs, layoutSide),
      diff: buildMonolithicTypeLabelDiffMetadata(representativeDiff),
    }
  }

  const segments: JsonSchemaTypeLabelSideSegment[] = []
  const typeSegment = buildTypeSideSegment(value, fieldDiffs.type, layoutSide)
  if (typeSegment) {
    segments.push(typeSegment)
  }

  const formatSegment = buildWrappedSideSegment(
    takeMergedFormat(value),
    fieldDiffs.format,
    layoutSide,
    wrapFormat,
  )
  if (formatSegment) {
    segments.push(formatSegment)
  }

  const titleSegment = buildWrappedSideSegment(
    value?.title,
    fieldDiffs.title,
    layoutSide,
    wrapTitle,
  )
  if (titleSegment) {
    segments.push(titleSegment)
  }

  const nullableSuffix = takeNullableSuffixSegment(value)
  if (nullableSuffix) {
    segments.push(nullableSuffix)
  }

  if (segments.length === 0) {
    return {
      kind: SideListDisplayKinds.NO_DIFFS,
      text: resolveJsonSchemaTypeLabel(value, meta),
    }
  }

  return {
    kind: SideListDisplayKinds.PARTIAL_DIFFS,
    segments,
  }
}

function shouldUseMonolithicTypeLabelHighlight(
  fieldDiffs: JsonSchemaTypeLabelFieldDiffs,
): boolean {
  const entries = JSON_SCHEMA_TYPE_LABEL_FIELD_DIFF_KEYS
    .map(key => [key, fieldDiffs[key]] as const)
    .filter((entry): entry is readonly [JsonSchemaTypeLabelFieldDiffKey, ChangedPropertyMetaData] => !!entry[1])

  if (entries.length === 0) {
    return false
  }

  if (entries.length === 1) {
    return false
  }

  const actions = new Set(entries.map(([, diff]) => diff.data.action))
  return actions.size === 1
}

function buildMonolithicSideLabel(
  value: JsonSchemaTreeNodeValue | null | undefined,
  fieldDiffs: JsonSchemaTypeLabelFieldDiffs,
  layoutSide: LayoutSide,
): string {
  const parts: string[] = []

  const typeText = resolveFieldSideText(
    value?.type ?? TYPE_UNKNOWN,
    fieldDiffs.type,
    layoutSide,
  ) ?? (value?.type ?? TYPE_UNKNOWN)
  parts.push(String(typeText))

  const formatText = resolveWrappedFieldSideText(
    takeMergedFormat(value),
    fieldDiffs.format,
    layoutSide,
    wrapFormat,
  )
  if (formatText) {
    parts.push(formatText)
  }

  const titleText = resolveWrappedFieldSideText(
    value?.title,
    fieldDiffs.title,
    layoutSide,
    wrapTitle,
  )
  if (titleText) {
    parts.push(titleText)
  }

  if (value?.nullable) {
    parts.push(NULLABLE_SUFFIX.trim())
  }

  return parts.join(" ")
}

function buildTypeSideSegment(
  value: JsonSchemaTreeNodeValue | null | undefined,
  diff: ChangedPropertyMetaData | undefined,
  layoutSide: LayoutSide,
): JsonSchemaTypeLabelSideSegment | undefined {
  const mergedType = value?.type ?? TYPE_UNKNOWN
  const typeText = resolveFieldSideText(mergedType, diff, layoutSide)
  if (typeText === undefined) {
    return diff ? undefined : { text: String(mergedType) }
  }
  return { text: typeText, diff }
}

function buildWrappedSideSegment(
  mergedValue: string | undefined,
  diff: ChangedPropertyMetaData | undefined,
  layoutSide: LayoutSide,
  wrap: (inner: string) => string,
): JsonSchemaTypeLabelSideSegment | undefined {
  const wrappedText = resolveWrappedFieldSideText(mergedValue, diff, layoutSide, wrap)
  if (wrappedText === undefined) {
    return undefined
  }
  return { text: wrappedText, diff }
}

function resolveWrappedFieldSideText(
  mergedValue: string | undefined,
  diff: ChangedPropertyMetaData | undefined,
  layoutSide: LayoutSide,
  wrap: (inner: string) => string,
): string | undefined {
  const innerText = resolveFieldSideText(mergedValue, diff, layoutSide)
  if (innerText === undefined) {
    if (!diff && hasNonBlankText(mergedValue)) {
      return wrap(mergedValue!)
    }
    return undefined
  }
  if (!hasNonBlankText(innerText)) {
    return undefined
  }
  return wrap(innerText)
}

function takeNullableSuffixSegment(
  value: JsonSchemaTreeNodeValue | null | undefined,
): JsonSchemaTypeLabelSideSegment | undefined {
  if (!value?.nullable) {
    return undefined
  }
  return { text: NULLABLE_SUFFIX.trim() }
}

function takeMergedFormat(value: JsonSchemaTreeNodeValue | null | undefined): string | undefined {
  if (!value || !("format" in value)) {
    return undefined
  }
  const format = value.format
  return typeof format === "string" ? format : undefined
}

function hasNonBlankText(value: string | undefined): value is string {
  return !!value && value.trim().length > 0
}

function wrapFormat(value: string): string {
  return `(${value})`
}

function wrapTitle(value: string): string {
  return `<${value}>`
}

function buildMonolithicTypeLabelDiffMetadata(
  representativeDiff: ChangedPropertyMetaData,
): ChangedPropertyMetaData {
  const { data } = representativeDiff

  if (isDiffReplace(data)) {
    return {
      ...representativeDiff,
      styles: {
        before: {
          isContentVisible: true,
          isHeaderVisible: true,
          textHighlighterColor: HighlightVariant.Yellow,
        },
        after: {
          isContentVisible: true,
          isHeaderVisible: true,
          textHighlighterColor: HighlightVariant.Yellow,
        },
      },
    }
  }

  if (isDiffAdd(data)) {
    return {
      ...representativeDiff,
      styles: {
        before: {
          isContentVisible: false,
          isHeaderVisible: true,
        },
        after: {
          isContentVisible: true,
          isHeaderVisible: true,
          textHighlighterColor: HighlightVariant.Green,
        },
      },
    }
  }

  if (isDiffRemove(data)) {
    return {
      ...representativeDiff,
      styles: {
        before: {
          isContentVisible: true,
          isHeaderVisible: true,
          textHighlighterColor: HighlightVariant.Red,
        },
        after: {
          isContentVisible: false,
          isHeaderVisible: true,
        },
      },
    }
  }

  return representativeDiff
}
