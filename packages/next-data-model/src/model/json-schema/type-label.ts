import { TYPE_UNKNOWN } from "@apihub/next-data-model/model/abstract/constants"
import { JsonSchemaTreeNodeValue } from "@apihub/next-data-model/model/json-schema/types/node-value"
import { JsonSchemaTreeNodeMeta } from "@apihub/next-data-model/model/json-schema/types/node-meta"

const NULLABLE_SUFFIX = " or null"
const SEPARATOR = " "

export function resolveJsonSchemaTypeLabel(
  value: JsonSchemaTreeNodeValue | null | undefined,
  meta: JsonSchemaTreeNodeMeta | null | undefined,
): string {
  if (meta?.brokenRef) {
    return `$ref: ${meta.brokenRef}`
  }

  const type = value?.type ?? TYPE_UNKNOWN
  const format = value && "format" in value ? value.format : undefined
  const nullableSuffix = value?.nullable ? NULLABLE_SUFFIX : ""

  const parts: string[] = [String(type)]
  if (format) {
    parts.push(String(format))
  }
  if (nullableSuffix) {
    parts.push(nullableSuffix.trim())
  }

  return parts.join(SEPARATOR)
}
