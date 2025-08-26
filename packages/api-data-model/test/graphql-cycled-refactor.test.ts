import { calculateObjectHash } from "../src/graph-api/common/hooks/cycle-guard"

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
