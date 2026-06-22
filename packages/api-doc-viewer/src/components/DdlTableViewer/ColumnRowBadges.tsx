import { DdlApiColumnRowValue } from "@netcracker/qubership-apihub-next-data-model/model/ddlapi/tree/node-value"
import { FC, memo, useCallback } from "react"
import { UxBadge } from "../kit/ux/UxBadge/UxBadge"
import { useDdlTableViewerContext } from "./DdlTableViewerContext"
import { DDL_API_FOREIGN_KEY_BADGE_COLOR_SCHEMA, DDL_API_GENERATED_BADGE_COLOR_SCHEMA, DDL_API_NOT_NULL_BADGE_COLOR_SCHEMA, DDL_API_PRIMARY_KEY_BADGE_COLOR_SCHEMA, DDL_API_UNIQUE_BADGE_COLOR_SCHEMA } from "./conts"
import { formatForeignKeyTarget } from "./formatters"

type ColumnRowBadgesProps = {
  value: DdlApiColumnRowValue
}

export const ColumnRowBadges: FC<ColumnRowBadgesProps> = memo<ColumnRowBadgesProps>(props => {
  const { value } = props
  const { navigationCallback } = useDdlTableViewerContext()

  const onForeignKeyClick = useCallback(() => {
    const target = value.foreignKeyTarget
    if (!target) {
      return
    }
    navigationCallback(target.schemaName, target.tableName, target.columnName)
  }, [navigationCallback, value.foreignKeyTarget])

  return (
    <div className="flex flex-wrap items-center gap-1">
      {value.isPrimaryKey && (
        <UxBadge text="PK" colorSchema={DDL_API_PRIMARY_KEY_BADGE_COLOR_SCHEMA} inline />
      )}
      {value.isForeignKey && value.foreignKeyTarget && (
        <button
          type="button"
          className="inline-flex border-0 bg-transparent p-0"
          onClick={onForeignKeyClick}
        >
          <UxBadge
            text={`FK (${formatForeignKeyTarget(value.foreignKeyTarget)})`}
            colorSchema={DDL_API_FOREIGN_KEY_BADGE_COLOR_SCHEMA}
            inline
          />
        </button>
      )}
      {value.isForeignKey && !value.foreignKeyTarget && (
        <UxBadge text="FK" colorSchema={DDL_API_FOREIGN_KEY_BADGE_COLOR_SCHEMA} inline />
      )}
      {value.isGenerated && (
        <UxBadge
          text={value.generatedBy === 'identity' ? 'identity' : 'generated'}
          colorSchema={DDL_API_GENERATED_BADGE_COLOR_SCHEMA}
          inline
        />
      )}
      {value.isUnique && (
        <UxBadge text="unique" colorSchema={DDL_API_UNIQUE_BADGE_COLOR_SCHEMA} inline />
      )}
      {value.isNotNull && (
        <UxBadge text="not null" colorSchema={DDL_API_NOT_NULL_BADGE_COLOR_SCHEMA} inline />
      )}
    </div>
  )
})
