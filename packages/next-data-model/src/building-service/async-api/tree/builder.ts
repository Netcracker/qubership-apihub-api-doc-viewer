import { AsyncApiComplexTreeNode } from "@apihub/next-data-model/model/async-api/tree/complex-node.impl";
import { AsyncApiSimpleTreeNode } from "@apihub/next-data-model/model/async-api/tree/simple-node.impl";
import { AsyncApiTree } from "@apihub/next-data-model/model/async-api/tree/tree.impl";
import { AsyncApiTreeNodeKind, AsyncApiTreeNodeKinds, AsyncApiTreeNodeKindsList } from "@apihub/next-data-model/model/async-api/types/node-kind";
import { AsyncApiNodeMeta } from "@apihub/next-data-model/model/async-api/types/node-meta";
import { AsyncApiTreeNodeValue, AsyncApiTreeNodeValueBase } from "@apihub/next-data-model/model/async-api/types/node-value";
import { buildPointer, JSON_SCHEMA_PROPERTY_REF } from "@netcracker/qubership-apihub-api-unifier";
import { isArray, syncCrawl, SyncCrawlHook } from "@netcracker/qubership-apihub-json-crawl";
import { ComplexTreeNodeParams, ITreeNode, SimpleTreeNodeParams, TreeNodeComplexityType, TreeNodeComplexityTypes, TreeNodeParams } from "../../../model/abstract/tree/tree-node.interface";
import { isObject, isObjectWithStringKeys } from "../../../utilities";
import { NodeId, NodeKey } from "../../../utility-types";
import { TreeBuilder } from "../../abstract/tree/builder";
import { getAsyncApiCrawlRules } from "../json-crawl-entities/rules/rules";
import { AsyncApiCrawlRule, SchemaCrawlRule } from "../json-crawl-entities/rules/types";
import { AsyncApiTreeCrawlState, CommonState } from "../json-crawl-entities/state/types";
import { SchemaTransformFunc } from "../json-crawl-entities/transformers/types/types";

// Union of all possible keys from all AsyncApiTreeNodeValue variants
type AnyAsyncApiNodeValueKey =
  | keyof AsyncApiTreeNodeValue<typeof AsyncApiTreeNodeKinds.BINDING>
  | keyof AsyncApiTreeNodeValue<typeof AsyncApiTreeNodeKinds.EXTENSIONS>
  | keyof AsyncApiTreeNodeValue<typeof AsyncApiTreeNodeKinds.MESSAGE>
  | keyof AsyncApiTreeNodeValue<typeof AsyncApiTreeNodeKinds.MESSAGE_CHANNEL>
  | keyof AsyncApiTreeNodeValue<typeof AsyncApiTreeNodeKinds.MESSAGE_CHANNEL_PARAMETERS>
  | keyof AsyncApiTreeNodeValue<typeof AsyncApiTreeNodeKinds.MESSAGE_HEADERS>
  | keyof AsyncApiTreeNodeValue<typeof AsyncApiTreeNodeKinds.MESSAGE_OPERATION>
  | keyof AsyncApiTreeNodeValue<typeof AsyncApiTreeNodeKinds.MESSAGE_PAYLOAD>

type SimpleAsyncApiTreeNodeParams = SimpleTreeNodeParams<
  AsyncApiTreeNodeValue<AsyncApiTreeNodeKind> | null,
  AsyncApiTreeNodeKind,
  AsyncApiNodeMeta
>

type ComplexAsyncApiTreeNodeParams = ComplexTreeNodeParams<
  AsyncApiTreeNodeValue<AsyncApiTreeNodeKind> | null,
  AsyncApiTreeNodeKind,
  AsyncApiNodeMeta
>

export class AsyncApiTreeBuilder extends TreeBuilder<
  AsyncApiTreeNodeValue<AsyncApiTreeNodeKind> | null,
  AsyncApiTreeNodeKind,
  AsyncApiNodeMeta
> {
  public readonly tree: AsyncApiTree;

  public static readonly ASYNC_API_TREE_NODE_META_PROPS: (keyof AsyncApiNodeMeta)[] = []

  private static readonly ASYNC_API_TREE_NODE_VALUE_COMMON_PROPS: (keyof AsyncApiTreeNodeValueBase)[] = [
    'title', 'description', 'summary'
  ]

  // Function overloads for type-safe return based on input type
  public static getAsyncApiTreeNodeValueProps(
    type:
      | typeof AsyncApiTreeNodeKinds.BINDING
      | typeof AsyncApiTreeNodeKinds.EXTENSIONS
      | typeof AsyncApiTreeNodeKinds.MESSAGE
      | typeof AsyncApiTreeNodeKinds.MESSAGE_CHANNEL
      | typeof AsyncApiTreeNodeKinds.MESSAGE_CHANNEL_PARAMETERS
      | typeof AsyncApiTreeNodeKinds.MESSAGE_HEADERS
      | typeof AsyncApiTreeNodeKinds.MESSAGE_OPERATION
      | typeof AsyncApiTreeNodeKinds.MESSAGE_PAYLOAD
  ): (keyof AsyncApiTreeNodeValue<
    | typeof AsyncApiTreeNodeKinds.BINDING
    | typeof AsyncApiTreeNodeKinds.EXTENSIONS
    | typeof AsyncApiTreeNodeKinds.MESSAGE
    | typeof AsyncApiTreeNodeKinds.MESSAGE_CHANNEL
    | typeof AsyncApiTreeNodeKinds.MESSAGE_CHANNEL_PARAMETERS
    | typeof AsyncApiTreeNodeKinds.MESSAGE_HEADERS
    | typeof AsyncApiTreeNodeKinds.MESSAGE_OPERATION
    | typeof AsyncApiTreeNodeKinds.MESSAGE_PAYLOAD
  >)[]
  public static getAsyncApiTreeNodeValueProps(type: typeof AsyncApiTreeNodeKinds.BINDING): (keyof AsyncApiTreeNodeValue<typeof AsyncApiTreeNodeKinds.BINDING>)[]
  public static getAsyncApiTreeNodeValueProps(type: typeof AsyncApiTreeNodeKinds.EXTENSIONS): (keyof AsyncApiTreeNodeValue<typeof AsyncApiTreeNodeKinds.EXTENSIONS>)[]
  public static getAsyncApiTreeNodeValueProps(type: typeof AsyncApiTreeNodeKinds.MESSAGE_CHANNEL): (keyof AsyncApiTreeNodeValue<typeof AsyncApiTreeNodeKinds.MESSAGE_CHANNEL>)[]
  public static getAsyncApiTreeNodeValueProps(type: typeof AsyncApiTreeNodeKinds.MESSAGE_CHANNEL_PARAMETERS): (keyof AsyncApiTreeNodeValue<typeof AsyncApiTreeNodeKinds.MESSAGE_CHANNEL_PARAMETERS>)[]
  public static getAsyncApiTreeNodeValueProps(type: typeof AsyncApiTreeNodeKinds.MESSAGE): (keyof AsyncApiTreeNodeValue<typeof AsyncApiTreeNodeKinds.MESSAGE>)[]
  public static getAsyncApiTreeNodeValueProps(type: typeof AsyncApiTreeNodeKinds.MESSAGE_HEADERS): (keyof AsyncApiTreeNodeValue<typeof AsyncApiTreeNodeKinds.MESSAGE_HEADERS>)[]
  public static getAsyncApiTreeNodeValueProps(type: typeof AsyncApiTreeNodeKinds.MESSAGE_OPERATION): (keyof AsyncApiTreeNodeValue<typeof AsyncApiTreeNodeKinds.MESSAGE_OPERATION>)[]
  public static getAsyncApiTreeNodeValueProps(type: typeof AsyncApiTreeNodeKinds.MESSAGE_PAYLOAD): (keyof AsyncApiTreeNodeValue<typeof AsyncApiTreeNodeKinds.MESSAGE_PAYLOAD>)[]

  // General fallback signature
  public static getAsyncApiTreeNodeValueProps(type: AsyncApiTreeNodeKind): AnyAsyncApiNodeValueKey[] {
    switch (type) {
      case AsyncApiTreeNodeKinds.BINDING:
        return [
          'binding',
          'version',
          'protocol',
        ] satisfies (keyof AsyncApiTreeNodeValue<typeof AsyncApiTreeNodeKinds.BINDING>)[]
      case AsyncApiTreeNodeKinds.EXTENSIONS:
      case AsyncApiTreeNodeKinds.MESSAGE_CHANNEL_PARAMETERS:
        return [
          'rawValues',
        ] satisfies (keyof AsyncApiTreeNodeValue<typeof AsyncApiTreeNodeKinds.EXTENSIONS | typeof AsyncApiTreeNodeKinds.MESSAGE_CHANNEL_PARAMETERS>)[]
      case AsyncApiTreeNodeKinds.MESSAGE:
        return [
          ...AsyncApiTreeBuilder.ASYNC_API_TREE_NODE_VALUE_COMMON_PROPS,
          'internalTitle',
          'action',
          'address',
        ] satisfies (keyof AsyncApiTreeNodeValue<typeof AsyncApiTreeNodeKinds.MESSAGE>)[]
      case AsyncApiTreeNodeKinds.MESSAGE_CHANNEL:
        return [
          ...AsyncApiTreeBuilder.ASYNC_API_TREE_NODE_VALUE_COMMON_PROPS,
        ] satisfies (keyof AsyncApiTreeNodeValue<typeof AsyncApiTreeNodeKinds.MESSAGE_CHANNEL>)[]
      case AsyncApiTreeNodeKinds.MESSAGE_OPERATION:
        return [
          ...AsyncApiTreeBuilder.ASYNC_API_TREE_NODE_VALUE_COMMON_PROPS,
        ] satisfies (keyof AsyncApiTreeNodeValue<typeof AsyncApiTreeNodeKinds.MESSAGE_OPERATION>)[]
      case AsyncApiTreeNodeKinds.MESSAGE_HEADERS:
      case AsyncApiTreeNodeKinds.MESSAGE_PAYLOAD:
        return [
          'schema',
          'schemaFormat',
        ] satisfies (keyof AsyncApiTreeNodeValue<typeof AsyncApiTreeNodeKinds.MESSAGE_HEADERS | typeof AsyncApiTreeNodeKinds.MESSAGE_PAYLOAD>)[]
      default:
        return []
    }
  }

  constructor(
    private readonly source: unknown,
    private readonly referenceNamePropertyKey?: symbol
  ) {
    super()
    this.tree = new AsyncApiTree();
  }

  public build(): AsyncApiTree {
    if (!isObject(this.source)) {
      return this.tree;
    }

    const initialState: AsyncApiTreeCrawlState = {
      parent: null,
      container: null,
      alreadyConvertedValuesCache: new Map(),
    }

    const initialRules: AsyncApiCrawlRule = getAsyncApiCrawlRules(AsyncApiTreeNodeKinds.MESSAGE)

    syncCrawl<AsyncApiTreeCrawlState, AsyncApiCrawlRule>(
      this.source,
      [
        this.instantiateHookPreventingTreeBuildingProcessFromInfiniteLoop(),
        this.instantiateHookUnifyingValue(this.source),
        this.instantiateHookCreatingAsyncApiTreeNodes(),
      ],
      {
        state: initialState,
        rules: initialRules,
      },
    )

    return this.tree;
  }

  /* Crawlhooks-builders */

  private instantiateHookPreventingTreeBuildingProcessFromInfiniteLoop<
    V extends object | null,
    K extends string,
    M extends object,
  >(): SyncCrawlHook<
    CommonState<V, K, M>,
    SchemaCrawlRule<K, CommonState<V, K, M>>
  > {
    return ({ value, state, key, path }) => {
      if (typeof key === 'symbol') {
        return;
      }

      const {
        alreadyConvertedValuesCache,
        parent,
        container,
      } = state
      const alreadyExisted: ITreeNode<V, K, M> | undefined = alreadyConvertedValuesCache.get(value)

      if (
        !alreadyExisted || (
          !this.isAsyncApiSimpleTreeNode(alreadyExisted) &&
          !this.isAsyncApiComplexTreeNode(alreadyExisted)
        )
      ) {
        return { value }
      }

      if (!parent || !this.isAsyncApiSimpleTreeNode(parent)) {
        return { value }
      }

      const nodeId = '#' + buildPointer(path)
      const nodeKey = this.resolveNodeKey(key, value);
      const cycledClone = this.tree.createCycledClone(alreadyExisted, nodeId, nodeKey, parent)
      if (container) {
        container.addNestedNode(cycledClone)
      }
      if (parent) {
        parent.addChildNode(cycledClone)
      }
      return { done: true }
    }
  }

  private instantiateHookUnifyingValue<
    V extends object | null,
    K extends string,
    M extends object
  >(
    source: unknown
  ): SyncCrawlHook<
    CommonState<V, K, M>,
    SchemaCrawlRule<K, CommonState<V, K, M>>
  > {
    return ({ key, value, path, state, rules }) => {
      if (!rules || !Array.isArray(rules.transformers)) {
        return
      }

      const transformers: SchemaTransformFunc<CommonState<V, K, M>>[] = rules.transformers ?? []
      const transformedValue = transformers.reduce(
        (accumulatedTransformedValue, transform) => transform(key, accumulatedTransformedValue, source, path, state),
        value
      )

      return { value: transformedValue }
    }
  }

  private instantiateHookCreatingAsyncApiTreeNodes(): SyncCrawlHook<AsyncApiTreeCrawlState, AsyncApiCrawlRule> {
    return ({ key, value, path, rules, state }) => {
      if (!rules) {
        return { done: true };
      }
      if (typeof key === 'symbol') {
        return { done: true };
      }
      if (value === undefined || value === null || !isObject(value) && !isArray(value)) {
        return { done: true };
      }
      if (!rules.kind || !AsyncApiTreeNodeKindsList.includes(rules.kind)) {
        // equivalent to "continue" operator within loop operators
        // means "keep going deeper in the original object"
        return;
      }

      const { parent, container } = state;
      const nodeId = '#' + buildPointer(path);
      const nodeKey = this.resolveNodeKey(key, value);
      const { kind, complex = false } = rules;

      const params = container
        ? { value: Array.isArray(value) ? null : value, newDataLevel: true, container: container, parent: container.parent }
        : { value: Array.isArray(value) ? null : value, newDataLevel: true, container: null, parent: parent }

      const treeNode = this.createNodeFromRaw(nodeId, nodeKey, kind, complex, params)

      if (!treeNode) {
        return;
      }

      if (container) {
        container.addNestedNode(treeNode);
      } else if (parent) {
        parent.addChildNode(treeNode);
      }

      if (isObject(value) && value.isPrimitive) {
        // Prevent from falling into infinite loop due to transformed primitives into objects
        return { done: true };
      }

      const newCache = new Map(state.alreadyConvertedValuesCache);
      newCache.set(value, treeNode);

      let newState: AsyncApiTreeCrawlState | undefined;
      if (this.isAsyncApiSimpleTreeNode(treeNode)) {
        newState = {
          parent: treeNode,
          container: null,
          alreadyConvertedValuesCache: newCache,
        }
      }
      if (this.isAsyncApiComplexTreeNode(treeNode)) {
        newState = {
          parent: parent,
          container: treeNode,
          alreadyConvertedValuesCache: newCache,
        }
      }

      return { value: value, state: newState };
    };
  }

  /**
   * Picks up the node key found in the reference if mapping is provided.
   * Otherwise, returns the original key.
   * @param key - crawl hook key.
   * @param value - crawl hook value.
   * @returns resolved node key.
   */
  private resolveNodeKey(key: NodeKey, value: unknown): NodeKey {
    if (this.referenceNamePropertyKey) {
      if (isObject(value) && value[this.referenceNamePropertyKey]) {
        const nodeKeyCandidate = value[this.referenceNamePropertyKey]
        if (typeof nodeKeyCandidate === 'string' || typeof nodeKeyCandidate === 'number') {
          return nodeKeyCandidate
        }
      }
    }
    return key
  }

  /* Atomic builders */

  protected createNodeFromRaw(
    id: NodeId,
    key: NodeKey,
    kind: AsyncApiTreeNodeKind,
    complex: boolean,
    params: TreeNodeParams<object | null, string, object>
  ): AsyncApiSimpleTreeNode | AsyncApiComplexTreeNode | undefined {
    const { parent, container, newDataLevel } = params

    if (complex) {
      const nodeMeta = this.createNodeMeta(key, params)
      const extendedParams: ComplexAsyncApiTreeNodeParams = {
        type: TreeNodeComplexityTypes.COMPLEX,
        parent: parent && this.isAsyncApiSimpleTreeNode(parent) ? parent : null, // just type guard
        container: container && this.isAsyncApiComplexTreeNode(container) ? container : null,
        value: null,
        meta: nodeMeta,
        newDataLevel: newDataLevel,
      }
      return this.tree.createComplexNode(id, key, kind, false, extendedParams)
    }

    const nodeValue = this.createNodeValue(key, kind, {
      ...params,
      parent: parent,
      container: container,
    })
    const nodeMeta = this.createNodeMeta(key, params)
    const extendedParams: SimpleAsyncApiTreeNodeParams = {
      type: TreeNodeComplexityTypes.SIMPLE,
      parent: parent && this.isAsyncApiSimpleTreeNode(parent) ? parent : null, // just type guard
      container: container && this.isAsyncApiComplexTreeNode(container) ? container : null,
      value: nodeValue,
      meta: nodeMeta,
      newDataLevel: newDataLevel,
    }
    return this.tree.createSimpleNode(id, key, kind, false, extendedParams)
  }

  protected createNodeMeta(
    key: NodeKey,
    params: TreeNodeParams<object | null, string, object>,
  ): AsyncApiNodeMeta {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { value, parent = null } = params

    return {
      ...this.isValueWithBrokenRef(value) ? { brokenRef: `${value.$ref}` } : {},
      _fragment: value,
    }
  }

  protected createNodeValue(
    key: NodeKey,
    kind: AsyncApiTreeNodeKind,
    params: TreeNodeParams<object | null, string, object>,
  ): AsyncApiTreeNodeValue<AsyncApiTreeNodeKind> | null {
    const { value } = params

    if (value === undefined || value === null) {
      return null
    }
    if (!isObjectWithStringKeys(value)) {
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
      default:
        return null
    }
  }

  /* Type guards */

  private isAsyncApiSimpleTreeNode(node: ITreeNode<object | null, string, object>): node is AsyncApiSimpleTreeNode {
    return node.type === TreeNodeComplexityTypes.SIMPLE
  }

  private isAsyncApiComplexTreeNode(node: ITreeNode<object | null, string, object>): node is AsyncApiComplexTreeNode {
    return !this.isAsyncApiSimpleTreeNode(node)
  }

  private isValueWithBrokenRef(value: unknown): value is Record<typeof JSON_SCHEMA_PROPERTY_REF, unknown> {
    return isObject(value) && JSON_SCHEMA_PROPERTY_REF in value
  }

  /* Specific utilities */

  // Complexity type detection

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  private getNodeComplexityType(value: unknown): TreeNodeComplexityType {
    return TreeNodeComplexityTypes.SIMPLE
  }
}

