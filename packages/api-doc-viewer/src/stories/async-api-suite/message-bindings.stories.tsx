import { AsyncApiOperationViewer } from '@apihub/components/AsyncApiOperationViewer/AsyncApiOperationViewer';
import type { Meta, StoryObj } from '@storybook/react';
import { prepareAsyncApiDocument } from '../preprocess';
import { BINDING_WITH_OBJECT_PROPS, BINDING_WITH_PRIMITIVE_PROPS, BINDING_WITH_SCHEMA_PROPS } from './common-data';

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
