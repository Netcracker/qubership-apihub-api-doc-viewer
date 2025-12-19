import { TreeNodeComplexityTypes } from "../src/model/abstract/tree/tree-node.interface"
import { AsyncApiTreeNodeKinds } from "../src/model/async-api/types/node-kind"
import { createAsyncApiTreeForTests } from "./helpers/create-async-api-tree-for-tests"
import { simplifyConsole } from "./helpers/simplify-console"

describe('Simple E2E test', () => {
  simplifyConsole()

  const asyncApiKafkaSource = {
    asyncapi: "3.0.0",
    info: {
      title: "example-event-service",
      version: "1.0.0",
      "x-generator": "springwolf"
    },
    defaultContentType: "application/json",
    servers: {
      "kafka-main": {
        host: "kafka-host",
        protocol: "kafka"
      }
    },
    channels: {
      "customer-change-topic": {
        address: "customer-change-topic",
        description: "Channel for customer change notifications",
        messages: {
          BaseEventMessage: {
            $ref: "#/components/messages/BaseEventMessage"
          }
        },
        servers: [
          {
            $ref: "#/servers/kafka-main"
          }
        ],
        bindings: {}
      }
    },
    components: {
      schemas: {
        HeadersExample: {
          title: "HeadersExample",
          type: "object",
          properties: {
            "X-Idempotency-Key": {
              type: "string"
            }
          },
          examples: [
            {
              "X-Idempotency-Key": "string"
            }
          ]
        },
        BaseEvent: {
          title: "BaseEvent",
          type: "object",
          properties: {
            currentInstance: {
              type: "object",
              description: "New data state"
            },
            currentModelVersion: {
              type: "integer",
              description: "Model Version",
              format: "int32"
            },
            previousInstance: {
              type: "object",
              description: "Previous data state"
            },
            resourceAction: {
              type: "string",
              description: "Resource Action"
            },
            resourceType: {
              type: "string",
              description: "Resource Type"
            }
          },
          description: "Base event to describe Customer's data changes",
          examples: [
            {
              currentInstance: {},
              currentModelVersion: 0,
              previousInstance: {},
              resourceAction: "string",
              resourceType: "string"
            }
          ],
          required: [
            "currentInstance",
            "currentModelVersion",
            "previousInstance",
            "resourceAction",
            "resourceType"
          ]
        }
      },
      messages: {
        BaseEventMessage: {
          headers: {
            $ref: "#/components/schemas/HeadersExample"
          },
          payload: {
            schemaFormat: "application/vnd.aai.asyncapi+json;version=3.0.0",
            schema: {
              $ref: "#/components/schemas/BaseEvent"
            }
          },
          name: "BaseEventMessage",
          title: "BaseEvent",
          bindings: {
            kafka: {
              bindingVersion: "0.5.0"
            }
          }
        }
      }
    },
    operations: {
      "customer-change-topic_send_BaseEvent": {
        action: "send",
        channel: {
          $ref: "#/channels/customer-change-topic"
        },
        title: "Customer change topic send",
        description: "Send events about Customer's data changes",
        bindings: {
          kafka: {
            bindingVersion: "0.5.0"
          }
        },
        messages: [
          {
            $ref: "#/channels/customer-change-topic/messages/BaseEventMessage"
          }
        ]
      }
    }
  }

  it('should build async api tree from source', () => {
    const tree = createAsyncApiTreeForTests(asyncApiKafkaSource)
    expect(tree).toBeDefined()
    const root = tree?.root ?? null
    expect(root).not.toBeNull()
    const childrenNodes = root!.childrenNodes()
    expect(childrenNodes.length).toBe(1)

    const operationNode = childrenNodes[0]
    expect(operationNode.type).toBe(TreeNodeComplexityTypes.SIMPLE)
    expect(operationNode.key).toBe('customer-change-topic_send_BaseEvent')
    expect(operationNode.kind).toBe(AsyncApiTreeNodeKinds.OPERATION)
    expect(operationNode.parent).toBe(root)
    expect(operationNode.container).toBeNull()
    const operationNodeValue = operationNode.value()
    expect(operationNodeValue).not.toBeNull()
    expect(operationNodeValue).toEqual({
      action: 'send',
      address: 'customer-change-topic',
      title: "Customer change topic send",
      description: "Send events about Customer's data changes",
    })
    const operationChildren = operationNode.childrenNodes()
    expect(operationChildren.length).toBe(3)

    const channelNode = operationChildren.find(node => node.key === 'channel')
    const bindingsNode = operationChildren.find(node => node.key === 'bindings')
    const messagesNode = operationChildren.find(node => node.key === 'messages')
    expect(channelNode).not.toBeNull()
    expect(bindingsNode).not.toBeNull()
    expect(messagesNode).not.toBeNull()

    expect(channelNode!.type).toBe(TreeNodeComplexityTypes.SIMPLE)
    expect(channelNode!.key).toBe('channel')
    expect(channelNode!.kind).toBe(AsyncApiTreeNodeKinds.CHANNEL)
    expect(channelNode!.parent).toBe(operationNode)
    expect(channelNode!.container).toBeNull()
    const channelNodeValue = channelNode!.value()
    expect(channelNodeValue).toEqual({
      description: "Channel for customer change notifications",
    })

    expect(bindingsNode!.type).toBe(TreeNodeComplexityTypes.COMPLEX)
    expect(bindingsNode!.key).toBe('bindings')
    expect(bindingsNode!.kind).toBe(AsyncApiTreeNodeKinds.BINDINGS)
    expect(bindingsNode!.parent).toBe(operationNode)
    expect(bindingsNode!.container).toBeNull()
    const bindingsNodeValue = bindingsNode!.value()
    expect(bindingsNodeValue)
      .toEqual({ // first binding selection
        protocol: 'kafka',
      })
    const bindingsChildren = bindingsNode!.childrenNodes()
    const bindingsNestedNodes = bindingsNode!.nestedNodes()
    expect(bindingsChildren.length).toBe(0)
    expect(bindingsNestedNodes.length).toBe(1)

    expect(messagesNode!.type).toBe(TreeNodeComplexityTypes.COMPLEX)
    expect(messagesNode!.key).toBe('messages')
    expect(messagesNode!.kind).toBe(AsyncApiTreeNodeKinds.MESSAGES)
    expect(messagesNode!.parent).toBe(operationNode)
    expect(messagesNode!.container).toBeNull()
    const messagesNodeValue = messagesNode!.value()
    expect(messagesNodeValue)
      .toEqual({ // first message selection
        internalTitle: "BaseEventMessage",
        title: "BaseEvent",
      })
    const messagesChildren = messagesNode!.childrenNodes()
    const messagesNestedNodes = messagesNode!.nestedNodes()
    expect(messagesChildren.length).toBe(0)
    expect(messagesNestedNodes.length).toBe(1)
  })
})