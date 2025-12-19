import { AsyncApiComplexTreeNode } from "@apihub/next-data-model/model/async-api/tree/complex-node.impl";
import { AsyncApiSimpleTreeNode } from "@apihub/next-data-model/model/async-api/tree/simple-node.impl";
import { AsyncApiTree } from "@apihub/next-data-model/model/async-api/tree/tree.impl";
import { AsyncApiTreeNodeKind, AsyncApiTreeNodeKinds, AsyncApiTreeNodeKindsList } from "@apihub/next-data-model/model/async-api/types/node-kind";
import { AsyncApiNodeMeta } from "@apihub/next-data-model/model/async-api/types/node-meta";
import { AsyncApiTreeNodeValue, AsyncApiTreeNodeValueBase } from "@apihub/next-data-model/model/async-api/types/node-value";
import { AsyncApiNodeJsoPropertyValueType, AsyncApiNodeJsoPropertyValueTypesList } from "@apihub/next-data-model/model/async-api/types/node-value-type";
import { buildPointer, JSON_SCHEMA_PROPERTY_REF } from "@netcracker/qubership-apihub-api-unifier";
import { isArray, syncCrawl, SyncCrawlHook } from "@netcracker/qubership-apihub-json-crawl";
import { ComplexTreeNodeParams, ITreeNode, SimpleTreeNodeParams, TreeNodeParams, TreeNodeComplexityType, TreeNodeComplexityTypes } from "../../../model/abstract/tree/tree-node.interface";
import { isObject, isString } from "../../../utilities";
import { NodeId, NodeKey, UnknownObject } from "../../../utility-types";
import { TreeBuilder } from "../../abstract/tree/builder";
import { getAsyncApiCrawlRules } from "../json-crawl-entities/rules/rules";
import { AsyncApiCrawlRule, SchemaCrawlRule } from "../json-crawl-entities/rules/types";
import { AsyncApiTreeCrawlState, CommonState } from "../json-crawl-entities/state/types";
import { SchemaTransformFunc } from "../json-crawl-entities/transformers/types/types";

// Union of all possible keys from all AsyncApiTreeNodeValue variants
type AnyAsyncApiNodeValueKey =
  | keyof AsyncApiTreeNodeValue<typeof AsyncApiTreeNodeKinds.ROOT>
  | keyof AsyncApiTreeNodeValue<typeof AsyncApiTreeNodeKinds.OPERATION>
  | keyof AsyncApiTreeNodeValue<typeof AsyncApiTreeNodeKinds.BINDINGS>
  | keyof AsyncApiTreeNodeValue<typeof AsyncApiTreeNodeKinds.BINDING>
  | keyof AsyncApiTreeNodeValue<typeof AsyncApiTreeNodeKinds.JSO_PROPERTY>
  | keyof AsyncApiTreeNodeValue<typeof AsyncApiTreeNodeKinds.CHANNEL>
  | keyof AsyncApiTreeNodeValue<typeof AsyncApiTreeNodeKinds.MESSAGE>;

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
      | typeof AsyncApiTreeNodeKinds.ROOT
      | typeof AsyncApiTreeNodeKinds.OPERATION
      | typeof AsyncApiTreeNodeKinds.BINDINGS
      | typeof AsyncApiTreeNodeKinds.BINDING
      | typeof AsyncApiTreeNodeKinds.JSO_PROPERTY
      | typeof AsyncApiTreeNodeKinds.CHANNEL
      | typeof AsyncApiTreeNodeKinds.MESSAGE
  ): (keyof AsyncApiTreeNodeValue<
    | typeof AsyncApiTreeNodeKinds.ROOT
    | typeof AsyncApiTreeNodeKinds.OPERATION
    | typeof AsyncApiTreeNodeKinds.BINDINGS
    | typeof AsyncApiTreeNodeKinds.BINDING
    | typeof AsyncApiTreeNodeKinds.JSO_PROPERTY
    | typeof AsyncApiTreeNodeKinds.CHANNEL
    | typeof AsyncApiTreeNodeKinds.MESSAGE
  >)[]
  public static getAsyncApiTreeNodeValueProps(type: typeof AsyncApiTreeNodeKinds.ROOT): (keyof AsyncApiTreeNodeValue<typeof AsyncApiTreeNodeKinds.ROOT>)[]
  public static getAsyncApiTreeNodeValueProps(type:
    | typeof AsyncApiTreeNodeKinds.OPERATION
  ): (keyof AsyncApiTreeNodeValue<
    | typeof AsyncApiTreeNodeKinds.OPERATION
  >)[]
  public static getAsyncApiTreeNodeValueProps(type: typeof AsyncApiTreeNodeKinds.JSO_PROPERTY): (keyof AsyncApiTreeNodeValue<typeof AsyncApiTreeNodeKinds.JSO_PROPERTY>)[]
  public static getAsyncApiTreeNodeValueProps(type: typeof AsyncApiTreeNodeKinds.CHANNEL): (keyof AsyncApiTreeNodeValue<typeof AsyncApiTreeNodeKinds.CHANNEL>)[]
  public static getAsyncApiTreeNodeValueProps(type: typeof AsyncApiTreeNodeKinds.MESSAGE): (keyof AsyncApiTreeNodeValue<typeof AsyncApiTreeNodeKinds.MESSAGE>)[]
  // General fallback signature
  public static getAsyncApiTreeNodeValueProps(type: AsyncApiTreeNodeKind): AnyAsyncApiNodeValueKey[] {
    switch (type) {
      case AsyncApiTreeNodeKinds.ROOT:
        return AsyncApiTreeBuilder.ASYNC_API_TREE_NODE_VALUE_COMMON_PROPS satisfies (keyof AsyncApiTreeNodeValue<typeof AsyncApiTreeNodeKinds.ROOT>)[]
      case AsyncApiTreeNodeKinds.OPERATION:
        return [
          ...AsyncApiTreeBuilder.ASYNC_API_TREE_NODE_VALUE_COMMON_PROPS,
          'action',
          'address', // TODO: From channel!
        ] satisfies (keyof AsyncApiTreeNodeValue<typeof AsyncApiTreeNodeKinds.OPERATION>)[]
      case AsyncApiTreeNodeKinds.BINDING:
        return [
          ...AsyncApiTreeBuilder.ASYNC_API_TREE_NODE_VALUE_COMMON_PROPS,
          'protocol',
        ] satisfies (keyof AsyncApiTreeNodeValue<typeof AsyncApiTreeNodeKinds.BINDING>)[]
      case AsyncApiTreeNodeKinds.JSO_PROPERTY:
        return [
          ...AsyncApiTreeBuilder.ASYNC_API_TREE_NODE_VALUE_COMMON_PROPS,
          'value', // TODO: No such field in raw spec!
          'valueType', // TODO: No such field in raw spec!
        ] satisfies (keyof AsyncApiTreeNodeValue<typeof AsyncApiTreeNodeKinds.JSO_PROPERTY>)[]
      case AsyncApiTreeNodeKinds.CHANNEL:
        return AsyncApiTreeBuilder.ASYNC_API_TREE_NODE_VALUE_COMMON_PROPS satisfies (keyof AsyncApiTreeNodeValue<typeof AsyncApiTreeNodeKinds.CHANNEL>)[]
      case AsyncApiTreeNodeKinds.MESSAGE:
        return [
          ...AsyncApiTreeBuilder.ASYNC_API_TREE_NODE_VALUE_COMMON_PROPS,
          'internalTitle',
        ] satisfies (keyof AsyncApiTreeNodeValue<typeof AsyncApiTreeNodeKinds.MESSAGE>)[]
      default:
        return []
    }
  }

  constructor(
    private readonly source: unknown,
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

    const initialRules: AsyncApiCrawlRule = getAsyncApiCrawlRules()

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
    V extends UnknownObject | null,
    K extends string,
    M extends UnknownObject,
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

      const id = '#' + buildPointer(path)
      const cycledClone = this.tree.createCycledClone(alreadyExisted, id, key, parent)
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
    V extends UnknownObject | null,
    K extends string,
    M extends UnknownObject
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
      const id = '#' + buildPointer(path);
      const { kind, complex = false } = rules;

      const params = container
        ? { value: Array.isArray(value) ? null : value, newDataLevel: true, container: container, parent: container.parent }
        : { value: Array.isArray(value) ? null : value, newDataLevel: true, container: null, parent: parent }

      const treeNode = this.createNodeFromRaw(id, key, kind, complex, params)

      if (!treeNode) {
        return;
      }

      if (container) {
        container.addNestedNode(treeNode);
      } else if (parent) {
        parent.addChildNode(treeNode);
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

  /* Atomic builders */

  protected createNodeFromRaw(
    id: NodeId,
    key: NodeKey,
    kind: AsyncApiTreeNodeKind,
    complex: boolean,
    params: TreeNodeParams<UnknownObject | null, string, UnknownObject>
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
    params: TreeNodeParams<UnknownObject | null, string, UnknownObject>,
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
    params: TreeNodeParams<UnknownObject | null, string, UnknownObject>,
  ): AsyncApiTreeNodeValue<AsyncApiTreeNodeKind> | null {
    const { value } = params

    if (value === undefined || value === null) {
      return null
    }
    if (!isObject(value)) {
      return null
    }

    switch(kind) {
      case AsyncApiTreeNodeKinds.OPERATION:
        return this.pick<AsyncApiTreeNodeValue<typeof AsyncApiTreeNodeKinds.OPERATION>>(
          value, 
          AsyncApiTreeBuilder.getAsyncApiTreeNodeValueProps(kind),
        )
      case AsyncApiTreeNodeKinds.BINDING:
        return this.pick<AsyncApiTreeNodeValue<typeof AsyncApiTreeNodeKinds.BINDING>>(
          value, 
          AsyncApiTreeBuilder.getAsyncApiTreeNodeValueProps(kind),
        )
      case AsyncApiTreeNodeKinds.JSO_PROPERTY:
        return this.pick<AsyncApiTreeNodeValue<typeof AsyncApiTreeNodeKinds.JSO_PROPERTY>>(
          value, 
          AsyncApiTreeBuilder.getAsyncApiTreeNodeValueProps(kind),
        )
      case AsyncApiTreeNodeKinds.CHANNEL:
        return this.pick<AsyncApiTreeNodeValue<typeof AsyncApiTreeNodeKinds.CHANNEL>>(
          value, 
          AsyncApiTreeBuilder.getAsyncApiTreeNodeValueProps(kind),
        )
      case AsyncApiTreeNodeKinds.MESSAGE:
        return this.pick<AsyncApiTreeNodeValue<typeof AsyncApiTreeNodeKinds.MESSAGE>>(
          value, 
          AsyncApiTreeBuilder.getAsyncApiTreeNodeValueProps(kind),
        )
      default:
        return null
    }
  }

  /* Type guards */

  private isAsyncApiNodeType(maybeType: unknown): maybeType is AsyncApiNodeJsoPropertyValueType {
    if (!maybeType || !isString(maybeType)) {
      return false
    }
    return AsyncApiNodeJsoPropertyValueTypesList.some(allowedType => allowedType === maybeType)
  }

  private isAsyncApiSimpleTreeNode(node: ITreeNode<UnknownObject | null, string, UnknownObject>): node is AsyncApiSimpleTreeNode {
    return node.type === TreeNodeComplexityTypes.SIMPLE
  }

  private isAsyncApiComplexTreeNode(node: ITreeNode<UnknownObject | null, string, UnknownObject>): node is AsyncApiComplexTreeNode {
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

