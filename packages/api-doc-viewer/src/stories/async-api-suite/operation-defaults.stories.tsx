import { AsyncApiOperationViewer } from '@apihub/components/AsyncApiOperationViewer/AsyncApiOperationViewer';
import type { Meta, StoryObj } from '@storybook/react';
import { prepareAsyncApiDocument } from '../preprocess';

// It's necessary because storybook doesn't render nested stories without this empty story
// eslint-disable-next-line storybook/story-exports
const meta = {
  title: 'Async Api Suite/Operation Defaults',
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

export const DefaultOperationTitle: Story = {
  args: {
    source: prepareAsyncApiDocument({
      source: {
        asyncapi: "3.0.0",
        operations: {
          "send-operation-with-default-operation-title": {
            action: "send",
          }
        }
      },
    }),
    operationName: 'send-operation-with-default-operation-title',
    operationType: 'send',
  }
}



export const DefaultOperationDescriptionIfNothing: Story = {
  args: {
    source: prepareAsyncApiDocument({
      source: {
        asyncapi: "3.0.0",
        operations: {
          "send-operation-with-default-operation-description-if-nothing": {
            action: "send",
          }
        }
      },
    }),
    operationName: 'send-operation-with-default-operation-description-if-nothing',
    operationType: 'send',
  }
}

export const DefaultOperationDescriptionIfSummary: Story = {
  args: {
    source: prepareAsyncApiDocument({
      source: {
        asyncapi: "3.0.0",
        operations: {
          "send-operation-with-default-operation-description-if-summary": {
            action: "send",
            summary: 'Summary of Operation',
          }
        }
      },
    }),
    operationName: 'send-operation-with-default-operation-description-if-summary',
    operationType: 'send',
  }
}

export const DefaultOperationDescriptionIfSummaryAndDescription: Story = {
  args: {
    source: prepareAsyncApiDocument({
      source: {
        asyncapi: "3.0.0",
        operations: {
          "send-operation-with-default-operation-description-if-summary-and-description": {
            action: "send",
            summary: 'Summary of Operation',
            description: 'Description of Operation',
          }
        },
      },
    }),
    operationName: 'send-operation-with-default-operation-description-if-summary-and-description',
    operationType: 'send',
  }
}