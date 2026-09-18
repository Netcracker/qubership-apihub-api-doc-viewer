import { sortValidationRowsByType } from "../src/components/JsonSchemaNextViewer/utils/sort-validation-rows-by-type"
import { JsonSchemaValidationRow } from "../src/components/JsonSchemaNextViewer/utils/validation-rows"

function row(key: JsonSchemaValidationRow["key"]): JsonSchemaValidationRow {
  return { key, label: key, values: [] }
}

describe("sortValidationRowsByType", () => {
  it("orders rows by schema-type group (String -> Number -> Object -> Array), regardless of input order", () => {
    const shuffled = [
      row("itemsCount"),
      row("valueRange"),
      row("uniqueItems"),
      row("valuePattern"),
      row("propertiesCount"),
      row("valueLength"),
      row("valueMultipleOf"),
    ]

    expect(sortValidationRowsByType(shuffled).map((r) => r.key)).toEqual([
      "valueLength",
      "valuePattern",
      "valueRange",
      "valueMultipleOf",
      "propertiesCount",
      "uniqueItems",
      "itemsCount",
    ])
  })

  // Mirrors packages/samples/json-schema-diffs/type-changes/type-value-changes/001-string-to-number
  // and its reverse, 006-number-to-string: whichever type's rows only exist via a diff (base rows
  // for the other side, pushed after base rows before sorting) must not flip the group order.
  it("keeps String-before-Number group order regardless of which side's rows are diff-only", () => {
    const stringToNumber = [row("valueRange"), row("valueMultipleOf"), row("valueLength"), row("valuePattern")]
    const numberToString = [row("valueLength"), row("valuePattern"), row("valueRange"), row("valueMultipleOf")]

    expect(sortValidationRowsByType(stringToNumber).map((r) => r.key))
      .toEqual(["valueLength", "valuePattern", "valueRange", "valueMultipleOf"])
    expect(sortValidationRowsByType(numberToString).map((r) => r.key))
      .toEqual(["valueLength", "valuePattern", "valueRange", "valueMultipleOf"])
  })

  it("does not mutate the input array", () => {
    const input = [row("itemsCount"), row("valueLength")]
    const inputCopy = [...input]
    sortValidationRowsByType(input)
    expect(input).toEqual(inputCopy)
  })
})
