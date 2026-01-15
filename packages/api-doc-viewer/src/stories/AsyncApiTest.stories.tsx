/**
 * Copyright 2024-2025 NetCracker Technology Corporation
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { AsyncApiOperationViewer } from '@apihub/components/AsyncApiOperationViewer/AsyncApiOperationViewer';
import type { Meta, StoryObj } from '@storybook/react';
import { prepareAsyncApiDocument } from './preprocess';

// It's necessary because storybook doesn't render nested stories without this empty story
// eslint-disable-next-line storybook/story-exports
const meta = {
  title: 'Async Api Viewer',
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

export const Test: Story = {
  args: {
    source: {},
  }
}

const KAFKA_E2E_SOURCE = {
  asyncapi: "3.0.0",
  info: {
    title: "example-event-service",
    version: "1.0.0",
    "x-generator": "springwolf"
  },
  defaultContentType: "application/json",
  servers: {
    "kafka-main": {
      host: "kafka-host",
      protocol: "kafka"
    }
  },
  channels: {
    "customer-change-topic": {
      address: "customer-change-topic",
      description: "Channel for customer change notifications",
      messages: {
        BaseEventMessage: {
          $ref: "#/components/messages/BaseEventMessage"
        }
      },
      servers: [
        {
          $ref: "#/servers/kafka-main"
        }
      ],
      bindings: {}
    }
  },
  components: {
    schemas: {
      HeadersExample: {
        title: "HeadersExample",
        type: "object",
        properties: {
          "X-Idempotency-Key": {
            type: "string"
          }
        },
        examples: [
          {
            "X-Idempotency-Key": "string"
          }
        ]
      },
      BaseEvent: {
        title: "BaseEvent",
        type: "object",
        properties: {
          currentInstance: {
            type: "object",
            description: "New data state"
          },
          currentModelVersion: {
            type: "integer",
            description: "Model Version",
            format: "int32"
          },
          previousInstance: {
            type: "object",
            description: "Previous data state"
          },
          resourceAction: {
            type: "string",
            description: "Resource Action"
          },
          resourceType: {
            type: "string",
            description: "Resource Type"
          }
        },
        description: "Base event to describe Customer's data changes",
        examples: [
          {
            currentInstance: {},
            currentModelVersion: 0,
            previousInstance: {},
            resourceAction: "string",
            resourceType: "string"
          }
        ],
        required: [
          "currentInstance",
          "currentModelVersion",
          "previousInstance",
          "resourceAction",
          "resourceType"
        ]
      }
    },
    messages: {
      BaseEventMessage: {
        headers: {
          $ref: "#/components/schemas/HeadersExample"
        },
        payload: {
          $ref: "#/components/schemas/BaseEvent"
        },
        description: "Base event to describe Customer's data changes",
        name: "BaseEventMessage",
        title: "BaseEvent",
        bindings: {
          kafka: {
            bindingVersion: "0.5.0",
            num: 123,
            str: "string",
            bool: true,
            arr: [1, 2, 3],
            obj: {
              key: "value"
            },
            sch: {
              type: "object",
              properties: {
                aaa: {
                  type: "string",
                  description: "AAA",
                  minLength: 1,
                  maxLength: 10
                },
                bbb: {
                  type: "integer",
                  description: "BBB",
                  minimum: 1,
                  maximum: 100
                },
                ccc: {
                  type: "boolean",
                  description: "CCC",
                  default: true
                },
                combinerSch: {
                  oneOf: [
                    {
                      type: 'string',
                      description: 'String',
                      minLength: 1,
                      maxLength: 10
                    },
                    {
                      type: 'number',
                      description: 'Number',
                      minimum: 1,
                      maximum: 100
                    },
                    {
                      type: 'boolean',
                      description: 'Boolean',
                      default: true
                    }
                  ]
                }
              }
            },
            nestedObj: {
              obj: {
                aaa: 1234,
                bbb: true,
                empty: null,
                arr: [1, 2, 3],
                sch: {
                  type: 'array',
                  items: {
                    type: 'string',
                    description: 'Array item',
                    minLength: 1,
                    maxLength: 10
                  }
                },
                combinerSch: {
                  oneOf: [
                    {
                      type: 'string',
                      description: 'String',
                      minLength: 1,
                      maxLength: 10
                    },
                    {
                      type: 'object',
                      properties: {
                        aaa: {
                          type: 'string',
                          description: 'AAA',
                          minLength: 1,
                          maxLength: 10
                        }
                      }
                    }
                  ]
                }
              }
            }
          }
        }
      }
    }
  },
  operations: {
    "customer-change-topic_send_BaseEvent": {
      action: "send",
      channel: {
        $ref: "#/channels/customer-change-topic"
      },
      title: "Customer change topic send",
      description: "Send events about Customer's data changes",
      bindings: {
        kafka: {
          bindingVersion: "0.5.0"
        }
      },
      messages: [
        {
          $ref: "#/channels/customer-change-topic/messages/BaseEventMessage"
        }
      ]
    }
  }
}

export const KafkaE2E: Story = {
  args: {
    source: prepareAsyncApiDocument({
      source: KAFKA_E2E_SOURCE,
    }),
    operationName: 'customer-change-topic_send_BaseEvent',
    operationType: 'send',
  }
}
