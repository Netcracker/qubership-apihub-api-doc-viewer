import { TreeNodeComplexityTypes } from "../src/model/abstract/tree/tree-node.interface"
import { AsyncApiTreeNodeKinds } from "../src/model/async-api/types/node-kind"
import { createAsyncApiTreeForTests } from "./helpers/create-async-api-tree-for-tests"
import { simplifyConsole } from "./helpers/simplify-console"

describe('Bindings', () => {
  simplifyConsole()

  describe('Operation bindings', () => {
    it('should handle operation with single binding', () => {
      const asyncApiSource = {
        asyncapi: "3.0.0",
        info: {
          title: "operation-single-binding-test",
          version: "1.0.0"
        },
        channels: {
          'test-channel': {
            address: "test-channel"
          }
        },
        operations: {
          'test-operation': {
            action: "send",
            channel: { $ref: "#/channels/test-channel" },
            bindings: {
              kafka: {
                groupId: {
                  type: "string",
                  enum: ["consumer-group-1"]
                },
                clientId: {
                  type: "string",
                  enum: ["client-1"]
                },
                bindingVersion: "0.5.0"
              }
            }
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

      const bindingsNode = operationNode.childrenNodes().find(node => node.kind === AsyncApiTreeNodeKinds.BINDINGS)
      expect(bindingsNode).toBeDefined()
      expect(bindingsNode!.type).toBe(TreeNodeComplexityTypes.COMPLEX)
      expect(bindingsNode!.key).toBe('bindings')
      expect(bindingsNode!.kind).toBe(AsyncApiTreeNodeKinds.BINDINGS)

      const bindingsNodeValue = bindingsNode!.value()
      expect(bindingsNodeValue).toEqual({
        binding: {
          groupId: {
            type: "string",
            enum: ["consumer-group-1"]
          },
          clientId: {
            type: "string",
            enum: ["client-1"]
          },
        },
        version: '0.5.0',
        protocol: 'kafka',
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

    it('should handle operation with two bindings', () => {
      const asyncApiSource = {
        asyncapi: "3.0.0",
        info: {
          title: "operation-two-bindings-test",
          version: "1.0.0"
        },
        channels: {
          'test-channel': {
            address: "test-channel"
          }
        },
        operations: {
          'test-operation': {
            action: "send",
            channel: { $ref: "#/channels/test-channel" },
            bindings: {
              kafka: {
                groupId: {
                  type: "string",
                  enum: ["consumer-group-1"]
                },
                bindingVersion: "0.5.0"
              },
              amqp: {
                expiration: 100000,
                userId: "guest",
                cc: ["user.logs"],
                priority: 10,
                deliveryMode: 2,
                mandatory: false,
                bindingVersion: "0.3.0"
              }
            }
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

      const bindingsNode = operationNode.childrenNodes().find(node => node.kind === AsyncApiTreeNodeKinds.BINDINGS)
      expect(bindingsNode).toBeDefined()
      expect(bindingsNode!.type).toBe(TreeNodeComplexityTypes.COMPLEX)
      expect(bindingsNode!.key).toBe('bindings')
      expect(bindingsNode!.kind).toBe(AsyncApiTreeNodeKinds.BINDINGS)

      // Check bindings node value (proxy mode - default to first binding)
      const bindingsNodeValue = bindingsNode!.value()
      expect(bindingsNodeValue).toEqual({
        protocol: 'kafka',
        version: '0.5.0',
        binding: {
          groupId: {
            type: "string",
            enum: ["consumer-group-1"]
          },
        },
      })

      const bindingsNestedNodes = bindingsNode!.nestedNodes()
      expect(bindingsNestedNodes.length).toBe(2)

      // Check first binding (kafka)
      const kafkaBindingNode = bindingsNestedNodes.find(node => node.key === 'kafka')
      expect(kafkaBindingNode).toBeDefined()
      expect(kafkaBindingNode!.type).toBe(TreeNodeComplexityTypes.SIMPLE)
      expect(kafkaBindingNode!.key).toBe('kafka')
      expect(kafkaBindingNode!.kind).toBe(AsyncApiTreeNodeKinds.BINDING)
      expect(kafkaBindingNode!.value()).toEqual({
        protocol: 'kafka',
        version: '0.5.0',
        binding: {
          groupId: {
            type: "string",
            enum: ["consumer-group-1"]
          },
        },
      })

      const kafkaBindingPropertyNodes = kafkaBindingNode!.childrenNodes()
      expect(kafkaBindingPropertyNodes.length).toBe(0)

      // Check second binding (amqp)
      const amqpBindingNode = bindingsNestedNodes.find(node => node.key === 'amqp')
      expect(amqpBindingNode).toBeDefined()
      expect(amqpBindingNode!.type).toBe(TreeNodeComplexityTypes.SIMPLE)
      expect(amqpBindingNode!.key).toBe('amqp')
      expect(amqpBindingNode!.kind).toBe(AsyncApiTreeNodeKinds.BINDING)
      expect(amqpBindingNode!.value()).toEqual({
        binding: {
          expiration: 100000,
          userId: "guest",
          cc: ["user.logs"],
          priority: 10,
          deliveryMode: 2,
          mandatory: false,
        },
        version: '0.3.0',
        protocol: 'amqp',
      })

      const amqpBindingPropertyNodes = amqpBindingNode!.childrenNodes()
      expect(amqpBindingPropertyNodes.length).toBe(0)
    })
  })

  describe('Channel bindings', () => {
    it('should handle channel with single binding', () => {
      const asyncApiSource = {
        asyncapi: "3.0.0",
        info: {
          title: "channel-single-binding-test",
          version: "1.0.0"
        },
        channels: {
          'test-channel': {
            address: "test-topic",
            bindings: {
              kafka: {
                topic: "test-topic",
                partitions: 3,
                replicas: 2,
                bindingVersion: "0.5.0"
              }
            }
          }
        },
        operations: {
          'test-operation': {
            action: "send",
            channel: { $ref: "#/channels/test-channel" }
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

      const channelNode = operationNode.childrenNodes().find(node => node.kind === AsyncApiTreeNodeKinds.CHANNEL)
      expect(channelNode).toBeDefined()

      const bindingsNode = channelNode!.childrenNodes().find(node => node.kind === AsyncApiTreeNodeKinds.BINDINGS)
      expect(bindingsNode).toBeDefined()
      expect(bindingsNode!.type).toBe(TreeNodeComplexityTypes.COMPLEX)
      expect(bindingsNode!.key).toBe('bindings')
      expect(bindingsNode!.kind).toBe(AsyncApiTreeNodeKinds.BINDINGS)

      const bindingsNodeValue = bindingsNode!.value()
      expect(bindingsNodeValue).toEqual({
        protocol: 'kafka',
        version: '0.5.0',
        binding: {
          topic: "test-topic",
          partitions: 3,
          replicas: 2,
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

    it('should handle channel with two bindings', () => {
      const asyncApiSource = {
        asyncapi: "3.0.0",
        info: {
          title: "channel-two-bindings-test",
          version: "1.0.0"
        },
        channels: {
          'test-channel': {
            address: "test-topic",
            bindings: {
              kafka: {
                topic: "events-topic",
                partitions: 5,
                bindingVersion: "0.5.0"
              },
              amqp: {
                is: "routingKey",
                exchange: {
                  name: "events-exchange",
                  type: "topic",
                  durable: true,
                  autoDelete: false
                },
                bindingVersion: "0.3.0"
              }
            }
          }
        },
        operations: {
          'test-operation': {
            action: "send",
            channel: { $ref: "#/channels/test-channel" }
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

      const channelNode = operationNode.childrenNodes().find(node => node.kind === AsyncApiTreeNodeKinds.CHANNEL)
      expect(channelNode).toBeDefined()

      const bindingsNode = channelNode!.childrenNodes().find(node => node.kind === AsyncApiTreeNodeKinds.BINDINGS)
      expect(bindingsNode).toBeDefined()
      expect(bindingsNode!.type).toBe(TreeNodeComplexityTypes.COMPLEX)
      expect(bindingsNode!.key).toBe('bindings')
      expect(bindingsNode!.kind).toBe(AsyncApiTreeNodeKinds.BINDINGS)

      // Check bindings node value (proxy mode - default to first binding)
      const bindingsNodeValue = bindingsNode!.value()
      expect(bindingsNodeValue).toEqual({
        protocol: 'kafka',
        version: '0.5.0',
        binding: {
          topic: "events-topic",
          partitions: 5,
        },
      })

      const bindingsNestedNodes = bindingsNode!.nestedNodes()
      expect(bindingsNestedNodes.length).toBe(2)

      // Check first binding (kafka)
      const kafkaBindingNode = bindingsNestedNodes.find(node => node.key === 'kafka')
      expect(kafkaBindingNode).toBeDefined()
      expect(kafkaBindingNode!.type).toBe(TreeNodeComplexityTypes.SIMPLE)
      expect(kafkaBindingNode!.key).toBe('kafka')
      expect(kafkaBindingNode!.kind).toBe(AsyncApiTreeNodeKinds.BINDING)
      expect(kafkaBindingNode!.value()).toEqual({
        protocol: 'kafka',
        version: '0.5.0',
        binding: {
          topic: "events-topic",
          partitions: 5,
        },
      })

      const kafkaBindingPropertyNodes = kafkaBindingNode!.childrenNodes()
      expect(kafkaBindingPropertyNodes.length).toBe(0)

      // Check second binding (amqp)
      const amqpBindingNode = bindingsNestedNodes.find(node => node.key === 'amqp')
      expect(amqpBindingNode).toBeDefined()
      expect(amqpBindingNode!.type).toBe(TreeNodeComplexityTypes.SIMPLE)
      expect(amqpBindingNode!.key).toBe('amqp')
      expect(amqpBindingNode!.kind).toBe(AsyncApiTreeNodeKinds.BINDING)
      expect(amqpBindingNode!.value()).toEqual({
        protocol: 'amqp',
        version: '0.3.0',
        binding: {
          is: "routingKey",
          exchange: {
            name: "events-exchange",
            type: "topic",
            durable: true,
            autoDelete: false
          },
        },
      })

      const amqpBindingPropertyNodes = amqpBindingNode!.childrenNodes()
      expect(amqpBindingPropertyNodes.length).toBe(0)
    })
  })

  describe('Message bindings', () => {
    it('should handle message with single binding', () => {
      const asyncApiSource = {
        asyncapi: "3.0.0",
        info: {
          title: "message-single-binding-test",
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
              name: "TestMessage",
              title: "Test Message",
              bindings: {
                kafka: {
                  key: {
                    type: "string",
                    description: "Message key"
                  },
                  schemaIdLocation: "payload",
                  schemaIdPayloadEncoding: 'apicurio-new',
                  bindingVersion: "0.5.0"
                }
              }
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
      const root = tree?.root ?? null
      expect(root).not.toBeNull()

      const operationNode = root!.childrenNodes()[0]
      expect(operationNode).toBeDefined()
      expect(operationNode.kind).toBe(AsyncApiTreeNodeKinds.OPERATION)

      const messagesNode = operationNode.childrenNodes().find(node => node.key === 'messages')
      expect(messagesNode).toBeDefined()

      const messagesNestedNodes = messagesNode!.nestedNodes()
      expect(messagesNestedNodes.length).toBe(1)

      const messageNode = messagesNestedNodes.find(node => node.kind === AsyncApiTreeNodeKinds.MESSAGE)
      expect(messageNode).toBeDefined()

      const bindingsNode = messageNode!.childrenNodes().find(node => node.kind === AsyncApiTreeNodeKinds.BINDINGS)
      expect(bindingsNode).toBeDefined()
      expect(bindingsNode!.type).toBe(TreeNodeComplexityTypes.COMPLEX)
      expect(bindingsNode!.key).toBe('bindings')
      expect(bindingsNode!.kind).toBe(AsyncApiTreeNodeKinds.BINDINGS)

      const bindingsNodeValue = bindingsNode!.value()
      expect(bindingsNodeValue).toEqual({
        protocol: 'kafka',
        version: '0.5.0',
        binding: {
          key: {
            type: "string",
            description: "Message key"
          },
          schemaIdLocation: "payload",
          schemaIdPayloadEncoding: 'apicurio-new',
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

    it('should handle message with two bindings', () => {
      const asyncApiSource = {
        asyncapi: "3.0.0",
        info: {
          title: "message-two-bindings-test",
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
              name: "TestMessage",
              title: "Test Message",
              bindings: {
                kafka: {
                  key: {
                    type: "string"
                  },
                  schemaIdLocation: "header",
                  bindingVersion: "0.5.0"
                },
                amqp: {
                  contentEncoding: "gzip",
                  messageType: "user.signup",
                  bindingVersion: "0.3.0"
                }
              }
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
      const root = tree?.root ?? null
      expect(root).not.toBeNull()

      const operationNode = root!.childrenNodes()[0]
      expect(operationNode).toBeDefined()
      expect(operationNode.kind).toBe(AsyncApiTreeNodeKinds.OPERATION)

      const messagesNode = operationNode.childrenNodes().find(node => node.key === 'messages')
      expect(messagesNode).toBeDefined()

      const messagesNestedNodes = messagesNode!.nestedNodes()
      expect(messagesNestedNodes.length).toBe(1)

      const messageNode = messagesNestedNodes.find(node => node.kind === AsyncApiTreeNodeKinds.MESSAGE)
      expect(messageNode).toBeDefined()

      const bindingsNode = messageNode!.childrenNodes().find(node => node.kind === AsyncApiTreeNodeKinds.BINDINGS)
      expect(bindingsNode).toBeDefined()
      expect(bindingsNode!.type).toBe(TreeNodeComplexityTypes.COMPLEX)
      expect(bindingsNode!.key).toBe('bindings')
      expect(bindingsNode!.kind).toBe(AsyncApiTreeNodeKinds.BINDINGS)

      // Check bindings node value (proxy mode - default to first binding)
      const bindingsNodeValue = bindingsNode!.value()
      expect(bindingsNodeValue).toEqual({
        protocol: 'kafka',
        version: '0.5.0',
        binding: {
          key: {
            type: "string"
          },
          schemaIdLocation: "header",
        },
      })

      const bindingsNestedNodes = bindingsNode!.nestedNodes()
      expect(bindingsNestedNodes.length).toBe(2)

      // Check first binding (kafka)
      const kafkaBindingNode = bindingsNestedNodes.find(node => node.key === 'kafka')
      expect(kafkaBindingNode).toBeDefined()
      expect(kafkaBindingNode!.type).toBe(TreeNodeComplexityTypes.SIMPLE)
      expect(kafkaBindingNode!.key).toBe('kafka')
      expect(kafkaBindingNode!.kind).toBe(AsyncApiTreeNodeKinds.BINDING)
      expect(kafkaBindingNode!.value()).toEqual({
        protocol: 'kafka',
        version: '0.5.0',
        binding: {
          key: {
            type: "string"
          },
          schemaIdLocation: "header",
        },
      })

      const kafkaBindingPropertyNodes = kafkaBindingNode!.childrenNodes()
      expect(kafkaBindingPropertyNodes.length).toBe(0)

      // Check second binding (amqp)
      const amqpBindingNode = bindingsNestedNodes.find(node => node.key === 'amqp')
      expect(amqpBindingNode).toBeDefined()
      expect(amqpBindingNode!.type).toBe(TreeNodeComplexityTypes.SIMPLE)
      expect(amqpBindingNode!.key).toBe('amqp')
      expect(amqpBindingNode!.kind).toBe(AsyncApiTreeNodeKinds.BINDING)
      expect(amqpBindingNode!.value()).toEqual({
        protocol: 'amqp',
        version: '0.3.0',
        binding: {
          contentEncoding: "gzip",
          messageType: "user.signup",
        },
      })

      const amqpBindingPropertyNodes = amqpBindingNode!.childrenNodes()
      expect(amqpBindingPropertyNodes.length).toBe(0)
    })
  })
})
