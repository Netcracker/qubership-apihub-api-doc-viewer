import { AsyncApiOperationViewer } from '@apihub/components/AsyncApiOperationViewer/AsyncApiOperationViewer';
import type { Meta, StoryObj } from '@storybook/react';
import { prepareAsyncApiDocument } from '../preprocess';

// It's necessary because storybook doesn't render nested stories without this empty story
// eslint-disable-next-line storybook/story-exports
const meta = {
  title: 'Async Api Suite/Operation',
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
    operationKey: 'send-operation-with-nothing',
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
    operationKey: 'send-operation-with-title',
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
    operationKey: 'send-operation-with-description',
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
    operationKey: 'send-operation-with-title-and-description',
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
    operationKey: 'receive-operation-with-nothing',
    operationType: 'receive',
  }
}
