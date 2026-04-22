import { HighlightVariant } from "@apihub/next-data-model/model/abstract/tree-with-diffs/tree-node.interface";
import { DiffsClassesBuilder } from "@netcracker/qubership-apihub-next-data-model/building-service/abstract/tree-with-diffs/node-diffs-data/utilities";
import { FC, memo, useCallback } from "react";
import { ResolvedJsoSideState } from "../resolve-jso-side-state";

type JsoValueProps = {
  sideState: ResolvedJsoSideState
  forcedBackgroundColor?: HighlightVariant
  forcedTextHighlighterColor?: Exclude<HighlightVariant, HighlightVariant.Gray>
}

export const JsoValue: FC<JsoValueProps> = memo<JsoValueProps>((props) => {
  const { sideState, forcedBackgroundColor, forcedTextHighlighterColor } = props
  const { showSubheader, resolvedValue, resolvedValueType, isPredefinedValueSet, sideStyles } = sideState
  const resolvedBackgroundColor = forcedBackgroundColor ?? sideStyles?.backgroundColor
  const useFixedPoolDiffBorder = isPredefinedValueSet && resolvedBackgroundColor === HighlightVariant.Yellow

  const renderElement = useCallback((
    resolvedValue: string | undefined,
    styleClasses: string[],
  ) => {
    if (!showSubheader) {
      return null
    }
    const commonStyles = `jso-value subheader text-slate-500 ${styleClasses.join(' ')}`.trim()
    switch (resolvedValueType) {
      case 'string':
      case 'number':
      case 'boolean':
      case 'null':
        return (
          <span className={`${commonStyles} ${isPredefinedValueSet ? 'bg-gray-100 px-2 rounded-md' : ''}`}>
            {resolvedValue}
          </span>
        )
    }
  }, [resolvedValueType, isPredefinedValueSet, showSubheader])

  const styleClasses = [
    useFixedPoolDiffBorder ? '' : DiffsClassesBuilder.background(resolvedBackgroundColor),
    useFixedPoolDiffBorder ? '' : DiffsClassesBuilder.highlighter(forcedTextHighlighterColor ?? sideStyles?.textHighlighterColor),
    DiffsClassesBuilder.borderShadow(sideStyles?.borderShadowColor),
    useFixedPoolDiffBorder ? 'jso-value-fixed-pool-diff-border_orange' : '',
  ].filter(Boolean)

  return (
    <div>
      {renderElement(`${resolvedValue}`, styleClasses)}
    </div>
  )
})
