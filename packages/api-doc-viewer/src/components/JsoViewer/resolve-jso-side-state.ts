import { ChangedPropertyMetaData, DiffStyles, HighlightVariant } from "@apihub/next-data-model/model/abstract/tree-with-diffs/tree-node.interface"
import { CHANGED_LAYOUT_SIDE, LayoutSide, ORIGIN_LAYOUT_SIDE } from "@apihub/types/internal/LayoutSide"
import { isDiffAdd, isDiffRemove, isDiffReplace } from "@netcracker/qubership-apihub-api-diff"
import { getValueType, isPredefinedValueSet as checkIsPredefinedValueSet } from "@netcracker/qubership-apihub-next-data-model/building-service/jso/json-crawl-entities/transformers/inline-jso-property-params"
import { JsoTreeNodeValueBase } from "@netcracker/qubership-apihub-next-data-model/model/jso/types/node-value"
import { JsoPropertyValueType, JsoPropertyValueTypes } from "@netcracker/qubership-apihub-next-data-model/model/jso/types/node-value-type"

type ResolveJsoSideStateInput = {
  nodeValue?: JsoTreeNodeValueBase | null
  diff?: ChangedPropertyMetaData
  layoutSide: LayoutSide
}

export type ResolvedJsoSideState = {
  isVisible: boolean
  showSubheader: boolean
  resolvedValue: unknown
  resolvedValueType: JsoPropertyValueType
  isPredefinedValueSet: boolean
  isComplexValue: boolean
  sideStyles?: DiffStyles
}

export function resolveJsoSideState(input: ResolveJsoSideStateInput): ResolvedJsoSideState {
  const { nodeValue, diff, layoutSide } = input

  if (!nodeValue) {
    return {
      isVisible: false,
      showSubheader: false,
      resolvedValue: undefined,
      resolvedValueType: JsoPropertyValueTypes.UNKNOWN,
      isPredefinedValueSet: false,
      isComplexValue: false,
      sideStyles: undefined,
    }
  }

  if (!diff) {
    const isComplexValue = isComplexType(nodeValue.valueType)
    return {
      isVisible: true,
      showSubheader: isRenderableValueType(nodeValue.valueType),
      resolvedValue: nodeValue.value,
      resolvedValueType: nodeValue.valueType,
      isPredefinedValueSet: nodeValue.isPredefinedValueSet,
      isComplexValue,
      sideStyles: undefined,
    }
  }

  const sideStyles = layoutSide === ORIGIN_LAYOUT_SIDE ? diff.styles.before : diff.styles.after
  const resolvedValue = resolveSideValue(nodeValue, diff, layoutSide)
  const resolvedValueType = getValueType(resolvedValue)
  const isComplexValue = isComplexType(resolvedValueType)
  const isVisible = sideStyles.isContentVisible

  return {
    isVisible,
    showSubheader: isVisible && isRenderableValueType(resolvedValueType),
    resolvedValue,
    resolvedValueType,
    isPredefinedValueSet: checkIsPredefinedValueSet(resolvedValueType),
    isComplexValue,
    sideStyles,
  }
}

export function isDiffWithComplexValue(diff?: ChangedPropertyMetaData): boolean {
  if (!diff) {
    return false
  }
  const { data } = diff
  if (isDiffAdd(data)) {
    return isComplexValue(data.afterValue)
  }
  if (isDiffRemove(data)) {
    return isComplexValue(data.beforeValue)
  }
  if (isDiffReplace(data)) {
    return isComplexValue(data.beforeValue) || isComplexValue(data.afterValue)
  }
  return false
}

export function withForcedBackgroundColor(
  diff: ChangedPropertyMetaData | undefined,
  color: HighlightVariant | undefined,
): ChangedPropertyMetaData | undefined {
  if (!diff || !color) {
    return diff
  }
  return {
    ...diff,
    styles: {
      before: { ...diff.styles.before, backgroundColor: color },
      after: { ...diff.styles.after, backgroundColor: color },
    },
  }
}

function resolveSideValue(
  nodeValue: JsoTreeNodeValueBase,
  diff: ChangedPropertyMetaData,
  layoutSide: LayoutSide,
): unknown {
  const { data } = diff

  if (isDiffReplace(data)) {
    return layoutSide === ORIGIN_LAYOUT_SIDE
      ? data.beforeValue
      : pickPreferredChangedSideValue(nodeValue.value, data.afterValue)
  }
  if (isDiffAdd(data)) {
    return layoutSide === CHANGED_LAYOUT_SIDE
      ? pickPreferredChangedSideValue(nodeValue.value, data.afterValue)
      : undefined
  }
  if (isDiffRemove(data)) {
    return layoutSide === ORIGIN_LAYOUT_SIDE
      ? data.beforeValue ?? nodeValue.value
      : undefined
  }

  return nodeValue.value
}

function isRenderableValueType(valueType: JsoPropertyValueType): boolean {
  return (
    valueType === JsoPropertyValueTypes.STRING ||
    valueType === JsoPropertyValueTypes.NUMBER ||
    valueType === JsoPropertyValueTypes.BOOLEAN ||
    valueType === JsoPropertyValueTypes.NULL
  )
}

function isComplexType(valueType: JsoPropertyValueType): boolean {
  return valueType === JsoPropertyValueTypes.OBJECT || valueType === JsoPropertyValueTypes.ARRAY
}

function isComplexValue(value: unknown): boolean {
  return isComplexType(getValueType(value))
}

function pickPreferredChangedSideValue(currentValue: unknown, fallbackAfterValue: unknown): unknown {
  if (fallbackAfterValue === undefined) {
    return currentValue
  }
  const currentType = getValueType(currentValue)
  const fallbackType = getValueType(fallbackAfterValue)
  return currentType === fallbackType
    ? currentValue
    : fallbackAfterValue
}
