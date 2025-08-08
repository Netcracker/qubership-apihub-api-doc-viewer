import { normalize, NormalizeOptions } from "@netcracker/qubership-apihub-api-unifier"
import { buildFromSchema } from "@netcracker/qubership-apihub-graphapi"
import { buildSchema } from "graphql"
import { createModel } from "../../graph-api/builders/model"
import { printSizeStats } from "../utilities/print-sizes"

const TEST_INLINE_REFS_FLAG = Symbol('inlineRefsFlag')
const TEST_ORIGINS_FLAG = Symbol('originsFlag')
const TEST_DEFAULTS_FLAG = Symbol('defaultsFlag')

describe('The most basic cases in GraphAPI', () => {
  const jestConsole = console
  beforeEach(() => {
    global.console = require('console')
  })
  afterEach(() => {
    global.console = jestConsole
  })

  describe('Only output', () => {
    describe('Nullable', () => {
      [
        ['String', 'string'],
        ['Int', 'integer'],
        ['Float', 'float'],
        ['Boolean', 'boolean'],
      ].forEach(([graphQlType, graphApiType]) => {
        it(graphQlType, () => {
          const graphql = `
            type Query {
              hello: ${graphQlType}
            }
          `
          const graphapi = buildFromSchema(
            buildSchema(graphql, { noLocation: true })
          )

          const model = createModel(graphapi)

          const expected = [
            {
              type: "header-row",
              level: 0,
              visible: true,
              path: [],
              elements: [
                {
                  kind: "operation-node-title-badge",
                  beforeValue: undefined,
                  afterValue: "query",
                },
                {
                  kind: "node-title",
                  beforeValue: undefined,
                  afterValue: 'hello',
                },
                [
                  {
                    kind: "operation-node-output-type-name",
                    beforeValue: undefined,
                    afterValue: graphApiType,
                    assignedDiff: undefined,
                  },
                  {
                    kind: "node-asterisk",
                    beforeValue: undefined,
                    afterValue: true,
                    assignedDiff: undefined,
                  },
                ],
              ],
            },
            {
              type: "header-row",
              level: 1,
              visible: true,
              path: ["output"],
              elements: [
                {
                  kind: "node-title",
                  beforeValue: undefined,
                  afterValue: "Output",
                },
                {
                  kind: "node-asterisk",
                  beforeValue: undefined,
                  afterValue: true,
                },
              ],
            },
          ]

          expect(model).toEqual(expected)
        })
      })

      it('Enum', () => {
        const graphql = `
          type Query {
            hello: Fruit
          }

          enum Fruit {
            APPLE
            BANANA
            ORANGE
          }
        `

        const graphapi = buildFromSchema(
          buildSchema(graphql, { noLocation: true })
        )

        const options = {
          inlineRefsFlag: TEST_INLINE_REFS_FLAG,
          originsFlag: TEST_ORIGINS_FLAG,
          defaultsFlag: TEST_DEFAULTS_FLAG,
          unify: true,
          validate: true
        } satisfies NormalizeOptions
        const normalized = normalize(graphapi, options)

        const model = createModel(normalized)

        const expected = [
          {
            type: "header-row",
            level: 0,
            visible: true,
            path: [],
            elements: [
              {
                kind: "operation-node-title-badge",
                beforeValue: undefined,
                afterValue: "query",
              },
              {
                kind: "node-title",
                beforeValue: undefined,
                afterValue: "hello",
              },
              [
                {
                  kind: "operation-node-output-type-name",
                  beforeValue: undefined,
                  afterValue: "Fruit",
                  assignedDiff: undefined,
                },
              ],
            ],
          },
          {
            type: "header-row",
            level: 0,
            visible: true,
            path: ["output"],
            elements: [
              {
                kind: "node-title",
                beforeValue: undefined,
                afterValue: "Output",
              },
            ],
          },
          {
            type: "text-row",
            level: 0,
            visible: true,
            path: ['output', 'deprecationReason'],
            elements: [
              {
                kind: "node-deprecation-reason",
                beforeValue: undefined,
                afterValue: "Temporary test deprecation reason",
                assignedDiff: undefined,
              },
            ],
          },
          {
            type: "multiline-additional-info-row-title",
            level: 0,
            visible: true,
            path: ['output', 'allowedValues'],
            elements: [
              {
                kind: "additional-info-title",
                beforeValue: undefined,
                afterValue: "Allowed values",
                assignedDiff: undefined,
              },
            ],
          },
          {
            type: "multiline-additional-info-row-value",
            level: 0,
            visible: true,
            path: ['output', 'allowedValues', 'APPLE'],
            elements: [
              {
                kind: "additional-info-value",
                beforeValue: undefined,
                afterValue: "APPLE",
                assignedDiff: undefined,
              },
              {
                kind: "node-deprecation-reason",
                beforeValue: undefined,
                afterValue: "Temporary test deprecation reason (enum value)",
                assignedDiff: undefined,
              },
            ],
          },
          {
            type: "multiline-additional-info-row-value",
            level: 0,
            visible: true,
            path: ['output', 'allowedValues', 'BANANA'],
            elements: [
              {
                kind: "additional-info-value",
                beforeValue: undefined,
                afterValue: "BANANA",
                assignedDiff: undefined,
              },
              {
                kind: "node-deprecation-reason",
                beforeValue: undefined,
                afterValue: "Temporary test deprecation reason (enum value)",
                assignedDiff: undefined,
              },
            ],
          },
          {
            type: "multiline-additional-info-row-value",
            level: 0,
            visible: true,
            path: ['output', 'allowedValues', 'ORANGE'],
            elements: [
              {
                kind: "additional-info-value",
                beforeValue: undefined,
                afterValue: "ORANGE",
                assignedDiff: undefined,
              },
              {
                kind: "node-deprecation-reason",
                beforeValue: undefined,
                afterValue: "Temporary test deprecation reason (enum value)",
                assignedDiff: undefined,
              },
            ],
          },
        ]

        expect(model).toEqual(expected)
      })

      it('Object', () => {
        const graphql = `
          type Query {
            hello: Fruit
          }

          type Fruit {
            name: String
            color: String
          }
        `

        const graphapi = buildFromSchema(
          buildSchema(graphql, { noLocation: true })
        )

        const options = {
          inlineRefsFlag: TEST_INLINE_REFS_FLAG,
          originsFlag: TEST_ORIGINS_FLAG,
          defaultsFlag: TEST_DEFAULTS_FLAG,
          unify: true,
          validate: true
        } satisfies NormalizeOptions
        const normalized = normalize(graphapi, options)

        const model = createModel(normalized)

        const expected = [
          {
            type: "header-row",
            level: 0,
            visible: true,
            path: [],
            elements: [
              {
                kind: "operation-node-title-badge",
                beforeValue: undefined,
                afterValue: "query",
              },
              {
                kind: "node-title",
                beforeValue: undefined,
                afterValue: "hello",
              },
              [
                {
                  kind: "operation-node-output-type-name",
                  beforeValue: undefined,
                  afterValue: "Fruit",
                  assignedDiff: undefined,
                },
              ],
            ],
          },
          {
            type: "header-row",
            level: 0,
            visible: true,
            path: ["output"],
            elements: [
              {
                kind: "node-title",
                beforeValue: undefined,
                afterValue: "Output",
              },
            ],
          },
          {
            type: "children-header-row",
            level: 0,
            visible: true,
            path: ["output"],
            elements: [
              {
                kind: "node-type",
                beforeValue: undefined,
                afterValue: "object",
              },
              {
                kind: "node-type-name",
                beforeValue: undefined,
                afterValue: "Fruit",
              },
            ],
          },
          {
            type: "header-row",
            level: 1,
            visible: true,
            path: ["output", "name"],
            elements: [
              {
                kind: "node-title",
                beforeValue: undefined,
                afterValue: "name",
              },
              [
                {
                  kind: "operation-node-output-type-name",
                  beforeValue: undefined,
                  afterValue: "string",
                  assignedDiff: undefined,
                },
              ],
            ],
          },
          {
            type: "header-row",
            level: 2,
            visible: true,
            path: ["output", "name", "output"],
            elements: [
              {
                kind: "node-title",
                beforeValue: undefined,
                afterValue: "Output",
              },
            ],
          },
          {
            type: "header-row",
            level: 1,
            visible: true,
            path: ["output", "color"],
            elements: [
              {
                kind: "node-title",
                beforeValue: undefined,
                afterValue: "color",
              },
              [
                {
                  kind: "operation-node-output-type-name",
                  beforeValue: undefined,
                  afterValue: "string",
                  assignedDiff: undefined,
                },
              ],
            ],
          },
          {
            type: "header-row",
            level: 2,
            visible: true,
            path: ["output", "color", "output"],
            elements: [
              {
                kind: "node-title",
                beforeValue: undefined,
                afterValue: "Output",
              },
            ],
          },
        ]

        expect(model).toEqual(expected)
      })
    })

    describe('List', () => {
      it('Nullable list of nullable scalars', () => {
        const graphql = `
          type Query {
            hello: [String]
          }
        `

        const graphapi = buildFromSchema(
          buildSchema(graphql, { noLocation: true })
        )

        const options = {
          inlineRefsFlag: TEST_INLINE_REFS_FLAG,
          originsFlag: TEST_ORIGINS_FLAG,
          defaultsFlag: TEST_DEFAULTS_FLAG,
          unify: true,
          validate: true
        } satisfies NormalizeOptions
        const normalized = normalize(graphapi, options)

        const model = createModel(normalized)

        const expected = [
          {
            type: "header-row",
            level: 0,
            visible: true,
            path: [],
            elements: [
              {
                kind: "operation-node-title-badge",
                beforeValue: undefined,
                afterValue: "query",
              },
              {
                kind: "node-title",
                beforeValue: undefined,
                afterValue: "hello",
              },
              [
                {
                  kind: "operation-node-output-type-name",
                  beforeValue: undefined,
                  afterValue: "list",
                  assignedDiff: undefined,
                },
              ],
            ],
          },
          {
            type: "header-row",
            level: 1,
            visible: true,
            path: ["output"],
            elements: [
              {
                kind: "node-title",
                beforeValue: undefined,
                afterValue: "Output",
              },
            ],
          },
          {
            type: "text-row",
            level: 1,
            visible: true,
            path: ["output"],
            elements: [
              {
                kind: "node-deprecation-reason",
                beforeValue: undefined,
                afterValue: "Temporary test deprecation reason",
              },
            ],
          },
          {
            type: "header-row",
            level: 2,
            visible: true,
            path: ["output", "items"],
            elements: [
              {
                kind: "node-title",
                beforeValue: undefined,
                afterValue: "list item",
                assignedDiff: undefined,
              },
              {
                kind: "node-type",
                beforeValue: undefined,
                afterValue: "string",
                assignedDiff: undefined,
              },
              {
                kind: "node-type-name",
                beforeValue: undefined,
                afterValue: undefined,
                assignedDiff: undefined,
              },
            ],
          },
          {
            type: "text-row",
            level: 2,
            visible: true,
            path: ["output", "items", "items", "deprecationReason"],
            elements: [
              {
                kind: "node-deprecation-reason",
                beforeValue: undefined,
                afterValue: "Temporary test deprecation reason (list item)",
                assignedDiff: undefined,
              },
            ],
          },
        ]

        expect(model).toEqual(expected)
      })

      it('Nullable list of nullable enums', () => {
        const graphql = `
          type Query {
            hello: [Fruit]
          }

          enum Fruit {
            APPLE
            BANANA
            ORANGE
          }
        `

        const graphapi = buildFromSchema(
          buildSchema(graphql, { noLocation: true })
        )

        const options = {
          inlineRefsFlag: TEST_INLINE_REFS_FLAG,
          originsFlag: TEST_ORIGINS_FLAG,
          defaultsFlag: TEST_DEFAULTS_FLAG,
          unify: true,
          validate: true
        } satisfies NormalizeOptions
        const normalized = normalize(graphapi, options)

        const model = createModel(normalized)

        const expected = [
          {
            type: "header-row",
            level: 0,
            visible: true,
            path: [],
            elements: [
              {
                kind: "operation-node-title-badge",
                beforeValue: undefined,
                afterValue: "query",
              },
              {
                kind: "node-title",
                beforeValue: undefined,
                afterValue: "hello",
              },
              [
                {
                  kind: "operation-node-output-type-name",
                  beforeValue: undefined,
                  afterValue: "list",
                  assignedDiff: undefined,
                },
              ],
            ],
          },
          // Absent operation deprecation reason
          {
            type: "header-row",
            level: 1,
            visible: true,
            path: ["output"],
            elements: [
              {
                kind: "node-title",
                beforeValue: undefined,
                afterValue: "Output",
              },
            ],
          },
          {
            type: "text-row",
            level: 1,
            visible: true,
            path: ["output"],
            elements: [
              {
                kind: "node-deprecation-reason",
                beforeValue: undefined,
                afterValue: "Temporary test deprecation reason (list)",
              },
            ],
          },
          {
            type: "children-header-row",
            level: 2,
            visible: true,
            path: ["output", "items"],
            elements: [
              {
                kind: "node-title",
                beforeValue: undefined,
                afterValue: "list item",
                assignedDiff: undefined,
              },
            ],
          },
          {
            type: "header-row",
            level: 2,
            visible: true,
            path: ["output", "items"],
            elements: [
              {
                kind: "node-title",
                beforeValue: undefined,
                afterValue: "list item",
                assignedDiff: undefined,
              },
              {
                kind: "node-type",
                beforeValue: undefined,
                afterValue: "enum",
                assignedDiff: undefined,
              },
              {
                kind: "node-type-name",
                beforeValue: undefined,
                afterValue: "Fruit",
                assignedDiff: undefined,
              },
            ],
          },
          {
            type: "text-row",
            level: 0,
            visible: true,
            path: ["output", "items", "deprecationReason"],
            elements: [
              {
                kind: "node-deprecation-reason",
                beforeValue: undefined,
                afterValue: "Temporary test deprecation reason (enum type)",
                assignedDiff: undefined,
              },
            ],
          },
          {
            type: "multiline-additional-info-row-title",
            level: 2,
            visible: true,
            path: ["output", "items", "allowedValues"],
            elements: [
              {
                kind: "additional-info-title",
                beforeValue: undefined,
                afterValue: "Allowed values",
                assignedDiff: undefined,
              },
            ],
          },
          {
            type: "multiline-additional-info-row-value",
            level: 2,
            visible: true,
            path: ["output", "items", "allowedValues", "APPLE"],
            elements: [
              {
                kind: "additional-info-value",
                beforeValue: undefined,
                afterValue: "APPLE",
                assignedDiff: undefined,
              },
              {
                kind: "node-deprecation-reason",
                beforeValue: undefined,
                afterValue: "Temporary test deprecation reason (enum value)",
                assignedDiff: undefined,
              },
            ],
          },
          {
            type: "multiline-additional-info-row-value",
            level: 2,
            visible: true,
            path: ["output", "items", "allowedValues", "BANANA"],
            elements: [
              {
                kind: "additional-info-value",
                beforeValue: undefined,
                afterValue: "BANANA",
                assignedDiff: undefined,
              },
              {
                kind: "node-deprecation-reason",
                beforeValue: undefined,
                afterValue: "Temporary test deprecation reason (enum value)",
                assignedDiff: undefined,
              },
            ],
          },
          {
            type: "multiline-additional-info-row-value",
            level: 2,
            visible: true,
            path: ["output", "items", "allowedValues", "ORANGE"],
            elements: [
              {
                kind: "additional-info-value",
                beforeValue: undefined,
                afterValue: "ORANGE",
                assignedDiff: undefined,
              },
              {
                kind: "node-deprecation-reason",
                beforeValue: undefined,
                afterValue: "Temporary test deprecation reason (enum value)",
                assignedDiff: undefined,
              },
            ],
          },
        ]

        printSizeStats(graphql, normalized, model)

        expect(model).toEqual(expected)
      })

      it('Nullable list of nullable objects', () => {
        const graphql = `
          type Query {
            hello: [Fruit]
          }

          type Fruit {
            name: String
            color: String
          }
        `

        const graphapi = buildFromSchema(
          buildSchema(graphql, { noLocation: true })
        )

        const options = {
          inlineRefsFlag: TEST_INLINE_REFS_FLAG,
          originsFlag: TEST_ORIGINS_FLAG,
          defaultsFlag: TEST_DEFAULTS_FLAG,
          unify: true,
          validate: true
        } satisfies NormalizeOptions
        const normalized = normalize(graphapi, options)

        const model = createModel(normalized)

        const expected = [
          {
            type: "header-row",
            level: 0,
            visible: true,
            path: [],
            elements: [
              {
                kind: "operation-node-title-badge",
                beforeValue: undefined,
                afterValue: "query",
              },
              {
                kind: "node-title",
                beforeValue: undefined,
                afterValue: "hello",
              },
              [
                {
                  kind: "operation-node-output-type-name",
                  beforeValue: undefined,
                  afterValue: "list",
                  assignedDiff: undefined,
                },
              ],
            ],
          },
          {
            type: "header-row",
            level: 1,
            visible: true,
            path: ["output"],
            elements: [
              {
                kind: "node-title",
                beforeValue: undefined,
                afterValue: "Output",
              },
            ],
          },
          {
            type: "text-row",
            level: 1,
            visible: true,
            path: ["output"],
            elements: [
              {
                kind: "node-deprecation-reason",
                beforeValue: undefined,
                afterValue: "Temporary test deprecation reason (list)",
              },
            ],
          },
          {
            type: "children-header-row",
            level: 2,
            visible: true,
            path: ["output", "items"],
            elements: [
              {
                kind: "node-title",
                beforeValue: undefined,
                afterValue: "list item",
                assignedDiff: undefined,
              },
            ],
          },
          {
            type: "header-row",
            level: 2,
            visible: true,
            path: ["output", "items"],
            elements: [
              {
                kind: "node-title",
                beforeValue: undefined,
                afterValue: "list item",
                assignedDiff: undefined,
              },
              {
                kind: "node-type",
                beforeValue: undefined,
                afterValue: "object",
                assignedDiff: undefined,
              },
              {
                kind: "node-type-name",
                beforeValue: undefined,
                afterValue: "Fruit",
                assignedDiff: undefined,
              },
            ],
          },
          {
            type: "children-header-row",
            level: 2,
            visible: true,
            path: ["output", "items"],
            elements: [
              {
                kind: "node-type",
                beforeValue: undefined,
                afterValue: "object",
              },
              {
                kind: "node-type-name",
                beforeValue: undefined,
                afterValue: "Fruit",
              },
            ],
          },
          {
            type: "header-row",
            level: 3,
            visible: true,
            path: ["output", "items", "name"],
            elements: [
              {
                kind: "node-title",
                beforeValue: undefined,
                afterValue: "name",
              },
              [
                {
                  kind: "operation-node-output-type-name",
                  beforeValue: undefined,
                  afterValue: "string",
                  assignedDiff: undefined,
                },
              ],
            ],
          },
          {
            type: "header-row",
            level: 4,
            visible: true,
            path: ["output", "items", "name", "output"],
            elements: [
              {
                kind: "node-title",
                beforeValue: undefined,
                afterValue: "Output",
              },
            ],
          },
          {
            type: "header-row",
            level: 3,
            visible: true,
            path: ["output", "items", "color"],
            elements: [
              {
                kind: "node-title",
                beforeValue: undefined,
                afterValue: "color",
              },
              [
                {
                  kind: "operation-node-output-type-name",
                  beforeValue: undefined,
                  afterValue: "string",
                  assignedDiff: undefined,
                },
              ],
            ],
          },
          {
            type: "header-row",
            level: 4,
            visible: true,
            path: ["output", "items", "color", "output"],
            elements: [
              {
                kind: "node-title",
                beforeValue: undefined,
                afterValue: "Output",
              },
            ],
          },
        ]

        expect(model).toEqual(expected)
      })
    })
  })
})
