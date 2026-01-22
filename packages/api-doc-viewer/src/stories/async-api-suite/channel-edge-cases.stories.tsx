import { AsyncApiOperationViewer } from '@apihub/components/AsyncApiOperationViewer/AsyncApiOperationViewer';
import type { Meta, StoryObj } from '@storybook/react';
import { prepareAsyncApiDocument } from '../preprocess';
import { CIRCULAR_SCHEMA_KIND_A, CIRCULAR_SCHEMA_KIND_B, BINDINGS_WITH_SCHEMA_FOO_REF } from './common-data';

// It's necessary because storybook doesn't render nested stories without this empty story
// eslint-disable-next-line storybook/story-exports
const meta = {
  title: 'Async Api Suite/Channel Edge Cases',
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
          }
        },
        channels: {
          "first-channel-key": {
            address: "first-channel-address",
            bindings: { ...BINDINGS_WITH_SCHEMA_FOO_REF }
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
            channel: { $ref: "#/channels/first-channel-key" },
          }
        },
        channels: {
          "first-channel-key": {
            address: "first-channel-address",
            bindings: { ...BINDINGS_WITH_SCHEMA_FOO_REF }
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
            channel: { $ref: "#/channels/first-channel-key" },
          }
        },
        channels: {
          "first-channel-key": {
            address: "first-channel-address",
            bindings: { ...BINDINGS_WITH_SCHEMA_FOO_REF }
          }
        },
        components: {
          schemas: { ...CIRCULAR_SCHEMA_KIND_B }
        }
      },
    }),
  }
}
