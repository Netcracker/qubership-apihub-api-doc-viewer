import { ChangedPropertyMetaData, HighlightVariant } from "@apihub/next-data-model/model/abstract/tree-with-diffs/tree-node.interface"
import { CHANGED_LAYOUT_SIDE, ORIGIN_LAYOUT_SIDE } from "@apihub/types/internal/LayoutSide"
import { DiffAction } from "@netcracker/qubership-apihub-api-diff"
import { JsoPropertyValueTypes } from "@netcracker/qubership-apihub-next-data-model/model/jso/types/node-value-type"
import { isDiffWithComplexValue, resolveJsoSideState, withForcedBackgroundColor } from "./resolve-jso-side-state"

describe('resolveJsoSideState', () => {
  const nodeValue = {
    title: 'key',
    value: 'actual',
    valueType: JsoPropertyValueTypes.STRING,
    isPrimitive: true,
    isArrayItem: false,
    isPredefinedValueSet: false,
  } as const

  it('applies add semantics for primitive values', () => {
    const diff = createDiffMeta({
      action: DiffAction.add,
      afterValue: 'added-value',
    })

    const origin = resolveJsoSideState({ nodeValue, diff, layoutSide: ORIGIN_LAYOUT_SIDE })
    const changed = resolveJsoSideState({ nodeValue, diff, layoutSide: CHANGED_LAYOUT_SIDE })

    expect(origin.isVisible).toBe(false)
    expect(origin.showSubheader).toBe(false)
    expect(origin.sideStyles?.backgroundColor).toBe(HighlightVariant.Gray)

    expect(changed.isVisible).toBe(true)
    expect(changed.showSubheader).toBe(true)
    expect(changed.resolvedValue).toBe('actual')
    expect(changed.sideStyles?.backgroundColor).toBe(HighlightVariant.Green)
  })

  it('applies remove semantics for primitive values', () => {
    const diff = createDiffMeta({
      action: DiffAction.remove,
      beforeValue: 'removed-value',
    })

    const origin = resolveJsoSideState({ nodeValue, diff, layoutSide: ORIGIN_LAYOUT_SIDE })
    const changed = resolveJsoSideState({ nodeValue, diff, layoutSide: CHANGED_LAYOUT_SIDE })

    expect(origin.isVisible).toBe(true)
    expect(origin.showSubheader).toBe(true)
    expect(origin.resolvedValue).toBe('removed-value')
    expect(origin.sideStyles?.backgroundColor).toBe(HighlightVariant.Red)

    expect(changed.isVisible).toBe(false)
    expect(changed.showSubheader).toBe(false)
    expect(changed.sideStyles?.backgroundColor).toBe(HighlightVariant.Gray)
  })

  it('applies replace semantics for primitive values', () => {
    const diff = createDiffMeta({
      action: DiffAction.replace,
      beforeValue: 'before',
      afterValue: 'after',
    })

    const origin = resolveJsoSideState({ nodeValue, diff, layoutSide: ORIGIN_LAYOUT_SIDE })
    const changed = resolveJsoSideState({ nodeValue, diff, layoutSide: CHANGED_LAYOUT_SIDE })

    expect(origin.isVisible).toBe(true)
    expect(origin.showSubheader).toBe(true)
    expect(origin.resolvedValue).toBe('before')
    expect(origin.sideStyles?.backgroundColor).toBe(HighlightVariant.Yellow)
    expect(origin.sideStyles?.textHighlighterColor).toBe(HighlightVariant.Yellow)

    expect(changed.isVisible).toBe(true)
    expect(changed.showSubheader).toBe(true)
    expect(changed.resolvedValue).toBe('actual')
    expect(changed.sideStyles?.backgroundColor).toBe(HighlightVariant.Yellow)
    expect(changed.sideStyles?.textHighlighterColor).toBe(HighlightVariant.Yellow)
  })

  it('hides subheader for complex replace values and marks complex diff', () => {
    const diff = createDiffMeta({
      action: DiffAction.replace,
      beforeValue: { id: 1 },
      afterValue: { id: 2 },
    })

    const origin = resolveJsoSideState({ nodeValue, diff, layoutSide: ORIGIN_LAYOUT_SIDE })
    const changed = resolveJsoSideState({ nodeValue, diff, layoutSide: CHANGED_LAYOUT_SIDE })

    expect(origin.isVisible).toBe(true)
    expect(origin.showSubheader).toBe(false)
    expect(origin.isComplexValue).toBe(true)

    expect(changed.isVisible).toBe(true)
    expect(changed.showSubheader).toBe(false)
    expect(changed.isComplexValue).toBe(true)

    expect(isDiffWithComplexValue(diff)).toBe(true)
  })

  it('renders predefined values from diff payload', () => {
    const diff = createDiffMeta({
      action: DiffAction.replace,
      beforeValue: null,
      afterValue: false,
    })

    const origin = resolveJsoSideState({ nodeValue, diff, layoutSide: ORIGIN_LAYOUT_SIDE })
    const changed = resolveJsoSideState({ nodeValue, diff, layoutSide: CHANGED_LAYOUT_SIDE })

    expect(origin.isPredefinedValueSet).toBe(true)
    expect(changed.isPredefinedValueSet).toBe(true)
  })

  it('falls back to node value on both sides without diff', () => {
    const origin = resolveJsoSideState({ nodeValue, layoutSide: ORIGIN_LAYOUT_SIDE })
    const changed = resolveJsoSideState({ nodeValue, layoutSide: CHANGED_LAYOUT_SIDE })

    expect(origin.isVisible).toBe(true)
    expect(origin.showSubheader).toBe(true)
    expect(origin.resolvedValue).toBe('actual')

    expect(changed.isVisible).toBe(true)
    expect(changed.showSubheader).toBe(true)
    expect(changed.resolvedValue).toBe('actual')
  })

  it('overrides background color while preserving visibility', () => {
    const diff = createDiffMeta({
      action: DiffAction.add,
      afterValue: { nested: true },
    })

    const yellowDiff = withForcedBackgroundColor(diff, HighlightVariant.Yellow)
    expect(yellowDiff?.styles.before.isContentVisible).toBe(false)
    expect(yellowDiff?.styles.after.isContentVisible).toBe(true)
    expect(yellowDiff?.styles.before.backgroundColor).toBe(HighlightVariant.Yellow)
    expect(yellowDiff?.styles.after.backgroundColor).toBe(HighlightVariant.Yellow)
  })
})

function createDiffMeta(input: {
  action: typeof DiffAction[keyof typeof DiffAction]
  beforeValue?: unknown
  afterValue?: unknown
}): ChangedPropertyMetaData {
  const { action, beforeValue, afterValue } = input
  return {
    data: {
      type: 'any',
      scope: 'root',
      action,
      beforeDeclarationPaths: [],
      afterDeclarationPaths: [],
      beforeValue,
      afterValue,
    } as never,
    styles: {
      before: {
        isContentVisible: action !== DiffAction.add,
        backgroundColor:
          action === DiffAction.remove ? HighlightVariant.Red :
            action === DiffAction.add ? HighlightVariant.Gray : HighlightVariant.Yellow,
        textHighlighterColor: action === DiffAction.replace ? HighlightVariant.Yellow : undefined,
      },
      after: {
        isContentVisible: action !== DiffAction.remove,
        backgroundColor:
          action === DiffAction.add ? HighlightVariant.Green :
            action === DiffAction.remove ? HighlightVariant.Gray : HighlightVariant.Yellow,
        textHighlighterColor: action === DiffAction.replace ? HighlightVariant.Yellow : undefined,
      },
    },
  }
}
