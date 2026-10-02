import{j as wn}from"./_commonjs-dynamic-modules-6308e768.js";import{a as Bn}from"./AsyncApiOperationViewer-7637814e.js";import{c as Fn}from"./diffs-samples-cases-91c2d1e6.js";import{a as Kn,c as Jn,b as Rn}from"./async-api-diffs-utils-552a695b.js";import{b as zn}from"./sample-cases-8c510854.js";import"./index-f46741a2.js";import"./UxBadge-7cc75759.js";import"./IndexesNodeViewer-6f9d01f2.js";import"./DdlTableDiffsViewer-7db18fb9.js";/* empty css              */import"./DdlTableViewer-d84f848c.js";import"./GraphQLOperationDiffViewer-e32d3161.js";import"./GraphPropNodeViewer-d304f569.js";import"./index-415bee12.js";import"./GraphQLOperationViewer-f79343a0.js";import"./index-d5b0668c.js";import"./index-442a5f79.js";import"./preprocess-16c50892.js";import"./test-diff-meta-keys-5677f54d.js";import"./parse-yaml-source-3e95a000.js";import"./public-api-99af098d.js";const Qn=`asyncapi: 3.0.0
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
`,Yn=`asyncapi: 3.0.0
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
`,ma=`asyncapi: 3.0.0
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
`,pa=Object.assign({"../../../../samples/async-api-diffs/channel/1.1-channel-title-changed/before.yaml":Qn,"../../../../samples/async-api-diffs/channel/1.2-channel-title-removed/before.yaml":Un,"../../../../samples/async-api-diffs/channel/1.3-channel-title-added/before.yaml":Wn,"../../../../samples/async-api-diffs/channel/2.1-channel-description-changed/before.yaml":Xn,"../../../../samples/async-api-diffs/channel/2.10-channel-long-summary-changed/before.yaml":Yn,"../../../../samples/async-api-diffs/channel/2.11-channel-long-summary-removed/before.yaml":Zn,"../../../../samples/async-api-diffs/channel/2.12-channel-long-summary-added/before.yaml":es,"../../../../samples/async-api-diffs/channel/2.13-channel-description-moved-to-summary/before.yaml":ns,"../../../../samples/async-api-diffs/channel/2.14-channel-long-description-moved-to-summary/before.yaml":ss,"../../../../samples/async-api-diffs/channel/2.15-channel-long-description-moved-to-long-summary/before.yaml":as,"../../../../samples/async-api-diffs/channel/2.16-channel-description-moved-to-long-summary/before.yaml":ts,"../../../../samples/async-api-diffs/channel/2.17-channel-summary-moved-to-description/before.yaml":os,"../../../../samples/async-api-diffs/channel/2.18-channel-long-summary-moved-to-description/before.yaml":is,"../../../../samples/async-api-diffs/channel/2.19-channel-long-summary-moved-to-long-description/before.yaml":rs,"../../../../samples/async-api-diffs/channel/2.2-channel-description-removed/before.yaml":cs,"../../../../samples/async-api-diffs/channel/2.20-channel-summary-moved-to-long-description/before.yaml":ds,"../../../../samples/async-api-diffs/channel/2.3-channel-description-added/before.yaml":ls,"../../../../samples/async-api-diffs/channel/2.4-channel-long-description-changed/before.yaml":ms,"../../../../samples/async-api-diffs/channel/2.5-channel-long-description-removed/before.yaml":ps,"../../../../samples/async-api-diffs/channel/2.6-channel-long-description-added/before.yaml":gs,"../../../../samples/async-api-diffs/channel/2.7-channel-summary-changed/before.yaml":us,"../../../../samples/async-api-diffs/channel/2.8-channel-summary-removed/before.yaml":_s,"../../../../samples/async-api-diffs/channel/2.9-channel-summary-added/before.yaml":hs,"../../../../samples/async-api-diffs/channel/3.1-channel-bindings-add-one-more-binding/before.yaml":fs,"../../../../samples/async-api-diffs/channel/3.2-channel-bindings-remove-one-of-several-bindings/before.yaml":ys,"../../../../samples/async-api-diffs/channel/3.3-channel-bindings-add-bindings/before.yaml":vs,"../../../../samples/async-api-diffs/channel/3.4-channel-bindings-remove-bindings/before.yaml":Ts,"../../../../samples/async-api-diffs/channel/4.1-channel-bindings-kafka-bindingVersion-changed/before.yaml":Ms,"../../../../samples/async-api-diffs/channel/4.2-channel-bindings-kafka-bindingVersion-removed/before.yaml":bs,"../../../../samples/async-api-diffs/channel/4.3-channel-bindings-kafka-bindingVersion-added/before.yaml":Cs,"../../../../samples/async-api-diffs/channel/5.1-channel-bindings-kafka-internal-jso-changes/before.yaml":$s,"../../../../samples/async-api-diffs/channel/6.1-channel-x-second-added/before.yaml":As,"../../../../samples/async-api-diffs/channel/6.2-channel-x-second-removed/before.yaml":qs,"../../../../samples/async-api-diffs/channel/6.3-channel-x-second-changed/before.yaml":Ss,"../../../../samples/async-api-diffs/channel/6.4-channel-x-first-and-x-second-added/before.yaml":xs,"../../../../samples/async-api-diffs/channel/6.5-channel-x-first-and-x-second-removed/before.yaml":js}),ga=Object.assign({"../../../../samples/async-api-diffs/channel/1.1-channel-title-changed/after.yaml":ks,"../../../../samples/async-api-diffs/channel/1.2-channel-title-removed/after.yaml":Os,"../../../../samples/async-api-diffs/channel/1.3-channel-title-added/after.yaml":Is,"../../../../samples/async-api-diffs/channel/2.1-channel-description-changed/after.yaml":Ps,"../../../../samples/async-api-diffs/channel/2.10-channel-long-summary-changed/after.yaml":Vs,"../../../../samples/async-api-diffs/channel/2.11-channel-long-summary-removed/after.yaml":Ls,"../../../../samples/async-api-diffs/channel/2.12-channel-long-summary-added/after.yaml":Ds,"../../../../samples/async-api-diffs/channel/2.13-channel-description-moved-to-summary/after.yaml":Es,"../../../../samples/async-api-diffs/channel/2.14-channel-long-description-moved-to-summary/after.yaml":Gs,"../../../../samples/async-api-diffs/channel/2.15-channel-long-description-moved-to-long-summary/after.yaml":Hs,"../../../../samples/async-api-diffs/channel/2.16-channel-description-moved-to-long-summary/after.yaml":Ns,"../../../../samples/async-api-diffs/channel/2.17-channel-summary-moved-to-description/after.yaml":ws,"../../../../samples/async-api-diffs/channel/2.18-channel-long-summary-moved-to-description/after.yaml":Bs,"../../../../samples/async-api-diffs/channel/2.19-channel-long-summary-moved-to-long-description/after.yaml":Fs,"../../../../samples/async-api-diffs/channel/2.2-channel-description-removed/after.yaml":Ks,"../../../../samples/async-api-diffs/channel/2.20-channel-summary-moved-to-long-description/after.yaml":Js,"../../../../samples/async-api-diffs/channel/2.3-channel-description-added/after.yaml":Rs,"../../../../samples/async-api-diffs/channel/2.4-channel-long-description-changed/after.yaml":zs,"../../../../samples/async-api-diffs/channel/2.5-channel-long-description-removed/after.yaml":Qs,"../../../../samples/async-api-diffs/channel/2.6-channel-long-description-added/after.yaml":Us,"../../../../samples/async-api-diffs/channel/2.7-channel-summary-changed/after.yaml":Ws,"../../../../samples/async-api-diffs/channel/2.8-channel-summary-removed/after.yaml":Xs,"../../../../samples/async-api-diffs/channel/2.9-channel-summary-added/after.yaml":Ys,"../../../../samples/async-api-diffs/channel/3.1-channel-bindings-add-one-more-binding/after.yaml":Zs,"../../../../samples/async-api-diffs/channel/3.2-channel-bindings-remove-one-of-several-bindings/after.yaml":ea,"../../../../samples/async-api-diffs/channel/3.3-channel-bindings-add-bindings/after.yaml":na,"../../../../samples/async-api-diffs/channel/3.4-channel-bindings-remove-bindings/after.yaml":sa,"../../../../samples/async-api-diffs/channel/4.1-channel-bindings-kafka-bindingVersion-changed/after.yaml":aa,"../../../../samples/async-api-diffs/channel/4.2-channel-bindings-kafka-bindingVersion-removed/after.yaml":ta,"../../../../samples/async-api-diffs/channel/4.3-channel-bindings-kafka-bindingVersion-added/after.yaml":oa,"../../../../samples/async-api-diffs/channel/5.1-channel-bindings-kafka-internal-jso-changes/after.yaml":ia,"../../../../samples/async-api-diffs/channel/6.1-channel-x-second-added/after.yaml":ra,"../../../../samples/async-api-diffs/channel/6.2-channel-x-second-removed/after.yaml":ca,"../../../../samples/async-api-diffs/channel/6.3-channel-x-second-changed/after.yaml":da,"../../../../samples/async-api-diffs/channel/6.4-channel-x-first-and-x-second-added/after.yaml":la,"../../../../samples/async-api-diffs/channel/6.5-channel-x-first-and-x-second-removed/after.yaml":ma}),ua=Fn(pa,ga),_a=zn(ua),Hn=({beforeYaml:E,afterYaml:Nn})=>wn.jsx(Bn,{...Jn(E,Nn)}),Ga={title:"Async API Diffs Suite/Channel Samples",component:Hn,argTypes:Kn},ha=Rn(Hn,_a,"message-channel"),e=E=>ha(E),n=e("1.1-channel-title-changed"),s=e("1.2-channel-title-removed"),a=e("1.3-channel-title-added"),t=e("2.1-channel-description-changed"),o=e("2.2-channel-description-removed"),i=e("2.3-channel-description-added"),r=e("2.4-channel-long-description-changed"),c=e("2.5-channel-long-description-removed"),d=e("2.6-channel-long-description-added"),l=e("2.7-channel-summary-changed"),m=e("2.8-channel-summary-removed"),p=e("2.9-channel-summary-added"),g=e("2.10-channel-long-summary-changed"),u=e("2.11-channel-long-summary-removed"),_=e("2.12-channel-long-summary-added"),h=e("2.13-channel-description-moved-to-summary"),f=e("2.14-channel-long-description-moved-to-summary"),y=e("2.15-channel-long-description-moved-to-long-summary"),v=e("2.16-channel-description-moved-to-long-summary"),T=e("2.17-channel-summary-moved-to-description"),M=e("2.18-channel-long-summary-moved-to-description"),b=e("2.19-channel-long-summary-moved-to-long-description"),C=e("2.20-channel-summary-moved-to-long-description"),$=e("3.1-channel-bindings-add-one-more-binding"),A=e("3.2-channel-bindings-remove-one-of-several-bindings"),q=e("3.3-channel-bindings-add-bindings"),S=e("3.4-channel-bindings-remove-bindings"),x=e("4.1-channel-bindings-kafka-bindingVersion-changed"),j=e("4.2-channel-bindings-kafka-bindingVersion-removed"),k=e("4.3-channel-bindings-kafka-bindingVersion-added"),O=e("5.1-channel-bindings-kafka-internal-jso-changes"),I=e("6.1-channel-x-second-added"),P=e("6.2-channel-x-second-removed"),V=e("6.3-channel-x-second-changed"),L=e("6.4-channel-x-first-and-x-second-added"),D=e("6.5-channel-x-first-and-x-second-removed");var G,H,N;n.parameters={...n.parameters,docs:{...(G=n.parameters)==null?void 0:G.docs,source:{originalSource:'createCaseStory("1.1-channel-title-changed")',...(N=(H=n.parameters)==null?void 0:H.docs)==null?void 0:N.source}}};var w,B,F;s.parameters={...s.parameters,docs:{...(w=s.parameters)==null?void 0:w.docs,source:{originalSource:'createCaseStory("1.2-channel-title-removed")',...(F=(B=s.parameters)==null?void 0:B.docs)==null?void 0:F.source}}};var K,J,R;a.parameters={...a.parameters,docs:{...(K=a.parameters)==null?void 0:K.docs,source:{originalSource:'createCaseStory("1.3-channel-title-added")',...(R=(J=a.parameters)==null?void 0:J.docs)==null?void 0:R.source}}};var z,Q,U;t.parameters={...t.parameters,docs:{...(z=t.parameters)==null?void 0:z.docs,source:{originalSource:'createCaseStory("2.1-channel-description-changed")',...(U=(Q=t.parameters)==null?void 0:Q.docs)==null?void 0:U.source}}};var W,X,Y;o.parameters={...o.parameters,docs:{...(W=o.parameters)==null?void 0:W.docs,source:{originalSource:'createCaseStory("2.2-channel-description-removed")',...(Y=(X=o.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,ee,ne;i.parameters={...i.parameters,docs:{...(Z=i.parameters)==null?void 0:Z.docs,source:{originalSource:'createCaseStory("2.3-channel-description-added")',...(ne=(ee=i.parameters)==null?void 0:ee.docs)==null?void 0:ne.source}}};var se,ae,te;r.parameters={...r.parameters,docs:{...(se=r.parameters)==null?void 0:se.docs,source:{originalSource:'createCaseStory("2.4-channel-long-description-changed")',...(te=(ae=r.parameters)==null?void 0:ae.docs)==null?void 0:te.source}}};var oe,ie,re;c.parameters={...c.parameters,docs:{...(oe=c.parameters)==null?void 0:oe.docs,source:{originalSource:'createCaseStory("2.5-channel-long-description-removed")',...(re=(ie=c.parameters)==null?void 0:ie.docs)==null?void 0:re.source}}};var ce,de,le;d.parameters={...d.parameters,docs:{...(ce=d.parameters)==null?void 0:ce.docs,source:{originalSource:'createCaseStory("2.6-channel-long-description-added")',...(le=(de=d.parameters)==null?void 0:de.docs)==null?void 0:le.source}}};var me,pe,ge;l.parameters={...l.parameters,docs:{...(me=l.parameters)==null?void 0:me.docs,source:{originalSource:'createCaseStory("2.7-channel-summary-changed")',...(ge=(pe=l.parameters)==null?void 0:pe.docs)==null?void 0:ge.source}}};var ue,_e,he;m.parameters={...m.parameters,docs:{...(ue=m.parameters)==null?void 0:ue.docs,source:{originalSource:'createCaseStory("2.8-channel-summary-removed")',...(he=(_e=m.parameters)==null?void 0:_e.docs)==null?void 0:he.source}}};var fe,ye,ve;p.parameters={...p.parameters,docs:{...(fe=p.parameters)==null?void 0:fe.docs,source:{originalSource:'createCaseStory("2.9-channel-summary-added")',...(ve=(ye=p.parameters)==null?void 0:ye.docs)==null?void 0:ve.source}}};var Te,Me,be;g.parameters={...g.parameters,docs:{...(Te=g.parameters)==null?void 0:Te.docs,source:{originalSource:'createCaseStory("2.10-channel-long-summary-changed")',...(be=(Me=g.parameters)==null?void 0:Me.docs)==null?void 0:be.source}}};var Ce,$e,Ae;u.parameters={...u.parameters,docs:{...(Ce=u.parameters)==null?void 0:Ce.docs,source:{originalSource:'createCaseStory("2.11-channel-long-summary-removed")',...(Ae=($e=u.parameters)==null?void 0:$e.docs)==null?void 0:Ae.source}}};var qe,Se,xe;_.parameters={..._.parameters,docs:{...(qe=_.parameters)==null?void 0:qe.docs,source:{originalSource:'createCaseStory("2.12-channel-long-summary-added")',...(xe=(Se=_.parameters)==null?void 0:Se.docs)==null?void 0:xe.source}}};var je,ke,Oe;h.parameters={...h.parameters,docs:{...(je=h.parameters)==null?void 0:je.docs,source:{originalSource:'createCaseStory("2.13-channel-description-moved-to-summary")',...(Oe=(ke=h.parameters)==null?void 0:ke.docs)==null?void 0:Oe.source}}};var Ie,Pe,Ve;f.parameters={...f.parameters,docs:{...(Ie=f.parameters)==null?void 0:Ie.docs,source:{originalSource:'createCaseStory("2.14-channel-long-description-moved-to-summary")',...(Ve=(Pe=f.parameters)==null?void 0:Pe.docs)==null?void 0:Ve.source}}};var Le,De,Ee;y.parameters={...y.parameters,docs:{...(Le=y.parameters)==null?void 0:Le.docs,source:{originalSource:'createCaseStory("2.15-channel-long-description-moved-to-long-summary")',...(Ee=(De=y.parameters)==null?void 0:De.docs)==null?void 0:Ee.source}}};var Ge,He,Ne;v.parameters={...v.parameters,docs:{...(Ge=v.parameters)==null?void 0:Ge.docs,source:{originalSource:'createCaseStory("2.16-channel-description-moved-to-long-summary")',...(Ne=(He=v.parameters)==null?void 0:He.docs)==null?void 0:Ne.source}}};var we,Be,Fe;T.parameters={...T.parameters,docs:{...(we=T.parameters)==null?void 0:we.docs,source:{originalSource:'createCaseStory("2.17-channel-summary-moved-to-description")',...(Fe=(Be=T.parameters)==null?void 0:Be.docs)==null?void 0:Fe.source}}};var Ke,Je,Re;M.parameters={...M.parameters,docs:{...(Ke=M.parameters)==null?void 0:Ke.docs,source:{originalSource:'createCaseStory("2.18-channel-long-summary-moved-to-description")',...(Re=(Je=M.parameters)==null?void 0:Je.docs)==null?void 0:Re.source}}};var ze,Qe,Ue;b.parameters={...b.parameters,docs:{...(ze=b.parameters)==null?void 0:ze.docs,source:{originalSource:'createCaseStory("2.19-channel-long-summary-moved-to-long-description")',...(Ue=(Qe=b.parameters)==null?void 0:Qe.docs)==null?void 0:Ue.source}}};var We,Xe,Ye;C.parameters={...C.parameters,docs:{...(We=C.parameters)==null?void 0:We.docs,source:{originalSource:'createCaseStory("2.20-channel-summary-moved-to-long-description")',...(Ye=(Xe=C.parameters)==null?void 0:Xe.docs)==null?void 0:Ye.source}}};var Ze,en,nn;$.parameters={...$.parameters,docs:{...(Ze=$.parameters)==null?void 0:Ze.docs,source:{originalSource:'createCaseStory("3.1-channel-bindings-add-one-more-binding")',...(nn=(en=$.parameters)==null?void 0:en.docs)==null?void 0:nn.source}}};var sn,an,tn;A.parameters={...A.parameters,docs:{...(sn=A.parameters)==null?void 0:sn.docs,source:{originalSource:'createCaseStory("3.2-channel-bindings-remove-one-of-several-bindings")',...(tn=(an=A.parameters)==null?void 0:an.docs)==null?void 0:tn.source}}};var on,rn,cn;q.parameters={...q.parameters,docs:{...(on=q.parameters)==null?void 0:on.docs,source:{originalSource:'createCaseStory("3.3-channel-bindings-add-bindings")',...(cn=(rn=q.parameters)==null?void 0:rn.docs)==null?void 0:cn.source}}};var dn,ln,mn;S.parameters={...S.parameters,docs:{...(dn=S.parameters)==null?void 0:dn.docs,source:{originalSource:'createCaseStory("3.4-channel-bindings-remove-bindings")',...(mn=(ln=S.parameters)==null?void 0:ln.docs)==null?void 0:mn.source}}};var pn,gn,un;x.parameters={...x.parameters,docs:{...(pn=x.parameters)==null?void 0:pn.docs,source:{originalSource:'createCaseStory("4.1-channel-bindings-kafka-bindingVersion-changed")',...(un=(gn=x.parameters)==null?void 0:gn.docs)==null?void 0:un.source}}};var _n,hn,fn;j.parameters={...j.parameters,docs:{...(_n=j.parameters)==null?void 0:_n.docs,source:{originalSource:'createCaseStory("4.2-channel-bindings-kafka-bindingVersion-removed")',...(fn=(hn=j.parameters)==null?void 0:hn.docs)==null?void 0:fn.source}}};var yn,vn,Tn;k.parameters={...k.parameters,docs:{...(yn=k.parameters)==null?void 0:yn.docs,source:{originalSource:'createCaseStory("4.3-channel-bindings-kafka-bindingVersion-added")',...(Tn=(vn=k.parameters)==null?void 0:vn.docs)==null?void 0:Tn.source}}};var Mn,bn,Cn;O.parameters={...O.parameters,docs:{...(Mn=O.parameters)==null?void 0:Mn.docs,source:{originalSource:'createCaseStory("5.1-channel-bindings-kafka-internal-jso-changes")',...(Cn=(bn=O.parameters)==null?void 0:bn.docs)==null?void 0:Cn.source}}};var $n,An,qn;I.parameters={...I.parameters,docs:{...($n=I.parameters)==null?void 0:$n.docs,source:{originalSource:'createCaseStory("6.1-channel-x-second-added")',...(qn=(An=I.parameters)==null?void 0:An.docs)==null?void 0:qn.source}}};var Sn,xn,jn;P.parameters={...P.parameters,docs:{...(Sn=P.parameters)==null?void 0:Sn.docs,source:{originalSource:'createCaseStory("6.2-channel-x-second-removed")',...(jn=(xn=P.parameters)==null?void 0:xn.docs)==null?void 0:jn.source}}};var kn,On,In;V.parameters={...V.parameters,docs:{...(kn=V.parameters)==null?void 0:kn.docs,source:{originalSource:'createCaseStory("6.3-channel-x-second-changed")',...(In=(On=V.parameters)==null?void 0:On.docs)==null?void 0:In.source}}};var Pn,Vn,Ln;L.parameters={...L.parameters,docs:{...(Pn=L.parameters)==null?void 0:Pn.docs,source:{originalSource:'createCaseStory("6.4-channel-x-first-and-x-second-added")',...(Ln=(Vn=L.parameters)==null?void 0:Vn.docs)==null?void 0:Ln.source}}};var Dn,En,Gn;D.parameters={...D.parameters,docs:{...(Dn=D.parameters)==null?void 0:Dn.docs,source:{originalSource:'createCaseStory("6.5-channel-x-first-and-x-second-removed")',...(Gn=(En=D.parameters)==null?void 0:En.docs)==null?void 0:Gn.source}}};const Ha=["Case_1_1_channel_title_changed","Case_1_2_channel_title_removed","Case_1_3_channel_title_added","Case_2_1_channel_description_changed","Case_2_2_channel_description_removed","Case_2_3_channel_description_added","Case_2_4_channel_long_description_changed","Case_2_5_channel_long_description_removed","Case_2_6_channel_long_description_added","Case_2_7_channel_summary_changed","Case_2_8_channel_summary_removed","Case_2_9_channel_summary_added","Case_2_10_channel_long_summary_changed","Case_2_11_channel_long_summary_removed","Case_2_12_channel_long_summary_added","Case_2_13_channel_description_moved_to_summary","Case_2_14_channel_long_description_moved_to_summary","Case_2_15_channel_long_description_moved_to_long_summary","Case_2_16_channel_description_moved_to_long_summary","Case_2_17_channel_summary_moved_to_description","Case_2_18_channel_long_summary_moved_to_description","Case_2_19_channel_long_summary_moved_to_long_description","Case_2_20_channel_summary_moved_to_long_description","Case_3_1_channel_bindings_add_one_more_binding","Case_3_2_channel_bindings_remove_one_of_several_bindings","Case_3_3_channel_bindings_add_bindings","Case_3_4_channel_bindings_remove_bindings","Case_4_1_channel_bindings_kafka_bindingVersion_changed","Case_4_2_channel_bindings_kafka_bindingVersion_removed","Case_4_3_channel_bindings_kafka_bindingVersion_added","Case_5_1_channel_bindings_kafka_internal_jso_changes","Case_6_1_channel_x_second_added","Case_6_2_channel_x_second_removed","Case_6_3_channel_x_second_changed","Case_6_4_channel_x_first_and_x_second_added","Case_6_5_channel_x_first_and_x_second_removed"];export{n as Case_1_1_channel_title_changed,s as Case_1_2_channel_title_removed,a as Case_1_3_channel_title_added,g as Case_2_10_channel_long_summary_changed,u as Case_2_11_channel_long_summary_removed,_ as Case_2_12_channel_long_summary_added,h as Case_2_13_channel_description_moved_to_summary,f as Case_2_14_channel_long_description_moved_to_summary,y as Case_2_15_channel_long_description_moved_to_long_summary,v as Case_2_16_channel_description_moved_to_long_summary,T as Case_2_17_channel_summary_moved_to_description,M as Case_2_18_channel_long_summary_moved_to_description,b as Case_2_19_channel_long_summary_moved_to_long_description,t as Case_2_1_channel_description_changed,C as Case_2_20_channel_summary_moved_to_long_description,o as Case_2_2_channel_description_removed,i as Case_2_3_channel_description_added,r as Case_2_4_channel_long_description_changed,c as Case_2_5_channel_long_description_removed,d as Case_2_6_channel_long_description_added,l as Case_2_7_channel_summary_changed,m as Case_2_8_channel_summary_removed,p as Case_2_9_channel_summary_added,$ as Case_3_1_channel_bindings_add_one_more_binding,A as Case_3_2_channel_bindings_remove_one_of_several_bindings,q as Case_3_3_channel_bindings_add_bindings,S as Case_3_4_channel_bindings_remove_bindings,x as Case_4_1_channel_bindings_kafka_bindingVersion_changed,j as Case_4_2_channel_bindings_kafka_bindingVersion_removed,k as Case_4_3_channel_bindings_kafka_bindingVersion_added,O as Case_5_1_channel_bindings_kafka_internal_jso_changes,I as Case_6_1_channel_x_second_added,P as Case_6_2_channel_x_second_removed,V as Case_6_3_channel_x_second_changed,L as Case_6_4_channel_x_first_and_x_second_added,D as Case_6_5_channel_x_first_and_x_second_removed,Ha as __namedExportsOrder,Ga as default};
