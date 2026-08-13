import { LayoutSide, ORIGIN_LAYOUT_SIDE } from "@apihub/types/internal/LayoutSide"
import { takeDiffSideBackgroundColor } from "@apihub/utils/diffs/take-diff-side-background-color"
import { isDiffAdd, isDiffRemove, isDiffReplace } from "@netcracker/qubership-apihub-api-diff"
import { DiffsClassesBuilder } from "@netcracker/qubership-apihub-next-data-model/building-service/abstract/tree-with-diffs/node-diffs-data/utilities"
import { ChangedPropertyMetaData } from "@netcracker/qubership-apihub-next-data-model/model/abstract/tree-with-diffs/tree-node.interface"
import { FC, memo, useCallback, useMemo, useState } from "react"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import { TextValueVariant } from "../TextValue/types"
import { isMarkdownExpandable, shortenMarkdownValue } from "./shorten-markdown-value"
import "./MarkdownTextRow.css"

type MarkdownTextValueProps = {
  value: string
  variant?: TextValueVariant
  layoutSide: LayoutSide
  diff?: ChangedPropertyMetaData
}

type MarkdownExpanderProps = {
  isExpandable: boolean
  expanded: boolean
  onToggle: () => void
  variant?: TextValueVariant
}

const MarkdownExpander: FC<MarkdownExpanderProps> = (props) => {
  const { isExpandable, expanded, onToggle, variant = TextValueVariant.body2 } = props

  if (!isExpandable) {
    return null
  }

  return (
    <div className="mt-1">
      <a
        className={`text-value-expander ${getExpanderFontSizeClass(variant)} text-blue-600 hover:text-blue-500 hover:cursor-pointer`.trim()}
        onClick={onToggle}
      >
        {!expanded ? "Show more" : "Show less"}
      </a>
    </div>
  )
}

function resolveSideAwareMarkdownValue(
  value: string,
  diff: ChangedPropertyMetaData | undefined,
  layoutSide: LayoutSide,
): { resolvedValue: string; isInvisible: boolean } {
  if (!diff) {
    return { resolvedValue: value, isInvisible: false }
  }

  const { data } = diff
  const isOrigin = layoutSide === ORIGIN_LAYOUT_SIDE

  if (isDiffAdd(data)) {
    if (isOrigin) {
      return { resolvedValue: "", isInvisible: true }
    }
    return {
      resolvedValue: typeof data.afterValue === "string" ? data.afterValue : value,
      isInvisible: false,
    }
  }

  if (isDiffRemove(data)) {
    if (!isOrigin) {
      return { resolvedValue: "", isInvisible: true }
    }
    return {
      resolvedValue: typeof data.beforeValue === "string" ? data.beforeValue : value,
      isInvisible: false,
    }
  }

  if (isDiffReplace(data)) {
    const resolvedValue = isOrigin
      ? (typeof data.beforeValue === "string" ? data.beforeValue : value)
      : (typeof data.afterValue === "string" ? data.afterValue : value)
    return { resolvedValue, isInvisible: false }
  }

  return { resolvedValue: value, isInvisible: false }
}

function getMarkdownFontSizeClass(variant: TextValueVariant): string {
  switch (variant) {
    case TextValueVariant.body1:
      return "text-value-body1"
    case TextValueVariant.h1:
    case TextValueVariant.h2:
    case TextValueVariant.h3:
    case TextValueVariant.h4:
    case TextValueVariant.h5:
    case TextValueVariant.h6:
      return "text-value-body2"
    case TextValueVariant.body2:
    default:
      return "text-value-body2"
  }
}

function getExpanderFontSizeClass(variant: TextValueVariant): string {
  switch (variant) {
    case TextValueVariant.h1:
      return "text-value-expander--h1"
    case TextValueVariant.h2:
      return "text-value-expander--h2"
    case TextValueVariant.h3:
      return "text-value-expander--h3"
    case TextValueVariant.h4:
      return "text-value-expander--h4"
    case TextValueVariant.h5:
      return "text-value-expander--h5"
    case TextValueVariant.h6:
      return "text-value-expander--h6"
    case TextValueVariant.body1:
      return "text-value-expander--body1"
    case TextValueVariant.body2:
    default:
      return "text-value-expander--body2"
  }
}

export const MarkdownTextValue: FC<MarkdownTextValueProps> = memo<MarkdownTextValueProps>((props) => {
  const { value, variant = TextValueVariant.body2, layoutSide, diff } = props
  const [expanded, setExpanded] = useState(false)

  const { resolvedValue, isInvisible } = useMemo(
    () => resolveSideAwareMarkdownValue(value, diff, layoutSide),
    [diff, layoutSide, value],
  )

  const displayValue = useMemo(
    () => shortenMarkdownValue(resolvedValue, expanded),
    [expanded, resolvedValue],
  )

  const isExpandable = useMemo(
    () => isMarkdownExpandable(resolvedValue),
    [resolvedValue],
  )

  const markdownClassName = useMemo(() => {
    const backgroundColor = takeDiffSideBackgroundColor(diff, layoutSide)
    return [
      "markdown",
      "text-slate-700",
      getMarkdownFontSizeClass(variant),
      DiffsClassesBuilder.background(backgroundColor),
    ].filter(Boolean).join(" ")
  }, [diff, layoutSide, variant])

  const onToggleExpanded = useCallback(() => {
    setExpanded(prev => !prev)
  }, [])

  if (isInvisible || !displayValue) {
    return null
  }

  return (
    <div className="markdown-text-row flex flex-col items-start gap-1">
      <ReactMarkdown className={markdownClassName} remarkPlugins={[remarkGfm]}>
        {displayValue}
      </ReactMarkdown>
      <MarkdownExpander
        isExpandable={isExpandable}
        expanded={expanded}
        onToggle={onToggleExpanded}
        variant={variant}
      />
    </div>
  )
})
