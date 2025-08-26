import objectHash, { NotUndefined } from 'object-hash'

export function calculateObjectHash(value: NotUndefined): string {
  // object hash works only with object keys available in Object.keys() method
  return objectHash(value, { algorithm: 'md5' })
}

describe('GraphQL cycled issue', () => {
  it('must not freeze', () => {
    const cycledEntity = {
      title: 'Human',
      type: 'object',
      properties: {
        name: {
          type: 'string',
        },
        age: {
          type: 'number',
        },
        friends: {
          type: 'array',
          items: null as any,
        }
      }
    }
    cycledEntity.properties.friends.items = cycledEntity

    const sameCycledEntity = {
      title: 'Human',
      type: 'object',
      properties: {
        name: {
          type: 'string',
        },
        age: {
          type: 'number',
        },
        friends: {
          type: 'array',
          items: null as any,
        }
      }
    }
    sameCycledEntity.properties.friends.items = sameCycledEntity

    const hash1 = calculateObjectHash(cycledEntity)
    const hash2 = calculateObjectHash(sameCycledEntity)
    expect(hash1).toBe(hash2)
  })
})
