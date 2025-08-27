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

  it('large file 1', () => {
    const graphApi = buildGraphApi(gqlLarge1)
    const tree = createGraphApiTreeForTests(graphApi)
    console.log('<!> Tree building is completed')
    expect(tree).toBeTruthy()
  })
})
