import { AsyncApiOperationViewer } from '@apihub/components/AsyncApiOperationViewer/AsyncApiOperationViewer';
import type { Meta, StoryObj } from '@storybook/react';
import { prepareAsyncApiDocument } from '../preprocess';
import { BINDING_WITH_OBJECT_PROPS, BINDING_WITH_PRIMITIVE_PROPS, BINDING_WITH_SCHEMA_PROPS } from './common-data';

// It's necessary because storybook doesn't render nested stories without this empty story
// eslint-disable-next-line storybook/story-exports
const meta = {
  title: 'Async Api Suite/Operation Bindings',
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
    operationKey: 'send-operation-with-bindings-kafka',
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
    operationKey: 'send-operation-with-bindings-kafka-with-only-primitive-props',
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
    operationKey: 'send-operation-with-bindings-kafka-with-object-props',
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
    operationKey: 'send-operation-with-bindings-kafka-with-schema-props',
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
    operationKey: 'send-operation-two-bindings',
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
    operationKey: 'send-operation-with-description-and-bindings-with-nothing',
    operationType: 'send',
  }
}
