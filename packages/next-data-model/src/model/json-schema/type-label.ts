import { TYPE_UNKNOWN } from "@apihub/next-data-model/model/abstract/constants"
import {
  JsonSchemaTreeNodeStoredValue,
  JsonSchemaTreeNodeValue,
} from "@apihub/next-data-model/model/json-schema/types/node-value"
import { JsonSchemaTreeNodeMeta } from "@apihub/next-data-model/model/json-schema/types/node-meta"
import { isJsonSchemaPrimitiveNodeValue } from "@apihub/next-data-model/shared/json-schema/guards/schema-value"

const NULLABLE_SUFFIX = " or null"
const SEPARATOR = " "

export function resolveJsonSchemaTypeLabel(
  value: JsonSchemaTreeNodeStoredValue | null | undefined,
  meta: JsonSchemaTreeNodeMeta | null | undefined,
): string {
  if (meta?.brokenRef) {
    return `$ref: ${meta.brokenRef}`
  }

  if (isJsonSchemaPrimitiveNodeValue(value)) {
    return ""
  }

  const typedValue = value as JsonSchemaTreeNodeValue | null | undefined
  const type = typedValue?.type ?? TYPE_UNKNOWN
  const format = typedValue && typeof typedValue === "object" && "format" in typedValue
    ? typedValue.format
    : undefined
  const nullableSuffix = typedValue?.nullable ? NULLABLE_SUFFIX : ""

  const parts: string[] = [String(type)]
  if (format) {
    parts.push(String(format))
  }
  if (nullableSuffix) {
    parts.push(nullableSuffix.trim())
  }

  return parts.join(SEPARATOR)
}
