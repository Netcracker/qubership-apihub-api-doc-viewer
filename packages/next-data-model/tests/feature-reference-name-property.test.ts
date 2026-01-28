import { denormalize, normalize } from "@netcracker/qubership-apihub-api-unifier"
import { AsyncApiTreeBuilder } from "../src/building-service/async-api/tree/builder"
import { AsyncApiTree } from "../src/model/async-api/tree/tree.impl"
import { AsyncApiTreeNodeKinds } from "../src/model/async-api/types/node-kind"
import { simplifyConsole } from "./helpers/simplify-console"

const TEST_REFERENCE_NAME_PROPERTY = Symbol('referenceName')

function mergeAsyncApi(source: unknown): unknown {
  const normalizedSource = normalize(source, {
    // validate: true,
    unify: true,
    // liftCombiners: true,
    referenceNameProperty: TEST_REFERENCE_NAME_PROPERTY,
  })
  const mergedSource = denormalize(normalizedSource, {
    unify: true,
    // validate: true,
    // liftCombiners: true,
  })
  return mergedSource
}

describe('Feature: Reference Name Property', () => {
  simplifyConsole()

  it('should resolve operation node key based on the reference name property', () => {
    const source = {
      asyncapi: '3.0.0',
      operations: {
        'test-operation': {
          action: 'send',
          channel: {
            $ref: '#/channels/test-channel',
          },
        },
      },
      channels: {
        'test-channel': {
          title: 'Test channel',
        },
      },
    }
    const mergedSource = mergeAsyncApi(source)
    const treeBuilder = new AsyncApiTreeBuilder(mergedSource, TEST_REFERENCE_NAME_PROPERTY)
    const tree: AsyncApiTree = treeBuilder.build()
    const root = tree.root!
    const operationNode = root!.childrenNodes().find(node => node.kind === AsyncApiTreeNodeKinds.OPERATION)
    expect(operationNode).toBeDefined()
    expect(operationNode!.key).toBe('test-operation')
  })

  it('should resolve channel node key based on the reference name property', () => {
    const source = {
      asyncapi: '3.0.0',
      operations: {
        'test-operation': {
          title: 'Test operation',
          action: 'send',
          channel: {
            $ref: '#/channels/test-channel',
          },
        },
      },
      channels: {
        'test-channel': {
          description: 'Test channel without title',
        },
      },
    }
    const mergedSource = mergeAsyncApi(source)
    
    const treeBuilder = new AsyncApiTreeBuilder(mergedSource, TEST_REFERENCE_NAME_PROPERTY)
    const tree: AsyncApiTree = treeBuilder.build()
    const root = tree.root!

    const operationNode = root!.childrenNodes().find(node => node.kind === AsyncApiTreeNodeKinds.OPERATION)
    expect(operationNode).toBeDefined()

    const channelNode = operationNode!.childrenNodes().find(node => node.kind === AsyncApiTreeNodeKinds.CHANNEL)
    expect(channelNode).toBeDefined()
    expect(channelNode!.key).toBe('test-channel')
  })

  it('should resolve message node key based on the reference name property', () => {
    const source = {
      asyncapi: '3.0.0',
      operations: {
        'test-operation': {
          title: 'Test operation',
          action: 'send',
          messages: [
            {
              $ref: '#/messages/test-message-1',
            },
            {
              $ref: '#/messages/test-message-2',
            },
          ],
          channel: {
            $ref: '#/channels/test-channel',
          },
        },
      },
      channels: {
        'test-channel': {
          title: 'Test channel',
        },
      },
      messages: {
        'test-message-1': {
          description: 'Test message 1',
        },
        'test-message-2': {
          description: 'Test message 2',
        },
      },
    }
    const mergedSource = mergeAsyncApi(source)
    const treeBuilder = new AsyncApiTreeBuilder(mergedSource, TEST_REFERENCE_NAME_PROPERTY)
    const tree: AsyncApiTree = treeBuilder.build()
    const root = tree.root!
    const operationNode = root!.childrenNodes().find(node => node.kind === AsyncApiTreeNodeKinds.OPERATION)
    expect(operationNode).toBeDefined()

    const messagesNode = operationNode!.childrenNodes().find(node => node.kind === AsyncApiTreeNodeKinds.MESSAGES)
    const messageFirstNode = messagesNode?.nestedNodes()[0]
    const messageSecondNode = messagesNode?.nestedNodes()[1]
    expect(messageFirstNode).toBeDefined()
    expect(messageFirstNode!.key).toBe('test-message-1')
    expect(messageSecondNode).toBeDefined()
    expect(messageSecondNode!.key).toBe('test-message-2')
  })
})