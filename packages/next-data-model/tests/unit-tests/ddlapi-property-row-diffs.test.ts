import {
  DIFF_HIGHLIGHTING_MODES_DEFAULT,
  NodeDiffsSeverityPlacemennt,
} from "@apihub/next-data-model/model/abstract/tree-with-diffs/tree-node.interface"
import { DDL_PROPERTY_TITLE_ROW_DIFF_KEY } from "@apihub/next-data-model/model/ddlapi/tree-with-diffs/property-row-diffs"
import { DdlApiNodeDiffsAggregatorKindColumn } from "../../src/building-service/ddlapi/tree-with-diffs/node-diffs-data/node-diffs/kind-column"
import { DdlApiNodeDiffsSeveritiesAggregatorKindColumn } from "../../src/building-service/ddlapi/tree-with-diffs/node-diffs-data/node-diffs-severities/kind-column"
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
})
