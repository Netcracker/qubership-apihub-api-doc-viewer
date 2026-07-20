import { DiffBadge } from "@apihub/components/common/diffs/DiffBadge"
import { useLayoutMode } from "@apihub/contexts/LayoutModeContext"
import { LayoutSide, ORIGIN_LAYOUT_SIDE } from "@apihub/types/internal/LayoutSide"
import { Diff } from "@netcracker/qubership-apihub-api-diff"
import { DiffsClassesBuilder } from "@netcracker/qubership-apihub-next-data-model/building-service/abstract/tree-with-diffs/node-diffs-data/utilities"
import { ChangedPropertyMetaData } from "@netcracker/qubership-apihub-next-data-model/model/abstract/tree-with-diffs/tree-node.interface"
import { FC, memo, ReactNode, useMemo } from "react"
import {
  DDL_API_FOREIGN_KEY_BADGE_COLOR_SCHEMA,
  DDL_API_GENERATED_BADGE_COLOR_SCHEMA,
  DDL_API_NOT_NULL_BADGE_COLOR_SCHEMA,
  DDL_API_PRIMARY_KEY_BADGE_COLOR_SCHEMA,
  DDL_API_UNIQUE_BADGE_COLOR_SCHEMA,
} from "../consts"
import { ForeignKey } from "../ForeignKey/ForeignKey"
import { ColumnRowBadgesContentProps, ColumnRowBadgesFlagDiffs } from "./types"

/** Keeps side-by-side columns aligned when a flag badge is hidden on one side. */
function emptyBadgePlaceholder(): ReactNode {
  return <span className="inline-block min-h-[19px]" aria-hidden="true" />
}

function isFlagBadgeVisible(
  flagValue: boolean | undefined,
  flagDiff: ChangedPropertyMetaData | undefined,
): boolean {
  return !!flagValue || !!flagDiff
}

function sideStyles(
  flagDiff: ChangedPropertyMetaData,
  layoutSide: LayoutSide,
) {
  return layoutSide === ORIGIN_LAYOUT_SIDE
    ? flagDiff.styles.before
    : flagDiff.styles.after
}

function backgroundClassForSide(
  flagDiff: ChangedPropertyMetaData | undefined,
  layoutSide: LayoutSide,
): string | undefined {
  if (!flagDiff) {
    return undefined
  }
  return DiffsClassesBuilder.background(sideStyles(flagDiff, layoutSide).backgroundColor)
}

function isContentVisibleOnSide(
  flagDiff: ChangedPropertyMetaData | undefined,
  layoutSide: LayoutSide,
): boolean {
  if (!flagDiff) {
    return true
  }
  return sideStyles(flagDiff, layoutSide).isContentVisible
}

function wrapWithDiffBackground(
  content: ReactNode,
  flagDiff: ChangedPropertyMetaData | undefined,
  layoutSide: LayoutSide,
): ReactNode {
  const backgroundClass = backgroundClassForSide(flagDiff, layoutSide)
  if (!backgroundClass) {
    return content
  }
  return (
    <span className={`inline-flex items-center ${backgroundClass}`}>
      {content}
    </span>
  )
}

function renderFlagBadge(options: {
  label: string
  colorSchema: string
  flagValue: boolean | undefined
  flagDiff: ChangedPropertyMetaData | undefined
  layoutMode: ReturnType<typeof useLayoutMode>
  layoutSide: LayoutSide
}): ReactNode {
  const { label, colorSchema, flagValue, flagDiff, layoutMode, layoutSide } = options

  if (!isFlagBadgeVisible(flagValue, flagDiff)) {
    return null
  }

  if (!isContentVisibleOnSide(flagDiff, layoutSide)) {
    return wrapWithDiffBackground(emptyBadgePlaceholder(), flagDiff, layoutSide)
  }

  const $changes = flagDiff?.data as Diff | undefined

  return wrapWithDiffBackground(
    <DiffBadge
      label={label}
      colorSchema={colorSchema}
      layoutMode={layoutMode}
      layoutSide={layoutSide}
      isNodeChanged={false}
      isContentChanged={!!$changes}
      $changes={$changes}
    />,
    flagDiff,
    layoutSide,
  )
}

export const ColumnRowBadgesContent: FC<ColumnRowBadgesContentProps> = memo<ColumnRowBadgesContentProps>(props => {
  const { value, flagDiffs, layoutSide } = props
  const layoutMode = useLayoutMode()

  const diffs: ColumnRowBadgesFlagDiffs = useMemo(() => flagDiffs ?? {}, [flagDiffs])

  const primaryKeyBadge = useMemo(
    () => renderFlagBadge({
      label: "PK",
      colorSchema: DDL_API_PRIMARY_KEY_BADGE_COLOR_SCHEMA,
      flagValue: value.isPrimaryKey,
      flagDiff: diffs.isPrimaryKey,
      layoutMode,
      layoutSide,
    }),
    [diffs.isPrimaryKey, layoutMode, layoutSide, value.isPrimaryKey],
  )

  const uniqueBadge = useMemo(
    () => renderFlagBadge({
      label: "unique",
      colorSchema: DDL_API_UNIQUE_BADGE_COLOR_SCHEMA,
      flagValue: value.isUnique,
      flagDiff: diffs.isUnique,
      layoutMode,
      layoutSide,
    }),
    [diffs.isUnique, layoutMode, layoutSide, value.isUnique],
  )

  const notNullBadge = useMemo(
    () => renderFlagBadge({
      label: "not null",
      colorSchema: DDL_API_NOT_NULL_BADGE_COLOR_SCHEMA,
      flagValue: value.isNotNull,
      flagDiff: diffs.isNotNull,
      layoutMode,
      layoutSide,
    }),
    [diffs.isNotNull, layoutMode, layoutSide, value.isNotNull],
  )

  const generatedBadge = useMemo(
    () => renderFlagBadge({
      // Badge label is always "generated". `generatedBy` ('identity' | 'expression') is
      // preserved on the data model for consumers; the viewer does not distinguish them.
      label: "generated",
      colorSchema: DDL_API_GENERATED_BADGE_COLOR_SCHEMA,
      flagValue: value.isGenerated,
      flagDiff: diffs.isGenerated,
      layoutMode,
      layoutSide,
    }),
    [diffs.isGenerated, layoutMode, layoutSide, value.isGenerated],
  )

  const foreignKeyBadge = useMemo(() => {
    const flagDiff = diffs.isForeignKey
    if (!isFlagBadgeVisible(value.isForeignKey, flagDiff)) {
      return null
    }
    if (!isContentVisibleOnSide(flagDiff, layoutSide)) {
      return wrapWithDiffBackground(emptyBadgePlaceholder(), flagDiff, layoutSide)
    }

    const $changes = flagDiff?.data as Diff | undefined
    if (!$changes) {
      return value.foreignKeyTarget
        ? <ForeignKey target={value.foreignKeyTarget} />
        : null
    }

    return wrapWithDiffBackground(
      <div className="ddlapi-foreign-key inline-flex flex-row items-center gap-1">
        <DiffBadge
          label="FK"
          colorSchema={DDL_API_FOREIGN_KEY_BADGE_COLOR_SCHEMA}
          layoutMode={layoutMode}
          layoutSide={layoutSide}
          isNodeChanged={false}
          isContentChanged={true}
          $changes={$changes}
        />
        {value.foreignKeyTarget && (
          <ForeignKey target={value.foreignKeyTarget} hideBadge />
        )}
      </div>,
      flagDiff,
      layoutSide,
    )
  }, [diffs.isForeignKey, layoutMode, layoutSide, value.foreignKeyTarget, value.isForeignKey])

  const badges = useMemo(
    () => [primaryKeyBadge, uniqueBadge, notNullBadge, generatedBadge, foreignKeyBadge].filter(Boolean),
    [foreignKeyBadge, generatedBadge, notNullBadge, primaryKeyBadge, uniqueBadge],
  )

  if (badges.length === 0) {
    return null
  }

  return (
    <div className="flex flex-wrap items-center gap-2">
      {badges}
    </div>
  )
})
