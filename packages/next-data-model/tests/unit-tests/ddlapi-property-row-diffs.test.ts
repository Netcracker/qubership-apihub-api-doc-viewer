import {
  DIFF_HIGHLIGHTING_MODES_DEFAULT,
  HighlightVariant,
  NODE_LEVEL_DIFF_KEY,
  NodeDiffsSeverityPlacemennt,
  DiffHighlightingApplicationMode,
  DiffHiglightingApplicationArea,
} from "@apihub/next-data-model/model/abstract/tree-with-diffs/tree-node.interface"
import { DDL_PROPERTY_TITLE_ROW_DIFF_KEY } from "@apihub/next-data-model/model/ddlapi/tree-with-diffs/property-row-diffs"
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
})
