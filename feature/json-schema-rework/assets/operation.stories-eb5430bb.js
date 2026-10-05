import{j as wn}from"./_commonjs-dynamic-modules-6308e768.js";import{a as Bn}from"./AsyncApiOperationViewer-908de172.js";import{c as Fn}from"./diffs-samples-cases-91c2d1e6.js";import{a as Jn,c as Rn,b as zn}from"./async-api-diffs-utils-1d7606b0.js";import{b as Kn}from"./sample-cases-8c510854.js";import"./index-f46741a2.js";import"./UxBadge-190a23d2.js";import"./IndexesNodeViewer-fee5cd8c.js";import"./DdlTableDiffsViewer-fd6285f4.js";/* empty css              */import"./DdlTableViewer-628f1b1b.js";import"./GraphQLOperationDiffViewer-8a73b026.js";import"./GraphPropNodeViewer-687f278e.js";import"./index-415bee12.js";import"./GraphQLOperationViewer-d1208066.js";import"./index-d5b0668c.js";import"./index-442a5f79.js";import"./preprocess-39b8762b.js";import"./test-diff-meta-keys-5677f54d.js";import"./parse-yaml-source-3e95a000.js";import"./public-api-99af098d.js";const Qn=`asyncapi: 3.0.0
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
    title: operation title
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
operations:
  sendOperation:
    action: send
    channel:
      $ref: '#/channels/testChannel'
    messages:
      - $ref: '#/components/messages/TestMessage'
    title: operation title
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
operations:
  sendOperation:
    action: send
    channel:
      $ref: '#/channels/testChannel'
    messages:
      - $ref: '#/components/messages/TestMessage'
    description: operation description
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
operations:
  sendOperation:
    action: send
    channel:
      $ref: '#/channels/testChannel'
    messages:
      - $ref: '#/components/messages/TestMessage'
    summary: Long operation summary. Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
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
    summary: Long operation summary. Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
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
operations:
  sendOperation:
    action: send
    channel:
      $ref: '#/channels/testChannel'
    messages:
      - $ref: '#/components/messages/TestMessage'
    description: operation description
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
operations:
  sendOperation:
    action: send
    channel:
      $ref: '#/channels/testChannel'
    messages:
      - $ref: '#/components/messages/TestMessage'
    description: Long operation description. Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum sed ut perspiciatis unde omnis iste natus error sit voluptatem
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
operations:
  sendOperation:
    action: send
    channel:
      $ref: '#/channels/testChannel'
    messages:
      - $ref: '#/components/messages/TestMessage'
    description: Long operation description. Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum sed ut perspiciatis unde omnis iste natus error sit voluptatem
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
operations:
  sendOperation:
    action: send
    channel:
      $ref: '#/channels/testChannel'
    messages:
      - $ref: '#/components/messages/TestMessage'
    description: operation description
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
operations:
  sendOperation:
    action: send
    channel:
      $ref: '#/channels/testChannel'
    messages:
      - $ref: '#/components/messages/TestMessage'
    summary: operation summary
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
operations:
  sendOperation:
    action: send
    channel:
      $ref: '#/channels/testChannel'
    messages:
      - $ref: '#/components/messages/TestMessage'
    summary: Long operation summary. Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
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
operations:
  sendOperation:
    action: send
    channel:
      $ref: '#/channels/testChannel'
    messages:
      - $ref: '#/components/messages/TestMessage'
    summary: Long operation summary. Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
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
    description: operation description
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
    summary: operation summary
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
operations:
  sendOperation:
    action: send
    channel:
      $ref: '#/channels/testChannel'
    messages:
      - $ref: '#/components/messages/TestMessage'
    description: Long operation description. Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum sed ut perspiciatis unde omnis iste natus error sit voluptatem
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
    description: Long operation description. Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum sed ut perspiciatis unde omnis iste natus error sit voluptatem
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
operations:
  sendOperation:
    action: send
    channel:
      $ref: '#/channels/testChannel'
    messages:
      - $ref: '#/components/messages/TestMessage'
    summary: operation summary
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
    summary: operation summary
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
    bindings:
      kafka:
        bindingVersion: 1.0.0
        groupId:
          type: string
          enum:
            - consumer-group-1
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
    bindings:
      kafka:
        bindingVersion: 1.0.0
        groupId:
          type: string
          enum:
            - consumer-group-1
      amqp:
        bindingVersion: 0.3.0
        expiration: 100000
        userId: guest
        cc:
          - user.logs
        priority: 10
        deliveryMode: 2
        mandatory: false
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
operations:
  sendOperation:
    action: send
    channel:
      $ref: '#/channels/testChannel'
    messages:
      - $ref: '#/components/messages/TestMessage'
    bindings:
      kafka:
        bindingVersion: 1.0.0
        groupId:
          type: string
          enum:
            - consumer-group-1
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
operations:
  sendOperation:
    action: send
    channel:
      $ref: '#/channels/testChannel'
    messages:
      - $ref: '#/components/messages/TestMessage'
    bindings:
      kafka:
        bindingVersion: 1.0.0
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
operations:
  sendOperation:
    action: send
    channel:
      $ref: '#/channels/testChannel'
    messages:
      - $ref: '#/components/messages/TestMessage'
    bindings:
      kafka:
        bindingVersion: 1.0.0
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
operations:
  sendOperation:
    action: send
    channel:
      $ref: '#/channels/testChannel'
    messages:
      - $ref: '#/components/messages/TestMessage'
    bindings:
      kafka: {}
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
operations:
  sendOperation:
    action: send
    channel:
      $ref: '#/channels/testChannel'
    messages:
      - $ref: '#/components/messages/TestMessage'
    bindings:
      kafka:
        bindingVersion: 1.0.0
        arbitraryJso:
          unchanged: keep
          removed: bye
          changed: 111
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
operations:
  sendOperation:
    action: send
    channel:
      $ref: '#/channels/testChannel'
    messages:
      - $ref: '#/components/messages/TestMessage'
    x-first: first
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
operations:
  sendOperation:
    action: send
    channel:
      $ref: '#/channels/testChannel'
    messages:
      - $ref: '#/components/messages/TestMessage'
    x-first: first
    x-second: second
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
    x-first: first
    x-second: before
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
operations:
  sendOperation:
    action: send
    channel:
      $ref: '#/channels/testChannel'
    messages:
      - $ref: '#/components/messages/TestMessage'
    x-first: first
    x-second: second
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
operations:
  sendOperation:
    action: send
    channel:
      $ref: '#/channels/testChannel'
    messages:
      - $ref: '#/components/messages/TestMessage'
    title: CHANGED operation title
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
operations:
  sendOperation:
    action: send
    channel:
      $ref: '#/channels/testChannel'
    messages:
      - $ref: '#/components/messages/TestMessage'
    title: operation title
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
operations:
  sendOperation:
    action: send
    channel:
      $ref: '#/channels/testChannel'
    messages:
      - $ref: '#/components/messages/TestMessage'
    description: CHANGED operation description
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
    summary: CHANGED long operation summary. Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem
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
operations:
  sendOperation:
    action: send
    channel:
      $ref: '#/channels/testChannel'
    messages:
      - $ref: '#/components/messages/TestMessage'
    summary: Long operation summary. Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
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
operations:
  sendOperation:
    action: send
    channel:
      $ref: '#/channels/testChannel'
    messages:
      - $ref: '#/components/messages/TestMessage'
    summary: operation description
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
operations:
  sendOperation:
    action: send
    channel:
      $ref: '#/channels/testChannel'
    messages:
      - $ref: '#/components/messages/TestMessage'
    summary: operation summary
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
operations:
  sendOperation:
    action: send
    channel:
      $ref: '#/channels/testChannel'
    messages:
      - $ref: '#/components/messages/TestMessage'
    summary: Long operation description. Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum sed ut perspiciatis unde omnis iste natus error sit voluptatem
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
operations:
  sendOperation:
    action: send
    channel:
      $ref: '#/channels/testChannel'
    messages:
      - $ref: '#/components/messages/TestMessage'
    summary: Long operation summary. Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
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
operations:
  sendOperation:
    action: send
    channel:
      $ref: '#/channels/testChannel'
    messages:
      - $ref: '#/components/messages/TestMessage'
    description: operation summary
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
operations:
  sendOperation:
    action: send
    channel:
      $ref: '#/channels/testChannel'
    messages:
      - $ref: '#/components/messages/TestMessage'
    description: operation description
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
operations:
  sendOperation:
    action: send
    channel:
      $ref: '#/channels/testChannel'
    messages:
      - $ref: '#/components/messages/TestMessage'
    description: Long operation summary. Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
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
    description: Long operation description. Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum sed ut perspiciatis unde omnis iste natus error sit voluptatem
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
operations:
  sendOperation:
    action: send
    channel:
      $ref: '#/channels/testChannel'
    messages:
      - $ref: '#/components/messages/TestMessage'
    description: operation description
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
    description: CHANGED long operation description. Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam
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
operations:
  sendOperation:
    action: send
    channel:
      $ref: '#/channels/testChannel'
    messages:
      - $ref: '#/components/messages/TestMessage'
    description: Long operation description. Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum sed ut perspiciatis unde omnis iste natus error sit voluptatem
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
operations:
  sendOperation:
    action: send
    channel:
      $ref: '#/channels/testChannel'
    messages:
      - $ref: '#/components/messages/TestMessage'
    summary: CHANGED operation summary
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
operations:
  sendOperation:
    action: send
    channel:
      $ref: '#/channels/testChannel'
    messages:
      - $ref: '#/components/messages/TestMessage'
    summary: operation summary
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
operations:
  sendOperation:
    action: send
    channel:
      $ref: '#/channels/testChannel'
    messages:
      - $ref: '#/components/messages/TestMessage'
    bindings:
      kafka:
        bindingVersion: 1.0.0
        groupId:
          type: string
          enum:
            - consumer-group-1
      amqp:
        bindingVersion: 0.3.0
        expiration: 100000
        userId: guest
        cc:
          - user.logs
        priority: 10
        deliveryMode: 2
        mandatory: false
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
operations:
  sendOperation:
    action: send
    channel:
      $ref: '#/channels/testChannel'
    messages:
      - $ref: '#/components/messages/TestMessage'
    bindings:
      amqp:
        bindingVersion: 0.3.0
        expiration: 100000
        userId: guest
        cc:
          - user.logs
        priority: 10
        deliveryMode: 2
        mandatory: false
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
    bindings:
      kafka:
        bindingVersion: 1.0.0
        groupId:
          type: string
          enum:
            - consumer-group-1
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
operations:
  sendOperation:
    action: send
    channel:
      $ref: '#/channels/testChannel'
    messages:
      - $ref: '#/components/messages/TestMessage'
    bindings:
      kafka:
        bindingVersion: 2.0.0
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
operations:
  sendOperation:
    action: send
    channel:
      $ref: '#/channels/testChannel'
    messages:
      - $ref: '#/components/messages/TestMessage'
    bindings:
      kafka: {}
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
operations:
  sendOperation:
    action: send
    channel:
      $ref: '#/channels/testChannel'
    messages:
      - $ref: '#/components/messages/TestMessage'
    bindings:
      kafka:
        bindingVersion: 1.0.0
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
operations:
  sendOperation:
    action: send
    channel:
      $ref: '#/channels/testChannel'
    messages:
      - $ref: '#/components/messages/TestMessage'
    bindings:
      kafka:
        bindingVersion: 1.0.0
        arbitraryJso:
          unchanged: keep
          changed: test string
          added: new
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
operations:
  sendOperation:
    action: send
    channel:
      $ref: '#/channels/testChannel'
    messages:
      - $ref: '#/components/messages/TestMessage'
    x-first: first
    x-second: second
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
`,pa=`asyncapi: 3.0.0
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
    x-first: first
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
operations:
  sendOperation:
    action: send
    channel:
      $ref: '#/channels/testChannel'
    messages:
      - $ref: '#/components/messages/TestMessage'
    x-first: first
    x-second: after
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
    x-first: first
    x-second: second
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
`,la=Object.assign({"../../../../samples/async-api-diffs/operation/1.1-operation-title-changed/before.yaml":Qn,"../../../../samples/async-api-diffs/operation/1.2-operation-title-removed/before.yaml":Un,"../../../../samples/async-api-diffs/operation/1.3-operation-title-added/before.yaml":Wn,"../../../../samples/async-api-diffs/operation/2.1-operation-description-changed/before.yaml":Xn,"../../../../samples/async-api-diffs/operation/2.10-operation-long-summary-changed/before.yaml":Yn,"../../../../samples/async-api-diffs/operation/2.11-operation-long-summary-removed/before.yaml":Zn,"../../../../samples/async-api-diffs/operation/2.12-operation-long-summary-added/before.yaml":es,"../../../../samples/async-api-diffs/operation/2.13-operation-description-moved-to-summary/before.yaml":ns,"../../../../samples/async-api-diffs/operation/2.14-operation-long-description-moved-to-summary/before.yaml":ss,"../../../../samples/async-api-diffs/operation/2.15-operation-long-description-moved-to-long-summary/before.yaml":as,"../../../../samples/async-api-diffs/operation/2.16-operation-description-moved-to-long-summary/before.yaml":ts,"../../../../samples/async-api-diffs/operation/2.17-operation-summary-moved-to-description/before.yaml":os,"../../../../samples/async-api-diffs/operation/2.18-operation-long-summary-moved-to-description/before.yaml":is,"../../../../samples/async-api-diffs/operation/2.19-operation-long-summary-moved-to-long-description/before.yaml":rs,"../../../../samples/async-api-diffs/operation/2.2-operation-description-removed/before.yaml":ps,"../../../../samples/async-api-diffs/operation/2.20-operation-summary-moved-to-long-description/before.yaml":ds,"../../../../samples/async-api-diffs/operation/2.3-operation-description-added/before.yaml":ms,"../../../../samples/async-api-diffs/operation/2.4-operation-long-description-changed/before.yaml":cs,"../../../../samples/async-api-diffs/operation/2.5-operation-long-description-removed/before.yaml":ls,"../../../../samples/async-api-diffs/operation/2.6-operation-long-description-added/before.yaml":gs,"../../../../samples/async-api-diffs/operation/2.7-operation-summary-changed/before.yaml":us,"../../../../samples/async-api-diffs/operation/2.8-operation-summary-removed/before.yaml":_s,"../../../../samples/async-api-diffs/operation/2.9-operation-summary-added/before.yaml":fs,"../../../../samples/async-api-diffs/operation/3.1-operation-bindings-add-one-more-binding/before.yaml":ys,"../../../../samples/async-api-diffs/operation/3.2-operation-bindings-remove-one-of-several-bindings/before.yaml":hs,"../../../../samples/async-api-diffs/operation/3.3-operation-bindings-add-bindings/before.yaml":vs,"../../../../samples/async-api-diffs/operation/3.4-operation-bindings-remove-bindings/before.yaml":Ms,"../../../../samples/async-api-diffs/operation/4.1-operation-bindings-kafka-bindingVersion-changed/before.yaml":Ts,"../../../../samples/async-api-diffs/operation/4.2-operation-bindings-kafka-bindingVersion-removed/before.yaml":bs,"../../../../samples/async-api-diffs/operation/4.3-operation-bindings-kafka-bindingVersion-added/before.yaml":Cs,"../../../../samples/async-api-diffs/operation/5.1-operation-bindings-kafka-internal-jso-changes/before.yaml":$s,"../../../../samples/async-api-diffs/operation/6.1-operation-x-second-added/before.yaml":As,"../../../../samples/async-api-diffs/operation/6.2-operation-x-second-removed/before.yaml":qs,"../../../../samples/async-api-diffs/operation/6.3-operation-x-second-changed/before.yaml":Ss,"../../../../samples/async-api-diffs/operation/6.4-operation-x-first-and-x-second-added/before.yaml":xs,"../../../../samples/async-api-diffs/operation/6.5-operation-x-first-and-x-second-removed/before.yaml":js}),ga=Object.assign({"../../../../samples/async-api-diffs/operation/1.1-operation-title-changed/after.yaml":Is,"../../../../samples/async-api-diffs/operation/1.2-operation-title-removed/after.yaml":Os,"../../../../samples/async-api-diffs/operation/1.3-operation-title-added/after.yaml":ks,"../../../../samples/async-api-diffs/operation/2.1-operation-description-changed/after.yaml":Ps,"../../../../samples/async-api-diffs/operation/2.10-operation-long-summary-changed/after.yaml":Vs,"../../../../samples/async-api-diffs/operation/2.11-operation-long-summary-removed/after.yaml":Ls,"../../../../samples/async-api-diffs/operation/2.12-operation-long-summary-added/after.yaml":Ds,"../../../../samples/async-api-diffs/operation/2.13-operation-description-moved-to-summary/after.yaml":Es,"../../../../samples/async-api-diffs/operation/2.14-operation-long-description-moved-to-summary/after.yaml":Gs,"../../../../samples/async-api-diffs/operation/2.15-operation-long-description-moved-to-long-summary/after.yaml":Hs,"../../../../samples/async-api-diffs/operation/2.16-operation-description-moved-to-long-summary/after.yaml":Ns,"../../../../samples/async-api-diffs/operation/2.17-operation-summary-moved-to-description/after.yaml":ws,"../../../../samples/async-api-diffs/operation/2.18-operation-long-summary-moved-to-description/after.yaml":Bs,"../../../../samples/async-api-diffs/operation/2.19-operation-long-summary-moved-to-long-description/after.yaml":Fs,"../../../../samples/async-api-diffs/operation/2.2-operation-description-removed/after.yaml":Js,"../../../../samples/async-api-diffs/operation/2.20-operation-summary-moved-to-long-description/after.yaml":Rs,"../../../../samples/async-api-diffs/operation/2.3-operation-description-added/after.yaml":zs,"../../../../samples/async-api-diffs/operation/2.4-operation-long-description-changed/after.yaml":Ks,"../../../../samples/async-api-diffs/operation/2.5-operation-long-description-removed/after.yaml":Qs,"../../../../samples/async-api-diffs/operation/2.6-operation-long-description-added/after.yaml":Us,"../../../../samples/async-api-diffs/operation/2.7-operation-summary-changed/after.yaml":Ws,"../../../../samples/async-api-diffs/operation/2.8-operation-summary-removed/after.yaml":Xs,"../../../../samples/async-api-diffs/operation/2.9-operation-summary-added/after.yaml":Ys,"../../../../samples/async-api-diffs/operation/3.1-operation-bindings-add-one-more-binding/after.yaml":Zs,"../../../../samples/async-api-diffs/operation/3.2-operation-bindings-remove-one-of-several-bindings/after.yaml":ea,"../../../../samples/async-api-diffs/operation/3.3-operation-bindings-add-bindings/after.yaml":na,"../../../../samples/async-api-diffs/operation/3.4-operation-bindings-remove-bindings/after.yaml":sa,"../../../../samples/async-api-diffs/operation/4.1-operation-bindings-kafka-bindingVersion-changed/after.yaml":aa,"../../../../samples/async-api-diffs/operation/4.2-operation-bindings-kafka-bindingVersion-removed/after.yaml":ta,"../../../../samples/async-api-diffs/operation/4.3-operation-bindings-kafka-bindingVersion-added/after.yaml":oa,"../../../../samples/async-api-diffs/operation/5.1-operation-bindings-kafka-internal-jso-changes/after.yaml":ia,"../../../../samples/async-api-diffs/operation/6.1-operation-x-second-added/after.yaml":ra,"../../../../samples/async-api-diffs/operation/6.2-operation-x-second-removed/after.yaml":pa,"../../../../samples/async-api-diffs/operation/6.3-operation-x-second-changed/after.yaml":da,"../../../../samples/async-api-diffs/operation/6.4-operation-x-first-and-x-second-added/after.yaml":ma,"../../../../samples/async-api-diffs/operation/6.5-operation-x-first-and-x-second-removed/after.yaml":ca}),ua=Fn(la,ga),_a=Kn(ua),Hn=({beforeYaml:E,afterYaml:Nn})=>wn.jsx(Bn,{...Rn(E,Nn)}),Ga={title:"Async API Diffs Suite/Operation Samples",component:Hn,argTypes:Jn},fa=zn(Hn,_a,"message-operation"),e=E=>fa(E),n=e("1.1-operation-title-changed"),s=e("1.2-operation-title-removed"),a=e("1.3-operation-title-added"),t=e("2.1-operation-description-changed"),o=e("2.2-operation-description-removed"),i=e("2.3-operation-description-added"),r=e("2.4-operation-long-description-changed"),p=e("2.5-operation-long-description-removed"),d=e("2.6-operation-long-description-added"),m=e("2.7-operation-summary-changed"),c=e("2.8-operation-summary-removed"),l=e("2.9-operation-summary-added"),g=e("2.10-operation-long-summary-changed"),u=e("2.11-operation-long-summary-removed"),_=e("2.12-operation-long-summary-added"),f=e("2.13-operation-description-moved-to-summary"),y=e("2.14-operation-long-description-moved-to-summary"),h=e("2.15-operation-long-description-moved-to-long-summary"),v=e("2.16-operation-description-moved-to-long-summary"),M=e("2.17-operation-summary-moved-to-description"),T=e("2.18-operation-long-summary-moved-to-description"),b=e("2.19-operation-long-summary-moved-to-long-description"),C=e("2.20-operation-summary-moved-to-long-description"),$=e("3.1-operation-bindings-add-one-more-binding"),A=e("3.2-operation-bindings-remove-one-of-several-bindings"),q=e("3.3-operation-bindings-add-bindings"),S=e("3.4-operation-bindings-remove-bindings"),x=e("4.1-operation-bindings-kafka-bindingVersion-changed"),j=e("4.2-operation-bindings-kafka-bindingVersion-removed"),I=e("4.3-operation-bindings-kafka-bindingVersion-added"),O=e("5.1-operation-bindings-kafka-internal-jso-changes"),k=e("6.1-operation-x-second-added"),P=e("6.2-operation-x-second-removed"),V=e("6.3-operation-x-second-changed"),L=e("6.4-operation-x-first-and-x-second-added"),D=e("6.5-operation-x-first-and-x-second-removed");var G,H,N;n.parameters={...n.parameters,docs:{...(G=n.parameters)==null?void 0:G.docs,source:{originalSource:'createCaseStory("1.1-operation-title-changed")',...(N=(H=n.parameters)==null?void 0:H.docs)==null?void 0:N.source}}};var w,B,F;s.parameters={...s.parameters,docs:{...(w=s.parameters)==null?void 0:w.docs,source:{originalSource:'createCaseStory("1.2-operation-title-removed")',...(F=(B=s.parameters)==null?void 0:B.docs)==null?void 0:F.source}}};var J,R,z;a.parameters={...a.parameters,docs:{...(J=a.parameters)==null?void 0:J.docs,source:{originalSource:'createCaseStory("1.3-operation-title-added")',...(z=(R=a.parameters)==null?void 0:R.docs)==null?void 0:z.source}}};var K,Q,U;t.parameters={...t.parameters,docs:{...(K=t.parameters)==null?void 0:K.docs,source:{originalSource:'createCaseStory("2.1-operation-description-changed")',...(U=(Q=t.parameters)==null?void 0:Q.docs)==null?void 0:U.source}}};var W,X,Y;o.parameters={...o.parameters,docs:{...(W=o.parameters)==null?void 0:W.docs,source:{originalSource:'createCaseStory("2.2-operation-description-removed")',...(Y=(X=o.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,ee,ne;i.parameters={...i.parameters,docs:{...(Z=i.parameters)==null?void 0:Z.docs,source:{originalSource:'createCaseStory("2.3-operation-description-added")',...(ne=(ee=i.parameters)==null?void 0:ee.docs)==null?void 0:ne.source}}};var se,ae,te;r.parameters={...r.parameters,docs:{...(se=r.parameters)==null?void 0:se.docs,source:{originalSource:'createCaseStory("2.4-operation-long-description-changed")',...(te=(ae=r.parameters)==null?void 0:ae.docs)==null?void 0:te.source}}};var oe,ie,re;p.parameters={...p.parameters,docs:{...(oe=p.parameters)==null?void 0:oe.docs,source:{originalSource:'createCaseStory("2.5-operation-long-description-removed")',...(re=(ie=p.parameters)==null?void 0:ie.docs)==null?void 0:re.source}}};var pe,de,me;d.parameters={...d.parameters,docs:{...(pe=d.parameters)==null?void 0:pe.docs,source:{originalSource:'createCaseStory("2.6-operation-long-description-added")',...(me=(de=d.parameters)==null?void 0:de.docs)==null?void 0:me.source}}};var ce,le,ge;m.parameters={...m.parameters,docs:{...(ce=m.parameters)==null?void 0:ce.docs,source:{originalSource:'createCaseStory("2.7-operation-summary-changed")',...(ge=(le=m.parameters)==null?void 0:le.docs)==null?void 0:ge.source}}};var ue,_e,fe;c.parameters={...c.parameters,docs:{...(ue=c.parameters)==null?void 0:ue.docs,source:{originalSource:'createCaseStory("2.8-operation-summary-removed")',...(fe=(_e=c.parameters)==null?void 0:_e.docs)==null?void 0:fe.source}}};var ye,he,ve;l.parameters={...l.parameters,docs:{...(ye=l.parameters)==null?void 0:ye.docs,source:{originalSource:'createCaseStory("2.9-operation-summary-added")',...(ve=(he=l.parameters)==null?void 0:he.docs)==null?void 0:ve.source}}};var Me,Te,be;g.parameters={...g.parameters,docs:{...(Me=g.parameters)==null?void 0:Me.docs,source:{originalSource:'createCaseStory("2.10-operation-long-summary-changed")',...(be=(Te=g.parameters)==null?void 0:Te.docs)==null?void 0:be.source}}};var Ce,$e,Ae;u.parameters={...u.parameters,docs:{...(Ce=u.parameters)==null?void 0:Ce.docs,source:{originalSource:'createCaseStory("2.11-operation-long-summary-removed")',...(Ae=($e=u.parameters)==null?void 0:$e.docs)==null?void 0:Ae.source}}};var qe,Se,xe;_.parameters={..._.parameters,docs:{...(qe=_.parameters)==null?void 0:qe.docs,source:{originalSource:'createCaseStory("2.12-operation-long-summary-added")',...(xe=(Se=_.parameters)==null?void 0:Se.docs)==null?void 0:xe.source}}};var je,Ie,Oe;f.parameters={...f.parameters,docs:{...(je=f.parameters)==null?void 0:je.docs,source:{originalSource:'createCaseStory("2.13-operation-description-moved-to-summary")',...(Oe=(Ie=f.parameters)==null?void 0:Ie.docs)==null?void 0:Oe.source}}};var ke,Pe,Ve;y.parameters={...y.parameters,docs:{...(ke=y.parameters)==null?void 0:ke.docs,source:{originalSource:'createCaseStory("2.14-operation-long-description-moved-to-summary")',...(Ve=(Pe=y.parameters)==null?void 0:Pe.docs)==null?void 0:Ve.source}}};var Le,De,Ee;h.parameters={...h.parameters,docs:{...(Le=h.parameters)==null?void 0:Le.docs,source:{originalSource:'createCaseStory("2.15-operation-long-description-moved-to-long-summary")',...(Ee=(De=h.parameters)==null?void 0:De.docs)==null?void 0:Ee.source}}};var Ge,He,Ne;v.parameters={...v.parameters,docs:{...(Ge=v.parameters)==null?void 0:Ge.docs,source:{originalSource:'createCaseStory("2.16-operation-description-moved-to-long-summary")',...(Ne=(He=v.parameters)==null?void 0:He.docs)==null?void 0:Ne.source}}};var we,Be,Fe;M.parameters={...M.parameters,docs:{...(we=M.parameters)==null?void 0:we.docs,source:{originalSource:'createCaseStory("2.17-operation-summary-moved-to-description")',...(Fe=(Be=M.parameters)==null?void 0:Be.docs)==null?void 0:Fe.source}}};var Je,Re,ze;T.parameters={...T.parameters,docs:{...(Je=T.parameters)==null?void 0:Je.docs,source:{originalSource:'createCaseStory("2.18-operation-long-summary-moved-to-description")',...(ze=(Re=T.parameters)==null?void 0:Re.docs)==null?void 0:ze.source}}};var Ke,Qe,Ue;b.parameters={...b.parameters,docs:{...(Ke=b.parameters)==null?void 0:Ke.docs,source:{originalSource:'createCaseStory("2.19-operation-long-summary-moved-to-long-description")',...(Ue=(Qe=b.parameters)==null?void 0:Qe.docs)==null?void 0:Ue.source}}};var We,Xe,Ye;C.parameters={...C.parameters,docs:{...(We=C.parameters)==null?void 0:We.docs,source:{originalSource:'createCaseStory("2.20-operation-summary-moved-to-long-description")',...(Ye=(Xe=C.parameters)==null?void 0:Xe.docs)==null?void 0:Ye.source}}};var Ze,en,nn;$.parameters={...$.parameters,docs:{...(Ze=$.parameters)==null?void 0:Ze.docs,source:{originalSource:'createCaseStory("3.1-operation-bindings-add-one-more-binding")',...(nn=(en=$.parameters)==null?void 0:en.docs)==null?void 0:nn.source}}};var sn,an,tn;A.parameters={...A.parameters,docs:{...(sn=A.parameters)==null?void 0:sn.docs,source:{originalSource:'createCaseStory("3.2-operation-bindings-remove-one-of-several-bindings")',...(tn=(an=A.parameters)==null?void 0:an.docs)==null?void 0:tn.source}}};var on,rn,pn;q.parameters={...q.parameters,docs:{...(on=q.parameters)==null?void 0:on.docs,source:{originalSource:'createCaseStory("3.3-operation-bindings-add-bindings")',...(pn=(rn=q.parameters)==null?void 0:rn.docs)==null?void 0:pn.source}}};var dn,mn,cn;S.parameters={...S.parameters,docs:{...(dn=S.parameters)==null?void 0:dn.docs,source:{originalSource:'createCaseStory("3.4-operation-bindings-remove-bindings")',...(cn=(mn=S.parameters)==null?void 0:mn.docs)==null?void 0:cn.source}}};var ln,gn,un;x.parameters={...x.parameters,docs:{...(ln=x.parameters)==null?void 0:ln.docs,source:{originalSource:'createCaseStory("4.1-operation-bindings-kafka-bindingVersion-changed")',...(un=(gn=x.parameters)==null?void 0:gn.docs)==null?void 0:un.source}}};var _n,fn,yn;j.parameters={...j.parameters,docs:{...(_n=j.parameters)==null?void 0:_n.docs,source:{originalSource:'createCaseStory("4.2-operation-bindings-kafka-bindingVersion-removed")',...(yn=(fn=j.parameters)==null?void 0:fn.docs)==null?void 0:yn.source}}};var hn,vn,Mn;I.parameters={...I.parameters,docs:{...(hn=I.parameters)==null?void 0:hn.docs,source:{originalSource:'createCaseStory("4.3-operation-bindings-kafka-bindingVersion-added")',...(Mn=(vn=I.parameters)==null?void 0:vn.docs)==null?void 0:Mn.source}}};var Tn,bn,Cn;O.parameters={...O.parameters,docs:{...(Tn=O.parameters)==null?void 0:Tn.docs,source:{originalSource:'createCaseStory("5.1-operation-bindings-kafka-internal-jso-changes")',...(Cn=(bn=O.parameters)==null?void 0:bn.docs)==null?void 0:Cn.source}}};var $n,An,qn;k.parameters={...k.parameters,docs:{...($n=k.parameters)==null?void 0:$n.docs,source:{originalSource:'createCaseStory("6.1-operation-x-second-added")',...(qn=(An=k.parameters)==null?void 0:An.docs)==null?void 0:qn.source}}};var Sn,xn,jn;P.parameters={...P.parameters,docs:{...(Sn=P.parameters)==null?void 0:Sn.docs,source:{originalSource:'createCaseStory("6.2-operation-x-second-removed")',...(jn=(xn=P.parameters)==null?void 0:xn.docs)==null?void 0:jn.source}}};var In,On,kn;V.parameters={...V.parameters,docs:{...(In=V.parameters)==null?void 0:In.docs,source:{originalSource:'createCaseStory("6.3-operation-x-second-changed")',...(kn=(On=V.parameters)==null?void 0:On.docs)==null?void 0:kn.source}}};var Pn,Vn,Ln;L.parameters={...L.parameters,docs:{...(Pn=L.parameters)==null?void 0:Pn.docs,source:{originalSource:'createCaseStory("6.4-operation-x-first-and-x-second-added")',...(Ln=(Vn=L.parameters)==null?void 0:Vn.docs)==null?void 0:Ln.source}}};var Dn,En,Gn;D.parameters={...D.parameters,docs:{...(Dn=D.parameters)==null?void 0:Dn.docs,source:{originalSource:'createCaseStory("6.5-operation-x-first-and-x-second-removed")',...(Gn=(En=D.parameters)==null?void 0:En.docs)==null?void 0:Gn.source}}};const Ha=["Case_1_1_operation_title_changed","Case_1_2_operation_title_removed","Case_1_3_operation_title_added","Case_2_1_operation_description_changed","Case_2_2_operation_description_removed","Case_2_3_operation_description_added","Case_2_4_operation_long_description_changed","Case_2_5_operation_long_description_removed","Case_2_6_operation_long_description_added","Case_2_7_operation_summary_changed","Case_2_8_operation_summary_removed","Case_2_9_operation_summary_added","Case_2_10_operation_long_summary_changed","Case_2_11_operation_long_summary_removed","Case_2_12_operation_long_summary_added","Case_2_13_operation_description_moved_to_summary","Case_2_14_operation_long_description_moved_to_summary","Case_2_15_operation_long_description_moved_to_long_summary","Case_2_16_operation_description_moved_to_long_summary","Case_2_17_operation_summary_moved_to_description","Case_2_18_operation_long_summary_moved_to_description","Case_2_19_operation_long_summary_moved_to_long_description","Case_2_20_operation_summary_moved_to_long_description","Case_3_1_operation_bindings_add_one_more_binding","Case_3_2_operation_bindings_remove_one_of_several_bindings","Case_3_3_operation_bindings_add_bindings","Case_3_4_operation_bindings_remove_bindings","Case_4_1_operation_bindings_kafka_bindingVersion_changed","Case_4_2_operation_bindings_kafka_bindingVersion_removed","Case_4_3_operation_bindings_kafka_bindingVersion_added","Case_5_1_operation_bindings_kafka_internal_jso_changes","Case_6_1_operation_x_second_added","Case_6_2_operation_x_second_removed","Case_6_3_operation_x_second_changed","Case_6_4_operation_x_first_and_x_second_added","Case_6_5_operation_x_first_and_x_second_removed"];export{n as Case_1_1_operation_title_changed,s as Case_1_2_operation_title_removed,a as Case_1_3_operation_title_added,g as Case_2_10_operation_long_summary_changed,u as Case_2_11_operation_long_summary_removed,_ as Case_2_12_operation_long_summary_added,f as Case_2_13_operation_description_moved_to_summary,y as Case_2_14_operation_long_description_moved_to_summary,h as Case_2_15_operation_long_description_moved_to_long_summary,v as Case_2_16_operation_description_moved_to_long_summary,M as Case_2_17_operation_summary_moved_to_description,T as Case_2_18_operation_long_summary_moved_to_description,b as Case_2_19_operation_long_summary_moved_to_long_description,t as Case_2_1_operation_description_changed,C as Case_2_20_operation_summary_moved_to_long_description,o as Case_2_2_operation_description_removed,i as Case_2_3_operation_description_added,r as Case_2_4_operation_long_description_changed,p as Case_2_5_operation_long_description_removed,d as Case_2_6_operation_long_description_added,m as Case_2_7_operation_summary_changed,c as Case_2_8_operation_summary_removed,l as Case_2_9_operation_summary_added,$ as Case_3_1_operation_bindings_add_one_more_binding,A as Case_3_2_operation_bindings_remove_one_of_several_bindings,q as Case_3_3_operation_bindings_add_bindings,S as Case_3_4_operation_bindings_remove_bindings,x as Case_4_1_operation_bindings_kafka_bindingVersion_changed,j as Case_4_2_operation_bindings_kafka_bindingVersion_removed,I as Case_4_3_operation_bindings_kafka_bindingVersion_added,O as Case_5_1_operation_bindings_kafka_internal_jso_changes,k as Case_6_1_operation_x_second_added,P as Case_6_2_operation_x_second_removed,V as Case_6_3_operation_x_second_changed,L as Case_6_4_operation_x_first_and_x_second_added,D as Case_6_5_operation_x_first_and_x_second_removed,Ha as __namedExportsOrder,Ga as default};
