import {
  resolveListValidationValues,
  resolveValidationRows,
} from "../src/components/JsonSchemaNextViewer/utils/validation-rows"
import { JsonSchemaValidationRowKeys } from "../src/components/JsonSchemaNextViewer/utils/validation-row-keys"

describe("resolveListValidationValues", () => {
  it("returns one chip string per list item", () => {
    expect(resolveListValidationValues([["a"], ["a", "b"]])).toEqual(['["a"]', '["a","b"]'])
  })
})

describe("resolveValidationRows", () => {
  it("splits bound range constraints into separate chip values", () => {
    const rows = resolveValidationRows({
      type: "array",
      minItems: 1,
      maxItems: 10,
    })

    const itemsCount = rows.find((row) => row.key === JsonSchemaValidationRowKeys.ITEMS_COUNT)
    expect(itemsCount?.values).toEqual([">= 1", "<= 10"])
  })
})
