import { AsyncApiOperationViewer } from '@apihub/components/AsyncApiOperationViewer/AsyncApiOperationViewer';
import type { Meta, StoryObj } from '@storybook/react';
import { prepareAsyncApiDocument } from '../preprocess';

// It's necessary because storybook doesn't render nested stories without this empty story
// eslint-disable-next-line storybook/story-exports
const meta = {
  title: 'Async Api Suite/Messages',
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

export const DefaultMessageTitleIfNothing: Story = {
  args: {
    source: prepareAsyncApiDocument({
      source: {
        asyncapi: "3.0.0",
        operations: {
          "send-operation-with-default-message-title-if-nothing": {
            action: "send",
            messages: [
              { $ref: "#/components/messages/StatusMessage" }
            ]
          }
        },
        components: {
          messages: {
            StatusMessage: {
              description: 'Description of Status Message',
            }
          }
        },
      },
    }),
    operationName: 'send-operation-with-default-message-title-if-nothing',
    operationType: 'send',
  }
}

export const DefaultMessageTitleIfName: Story = {
  args: {
    source: prepareAsyncApiDocument({
      source: {
        asyncapi: "3.0.0",
        operations: {
          "send-operation-with-default-message-title-if-name": {
            action: "send",
            messages: [
              { $ref: "#/components/messages/StatusMessage" }
            ]
          }
        },
        components: {
          messages: {
            StatusMessage: {
              name: 'StatusMessage',
              description: 'Description of Status Message',
            }
          }
        },
      },
    }),
    operationName: 'send-operation-with-default-message-title-if-name',
    operationType: 'send',
  }
}

export const DefaultMessageTitleIfTitleAndName: Story = {
  args: {
    source: prepareAsyncApiDocument({
      source: {
        asyncapi: "3.0.0",
        operations: {
          "send-operation-with-default-message-title-if-title-and-name": {
            action: "send",
            messages: [
              { $ref: "#/components/messages/StatusMessage" }
            ]
          }
        },
        components: {
          messages: {
            StatusMessage: {
              title: 'Status Message Title',
              name: 'status-message-name',
              description: 'Description of Status Message',
            }
          }
        },
      },
    }),
    operationName: 'send-operation-with-default-message-title-if-title-and-name',
    operationType: 'send',
  }
}

export const DefaultMessageDescriptionIfNothing: Story = {
  args: {
    source: prepareAsyncApiDocument({
      source: {
        asyncapi: "3.0.0",
        operations: {
          "send-operation-with-default-message-description-if-nothing": {
            action: "send",
            messages: [
              { $ref: "#/components/messages/StatusMessage" }
            ],
          }
        },
        components: {
          messages: {
            StatusMessage: {
              title: 'Status Message Title',
            }
          }
        },
      },
    }),
    operationName: 'send-operation-with-default-message-description-if-nothing',
    operationType: 'send',
  }
}

export const DefaultMessageDescriptionIfSummary: Story = {
  args: {
    source: prepareAsyncApiDocument({
      source: {
        asyncapi: "3.0.0",
        operations: {
          "send-operation-with-default-message-description-if-summary": {
            action: "send",
            messages: [
              { $ref: "#/components/messages/StatusMessage" }
            ],
          }
        },
        components: {
          messages: {
            StatusMessage: {
              summary: 'Summary of Status Message',
            }
          }
        },
      },
    }),
    operationName: 'send-operation-with-default-message-description-if-summary',
    operationType: 'send',
  }
}

export const DefaultMessageDescriptionIfSummaryAndDescription: Story = {
  args: {
    source: prepareAsyncApiDocument({
      source: {
        asyncapi: "3.0.0",
        operations: {
          "send-operation-with-default-message-description-if-summary-and-description": {
            action: "send",
            messages: [
              { $ref: "#/components/messages/StatusMessage" }
            ],
          }
        },
        components: {
          messages: {
            StatusMessage: {
              summary: 'Summary of Status Message',
              description: 'Description of Status Message',
            }
          }
        },
      },
    }),
    operationName: 'send-operation-with-default-message-description-if-summary-and-description',
    operationType: 'send',
  }
}

export const DefaultOperationBindingVersionIfNothing: Story = {
  args: {
    source: prepareAsyncApiDocument({
      source: {
        asyncapi: "3.0.0",
        operations: {
          "send-operation-with-default-operation-binding-version-if-nothing": {
            action: "send",
            bindings: {
              kafka: {
              }
            }
          }
        }
      },
    }),
    operationName: 'send-operation-with-default-operation-binding-version-if-nothing',
    operationType: 'send',
  }
}

export const DefaultChannelBindingVersionIfNothing: Story = {
  args: {
    source: prepareAsyncApiDocument({
      source: {
        asyncapi: "3.0.0",
        operations: {
          "send-operation-with-default-channel-binding-version-if-nothing": {
            action: "send",
            channel: {
              $ref: "#/channels/first-channel-key"
            }
          }
        },
        channels: {
          "first-channel-key": {
            bindings: {
              kafka: {
              }
            }
          }
        }
      },
    }),
    operationName: 'send-operation-with-default-channel-binding-version-if-nothing',
    operationType: 'send',
  }
}

export const DefaultMessageBindingVersionIfNothing: Story = {
  args: {
    source: prepareAsyncApiDocument({
      source: {
        asyncapi: "3.0.0",
        operations: {
          "send-operation-with-default-message-binding-version-if-nothing": {
            action: "send",
            messages: [
              { $ref: "#/components/messages/StatusMessage" }
            ]
          }
        },
        components: {
          messages: {
            StatusMessage: {
              bindings: {
                kafka: {},
              }
            }
          }
        }
      },
    }),
    operationName: 'send-operation-with-default-message-binding-version-if-nothing',
    operationType: 'send',
  }
}