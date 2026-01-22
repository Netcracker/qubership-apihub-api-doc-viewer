import { AsyncApiOperationViewer } from '@apihub/components/AsyncApiOperationViewer/AsyncApiOperationViewer';
import type { Meta, StoryObj } from '@storybook/react';
import { prepareAsyncApiDocument } from '../preprocess';
import { BINDING_WITH_OBJECT_PROPS, BINDING_WITH_PRIMITIVE_PROPS, BINDING_WITH_SCHEMA_PROPS, EXTENSIONS } from './common-data';

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

export const SendOperationWithRootLevelChannelWithNothing: Story = {
  args: {
    source: prepareAsyncApiDocument({
      source: {
        asyncapi: "3.0.0",
        operations: {
          "send-operation-with-root-level-channel-with-nothing": {
            action: "send",
            channel: {
              $ref: "#/channels/first-channel-key"
            },
          }
        },
        channels: {
          "first-channel-key": {
            address: "first-channel-address",
          }
        }
      },
    }),
    operationName: 'send-operation-with-root-level-channel-with-nothing',
    operationType: 'send',
  }
}


export const SendOperationWithRootLevelChannelWithTitle: Story = {
  args: {
    source: prepareAsyncApiDocument({
      source: {
        asyncapi: "3.0.0",
        operations: {
          "send-operation-with-root-level-channel-with-title": {
            action: "send",
            channel: {
              $ref: "#/channels/first-channel-key"
            },
          }
        },
        channels: {
          "first-channel-key": {
            address: "first-channel-address",
            title: "Title of First Channel",
          }
        }
      },
    }),
    operationName: 'send-operation-with-root-level-channel-with-title',
    operationType: 'send',
  }
}

export const SendOperationWithRootLevelChannelWithDescription: Story = {
  args: {
    source: prepareAsyncApiDocument({
      source: {
        asyncapi: "3.0.0",
        operations: {
          "send-operation-with-root-level-channel-with-description": {
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
          }
        }
      },
    }),
    operationName: 'send-operation-with-root-level-channel-with-description',
    operationType: 'send',
  }
}

export const SendOperationWithRootLevelChannelWithTitleAndDescription: Story = {
  args: {
    source: prepareAsyncApiDocument({
      source: {
        asyncapi: "3.0.0",
        operations: {
          "send-operation-with-root-level-channel-with-title-and-description": {
            action: "send",
            channel: {
              $ref: "#/channels/first-channel-key"
            },
          }
        },
        channels: {
          "first-channel-key": {
            address: "first-channel-address",
            title: "Title of First Channel",
            description: "Description of First Channel",
          }
        }
      },
    }),
    operationName: 'send-operation-with-root-level-channel-with-title-and-description',
    operationType: 'send',
  }
}

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

export const SendOperationWithDescriptionAndRootLevelChannelWithNothing: Story = {
  args: {
    source: prepareAsyncApiDocument({
      source: {
        asyncapi: "3.0.0",
        operations: {
          "send-operation-with-description-and-root-level-channel-with-nothing": {
            action: "send",
            description: "Description of Send Operation With Description And Root Level Channel With Nothing",
            channel: {
              $ref: "#/channels/first-channel-key"
            },
          }
        },
        channels: {
          "first-channel-key": {
            address: "first-channel-address",
          }
        }
      },
    }),
    operationName: 'send-operation-with-description-and-root-level-channel-with-nothing',
    operationType: 'send',
  }
}

// Extensions

export const ExtensionsInChannel: Story = {
  args: {
    source: prepareAsyncApiDocument({
      source: {
        asyncapi: "3.0.0",
        channels: {
          "channel-with-extensions": {
            title: 'Channel With Extensions',
            description: 'Description of Channel With Extensions',
            ...EXTENSIONS,
          }
        },
        operations: {
          "send-operation-with-channel-extensions": {
            action: "send",
            channel: {
              $ref: "#/channels/channel-with-extensions"
            },
          }
        },
      },
    }),
    operationName: 'send-operation-with-channel-extensions',
    operationType: 'send',
  }
}

export const ExtensionsInChannelBindings: Story = {
  args: {
    source: prepareAsyncApiDocument({
      source: {
        asyncapi: "3.0.0",
        channels: {
          "channel-with-bindings-extensions": {
            title: 'Channel With Bindings Extensions',
            description: 'Description of Channel With Bindings Extensions',
            bindings: {
              kafka: {
                bindingVersion: "0.5.0",
                predefinedProperty: "kafka-property",
                ...EXTENSIONS,
              }
            }
          }
        },
        operations: {
          "send-operation-with-channel-bindings-extensions": {
            action: "send",
            channel: {
              $ref: "#/channels/channel-with-bindings-extensions"
            }
          }
        }
      },
    }),
    operationName: 'send-operation-with-channel-bindings-extensions',
    operationType: 'send',
  }
}

// Defaults

export const DefaultChannelTitle: Story = {
  args: {
    source: prepareAsyncApiDocument({
      source: {
        asyncapi: "3.0.0",
        channels: {
          "channel-with-default-channel-title": {
            description: 'Description of Channel With Default Title',
          }
        },
        operations: {
          "send-operation-with-default-channel-title": {
            action: "send",
            channel: {
              $ref: "#/channels/channel-with-default-channel-title"
            }
          }
        }
      },
    }),
    operationName: 'send-operation-with-default-channel-title',
    operationType: 'send',
  }
}

export const DefaultChannelDescriptionIfNothing: Story = {
  args: {
    source: prepareAsyncApiDocument({
      source: {
        asyncapi: "3.0.0",
        channels: {
          "channel-with-default-channel-description-if-nothing": {
            title: 'Channel Title',
          }
        },
        operations: {
          "send-operation-with-default-channel-description-if-nothing": {
            action: "send",
            channel: {
              $ref: "#/channels/channel-with-default-channel-description-if-nothing"
            }
          }
        }
      },
    }),
    operationName: 'send-operation-with-default-channel-description-if-nothing',
    operationType: 'send',
  }
}

export const DefaultChannelDescriptionIfSummary: Story = {
  args: {
    source: prepareAsyncApiDocument({
      source: {
        asyncapi: "3.0.0",
        channels: {
          "channel-with-default-channel-description-if-summary": {
            summary: 'Summary of Channel',
          }
        },
        operations: {
          "send-operation-with-default-channel-description-if-summary": {
            action: "send",
            channel: {
              $ref: "#/channels/channel-with-default-channel-description-if-summary"
            }
          }
        }
      },
    }),
    operationName: 'send-operation-with-default-channel-description-if-summary',
    operationType: 'send',
  }
}

export const DefaultChannelDescriptionIfSummaryAndDescription: Story = {
  args: {
    source: prepareAsyncApiDocument({
      source: {
        asyncapi: "3.0.0",
        channels: {
          "channel-with-default-channel-description-if-summary-and-description": {
            summary: 'Summary of Channel',
            description: 'Description of Channel',
          }
        },
        operations: {
          "send-operation-with-default-channel-description-if-summary-and-description": {
            action: "send",
            channel: {
              $ref: "#/channels/channel-with-default-channel-description-if-summary-and-description"
            }
          }
        }
      },
    }),
    operationName: 'send-operation-with-default-channel-description-if-summary-and-description',
    operationType: 'send',
  }
}