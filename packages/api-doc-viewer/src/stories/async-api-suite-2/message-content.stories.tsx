// It's necessary because storybook doesn't render nested stories without this empty story

import { AsyncApiOperationViewer } from "@apihub/components/AsyncApiOperationViewer/AsyncApiOperationViewer";
import type { Meta, StoryObj } from '@storybook/react';
import { EXTENSIONS, TEST_REFERENCE_NAME_PROPERTY } from "./shared-test-data";
import { prepareAsyncApiDocument } from "../preprocess";

// eslint-disable-next-line storybook/story-exports
const meta = {
  title: 'Async Api Suite 2/Message Content',
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

const OPERATION_KEY = 'send-operation';
const CHANNEL_KEY = 'ChannelID';
const MESSAGE_KEY = 'MessageID';

const HEADER_SCHEMA = {
  type: "object",
  properties: {
    traceId: { type: "string" },
    requestId: { type: "string" },
  },
};

const HEADER_MULTI_SCHEMA = {
  schemaFormat: "application/schema+json;version=draft-07",
  schema: {
    type: "object",
    properties: {
      traceId: { type: "string" },
      requestId: { type: "string" },
    },
  },
};

const PAYLOAD_SCHEMA = {
  type: "object",
  properties: {
    id: { type: "string" },
    status: { type: "string" },
  },
};

const PAYLOAD_MULTI_SCHEMA = {
  schemaFormat: "application/schema+json;version=draft-07",
  schema: {
    type: "object",
    properties: {
      id: { type: "string" },
      status: { type: "string" },
    },
  },
};

type MessageContent = {
  headers?: Record<string, unknown>;
  payload?: Record<string, unknown>;
  bindings?: Record<string, unknown>;
  [key: string]: unknown;
};

type SourceOptions = {
  message: MessageContent;
  operationType?: 'send' | 'receive';
};

const createSource = ({ message, operationType = 'send' }: SourceOptions) => ({
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
      messages: {
        [MESSAGE_KEY]: {
          name: "Message Name",
          ...message,
        }
      },
    }
  }
});

const createStory = (source: ReturnType<typeof createSource>): Story => ({
  args: {
    source: prepareAsyncApiDocument({ source }),
    operationKey: OPERATION_KEY,
    operationType: 'send',
    referenceNamePropertyKey: TEST_REFERENCE_NAME_PROPERTY,
  }
});

export const Headers: Story = createStory(createSource({
  message: {
    headers: HEADER_SCHEMA,
  },
}));

export const HeadersMultiSchemaObject: Story = createStory(createSource({
  message: {
    headers: HEADER_MULTI_SCHEMA,
  },
}));

export const Extensions: Story = createStory(createSource({
  message: {
    ...EXTENSIONS,
  },
}));

export const BindingsOneOption: Story = createStory(createSource({
  message: {
    bindings: {
      kafka: {
        bindingVersion: "0.5.0",
      }
    },
  },
}));

export const BindingsTwoOptionsSelectedFirst: Story = createStory(createSource({
  message: {
    bindings: {
      kafka: {
        bindingVersion: "0.5.0",
      },
      mqtt: {
        bindingVersion: "0.2.0",
      },
    },
  },
}));

export const BindingsTwoOptionsSelectedSecond: Story = createStory(createSource({
  message: {
    bindings: {
      kafka: {
        bindingVersion: "0.5.0",
      },
      mqtt: {
        bindingVersion: "0.2.0",
      },
    },
  },
}));

export const Payload: Story = createStory(createSource({
  message: {
    payload: PAYLOAD_SCHEMA,
  },
}));

export const PayloadMultiSchemaObject: Story = createStory(createSource({
  message: {
    payload: PAYLOAD_MULTI_SCHEMA,
  },
}));

export const HeadersExtensions: Story = createStory(createSource({
  message: {
    headers: HEADER_SCHEMA,
    ...EXTENSIONS,
  },
}));

export const HeadersBindingsOneOption: Story = createStory(createSource({
  message: {
    headers: HEADER_SCHEMA,
    bindings: {
      kafka: {
        bindingVersion: "0.5.0",
      }
    },
  },
}));

export const HeadersPayload: Story = createStory(createSource({
  message: {
    headers: HEADER_SCHEMA,
    payload: PAYLOAD_SCHEMA,
  },
}));

export const ExtensionsBindingsOneOption: Story = createStory(createSource({
  message: {
    ...EXTENSIONS,
    bindings: {
      kafka: {
        bindingVersion: "0.5.0",
      }
    },
  },
}));

export const ExtensionsPayload: Story = createStory(createSource({
  message: {
    ...EXTENSIONS,
    payload: PAYLOAD_SCHEMA,
  },
}));

export const BindingsOneOptionPayload: Story = createStory(createSource({
  message: {
    bindings: {
      kafka: {
        bindingVersion: "0.5.0",
      }
    },
    payload: PAYLOAD_SCHEMA,
  },
}));
