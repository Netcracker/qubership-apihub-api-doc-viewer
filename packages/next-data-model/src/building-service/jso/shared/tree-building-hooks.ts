import { JsoTreeNodeKind, JsoTreeNodeKindsList } from "@apihub/next-data-model/model/jso/types/node-kind";
import { JsoTreeNodeMeta } from "@apihub/next-data-model/model/jso/types/node-meta";
import { JsoTreeNodeValue } from "@apihub/next-data-model/model/jso/types/node-value";
import { buildPointer } from "@netcracker/qubership-apihub-api-unifier";
import { isArray, SyncCrawlHook } from "@netcracker/qubership-apihub-json-crawl";
import { ITreeNode } from "../../../model/abstract/tree/tree-node.interface";
import { isObject } from "../../../utilities";
import { NodeId, NodeKey } from "../../../utility-types";
import { CommonState } from "../../async-api/json-crawl-entities/state/types";
import { SchemaCrawlRule } from "../json-crawl-entities/rules/types";

type JsoNodeValue = JsoTreeNodeValue | null;
type JsoBaseNode = ITreeNode<JsoNodeValue, JsoTreeNodeKind, JsoTreeNodeMeta>;

type NodeCache<N extends JsoBaseNode> = Map<unknown, N>;

type CycleCloneFactory<N extends JsoBaseNode> = {
  createCycledClone: (
    sourceNode: N,
    cloneId: NodeId,
    cloneKey: NodeKey,
    cloneParent: N | null,
  ) => N
}

export interface JsoTreeBuildingHooksFactoryParams<
  N extends JsoBaseNode,
  S extends CommonState<JsoNodeValue, JsoTreeNodeKind, JsoTreeNodeMeta, N>,
  P extends {
    value: object | null
    newDataLevel: boolean
    parent: N | null
    container: N | null
  },
> {
  source: unknown
  tree: CycleCloneFactory<N>
  createNodeFromRaw: (
    id: NodeId,
    key: NodeKey,
    kind: JsoTreeNodeKind,
    complex: boolean,
    params: P
  ) => N | undefined
  createNodeParams: (
    value: unknown,
    parent: N | null,
    container: N | null,
  ) => P
  createStateForSimpleNode: (
    state: S,
    node: N,
    cache: NodeCache<N>,
  ) => S
  createStateForComplexNode: (
    state: S,
    node: N,
    cache: NodeCache<N>,
  ) => S
  isSimpleNode: (node: N) => boolean
  isComplexNode: (node: N) => boolean
  resolveNodeKey: (key: NodeKey, value: unknown) => NodeKey
  shouldStopAfterNodeCreation?: (value: unknown) => boolean
}

export function createJsoTreeBuildingHooks<
  N extends JsoBaseNode,
  S extends CommonState<JsoNodeValue, JsoTreeNodeKind, JsoTreeNodeMeta, N>,
  R extends SchemaCrawlRule<JsoTreeNodeKind, S>,
  P extends {
    value: object | null
    newDataLevel: boolean
    parent: N | null
    container: N | null
  },
>(
  params: JsoTreeBuildingHooksFactoryParams<N, S, P>
): [
    SyncCrawlHook<S, R>,
    SyncCrawlHook<S, R>,
    SyncCrawlHook<S, R>,
  ] {
  const {
    source,
    tree,
    createNodeFromRaw,
    createNodeParams,
    createStateForSimpleNode,
    createStateForComplexNode,
    isSimpleNode,
    isComplexNode,
    resolveNodeKey,
    shouldStopAfterNodeCreation,
  } = params;

  const preventInfiniteLoopHook: SyncCrawlHook<S, R> = ({ value, state, key, path }) => {
    if (typeof key === "symbol") {
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

    const nodeId = "#" + buildPointer(path);
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

    const transformers = rules.transformers;
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
    if (typeof key === "symbol") {
      return { done: true };
    }
    if (value === undefined || value === null || !isObject(value) && !isArray(value)) {
      return { done: true };
    }
    if (!rules.kind || !JsoTreeNodeKindsList.includes(rules.kind)) {
      return;
    }

    const { parent, container } = state;
    const nodeId = "#" + buildPointer(path);
    const nodeKey = resolveNodeKey(key, value);
    const { kind, complex = false } = rules;

    const nodeParams = createNodeParams(value, parent, container);
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

    const newCache = new Map(state.alreadyConvertedValuesCache) as S["alreadyConvertedValuesCache"];
    newCache.set(value, treeNode);

    let newState: S;
    if (isSimpleNode(treeNode)) {
      newState = createStateForSimpleNode(state, treeNode, newCache);
    } else {
      newState = createStateForComplexNode(state, treeNode, newCache);
    }

    return { value, state: newState };
  };

  return [
    preventInfiniteLoopHook,
    unifyValueHook,
    createNodesHook,
  ];
}
