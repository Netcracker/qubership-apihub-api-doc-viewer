import { JsonSchemaTree } from "@apihub/next-data-model/model/json-schema/tree/tree.impl"
import { JsonSchemaTreeNodeValue } from "@apihub/next-data-model/model/json-schema/types/node-value"
import { JsonSchemaTreeNode } from "@apihub/next-data-model/model/json-schema/types/aliases"
import { JsonSchemaTreeNodeKind, JsonSchemaTreeNodeKindsList } from "@apihub/next-data-model/model/json-schema/types/node-kind"
import { JsonSchemaTreeNodeMeta } from "@apihub/next-data-model/model/json-schema/types/node-meta"
import { JsonSchemaTreeBuilderParams } from "@apihub/next-data-model/shared/json-schema/types/tree-builder-params"
import { isJsonSchemaComplexValue } from "@apihub/next-data-model/shared/json-schema/guards/schema-value"
import { syncCrawl } from "@netcracker/qubership-apihub-json-crawl"
import {
  ComplexTreeNodeParams,
  ITreeNode,
  SimpleTreeNodeParams,
  TreeNodeComplexityTypes,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  TreeNodeParams,
} from "../../../model/abstract/tree/tree-node.interface"
import { isObject, isArray } from "../../../utilities"
import { NodeId, NodeKey } from "../../../utility-types"
import { TreeBuilder } from "../../abstract/tree/builder"
import { AncestorsRegistry } from "../../abstract/json-crawl-entities/state/ancestors-registry"
import {
  collectAncestorsFromTree,
  LazyMaterializationState,
} from "../../abstract/tree/lazy-materialization"
import { jsonSchemaHasOwnChildren } from "@apihub/next-data-model/shared/json-schema/has-own-children"
import { BuildingServiceLogger, createBuildingServiceLogger } from "../../../loggers"
import { getJsonSchemaCrawlRules } from "../json-crawl-entities/rules/rules"
import { JsonSchemaCrawlRule } from "../json-crawl-entities/rules/types"
import { JsonSchemaTreeCrawlState } from "../json-crawl-entities/state/types"
import { createJsonSchemaTreeBuildingHooks, JsonSchemaTreeBuildingNodeParams } from "./building-hooks"
import { JsonSchemaNodeDataBuilder } from "./node-data/builder"

type SimpleJsonSchemaTreeNodeParams = SimpleTreeNodeParams<
  JsonSchemaTreeNodeValue | null,
  JsonSchemaTreeNodeKind,
  JsonSchemaTreeNodeMeta
>

type ComplexJsonSchemaTreeNodeParams = ComplexTreeNodeParams<
  JsonSchemaTreeNodeValue | null,
  JsonSchemaTreeNodeKind,
  JsonSchemaTreeNodeMeta
>

export class JsonSchemaTreeBuilder extends TreeBuilder<
  JsonSchemaTreeNodeValue | null,
  JsonSchemaTreeNodeKind,
  JsonSchemaTreeNodeMeta
> {
  public readonly tree: JsonSchemaTree
  private readonly source: unknown
  private readonly materializeDepth: number | undefined
  private readonly logger: BuildingServiceLogger
  private readonly nodeDataBuilder: JsonSchemaNodeDataBuilder
  private readonly lazyState = new LazyMaterializationState<JsonSchemaCrawlRule>()
  private crawlHooks: ReturnType<typeof createJsonSchemaTreeBuildingHooks> | null = null

  constructor(params: JsonSchemaTreeBuilderParams) {
    const {
      source,
      materializeDepth,
      logger = createBuildingServiceLogger(),
    } = params

    super()
    this.source = source
    this.materializeDepth = materializeDepth
    this.logger = logger
    this.tree = new JsonSchemaTree()
    this.nodeDataBuilder = new JsonSchemaNodeDataBuilder((source, keys) => this.pick(source, keys))
  }

  public build(): JsonSchemaTree {
    if (!isObject(this.source)) {
      return this.tree
    }

    const initialState: JsonSchemaTreeCrawlState = {
      parent: null,
      container: null,
      ancestors: new AncestorsRegistry(),
      depth: 0,
      materializeDepth: this.materializeDepth,
      pathPrefix: [],
    }

    const initialRules: JsonSchemaCrawlRule = getJsonSchemaCrawlRules()

    this.crawlHooks = createJsonSchemaTreeBuildingHooks({
      source: this.source,
      tree: this.tree,
      supportedNodeKinds: JsonSchemaTreeNodeKindsList,
      createNodeFromRaw: (id, key, kind, complex, params) => this.createNodeFromRaw(id, key, kind, complex, params),
      createNodeParams: (value, parent, container) => ({
        value: isObject(value) && !Array.isArray(value) ? value : null,
        newDataLevel: true,
        parent,
        container,
      }),
      createStateForSimpleNode: (state, node) => ({
        parent: node,
        container: null,
        ancestors: state.ancestors,
        depth: state.depth,
        materializeDepth: state.materializeDepth,
        pathPrefix: state.pathPrefix,
      }),
      createStateForComplexNode: (state, node) => ({
        parent: state.parent,
        container: node,
        ancestors: state.ancestors,
        depth: state.depth,
        materializeDepth: state.materializeDepth,
        pathPrefix: state.pathPrefix,
      }),
      isSimpleNode: (node) => this.isSimpleTreeNode(node),
      isComplexNode: (node) => this.isComplexTreeNode(node),
      resolveNodeKey: (key, value) => this.resolveNodeKey(key, value),
      isDisallowedValue: (value) => value === undefined || value === null,
      shouldSkipNodeCreation: (value) => isArray(value),
      lazy: this.materializeDepth === undefined
        ? undefined
        : {
          state: this.lazyState,
          resolveHasOwnChildren: jsonSchemaHasOwnChildren,
        },
    })

    this.logger.debug("[JSON Schema] Building tree from source:", this.source)

    syncCrawl<JsonSchemaTreeCrawlState, JsonSchemaCrawlRule>(
      this.source,
      this.crawlHooks,
      {
        state: initialState,
        rules: initialRules,
      },
    )

    return this.tree
  }

  public materializeChildren(node: JsonSchemaTreeNode, depth = 1): void {
    const work = this.lazyState.pending.get(node.id)
    if (!work || !this.crawlHooks) {
      return
    }
    this.lazyState.pending.delete(work.nodeId)

    const rematerializeState: JsonSchemaTreeCrawlState = {
      parent: node,
      container: null,
      ancestors: collectAncestorsFromTree(node, this.lazyState.fragments),
      depth: 0,
      materializeDepth: depth,
      pathPrefix: work.path,
    }

    syncCrawl<JsonSchemaTreeCrawlState, JsonSchemaCrawlRule>(
      work.fragment,
      this.crawlHooks,
      {
        state: rematerializeState,
        rules: work.rules,
      },
      true,
    )
  }

  protected createNodeFromRaw(
    id: NodeId,
    key: NodeKey,
    kind: JsonSchemaTreeNodeKind,
    complex: boolean,
    params: JsonSchemaTreeBuildingNodeParams,
  ): JsonSchemaTreeNode | undefined {
    const { parent, container, newDataLevel, value } = params
    const isComplex = complex || isJsonSchemaComplexValue(value)

    if (isComplex) {
      const nodeMeta = this.createNodeMeta(key, params)
      const extendedParams: ComplexJsonSchemaTreeNodeParams = {
        type: TreeNodeComplexityTypes.COMPLEX,
        parent: this.takeSimpleTreeNode(parent),
        container: this.takeComplexTreeNode(container),
        value: null,
        meta: nodeMeta,
        newDataLevel,
      }
      return this.tree.createComplexNode(id, key, kind, false, extendedParams)
    }

    const nodeValue = this.createNodeValue(key, kind, params)
    const nodeMeta = this.createNodeMeta(key, params)
    const extendedParams: SimpleJsonSchemaTreeNodeParams = {
      type: TreeNodeComplexityTypes.SIMPLE,
      parent: this.takeSimpleTreeNode(parent),
      container: this.takeComplexTreeNode(container),
      value: nodeValue,
      meta: nodeMeta,
      newDataLevel,
    }
    return this.tree.createSimpleNode(id, key, kind, false, extendedParams)
  }

  protected createNodeMeta(
    key: NodeKey,
    params: JsonSchemaTreeBuildingNodeParams,
  ): JsonSchemaTreeNodeMeta {
    const { value, parent } = params
    return this.nodeDataBuilder.buildNodeMeta(value, key, parent, false)
  }

  protected createNodeValue(
    key: NodeKey,
    kind: JsonSchemaTreeNodeKind,
    params: JsonSchemaTreeBuildingNodeParams,
  ): JsonSchemaTreeNodeValue | null {
    const { value } = params
    return this.nodeDataBuilder.createNodeValue(
      kind,
      key,
      value,
      (source, keys) => this.pick(source, keys),
    )
  }

  protected resolveNodeKey(key: NodeKey, value: unknown): NodeKey {
    if (isObject(value) && typeof value.title === "string" && value.title.length > 0) {
      return value.title
    }
    return key
  }

  protected isSimpleTreeNode(node: ITreeNode<JsonSchemaTreeNodeValue | null, JsonSchemaTreeNodeKind, JsonSchemaTreeNodeMeta>): boolean {
    return node.type === TreeNodeComplexityTypes.SIMPLE
  }

  protected isComplexTreeNode(node: ITreeNode<JsonSchemaTreeNodeValue | null, JsonSchemaTreeNodeKind, JsonSchemaTreeNodeMeta>): boolean {
    return node.type === TreeNodeComplexityTypes.COMPLEX
  }

  private takeSimpleTreeNode(node: JsonSchemaTreeNode | null): JsonSchemaTreeNode | null {
    return node && this.isSimpleTreeNode(node) ? node : null
  }

  private takeComplexTreeNode(node: JsonSchemaTreeNode | null): JsonSchemaTreeNode | null {
    return node && this.isComplexTreeNode(node) ? node : null
  }
}
