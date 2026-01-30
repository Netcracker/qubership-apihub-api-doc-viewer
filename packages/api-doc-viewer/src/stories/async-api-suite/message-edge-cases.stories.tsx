import { AsyncApiOperationViewer } from '@apihub/components/AsyncApiOperationViewer/AsyncApiOperationViewer';
import type { Meta, StoryObj } from '@storybook/react';
import { prepareAsyncApiDocument } from '../preprocess';
import { CIRCULAR_SCHEMA_KIND_A, CIRCULAR_SCHEMA_KIND_B, BINDINGS_WITH_SCHEMA_FOO_REF, JSON_SCHEMA_IN_EXTENSIONS } from './common-data';

// It's necessary because storybook doesn't render nested stories without this empty story
// eslint-disable-next-line storybook/story-exports
const meta = {
  title: 'Async Api Suite/Message Edge Cases',
  component: AsyncApiOperationViewer,
  parameters: {},
  argTypes: {
    source: {
      control: { disable: true },
      table: { disable: true },
    }
  },
  args: {
    source: {}
  }
} satisfies Meta<typeof AsyncApiOperationViewer>;

export default meta;

type Story = StoryObj<typeof meta>

// Bindings

export const BindingWithRef: Story = {
  args: {
    source: prepareAsyncApiDocument({
      source: {
        asyncapi: "3.0.0",
        operations: {
          "binding-with-ref": {
            action: "send",
            channel: {
              $ref: "#/channels/first-channel-key"
            },
            messages: [
              { $ref: '#/messages/first-message-key' },
            ]
          }
        },
        channels: {
          "first-channel-key": {
            address: "first-channel-address",
          }
        },
        messages: {
          'first-message-key': {
            title: 'First Message Key',
            bindings: { ...BINDINGS_WITH_SCHEMA_FOO_REF },
          }
        },
        components: {
          schemas: {
            foo: {
              type: 'integer',
              minimum: 1,
              maximum: 100,
              default: 42,
            }
          }
        }
      },
    }),
  }
}

export const BindingWithCircularRefKindA: Story = {
  args: {
    source: prepareAsyncApiDocument({
      circular: true,
      source: {
        asyncapi: "3.0.0",
        operations: {
          "binding-with-ref": {
            action: "send",
            channel: {
              $ref: "#/channels/first-channel-key"
            },
            messages: [
              { $ref: '#/messages/first-message-key' },
            ]
          }
        },
        channels: {
          "first-channel-key": {
            address: "first-channel-address",
          }
        },
        messages: {
          'first-message-key': {
            title: 'First Message Key',
            bindings: { ...BINDINGS_WITH_SCHEMA_FOO_REF },
          }
        },
        components: {
          schemas: { ...CIRCULAR_SCHEMA_KIND_A }
        }
      },
    }),
  }
}

export const BindingWithCircularRefKindB: Story = {
  args: {
    source: prepareAsyncApiDocument({
      circular: true,
      source: {
        asyncapi: "3.0.0",
        operations: {
          "binding-with-ref": {
            action: "send",
            channel: {
              $ref: "#/channels/first-channel-key"
            },
            messages: [
              { $ref: '#/messages/first-message-key' },
            ]
          }
        },
        channels: {
          "first-channel-key": {
            address: "first-channel-address",
          }
        },
        messages: {
          'first-message-key': {
            title: 'First Message Key',
            bindings: { ...BINDINGS_WITH_SCHEMA_FOO_REF },
          }
        },
        components: {
          schemas: { ...CIRCULAR_SCHEMA_KIND_B }
        }
      },
    }),
  }
}

// Headers

export const HeadersWithRef: Story = {
  args: {
    source: prepareAsyncApiDocument({
      source: {
        asyncapi: "3.0.0",
        operations: {
          "binding-with-ref": {
            action: "send",
            channel: { $ref: "#/channels/first-channel-key" },
            messages: [
              { $ref: '#/messages/first-message-key' },
            ]
          }
        },
        channels: {
          "first-channel-key": {
            address: "first-channel-address",
          }
        },
        messages: {
          'first-message-key': {
            title: 'First Message Key',
            headers: { $ref: '#/components/schemas/foo' }
          }
        },
        components: {
          schemas: {
            foo: {
              type: 'integer',
              minimum: 1,
              maximum: 100,
              default: 42,
            }
          }
        }
      }
    }),
  }
}

export const HeadersWithCircularRefKindA: Story = {
  args: {
    source: prepareAsyncApiDocument({
      source: {
        asyncapi: "3.0.0",
        operations: {
          "binding-with-ref": {
            action: "send",
            channel: { $ref: "#/channels/first-channel-key" },
            messages: [
              { $ref: '#/messages/first-message-key' },
            ]
          }
        },
        channels: {
          "first-channel-key": {
            address: "first-channel-address",
          }
        },
        messages: {
          'first-message-key': {
            title: 'First Message Key',
            headers: { $ref: '#/components/schemas/foo' }
          }
        },
        components: {
          schemas: { ...CIRCULAR_SCHEMA_KIND_A }
        }
      }
    }),
  }
}

export const HeadersWithCircularRefKindB: Story = {
  args: {
    source: prepareAsyncApiDocument({
      source: {
        asyncapi: "3.0.0",
        operations: {
          "binding-with-ref": {
            action: "send",
            channel: { $ref: "#/channels/first-channel-key" },
            messages: [
              { $ref: '#/messages/first-message-key' },
            ]
          }
        },
        channels: {
          "first-channel-key": {
            address: "first-channel-address",
          }
        },
        messages: {
          'first-message-key': {
            title: 'First Message Key',
            headers: { $ref: '#/components/schemas/foo' }
          }
        },
        components: {
          schemas: { ...CIRCULAR_SCHEMA_KIND_B }
        }
      }
    }),
  }
}

// Payload

export const PayloadWithRef: Story = {
  args: {
    source: prepareAsyncApiDocument({
      source: {
        asyncapi: "3.0.0",
        operations: {
          "binding-with-ref": {
            action: "send",
            channel: { $ref: "#/channels/first-channel-key" },
            messages: [
              { $ref: '#/messages/first-message-key' },
            ]
          }
        },
        channels: {
          "first-channel-key": {
            address: "first-channel-address",
          }
        },
        messages: {
          'first-message-key': {
            title: 'First Message Key',
            payload: { $ref: '#/components/schemas/foo' }
          }
        },
        components: {
          schemas: {
            foo: {
              type: 'integer',
              minimum: 1,
              maximum: 100,
              default: 42,
            }
          }
        }
      }
    }),
  }
}

export const PayloadWithCircularRefKindA: Story = {
  args: {
    source: prepareAsyncApiDocument({
      source: {
        asyncapi: "3.0.0",
        operations: {
          "binding-with-ref": {
            action: "send",
            channel: { $ref: "#/channels/first-channel-key" },
            messages: [
              { $ref: '#/messages/first-message-key' },
            ]
          }
        },
        channels: {
          "first-channel-key": {
            address: "first-channel-address",
          }
        },
        messages: {
          'first-message-key': {
            title: 'First Message Key',
            payload: { $ref: '#/components/schemas/foo' }
          }
        },
        components: {
          schemas: { ...CIRCULAR_SCHEMA_KIND_A }
        }
      }
    }),
  }
}

export const PayloadWithCircularRefKindB: Story = {
  args: {
    source: prepareAsyncApiDocument({
      source: {
        asyncapi: "3.0.0",
        operations: {
          "binding-with-ref": {
            action: "send",
            channel: { $ref: "#/channels/first-channel-key" },
            messages: [
              { $ref: '#/messages/first-message-key' },
            ]
          }
        },
        channels: {
          "first-channel-key": {
            address: "first-channel-address",
          }
        },
        messages: {
          'first-message-key': {
            title: 'First Message Key',
            payload: { $ref: '#/components/schemas/foo' }
          }
        },
        components: {
          schemas: { ...CIRCULAR_SCHEMA_KIND_B }
        }
      }
    }),
  }
}

// Headers (Multiformat Schema)

export const HeadersMultiformatWithRef: Story = {
  args: {
    source: prepareAsyncApiDocument({
      source: {
        asyncapi: "3.0.0",
        operations: {
          "binding-with-ref": {
            action: "send",
            channel: { $ref: "#/channels/first-channel-key" },
            messages: [
              { $ref: '#/messages/first-message-key' },
            ]
          }
        },
        channels: {
          "first-channel-key": {
            address: "first-channel-address",
          }
        },
        messages: {
          'first-message-key': {
            title: 'First Message Key',
            headers: {
              schema: { $ref: '#/components/schemas/foo' },
              schemaFormat: 'application/vnd.aai.asyncapi+json;version=3.0.0',
            }
          }
        },
        components: {
          schemas: {
            foo: {
              type: 'integer',
              minimum: 1,
              maximum: 100,
              default: 42,
            }
          }
        }
      }
    }),
  }
}

export const HeadersMultiformatWithCircularRefKindA: Story = {
  args: {
    source: prepareAsyncApiDocument({
      source: {
        asyncapi: "3.0.0",
        operations: {
          "binding-with-ref": {
            action: "send",
            channel: { $ref: "#/channels/first-channel-key" },
            messages: [
              { $ref: '#/messages/first-message-key' },
            ]
          }
        },
        channels: {
          "first-channel-key": {
            address: "first-channel-address",
          }
        },
        messages: {
          'first-message-key': {
            title: 'First Message Key',
            headers: {
              schema: { $ref: '#/components/schemas/foo' },
              schemaFormat: 'application/vnd.aai.asyncapi+json;version=3.0.0',
            }
          }
        },
        components: {
          schemas: { ...CIRCULAR_SCHEMA_KIND_A }
        }
      }
    }),
  }
}

export const HeadersMultiformatWithCircularRefKindB: Story = {
  args: {
    source: prepareAsyncApiDocument({
      source: {
        asyncapi: "3.0.0",
        operations: {
          "binding-with-ref": {
            action: "send",
            channel: { $ref: "#/channels/first-channel-key" },
            messages: [
              { $ref: '#/messages/first-message-key' },
            ]
          }
        },
        channels: {
          "first-channel-key": {
            address: "first-channel-address",
          }
        },
        messages: {
          'first-message-key': {
            title: 'First Message Key',
            headers: {
              schema: { $ref: '#/components/schemas/foo' },
              schemaFormat: 'application/vnd.aai.asyncapi+json;version=3.0.0',
            }
          }
        },
        components: {
          schemas: { ...CIRCULAR_SCHEMA_KIND_B }
        }
      }
    }),
  }
}

// Payload (Multiformat Schema)

export const PayloadMultiformatWithRef: Story = {
  args: {
    source: prepareAsyncApiDocument({
      source: {
        asyncapi: "3.0.0",
        operations: {
          "binding-with-ref": {
            action: "send",
            channel: { $ref: "#/channels/first-channel-key" },
            messages: [
              { $ref: '#/messages/first-message-key' },
            ]
          }
        },
        channels: {
          "first-channel-key": {
            address: "first-channel-address",
          }
        },
        messages: {
          'first-message-key': {
            title: 'First Message Key',
            payload: {
              schema: { $ref: '#/components/schemas/foo' },
              schemaFormat: 'application/vnd.aai.asyncapi+json;version=3.0.0',
            }
          }
        },
        components: {
          schemas: {
            foo: {
              type: 'integer',
              minimum: 1,
              maximum: 100,
              default: 42,
            }
          }
        }
      }
    }),
  }
}

export const PayloadMultiformatWithCircularRefKindA: Story = {
  args: {
    source: prepareAsyncApiDocument({
      source: {
        asyncapi: "3.0.0",
        operations: {
          "binding-with-ref": {
            action: "send",
            channel: { $ref: "#/channels/first-channel-key" },
            messages: [
              { $ref: '#/messages/first-message-key' },
            ]
          }
        },
        channels: {
          "first-channel-key": {
            address: "first-channel-address",
          }
        },
        messages: {
          'first-message-key': {
            title: 'First Message Key',
            payload: {
              schema: { $ref: '#/components/schemas/foo' },
              schemaFormat: 'application/vnd.aai.asyncapi+json;version=3.0.0',
            }
          }
        },
        components: {
          schemas: { ...CIRCULAR_SCHEMA_KIND_A }
        }
      }
    }),
  }
}

export const PayloadMultiformatWithCircularRefKindB: Story = {
  args: {
    source: prepareAsyncApiDocument({
      source: {
        asyncapi: "3.0.0",
        operations: {
          "binding-with-ref": {
            action: "send",
            channel: { $ref: "#/channels/first-channel-key" },
            messages: [
              { $ref: '#/messages/first-message-key' },
            ]
          }
        },
        channels: {
          "first-channel-key": {
            address: "first-channel-address",
          }
        },
        messages: {
          'first-message-key': {
            title: 'First Message Key',
            payload: {
              schema: { $ref: '#/components/schemas/foo' },
              schemaFormat: 'application/vnd.aai.asyncapi+json;version=3.0.0',
            }
          }
        },
        components: {
          schemas: { ...CIRCULAR_SCHEMA_KIND_B }
        }
      }
    }),
  }
}

// Json Schema in extensions

export const JsonSchemaInExtensions: Story = {
  args: {
    source: prepareAsyncApiDocument({
      source: {
        asyncapi: "3.0.0",
        operations: {
          "json-schema-in-extensions": {
            action: "send",
            channel: { $ref: "#/channels/first-channel-key" },
            messages: [
              { $ref: '#/messages/first-message-key' },
            ]
          }
        },
        channels: {
          "first-channel-key": {
            address: "first-channel-address",
          }
        },
        messages: {
          'first-message-key': {
            title: 'First Message Key',
            ...JSON_SCHEMA_IN_EXTENSIONS,
          }
        },
      }
    })
  }
}
