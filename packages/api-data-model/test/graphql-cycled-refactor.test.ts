import { buildGraphApi, createGraphApiTreeForTests, graphapi } from "./helpers/graphql"

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

    const start = new Date().toISOString()
    const tree = createGraphApiTreeForTests(graphApi)
    const end = new Date().toISOString()
    console.log(start)
    console.log(end, '\n')

    expect(tree).toBeTruthy()
  })

  it('simplest cycle', () => {
    const graphApi = graphapi`
      type Query {
        test: Cycled1
      }
      type Cycled1 {
        c1: Cycled2
        f1(arg11: String, arg12: Int = 42): Cycled3!
      }

      type Cycled2 {
        c2: Cycled3
        f2(arg21: String, arg22: Int = 42): Cycled4!
      }

      type Cycled3 {
        c3: Cycled4
        f3(arg31: String, arg32: Int = 42): Cycled5!
      }

      type Cycled4 {
        c4: Cycled5
        f4(arg41: String, arg42: Int = 42): Cycled6!
      }

      type Cycled5 {
        c5: Cycled6
        f5(arg51: String, arg52: Int = 42): Cycled7!
      }
      

      type Cycled6 {
        c6: Cycled7
        f6(arg61: String, arg62: Int = 42): Cycled8!
      }
      

      type Cycled7 {
        c7: Cycled8
        f7(arg71: String, arg72: Int = 42): Cycled9!
      }
      

      type Cycled8 {
        c8: Cycled9
        f8(arg81: String, arg82: Int = 42): Cycled10!
      }
      

      type Cycled9 {
        c9: Cycled1
        f9(arg91: String, arg92: Int = 42): Cycled2!
      }
      

      type Cycled10 {
        c10: Cycled3
        f10(arg101: String, arg102: Int = 42): Cycled4!
      }
      
    `

    const start = new Date().toISOString()
    const tree = createGraphApiTreeForTests(graphApi)
    const end = new Date().toISOString()
    console.log(start)
    console.log(end, '\n')

    expect(tree).toBeTruthy()
  })
})
