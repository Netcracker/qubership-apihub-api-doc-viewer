import { ComplexTreeNodeWithDiffsParams, HighlightVariant, NodeDescendantDiffs, NodeDescendantDiffsSummary, NodeDiffs, NodeDiffsSeverities, NodeDiffsSummary, SimpleTreeNodeWithDiffsParams, TreeNodeWithDiffsParams } from "@apihub/next-data-model/model/abstract/tree-with-diffs/tree-node.interface";
import { TreeNodeComplexityTypes } from "@apihub/next-data-model/model/abstract/tree/tree-node.interface";
import { JsoComplexTreeNodeWithDiffs } from "@apihub/next-data-model/model/jso/tree-with-diffs/complex-node.impl";
import { JsoSimpleTreeNodeWithDiffs } from "@apihub/next-data-model/model/jso/tree-with-diffs/simple-node.impl";
import { JsoTreeWithDiffs } from "@apihub/next-data-model/model/jso/tree-with-diffs/tree.impl";
import { JsoTreeNodeWithDiffs } from "@apihub/next-data-model/model/jso/types/aliases";
import { JsoTreeNodeKind, JsoTreeNodeKindsList } from "@apihub/next-data-model/model/jso/types/node-kind";
import { JsoTreeNodeMeta } from "@apihub/next-data-model/model/jso/types/node-meta";
import { JsoTreeNodeValue } from "@apihub/next-data-model/model/jso/types/node-value";
import { isObject } from "@apihub/next-data-model/utilities";
import { NodeId, NodeKey } from "@apihub/next-data-model/utility-types";
import { annotation, breaking, deprecated, DiffAction, DiffType, isDiffAdd, isDiffRemove, isDiffReplace, nonBreaking, risky, unclassified } from "@netcracker/qubership-apihub-api-diff";
import { JsonPath, syncCrawl } from "@netcracker/qubership-apihub-json-crawl";
import { TreeWithDiffsBuilder } from "../../abstract/tree-with-diffs/builder";
import { AsyncApiLogger, createAsyncApiLogger } from "../../async-api/logging";
import { getJsoCrawlRules } from "../json-crawl-entities/rules/rules";
import { JsoCrawlRule, JsoWithDiffsCrawlRule } from "../json-crawl-entities/rules/types";
import { JsoTreeWithDiffsCrawlState } from "../json-crawl-entities/state/types";
import { createJsoTreeBuildingHooks } from "../shared/tree-building-hooks";
import { JsoNodeDataWithDiffsBuilder } from "./node-data/builder";
import { JsoNodeDescendantDiffsSummaryAggregatorFactory } from "./node-diffs-data/node-descendant-diffs-summary/factory";
import { JsoNodeDescendantDiffsAggregatorFactory } from "./node-diffs-data/node-descendant-diffs/factory";
import { JsoNodeDiffsSeveritiesAggregatorFactory } from "./node-diffs-data/node-diffs-severities/factory";
import { JsoNodeDiffsSummaryAggregatorFactory } from "./node-diffs-data/node-diffs-summary/factory";
import { DiffMetaKeys, JsoNodeDiffsAggregatorFactory } from "./node-diffs-data/node-diffs/factory";

export class JsoTreeWithDiffsBuilder extends TreeWithDiffsBuilder<
  JsoTreeNodeValue | null,
  JsoTreeNodeKind,
  JsoTreeNodeMeta
> {
  public readonly tree: JsoTreeWithDiffs;
  private readonly nodeDataBuilder: JsoNodeDataWithDiffsBuilder;

  constructor(
    private readonly source: unknown,
    private readonly referenceNamePropertyKey: symbol,
    private readonly diffsMetaKeys: DiffMetaKeys,
    private readonly logger: AsyncApiLogger = createAsyncApiLogger(),
  ) {
    super()
    this.tree = new JsoTreeWithDiffs()
    this.nodeDataBuilder = new JsoNodeDataWithDiffsBuilder()
  }

  public build(): JsoTreeWithDiffs {
    if (!isObject(this.source)) {
      return this.tree
    }

    const initialState: JsoTreeWithDiffsCrawlState = {
      parent: null,
      container: null,
      alreadyConvertedValuesCache: new Map(),
    }

    const initialRules: JsoCrawlRule = getJsoCrawlRules()

    const hooks = createJsoTreeBuildingHooks<
      JsoTreeNodeWithDiffs<JsoTreeNodeKind>,
      JsoTreeWithDiffsCrawlState,
      JsoWithDiffsCrawlRule,
      TreeNodeWithDiffsParams<JsoTreeNodeValue | null, JsoTreeNodeKind, JsoTreeNodeMeta>
    >({
      source: this.source,
      tree: this.tree,
      createNodeFromRaw: (id, key, kind, complex, params) => this.createNodeFromRaw(id, key, kind, complex, params),
      createNodeParams: (value, parent, container) => ({
        value: isObject(value) ? value : null,
        newDataLevel: true,
        container,
        parent,
      }),
      createStateForSimpleNode: (_state, node, cache) => ({
        parent: node,
        container: null,
        alreadyConvertedValuesCache: cache,
      }),
      createStateForComplexNode: (state, node, cache) => ({
        parent: state.parent,
        container: node,
        alreadyConvertedValuesCache: cache,
      }),
      isSimpleNode: (node) => node.type === TreeNodeComplexityTypes.SIMPLE,
      isComplexNode: (node) => node.type === TreeNodeComplexityTypes.COMPLEX,
      resolveNodeKey: (key, value) => this.resolveNodeKey(key, value),
      shouldStopAfterNodeCreation: (value) => isObject(value) && Boolean(value.isPrimitive),
    })

    syncCrawl<JsoTreeWithDiffsCrawlState, JsoWithDiffsCrawlRule>(
      this.source,
      hooks,
      {
        state: initialState,
        rules: initialRules,
      },
    )

    return this.tree
  }

  // TODO 26.03.26 // Share with regular tree builder and actually other builders in future
  private resolveNodeKey(key: NodeKey, value: unknown): NodeKey {
    if (!isObject(value)) {
      return key
    }

    if ('id' in value && typeof value.id === 'string') {
      return value.id
    }
    return key
  }

  protected createNodeFromRaw(
    id: NodeId,
    key: NodeKey,
    kind: JsoTreeNodeKind,
    complex: boolean,
    params: TreeNodeWithDiffsParams<JsoTreeNodeValue | null, JsoTreeNodeKind, JsoTreeNodeMeta>,
  ): JsoSimpleTreeNodeWithDiffs | JsoComplexTreeNodeWithDiffs | undefined {
    const { parent = null, container = null, newDataLevel } = params

    if (complex) {
      const nodeMeta = this.createNodeMeta(key, params)
      const complexParams: ComplexTreeNodeWithDiffsParams<JsoTreeNodeValue | null, JsoTreeNodeKind, JsoTreeNodeMeta> = {
        type: TreeNodeComplexityTypes.COMPLEX,
        parent: parent && this.isJsoSimpleTreeNodeWithDiffs(parent) ? parent : null,
        container: container && this.isJsoComplexTreeNodeWithDiffs(container) ? container : null,
        value: null,
        meta: nodeMeta,
        newDataLevel,
      }
      const treeNode = this.tree.createComplexNode(id, key, kind, false, complexParams)
      this.assignNodeDiffs(treeNode, kind, params)
      return treeNode
    }

    const nodeValue = this.createNodeValue(key, kind, params)
    const nodeMeta = this.createNodeMeta(key, params)
    const simpleParams: SimpleTreeNodeWithDiffsParams<JsoTreeNodeValue | null, JsoTreeNodeKind, JsoTreeNodeMeta> = {
      type: TreeNodeComplexityTypes.SIMPLE,
      parent: parent && this.isJsoSimpleTreeNodeWithDiffs(parent) ? parent : null,
      container: container && this.isJsoComplexTreeNodeWithDiffs(container) ? container : null,
      value: nodeValue,
      meta: nodeMeta,
      newDataLevel,
    }
    const treeNode = this.tree.createSimpleNode(id, key, kind, false, simpleParams)
    this.assignNodeDiffs(treeNode, kind, params)
    return treeNode
  }

  protected createNodeMeta(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    key: NodeKey,
    params: TreeNodeWithDiffsParams<JsoTreeNodeValue | null, JsoTreeNodeKind, JsoTreeNodeMeta>,
  ): JsoTreeNodeMeta {
    const { value } = params
    return this.nodeDataBuilder.createNodeMeta(value)
  }

  protected createNodeValue(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    key: NodeKey,
    kind: string,
    params: TreeNodeWithDiffsParams<JsoTreeNodeValue | null, JsoTreeNodeKind, JsoTreeNodeMeta>,
  ): JsoTreeNodeValue | null {
    const { value } = params
    return this.nodeDataBuilder.createNodeValue(
      kind,
      value,
      (source, keys) => this.pick(source, keys),
    )
  }

  protected createNodeDiffs(
    key: NodeKey,
    kind: string,
    params: TreeNodeWithDiffsParams<JsoTreeNodeValue | null, JsoTreeNodeKind, JsoTreeNodeMeta>,
  ): NodeDiffs<JsoTreeNodeValue | null> | undefined {
    if (!this.isJsoTreeNodeKind(kind)) {
      return undefined
    }
    const parentNode = params.parent && this.isJsoSimpleTreeNodeWithDiffs(params.parent) ? params.parent : undefined
    const containerNode = params.container && this.isJsoComplexTreeNodeWithDiffs(params.container) ? params.container : undefined
    return JsoNodeDiffsAggregatorFactory
      .instance(kind)
      .aggregate(params.value, this.diffsMetaKeys, key, parentNode as never, containerNode as never)
  }

  protected createNodeDiffsSummary(
    kind: string,
    nodeDiffs: NodeDiffs<JsoTreeNodeValue | null> | undefined,
    crawlValue: object | null | undefined,
    diffsMetaKeys: DiffMetaKeys | undefined,
  ): NodeDiffsSummary | undefined {
    if (!this.isJsoTreeNodeKind(kind)) {
      return undefined
    }
    return JsoNodeDiffsSummaryAggregatorFactory
      .instance(kind)
      .aggregate(nodeDiffs, crawlValue, diffsMetaKeys)
  }

  protected createNodeDescendantsDiffs(
    kind: string,
    params: TreeNodeWithDiffsParams<JsoTreeNodeValue | null, JsoTreeNodeKind, JsoTreeNodeMeta>,
  ): NodeDescendantDiffs | undefined {
    if (!this.isJsoTreeNodeKind(kind)) {
      return undefined
    }
    return JsoNodeDescendantDiffsAggregatorFactory
      .instance(kind)
      .aggregate(params.value, this.diffsMetaKeys, this.referenceNamePropertyKey)
  }

  protected createNodeDescendantsDiffsSummary(
    kind: string,
    nodeDiffs: NodeDiffs<JsoTreeNodeValue | null> | undefined,
    nodeDescendantDiffs: NodeDescendantDiffs | undefined,
    crawlValue: object | null | undefined,
    diffsMetaKeys: DiffMetaKeys | undefined,
  ): NodeDescendantDiffsSummary | undefined {
    if (!this.isJsoTreeNodeKind(kind)) {
      return undefined
    }
    if (!nodeDescendantDiffs) {
      return undefined
    }
    return JsoNodeDescendantDiffsSummaryAggregatorFactory
      .instance(kind)
      .aggregate(nodeDiffs, nodeDescendantDiffs, crawlValue, diffsMetaKeys)
  }

  protected createNodeDiffsSeverities(
    kind: string,
    nodeDiffs: NodeDiffs<JsoTreeNodeValue | null> | undefined,
  ): NodeDiffsSeverities | undefined {
    if (!this.isJsoTreeNodeKind(kind)) {
      return undefined
    }
    if (!nodeDiffs) {
      return undefined
    }
    return JsoNodeDiffsSeveritiesAggregatorFactory
      .instance(kind)
      .aggregate(nodeDiffs)
  }

  private assignNodeDiffs(
    node: JsoSimpleTreeNodeWithDiffs | JsoComplexTreeNodeWithDiffs,
    kind: JsoTreeNodeKind,
    params: TreeNodeWithDiffsParams<JsoTreeNodeValue | null, JsoTreeNodeKind, JsoTreeNodeMeta>,
  ): void {
    const nodeDiffs = this.createNodeDiffs(node.key, kind, params)
    nodeDiffs && Object.assign(node.diffs, nodeDiffs)

    const nodeDiffsSummary = this.createNodeDiffsSummary(kind, node.diffs, params.value, this.diffsMetaKeys)
    if (nodeDiffsSummary) {
      node.diffsSummary.clear()
      node.addDiffsSummary(nodeDiffsSummary)
    }

    const descendantDiffs = this.createNodeDescendantsDiffs(kind, params)
    descendantDiffs && Object.assign(node.descendantDiffs, descendantDiffs)

    const descendantDiffsSummary = this.createNodeDescendantsDiffsSummary(kind, node.diffs, node.descendantDiffs, params.value, this.diffsMetaKeys)
    if (descendantDiffsSummary) {
      node.descendantDiffsSummary.clear()
      node.addDescendantDiffsSummary(descendantDiffsSummary)
    }

    const descendantsMaxDiffType = descendantDiffsSummary ? this.maxDiffType(descendantDiffsSummary) : undefined
    const declarationPaths: JsonPath[] = []
    for (const descendantDiff of Object.values(node.descendantDiffs)) {
      if (!descendantDiff) {
        continue
      }
      if (descendantDiff.data.type === descendantsMaxDiffType) {
        if (isDiffRemove(descendantDiff.data) || isDiffReplace(descendantDiff.data)) {
          declarationPaths.push(descendantDiff.data.beforeDeclarationPaths[0])
        } else if (isDiffAdd(descendantDiff.data) || isDiffReplace(descendantDiff.data)) {
          declarationPaths.push(descendantDiff.data.afterDeclarationPaths[0])
        }
      }
    }
    if (descendantsMaxDiffType && !nodeDiffs?.[""]) {
      node.diffs[""] = {
        data: {
          type: descendantsMaxDiffType,
          action: DiffAction.replace,
          beforeDeclarationPaths: declarationPaths,
          afterDeclarationPaths: declarationPaths,
          beforeValue: null,
          afterValue: null,
          scope: "descendants",
        },
        styles: {
          before: {
            isContentVisible: true,
            backgroundColor: HighlightVariant.Yellow,
          },
          after: {
            isContentVisible: true,
            backgroundColor: HighlightVariant.Yellow,
          },
        },
      }
    }

    const diffsSeverities = this.createNodeDiffsSeverities(kind, node.diffs)
    diffsSeverities && Object.assign(node.diffsSeverities, diffsSeverities)
  }

  private isJsoTreeNodeKind(kind: string): kind is JsoTreeNodeKind {
    return JsoTreeNodeKindsList.some(jsoKind => jsoKind === kind)
  }

  private isJsoSimpleTreeNodeWithDiffs(
    node: JsoSimpleTreeNodeWithDiffs | JsoComplexTreeNodeWithDiffs,
  ): node is JsoSimpleTreeNodeWithDiffs {
    return node.type === TreeNodeComplexityTypes.SIMPLE
  }

  private isJsoComplexTreeNodeWithDiffs(
    node: JsoSimpleTreeNodeWithDiffs | JsoComplexTreeNodeWithDiffs,
  ): node is JsoComplexTreeNodeWithDiffs {
    return node.type === TreeNodeComplexityTypes.COMPLEX
  }

  private maxDiffType(diffTypes: Set<DiffType> | DiffType[]): DiffType | undefined {
    let diffType: DiffType | undefined
    for (const currentDiffType of diffTypes) {
      if (this.compareDiffTypes(currentDiffType, diffType) > 0) {
        diffType = currentDiffType
      }
    }
    return diffType
  }

  private compareDiffTypes(a: DiffType | undefined, b: DiffType | undefined): number {
    if (!a && !b) {
      return 0
    }
    if (!a && b) {
      return this.CHANGE_SEVERITIES[b]
    }
    if (a && !b) {
      return this.CHANGE_SEVERITIES[a]
    }
    return this.CHANGE_SEVERITIES[a!] - this.CHANGE_SEVERITIES[b!]
  }

  private readonly CHANGE_SEVERITIES: Record<DiffType, number> = {
    [breaking]: 6,
    [risky]: 5,
    [deprecated]: 4,
    [nonBreaking]: 3,
    [annotation]: 2,
    [unclassified]: 1,
  }

}