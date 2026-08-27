import { DiffBadge } from "@apihub/components/common/diffs/DiffBadge"
import { REQUIRED_TAG } from "@apihub/constants/tags"
import { useLayoutMode } from "@apihub/contexts/LayoutModeContext"
import { LayoutSide } from "@apihub/types/internal/LayoutSide"
import { getLayoutModeFlags, getLayoutSideFlags } from "@apihub/utils/common/changes"
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
  if (!requiredDiff) {
    return isSideBySideDiffsLayoutMode ? required : required
  }

  switch (requiredDiff.action) {
    case DiffAction.add:
      return isSideBySideDiffsLayoutMode ? changedSide : true
    case DiffAction.remove:
      return isSideBySideDiffsLayoutMode ? originSide : true
    case DiffAction.replace:
      return isSideBySideDiffsLayoutMode
        ? (requiredDiff.beforeValue === true && originSide)
          || (requiredDiff.afterValue === true && changedSide)
        : required
    default:
      return required
  }
}

function shouldShowRequiredBadge(
  requiredDiff: Diff | undefined,
  isSideBySideDiffsLayoutMode: boolean,
  originSide: boolean,
  changedSide: boolean,
): boolean {
  if (!requiredDiff) {
    return false
  }

  switch (requiredDiff.action) {
    case DiffAction.add:
      return isSideBySideDiffsLayoutMode ? changedSide : true
    case DiffAction.remove:
      return isSideBySideDiffsLayoutMode ? originSide : true
    case DiffAction.replace:
      return isSideBySideDiffsLayoutMode ? originSide || changedSide : true
    default:
      return false
  }
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

  const showStar = shouldShowRequiredStar(
    required,
    requiredDiff,
    isSideBySideDiffsLayoutMode,
    originSide,
    changedSide,
  )
  const showBadge = shouldShowRequiredBadge(
    requiredDiff,
    isSideBySideDiffsLayoutMode,
    originSide,
    changedSide,
  )

  if (!showStar && !showBadge) {
    return null
  }

  return (
    <span className="inline-flex items-center gap-1">
      {showStar && <sup className="ml-0.5 text-red-500">*</sup>}
      {showBadge && requiredDiff && (
        <DiffBadge
          label={REQUIRED_TAG}
          layoutMode={layoutMode}
          layoutSide={layoutSide}
          isNodeChanged={false}
          isContentChanged={true}
          $changes={requiredDiff}
        />
      )}
    </span>
  )
}
