import { DIFF_META_KEY, DIFFS_AGGREGATED_META_KEY, DiffAction, apiDiff } from "@netcracker/qubership-apihub-api-diff"
import { HighlightVariant, NODE_LEVEL_DIFF_KEY, NodeDiffsSeverityPlacemennt } from "../../src/model/abstract/tree-with-diffs/tree-node.interface"
import { JsonSchemaSpecWithDiffsTransformer } from "../../src/building-service/json-schema/shared/json-schema-spec-with-diffs-transformer"
import { JsonSchemaTreeWithDiffsBuilder } from "../../src/building-service/json-schema/tree-with-diffs/builder"
import { JsonSchemaTreeNodeKinds } from "../../src/model/json-schema/types/node-kind"
import { JsonSchemaValidationRowKeys } from "../../src/model/json-schema/tree-with-diffs/validation-row-source-keys"
import { formatJsonSchemaValidationRowChipDisplay } from "../../src/model/json-schema/tree-with-diffs/validation-row-chip-display"
import { resolveValueRangeLabel } from "../../src/model/json-schema/value-range"
import {
  resolveJsonSchemaDefaultSideEntries,
  resolveJsonSchemaEnumSideEntries,
  resolveJsonSchemaTypeLabelSideDisplay,
  resolveJsonSchemaTypeSideValue,
  resolveJsonSchemaValidationRowSideEntries,
  takeJsonSchemaDefaultDiff,
  takeJsonSchemaDefaultRowColorizingDiff,
  takeJsonSchemaEnumDiff,
  takeJsonSchemaEnumRowColorizingDiff,
  takeJsonSchemaNestingIndicatorRowColorizingDiff,
  takeJsonSchemaNodeChangesSummary,
  takeJsonSchemaValidationRowColorizingDiff,
  takeJsonSchemaValidationRowDiff,
  takeJsonSchemaValidationRowValueDiffs,
  takeJsonSchemaValueRangeCrawlDiffs,
} from "../../src/model/json-schema/tree-with-diffs/property-row-diffs"
import { ORIGIN_LAYOUT_SIDE, CHANGED_LAYOUT_SIDE } from "../../src/model/abstract/layout-side"
import { SideListDisplayKinds } from "../../src/model/abstract/tree-with-diffs/list-side-display"
import { isJsonSchemaTreeNodeWithDiffs } from "../../src/shared/json-schema/guards/tree-node"
import { isJsonSchemaPrimitiveValueType } from "../../src/shared/json-schema/guards/schema-value"
import { createBuildingServiceLogger } from "../../src/loggers"
import { simplifyConsole } from "../helpers/simplify-console"
import {
  resolveValueRangeDiffFixtureSchemas,
  resolveValueRangeDiffFixtureSchemasOas31,
} from "../helpers/value-range-diff-fixtures"
import fs from "fs"
import path from "path"
import yaml from "yaml"

const DIFF_META_KEYS = {
  diffsMetaKey: DIFF_META_KEY,
  aggregatedDiffsMetaKey: DIFFS_AGGREGATED_META_KEY,
}

function mergeSchemas(beforeSchema: object, afterSchema: object, openapiVersion = "3.0.0"): object {
  const beforeDocument = {
    openapi: openapiVersion,
    info: { title: "Test", version: "1.0.0" },
    paths: {},
    components: {
      schemas: {
        __Substitution__: beforeSchema,
      },
    },
  }
  const afterDocument = {
    openapi: openapiVersion,
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

function mergeSchemasOas31(beforeSchema: object, afterSchema: object): object {
  return mergeSchemas(beforeSchema, afterSchema, "3.1.0")
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
    { caseId: "003-minimum-removed", expectRowAction: DiffAction.remove, expectColorizing: DiffAction.remove, expectOriginTexts: [">= 1"], expectChangedTexts: [] },
    { caseId: "004-minimum-with-exclusive-minimum-true-removed", expectRowAction: DiffAction.remove, expectColorizing: DiffAction.remove, expectOriginTexts: ["> 1"], expectChangedTexts: [] },
    { caseId: "005-exclusive-minimum-false-to-true", expectColorizing: DiffAction.replace, expectValueDiffKeys: ["0"], expectOriginTexts: [">= 1"], expectChangedTexts: ["> 1"] },
    { caseId: "006-exclusive-minimum-true-to-false", expectColorizing: DiffAction.replace, expectValueDiffKeys: ["0"], expectOriginTexts: ["> 1"], expectChangedTexts: [">= 1"] },
    { caseId: "007-maximum-added", expectRowAction: DiffAction.add, expectColorizing: DiffAction.add, expectOriginTexts: [], expectChangedTexts: ["<= 10"] },
    { caseId: "008-maximum-added-with-exclusive-maximum-true", expectRowAction: DiffAction.add, expectColorizing: DiffAction.add, expectOriginTexts: [], expectChangedTexts: ["< 10"] },
    { caseId: "009-maximum-removed", expectRowAction: DiffAction.remove, expectColorizing: DiffAction.remove, expectOriginTexts: ["<= 10"], expectChangedTexts: [] },
    { caseId: "010-maximum-with-exclusive-maximum-true-removed", expectRowAction: DiffAction.remove, expectColorizing: DiffAction.remove, expectOriginTexts: ["< 10"], expectChangedTexts: [] },
    { caseId: "011-exclusive-maximum-false-to-true", expectColorizing: DiffAction.replace, expectValueDiffKeys: ["1"], expectOriginTexts: ["<= 10"], expectChangedTexts: ["< 10"] },
    { caseId: "012-exclusive-maximum-true-to-false", expectColorizing: DiffAction.replace, expectValueDiffKeys: ["1"], expectOriginTexts: ["< 10"], expectChangedTexts: ["<= 10"] },
    { caseId: "013-minimum-maximum-added", expectRowAction: DiffAction.add, expectColorizing: DiffAction.add, expectOriginTexts: [], expectChangedTexts: [">= 1", "<= 10"] },
    { caseId: "014-minimum-inclusive-maximum-exclusive-added", expectRowAction: DiffAction.add, expectColorizing: DiffAction.add, expectOriginTexts: [], expectChangedTexts: [">= 1", "< 10"] },
    { caseId: "015-minimum-exclusive-maximum-inclusive-added", expectRowAction: DiffAction.add, expectColorizing: DiffAction.add, expectOriginTexts: [], expectChangedTexts: ["> 1", "<= 10"] },
    { caseId: "016-minimum-maximum-both-exclusive-added", expectRowAction: DiffAction.add, expectColorizing: DiffAction.add, expectOriginTexts: [], expectChangedTexts: ["> 1", "< 10"] },
    { caseId: "017-minimum-maximum-removed", expectRowAction: DiffAction.remove, expectColorizing: DiffAction.remove, expectOriginTexts: [">= 1", "<= 10"], expectChangedTexts: [] },
    { caseId: "018-minimum-inclusive-maximum-exclusive-removed", expectRowAction: DiffAction.remove, expectColorizing: DiffAction.remove, expectOriginTexts: [">= 1", "< 10"], expectChangedTexts: [] },
    { caseId: "019-minimum-exclusive-maximum-inclusive-removed", expectRowAction: DiffAction.remove, expectColorizing: DiffAction.remove, expectOriginTexts: ["> 1", "<= 10"], expectChangedTexts: [] },
    { caseId: "020-minimum-maximum-both-exclusive-removed", expectRowAction: DiffAction.remove, expectColorizing: DiffAction.remove, expectOriginTexts: ["> 1", "< 10"], expectChangedTexts: [] },
    { caseId: "021-min-ex-max-in-min-ex-to-inclusive", expectColorizing: DiffAction.replace, expectValueDiffKeys: ["0"], expectOriginTexts: ["> 1", "<= 10"], expectChangedTexts: [">= 1", "<= 10"] },
    { caseId: "022-min-ex-max-in-max-in-to-exclusive", expectColorizing: DiffAction.replace, expectValueDiffKeys: ["1"], expectOriginTexts: ["> 1", "<= 10"], expectChangedTexts: ["> 1", "< 10"] },
    { caseId: "023-min-in-max-ex-min-in-to-exclusive", expectColorizing: DiffAction.replace, expectValueDiffKeys: ["0"], expectOriginTexts: [">= 1", "< 10"], expectChangedTexts: ["> 1", "< 10"] },
    { caseId: "024-min-in-max-ex-max-ex-to-inclusive", expectColorizing: DiffAction.replace, expectValueDiffKeys: ["1"], expectOriginTexts: [">= 1", "< 10"], expectChangedTexts: [">= 1", "<= 10"] },
    { caseId: "025-min-in-max-in-min-in-to-exclusive", expectColorizing: DiffAction.replace, expectValueDiffKeys: ["0"], expectOriginTexts: [">= 1", "<= 10"], expectChangedTexts: ["> 1", "<= 10"] },
    { caseId: "026-min-in-max-in-max-in-to-exclusive", expectColorizing: DiffAction.replace, expectValueDiffKeys: ["1"], expectOriginTexts: [">= 1", "<= 10"], expectChangedTexts: [">= 1", "< 10"] },
    { caseId: "027-min-in-max-in-both-to-exclusive", expectColorizing: DiffAction.replace, expectValueDiffKeys: ["0", "1"], expectOriginTexts: [">= 1", "<= 10"], expectChangedTexts: ["> 1", "< 10"] },
    { caseId: "028-min-ex-max-ex-min-ex-to-inclusive", expectColorizing: DiffAction.replace, expectValueDiffKeys: ["0"], expectOriginTexts: ["> 1", "< 10"], expectChangedTexts: [">= 1", "< 10"] },
    { caseId: "029-min-ex-max-ex-max-ex-to-inclusive", expectColorizing: DiffAction.replace, expectValueDiffKeys: ["1"], expectOriginTexts: ["> 1", "< 10"], expectChangedTexts: ["> 1", "<= 10"] },
    { caseId: "030-min-ex-max-ex-both-to-inclusive", expectColorizing: DiffAction.replace, expectValueDiffKeys: ["0", "1"], expectOriginTexts: ["> 1", "< 10"], expectChangedTexts: [">= 1", "<= 10"] },
  ]

  const VALUE_RANGE_BOUND_EXTENSION_CASES: Array<{
    caseId: string
    expectRowAction?: typeof DiffAction.add | typeof DiffAction.remove
    expectValueDiffKeys?: string[]
    expectColorizing?: typeof DiffAction.add | typeof DiffAction.remove | typeof DiffAction.replace
    expectOriginTexts: string[]
    expectChangedTexts: string[]
  }> = [
    { caseId: "038-min-in-add-max-in", expectColorizing: DiffAction.replace, expectValueDiffKeys: ["1"], expectOriginTexts: [">= 1"], expectChangedTexts: [">= 1", "<= 10"] },
    { caseId: "039-min-in-add-max-ex", expectColorizing: DiffAction.replace, expectValueDiffKeys: ["1"], expectOriginTexts: [">= 1"], expectChangedTexts: [">= 1", "< 10"] },
    { caseId: "040-min-ex-add-max-in", expectColorizing: DiffAction.replace, expectValueDiffKeys: ["1"], expectOriginTexts: ["> 1"], expectChangedTexts: ["> 1", "<= 10"] },
    { caseId: "041-min-ex-add-max-ex", expectColorizing: DiffAction.replace, expectValueDiffKeys: ["1"], expectOriginTexts: ["> 1"], expectChangedTexts: ["> 1", "< 10"] },
    { caseId: "042-max-in-add-min-in", expectColorizing: DiffAction.replace, expectValueDiffKeys: ["0"], expectOriginTexts: ["<= 10"], expectChangedTexts: [">= 1", "<= 10"] },
    { caseId: "043-max-in-add-min-ex", expectColorizing: DiffAction.replace, expectValueDiffKeys: ["0"], expectOriginTexts: ["<= 10"], expectChangedTexts: ["> 1", "<= 10"] },
    { caseId: "044-max-ex-add-min-in", expectColorizing: DiffAction.replace, expectValueDiffKeys: ["0"], expectOriginTexts: ["< 10"], expectChangedTexts: [">= 1", "< 10"] },
    { caseId: "045-max-ex-add-min-ex", expectColorizing: DiffAction.replace, expectValueDiffKeys: ["0"], expectOriginTexts: ["< 10"], expectChangedTexts: ["> 1", "< 10"] },
    { caseId: "046-min-in-max-in-remove-minimum", expectColorizing: DiffAction.replace, expectValueDiffKeys: ["0"], expectOriginTexts: [">= 1", "<= 10"], expectChangedTexts: ["<= 10"] },
    { caseId: "047-min-in-max-in-remove-maximum", expectColorizing: DiffAction.replace, expectValueDiffKeys: ["1"], expectOriginTexts: [">= 1", "<= 10"], expectChangedTexts: [">= 1"] },
    { caseId: "048-min-ex-max-ex-remove-minimum", expectColorizing: DiffAction.replace, expectValueDiffKeys: ["0"], expectOriginTexts: ["> 1", "< 10"], expectChangedTexts: ["< 10"] },
    { caseId: "049-min-ex-max-ex-remove-maximum", expectColorizing: DiffAction.replace, expectValueDiffKeys: ["1"], expectOriginTexts: ["> 1", "< 10"], expectChangedTexts: ["> 1"] },
    { caseId: "050-min-in-max-ex-remove-minimum", expectColorizing: DiffAction.replace, expectValueDiffKeys: ["0"], expectOriginTexts: [">= 1", "< 10"], expectChangedTexts: ["< 10"] },
    { caseId: "051-min-in-max-ex-remove-maximum", expectColorizing: DiffAction.replace, expectValueDiffKeys: ["1"], expectOriginTexts: [">= 1", "< 10"], expectChangedTexts: [">= 1"] },
    { caseId: "052-min-ex-max-in-remove-minimum", expectColorizing: DiffAction.replace, expectValueDiffKeys: ["0"], expectOriginTexts: ["> 1", "<= 10"], expectChangedTexts: ["<= 10"] },
    { caseId: "053-min-ex-max-in-remove-maximum", expectColorizing: DiffAction.replace, expectValueDiffKeys: ["1"], expectOriginTexts: ["> 1", "<= 10"], expectChangedTexts: ["> 1"] },
  ]

  const VALUE_RANGE_OAS_31_BOUND_EXTENSION_CASES: Array<{
    caseId: string
    expectValueDiffKeys?: string[]
    expectColorizing?: typeof DiffAction.add | typeof DiffAction.remove | typeof DiffAction.replace
    expectOriginTexts: string[]
    expectChangedTexts: string[]
  }> = [
    { caseId: "039-min-in-add-max-ex", expectColorizing: DiffAction.replace, expectValueDiffKeys: ["1"], expectOriginTexts: [">= 1"], expectChangedTexts: [">= 1", "< 10"] },
    { caseId: "041-min-ex-add-max-ex", expectColorizing: DiffAction.replace, expectValueDiffKeys: ["1"], expectOriginTexts: ["> 1"], expectChangedTexts: ["> 1", "< 10"] },
    { caseId: "043-max-in-add-min-ex", expectColorizing: DiffAction.replace, expectValueDiffKeys: ["0"], expectOriginTexts: ["<= 10"], expectChangedTexts: ["> 1", "<= 10"] },
    { caseId: "045-max-ex-add-min-ex", expectColorizing: DiffAction.replace, expectValueDiffKeys: ["0"], expectOriginTexts: ["< 10"], expectChangedTexts: ["> 1", "< 10"] },
    { caseId: "048-min-ex-max-ex-remove-minimum", expectColorizing: DiffAction.replace, expectValueDiffKeys: ["0"], expectOriginTexts: ["> 1", "< 10"], expectChangedTexts: ["< 10"] },
    { caseId: "049-min-ex-max-ex-remove-maximum", expectColorizing: DiffAction.replace, expectValueDiffKeys: ["1"], expectOriginTexts: ["> 1", "< 10"], expectChangedTexts: ["> 1"] },
    { caseId: "051-min-in-max-ex-remove-maximum", expectColorizing: DiffAction.replace, expectValueDiffKeys: ["1"], expectOriginTexts: [">= 1", "< 10"], expectChangedTexts: [">= 1"] },
    { caseId: "052-min-ex-max-in-remove-minimum", expectColorizing: DiffAction.replace, expectValueDiffKeys: ["0"], expectOriginTexts: ["> 1", "<= 10"], expectChangedTexts: ["<= 10"] },
  ]

  const VALUE_RANGE_OAS_31_CASES: Array<{
    caseId: string
    expectRowAction?: typeof DiffAction.add | typeof DiffAction.remove
    expectValueDiffKeys?: string[]
    expectColorizing?: typeof DiffAction.add | typeof DiffAction.remove | typeof DiffAction.replace
    expectOriginTexts: string[]
    expectChangedTexts: string[]
  }> = [
    { caseId: "054-exclusive-minimum-numeric-added", expectRowAction: DiffAction.add, expectColorizing: DiffAction.add, expectOriginTexts: [], expectChangedTexts: ["> 2"] },
    { caseId: "055-exclusive-minimum-numeric-removed", expectRowAction: DiffAction.remove, expectColorizing: DiffAction.remove, expectOriginTexts: ["> 2"], expectChangedTexts: [] },
    { caseId: "056-exclusive-maximum-numeric-added", expectRowAction: DiffAction.add, expectColorizing: DiffAction.add, expectOriginTexts: [], expectChangedTexts: ["< 10"] },
    { caseId: "057-exclusive-maximum-numeric-removed", expectRowAction: DiffAction.remove, expectColorizing: DiffAction.remove, expectOriginTexts: ["< 10"], expectChangedTexts: [] },
  ]

  const assertValueRangeSideEntries = ({
    caseId,
    merge,
    includeOas31Only = false,
    useOas31SchemaForm = false,
    expectRowAction,
    expectValueDiffKeys = [],
    expectColorizing,
    expectOriginTexts,
    expectChangedTexts,
  }: {
    caseId: string
    merge: (beforeSchema: object, afterSchema: object) => object
    includeOas31Only?: boolean
    useOas31SchemaForm?: boolean
    expectRowAction?: typeof DiffAction.add | typeof DiffAction.remove
    expectValueDiffKeys?: string[]
    expectColorizing?: typeof DiffAction.add | typeof DiffAction.remove | typeof DiffAction.replace
    expectOriginTexts: string[]
    expectChangedTexts: string[]
  }) => {
    const resolveSchemas = useOas31SchemaForm
      ? resolveValueRangeDiffFixtureSchemasOas31
      : resolveValueRangeDiffFixtureSchemas
    const { before: beforeSchema, after: afterSchema } = resolveSchemas(caseId, {
      includeOas31Only,
    })
    const merged = merge(beforeSchema, afterSchema)
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
    if (expectColorizing === DiffAction.replace) {
      expect(rootDiffs.validationRowColorizingDiffs?.[rowKey]?.styles?.after?.backgroundColor)
        .toBe(HighlightVariant.Yellow)
    }

    const nodeValue = tree.root!.value()!
    const range = resolveValueRangeLabel(nodeValue as never)
    expect(range.visible || expectRowAction !== undefined).toBe(true)
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
  }

  it.each([...VALUE_RANGE_SIDE_CASES, ...VALUE_RANGE_BOUND_EXTENSION_CASES])("value-range side entries for $caseId", (caseSpec) => {
    assertValueRangeSideEntries({
      merge: mergeSchemas,
      ...caseSpec,
    })
  })

  it.each(VALUE_RANGE_OAS_31_BOUND_EXTENSION_CASES)("value-range OAS 3.1 partial bound side entries for $caseId", (caseSpec) => {
    assertValueRangeSideEntries({
      merge: mergeSchemasOas31,
      includeOas31Only: true,
      useOas31SchemaForm: true,
      ...caseSpec,
    })
  })

  it.each(VALUE_RANGE_OAS_31_CASES)("value-range OAS 3.1 side entries for $caseId", (caseSpec) => {
    assertValueRangeSideEntries({
      merge: mergeSchemasOas31,
      includeOas31Only: true,
      useOas31SchemaForm: true,
      ...caseSpec,
    })
  })

  const rule1StringProperty = {
    type: "string",
    description: "Sample string schema with all string validations",
    default: "alpha",
    enum: ["alpha", "beta", "gamma"],
    minLength: 1,
    maxLength: 128,
    pattern: "^[a-z]+$",
  } as const

  it("inherits whole-node add colorizing onto enum and validation rows for added property", () => {
    const merged = mergeSchemas(
      {
        type: "object",
        properties: {
          prop0: rule1StringProperty,
        },
      },
      {
        type: "object",
        properties: {
          prop0: rule1StringProperty,
          prop1: rule1StringProperty,
        },
      },
    )
    const tree = new JsonSchemaTreeWithDiffsBuilder({
      source: merged,
      diffsMetaKeys: DIFF_META_KEYS,
    }).build()

    const prop1Node = tree.root!.childrenNodes().find((node) => node.key === "prop1")
    expect(prop1Node).toBeDefined()
    expect(isJsonSchemaTreeNodeWithDiffs(prop1Node!)).toBe(true)

    const nodeLevelDiff = prop1Node!.diffs[NODE_LEVEL_DIFF_KEY]
    expect(nodeLevelDiff?.data.action).toBe(DiffAction.add)

    expect(takeJsonSchemaEnumDiff(prop1Node!)).toBeUndefined()
    const enumRowColorizingDiff = takeJsonSchemaEnumRowColorizingDiff(prop1Node!)
    expect(enumRowColorizingDiff).toBeDefined()
    expect(enumRowColorizingDiff).not.toBe(nodeLevelDiff)
    expect(enumRowColorizingDiff?.data.action).toBe(DiffAction.add)
    expect(enumRowColorizingDiff?.data.afterValue).toBe(true)
    expect(enumRowColorizingDiff?.styles.after.borderShadowColor).toBeUndefined()
    expect(enumRowColorizingDiff?.styles.after.backgroundColor).toBe(HighlightVariant.Green)
    expect(resolveJsonSchemaEnumSideEntries(
      rule1StringProperty.enum,
      undefined,
      undefined,
      CHANGED_LAYOUT_SIDE,
    ).map((entry) => entry.text)).toEqual(["alpha", "beta", "gamma"])

    expect(takeJsonSchemaDefaultDiff(prop1Node!)).toBeUndefined()
    const defaultRowColorizingDiff = takeJsonSchemaDefaultRowColorizingDiff(prop1Node!)
    expect(defaultRowColorizingDiff?.data.action).toBe(DiffAction.add)
    expect(defaultRowColorizingDiff?.styles.after.borderShadowColor).toBeUndefined()
    expect(resolveJsonSchemaDefaultSideEntries(
      rule1StringProperty.default,
      undefined,
      CHANGED_LAYOUT_SIDE,
    )).toEqual([{ text: "alpha" }])

    for (const rowKey of [
      JsonSchemaValidationRowKeys.VALUE_LENGTH,
      JsonSchemaValidationRowKeys.VALUE_PATTERN,
    ] as const) {
      expect(takeJsonSchemaValidationRowDiff(prop1Node!, rowKey)).toBeUndefined()
      const validationRowColorizingDiff = takeJsonSchemaValidationRowColorizingDiff(prop1Node!, rowKey)
      expect(validationRowColorizingDiff?.data.action).toBe(DiffAction.add)
      expect(validationRowColorizingDiff?.styles.after.borderShadowColor).toBeUndefined()
      expect(validationRowColorizingDiff?.styles.after.backgroundColor).toBe(HighlightVariant.Green)
    }
  })

  it("inherits whole-node remove colorizing onto enum and validation rows for removed property", () => {
    const merged = mergeSchemas(
      {
        type: "object",
        properties: {
          prop0: rule1StringProperty,
          prop1: rule1StringProperty,
        },
      },
      {
        type: "object",
        properties: {
          prop0: rule1StringProperty,
        },
      },
    )
    const tree = new JsonSchemaTreeWithDiffsBuilder({
      source: merged,
      diffsMetaKeys: DIFF_META_KEYS,
    }).build()

    const prop1Node = tree.root!.childrenNodes().find((node) => node.key === "prop1")
    expect(prop1Node).toBeDefined()

    const nodeLevelDiff = prop1Node!.diffs[NODE_LEVEL_DIFF_KEY]
    expect(nodeLevelDiff?.data.action).toBe(DiffAction.remove)

    expect(takeJsonSchemaEnumDiff(prop1Node!)).toBeUndefined()
    const enumRowColorizingDiff = takeJsonSchemaEnumRowColorizingDiff(prop1Node!)
    expect(enumRowColorizingDiff?.data.action).toBe(DiffAction.remove)
    expect(enumRowColorizingDiff?.styles.before.borderShadowColor).toBeUndefined()
    expect(resolveJsonSchemaEnumSideEntries(
      rule1StringProperty.enum,
      undefined,
      undefined,
      ORIGIN_LAYOUT_SIDE,
    ).map((entry) => entry.text)).toEqual(["alpha", "beta", "gamma"])

    expect(takeJsonSchemaValidationRowDiff(
      prop1Node!,
      JsonSchemaValidationRowKeys.VALUE_LENGTH,
    )).toBeUndefined()
    const valueLengthColorizingDiff = takeJsonSchemaValidationRowColorizingDiff(
      prop1Node!,
      JsonSchemaValidationRowKeys.VALUE_LENGTH,
    )
    expect(valueLengthColorizingDiff?.data.action).toBe(DiffAction.remove)
    expect(valueLengthColorizingDiff?.styles.before.borderShadowColor).toBeUndefined()
  })

  it("inherits whole-node add colorizing onto validation rows on a wholly-added oneOf array variant", () => {
    const merged = mergeSchemas(
      {
        type: "object",
        properties: {
          plainProp: { type: "string" },
        },
      },
      {
        type: "object",
        properties: {
          plainProp: { type: "string" },
          oneOfProp: {
            oneOf: [
              { type: "string" },
              {
                type: "array",
                items: [{ type: "string" }],
                minItems: 0,
                maxItems: 10,
                uniqueItems: true,
              },
            ],
          },
        },
      },
    )
    const tree = new JsonSchemaTreeWithDiffsBuilder({
      source: merged,
      diffsMetaKeys: DIFF_META_KEYS,
    }).build()

    const oneOfPropNode = tree.root!.childrenNodes().find((node) => node.key === "oneOfProp")
    expect(oneOfPropNode).toBeDefined()

    const arrayVariantNode = oneOfPropNode!.nestedNodes().find((node) => node.value()?.type === "array")
    expect(arrayVariantNode).toBeDefined()
    expect(arrayVariantNode!.kind).toBe(JsonSchemaTreeNodeKinds.ONE_OF)
    expect(isJsonSchemaTreeNodeWithDiffs(arrayVariantNode!)).toBe(true)

    const nodeLevelDiff = arrayVariantNode!.diffs[NODE_LEVEL_DIFF_KEY]
    expect(nodeLevelDiff?.data.action).toBe(DiffAction.add)

    for (const rowKey of [
      JsonSchemaValidationRowKeys.ITEMS_COUNT,
      JsonSchemaValidationRowKeys.UNIQUE_ITEMS,
    ] as const) {
      const validationRowColorizingDiff = takeJsonSchemaValidationRowColorizingDiff(arrayVariantNode!, rowKey)
      expect(validationRowColorizingDiff?.data.action).toBe(DiffAction.add)
      expect(validationRowColorizingDiff?.styles.after.backgroundColor).toBe(HighlightVariant.Green)
    }
  })

  it("inherits whole-node remove colorizing onto validation rows on a wholly-removed oneOf object variant", () => {
    const merged = mergeSchemas(
      {
        type: "object",
        properties: {
          plainProp: { type: "string" },
          oneOfProp: {
            oneOf: [
              { type: "string" },
              {
                type: "object",
                properties: {
                  prop0: { type: "string" },
                },
                minProperties: 0,
                maxProperties: 10,
              },
            ],
          },
        },
      },
      {
        type: "object",
        properties: {
          plainProp: { type: "string" },
        },
      },
    )
    const tree = new JsonSchemaTreeWithDiffsBuilder({
      source: merged,
      diffsMetaKeys: DIFF_META_KEYS,
    }).build()

    const oneOfPropNode = tree.root!.childrenNodes().find((node) => node.key === "oneOfProp")
    expect(oneOfPropNode).toBeDefined()

    const objectVariantNode = oneOfPropNode!.nestedNodes().find((node) => node.value()?.type === "object")
    expect(objectVariantNode).toBeDefined()
    expect(objectVariantNode!.kind).toBe(JsonSchemaTreeNodeKinds.ONE_OF)

    const nodeLevelDiff = objectVariantNode!.diffs[NODE_LEVEL_DIFF_KEY]
    expect(nodeLevelDiff?.data.action).toBe(DiffAction.remove)

    const propertiesCountColorizingDiff = takeJsonSchemaValidationRowColorizingDiff(
      objectVariantNode!,
      JsonSchemaValidationRowKeys.PROPERTIES_COUNT,
    )
    expect(propertiesCountColorizingDiff?.data.action).toBe(DiffAction.remove)
    expect(propertiesCountColorizingDiff?.styles.before.backgroundColor).toBe(HighlightVariant.Red)
  })
})

describe("JsonSchema nesting-indicator row colorizing diff", () => {
  simplifyConsole()

  function buildTree(beforeSchema: object, afterSchema: object) {
    const merged = mergeSchemas(beforeSchema, afterSchema)
    return new JsonSchemaTreeWithDiffsBuilder({
      source: merged,
      diffsMetaKeys: DIFF_META_KEYS,
    }).build()
  }

  it("colors the row green, changed-side-only, when every child was added (real fixture)", () => {
    const fixtureDir = path.resolve(
      __dirname,
      "../../../samples/json-schema-diffs/type-changes/object-properties/003-add-two-properties-string",
    )
    const beforeSchema = yaml.parse(fs.readFileSync(path.join(fixtureDir, "before.yaml"), "utf8"))
    const afterSchema = yaml.parse(fs.readFileSync(path.join(fixtureDir, "after.yaml"), "utf8"))
    const tree = buildTree(beforeSchema, afterSchema)

    const rowDiff = takeJsonSchemaNestingIndicatorRowColorizingDiff(tree.root!)
    expect(rowDiff?.data.action).toBe(DiffAction.add)
    expect(rowDiff?.styles.before.backgroundColor).toBe(HighlightVariant.Gray)
    expect(rowDiff?.styles.before.isContentVisible).toBe(false)
    expect(rowDiff?.styles.after.backgroundColor).toBe(HighlightVariant.Green)
    expect(rowDiff?.styles.after.isContentVisible).toBe(true)
    expect(rowDiff?.flags.before.increaseLevel).toBe(false)
    expect(rowDiff?.flags.after.increaseLevel).toBe(true)

    const severity = tree.root!.diffsSeverities[NodeDiffsSeverityPlacemennt.NestingIndicatorRow]
    expect(severity?.type).toBe(rowDiff?.data.type)
  })

  it("colors the row red, origin-side-only, when every child was removed (real fixture)", () => {
    const fixtureDir = path.resolve(
      __dirname,
      "../../../samples/json-schema-diffs/type-changes/object-properties/004-remove-two-properties-string",
    )
    const beforeSchema = yaml.parse(fs.readFileSync(path.join(fixtureDir, "before.yaml"), "utf8"))
    const afterSchema = yaml.parse(fs.readFileSync(path.join(fixtureDir, "after.yaml"), "utf8"))
    const tree = buildTree(beforeSchema, afterSchema)

    const rowDiff = takeJsonSchemaNestingIndicatorRowColorizingDiff(tree.root!)
    expect(rowDiff?.data.action).toBe(DiffAction.remove)
    expect(rowDiff?.styles.before.backgroundColor).toBe(HighlightVariant.Red)
    expect(rowDiff?.styles.before.isContentVisible).toBe(true)
    expect(rowDiff?.styles.after.backgroundColor).toBe(HighlightVariant.Gray)
    expect(rowDiff?.styles.after.isContentVisible).toBe(false)
    expect(rowDiff?.flags.before.increaseLevel).toBe(true)
    expect(rowDiff?.flags.after.increaseLevel).toBe(false)

    const severity = tree.root!.diffsSeverities[NodeDiffsSeverityPlacemennt.NestingIndicatorRow]
    expect(severity?.type).toBe(rowDiff?.data.type)
  })

  it("colors a wholly-added property's own row green, even though it has no children of its own", () => {
    const tree = buildTree(
      { type: "object", properties: { prop0: { type: "string" } } },
      {
        type: "object",
        properties: {
          prop0: { type: "string" },
          prop1: { type: "string" },
        },
      },
    )

    const prop1Node = tree.root!.childrenNodes().find((node) => node.key === "prop1")
    expect(prop1Node).toBeDefined()
    expect(isJsonSchemaTreeNodeWithDiffs(prop1Node!)).toBe(true)
    expect(prop1Node!.diffs[NODE_LEVEL_DIFF_KEY]?.data.action).toBe(DiffAction.add)

    const rowDiff = takeJsonSchemaNestingIndicatorRowColorizingDiff(prop1Node!)
    expect(rowDiff?.data.action).toBe(DiffAction.add)
    expect(rowDiff?.styles.after.backgroundColor).toBe(HighlightVariant.Green)
    expect(rowDiff?.flags.before.increaseLevel).toBe(false)
    expect(rowDiff?.flags.after.increaseLevel).toBe(true)

    const severity = prop1Node!.diffsSeverities[NodeDiffsSeverityPlacemennt.NestingIndicatorRow]
    expect(severity?.type).toBe(prop1Node!.diffs[NODE_LEVEL_DIFF_KEY]?.data.type)
  })

  it("does not freeze either side's level for a type/format/title replace (row stays yellow, both sides keep incrementing)", () => {
    const tree = buildTree(
      {
        type: "object",
        properties: { prop0: { type: "string" } },
      },
      {
        type: "object",
        title: "Renamed object",
        properties: { prop0: { type: "string" } },
      },
    )

    expect(tree.root!.diffs[NODE_LEVEL_DIFF_KEY]).toBeUndefined()
    const rowDiff = takeJsonSchemaNestingIndicatorRowColorizingDiff(tree.root!)
    expect(rowDiff?.data.action).toBe(DiffAction.replace)
    expect(rowDiff?.flags.before.increaseLevel).toBe(true)
    expect(rowDiff?.flags.after.increaseLevel).toBe(true)
  })

  it("leaves the row uncolored when a node was itself neither added/removed nor its children uniformly changed", () => {
    const tree = buildTree(
      {
        type: "object",
        properties: {
          prop0: { type: "string" },
          prop1: { type: "string" },
        },
      },
      {
        type: "object",
        properties: {
          prop0: { type: "string" },
          prop1: { type: "string" },
          prop2: { type: "string" },
        },
      },
    )

    // Root itself was not added/removed, and only one of its two-plus children (prop2) changed
    // - prop0/prop1 stayed unchanged, so the children are not "uniformly" added.
    expect(tree.root!.diffs[NODE_LEVEL_DIFF_KEY]).toBeUndefined()
    expect(takeJsonSchemaNestingIndicatorRowColorizingDiff(tree.root!)).toBeUndefined()
    expect(tree.root!.diffsSeverities[NodeDiffsSeverityPlacemennt.NestingIndicatorRow]).toBeUndefined()
  })
})

describe("JsonSchema nesting-indicator type label diffs", () => {
  simplifyConsole()

  function buildTree(beforeSchema: object, afterSchema: object) {
    const merged = mergeSchemas(beforeSchema, afterSchema)
    return new JsonSchemaTreeWithDiffsBuilder({
      source: merged,
      diffsMetaKeys: DIFF_META_KEYS,
    }).build()
  }

  function buildTreeFromFixture(fixtureDirName: string) {
    const fixtureDir = path.resolve(
      __dirname,
      `../../../samples/json-schema-diffs/type-changes/type-value-changes/${fixtureDirName}`,
    )
    const beforeSchema = yaml.parse(fs.readFileSync(path.join(fixtureDir, "before.yaml"), "utf8"))
    const afterSchema = yaml.parse(fs.readFileSync(path.join(fixtureDir, "after.yaml"), "utf8"))
    return buildTree(beforeSchema, afterSchema)
  }

  it("classifies primitive vs complex type keyword values", () => {
    expect(isJsonSchemaPrimitiveValueType("string")).toBe(true)
    expect(isJsonSchemaPrimitiveValueType("number")).toBe(true)
    expect(isJsonSchemaPrimitiveValueType("integer")).toBe(true)
    expect(isJsonSchemaPrimitiveValueType("boolean")).toBe(true)
    expect(isJsonSchemaPrimitiveValueType("object")).toBe(false)
    expect(isJsonSchemaPrimitiveValueType("array")).toBe(false)
    expect(isJsonSchemaPrimitiveValueType("unknown")).toBe(false)
    expect(isJsonSchemaPrimitiveValueType(undefined)).toBe(false)
  })

  it("hides both sides for a primitive-to-primitive type change (001-string-to-number)", () => {
    const tree = buildTreeFromFixture("001-string-to-number")
    const root = tree.root!

    expect(resolveJsonSchemaTypeSideValue(root, ORIGIN_LAYOUT_SIDE)).toBe("string")
    expect(resolveJsonSchemaTypeSideValue(root, CHANGED_LAYOUT_SIDE)).toBe("number")
    expect(isJsonSchemaPrimitiveValueType(resolveJsonSchemaTypeSideValue(root, ORIGIN_LAYOUT_SIDE))).toBe(true)
    expect(isJsonSchemaPrimitiveValueType(resolveJsonSchemaTypeSideValue(root, CHANGED_LAYOUT_SIDE))).toBe(true)
  })

  it("shows the correct origin-side type and hides the primitive changed side (021-array-to-string)", () => {
    const tree = buildTreeFromFixture("021-array-to-string")
    const root = tree.root!

    const originType = resolveJsonSchemaTypeSideValue(root, ORIGIN_LAYOUT_SIDE)
    const changedType = resolveJsonSchemaTypeSideValue(root, CHANGED_LAYOUT_SIDE)
    expect(originType).toBe("array")
    expect(changedType).toBe("string")
    expect(isJsonSchemaPrimitiveValueType(originType)).toBe(false)
    expect(isJsonSchemaPrimitiveValueType(changedType)).toBe(true)

    const originDisplay = resolveJsonSchemaTypeLabelSideDisplay(root, root.meta(), ORIGIN_LAYOUT_SIDE)
    expect(originDisplay.kind).toBe(SideListDisplayKinds.PARTIAL_DIFFS)
    if (originDisplay.kind === SideListDisplayKinds.PARTIAL_DIFFS) {
      const typeSegment = originDisplay.segments.find((segment) => segment.text === "array")
      expect(typeSegment?.diff?.styles.before.textHighlighterColor).toBe(HighlightVariant.Yellow)
    }

    // Complex (array) origin keeps incrementing; primitive (string) changed side freezes -
    // its children are inherited-add "ghosts" that should pin at the parent's own level.
    const rowDiff = takeJsonSchemaNestingIndicatorRowColorizingDiff(root)
    expect(rowDiff?.flags.before.increaseLevel).toBe(true)
    expect(rowDiff?.flags.after.increaseLevel).toBe(false)
  })

  it("shows the correct origin-side type and hides the primitive changed side (027-object-to-number)", () => {
    const tree = buildTreeFromFixture("027-object-to-number")
    const root = tree.root!

    expect(resolveJsonSchemaTypeSideValue(root, ORIGIN_LAYOUT_SIDE)).toBe("object")
    expect(resolveJsonSchemaTypeSideValue(root, CHANGED_LAYOUT_SIDE)).toBe("number")
    expect(isJsonSchemaPrimitiveValueType(resolveJsonSchemaTypeSideValue(root, ORIGIN_LAYOUT_SIDE))).toBe(false)
    expect(isJsonSchemaPrimitiveValueType(resolveJsonSchemaTypeSideValue(root, CHANGED_LAYOUT_SIDE))).toBe(true)

    const rowDiff = takeJsonSchemaNestingIndicatorRowColorizingDiff(root)
    expect(rowDiff?.flags.before.increaseLevel).toBe(true)
    expect(rowDiff?.flags.after.increaseLevel).toBe(false)
  })

  it("freezes the primitive changed side for a root-level primitive<->complex change (004-string-to-array)", () => {
    const tree = buildTreeFromFixture("004-string-to-array")
    const root = tree.root!

    expect(resolveJsonSchemaTypeSideValue(root, ORIGIN_LAYOUT_SIDE)).toBe("string")
    expect(resolveJsonSchemaTypeSideValue(root, CHANGED_LAYOUT_SIDE)).toBe("array")

    const rowDiff = takeJsonSchemaNestingIndicatorRowColorizingDiff(root)
    expect(rowDiff?.data.action).toBe(DiffAction.replace)
    expect(rowDiff?.flags.before.increaseLevel).toBe(false)
    expect(rowDiff?.flags.after.increaseLevel).toBe(true)
  })

  it("freezes the primitive changed side for a root-level primitive<->complex change (026-object-to-string)", () => {
    const tree = buildTreeFromFixture("026-object-to-string")
    const root = tree.root!

    expect(resolveJsonSchemaTypeSideValue(root, ORIGIN_LAYOUT_SIDE)).toBe("object")
    expect(resolveJsonSchemaTypeSideValue(root, CHANGED_LAYOUT_SIDE)).toBe("string")

    const rowDiff = takeJsonSchemaNestingIndicatorRowColorizingDiff(root)
    expect(rowDiff?.data.action).toBe(DiffAction.replace)
    expect(rowDiff?.flags.before.increaseLevel).toBe(true)
    expect(rowDiff?.flags.after.increaseLevel).toBe(false)
  })

  it("freezes the primitive side for a non-root property's primitive<->complex change too", () => {
    const tree = buildTree(
      { type: "object", properties: { foo: { type: "string" } } },
      {
        type: "object",
        properties: {
          foo: { type: "object", properties: { bar: { type: "string" } } },
        },
      },
    )
    const fooNode = tree.root!.childrenNodes().find((node) => node.key === "foo")!
    expect(isJsonSchemaTreeNodeWithDiffs(fooNode)).toBe(true)

    const rowDiff = takeJsonSchemaNestingIndicatorRowColorizingDiff(fooNode!)
    expect(rowDiff?.data.action).toBe(DiffAction.replace)
    expect(rowDiff?.flags.before.increaseLevel).toBe(false)
    expect(rowDiff?.flags.after.increaseLevel).toBe(true)
  })

  it("keeps both sides visible with yellow highlighting and colors the row for a complex-to-complex change (030-object-to-array)", () => {
    const tree = buildTreeFromFixture("030-object-to-array")
    const root = tree.root!

    expect(isJsonSchemaPrimitiveValueType(resolveJsonSchemaTypeSideValue(root, ORIGIN_LAYOUT_SIDE))).toBe(false)
    expect(isJsonSchemaPrimitiveValueType(resolveJsonSchemaTypeSideValue(root, CHANGED_LAYOUT_SIDE))).toBe(false)

    for (const layoutSide of [ORIGIN_LAYOUT_SIDE, CHANGED_LAYOUT_SIDE]) {
      const display = resolveJsonSchemaTypeLabelSideDisplay(root, root.meta(), layoutSide)
      expect(display.kind).toBe(SideListDisplayKinds.PARTIAL_DIFFS)
      if (display.kind === SideListDisplayKinds.PARTIAL_DIFFS) {
        const typeSegment = display.segments[0]
        const highlighterColor = layoutSide === ORIGIN_LAYOUT_SIDE
          ? typeSegment.diff?.styles.before.textHighlighterColor
          : typeSegment.diff?.styles.after.textHighlighterColor
        expect(highlighterColor).toBe(HighlightVariant.Yellow)
      }
    }

    const rowDiff = takeJsonSchemaNestingIndicatorRowColorizingDiff(root)
    expect(rowDiff?.data.action).toBe(DiffAction.replace)
    expect(rowDiff?.styles.before.backgroundColor).toBe(HighlightVariant.Yellow)
    expect(rowDiff?.styles.after.backgroundColor).toBe(HighlightVariant.Yellow)
    // Complex<->complex change: both sides have their own real children, neither freezes.
    expect(rowDiff?.flags.before.increaseLevel).toBe(true)
    expect(rowDiff?.flags.after.increaseLevel).toBe(true)

    const severity = root.diffsSeverities[NodeDiffsSeverityPlacemennt.NestingIndicatorRow]
    expect(severity?.type).toBe(rowDiff?.data.type)
  })

  it("colors the nesting-indicator row for a title/format-only change, even without a type change", () => {
    const tree = buildTree(
      {
        type: "object",
        properties: { prop0: { type: "string" } },
      },
      {
        type: "object",
        title: "Renamed object",
        properties: { prop0: { type: "string" } },
      },
    )
    const root = tree.root!

    expect(root.diffs[NODE_LEVEL_DIFF_KEY]).toBeUndefined()
    const rowDiff = takeJsonSchemaNestingIndicatorRowColorizingDiff(root)
    expect(rowDiff?.data.action).toBe(DiffAction.replace)
    expect(rowDiff?.styles.before.backgroundColor).toBe(HighlightVariant.Yellow)
    expect(rowDiff?.styles.after.backgroundColor).toBe(HighlightVariant.Yellow)
  })

  it("includes the title segment in the nesting-indicator display when a title keyword is present alongside a type change", () => {
    const tree = buildTree(
      { type: "object", title: "My Schema", properties: { prop0: { type: "string" } } },
      { type: "array", title: "My Schema", items: { type: "string" } },
    )
    const root = tree.root!

    const changedDisplay = resolveJsonSchemaTypeLabelSideDisplay(root, root.meta(), CHANGED_LAYOUT_SIDE)
    expect(changedDisplay.kind).toBe(SideListDisplayKinds.PARTIAL_DIFFS)
    if (changedDisplay.kind === SideListDisplayKinds.PARTIAL_DIFFS) {
      const titleSegment = changedDisplay.segments.find((segment) => segment.text === "<My Schema>")
      expect(titleSegment).toBeDefined()
    }
  })
})

describe("JsonSchema node changes summary", () => {
  simplifyConsole()

  function buildTree(beforeSchema: object, afterSchema: object) {
    const merged = mergeSchemas(beforeSchema, afterSchema)
    return new JsonSchemaTreeWithDiffsBuilder({
      source: merged,
      diffsMetaKeys: DIFF_META_KEYS,
    }).build()
  }

  it("merges own diffs and descendant diffs into one Set<DiffType>", () => {
    const tree = buildTree(
      { type: "object", description: "old", properties: { prop0: { type: "string" } } },
      {
        type: "object",
        description: "new",
        properties: { prop0: { type: "string" }, prop1: { type: "string" } },
      },
    )

    const summary = takeJsonSchemaNodeChangesSummary(tree.root!)
    // Own description change + descendant (prop1) add - two distinct diff types merged together.
    expect(summary?.size).toBe(2)
  })

  it("excludes the node's own type diff when it's the only change (no children to summarize)", () => {
    const tree = buildTree({ type: "string" }, { type: "number" })

    // Empty summaries are not assigned at all (keeps `node.diffs` free of placeholder keys, which
    // would otherwise defeat "changed only" filtering elsewhere) - so this reads as undefined.
    const summary = takeJsonSchemaNodeChangesSummary(tree.root!)
    expect(summary).toBeUndefined()
  })

  it("excludes the node's own title diff but keeps an unrelated descendant's diff type", () => {
    const tree = buildTree(
      { type: "object", properties: { prop0: { type: "string" } } },
      {
        type: "object",
        title: "Renamed",
        properties: { prop0: { type: "string" }, prop1: { type: "string" } },
      },
    )

    const ownTitleDiffType = tree.root!.diffs.typeLabelFieldDiffs?.title?.data.type
    expect(ownTitleDiffType).toBeDefined()

    const summary = takeJsonSchemaNodeChangesSummary(tree.root!)
    expect(summary?.size).toBe(1)
    expect(summary?.has(ownTitleDiffType!)).toBe(false)
  })

  it("does not exclude a descendant's own type diff from the ancestor's summary, but does exclude it from the descendant's own summary", () => {
    const tree = buildTree(
      { type: "object", properties: { prop0: { type: "string" } } },
      { type: "object", properties: { prop0: { type: "number" } } },
    )
    const prop0 = tree.root!.childrenNodes().find((node) => node.key === "prop0")!
    expect(isJsonSchemaTreeNodeWithDiffs(prop0)).toBe(true)

    const prop0OwnTypeDiffType = prop0.diffs.typeLabelFieldDiffs?.type?.data.type
    expect(prop0OwnTypeDiffType).toBeDefined()

    const rootSummary = takeJsonSchemaNodeChangesSummary(tree.root!)
    expect(rootSummary?.has(prop0OwnTypeDiffType!)).toBe(true)

    const prop0Summary = takeJsonSchemaNodeChangesSummary(prop0)
    expect(prop0Summary).toBeUndefined()
  })

  it("scopes each combiner variant's summary independently, with no cross-variant leakage", () => {
    const tree = buildTree(
      {
        type: "object",
        properties: {
          value: {
            oneOf: [
              { type: "string" },
              { type: "object", properties: { a: { type: "string" } } },
            ],
          },
        },
      },
      {
        type: "object",
        properties: {
          value: {
            oneOf: [
              { type: "string" },
              { type: "object", properties: { a: { type: "string" }, b: { type: "string" } } },
            ],
          },
        },
      },
    )

    const valueProperty = tree.root!.childrenNodes().find((node) => node.key === "value")!
    const [stringVariant, objectVariant] = valueProperty.nestedNodes()

    expect(takeJsonSchemaNodeChangesSummary(stringVariant)).toBeUndefined()
    expect(takeJsonSchemaNodeChangesSummary(objectVariant)?.size).toBe(1)
  })
})
