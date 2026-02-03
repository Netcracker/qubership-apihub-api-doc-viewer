import { denormalize, normalize, NormalizeOptions } from "@netcracker/qubership-apihub-api-unifier"
import { AsyncApiTreeBuilder } from "../src/building-service/async-api/tree/builder"
import { TreeNodeComplexityTypes } from "../src/model/abstract/tree/tree-node.interface"
import { AsyncApiTree } from "../src/model/async-api/tree/tree.impl"
import { AsyncApiTreeNodeKinds } from "../src/model/async-api/types/node-kind"
import { TEST_REFERENCE_NAME_PROPERTY_KEY } from "./helpers/create-async-api-tree-for-tests"

const COMPONENTS_WITH_MESSAGES = {
  components: {
    messages: {
      'test-message': {
        name: "TestMessage",
        headers: {
          'test-header': {
            description: "test header description",
            required: true,
            schema: {
              type: "string",
            }
          }
        },
        payload: {
          schema: {
            type: "object",
            properties: {
              a: { type: "integer" },
            }
          }
        }
      }
    }
  }
}

const SINGLE_MESSAGE_USAGE = {
  messages: [
    { $ref: "#/components/messages/test-message" }
  ]
}

const NORMALIZATION_OPTIONS: NormalizeOptions = {
  unify: true,
  validate: true,
  liftCombiners: true,
}

describe('AsyncAPI Data Model API', () => {
  it('tree from non objective source', () => {
    const source = 'hello world'
    const treeBuilder = new AsyncApiTreeBuilder(source)
    const tree = treeBuilder.build()
    expect(tree).toBeDefined()
    expect(tree!.root).toBeNull()
  })

  it('tree from empty source', () => {
    const source = {}
    const treeBuilder = new AsyncApiTreeBuilder(source)
    const tree = treeBuilder.build()
    expect(tree).toBeDefined()
    expect(tree!.root).toBeNull()
  })

  it('test proxy API (method "childrenNodes") for MESSAGE_SECTION_SELECTOR', () => {
    const source = {
      asyncapi: "3.0.0",
      info: {
        title: "test-asyncapi",
        version: "1.0.0"
      },
      channels: {
        'test-channel': {
          address: "test-channel",
          description: "test channel description",
          summary: "test channel summary",
          bindings: {
            'test-binding': {
              a: 1,
              b: '2',
              c: true,
            }
          }
        }
      },
      operations: {
        'test-operation': {
          action: "send",
          description: "test operation description",
          summary: "test operation summary",
          channel: { $ref: "#/channels/test-channel" },
          ...SINGLE_MESSAGE_USAGE,
          'x-first': "first",
          'x-second': {
            a: 1,
            b: '2',
            c: true,
            d: [1, 2, 3],
            e: {
              f: 'g',
              h: 4,
              i: false,
              j: [4, 5, 6],
            }
          }
        }
      },
      ...COMPONENTS_WITH_MESSAGES,
    }

    const normalizedSource = normalize(source, { ...NORMALIZATION_OPTIONS, referenceNameProperty: TEST_REFERENCE_NAME_PROPERTY_KEY })
    const mergedSource = denormalize(normalizedSource, NORMALIZATION_OPTIONS)

    const treeBuilder = new AsyncApiTreeBuilder(mergedSource, undefined, TEST_REFERENCE_NAME_PROPERTY_KEY)
    const tree: AsyncApiTree | null = treeBuilder.build()
    expect(tree).not.toBeNull()

    const messageNode = tree!.root
    expect(messageNode).toBeDefined()

    const messageSectionSelectorNode = messageNode!.childrenNodes().find(node => node.kind === AsyncApiTreeNodeKinds.MESSAGE_SECTION_SELECTOR)
    expect(messageSectionSelectorNode).toBeDefined()
    expect(messageSectionSelectorNode!.type).toBe(TreeNodeComplexityTypes.COMPLEX)

    const contentChildrenNodes = messageSectionSelectorNode!.childrenNodes()
    expect(contentChildrenNodes.length).toBe(2)
    const headersNode = contentChildrenNodes.find(node => node.kind === AsyncApiTreeNodeKinds.MESSAGE_HEADERS)
    const payloadNode = contentChildrenNodes.find(node => node.kind === AsyncApiTreeNodeKinds.MESSAGE_PAYLOAD)
    expect(headersNode).toBeDefined()
    expect(payloadNode).toBeDefined()
    
    const channelChildrenNodes = messageSectionSelectorNode!.childrenNodes('#/data/channel')
    expect(channelChildrenNodes.length).toBe(1)
    const bindingsNode = channelChildrenNodes.find(node => node.kind === AsyncApiTreeNodeKinds.BINDINGS)
    expect(bindingsNode).toBeDefined()

    const operationChildrenNodes = messageSectionSelectorNode!.childrenNodes('#/data/operation')
    expect(operationChildrenNodes.length).toBe(1)
    const extensionsNode = operationChildrenNodes.find(node => node.kind === AsyncApiTreeNodeKinds.EXTENSIONS)
    expect(extensionsNode).toBeDefined()

    const sections = messageSectionSelectorNode!.nestedNodes()
    expect(sections.length).toBe(3)
    const contentSection = sections.find(node => node.kind === AsyncApiTreeNodeKinds.MESSAGE_CONTENT)
    expect(contentSection).toBeDefined()
    const channelSection = sections.find(node => node.kind === AsyncApiTreeNodeKinds.MESSAGE_CHANNEL)
    expect(channelSection).toBeDefined()
    const operationSection = sections.find(node => node.kind === AsyncApiTreeNodeKinds.MESSAGE_OPERATION)
    expect(operationSection).toBeDefined()

    expect(contentSection!.childrenNodes()[0]).toBe(headersNode)
    expect(contentSection!.childrenNodes()[1]).toBe(payloadNode)
    expect(channelSection!.childrenNodes()[0]).toBe(bindingsNode)
    expect(operationSection!.childrenNodes()[0]).toBe(extensionsNode)
  })

  it('test proxy API (method "value") for MESSAGE_SECTION_SELECTOR', () => {
    const source = {
      asyncapi: "3.0.0",
      info: {
        title: "test-asyncapi",
        version: "1.0.0"
      },
      channels: {
        'test-channel': {
          address: "test-channel",
          description: "test channel description",
          summary: "test channel summary",
          bindings: {
            'test-binding': {
              a: 1,
              b: '2',
              c: true,
            }
          }
        }
      },
      operations: {
        'test-operation': {
          action: "send",
          description: "test operation description",
          summary: "test operation summary",
          channel: { $ref: "#/channels/test-channel" },
          ...SINGLE_MESSAGE_USAGE,
          'x-first': "first",
          'x-second': {
            a: 1,
            b: '2',
            c: true,
            d: [1, 2, 3],
            e: {
              f: 'g',
              h: 4,
              i: false,
              j: [4, 5, 6],
            }
          }
        }
      },
      ...COMPONENTS_WITH_MESSAGES,
    }

    const normalizedSource = normalize(source, { ...NORMALIZATION_OPTIONS, referenceNameProperty: TEST_REFERENCE_NAME_PROPERTY_KEY })
    const mergedSource = denormalize(normalizedSource, NORMALIZATION_OPTIONS)

    const treeBuilder = new AsyncApiTreeBuilder(mergedSource, undefined, TEST_REFERENCE_NAME_PROPERTY_KEY)
    const tree: AsyncApiTree | null = treeBuilder.build()
    expect(tree).not.toBeNull()

    const messageNode = tree!.root
    expect(messageNode).toBeDefined()

    const messageSectionSelectorNode = messageNode!.childrenNodes().find(node => node.kind === AsyncApiTreeNodeKinds.MESSAGE_SECTION_SELECTOR)
    expect(messageSectionSelectorNode).toBeDefined()
    expect(messageSectionSelectorNode!.type).toBe(TreeNodeComplexityTypes.COMPLEX)

    const contentValue = messageSectionSelectorNode!.value()
    expect(contentValue).toEqual(null)
    
    const channelValue = messageSectionSelectorNode!.value('#/data/channel')
    expect(channelValue).toEqual({
      description: "test channel description",
      summary: "test channel summary",
    })

    const operationValue = messageSectionSelectorNode!.value('#/data/operation')
    expect(operationValue).toEqual({
      description: "test operation description",
      summary: "test operation summary",
    })

    const sections = messageSectionSelectorNode!.nestedNodes()
    const contentSection = sections.find(node => node.kind === AsyncApiTreeNodeKinds.MESSAGE_CONTENT)
    expect(contentSection).toBeDefined()
    expect(contentSection!.value()).toEqual(contentValue)
    const channelSection = sections.find(node => node.kind === AsyncApiTreeNodeKinds.MESSAGE_CHANNEL)
    expect(channelSection).toBeDefined()
    expect(channelSection!.value()).toEqual(channelValue)
    const operationSection = sections.find(node => node.kind === AsyncApiTreeNodeKinds.MESSAGE_OPERATION)
    expect(operationSection).toBeDefined()
    expect(operationSection!.value()).toEqual(operationValue)
  })
})