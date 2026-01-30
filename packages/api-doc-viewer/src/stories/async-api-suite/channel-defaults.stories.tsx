import { AsyncApiOperationViewer } from '@apihub/components/AsyncApiOperationViewer/AsyncApiOperationViewer';
import type { Meta, StoryObj } from '@storybook/react';
import { prepareAsyncApiDocument } from '../preprocess';

// It's necessary because storybook doesn't render nested stories without this empty story
// eslint-disable-next-line storybook/story-exports
const meta = {
  title: 'Async Api Suite/Channel Defaults',
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
    operationKey: 'send-operation-with-default-channel-title',
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
    operationKey: 'send-operation-with-default-channel-description-if-nothing',
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
    operationKey: 'send-operation-with-default-channel-description-if-summary',
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
    operationKey: 'send-operation-with-default-channel-description-if-summary-and-description',
    operationType: 'send',
  }
}
