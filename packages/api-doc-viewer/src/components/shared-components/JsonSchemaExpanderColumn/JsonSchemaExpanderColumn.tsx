import { FC } from "react"
import { ExpandingCaret } from "../../common/layout/Expander/ExpandingCaret"
import { NestingHorizontalIndicator } from "../../common/NestingHorizontalIndicator"

export const JSON_SCHEMA_EXPANDER_COLUMN_WIDTH_CLASS = "w-4 min-w-[16px] shrink-0 flex-none"
// export const JSON_SCHEMA_EXPANDER_COLUMN_WIDTH_CLASS = "w-3 min-w-[12px] shrink-0 flex-none"

export const JsonSchemaRootExpanderOffset: FC = () => (
  <div className={JSON_SCHEMA_EXPANDER_COLUMN_WIDTH_CLASS} aria-hidden="true" />
)

export type JsonSchemaExpanderColumnProps = {
  isRoot: boolean
  expandable: boolean
  expanded?: boolean
  onClick?: () => void
}

export const JsonSchemaExpanderColumn: FC<JsonSchemaExpanderColumnProps> = (props) => {
  const { isRoot, expandable, expanded, onClick } = props

  if (isRoot && !expandable) {
    return <JsonSchemaRootExpanderOffset />
  }

  if (isRoot && expandable) {
    return (
      <div className={`flex flex-row items-center justify-center ${JSON_SCHEMA_EXPANDER_COLUMN_WIDTH_CLASS}`}>
        {expanded !== undefined && (
          <ExpandingCaret onToggle={onClick ?? (() => {})} expanded={expanded} />
        )}
      </div>
    )
  }

  if (!expandable) {
    return (
      <div className={`flex flex-row items-center justify-center ${JSON_SCHEMA_EXPANDER_COLUMN_WIDTH_CLASS}`}>
        <NestingHorizontalIndicator />
      </div>
    )
  }

  return (
    <div className={`flex flex-row items-center justify-center gap-0.5 ${JSON_SCHEMA_EXPANDER_COLUMN_WIDTH_CLASS}`}>
      <NestingHorizontalIndicator short />
      {expanded !== undefined && (
        <ExpandingCaret onToggle={onClick ?? (() => {})} expanded={expanded} />
      )}
    </div>
  )
}
