import { ComplexTreeNodeWithDiffsParams, NodeDescendantDiffs, NodeDiffs, NodeDiffsSeverities, SimpleTreeNodeWithDiffsParams, TreeNodeWithDiffsParams } from "@apihub/next-data-model/model/abstract/tree-with-diffs/tree-node.interface";
import { TreeNodeComplexityTypes } from "@apihub/next-data-model/model/abstract/tree/tree-node.interface";
import { AsyncApiComplexTreeNodeWithDiffs } from "@apihub/next-data-model/model/async-api/tree-with-diffs/complex-node.impl";
import { AsyncApiSimpleTreeNodeWithDiffs } from "@apihub/next-data-model/model/async-api/tree-with-diffs/simple-node.impl";
import { AsyncApiTreeWithDiffs } from "@apihub/next-data-model/model/async-api/tree-with-diffs/tree.impl";
import { AsyncApiTreeNodeWithDiffs } from "@apihub/next-data-model/model/async-api/types/aliases";
import { AsyncApiTreeNodeKind, AsyncApiTreeNodeKinds, AsyncApiTreeNodeKindsList } from "@apihub/next-data-model/model/async-api/types/node-kind";
import { AsyncApiNodeMeta } from "@apihub/next-data-model/model/async-api/types/node-meta";
import { AsyncApiTreeNodeValue } from "@apihub/next-data-model/model/async-api/types/node-value";
import { OperationKeys } from "@apihub/next-data-model/shared/async-api/types/operation-keys";
import { isObject, isObjectWithStringKeys } from "@apihub/next-data-model/utilities";
import { NodeId, NodeKey } from "@apihub/next-data-model/utility-types";
import { DiffType } from "@netcracker/qubership-apihub-api-diff/dist/types";
import { JSON_SCHEMA_PROPERTY_REF } from "@netcracker/qubership-apihub-api-unifier";
import { syncCrawl } from "@netcracker/qubership-apihub-json-crawl";
import { TreeWithDiffsBuilder } from "../../abstract/tree-with-diffs/builder";
import { getAsyncApiCrawlRules } from "../json-crawl-entities/rules/rules";
import { AsyncApiTreeWithDiffsCrawlRule } from "../json-crawl-entities/rules/types";
import { AsyncApiTreeWithDiffsCrawlState } from "../json-crawl-entities/state/types";
import { AsyncApiLogger, createAsyncApiLogger } from "../logging";
import { AsyncApiSpecWithDiffsTransformer } from "../shared/async-api-spec-with-diffs-transformer";
import { createAsyncApiTreeBuildingHooks } from "../shared/tree-building-hooks";
import { AsyncApiTreeBuilder } from "../tree/builder";
import { AsyncApiNodeDescendantDiffsAggregatorFactory as AsyncApiNodeDescendantDiffsSummaryAggregatorFactory } from "./diffs-data-aggregators/node-descendant-diffs-summary/factory";
import { AsyncApiNodeDescendantDiffsAggregatorFactory } from "./diffs-data-aggregators/node-descendant-diffs/factory";
import { AsyncApiNodeDiffsSeveritiesAggregatorFactory } from "./diffs-data-aggregators/node-diffs-severities/factory";
import { AsyncApiNodeDiffsAggregatorFactory, DiffMetaKeys } from "./diffs-data-aggregators/node-diffs/factory";

const ASYNC_API_NODE_KINDS: ReadonlySet<string> = new Set(AsyncApiTreeNodeKindsList)

export class AsyncApiTreeWithDiffsBuilder extends TreeWithDiffsBuilder<
  AsyncApiTreeNodeValue<AsyncApiTreeNodeKind> | null,
  AsyncApiTreeNodeKind,
  AsyncApiNodeMeta
> {
  public readonly tree: AsyncApiTreeWithDiffs;
  private readonly specificationTransformer: AsyncApiSpecWithDiffsTransformer;

  constructor(
    private readonly source: unknown,
    private readonly referenceNamePropertyKey: symbol,
    private readonly diffsMetaKeys: DiffMetaKeys,
    private readonly operationKeys?: OperationKeys,
    private readonly logger: AsyncApiLogger = createAsyncApiLogger(),
  ) {
    super()
    this.tree = new AsyncApiTreeWithDiffs()
    this.specificationTransformer = new AsyncApiSpecWithDiffsTransformer(
      this.referenceNamePropertyKey,
      this.logger,
      this.diffsMetaKeys,
    )
  }

  public build(): AsyncApiTreeWithDiffs {
    if (!isObject(this.source)) {
      return this.tree
    }

    const initialState: AsyncApiTreeWithDiffsCrawlState = {
      parent: null,
      container: null,
      alreadyConvertedValuesCache: new Map(),
    }

    const initialRules: AsyncApiTreeWithDiffsCrawlRule = getAsyncApiCrawlRules<AsyncApiTreeWithDiffsCrawlState>(AsyncApiTreeNodeKinds.MESSAGE)

    const preparedSource = this.specificationTransformer.transformOperationOrientedSpecToMessageOrientedSpec(
      this.source,
      this.operationKeys,
    )
    this.logger.debug("[AsyncAPI][WithDiffs] Prepared Source:", preparedSource)

    const hooks = createAsyncApiTreeBuildingHooks<
      AsyncApiTreeNodeWithDiffs,
      AsyncApiTreeWithDiffsCrawlState,
      AsyncApiTreeWithDiffsCrawlRule,
      TreeNodeWithDiffsParams<object | null, AsyncApiTreeNodeKind, AsyncApiNodeMeta>
    >({
      source: preparedSource,
      tree: this.tree,
      createNodeFromRaw: (id, key, kind, complex, params) => this.createNodeFromRaw(id, key, kind, complex, params),
      createNodeParams: (value, parent, container) => ({
        value: isObject(value) && !Array.isArray(value) ? value : null,
        newDataLevel: true,
        parent,
        container,
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

    syncCrawl<AsyncApiTreeWithDiffsCrawlState, AsyncApiTreeWithDiffsCrawlRule>(
      preparedSource,
      hooks,
      {
        state: initialState,
        rules: initialRules,
      },
    )

    return this.tree
  }

  private resolveNodeKey(key: NodeKey, value: unknown): NodeKey {
    if (!isObject(value)) {
      return key
    }
    if (this.referenceNamePropertyKey && value[this.referenceNamePropertyKey]) {
      const nodeKeyCandidate = value[this.referenceNamePropertyKey]
      if (typeof nodeKeyCandidate === 'string' || typeof nodeKeyCandidate === 'number') {
        return nodeKeyCandidate
      }
    }
    if ('id' in value && typeof value.id === 'string') {
      return value.id
    }
    return key
  }

  protected createNodeFromRaw(
    id: NodeId,
    key: NodeKey,
    kind: AsyncApiTreeNodeKind,
    complex: boolean,
    params: TreeNodeWithDiffsParams<
      AsyncApiTreeNodeValue<AsyncApiTreeNodeKind> | null,
      AsyncApiTreeNodeKind,
      AsyncApiNodeMeta
    >,
  ): AsyncApiTreeNodeWithDiffs | undefined {
    const { parent = null, container = null, newDataLevel } = params

    if (complex) {
      const nodeMeta = this.createNodeMeta(key, params)
      const complexParams: ComplexTreeNodeWithDiffsParams<
        AsyncApiTreeNodeValue<AsyncApiTreeNodeKind> | null,
        AsyncApiTreeNodeKind,
        AsyncApiNodeMeta
      > = {
        type: TreeNodeComplexityTypes.COMPLEX,
        parent: parent && this.isAsyncApiSimpleTreeNodeWithDiffs(parent) ? parent : null,
        container: container && this.isAsyncApiComplexTreeNodeWithDiffs(container) ? container : null,
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
    const simpleParams: SimpleTreeNodeWithDiffsParams<
      AsyncApiTreeNodeValue<AsyncApiTreeNodeKind> | null,
      AsyncApiTreeNodeKind,
      AsyncApiNodeMeta
    > = {
      type: TreeNodeComplexityTypes.SIMPLE,
      parent: parent && this.isAsyncApiSimpleTreeNodeWithDiffs(parent) ? parent : null,
      container: container && this.isAsyncApiComplexTreeNodeWithDiffs(container) ? container : null,
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
    params: TreeNodeWithDiffsParams<
      AsyncApiTreeNodeValue<AsyncApiTreeNodeKind> | null,
      AsyncApiTreeNodeKind,
      AsyncApiNodeMeta
    >,
  ): AsyncApiNodeMeta {
    const { value } = params
    return {
      ...this.isValueWithBrokenRef(value) ? { brokenRef: `${value.$ref}` } : {},
      _fragment: value,
    }
  }

  protected createNodeValue(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    key: NodeKey,
    kind: string,
    params: TreeNodeWithDiffsParams<
      AsyncApiTreeNodeValue<AsyncApiTreeNodeKind> | null,
      AsyncApiTreeNodeKind,
      AsyncApiNodeMeta
    >,
  ): AsyncApiTreeNodeValue<AsyncApiTreeNodeKind> | null {
    const { value } = params

    if (value === undefined || value === null) {
      return null
    }
    if (!isObjectWithStringKeys(value) || !this.isAsyncApiTreeNodeKind(kind)) {
      return null
    }

    switch (kind) {
      case AsyncApiTreeNodeKinds.BINDING:
        return this.pick<AsyncApiTreeNodeValue<typeof AsyncApiTreeNodeKinds.BINDING>>(
          value,
          AsyncApiTreeBuilder.getAsyncApiTreeNodeValueProps(kind),
        )
      case AsyncApiTreeNodeKinds.EXTENSIONS:
        return this.pick<AsyncApiTreeNodeValue<typeof AsyncApiTreeNodeKinds.EXTENSIONS>>(
          value,
          AsyncApiTreeBuilder.getAsyncApiTreeNodeValueProps(kind),
        )
      case AsyncApiTreeNodeKinds.MESSAGE:
        return this.pick<AsyncApiTreeNodeValue<typeof AsyncApiTreeNodeKinds.MESSAGE>>(
          value,
          AsyncApiTreeBuilder.getAsyncApiTreeNodeValueProps(kind),
        )
      case AsyncApiTreeNodeKinds.MESSAGE_CHANNEL:
        return this.pick<AsyncApiTreeNodeValue<typeof AsyncApiTreeNodeKinds.MESSAGE_CHANNEL>>(
          value,
          AsyncApiTreeBuilder.getAsyncApiTreeNodeValueProps(kind),
        )
      case AsyncApiTreeNodeKinds.MESSAGE_CHANNEL_PARAMETERS:
        return this.pick<AsyncApiTreeNodeValue<typeof AsyncApiTreeNodeKinds.MESSAGE_CHANNEL_PARAMETERS>>(
          value,
          AsyncApiTreeBuilder.getAsyncApiTreeNodeValueProps(kind),
        )
      case AsyncApiTreeNodeKinds.MESSAGE_HEADERS:
        return this.pick<AsyncApiTreeNodeValue<typeof AsyncApiTreeNodeKinds.MESSAGE_HEADERS>>(
          value,
          AsyncApiTreeBuilder.getAsyncApiTreeNodeValueProps(kind),
        )
      case AsyncApiTreeNodeKinds.MESSAGE_OPERATION:
        return this.pick<AsyncApiTreeNodeValue<typeof AsyncApiTreeNodeKinds.MESSAGE_OPERATION>>(
          value,
          AsyncApiTreeBuilder.getAsyncApiTreeNodeValueProps(kind),
        )
      case AsyncApiTreeNodeKinds.MESSAGE_PAYLOAD:
        return this.pick<AsyncApiTreeNodeValue<typeof AsyncApiTreeNodeKinds.MESSAGE_PAYLOAD>>(
          value,
          AsyncApiTreeBuilder.getAsyncApiTreeNodeValueProps(kind),
        )
      case AsyncApiTreeNodeKinds.SERVER:
        return this.pick<AsyncApiTreeNodeValue<typeof AsyncApiTreeNodeKinds.SERVER>>(
          value,
          AsyncApiTreeBuilder.getAsyncApiTreeNodeValueProps(kind),
        )
      default:
        return null
    }
  }

  protected createNodeDiffs(
    kind: string,
    params: TreeNodeWithDiffsParams<
      AsyncApiTreeNodeValue<AsyncApiTreeNodeKind> | null,
      AsyncApiTreeNodeKind,
      AsyncApiNodeMeta
    >,
  ): NodeDiffs<AsyncApiTreeNodeValue<AsyncApiTreeNodeKind> | null> | undefined {
    if (!this.isAsyncApiTreeNodeKind(kind)) {
      return undefined
    }
    return AsyncApiNodeDiffsAggregatorFactory.instance(kind).aggregate(params.value, this.diffsMetaKeys)
  }

  protected createNodeDescendantsDiffs(
    kind: string,
    params: TreeNodeWithDiffsParams<
      AsyncApiTreeNodeValue<AsyncApiTreeNodeKind> | null,
      AsyncApiTreeNodeKind,
      AsyncApiNodeMeta
    >,
  ): NodeDescendantDiffs | undefined {
    if (!this.isAsyncApiTreeNodeKind(kind)) {
      return undefined
    }
    return AsyncApiNodeDescendantDiffsAggregatorFactory.instance(kind).aggregate(params.value, this.diffsMetaKeys)
  }

  protected createNodeDescendantsDiffsSummary(
    kind: string,
    params: TreeNodeWithDiffsParams<
      AsyncApiTreeNodeValue<AsyncApiTreeNodeKind> | null,
      AsyncApiTreeNodeKind,
      AsyncApiNodeMeta
    >,
  ): Set<DiffType> | undefined {
    if (!this.isAsyncApiTreeNodeKind(kind)) {
      return undefined
    }
    return AsyncApiNodeDescendantDiffsSummaryAggregatorFactory.instance(kind).aggregate(params.value, this.diffsMetaKeys)
  }

  protected createNodeDiffsSeverities(
    kind: string,
    params: TreeNodeWithDiffsParams<
      AsyncApiTreeNodeValue<AsyncApiTreeNodeKind> | null,
      AsyncApiTreeNodeKind,
      AsyncApiNodeMeta
    >,
  ): NodeDiffsSeverities | undefined {
    if (!this.isAsyncApiTreeNodeKind(kind)) {
      return undefined
    }
    return AsyncApiNodeDiffsSeveritiesAggregatorFactory.instance(kind).aggregate(params.value, this.diffsMetaKeys)
  }

  private assignNodeDiffs(
    node: AsyncApiTreeNodeWithDiffs,
    kind: AsyncApiTreeNodeKind,
    params: TreeNodeWithDiffsParams<
      AsyncApiTreeNodeValue<AsyncApiTreeNodeKind> | null,
      AsyncApiTreeNodeKind,
      AsyncApiNodeMeta
    >,
  ): void {
    const nodeDiffs = this.createNodeDiffs(kind, params)
    nodeDiffs && Object.assign(node.diffs, nodeDiffs)

    const descendantDiffs = this.createNodeDescendantsDiffs(kind, params)
    descendantDiffs && Object.assign(node.descendantDiffs, descendantDiffs)

    const descendantDiffsSummary = this.createNodeDescendantsDiffsSummary(kind, params)
    descendantDiffsSummary && descendantDiffsSummary.forEach((diffType) => node.descendantDiffsSummary.add(diffType))

    const diffsSeverities = this.createNodeDiffsSeverities(kind, params)
    diffsSeverities && Object.assign(node.diffsSeverities, diffsSeverities)
  }

  private isAsyncApiTreeNodeKind(kind: string): kind is AsyncApiTreeNodeKind {
    return ASYNC_API_NODE_KINDS.has(kind)
  }

  private isAsyncApiSimpleTreeNodeWithDiffs(
    node: AsyncApiTreeNodeWithDiffs,
  ): node is AsyncApiSimpleTreeNodeWithDiffs {
    return node.type === TreeNodeComplexityTypes.SIMPLE
  }

  private isAsyncApiComplexTreeNodeWithDiffs(
    node: AsyncApiTreeNodeWithDiffs,
  ): node is AsyncApiComplexTreeNodeWithDiffs {
    return node.type === TreeNodeComplexityTypes.COMPLEX
  }

  private isValueWithBrokenRef(value: unknown): value is Record<typeof JSON_SCHEMA_PROPERTY_REF, unknown> {
    return isObject(value) && JSON_SCHEMA_PROPERTY_REF in value
  }
}