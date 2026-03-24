import { ITreeNodeWithDiffs, NodeDescendantDiffs, NodeDiffs, NodeDiffsSeverities, TreeNodeWithDiffsParams } from "@apihub/next-data-model/model/abstract/tree-with-diffs/tree-node.interface";
import { TreeNodeComplexityTypes } from "@apihub/next-data-model/model/abstract/tree/tree-node.interface";
import { AsyncApiComplexTreeNodeWithDiffs } from "@apihub/next-data-model/model/async-api/tree-with-diffs/complex-node.impl";
import { AsyncApiSimpleTreeNodeWithDiffs } from "@apihub/next-data-model/model/async-api/tree-with-diffs/simple-node.impl";
import { AsyncApiTreeWithDiffs } from "@apihub/next-data-model/model/async-api/tree-with-diffs/tree.impl";
import { AsyncApiTreeNodeKind, AsyncApiTreeNodeKinds, AsyncApiTreeNodeKindsList } from "@apihub/next-data-model/model/async-api/types/node-kind";
import { AsyncApiNodeMeta } from "@apihub/next-data-model/model/async-api/types/node-meta";
import { AsyncApiTreeNodeValue } from "@apihub/next-data-model/model/async-api/types/node-value";
import { OperationKeys } from "@apihub/next-data-model/shared/async-api/types/operation-keys";
import { NodeId, NodeKey } from "@apihub/next-data-model/utility-types";
import { isObject, isObjectWithStringKeys } from "@apihub/next-data-model/utilities";
import { JSON_SCHEMA_PROPERTY_REF } from "@netcracker/qubership-apihub-api-unifier";
import { syncCrawl } from "@netcracker/qubership-apihub-json-crawl";
import { DiffType } from "@netcracker/qubership-apihub-api-diff/dist/types";
import { TreeWithDiffsBuilder } from "../../abstract/tree-with-diffs/builder";
import { getAsyncApiCrawlRules } from "../json-crawl-entities/rules/rules";
import { AsyncApiCrawlRule, SchemaCrawlRule } from "../json-crawl-entities/rules/types";
import { CommonState } from "../json-crawl-entities/state/types";
import { AsyncApiLogger, createAsyncApiLogger } from "../logging";
import { AsyncApiSpecWithDiffsTransformer } from "../shared/async-api-spec-with-diffs-transformer";
import { createAsyncApiTreeBuildingHooks } from "../shared/tree-building-hooks";
import { AsyncApiTreeBuilder } from "../tree/builder";
import { AsyncApiNodeDescendantDiffsAggregatorFactory } from "./diffs-data-aggregators/node-descendant-diffs/factory";
import { AsyncApiNodeDescendantDiffsAggregatorFactory as AsyncApiNodeDescendantDiffsSummaryAggregatorFactory } from "./diffs-data-aggregators/node-descendant-diffs-summary/factory";
import { AsyncApiNodeDiffsAggregatorFactory, DiffMetaKeys } from "./diffs-data-aggregators/node-diffs/factory";
import { AsyncApiNodeDiffsSeveritiesAggregatorFactory } from "./diffs-data-aggregators/node-diffs-severities/factory";

type AsyncApiTreeNodeWithDiffs = ITreeNodeWithDiffs<
  AsyncApiTreeNodeValue<AsyncApiTreeNodeKind> | null,
  AsyncApiTreeNodeKind,
  AsyncApiNodeMeta
>

type AsyncApiTreeWithDiffsCrawlState = CommonState<
  AsyncApiTreeNodeValue<AsyncApiTreeNodeKind> | null,
  AsyncApiTreeNodeKind,
  AsyncApiNodeMeta,
  AsyncApiTreeNodeWithDiffs
>

type AsyncApiTreeWithDiffsCrawlRule = SchemaCrawlRule<AsyncApiTreeNodeKind, AsyncApiTreeWithDiffsCrawlState>

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

    const initialRules: AsyncApiTreeWithDiffsCrawlRule = getAsyncApiCrawlRules(AsyncApiTreeNodeKinds.MESSAGE) as unknown as AsyncApiTreeWithDiffsCrawlRule

    const preparedSource = this.specificationTransformer.transformOperationOrientedSpecToMessageOrientedSpec(
      this.source,
      this.operationKeys,
    )
    this.logger.debug("[AsyncAPI][WithDiffs] Prepared Source:", preparedSource)

    const hooks = createAsyncApiTreeBuildingHooks<
      AsyncApiTreeNodeWithDiffs,
      AsyncApiTreeWithDiffsCrawlState,
      AsyncApiCrawlRule
    >({
      source: preparedSource,
      tree: this.tree,
      createNodeFromRaw: (id, key, kind, complex, params) => this.createNodeFromRaw(
        id,
        key,
        kind,
        complex,
        params as TreeNodeWithDiffsParams<object | null, string, object>,
      ),
      isSimpleNode: (node) => node.type === TreeNodeComplexityTypes.SIMPLE,
      isComplexNode: (node) => node.type === TreeNodeComplexityTypes.COMPLEX,
      resolveNodeKey: (key, value) => this.resolveNodeKey(key, value),
      shouldStopAfterNodeCreation: (value) => isObject(value) && Boolean(value.isPrimitive),
    })

    syncCrawl<AsyncApiTreeWithDiffsCrawlState, AsyncApiCrawlRule>(
      preparedSource,
      hooks,
      {
        state: initialState,
        rules: initialRules as unknown as AsyncApiCrawlRule,
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
    params: TreeNodeWithDiffsParams<object | null, string, object>, // FIXME
  ): AsyncApiSimpleTreeNodeWithDiffs | AsyncApiComplexTreeNodeWithDiffs | undefined {
    const { parent = null, container = null, newDataLevel } = params

    if (complex) {
      const nodeMeta = this.createNodeMeta(key, params)
      const treeNode = this.tree.createComplexNode(id, key, kind, false, {
        type: TreeNodeComplexityTypes.COMPLEX,
        parent: parent as AsyncApiSimpleTreeNodeWithDiffs | null,
        container: container as AsyncApiComplexTreeNodeWithDiffs | null,
        value: null,
        meta: nodeMeta,
        newDataLevel,
      })
      this.assignNodeDiffs(treeNode, kind, params)
      return treeNode as AsyncApiComplexTreeNodeWithDiffs
    }

    const nodeValue = this.createNodeValue(key, kind, params)
    const nodeMeta = this.createNodeMeta(key, params)
    const treeNode = this.tree.createSimpleNode(id, key, kind, false, {
      type: TreeNodeComplexityTypes.SIMPLE,
      parent: parent as AsyncApiSimpleTreeNodeWithDiffs | null,
      container: container as AsyncApiComplexTreeNodeWithDiffs | null,
      value: nodeValue,
      meta: nodeMeta,
      newDataLevel,
    })
    this.assignNodeDiffs(treeNode, kind, params)
    return treeNode as AsyncApiSimpleTreeNodeWithDiffs
  }

  protected createNodeMeta(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    key: NodeKey,
    params: TreeNodeWithDiffsParams<object | null, string, object>, // FIXME
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
    params: TreeNodeWithDiffsParams<object | null, string, object>, // FIXME
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
    params: TreeNodeWithDiffsParams<object | null, string, object>, // FIXME
  ): NodeDiffs<AsyncApiTreeNodeValue<AsyncApiTreeNodeKind> | null> | undefined {
    if (!this.isAsyncApiTreeNodeKind(kind)) {
      return undefined
    }
    return AsyncApiNodeDiffsAggregatorFactory.instance(kind).aggregate(params.value, this.diffsMetaKeys)
  }

  protected createNodeDescendantsDiffs(
    kind: string,
    params: TreeNodeWithDiffsParams<object | null, string, object>, // FIXME
  ): NodeDescendantDiffs | undefined {
    if (!this.isAsyncApiTreeNodeKind(kind)) {
      return undefined
    }
    return AsyncApiNodeDescendantDiffsAggregatorFactory.instance(kind).aggregate(params.value, this.diffsMetaKeys)
  }

  protected createNodeDescendantsDiffsSummary(
    kind: string,
    params: TreeNodeWithDiffsParams<object | null, string, object>, // FIXME
  ): Set<DiffType> | undefined {
    if (!this.isAsyncApiTreeNodeKind(kind)) {
      return undefined
    }
    return AsyncApiNodeDescendantDiffsSummaryAggregatorFactory.instance(kind).aggregate(params.value, this.diffsMetaKeys)
  }

  protected createNodeDiffsSeverities(
    kind: string,
    params: TreeNodeWithDiffsParams<object | null, string, object>, // FIXME
  ): NodeDiffsSeverities | undefined {
    if (!this.isAsyncApiTreeNodeKind(kind)) {
      return undefined
    }
    return AsyncApiNodeDiffsSeveritiesAggregatorFactory.instance(kind).aggregate(params.value, this.diffsMetaKeys)
  }

  private assignNodeDiffs(
    node: ITreeNodeWithDiffs<
      AsyncApiTreeNodeValue<AsyncApiTreeNodeKind> | null,
      AsyncApiTreeNodeKind,
      AsyncApiNodeMeta
    >,
    kind: AsyncApiTreeNodeKind,
    params: TreeNodeWithDiffsParams<object | null, string, object>, // FIXME
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
    return AsyncApiTreeNodeKindsList.includes(kind as AsyncApiTreeNodeKind)
  }

  private isValueWithBrokenRef(value: unknown): value is Record<typeof JSON_SCHEMA_PROPERTY_REF, unknown> {
    return isObject(value) && JSON_SCHEMA_PROPERTY_REF in value
  }
}