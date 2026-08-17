import { X_AXIS_PADDING_ROWS_ASYNC_API, X_AXIS_PADDING_ROWS_DDL_API_PROPERTIES, X_AXIS_PADDING_ROWS_JSO } from "@apihub/components/shared-styles/tailwind-classnames"
import { FC, memo, useMemo } from "react"
import "../../shared-styles/preceded-by.css"
import { TextRowUsage } from "../TextRow/types"
import { TextValueVariant } from "../TextValue/types"
import { ATTRIBUTE_PRECEDED_BY } from "../WithPrecededByProps"
import { MarkdownTextValue } from "./MarkdownTextValue"
import type { MarkdownTextRowContentProps } from "./types"

const MARKDOWN_TEXT_ROW_X_AXIS_PADDING_BY_USAGE: Partial<Record<TextRowUsage, string>> = {
  [TextRowUsage.DdlApiProperty]: X_AXIS_PADDING_ROWS_DDL_API_PROPERTIES,
  [TextRowUsage.JsonSchemaDescription]: X_AXIS_PADDING_ROWS_JSO,
}

function getMarkdownTextRowClassesByUsage(usage: TextRowUsage): string {
  return MARKDOWN_TEXT_ROW_X_AXIS_PADDING_BY_USAGE[usage] ?? X_AXIS_PADDING_ROWS_ASYNC_API
}

export const MarkdownTextRowContent: FC<MarkdownTextRowContentProps> = memo<MarkdownTextRowContentProps>((props) => {
  const {
    value,
    variant = TextValueVariant.body2,
    layoutSide,
    usage = TextRowUsage.Default,
    diff,
  } = props

  const { [ATTRIBUTE_PRECEDED_BY]: precededBy } = props

  const usageDrivenClasses = useMemo(() => getMarkdownTextRowClassesByUsage(usage), [usage])

  return (
    <div
      data-precededby={precededBy}
      className={`markdown-text-row-content flex w-full h-full ${usageDrivenClasses} gap-2`}
    >
      <MarkdownTextValue
        value={value}
        variant={variant}
        usage={usage}
        layoutSide={layoutSide}
        diff={diff}
      />
    </div>
  )
})
