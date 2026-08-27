import { DIFF_META_KEY, DIFFS_AGGREGATED_META_KEY, DiffAction, apiDiff } from "@netcracker/qubership-apihub-api-diff"
import { HighlightVariant } from "../../src/model/abstract/tree-with-diffs/tree-node.interface"
import { JsonSchemaTreeWithDiffsBuilder } from "../../src/building-service/json-schema/tree-with-diffs/builder"
import { ORIGIN_LAYOUT_SIDE, CHANGED_LAYOUT_SIDE } from "../../src/model/abstract/layout-side"
import { SideListDisplayKinds } from "../../src/model/abstract/tree-with-diffs/list-side-display"
import {
  JSON_SCHEMA_TITLE_ROW_DIFF_KEY,
  resolveJsonSchemaTypeLabelSideDisplay,
  takeJsonSchemaTitleRowDiff,
  takeJsonSchemaTypeLabelFieldDiffs,
} from "../../src/model/json-schema/tree-with-diffs/property-row-diffs"
import { JsonSchemaTreeNodeKinds } from "../../src/model/json-schema/types/node-kind"
import { isJsonSchemaTreeNodeWithDiffs } from "../../src/shared/json-schema/guards/tree-node"
import { createBuildingServiceLogger } from "../../src/loggers"
import { simplifyConsole } from "../helpers/simplify-console"

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

function buildTree(merged: object) {
  return new JsonSchemaTreeWithDiffsBuilder({
    source: merged,
    diffsMetaKeys: DIFF_META_KEYS,
    logger: createBuildingServiceLogger(),
  }).build()
}

describe("JSON Schema type label diffs", () => {
  simplifyConsole()

  it("aggregates format add/remove with chip text highlighter metadata", () => {
    const merged = mergeSchemas(
      { type: "string" },
      { type: "string", format: "uuid" },
    )
    const tree = buildTree(merged)
    const root = tree.root
    expect(root).toBeDefined()
    expect(isJsonSchemaTreeNodeWithDiffs(root!)).toBe(true)

    const fieldDiffs = takeJsonSchemaTypeLabelFieldDiffs(root!)
    expect(fieldDiffs?.format?.data.action).toBe(DiffAction.add)
    expect(fieldDiffs?.format?.styles.after.textHighlighterColor).toBe(HighlightVariant.Green)
    expect(fieldDiffs?.format?.styles.before.textHighlighterColor).toBeUndefined()

    const titleRowDiff = takeJsonSchemaTitleRowDiff(root!)
    expect(titleRowDiff?.data.action).toBe(DiffAction.replace)
    expect(titleRowDiff?.styles.before.backgroundColor).toBe(HighlightVariant.Yellow)
  })

  it("resolves whole-label side display when format and title replace together", () => {
    const merged = mergeSchemas(
      { type: "string", format: "date", title: "Birth date" },
      { type: "string", format: "date-time", title: "Birth timestamp" },
    )
    const tree = buildTree(merged)
    const root = tree.root!
    expect(isJsonSchemaTreeNodeWithDiffs(root)).toBe(true)

    const originDisplay = resolveJsonSchemaTypeLabelSideDisplay(root, root.meta(), ORIGIN_LAYOUT_SIDE)
    const changedDisplay = resolveJsonSchemaTypeLabelSideDisplay(root, root.meta(), CHANGED_LAYOUT_SIDE)

    expect(originDisplay.kind).toBe(SideListDisplayKinds.WHOLE_DIFFS)
    expect(changedDisplay.kind).toBe(SideListDisplayKinds.WHOLE_DIFFS)

    if (originDisplay.kind === SideListDisplayKinds.WHOLE_DIFFS) {
      expect(originDisplay.text).toBe("string (date) <Birth date>")
      expect(originDisplay.diff.styles.before.textHighlighterColor).toBe(HighlightVariant.Yellow)
    }
    if (changedDisplay.kind === SideListDisplayKinds.WHOLE_DIFFS) {
      expect(changedDisplay.text).toBe("string (date-time) <Birth timestamp>")
      expect(changedDisplay.diff.styles.after.textHighlighterColor).toBe(HighlightVariant.Yellow)
    }
  })

  it("resolves partial side display when only format replaces", () => {
    const merged = mergeSchemas(
      { type: "string", format: "date", title: "Birth date" },
      { type: "string", format: "date-time", title: "Birth date" },
    )
    const tree = buildTree(merged)
    const root = tree.root!
    const originDisplay = resolveJsonSchemaTypeLabelSideDisplay(root, root.meta(), ORIGIN_LAYOUT_SIDE)
    const changedDisplay = resolveJsonSchemaTypeLabelSideDisplay(root, root.meta(), CHANGED_LAYOUT_SIDE)

    expect(originDisplay.kind).toBe(SideListDisplayKinds.PARTIAL_DIFFS)
    expect(changedDisplay.kind).toBe(SideListDisplayKinds.PARTIAL_DIFFS)

    if (originDisplay.kind !== SideListDisplayKinds.PARTIAL_DIFFS) {
      throw new Error("expected partial diffs display")
    }
    if (changedDisplay.kind !== SideListDisplayKinds.PARTIAL_DIFFS) {
      throw new Error("expected partial diffs display")
    }

    expect(originDisplay.segments.map(segment => segment.text)).toEqual([
      "string",
      "(date)",
      "<Birth date>",
    ])
    expect(changedDisplay.segments.map(segment => segment.text)).toEqual([
      "string",
      "(date-time)",
      "<Birth date>",
    ])

    expect(originDisplay.segments[1]?.diff?.styles.before.textHighlighterColor).toBe(HighlightVariant.Yellow)
    expect(changedDisplay.segments[1]?.diff?.styles.after.textHighlighterColor).toBe(HighlightVariant.Yellow)
  })

  it("aggregates type replace with yellow chip highlight on both sides", () => {
    const merged = mergeSchemas(
      { type: "string", description: "sample" },
      { type: "integer", description: "sample" },
    )
    const tree = buildTree(merged)
    const mergedRoot = tree.root!
    expect(isJsonSchemaTreeNodeWithDiffs(mergedRoot)).toBe(true)

    const fieldDiffs = takeJsonSchemaTypeLabelFieldDiffs(mergedRoot)
    expect(fieldDiffs?.type?.data.action).toBe(DiffAction.replace)
    expect(fieldDiffs?.type?.styles.before.textHighlighterColor).toBe(HighlightVariant.Yellow)
    expect(fieldDiffs?.type?.styles.after.textHighlighterColor).toBe(HighlightVariant.Yellow)

    const originDisplay = resolveJsonSchemaTypeLabelSideDisplay(mergedRoot, mergedRoot.meta(), ORIGIN_LAYOUT_SIDE)
    expect(originDisplay.kind).toBe(SideListDisplayKinds.PARTIAL_DIFFS)
    if (originDisplay.kind === SideListDisplayKinds.PARTIAL_DIFFS) {
      expect(originDisplay.segments[0]?.text).toBe("string")
      expect(originDisplay.segments[0]?.diff?.styles.before.textHighlighterColor).toBe(HighlightVariant.Yellow)
    }
  })

  it("aggregates format remove with red text highlighter on origin side", () => {
    const merged = mergeSchemas(
      { type: "string", format: "uuid" },
      { type: "string" },
    )
    const tree = buildTree(merged)
    const root = tree.root!
    expect(isJsonSchemaTreeNodeWithDiffs(root)).toBe(true)
    expect(root.kind).toBe(JsonSchemaTreeNodeKinds.ROOT)

    const fieldDiffs = takeJsonSchemaTypeLabelFieldDiffs(root)
    expect(fieldDiffs?.format?.data.action).toBe(DiffAction.remove)
    expect(fieldDiffs?.format?.styles.before.textHighlighterColor).toBe(HighlightVariant.Red)

    const originDisplay = resolveJsonSchemaTypeLabelSideDisplay(root, root.meta(), ORIGIN_LAYOUT_SIDE)
    expect(originDisplay.kind).toBe(SideListDisplayKinds.PARTIAL_DIFFS)
    if (originDisplay.kind === SideListDisplayKinds.PARTIAL_DIFFS) {
      expect(originDisplay.segments.map(segment => segment.text)).toEqual(["string", "(uuid)"])
      expect(originDisplay.segments[1]?.diff?.styles.before.textHighlighterColor).toBe(HighlightVariant.Red)
    }
  })

  it("stores synthetic titleRow diff without chip text highlighter", () => {
    const merged = mergeSchemas(
      { type: "string", title: "Label" },
      { type: "string" },
    )
    const tree = buildTree(merged)
    const root = tree.root!
    const titleRowDiff = root.diffs[JSON_SCHEMA_TITLE_ROW_DIFF_KEY]
    expect(titleRowDiff?.data.action).toBe(DiffAction.replace)
    expect(titleRowDiff?.styles.before.backgroundColor).toBe(HighlightVariant.Yellow)
    expect(titleRowDiff?.styles.before.textHighlighterColor).toBeUndefined()
  })
})
