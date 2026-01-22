import { AsyncApiOperationViewer } from '@apihub/components/AsyncApiOperationViewer/AsyncApiOperationViewer';
import type { Meta, StoryObj } from '@storybook/react';
import { prepareAsyncApiDocument } from '../preprocess';

// It's necessary because storybook doesn't render nested stories without this empty story
// eslint-disable-next-line storybook/story-exports
const meta = {
  title: 'Async Api Suite/Channel',
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
