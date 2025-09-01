import { visitedTypes } from '../../common/hooks/cycle-guard';
import { buildPointer } from '@netcracker/qubership-apihub-api-unifier';
import { GraphApiSchema } from '@netcracker/qubership-apihub-graphapi';
import { SyncCrawlHook } from '@netcracker/qubership-apihub-json-crawl';
import { GraphApiCrawlRule, GraphApiCrawlState, GraphApiNodeData, graphApiNodeKind, GraphApiNodeKind, graphApiNodeKinds, GraphApiNodeMeta, GraphApiTreeComplexNode, GraphApiTreeNode } from '../..';
import { modelTreeNodeType } from "../../../abstract/constants";
import { ModelTreeNodeParams } from '../../../abstract/model/types';
import { isBrokenRef } from '../../../json-schema';
import { isObject } from '../../../utils';
import { areExcludedComponents } from '../../utils';
import { GraphApiModelTree } from '../model';

export function createGraphApiTreeCrawlHook(
  tree: GraphApiModelTree
): SyncCrawlHook<GraphApiCrawlState, GraphApiCrawlRule> {
  return ({ value, state, rules, path, key }) => {
    if (typeof key === 'symbol') {
      return { done: true };
    }
    if (value === undefined || value === null) {
      return { done: true };
    }
    if (!rules) {
      return areExcludedComponents(path) ? { done: true } : { value, state }
    }
    if (!rules?.kind || !graphApiNodeKinds.includes(rules.kind)) {
      return areExcludedComponents(path) ? { done: true } : { value, state }
    }

    const id = '#' + buildPointer(path);
    const { parent, container } = state;
    const { kind } = rules;

    let result: any = {
      value,
      node: {},
    };

    switch (kind) {
      case graphApiNodeKind.query:
      case graphApiNodeKind.mutation:
      case graphApiNodeKind.subscription: {
        result = tree.createGraphSchemaNode({ id, kind, key, value, parent, container, newDataLevel: false, isCycle: false });
        break;
      }
      case graphApiNodeKind.schema: {
        const { description } = value as GraphApiSchema;
        const params: ModelTreeNodeParams<GraphApiNodeData, GraphApiNodeKind, GraphApiNodeMeta> = {
          value: { description },
          parent,
          container,
          meta: {
            ...(isBrokenRef(value) ? { brokenRef: value.$ref } : {}),
            _fragment: value,
          },
          newDataLevel: false,
        };
        result.node = tree.createNode(id, kind, key, false, params);
        break;
      }
    }

    parent?.addChild(result.node);

    let stack = state.alreadyConvertedMappingStack;
    if (isObject(value) && 'typeDef' in value) {
      visitedTypes.set(value.typeDef, result.node as GraphApiTreeNode | GraphApiTreeComplexNode);
    } else {
      stack = new Map(state.alreadyConvertedMappingStack);
      stack.set(value, result.node as GraphApiTreeNode | GraphApiTreeComplexNode);
    }
    const newState: GraphApiCrawlState = result.node!.type === modelTreeNodeType.simple
      ? { parent: result.node as GraphApiTreeNode, alreadyConvertedMappingStack: stack }
      : { parent, container: result.node as GraphApiTreeComplexNode, alreadyConvertedMappingStack: stack };

    return { value: result.value, state: newState };
  };
}
