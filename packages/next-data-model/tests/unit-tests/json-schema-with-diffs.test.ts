import { DIFF_META_KEY, DIFFS_AGGREGATED_META_KEY, DiffAction, apiDiff } from "@netcracker/qubership-apihub-api-diff"
import { HighlightVariant, NODE_LEVEL_DIFF_KEY, NodeDiffsSeverityPlacemennt } from "../../src/model/abstract/tree-with-diffs/tree-node.interface"
import { JsonSchemaSpecWithDiffsTransformer } from "../../src/building-service/json-schema/shared/json-schema-spec-with-diffs-transformer"
import { JsonSchemaTreeWithDiffsBuilder } from "../../src/building-service/json-schema/tree-with-diffs/builder"
import { JsonSchemaTreeNodeKinds } from "../../src/model/json-schema/types/node-kind"
import { JsonSchemaValidationRowKeys } from "../../src/model/json-schema/tree-with-diffs/validation-row-source-keys"
import { formatJsonSchemaValidationRowChipDisplay } from "../../src/model/json-schema/tree-with-diffs/validation-row-chip-display"
import { resolveValueRangeLabel } from "../../src/model/json-schema/value-range"
import {
  resolveJsonSchemaValidationRowSideEntries,
  takeJsonSchemaValidationRowValueDiffs,
  takeJsonSchemaValueRangeCrawlDiffs,
} from "../../src/model/json-schema/tree-with-diffs/property-row-diffs"
import { ORIGIN_LAYOUT_SIDE, CHANGED_LAYOUT_SIDE } from "../../src/model/abstract/layout-side"
import { isJsonSchemaTreeNodeWithDiffs } from "../../src/shared/json-schema/guards/tree-node"
import { createBuildingServiceLogger } from "../../src/loggers"
import { simplifyConsole } from "../helpers/simplify-console"
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
    components: {
      schemas: {
        __Substitution__: beforeSchema,
      },
    },
  }
  const afterDocument = {
    openapi: "3.0.0",
    info: { title: "Test", version: "1.0.0" },
    paths: {},
    components: {
      schemas: {
        __Substitution__: afterSchema,
      },
    },
  }

  return apiDiff(beforeDocument, afterDocument, {
    beforeSource: beforeDocument,
    afterSource: afterDocument,
    metaKey: DIFF_META_KEY,
  }).merged.components.schemas.__Substitution__ as object
}

describe("JsonSchema with-diffs stack", () => {
  simplifyConsole()

  const beforeSchema = {
    type: "object",
    description: "Simple object with five primitive properties",
    properties: {
      prop1: { type: "string", description: "First property" },
      prop2: { type: "string", description: "Second property" },
      prop3: { type: "integer", description: "Third property" },
    },
  }

  const afterSchema = {
    type: "object",
    description: "Simple object with five primitive properties",
    properties: {
      prop1: { type: "string", description: "First property" },
      prop2: { type: "string", description: "Second property" },
      prop6: { type: "string", description: "Sixth property (added)" },
    },
  }

  it("rolls up diff metadata on the merged schema", () => {
    const merged = mergeSchemas(beforeSchema, afterSchema)
    const transformer = new JsonSchemaSpecWithDiffsTransformer(createBuildingServiceLogger(), DIFF_META_KEYS)
    const prepared = transformer.transformSourceToSchemaWithDiffs(merged)

    expect(prepared).toBe(merged)
    expect(Reflect.get(merged, DIFFS_AGGREGATED_META_KEY)).toBeDefined()
  })

  it("propagates property add/remove diffs from properties bag to descendantDiffs", () => {
    const merged = mergeSchemas(beforeSchema, afterSchema)
    const tree = new JsonSchemaTreeWithDiffsBuilder({
      source: merged,
      diffsMetaKeys: DIFF_META_KEYS,
    }).build()

    const root = tree.root
    expect(root).toBeDefined()
    expect(isJsonSchemaTreeNodeWithDiffs(root!)).toBe(true)
    expect(Object.keys(root!.descendantDiffs).sort()).toEqual(["prop3", "prop6"])

    const prop6Node = root!.childrenNodes().find((node) => node.key === "prop6")
    expect(prop6Node).toBeDefined()
    expect(isJsonSchemaTreeNodeWithDiffs(prop6Node!)).toBe(true)
    expect(prop6Node!.kind).toBe(JsonSchemaTreeNodeKinds.PROPERTY)
    expect(prop6Node!.diffs[NODE_LEVEL_DIFF_KEY]).toBeDefined()
  })

  it("aggregates enum list diffs from schema-level and per-item records", () => {
    const wholeFieldCases = [
      {
        caseId: "001-enum-two-values-added",
        expectedRowAction: DiffAction.add,
        expectedRowBackgroundSide: "after" as const,
        expectedRowBackground: HighlightVariant.Green,
      },
      {
        caseId: "002-enum-two-values-removed",
        expectedRowAction: DiffAction.remove,
        expectedRowBackgroundSide: "before" as const,
        expectedRowBackground: HighlightVariant.Red,
      },
    ]

    for (const testCase of wholeFieldCases) {
      const fixtureDir = path.resolve(
        __dirname,
        "../../../samples/json-schema-diffs/type-changes/string-validation/enum",
        testCase.caseId,
      )
      const beforeSchema = yaml.parse(fs.readFileSync(path.join(fixtureDir, "before.yaml"), "utf8"))
      const afterSchema = yaml.parse(fs.readFileSync(path.join(fixtureDir, "after.yaml"), "utf8"))
      const merged = mergeSchemas(beforeSchema, afterSchema)
      const tree = new JsonSchemaTreeWithDiffsBuilder({
        source: merged,
        diffsMetaKeys: DIFF_META_KEYS,
      }).build()

      const rootDiffs = tree.root!.diffs as Record<string, {
        data?: { action?: string }
        styles?: { before?: { backgroundColor?: string }, after?: { backgroundColor?: string } }
      }>

      expect(rootDiffs.enumDiff?.data?.action).toBe(testCase.expectedRowAction)
      expect(rootDiffs.enumValueDiffs).toBeUndefined()
      expect(rootDiffs.enumRowColorizingDiff?.data?.action).toBe(testCase.expectedRowAction)
      expect(
        rootDiffs.enumRowColorizingDiff?.styles?.[testCase.expectedRowBackgroundSide]?.backgroundColor,
      ).toBe(testCase.expectedRowBackground)
      expect(tree.root!.diffsSeverities?.[NodeDiffsSeverityPlacemennt.AdditionalInfoRow]?.type).toBeDefined()
    }

    const partialItemCases = [
      {
        caseId: "003-enum-value-appended",
        expectedKeys: ["2"],
        expectedActions: [DiffAction.add],
        expectedRowAction: DiffAction.replace,
        expectedRowBackgroundSide: "before" as const,
        expectedRowBackground: HighlightVariant.Yellow,
      },
      {
        caseId: "004-enum-value-removed",
        expectedKeys: ["2"],
        expectedActions: [DiffAction.remove],
        expectedRowAction: DiffAction.replace,
        expectedRowBackgroundSide: "before" as const,
        expectedRowBackground: HighlightVariant.Yellow,
      },
    ]

    for (const testCase of partialItemCases) {
      const fixtureDir = path.resolve(
        __dirname,
        "../../../samples/json-schema-diffs/type-changes/string-validation/enum",
        testCase.caseId,
      )
      const beforeSchema = yaml.parse(fs.readFileSync(path.join(fixtureDir, "before.yaml"), "utf8"))
      const afterSchema = yaml.parse(fs.readFileSync(path.join(fixtureDir, "after.yaml"), "utf8"))
      const merged = mergeSchemas(beforeSchema, afterSchema)
      const tree = new JsonSchemaTreeWithDiffsBuilder({
        source: merged,
        diffsMetaKeys: DIFF_META_KEYS,
      }).build()

      const rootDiffs = tree.root!.diffs as Record<string, {
        data?: { action?: string }
        styles?: { before?: { backgroundColor?: string }, after?: { backgroundColor?: string } }
      }>

      expect(rootDiffs.enumDiff).toBeUndefined()
      expect(Object.keys(rootDiffs.enumValueDiffs ?? {}).sort()).toEqual(testCase.expectedKeys.sort())
      for (const [index, key] of testCase.expectedKeys.entries()) {
        expect(rootDiffs.enumValueDiffs?.[key]?.data?.action).toBe(testCase.expectedActions[index])
      }
      expect(rootDiffs.enumRowColorizingDiff?.data?.action).toBe(testCase.expectedRowAction)
      expect(
        rootDiffs.enumRowColorizingDiff?.styles?.[testCase.expectedRowBackgroundSide]?.backgroundColor,
      ).toBe(testCase.expectedRowBackground)
      expect(tree.root!.diffsSeverities?.[NodeDiffsSeverityPlacemennt.AdditionalInfoRow]?.type).toBeDefined()
    }
  })

  it("aggregates property metadata and constraint diffs for case 1.4", () => {
    const fixtureDir = path.resolve(
      __dirname,
      "../../../samples/json-schema-diffs/hiding-unchanged-rows/simple-object/1.4-property-metadata-and-constraints-changed",
    )
    const beforeSchema = yaml.parse(fs.readFileSync(path.join(fixtureDir, "before.yaml"), "utf8"))
    const afterSchema = yaml.parse(fs.readFileSync(path.join(fixtureDir, "after.yaml"), "utf8"))
    const merged = mergeSchemas(beforeSchema, afterSchema)
    const tree = new JsonSchemaTreeWithDiffsBuilder({
      source: merged,
      diffsMetaKeys: DIFF_META_KEYS,
    }).build()

    const prop2 = tree.root!.childrenNodes().find((node) => node.key === "prop2")
    const prop3 = tree.root!.childrenNodes().find((node) => node.key === "prop3")
    const prop4 = tree.root!.childrenNodes().find((node) => node.key === "prop4")

    expect(prop2).toBeDefined()
    expect(prop3).toBeDefined()
    expect(prop4).toBeDefined()

    const prop2Diffs = prop2!.diffs as Record<string, { data?: { action?: string }, styles?: { before?: { backgroundColor?: string } } }>
    expect(prop2Diffs.enumDiff).toBeUndefined()
    expect(prop2Diffs.enumValueDiffs?.["3"]?.data?.action).toBe(DiffAction.add)
    expect(prop2Diffs.enumRowColorizingDiff?.data?.action).toBe(DiffAction.replace)
    expect(prop2Diffs.enumRowColorizingDiff?.styles?.before?.backgroundColor).toBe(HighlightVariant.Yellow)
    expect(prop2!.diffsSeverities?.[NodeDiffsSeverityPlacemennt.AdditionalInfoRow]?.type).toBeDefined()

    const prop3Diffs = prop3!.diffs as Record<string, {
      data?: { action?: string }
      styles?: { after?: { backgroundColor?: string } }
      validationRowDiffs?: Record<string, { data?: { action?: string } }>
      validationRowValueDiffs?: Record<string, Record<string, { data?: { action?: string } }>>
    }>
    expect(prop3Diffs.validationRowDiffs?.[JsonSchemaValidationRowKeys.VALUE_RANGE]?.data?.action)
      .toBe(DiffAction.add)
    expect(prop3Diffs.validationRowValueDiffs?.[JsonSchemaValidationRowKeys.VALUE_RANGE]).toBeUndefined()
    expect(prop3Diffs.validationRowColorizingDiffs?.[JsonSchemaValidationRowKeys.VALUE_RANGE]?.data?.action)
      .toBe(DiffAction.add)
    expect(prop3Diffs.validationRowColorizingDiffs?.[JsonSchemaValidationRowKeys.VALUE_RANGE]?.styles?.after?.backgroundColor)
      .toBe(HighlightVariant.Green)

    const prop4Diffs = prop4!.diffs as Record<string, { data?: { action?: string }, styles?: { before?: { backgroundColor?: string } } }>
    expect(prop4Diffs.default?.data?.action).toBe(DiffAction.remove)
    expect(prop4Diffs.defaultRowColorizingDiff?.data?.action).toBe(DiffAction.remove)
    expect(prop4Diffs.defaultRowColorizingDiff?.styles?.before?.backgroundColor).toBe(HighlightVariant.Red)
  })

  it("formats validation-row chip display in diff side entries", () => {
    expect(formatJsonSchemaValidationRowChipDisplay(
      JsonSchemaValidationRowKeys.VALUE_LENGTH,
      "minLength",
      1,
    )).toBe(">= 1")
    expect(formatJsonSchemaValidationRowChipDisplay(
      JsonSchemaValidationRowKeys.VALUE_LENGTH,
      "maxLength",
      10,
    )).toBe("<= 10")

    const fixtureDir = path.resolve(
      __dirname,
      "../../../samples/json-schema-diffs/type-changes/string-validation/value-length/003-min-length-replaced",
    )
    const beforeSchema = yaml.parse(fs.readFileSync(path.join(fixtureDir, "before.yaml"), "utf8"))
    const afterSchema = yaml.parse(fs.readFileSync(path.join(fixtureDir, "after.yaml"), "utf8"))
    const merged = mergeSchemas(beforeSchema, afterSchema)
    const tree = new JsonSchemaTreeWithDiffsBuilder({
      source: merged,
      diffsMetaKeys: DIFF_META_KEYS,
    }).build()

    const rootDiffs = tree.root!.diffs as {
      validationRowValueDiffs?: Record<string, Record<string, unknown>>
    }
    const valueLengthDiffs = rootDiffs.validationRowValueDiffs?.[JsonSchemaValidationRowKeys.VALUE_LENGTH]
    expect(valueLengthDiffs?.minLength).toBeDefined()

    const mergedChipValues = [">= 3"]
    const originEntries = resolveJsonSchemaValidationRowSideEntries(
      JsonSchemaValidationRowKeys.VALUE_LENGTH,
      mergedChipValues,
      undefined,
      valueLengthDiffs as never,
      ORIGIN_LAYOUT_SIDE,
    )
    const changedEntries = resolveJsonSchemaValidationRowSideEntries(
      JsonSchemaValidationRowKeys.VALUE_LENGTH,
      mergedChipValues,
      undefined,
      valueLengthDiffs as never,
      CHANGED_LAYOUT_SIDE,
    )

    expect(originEntries.map((entry) => entry.text)).toEqual([">= 1"])
    expect(changedEntries.map((entry) => entry.text)).toEqual([">= 3"])
    expect(originEntries[0]?.valueDiffKey).toBe("minLength")
    expect(changedEntries[0]?.valueDiffKey).toBe("minLength")

    const maxLengthReplacedDir = path.resolve(
      __dirname,
      "../../../samples/json-schema-diffs/type-changes/string-validation/value-length/006-max-length-replaced",
    )
    const maxBefore = yaml.parse(fs.readFileSync(path.join(maxLengthReplacedDir, "before.yaml"), "utf8"))
    const maxAfter = yaml.parse(fs.readFileSync(path.join(maxLengthReplacedDir, "after.yaml"), "utf8"))
    const maxMerged = mergeSchemas(maxBefore, maxAfter)
    const maxTree = new JsonSchemaTreeWithDiffsBuilder({
      source: maxMerged,
      diffsMetaKeys: DIFF_META_KEYS,
    }).build()
    const maxRootDiffs = maxTree.root!.diffs as {
      validationRowValueDiffs?: Record<string, Record<string, unknown>>
    }
    const maxLengthDiffs = maxRootDiffs.validationRowValueDiffs?.[JsonSchemaValidationRowKeys.VALUE_LENGTH]
    expect(maxLengthDiffs?.maxLength).toBeDefined()

    const maxMergedChipValues = ["<= 256"]
    const maxOriginEntries = resolveJsonSchemaValidationRowSideEntries(
      JsonSchemaValidationRowKeys.VALUE_LENGTH,
      maxMergedChipValues,
      undefined,
      maxLengthDiffs as never,
      ORIGIN_LAYOUT_SIDE,
    )
    const maxChangedEntries = resolveJsonSchemaValidationRowSideEntries(
      JsonSchemaValidationRowKeys.VALUE_LENGTH,
      maxMergedChipValues,
      undefined,
      maxLengthDiffs as never,
      CHANGED_LAYOUT_SIDE,
    )

    expect(maxOriginEntries.map((entry) => entry.text)).toEqual(["<= 128"])
    expect(maxChangedEntries.map((entry) => entry.text)).toEqual(["<= 256"])
    expect(maxOriginEntries[0]?.valueDiffKey).toBe("maxLength")
    expect(maxChangedEntries[0]?.valueDiffKey).toBe("maxLength")
  })

  const VALUE_RANGE_SIDE_CASES: Array<{
    caseId: string
    expectRowAction?: typeof DiffAction.add | typeof DiffAction.remove
    expectValueDiffKeys?: string[]
    expectColorizing?: typeof DiffAction.add | typeof DiffAction.remove | typeof DiffAction.replace
    expectOriginTexts: string[]
    expectChangedTexts: string[]
  }> = [
    { caseId: "001-minimum-added", expectRowAction: DiffAction.add, expectColorizing: DiffAction.add, expectOriginTexts: [], expectChangedTexts: [">= 1"] },
    { caseId: "002-minimum-added-with-exclusive-minimum-true", expectRowAction: DiffAction.add, expectColorizing: DiffAction.add, expectOriginTexts: [], expectChangedTexts: ["> 1"] },
    { caseId: "003-exclusive-minimum-numeric-added", expectRowAction: DiffAction.add, expectColorizing: DiffAction.add, expectOriginTexts: [], expectChangedTexts: ["> 2"] },
    { caseId: "004-minimum-removed", expectRowAction: DiffAction.remove, expectColorizing: DiffAction.remove, expectOriginTexts: [">= 1"], expectChangedTexts: [] },
    { caseId: "005-minimum-with-exclusive-minimum-true-removed", expectRowAction: DiffAction.remove, expectColorizing: DiffAction.remove, expectOriginTexts: ["> 1"], expectChangedTexts: [] },
    { caseId: "006-exclusive-minimum-numeric-removed", expectRowAction: DiffAction.remove, expectColorizing: DiffAction.remove, expectOriginTexts: ["> 2"], expectChangedTexts: [] },
    { caseId: "007-exclusive-minimum-false-to-true", expectColorizing: DiffAction.replace, expectValueDiffKeys: ["0"], expectOriginTexts: [">= 1"], expectChangedTexts: ["> 1"] },
    { caseId: "008-exclusive-minimum-true-to-false", expectColorizing: DiffAction.replace, expectValueDiffKeys: ["0"], expectOriginTexts: ["> 1"], expectChangedTexts: [">= 1"] },
    { caseId: "009-maximum-added", expectRowAction: DiffAction.add, expectColorizing: DiffAction.add, expectOriginTexts: [], expectChangedTexts: ["<= 10"] },
    { caseId: "010-maximum-added-with-exclusive-maximum-true", expectRowAction: DiffAction.add, expectColorizing: DiffAction.add, expectOriginTexts: [], expectChangedTexts: ["< 10"] },
    { caseId: "011-exclusive-maximum-numeric-added", expectRowAction: DiffAction.add, expectColorizing: DiffAction.add, expectOriginTexts: [], expectChangedTexts: ["< 10"] },
    { caseId: "012-maximum-removed", expectRowAction: DiffAction.remove, expectColorizing: DiffAction.remove, expectOriginTexts: ["<= 10"], expectChangedTexts: [] },
    { caseId: "013-maximum-with-exclusive-maximum-true-removed", expectRowAction: DiffAction.remove, expectColorizing: DiffAction.remove, expectOriginTexts: ["< 10"], expectChangedTexts: [] },
    { caseId: "014-exclusive-maximum-numeric-removed", expectRowAction: DiffAction.remove, expectColorizing: DiffAction.remove, expectOriginTexts: ["< 10"], expectChangedTexts: [] },
    { caseId: "015-exclusive-maximum-false-to-true", expectColorizing: DiffAction.replace, expectValueDiffKeys: ["1"], expectOriginTexts: ["<= 10"], expectChangedTexts: ["< 10"] },
    { caseId: "016-exclusive-maximum-true-to-false", expectColorizing: DiffAction.replace, expectValueDiffKeys: ["1"], expectOriginTexts: ["< 10"], expectChangedTexts: ["<= 10"] },
    { caseId: "017-minimum-maximum-added", expectRowAction: DiffAction.add, expectColorizing: DiffAction.add, expectOriginTexts: [], expectChangedTexts: [">= 1", "<= 10"] },
    { caseId: "018-minimum-inclusive-maximum-exclusive-added", expectRowAction: DiffAction.add, expectColorizing: DiffAction.add, expectOriginTexts: [], expectChangedTexts: [">= 1", "< 10"] },
    { caseId: "019-minimum-exclusive-maximum-inclusive-added", expectRowAction: DiffAction.add, expectColorizing: DiffAction.add, expectOriginTexts: [], expectChangedTexts: ["> 1", "<= 10"] },
    { caseId: "020-minimum-maximum-both-exclusive-added", expectRowAction: DiffAction.add, expectColorizing: DiffAction.add, expectOriginTexts: [], expectChangedTexts: ["> 1", "< 10"] },
    { caseId: "021-minimum-maximum-removed", expectRowAction: DiffAction.remove, expectColorizing: DiffAction.remove, expectOriginTexts: [">= 1", "<= 10"], expectChangedTexts: [] },
    { caseId: "022-minimum-inclusive-maximum-exclusive-removed", expectRowAction: DiffAction.remove, expectColorizing: DiffAction.remove, expectOriginTexts: [">= 1", "< 10"], expectChangedTexts: [] },
    { caseId: "023-minimum-exclusive-maximum-inclusive-removed", expectRowAction: DiffAction.remove, expectColorizing: DiffAction.remove, expectOriginTexts: ["> 1", "<= 10"], expectChangedTexts: [] },
    { caseId: "024-minimum-maximum-both-exclusive-removed", expectRowAction: DiffAction.remove, expectColorizing: DiffAction.remove, expectOriginTexts: ["> 1", "< 10"], expectChangedTexts: [] },
    { caseId: "025-min-ex-max-in-min-ex-to-inclusive", expectColorizing: DiffAction.replace, expectValueDiffKeys: ["0"], expectOriginTexts: ["> 1", "<= 10"], expectChangedTexts: [">= 1", "<= 10"] },
    { caseId: "026-min-ex-max-in-max-in-to-exclusive", expectColorizing: DiffAction.replace, expectValueDiffKeys: ["1"], expectOriginTexts: ["> 1", "<= 10"], expectChangedTexts: ["> 1", "< 10"] },
    { caseId: "027-min-in-max-ex-min-in-to-exclusive", expectColorizing: DiffAction.replace, expectValueDiffKeys: ["0"], expectOriginTexts: [">= 1", "< 10"], expectChangedTexts: ["> 1", "< 10"] },
    { caseId: "028-min-in-max-ex-max-ex-to-inclusive", expectColorizing: DiffAction.replace, expectValueDiffKeys: ["1"], expectOriginTexts: [">= 1", "< 10"], expectChangedTexts: [">= 1", "<= 10"] },
    { caseId: "029-min-in-max-in-min-in-to-exclusive", expectColorizing: DiffAction.replace, expectValueDiffKeys: ["0"], expectOriginTexts: [">= 1", "<= 10"], expectChangedTexts: ["> 1", "<= 10"] },
    { caseId: "030-min-in-max-in-max-in-to-exclusive", expectColorizing: DiffAction.replace, expectValueDiffKeys: ["1"], expectOriginTexts: [">= 1", "<= 10"], expectChangedTexts: [">= 1", "< 10"] },
    { caseId: "031-min-in-max-in-both-to-exclusive", expectColorizing: DiffAction.replace, expectValueDiffKeys: ["0", "1"], expectOriginTexts: [">= 1", "<= 10"], expectChangedTexts: ["> 1", "< 10"] },
    { caseId: "032-min-ex-max-ex-min-ex-to-inclusive", expectColorizing: DiffAction.replace, expectValueDiffKeys: ["0"], expectOriginTexts: ["> 1", "< 10"], expectChangedTexts: [">= 1", "< 10"] },
    { caseId: "033-min-ex-max-ex-max-ex-to-inclusive", expectColorizing: DiffAction.replace, expectValueDiffKeys: ["1"], expectOriginTexts: ["> 1", "< 10"], expectChangedTexts: ["> 1", "<= 10"] },
    { caseId: "034-min-ex-max-ex-both-to-inclusive", expectColorizing: DiffAction.replace, expectValueDiffKeys: ["0", "1"], expectOriginTexts: ["> 1", "< 10"], expectChangedTexts: [">= 1", "<= 10"] },
  ]

  const VALUE_RANGE_BOUND_EXTENSION_CASES: Array<{
    caseId: string
    expectRowAction?: typeof DiffAction.add | typeof DiffAction.remove
    expectValueDiffKeys?: string[]
    expectColorizing?: typeof DiffAction.add | typeof DiffAction.remove | typeof DiffAction.replace
    expectOriginTexts: string[]
    expectChangedTexts: string[]
  }> = [
    { caseId: "042-min-in-add-max-in", expectColorizing: DiffAction.replace, expectValueDiffKeys: ["1"], expectOriginTexts: [">= 1"], expectChangedTexts: [">= 1", "<= 10"] },
    { caseId: "043-min-in-add-max-ex", expectRowAction: DiffAction.add, expectColorizing: DiffAction.add, expectOriginTexts: [">= 1"], expectChangedTexts: [">= 1", "< 10"] },
    { caseId: "044-min-ex-add-max-in", expectColorizing: DiffAction.replace, expectValueDiffKeys: ["1"], expectOriginTexts: ["> 1"], expectChangedTexts: ["> 1", "<= 10"] },
    { caseId: "045-min-ex-add-max-ex", expectRowAction: DiffAction.add, expectColorizing: DiffAction.add, expectOriginTexts: ["> 1"], expectChangedTexts: ["> 1", "< 10"] },
    { caseId: "046-max-in-add-min-in", expectColorizing: DiffAction.replace, expectValueDiffKeys: ["0"], expectOriginTexts: ["<= 10"], expectChangedTexts: [">= 1", "<= 10"] },
    { caseId: "047-max-in-add-min-ex", expectRowAction: DiffAction.add, expectColorizing: DiffAction.add, expectOriginTexts: ["<= 10"], expectChangedTexts: ["> 1", "<= 10"] },
    { caseId: "048-max-ex-add-min-in", expectColorizing: DiffAction.replace, expectValueDiffKeys: ["0"], expectOriginTexts: ["< 10"], expectChangedTexts: [">= 1", "< 10"] },
    { caseId: "049-max-ex-add-min-ex", expectRowAction: DiffAction.add, expectColorizing: DiffAction.add, expectOriginTexts: ["< 10"], expectChangedTexts: ["> 1", "< 10"] },
    { caseId: "050-min-in-max-in-remove-minimum", expectColorizing: DiffAction.replace, expectValueDiffKeys: ["0"], expectOriginTexts: [">= 1", "<= 10"], expectChangedTexts: ["<= 10"] },
    { caseId: "051-min-in-max-in-remove-maximum", expectColorizing: DiffAction.replace, expectValueDiffKeys: ["1"], expectOriginTexts: [">= 1", "<= 10"], expectChangedTexts: [">= 1"] },
    { caseId: "052-min-ex-max-ex-remove-minimum", expectRowAction: DiffAction.remove, expectColorizing: DiffAction.remove, expectOriginTexts: ["> 1", "< 10"], expectChangedTexts: ["< 10"] },
    { caseId: "053-min-ex-max-ex-remove-maximum", expectRowAction: DiffAction.remove, expectColorizing: DiffAction.remove, expectOriginTexts: ["> 1", "< 10"], expectChangedTexts: ["> 1"] },
    { caseId: "054-min-in-max-ex-remove-minimum", expectColorizing: DiffAction.replace, expectValueDiffKeys: ["0"], expectOriginTexts: [">= 1", "< 10"], expectChangedTexts: ["< 10"] },
    { caseId: "055-min-in-max-ex-remove-maximum", expectRowAction: DiffAction.remove, expectColorizing: DiffAction.remove, expectOriginTexts: [">= 1", "< 10"], expectChangedTexts: [">= 1"] },
    { caseId: "056-min-ex-max-in-remove-minimum", expectRowAction: DiffAction.remove, expectColorizing: DiffAction.remove, expectOriginTexts: ["> 1", "<= 10"], expectChangedTexts: ["<= 10"] },
    { caseId: "057-min-ex-max-in-remove-maximum", expectColorizing: DiffAction.replace, expectValueDiffKeys: ["1"], expectOriginTexts: ["> 1", "<= 10"], expectChangedTexts: ["> 1"] },
  ]

  it.each([...VALUE_RANGE_SIDE_CASES, ...VALUE_RANGE_BOUND_EXTENSION_CASES])("value-range side entries for $caseId", ({
    caseId,
    expectRowAction,
    expectValueDiffKeys = [],
    expectColorizing,
    expectOriginTexts,
    expectChangedTexts,
  }) => {
    const fixtureDir = path.resolve(
      __dirname,
      "../../../samples/json-schema-diffs/type-changes/number-validation/value-range",
      caseId,
    )
    const beforeSchema = yaml.parse(fs.readFileSync(path.join(fixtureDir, "before.yaml"), "utf8"))
    const afterSchema = yaml.parse(fs.readFileSync(path.join(fixtureDir, "after.yaml"), "utf8"))
    const merged = mergeSchemas(beforeSchema, afterSchema)
    const tree = new JsonSchemaTreeWithDiffsBuilder({
      source: merged,
      diffsMetaKeys: DIFF_META_KEYS,
    }).build()

    const rowKey = JsonSchemaValidationRowKeys.VALUE_RANGE
    const rootDiffs = tree.root!.diffs as {
      validationRowDiffs?: Record<string, { data?: { action?: string } }>
      validationRowValueDiffs?: Record<string, Record<string, unknown>>
      validationRowColorizingDiffs?: Record<string, { data?: { action?: string } }>
    }

    expect(rootDiffs.validationRowDiffs?.[rowKey]?.data?.action).toBe(expectRowAction)
    expect(Object.keys(rootDiffs.validationRowValueDiffs?.[rowKey] ?? {}).sort())
      .toEqual(expectValueDiffKeys.sort())
    expect(rootDiffs.validationRowColorizingDiffs?.[rowKey]?.data?.action).toBe(expectColorizing)

    const nodeValue = tree.root!.value()!
    const range = resolveValueRangeLabel(nodeValue as never)
    const chips = [range.data.lower, range.data.upper].filter(Boolean) as string[]
    const valueRangeContext = {
      nodeValue,
      crawlDiffs: takeJsonSchemaValueRangeCrawlDiffs(tree.root!) ?? {},
    }

    const valueDiffs = rootDiffs.validationRowValueDiffs?.[rowKey]
    const originEntries = resolveJsonSchemaValidationRowSideEntries(
      rowKey,
      chips,
      rootDiffs.validationRowDiffs?.[rowKey],
      valueDiffs as never,
      ORIGIN_LAYOUT_SIDE,
      valueRangeContext,
    )
    const changedEntries = resolveJsonSchemaValidationRowSideEntries(
      rowKey,
      chips,
      rootDiffs.validationRowDiffs?.[rowKey],
      valueDiffs as never,
      CHANGED_LAYOUT_SIDE,
      valueRangeContext,
    )

    expect(originEntries.map((entry) => entry.text)).toEqual(expectOriginTexts)
    expect(changedEntries.map((entry) => entry.text)).toEqual(expectChangedTexts)
  })
})
