import{j as wn}from"./_commonjs-dynamic-modules-6308e768.js";import{a as Kn}from"./AsyncApiOperationViewer-fae36a9e.js";import{c as Bn}from"./parse-yaml-source-cd2e19a5.js";import{c as Fn,a as Rn,b as Jn,d as Yn}from"./async-api-diffs-utils-937d779e.js";import"./index-f46741a2.js";import"./DiffBadge-03c32659.js";import"./DdlTableViewer-47de7cb1.js";import"./index-e9a3a9a5.js";import"./DdlTableDiffsViewer-ab8e50e7.js";/* empty css              */import"./GraphQLOperationDiffViewer-500080ab.js";import"./GraphPropNodeViewer-c40e4af1.js";import"./index-415bee12.js";import"./GraphQLOperationViewer-3eb375ff.js";import"./public-api-d6a34651.js";import"./index-d5b0668c.js";import"./index-442a5f79.js";import"./preprocess-80943b29.js";const zn=`asyncapi: 3.0.0
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
`,la=Object.assign({"../../../../samples/async-api-diffs/operation/1.1-operation-title-changed/before.yaml":zn,"../../../../samples/async-api-diffs/operation/1.2-operation-title-removed/before.yaml":Qn,"../../../../samples/async-api-diffs/operation/1.3-operation-title-added/before.yaml":Un,"../../../../samples/async-api-diffs/operation/2.1-operation-description-changed/before.yaml":Wn,"../../../../samples/async-api-diffs/operation/2.10-operation-long-summary-changed/before.yaml":Xn,"../../../../samples/async-api-diffs/operation/2.11-operation-long-summary-removed/before.yaml":Zn,"../../../../samples/async-api-diffs/operation/2.12-operation-long-summary-added/before.yaml":es,"../../../../samples/async-api-diffs/operation/2.13-operation-description-moved-to-summary/before.yaml":ns,"../../../../samples/async-api-diffs/operation/2.14-operation-long-description-moved-to-summary/before.yaml":ss,"../../../../samples/async-api-diffs/operation/2.15-operation-long-description-moved-to-long-summary/before.yaml":as,"../../../../samples/async-api-diffs/operation/2.16-operation-description-moved-to-long-summary/before.yaml":ts,"../../../../samples/async-api-diffs/operation/2.17-operation-summary-moved-to-description/before.yaml":os,"../../../../samples/async-api-diffs/operation/2.18-operation-long-summary-moved-to-description/before.yaml":is,"../../../../samples/async-api-diffs/operation/2.19-operation-long-summary-moved-to-long-description/before.yaml":rs,"../../../../samples/async-api-diffs/operation/2.2-operation-description-removed/before.yaml":ps,"../../../../samples/async-api-diffs/operation/2.20-operation-summary-moved-to-long-description/before.yaml":ds,"../../../../samples/async-api-diffs/operation/2.3-operation-description-added/before.yaml":ms,"../../../../samples/async-api-diffs/operation/2.4-operation-long-description-changed/before.yaml":cs,"../../../../samples/async-api-diffs/operation/2.5-operation-long-description-removed/before.yaml":ls,"../../../../samples/async-api-diffs/operation/2.6-operation-long-description-added/before.yaml":gs,"../../../../samples/async-api-diffs/operation/2.7-operation-summary-changed/before.yaml":us,"../../../../samples/async-api-diffs/operation/2.8-operation-summary-removed/before.yaml":_s,"../../../../samples/async-api-diffs/operation/2.9-operation-summary-added/before.yaml":fs,"../../../../samples/async-api-diffs/operation/3.1-operation-bindings-add-one-more-binding/before.yaml":ys,"../../../../samples/async-api-diffs/operation/3.2-operation-bindings-remove-one-of-several-bindings/before.yaml":hs,"../../../../samples/async-api-diffs/operation/3.3-operation-bindings-add-bindings/before.yaml":vs,"../../../../samples/async-api-diffs/operation/3.4-operation-bindings-remove-bindings/before.yaml":Ms,"../../../../samples/async-api-diffs/operation/4.1-operation-bindings-kafka-bindingVersion-changed/before.yaml":Ts,"../../../../samples/async-api-diffs/operation/4.2-operation-bindings-kafka-bindingVersion-removed/before.yaml":bs,"../../../../samples/async-api-diffs/operation/4.3-operation-bindings-kafka-bindingVersion-added/before.yaml":Cs,"../../../../samples/async-api-diffs/operation/5.1-operation-bindings-kafka-internal-jso-changes/before.yaml":$s,"../../../../samples/async-api-diffs/operation/6.1-operation-x-second-added/before.yaml":As,"../../../../samples/async-api-diffs/operation/6.2-operation-x-second-removed/before.yaml":qs,"../../../../samples/async-api-diffs/operation/6.3-operation-x-second-changed/before.yaml":Ss,"../../../../samples/async-api-diffs/operation/6.4-operation-x-first-and-x-second-added/before.yaml":xs,"../../../../samples/async-api-diffs/operation/6.5-operation-x-first-and-x-second-removed/before.yaml":Is}),ga=Object.assign({"../../../../samples/async-api-diffs/operation/1.1-operation-title-changed/after.yaml":js,"../../../../samples/async-api-diffs/operation/1.2-operation-title-removed/after.yaml":Os,"../../../../samples/async-api-diffs/operation/1.3-operation-title-added/after.yaml":ks,"../../../../samples/async-api-diffs/operation/2.1-operation-description-changed/after.yaml":Ps,"../../../../samples/async-api-diffs/operation/2.10-operation-long-summary-changed/after.yaml":Vs,"../../../../samples/async-api-diffs/operation/2.11-operation-long-summary-removed/after.yaml":Ls,"../../../../samples/async-api-diffs/operation/2.12-operation-long-summary-added/after.yaml":Es,"../../../../samples/async-api-diffs/operation/2.13-operation-description-moved-to-summary/after.yaml":Ds,"../../../../samples/async-api-diffs/operation/2.14-operation-long-description-moved-to-summary/after.yaml":Gs,"../../../../samples/async-api-diffs/operation/2.15-operation-long-description-moved-to-long-summary/after.yaml":Ns,"../../../../samples/async-api-diffs/operation/2.16-operation-description-moved-to-long-summary/after.yaml":Hs,"../../../../samples/async-api-diffs/operation/2.17-operation-summary-moved-to-description/after.yaml":ws,"../../../../samples/async-api-diffs/operation/2.18-operation-long-summary-moved-to-description/after.yaml":Ks,"../../../../samples/async-api-diffs/operation/2.19-operation-long-summary-moved-to-long-description/after.yaml":Bs,"../../../../samples/async-api-diffs/operation/2.2-operation-description-removed/after.yaml":Fs,"../../../../samples/async-api-diffs/operation/2.20-operation-summary-moved-to-long-description/after.yaml":Rs,"../../../../samples/async-api-diffs/operation/2.3-operation-description-added/after.yaml":Js,"../../../../samples/async-api-diffs/operation/2.4-operation-long-description-changed/after.yaml":Ys,"../../../../samples/async-api-diffs/operation/2.5-operation-long-description-removed/after.yaml":zs,"../../../../samples/async-api-diffs/operation/2.6-operation-long-description-added/after.yaml":Qs,"../../../../samples/async-api-diffs/operation/2.7-operation-summary-changed/after.yaml":Us,"../../../../samples/async-api-diffs/operation/2.8-operation-summary-removed/after.yaml":Ws,"../../../../samples/async-api-diffs/operation/2.9-operation-summary-added/after.yaml":Xs,"../../../../samples/async-api-diffs/operation/3.1-operation-bindings-add-one-more-binding/after.yaml":Zs,"../../../../samples/async-api-diffs/operation/3.2-operation-bindings-remove-one-of-several-bindings/after.yaml":ea,"../../../../samples/async-api-diffs/operation/3.3-operation-bindings-add-bindings/after.yaml":na,"../../../../samples/async-api-diffs/operation/3.4-operation-bindings-remove-bindings/after.yaml":sa,"../../../../samples/async-api-diffs/operation/4.1-operation-bindings-kafka-bindingVersion-changed/after.yaml":aa,"../../../../samples/async-api-diffs/operation/4.2-operation-bindings-kafka-bindingVersion-removed/after.yaml":ta,"../../../../samples/async-api-diffs/operation/4.3-operation-bindings-kafka-bindingVersion-added/after.yaml":oa,"../../../../samples/async-api-diffs/operation/5.1-operation-bindings-kafka-internal-jso-changes/after.yaml":ia,"../../../../samples/async-api-diffs/operation/6.1-operation-x-second-added/after.yaml":ra,"../../../../samples/async-api-diffs/operation/6.2-operation-x-second-removed/after.yaml":pa,"../../../../samples/async-api-diffs/operation/6.3-operation-x-second-changed/after.yaml":da,"../../../../samples/async-api-diffs/operation/6.4-operation-x-first-and-x-second-added/after.yaml":ma,"../../../../samples/async-api-diffs/operation/6.5-operation-x-first-and-x-second-removed/after.yaml":ca}),ua=Bn(la,ga),_a=Fn(ua),Hn=({beforeYaml:n,afterYaml:G})=>wn.jsx(Kn,{...ha(n,G)}),Ga={title:"Async API Diffs Suite/Operation Samples",component:Hn,argTypes:Rn},fa="sendOperation",ya="TestMessage",ha=(n,G)=>Jn(n,G,{operationKey:fa,messageKey:ya}),va=Yn(Hn,_a,"message-operation"),e=n=>va(n),s=e("1.1-operation-title-changed"),a=e("1.2-operation-title-removed"),t=e("1.3-operation-title-added"),o=e("2.1-operation-description-changed"),i=e("2.2-operation-description-removed"),r=e("2.3-operation-description-added"),p=e("2.4-operation-long-description-changed"),d=e("2.5-operation-long-description-removed"),m=e("2.6-operation-long-description-added"),c=e("2.7-operation-summary-changed"),l=e("2.8-operation-summary-removed"),g=e("2.9-operation-summary-added"),u=e("2.10-operation-long-summary-changed"),_=e("2.11-operation-long-summary-removed"),f=e("2.12-operation-long-summary-added"),y=e("2.13-operation-description-moved-to-summary"),h=e("2.14-operation-long-description-moved-to-summary"),v=e("2.15-operation-long-description-moved-to-long-summary"),M=e("2.16-operation-description-moved-to-long-summary"),T=e("2.17-operation-summary-moved-to-description"),b=e("2.18-operation-long-summary-moved-to-description"),C=e("2.19-operation-long-summary-moved-to-long-description"),$=e("2.20-operation-summary-moved-to-long-description"),A=e("3.1-operation-bindings-add-one-more-binding"),q=e("3.2-operation-bindings-remove-one-of-several-bindings"),S=e("3.3-operation-bindings-add-bindings"),x=e("3.4-operation-bindings-remove-bindings"),I=e("4.1-operation-bindings-kafka-bindingVersion-changed"),j=e("4.2-operation-bindings-kafka-bindingVersion-removed"),O=e("4.3-operation-bindings-kafka-bindingVersion-added"),k=e("5.1-operation-bindings-kafka-internal-jso-changes"),P=e("6.1-operation-x-second-added"),V=e("6.2-operation-x-second-removed"),L=e("6.3-operation-x-second-changed"),E=e("6.4-operation-x-first-and-x-second-added"),D=e("6.5-operation-x-first-and-x-second-removed");var N,H,w;s.parameters={...s.parameters,docs:{...(N=s.parameters)==null?void 0:N.docs,source:{originalSource:'createCaseStory("1.1-operation-title-changed")',...(w=(H=s.parameters)==null?void 0:H.docs)==null?void 0:w.source}}};var K,B,F;a.parameters={...a.parameters,docs:{...(K=a.parameters)==null?void 0:K.docs,source:{originalSource:'createCaseStory("1.2-operation-title-removed")',...(F=(B=a.parameters)==null?void 0:B.docs)==null?void 0:F.source}}};var R,J,Y;t.parameters={...t.parameters,docs:{...(R=t.parameters)==null?void 0:R.docs,source:{originalSource:'createCaseStory("1.3-operation-title-added")',...(Y=(J=t.parameters)==null?void 0:J.docs)==null?void 0:Y.source}}};var z,Q,U;o.parameters={...o.parameters,docs:{...(z=o.parameters)==null?void 0:z.docs,source:{originalSource:'createCaseStory("2.1-operation-description-changed")',...(U=(Q=o.parameters)==null?void 0:Q.docs)==null?void 0:U.source}}};var W,X,Z;i.parameters={...i.parameters,docs:{...(W=i.parameters)==null?void 0:W.docs,source:{originalSource:'createCaseStory("2.2-operation-description-removed")',...(Z=(X=i.parameters)==null?void 0:X.docs)==null?void 0:Z.source}}};var ee,ne,se;r.parameters={...r.parameters,docs:{...(ee=r.parameters)==null?void 0:ee.docs,source:{originalSource:'createCaseStory("2.3-operation-description-added")',...(se=(ne=r.parameters)==null?void 0:ne.docs)==null?void 0:se.source}}};var ae,te,oe;p.parameters={...p.parameters,docs:{...(ae=p.parameters)==null?void 0:ae.docs,source:{originalSource:'createCaseStory("2.4-operation-long-description-changed")',...(oe=(te=p.parameters)==null?void 0:te.docs)==null?void 0:oe.source}}};var ie,re,pe;d.parameters={...d.parameters,docs:{...(ie=d.parameters)==null?void 0:ie.docs,source:{originalSource:'createCaseStory("2.5-operation-long-description-removed")',...(pe=(re=d.parameters)==null?void 0:re.docs)==null?void 0:pe.source}}};var de,me,ce;m.parameters={...m.parameters,docs:{...(de=m.parameters)==null?void 0:de.docs,source:{originalSource:'createCaseStory("2.6-operation-long-description-added")',...(ce=(me=m.parameters)==null?void 0:me.docs)==null?void 0:ce.source}}};var le,ge,ue;c.parameters={...c.parameters,docs:{...(le=c.parameters)==null?void 0:le.docs,source:{originalSource:'createCaseStory("2.7-operation-summary-changed")',...(ue=(ge=c.parameters)==null?void 0:ge.docs)==null?void 0:ue.source}}};var _e,fe,ye;l.parameters={...l.parameters,docs:{...(_e=l.parameters)==null?void 0:_e.docs,source:{originalSource:'createCaseStory("2.8-operation-summary-removed")',...(ye=(fe=l.parameters)==null?void 0:fe.docs)==null?void 0:ye.source}}};var he,ve,Me;g.parameters={...g.parameters,docs:{...(he=g.parameters)==null?void 0:he.docs,source:{originalSource:'createCaseStory("2.9-operation-summary-added")',...(Me=(ve=g.parameters)==null?void 0:ve.docs)==null?void 0:Me.source}}};var Te,be,Ce;u.parameters={...u.parameters,docs:{...(Te=u.parameters)==null?void 0:Te.docs,source:{originalSource:'createCaseStory("2.10-operation-long-summary-changed")',...(Ce=(be=u.parameters)==null?void 0:be.docs)==null?void 0:Ce.source}}};var $e,Ae,qe;_.parameters={..._.parameters,docs:{...($e=_.parameters)==null?void 0:$e.docs,source:{originalSource:'createCaseStory("2.11-operation-long-summary-removed")',...(qe=(Ae=_.parameters)==null?void 0:Ae.docs)==null?void 0:qe.source}}};var Se,xe,Ie;f.parameters={...f.parameters,docs:{...(Se=f.parameters)==null?void 0:Se.docs,source:{originalSource:'createCaseStory("2.12-operation-long-summary-added")',...(Ie=(xe=f.parameters)==null?void 0:xe.docs)==null?void 0:Ie.source}}};var je,Oe,ke;y.parameters={...y.parameters,docs:{...(je=y.parameters)==null?void 0:je.docs,source:{originalSource:'createCaseStory("2.13-operation-description-moved-to-summary")',...(ke=(Oe=y.parameters)==null?void 0:Oe.docs)==null?void 0:ke.source}}};var Pe,Ve,Le;h.parameters={...h.parameters,docs:{...(Pe=h.parameters)==null?void 0:Pe.docs,source:{originalSource:'createCaseStory("2.14-operation-long-description-moved-to-summary")',...(Le=(Ve=h.parameters)==null?void 0:Ve.docs)==null?void 0:Le.source}}};var Ee,De,Ge;v.parameters={...v.parameters,docs:{...(Ee=v.parameters)==null?void 0:Ee.docs,source:{originalSource:'createCaseStory("2.15-operation-long-description-moved-to-long-summary")',...(Ge=(De=v.parameters)==null?void 0:De.docs)==null?void 0:Ge.source}}};var Ne,He,we;M.parameters={...M.parameters,docs:{...(Ne=M.parameters)==null?void 0:Ne.docs,source:{originalSource:'createCaseStory("2.16-operation-description-moved-to-long-summary")',...(we=(He=M.parameters)==null?void 0:He.docs)==null?void 0:we.source}}};var Ke,Be,Fe;T.parameters={...T.parameters,docs:{...(Ke=T.parameters)==null?void 0:Ke.docs,source:{originalSource:'createCaseStory("2.17-operation-summary-moved-to-description")',...(Fe=(Be=T.parameters)==null?void 0:Be.docs)==null?void 0:Fe.source}}};var Re,Je,Ye;b.parameters={...b.parameters,docs:{...(Re=b.parameters)==null?void 0:Re.docs,source:{originalSource:'createCaseStory("2.18-operation-long-summary-moved-to-description")',...(Ye=(Je=b.parameters)==null?void 0:Je.docs)==null?void 0:Ye.source}}};var ze,Qe,Ue;C.parameters={...C.parameters,docs:{...(ze=C.parameters)==null?void 0:ze.docs,source:{originalSource:'createCaseStory("2.19-operation-long-summary-moved-to-long-description")',...(Ue=(Qe=C.parameters)==null?void 0:Qe.docs)==null?void 0:Ue.source}}};var We,Xe,Ze;$.parameters={...$.parameters,docs:{...(We=$.parameters)==null?void 0:We.docs,source:{originalSource:'createCaseStory("2.20-operation-summary-moved-to-long-description")',...(Ze=(Xe=$.parameters)==null?void 0:Xe.docs)==null?void 0:Ze.source}}};var en,nn,sn;A.parameters={...A.parameters,docs:{...(en=A.parameters)==null?void 0:en.docs,source:{originalSource:'createCaseStory("3.1-operation-bindings-add-one-more-binding")',...(sn=(nn=A.parameters)==null?void 0:nn.docs)==null?void 0:sn.source}}};var an,tn,on;q.parameters={...q.parameters,docs:{...(an=q.parameters)==null?void 0:an.docs,source:{originalSource:'createCaseStory("3.2-operation-bindings-remove-one-of-several-bindings")',...(on=(tn=q.parameters)==null?void 0:tn.docs)==null?void 0:on.source}}};var rn,pn,dn;S.parameters={...S.parameters,docs:{...(rn=S.parameters)==null?void 0:rn.docs,source:{originalSource:'createCaseStory("3.3-operation-bindings-add-bindings")',...(dn=(pn=S.parameters)==null?void 0:pn.docs)==null?void 0:dn.source}}};var mn,cn,ln;x.parameters={...x.parameters,docs:{...(mn=x.parameters)==null?void 0:mn.docs,source:{originalSource:'createCaseStory("3.4-operation-bindings-remove-bindings")',...(ln=(cn=x.parameters)==null?void 0:cn.docs)==null?void 0:ln.source}}};var gn,un,_n;I.parameters={...I.parameters,docs:{...(gn=I.parameters)==null?void 0:gn.docs,source:{originalSource:'createCaseStory("4.1-operation-bindings-kafka-bindingVersion-changed")',...(_n=(un=I.parameters)==null?void 0:un.docs)==null?void 0:_n.source}}};var fn,yn,hn;j.parameters={...j.parameters,docs:{...(fn=j.parameters)==null?void 0:fn.docs,source:{originalSource:'createCaseStory("4.2-operation-bindings-kafka-bindingVersion-removed")',...(hn=(yn=j.parameters)==null?void 0:yn.docs)==null?void 0:hn.source}}};var vn,Mn,Tn;O.parameters={...O.parameters,docs:{...(vn=O.parameters)==null?void 0:vn.docs,source:{originalSource:'createCaseStory("4.3-operation-bindings-kafka-bindingVersion-added")',...(Tn=(Mn=O.parameters)==null?void 0:Mn.docs)==null?void 0:Tn.source}}};var bn,Cn,$n;k.parameters={...k.parameters,docs:{...(bn=k.parameters)==null?void 0:bn.docs,source:{originalSource:'createCaseStory("5.1-operation-bindings-kafka-internal-jso-changes")',...($n=(Cn=k.parameters)==null?void 0:Cn.docs)==null?void 0:$n.source}}};var An,qn,Sn;P.parameters={...P.parameters,docs:{...(An=P.parameters)==null?void 0:An.docs,source:{originalSource:'createCaseStory("6.1-operation-x-second-added")',...(Sn=(qn=P.parameters)==null?void 0:qn.docs)==null?void 0:Sn.source}}};var xn,In,jn;V.parameters={...V.parameters,docs:{...(xn=V.parameters)==null?void 0:xn.docs,source:{originalSource:'createCaseStory("6.2-operation-x-second-removed")',...(jn=(In=V.parameters)==null?void 0:In.docs)==null?void 0:jn.source}}};var On,kn,Pn;L.parameters={...L.parameters,docs:{...(On=L.parameters)==null?void 0:On.docs,source:{originalSource:'createCaseStory("6.3-operation-x-second-changed")',...(Pn=(kn=L.parameters)==null?void 0:kn.docs)==null?void 0:Pn.source}}};var Vn,Ln,En;E.parameters={...E.parameters,docs:{...(Vn=E.parameters)==null?void 0:Vn.docs,source:{originalSource:'createCaseStory("6.4-operation-x-first-and-x-second-added")',...(En=(Ln=E.parameters)==null?void 0:Ln.docs)==null?void 0:En.source}}};var Dn,Gn,Nn;D.parameters={...D.parameters,docs:{...(Dn=D.parameters)==null?void 0:Dn.docs,source:{originalSource:'createCaseStory("6.5-operation-x-first-and-x-second-removed")',...(Nn=(Gn=D.parameters)==null?void 0:Gn.docs)==null?void 0:Nn.source}}};const Na=["Case_1_1_operation_title_changed","Case_1_2_operation_title_removed","Case_1_3_operation_title_added","Case_2_1_operation_description_changed","Case_2_2_operation_description_removed","Case_2_3_operation_description_added","Case_2_4_operation_long_description_changed","Case_2_5_operation_long_description_removed","Case_2_6_operation_long_description_added","Case_2_7_operation_summary_changed","Case_2_8_operation_summary_removed","Case_2_9_operation_summary_added","Case_2_10_operation_long_summary_changed","Case_2_11_operation_long_summary_removed","Case_2_12_operation_long_summary_added","Case_2_13_operation_description_moved_to_summary","Case_2_14_operation_long_description_moved_to_summary","Case_2_15_operation_long_description_moved_to_long_summary","Case_2_16_operation_description_moved_to_long_summary","Case_2_17_operation_summary_moved_to_description","Case_2_18_operation_long_summary_moved_to_description","Case_2_19_operation_long_summary_moved_to_long_description","Case_2_20_operation_summary_moved_to_long_description","Case_3_1_operation_bindings_add_one_more_binding","Case_3_2_operation_bindings_remove_one_of_several_bindings","Case_3_3_operation_bindings_add_bindings","Case_3_4_operation_bindings_remove_bindings","Case_4_1_operation_bindings_kafka_bindingVersion_changed","Case_4_2_operation_bindings_kafka_bindingVersion_removed","Case_4_3_operation_bindings_kafka_bindingVersion_added","Case_5_1_operation_bindings_kafka_internal_jso_changes","Case_6_1_operation_x_second_added","Case_6_2_operation_x_second_removed","Case_6_3_operation_x_second_changed","Case_6_4_operation_x_first_and_x_second_added","Case_6_5_operation_x_first_and_x_second_removed"];export{s as Case_1_1_operation_title_changed,a as Case_1_2_operation_title_removed,t as Case_1_3_operation_title_added,u as Case_2_10_operation_long_summary_changed,_ as Case_2_11_operation_long_summary_removed,f as Case_2_12_operation_long_summary_added,y as Case_2_13_operation_description_moved_to_summary,h as Case_2_14_operation_long_description_moved_to_summary,v as Case_2_15_operation_long_description_moved_to_long_summary,M as Case_2_16_operation_description_moved_to_long_summary,T as Case_2_17_operation_summary_moved_to_description,b as Case_2_18_operation_long_summary_moved_to_description,C as Case_2_19_operation_long_summary_moved_to_long_description,o as Case_2_1_operation_description_changed,$ as Case_2_20_operation_summary_moved_to_long_description,i as Case_2_2_operation_description_removed,r as Case_2_3_operation_description_added,p as Case_2_4_operation_long_description_changed,d as Case_2_5_operation_long_description_removed,m as Case_2_6_operation_long_description_added,c as Case_2_7_operation_summary_changed,l as Case_2_8_operation_summary_removed,g as Case_2_9_operation_summary_added,A as Case_3_1_operation_bindings_add_one_more_binding,q as Case_3_2_operation_bindings_remove_one_of_several_bindings,S as Case_3_3_operation_bindings_add_bindings,x as Case_3_4_operation_bindings_remove_bindings,I as Case_4_1_operation_bindings_kafka_bindingVersion_changed,j as Case_4_2_operation_bindings_kafka_bindingVersion_removed,O as Case_4_3_operation_bindings_kafka_bindingVersion_added,k as Case_5_1_operation_bindings_kafka_internal_jso_changes,P as Case_6_1_operation_x_second_added,V as Case_6_2_operation_x_second_removed,L as Case_6_3_operation_x_second_changed,E as Case_6_4_operation_x_first_and_x_second_added,D as Case_6_5_operation_x_first_and_x_second_removed,Na as __namedExportsOrder,Ga as default};
