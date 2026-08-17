import { CIRCULAR_REF_TOOLTIP } from "../../../consts/tooltips"
import { CircularRefIcon } from "@apihub/components/kit/icons/CircularRefIcon"
import { DiffTags } from "@apihub/components/common/diffs/DiffTags"
import { SubheaderValue } from "@apihub/components/shared-components/SubheaderValue/SubheaderValue"
import { SubheaderValueAppearance } from "@apihub/components/shared-components/SubheaderValue/types"
import { LayoutSide } from "@apihub/types/internal/LayoutSide"
import { JsonSchemaTreeNodeMeta } from "@netcracker/qubership-apihub-next-data-model/model/json-schema/types/node-meta"
import { JsonSchemaTreeNodeValue } from "@netcracker/qubership-apihub-next-data-model/model/json-schema/types/node-value"
import { resolveJsonSchemaTypeLabel } from "@netcracker/qubership-apihub-next-data-model/model/json-schema/type-label"
import { FC } from "react"
import { UxTooltip } from "@apihub/components/kit/ux/UxTooltip/UxTooltip"

export type JsonSchemaTitleSubheaderProps = {
  value: JsonSchemaTreeNodeValue | null | undefined
  meta: JsonSchemaTreeNodeMeta | null | undefined
  isCycle: boolean
  layoutSide: LayoutSide
  showTypeLabel?: boolean
}

export const JsonSchemaTitleSubheader: FC<JsonSchemaTitleSubheaderProps> = (props) => {
  const { value, meta, isCycle, layoutSide, showTypeLabel = true } = props

  return (
    <div className="flex flex-row items-center gap-2">
      {showTypeLabel && (
        <SubheaderValue
          isVisible={true}
          value={resolveJsonSchemaTypeLabel(value, meta)}
          appearance={SubheaderValueAppearance.Text}
        />
      )}
      {isCycle && (
        <UxTooltip text={CIRCULAR_REF_TOOLTIP}>
          <CircularRefIcon />
        </UxTooltip>
      )}
      <DiffTags
        readOnly={meta?.readOnly}
        writeOnly={meta?.writeOnly}
        deprecated={meta?.deprecated}
        layoutSide={layoutSide}
        isNodeChanged={false}
        isContentChanged={false}
      />
    </div>
  )
}
