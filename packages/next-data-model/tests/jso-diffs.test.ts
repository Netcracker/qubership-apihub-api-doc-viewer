import { JsoTreeWithDiffsBuilder } from "../src/building-service/jso/tree-with-diffs/builder"
import { JsoNodeDescendantDiffsSummaryAggregatorKindAny } from "../src/building-service/jso/tree-with-diffs/node-diffs-data/node-descendant-diffs-summary/kind-any"
import { JsoNodeDiffsAggregatorKindAny } from "../src/building-service/jso/tree-with-diffs/node-diffs-data/node-diffs/kind-any"
import { ComplexTreeNodeWithDiffs } from "../src/model/abstract/tree-with-diffs/complex-node.impl"
import { SimpleTreeNodeWithDiffs } from "../src/model/abstract/tree-with-diffs/simple-node.impl"
import {
  ChangedPropertyMetaData,
  NodeDiffsSeverityPlacemennt,
} from "../src/model/abstract/tree-with-diffs/tree-node.interface"
import { TreeNodeComplexityTypes } from "../src/model/abstract/tree/tree-node.interface"
import { DiffAction } from "@netcracker/qubership-apihub-api-diff"

describe("JSO Tree with diffs", () => {
  const DIFF_META_KEY = Symbol("diff-meta")
  const AGGREGATED_DIFF_META_KEY = Symbol("aggregated-diff-meta")

  it("uses parent-first precedence for inherited root diff", () => {
    const parent = createSimpleNode("parent")
    const container = createComplexNode("container")
    const parentRootDiff = createChangedPropertyMetaData({
      action: DiffAction.add,
      type: "breaking",
      afterValue: "parent",
    })
    const containerRootDiff = createChangedPropertyMetaData({
      action: DiffAction.add,
      type: "risky",
      afterValue: "container",
    })
    parent.diffs[""] = parentRootDiff
    container.diffs[""] = containerRootDiff

    const aggregator = new JsoNodeDiffsAggregatorKindAny()
    const result = aggregator.aggregate(
      { [DIFF_META_KEY]: {} },
      {
        diffsMetaKey: DIFF_META_KEY,
        aggregatedDiffsMetaKey: AGGREGATED_DIFF_META_KEY,
      },
      "child",
      parent as never,
      container as never,
    )

    expect(result?.[""]).toBe(parentRootDiff)
  })

  it("uses parent descendant diff before container root diff", () => {
    const parent = createSimpleNode("parent")
    const container = createComplexNode("container")
    const parentDescendantDiff = createChangedPropertyMetaData({
      action: DiffAction.remove,
      type: "annotation",
      beforeValue: "old-value",
    })
    const containerRootDiff = createChangedPropertyMetaData({
      action: DiffAction.add,
      type: "risky",
      afterValue: "container",
    })
    parent.descendantDiffs["child"] = parentDescendantDiff
    container.diffs[""] = containerRootDiff

    const aggregator = new JsoNodeDiffsAggregatorKindAny()
    const result = aggregator.aggregate(
      { [DIFF_META_KEY]: {} },
      {
        diffsMetaKey: DIFF_META_KEY,
        aggregatedDiffsMetaKey: AGGREGATED_DIFF_META_KEY,
      },
      "child",
      parent as never,
      container as never,
    )

    expect(result?.[""]).toBe(parentDescendantDiff)
  })

  it("aggregates descendant summary only for add/remove actions", () => {
    const summaryAggregator = new JsoNodeDescendantDiffsSummaryAggregatorKindAny()
    const summary = summaryAggregator.aggregate(
      undefined,
      {
        added: createChangedPropertyMetaData({
          action: DiffAction.add,
          type: "breaking",
          afterValue: "new-value",
        }),
        removed: createChangedPropertyMetaData({
          action: DiffAction.remove,
          type: "annotation",
          beforeValue: "old-value",
        }),
        replaced: createChangedPropertyMetaData({
          action: DiffAction.replace,
          type: "risky",
          beforeValue: "before",
          afterValue: "after",
        }),
      },
      undefined,
      undefined,
    )

    expect(summary).toBeDefined()
    expect(summary!.has("breaking")).toBe(true)
    expect(summary!.has("annotation")).toBe(true)
    expect(summary!.has("risky")).toBe(false)
  })

  it("resolves severity propagation source using parent-first precedence", () => {
    const parent = createSimpleNode("parent")
    const container = createComplexNode("container")
    parent.diffsSeverities[NodeDiffsSeverityPlacemennt.TitleRow] = {
      type: "breaking",
      causedAt: ["parent"],
    }
    container.diffsSeverities[NodeDiffsSeverityPlacemennt.TitleRow] = {
      type: "risky",
      causedAt: ["container"],
    }

    const builder = new JsoTreeWithDiffsBuilder(
      {},
      Symbol("referenceName"),
      {
        diffsMetaKey: DIFF_META_KEY,
        aggregatedDiffsMetaKey: AGGREGATED_DIFF_META_KEY,
      },
    )

    const sourceNode = (builder as never).resolveDiffsSeverityPropagationSourceNode({
      parent,
      container,
    })

    expect(sourceNode).toBe(parent)
  })
})

function createSimpleNode(id: string) {
  return new SimpleTreeNodeWithDiffs(id, id, "property", false, {
    type: TreeNodeComplexityTypes.SIMPLE,
    parent: null,
    container: null,
    value: null,
    meta: {},
    newDataLevel: true,
  })
}

function createComplexNode(id: string) {
  return new ComplexTreeNodeWithDiffs(id, id, "property", false, {
    type: TreeNodeComplexityTypes.COMPLEX,
    parent: null,
    container: null,
    value: null,
    meta: {},
    newDataLevel: true,
  })
}

function createChangedPropertyMetaData(input: {
  action: typeof DiffAction[keyof typeof DiffAction]
  type: "breaking" | "risky" | "annotation"
  beforeValue?: unknown
  afterValue?: unknown
}): ChangedPropertyMetaData {
  const { action, type, beforeValue, afterValue } = input
  return {
    data: {
      type,
      scope: "root",
      action,
      beforeValue,
      afterValue,
      beforeDeclarationPaths: [["before"]],
      afterDeclarationPaths: [["after"]],
    } as never,
    styles: {
      before: {
        isContentVisible: true,
      },
      after: {
        isContentVisible: true,
      },
    },
  }
}
