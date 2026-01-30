import { AsyncApiOperationViewer } from '@apihub/components/AsyncApiOperationViewer/AsyncApiOperationViewer';
import type { Meta, StoryObj } from '@storybook/react';
import { prepareAsyncApiDocument } from '../preprocess';
import { EXTENSIONS } from './common-data';

// It's necessary because storybook doesn't render nested stories without this empty story
// eslint-disable-next-line storybook/story-exports
const meta = {
  title: 'Async Api Suite/Operation Extensions',
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

export const ExtensionsInOperation: Story = {
  args: {
    source: prepareAsyncApiDocument({
      source: {
        asyncapi: "3.0.0",
        operations: {
          "send-operation-with-operation-extensions": {
            action: "send",
            ...EXTENSIONS,
          }
        }
      },
    }),
    operationKey: 'send-operation-with-operation-extensions',
    operationType: 'send',
  }
}

export const ExtensionsInOperationBindings: Story = {
  args: {
    source: prepareAsyncApiDocument({
      source: {
        asyncapi: "3.0.0",
        operations: {
          "send-operation-with-operation-bindings-extensions": {
            action: "send",
            bindings: {
              kafka: {
                bindingVersion: "0.5.0",
                predefinedProperty: "kafka-property",
                ...EXTENSIONS,
              }
            }
          }
        }
      },
    }),
    operationKey: 'send-operation-with-operation-bindings-extensions',
    operationType: 'send',
  }
}