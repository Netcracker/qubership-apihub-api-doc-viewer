import { useLayoutMode } from "@apihub/contexts/LayoutModeContext"
import { LayoutSide } from "@apihub/types/internal/LayoutSide"
import { getLayoutModeFlags, getLayoutSideFlags } from "@apihub/utils/common/changes"
import { isDefined } from "@apihub/utils/common/checkers"
import { Diff, DiffAction } from "@netcracker/qubership-apihub-api-diff"
import { FC } from "react"

export type JsonSchemaRequiredDiffIndicatorProps = {
  required: boolean
  requiredDiff?: Diff
  layoutSide?: LayoutSide
}

function shouldShowRequiredStar(
  required: boolean,
  requiredDiff: Diff | undefined,
  isSideBySideDiffsLayoutMode: boolean,
  originSide: boolean,
  changedSide: boolean,
): boolean {
  const shouldDisplayInSideBySide = required === true && !isDefined(requiredDiff)
    || !!requiredDiff && (
      requiredDiff.action === DiffAction.remove && originSide
      || requiredDiff.action === DiffAction.add && changedSide
      || requiredDiff.action === DiffAction.replace && (
        requiredDiff.beforeValue === true && originSide
        || requiredDiff.afterValue === true && changedSide
      )
    )

  if (isSideBySideDiffsLayoutMode) {
    return shouldDisplayInSideBySide
  }
  return required
}

export const JsonSchemaRequiredDiffIndicator: FC<JsonSchemaRequiredDiffIndicatorProps> = (props) => {
  const { required, requiredDiff, layoutSide } = props
  const layoutMode = useLayoutMode()
  const { isDocumentLayoutMode, isSideBySideDiffsLayoutMode } = getLayoutModeFlags(layoutMode)
  const { originSide, changedSide } = getLayoutSideFlags(layoutSide)

  if (isDocumentLayoutMode) {
    return required ? <sup className="ml-0.5 text-red-500">*</sup> : null
  }

  if (layoutSide === undefined) {
    return null
  }

  if (!shouldShowRequiredStar(
    required,
    requiredDiff,
    isSideBySideDiffsLayoutMode,
    originSide,
    changedSide,
  )) {
    return null
  }

  return <sup className="ml-0.5 text-red-500">*</sup>
}
