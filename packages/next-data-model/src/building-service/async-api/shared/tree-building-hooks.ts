import { AsyncApiTreeNodeKind, AsyncApiTreeNodeKindsList } from "@apihub/next-data-model/model/async-api/types/node-kind";
import { AsyncApiNodeMeta } from "@apihub/next-data-model/model/async-api/types/node-meta";
import { AsyncApiTreeNodeValue } from "@apihub/next-data-model/model/async-api/types/node-value";
import { buildPointer } from "@netcracker/qubership-apihub-api-unifier";
import { isArray, SyncCrawlHook } from "@netcracker/qubership-apihub-json-crawl";
import { ITreeNode, TreeNodeParams } from "../../../model/abstract/tree/tree-node.interface";
import { isObject } from "../../../utilities";
import { NodeId, NodeKey } from "../../../utility-types";
import { SchemaCrawlRule } from "../json-crawl-entities/rules/types";
import { CommonState } from "../json-crawl-entities/state/types";
import { SchemaTransformFunc } from "../json-crawl-entities/transformers/types/types";

type AsyncApiNodeValue = AsyncApiTreeNodeValue<AsyncApiTreeNodeKind> | null;
type AsyncApiBaseNode = ITreeNode<AsyncApiNodeValue, AsyncApiTreeNodeKind, AsyncApiNodeMeta>;

type CycleCloneFactory<N extends AsyncApiBaseNode> = {
  createCycledClone: (
    sourceNode: N,
    cloneId: NodeId,
    cloneKey: NodeKey,
    cloneParent: N | null,
  ) => N
}

export interface AsyncApiTreeBuildingHooksFactoryParams<
  N extends AsyncApiBaseNode,
> {
  source: unknown
  tree: CycleCloneFactory<N>
  createNodeFromRaw: (
    id: NodeId,
    key: NodeKey,
    kind: AsyncApiTreeNodeKind,
    complex: boolean,
    params: TreeNodeParams<AsyncApiNodeValue, AsyncApiTreeNodeKind, AsyncApiNodeMeta>
  ) => N | undefined
  isSimpleNode: (node: N) => boolean
  isComplexNode: (node: N) => boolean
  resolveNodeKey: (key: NodeKey, value: unknown) => NodeKey
  shouldStopAfterNodeCreation?: (value: unknown) => boolean
}

export function createAsyncApiTreeBuildingHooks<
  N extends AsyncApiBaseNode,
  S extends CommonState<AsyncApiNodeValue, AsyncApiTreeNodeKind, AsyncApiNodeMeta, N>,
  R extends SchemaCrawlRule<AsyncApiTreeNodeKind, any>,
>(
  params: AsyncApiTreeBuildingHooksFactoryParams<N>
): [
  SyncCrawlHook<S, R>,
  SyncCrawlHook<S, R>,
  SyncCrawlHook<S, R>,
] {
  const {
    source,
    tree,
    createNodeFromRaw,
    isSimpleNode,
    isComplexNode,
    resolveNodeKey,
    shouldStopAfterNodeCreation,
  } = params;

  const preventInfiniteLoopHook: SyncCrawlHook<S, R> = ({ value, state, key, path }) => {
    if (typeof key === 'symbol') {
      return;
    }

    const { alreadyConvertedValuesCache, parent, container } = state;
    const alreadyExisted = alreadyConvertedValuesCache.get(value);

    if (
      !alreadyExisted || (
        !isSimpleNode(alreadyExisted) &&
        !isComplexNode(alreadyExisted)
      )
    ) {
      return { value };
    }

    if (!parent || !isSimpleNode(parent)) {
      return { value };
    }

    const nodeId = '#' + buildPointer(path);
    const nodeKey = resolveNodeKey(key, value);
    const cycledClone = tree.createCycledClone(alreadyExisted, nodeId, nodeKey, parent);
    if (container) {
      container.addNestedNode(cycledClone);
    }
    if (parent) {
      parent.addChildNode(cycledClone);
    }
    return { done: true };
  };

  const unifyValueHook: SyncCrawlHook<S, R> = ({ key, value, path, state, rules }) => {
    if (!rules || !Array.isArray(rules.transformers)) {
      return;
    }

    const transformers = rules.transformers as SchemaTransformFunc<S>[];
    const transformedValue = transformers.reduce(
      (accumulatedTransformedValue, transform) => transform(key, accumulatedTransformedValue, source, path, state),
      value
    );

    return { value: transformedValue };
  };

  const createNodesHook: SyncCrawlHook<S, R> = ({ key, value, path, rules, state }) => {
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
      return;
    }

    const { parent, container } = state;
    const nodeId = '#' + buildPointer(path);
    const nodeKey = resolveNodeKey(key, value);
    const { kind, complex = false } = rules;

    const nodeParams = container
      ? { value: Array.isArray(value) ? null : value, newDataLevel: true, container, parent: container.parent as N | null }
      : { value: Array.isArray(value) ? null : value, newDataLevel: true, container: null, parent };

    const treeNode = createNodeFromRaw(nodeId, nodeKey, kind, complex, nodeParams);
    if (!treeNode) {
      return;
    }

    if (container) {
      container.addNestedNode(treeNode);
    } else if (parent) {
      parent.addChildNode(treeNode);
    }

    if (shouldStopAfterNodeCreation?.(value)) {
      return { done: true };
    }

    const newCache = new Map(state.alreadyConvertedValuesCache);
    newCache.set(value, treeNode);

    let newState: S | undefined;
    if (isSimpleNode(treeNode)) {
      newState = {
        parent: treeNode,
        container: null,
        alreadyConvertedValuesCache: newCache,
      } as S;
    }
    if (isComplexNode(treeNode)) {
      newState = {
        parent,
        container: treeNode,
        alreadyConvertedValuesCache: newCache,
      } as S;
    }

    return { value, state: newState };
  };

  return [
    preventInfiniteLoopHook,
    unifyValueHook,
    createNodesHook,
  ];
}
