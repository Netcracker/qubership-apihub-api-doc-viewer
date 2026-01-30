import { AsyncApiOperationViewer } from '@apihub/components/AsyncApiOperationViewer/AsyncApiOperationViewer';
import type { Meta, StoryObj } from '@storybook/react';
import { prepareAsyncApiDocument } from '../preprocess';
import { TEST_REFERENCE_NAME_PROPERTY } from './common-data';

// It's necessary because storybook doesn't render nested stories without this empty story
// eslint-disable-next-line storybook/story-exports
const meta = {
  title: 'Async Api Suite/Message',
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

export const SendOperationWithMessageWithNothingAndEnabledReferenceNameProperty: Story = {
  args: {
    source: prepareAsyncApiDocument({
      source: {
        asyncapi: "3.0.0",
        operations: {
          "send-operation-with-message-with-nothing-and-enabled-reference-name-property": {
            action: "send",
            messages: [
              { $ref: "#/components/messages/FirstMessage" },
              { $ref: "#/components/messages/SecondMessage" },
            ],
          }
        },
        components: {
          messages: {
            FirstMessage: {},
            SecondMessage: {}
          }
        }
      },
      referenceNamePropertyKey: TEST_REFERENCE_NAME_PROPERTY,
    }),
    referenceNamePropertyKey: TEST_REFERENCE_NAME_PROPERTY,
  }
}
