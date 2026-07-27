import {
  DIFF_HIGHLIGHTING_MODES_DEFAULT,
  HighlightVariant,
  NODE_LEVEL_DIFF_KEY,
  NodeDiffsSeverityPlacemennt,
  DiffHighlightingApplicationMode,
  DiffHiglightingApplicationArea,
} from "@apihub/next-data-model/model/abstract/tree-with-diffs/tree-node.interface"
import { DDL_PROPERTY_TITLE_ROW_DIFF_KEY, resolveColumnEnumValueSideItems, resolveColumnTypeLabelSideDisplay, takeDdlPropertyTitleRowDiff } from "@apihub/next-data-model/model/ddlapi/tree-with-diffs/property-row-diffs"
import { ORIGIN_LAYOUT_SIDE, CHANGED_LAYOUT_SIDE } from "@apihub/next-data-model/model/abstract/layout-side"
import { DdlApiTreeNodeKinds } from "@apihub/next-data-model/model/ddlapi/types/node-kind"
import { buildFromDdl } from "@netcracker/qubership-apihub-ddlapi/parser"
import { apiDiff } from "@netcracker/qubership-apihub-api-diff"
import { DdlApiTreeWithDiffsBuilder } from "../../src/building-service/ddlapi/tree-with-diffs/builder"
import { DdlApiNodeDiffsAggregatorKindColumn } from "../../src/building-service/ddlapi/tree-with-diffs/node-diffs-data/node-diffs/kind-column"
import { DdlApiNodeDiffsSeveritiesAggregatorKindColumn } from "../../src/building-service/ddlapi/tree-with-diffs/node-diffs-data/node-diffs-severities/kind-column"
import { DdlApiNodeDiffsSummaryKindAny } from "../../src/building-service/ddlapi/tree-with-diffs/node-diffs-data/node-diffs-summary/kind-any"
import {
  annotation,
  breaking,
  DiffAction,
  nonBreaking,
} from "@netcracker/qubership-apihub-api-diff"

const TEST_DIFFS_META_KEY = Symbol("test-ddl-diffs-meta-key")

function makeFlagPropertyDiff(
  type: typeof annotation | typeof breaking | typeof nonBreaking,
  action: typeof DiffAction.add | typeof DiffAction.remove,
) {
  const data = action === DiffAction.add
    ? {
      type,
      action,
      scope: "root",
      afterValue: true,
      afterDeclarationPaths: [["columns", "id", "isPrimaryKey"]],
    }
    : {
      type,
      action,
      scope: "root",
      beforeValue: true,
      beforeDeclarationPaths: [["columns", "id", "isPrimaryKey"]],
    }

  return {
    data,
    styles: {
      before: { isContentVisible: action === DiffAction.remove, isHeaderVisible: true },
      after: { isContentVisible: action === DiffAction.add, isHeaderVisible: true },
    },
    flags: {
      before: { increaseLevel: false },
      after: { increaseLevel: false },
    },
    highlightingMode: DIFF_HIGHLIGHTING_MODES_DEFAULT,
  }
}

describe("DDL property row diff aggregators", () => {
  const diffsMetaKeys = {
    diffsMetaKey: TEST_DIFFS_META_KEY,
    aggregatedDiffsMetaKey: Symbol("aggregated"),
  }

  it("stores title-row diff as replace when only a flag diff is present", () => {
    const aggregator = new DdlApiNodeDiffsAggregatorKindColumn()
    const crawlValue = {
      columnName: "id",
      [TEST_DIFFS_META_KEY]: {
        isPrimaryKey: {
          type: nonBreaking,
          action: DiffAction.add,
          scope: "root",
          afterValue: true,
          afterDeclarationPaths: [["columns", "id"]],
        },
      },
    }

    const nodeDiffs = aggregator.aggregate(crawlValue, diffsMetaKeys, "id")
    const titleRowDiff = nodeDiffs?.[DDL_PROPERTY_TITLE_ROW_DIFF_KEY as keyof typeof nodeDiffs]

    expect(titleRowDiff?.data.action).toBe(DiffAction.replace)
    expect(titleRowDiff?.styles.before.backgroundColor).toBe("yellow")
    expect(titleRowDiff?.styles.after.backgroundColor).toBe("yellow")
    expect(titleRowDiff?.styles.before.textHighlighterColor).toBeUndefined()
    expect(titleRowDiff?.styles.after.textHighlighterColor).toBeUndefined()
  })

  it("derives side-aware flag diffs from whole-column add for badge rendering", () => {
    const aggregator = new DdlApiNodeDiffsAggregatorKindColumn()
    const crawlValue = {
      columnName: "id",
      isPrimaryKey: true,
      isNotNull: true,
      [TEST_DIFFS_META_KEY]: {
        [NODE_LEVEL_DIFF_KEY]: {
          type: nonBreaking,
          action: DiffAction.add,
          scope: "root",
          afterValue: { columnName: "id" },
          afterDeclarationPaths: [["columns", "id"]],
        },
        isPrimaryKey: {
          type: nonBreaking,
          action: DiffAction.add,
          scope: "root",
          afterValue: true,
          afterDeclarationPaths: [["columns", "id", "isPrimaryKey"]],
        },
        isNotNull: {
          type: nonBreaking,
          action: DiffAction.add,
          scope: "root",
          afterValue: true,
          afterDeclarationPaths: [["columns", "id", "isNotNull"]],
        },
      },
    }

    const nodeDiffs = aggregator.aggregate(crawlValue, diffsMetaKeys, "id")

    expect(nodeDiffs?.[NODE_LEVEL_DIFF_KEY]?.data.action).toBe(DiffAction.add)
    expect(nodeDiffs?.isPrimaryKey?.data.action).toBe(DiffAction.add)
    expect(nodeDiffs?.isPrimaryKey?.styles.before.isContentVisible).toBe(false)
    expect(nodeDiffs?.isPrimaryKey?.styles.after.isContentVisible).toBe(true)
    expect(nodeDiffs?.isPrimaryKey?.highlightingMode.get(DiffHiglightingApplicationArea.Default))
      .toBe(DiffHighlightingApplicationMode.Invisible)
    expect(nodeDiffs?.isNotNull?.data.action).toBe(DiffAction.add)
    expect(nodeDiffs?.isNotNull?.styles.before.isContentVisible).toBe(false)
    expect(nodeDiffs?.isNotNull?.styles.after.isContentVisible).toBe(true)
    expect(nodeDiffs?.[DDL_PROPERTY_TITLE_ROW_DIFF_KEY]).toBe(nodeDiffs?.[NODE_LEVEL_DIFF_KEY])
  })

  it("aggregates a generated-expression row diff when the whole column is added", () => {
    const aggregator = new DdlApiNodeDiffsAggregatorKindColumn()
    const crawlValue = {
      columnName: "summary",
      generatedExpression: "a + b",
      [TEST_DIFFS_META_KEY]: {
        [NODE_LEVEL_DIFF_KEY]: {
          type: nonBreaking,
          action: DiffAction.add,
          scope: "root",
          afterValue: { columnName: "summary" },
          afterDeclarationPaths: [["columns", "summary"]],
        },
        generatedExpression: {
          type: nonBreaking,
          action: DiffAction.add,
          scope: "root",
          afterValue: "a + b",
          afterDeclarationPaths: [["columns", "summary", "generatedExpression"]],
        },
      },
    }

    const nodeDiffs = aggregator.aggregate(crawlValue, diffsMetaKeys, "summary")

    expect(nodeDiffs?.generatedExpression?.data.action).toBe(DiffAction.add)
    expect(nodeDiffs?.generatedExpression?.styles.before.backgroundColor).toBe("gray")
    expect(nodeDiffs?.generatedExpression?.styles.after.backgroundColor).toBe("green")
    expect(nodeDiffs?.generatedExpression?.styles.before.textHighlighterColor).toBeUndefined()
    expect(nodeDiffs?.generatedExpression?.styles.after.textHighlighterColor).toBeUndefined()
  })

  it("styles a removed generated-expression row as removed", () => {
    const aggregator = new DdlApiNodeDiffsAggregatorKindColumn()
    const crawlValue = {
      columnName: "summary",
      [TEST_DIFFS_META_KEY]: {
        generatedExpression: {
          type: breaking,
          action: DiffAction.remove,
          scope: "root",
          beforeValue: "a + b",
          beforeDeclarationPaths: [["columns", "summary", "generatedExpression"]],
        },
      },
    }

    const generatedExpressionDiff = aggregator.aggregate(
      crawlValue,
      diffsMetaKeys,
      "summary",
    )?.generatedExpression

    expect(generatedExpressionDiff?.styles.before.backgroundColor).toBe("red")
    expect(generatedExpressionDiff?.styles.before.isContentVisible).toBe(true)
    expect(generatedExpressionDiff?.styles.after.backgroundColor).toBe("gray")
    expect(generatedExpressionDiff?.styles.after.isContentVisible).toBe(false)
    expect(generatedExpressionDiff?.styles.before.textHighlighterColor).toBeUndefined()
    expect(generatedExpressionDiff?.styles.after.textHighlighterColor).toBeUndefined()
  })

  it("styles only a generated-expression value change as replaced", () => {
    const aggregator = new DdlApiNodeDiffsAggregatorKindColumn()
    const crawlValue = {
      columnName: "summary",
      generatedExpression: "b + c",
      [TEST_DIFFS_META_KEY]: {
        generatedExpression: {
          type: breaking,
          action: DiffAction.replace,
          scope: "root",
          beforeValue: "a + b",
          afterValue: "b + c",
          beforeDeclarationPaths: [["columns", "summary", "generatedExpression"]],
          afterDeclarationPaths: [["columns", "summary", "generatedExpression"]],
        },
      },
    }

    const generatedExpressionDiff = aggregator.aggregate(
      crawlValue,
      diffsMetaKeys,
      "summary",
    )?.generatedExpression

    expect(generatedExpressionDiff?.styles.before.backgroundColor).toBe("yellow")
    expect(generatedExpressionDiff?.styles.after.backgroundColor).toBe("yellow")
    expect(generatedExpressionDiff?.styles.before.textHighlighterColor).toBe(HighlightVariant.Yellow)
    expect(generatedExpressionDiff?.styles.after.textHighlighterColor).toBe(HighlightVariant.Yellow)
  })

  it("aggregates a description row diff when the whole column is added", () => {
    const aggregator = new DdlApiNodeDiffsAggregatorKindColumn()
    const crawlValue = {
      columnName: "code",
      description: "column description text",
      [TEST_DIFFS_META_KEY]: {
        [NODE_LEVEL_DIFF_KEY]: {
          type: nonBreaking,
          action: DiffAction.add,
          scope: "root",
          afterValue: { columnName: "code" },
          afterDeclarationPaths: [["columns", "code"]],
        },
        description: {
          type: nonBreaking,
          action: DiffAction.add,
          scope: "root",
          afterValue: "column description text",
          afterDeclarationPaths: [["columns", "code", "description"]],
        },
      },
    }

    const nodeDiffs = aggregator.aggregate(crawlValue, diffsMetaKeys, "code")

    expect(nodeDiffs?.description?.data.action).toBe(DiffAction.add)
    expect(nodeDiffs?.description?.styles.before.backgroundColor).toBe("gray")
    expect(nodeDiffs?.description?.styles.after.backgroundColor).toBe("green")
    expect(nodeDiffs?.description?.styles.before.textHighlighterColor).toBeUndefined()
    expect(nodeDiffs?.description?.styles.after.textHighlighterColor).toBeUndefined()
  })

  it("derives description side visibility from whole-column remove when no field diff is present", () => {
    const aggregator = new DdlApiNodeDiffsAggregatorKindColumn()
    const crawlValue = {
      columnName: "code",
      description: "column description text",
      [TEST_DIFFS_META_KEY]: {
        [NODE_LEVEL_DIFF_KEY]: {
          type: nonBreaking,
          action: DiffAction.remove,
          scope: "root",
          beforeValue: { columnName: "code" },
          beforeDeclarationPaths: [["columns", "code"]],
        },
      },
    }

    const descriptionDiff = aggregator.aggregate(crawlValue, diffsMetaKeys, "code")?.description

    expect(descriptionDiff?.data.action).toBe(DiffAction.remove)
    expect(descriptionDiff?.styles.before.backgroundColor).toBe("red")
    expect(descriptionDiff?.styles.before.isContentVisible).toBe(true)
    expect(descriptionDiff?.styles.after.backgroundColor).toBe("gray")
    expect(descriptionDiff?.styles.after.isContentVisible).toBe(false)
    expect(descriptionDiff?.styles.before.textHighlighterColor).toBeUndefined()
    expect(descriptionDiff?.styles.after.textHighlighterColor).toBeUndefined()
  })

  it("styles a removed description row as removed", () => {
    const aggregator = new DdlApiNodeDiffsAggregatorKindColumn()
    const crawlValue = {
      columnName: "code",
      [TEST_DIFFS_META_KEY]: {
        description: {
          type: breaking,
          action: DiffAction.remove,
          scope: "root",
          beforeValue: "column description text",
          beforeDeclarationPaths: [["columns", "code", "description"]],
        },
      },
    }

    const descriptionDiff = aggregator.aggregate(
      crawlValue,
      diffsMetaKeys,
      "code",
    )?.description

    expect(descriptionDiff?.styles.before.backgroundColor).toBe("red")
    expect(descriptionDiff?.styles.before.isContentVisible).toBe(true)
    expect(descriptionDiff?.styles.after.backgroundColor).toBe("gray")
    expect(descriptionDiff?.styles.after.isContentVisible).toBe(false)
    expect(descriptionDiff?.styles.before.textHighlighterColor).toBeUndefined()
    expect(descriptionDiff?.styles.after.textHighlighterColor).toBeUndefined()
  })

  it("styles only a description value change as replaced", () => {
    const aggregator = new DdlApiNodeDiffsAggregatorKindColumn()
    const crawlValue = {
      columnName: "code",
      description: "CHANGED column description text",
      [TEST_DIFFS_META_KEY]: {
        description: {
          type: breaking,
          action: DiffAction.replace,
          scope: "root",
          beforeValue: "column description text",
          afterValue: "CHANGED column description text",
          beforeDeclarationPaths: [["columns", "code", "description"]],
          afterDeclarationPaths: [["columns", "code", "description"]],
        },
      },
    }

    const descriptionDiff = aggregator.aggregate(
      crawlValue,
      diffsMetaKeys,
      "code",
    )?.description

    expect(descriptionDiff?.styles.before.backgroundColor).toBe("yellow")
    expect(descriptionDiff?.styles.after.backgroundColor).toBe("yellow")
    expect(descriptionDiff?.styles.before.textHighlighterColor).toBe(HighlightVariant.Yellow)
    expect(descriptionDiff?.styles.after.textHighlighterColor).toBe(HighlightVariant.Yellow)
  })

  it("applies description-row severity when the whole column is added with a description", () => {
    const severitiesAggregator = new DdlApiNodeDiffsSeveritiesAggregatorKindColumn()
    const nodeDiffs = {
      [NODE_LEVEL_DIFF_KEY]: makeFlagPropertyDiff(nonBreaking, DiffAction.add),
      description: makeFlagPropertyDiff(breaking, DiffAction.add),
    }

    const diffsSeverities = severitiesAggregator.aggregate(nodeDiffs)

    expect(diffsSeverities?.[NodeDiffsSeverityPlacemennt.TitleRow]?.type).toBe(nonBreaking)
    expect(diffsSeverities?.[NodeDiffsSeverityPlacemennt.DescriptionRow]?.type).toBe(breaking)
  })

  it("normalizes a boolean replace diff to an added visible badge", () => {
    const aggregator = new DdlApiNodeDiffsAggregatorKindColumn()
    const crawlValue = {
      columnName: "id",
      isNotNull: true,
      [TEST_DIFFS_META_KEY]: {
        isNotNull: {
          type: nonBreaking,
          action: DiffAction.replace,
          scope: "root",
          beforeValue: false,
          afterValue: true,
          beforeDeclarationPaths: [["columns", "id", "isNotNull"]],
          afterDeclarationPaths: [["columns", "id", "isNotNull"]],
        },
      },
    }

    const nodeDiffs = aggregator.aggregate(crawlValue, diffsMetaKeys, "id")
    const notNullDiff = nodeDiffs?.isNotNull

    expect(notNullDiff?.data.action).toBe(DiffAction.add)
    expect(notNullDiff?.styles.before.isContentVisible).toBe(false)
    expect(notNullDiff?.styles.after.isContentVisible).toBe(true)
  })

  it("aggregates foreign-key target diffs keyed by target identity", () => {
    const aggregator = new DdlApiNodeDiffsAggregatorKindColumn()
    const crawlValue = {
      columnName: "ref_id",
      isForeignKey: true,
      foreignKeyTargets: [
        { schemaName: "public", tableName: "target", columnName: "id" },
        { schemaName: "public", tableName: "target", columnName: "code" },
      ],
      [TEST_DIFFS_META_KEY]: {
        foreignKeyTargets: {
          "public\0target\0id": {
            type: nonBreaking,
            action: DiffAction.remove,
            scope: "root",
            beforeValue: {},
            beforeDeclarationPaths: [["foreignKeys", 0]],
          },
          "public\0target\0code": {
            type: nonBreaking,
            action: DiffAction.add,
            scope: "root",
            afterValue: {},
            afterDeclarationPaths: [["foreignKeys", 1]],
          },
        },
      },
    }

    const nodeDiffs = aggregator.aggregate(crawlValue, diffsMetaKeys, "ref_id")

    expect(nodeDiffs?.foreignKeyTargetDiffs?.["public\0target\0id"]?.data.action).toBe(DiffAction.remove)
    expect(nodeDiffs?.foreignKeyTargetDiffs?.["public\0target\0code"]?.data.action).toBe(DiffAction.add)
    expect(nodeDiffs?.foreignKeyTargetDiffs?.["public\0target\0id"]?.styles.before.textHighlighterColor)
      .toBe(HighlightVariant.Red)
    expect(nodeDiffs?.foreignKeyTargetDiffs?.["public\0target\0code"]?.styles.after.textHighlighterColor)
      .toBe(HighlightVariant.Green)
    expect(nodeDiffs?.[DDL_PROPERTY_TITLE_ROW_DIFF_KEY]?.data.action).toBe(DiffAction.replace)
    expect(nodeDiffs?.[DDL_PROPERTY_TITLE_ROW_DIFF_KEY]?.styles.before.textHighlighterColor).toBeUndefined()
    expect(nodeDiffs?.[DDL_PROPERTY_TITLE_ROW_DIFF_KEY]?.styles.after.textHighlighterColor).toBeUndefined()
  })

  it("summarises nested foreign-key target diffs without throwing", () => {
    const summaryAggregator = new DdlApiNodeDiffsSummaryKindAny()
    const nodeDiffs = {
      foreignKeyTargetDiffs: {
        "public\0target\0id": makeFlagPropertyDiff(nonBreaking, DiffAction.remove),
        "public\0target\0code": makeFlagPropertyDiff(nonBreaking, DiffAction.add),
      },
    }

    const summary = summaryAggregator.aggregate(nodeDiffs)

    expect(summary?.has(nonBreaking)).toBe(true)
    expect(summary?.size).toBe(1)
  })

  it("picks the highest title-row severity from column flag diffs", () => {
    const severitiesAggregator = new DdlApiNodeDiffsSeveritiesAggregatorKindColumn()
    const nodeDiffs = {
      isPrimaryKey: makeFlagPropertyDiff(annotation, DiffAction.add),
      isUnique: makeFlagPropertyDiff(breaking, DiffAction.add),
    }

    const diffsSeverities = severitiesAggregator.aggregate(nodeDiffs)

    expect(diffsSeverities?.[NodeDiffsSeverityPlacemennt.TitleRow]?.type).toBe(breaking)
  })

  it("uses the resolved node diff for the additional-info-row severity", () => {
    const severitiesAggregator = new DdlApiNodeDiffsSeveritiesAggregatorKindColumn()
    const nodeDiffs = {
      [NODE_LEVEL_DIFF_KEY]: makeFlagPropertyDiff(annotation, DiffAction.add),
    }

    const diffsSeverities = severitiesAggregator.aggregate(nodeDiffs)

    expect(diffsSeverities?.[NodeDiffsSeverityPlacemennt.AdditionalInfoRow]?.type).toBe(annotation)
  })

  it("picks the highest additional-info-row severity from generated diffs", () => {
    const severitiesAggregator = new DdlApiNodeDiffsSeveritiesAggregatorKindColumn()
    const nodeDiffs = {
      [NODE_LEVEL_DIFF_KEY]: makeFlagPropertyDiff(annotation, DiffAction.add),
      isGenerated: makeFlagPropertyDiff(nonBreaking, DiffAction.add),
      generatedExpression: makeFlagPropertyDiff(breaking, DiffAction.add),
    }

    const diffsSeverities = severitiesAggregator.aggregate(nodeDiffs)

    expect(diffsSeverities?.[NodeDiffsSeverityPlacemennt.AdditionalInfoRow]?.type).toBe(breaking)
  })

  it("aggregates enum value add diff with green border shadow on changed side", () => {
    const aggregator = new DdlApiNodeDiffsAggregatorKindColumn()
    const crawlValue = {
      columnName: "status",
      enumValues: ["new", "active", "suspended"],
      [TEST_DIFFS_META_KEY]: {
        enumValues: {
          suspended: {
            type: nonBreaking,
            action: DiffAction.add,
            scope: "root",
            afterValue: "suspended",
            afterDeclarationPaths: [["types", "user_status", "values", 2]],
          },
        },
      },
    }

    const nodeDiffs = aggregator.aggregate(crawlValue, diffsMetaKeys, "status")
    const suspendedDiff = nodeDiffs?.enumValueDiffs?.suspended

    expect(suspendedDiff?.data.action).toBe(DiffAction.add)
    expect(suspendedDiff?.styles.before.borderShadowColor).toBeUndefined()
    expect(suspendedDiff?.styles.after.borderShadowColor).toBe(HighlightVariant.Green)
    expect(suspendedDiff?.styles.after.textHighlighterColor).toBeUndefined()
    expect(nodeDiffs?.enumValuesRowColorizingDiff?.data.action).toBe(DiffAction.replace)
    expect(nodeDiffs?.enumValuesRowColorizingDiff?.styles.before.backgroundColor).toBe(HighlightVariant.Yellow)
    expect(nodeDiffs?.enumValuesRowColorizingDiff?.styles.after.backgroundColor).toBe(HighlightVariant.Yellow)
  })

  it("aggregates enum value remove diff with red border and muted font on origin side", () => {
    const aggregator = new DdlApiNodeDiffsAggregatorKindColumn()
    const crawlValue = {
      columnName: "status",
      enumValues: ["new", "active"],
      [TEST_DIFFS_META_KEY]: {
        enumValues: {
          suspended: {
            type: nonBreaking,
            action: DiffAction.remove,
            scope: "root",
            beforeValue: "suspended",
            beforeDeclarationPaths: [["types", "user_status", "values", 2]],
          },
        },
      },
    }

    const nodeDiffs = aggregator.aggregate(crawlValue, diffsMetaKeys, "status")
    const suspendedDiff = nodeDiffs?.enumValueDiffs?.suspended

    expect(suspendedDiff?.data.action).toBe(DiffAction.remove)
    expect(suspendedDiff?.styles.before.borderShadowColor).toBe(HighlightVariant.Red)
    expect(suspendedDiff?.styles.before.isFontMuted).toBe(true)
    expect(suspendedDiff?.styles.after.borderShadowColor).toBeUndefined()
  })

  it("aggregates enum value replace diff with yellow text highlighter only", () => {
    const aggregator = new DdlApiNodeDiffsAggregatorKindColumn()
    const crawlValue = {
      columnName: "status",
      enumValues: ["new", "enabled"],
      [TEST_DIFFS_META_KEY]: {
        enumValues: {
          active: {
            type: nonBreaking,
            action: DiffAction.replace,
            scope: "root",
            beforeValue: "active",
            afterValue: "enabled",
            beforeDeclarationPaths: [["types", "user_status", "values", 1]],
            afterDeclarationPaths: [["types", "user_status", "values", 1]],
          },
        },
      },
    }

    const nodeDiffs = aggregator.aggregate(crawlValue, diffsMetaKeys, "status")
    const activeDiff = nodeDiffs?.enumValueDiffs?.active

    expect(activeDiff?.data.action).toBe(DiffAction.replace)
    expect(activeDiff?.styles.before.textHighlighterColor).toBe(HighlightVariant.Yellow)
    expect(activeDiff?.styles.after.textHighlighterColor).toBe(HighlightVariant.Yellow)
    expect(activeDiff?.styles.before.backgroundColor).toBeUndefined()
    expect(activeDiff?.styles.after.backgroundColor).toBeUndefined()
    expect(activeDiff?.styles.before.borderShadowColor).toBeUndefined()
  })

  it("summarises nested enum value diffs without throwing", () => {
    const summaryAggregator = new DdlApiNodeDiffsSummaryKindAny()
    const nodeDiffs = {
      enumValueDiffs: {
        suspended: makeFlagPropertyDiff(nonBreaking, DiffAction.add),
      },
    }

    const summary = summaryAggregator.aggregate(nodeDiffs)

    expect(summary?.has(nonBreaking)).toBe(true)
  })

  it("resolves side-specific enum value chip lists", () => {
    const node = {
      kind: DdlApiTreeNodeKinds.COLUMN,
      value: () => ({
        columnName: "status",
        enumValues: ["new", "active", "suspended"],
      }),
      diffs: {
        enumValueDiffs: {
          suspended: {
            data: {
              type: nonBreaking,
              action: DiffAction.add,
              scope: "root",
              afterValue: "suspended",
              afterDeclarationPaths: [["types", "user_status", "values", 2]],
            },
            styles: {
              before: { isContentVisible: false, isHeaderVisible: true },
              after: {
                isContentVisible: true,
                isHeaderVisible: true,
                borderShadowColor: HighlightVariant.Green,
              },
            },
            flags: {
              before: { increaseLevel: false },
              after: { increaseLevel: false },
            },
            highlightingMode: DIFF_HIGHLIGHTING_MODES_DEFAULT,
          },
        },
      },
    }

    expect(resolveColumnEnumValueSideItems(node as never, "origin").map(item => item.literal))
      .toEqual(["new", "active"])
    expect(resolveColumnEnumValueSideItems(node as never, "changed").map(item => item.literal))
      .toEqual(["new", "active", "suspended"])
  })

  it("aggregates column type field diffs from nested columnType crawl metadata", () => {
    const aggregator = new DdlApiNodeDiffsAggregatorKindColumn()
    const crawlValue = {
      columnName: "sample_col",
      columnType: {
        kind: "StringType",
        typeName: "varchar",
        size: 1000,
        label: "varchar (1000)",
        [TEST_DIFFS_META_KEY]: {
          size: {
            type: nonBreaking,
            action: DiffAction.replace,
            scope: "root",
            beforeValue: 100,
            afterValue: 1000,
            beforeDeclarationPaths: [["columns", "sample_col", "type", "size"]],
            afterDeclarationPaths: [["columns", "sample_col", "type", "size"]],
          },
        },
      },
    }

    const nodeDiffs = aggregator.aggregate(crawlValue, diffsMetaKeys, "sample_col")

    expect(nodeDiffs?.columnTypeFieldDiffs?.size?.data.action).toBe(DiffAction.replace)
    expect(nodeDiffs?.columnTypeFieldDiffs?.size?.styles.before.textHighlighterColor).toBe(HighlightVariant.Yellow)
    expect(nodeDiffs?.columnTypeFieldDiffs?.size?.styles.before.backgroundColor).toBeUndefined()
  })

  it("stores synthetic title-row replace when only column type field diffs are present", () => {
    const aggregator = new DdlApiNodeDiffsAggregatorKindColumn()
    const crawlValue = {
      columnName: "sample_col",
      columnType: {
        kind: "IntegerType",
        typeName: "bigint",
        label: "bigint",
        [TEST_DIFFS_META_KEY]: {
          typeName: {
            type: breaking,
            action: DiffAction.replace,
            scope: "root",
            beforeValue: "int4",
            afterValue: "bigint",
            beforeDeclarationPaths: [["columns", "sample_col", "type", "type"]],
            afterDeclarationPaths: [["columns", "sample_col", "type", "type"]],
          },
        },
      },
    }

    const nodeDiffs = aggregator.aggregate(crawlValue, diffsMetaKeys, "sample_col")
    const titleRowDiff = nodeDiffs?.[DDL_PROPERTY_TITLE_ROW_DIFF_KEY as keyof typeof nodeDiffs]

    expect(titleRowDiff?.data.action).toBe(DiffAction.replace)
    expect(titleRowDiff?.styles.before.backgroundColor).toBe(HighlightVariant.Yellow)
    expect(titleRowDiff?.styles.after.backgroundColor).toBe(HighlightVariant.Yellow)
    expect(titleRowDiff?.styles.before.textHighlighterColor).toBeUndefined()
    expect(titleRowDiff?.styles.after.textHighlighterColor).toBeUndefined()
  })

  it("prefers flag diffs over column type diffs for the title row", () => {
    const aggregator = new DdlApiNodeDiffsAggregatorKindColumn()
    const crawlValue = {
      columnName: "id",
      isUnique: true,
      [TEST_DIFFS_META_KEY]: {
        isUnique: {
          type: nonBreaking,
          action: DiffAction.add,
          scope: "root",
          afterValue: true,
          afterDeclarationPaths: [["columns", "id", "isUnique"]],
        },
      },
      columnType: {
        kind: "IntegerType",
        typeName: "bigint",
        label: "bigint",
        [TEST_DIFFS_META_KEY]: {
          typeName: {
            type: breaking,
            action: DiffAction.replace,
            scope: "root",
            beforeValue: "int4",
            afterValue: "bigint",
            beforeDeclarationPaths: [["columns", "id", "type", "type"]],
            afterDeclarationPaths: [["columns", "id", "type", "type"]],
          },
        },
      },
    }

    const nodeDiffs = aggregator.aggregate(crawlValue, diffsMetaKeys, "id")
    const titleRowDiff = nodeDiffs?.[DDL_PROPERTY_TITLE_ROW_DIFF_KEY as keyof typeof nodeDiffs]

    expect(nodeDiffs?.isUnique?.data.action).toBe(DiffAction.add)
    expect(nodeDiffs?.columnTypeFieldDiffs?.typeName).toBeDefined()
    expect(titleRowDiff?.data.action).toBe(DiffAction.replace)
    expect(titleRowDiff?.data.type).toBe(nonBreaking)
  })

  it("includes column type field diffs in title-row severity", () => {
    const severitiesAggregator = new DdlApiNodeDiffsSeveritiesAggregatorKindColumn()
    const nodeDiffs = {
      columnTypeFieldDiffs: {
        typeName: {
          data: {
            type: breaking,
            action: DiffAction.replace,
            scope: "root",
            beforeValue: "int4",
            afterValue: "bigint",
            beforeDeclarationPaths: [["columns", "id", "type", "type"]],
            afterDeclarationPaths: [["columns", "id", "type", "type"]],
          },
          styles: {
            before: { isContentVisible: true, isHeaderVisible: true },
            after: { isContentVisible: true, isHeaderVisible: true },
          },
          flags: {
            before: { increaseLevel: false },
            after: { increaseLevel: false },
          },
          highlightingMode: DIFF_HIGHLIGHTING_MODES_DEFAULT,
        },
      },
    }

    const diffsSeverities = severitiesAggregator.aggregate(nodeDiffs)

    expect(diffsSeverities?.[NodeDiffsSeverityPlacemennt.TitleRow]?.type).toBe(breaking)
  })

  it("resolves monolithic column type label display when only the type name changes", () => {
    const node = {
      kind: DdlApiTreeNodeKinds.COLUMN,
      value: () => ({
        columnName: "id",
        columnType: {
          kind: "IntegerType",
          typeName: "bigint",
          label: "bigint",
        },
      }),
      diffs: {
        columnTypeFieldDiffs: {
          typeName: {
            data: {
              type: breaking,
              action: DiffAction.replace,
              scope: "root",
              beforeValue: "int4",
              afterValue: "bigint",
              beforeDeclarationPaths: [["columns", "id", "type", "type"]],
              afterDeclarationPaths: [["columns", "id", "type", "type"]],
            },
            styles: {
              before: {
                isContentVisible: true,
                isHeaderVisible: true,
                textHighlighterColor: HighlightVariant.Yellow,
              },
              after: {
                isContentVisible: true,
                isHeaderVisible: true,
                textHighlighterColor: HighlightVariant.Yellow,
              },
            },
            flags: {
              before: { increaseLevel: false },
              after: { increaseLevel: false },
            },
            highlightingMode: DIFF_HIGHLIGHTING_MODES_DEFAULT,
          },
        },
      },
    }

    expect(resolveColumnTypeLabelSideDisplay(node as never, ORIGIN_LAYOUT_SIDE)).toEqual({
      kind: "monolithic",
      text: "int4",
      diff: expect.objectContaining({
        styles: expect.objectContaining({
          before: expect.objectContaining({
            textHighlighterColor: HighlightVariant.Yellow,
          }),
        }),
      }),
    })
    expect(resolveColumnTypeLabelSideDisplay(node as never, CHANGED_LAYOUT_SIDE)).toEqual({
      kind: "monolithic",
      text: "bigint",
      diff: expect.objectContaining({
        styles: expect.objectContaining({
          after: expect.objectContaining({
            textHighlighterColor: HighlightVariant.Yellow,
          }),
        }),
      }),
    })
  })

  it("resolves segmented column type label display when only a parameter changes", () => {
    const node = {
      kind: DdlApiTreeNodeKinds.COLUMN,
      value: () => ({
        columnName: "sample_col",
        columnType: {
          kind: "StringType",
          typeName: "varchar",
          size: 1000,
          label: "varchar (1000)",
        },
      }),
      diffs: {
        columnTypeFieldDiffs: {
          size: {
            data: {
              type: nonBreaking,
              action: DiffAction.replace,
              scope: "root",
              beforeValue: 100,
              afterValue: 1000,
              beforeDeclarationPaths: [["columns", "sample_col", "type", "size"]],
              afterDeclarationPaths: [["columns", "sample_col", "type", "size"]],
            },
            styles: {
              before: {
                isContentVisible: true,
                isHeaderVisible: true,
                textHighlighterColor: HighlightVariant.Yellow,
              },
              after: {
                isContentVisible: true,
                isHeaderVisible: true,
                textHighlighterColor: HighlightVariant.Yellow,
              },
            },
            flags: {
              before: { increaseLevel: false },
              after: { increaseLevel: false },
            },
            highlightingMode: DIFF_HIGHLIGHTING_MODES_DEFAULT,
          },
        },
      },
    }

    const originDisplay = resolveColumnTypeLabelSideDisplay(node as never, ORIGIN_LAYOUT_SIDE)
    const changedDisplay = resolveColumnTypeLabelSideDisplay(node as never, CHANGED_LAYOUT_SIDE)

    expect(originDisplay).toEqual({
      kind: "segmented",
      segments: [
        { text: "varchar" },
        { text: " (" },
        { text: "100", diff: node.diffs.columnTypeFieldDiffs.size },
        { text: ")" },
      ],
    })
    expect(changedDisplay).toEqual({
      kind: "segmented",
      segments: [
        { text: "varchar" },
        { text: " (" },
        { text: "1000", diff: node.diffs.columnTypeFieldDiffs.size },
        { text: ")" },
      ],
    })
  })

  it("resolves segmented column type label display when type and parameter change differently", () => {
    const node = {
      kind: DdlApiTreeNodeKinds.COLUMN,
      value: () => ({
        columnName: "sample_col",
        columnType: {
          kind: "StringType",
          typeName: "text",
          label: "text",
        },
      }),
      diffs: {
        columnTypeFieldDiffs: {
          typeName: {
            data: {
              type: breaking,
              action: DiffAction.replace,
              scope: "root",
              beforeValue: "varchar",
              afterValue: "text",
              beforeDeclarationPaths: [["columns", "sample_col", "type", "type"]],
              afterDeclarationPaths: [["columns", "sample_col", "type", "type"]],
            },
            styles: {
              before: {
                isContentVisible: true,
                isHeaderVisible: true,
                textHighlighterColor: HighlightVariant.Yellow,
              },
              after: {
                isContentVisible: true,
                isHeaderVisible: true,
                textHighlighterColor: HighlightVariant.Yellow,
              },
            },
            flags: {
              before: { increaseLevel: false },
              after: { increaseLevel: false },
            },
            highlightingMode: DIFF_HIGHLIGHTING_MODES_DEFAULT,
          },
          size: {
            data: {
              type: breaking,
              action: DiffAction.remove,
              scope: "root",
              beforeValue: 100,
              beforeDeclarationPaths: [["columns", "sample_col", "type", "size"]],
            },
            styles: {
              before: {
                isContentVisible: true,
                isHeaderVisible: true,
                textHighlighterColor: HighlightVariant.Red,
              },
              after: {
                isContentVisible: false,
                isHeaderVisible: true,
              },
            },
            flags: {
              before: { increaseLevel: false },
              after: { increaseLevel: false },
            },
            highlightingMode: DIFF_HIGHLIGHTING_MODES_DEFAULT,
          },
        },
      },
    }

    const originDisplay = resolveColumnTypeLabelSideDisplay(node as never, ORIGIN_LAYOUT_SIDE)
    const changedDisplay = resolveColumnTypeLabelSideDisplay(node as never, CHANGED_LAYOUT_SIDE)

    expect(originDisplay.kind).toBe("segmented")
    if (originDisplay.kind === "segmented") {
      expect(originDisplay.segments.map(segment => segment.text)).toEqual([
        "varchar",
        " (",
        "100",
        ")",
      ])
      expect(originDisplay.segments[0]?.diff).toBe(node.diffs.columnTypeFieldDiffs.typeName)
      expect(originDisplay.segments[2]?.diff).toBe(node.diffs.columnTypeFieldDiffs.size)
    }

    expect(changedDisplay.kind).toBe("segmented")
    if (changedDisplay.kind === "segmented") {
      expect(changedDisplay.segments.map(segment => segment.text)).toEqual(["text"])
      expect(changedDisplay.segments[0]?.diff).toBe(node.diffs.columnTypeFieldDiffs.typeName)
    }
  })

  it("formats integer-to-varchar sample 004 label with a space before parameters", async () => {
    const beforeSql = `CREATE TABLE public.t (
      id integer,
      sample_col integer
    );`
    const afterSql = `CREATE TABLE public.t (
      id integer,
      sample_col varchar(100)
    );`

    const merged = apiDiff(
      await buildFromDdl(beforeSql),
      await buildFromDdl(afterSql),
      {
        metaKey: TEST_DIFFS_META_KEY,
        normalizedResult: false,
      },
    ).merged

    const tree = new DdlApiTreeWithDiffsBuilder({
      source: merged,
      tableKey: {
        schemaName: "public",
        name: "t",
      },
      diffsMetaKeys: {
        diffsMetaKey: TEST_DIFFS_META_KEY,
        aggregatedDiffsMetaKey: Symbol("aggregated"),
      },
    }).build()

    const sampleColumn = [...tree.nodes.values()].find(
      node => node.kind === DdlApiTreeNodeKinds.COLUMN && node.key === "sample_col",
    )

    expect(sampleColumn).toBeDefined()

    const changedDisplay = resolveColumnTypeLabelSideDisplay(sampleColumn as never, CHANGED_LAYOUT_SIDE)
    const originDisplay = resolveColumnTypeLabelSideDisplay(sampleColumn as never, ORIGIN_LAYOUT_SIDE)

    const joinSegments = (
      display: ReturnType<typeof resolveColumnTypeLabelSideDisplay>,
    ): string | undefined => {
      if (display.kind === "plain" || display.kind === "monolithic") {
        return display.text
      }
      return display.segments.map(segment => segment.text).join("")
    }

    expect(joinSegments(originDisplay)).toBe("integer")
    expect(joinSegments(changedDisplay)).toBe("varchar (100)")

    const titleRowDiff = takeDdlPropertyTitleRowDiff(sampleColumn as never)
    expect(titleRowDiff?.data.action).toBe(DiffAction.replace)
    expect(titleRowDiff?.styles.before.backgroundColor).toBe(HighlightVariant.Yellow)
    expect(titleRowDiff?.styles.after.backgroundColor).toBe(HighlightVariant.Yellow)
    expect(titleRowDiff?.styles.before.textHighlighterColor).toBeUndefined()
    expect(titleRowDiff?.styles.after.textHighlighterColor).toBeUndefined()
  })

  it("uses monolithic text highlighter for integer-to-bigint sample 001", async () => {
    const beforeSql = `CREATE TABLE public.t (
      id integer,
      sample_col integer
    );`
    const afterSql = `CREATE TABLE public.t (
      id integer,
      sample_col bigint
    );`

    const merged = apiDiff(
      await buildFromDdl(beforeSql),
      await buildFromDdl(afterSql),
      {
        metaKey: TEST_DIFFS_META_KEY,
        normalizedResult: false,
      },
    ).merged

    const tree = new DdlApiTreeWithDiffsBuilder({
      source: merged,
      tableKey: {
        schemaName: "public",
        name: "t",
      },
      diffsMetaKeys: {
        diffsMetaKey: TEST_DIFFS_META_KEY,
        aggregatedDiffsMetaKey: Symbol("aggregated"),
      },
    }).build()

    const sampleColumn = [...tree.nodes.values()].find(
      node => node.kind === DdlApiTreeNodeKinds.COLUMN && node.key === "sample_col",
    )

    const changedDisplay = resolveColumnTypeLabelSideDisplay(sampleColumn as never, CHANGED_LAYOUT_SIDE)

    expect(changedDisplay.kind).toBe("monolithic")
    if (changedDisplay.kind === "monolithic") {
      expect(changedDisplay.text).toBe("bigint")
      expect(changedDisplay.diff.styles.after.textHighlighterColor).toBe(HighlightVariant.Yellow)
      expect(changedDisplay.diff.styles.after.backgroundColor).toBeUndefined()
    }

    const titleRowDiff = takeDdlPropertyTitleRowDiff(sampleColumn as never)
    expect(titleRowDiff?.data.action).toBe(DiffAction.replace)
    expect(titleRowDiff?.styles.before.backgroundColor).toBe(HighlightVariant.Yellow)
    expect(titleRowDiff?.styles.after.backgroundColor).toBe(HighlightVariant.Yellow)
    expect(titleRowDiff?.styles.before.textHighlighterColor).toBeUndefined()
    expect(titleRowDiff?.styles.after.textHighlighterColor).toBeUndefined()
  })

  it("aggregates enum values row as added when scalar column type changes to enum", async () => {
    const fs = await import("fs")
    const path = await import("path")
    const loadCase = async (caseId: string) => {
      const base = path.join(__dirname, "../../../samples/ddlapi-diffs/column-type-changes", caseId)
      const before = fs.readFileSync(path.join(base, "before.sql"), "utf8")
      const after = fs.readFileSync(path.join(base, "after.sql"), "utf8")
      const merged = apiDiff(
        await buildFromDdl(before),
        await buildFromDdl(after),
        { metaKey: TEST_DIFFS_META_KEY, normalizedResult: false },
      ).merged
      const tree = new DdlApiTreeWithDiffsBuilder({
        source: merged,
        tableKey: { schemaName: "public", name: "t" },
        diffsMetaKeys: {
          diffsMetaKey: TEST_DIFFS_META_KEY,
          aggregatedDiffsMetaKey: Symbol("aggregated"),
        },
      }).build()
      return [...tree.nodes.values()].find(
        node => node.kind === DdlApiTreeNodeKinds.COLUMN && node.key === "sample_col",
      )
    }

    const columnNode = await loadCase("108-type-change-int4-to-enum")
    const columnDiffs = columnNode?.diffs as import("@apihub/next-data-model/model/ddlapi/tree-with-diffs/property-row-diffs.types").DdlApiColumnPropertyRowDiffs

    expect(columnNode?.value()?.enumValues).toEqual(["pending", "done"])
    expect(columnDiffs?.columnTypeFieldDiffs?.typeName?.data.action).toBe(DiffAction.replace)
    expect(columnDiffs?.enumValueDiffs).toBeUndefined()
    expect(columnDiffs?.enumValuesRowColorizingDiff?.data.action).toBe(DiffAction.add)
    expect(columnDiffs?.enumValuesRowColorizingDiff?.styles.after.backgroundColor).toBe(HighlightVariant.Green)
    expect(columnDiffs?.enumValuesRowColorizingDiff?.styles.before.isContentVisible).toBe(false)
    expect(columnDiffs?.enumValuesRowColorizingDiff?.styles.after.isContentVisible).toBe(true)
  })

  it("aggregates enum values row as removed when enum column type changes to scalar", async () => {
    const fs = await import("fs")
    const path = await import("path")
    const loadCase = async (caseId: string) => {
      const base = path.join(__dirname, "../../../samples/ddlapi-diffs/column-type-changes", caseId)
      const before = fs.readFileSync(path.join(base, "before.sql"), "utf8")
      const after = fs.readFileSync(path.join(base, "after.sql"), "utf8")
      const merged = apiDiff(
        await buildFromDdl(before),
        await buildFromDdl(after),
        { metaKey: TEST_DIFFS_META_KEY, normalizedResult: false },
      ).merged
      const tree = new DdlApiTreeWithDiffsBuilder({
        source: merged,
        tableKey: { schemaName: "public", name: "t" },
        diffsMetaKeys: {
          diffsMetaKey: TEST_DIFFS_META_KEY,
          aggregatedDiffsMetaKey: Symbol("aggregated"),
        },
      }).build()
      return [...tree.nodes.values()].find(
        node => node.kind === DdlApiTreeNodeKinds.COLUMN && node.key === "sample_col",
      )
    }

    const columnNode = await loadCase("118-type-change-enum-to-int4")
    const columnDiffs = columnNode?.diffs as import("@apihub/next-data-model/model/ddlapi/tree-with-diffs/property-row-diffs.types").DdlApiColumnPropertyRowDiffs

    expect(columnNode?.value()?.enumValues).toBeUndefined()
    expect(columnDiffs?.columnTypeFieldDiffs?.typeName?.data.action).toBe(DiffAction.replace)
    expect(columnDiffs?.columnTypeFieldDiffs?.typeName?.data.beforeValue).toBe("sample_status")
    expect(columnDiffs?.columnTypeFieldDiffs?.typeName?.data.afterValue).toBe("integer")
    expect(Object.keys(columnDiffs?.enumValueDiffs ?? {})).toEqual(["pending", "done"])
    expect(columnDiffs?.enumValueDiffs?.pending?.data.action).toBe(DiffAction.remove)
    expect(columnDiffs?.enumValueDiffs?.pending?.styles.before.borderShadowColor).toBeUndefined()
    expect(columnDiffs?.enumValueDiffs?.pending?.styles.before.isFontMuted).toBeUndefined()
    expect(columnDiffs?.enumValuesRowColorizingDiff?.data.action).toBe(DiffAction.remove)
    expect(columnDiffs?.enumValuesRowColorizingDiff?.styles.before.backgroundColor).toBe(HighlightVariant.Red)
    expect(columnDiffs?.enumValuesRowColorizingDiff?.styles.after.isContentVisible).toBe(false)
    expect(columnDiffs?.enumValuesRowColorizingDiff?.styles.before.isContentVisible).toBe(true)
  })

  it("aggregates default value add diff with green row background and plain chip", () => {
    const aggregator = new DdlApiNodeDiffsAggregatorKindColumn()
    const crawlValue = {
      columnName: "sample_col",
      defaultValue: "0",
      [TEST_DIFFS_META_KEY]: {
        defaultValue: {
          type: nonBreaking,
          action: DiffAction.add,
          scope: "root",
          afterValue: "0",
          afterDeclarationPaths: [["columns", "sample_col", "defaultValue"]],
        },
      },
    }

    const nodeDiffs = aggregator.aggregate(crawlValue, diffsMetaKeys, "sample_col")

    expect(nodeDiffs?.defaultValue?.data.action).toBe(DiffAction.add)
    expect(nodeDiffs?.defaultValue?.styles.after.borderShadowColor).toBeUndefined()
    expect(nodeDiffs?.defaultValue?.styles.after.textHighlighterColor).toBeUndefined()
    expect(nodeDiffs?.defaultValueRowColorizingDiff?.data.action).toBe(DiffAction.add)
    expect(nodeDiffs?.defaultValueRowColorizingDiff?.styles.after.backgroundColor).toBe(HighlightVariant.Green)
    expect(nodeDiffs?.defaultValueRowColorizingDiff?.styles.before.isContentVisible).toBe(false)
    expect(nodeDiffs?.defaultValueRowColorizingDiff?.styles.after.isContentVisible).toBe(true)
  })

  it("aggregates default value remove diff with red row background and plain chip", () => {
    const aggregator = new DdlApiNodeDiffsAggregatorKindColumn()
    const crawlValue = {
      columnName: "sample_col",
      [TEST_DIFFS_META_KEY]: {
        defaultValue: {
          type: breaking,
          action: DiffAction.remove,
          scope: "root",
          beforeValue: "0",
          beforeDeclarationPaths: [["columns", "sample_col", "defaultValue"]],
        },
      },
    }

    const nodeDiffs = aggregator.aggregate(crawlValue, diffsMetaKeys, "sample_col")

    expect(nodeDiffs?.defaultValue?.data.action).toBe(DiffAction.remove)
    expect(nodeDiffs?.defaultValue?.styles.before.borderShadowColor).toBeUndefined()
    expect(nodeDiffs?.defaultValue?.styles.before.isFontMuted).toBeUndefined()
    expect(nodeDiffs?.defaultValue?.styles.before.textHighlighterColor).toBeUndefined()
    expect(nodeDiffs?.defaultValueRowColorizingDiff?.data.action).toBe(DiffAction.remove)
    expect(nodeDiffs?.defaultValueRowColorizingDiff?.styles.before.backgroundColor).toBe(HighlightVariant.Red)
    expect(nodeDiffs?.defaultValueRowColorizingDiff?.styles.after.isContentVisible).toBe(false)
    expect(nodeDiffs?.defaultValueRowColorizingDiff?.styles.before.isContentVisible).toBe(true)
  })

  it("aggregates default value replace diff with yellow row and chip text highlighter", () => {
    const aggregator = new DdlApiNodeDiffsAggregatorKindColumn()
    const crawlValue = {
      columnName: "sample_col",
      defaultValue: "42",
      [TEST_DIFFS_META_KEY]: {
        defaultValue: {
          type: nonBreaking,
          action: DiffAction.replace,
          scope: "root",
          beforeValue: "0",
          afterValue: "42",
          beforeDeclarationPaths: [["columns", "sample_col", "defaultValue"]],
          afterDeclarationPaths: [["columns", "sample_col", "defaultValue"]],
        },
      },
    }

    const nodeDiffs = aggregator.aggregate(crawlValue, diffsMetaKeys, "sample_col")

    expect(nodeDiffs?.defaultValue?.data.action).toBe(DiffAction.replace)
    expect(nodeDiffs?.defaultValue?.styles.before.backgroundColor).toBeUndefined()
    expect(nodeDiffs?.defaultValue?.styles.after.backgroundColor).toBeUndefined()
    expect(nodeDiffs?.defaultValue?.styles.before.textHighlighterColor).toBe(HighlightVariant.Yellow)
    expect(nodeDiffs?.defaultValue?.styles.after.textHighlighterColor).toBe(HighlightVariant.Yellow)
    expect(nodeDiffs?.defaultValueRowColorizingDiff?.data.action).toBe(DiffAction.replace)
    expect(nodeDiffs?.defaultValueRowColorizingDiff?.styles.before.backgroundColor).toBe(HighlightVariant.Yellow)
    expect(nodeDiffs?.defaultValueRowColorizingDiff?.styles.after.backgroundColor).toBe(HighlightVariant.Yellow)
  })

  it("aggregates default value row as removed when column becomes generated", () => {
    const aggregator = new DdlApiNodeDiffsAggregatorKindColumn()
    const crawlValue = {
      columnName: "code",
      isGenerated: true,
      generatedExpression: "GENERATED ALWAYS AS IDENTITY",
      [TEST_DIFFS_META_KEY]: {
        isGenerated: {
          type: nonBreaking,
          action: DiffAction.add,
          scope: "root",
          afterValue: true,
          afterDeclarationPaths: [["columns", "code", "isGenerated"]],
        },
      },
    }

    const nodeDiffs = aggregator.aggregate(crawlValue, diffsMetaKeys, "code")

    expect(nodeDiffs?.defaultValue).toBeUndefined()
    expect(nodeDiffs?.defaultValueRowColorizingDiff?.data.action).toBe(DiffAction.remove)
    expect(nodeDiffs?.defaultValueRowColorizingDiff?.styles.before.backgroundColor).toBe(HighlightVariant.Red)
  })

  it("loads default add/remove/replace from column-default-changes samples", async () => {
    const fs = await import("fs")
    const path = await import("path")
    const loadCase = async (caseId: string) => {
      const base = path.join(__dirname, "../../../samples/ddlapi-diffs/column-default-changes", caseId)
      const before = fs.readFileSync(path.join(base, "before.sql"), "utf8")
      const after = fs.readFileSync(path.join(base, "after.sql"), "utf8")
      const merged = apiDiff(
        await buildFromDdl(before),
        await buildFromDdl(after),
        { metaKey: TEST_DIFFS_META_KEY, normalizedResult: false },
      ).merged
      const tree = new DdlApiTreeWithDiffsBuilder({
        source: merged,
        tableKey: { schemaName: "public", name: "t" },
        diffsMetaKeys: {
          diffsMetaKey: TEST_DIFFS_META_KEY,
          aggregatedDiffsMetaKey: Symbol("aggregated"),
        },
      }).build()
      return [...tree.nodes.values()].find(
        node => node.kind === DdlApiTreeNodeKinds.COLUMN && node.key === "sample_col",
      )
    }

    const addNode = await loadCase("101-add-default-bigint")
    const addDiffs = addNode?.diffs as import("@apihub/next-data-model/model/ddlapi/tree-with-diffs/property-row-diffs.types").DdlApiColumnPropertyRowDiffs
    expect(addDiffs?.defaultValue?.data.action).toBe(DiffAction.add)
    expect(addDiffs?.defaultValueRowColorizingDiff?.styles.after.backgroundColor).toBe(HighlightVariant.Green)

    const removeNode = await loadCase("201-remove-default-bigint")
    const removeDiffs = removeNode?.diffs as import("@apihub/next-data-model/model/ddlapi/tree-with-diffs/property-row-diffs.types").DdlApiColumnPropertyRowDiffs
    expect(removeDiffs?.defaultValue?.data.action).toBe(DiffAction.remove)
    expect(removeDiffs?.defaultValueRowColorizingDiff?.styles.before.backgroundColor).toBe(HighlightVariant.Red)

    const replaceNode = await loadCase("301-replace-default-bigint")
    const replaceDiffs = replaceNode?.diffs as import("@apihub/next-data-model/model/ddlapi/tree-with-diffs/property-row-diffs.types").DdlApiColumnPropertyRowDiffs
    expect(replaceDiffs?.defaultValue?.data.action).toBe(DiffAction.replace)
    expect(replaceDiffs?.defaultValueRowColorizingDiff?.styles.before.backgroundColor).toBe(HighlightVariant.Yellow)
    expect(replaceDiffs?.defaultValue?.styles.before.textHighlighterColor).toBe(HighlightVariant.Yellow)
  })
})
