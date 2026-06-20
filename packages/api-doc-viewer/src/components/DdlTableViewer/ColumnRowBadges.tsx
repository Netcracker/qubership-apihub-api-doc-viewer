import { DdlApiColumnRowValue } from "@netcracker/qubership-apihub-next-data-model/model/ddlapi/tree/node-value"
import { FC, memo, useCallback } from "react"
import { UxBadge } from "../kit/ux/UxBadge/UxBadge"
import { BADGE_KIND_DEFAULT_OUTLINE } from "../kit/ux/UxBadge/types"
import { useDdlTableViewerContext } from "./DdlTableViewerContext"
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
        <UxBadge kind={BADGE_KIND_DEFAULT_OUTLINE} text="PK" inline />
      )}
      {value.isForeignKey && value.foreignKeyTarget && (
        <button
          type="button"
          className="inline-flex border-0 bg-transparent p-0"
          onClick={onForeignKeyClick}
        >
          <UxBadge
            kind={BADGE_KIND_DEFAULT_OUTLINE}
            text={`FK (${formatForeignKeyTarget(value.foreignKeyTarget)})`}
            inline
          />
        </button>
      )}
      {value.isForeignKey && !value.foreignKeyTarget && (
        <UxBadge kind={BADGE_KIND_DEFAULT_OUTLINE} text="FK" inline />
      )}
      {value.isGenerated && (
        <UxBadge
          kind={BADGE_KIND_DEFAULT_OUTLINE}
          text={value.generatedBy === 'identity' ? 'identity' : 'generated'}
          inline
        />
      )}
      {value.isUnique && (
        <UxBadge kind={BADGE_KIND_DEFAULT_OUTLINE} text="unique" inline />
      )}
      {value.isNotNull && (
        <UxBadge kind={BADGE_KIND_DEFAULT_OUTLINE} text="not null" inline />
      )}
    </div>
  )
})
