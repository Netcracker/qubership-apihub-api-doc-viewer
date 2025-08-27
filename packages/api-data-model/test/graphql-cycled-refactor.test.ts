import { calculateObjectHash } from "../src/graph-api/common/hooks/cycle-guard"
import { buildGraphApi, createGraphApiTreeForTests } from "./helpers/graphql"

import gqlLarge1 from './resources/graphql/large/gql_large_x1.graphql?raw'

describe('GraphQL cycled issue', () => {
  const jestConsole = console
  beforeEach(() => {
    global.console = require('console')
  })
  afterEach(() => {
    global.console = jestConsole
  })

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

  it('large file 1', () => {
    const graphApi = buildGraphApi(gqlLarge1)
    const tree = createGraphApiTreeForTests(graphApi)
    console.log('<!> Tree building is completed')
    expect(tree).toBeTruthy()
  })
})
