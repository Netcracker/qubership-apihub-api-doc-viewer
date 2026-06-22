import{j as G}from"./_commonjs-dynamic-modules-6308e768.js";import{a as wn}from"./AsyncApiOperationViewer-7344af83.js";import{c as Yn}from"./parse-yaml-source-2575e8ef.js";import{c as Bn,a as Fn,b as Jn}from"./async-api-diffs-utils-c795d618.js";import"./index-f46741a2.js";import"./UxBadge-40315de9.js";import"./DdlTableViewer-bda4e239.js";import"./GraphPropNodeViewer-300576ee.js";import"./index-415bee12.js";import"./GraphQLOperationDiffViewer-cb5021da.js";import"./GraphQLOperationViewer-88ec46ea.js";import"./js-yaml-71a24e1f.js";import"./index-d5b0668c.js";import"./index-442a5f79.js";import"./preprocess-c8b9481f.js";const Rn=`asyncapi: 3.0.0
info:
  title: Sample AsyncAPI
  version: 1.0.0
channels:
  testChannel:
    address: events.default
    messages:
      TestMessage:
        $ref: '#/components/messages/TestMessage'
    title: channel title
operations:
  sendOperation:
    action: send
    channel:
      $ref: '#/channels/testChannel'
    messages:
      - $ref: '#/components/messages/TestMessage'
components:
  messages:
    TestMessage:
      name: TestMessage
      payload:
        type: object
        properties:
          id:
            type: string
        required:
          - id
`,zn=`asyncapi: 3.0.0
info:
  title: Sample AsyncAPI
  version: 1.0.0
channels:
  testChannel:
    address: events.default
    messages:
      TestMessage:
        $ref: '#/components/messages/TestMessage'
    title: channel title
operations:
  sendOperation:
    action: send
    channel:
      $ref: '#/channels/testChannel'
    messages:
      - $ref: '#/components/messages/TestMessage'
components:
  messages:
    TestMessage:
      name: TestMessage
      payload:
        type: object
        properties:
          id:
            type: string
        required:
          - id
`,Qn=`asyncapi: 3.0.0
info:
  title: Sample AsyncAPI
  version: 1.0.0
channels:
  testChannel:
    address: events.default
    messages:
      TestMessage:
        $ref: '#/components/messages/TestMessage'
operations:
  sendOperation:
    action: send
    channel:
      $ref: '#/channels/testChannel'
    messages:
      - $ref: '#/components/messages/TestMessage'
components:
  messages:
    TestMessage:
      name: TestMessage
      payload:
        type: object
        properties:
          id:
            type: string
        required:
          - id
`,Un=`asyncapi: 3.0.0
info:
  title: Sample AsyncAPI
  version: 1.0.0
channels:
  testChannel:
    address: events.default
    messages:
      TestMessage:
        $ref: '#/components/messages/TestMessage'
    description: channel description
operations:
  sendOperation:
    action: send
    channel:
      $ref: '#/channels/testChannel'
    messages:
      - $ref: '#/components/messages/TestMessage'
components:
  messages:
    TestMessage:
      name: TestMessage
      payload:
        type: object
        properties:
          id:
            type: string
        required:
          - id
`,Wn=`asyncapi: 3.0.0
info:
  title: Sample AsyncAPI
  version: 1.0.0
channels:
  testChannel:
    address: events.default
    messages:
      TestMessage:
        $ref: '#/components/messages/TestMessage'
    summary: Long channel summary. Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
operations:
  sendOperation:
    action: send
    channel:
      $ref: '#/channels/testChannel'
    messages:
      - $ref: '#/components/messages/TestMessage'
components:
  messages:
    TestMessage:
      name: TestMessage
      payload:
        type: object
        properties:
          id:
            type: string
        required:
          - id
`,Xn=`asyncapi: 3.0.0
info:
  title: Sample AsyncAPI
  version: 1.0.0
channels:
  testChannel:
    address: events.default
    messages:
      TestMessage:
        $ref: '#/components/messages/TestMessage'
    summary: Long channel summary. Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
operations:
  sendOperation:
    action: send
    channel:
      $ref: '#/channels/testChannel'
    messages:
      - $ref: '#/components/messages/TestMessage'
components:
  messages:
    TestMessage:
      name: TestMessage
      payload:
        type: object
        properties:
          id:
            type: string
        required:
          - id
`,Zn=`asyncapi: 3.0.0
info:
  title: Sample AsyncAPI
  version: 1.0.0
channels:
  testChannel:
    address: events.default
    messages:
      TestMessage:
        $ref: '#/components/messages/TestMessage'
operations:
  sendOperation:
    action: send
    channel:
      $ref: '#/channels/testChannel'
    messages:
      - $ref: '#/components/messages/TestMessage'
components:
  messages:
    TestMessage:
      name: TestMessage
      payload:
        type: object
        properties:
          id:
            type: string
        required:
          - id
`,es=`asyncapi: 3.0.0
info:
  title: Sample AsyncAPI
  version: 1.0.0
channels:
  testChannel:
    address: events.default
    messages:
      TestMessage:
        $ref: '#/components/messages/TestMessage'
    description: channel description
operations:
  sendOperation:
    action: send
    channel:
      $ref: '#/channels/testChannel'
    messages:
      - $ref: '#/components/messages/TestMessage'
components:
  messages:
    TestMessage:
      name: TestMessage
      payload:
        type: object
        properties:
          id:
            type: string
        required:
          - id
`,ns=`asyncapi: 3.0.0
info:
  title: Sample AsyncAPI
  version: 1.0.0
channels:
  testChannel:
    address: events.default
    messages:
      TestMessage:
        $ref: '#/components/messages/TestMessage'
    description: Long channel description. Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
operations:
  sendOperation:
    action: send
    channel:
      $ref: '#/channels/testChannel'
    messages:
      - $ref: '#/components/messages/TestMessage'
components:
  messages:
    TestMessage:
      name: TestMessage
      payload:
        type: object
        properties:
          id:
            type: string
        required:
          - id
`,ss=`asyncapi: 3.0.0
info:
  title: Sample AsyncAPI
  version: 1.0.0
channels:
  testChannel:
    address: events.default
    messages:
      TestMessage:
        $ref: '#/components/messages/TestMessage'
    description: Long channel description. Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
operations:
  sendOperation:
    action: send
    channel:
      $ref: '#/channels/testChannel'
    messages:
      - $ref: '#/components/messages/TestMessage'
components:
  messages:
    TestMessage:
      name: TestMessage
      payload:
        type: object
        properties:
          id:
            type: string
        required:
          - id
`,as=`asyncapi: 3.0.0
info:
  title: Sample AsyncAPI
  version: 1.0.0
channels:
  testChannel:
    address: events.default
    messages:
      TestMessage:
        $ref: '#/components/messages/TestMessage'
    description: channel description
operations:
  sendOperation:
    action: send
    channel:
      $ref: '#/channels/testChannel'
    messages:
      - $ref: '#/components/messages/TestMessage'
components:
  messages:
    TestMessage:
      name: TestMessage
      payload:
        type: object
        properties:
          id:
            type: string
        required:
          - id
`,ts=`asyncapi: 3.0.0
info:
  title: Sample AsyncAPI
  version: 1.0.0
channels:
  testChannel:
    address: events.default
    messages:
      TestMessage:
        $ref: '#/components/messages/TestMessage'
    summary: channel summary
operations:
  sendOperation:
    action: send
    channel:
      $ref: '#/channels/testChannel'
    messages:
      - $ref: '#/components/messages/TestMessage'
components:
  messages:
    TestMessage:
      name: TestMessage
      payload:
        type: object
        properties:
          id:
            type: string
        required:
          - id
`,os=`asyncapi: 3.0.0
info:
  title: Sample AsyncAPI
  version: 1.0.0
channels:
  testChannel:
    address: events.default
    messages:
      TestMessage:
        $ref: '#/components/messages/TestMessage'
    summary: Long channel summary. Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
operations:
  sendOperation:
    action: send
    channel:
      $ref: '#/channels/testChannel'
    messages:
      - $ref: '#/components/messages/TestMessage'
components:
  messages:
    TestMessage:
      name: TestMessage
      payload:
        type: object
        properties:
          id:
            type: string
        required:
          - id
`,is=`asyncapi: 3.0.0
info:
  title: Sample AsyncAPI
  version: 1.0.0
channels:
  testChannel:
    address: events.default
    messages:
      TestMessage:
        $ref: '#/components/messages/TestMessage'
    summary: Long channel summary. Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
operations:
  sendOperation:
    action: send
    channel:
      $ref: '#/channels/testChannel'
    messages:
      - $ref: '#/components/messages/TestMessage'
components:
  messages:
    TestMessage:
      name: TestMessage
      payload:
        type: object
        properties:
          id:
            type: string
        required:
          - id
`,rs=`asyncapi: 3.0.0
info:
  title: Sample AsyncAPI
  version: 1.0.0
channels:
  testChannel:
    address: events.default
    messages:
      TestMessage:
        $ref: '#/components/messages/TestMessage'
    description: channel description
operations:
  sendOperation:
    action: send
    channel:
      $ref: '#/channels/testChannel'
    messages:
      - $ref: '#/components/messages/TestMessage'
components:
  messages:
    TestMessage:
      name: TestMessage
      payload:
        type: object
        properties:
          id:
            type: string
        required:
          - id
`,cs=`asyncapi: 3.0.0
info:
  title: Sample AsyncAPI
  version: 1.0.0
channels:
  testChannel:
    address: events.default
    messages:
      TestMessage:
        $ref: '#/components/messages/TestMessage'
    summary: channel summary
operations:
  sendOperation:
    action: send
    channel:
      $ref: '#/channels/testChannel'
    messages:
      - $ref: '#/components/messages/TestMessage'
components:
  messages:
    TestMessage:
      name: TestMessage
      payload:
        type: object
        properties:
          id:
            type: string
        required:
          - id
`,ds=`asyncapi: 3.0.0
info:
  title: Sample AsyncAPI
  version: 1.0.0
channels:
  testChannel:
    address: events.default
    messages:
      TestMessage:
        $ref: '#/components/messages/TestMessage'
operations:
  sendOperation:
    action: send
    channel:
      $ref: '#/channels/testChannel'
    messages:
      - $ref: '#/components/messages/TestMessage'
components:
  messages:
    TestMessage:
      name: TestMessage
      payload:
        type: object
        properties:
          id:
            type: string
        required:
          - id
`,ls=`asyncapi: 3.0.0
info:
  title: Sample AsyncAPI
  version: 1.0.0
channels:
  testChannel:
    address: events.default
    messages:
      TestMessage:
        $ref: '#/components/messages/TestMessage'
    description: Long channel description. Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
operations:
  sendOperation:
    action: send
    channel:
      $ref: '#/channels/testChannel'
    messages:
      - $ref: '#/components/messages/TestMessage'
components:
  messages:
    TestMessage:
      name: TestMessage
      payload:
        type: object
        properties:
          id:
            type: string
        required:
          - id
`,ms=`asyncapi: 3.0.0
info:
  title: Sample AsyncAPI
  version: 1.0.0
channels:
  testChannel:
    address: events.default
    messages:
      TestMessage:
        $ref: '#/components/messages/TestMessage'
    description: Long channel description. Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
operations:
  sendOperation:
    action: send
    channel:
      $ref: '#/channels/testChannel'
    messages:
      - $ref: '#/components/messages/TestMessage'
components:
  messages:
    TestMessage:
      name: TestMessage
      payload:
        type: object
        properties:
          id:
            type: string
        required:
          - id
`,ps=`asyncapi: 3.0.0
info:
  title: Sample AsyncAPI
  version: 1.0.0
channels:
  testChannel:
    address: events.default
    messages:
      TestMessage:
        $ref: '#/components/messages/TestMessage'
operations:
  sendOperation:
    action: send
    channel:
      $ref: '#/channels/testChannel'
    messages:
      - $ref: '#/components/messages/TestMessage'
components:
  messages:
    TestMessage:
      name: TestMessage
      payload:
        type: object
        properties:
          id:
            type: string
        required:
          - id
`,gs=`asyncapi: 3.0.0
info:
  title: Sample AsyncAPI
  version: 1.0.0
channels:
  testChannel:
    address: events.default
    messages:
      TestMessage:
        $ref: '#/components/messages/TestMessage'
    summary: channel summary
operations:
  sendOperation:
    action: send
    channel:
      $ref: '#/channels/testChannel'
    messages:
      - $ref: '#/components/messages/TestMessage'
components:
  messages:
    TestMessage:
      name: TestMessage
      payload:
        type: object
        properties:
          id:
            type: string
        required:
          - id
`,us=`asyncapi: 3.0.0
info:
  title: Sample AsyncAPI
  version: 1.0.0
channels:
  testChannel:
    address: events.default
    messages:
      TestMessage:
        $ref: '#/components/messages/TestMessage'
    summary: channel summary
operations:
  sendOperation:
    action: send
    channel:
      $ref: '#/channels/testChannel'
    messages:
      - $ref: '#/components/messages/TestMessage'
components:
  messages:
    TestMessage:
      name: TestMessage
      payload:
        type: object
        properties:
          id:
            type: string
        required:
          - id
`,_s=`asyncapi: 3.0.0
info:
  title: Sample AsyncAPI
  version: 1.0.0
channels:
  testChannel:
    address: events.default
    messages:
      TestMessage:
        $ref: '#/components/messages/TestMessage'
operations:
  sendOperation:
    action: send
    channel:
      $ref: '#/channels/testChannel'
    messages:
      - $ref: '#/components/messages/TestMessage'
components:
  messages:
    TestMessage:
      name: TestMessage
      payload:
        type: object
        properties:
          id:
            type: string
        required:
          - id
`,hs=`asyncapi: 3.0.0
info:
  title: Sample AsyncAPI
  version: 1.0.0
channels:
  testChannel:
    address: events.default
    messages:
      TestMessage:
        $ref: '#/components/messages/TestMessage'
    bindings:
      kafka:
        bindingVersion: 1.0.0
        topic: events-topic
        partitions: 5
operations:
  sendOperation:
    action: send
    channel:
      $ref: '#/channels/testChannel'
    messages:
      - $ref: '#/components/messages/TestMessage'
components:
  messages:
    TestMessage:
      name: TestMessage
      payload:
        type: object
        properties:
          id:
            type: string
        required:
          - id
`,fs=`asyncapi: 3.0.0
info:
  title: Sample AsyncAPI
  version: 1.0.0
channels:
  testChannel:
    address: events.default
    messages:
      TestMessage:
        $ref: '#/components/messages/TestMessage'
    bindings:
      kafka:
        bindingVersion: 1.0.0
        topic: events-topic
        partitions: 5
      amqp:
        bindingVersion: 0.3.0
        is: routingKey
        exchange:
          name: events-exchange
          type: topic
          durable: true
          autoDelete: false
operations:
  sendOperation:
    action: send
    channel:
      $ref: '#/channels/testChannel'
    messages:
      - $ref: '#/components/messages/TestMessage'
components:
  messages:
    TestMessage:
      name: TestMessage
      payload:
        type: object
        properties:
          id:
            type: string
        required:
          - id
`,ys=`asyncapi: 3.0.0
info:
  title: Sample AsyncAPI
  version: 1.0.0
channels:
  testChannel:
    address: events.default
    messages:
      TestMessage:
        $ref: '#/components/messages/TestMessage'
operations:
  sendOperation:
    action: send
    channel:
      $ref: '#/channels/testChannel'
    messages:
      - $ref: '#/components/messages/TestMessage'
components:
  messages:
    TestMessage:
      name: TestMessage
      payload:
        type: object
        properties:
          id:
            type: string
        required:
          - id
`,vs=`asyncapi: 3.0.0
info:
  title: Sample AsyncAPI
  version: 1.0.0
channels:
  testChannel:
    address: events.default
    messages:
      TestMessage:
        $ref: '#/components/messages/TestMessage'
    bindings:
      kafka:
        bindingVersion: 1.0.0
        topic: events-topic
        partitions: 5
operations:
  sendOperation:
    action: send
    channel:
      $ref: '#/channels/testChannel'
    messages:
      - $ref: '#/components/messages/TestMessage'
components:
  messages:
    TestMessage:
      name: TestMessage
      payload:
        type: object
        properties:
          id:
            type: string
        required:
          - id
`,Ms=`asyncapi: 3.0.0
info:
  title: Sample AsyncAPI
  version: 1.0.0
channels:
  testChannel:
    address: events.default
    messages:
      TestMessage:
        $ref: '#/components/messages/TestMessage'
    bindings:
      kafka:
        bindingVersion: 1.0.0
operations:
  sendOperation:
    action: send
    channel:
      $ref: '#/channels/testChannel'
    messages:
      - $ref: '#/components/messages/TestMessage'
components:
  messages:
    TestMessage:
      name: TestMessage
      payload:
        type: object
        properties:
          id:
            type: string
        required:
          - id
`,Ts=`asyncapi: 3.0.0
info:
  title: Sample AsyncAPI
  version: 1.0.0
channels:
  testChannel:
    address: events.default
    messages:
      TestMessage:
        $ref: '#/components/messages/TestMessage'
    bindings:
      kafka:
        bindingVersion: 1.0.0
operations:
  sendOperation:
    action: send
    channel:
      $ref: '#/channels/testChannel'
    messages:
      - $ref: '#/components/messages/TestMessage'
components:
  messages:
    TestMessage:
      name: TestMessage
      payload:
        type: object
        properties:
          id:
            type: string
        required:
          - id
`,bs=`asyncapi: 3.0.0
info:
  title: Sample AsyncAPI
  version: 1.0.0
channels:
  testChannel:
    address: events.default
    messages:
      TestMessage:
        $ref: '#/components/messages/TestMessage'
    bindings:
      kafka: {}
operations:
  sendOperation:
    action: send
    channel:
      $ref: '#/channels/testChannel'
    messages:
      - $ref: '#/components/messages/TestMessage'
components:
  messages:
    TestMessage:
      name: TestMessage
      payload:
        type: object
        properties:
          id:
            type: string
        required:
          - id
`,Cs=`asyncapi: 3.0.0
info:
  title: Sample AsyncAPI
  version: 1.0.0
channels:
  testChannel:
    address: events.default
    messages:
      TestMessage:
        $ref: '#/components/messages/TestMessage'
    bindings:
      kafka:
        bindingVersion: 1.0.0
        arbitraryJso:
          unchanged: keep
          removed: bye
          changed: 111
operations:
  sendOperation:
    action: send
    channel:
      $ref: '#/channels/testChannel'
    messages:
      - $ref: '#/components/messages/TestMessage'
components:
  messages:
    TestMessage:
      name: TestMessage
      payload:
        type: object
        properties:
          id:
            type: string
        required:
          - id
`,$s=`asyncapi: 3.0.0
info:
  title: Sample AsyncAPI
  version: 1.0.0
channels:
  testChannel:
    address: events.default
    messages:
      TestMessage:
        $ref: '#/components/messages/TestMessage'
    x-first: first
operations:
  sendOperation:
    action: send
    channel:
      $ref: '#/channels/testChannel'
    messages:
      - $ref: '#/components/messages/TestMessage'
components:
  messages:
    TestMessage:
      name: TestMessage
      payload:
        type: object
        properties:
          id:
            type: string
        required:
          - id
`,As=`asyncapi: 3.0.0
info:
  title: Sample AsyncAPI
  version: 1.0.0
channels:
  testChannel:
    address: events.default
    messages:
      TestMessage:
        $ref: '#/components/messages/TestMessage'
    x-first: first
    x-second: second
operations:
  sendOperation:
    action: send
    channel:
      $ref: '#/channels/testChannel'
    messages:
      - $ref: '#/components/messages/TestMessage'
components:
  messages:
    TestMessage:
      name: TestMessage
      payload:
        type: object
        properties:
          id:
            type: string
        required:
          - id
`,qs=`asyncapi: 3.0.0
info:
  title: Sample AsyncAPI
  version: 1.0.0
channels:
  testChannel:
    address: events.default
    messages:
      TestMessage:
        $ref: '#/components/messages/TestMessage'
    x-first: first
    x-second: before
operations:
  sendOperation:
    action: send
    channel:
      $ref: '#/channels/testChannel'
    messages:
      - $ref: '#/components/messages/TestMessage'
components:
  messages:
    TestMessage:
      name: TestMessage
      payload:
        type: object
        properties:
          id:
            type: string
        required:
          - id
`,Ss=`asyncapi: 3.0.0
info:
  title: Sample AsyncAPI
  version: 1.0.0
channels:
  testChannel:
    address: events.default
    messages:
      TestMessage:
        $ref: '#/components/messages/TestMessage'
operations:
  sendOperation:
    action: send
    channel:
      $ref: '#/channels/testChannel'
    messages:
      - $ref: '#/components/messages/TestMessage'
components:
  messages:
    TestMessage:
      name: TestMessage
      payload:
        type: object
        properties:
          id:
            type: string
        required:
          - id
`,xs=`asyncapi: 3.0.0
info:
  title: Sample AsyncAPI
  version: 1.0.0
channels:
  testChannel:
    address: events.default
    messages:
      TestMessage:
        $ref: '#/components/messages/TestMessage'
    x-first: first
    x-second: second
operations:
  sendOperation:
    action: send
    channel:
      $ref: '#/channels/testChannel'
    messages:
      - $ref: '#/components/messages/TestMessage'
components:
  messages:
    TestMessage:
      name: TestMessage
      payload:
        type: object
        properties:
          id:
            type: string
        required:
          - id
`,js=`asyncapi: 3.0.0
info:
  title: Sample AsyncAPI
  version: 1.0.0
channels:
  testChannel:
    address: events.default
    messages:
      TestMessage:
        $ref: '#/components/messages/TestMessage'
    title: CHANGED channel title
operations:
  sendOperation:
    action: send
    channel:
      $ref: '#/channels/testChannel'
    messages:
      - $ref: '#/components/messages/TestMessage'
components:
  messages:
    TestMessage:
      name: TestMessage
      payload:
        type: object
        properties:
          id:
            type: string
        required:
          - id
`,Os=`asyncapi: 3.0.0
info:
  title: Sample AsyncAPI
  version: 1.0.0
channels:
  testChannel:
    address: events.default
    messages:
      TestMessage:
        $ref: '#/components/messages/TestMessage'
operations:
  sendOperation:
    action: send
    channel:
      $ref: '#/channels/testChannel'
    messages:
      - $ref: '#/components/messages/TestMessage'
components:
  messages:
    TestMessage:
      name: TestMessage
      payload:
        type: object
        properties:
          id:
            type: string
        required:
          - id
`,ks=`asyncapi: 3.0.0
info:
  title: Sample AsyncAPI
  version: 1.0.0
channels:
  testChannel:
    address: events.default
    messages:
      TestMessage:
        $ref: '#/components/messages/TestMessage'
    title: channel title
operations:
  sendOperation:
    action: send
    channel:
      $ref: '#/channels/testChannel'
    messages:
      - $ref: '#/components/messages/TestMessage'
components:
  messages:
    TestMessage:
      name: TestMessage
      payload:
        type: object
        properties:
          id:
            type: string
        required:
          - id
`,Is=`asyncapi: 3.0.0
info:
  title: Sample AsyncAPI
  version: 1.0.0
channels:
  testChannel:
    address: events.default
    messages:
      TestMessage:
        $ref: '#/components/messages/TestMessage'
    description: CHANGED channel description
operations:
  sendOperation:
    action: send
    channel:
      $ref: '#/channels/testChannel'
    messages:
      - $ref: '#/components/messages/TestMessage'
components:
  messages:
    TestMessage:
      name: TestMessage
      payload:
        type: object
        properties:
          id:
            type: string
        required:
          - id
`,Ps=`asyncapi: 3.0.0
info:
  title: Sample AsyncAPI
  version: 1.0.0
channels:
  testChannel:
    address: events.default
    messages:
      TestMessage:
        $ref: '#/components/messages/TestMessage'
    summary: CHANGED long channel summary. Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem
operations:
  sendOperation:
    action: send
    channel:
      $ref: '#/channels/testChannel'
    messages:
      - $ref: '#/components/messages/TestMessage'
components:
  messages:
    TestMessage:
      name: TestMessage
      payload:
        type: object
        properties:
          id:
            type: string
        required:
          - id
`,Vs=`asyncapi: 3.0.0
info:
  title: Sample AsyncAPI
  version: 1.0.0
channels:
  testChannel:
    address: events.default
    messages:
      TestMessage:
        $ref: '#/components/messages/TestMessage'
operations:
  sendOperation:
    action: send
    channel:
      $ref: '#/channels/testChannel'
    messages:
      - $ref: '#/components/messages/TestMessage'
components:
  messages:
    TestMessage:
      name: TestMessage
      payload:
        type: object
        properties:
          id:
            type: string
        required:
          - id
`,Ls=`asyncapi: 3.0.0
info:
  title: Sample AsyncAPI
  version: 1.0.0
channels:
  testChannel:
    address: events.default
    messages:
      TestMessage:
        $ref: '#/components/messages/TestMessage'
    summary: Long channel summary. Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
operations:
  sendOperation:
    action: send
    channel:
      $ref: '#/channels/testChannel'
    messages:
      - $ref: '#/components/messages/TestMessage'
components:
  messages:
    TestMessage:
      name: TestMessage
      payload:
        type: object
        properties:
          id:
            type: string
        required:
          - id
`,Es=`asyncapi: 3.0.0
info:
  title: Sample AsyncAPI
  version: 1.0.0
channels:
  testChannel:
    address: events.default
    messages:
      TestMessage:
        $ref: '#/components/messages/TestMessage'
    summary: channel description
operations:
  sendOperation:
    action: send
    channel:
      $ref: '#/channels/testChannel'
    messages:
      - $ref: '#/components/messages/TestMessage'
components:
  messages:
    TestMessage:
      name: TestMessage
      payload:
        type: object
        properties:
          id:
            type: string
        required:
          - id
`,Ds=`asyncapi: 3.0.0
info:
  title: Sample AsyncAPI
  version: 1.0.0
channels:
  testChannel:
    address: events.default
    messages:
      TestMessage:
        $ref: '#/components/messages/TestMessage'
    summary: channel summary
operations:
  sendOperation:
    action: send
    channel:
      $ref: '#/channels/testChannel'
    messages:
      - $ref: '#/components/messages/TestMessage'
components:
  messages:
    TestMessage:
      name: TestMessage
      payload:
        type: object
        properties:
          id:
            type: string
        required:
          - id
`,Ks=`asyncapi: 3.0.0
info:
  title: Sample AsyncAPI
  version: 1.0.0
channels:
  testChannel:
    address: events.default
    messages:
      TestMessage:
        $ref: '#/components/messages/TestMessage'
    summary: Long channel description. Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
operations:
  sendOperation:
    action: send
    channel:
      $ref: '#/channels/testChannel'
    messages:
      - $ref: '#/components/messages/TestMessage'
components:
  messages:
    TestMessage:
      name: TestMessage
      payload:
        type: object
        properties:
          id:
            type: string
        required:
          - id
`,Gs=`asyncapi: 3.0.0
info:
  title: Sample AsyncAPI
  version: 1.0.0
channels:
  testChannel:
    address: events.default
    messages:
      TestMessage:
        $ref: '#/components/messages/TestMessage'
    summary: Long channel summary. Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
operations:
  sendOperation:
    action: send
    channel:
      $ref: '#/channels/testChannel'
    messages:
      - $ref: '#/components/messages/TestMessage'
components:
  messages:
    TestMessage:
      name: TestMessage
      payload:
        type: object
        properties:
          id:
            type: string
        required:
          - id
`,Ns=`asyncapi: 3.0.0
info:
  title: Sample AsyncAPI
  version: 1.0.0
channels:
  testChannel:
    address: events.default
    messages:
      TestMessage:
        $ref: '#/components/messages/TestMessage'
    description: channel summary
operations:
  sendOperation:
    action: send
    channel:
      $ref: '#/channels/testChannel'
    messages:
      - $ref: '#/components/messages/TestMessage'
components:
  messages:
    TestMessage:
      name: TestMessage
      payload:
        type: object
        properties:
          id:
            type: string
        required:
          - id
`,Hs=`asyncapi: 3.0.0
info:
  title: Sample AsyncAPI
  version: 1.0.0
channels:
  testChannel:
    address: events.default
    messages:
      TestMessage:
        $ref: '#/components/messages/TestMessage'
    description: channel description
operations:
  sendOperation:
    action: send
    channel:
      $ref: '#/channels/testChannel'
    messages:
      - $ref: '#/components/messages/TestMessage'
components:
  messages:
    TestMessage:
      name: TestMessage
      payload:
        type: object
        properties:
          id:
            type: string
        required:
          - id
`,ws=`asyncapi: 3.0.0
info:
  title: Sample AsyncAPI
  version: 1.0.0
channels:
  testChannel:
    address: events.default
    messages:
      TestMessage:
        $ref: '#/components/messages/TestMessage'
    description: Long channel summary. Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
operations:
  sendOperation:
    action: send
    channel:
      $ref: '#/channels/testChannel'
    messages:
      - $ref: '#/components/messages/TestMessage'
components:
  messages:
    TestMessage:
      name: TestMessage
      payload:
        type: object
        properties:
          id:
            type: string
        required:
          - id
`,Ys=`asyncapi: 3.0.0
info:
  title: Sample AsyncAPI
  version: 1.0.0
channels:
  testChannel:
    address: events.default
    messages:
      TestMessage:
        $ref: '#/components/messages/TestMessage'
operations:
  sendOperation:
    action: send
    channel:
      $ref: '#/channels/testChannel'
    messages:
      - $ref: '#/components/messages/TestMessage'
components:
  messages:
    TestMessage:
      name: TestMessage
      payload:
        type: object
        properties:
          id:
            type: string
        required:
          - id
`,Bs=`asyncapi: 3.0.0
info:
  title: Sample AsyncAPI
  version: 1.0.0
channels:
  testChannel:
    address: events.default
    messages:
      TestMessage:
        $ref: '#/components/messages/TestMessage'
    description: Long channel description. Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
operations:
  sendOperation:
    action: send
    channel:
      $ref: '#/channels/testChannel'
    messages:
      - $ref: '#/components/messages/TestMessage'
components:
  messages:
    TestMessage:
      name: TestMessage
      payload:
        type: object
        properties:
          id:
            type: string
        required:
          - id
`,Fs=`asyncapi: 3.0.0
info:
  title: Sample AsyncAPI
  version: 1.0.0
channels:
  testChannel:
    address: events.default
    messages:
      TestMessage:
        $ref: '#/components/messages/TestMessage'
    description: channel description
operations:
  sendOperation:
    action: send
    channel:
      $ref: '#/channels/testChannel'
    messages:
      - $ref: '#/components/messages/TestMessage'
components:
  messages:
    TestMessage:
      name: TestMessage
      payload:
        type: object
        properties:
          id:
            type: string
        required:
          - id
`,Js=`asyncapi: 3.0.0
info:
  title: Sample AsyncAPI
  version: 1.0.0
channels:
  testChannel:
    address: events.default
    messages:
      TestMessage:
        $ref: '#/components/messages/TestMessage'
    description: CHANGED long channel description. Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem
operations:
  sendOperation:
    action: send
    channel:
      $ref: '#/channels/testChannel'
    messages:
      - $ref: '#/components/messages/TestMessage'
components:
  messages:
    TestMessage:
      name: TestMessage
      payload:
        type: object
        properties:
          id:
            type: string
        required:
          - id
`,Rs=`asyncapi: 3.0.0
info:
  title: Sample AsyncAPI
  version: 1.0.0
channels:
  testChannel:
    address: events.default
    messages:
      TestMessage:
        $ref: '#/components/messages/TestMessage'
operations:
  sendOperation:
    action: send
    channel:
      $ref: '#/channels/testChannel'
    messages:
      - $ref: '#/components/messages/TestMessage'
components:
  messages:
    TestMessage:
      name: TestMessage
      payload:
        type: object
        properties:
          id:
            type: string
        required:
          - id
`,zs=`asyncapi: 3.0.0
info:
  title: Sample AsyncAPI
  version: 1.0.0
channels:
  testChannel:
    address: events.default
    messages:
      TestMessage:
        $ref: '#/components/messages/TestMessage'
    description: Long channel description. Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
operations:
  sendOperation:
    action: send
    channel:
      $ref: '#/channels/testChannel'
    messages:
      - $ref: '#/components/messages/TestMessage'
components:
  messages:
    TestMessage:
      name: TestMessage
      payload:
        type: object
        properties:
          id:
            type: string
        required:
          - id
`,Qs=`asyncapi: 3.0.0
info:
  title: Sample AsyncAPI
  version: 1.0.0
channels:
  testChannel:
    address: events.default
    messages:
      TestMessage:
        $ref: '#/components/messages/TestMessage'
    summary: CHANGED channel summary
operations:
  sendOperation:
    action: send
    channel:
      $ref: '#/channels/testChannel'
    messages:
      - $ref: '#/components/messages/TestMessage'
components:
  messages:
    TestMessage:
      name: TestMessage
      payload:
        type: object
        properties:
          id:
            type: string
        required:
          - id
`,Us=`asyncapi: 3.0.0
info:
  title: Sample AsyncAPI
  version: 1.0.0
channels:
  testChannel:
    address: events.default
    messages:
      TestMessage:
        $ref: '#/components/messages/TestMessage'
operations:
  sendOperation:
    action: send
    channel:
      $ref: '#/channels/testChannel'
    messages:
      - $ref: '#/components/messages/TestMessage'
components:
  messages:
    TestMessage:
      name: TestMessage
      payload:
        type: object
        properties:
          id:
            type: string
        required:
          - id
`,Ws=`asyncapi: 3.0.0
info:
  title: Sample AsyncAPI
  version: 1.0.0
channels:
  testChannel:
    address: events.default
    messages:
      TestMessage:
        $ref: '#/components/messages/TestMessage'
    summary: channel summary
operations:
  sendOperation:
    action: send
    channel:
      $ref: '#/channels/testChannel'
    messages:
      - $ref: '#/components/messages/TestMessage'
components:
  messages:
    TestMessage:
      name: TestMessage
      payload:
        type: object
        properties:
          id:
            type: string
        required:
          - id
`,Xs=`asyncapi: 3.0.0
info:
  title: Sample AsyncAPI
  version: 1.0.0
channels:
  testChannel:
    address: events.default
    messages:
      TestMessage:
        $ref: '#/components/messages/TestMessage'
    bindings:
      kafka:
        bindingVersion: 1.0.0
        topic: events-topic
        partitions: 5
      amqp:
        bindingVersion: 0.3.0
        is: routingKey
        exchange:
          name: events-exchange
          type: topic
          durable: true
          autoDelete: false
operations:
  sendOperation:
    action: send
    channel:
      $ref: '#/channels/testChannel'
    messages:
      - $ref: '#/components/messages/TestMessage'
components:
  messages:
    TestMessage:
      name: TestMessage
      payload:
        type: object
        properties:
          id:
            type: string
        required:
          - id
`,Zs=`asyncapi: 3.0.0
info:
  title: Sample AsyncAPI
  version: 1.0.0
channels:
  testChannel:
    address: events.default
    messages:
      TestMessage:
        $ref: '#/components/messages/TestMessage'
    bindings:
      amqp:
        bindingVersion: 0.3.0
        is: routingKey
        exchange:
          name: events-exchange
          type: topic
          durable: true
          autoDelete: false
operations:
  sendOperation:
    action: send
    channel:
      $ref: '#/channels/testChannel'
    messages:
      - $ref: '#/components/messages/TestMessage'
components:
  messages:
    TestMessage:
      name: TestMessage
      payload:
        type: object
        properties:
          id:
            type: string
        required:
          - id
`,ea=`asyncapi: 3.0.0
info:
  title: Sample AsyncAPI
  version: 1.0.0
channels:
  testChannel:
    address: events.default
    messages:
      TestMessage:
        $ref: '#/components/messages/TestMessage'
    bindings:
      kafka:
        bindingVersion: 1.0.0
        topic: events-topic
        partitions: 5
operations:
  sendOperation:
    action: send
    channel:
      $ref: '#/channels/testChannel'
    messages:
      - $ref: '#/components/messages/TestMessage'
components:
  messages:
    TestMessage:
      name: TestMessage
      payload:
        type: object
        properties:
          id:
            type: string
        required:
          - id
`,na=`asyncapi: 3.0.0
info:
  title: Sample AsyncAPI
  version: 1.0.0
channels:
  testChannel:
    address: events.default
    messages:
      TestMessage:
        $ref: '#/components/messages/TestMessage'
operations:
  sendOperation:
    action: send
    channel:
      $ref: '#/channels/testChannel'
    messages:
      - $ref: '#/components/messages/TestMessage'
components:
  messages:
    TestMessage:
      name: TestMessage
      payload:
        type: object
        properties:
          id:
            type: string
        required:
          - id
`,sa=`asyncapi: 3.0.0
info:
  title: Sample AsyncAPI
  version: 1.0.0
channels:
  testChannel:
    address: events.default
    messages:
      TestMessage:
        $ref: '#/components/messages/TestMessage'
    bindings:
      kafka:
        bindingVersion: 2.0.0
operations:
  sendOperation:
    action: send
    channel:
      $ref: '#/channels/testChannel'
    messages:
      - $ref: '#/components/messages/TestMessage'
components:
  messages:
    TestMessage:
      name: TestMessage
      payload:
        type: object
        properties:
          id:
            type: string
        required:
          - id
`,aa=`asyncapi: 3.0.0
info:
  title: Sample AsyncAPI
  version: 1.0.0
channels:
  testChannel:
    address: events.default
    messages:
      TestMessage:
        $ref: '#/components/messages/TestMessage'
    bindings:
      kafka: {}
operations:
  sendOperation:
    action: send
    channel:
      $ref: '#/channels/testChannel'
    messages:
      - $ref: '#/components/messages/TestMessage'
components:
  messages:
    TestMessage:
      name: TestMessage
      payload:
        type: object
        properties:
          id:
            type: string
        required:
          - id
`,ta=`asyncapi: 3.0.0
info:
  title: Sample AsyncAPI
  version: 1.0.0
channels:
  testChannel:
    address: events.default
    messages:
      TestMessage:
        $ref: '#/components/messages/TestMessage'
    bindings:
      kafka:
        bindingVersion: 1.0.0
operations:
  sendOperation:
    action: send
    channel:
      $ref: '#/channels/testChannel'
    messages:
      - $ref: '#/components/messages/TestMessage'
components:
  messages:
    TestMessage:
      name: TestMessage
      payload:
        type: object
        properties:
          id:
            type: string
        required:
          - id
`,oa=`asyncapi: 3.0.0
info:
  title: Sample AsyncAPI
  version: 1.0.0
channels:
  testChannel:
    address: events.default
    messages:
      TestMessage:
        $ref: '#/components/messages/TestMessage'
    bindings:
      kafka:
        bindingVersion: 1.0.0
        arbitraryJso:
          unchanged: keep
          changed: test string
          added: new
operations:
  sendOperation:
    action: send
    channel:
      $ref: '#/channels/testChannel'
    messages:
      - $ref: '#/components/messages/TestMessage'
components:
  messages:
    TestMessage:
      name: TestMessage
      payload:
        type: object
        properties:
          id:
            type: string
        required:
          - id
`,ia=`asyncapi: 3.0.0
info:
  title: Sample AsyncAPI
  version: 1.0.0
channels:
  testChannel:
    address: events.default
    messages:
      TestMessage:
        $ref: '#/components/messages/TestMessage'
    x-first: first
    x-second: second
operations:
  sendOperation:
    action: send
    channel:
      $ref: '#/channels/testChannel'
    messages:
      - $ref: '#/components/messages/TestMessage'
components:
  messages:
    TestMessage:
      name: TestMessage
      payload:
        type: object
        properties:
          id:
            type: string
        required:
          - id
`,ra=`asyncapi: 3.0.0
info:
  title: Sample AsyncAPI
  version: 1.0.0
channels:
  testChannel:
    address: events.default
    messages:
      TestMessage:
        $ref: '#/components/messages/TestMessage'
    x-first: first
operations:
  sendOperation:
    action: send
    channel:
      $ref: '#/channels/testChannel'
    messages:
      - $ref: '#/components/messages/TestMessage'
components:
  messages:
    TestMessage:
      name: TestMessage
      payload:
        type: object
        properties:
          id:
            type: string
        required:
          - id
`,ca=`asyncapi: 3.0.0
info:
  title: Sample AsyncAPI
  version: 1.0.0
channels:
  testChannel:
    address: events.default
    messages:
      TestMessage:
        $ref: '#/components/messages/TestMessage'
    x-first: first
    x-second: after
operations:
  sendOperation:
    action: send
    channel:
      $ref: '#/channels/testChannel'
    messages:
      - $ref: '#/components/messages/TestMessage'
components:
  messages:
    TestMessage:
      name: TestMessage
      payload:
        type: object
        properties:
          id:
            type: string
        required:
          - id
`,da=`asyncapi: 3.0.0
info:
  title: Sample AsyncAPI
  version: 1.0.0
channels:
  testChannel:
    address: events.default
    messages:
      TestMessage:
        $ref: '#/components/messages/TestMessage'
    x-first: first
    x-second: second
operations:
  sendOperation:
    action: send
    channel:
      $ref: '#/channels/testChannel'
    messages:
      - $ref: '#/components/messages/TestMessage'
components:
  messages:
    TestMessage:
      name: TestMessage
      payload:
        type: object
        properties:
          id:
            type: string
        required:
          - id
`,la=`asyncapi: 3.0.0
info:
  title: Sample AsyncAPI
  version: 1.0.0
channels:
  testChannel:
    address: events.default
    messages:
      TestMessage:
        $ref: '#/components/messages/TestMessage'
operations:
  sendOperation:
    action: send
    channel:
      $ref: '#/channels/testChannel'
    messages:
      - $ref: '#/components/messages/TestMessage'
components:
  messages:
    TestMessage:
      name: TestMessage
      payload:
        type: object
        properties:
          id:
            type: string
        required:
          - id
`,ma=Object.assign({"../../../../samples/async-api-diffs/channel/1.1-channel-title-changed/before.yaml":Rn,"../../../../samples/async-api-diffs/channel/1.2-channel-title-removed/before.yaml":zn,"../../../../samples/async-api-diffs/channel/1.3-channel-title-added/before.yaml":Qn,"../../../../samples/async-api-diffs/channel/2.1-channel-description-changed/before.yaml":Un,"../../../../samples/async-api-diffs/channel/2.10-channel-long-summary-changed/before.yaml":Wn,"../../../../samples/async-api-diffs/channel/2.11-channel-long-summary-removed/before.yaml":Xn,"../../../../samples/async-api-diffs/channel/2.12-channel-long-summary-added/before.yaml":Zn,"../../../../samples/async-api-diffs/channel/2.13-channel-description-moved-to-summary/before.yaml":es,"../../../../samples/async-api-diffs/channel/2.14-channel-long-description-moved-to-summary/before.yaml":ns,"../../../../samples/async-api-diffs/channel/2.15-channel-long-description-moved-to-long-summary/before.yaml":ss,"../../../../samples/async-api-diffs/channel/2.16-channel-description-moved-to-long-summary/before.yaml":as,"../../../../samples/async-api-diffs/channel/2.17-channel-summary-moved-to-description/before.yaml":ts,"../../../../samples/async-api-diffs/channel/2.18-channel-long-summary-moved-to-description/before.yaml":os,"../../../../samples/async-api-diffs/channel/2.19-channel-long-summary-moved-to-long-description/before.yaml":is,"../../../../samples/async-api-diffs/channel/2.2-channel-description-removed/before.yaml":rs,"../../../../samples/async-api-diffs/channel/2.20-channel-summary-moved-to-long-description/before.yaml":cs,"../../../../samples/async-api-diffs/channel/2.3-channel-description-added/before.yaml":ds,"../../../../samples/async-api-diffs/channel/2.4-channel-long-description-changed/before.yaml":ls,"../../../../samples/async-api-diffs/channel/2.5-channel-long-description-removed/before.yaml":ms,"../../../../samples/async-api-diffs/channel/2.6-channel-long-description-added/before.yaml":ps,"../../../../samples/async-api-diffs/channel/2.7-channel-summary-changed/before.yaml":gs,"../../../../samples/async-api-diffs/channel/2.8-channel-summary-removed/before.yaml":us,"../../../../samples/async-api-diffs/channel/2.9-channel-summary-added/before.yaml":_s,"../../../../samples/async-api-diffs/channel/3.1-channel-bindings-add-one-more-binding/before.yaml":hs,"../../../../samples/async-api-diffs/channel/3.2-channel-bindings-remove-one-of-several-bindings/before.yaml":fs,"../../../../samples/async-api-diffs/channel/3.3-channel-bindings-add-bindings/before.yaml":ys,"../../../../samples/async-api-diffs/channel/3.4-channel-bindings-remove-bindings/before.yaml":vs,"../../../../samples/async-api-diffs/channel/4.1-channel-bindings-kafka-bindingVersion-changed/before.yaml":Ms,"../../../../samples/async-api-diffs/channel/4.2-channel-bindings-kafka-bindingVersion-removed/before.yaml":Ts,"../../../../samples/async-api-diffs/channel/4.3-channel-bindings-kafka-bindingVersion-added/before.yaml":bs,"../../../../samples/async-api-diffs/channel/5.1-channel-bindings-kafka-internal-jso-changes/before.yaml":Cs,"../../../../samples/async-api-diffs/channel/6.1-channel-x-second-added/before.yaml":$s,"../../../../samples/async-api-diffs/channel/6.2-channel-x-second-removed/before.yaml":As,"../../../../samples/async-api-diffs/channel/6.3-channel-x-second-changed/before.yaml":qs,"../../../../samples/async-api-diffs/channel/6.4-channel-x-first-and-x-second-added/before.yaml":Ss,"../../../../samples/async-api-diffs/channel/6.5-channel-x-first-and-x-second-removed/before.yaml":xs}),pa=Object.assign({"../../../../samples/async-api-diffs/channel/1.1-channel-title-changed/after.yaml":js,"../../../../samples/async-api-diffs/channel/1.2-channel-title-removed/after.yaml":Os,"../../../../samples/async-api-diffs/channel/1.3-channel-title-added/after.yaml":ks,"../../../../samples/async-api-diffs/channel/2.1-channel-description-changed/after.yaml":Is,"../../../../samples/async-api-diffs/channel/2.10-channel-long-summary-changed/after.yaml":Ps,"../../../../samples/async-api-diffs/channel/2.11-channel-long-summary-removed/after.yaml":Vs,"../../../../samples/async-api-diffs/channel/2.12-channel-long-summary-added/after.yaml":Ls,"../../../../samples/async-api-diffs/channel/2.13-channel-description-moved-to-summary/after.yaml":Es,"../../../../samples/async-api-diffs/channel/2.14-channel-long-description-moved-to-summary/after.yaml":Ds,"../../../../samples/async-api-diffs/channel/2.15-channel-long-description-moved-to-long-summary/after.yaml":Ks,"../../../../samples/async-api-diffs/channel/2.16-channel-description-moved-to-long-summary/after.yaml":Gs,"../../../../samples/async-api-diffs/channel/2.17-channel-summary-moved-to-description/after.yaml":Ns,"../../../../samples/async-api-diffs/channel/2.18-channel-long-summary-moved-to-description/after.yaml":Hs,"../../../../samples/async-api-diffs/channel/2.19-channel-long-summary-moved-to-long-description/after.yaml":ws,"../../../../samples/async-api-diffs/channel/2.2-channel-description-removed/after.yaml":Ys,"../../../../samples/async-api-diffs/channel/2.20-channel-summary-moved-to-long-description/after.yaml":Bs,"../../../../samples/async-api-diffs/channel/2.3-channel-description-added/after.yaml":Fs,"../../../../samples/async-api-diffs/channel/2.4-channel-long-description-changed/after.yaml":Js,"../../../../samples/async-api-diffs/channel/2.5-channel-long-description-removed/after.yaml":Rs,"../../../../samples/async-api-diffs/channel/2.6-channel-long-description-added/after.yaml":zs,"../../../../samples/async-api-diffs/channel/2.7-channel-summary-changed/after.yaml":Qs,"../../../../samples/async-api-diffs/channel/2.8-channel-summary-removed/after.yaml":Us,"../../../../samples/async-api-diffs/channel/2.9-channel-summary-added/after.yaml":Ws,"../../../../samples/async-api-diffs/channel/3.1-channel-bindings-add-one-more-binding/after.yaml":Xs,"../../../../samples/async-api-diffs/channel/3.2-channel-bindings-remove-one-of-several-bindings/after.yaml":Zs,"../../../../samples/async-api-diffs/channel/3.3-channel-bindings-add-bindings/after.yaml":ea,"../../../../samples/async-api-diffs/channel/3.4-channel-bindings-remove-bindings/after.yaml":na,"../../../../samples/async-api-diffs/channel/4.1-channel-bindings-kafka-bindingVersion-changed/after.yaml":sa,"../../../../samples/async-api-diffs/channel/4.2-channel-bindings-kafka-bindingVersion-removed/after.yaml":aa,"../../../../samples/async-api-diffs/channel/4.3-channel-bindings-kafka-bindingVersion-added/after.yaml":ta,"../../../../samples/async-api-diffs/channel/5.1-channel-bindings-kafka-internal-jso-changes/after.yaml":oa,"../../../../samples/async-api-diffs/channel/6.1-channel-x-second-added/after.yaml":ia,"../../../../samples/async-api-diffs/channel/6.2-channel-x-second-removed/after.yaml":ra,"../../../../samples/async-api-diffs/channel/6.3-channel-x-second-changed/after.yaml":ca,"../../../../samples/async-api-diffs/channel/6.4-channel-x-first-and-x-second-added/after.yaml":da,"../../../../samples/async-api-diffs/channel/6.5-channel-x-first-and-x-second-removed/after.yaml":la}),ga=Yn(ma,pa),ua=Bn(ga),Hn=({caseId:n})=>{const s=ua[n];return s?G.jsx(wn,{...fa(s.beforeYaml,s.afterYaml)}):G.jsxs("div",{children:["Sample case not found: ",n]})},Va={title:"Async API Diffs Suite/Channel Samples",component:Hn},_a="sendOperation",ha="TestMessage",fa=(n,s)=>Fn(n,s,{operationKey:_a,messageKey:ha}),ya=Jn(Hn,"message-channel"),e=n=>ya(n),a=e("1.1-channel-title-changed"),t=e("1.2-channel-title-removed"),o=e("1.3-channel-title-added"),i=e("2.1-channel-description-changed"),r=e("2.2-channel-description-removed"),c=e("2.3-channel-description-added"),d=e("2.4-channel-long-description-changed"),l=e("2.5-channel-long-description-removed"),m=e("2.6-channel-long-description-added"),p=e("2.7-channel-summary-changed"),g=e("2.8-channel-summary-removed"),u=e("2.9-channel-summary-added"),_=e("2.10-channel-long-summary-changed"),h=e("2.11-channel-long-summary-removed"),f=e("2.12-channel-long-summary-added"),y=e("2.13-channel-description-moved-to-summary"),v=e("2.14-channel-long-description-moved-to-summary"),M=e("2.15-channel-long-description-moved-to-long-summary"),T=e("2.16-channel-description-moved-to-long-summary"),b=e("2.17-channel-summary-moved-to-description"),C=e("2.18-channel-long-summary-moved-to-description"),$=e("2.19-channel-long-summary-moved-to-long-description"),A=e("2.20-channel-summary-moved-to-long-description"),q=e("3.1-channel-bindings-add-one-more-binding"),S=e("3.2-channel-bindings-remove-one-of-several-bindings"),x=e("3.3-channel-bindings-add-bindings"),j=e("3.4-channel-bindings-remove-bindings"),O=e("4.1-channel-bindings-kafka-bindingVersion-changed"),k=e("4.2-channel-bindings-kafka-bindingVersion-removed"),I=e("4.3-channel-bindings-kafka-bindingVersion-added"),P=e("5.1-channel-bindings-kafka-internal-jso-changes"),V=e("6.1-channel-x-second-added"),L=e("6.2-channel-x-second-removed"),E=e("6.3-channel-x-second-changed"),D=e("6.4-channel-x-first-and-x-second-added"),K=e("6.5-channel-x-first-and-x-second-removed");var N,H,w;a.parameters={...a.parameters,docs:{...(N=a.parameters)==null?void 0:N.docs,source:{originalSource:'createCaseStory("1.1-channel-title-changed")',...(w=(H=a.parameters)==null?void 0:H.docs)==null?void 0:w.source}}};var Y,B,F;t.parameters={...t.parameters,docs:{...(Y=t.parameters)==null?void 0:Y.docs,source:{originalSource:'createCaseStory("1.2-channel-title-removed")',...(F=(B=t.parameters)==null?void 0:B.docs)==null?void 0:F.source}}};var J,R,z;o.parameters={...o.parameters,docs:{...(J=o.parameters)==null?void 0:J.docs,source:{originalSource:'createCaseStory("1.3-channel-title-added")',...(z=(R=o.parameters)==null?void 0:R.docs)==null?void 0:z.source}}};var Q,U,W;i.parameters={...i.parameters,docs:{...(Q=i.parameters)==null?void 0:Q.docs,source:{originalSource:'createCaseStory("2.1-channel-description-changed")',...(W=(U=i.parameters)==null?void 0:U.docs)==null?void 0:W.source}}};var X,Z,ee;r.parameters={...r.parameters,docs:{...(X=r.parameters)==null?void 0:X.docs,source:{originalSource:'createCaseStory("2.2-channel-description-removed")',...(ee=(Z=r.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var ne,se,ae;c.parameters={...c.parameters,docs:{...(ne=c.parameters)==null?void 0:ne.docs,source:{originalSource:'createCaseStory("2.3-channel-description-added")',...(ae=(se=c.parameters)==null?void 0:se.docs)==null?void 0:ae.source}}};var te,oe,ie;d.parameters={...d.parameters,docs:{...(te=d.parameters)==null?void 0:te.docs,source:{originalSource:'createCaseStory("2.4-channel-long-description-changed")',...(ie=(oe=d.parameters)==null?void 0:oe.docs)==null?void 0:ie.source}}};var re,ce,de;l.parameters={...l.parameters,docs:{...(re=l.parameters)==null?void 0:re.docs,source:{originalSource:'createCaseStory("2.5-channel-long-description-removed")',...(de=(ce=l.parameters)==null?void 0:ce.docs)==null?void 0:de.source}}};var le,me,pe;m.parameters={...m.parameters,docs:{...(le=m.parameters)==null?void 0:le.docs,source:{originalSource:'createCaseStory("2.6-channel-long-description-added")',...(pe=(me=m.parameters)==null?void 0:me.docs)==null?void 0:pe.source}}};var ge,ue,_e;p.parameters={...p.parameters,docs:{...(ge=p.parameters)==null?void 0:ge.docs,source:{originalSource:'createCaseStory("2.7-channel-summary-changed")',...(_e=(ue=p.parameters)==null?void 0:ue.docs)==null?void 0:_e.source}}};var he,fe,ye;g.parameters={...g.parameters,docs:{...(he=g.parameters)==null?void 0:he.docs,source:{originalSource:'createCaseStory("2.8-channel-summary-removed")',...(ye=(fe=g.parameters)==null?void 0:fe.docs)==null?void 0:ye.source}}};var ve,Me,Te;u.parameters={...u.parameters,docs:{...(ve=u.parameters)==null?void 0:ve.docs,source:{originalSource:'createCaseStory("2.9-channel-summary-added")',...(Te=(Me=u.parameters)==null?void 0:Me.docs)==null?void 0:Te.source}}};var be,Ce,$e;_.parameters={..._.parameters,docs:{...(be=_.parameters)==null?void 0:be.docs,source:{originalSource:'createCaseStory("2.10-channel-long-summary-changed")',...($e=(Ce=_.parameters)==null?void 0:Ce.docs)==null?void 0:$e.source}}};var Ae,qe,Se;h.parameters={...h.parameters,docs:{...(Ae=h.parameters)==null?void 0:Ae.docs,source:{originalSource:'createCaseStory("2.11-channel-long-summary-removed")',...(Se=(qe=h.parameters)==null?void 0:qe.docs)==null?void 0:Se.source}}};var xe,je,Oe;f.parameters={...f.parameters,docs:{...(xe=f.parameters)==null?void 0:xe.docs,source:{originalSource:'createCaseStory("2.12-channel-long-summary-added")',...(Oe=(je=f.parameters)==null?void 0:je.docs)==null?void 0:Oe.source}}};var ke,Ie,Pe;y.parameters={...y.parameters,docs:{...(ke=y.parameters)==null?void 0:ke.docs,source:{originalSource:'createCaseStory("2.13-channel-description-moved-to-summary")',...(Pe=(Ie=y.parameters)==null?void 0:Ie.docs)==null?void 0:Pe.source}}};var Ve,Le,Ee;v.parameters={...v.parameters,docs:{...(Ve=v.parameters)==null?void 0:Ve.docs,source:{originalSource:'createCaseStory("2.14-channel-long-description-moved-to-summary")',...(Ee=(Le=v.parameters)==null?void 0:Le.docs)==null?void 0:Ee.source}}};var De,Ke,Ge;M.parameters={...M.parameters,docs:{...(De=M.parameters)==null?void 0:De.docs,source:{originalSource:'createCaseStory("2.15-channel-long-description-moved-to-long-summary")',...(Ge=(Ke=M.parameters)==null?void 0:Ke.docs)==null?void 0:Ge.source}}};var Ne,He,we;T.parameters={...T.parameters,docs:{...(Ne=T.parameters)==null?void 0:Ne.docs,source:{originalSource:'createCaseStory("2.16-channel-description-moved-to-long-summary")',...(we=(He=T.parameters)==null?void 0:He.docs)==null?void 0:we.source}}};var Ye,Be,Fe;b.parameters={...b.parameters,docs:{...(Ye=b.parameters)==null?void 0:Ye.docs,source:{originalSource:'createCaseStory("2.17-channel-summary-moved-to-description")',...(Fe=(Be=b.parameters)==null?void 0:Be.docs)==null?void 0:Fe.source}}};var Je,Re,ze;C.parameters={...C.parameters,docs:{...(Je=C.parameters)==null?void 0:Je.docs,source:{originalSource:'createCaseStory("2.18-channel-long-summary-moved-to-description")',...(ze=(Re=C.parameters)==null?void 0:Re.docs)==null?void 0:ze.source}}};var Qe,Ue,We;$.parameters={...$.parameters,docs:{...(Qe=$.parameters)==null?void 0:Qe.docs,source:{originalSource:'createCaseStory("2.19-channel-long-summary-moved-to-long-description")',...(We=(Ue=$.parameters)==null?void 0:Ue.docs)==null?void 0:We.source}}};var Xe,Ze,en;A.parameters={...A.parameters,docs:{...(Xe=A.parameters)==null?void 0:Xe.docs,source:{originalSource:'createCaseStory("2.20-channel-summary-moved-to-long-description")',...(en=(Ze=A.parameters)==null?void 0:Ze.docs)==null?void 0:en.source}}};var nn,sn,an;q.parameters={...q.parameters,docs:{...(nn=q.parameters)==null?void 0:nn.docs,source:{originalSource:'createCaseStory("3.1-channel-bindings-add-one-more-binding")',...(an=(sn=q.parameters)==null?void 0:sn.docs)==null?void 0:an.source}}};var tn,on,rn;S.parameters={...S.parameters,docs:{...(tn=S.parameters)==null?void 0:tn.docs,source:{originalSource:'createCaseStory("3.2-channel-bindings-remove-one-of-several-bindings")',...(rn=(on=S.parameters)==null?void 0:on.docs)==null?void 0:rn.source}}};var cn,dn,ln;x.parameters={...x.parameters,docs:{...(cn=x.parameters)==null?void 0:cn.docs,source:{originalSource:'createCaseStory("3.3-channel-bindings-add-bindings")',...(ln=(dn=x.parameters)==null?void 0:dn.docs)==null?void 0:ln.source}}};var mn,pn,gn;j.parameters={...j.parameters,docs:{...(mn=j.parameters)==null?void 0:mn.docs,source:{originalSource:'createCaseStory("3.4-channel-bindings-remove-bindings")',...(gn=(pn=j.parameters)==null?void 0:pn.docs)==null?void 0:gn.source}}};var un,_n,hn;O.parameters={...O.parameters,docs:{...(un=O.parameters)==null?void 0:un.docs,source:{originalSource:'createCaseStory("4.1-channel-bindings-kafka-bindingVersion-changed")',...(hn=(_n=O.parameters)==null?void 0:_n.docs)==null?void 0:hn.source}}};var fn,yn,vn;k.parameters={...k.parameters,docs:{...(fn=k.parameters)==null?void 0:fn.docs,source:{originalSource:'createCaseStory("4.2-channel-bindings-kafka-bindingVersion-removed")',...(vn=(yn=k.parameters)==null?void 0:yn.docs)==null?void 0:vn.source}}};var Mn,Tn,bn;I.parameters={...I.parameters,docs:{...(Mn=I.parameters)==null?void 0:Mn.docs,source:{originalSource:'createCaseStory("4.3-channel-bindings-kafka-bindingVersion-added")',...(bn=(Tn=I.parameters)==null?void 0:Tn.docs)==null?void 0:bn.source}}};var Cn,$n,An;P.parameters={...P.parameters,docs:{...(Cn=P.parameters)==null?void 0:Cn.docs,source:{originalSource:'createCaseStory("5.1-channel-bindings-kafka-internal-jso-changes")',...(An=($n=P.parameters)==null?void 0:$n.docs)==null?void 0:An.source}}};var qn,Sn,xn;V.parameters={...V.parameters,docs:{...(qn=V.parameters)==null?void 0:qn.docs,source:{originalSource:'createCaseStory("6.1-channel-x-second-added")',...(xn=(Sn=V.parameters)==null?void 0:Sn.docs)==null?void 0:xn.source}}};var jn,On,kn;L.parameters={...L.parameters,docs:{...(jn=L.parameters)==null?void 0:jn.docs,source:{originalSource:'createCaseStory("6.2-channel-x-second-removed")',...(kn=(On=L.parameters)==null?void 0:On.docs)==null?void 0:kn.source}}};var In,Pn,Vn;E.parameters={...E.parameters,docs:{...(In=E.parameters)==null?void 0:In.docs,source:{originalSource:'createCaseStory("6.3-channel-x-second-changed")',...(Vn=(Pn=E.parameters)==null?void 0:Pn.docs)==null?void 0:Vn.source}}};var Ln,En,Dn;D.parameters={...D.parameters,docs:{...(Ln=D.parameters)==null?void 0:Ln.docs,source:{originalSource:'createCaseStory("6.4-channel-x-first-and-x-second-added")',...(Dn=(En=D.parameters)==null?void 0:En.docs)==null?void 0:Dn.source}}};var Kn,Gn,Nn;K.parameters={...K.parameters,docs:{...(Kn=K.parameters)==null?void 0:Kn.docs,source:{originalSource:'createCaseStory("6.5-channel-x-first-and-x-second-removed")',...(Nn=(Gn=K.parameters)==null?void 0:Gn.docs)==null?void 0:Nn.source}}};const La=["Case_1_1_channel_title_changed","Case_1_2_channel_title_removed","Case_1_3_channel_title_added","Case_2_1_channel_description_changed","Case_2_2_channel_description_removed","Case_2_3_channel_description_added","Case_2_4_channel_long_description_changed","Case_2_5_channel_long_description_removed","Case_2_6_channel_long_description_added","Case_2_7_channel_summary_changed","Case_2_8_channel_summary_removed","Case_2_9_channel_summary_added","Case_2_10_channel_long_summary_changed","Case_2_11_channel_long_summary_removed","Case_2_12_channel_long_summary_added","Case_2_13_channel_description_moved_to_summary","Case_2_14_channel_long_description_moved_to_summary","Case_2_15_channel_long_description_moved_to_long_summary","Case_2_16_channel_description_moved_to_long_summary","Case_2_17_channel_summary_moved_to_description","Case_2_18_channel_long_summary_moved_to_description","Case_2_19_channel_long_summary_moved_to_long_description","Case_2_20_channel_summary_moved_to_long_description","Case_3_1_channel_bindings_add_one_more_binding","Case_3_2_channel_bindings_remove_one_of_several_bindings","Case_3_3_channel_bindings_add_bindings","Case_3_4_channel_bindings_remove_bindings","Case_4_1_channel_bindings_kafka_bindingVersion_changed","Case_4_2_channel_bindings_kafka_bindingVersion_removed","Case_4_3_channel_bindings_kafka_bindingVersion_added","Case_5_1_channel_bindings_kafka_internal_jso_changes","Case_6_1_channel_x_second_added","Case_6_2_channel_x_second_removed","Case_6_3_channel_x_second_changed","Case_6_4_channel_x_first_and_x_second_added","Case_6_5_channel_x_first_and_x_second_removed"];export{a as Case_1_1_channel_title_changed,t as Case_1_2_channel_title_removed,o as Case_1_3_channel_title_added,_ as Case_2_10_channel_long_summary_changed,h as Case_2_11_channel_long_summary_removed,f as Case_2_12_channel_long_summary_added,y as Case_2_13_channel_description_moved_to_summary,v as Case_2_14_channel_long_description_moved_to_summary,M as Case_2_15_channel_long_description_moved_to_long_summary,T as Case_2_16_channel_description_moved_to_long_summary,b as Case_2_17_channel_summary_moved_to_description,C as Case_2_18_channel_long_summary_moved_to_description,$ as Case_2_19_channel_long_summary_moved_to_long_description,i as Case_2_1_channel_description_changed,A as Case_2_20_channel_summary_moved_to_long_description,r as Case_2_2_channel_description_removed,c as Case_2_3_channel_description_added,d as Case_2_4_channel_long_description_changed,l as Case_2_5_channel_long_description_removed,m as Case_2_6_channel_long_description_added,p as Case_2_7_channel_summary_changed,g as Case_2_8_channel_summary_removed,u as Case_2_9_channel_summary_added,q as Case_3_1_channel_bindings_add_one_more_binding,S as Case_3_2_channel_bindings_remove_one_of_several_bindings,x as Case_3_3_channel_bindings_add_bindings,j as Case_3_4_channel_bindings_remove_bindings,O as Case_4_1_channel_bindings_kafka_bindingVersion_changed,k as Case_4_2_channel_bindings_kafka_bindingVersion_removed,I as Case_4_3_channel_bindings_kafka_bindingVersion_added,P as Case_5_1_channel_bindings_kafka_internal_jso_changes,V as Case_6_1_channel_x_second_added,L as Case_6_2_channel_x_second_removed,E as Case_6_3_channel_x_second_changed,D as Case_6_4_channel_x_first_and_x_second_added,K as Case_6_5_channel_x_first_and_x_second_removed,La as __namedExportsOrder,Va as default};
