import { isDiffAdd, isDiffRemove, isDiffReplace } from "@netcracker/qubership-apihub-api-diff"
import {
  LayoutSide,
  ORIGIN_LAYOUT_SIDE,
} from "../../abstract/layout-side"
import {
  ChangedPropertyMetaData,
  HighlightVariant,
} from "../../abstract/tree-with-diffs/tree-node.interface"
import { DdlApiColumnTypeValue } from "../tree/node-value"
import { DdlApiTreeNodeWithDiffs } from "../types/aliases"
import { DdlApiTreeNodeKinds } from "../types/node-kind"
import {
  DDL_COLUMN_TYPE_FIELD_DIFF_KEYS,
  DdlApiColumnPropertyRowDiffs,
  DdlApiColumnTypeFieldDiffKey,
  DdlApiColumnTypeFieldDiffs,
} from "./property-row-diffs.types"

export type DdlColumnTypeLabelSideSegment = {
  readonly text: string
  readonly diff?: ChangedPropertyMetaData
}

export type DdlColumnTypeLabelSideDisplay =
  | {
    readonly kind: "plain"
    readonly text: string
  }
  | {
    readonly kind: "monolithic"
    readonly text: string
    readonly diff: ChangedPropertyMetaData
  }
  | {
    readonly kind: "segmented"
    readonly segments: readonly DdlColumnTypeLabelSideSegment[]
  }

const PARAMETER_FIELD_KEYS = ["size", "precision", "scale"] as const satisfies ReadonlyArray<DdlApiColumnTypeFieldDiffKey>

type DdlColumnTypeParameterFieldKey = (typeof PARAMETER_FIELD_KEYS)[number]

export function takeColumnTypeFieldDiffs(
  node: DdlApiTreeNodeWithDiffs<typeof DdlApiTreeNodeKinds.COLUMN>,
): DdlApiColumnTypeFieldDiffs | undefined {
  const columnTypeFieldDiffs = (node.diffs as DdlApiColumnPropertyRowDiffs).columnTypeFieldDiffs
  if (!columnTypeFieldDiffs || Object.keys(columnTypeFieldDiffs).length === 0) {
    return undefined
  }
  return columnTypeFieldDiffs
}

export function resolveColumnTypeLabelSideDisplay(
  node: DdlApiTreeNodeWithDiffs<typeof DdlApiTreeNodeKinds.COLUMN>,
  layoutSide: LayoutSide,
): DdlColumnTypeLabelSideDisplay {
  const columnType = node.value()?.columnType
  if (!columnType) {
    return { kind: "plain", text: "" }
  }

  const fieldDiffs = takeColumnTypeFieldDiffs(node)
  if (!fieldDiffs) {
    return { kind: "plain", text: columnType.label }
  }

  const typeNameDiff = fieldDiffs.typeName ?? fieldDiffs.label
  const typeNameKey: DdlApiColumnTypeFieldDiffKey = fieldDiffs.typeName
    ? "typeName"
    : "label"

  if (shouldUseMonolithicColumnTypeHighlight(fieldDiffs)) {
    const representativeDiff = Object.values(fieldDiffs).find(Boolean)
    if (!representativeDiff) {
      return { kind: "plain", text: columnType.label }
    }

    return {
      kind: "monolithic",
      text: buildMonolithicSideLabel(columnType, fieldDiffs, typeNameKey, layoutSide),
      diff: buildMonolithicColumnTypeDiffMetadata(representativeDiff),
    }
  }

  const segments: DdlColumnTypeLabelSideSegment[] = []
  const typeNameText = resolveFieldSideText(
    takeColumnTypeDisplayName(columnType),
    typeNameDiff,
    layoutSide,
  )
  if (typeNameText !== undefined) {
    segments.push({
      text: typeNameText,
      diff: typeNameDiff,
    })
  }

  const parameterSegments = buildParameterSideSegments(columnType, fieldDiffs, layoutSide)
  segments.push(...parameterSegments)

  if (segments.length === 0) {
    return { kind: "plain", text: columnType.label }
  }

  return {
    kind: "segmented",
    segments,
  }
}

function shouldUseMonolithicColumnTypeHighlight(
  fieldDiffs: DdlApiColumnTypeFieldDiffs,
): boolean {
  const entries = DDL_COLUMN_TYPE_FIELD_DIFF_KEYS
    .map(key => [key, fieldDiffs[key]] as const)
    .filter((entry): entry is readonly [DdlApiColumnTypeFieldDiffKey, ChangedPropertyMetaData] => !!entry[1])

  if (entries.length === 0) {
    return false
  }

  if (entries.length === 1) {
    const [key] = entries[0]
    return key === "typeName" || key === "label"
  }

  const actions = new Set(entries.map(([, diff]) => diff.data.action))
  return actions.size === 1
}

function buildMonolithicSideLabel(
  columnType: DdlApiColumnTypeValue,
  fieldDiffs: DdlApiColumnTypeFieldDiffs,
  typeNameKey: DdlApiColumnTypeFieldDiffKey,
  layoutSide: LayoutSide,
): string {
  const typeNameText = resolveFieldSideText(
    takeColumnTypeDisplayName(columnType),
    fieldDiffs[typeNameKey],
    layoutSide,
  ) ?? takeColumnTypeDisplayName(columnType)

  const parameters: string[] = []
  for (const parameterKey of PARAMETER_FIELD_KEYS) {
    const parameterText = resolveFieldSideText(
      takeColumnTypeParameterValue(columnType, parameterKey),
      fieldDiffs[parameterKey],
      layoutSide,
    )
    if (parameterText !== undefined) {
      parameters.push(parameterText)
    }
  }

  if (parameters.length === 0) {
    return typeNameText
  }

  return `${typeNameText} (${parameters.join(", ")})`
}

function buildParameterSideSegments(
  columnType: DdlApiColumnTypeValue,
  fieldDiffs: DdlApiColumnTypeFieldDiffs,
  layoutSide: LayoutSide,
): DdlColumnTypeLabelSideSegment[] {
  const parameterKeys = collectVisibleParameterKeys(columnType, fieldDiffs, layoutSide)
  if (parameterKeys.length === 0) {
    return []
  }

  const segments: DdlColumnTypeLabelSideSegment[] = [{ text: " (" }]
  parameterKeys.forEach((parameterKey, index) => {
    if (index > 0) {
      segments.push({ text: ", " })
    }
    const parameterText = resolveFieldSideText(
      takeColumnTypeParameterValue(columnType, parameterKey),
      fieldDiffs[parameterKey],
      layoutSide,
    )
    if (parameterText !== undefined) {
      segments.push({
        text: parameterText,
        diff: fieldDiffs[parameterKey],
      })
    }
  })
  segments.push({ text: ")" })
  return segments
}

function collectVisibleParameterKeys(
  columnType: DdlApiColumnTypeValue,
  fieldDiffs: DdlApiColumnTypeFieldDiffs,
  layoutSide: LayoutSide,
): DdlColumnTypeParameterFieldKey[] {
  return PARAMETER_FIELD_KEYS.filter((parameterKey) => {
    const diff = fieldDiffs[parameterKey]
    if (diff) {
      return isFieldVisibleOnSide(diff, layoutSide)
    }
    return takeColumnTypeParameterValue(columnType, parameterKey) !== undefined
  })
}

function takeColumnTypeDisplayName(columnType: DdlApiColumnTypeValue): string {
  if ("typeName" in columnType && typeof columnType.typeName === "string") {
    return columnType.typeName
  }
  if ("name" in columnType && typeof columnType.name === "string") {
    return columnType.name
  }
  return columnType.label
}

function takeColumnTypeParameterValue(
  columnType: DdlApiColumnTypeValue,
  parameterKey: DdlColumnTypeParameterFieldKey,
): number | undefined {
  if (!(parameterKey in columnType)) {
    return undefined
  }
  const value = Reflect.get(columnType, parameterKey)
  return typeof value === "number" ? value : undefined
}

function resolveFieldSideText(
  mergedValue: string | number | undefined,
  diff: ChangedPropertyMetaData | undefined,
  layoutSide: LayoutSide,
): string | undefined {
  if (!diff) {
    return mergedValue !== undefined ? String(mergedValue) : undefined
  }

  const { data } = diff
  const isOrigin = layoutSide === ORIGIN_LAYOUT_SIDE

  if (isDiffAdd(data)) {
    return isOrigin ? undefined : String(data.afterValue ?? mergedValue ?? "")
  }
  if (isDiffRemove(data)) {
    return isOrigin ? String(data.beforeValue ?? mergedValue ?? "") : undefined
  }
  if (isDiffReplace(data)) {
    return isOrigin
      ? String(data.beforeValue ?? mergedValue ?? "")
      : String(data.afterValue ?? mergedValue ?? "")
  }

  return mergedValue !== undefined ? String(mergedValue) : undefined
}

function isFieldVisibleOnSide(
  diff: ChangedPropertyMetaData,
  layoutSide: LayoutSide,
): boolean {
  const styles = layoutSide === ORIGIN_LAYOUT_SIDE
    ? diff.styles.before
    : diff.styles.after
  return styles.isContentVisible
}

function buildMonolithicColumnTypeDiffMetadata(
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
          backgroundColor: HighlightVariant.Yellow,
        },
        after: {
          isContentVisible: true,
          isHeaderVisible: true,
          backgroundColor: HighlightVariant.Yellow,
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
          backgroundColor: HighlightVariant.Green,
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
          backgroundColor: HighlightVariant.Red,
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
