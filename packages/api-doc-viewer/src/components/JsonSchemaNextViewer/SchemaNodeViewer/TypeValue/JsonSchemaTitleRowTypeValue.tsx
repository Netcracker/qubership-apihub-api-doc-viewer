import { resolveJsonSchemaTypeLabel } from "@netcracker/qubership-apihub-next-data-model/model/json-schema/type-label"
import { JsonSchemaTreeNodeMeta } from "@netcracker/qubership-apihub-next-data-model/model/json-schema/types/node-meta"
import { JsonSchemaTreeNodeValue } from "@netcracker/qubership-apihub-next-data-model/model/json-schema/types/node-value"
import { FC, memo } from "react"
import { JsonSchemaTypeValueText } from "./JsonSchemaTypeValueText"

export type JsonSchemaTitleRowTypeValueProps = {
  value: JsonSchemaTreeNodeValue | null | undefined
  meta: JsonSchemaTreeNodeMeta | null | undefined
}

/**
 * Title-row type-value orchestrator, plain (no diffs). Never hides on primitiveness - the
 * title row always shows the type value; visibility for special cases (e.g. boolean
 * `additionalProperties`) is decided by the caller's `showTypeLabel` gate.
 */
export const JsonSchemaTitleRowTypeValue: FC<JsonSchemaTitleRowTypeValueProps> = memo<JsonSchemaTitleRowTypeValueProps>((props) => {
  const { value, meta } = props
  return <JsonSchemaTypeValueText text={resolveJsonSchemaTypeLabel(value, meta)} />
})
