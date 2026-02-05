import { AsyncApiOperationViewer } from '@apihub/components/AsyncApiOperationViewer/AsyncApiOperationViewer';
import type { Meta, StoryObj } from '@storybook/react';
import { prepareAsyncApiDocument } from '../preprocess';
import { TEST_REFERENCE_NAME_PROPERTY } from './common-data';

// It's necessary because storybook doesn't render nested stories without this empty story
// eslint-disable-next-line storybook/story-exports
const meta = {
  title: 'Async Api Suite/Channel Parameters',
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

export const SendOperationWithRootLevelChannelWithParameters: Story = {
  args: {
    source: prepareAsyncApiDocument({
      source: {
        asyncapi: "3.0.0",
        operations: {
          "send-operation-with-root-level-channel-with-parameters": {
            title: "Test operation",
            action: "send",
            channel: { $ref: "#/channels/test-channel-key" },
            messages: [
              { $ref: "#/components/messages/Message" }
            ]
          }
        },
        channels: {
          "test-channel-key": {
            title: "Test channel",
            address: "test-address",
            parameters: {
              param1: {
                description: "Parameter",
                enum: ["Value1", "Value2"],
                examples: ["ValueBlaBla"],
                default: "Value1",
                location: "$entity.id"
              }
            }
          }
        },
        components: {
          messages: {
            Message: {
              name: "TestMessage",
              description: "Test message description",
            }
          }
        }
      },
    }),
    referenceNamePropertyKey: TEST_REFERENCE_NAME_PROPERTY,
  }
}