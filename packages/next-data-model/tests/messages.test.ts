import { TreeNodeComplexityTypes } from "../src/model/abstract/tree/tree-node.interface"
import { AsyncApiTreeNodeKinds } from "../src/model/async-api/types/node-kind"
import { createAsyncApiTreeForTests } from "./helpers/create-async-api-tree-for-tests"
import { simplifyConsole } from "./helpers/simplify-console"

describe('Cases with operation messages', () => {
  simplifyConsole()

  describe('Single message scenarios', () => {
    it('should handle operation with single message (minimal fields)', () => {
      const asyncApiSource = {
        asyncapi: "3.0.0",
        info: {
          title: "minimal-message-test",
          version: "1.0.0"
        },
        channels: {
          'test-channel': {
            address: "test-channel",
            messages: {
              TestMessage: { $ref: "#/components/messages/TestMessage" }
            }
          }
        },
        components: {
          messages: {
            TestMessage: {
              name: "TestMessage"
            }
          }
        },
        operations: {
          'test-operation': {
            action: "send",
            channel: { $ref: "#/channels/test-channel" },
            messages: [
              { $ref: "#/channels/test-channel/messages/TestMessage" }
            ]
          }
        }
      }

      const tree = createAsyncApiTreeForTests(asyncApiSource)
      expect(tree).toBeDefined()
      const messageNode = tree?.root ?? null
      expect(messageNode).not.toBeNull()

      const messageSectionSelectorNode = messageNode!.childrenNodes().find(node => node.kind === AsyncApiTreeNodeKinds.MESSAGE_SECTION_SELECTOR) ?? null
      expect(messageSectionSelectorNode).not.toBeNull()
      const sectionNodes = messageSectionSelectorNode!.nestedNodes()
      expect(sectionNodes.length).toBe(3)
      expect(messageSectionSelectorNode!.childrenNodes().length).toEqual(0) // no children

      
    })

    it('should handle message with title and description', () => {
      const asyncApiSource = {
        asyncapi: "3.0.0",
        info: {
          title: "message-with-title-description-test",
          version: "1.0.0"
        },
        channels: {
          'test-channel': {
            address: "test-channel",
            messages: {
              UserCreatedMessage: { $ref: "#/components/messages/UserCreatedMessage" }
            }
          }
        },
        components: {
          messages: {
            UserCreatedMessage: {
              name: "UserCreatedMessage",
              title: "User Created Event",
              description: "Event triggered when a new user is created"
            }
          }
        },
        operations: {
          'user-created-operation': {
            action: "send",
            channel: { $ref: "#/channels/test-channel" },
            messages: [
              { $ref: "#/channels/test-channel/messages/UserCreatedMessage" }
            ]
          }
        }
      }

      const tree = createAsyncApiTreeForTests(asyncApiSource)
      const operationNode = tree!.root!.childrenNodes()[0]
      const messagesNode = operationNode.childrenNodes().find(node => node.key === 'messages')

      const messagesNodeValue = messagesNode!.value()
      expect(messagesNodeValue).toEqual({
        internalTitle: "UserCreatedMessage",
        title: "User Created Event",
        description: "Event triggered when a new user is created"
      })
    })

    it('should handle message with summary field', () => {
      const asyncApiSource = {
        asyncapi: "3.0.0",
        info: {
          title: "message-with-summary-test",
          version: "1.0.0"
        },
        channels: {
          'test-channel': {
            address: "test-channel",
            messages: {
              OrderMessage: { $ref: "#/components/messages/OrderMessage" }
            }
          }
        },
        components: {
          messages: {
            OrderMessage: {
              name: "OrderMessage",
              title: "Order Event",
              summary: "Summary of order event",
              description: "Detailed description of order event"
            }
          }
        },
        operations: {
          'order-operation': {
            action: "send",
            channel: { $ref: "#/channels/test-channel" },
            messages: [
              { $ref: "#/channels/test-channel/messages/OrderMessage" }
            ]
          }
        }
      }

      const tree = createAsyncApiTreeForTests(asyncApiSource)
      const operationNode = tree!.root!.childrenNodes()[0]
      const messagesNode = operationNode.childrenNodes().find(node => node.key === 'messages')

      const messagesNodeValue = messagesNode!.value()
      expect(messagesNodeValue).toEqual({
        internalTitle: "OrderMessage",
        title: "Order Event",
        summary: "Summary of order event",
        description: "Detailed description of order event"
      })
    })

    it('should handle message with headers', () => {
      const asyncApiSource = {
        asyncapi: "3.0.0",
        info: {
          title: "message-with-headers-test",
          version: "1.0.0"
        },
        channels: {
          'test-channel': {
            address: "test-channel",
            messages: {
              MessageWithHeaders: { $ref: "#/components/messages/MessageWithHeaders" }
            }
          }
        },
        components: {
          schemas: {
            MessageHeaders: {
              type: "object",
              properties: {
                'X-Correlation-Id': {
                  type: "string",
                  description: "Correlation identifier"
                },
                'X-Request-Id': {
                  type: "string",
                  description: "Request identifier"
                }
              }
            }
          },
          messages: {
            MessageWithHeaders: {
              name: "MessageWithHeaders",
              title: "Message With Headers",
              headers: { $ref: "#/components/schemas/MessageHeaders" }
            }
          }
        },
        operations: {
          'headers-operation': {
            action: "send",
            channel: { $ref: "#/channels/test-channel" },
            messages: [
              { $ref: "#/channels/test-channel/messages/MessageWithHeaders" }
            ]
          }
        }
      }

      const tree = createAsyncApiTreeForTests(asyncApiSource)
      const operationNode = tree!.root!.childrenNodes()[0]
      const messagesNode = operationNode.childrenNodes().find(node => node.kind === AsyncApiTreeNodeKinds.MESSAGES)

      expect(messagesNode).toBeDefined()
      const messagesNodeValue = messagesNode!.value()
      expect(messagesNodeValue).toEqual({
        internalTitle: "MessageWithHeaders",
        title: "Message With Headers"
      })

      // Check that headers are present in nested nodes
      const messagesNestedNodes = messagesNode!.nestedNodes()
      expect(messagesNestedNodes.length).toBe(1)

      const messageNode = messagesNode?.findNestedNode(`${operationNode.id}/messages/0`)
      expect(messageNode).toBeDefined()
      expect(messageNode!.kind).toBe(AsyncApiTreeNodeKinds.MESSAGE)

      const messageChildrenNodes = messageNode!.childrenNodes()
      expect(messageChildrenNodes.length).toBe(1)

      const headersNode = messageChildrenNodes.find(node => node.kind === AsyncApiTreeNodeKinds.MESSAGE_HEADERS)
      expect(headersNode).toBeDefined()
      expect(headersNode!.type).toBe(TreeNodeComplexityTypes.SIMPLE)
      expect(headersNode!.key).toBe('headers')
      expect(headersNode!.kind).toBe(AsyncApiTreeNodeKinds.MESSAGE_HEADERS)

      const headersNodeValue = headersNode!.value()
      expect(headersNodeValue)
        .toEqual({
          schema: {
            type: "object",
            properties: {
              'X-Correlation-Id': {
                type: "string",
                description: "Correlation identifier"
              },
              'X-Request-Id': {
                type: "string",
                description: "Request identifier"
              }
            }
          },
          schemaFormat: null,
        })
    })

    it('should handle message with payload', () => {
      const asyncApiSource = {
        asyncapi: "3.0.0",
        info: {
          title: "message-with-payload-test",
          version: "1.0.0"
        },
        channels: {
          'test-channel': {
            address: "test-channel",
            messages: {
              MessageWithPayload: { $ref: "#/components/messages/MessageWithPayload" }
            }
          }
        },
        components: {
          schemas: {
            UserPayload: {
              type: "object",
              properties: {
                userId: {
                  type: "string"
                },
                userName: {
                  type: "string"
                },
                email: {
                  type: "string"
                }
              },
              required: ["userId", "userName"]
            }
          },
          messages: {
            MessageWithPayload: {
              name: "MessageWithPayload",
              title: "Message With Payload",
              payload: {
                schemaFormat: "application/vnd.aai.asyncapi+json;version=3.0.0",
                schema: { $ref: "#/components/schemas/UserPayload" }
              }
            }
          }
        },
        operations: {
          'payload-operation': {
            action: "send",
            channel: { $ref: "#/channels/test-channel" },
            messages: [
              { $ref: "#/channels/test-channel/messages/MessageWithPayload" }
            ]
          }
        }
      }

      const tree = createAsyncApiTreeForTests(asyncApiSource)
      const operationNode = tree!.root!.childrenNodes()[0]
      const messagesNode = operationNode.childrenNodes().find(node => node.key === 'messages')

      expect(messagesNode).toBeDefined()
      const messagesNodeValue = messagesNode!.value()
      expect(messagesNodeValue).toEqual({
        internalTitle: "MessageWithPayload",
        title: "Message With Payload"
      })

      const messagesNestedNodes = messagesNode!.nestedNodes()
      expect(messagesNestedNodes.length).toBe(1)

      const messageNode = messagesNode?.findNestedNode(`${operationNode.id}/messages/0`)
      expect(messageNode).toBeDefined()
      expect(messageNode!.kind).toBe(AsyncApiTreeNodeKinds.MESSAGE)

      const messageChildrenNodes = messageNode!.childrenNodes()
      expect(messageChildrenNodes.length).toBe(1)

      const payloadNode = messageChildrenNodes.find(node => node.kind === AsyncApiTreeNodeKinds.MESSAGE_PAYLOAD)
      expect(payloadNode).toBeDefined()
      expect(payloadNode!.type).toBe(TreeNodeComplexityTypes.SIMPLE)
      expect(payloadNode!.key).toBe('payload')
      expect(payloadNode!.kind).toBe(AsyncApiTreeNodeKinds.MESSAGE_PAYLOAD)

      const payloadNodeValue = payloadNode!.value()
      // TODO 19.12.25 // Now it fails because $ref to schema is not resolved
      expect(payloadNodeValue)
        .toEqual({
          schemaFormat: "application/vnd.aai.asyncapi+json;version=3.0.0",
          schema: {
            type: "object",
            required: ["userId", "userName"],
            properties: {
              userId: {
                type: "string"
              },
              userName: {
                type: "string"
              },
              email: {
                type: "string"
              }
            }
          }
        })
    })

    it('should handle message with bindings', () => {
      const asyncApiSource = {
        asyncapi: "3.0.0",
        info: {
          title: "message-with-bindings-test",
          version: "1.0.0"
        },
        channels: {
          'test-channel': {
            address: "test-channel",
            messages: {
              MessageWithBindings: { $ref: "#/components/messages/MessageWithBindings" }
            }
          }
        },
        components: {
          messages: {
            MessageWithBindings: {
              name: "MessageWithBindings",
              title: "Message With Bindings",
              bindings: {
                kafka: {
                  key: {
                    type: "string"
                  },
                  schemaIdLocation: "payload",
                  schemaIdPayloadEncoding: 'apicurio-new',
                  schemaLookupStrategy: 'TopicIdStrategy',
                  bindingVersion: "0.5.0"
                }
              }
            }
          }
        },
        operations: {
          'bindings-operation': {
            action: "send",
            channel: { $ref: "#/channels/test-channel" },
            messages: [
              { $ref: "#/channels/test-channel/messages/MessageWithBindings" }
            ]
          }
        }
      }

      const tree = createAsyncApiTreeForTests(asyncApiSource)
      const operationNode = tree!.root!.childrenNodes()[0]
      const messagesNode = operationNode.childrenNodes().find(node => node.key === 'messages')

      expect(messagesNode).toBeDefined()
      const messagesNodeValue = messagesNode!.value()
      expect(messagesNodeValue).toEqual({
        internalTitle: "MessageWithBindings",
        title: "Message With Bindings"
      })

      const messagesNestedNodes = messagesNode!.nestedNodes()
      expect(messagesNestedNodes.length).toBe(1)

      const messageNode = messagesNode?.findNestedNode(`${operationNode.id}/messages/0`)
      expect(messageNode).toBeDefined()
      expect(messageNode!.kind).toBe(AsyncApiTreeNodeKinds.MESSAGE)

      const messageChildrenNodes = messageNode!.childrenNodes()
      expect(messageChildrenNodes.length).toBe(1)

      const bindingsNode = messageChildrenNodes.find(node => node.kind === AsyncApiTreeNodeKinds.BINDINGS)
      expect(bindingsNode).toBeDefined()
      expect(bindingsNode!.type).toBe(TreeNodeComplexityTypes.COMPLEX)
      expect(bindingsNode!.key).toBe('bindings')
      expect(bindingsNode!.kind).toBe(AsyncApiTreeNodeKinds.BINDINGS)

      const bindingsNodeValue = bindingsNode!.value()
      expect(bindingsNodeValue)
        .toEqual({
          protocol: 'kafka',
          version: '0.5.0',
          binding: {
            key: {
              type: "string"
            },
            schemaIdLocation: "payload",
            schemaIdPayloadEncoding: 'apicurio-new',
            schemaLookupStrategy: 'TopicIdStrategy',
          },
        })

      const bindingsNestedNodes = bindingsNode!.nestedNodes()
      expect(bindingsNestedNodes.length).toBe(1)

      const bindingNode = bindingsNestedNodes.find(node => node.kind === AsyncApiTreeNodeKinds.BINDING)
      expect(bindingNode).toBeDefined()
      expect(bindingNode!.type).toBe(TreeNodeComplexityTypes.SIMPLE)
      expect(bindingNode!.key).toBe('kafka')
      expect(bindingNode!.kind).toBe(AsyncApiTreeNodeKinds.BINDING)

      const bindingPropertyNodes = bindingNode!.childrenNodes()
      expect(bindingPropertyNodes.length).toBe(0)
    })

    it('should handle message with all fields combined', () => {
      const asyncApiSource = {
        asyncapi: "3.0.0",
        info: {
          title: "message-complete-test",
          version: "1.0.0"
        },
        channels: {
          'test-channel': {
            address: "test-channel",
            messages: {
              CompleteMessage: { $ref: "#/components/messages/CompleteMessage" }
            }
          }
        },
        components: {
          schemas: {
            CompleteHeaders: {
              type: "object",
              properties: {
                'X-Trace-Id': {
                  type: "string"
                }
              }
            },
            CompletePayload: {
              type: "object",
              properties: {
                eventId: {
                  type: "string"
                },
                eventType: {
                  type: "string"
                },
                timestamp: {
                  type: "string",
                  format: "date-time"
                }
              }
            }
          },
          messages: {
            CompleteMessage: {
              name: "CompleteMessage",
              title: "Complete Message",
              summary: "A complete message with all fields",
              description: "This message demonstrates all possible fields",
              headers: { $ref: "#/components/schemas/CompleteHeaders" },
              payload: {
                schemaFormat: "application/vnd.aai.asyncapi+json;version=3.0.0",
                schema: { $ref: "#/components/schemas/CompletePayload" }
              },
              bindings: {
                kafka: {
                  bindingVersion: "0.5.0"
                }
              }
            }
          }
        },
        operations: {
          'complete-operation': {
            action: "send",
            channel: { $ref: "#/channels/test-channel" },
            messages: [
              { $ref: "#/channels/test-channel/messages/CompleteMessage" }
            ]
          }
        }
      }

      const tree = createAsyncApiTreeForTests(asyncApiSource)
      const operationNode = tree!.root!.childrenNodes()[0]
      const messagesNode = operationNode.childrenNodes().find(node => node.key === 'messages')

      expect(messagesNode).toBeDefined()
      const messagesNodeValue = messagesNode!.value()
      expect(messagesNodeValue).toEqual({
        internalTitle: "CompleteMessage",
        title: "Complete Message",
        summary: "A complete message with all fields",
        description: "This message demonstrates all possible fields"
      })

      const messagesNestedNodes = messagesNode!.nestedNodes()
      expect(messagesNestedNodes.length).toBe(1)

      const messageNode = messagesNestedNodes.find(node => node.kind === AsyncApiTreeNodeKinds.MESSAGE)
      expect(messageNode).toBeDefined()
      expect(messageNode!.kind).toBe(AsyncApiTreeNodeKinds.MESSAGE)

      const messageChildrenNodes = messageNode!.childrenNodes()
      expect(messageChildrenNodes.length).toBe(3)

      const headersNode = messageChildrenNodes.find(node => node.key === 'headers' && node.kind === AsyncApiTreeNodeKinds.MESSAGE_HEADERS)
      expect(headersNode).toBeDefined()
      expect(headersNode!.type).toBe(TreeNodeComplexityTypes.SIMPLE)
      expect(headersNode!.kind).toBe(AsyncApiTreeNodeKinds.MESSAGE_HEADERS)
      expect(headersNode!.value()).toEqual({
        schema: {
          type: "object",
          properties: {
            'X-Trace-Id': {
              type: "string"
            }
          }
        },
        schemaFormat: null,
      })

      const payloadNode = messageChildrenNodes.find(node => node.key === 'payload' && node.kind === AsyncApiTreeNodeKinds.MESSAGE_PAYLOAD)
      expect(payloadNode).toBeDefined()
      expect(payloadNode!.type).toBe(TreeNodeComplexityTypes.SIMPLE)
      expect(payloadNode!.kind).toBe(AsyncApiTreeNodeKinds.MESSAGE_PAYLOAD)
      expect(payloadNode!.value()).toEqual({
        schemaFormat: 'application/vnd.aai.asyncapi+json;version=3.0.0',
        schema: {
          type: "object",
          properties: {
            eventId: {
              type: "string"
            },
            eventType: {
              type: "string"
            },
            timestamp: {
              type: "string",
              format: "date-time"
            }
          }
        },
      })

      const bindingsNode = messageChildrenNodes.find(node => node.kind === AsyncApiTreeNodeKinds.BINDINGS)
      expect(bindingsNode).toBeDefined()
      expect(bindingsNode!.type).toBe(TreeNodeComplexityTypes.COMPLEX)
      expect(bindingsNode!.key).toBe('bindings')
      expect(bindingsNode!.kind).toBe(AsyncApiTreeNodeKinds.BINDINGS)
      expect(bindingsNode!.value()).toEqual({
        protocol: 'kafka',
        version: '0.5.0',
        binding: {},
      })

      const bindingsNestedNodes = bindingsNode!.nestedNodes()
      expect(bindingsNestedNodes.length).toBe(1)

      const bindingNode = bindingsNestedNodes.find(node => node.kind === AsyncApiTreeNodeKinds.BINDING)
      expect(bindingNode).toBeDefined()
      expect(bindingNode!.type).toBe(TreeNodeComplexityTypes.SIMPLE)
      expect(bindingNode!.key).toBe('kafka')
      expect(bindingNode!.kind).toBe(AsyncApiTreeNodeKinds.BINDING)

      const bindingPropertyNodes = bindingNode!.childrenNodes()
      expect(bindingPropertyNodes.length).toBe(0)
    })
  })

  describe('Multiple messages scenarios', () => {
    it('should handle operation with two messages', () => {
      const asyncApiSource = {
        asyncapi: "3.0.0",
        info: {
          title: "two-messages-test",
          version: "1.0.0"
        },
        channels: {
          'test-channel': {
            address: "test-channel",
            messages: {
              FirstMessage: { $ref: "#/components/messages/FirstMessage" },
              SecondMessage: { $ref: "#/components/messages/SecondMessage" }
            }
          }
        },
        components: {
          messages: {
            FirstMessage: {
              name: "FirstMessage",
              title: "First Message"
            },
            SecondMessage: {
              name: "SecondMessage",
              title: "Second Message"
            }
          }
        },
        operations: {
          'multi-message-operation': {
            action: "send",
            channel: { $ref: "#/channels/test-channel" },
            messages: [
              { $ref: "#/channels/test-channel/messages/FirstMessage" },
              { $ref: "#/channels/test-channel/messages/SecondMessage" }
            ]
          }
        }
      }

      const tree = createAsyncApiTreeForTests(asyncApiSource)
      const operationNode = tree!.root!.childrenNodes()[0]
      const messagesNode = operationNode.childrenNodes().find(node => node.key === 'messages')

      expect(messagesNode).toBeDefined()
      expect(messagesNode!.type).toBe(TreeNodeComplexityTypes.COMPLEX)

      const messagesNestedNodes = messagesNode!.nestedNodes()
      expect(messagesNestedNodes.length).toBe(2)

      // First message should be selected by default
      const messagesNodeValue = messagesNode!.value()
      const expectedFirstOptionValue = {
        internalTitle: "FirstMessage",
        title: "First Message"
      }
      expect(messagesNodeValue).toEqual(expectedFirstOptionValue)
      const messagesNodeValueOption1 = messagesNode!.value(`${operationNode!.id}/messages/0`)
      expect(messagesNodeValueOption1).toEqual(expectedFirstOptionValue)
      const messagesNodeValueOption2 = messagesNode!.value(`${operationNode!.id}/messages/1`)
      expect(messagesNodeValueOption2).toEqual({
        internalTitle: "SecondMessage",
        title: "Second Message"
      })
    })

    it('should handle multiple messages with different field combinations', () => {
      const asyncApiSource = {
        asyncapi: "3.0.0",
        info: {
          title: "mixed-messages-test",
          version: "1.0.0"
        },
        channels: {
          "test-channel": {
            address: "test-channel",
            messages: {
              MinimalMessage: { $ref: "#/components/messages/MinimalMessage" },
              MessageWithPayload: { $ref: "#/components/messages/MessageWithPayload" },
              CompleteMessage: { $ref: "#/components/messages/CompleteMessage" }
            }
          }
        },
        components: {
          schemas: {
            SimpleSchema: {
              type: "object",
              properties: {
                id: {
                  type: "string"
                }
              }
            },
            ComplexHeaders: {
              type: "object",
              properties: {
                Authorization: {
                  type: "string"
                }
              }
            }
          },
          messages: {
            MinimalMessage: {
              name: "MinimalMessage",
              title: "Minimal Message"
            },
            MessageWithPayload: {
              name: "MessageWithPayload",
              title: "Message With Payload",
              description: "Has payload only",
              payload: {
                schemaFormat: "application/vnd.aai.asyncapi+json;version=3.0.0",
                schema: { $ref: "#/components/schemas/SimpleSchema" }
              }
            },
            CompleteMessage: {
              name: "CompleteMessage",
              title: "Complete Message",
              summary: "Complete message summary",
              description: "Has all fields",
              headers: { $ref: "#/components/schemas/ComplexHeaders" },
              payload: {
                schemaFormat: "application/vnd.aai.asyncapi+json;version=3.0.0",
                schema: { $ref: "#/components/schemas/SimpleSchema" }
              },
              bindings: {
                kafka: {
                  bindingVersion: "0.5.0"
                }
              }
            }
          }
        },
        operations: {
          "mixed-operation": {
            action: "send",
            channel: { $ref: "#/channels/test-channel" },
            messages: [
              { $ref: "#/channels/test-channel/messages/MinimalMessage" },
              { $ref: "#/channels/test-channel/messages/MessageWithPayload" },
              { $ref: "#/channels/test-channel/messages/CompleteMessage" }
            ]
          }
        }
      }

      const tree = createAsyncApiTreeForTests(asyncApiSource)
      const operationNode = tree!.root!.childrenNodes()[0]
      const messagesNode = operationNode.childrenNodes().find(node => node.key === 'messages')

      expect(messagesNode).toBeDefined()
      const messagesNestedNodes = messagesNode!.nestedNodes()
      expect(messagesNestedNodes.length).toBe(3)

      // First message (minimal) should be selected
      const messagesNodeValue = messagesNode!.value()
      expect(messagesNodeValue).toEqual({
        internalTitle: "MinimalMessage",
        title: "Minimal Message"
      })
    })
  })

  describe('Edge cases', () => {
    it('should handle operation with empty messages array', () => {
      const asyncApiSource = {
        asyncapi: "3.0.0",
        info: {
          title: "empty-messages-test",
          version: "1.0.0"
        },
        channels: {
          "test-channel": {
            address: "test-channel"
          }
        },
        operations: {
          "empty-messages-operation": {
            action: "send",
            channel: { $ref: "#/channels/test-channel" },
            messages: []
          }
        }
      }

      const tree = createAsyncApiTreeForTests(asyncApiSource)
      const operationNode = tree!.root!.childrenNodes()[0]
      const messagesNode = operationNode.childrenNodes().find(node => node.key === 'messages')

      // With empty messages array, there should be no messages node or it should be handled gracefully
      const messagesNestedNodes = messagesNode!.nestedNodes()
      expect(messagesNestedNodes.length).toBe(0)
      // TODO 09.12.25 // We should skip node with kind = "messages" if there are no any message
    })
  })

  describe('Messages in different operation actions', () => {
    it('should handle messages in receive operation', () => {
      const asyncApiSource = {
        asyncapi: "3.0.0",
        info: {
          title: "receive-operation-test",
          version: "1.0.0"
        },
        channels: {
          "test-channel": {
            address: "test-channel",
            messages: {
              ReceiveMessage: { $ref: "#/components/messages/ReceiveMessage" }
            }
          }
        },
        components: {
          messages: {
            ReceiveMessage: {
              name: "ReceiveMessage",
              title: "Receive Message"
            }
          }
        },
        operations: {
          "receive-operation": {
            action: "receive",
            channel: { $ref: "#/channels/test-channel" },
            messages: [
              { $ref: "#/channels/test-channel/messages/ReceiveMessage" }
            ]
          }
        }
      }

      const tree = createAsyncApiTreeForTests(asyncApiSource)
      const operationNode = tree!.root!.childrenNodes()[0]
      const operationNodeValue = operationNode.value()
      expect(operationNodeValue).toEqual({
        action: "receive",
        address: "test-channel",
      })

      const messagesNode = operationNode.childrenNodes().find(node => node.key === 'messages')
      expect(messagesNode).toBeDefined()

      const messagesNodeValue = messagesNode!.value()
      expect(messagesNodeValue).toEqual({
        internalTitle: "ReceiveMessage",
        title: "Receive Message"
      })
    })
  })
})
