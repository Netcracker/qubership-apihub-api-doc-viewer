import { TreeNodeComplexityTypes } from "../src/model/abstract/tree/tree-node.interface"
import { AsyncApiTreeNodeKinds } from "../src/model/async-api/types/node-kind"
import { createAsyncApiTreeForTests } from "./helpers/create-async-api-tree-for-tests"
import { simplifyConsole } from "./helpers/simplify-console"

describe('Cases with operation messages', () => {
  simplifyConsole()

  describe('Single message scenarios', () => {
    it('should handle operation with single message (minimal fields)', () => {
      const asyncApiSource = {
        "asyncapi": "3.0.0",
        "info": {
          "title": "minimal-message-test",
          "version": "1.0.0"
        },
        "channels": {
          "test-channel": {
            "address": "test-channel",
            "messages": {
              "TestMessage": {
                "$ref": "#/components/messages/TestMessage"
              }
            }
          }
        },
        "components": {
          "messages": {
            "TestMessage": {
              "name": "TestMessage"
            }
          }
        },
        "operations": {
          "test-operation": {
            "action": "send",
            "channel": {
              "$ref": "#/channels/test-channel"
            },
            "messages": [
              {
                "$ref": "#/channels/test-channel/messages/TestMessage"
              }
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
      expect(messagesNode!.type).toBe(TreeNodeComplexityTypes.COMPLEX)
      expect(messagesNode!.kind).toBe(AsyncApiTreeNodeKinds.MESSAGES)

      const messagesNodeValue = messagesNode!.value()
      expect(messagesNodeValue).toBeDefined()
      expect(messagesNodeValue).toEqual({
        internalTitle: "TestMessage"
      })

      const messagesNestedNodes = messagesNode!.nestedNodes()
      expect(messagesNestedNodes.length).toBe(1)
    })

    it('should handle message with title and description', () => {
      const asyncApiSource = {
        "asyncapi": "3.0.0",
        "info": {
          "title": "message-with-title-description-test",
          "version": "1.0.0"
        },
        "channels": {
          "test-channel": {
            "address": "test-channel",
            "messages": {
              "UserCreatedMessage": {
                "$ref": "#/components/messages/UserCreatedMessage"
              }
            }
          }
        },
        "components": {
          "messages": {
            "UserCreatedMessage": {
              "name": "UserCreatedMessage",
              "title": "User Created Event",
              "description": "Event triggered when a new user is created"
            }
          }
        },
        "operations": {
          "user-created-operation": {
            "action": "send",
            "channel": {
              "$ref": "#/channels/test-channel"
            },
            "messages": [
              {
                "$ref": "#/channels/test-channel/messages/UserCreatedMessage"
              }
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
        "asyncapi": "3.0.0",
        "info": {
          "title": "message-with-summary-test",
          "version": "1.0.0"
        },
        "channels": {
          "test-channel": {
            "address": "test-channel",
            "messages": {
              "OrderMessage": {
                "$ref": "#/components/messages/OrderMessage"
              }
            }
          }
        },
        "components": {
          "messages": {
            "OrderMessage": {
              "name": "OrderMessage",
              "title": "Order Event",
              "summary": "Summary of order event",
              "description": "Detailed description of order event"
            }
          }
        },
        "operations": {
          "order-operation": {
            "action": "send",
            "channel": {
              "$ref": "#/channels/test-channel"
            },
            "messages": [
              {
                "$ref": "#/channels/test-channel/messages/OrderMessage"
              }
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
        "asyncapi": "3.0.0",
        "info": {
          "title": "message-with-headers-test",
          "version": "1.0.0"
        },
        "channels": {
          "test-channel": {
            "address": "test-channel",
            "messages": {
              "MessageWithHeaders": {
                "$ref": "#/components/messages/MessageWithHeaders"
              }
            }
          }
        },
        "components": {
          "schemas": {
            "MessageHeaders": {
              "type": "object",
              "properties": {
                "X-Correlation-Id": {
                  "type": "string",
                  "description": "Correlation identifier"
                },
                "X-Request-Id": {
                  "type": "string",
                  "description": "Request identifier"
                }
              }
            }
          },
          "messages": {
            "MessageWithHeaders": {
              "name": "MessageWithHeaders",
              "title": "Message With Headers",
              "headers": {
                "$ref": "#/components/schemas/MessageHeaders"
              }
            }
          }
        },
        "operations": {
          "headers-operation": {
            "action": "send",
            "channel": {
              "$ref": "#/channels/test-channel"
            },
            "messages": [
              {
                "$ref": "#/channels/test-channel/messages/MessageWithHeaders"
              }
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
        internalTitle: "MessageWithHeaders",
        title: "Message With Headers"
      })
      
      // Check that headers are present in nested nodes
      const messagesNestedNodes = messagesNode!.nestedNodes()
      expect(messagesNestedNodes.length).toBeGreaterThan(0)
    })

    it('should handle message with payload', () => {
      const asyncApiSource = {
        "asyncapi": "3.0.0",
        "info": {
          "title": "message-with-payload-test",
          "version": "1.0.0"
        },
        "channels": {
          "test-channel": {
            "address": "test-channel",
            "messages": {
              "MessageWithPayload": {
                "$ref": "#/components/messages/MessageWithPayload"
              }
            }
          }
        },
        "components": {
          "schemas": {
            "UserPayload": {
              "type": "object",
              "properties": {
                "userId": {
                  "type": "string"
                },
                "userName": {
                  "type": "string"
                },
                "email": {
                  "type": "string"
                }
              },
              "required": ["userId", "userName"]
            }
          },
          "messages": {
            "MessageWithPayload": {
              "name": "MessageWithPayload",
              "title": "Message With Payload",
              "payload": {
                "schemaFormat": "application/vnd.aai.asyncapi+json;version=3.0.0",
                "schema": {
                  "$ref": "#/components/schemas/UserPayload"
                }
              }
            }
          }
        },
        "operations": {
          "payload-operation": {
            "action": "send",
            "channel": {
              "$ref": "#/channels/test-channel"
            },
            "messages": [
              {
                "$ref": "#/channels/test-channel/messages/MessageWithPayload"
              }
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
      expect(messagesNestedNodes.length).toBeGreaterThan(0)
    })

    it('should handle message with bindings', () => {
      const asyncApiSource = {
        "asyncapi": "3.0.0",
        "info": {
          "title": "message-with-bindings-test",
          "version": "1.0.0"
        },
        "channels": {
          "test-channel": {
            "address": "test-channel",
            "messages": {
              "MessageWithBindings": {
                "$ref": "#/components/messages/MessageWithBindings"
              }
            }
          }
        },
        "components": {
          "messages": {
            "MessageWithBindings": {
              "name": "MessageWithBindings",
              "title": "Message With Bindings",
              "bindings": {
                "kafka": {
                  "key": {
                    "type": "string"
                  },
                  "bindingVersion": "0.5.0"
                }
              }
            }
          }
        },
        "operations": {
          "bindings-operation": {
            "action": "send",
            "channel": {
              "$ref": "#/channels/test-channel"
            },
            "messages": [
              {
                "$ref": "#/channels/test-channel/messages/MessageWithBindings"
              }
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
      expect(messagesNestedNodes.length).toBeGreaterThan(0)
    })

    it('should handle message with all fields combined', () => {
      const asyncApiSource = {
        "asyncapi": "3.0.0",
        "info": {
          "title": "message-complete-test",
          "version": "1.0.0"
        },
        "channels": {
          "test-channel": {
            "address": "test-channel",
            "messages": {
              "CompleteMessage": {
                "$ref": "#/components/messages/CompleteMessage"
              }
            }
          }
        },
        "components": {
          "schemas": {
            "CompleteHeaders": {
              "type": "object",
              "properties": {
                "X-Trace-Id": {
                  "type": "string"
                }
              }
            },
            "CompletePayload": {
              "type": "object",
              "properties": {
                "eventId": {
                  "type": "string"
                },
                "eventType": {
                  "type": "string"
                },
                "timestamp": {
                  "type": "string",
                  "format": "date-time"
                }
              }
            }
          },
          "messages": {
            "CompleteMessage": {
              "name": "CompleteMessage",
              "title": "Complete Message",
              "summary": "A complete message with all fields",
              "description": "This message demonstrates all possible fields",
              "headers": {
                "$ref": "#/components/schemas/CompleteHeaders"
              },
              "payload": {
                "schemaFormat": "application/vnd.aai.asyncapi+json;version=3.0.0",
                "schema": {
                  "$ref": "#/components/schemas/CompletePayload"
                }
              },
              "bindings": {
                "kafka": {
                  "bindingVersion": "0.5.0"
                }
              }
            }
          }
        },
        "operations": {
          "complete-operation": {
            "action": "send",
            "channel": {
              "$ref": "#/channels/test-channel"
            },
            "messages": [
              {
                "$ref": "#/channels/test-channel/messages/CompleteMessage"
              }
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
      expect(messagesNestedNodes.length).toBeGreaterThan(0)
    })
  })

  describe('Multiple messages scenarios', () => {
    it('should handle operation with two messages', () => {
      const asyncApiSource = {
        "asyncapi": "3.0.0",
        "info": {
          "title": "two-messages-test",
          "version": "1.0.0"
        },
        "channels": {
          "test-channel": {
            "address": "test-channel",
            "messages": {
              "FirstMessage": {
                "$ref": "#/components/messages/FirstMessage"
              },
              "SecondMessage": {
                "$ref": "#/components/messages/SecondMessage"
              }
            }
          }
        },
        "components": {
          "messages": {
            "FirstMessage": {
              "name": "FirstMessage",
              "title": "First Message"
            },
            "SecondMessage": {
              "name": "SecondMessage",
              "title": "Second Message"
            }
          }
        },
        "operations": {
          "multi-message-operation": {
            "action": "send",
            "channel": {
              "$ref": "#/channels/test-channel"
            },
            "messages": [
              {
                "$ref": "#/channels/test-channel/messages/FirstMessage"
              },
              {
                "$ref": "#/channels/test-channel/messages/SecondMessage"
              }
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
      expect(messagesNodeValue).toEqual({
        internalTitle: "FirstMessage",
        title: "First Message"
      })
    })

    it('should handle operation with three messages', () => {
      const asyncApiSource = {
        "asyncapi": "3.0.0",
        "info": {
          "title": "three-messages-test",
          "version": "1.0.0"
        },
        "channels": {
          "test-channel": {
            "address": "test-channel",
            "messages": {
              "MessageA": {
                "$ref": "#/components/messages/MessageA"
              },
              "MessageB": {
                "$ref": "#/components/messages/MessageB"
              },
              "MessageC": {
                "$ref": "#/components/messages/MessageC"
              }
            }
          }
        },
        "components": {
          "messages": {
            "MessageA": {
              "name": "MessageA",
              "title": "Message A",
              "description": "First message type"
            },
            "MessageB": {
              "name": "MessageB",
              "title": "Message B",
              "description": "Second message type"
            },
            "MessageC": {
              "name": "MessageC",
              "title": "Message C",
              "description": "Third message type"
            }
          }
        },
        "operations": {
          "triple-message-operation": {
            "action": "send",
            "channel": {
              "$ref": "#/channels/test-channel"
            },
            "messages": [
              {
                "$ref": "#/channels/test-channel/messages/MessageA"
              },
              {
                "$ref": "#/channels/test-channel/messages/MessageB"
              },
              {
                "$ref": "#/channels/test-channel/messages/MessageC"
              }
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
      
      // Verify all nested message nodes
      const messageANode = messagesNestedNodes.find(node => 
        node.value && (node.value() as any).internalTitle === "MessageA"
      )
      const messageBNode = messagesNestedNodes.find(node => 
        node.value && (node.value() as any).internalTitle === "MessageB"
      )
      const messageCNode = messagesNestedNodes.find(node => 
        node.value && (node.value() as any).internalTitle === "MessageC"
      )
      
      expect(messageANode).toBeDefined()
      expect(messageBNode).toBeDefined()
      expect(messageCNode).toBeDefined()
    })

    it('should handle multiple messages with different field combinations', () => {
      const asyncApiSource = {
        "asyncapi": "3.0.0",
        "info": {
          "title": "mixed-messages-test",
          "version": "1.0.0"
        },
        "channels": {
          "test-channel": {
            "address": "test-channel",
            "messages": {
              "MinimalMessage": {
                "$ref": "#/components/messages/MinimalMessage"
              },
              "MessageWithPayload": {
                "$ref": "#/components/messages/MessageWithPayload"
              },
              "CompleteMessage": {
                "$ref": "#/components/messages/CompleteMessage"
              }
            }
          }
        },
        "components": {
          "schemas": {
            "SimpleSchema": {
              "type": "object",
              "properties": {
                "id": {
                  "type": "string"
                }
              }
            },
            "ComplexHeaders": {
              "type": "object",
              "properties": {
                "Authorization": {
                  "type": "string"
                }
              }
            }
          },
          "messages": {
            "MinimalMessage": {
              "name": "MinimalMessage",
              "title": "Minimal Message"
            },
            "MessageWithPayload": {
              "name": "MessageWithPayload",
              "title": "Message With Payload",
              "description": "Has payload only",
              "payload": {
                "schemaFormat": "application/vnd.aai.asyncapi+json;version=3.0.0",
                "schema": {
                  "$ref": "#/components/schemas/SimpleSchema"
                }
              }
            },
            "CompleteMessage": {
              "name": "CompleteMessage",
              "title": "Complete Message",
              "summary": "Complete message summary",
              "description": "Has all fields",
              "headers": {
                "$ref": "#/components/schemas/ComplexHeaders"
              },
              "payload": {
                "schemaFormat": "application/vnd.aai.asyncapi+json;version=3.0.0",
                "schema": {
                  "$ref": "#/components/schemas/SimpleSchema"
                }
              },
              "bindings": {
                "kafka": {
                  "bindingVersion": "0.5.0"
                }
              }
            }
          }
        },
        "operations": {
          "mixed-operation": {
            "action": "send",
            "channel": {
              "$ref": "#/channels/test-channel"
            },
            "messages": [
              {
                "$ref": "#/channels/test-channel/messages/MinimalMessage"
              },
              {
                "$ref": "#/channels/test-channel/messages/MessageWithPayload"
              },
              {
                "$ref": "#/channels/test-channel/messages/CompleteMessage"
              }
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
        "asyncapi": "3.0.0",
        "info": {
          "title": "empty-messages-test",
          "version": "1.0.0"
        },
        "channels": {
          "test-channel": {
            "address": "test-channel"
          }
        },
        "operations": {
          "empty-messages-operation": {
            "action": "send",
            "channel": {
              "$ref": "#/channels/test-channel"
            },
            "messages": []
          }
        }
      }

      const tree = createAsyncApiTreeForTests(asyncApiSource)
      const operationNode = tree!.root!.childrenNodes()[0]
      const messagesNode = operationNode.childrenNodes().find(node => node.key === 'messages')
      
      // With empty messages array, there should be no messages node or it should be handled gracefully
      if (messagesNode) {
        const messagesNestedNodes = messagesNode!.nestedNodes()
        expect(messagesNestedNodes.length).toBe(0)
      }
    })

    it('should handle message with only name field', () => {
      const asyncApiSource = {
        "asyncapi": "3.0.0",
        "info": {
          "title": "name-only-message-test",
          "version": "1.0.0"
        },
        "channels": {
          "test-channel": {
            "address": "test-channel",
            "messages": {
              "NameOnlyMessage": {
                "$ref": "#/components/messages/NameOnlyMessage"
              }
            }
          }
        },
        "components": {
          "messages": {
            "NameOnlyMessage": {
              "name": "NameOnlyMessage"
            }
          }
        },
        "operations": {
          "name-only-operation": {
            "action": "send",
            "channel": {
              "$ref": "#/channels/test-channel"
            },
            "messages": [
              {
                "$ref": "#/channels/test-channel/messages/NameOnlyMessage"
              }
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
        internalTitle: "NameOnlyMessage",
        title: undefined,
        description: undefined,
        summary: undefined,
      })
    })

    it('should handle message with empty strings in fields', () => {
      const asyncApiSource = {
        "asyncapi": "3.0.0",
        "info": {
          "title": "empty-string-fields-test",
          "version": "1.0.0"
        },
        "channels": {
          "test-channel": {
            "address": "test-channel",
            "messages": {
              "EmptyFieldsMessage": {
                "$ref": "#/components/messages/EmptyFieldsMessage"
              }
            }
          }
        },
        "components": {
          "messages": {
            "EmptyFieldsMessage": {
              "name": "EmptyFieldsMessage",
              "title": "",
              "description": "",
              "summary": ""
            }
          }
        },
        "operations": {
          "empty-fields-operation": {
            "action": "send",
            "channel": {
              "$ref": "#/channels/test-channel"
            },
            "messages": [
              {
                "$ref": "#/channels/test-channel/messages/EmptyFieldsMessage"
              }
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
        internalTitle: "EmptyFieldsMessage",
        title: "",
        description: "",
        summary: ""
      })
    })
  })

  describe('Messages in different operation actions', () => {
    it('should handle messages in receive operation', () => {
      const asyncApiSource = {
        "asyncapi": "3.0.0",
        "info": {
          "title": "receive-operation-test",
          "version": "1.0.0"
        },
        "channels": {
          "test-channel": {
            "address": "test-channel",
            "messages": {
              "ReceiveMessage": {
                "$ref": "#/components/messages/ReceiveMessage"
              }
            }
          }
        },
        "components": {
          "messages": {
            "ReceiveMessage": {
              "name": "ReceiveMessage",
              "title": "Receive Message"
            }
          }
        },
        "operations": {
          "receive-operation": {
            "action": "receive",
            "channel": {
              "$ref": "#/channels/test-channel"
            },
            "messages": [
              {
                "$ref": "#/channels/test-channel/messages/ReceiveMessage"
              }
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
