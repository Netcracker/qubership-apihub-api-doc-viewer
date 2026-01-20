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
      bindings: {},
      // Extensions
      'x-string-extension': 'value',
      'x-integer-extension': 1,
      'x-boolean-extension': true,
      'x-number-extension': 1.0,
      'x-array-extension': [1, 2, 3],
      'x-object-extension': {
        key: 'value',
      },
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
      ],
      // Extensions
      'x-string-extension': 'value',
      'x-integer-extension': 1,
      'x-boolean-extension': true,
      'x-number-extension': 1.0,
      'x-array-extension': [1, 2, 3],
      'x-object-extension': {
        key: 'value',
      },
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
            },
            // Extensions
            'x-string-extension': 'value',
            'x-integer-extension': 1,
            'x-boolean-extension': true,
            'x-number-extension': 1.0,
            'x-array-extension': [1, 2, 3],
            'x-object-extension': {
              key: 'value',
            },
          }
        },
        // Extensions
        'x-string-extension': 'value',
        'x-integer-extension': 1,
        'x-boolean-extension': true,
        'x-number-extension': 1.0,
        'x-array-extension': [1, 2, 3],
        'x-object-extension': {
          key: 'value',
        },
      }
    }
  },
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
    operationName: 'send-operation-with-nothing',
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
    operationName: 'send-operation-with-title',
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
    operationName: 'send-operation-with-description',
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
    operationName: 'send-operation-with-title-and-description',
    operationType: 'send',
  }
}

export const SendOperationWithRootLevelChannelWithNothing: Story = {
  args: {
    source: prepareAsyncApiDocument({
      source: {
        asyncapi: "3.0.0",
        operations: {
          "send-operation-with-root-level-channel-with-nothing": {
            action: "send",
            channel: {
              $ref: "#/channels/first-channel-key"
            },
          }
        },
        channels: {
          "first-channel-key": {
            address: "first-channel-address",
          }
        }
      },
    }),
    operationName: 'send-operation-with-root-level-channel-with-nothing',
    operationType: 'send',
  }
}


export const SendOperationWithRootLevelChannelWithTitle: Story = {
  args: {
    source: prepareAsyncApiDocument({
      source: {
        asyncapi: "3.0.0",
        operations: {
          "send-operation-with-root-level-channel-with-title": {
            action: "send",
            channel: {
              $ref: "#/channels/first-channel-key"
            },
          }
        },
        channels: {
          "first-channel-key": {
            address: "first-channel-address",
            title: "Title of First Channel",
          }
        }
      },
    }),
    operationName: 'send-operation-with-root-level-channel-with-title',
    operationType: 'send',
  }
}

export const SendOperationWithRootLevelChannelWithDescription: Story = {
  args: {
    source: prepareAsyncApiDocument({
      source: {
        asyncapi: "3.0.0",
        operations: {
          "send-operation-with-root-level-channel-with-description": {
            action: "send",
            channel: {
              $ref: "#/channels/first-channel-key"
            },
          }
        },
        channels: {
          "first-channel-key": {
            address: "first-channel-address",
            description: "Description of First Channel",
          }
        }
      },
    }),
    operationName: 'send-operation-with-root-level-channel-with-description',
    operationType: 'send',
  }
}

export const SendOperationWithRootLevelChannelWithTitleAndDescription: Story = {
  args: {
    source: prepareAsyncApiDocument({
      source: {
        asyncapi: "3.0.0",
        operations: {
          "send-operation-with-root-level-channel-with-title-and-description": {
            action: "send",
            channel: {
              $ref: "#/channels/first-channel-key"
            },
          }
        },
        channels: {
          "first-channel-key": {
            address: "first-channel-address",
            title: "Title of First Channel",
            description: "Description of First Channel",
          }
        }
      },
    }),
    operationName: 'send-operation-with-root-level-channel-with-title-and-description',
    operationType: 'send',
  }
}

export const SendOperationWithRootLevelChannelWithBindingWithNothing: Story = {
  args: {
    source: prepareAsyncApiDocument({
      source: {
        asyncapi: "3.0.0",
        operations: {
          "send-operation-with-root-level-channel-with-binding-with-nothing": {
            action: "send",
            channel: {
              $ref: "#/channels/first-channel-key"
            },
          }
        },
        channels: {
          "first-channel-key": {
            address: "first-channel-address",
            bindings: {
              kafka: {
                bindingVersion: "0.5.0",
              }
            }
          }
        },
      },
    }),
    operationName: 'send-operation-with-root-level-channel-with-binding-with-nothing',
    operationType: 'send',
  }
}

export const SendOperationWithRootLevelChannelWithDescriptionAndBindingWithNothing: Story = {
  args: {
    source: prepareAsyncApiDocument({
      source: {
        asyncapi: "3.0.0",
        operations: {
          "send-operation-with-root-level-channel-with-description-and-binding-with-nothing": {
            action: "send",
            channel: {
              $ref: "#/channels/first-channel-key"
            },
          }
        },
        channels: {
          "first-channel-key": {
            address: "first-channel-address",
            description: "Description of First Channel",
            bindings: {
              kafka: {
                bindingVersion: "0.5.0",
              }
            }
          }
        },
      },
    }),
    operationName: 'send-operation-with-root-level-channel-with-description-and-binding-with-nothing',
    operationType: 'send',
  }
}

export const SendOperationWithRootLevelChannelWithTwoBindings: Story = {
  args: {
    source: prepareAsyncApiDocument({
      source: {
        asyncapi: "3.0.0",
        operations: {
          "send-operation-with-root-level-channel-with-two-bindings": {
            action: "send",
            channel: {
              $ref: "#/channels/first-channel-key"
            },
          }
        },
        channels: {
          "first-channel-key": {
            address: "first-channel-address",
            bindings: {
              kafka: {
                bindingVersion: "0.5.0",
                key: {
                  type: "string",
                  description: "Partitioning key for the message",
                  minLength: 1,
                },
                schemaIdLocation: "header",
                schemaIdPayloadEncoding: "application/json",
                schemaLookupStrategy: "topicNameStrategy",
              },
              rabbitmq: {
                contentEncoding: "application/json",
                messageType: "orders.created",
                bindingVersion: "0.2.0",
              }
            }
          }
        },
      },
    }),
    operationName: 'send-operation-with-root-level-channel-with-two-bindings',
    operationType: 'send',
  }
}

export const SendOperationWithDescriptionAndRootLevelChannelWithNothing: Story = {
  args: {
    source: prepareAsyncApiDocument({
      source: {
        asyncapi: "3.0.0",
        operations: {
          "send-operation-with-description-and-root-level-channel-with-nothing": {
            action: "send",
            description: "Description of Send Operation With Description And Root Level Channel With Nothing",
            channel: {
              $ref: "#/channels/first-channel-key"
            },
          }
        },
        channels: {
          "first-channel-key": {
            address: "first-channel-address",
          }
        }
      },
    }),
    operationName: 'send-operation-with-description-and-root-level-channel-with-nothing',
    operationType: 'send',
  }
}

export const SendOperationWithBindingsKafkaWithNothing: Story = {
  args: {
    source: prepareAsyncApiDocument({
      source: {
        asyncapi: "3.0.0",
        operations: {
          "send-operation-with-bindings-kafka": {
            action: "send",
            bindings: {
              kafka: {
                bindingVersion: "0.5.0",
              }
            }
          }
        }
      },
    }),
    operationName: 'send-operation-with-bindings-kafka',
    operationType: 'send',
  }
}

export const SendOperationWithBindingsKafkaWithOnlyPrimitiveProps: Story = {
  args: {
    source: prepareAsyncApiDocument({
      source: {
        asyncapi: "3.0.0",
        operations: {
          "send-operation-with-bindings-kafka-with-only-primitive-props": {
            action: "send",
            bindings: {
              kafka: {
                bindingVersion: "0.5.0",
                num: 123,
                str: "string",
                bool: true,
                // TODO: api-unifier removes "null" value during normalization
                empty: null,
              }
            }
          }
        }
      },
    }),
    operationName: 'send-operation-with-bindings-kafka-with-only-primitive-props',
    operationType: 'send',
  }
}

export const SendOperationWithBindingsKafkaWithObjectProps: Story = {
  args: {
    source: prepareAsyncApiDocument({
      source: {
        asyncapi: "3.0.0",
        operations: {
          "send-operation-with-bindings-kafka-with-object-props": {
            action: "send",
            bindings: {
              kafka: {
                bindingVersion: "0.5.0",
                num: 1111,
                str: "string",
                bool: true,
                // TODO: api-unifier removes "null" value during normalization
                empty: null,
                obj: {
                  key: "string value"
                },
                arr: [1, 2, 3],
                complexObj: {
                  nestedObj: {
                    aaa: 2222,
                    bbb: false,
                    ccc: 'aaabbb',
                    // TODO: api-unifier removes "null" value during normalization
                    empty: null,
                    arr: [1, 2],
                  }
                },
                complexArr: [
                  {
                    aaa: 3333,
                    bbb: true,
                    ccc: 'bbbccc',
                    // TODO: api-unifier removes "null" value during normalization
                    empty: null,
                    arr: [2, 3],
                    nestedObj: {
                      aaa: 4444,
                      bbb: false,
                      // TODO: api-unifier removes "null" value during normalization
                      empty: null,
                      arr: [3, 4],
                    }
                  }
                ]
              }
            }
          }
        }
      },
    }),
    operationName: 'send-operation-with-bindings-kafka-with-object-props',
    operationType: 'send',
  }
}

export const SendOperationWithBindingsKafkaWithSchemaProps: Story = {
  args: {
    source: prepareAsyncApiDocument({
      source: {
        asyncapi: "3.0.0",
        operations: {
          "send-operation-with-bindings-kafka-with-schema-props": {
            action: "send",
            bindings: {
              kafka: {
                bindingVersion: "0.5.0",
                stringSch: {
                  type: 'string',
                  description: 'String schema',
                  minLength: 1,
                  maxLength: 10
                },
                nestedStringSch: {
                  stringSch: {
                    type: 'string',
                    description: 'Nested string schema',
                    minLength: 7,
                    maxLength: 70
                  }
                },
                numberSch: {
                  type: 'number',
                  description: 'Number schema',
                  minimum: 1,
                  maximum: 100,
                },
                nestedNumberSch: {
                  numberSch: {
                    type: 'number',
                    description: 'Nested number schema',
                    minimum: 7,
                    maximum: 700,
                  }
                },
                booleanSch: {
                  type: 'boolean',
                  description: 'Boolean schema',
                  default: true,
                },
                nestedBooleanSch: {
                  booleanSch: {
                    type: 'boolean',
                    description: 'Nested boolean schema',
                    default: false,
                  }
                },
                arraySch: {
                  type: 'array',
                  items: {
                    type: 'string',
                    description: 'Array string item',
                    minLength: 1,
                    maxLength: 10
                  }
                },
                nestedArraySch: {
                  arraySch: {
                    type: 'array',
                    description: 'Nested array schema',
                    items: {
                      type: 'number',
                      description: 'Nested array number item',
                      minimum: 4,
                      maximum: 444,
                    }
                  }
                },
                objectSch: {
                  type: 'object',
                  properties: {
                    aaa: {
                      type: 'string',
                      description: 'Object string property',
                      enum: ['aaa', 'bbb', 'ccc'],
                    }
                  }
                },
                nestedObjectSch: {
                  objectSch: {
                    type: 'object',
                    description: 'Nested object schema',
                    properties: {
                      aaa: {
                        type: 'number',
                        description: 'Nested object number property',
                        minimum: 1,
                        exclusiveMinimum: true,
                        maximum: 100,
                        exclusiveMaximum: true,
                        multipleOf: 10,
                      }
                    }
                  }
                },
                nestedSchemasInArray: [
                  {
                    type: 'string',
                    description: 'Nested string schema in array',
                    minLength: 1,
                    maxLength: 10
                  },
                  {
                    type: 'number',
                    description: 'Nested number schema in array',
                    minimum: 1,
                    exclusiveMinimum: true,
                    maximum: 100,
                    exclusiveMaximum: true,
                    multipleOf: 10,
                  },
                  {
                    type: 'boolean',
                    description: 'Nested boolean schema in array',
                    default: true,
                  },
                  {
                    type: 'object',
                    description: 'Nested object schema in array',
                    properties: {
                      aaa: {
                        type: 'number',
                        minimum: 1,
                      }
                    }
                  },
                  {
                    type: 'array',
                    description: 'Nested array schema in array',
                    items: {
                      type: 'integer',
                      maximum: 100,
                      multipleOf: 10,
                    }
                  }
                ]
              }
            }
          }
        }
      },
    }),
    operationName: 'send-operation-with-bindings-kafka-with-schema-props',
    operationType: 'send',
  }
}

export const SendOperationTwoBindings: Story = {
  args: {
    source: prepareAsyncApiDocument({
      source: {
        asyncapi: "3.0.0",
        operations: {
          "send-operation-two-bindings": {
            action: "send",
            bindings: {
              kafka: {
                clientId: "order-producer",
                groupId: "order-processing",
                bindingVersion: "0.4.0",
              },
              amqp: {
                mandatory: true,
                priority: 5,
                deliveryMode: 2,
                expiration: 60000,
                userId: "svc-order",
                bindingVersion: "0.3.0",
              },
            }
          }
        }
      }
    }),
    operationName: 'send-operation-two-bindings',
    operationType: 'send',
  }
}

export const SendOperationWithDescriptionAndBindingsWithNothing: Story = {
  args: {
    source: prepareAsyncApiDocument({
      source: {
        asyncapi: "3.0.0",
        operations: {
          "send-operation-with-description-and-bindings-with-nothing": {
            action: "send",
            description: "Description of Send Operation With Description And Bindings With Nothing",
            bindings: {
              kafka: {
                bindingVersion: "0.5.0",
              }
            }
          }
        },
      },
    }),
    operationName: 'send-operation-with-description-and-bindings-with-nothing',
    operationType: 'send',
  }
}

export const SendOperationWithMessageWithNothing: Story = {
  args: {
    source: prepareAsyncApiDocument({
      source: {
        asyncapi: "3.0.0",
        operations: {
          "send-operation-with-message-with-nothing": {
            action: "send",
            messages: [
              { $ref: "#/components/messages/BaseEventMessage" }
            ]
          }
        },
        components: {
          messages: {
            BaseEventMessage: {
            }
          }
        }
      },
    }),
    operationName: 'send-operation-with-message-with-nothing',
    operationType: 'send',
  }
}

export const SendOperationWithMessageWithName: Story = {
  args: {
    source: prepareAsyncApiDocument({
      source: {
        asyncapi: "3.0.0",
        operations: {
          "send-operation-with-message-with-name": {
            action: "send",
            messages: [
              { $ref: "#/components/messages/BaseEventMessage" }
            ]
          }
        },
        components: {
          messages: {
            BaseEventMessage: {
              name: "base-event-message",
            }
          }
        }
      },
    }),
    operationName: 'send-operation-with-message-with-name',
    operationType: 'send',
  }
}

export const SendOperationWithMessageWithTitle: Story = {
  args: {
    source: prepareAsyncApiDocument({
      source: {
        asyncapi: "3.0.0",
        operations: {
          "send-operation-with-message-with-title": {
            action: "send",
            messages: [
              { $ref: "#/components/messages/BaseEventMessage" }
            ]
          }
        },
        components: {
          messages: {
            BaseEventMessage: {
              name: "base-event-message",
              title: "Base Event Message",
            }
          }
        }
      },
    }),
    operationName: 'send-operation-with-message-with-title',
    operationType: 'send',
  }
}

export const SendOperationWithMessageWithDescription: Story = {
  args: {
    source: prepareAsyncApiDocument({
      source: {
        asyncapi: "3.0.0",
        operations: {
          "send-operation-with-message-with-description": {
            action: "send",
            messages: [
              { $ref: "#/components/messages/BaseEventMessage" }
            ]
          }
        },
        components: {
          messages: {
            BaseEventMessage: {
              name: "base-event-message",
              description: "Description of Base Event Message",
            }
          }
        }
      },
    }),
    operationName: 'send-operation-with-message-with-description',
    operationType: 'send',
  }
}

export const SendOperationWithMessageWithNameAndDescription: Story = {
  args: {
    source: prepareAsyncApiDocument({
      source: {
        asyncapi: "3.0.0",
        operations: {
          "send-operation-with-message-with-name-and-description": {
            action: "send",
            messages: [
              { $ref: "#/components/messages/BaseEventMessage" }
            ]
          }
        },
        components: {
          messages: {
            BaseEventMessage: {
              name: "base-event-message",
              description: "Description of Base Event Message",
            }
          }
        }
      },
    }),
    operationName: 'send-operation-with-message-with-name-and-description',
    operationType: 'send',
  }
}

export const SendOperationWithMessageWithTitleAndDescription: Story = {
  args: {
    source: prepareAsyncApiDocument({
      source: {
        asyncapi: "3.0.0",
        operations: {
          "send-operation-with-message-with-title-and-description": {
            action: "send",
            messages: [
              { $ref: "#/components/messages/BaseEventMessage" }
            ]
          }
        },
        components: {
          messages: {
            BaseEventMessage: {
              name: "base-event-message",
              title: "Base Event Message",
              description: "Description of Base Event Message",
            }
          }
        }
      },
    }),
    operationName: 'send-operation-with-message-with-title-and-description',
    operationType: 'send',
  }
}

export const SendOperationWithMessageWithNameAndTitleAndDescription: Story = {
  args: {
    source: prepareAsyncApiDocument({
      source: {
        asyncapi: "3.0.0",
        operations: {
          "send-operation-with-message-with-name-and-title-and-description": {
            action: "send",
            messages: [
              { $ref: "#/components/messages/BaseEventMessage" }
            ]
          }
        },
        components: {
          messages: {
            BaseEventMessage: {
              name: "base-event-message",
              title: "Base Event Message",
              description: "Description of Base Event Message",
            }
          }
        }
      },
    }),
    operationName: 'send-operation-with-message-with-name-and-title-and-description',
    operationType: 'send',
  }
}

export const SendOperationWithMessageWithPrimitiveHeaders: Story = {
  args: {
    source: prepareAsyncApiDocument({
      source: {
        asyncapi: "3.0.0",
        operations: {
          "send-operation-with-message-with-primitive-headers": {
            action: "send",
            messages: [
              { $ref: "#/components/messages/BaseEventMessage" }
            ]
          }
        },
        components: {
          schemas: {
            HeadersExample: {
              type: "string",
              description: "Primitive header example",
              minLength: 1,
              maxLength: 10,
              examples: ["1234567890", "abcdefghij", "ABCDEFGHIJ"]
            }
          },
          messages: {
            BaseEventMessage: {
              headers: { $ref: "#/components/schemas/HeadersExample" },
            }
          }
        },
      },
    }),
    operationName: 'send-operation-with-message-with-primitive-headers',
    operationType: 'send',
  }
}

export const SendOperationWithMessageWithObjectiveHeaders: Story = {
  args: {
    source: prepareAsyncApiDocument({
      source: {
        asyncapi: "3.0.0",
        operations: {
          "send-operation-with-message-with-objective-headers": {
            action: "send",
            messages: [
              { $ref: "#/components/messages/BaseEventMessage" }
            ]
          }
        },
        components: {
          schemas: {
            HeadersExample: {
              type: "object",
              description: "Headers example",
              properties: {
                "X-Idempotency-Key": {
                  type: "string",
                }
              }
            }
          },
          messages: {
            BaseEventMessage: {
              headers: { $ref: "#/components/schemas/HeadersExample" },
            }
          }
        },
      },
    }),
    operationName: 'send-operation-with-message-with-objective-headers',
    operationType: 'send',
  }
}

export const SendOperationWithMessageWithPrimitivePayload: Story = {
  args: {
    source: prepareAsyncApiDocument({
      source: {
        asyncapi: "3.0.0",
        operations: {
          "send-operation-with-message-with-primitive-payload": {
            action: "send",
            messages: [
              { $ref: "#/components/messages/StatusMessage" }
            ]
          }
        },
        components: {
          schemas: {
            Status: {
              type: "string",
              description: "Status enum example",
              enum: ['not_started', 'in_progress', 'failed', 'success']
            }
          },
          messages: {
            StatusMessage: {
              payload: { $ref: "#/components/schemas/Status" },
            }
          }
        },
      },
    }),
    operationName: 'send-operation-with-message-with-primitive-payload',
    operationType: 'send',
  }
}

export const SendOperationWithMessageWithObjectivePayload: Story = {
  args: {
    source: prepareAsyncApiDocument({
      source: {
        asyncapi: "3.0.0",
        operations: {
          "send-operation-with-message-with-objective-payload": {
            action: "send",
            messages: [
              { $ref: "#/components/messages/StatusMessage" }
            ]
          }
        },
        components: {
          schemas: {
            Status: {
              type: "object",
              description: "Status enum example",
              properties: {
                status: {
                  type: "string",
                  description: "Status enum example",
                  enum: ['not_started', 'in_progress', 'failed', 'success']
                }
              }
            }
          },
          messages: {
            StatusMessage: {
              payload: { $ref: "#/components/schemas/Status" },
            }
          }
        },
      },
    }),
    operationName: 'send-operation-with-message-with-objective-payload',
    operationType: 'send',
  }
}

export const SendOperationWithMessageWithPrimitiveHeadersAndPayload: Story = {
  args: {
    source: prepareAsyncApiDocument({
      source: {
        asyncapi: "3.0.0",
        operations: {
          "send-operation-with-message-with-primitive-headers-and-payload": {
            action: "send",
            messages: [
              { $ref: "#/components/messages/StatusMessage" }
            ]
          }
        },
        components: {
          schemas: {
            Identifier: {
              type: "string",
              description: "Identifier example",
              minLength: 1,
              maxLength: 10,
              examples: ["1234567890", "abcdefghij", "ABCDEFGHIJ"]
            },
            Status: {
              type: "string",
              description: "Status enum example",
              enum: ['not_started', 'in_progress', 'failed', 'success']
            }
          },
          messages: {
            StatusMessage: {
              headers: { $ref: "#/components/schemas/Identifier" },
              payload: { $ref: "#/components/schemas/Status" },
            }
          }
        },
      }
    }),
    operationName: 'send-operation-with-message-with-primitive-headers-and-payload',
    operationType: 'send',
  }
}

export const SendOperationWithMessageWithObjectiveHeadersAndPayload: Story = {
  args: {
    source: prepareAsyncApiDocument({
      source: {
        asyncapi: "3.0.0",
        operations: {
          "send-operation-with-message-with-objective-headers-and-payload": {
            action: "send",
            messages: [
              { $ref: "#/components/messages/StatusMessage" }
            ]
          }
        },
        components: {
          schemas: {
            Identifier: {
              type: "object",
              description: "Identifier example",
              properties: {
                identifier: {
                  type: "string",
                  description: "Identifier example",
                  minLength: 1,
                  maxLength: 10,
                  examples: ["1234567890", "abcdefghij", "ABCDEFGHIJ"]
                }
              }
            },
            Status: {
              type: "object",
              description: "Status enum example",
              properties: {
                status: {
                  type: "string",
                  description: "Status enum example",
                  enum: ['not_started', 'in_progress', 'failed', 'success']
                }
              }
            }
          },
          messages: {
            StatusMessage: {
              headers: { $ref: "#/components/schemas/Identifier" },
              payload: { $ref: "#/components/schemas/Status" },
            }
          }
        },
      },
    }),
    operationName: 'send-operation-with-message-with-objective-headers-and-payload',
    operationType: 'send',
  }
}

export const SendOperationWithMessageWithPrimitiveHeadersAndObjectivePayload: Story = {
  args: {
    source: prepareAsyncApiDocument({
      source: {
        asyncapi: "3.0.0",
        operations: {
          "send-operation-with-message-with-primitive-headers-and-objective-payload": {
            action: "send",
            messages: [
              { $ref: "#/components/messages/StatusMessage" }
            ]
          }
        },
        components: {
          schemas: {
            Identifier: {
              type: "string",
              description: "Identifier example",
              minLength: 1,
              maxLength: 10,
              examples: ["1234567890", "abcdefghij", "ABCDEFGHIJ"]
            },
            Status: {
              type: "object",
              description: "Status enum example",
              properties: {
                status: {
                  type: "string",
                  description: "Status enum example",
                  enum: ['not_started', 'in_progress', 'failed', 'success']
                }
              }
            }
          },
          messages: {
            StatusMessage: {
              headers: { $ref: "#/components/schemas/Identifier" },
              payload: { $ref: "#/components/schemas/Status" },
            }
          }
        },
      },
    }),
    operationName: 'send-operation-with-message-with-primitive-headers-and-objective-payload',
    operationType: 'send',
  }
}

export const SendOperationWithMessageWithObjectiveHeadersAndPrimitivePayload: Story = {
  args: {
    source: prepareAsyncApiDocument({
      source: {
        asyncapi: "3.0.0",
        operations: {
          "send-operation-with-message-with-objective-headers-and-primitive-payload": {
            action: "send",
            messages: [
              { $ref: "#/components/messages/StatusMessage" }
            ]
          }
        },
        components: {
          schemas: {
            Identifier: {
              type: "object",
              description: "Identifier example",
              properties: {
                identifier: {
                  type: "string",
                  description: "Identifier example",
                  minLength: 1,
                  maxLength: 10,
                  examples: ["1234567890", "abcdefghij", "ABCDEFGHIJ"]
                }
              }
            },
            Status: {
              type: "string",
              description: "Status enum example",
              enum: ['not_started', 'in_progress', 'failed', 'success']
            }
          },
          messages: {
            StatusMessage: {
              headers: { $ref: "#/components/schemas/Identifier" },
              payload: { $ref: "#/components/schemas/Status" },
            }
          }
        },
      },
    }),
    operationName: 'send-operation-with-message-with-objective-headers-and-primitive-payload',
    operationType: 'send',
  }
}

export const SendOperationWithMessageWithBindingsWithNothing: Story = {
  args: {
    source: prepareAsyncApiDocument({
      source: {
        asyncapi: "3.0.0",
        operations: {
          "send-operation-with-message-with-bindings-with-nothing": {
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
                kafka: {
                  bindingVersion: "0.5.0",
                }
              }
            }
          }
        },
      },
    }),
    operationName: 'send-operation-with-message-with-bindings-with-nothing',
    operationType: 'send',
  }
}

export const SendOperationWithMessageWithBindingsWithPrimitiveProps: Story = {
  args: {
    source: prepareAsyncApiDocument({
      source: {
        asyncapi: "3.0.0",
        operations: {
          "send-operation-with-message-with-bindings-with-primitive-props": {
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
                kafka: {
                  bindingVersion: "0.5.0",
                  num: 123,
                  str: "string",
                  bool: true,
                  // TODO: api-unifier removes "null" value during normalization
                  empty: null,
                }
              }
            }
          }
        },
      },
    }),
    operationName: 'send-operation-with-message-with-bindings-with-primitive-props',
    operationType: 'send',
  }
}

export const SendOperationWithMessageWithBindingsWithObjectProps: Story = {
  args: {
    source: prepareAsyncApiDocument({
      source: {
        asyncapi: "3.0.0",
        operations: {
          "send-operation-with-message-with-bindings-with-object-props": {
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
                kafka: {
                  bindingVersion: "0.5.0",
                  obj: {
                    key: "string value"
                  },
                  arr: [1, 2, 3],
                  complexObj: {
                    nestedObj: {
                      aaa: 2222,
                      bbb: false,
                      ccc: 'aaabbb',
                      // TODO: api-unifier removes "null" value during normalization
                      empty: null,
                      arr: [1, 2],
                    }
                  },
                  complexArr: [
                    {
                      aaa: 3333,
                      bbb: true,
                      ccc: 'bbbccc',
                      // TODO: api-unifier removes "null" value during normalization
                      empty: null,
                      arr: [2, 3],
                      nestedObj: {
                        aaa: 4444,
                        bbb: false,
                        // TODO: api-unifier removes "null" value during normalization
                        empty: null,
                        arr: [3, 4],
                      }
                    }
                  ]
                }
              }
            }
          }
        },
      },
    }),
    operationName: 'send-operation-with-message-with-bindings-with-object-props',
    operationType: 'send',
  }
}

export const SendOperationWithMessageWithBindingsWithSchemaProps: Story = {
  args: {
    source: prepareAsyncApiDocument({
      source: {
        asyncapi: "3.0.0",
        operations: {
          "send-operation-with-message-with-bindings-with-schema-props": {
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
                kafka: {
                  bindingVersion: "0.5.0",
                  stringSch: {
                    type: 'string',
                    description: 'String schema',
                    minLength: 1,
                    maxLength: 10
                  },
                  nestedStringSch: {
                    stringSch: {
                      type: 'string',
                      description: 'Nested string schema',
                      minLength: 7,
                      maxLength: 70
                    }
                  },
                  numberSch: {
                    type: 'number',
                    description: 'Number schema',
                    minimum: 1,
                    maximum: 100,
                  },
                  nestedNumberSch: {
                    numberSch: {
                      type: 'number',
                      description: 'Nested number schema',
                      minimum: 7,
                      maximum: 700,
                    }
                  },
                  booleanSch: {
                    type: 'boolean',
                    description: 'Boolean schema',
                    default: true,
                  },
                  nestedBooleanSch: {
                    booleanSch: {
                      type: 'boolean',
                      description: 'Nested boolean schema',
                      default: false,
                    }
                  },
                  arraySch: {
                    type: 'array',
                    items: {
                      type: 'string',
                      description: 'Array string item',
                      minLength: 1,
                      maxLength: 10
                    }
                  },
                  nestedArraySch: {
                    arraySch: {
                      type: 'array',
                      description: 'Nested array schema',
                      items: {
                        type: 'number',
                        description: 'Nested array number item',
                        minimum: 4,
                        maximum: 444,
                      }
                    }
                  },
                  objectSch: {
                    type: 'object',
                    properties: {
                      aaa: {
                        type: 'string',
                        description: 'Object string property',
                        enum: ['aaa', 'bbb', 'ccc'],
                      }
                    }
                  },
                  nestedObjectSch: {
                    objectSch: {
                      type: 'object',
                      description: 'Nested object schema',
                      properties: {
                        aaa: {
                          type: 'number',
                          description: 'Nested object number property',
                          minimum: 1,
                          exclusiveMinimum: true,
                          maximum: 100,
                          exclusiveMaximum: true,
                          multipleOf: 10,
                        }
                      }
                    }
                  },
                  nestedSchemasInArray: [
                    {
                      type: 'string',
                      description: 'Nested string schema in array',
                      minLength: 1,
                      maxLength: 10
                    },
                    {
                      type: 'number',
                      description: 'Nested number schema in array',
                      minimum: 1,
                      exclusiveMinimum: true,
                      maximum: 100,
                      exclusiveMaximum: true,
                      multipleOf: 10,
                    },
                    {
                      type: 'boolean',
                      description: 'Nested boolean schema in array',
                      default: true,
                    },
                    {
                      type: 'object',
                      description: 'Nested object schema in array',
                      properties: {
                        aaa: {
                          type: 'number',
                          minimum: 1,
                        }
                      }
                    },
                    {
                      type: 'array',
                      description: 'Nested array schema in array',
                      items: {
                        type: 'integer',
                        maximum: 100,
                        multipleOf: 10,
                      }
                    }
                  ]
                }
              }
            }
          }
        },
      },
    }),
    operationName: 'send-operation-with-message-with-bindings-with-schema-props',
    operationType: 'send',
  }
}

export const SendOperationWithMessageWithTwoBindings: Story = {
  args: {
    source: prepareAsyncApiDocument({
      source: {
        asyncapi: "3.0.0",
        operations: {
          "send-operation-with-message-with-two-bindings": {
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
                kafka: {
                  bindingVersion: "0.5.0",
                  key: {
                    type: "string",
                    description: "Partitioning key for the message",
                    minLength: 1,
                  },
                  schemaIdLocation: "header",
                  schemaIdPayloadEncoding: "application/json",
                  schemaLookupStrategy: "topicNameStrategy",
                },
                rabbitmq: {
                  contentEncoding: "application/json",
                  messageType: "orders.created",
                  bindingVersion: "0.2.0",
                }
              }
            }
          }
        },
      },
    }),
    operationName: 'send-operation-with-message-with-two-bindings',
    operationType: 'send',
  }
}

export const SendOperationWithMessageWithDescriptionAndHeaders: Story = {
  args: {
    source: prepareAsyncApiDocument({
      source: {
        asyncapi: "3.0.0",
        operations: {
          "send-operation-with-message-with-description-and-headers": {
            action: "send",
            messages: [
              { $ref: "#/components/messages/StatusMessage" }
            ]
          }
        },
        components: {
          schemas: {
            Identifier: {
              type: "string",
              description: "Identifier example",
              minLength: 1,
              maxLength: 10,
              examples: ["1234567890", "abcdefghij", "ABCDEFGHIJ"]
            }
          },
          messages: {
            StatusMessage: {
              description: "Status message description",
              headers: {
                $ref: "#/components/schemas/Identifier"
              }
            }
          }
        },
      },
    }),
    operationName: 'send-operation-with-message-with-description-and-headers',
    operationType: 'send',
  }
}

export const SendOperationWithMessageWithDescriptionAndPayload: Story = {
  args: {
    source: prepareAsyncApiDocument({
      source: {
        asyncapi: "3.0.0",
        operations: {
          "send-operation-with-message-with-description-and-payload": {
            action: "send",
            messages: [
              { $ref: "#/components/messages/StatusMessage" }
            ]
          }
        },
        components: {
          messages: {
            StatusMessage: {
              description: "Status message description",
              payload: { $ref: "#/components/schemas/Status" },
            }
          }
        },
      },
    }),
    operationName: 'send-operation-with-message-with-description-and-payload',
    operationType: 'send',
  }
}

export const SendOperationWithMessageWithDescriptionAndBindingWithNothing: Story = {
  args: {
    source: prepareAsyncApiDocument({
      source: {
        asyncapi: "3.0.0",
        operations: {
          "send-operation-with-message-with-description-and-binding-with-nothing": {
            action: "send",
            messages: [
              { $ref: "#/components/messages/StatusMessage" }
            ]
          }
        },
        components: {
          messages: {
            StatusMessage: {
              description: "Status message description",
              bindings: {
                kafka: {
                  bindingVersion: "0.5.0",
                }
              }
            }
          }
        },
      },
    }),
    operationName: 'send-operation-with-message-with-description-and-binding-with-nothing',
    operationType: 'send',
  }
}

export const SendOperationWithTwoMessagesWithNames: Story = {
  args: {
    source: prepareAsyncApiDocument({
      source: {
        asyncapi: "3.0.0",
        operations: {
          "send-operation-with-two-messages-with-names": {
            action: "send",
            messages: [
              { $ref: "#/components/messages/StatusMessage" },
              { $ref: "#/components/messages/IdentifierMessage" }
            ]
          }
        },
        components: {
          messages: {
            StatusMessage: {
              name: "StatusMessage",
            },
            IdentifierMessage: {
              name: "IdentifierMessage",
            },
          }
        },
      },
    }),
    operationName: 'send-operation-with-two-messages-with-names',
    operationType: 'send',
  }
}

export const SendOperationWithDescriptionAndMessageWithNothing: Story = {
  args: {
    source: prepareAsyncApiDocument({
      source: {
        asyncapi: "3.0.0",
        operations: {
          "send-operation-with-description-and-message-with-nothing": {
            action: "send",
            description: "Description of Send Operation With Description And Message With Nothing",
            messages: [
              { $ref: "#/components/messages/StatusMessage" }
            ]
          }
        },
        messages: {
          StatusMessage: {
          }
        }
      },
    }),
    operationName: 'send-operation-with-description-and-message-with-nothing',
    operationType: 'send',
  }
}

export const SendOperationWithMinimalOverallStructure: Story = {
  args: {
    source: prepareAsyncApiDocument({
      source: {
        asyncapi: "3.0.0",
        operations: {
          "send-operation-with-minimal-overall-structure": {
            action: "send",
            description: "Description of Send Operation With Minimal Overall Structure",
            channel: {
              $ref: "#/channels/first-channel-key"
            },
            messages: [
              { $ref: "#/components/messages/StatusMessage" },
              { $ref: "#/components/messages/AnotherStatusMessage" }
            ],
            bindings: {
              kafka: {
                bindingVersion: "0.5.0",
                property: "kafka-property",
              },
              rabbitmq: {
                bindingVersion: "0.2.0",
                property: "rabbitmq-property",
              }
            }
          }
        },
        channels: {
          "first-channel-key": {
            address: "first-channel-address",
            description: "Description of First Channel",
            bindings: {
              kafka: {
                bindingVersion: "0.5.0",
                property: "kafka-property",
              },
              rabbitmq: {
                bindingVersion: "0.2.0",
                property: "rabbitmq-property",
              }
            }
          }
        },
        components: {
          schemas: {
            Identifier1: {
              type: "string",
              description: "Identifier example",
              minLength: 1,
              maxLength: 10,
            },
            Status1: {
              type: "object",
              description: "Status example",
              properties: {
                status: {
                  type: 'string',
                  description: 'Status example',
                  enum: ['not_started', 'in_progress', 'failed', 'success']
                }
              }
            },
            Identifier2: {
              type: 'object',
              description: 'Identifier example',
              properties: {
                identifier: {
                  type: 'string',
                  description: 'Identifier example',
                }
              }
            },
            Status2: {
              type: 'string',
              description: 'Status example',
              enum: ['not_started', 'in_progress', 'failed', 'success']
            }
          },
          messages: {
            StatusMessage: {
              name: "StatusMessage",
              description: "Description of Status Message",
              bindings: {
                kafka: {
                  bindingVersion: "0.5.0",
                  property: "kafka-property",
                },
                rabbitmq: {
                  bindingVersion: "0.2.0",
                  property: "rabbitmq-property",
                }
              },
              headers: {
                $ref: "#/components/schemas/Identifier1"
              },
              payload: {
                $ref: "#/components/schemas/Status1"
              }
            },
            AnotherStatusMessage: {
              name: "AnotherStatusMessage",
              description: "Description of Another Status Message",
              bindings: {
                kafka: {
                  bindingVersion: "0.2.0",
                  property: "kafka-property",
                },
                rabbitmq: {
                  bindingVersion: "0.5.0",
                  property: "rabbitmq-property",
                }
              },
              headers: {
                $ref: "#/components/schemas/Identifier2"
              },
              payload: {
                $ref: "#/components/schemas/Status2"
              }
            }
          }
        },
      },
    }),
    operationName: 'send-operation-with-minimal-overall-structure',
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
    operationName: 'receive-operation-with-nothing',
    operationType: 'receive',
  }
}

// Special cases for AsyncAPI specification extensions

const extensions: Record<string, unknown> = {
  'x-first': 'first',
  'x-second': [1, 2, 3],
  'x-third': {
    fourth: 'fourth',
  },
}

export const ExtensionsInOperation: Story = {
  args: {
    source: prepareAsyncApiDocument({
      source: {
        asyncapi: "3.0.0",
        operations: {
          "send-operation-with-operation-extensions": {
            action: "send",
            ...extensions,
          }
        }
      },
    }),
    operationName: 'send-operation-with-operation-extensions',
    operationType: 'send',
  }
}

export const ExtensionsInChannel: Story = {
  args: {
    source: prepareAsyncApiDocument({
      source: {
        asyncapi: "3.0.0",
        channels: {
          "channel-with-extensions": {
            title: 'Channel With Extensions',
            description: 'Description of Channel With Extensions',
            ...extensions,
          }
        },
        operations: {
          "send-operation-with-channel-extensions": {
            action: "send",
            channel: {
              $ref: "#/channels/channel-with-extensions"
            },
          }
        },
      },
    }),
    operationName: 'send-operation-with-channel-extensions',
    operationType: 'send',
  }
}

export const ExtensionsInMessage: Story = {
  args: {
    source: prepareAsyncApiDocument({
      source: {
        asyncapi: "3.0.0",
        operations: {
          "send-operation-with-message-extensions": {
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
              ...extensions,
            }
          }
        },
      },
    }),
    operationName: 'send-operation-with-message-extensions',
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
                ...extensions,
              }
            }
          }
        }
      },
    }),
    operationName: 'send-operation-with-operation-bindings-extensions',
    operationType: 'send',
  }
}

export const ExtensionsInChannelBindings: Story = {
  args: {
    source: prepareAsyncApiDocument({
      source: {
        asyncapi: "3.0.0",
        channels: {
          "channel-with-bindings-extensions": {
            title: 'Channel With Bindings Extensions',
            description: 'Description of Channel With Bindings Extensions',
            bindings: {
              kafka: {
                bindingVersion: "0.5.0",
                predefinedProperty: "kafka-property",
                ...extensions,
              }
            }
          }
        },
        operations: {
          "send-operation-with-channel-bindings-extensions": {
            action: "send",
            channel: {
              $ref: "#/channels/channel-with-bindings-extensions"
            }
          }
        }
      },
    }),
    operationName: 'send-operation-with-channel-bindings-extensions',
    operationType: 'send',
  }
}

export const ExtensionsInMessageBindings: Story = {
  args: {
    source: prepareAsyncApiDocument({
      source: {
        asyncapi: "3.0.0",
        operations: {
          "send-operation-with-message-bindings-extensions": {
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
              bindings: {
                kafka: {
                  bindingVersion: "0.5.0",
                  predefinedProperty: "kafka-property",
                  ...extensions,
                }
              }
            }
          }
        },
      },
    }),
    operationName: 'send-operation-with-message-bindings-extensions',
    operationType: 'send',
  }
}

// Special cases for defaults

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
    operationName: 'send-operation-with-default-channel-title',
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
    operationName: 'send-operation-with-default-channel-description-if-nothing',
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
    operationName: 'send-operation-with-default-channel-description-if-summary',
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
    operationName: 'send-operation-with-default-channel-description-if-summary-and-description',
    operationType: 'send',
  }
}

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
