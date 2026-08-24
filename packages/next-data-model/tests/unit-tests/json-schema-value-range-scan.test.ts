import { DIFF_META_KEY, DIFFS_AGGREGATED_META_KEY, apiDiff } from "@netcracker/qubership-apihub-api-diff"
import { JsonSchemaTreeWithDiffsBuilder } from "../../src/building-service/json-schema/tree-with-diffs/builder"
import { JsonSchemaValidationRowKeys } from "../../src/model/json-schema/tree-with-diffs/validation-row-source-keys"
import {
  takeJsonSchemaValidationRowValueDiffs,
} from "../../src/model/json-schema/tree-with-diffs/property-row-diffs"
import fs from "fs"
import path from "path"
import yaml from "yaml"

const DIFF_META_KEYS = {
  diffsMetaKey: DIFF_META_KEY,
  aggregatedDiffsMetaKey: DIFFS_AGGREGATED_META_KEY,
}

function mergeSchemas(beforeSchema: object, afterSchema: object): object {
  const beforeDocument = {
    openapi: "3.0.0",
    info: { title: "Test", version: "1.0.0" },
    paths: {},
    components: { schemas: { __Substitution__: beforeSchema } },
  }
  const afterDocument = {
    openapi: "3.0.0",
    info: { title: "Test", version: "1.0.0" },
    paths: {},
    components: { schemas: { __Substitution__: afterSchema } },
  }
  return apiDiff(beforeDocument, afterDocument, {
    beforeSource: beforeDocument,
    afterSource: afterDocument,
    metaKey: DIFF_META_KEY,
  }).merged.components.schemas.__Substitution__ as object
}

describe("value range exclusive flag scan", () => {
  it("never treats boolean exclusive flags as standalone chip or row diffs", () => {
    const baseDir = path.resolve(
      __dirname,
      "../../../samples/json-schema-diffs/type-changes/number-validation/value-range",
    )
    const caseIds = fs.readdirSync(baseDir).filter((name) => fs.statSync(path.join(baseDir, name)).isDirectory())
    const rowKey = JsonSchemaValidationRowKeys.VALUE_RANGE

    for (const caseId of caseIds.sort()) {
      const beforeSchema = yaml.parse(fs.readFileSync(path.join(baseDir, caseId, "before.yaml"), "utf8"))
      const afterSchema = yaml.parse(fs.readFileSync(path.join(baseDir, caseId, "after.yaml"), "utf8"))
      const merged = mergeSchemas(beforeSchema, afterSchema)
      const tree = new JsonSchemaTreeWithDiffsBuilder({
        source: merged,
        diffsMetaKeys: DIFF_META_KEYS,
      }).build()

      const valueDiffs = takeJsonSchemaValidationRowValueDiffs(tree.root!, rowKey)
      const valueDiffKeys = Object.keys(valueDiffs ?? {})

      expect(valueDiffKeys.some((key) => key.startsWith("exclusive"))).toBe(false)
    }
  })
})
