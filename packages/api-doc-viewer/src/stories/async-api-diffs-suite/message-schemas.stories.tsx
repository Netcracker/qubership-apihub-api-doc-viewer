// It's necessary because storybook doesn't render nested stories without this empty story

import { AsyncApiOperationDiffsViewer } from "@apihub/components/AsyncApiOperationViewer/AsyncApiOperationDiffsViewer";
import type { Meta, StoryObj } from '@storybook/react';
import { prepareAsyncApiDiffsDocument } from "../preprocess";
import { TEST_DIFF_META_KEYS, TEST_REFERENCE_NAME_PROPERTY } from "./shared-test-data";

// eslint-disable-next-line storybook/story-exports
const meta = {
  title: 'Async API Diffs Suite/Message Schemas',
  component: AsyncApiOperationDiffsViewer,
  parameters: {},
  argTypes: {
    mergedSource: {
      control: 'object'
    }
  },
  args: {
    mergedSource: {}
  }
} satisfies Meta<typeof AsyncApiOperationDiffsViewer>;

export default meta;

type Story = StoryObj<typeof meta>

const OPERATION_KEY = 'send-operation';
const CHANNEL_KEY = 'test-channel';
const MESSAGE_KEY = 'MessageID';

type MessageContent = {
  name?: string;
  title?: string;
  description?: string;
  summary?: string;
  headers?: Record<string, unknown>;
  payload?: Record<string, unknown>;
};

type ChannelContent = {
  address?: string;
  description?: string;
  summary?: string;
};

type SourceOptions = {
  message: MessageContent;
  channel?: ChannelContent;
  operationType?: 'send' | 'receive';
};

const createSource = ({ message, channel = {}, operationType = 'send' }: SourceOptions) => {
  return {
    asyncapi: "3.0.0",
    operations: {
      [OPERATION_KEY]: {
        action: operationType,
        channel: { $ref: `#/channels/${CHANNEL_KEY}` },
        messages: [{ $ref: `#/channels/${CHANNEL_KEY}/messages/${MESSAGE_KEY}` }],
      }
    },
    channels: {
      [CHANNEL_KEY]: {
        ...channel,
        messages: { [MESSAGE_KEY]: message },
      }
    }
  };
};

const createStory = (
  beforeSource: ReturnType<typeof createSource>,
  afterSource: ReturnType<typeof createSource>,
): Story => ({
  args: {
    devMode: true,
    mergedSource: prepareAsyncApiDiffsDocument({ beforeSource, afterSource }),
    operationKeys: {
      operationKey: OPERATION_KEY,
      messageKey: MESSAGE_KEY,
    },
    referenceNamePropertyKey: TEST_REFERENCE_NAME_PROPERTY,
    diffMetaKeys: TEST_DIFF_META_KEYS,
  }
});


export const AddressDescriptionSummary: Story = createStory(
  createSource({
    message: {
      description: "Message description",
      summary: "Message summary",
      headers: {
        type: 'object',
        properties: {
          name: {
            type: 'string',
            description: 'Name',
            minLength: 1,
          },
        },
      },
      payload: {
        type: 'object',
        properties: {
          name: {
            type: 'string',
            description: 'Name',
            enum: ['John', 'Jane'],
          },
          age: {
            type: 'number',
            description: 'Age',
            minimum: 0,
            maximum: 100,
          },
        },
      },
    },
    channel: {
      address: "test.address",
    },
  }),
  createSource({
    message: {
      description: "Message description",
      summary: "Message summary",
      headers: {
        type: 'object',
        properties: {
          name: {
            type: 'string',
            description: 'Name',
            minLength: 2,
            maxLength: 10,
          },
        },
      },
      payload: {
        type: 'object',
        properties: {
          name: {
            type: 'string',
            description: 'Name',
            enum: ['John', 'Jane', 'Doe'],
          },
          age: {
            type: 'number',
            description: 'Age',
            maximum: 100,
            default: 25,
          },
        },
      },
    },
    channel: {
      address: "test.address",
    },
  })
);
