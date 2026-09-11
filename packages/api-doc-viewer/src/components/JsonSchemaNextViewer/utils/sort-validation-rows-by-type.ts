import { JsonSchemaValidationRowKeys } from "@netcracker/qubership-apihub-next-data-model/model/json-schema/tree-with-diffs/validation-row-source-keys"
import { JsonSchemaValidationRow } from "./validation-rows"
import { JsonSchemaValidationRowKey } from "./validation-row-keys"

/**
 * Canonical row order, grouped by the schema type each row belongs to - mirrors legacy's
 * `Validations.tsx` section order (String -> Number -> Object -> Array; `valueRange`/
 * `valueMultipleOf` apply to both `number` and `integer`, matching legacy's `isNumberValue`).
 * Rows are sorted by this order rather than relying on push order, because a row whose value
 * only exists via a diff (the type it belonged to was removed, or not yet added) would otherwise
 * land wherever it happened to be appended - reversing group order between e.g. `string-to-number`
 * and `number-to-string` instead of keeping it type-group-stable.
 */
const VALIDATION_ROW_ORDER: readonly JsonSchemaValidationRowKey[] = [
  JsonSchemaValidationRowKeys.VALUE_LENGTH,
  JsonSchemaValidationRowKeys.VALUE_PATTERN,
  JsonSchemaValidationRowKeys.VALUE_RANGE,
  JsonSchemaValidationRowKeys.VALUE_MULTIPLE_OF,
  JsonSchemaValidationRowKeys.PROPERTIES_COUNT,
  JsonSchemaValidationRowKeys.UNIQUE_ITEMS,
  JsonSchemaValidationRowKeys.ITEMS_COUNT,
]

export function sortValidationRowsByType(rows: JsonSchemaValidationRow[]): JsonSchemaValidationRow[] {
  return [...rows].sort(
    (a, b) => VALIDATION_ROW_ORDER.indexOf(a.key as JsonSchemaValidationRowKey)
      - VALIDATION_ROW_ORDER.indexOf(b.key as JsonSchemaValidationRowKey),
  )
}
