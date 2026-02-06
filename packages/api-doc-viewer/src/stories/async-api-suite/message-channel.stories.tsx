// It's necessary because storybook doesn't render nested stories without this empty story

import { AsyncApiOperationViewer } from "@apihub/components/AsyncApiOperationViewer/AsyncApiOperationViewer";
import type { Meta, StoryObj } from '@storybook/react';
import { EXTENSIONS, TEST_REFERENCE_NAME_PROPERTY } from "./shared-test-data";
import { prepareAsyncApiDocument } from "../preprocess";

// eslint-disable-next-line storybook/story-exports
const meta = {
  title: 'Async API Suite/Message Channel',
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

type ChannelContent = {
  title?: string;
  address?: string;
  description?: string;
  summary?: string;
  parameters?: Record<string, unknown>;
  bindings?: Record<string, unknown>;
  [key: string]: unknown;
};

type SourceOptions = {
  channel: ChannelContent;
  operationType?: 'send' | 'receive';
};

const createSource = ({ channel, operationType = 'send' }: SourceOptions) => ({
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
      messages: {
        [MESSAGE_KEY]: {
          name: "Message Name",
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
    messageKey: MESSAGE_KEY,
    referenceNamePropertyKey: TEST_REFERENCE_NAME_PROPERTY,
  }
});

export const ChannelID: Story = createStory(createSource({
  channel: {},
}));

export const Title: Story = createStory(createSource({
  channel: {
    title: "Channel Title",
  },
}));

export const Address: Story = createStory(createSource({
  channel: {
    address: "test.address",
  },
}));

export const Description: Story = createStory(createSource({
  channel: {
    description: "Channel description",
  },
}));

export const Summary: Story = createStory(createSource({
  channel: {
    summary: "Channel summary",
  },
}));

export const AddressParameters: Story = createStory(createSource({
  channel: {
    parameters: {
      param1: {
        description: "Parameter description",
      },
    },
  },
}));

export const Extensions: Story = createStory(createSource({
  channel: {
    ...EXTENSIONS,
  },
}));

export const BindingsOneOption: Story = createStory(createSource({
  channel: {
    bindings: {
      kafka: {
        bindingVersion: "0.5.0",
      }
    },
  },
}));

export const BindingsTwoOptionsSelectedFirst: Story = createStory(createSource({
  channel: {
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
  channel: {
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

export const DescriptionSummary: Story = createStory(createSource({
  channel: {
    description: "Channel description",
    summary: "Channel summary",
  },
}));

export const DescriptionAddressParameters: Story = createStory(createSource({
  channel: {
    description: "Channel description",
    parameters: {
      param1: {
        description: "Parameter description",
      },
    },
  },
}));

export const DescriptionExtensions: Story = createStory(createSource({
  channel: {
    description: "Channel description",
    ...EXTENSIONS,
  },
}));

export const DescriptionBindingsOneOption: Story = createStory(createSource({
  channel: {
    description: "Channel description",
    bindings: {
      kafka: {
        bindingVersion: "0.5.0",
      }
    },
  },
}));

export const AddressParametersExtensions: Story = createStory(createSource({
  channel: {
    parameters: {
      param1: {
        description: "Parameter description",
      },
    },
    ...EXTENSIONS,
  },
}));

export const AddressParametersBindingsOneOption: Story = createStory(createSource({
  channel: {
    parameters: {
      param1: {
        description: "Parameter description",
      },
    },
    bindings: {
      kafka: {
        bindingVersion: "0.5.0",
      }
    },
  },
}));

export const ExtensionsBindingsOneOption: Story = createStory(createSource({
  channel: {
    ...EXTENSIONS,
    bindings: {
      kafka: {
        bindingVersion: "0.5.0",
      }
    },
  },
}));

export const EdgeCaseBrokenRefBindings: Story = createStory(createSource({
  channel: {
    bindings: { $ref: "#/components/bindings/not-existing-bindings" },
  },
}));

export const EdgeBrokenRefAddressParameter: Story = createStory(createSource({
  channel: {
    parameters: {
      param1: {
        $ref: "#/components/parameters/not-existing-parameter",
      },
    },
  },
}));

export const EdgeBrokenRefServerOutOfScope: Story = createStory(createSource({
  channel: {
    servers: [
      { $ref: "#/components/servers/not-existing-server" },
    ]
  },
}));
