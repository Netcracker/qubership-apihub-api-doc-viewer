import { ModelTree } from '@apihub/abstract-model/model/model-tree.impl'
import { IModelTreeNode } from '@apihub/abstract-model/model/types'
import { SchemaCrawlRule } from '@apihub/abstract-model/types'
import { areExcludedComponents } from '@apihub/graph-api-model/utils'
import { buildPointer } from '@netcracker/qubership-apihub-api-unifier'
import { SyncCrawlHook } from '@netcracker/qubership-apihub-json-crawl'
import objectHash, { NotUndefined } from 'object-hash'

interface CommonState<T, K extends string, M> {
  parent: IModelTreeNode<T, K, M> | null
  container?: IModelTreeNode<T, K, M>
  alreadyConvertedMappingStack: Map<HashMd5, IModelTreeNode<T, K, M>>
}

export function createCycleGuardHook<T, K extends string, M, S extends CommonState<T, K, M>>(
  tree: ModelTree<T, K, M>
): SyncCrawlHook<S, SchemaCrawlRule<any, any>> {
  return ({ value, state, key, path }) => {
    if (typeof key === 'symbol') {
      return areExcludedComponents(path) ? { done: true } : { value }
    }

    const { alreadyConvertedMappingStack, parent, container } = state
    const valueHash = calculateObjectHash(value)
    const alreadyExisted = !!valueHash && alreadyConvertedMappingStack.get(valueHash)
    if (alreadyExisted) {
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

export type HashMd5 = string

export function calculateObjectHash(value: unknown): HashMd5 | null {
  if (isNotUndefined(value)) {
    // object hash works only with object keys available in Object.keys() method
    return objectHash(value, { algorithm: 'sha256' })
  }
  return null
}

function isNotUndefined(value: unknown): value is NotUndefined {
  return value !== undefined
}
