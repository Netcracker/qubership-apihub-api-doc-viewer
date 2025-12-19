import { TreeNodeComplexityTypes } from "../src/model/abstract/tree/tree-node.interface"
import { AsyncApiTreeNodeKinds } from "../src/model/async-api/types/node-kind"
import { createAsyncApiTreeForTests } from "./helpers/create-async-api-tree-for-tests"
import { simplifyConsole } from "./helpers/simplify-console"

describe('Cases with channel', () => {
  simplifyConsole()

  describe('Single channel scenarios', () => {
    it('should handle operation with minimal channel (address only)', () => {
      const asyncApiSource = {
        asyncapi: "3.0.0",
        info: {
          title: "minimal-channel-test",
          version: "1.0.0"
        },
        channels: {
          'user-signup': {
            address: "user/signup"
          }
        },
        operations: {
          'user-signup-operation': {
            action: "send",
            channel: { $ref: "#/channels/user-signup" }
          }
        }
      }

      const tree = createAsyncApiTreeForTests(asyncApiSource)
      expect(tree).toBeDefined()
      const root = tree?.root ?? null
      expect(root).not.toBeNull()

      const operationNode = root!.childrenNodes()[0]
      expect(operationNode).toBeDefined()
      expect(operationNode.kind).toBe(AsyncApiTreeNodeKinds.OPERATION)

      const operationNodeValue = operationNode.value()
      expect(operationNodeValue).toBeDefined()
      expect(operationNodeValue).toEqual({
        action: "send",
        address: "user/signup"
      })

      // Check for channel node
      const channelNode = operationNode.childrenNodes().find(node => node.kind === AsyncApiTreeNodeKinds.CHANNEL)
      expect(channelNode).toBeDefined()
      expect(channelNode!.type).toBe(TreeNodeComplexityTypes.SIMPLE)
    })

    it('should handle channel with title', () => {
      const asyncApiSource = {
        asyncapi: "3.0.0",
        info: {
          title: "channel-with-title-test",
          version: "1.0.0"
        },
        channels: {
          'user-events': {
            address: "user/events",
            title: "User Events Channel"
          }
        },
        operations: {
          'user-events-operation': {
            action: "send",
            channel: { $ref: "#/channels/user-events" }
          }
        }
      }

      const tree = createAsyncApiTreeForTests(asyncApiSource)
      const operationNode = tree!.root!.childrenNodes()[0]

      const operationNodeValue = operationNode.value()
      expect(operationNodeValue).toEqual({
        action: "send",
        address: "user/events"
      })

      const channelNode = operationNode.childrenNodes().find(node => node.kind === AsyncApiTreeNodeKinds.CHANNEL)
      expect(channelNode).toBeDefined()
      expect(channelNode!.type).toBe(TreeNodeComplexityTypes.SIMPLE)

      const channelNodeValue = channelNode!.value()
      expect(channelNodeValue).toEqual({
        title: "User Events Channel"
      })
    })

    it('should handle channel with title and description', () => {
      const asyncApiSource = {
        asyncapi: "3.0.0",
        info: {
          title: "channel-with-title-description-test",
          version: "1.0.0"
        },
        channels: {
          'order-channel': {
            address: "orders",
            title: "Order Processing Channel",
            description: "Channel for handling order-related events and messages"
          }
        },
        operations: {
          'order-operation': {
            action: "send",
            channel: { $ref: "#/channels/order-channel" }
          }
        }
      }

      const tree = createAsyncApiTreeForTests(asyncApiSource)
      const operationNode = tree!.root!.childrenNodes()[0]

      const operationNodeValue = operationNode.value()
      expect(operationNodeValue).toEqual({
        action: "send",
        address: "orders"
      })

      const channelNode = operationNode.childrenNodes().find(node => node.kind === AsyncApiTreeNodeKinds.CHANNEL)
      expect(channelNode).toBeDefined()
      expect(channelNode!.type).toBe(TreeNodeComplexityTypes.SIMPLE)

      const channelNodeValue = channelNode!.value()
      expect(channelNodeValue).toEqual({
        title: "Order Processing Channel",
        description: "Channel for handling order-related events and messages"
      })
    })

    it('should handle channel with summary field', () => {
      const asyncApiSource = {
        asyncapi: "3.0.0",
        info: {
          title: "channel-with-summary-test",
          version: "1.0.0"
        },
        channels: {
          'payment-channel': {
            address: "payments",
            title: "Payment Channel",
            summary: "Brief summary of payment channel",
            description: "Detailed description of payment processing channel"
          }
        },
        operations: {
          'payment-operation': {
            action: "receive",
            channel: { $ref: "#/channels/payment-channel" }
          }
        }
      }

      const tree = createAsyncApiTreeForTests(asyncApiSource)
      const operationNode = tree!.root!.childrenNodes()[0]

      const operationNodeValue = operationNode.value()
      expect(operationNodeValue).toEqual({
        action: "receive",
        address: "payments"
      })

      const channelNode = operationNode.childrenNodes().find(node => node.kind === AsyncApiTreeNodeKinds.CHANNEL)
      expect(channelNode).toBeDefined()
      expect(channelNode!.type).toBe(TreeNodeComplexityTypes.SIMPLE)

      const channelNodeValue = channelNode!.value()
      expect(channelNodeValue).toEqual({
        title: "Payment Channel",
        summary: "Brief summary of payment channel",
        description: "Detailed description of payment processing channel"
      })
    })

    it('should handle channel with bindings', () => {
      const asyncApiSource = {
        asyncapi: "3.0.0",
        info: {
          title: "channel-with-bindings-test",
          version: "1.0.0"
        },
        channels: {
          'kafka-channel': {
            address: "kafka-topic",
            title: "Kafka Channel",
            bindings: {
              kafka: {
                topic: "user-events",
                partitions: 3,
                replicas: 2,
                bindingVersion: "0.5.0"
              }
            }
          }
        },
        operations: {
          'kafka-operation': {
            action: "send",
            channel: { $ref: "#/channels/kafka-channel" }
          }
        }
      }

      const tree = createAsyncApiTreeForTests(asyncApiSource)
      const operationNode = tree!.root!.childrenNodes()[0]

      const operationNodeValue = operationNode.value()
      expect(operationNodeValue).toEqual({
        action: "send",
        address: "kafka-topic"
      })

      const channelNode = operationNode.childrenNodes().find(node => node.kind === AsyncApiTreeNodeKinds.CHANNEL)
      expect(channelNode).toBeDefined()
      expect(channelNode!.type).toBe(TreeNodeComplexityTypes.SIMPLE)

      const channelNodeValue = channelNode!.value()
      expect(channelNodeValue).toEqual({
        title: "Kafka Channel"
      })

      // Check bindings node as child of channel
      const bindingsNode = channelNode!.childrenNodes().find(node => node.kind === AsyncApiTreeNodeKinds.BINDINGS)
      expect(bindingsNode).toBeDefined()
      expect(bindingsNode!.type).toBe(TreeNodeComplexityTypes.COMPLEX)
      expect(bindingsNode!.key).toBe('bindings')

      const bindingsNodeValue = bindingsNode!.value()
      expect(bindingsNodeValue).toEqual({
        protocol: 'kafka'
      })

      const bindingsNestedNodes = bindingsNode!.nestedNodes()
      expect(bindingsNestedNodes.length).toBe(1)

      const kafkaBindingNode = bindingsNestedNodes.find(node => node.kind === AsyncApiTreeNodeKinds.BINDING)
      expect(kafkaBindingNode).toBeDefined()
      expect(kafkaBindingNode!.key).toBe('kafka')
      expect(kafkaBindingNode!.kind).toBe(AsyncApiTreeNodeKinds.BINDING)

      const bindingPropertyNodes = kafkaBindingNode!.childrenNodes()
      expect(bindingPropertyNodes.length).toBeGreaterThan(0)

      const topicProperty = bindingPropertyNodes.find(node => node.key === 'topic')
      expect(topicProperty).toBeDefined()
      expect(topicProperty!.kind).toBe(AsyncApiTreeNodeKinds.JSO_PROPERTY)

      const partitionsProperty = bindingPropertyNodes.find(node => node.key === 'partitions')
      expect(partitionsProperty).toBeDefined()

      const replicasProperty = bindingPropertyNodes.find(node => node.key === 'replicas')
      expect(replicasProperty).toBeDefined()
    })

    it('should handle channel with multiple protocol bindings', () => {
      const asyncApiSource = {
        asyncapi: "3.0.0",
        info: {
          title: "channel-with-multiple-bindings-test",
          version: "1.0.0"
        },
        channels: {
          'multi-protocol-channel': {
            address: "multi-protocol",
            title: "Multi Protocol Channel",
            bindings: {
              kafka: {
                topic: "events",
                bindingVersion: "0.5.0"
              },
              amqp: {
                is: "routingKey",
                exchange: {
                  name: "events-exchange",
                  type: "topic"
                },
                bindingVersion: "0.3.0"
              }
            }
          }
        },
        operations: {
          'multi-protocol-operation': {
            action: "send",
            channel: { $ref: "#/channels/multi-protocol-channel" }
          }
        }
      }

      const tree = createAsyncApiTreeForTests(asyncApiSource)
      const operationNode = tree!.root!.childrenNodes()[0]

      const operationNodeValue = operationNode.value()
      expect(operationNodeValue).toEqual({
        action: "send",
        address: "multi-protocol"
      })

      const channelNode = operationNode.childrenNodes().find(node => node.kind === AsyncApiTreeNodeKinds.CHANNEL)
      expect(channelNode).toBeDefined()

      const channelNodeValue = channelNode!.value()
      expect(channelNodeValue).toEqual({
        title: "Multi Protocol Channel"
      })

      const bindingsNode = channelNode!.childrenNodes().find(node => node.kind === AsyncApiTreeNodeKinds.BINDINGS)
      expect(bindingsNode).toBeDefined()

      const bindingsNestedNodes = bindingsNode!.nestedNodes()
      expect(bindingsNestedNodes.length).toBe(2)

      const kafkaBinding = bindingsNestedNodes.find(node => node.key === 'kafka')
      expect(kafkaBinding).toBeDefined()

      const amqpBinding = bindingsNestedNodes.find(node => node.key === 'amqp')
      expect(amqpBinding).toBeDefined()
    })

    it('should handle channel with all fields combined', () => {
      const asyncApiSource = {
        asyncapi: "3.0.0",
        info: {
          title: "channel-complete-test",
          version: "1.0.0"
        },
        channels: {
          'complete-channel': {
            address: "tenant/{tenantId}/complete",
            title: "Complete Channel",
            summary: "A channel with all possible fields",
            description: "This channel demonstrates all possible channel fields in AsyncAPI 3.0",
            parameters: {
              tenantId: {
                description: "Tenant identifier",
                schema: {
                  type: "string"
                }
              }
            },
            messages: {
              CompleteMessage: {
                name: "CompleteMessage",
                title: "Complete Message"
              }
            },
            tags: [
              {
                name: "complete",
                description: "Complete functionality"
              }
            ],
            externalDocs: {
              description: "More information",
              url: "https://example.com/complete-docs"
            },
            bindings: {
              kafka: {
                topic: "complete-topic",
                partitions: 5,
                replicas: 3,
                bindingVersion: "0.5.0"
              }
            }
          }
        },
        operations: {
          'complete-operation': {
            action: "send",
            channel: { $ref: "#/channels/complete-channel" }
          }
        }
      }

      const tree = createAsyncApiTreeForTests(asyncApiSource)
      const operationNode = tree!.root!.childrenNodes()[0]

      const operationNodeValue = operationNode.value()
      expect(operationNodeValue).toEqual({
        action: "send",
        address: "tenant/{tenantId}/complete"
      })

      const channelNode = operationNode.childrenNodes().find(node => node.kind === AsyncApiTreeNodeKinds.CHANNEL)
      expect(channelNode).toBeDefined()

      const channelNodeValue = channelNode!.value()
      expect(channelNodeValue).toEqual({
        title: "Complete Channel",
        summary: "A channel with all possible fields",
        description: "This channel demonstrates all possible channel fields in AsyncAPI 3.0"
      })

      // Verify all child nodes of channel are present
      const channelChildrenNodes = channelNode!.childrenNodes()
      expect(channelChildrenNodes.length).toBe(1)

      // TODO 19.12.25 // Update tests when parameters, tags, externalDocs will be implemented

      const bindingsNode = channelChildrenNodes.find(node => node.key === 'bindings')
      expect(bindingsNode).toBeDefined()
      expect(bindingsNode!.kind).toBe(AsyncApiTreeNodeKinds.BINDINGS)
    })
  })

  describe('Channel with null address', () => {
    it('should handle channel with null address', () => {
      const asyncApiSource = {
        asyncapi: "3.0.0",
        info: {
          title: "channel-null-address-test",
          version: "1.0.0"
        },
        channels: {
          'dynamic-channel': {
            address: null,
            title: "Dynamic Channel",
            description: "Channel with dynamically determined address"
          }
        },
        operations: {
          'dynamic-operation': {
            action: "send",
            channel: { $ref: "#/channels/dynamic-channel" }
          }
        }
      }

      const tree = createAsyncApiTreeForTests(asyncApiSource)
      const operationNode = tree!.root!.childrenNodes()[0]

      const operationNodeValue = operationNode.value()
      expect(operationNodeValue).toEqual({
        action: "send",
        address: 'UNKNOWN ADDRESS (NULL)',
      })

      const channelNode = operationNode.childrenNodes().find(node => node.kind === AsyncApiTreeNodeKinds.CHANNEL)
      expect(channelNode).toBeDefined()

      const channelNodeValue = channelNode!.value()
      expect(channelNodeValue).toEqual({
        title: "Dynamic Channel",
        description: "Channel with dynamically determined address",
        address: undefined, // Channel address is lifted to operation
      })
    })
  })

  describe('Channels in different operation actions', () => {
    it('should handle channel in receive operation', () => {
      const asyncApiSource = {
        asyncapi: "3.0.0",
        info: {
          title: "channel-receive-operation-test",
          version: "1.0.0"
        },
        channels: {
          'receive-channel': {
            address: "receive/events",
            title: "Receive Channel",
            description: "Channel for receiving events"
          }
        },
        operations: {
          'receive-operation': {
            action: "receive",
            channel: { $ref: "#/channels/receive-channel" }
          }
        }
      }

      const tree = createAsyncApiTreeForTests(asyncApiSource)
      const operationNode = tree!.root!.childrenNodes()[0]

      const operationNodeValue = operationNode.value()
      expect(operationNodeValue).toEqual({
        action: "receive",
        address: "receive/events"
      })

      const channelNode = operationNode.childrenNodes().find(node => node.kind === AsyncApiTreeNodeKinds.CHANNEL)
      expect(channelNode).toBeDefined()

      const channelNodeValue = channelNode!.value()
      expect(channelNodeValue).toEqual({
        title: "Receive Channel",
        description: "Channel for receiving events"
      })
    })

    it('should handle same channel in multiple operations', () => {
      const asyncApiSource = {
        asyncapi: "3.0.0",
        info: {
          title: "channel-multiple-operations-test",
          version: "1.0.0"
        },
        channels: {
          'shared-channel': {
            address: "shared/channel",
            title: "Shared Channel",
            description: "Channel used by multiple operations"
          }
        },
        operations: {
          'send-operation': {
            action: "send",
            channel: { $ref: "#/channels/shared-channel" }
          },
          'receive-operation': {
            action: "receive",
            channel: { $ref: "#/channels/shared-channel" }
          }
        }
      }

      const tree = createAsyncApiTreeForTests(asyncApiSource)
      const root = tree!.root!
      const operations = root.childrenNodes()
      expect(operations.length).toBe(2)

      const sendOperation = operations[0]
      const sendOperationValue = sendOperation.value()
      expect(sendOperationValue).toEqual({
        action: "send",
        address: "shared/channel"
      })

      const sendChannelNode = sendOperation.childrenNodes().find(node => node.kind === AsyncApiTreeNodeKinds.CHANNEL)
      expect(sendChannelNode).toBeDefined()
      expect(sendChannelNode!.value()).toEqual({
        title: "Shared Channel",
        description: "Channel used by multiple operations"
      })

      const receiveOperation = operations[1]
      const receiveOperationValue = receiveOperation.value()
      expect(receiveOperationValue).toEqual({
        action: "receive",
        address: "shared/channel"
      })

      const receiveChannelNode = receiveOperation.childrenNodes().find(node => node.kind === AsyncApiTreeNodeKinds.CHANNEL)
      expect(receiveChannelNode).toBeDefined()
      expect(receiveChannelNode!.value()).toEqual({
        title: "Shared Channel",
        description: "Channel used by multiple operations"
      })
    })
  })

  describe('Channel with messages integration', () => {
    it('should handle channel with inline message', () => {
      const asyncApiSource = {
        asyncapi: "3.0.0",
        info: {
          title: "channel-with-inline-message-test",
          version: "1.0.0"
        },
        channels: {
          'message-channel': {
            address: "messages",
            title: "Message Channel",
            messages: {
              InlineMessage: {
                name: "InlineMessage",
                title: "Inline Message",
                description: "A message defined inline in the channel"
              }
            }
          }
        },
        operations: {
          'message-operation': {
            action: "send",
            channel: { $ref: "#/channels/message-channel" },
            messages: [
              { $ref: "#/channels/message-channel/messages/InlineMessage" }
            ]
          }
        }
      }

      const tree = createAsyncApiTreeForTests(asyncApiSource)
      const operationNode = tree!.root!.childrenNodes()[0]

      const operationNodeValue = operationNode.value()
      expect(operationNodeValue).toEqual({
        action: "send",
        address: "messages"
      })

      const channelNode = operationNode.childrenNodes().find(node => node.kind === AsyncApiTreeNodeKinds.CHANNEL)
      expect(channelNode).toBeDefined()
      expect(channelNode!.type).toBe(TreeNodeComplexityTypes.SIMPLE)
      expect(channelNode!.childrenNodes().length).toBe(0)

      const channelNodeValue = channelNode!.value()
      expect(channelNodeValue).toEqual({
        title: "Message Channel"
      })

      const messagesNode = operationNode.childrenNodes().find(node => node.key === 'messages')
      expect(messagesNode).toBeDefined()
      expect(messagesNode!.kind).toBe(AsyncApiTreeNodeKinds.MESSAGES)
    })

    it('should handle channel referencing component messages', () => {
      const asyncApiSource = {
        asyncapi: "3.0.0",
        info: {
          title: "channel-with-component-message-test",
          version: "1.0.0"
        },
        channels: {
          'component-message-channel': {
            address: "component/messages",
            title: "Component Message Channel",
            messages: {
              ComponentMessage: { $ref: "#/components/messages/ComponentMessage" }
            }
          }
        },
        components: {
          messages: {
            ComponentMessage: {
              name: "ComponentMessage",
              title: "Component Message",
              description: "A message defined in components"
            }
          }
        },
        operations: {
          'component-message-operation': {
            action: "send",
            channel: { $ref: "#/channels/component-message-channel" },
            messages: [
              { $ref: "#/channels/component-message-channel/messages/ComponentMessage" }
            ]
          }
        }
      }

      const tree = createAsyncApiTreeForTests(asyncApiSource)
      const operationNode = tree!.root!.childrenNodes()[0]

      const operationNodeValue = operationNode.value()
      expect(operationNodeValue).toEqual({
        action: "send",
        address: "component/messages"
      })

      const channelNode = operationNode.childrenNodes().find(node => node.kind === AsyncApiTreeNodeKinds.CHANNEL)
      expect(channelNode).toBeDefined()
      expect(channelNode!.type).toBe(TreeNodeComplexityTypes.SIMPLE)
      expect(channelNode!.childrenNodes().length).toBe(0)

      const channelNodeValue = channelNode!.value()
      expect(channelNodeValue).toEqual({
        title: "Component Message Channel",
        address: undefined, // Channel address is lifted to operation
      })

      const messagesNode = operationNode.childrenNodes().find(node => node.key === 'messages')
      expect(messagesNode).toBeDefined()
      expect(messagesNode!.kind).toBe(AsyncApiTreeNodeKinds.MESSAGES)

      const messagesNodeValue = messagesNode!.value()
      expect(messagesNodeValue).toEqual({
        internalTitle: "ComponentMessage",
        title: "Component Message",
        description: "A message defined in components"
      })
    })
  })

  describe('Edge cases and special scenarios', () => {
    it('should handle channel with only description (no title)', () => {
      const asyncApiSource = {
        asyncapi: "3.0.0",
        info: {
          title: "channel-only-description-test",
          version: "1.0.0"
        },
        channels: {
          'description-only-channel': {
            address: "description/only",
            description: "This channel has only description field"
          }
        },
        operations: {
          'description-only-operation': {
            action: "send",
            channel: { $ref: "#/channels/description-only-channel" }
          }
        }
      }

      const tree = createAsyncApiTreeForTests(asyncApiSource)
      const operationNode = tree!.root!.childrenNodes()[0]

      const operationNodeValue = operationNode.value()
      expect(operationNodeValue).toEqual({
        action: "send",
        address: "description/only"
      })

      const channelNode = operationNode.childrenNodes().find(node => node.kind === AsyncApiTreeNodeKinds.CHANNEL)
      expect(channelNode).toBeDefined()

      const channelNodeValue = channelNode!.value()
      expect(channelNodeValue).toEqual({
        description: "This channel has only description field"
      })
    })
  })
})
