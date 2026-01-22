import { AsyncApiOperationViewer } from '@apihub/components/AsyncApiOperationViewer/AsyncApiOperationViewer';
import type { Meta, StoryObj } from '@storybook/react';
import { prepareAsyncApiDocument } from '../preprocess';
import { BINDING_WITH_OBJECT_PROPS, BINDING_WITH_PRIMITIVE_PROPS, BINDING_WITH_SCHEMA_PROPS, EXTENSIONS } from './common-data';

// It's necessary because storybook doesn't render nested stories without this empty story
// eslint-disable-next-line storybook/story-exports
const meta = {
  title: 'Async Api Suite/Operations',
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

export const SendOperationWithNothing: Story = {
  args: {
    source: prepareAsyncApiDocument({
      source: {
        asyncapi: "3.0.0",
        operations: {
          "send-operation-with-nothing": {
            action: "send",
          }
        }
      },
    }),
    operationName: 'send-operation-with-nothing',
    operationType: 'send',
  }
}

export const SendOperationWithTitle: Story = {
  args: {
    source: prepareAsyncApiDocument({
      source: {
        asyncapi: "3.0.0",
        operations: {
          "send-operation-with-title": {
            action: "send",
            title: "Send Operation With Title",
          }
        }
      },
    }),
    operationName: 'send-operation-with-title',
    operationType: 'send',
  }
}

export const SendOperationWithDescription: Story = {
  args: {
    source: prepareAsyncApiDocument({
      source: {
        asyncapi: "3.0.0",
        operations: {
          "send-operation-with-description": {
            action: "send",
            description: "Description of Send Operation With Description",
          }
        }
      },
    }),
    operationName: 'send-operation-with-description',
    operationType: 'send',
  }
}

export const SendOperationWithTitleAndDescription: Story = {
  args: {
    source: prepareAsyncApiDocument({
      source: {
        asyncapi: "3.0.0",
        operations: {
          "send-operation-with-title-and-description": {
            action: "send",
            title: "Send Operation With Title And Description",
            description: "Description of Send Operation With Title And Description",
          }
        }
      },
    }),
    operationName: 'send-operation-with-title-and-description',
    operationType: 'send',
  }
}

export const SendOperationWithBindingsKafkaWithNothing: Story = {
  args: {
    source: prepareAsyncApiDocument({
      source: {
        asyncapi: "3.0.0",
        operations: {
          "send-operation-with-bindings-kafka": {
            action: "send",
            bindings: {
              kafka: {
                bindingVersion: "0.5.0",
              }
            }
          }
        }
      },
    }),
    operationName: 'send-operation-with-bindings-kafka',
    operationType: 'send',
  }
}

export const SendOperationWithBindingsKafkaWithOnlyPrimitiveProps: Story = {
  args: {
    source: prepareAsyncApiDocument({
      source: {
        asyncapi: "3.0.0",
        operations: {
          "send-operation-with-bindings-kafka-with-only-primitive-props": {
            action: "send",
            bindings: {
              kafka: {
                ...BINDING_WITH_PRIMITIVE_PROPS,
              }
            }
          }
        }
      },
    }),
    operationName: 'send-operation-with-bindings-kafka-with-only-primitive-props',
    operationType: 'send',
  }
}

export const SendOperationWithBindingsKafkaWithObjectProps: Story = {
  args: {
    source: prepareAsyncApiDocument({
      source: {
        asyncapi: "3.0.0",
        operations: {
          "send-operation-with-bindings-kafka-with-object-props": {
            action: "send",
            bindings: {
              kafka: {
                ...BINDING_WITH_OBJECT_PROPS,
              }
            }
          }
        }
      },
    }),
    operationName: 'send-operation-with-bindings-kafka-with-object-props',
    operationType: 'send',
  }
}

export const SendOperationWithBindingsKafkaWithSchemaProps: Story = {
  args: {
    source: prepareAsyncApiDocument({
      source: {
        asyncapi: "3.0.0",
        operations: {
          "send-operation-with-bindings-kafka-with-schema-props": {
            action: "send",
            bindings: {
              kafka: {
                ...BINDING_WITH_SCHEMA_PROPS,
              }
            }
          }
        }
      },
    }),
    operationName: 'send-operation-with-bindings-kafka-with-schema-props',
    operationType: 'send',
  }
}

export const SendOperationTwoBindings: Story = {
  args: {
    source: prepareAsyncApiDocument({
      source: {
        asyncapi: "3.0.0",
        operations: {
          "send-operation-two-bindings": {
            action: "send",
            bindings: {
              kafka: {
                clientId: "order-producer",
                groupId: "order-processing",
                bindingVersion: "0.4.0",
              },
              amqp: {
                mandatory: true,
                priority: 5,
                deliveryMode: 2,
                expiration: 60000,
                userId: "svc-order",
                bindingVersion: "0.3.0",
              },
            }
          }
        }
      }
    }),
    operationName: 'send-operation-two-bindings',
    operationType: 'send',
  }
}

export const SendOperationWithDescriptionAndBindingsWithNothing: Story = {
  args: {
    source: prepareAsyncApiDocument({
      source: {
        asyncapi: "3.0.0",
        operations: {
          "send-operation-with-description-and-bindings-with-nothing": {
            action: "send",
            description: "Description of Send Operation With Description And Bindings With Nothing",
            bindings: {
              kafka: {
                bindingVersion: "0.5.0",
              }
            }
          }
        },
      },
    }),
    operationName: 'send-operation-with-description-and-bindings-with-nothing',
    operationType: 'send',
  }
}

export const ReceiveOperationWithNothing: Story = {
  args: {
    source: prepareAsyncApiDocument({
      source: {
        asyncapi: "3.0.0",
        operations: {
          "receive-operation-with-nothing": {
            action: "receive",
          }
        }
      },
    }),
    operationName: 'receive-operation-with-nothing',
    operationType: 'receive',
  }
}

// Extensions

export const ExtensionsInOperation: Story = {
  args: {
    source: prepareAsyncApiDocument({
      source: {
        asyncapi: "3.0.0",
        operations: {
          "send-operation-with-operation-extensions": {
            action: "send",
            ...EXTENSIONS,
          }
        }
      },
    }),
    operationName: 'send-operation-with-operation-extensions',
    operationType: 'send',
  }
}

export const ExtensionsInOperationBindings: Story = {
  args: {
    source: prepareAsyncApiDocument({
      source: {
        asyncapi: "3.0.0",
        operations: {
          "send-operation-with-operation-bindings-extensions": {
            action: "send",
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
    }),
    operationName: 'send-operation-with-operation-bindings-extensions',
    operationType: 'send',
  }
}

// Defaults

export const DefaultOperationTitle: Story = {
  args: {
    source: prepareAsyncApiDocument({
      source: {
        asyncapi: "3.0.0",
        operations: {
          "send-operation-with-default-operation-title": {
            action: "send",
          }
        }
      },
    }),
    operationName: 'send-operation-with-default-operation-title',
    operationType: 'send',
  }
}



export const DefaultOperationDescriptionIfNothing: Story = {
  args: {
    source: prepareAsyncApiDocument({
      source: {
        asyncapi: "3.0.0",
        operations: {
          "send-operation-with-default-operation-description-if-nothing": {
            action: "send",
          }
        }
      },
    }),
    operationName: 'send-operation-with-default-operation-description-if-nothing',
    operationType: 'send',
  }
}

export const DefaultOperationDescriptionIfSummary: Story = {
  args: {
    source: prepareAsyncApiDocument({
      source: {
        asyncapi: "3.0.0",
        operations: {
          "send-operation-with-default-operation-description-if-summary": {
            action: "send",
            summary: 'Summary of Operation',
          }
        }
      },
    }),
    operationName: 'send-operation-with-default-operation-description-if-summary',
    operationType: 'send',
  }
}

export const DefaultOperationDescriptionIfSummaryAndDescription: Story = {
  args: {
    source: prepareAsyncApiDocument({
      source: {
        asyncapi: "3.0.0",
        operations: {
          "send-operation-with-default-operation-description-if-summary-and-description": {
            action: "send",
            summary: 'Summary of Operation',
            description: 'Description of Operation',
          }
        },
      },
    }),
    operationName: 'send-operation-with-default-operation-description-if-summary-and-description',
    operationType: 'send',
  }
}