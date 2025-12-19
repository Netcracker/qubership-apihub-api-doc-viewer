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
        protocol: 'kafka'
      })

      const bindingsNestedNodes = bindingsNode!.nestedNodes()
      expect(bindingsNestedNodes.length).toBe(1)

      const bindingNode = bindingsNestedNodes.find(node => node.kind === AsyncApiTreeNodeKinds.BINDING)
      expect(bindingNode).toBeDefined()
      expect(bindingNode!.type).toBe(TreeNodeComplexityTypes.SIMPLE)
      expect(bindingNode!.key).toBe('kafka')
      expect(bindingNode!.kind).toBe(AsyncApiTreeNodeKinds.BINDING)

      const bindingPropertyNodes = bindingNode!.childrenNodes()
      expect(bindingPropertyNodes.length).toBe(3)

      const groupIdProperty = bindingPropertyNodes.find(node => node.key === 'groupId' && node.kind === AsyncApiTreeNodeKinds.JSO_PROPERTY)
      expect(groupIdProperty).toBeDefined()
      expect(groupIdProperty!.type).toBe(TreeNodeComplexityTypes.SIMPLE)
      expect(groupIdProperty!.kind).toBe(AsyncApiTreeNodeKinds.JSO_PROPERTY)
      expect(groupIdProperty!.value()).toEqual({
        title: "groupId",
        value: {
          type: "string",
          enum: ["consumer-group-1"]
        },
        valueType: 'jsonSchema'
      })

      const clientIdProperty = bindingPropertyNodes.find(node => node.key === 'clientId' && node.kind === AsyncApiTreeNodeKinds.JSO_PROPERTY)
      expect(clientIdProperty).toBeDefined()
      expect(clientIdProperty!.type).toBe(TreeNodeComplexityTypes.SIMPLE)
      expect(clientIdProperty!.kind).toBe(AsyncApiTreeNodeKinds.JSO_PROPERTY)
      expect(clientIdProperty!.value()).toEqual({
        title: "clientId",
        value: {
          type: "string",
          enum: ["client-1"]
        },
        valueType: 'jsonSchema'
      })

      const bindingVersionProperty = bindingPropertyNodes.find(node => node.key === 'bindingVersion' && node.kind === AsyncApiTreeNodeKinds.JSO_PROPERTY)
      expect(bindingVersionProperty).toBeDefined()
      expect(bindingVersionProperty!.type).toBe(TreeNodeComplexityTypes.SIMPLE)
      expect(bindingVersionProperty!.kind).toBe(AsyncApiTreeNodeKinds.JSO_PROPERTY)
      expect(bindingVersionProperty!.value()).toEqual({
        title: "bindingVersion",
        value: '0.5.0',
        valueType: 'string'
      })
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
        protocol: 'kafka'
      })

      const bindingsNestedNodes = bindingsNode!.nestedNodes()
      expect(bindingsNestedNodes.length).toBe(2)

      // Check first binding (kafka)
      const kafkaBindingNode = bindingsNestedNodes.find(node => node.key === 'kafka')
      expect(kafkaBindingNode).toBeDefined()
      expect(kafkaBindingNode!.type).toBe(TreeNodeComplexityTypes.SIMPLE)
      expect(kafkaBindingNode!.key).toBe('kafka')
      expect(kafkaBindingNode!.kind).toBe(AsyncApiTreeNodeKinds.BINDING)

      const kafkaBindingPropertyNodes = kafkaBindingNode!.childrenNodes()
      expect(kafkaBindingPropertyNodes.length).toBe(2)

      const kafkaGroupIdProperty = kafkaBindingPropertyNodes.find(node => node.key === 'groupId')
      expect(kafkaGroupIdProperty).toBeDefined()
      expect(kafkaGroupIdProperty!.value()).toEqual({
        title: "groupId",
        value: {
          type: "string",
          enum: ["consumer-group-1"]
        },
        valueType: 'jsonSchema'
      })

      const kafkaBindingVersionProperty = kafkaBindingPropertyNodes.find(node => node.key === 'bindingVersion')
      expect(kafkaBindingVersionProperty).toBeDefined()
      expect(kafkaBindingVersionProperty!.value()).toEqual({
        title: "bindingVersion",
        value: '0.5.0',
        valueType: 'string'
      })

      // Check second binding (amqp)
      const amqpBindingNode = bindingsNestedNodes.find(node => node.key === 'amqp')
      expect(amqpBindingNode).toBeDefined()
      expect(amqpBindingNode!.type).toBe(TreeNodeComplexityTypes.SIMPLE)
      expect(amqpBindingNode!.key).toBe('amqp')
      expect(amqpBindingNode!.kind).toBe(AsyncApiTreeNodeKinds.BINDING)

      const amqpBindingPropertyNodes = amqpBindingNode!.childrenNodes()
      expect(amqpBindingPropertyNodes.length).toBe(7)

      const amqpExpirationProperty = amqpBindingPropertyNodes.find(node => node.key === 'expiration')
      expect(amqpExpirationProperty).toBeDefined()
      expect(amqpExpirationProperty!.value()).toEqual({
        title: "expiration",
        value: 100000,
        valueType: 'number'
      })

      const amqpUserIdProperty = amqpBindingPropertyNodes.find(node => node.key === 'userId')
      expect(amqpUserIdProperty).toBeDefined()
      expect(amqpUserIdProperty!.value()).toEqual({
        title: "userId",
        value: "guest",
        valueType: 'string'
      })

      const amqpCcProperty = amqpBindingPropertyNodes.find(node => node.key === 'cc')
      expect(amqpCcProperty).toBeDefined()
      expect(amqpCcProperty!.value()).toEqual({
        title: "cc",
        value: ["user.logs"],
        valueType: 'array'
      })

      const amqpPriorityProperty = amqpBindingPropertyNodes.find(node => node.key === 'priority')
      expect(amqpPriorityProperty).toBeDefined()
      expect(amqpPriorityProperty!.value()).toEqual({
        title: "priority",
        value: 10,
        valueType: 'number'
      })

      const amqpDeliveryModeProperty = amqpBindingPropertyNodes.find(node => node.key === 'deliveryMode')
      expect(amqpDeliveryModeProperty).toBeDefined()
      expect(amqpDeliveryModeProperty!.value()).toEqual({
        title: "deliveryMode",
        value: 2,
        valueType: 'number'
      })

      const amqpMandatoryProperty = amqpBindingPropertyNodes.find(node => node.key === 'mandatory')
      expect(amqpMandatoryProperty).toBeDefined()
      expect(amqpMandatoryProperty!.value()).toEqual({
        title: "mandatory",
        value: false,
        valueType: 'boolean'
      })

      const amqpBindingVersionProperty = amqpBindingPropertyNodes.find(node => node.key === 'bindingVersion')
      expect(amqpBindingVersionProperty).toBeDefined()
      expect(amqpBindingVersionProperty!.value()).toEqual({
        title: "bindingVersion",
        value: '0.3.0',
        valueType: 'string'
      })
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
        protocol: 'kafka'
      })

      const bindingsNestedNodes = bindingsNode!.nestedNodes()
      expect(bindingsNestedNodes.length).toBe(1)

      const bindingNode = bindingsNestedNodes.find(node => node.kind === AsyncApiTreeNodeKinds.BINDING)
      expect(bindingNode).toBeDefined()
      expect(bindingNode!.type).toBe(TreeNodeComplexityTypes.SIMPLE)
      expect(bindingNode!.key).toBe('kafka')
      expect(bindingNode!.kind).toBe(AsyncApiTreeNodeKinds.BINDING)

      const bindingPropertyNodes = bindingNode!.childrenNodes()
      expect(bindingPropertyNodes.length).toBe(4)

      const topicProperty = bindingPropertyNodes.find(node => node.key === 'topic' && node.kind === AsyncApiTreeNodeKinds.JSO_PROPERTY)
      expect(topicProperty).toBeDefined()
      expect(topicProperty!.type).toBe(TreeNodeComplexityTypes.SIMPLE)
      expect(topicProperty!.kind).toBe(AsyncApiTreeNodeKinds.JSO_PROPERTY)
      expect(topicProperty!.value()).toEqual({
        title: "topic",
        value: "test-topic",
        valueType: 'string'
      })

      const partitionsProperty = bindingPropertyNodes.find(node => node.key === 'partitions' && node.kind === AsyncApiTreeNodeKinds.JSO_PROPERTY)
      expect(partitionsProperty).toBeDefined()
      expect(partitionsProperty!.type).toBe(TreeNodeComplexityTypes.SIMPLE)
      expect(partitionsProperty!.kind).toBe(AsyncApiTreeNodeKinds.JSO_PROPERTY)
      expect(partitionsProperty!.value()).toEqual({
        title: "partitions",
        value: 3,
        valueType: 'number'
      })

      const replicasProperty = bindingPropertyNodes.find(node => node.key === 'replicas' && node.kind === AsyncApiTreeNodeKinds.JSO_PROPERTY)
      expect(replicasProperty).toBeDefined()
      expect(replicasProperty!.type).toBe(TreeNodeComplexityTypes.SIMPLE)
      expect(replicasProperty!.kind).toBe(AsyncApiTreeNodeKinds.JSO_PROPERTY)
      expect(replicasProperty!.value()).toEqual({
        title: "replicas",
        value: 2,
        valueType: 'number'
      })

      const bindingVersionProperty = bindingPropertyNodes.find(node => node.key === 'bindingVersion' && node.kind === AsyncApiTreeNodeKinds.JSO_PROPERTY)
      expect(bindingVersionProperty).toBeDefined()
      expect(bindingVersionProperty!.type).toBe(TreeNodeComplexityTypes.SIMPLE)
      expect(bindingVersionProperty!.kind).toBe(AsyncApiTreeNodeKinds.JSO_PROPERTY)
      expect(bindingVersionProperty!.value()).toEqual({
        title: "bindingVersion",
        value: '0.5.0',
        valueType: 'string'
      })
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
        protocol: 'kafka'
      })

      const bindingsNestedNodes = bindingsNode!.nestedNodes()
      expect(bindingsNestedNodes.length).toBe(2)

      // Check first binding (kafka)
      const kafkaBindingNode = bindingsNestedNodes.find(node => node.key === 'kafka')
      expect(kafkaBindingNode).toBeDefined()
      expect(kafkaBindingNode!.type).toBe(TreeNodeComplexityTypes.SIMPLE)
      expect(kafkaBindingNode!.key).toBe('kafka')
      expect(kafkaBindingNode!.kind).toBe(AsyncApiTreeNodeKinds.BINDING)

      const kafkaBindingPropertyNodes = kafkaBindingNode!.childrenNodes()
      expect(kafkaBindingPropertyNodes.length).toBe(3)

      const kafkaTopicProperty = kafkaBindingPropertyNodes.find(node => node.key === 'topic')
      expect(kafkaTopicProperty).toBeDefined()
      expect(kafkaTopicProperty!.value()).toEqual({
        title: "topic",
        value: "events-topic",
        valueType: 'string'
      })

      const kafkaPartitionsProperty = kafkaBindingPropertyNodes.find(node => node.key === 'partitions')
      expect(kafkaPartitionsProperty).toBeDefined()
      expect(kafkaPartitionsProperty!.value()).toEqual({
        title: "partitions",
        value: 5,
        valueType: 'number'
      })

      const kafkaBindingVersionProperty = kafkaBindingPropertyNodes.find(node => node.key === 'bindingVersion')
      expect(kafkaBindingVersionProperty).toBeDefined()
      expect(kafkaBindingVersionProperty!.value()).toEqual({
        title: "bindingVersion",
        value: '0.5.0',
        valueType: 'string'
      })

      // Check second binding (amqp)
      const amqpBindingNode = bindingsNestedNodes.find(node => node.key === 'amqp')
      expect(amqpBindingNode).toBeDefined()
      expect(amqpBindingNode!.type).toBe(TreeNodeComplexityTypes.SIMPLE)
      expect(amqpBindingNode!.key).toBe('amqp')
      expect(amqpBindingNode!.kind).toBe(AsyncApiTreeNodeKinds.BINDING)

      const amqpBindingPropertyNodes = amqpBindingNode!.childrenNodes()
      expect(amqpBindingPropertyNodes.length).toBe(3)

      const amqpIsProperty = amqpBindingPropertyNodes.find(node => node.key === 'is')
      expect(amqpIsProperty).toBeDefined()
      expect(amqpIsProperty!.value()).toEqual({
        title: "is",
        value: "routingKey",
        valueType: 'string'
      })

      const amqpExchangeProperty = amqpBindingPropertyNodes.find(node => node.key === 'exchange')
      expect(amqpExchangeProperty).toBeDefined()
      expect(amqpExchangeProperty!.value()).toEqual({
        title: "exchange",
        value: {
          name: "events-exchange",
          type: "topic",
          durable: true,
          autoDelete: false
        },
        valueType: 'object'
      })

      const amqpBindingVersionProperty = amqpBindingPropertyNodes.find(node => node.key === 'bindingVersion')
      expect(amqpBindingVersionProperty).toBeDefined()
      expect(amqpBindingVersionProperty!.value()).toEqual({
        title: "bindingVersion",
        value: '0.3.0',
        valueType: 'string'
      })
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
        protocol: 'kafka'
      })

      const bindingsNestedNodes = bindingsNode!.nestedNodes()
      expect(bindingsNestedNodes.length).toBe(1)

      const bindingNode = bindingsNestedNodes.find(node => node.kind === AsyncApiTreeNodeKinds.BINDING)
      expect(bindingNode).toBeDefined()
      expect(bindingNode!.type).toBe(TreeNodeComplexityTypes.SIMPLE)
      expect(bindingNode!.key).toBe('kafka')
      expect(bindingNode!.kind).toBe(AsyncApiTreeNodeKinds.BINDING)

      const bindingPropertyNodes = bindingNode!.childrenNodes()
      expect(bindingPropertyNodes.length).toBe(4)

      const keyProperty = bindingPropertyNodes.find(node => node.key === 'key' && node.kind === AsyncApiTreeNodeKinds.JSO_PROPERTY)
      expect(keyProperty).toBeDefined()
      expect(keyProperty!.type).toBe(TreeNodeComplexityTypes.SIMPLE)
      expect(keyProperty!.kind).toBe(AsyncApiTreeNodeKinds.JSO_PROPERTY)
      expect(keyProperty!.value()).toEqual({
        title: "key",
        value: {
          type: "string",
          description: "Message key"
        },
        valueType: 'jsonSchema'
      })

      const schemaIdLocationProperty = bindingPropertyNodes.find(node => node.key === 'schemaIdLocation' && node.kind === AsyncApiTreeNodeKinds.JSO_PROPERTY)
      expect(schemaIdLocationProperty).toBeDefined()
      expect(schemaIdLocationProperty!.type).toBe(TreeNodeComplexityTypes.SIMPLE)
      expect(schemaIdLocationProperty!.kind).toBe(AsyncApiTreeNodeKinds.JSO_PROPERTY)
      expect(schemaIdLocationProperty!.value()).toEqual({
        title: "schemaIdLocation",
        value: "payload",
        valueType: 'string'
      })

      const schemaIdPayloadEncodingProperty = bindingPropertyNodes.find(node => node.key === 'schemaIdPayloadEncoding' && node.kind === AsyncApiTreeNodeKinds.JSO_PROPERTY)
      expect(schemaIdPayloadEncodingProperty).toBeDefined()
      expect(schemaIdPayloadEncodingProperty!.type).toBe(TreeNodeComplexityTypes.SIMPLE)
      expect(schemaIdPayloadEncodingProperty!.kind).toBe(AsyncApiTreeNodeKinds.JSO_PROPERTY)
      expect(schemaIdPayloadEncodingProperty!.value()).toEqual({
        title: "schemaIdPayloadEncoding",
        value: 'apicurio-new',
        valueType: 'string'
      })

      const bindingVersionProperty = bindingPropertyNodes.find(node => node.key === 'bindingVersion' && node.kind === AsyncApiTreeNodeKinds.JSO_PROPERTY)
      expect(bindingVersionProperty).toBeDefined()
      expect(bindingVersionProperty!.type).toBe(TreeNodeComplexityTypes.SIMPLE)
      expect(bindingVersionProperty!.kind).toBe(AsyncApiTreeNodeKinds.JSO_PROPERTY)
      expect(bindingVersionProperty!.value()).toEqual({
        title: "bindingVersion",
        value: '0.5.0',
        valueType: 'string'
      })
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
        protocol: 'kafka'
      })

      const bindingsNestedNodes = bindingsNode!.nestedNodes()
      expect(bindingsNestedNodes.length).toBe(2)

      // Check first binding (kafka)
      const kafkaBindingNode = bindingsNestedNodes.find(node => node.key === 'kafka')
      expect(kafkaBindingNode).toBeDefined()
      expect(kafkaBindingNode!.type).toBe(TreeNodeComplexityTypes.SIMPLE)
      expect(kafkaBindingNode!.key).toBe('kafka')
      expect(kafkaBindingNode!.kind).toBe(AsyncApiTreeNodeKinds.BINDING)

      const kafkaBindingPropertyNodes = kafkaBindingNode!.childrenNodes()
      expect(kafkaBindingPropertyNodes.length).toBe(3)

      const kafkaKeyProperty = kafkaBindingPropertyNodes.find(node => node.key === 'key')
      expect(kafkaKeyProperty).toBeDefined()
      expect(kafkaKeyProperty!.value()).toEqual({
        title: "key",
        value: {
          type: "string"
        },
        valueType: 'jsonSchema'
      })

      const kafkaSchemaIdLocationProperty = kafkaBindingPropertyNodes.find(node => node.key === 'schemaIdLocation')
      expect(kafkaSchemaIdLocationProperty).toBeDefined()
      expect(kafkaSchemaIdLocationProperty!.value()).toEqual({
        title: "schemaIdLocation",
        value: "header",
        valueType: 'string'
      })

      const kafkaBindingVersionProperty = kafkaBindingPropertyNodes.find(node => node.key === 'bindingVersion')
      expect(kafkaBindingVersionProperty).toBeDefined()
      expect(kafkaBindingVersionProperty!.value()).toEqual({
        title: "bindingVersion",
        value: '0.5.0',
        valueType: 'string'
      })

      // Check second binding (amqp)
      const amqpBindingNode = bindingsNestedNodes.find(node => node.key === 'amqp')
      expect(amqpBindingNode).toBeDefined()
      expect(amqpBindingNode!.type).toBe(TreeNodeComplexityTypes.SIMPLE)
      expect(amqpBindingNode!.key).toBe('amqp')
      expect(amqpBindingNode!.kind).toBe(AsyncApiTreeNodeKinds.BINDING)

      const amqpBindingPropertyNodes = amqpBindingNode!.childrenNodes()
      expect(amqpBindingPropertyNodes.length).toBe(3)

      const amqpContentEncodingProperty = amqpBindingPropertyNodes.find(node => node.key === 'contentEncoding')
      expect(amqpContentEncodingProperty).toBeDefined()
      expect(amqpContentEncodingProperty!.value()).toEqual({
        title: "contentEncoding",
        value: "gzip",
        valueType: 'string'
      })

      const amqpMessageTypeProperty = amqpBindingPropertyNodes.find(node => node.key === 'messageType')
      expect(amqpMessageTypeProperty).toBeDefined()
      expect(amqpMessageTypeProperty!.value()).toEqual({
        title: "messageType",
        value: "user.signup",
        valueType: 'string'
      })

      const amqpBindingVersionProperty = amqpBindingPropertyNodes.find(node => node.key === 'bindingVersion')
      expect(amqpBindingVersionProperty).toBeDefined()
      expect(amqpBindingVersionProperty!.value()).toEqual({
        title: "bindingVersion",
        value: '0.3.0',
        valueType: 'string'
      })
    })
  })
})