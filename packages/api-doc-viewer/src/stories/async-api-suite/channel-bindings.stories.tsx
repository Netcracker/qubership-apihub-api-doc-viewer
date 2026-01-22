import { AsyncApiOperationViewer } from '@apihub/components/AsyncApiOperationViewer/AsyncApiOperationViewer';
import type { Meta, StoryObj } from '@storybook/react';
import { prepareAsyncApiDocument } from '../preprocess';
import { BINDING_WITH_OBJECT_PROPS, BINDING_WITH_PRIMITIVE_PROPS, BINDING_WITH_SCHEMA_PROPS } from './common-data';

// It's necessary because storybook doesn't render nested stories without this empty story
// eslint-disable-next-line storybook/story-exports
const meta = {
  title: 'Async Api Suite/Channels',
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

export const SendOperationWithRootLevelChannelWithBindingWithNothing: Story = {
  args: {
    source: prepareAsyncApiDocument({
      source: {
        asyncapi: "3.0.0",
        operations: {
          "send-operation-with-root-level-channel-with-binding-with-nothing": {
            action: "send",
            channel: {
              $ref: "#/channels/first-channel-key"
            },
          }
        },
        channels: {
          "first-channel-key": {
            address: "first-channel-address",
            bindings: {
              kafka: {
                bindingVersion: "0.5.0",
              }
            }
          }
        },
      },
    }),
    operationName: 'send-operation-with-root-level-channel-with-binding-with-nothing',
    operationType: 'send',
  }
}

export const SendOperationWithRootLevelChannelWithBindingWithPrimitiveProps: Story = {
  args: {
    source: prepareAsyncApiDocument({
      source: {
        asyncapi: "3.0.0",
        operations: {
          "send-operation-with-root-level-channel-with-binding-with-primitive-props": {
            action: "send",
            channel: {
              $ref: "#/channels/first-channel-key"
            },
          }
        },
        channels: {
          "first-channel-key": {
            address: "first-channel-address",
            bindings: {
              kafka: {
                ...BINDING_WITH_PRIMITIVE_PROPS,
              }
            }
          }
        }
      },
    }),
    operationName: 'send-operation-with-root-level-channel-with-binding-with-primitive-props',
    operationType: 'send',
  }
}

export const SendOperationWithRootLevelChannelWithBindingWithObjectProps: Story = {
  args: {
    source: prepareAsyncApiDocument({
      source: {
        asyncapi: "3.0.0",
        operations: {
          "send-operation-with-root-level-channel-with-binding-with-object-props": {
            action: "send",
            channel: {
              $ref: "#/channels/first-channel-key"
            },
          }
        },
        channels: {
          "first-channel-key": {
            address: "first-channel-address",
            bindings: {
              kafka: {
                ...BINDING_WITH_OBJECT_PROPS,
              }
            }
          }
        }
      },
    }),
    operationName: 'send-operation-with-root-level-channel-with-binding-with-object-props',
    operationType: 'send',
  }
}

export const SendOperationWithRootLevelChannelWithBindingWithSchemaProps: Story = {
  args: {
    source: prepareAsyncApiDocument({
      source: {
        asyncapi: "3.0.0",
        operations: {
          "send-operation-with-root-level-channel-with-binding-with-schema-props": {
            action: "send",
            channel: {
              $ref: "#/channels/first-channel-key"
            },
          }
        },
        channels: {
          "first-channel-key": {
            address: "first-channel-address",
            bindings: {
              kafka: {
                ...BINDING_WITH_SCHEMA_PROPS,
              }
            }
          }
        }
      },
    }),
    operationName: 'send-operation-with-root-level-channel-with-binding-with-schema-props',
    operationType: 'send',
  }
}

export const SendOperationWithRootLevelChannelWithDescriptionAndBindingWithNothing: Story = {
  args: {
    source: prepareAsyncApiDocument({
      source: {
        asyncapi: "3.0.0",
        operations: {
          "send-operation-with-root-level-channel-with-description-and-binding-with-nothing": {
            action: "send",
            channel: {
              $ref: "#/channels/first-channel-key"
            },
          }
        },
        channels: {
          "first-channel-key": {
            address: "first-channel-address",
            description: "Description of First Channel",
            bindings: {
              kafka: {
                bindingVersion: "0.5.0",
              }
            }
          }
        },
      },
    }),
    operationName: 'send-operation-with-root-level-channel-with-description-and-binding-with-nothing',
    operationType: 'send',
  }
}

export const SendOperationWithRootLevelChannelWithTwoBindings: Story = {
  args: {
    source: prepareAsyncApiDocument({
      source: {
        asyncapi: "3.0.0",
        operations: {
          "send-operation-with-root-level-channel-with-two-bindings": {
            action: "send",
            channel: {
              $ref: "#/channels/first-channel-key"
            },
          }
        },
        channels: {
          "first-channel-key": {
            address: "first-channel-address",
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
        },
      },
    }),
    operationName: 'send-operation-with-root-level-channel-with-two-bindings',
    operationType: 'send',
  }
}
