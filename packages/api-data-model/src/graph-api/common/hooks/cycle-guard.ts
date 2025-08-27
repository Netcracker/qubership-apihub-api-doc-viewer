import { ModelTree } from '../../../abstract/model/model-tree.impl'
import { IModelTreeNode } from '../../../abstract/model/types'
import { SchemaCrawlRule } from '../../../abstract/types'
import { areExcludedComponents } from '../../utils'
import { buildPointer } from '@netcracker/qubership-apihub-api-unifier'
import { SyncCrawlHook } from '@netcracker/qubership-apihub-json-crawl'
import { isObject } from '../../../utils'

interface CommonState<T, K extends string, M> {
  parent: IModelTreeNode<T, K, M> | null
  container?: IModelTreeNode<T, K, M>
  alreadyConvertedMappingStack: Map<unknown, IModelTreeNode<T, K, M>>
}

export function createCycleGuardHook<T, K extends string, M, S extends CommonState<T, K, M>>(
  tree: ModelTree<T, K, M>
): SyncCrawlHook<S, SchemaCrawlRule<any, any>> {
  return ({ value, state, key, path, rules }) => {
    if (typeof key === 'symbol') {
      return areExcludedComponents(path) ? { done: true } : { value }
    }

    const { alreadyConvertedMappingStack, parent, container } = state
    const alreadyExisted = isObject(value) && 'typeDef' in value
      ? alreadyConvertedMappingStack.get(value.typeDef)
      : alreadyConvertedMappingStack.get(value)

    if (alreadyExisted) {
      // console.log('alreadyExisted', path.at(-1), isObject(value) ? JSON.stringify(Reflect.ownKeys(value)) : value, rules?.kind)
      const id = '#' + buildPointer(path)
      if (container) {
        container.addNestedNode(tree.createCycledClone(alreadyExisted, id, key, parent))
      } else {
        parent?.addChild(tree.createCycledClone(alreadyExisted, id, key, parent))
      }
      return { done: true }
    }

    return { value: value }
  }
}
