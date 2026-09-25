import { JsonSchemaValidationKeys } from "@netcracker/qubership-apihub-next-data-model/model/json-schema/types/validation-key"

export const JsonSchemaValidationRowKeys = {
  VALUE_LENGTH: "valueLength",
  VALUE_PATTERN: "valuePattern",
  VALUE_RANGE: "valueRange",
  VALUE_MULTIPLE_OF: "valueMultipleOf",
  PROPERTIES_COUNT: "propertiesCount",
  ITEMS_COUNT: "itemsCount",
  UNIQUE_ITEMS: JsonSchemaValidationKeys.UNIQUE_ITEMS,
} as const

export type JsonSchemaValidationRowKey = typeof JsonSchemaValidationRowKeys[keyof typeof JsonSchemaValidationRowKeys]
