import { AsyncApiOperationViewer } from '@apihub/components/AsyncApiOperationViewer/AsyncApiOperationViewer';
import type { Meta, StoryObj } from '@storybook/react';
import { prepareAsyncApiDocument } from '../preprocess';
import { BINDING_WITH_OBJECT_PROPS, BINDING_WITH_PRIMITIVE_PROPS, BINDING_WITH_SCHEMA_PROPS, EXTENSIONS } from './common-data';

// It's necessary because storybook doesn't render nested stories without this empty story
// eslint-disable-next-line storybook/story-exports
const meta = {
  title: 'Async Api Suite/Messages',
  component: AsyncApiOperationViewer,
  parameters: {},
  argTypes: {
    source: {
      control: 'object'
    }
  },
  args: {
    source: {}
  }
} satisfies Meta<typeof AsyncApiOperationViewer>;

export default meta;

type Story = StoryObj<typeof meta>

export const SendOperationWithMessageWithNothing: Story = {
  args: {
    source: prepareAsyncApiDocument({
      source: {
        asyncapi: "3.0.0",
        operations: {
          "send-operation-with-message-with-nothing": {
            action: "send",
            messages: [
              { $ref: "#/components/messages/BaseEventMessage" }
            ]
          }
        },
        components: {
          messages: {
            BaseEventMessage: {
            }
          }
        }
      },
    }),
    operationName: 'send-operation-with-message-with-nothing',
    operationType: 'send',
  }
}

export const SendOperationWithMessageWithName: Story = {
  args: {
    source: prepareAsyncApiDocument({
      source: {
        asyncapi: "3.0.0",
        operations: {
          "send-operation-with-message-with-name": {
            action: "send",
            messages: [
              { $ref: "#/components/messages/BaseEventMessage" }
            ]
          }
        },
        components: {
          messages: {
            BaseEventMessage: {
              name: "base-event-message",
            }
          }
        }
      },
    }),
    operationName: 'send-operation-with-message-with-name',
    operationType: 'send',
  }
}

export const SendOperationWithMessageWithTitle: Story = {
  args: {
    source: prepareAsyncApiDocument({
      source: {
        asyncapi: "3.0.0",
        operations: {
          "send-operation-with-message-with-title": {
            action: "send",
            messages: [
              { $ref: "#/components/messages/BaseEventMessage" }
            ]
          }
        },
        components: {
          messages: {
            BaseEventMessage: {
              name: "base-event-message",
              title: "Base Event Message",
            }
          }
        }
      },
    }),
    operationName: 'send-operation-with-message-with-title',
    operationType: 'send',
  }
}

export const SendOperationWithMessageWithDescription: Story = {
  args: {
    source: prepareAsyncApiDocument({
      source: {
        asyncapi: "3.0.0",
        operations: {
          "send-operation-with-message-with-description": {
            action: "send",
            messages: [
              { $ref: "#/components/messages/BaseEventMessage" }
            ]
          }
        },
        components: {
          messages: {
            BaseEventMessage: {
              name: "base-event-message",
              description: "Description of Base Event Message",
            }
          }
        }
      },
    }),
    operationName: 'send-operation-with-message-with-description',
    operationType: 'send',
  }
}

export const SendOperationWithMessageWithNameAndDescription: Story = {
  args: {
    source: prepareAsyncApiDocument({
      source: {
        asyncapi: "3.0.0",
        operations: {
          "send-operation-with-message-with-name-and-description": {
            action: "send",
            messages: [
              { $ref: "#/components/messages/BaseEventMessage" }
            ]
          }
        },
        components: {
          messages: {
            BaseEventMessage: {
              name: "base-event-message",
              description: "Description of Base Event Message",
            }
          }
        }
      },
    }),
    operationName: 'send-operation-with-message-with-name-and-description',
    operationType: 'send',
  }
}

export const SendOperationWithMessageWithTitleAndDescription: Story = {
  args: {
    source: prepareAsyncApiDocument({
      source: {
        asyncapi: "3.0.0",
        operations: {
          "send-operation-with-message-with-title-and-description": {
            action: "send",
            messages: [
              { $ref: "#/components/messages/BaseEventMessage" }
            ]
          }
        },
        components: {
          messages: {
            BaseEventMessage: {
              name: "base-event-message",
              title: "Base Event Message",
              description: "Description of Base Event Message",
            }
          }
        }
      },
    }),
    operationName: 'send-operation-with-message-with-title-and-description',
    operationType: 'send',
  }
}

export const SendOperationWithMessageWithNameAndTitleAndDescription: Story = {
  args: {
    source: prepareAsyncApiDocument({
      source: {
        asyncapi: "3.0.0",
        operations: {
          "send-operation-with-message-with-name-and-title-and-description": {
            action: "send",
            messages: [
              { $ref: "#/components/messages/BaseEventMessage" }
            ]
          }
        },
        components: {
          messages: {
            BaseEventMessage: {
              name: "base-event-message",
              title: "Base Event Message",
              description: "Description of Base Event Message",
            }
          }
        }
      },
    }),
    operationName: 'send-operation-with-message-with-name-and-title-and-description',
    operationType: 'send',
  }
}

export const SendOperationWithMessageWithPrimitiveHeaders: Story = {
  args: {
    source: prepareAsyncApiDocument({
      source: {
        asyncapi: "3.0.0",
        operations: {
          "send-operation-with-message-with-primitive-headers": {
            action: "send",
            messages: [
              { $ref: "#/components/messages/BaseEventMessage" }
            ]
          }
        },
        components: {
          schemas: {
            HeadersExample: {
              type: "string",
              description: "Primitive header example",
              minLength: 1,
              maxLength: 10,
              examples: ["1234567890", "abcdefghij", "ABCDEFGHIJ"]
            }
          },
          messages: {
            BaseEventMessage: {
              headers: { $ref: "#/components/schemas/HeadersExample" },
            }
          }
        },
      },
    }),
    operationName: 'send-operation-with-message-with-primitive-headers',
    operationType: 'send',
  }
}

export const SendOperationWithMessageWithObjectiveHeaders: Story = {
  args: {
    source: prepareAsyncApiDocument({
      source: {
        asyncapi: "3.0.0",
        operations: {
          "send-operation-with-message-with-objective-headers": {
            action: "send",
            messages: [
              { $ref: "#/components/messages/BaseEventMessage" }
            ]
          }
        },
        components: {
          schemas: {
            HeadersExample: {
              type: "object",
              description: "Headers example",
              properties: {
                "X-Idempotency-Key": {
                  type: "string",
                }
              }
            }
          },
          messages: {
            BaseEventMessage: {
              headers: { $ref: "#/components/schemas/HeadersExample" },
            }
          }
        },
      },
    }),
    operationName: 'send-operation-with-message-with-objective-headers',
    operationType: 'send',
  }
}

export const SendOperationWithMessageWithPrimitivePayload: Story = {
  args: {
    source: prepareAsyncApiDocument({
      source: {
        asyncapi: "3.0.0",
        operations: {
          "send-operation-with-message-with-primitive-payload": {
            action: "send",
            messages: [
              { $ref: "#/components/messages/StatusMessage" }
            ]
          }
        },
        components: {
          schemas: {
            Status: {
              type: "string",
              description: "Status enum example",
              enum: ['not_started', 'in_progress', 'failed', 'success']
            }
          },
          messages: {
            StatusMessage: {
              payload: { $ref: "#/components/schemas/Status" },
            }
          }
        },
      },
    }),
    operationName: 'send-operation-with-message-with-primitive-payload',
    operationType: 'send',
  }
}

export const SendOperationWithMessageWithObjectivePayload: Story = {
  args: {
    source: prepareAsyncApiDocument({
      source: {
        asyncapi: "3.0.0",
        operations: {
          "send-operation-with-message-with-objective-payload": {
            action: "send",
            messages: [
              { $ref: "#/components/messages/StatusMessage" }
            ]
          }
        },
        components: {
          schemas: {
            Status: {
              type: "object",
              description: "Status enum example",
              properties: {
                status: {
                  type: "string",
                  description: "Status enum example",
                  enum: ['not_started', 'in_progress', 'failed', 'success']
                }
              }
            }
          },
          messages: {
            StatusMessage: {
              payload: { $ref: "#/components/schemas/Status" },
            }
          }
        },
      },
    }),
    operationName: 'send-operation-with-message-with-objective-payload',
    operationType: 'send',
  }
}

export const SendOperationWithMessageWithPrimitiveHeadersAndPayload: Story = {
  args: {
    source: prepareAsyncApiDocument({
      source: {
        asyncapi: "3.0.0",
        operations: {
          "send-operation-with-message-with-primitive-headers-and-payload": {
            action: "send",
            messages: [
              { $ref: "#/components/messages/StatusMessage" }
            ]
          }
        },
        components: {
          schemas: {
            Identifier: {
              type: "string",
              description: "Identifier example",
              minLength: 1,
              maxLength: 10,
              examples: ["1234567890", "abcdefghij", "ABCDEFGHIJ"]
            },
            Status: {
              type: "string",
              description: "Status enum example",
              enum: ['not_started', 'in_progress', 'failed', 'success']
            }
          },
          messages: {
            StatusMessage: {
              headers: { $ref: "#/components/schemas/Identifier" },
              payload: { $ref: "#/components/schemas/Status" },
            }
          }
        },
      }
    }),
    operationName: 'send-operation-with-message-with-primitive-headers-and-payload',
    operationType: 'send',
  }
}

export const SendOperationWithMessageWithObjectiveHeadersAndPayload: Story = {
  args: {
    source: prepareAsyncApiDocument({
      source: {
        asyncapi: "3.0.0",
        operations: {
          "send-operation-with-message-with-objective-headers-and-payload": {
            action: "send",
            messages: [
              { $ref: "#/components/messages/StatusMessage" }
            ]
          }
        },
        components: {
          schemas: {
            Identifier: {
              type: "object",
              description: "Identifier example",
              properties: {
                identifier: {
                  type: "string",
                  description: "Identifier example",
                  minLength: 1,
                  maxLength: 10,
                  examples: ["1234567890", "abcdefghij", "ABCDEFGHIJ"]
                }
              }
            },
            Status: {
              type: "object",
              description: "Status enum example",
              properties: {
                status: {
                  type: "string",
                  description: "Status enum example",
                  enum: ['not_started', 'in_progress', 'failed', 'success']
                }
              }
            }
          },
          messages: {
            StatusMessage: {
              headers: { $ref: "#/components/schemas/Identifier" },
              payload: { $ref: "#/components/schemas/Status" },
            }
          }
        },
      },
    }),
    operationName: 'send-operation-with-message-with-objective-headers-and-payload',
    operationType: 'send',
  }
}

export const SendOperationWithMessageWithPrimitiveHeadersAndObjectivePayload: Story = {
  args: {
    source: prepareAsyncApiDocument({
      source: {
        asyncapi: "3.0.0",
        operations: {
          "send-operation-with-message-with-primitive-headers-and-objective-payload": {
            action: "send",
            messages: [
              { $ref: "#/components/messages/StatusMessage" }
            ]
          }
        },
        components: {
          schemas: {
            Identifier: {
              type: "string",
              description: "Identifier example",
              minLength: 1,
              maxLength: 10,
              examples: ["1234567890", "abcdefghij", "ABCDEFGHIJ"]
            },
            Status: {
              type: "object",
              description: "Status enum example",
              properties: {
                status: {
                  type: "string",
                  description: "Status enum example",
                  enum: ['not_started', 'in_progress', 'failed', 'success']
                }
              }
            }
          },
          messages: {
            StatusMessage: {
              headers: { $ref: "#/components/schemas/Identifier" },
              payload: { $ref: "#/components/schemas/Status" },
            }
          }
        },
      },
    }),
    operationName: 'send-operation-with-message-with-primitive-headers-and-objective-payload',
    operationType: 'send',
  }
}

export const SendOperationWithMessageWithObjectiveHeadersAndPrimitivePayload: Story = {
  args: {
    source: prepareAsyncApiDocument({
      source: {
        asyncapi: "3.0.0",
        operations: {
          "send-operation-with-message-with-objective-headers-and-primitive-payload": {
            action: "send",
            messages: [
              { $ref: "#/components/messages/StatusMessage" }
            ]
          }
        },
        components: {
          schemas: {
            Identifier: {
              type: "object",
              description: "Identifier example",
              properties: {
                identifier: {
                  type: "string",
                  description: "Identifier example",
                  minLength: 1,
                  maxLength: 10,
                  examples: ["1234567890", "abcdefghij", "ABCDEFGHIJ"]
                }
              }
            },
            Status: {
              type: "string",
              description: "Status enum example",
              enum: ['not_started', 'in_progress', 'failed', 'success']
            }
          },
          messages: {
            StatusMessage: {
              headers: { $ref: "#/components/schemas/Identifier" },
              payload: { $ref: "#/components/schemas/Status" },
            }
          }
        },
      },
    }),
    operationName: 'send-operation-with-message-with-objective-headers-and-primitive-payload',
    operationType: 'send',
  }
}

export const SendOperationWithMessageWithBindingsWithNothing: Story = {
  args: {
    source: prepareAsyncApiDocument({
      source: {
        asyncapi: "3.0.0",
        operations: {
          "send-operation-with-message-with-bindings-with-nothing": {
            action: "send",
            messages: [
              { $ref: "#/components/messages/StatusMessage" }
            ]
          }
        },
        components: {
          messages: {
            StatusMessage: {
              bindings: {
                kafka: {
                  bindingVersion: "0.5.0",
                }
              }
            }
          }
        },
      },
    }),
    operationName: 'send-operation-with-message-with-bindings-with-nothing',
    operationType: 'send',
  }
}

export const SendOperationWithMessageWithBindingsWithPrimitiveProps: Story = {
  args: {
    source: prepareAsyncApiDocument({
      source: {
        asyncapi: "3.0.0",
        operations: {
          "send-operation-with-message-with-bindings-with-primitive-props": {
            action: "send",
            messages: [
              { $ref: "#/components/messages/StatusMessage" }
            ]
          }
        },
        components: {
          messages: {
            StatusMessage: {
              bindings: {
                kafka: {
                  ...BINDING_WITH_PRIMITIVE_PROPS,
                }
              }
            }
          }
        },
      },
    }),
    operationName: 'send-operation-with-message-with-bindings-with-primitive-props',
    operationType: 'send',
  }
}

export const SendOperationWithMessageWithBindingsWithObjectProps: Story = {
  args: {
    source: prepareAsyncApiDocument({
      source: {
        asyncapi: "3.0.0",
        operations: {
          "send-operation-with-message-with-bindings-with-object-props": {
            action: "send",
            messages: [
              { $ref: "#/components/messages/StatusMessage" }
            ]
          }
        },
        components: {
          messages: {
            StatusMessage: {
              bindings: {
                kafka: {
                  ...BINDING_WITH_OBJECT_PROPS,
                }
              }
            }
          }
        },
      },
    }),
    operationName: 'send-operation-with-message-with-bindings-with-object-props',
    operationType: 'send',
  }
}

export const SendOperationWithMessageWithBindingsWithSchemaProps: Story = {
  args: {
    source: prepareAsyncApiDocument({
      source: {
        asyncapi: "3.0.0",
        operations: {
          "send-operation-with-message-with-bindings-with-schema-props": {
            action: "send",
            messages: [
              { $ref: "#/components/messages/StatusMessage" }
            ]
          }
        },
        components: {
          messages: {
            StatusMessage: {
              bindings: {
                kafka: {
                  ...BINDING_WITH_SCHEMA_PROPS,
                }
              }
            }
          }
        },
      },
    }),
    operationName: 'send-operation-with-message-with-bindings-with-schema-props',
    operationType: 'send',
  }
}

export const SendOperationWithMessageWithTwoBindings: Story = {
  args: {
    source: prepareAsyncApiDocument({
      source: {
        asyncapi: "3.0.0",
        operations: {
          "send-operation-with-message-with-two-bindings": {
            action: "send",
            messages: [
              { $ref: "#/components/messages/StatusMessage" }
            ]
          }
        },
        components: {
          messages: {
            StatusMessage: {
              bindings: {
                kafka: {
                  bindingVersion: "0.5.0",
                  key: {
                    type: "string",
                    description: "Partitioning key for the message",
                    minLength: 1,
                  },
                  schemaIdLocation: "header",
                  schemaIdPayloadEncoding: "application/json",
                  schemaLookupStrategy: "topicNameStrategy",
                },
                rabbitmq: {
                  contentEncoding: "application/json",
                  messageType: "orders.created",
                  bindingVersion: "0.2.0",
                }
              }
            }
          }
        },
      },
    }),
    operationName: 'send-operation-with-message-with-two-bindings',
    operationType: 'send',
  }
}

export const SendOperationWithMessageWithDescriptionAndHeaders: Story = {
  args: {
    source: prepareAsyncApiDocument({
      source: {
        asyncapi: "3.0.0",
        operations: {
          "send-operation-with-message-with-description-and-headers": {
            action: "send",
            messages: [
              { $ref: "#/components/messages/StatusMessage" }
            ]
          }
        },
        components: {
          schemas: {
            Identifier: {
              type: "string",
              description: "Identifier example",
              minLength: 1,
              maxLength: 10,
              examples: ["1234567890", "abcdefghij", "ABCDEFGHIJ"]
            }
          },
          messages: {
            StatusMessage: {
              description: "Status message description",
              headers: {
                $ref: "#/components/schemas/Identifier"
              }
            }
          }
        },
      },
    }),
    operationName: 'send-operation-with-message-with-description-and-headers',
    operationType: 'send',
  }
}

export const SendOperationWithMessageWithDescriptionAndPayload: Story = {
  args: {
    source: prepareAsyncApiDocument({
      source: {
        asyncapi: "3.0.0",
        operations: {
          "send-operation-with-message-with-description-and-payload": {
            action: "send",
            messages: [
              { $ref: "#/components/messages/StatusMessage" }
            ]
          }
        },
        components: {
          messages: {
            StatusMessage: {
              description: "Status message description",
              payload: { $ref: "#/components/schemas/Status" },
            }
          }
        },
      },
    }),
    operationName: 'send-operation-with-message-with-description-and-payload',
    operationType: 'send',
  }
}

export const SendOperationWithMessageWithDescriptionAndBindingWithNothing: Story = {
  args: {
    source: prepareAsyncApiDocument({
      source: {
        asyncapi: "3.0.0",
        operations: {
          "send-operation-with-message-with-description-and-binding-with-nothing": {
            action: "send",
            messages: [
              { $ref: "#/components/messages/StatusMessage" }
            ]
          }
        },
        components: {
          messages: {
            StatusMessage: {
              description: "Status message description",
              bindings: {
                kafka: {
                  bindingVersion: "0.5.0",
                }
              }
            }
          }
        },
      },
    }),
    operationName: 'send-operation-with-message-with-description-and-binding-with-nothing',
    operationType: 'send',
  }
}

export const SendOperationWithTwoMessagesWithNames: Story = {
  args: {
    source: prepareAsyncApiDocument({
      source: {
        asyncapi: "3.0.0",
        operations: {
          "send-operation-with-two-messages-with-names": {
            action: "send",
            messages: [
              { $ref: "#/components/messages/StatusMessage" },
              { $ref: "#/components/messages/IdentifierMessage" }
            ]
          }
        },
        components: {
          messages: {
            StatusMessage: {
              name: "StatusMessage",
            },
            IdentifierMessage: {
              name: "IdentifierMessage",
            },
          }
        },
      },
    }),
    operationName: 'send-operation-with-two-messages-with-names',
    operationType: 'send',
  }
}

export const SendOperationWithDescriptionAndMessageWithNothing: Story = {
  args: {
    source: prepareAsyncApiDocument({
      source: {
        asyncapi: "3.0.0",
        operations: {
          "send-operation-with-description-and-message-with-nothing": {
            action: "send",
            description: "Description of Send Operation With Description And Message With Nothing",
            messages: [
              { $ref: "#/components/messages/StatusMessage" }
            ]
          }
        },
        messages: {
          StatusMessage: {
          }
        }
      },
    }),
    operationName: 'send-operation-with-description-and-message-with-nothing',
    operationType: 'send',
  }
}

// Extensions

export const ExtensionsInMessage: Story = {
  args: {
    source: prepareAsyncApiDocument({
      source: {
        asyncapi: "3.0.0",
        operations: {
          "send-operation-with-message-extensions": {
            action: "send",
            messages: [
              { $ref: "#/components/messages/StatusMessage" }
            ]
          }
        },
        components: {
          messages: {
            StatusMessage: {
              name: 'StatusMessage',
              description: 'Description of Status Message',
              ...EXTENSIONS,
            }
          }
        },
      },
    }),
    operationName: 'send-operation-with-message-extensions',
    operationType: 'send',
  }
}

export const ExtensionsInMessageBindings: Story = {
  args: {
    source: prepareAsyncApiDocument({
      source: {
        asyncapi: "3.0.0",
        operations: {
          "send-operation-with-message-bindings-extensions": {
            action: "send",
            messages: [
              { $ref: "#/components/messages/StatusMessage" }
            ]
          }
        },
        components: {
          messages: {
            StatusMessage: {
              name: 'StatusMessage',
              description: 'Description of Status Message',
              bindings: {
                kafka: {
                  bindingVersion: "0.5.0",
                  predefinedProperty: "kafka-property",
                  ...EXTENSIONS,
                }
              }
            }
          }
        },
      },
    }),
    operationName: 'send-operation-with-message-bindings-extensions',
    operationType: 'send',
  }
}

// Defaults

export const DefaultMessageTitleIfNothing: Story = {
  args: {
    source: prepareAsyncApiDocument({
      source: {
        asyncapi: "3.0.0",
        operations: {
          "send-operation-with-default-message-title-if-nothing": {
            action: "send",
            messages: [
              { $ref: "#/components/messages/StatusMessage" }
            ]
          }
        },
        components: {
          messages: {
            StatusMessage: {
              description: 'Description of Status Message',
            }
          }
        },
      },
    }),
    operationName: 'send-operation-with-default-message-title-if-nothing',
    operationType: 'send',
  }
}

export const DefaultMessageTitleIfName: Story = {
  args: {
    source: prepareAsyncApiDocument({
      source: {
        asyncapi: "3.0.0",
        operations: {
          "send-operation-with-default-message-title-if-name": {
            action: "send",
            messages: [
              { $ref: "#/components/messages/StatusMessage" }
            ]
          }
        },
        components: {
          messages: {
            StatusMessage: {
              name: 'StatusMessage',
              description: 'Description of Status Message',
            }
          }
        },
      },
    }),
    operationName: 'send-operation-with-default-message-title-if-name',
    operationType: 'send',
  }
}

export const DefaultMessageTitleIfTitleAndName: Story = {
  args: {
    source: prepareAsyncApiDocument({
      source: {
        asyncapi: "3.0.0",
        operations: {
          "send-operation-with-default-message-title-if-title-and-name": {
            action: "send",
            messages: [
              { $ref: "#/components/messages/StatusMessage" }
            ]
          }
        },
        components: {
          messages: {
            StatusMessage: {
              title: 'Status Message Title',
              name: 'status-message-name',
              description: 'Description of Status Message',
            }
          }
        },
      },
    }),
    operationName: 'send-operation-with-default-message-title-if-title-and-name',
    operationType: 'send',
  }
}

export const DefaultMessageDescriptionIfNothing: Story = {
  args: {
    source: prepareAsyncApiDocument({
      source: {
        asyncapi: "3.0.0",
        operations: {
          "send-operation-with-default-message-description-if-nothing": {
            action: "send",
            messages: [
              { $ref: "#/components/messages/StatusMessage" }
            ],
          }
        },
        components: {
          messages: {
            StatusMessage: {
              title: 'Status Message Title',
            }
          }
        },
      },
    }),
    operationName: 'send-operation-with-default-message-description-if-nothing',
    operationType: 'send',
  }
}

export const DefaultMessageDescriptionIfSummary: Story = {
  args: {
    source: prepareAsyncApiDocument({
      source: {
        asyncapi: "3.0.0",
        operations: {
          "send-operation-with-default-message-description-if-summary": {
            action: "send",
            messages: [
              { $ref: "#/components/messages/StatusMessage" }
            ],
          }
        },
        components: {
          messages: {
            StatusMessage: {
              summary: 'Summary of Status Message',
            }
          }
        },
      },
    }),
    operationName: 'send-operation-with-default-message-description-if-summary',
    operationType: 'send',
  }
}

export const DefaultMessageDescriptionIfSummaryAndDescription: Story = {
  args: {
    source: prepareAsyncApiDocument({
      source: {
        asyncapi: "3.0.0",
        operations: {
          "send-operation-with-default-message-description-if-summary-and-description": {
            action: "send",
            messages: [
              { $ref: "#/components/messages/StatusMessage" }
            ],
          }
        },
        components: {
          messages: {
            StatusMessage: {
              summary: 'Summary of Status Message',
              description: 'Description of Status Message',
            }
          }
        },
      },
    }),
    operationName: 'send-operation-with-default-message-description-if-summary-and-description',
    operationType: 'send',
  }
}

export const DefaultOperationBindingVersionIfNothing: Story = {
  args: {
    source: prepareAsyncApiDocument({
      source: {
        asyncapi: "3.0.0",
        operations: {
          "send-operation-with-default-operation-binding-version-if-nothing": {
            action: "send",
            bindings: {
              kafka: {
              }
            }
          }
        }
      },
    }),
    operationName: 'send-operation-with-default-operation-binding-version-if-nothing',
    operationType: 'send',
  }
}

export const DefaultChannelBindingVersionIfNothing: Story = {
  args: {
    source: prepareAsyncApiDocument({
      source: {
        asyncapi: "3.0.0",
        operations: {
          "send-operation-with-default-channel-binding-version-if-nothing": {
            action: "send",
            channel: {
              $ref: "#/channels/first-channel-key"
            }
          }
        },
        channels: {
          "first-channel-key": {
            bindings: {
              kafka: {
              }
            }
          }
        }
      },
    }),
    operationName: 'send-operation-with-default-channel-binding-version-if-nothing',
    operationType: 'send',
  }
}

export const DefaultMessageBindingVersionIfNothing: Story = {
  args: {
    source: prepareAsyncApiDocument({
      source: {
        asyncapi: "3.0.0",
        operations: {
          "send-operation-with-default-message-binding-version-if-nothing": {
            action: "send",
            messages: [
              { $ref: "#/components/messages/StatusMessage" }
            ]
          }
        },
        components: {
          messages: {
            StatusMessage: {
              bindings: {
                kafka: {},
              }
            }
          }
        }
      },
    }),
    operationName: 'send-operation-with-default-message-binding-version-if-nothing',
    operationType: 'send',
  }
}