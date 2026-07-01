import{j as N}from"./_commonjs-dynamic-modules-6308e768.js";import{a as Kn}from"./AsyncApiOperationViewer-4399422a.js";import{c as Yn}from"./parse-yaml-source-cd2e19a5.js";import{c as Bn,a as Fn,b as Jn}from"./async-api-diffs-utils-cdb66ac2.js";import"./index-f46741a2.js";import"./GraphPropNodeViewer-f3f6c29b.js";import"./index-415bee12.js";import"./GraphQLOperationDiffViewer-816c9dd9.js";import"./GraphQLOperationViewer-06b76605.js";import"./public-api-d6a34651.js";import"./index-d5b0668c.js";import"./index-442a5f79.js";import"./preprocess-7f468ffa.js";const Rn=`asyncapi: 3.0.0
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
components:
  messages:
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
components:
  messages:
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
components:
  messages:
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
components:
  messages:
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
components:
  messages:
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
components:
  messages:
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
components:
  messages:
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
`,ca=Object.assign({"../../../../samples/async-api-diffs/operation/1.1-operation-title-changed/before.yaml":Rn,"../../../../samples/async-api-diffs/operation/1.2-operation-title-removed/before.yaml":zn,"../../../../samples/async-api-diffs/operation/1.3-operation-title-added/before.yaml":Qn,"../../../../samples/async-api-diffs/operation/2.1-operation-description-changed/before.yaml":Un,"../../../../samples/async-api-diffs/operation/2.10-operation-long-summary-changed/before.yaml":Wn,"../../../../samples/async-api-diffs/operation/2.11-operation-long-summary-removed/before.yaml":Xn,"../../../../samples/async-api-diffs/operation/2.12-operation-long-summary-added/before.yaml":Zn,"../../../../samples/async-api-diffs/operation/2.13-operation-description-moved-to-summary/before.yaml":es,"../../../../samples/async-api-diffs/operation/2.14-operation-long-description-moved-to-summary/before.yaml":ns,"../../../../samples/async-api-diffs/operation/2.15-operation-long-description-moved-to-long-summary/before.yaml":ss,"../../../../samples/async-api-diffs/operation/2.16-operation-description-moved-to-long-summary/before.yaml":as,"../../../../samples/async-api-diffs/operation/2.17-operation-summary-moved-to-description/before.yaml":ts,"../../../../samples/async-api-diffs/operation/2.18-operation-long-summary-moved-to-description/before.yaml":os,"../../../../samples/async-api-diffs/operation/2.19-operation-long-summary-moved-to-long-description/before.yaml":is,"../../../../samples/async-api-diffs/operation/2.2-operation-description-removed/before.yaml":rs,"../../../../samples/async-api-diffs/operation/2.20-operation-summary-moved-to-long-description/before.yaml":ps,"../../../../samples/async-api-diffs/operation/2.3-operation-description-added/before.yaml":ds,"../../../../samples/async-api-diffs/operation/2.4-operation-long-description-changed/before.yaml":ms,"../../../../samples/async-api-diffs/operation/2.5-operation-long-description-removed/before.yaml":cs,"../../../../samples/async-api-diffs/operation/2.6-operation-long-description-added/before.yaml":ls,"../../../../samples/async-api-diffs/operation/2.7-operation-summary-changed/before.yaml":gs,"../../../../samples/async-api-diffs/operation/2.8-operation-summary-removed/before.yaml":us,"../../../../samples/async-api-diffs/operation/2.9-operation-summary-added/before.yaml":_s,"../../../../samples/async-api-diffs/operation/3.1-operation-bindings-add-one-more-binding/before.yaml":fs,"../../../../samples/async-api-diffs/operation/3.2-operation-bindings-remove-one-of-several-bindings/before.yaml":ys,"../../../../samples/async-api-diffs/operation/3.3-operation-bindings-add-bindings/before.yaml":hs,"../../../../samples/async-api-diffs/operation/3.4-operation-bindings-remove-bindings/before.yaml":vs,"../../../../samples/async-api-diffs/operation/4.1-operation-bindings-kafka-bindingVersion-changed/before.yaml":Ms,"../../../../samples/async-api-diffs/operation/4.2-operation-bindings-kafka-bindingVersion-removed/before.yaml":Ts,"../../../../samples/async-api-diffs/operation/4.3-operation-bindings-kafka-bindingVersion-added/before.yaml":bs,"../../../../samples/async-api-diffs/operation/5.1-operation-bindings-kafka-internal-jso-changes/before.yaml":Cs,"../../../../samples/async-api-diffs/operation/6.1-operation-x-second-added/before.yaml":$s,"../../../../samples/async-api-diffs/operation/6.2-operation-x-second-removed/before.yaml":As,"../../../../samples/async-api-diffs/operation/6.3-operation-x-second-changed/before.yaml":qs,"../../../../samples/async-api-diffs/operation/6.4-operation-x-first-and-x-second-added/before.yaml":Ss,"../../../../samples/async-api-diffs/operation/6.5-operation-x-first-and-x-second-removed/before.yaml":xs}),la=Object.assign({"../../../../samples/async-api-diffs/operation/1.1-operation-title-changed/after.yaml":js,"../../../../samples/async-api-diffs/operation/1.2-operation-title-removed/after.yaml":Is,"../../../../samples/async-api-diffs/operation/1.3-operation-title-added/after.yaml":Os,"../../../../samples/async-api-diffs/operation/2.1-operation-description-changed/after.yaml":ks,"../../../../samples/async-api-diffs/operation/2.10-operation-long-summary-changed/after.yaml":Ps,"../../../../samples/async-api-diffs/operation/2.11-operation-long-summary-removed/after.yaml":Vs,"../../../../samples/async-api-diffs/operation/2.12-operation-long-summary-added/after.yaml":Ls,"../../../../samples/async-api-diffs/operation/2.13-operation-description-moved-to-summary/after.yaml":Es,"../../../../samples/async-api-diffs/operation/2.14-operation-long-description-moved-to-summary/after.yaml":Ds,"../../../../samples/async-api-diffs/operation/2.15-operation-long-description-moved-to-long-summary/after.yaml":Gs,"../../../../samples/async-api-diffs/operation/2.16-operation-description-moved-to-long-summary/after.yaml":Ns,"../../../../samples/async-api-diffs/operation/2.17-operation-summary-moved-to-description/after.yaml":Hs,"../../../../samples/async-api-diffs/operation/2.18-operation-long-summary-moved-to-description/after.yaml":ws,"../../../../samples/async-api-diffs/operation/2.19-operation-long-summary-moved-to-long-description/after.yaml":Ks,"../../../../samples/async-api-diffs/operation/2.2-operation-description-removed/after.yaml":Ys,"../../../../samples/async-api-diffs/operation/2.20-operation-summary-moved-to-long-description/after.yaml":Bs,"../../../../samples/async-api-diffs/operation/2.3-operation-description-added/after.yaml":Fs,"../../../../samples/async-api-diffs/operation/2.4-operation-long-description-changed/after.yaml":Js,"../../../../samples/async-api-diffs/operation/2.5-operation-long-description-removed/after.yaml":Rs,"../../../../samples/async-api-diffs/operation/2.6-operation-long-description-added/after.yaml":zs,"../../../../samples/async-api-diffs/operation/2.7-operation-summary-changed/after.yaml":Qs,"../../../../samples/async-api-diffs/operation/2.8-operation-summary-removed/after.yaml":Us,"../../../../samples/async-api-diffs/operation/2.9-operation-summary-added/after.yaml":Ws,"../../../../samples/async-api-diffs/operation/3.1-operation-bindings-add-one-more-binding/after.yaml":Xs,"../../../../samples/async-api-diffs/operation/3.2-operation-bindings-remove-one-of-several-bindings/after.yaml":Zs,"../../../../samples/async-api-diffs/operation/3.3-operation-bindings-add-bindings/after.yaml":ea,"../../../../samples/async-api-diffs/operation/3.4-operation-bindings-remove-bindings/after.yaml":na,"../../../../samples/async-api-diffs/operation/4.1-operation-bindings-kafka-bindingVersion-changed/after.yaml":sa,"../../../../samples/async-api-diffs/operation/4.2-operation-bindings-kafka-bindingVersion-removed/after.yaml":aa,"../../../../samples/async-api-diffs/operation/4.3-operation-bindings-kafka-bindingVersion-added/after.yaml":ta,"../../../../samples/async-api-diffs/operation/5.1-operation-bindings-kafka-internal-jso-changes/after.yaml":oa,"../../../../samples/async-api-diffs/operation/6.1-operation-x-second-added/after.yaml":ia,"../../../../samples/async-api-diffs/operation/6.2-operation-x-second-removed/after.yaml":ra,"../../../../samples/async-api-diffs/operation/6.3-operation-x-second-changed/after.yaml":pa,"../../../../samples/async-api-diffs/operation/6.4-operation-x-first-and-x-second-added/after.yaml":da,"../../../../samples/async-api-diffs/operation/6.5-operation-x-first-and-x-second-removed/after.yaml":ma}),ga=Yn(ca,la),ua=Bn(ga),wn=({caseId:n})=>{const s=ua[n];return s?N.jsx(Kn,{...ya(s.beforeYaml,s.afterYaml)}):N.jsxs("div",{children:["Sample case not found: ",n]})},ka={title:"Async API Diffs Suite/Operation Samples",component:wn},_a="sendOperation",fa="TestMessage",ya=(n,s)=>Fn(n,s,{operationKey:_a,messageKey:fa}),ha=Jn(wn,"message-operation"),e=n=>ha(n),a=e("1.1-operation-title-changed"),t=e("1.2-operation-title-removed"),o=e("1.3-operation-title-added"),i=e("2.1-operation-description-changed"),r=e("2.2-operation-description-removed"),p=e("2.3-operation-description-added"),d=e("2.4-operation-long-description-changed"),m=e("2.5-operation-long-description-removed"),c=e("2.6-operation-long-description-added"),l=e("2.7-operation-summary-changed"),g=e("2.8-operation-summary-removed"),u=e("2.9-operation-summary-added"),_=e("2.10-operation-long-summary-changed"),f=e("2.11-operation-long-summary-removed"),y=e("2.12-operation-long-summary-added"),h=e("2.13-operation-description-moved-to-summary"),v=e("2.14-operation-long-description-moved-to-summary"),M=e("2.15-operation-long-description-moved-to-long-summary"),T=e("2.16-operation-description-moved-to-long-summary"),b=e("2.17-operation-summary-moved-to-description"),C=e("2.18-operation-long-summary-moved-to-description"),$=e("2.19-operation-long-summary-moved-to-long-description"),A=e("2.20-operation-summary-moved-to-long-description"),q=e("3.1-operation-bindings-add-one-more-binding"),S=e("3.2-operation-bindings-remove-one-of-several-bindings"),x=e("3.3-operation-bindings-add-bindings"),j=e("3.4-operation-bindings-remove-bindings"),I=e("4.1-operation-bindings-kafka-bindingVersion-changed"),O=e("4.2-operation-bindings-kafka-bindingVersion-removed"),k=e("4.3-operation-bindings-kafka-bindingVersion-added"),P=e("5.1-operation-bindings-kafka-internal-jso-changes"),V=e("6.1-operation-x-second-added"),L=e("6.2-operation-x-second-removed"),E=e("6.3-operation-x-second-changed"),D=e("6.4-operation-x-first-and-x-second-added"),G=e("6.5-operation-x-first-and-x-second-removed");var H,w,K;a.parameters={...a.parameters,docs:{...(H=a.parameters)==null?void 0:H.docs,source:{originalSource:'createCaseStory("1.1-operation-title-changed")',...(K=(w=a.parameters)==null?void 0:w.docs)==null?void 0:K.source}}};var Y,B,F;t.parameters={...t.parameters,docs:{...(Y=t.parameters)==null?void 0:Y.docs,source:{originalSource:'createCaseStory("1.2-operation-title-removed")',...(F=(B=t.parameters)==null?void 0:B.docs)==null?void 0:F.source}}};var J,R,z;o.parameters={...o.parameters,docs:{...(J=o.parameters)==null?void 0:J.docs,source:{originalSource:'createCaseStory("1.3-operation-title-added")',...(z=(R=o.parameters)==null?void 0:R.docs)==null?void 0:z.source}}};var Q,U,W;i.parameters={...i.parameters,docs:{...(Q=i.parameters)==null?void 0:Q.docs,source:{originalSource:'createCaseStory("2.1-operation-description-changed")',...(W=(U=i.parameters)==null?void 0:U.docs)==null?void 0:W.source}}};var X,Z,ee;r.parameters={...r.parameters,docs:{...(X=r.parameters)==null?void 0:X.docs,source:{originalSource:'createCaseStory("2.2-operation-description-removed")',...(ee=(Z=r.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var ne,se,ae;p.parameters={...p.parameters,docs:{...(ne=p.parameters)==null?void 0:ne.docs,source:{originalSource:'createCaseStory("2.3-operation-description-added")',...(ae=(se=p.parameters)==null?void 0:se.docs)==null?void 0:ae.source}}};var te,oe,ie;d.parameters={...d.parameters,docs:{...(te=d.parameters)==null?void 0:te.docs,source:{originalSource:'createCaseStory("2.4-operation-long-description-changed")',...(ie=(oe=d.parameters)==null?void 0:oe.docs)==null?void 0:ie.source}}};var re,pe,de;m.parameters={...m.parameters,docs:{...(re=m.parameters)==null?void 0:re.docs,source:{originalSource:'createCaseStory("2.5-operation-long-description-removed")',...(de=(pe=m.parameters)==null?void 0:pe.docs)==null?void 0:de.source}}};var me,ce,le;c.parameters={...c.parameters,docs:{...(me=c.parameters)==null?void 0:me.docs,source:{originalSource:'createCaseStory("2.6-operation-long-description-added")',...(le=(ce=c.parameters)==null?void 0:ce.docs)==null?void 0:le.source}}};var ge,ue,_e;l.parameters={...l.parameters,docs:{...(ge=l.parameters)==null?void 0:ge.docs,source:{originalSource:'createCaseStory("2.7-operation-summary-changed")',...(_e=(ue=l.parameters)==null?void 0:ue.docs)==null?void 0:_e.source}}};var fe,ye,he;g.parameters={...g.parameters,docs:{...(fe=g.parameters)==null?void 0:fe.docs,source:{originalSource:'createCaseStory("2.8-operation-summary-removed")',...(he=(ye=g.parameters)==null?void 0:ye.docs)==null?void 0:he.source}}};var ve,Me,Te;u.parameters={...u.parameters,docs:{...(ve=u.parameters)==null?void 0:ve.docs,source:{originalSource:'createCaseStory("2.9-operation-summary-added")',...(Te=(Me=u.parameters)==null?void 0:Me.docs)==null?void 0:Te.source}}};var be,Ce,$e;_.parameters={..._.parameters,docs:{...(be=_.parameters)==null?void 0:be.docs,source:{originalSource:'createCaseStory("2.10-operation-long-summary-changed")',...($e=(Ce=_.parameters)==null?void 0:Ce.docs)==null?void 0:$e.source}}};var Ae,qe,Se;f.parameters={...f.parameters,docs:{...(Ae=f.parameters)==null?void 0:Ae.docs,source:{originalSource:'createCaseStory("2.11-operation-long-summary-removed")',...(Se=(qe=f.parameters)==null?void 0:qe.docs)==null?void 0:Se.source}}};var xe,je,Ie;y.parameters={...y.parameters,docs:{...(xe=y.parameters)==null?void 0:xe.docs,source:{originalSource:'createCaseStory("2.12-operation-long-summary-added")',...(Ie=(je=y.parameters)==null?void 0:je.docs)==null?void 0:Ie.source}}};var Oe,ke,Pe;h.parameters={...h.parameters,docs:{...(Oe=h.parameters)==null?void 0:Oe.docs,source:{originalSource:'createCaseStory("2.13-operation-description-moved-to-summary")',...(Pe=(ke=h.parameters)==null?void 0:ke.docs)==null?void 0:Pe.source}}};var Ve,Le,Ee;v.parameters={...v.parameters,docs:{...(Ve=v.parameters)==null?void 0:Ve.docs,source:{originalSource:'createCaseStory("2.14-operation-long-description-moved-to-summary")',...(Ee=(Le=v.parameters)==null?void 0:Le.docs)==null?void 0:Ee.source}}};var De,Ge,Ne;M.parameters={...M.parameters,docs:{...(De=M.parameters)==null?void 0:De.docs,source:{originalSource:'createCaseStory("2.15-operation-long-description-moved-to-long-summary")',...(Ne=(Ge=M.parameters)==null?void 0:Ge.docs)==null?void 0:Ne.source}}};var He,we,Ke;T.parameters={...T.parameters,docs:{...(He=T.parameters)==null?void 0:He.docs,source:{originalSource:'createCaseStory("2.16-operation-description-moved-to-long-summary")',...(Ke=(we=T.parameters)==null?void 0:we.docs)==null?void 0:Ke.source}}};var Ye,Be,Fe;b.parameters={...b.parameters,docs:{...(Ye=b.parameters)==null?void 0:Ye.docs,source:{originalSource:'createCaseStory("2.17-operation-summary-moved-to-description")',...(Fe=(Be=b.parameters)==null?void 0:Be.docs)==null?void 0:Fe.source}}};var Je,Re,ze;C.parameters={...C.parameters,docs:{...(Je=C.parameters)==null?void 0:Je.docs,source:{originalSource:'createCaseStory("2.18-operation-long-summary-moved-to-description")',...(ze=(Re=C.parameters)==null?void 0:Re.docs)==null?void 0:ze.source}}};var Qe,Ue,We;$.parameters={...$.parameters,docs:{...(Qe=$.parameters)==null?void 0:Qe.docs,source:{originalSource:'createCaseStory("2.19-operation-long-summary-moved-to-long-description")',...(We=(Ue=$.parameters)==null?void 0:Ue.docs)==null?void 0:We.source}}};var Xe,Ze,en;A.parameters={...A.parameters,docs:{...(Xe=A.parameters)==null?void 0:Xe.docs,source:{originalSource:'createCaseStory("2.20-operation-summary-moved-to-long-description")',...(en=(Ze=A.parameters)==null?void 0:Ze.docs)==null?void 0:en.source}}};var nn,sn,an;q.parameters={...q.parameters,docs:{...(nn=q.parameters)==null?void 0:nn.docs,source:{originalSource:'createCaseStory("3.1-operation-bindings-add-one-more-binding")',...(an=(sn=q.parameters)==null?void 0:sn.docs)==null?void 0:an.source}}};var tn,on,rn;S.parameters={...S.parameters,docs:{...(tn=S.parameters)==null?void 0:tn.docs,source:{originalSource:'createCaseStory("3.2-operation-bindings-remove-one-of-several-bindings")',...(rn=(on=S.parameters)==null?void 0:on.docs)==null?void 0:rn.source}}};var pn,dn,mn;x.parameters={...x.parameters,docs:{...(pn=x.parameters)==null?void 0:pn.docs,source:{originalSource:'createCaseStory("3.3-operation-bindings-add-bindings")',...(mn=(dn=x.parameters)==null?void 0:dn.docs)==null?void 0:mn.source}}};var cn,ln,gn;j.parameters={...j.parameters,docs:{...(cn=j.parameters)==null?void 0:cn.docs,source:{originalSource:'createCaseStory("3.4-operation-bindings-remove-bindings")',...(gn=(ln=j.parameters)==null?void 0:ln.docs)==null?void 0:gn.source}}};var un,_n,fn;I.parameters={...I.parameters,docs:{...(un=I.parameters)==null?void 0:un.docs,source:{originalSource:'createCaseStory("4.1-operation-bindings-kafka-bindingVersion-changed")',...(fn=(_n=I.parameters)==null?void 0:_n.docs)==null?void 0:fn.source}}};var yn,hn,vn;O.parameters={...O.parameters,docs:{...(yn=O.parameters)==null?void 0:yn.docs,source:{originalSource:'createCaseStory("4.2-operation-bindings-kafka-bindingVersion-removed")',...(vn=(hn=O.parameters)==null?void 0:hn.docs)==null?void 0:vn.source}}};var Mn,Tn,bn;k.parameters={...k.parameters,docs:{...(Mn=k.parameters)==null?void 0:Mn.docs,source:{originalSource:'createCaseStory("4.3-operation-bindings-kafka-bindingVersion-added")',...(bn=(Tn=k.parameters)==null?void 0:Tn.docs)==null?void 0:bn.source}}};var Cn,$n,An;P.parameters={...P.parameters,docs:{...(Cn=P.parameters)==null?void 0:Cn.docs,source:{originalSource:'createCaseStory("5.1-operation-bindings-kafka-internal-jso-changes")',...(An=($n=P.parameters)==null?void 0:$n.docs)==null?void 0:An.source}}};var qn,Sn,xn;V.parameters={...V.parameters,docs:{...(qn=V.parameters)==null?void 0:qn.docs,source:{originalSource:'createCaseStory("6.1-operation-x-second-added")',...(xn=(Sn=V.parameters)==null?void 0:Sn.docs)==null?void 0:xn.source}}};var jn,In,On;L.parameters={...L.parameters,docs:{...(jn=L.parameters)==null?void 0:jn.docs,source:{originalSource:'createCaseStory("6.2-operation-x-second-removed")',...(On=(In=L.parameters)==null?void 0:In.docs)==null?void 0:On.source}}};var kn,Pn,Vn;E.parameters={...E.parameters,docs:{...(kn=E.parameters)==null?void 0:kn.docs,source:{originalSource:'createCaseStory("6.3-operation-x-second-changed")',...(Vn=(Pn=E.parameters)==null?void 0:Pn.docs)==null?void 0:Vn.source}}};var Ln,En,Dn;D.parameters={...D.parameters,docs:{...(Ln=D.parameters)==null?void 0:Ln.docs,source:{originalSource:'createCaseStory("6.4-operation-x-first-and-x-second-added")',...(Dn=(En=D.parameters)==null?void 0:En.docs)==null?void 0:Dn.source}}};var Gn,Nn,Hn;G.parameters={...G.parameters,docs:{...(Gn=G.parameters)==null?void 0:Gn.docs,source:{originalSource:'createCaseStory("6.5-operation-x-first-and-x-second-removed")',...(Hn=(Nn=G.parameters)==null?void 0:Nn.docs)==null?void 0:Hn.source}}};const Pa=["Case_1_1_operation_title_changed","Case_1_2_operation_title_removed","Case_1_3_operation_title_added","Case_2_1_operation_description_changed","Case_2_2_operation_description_removed","Case_2_3_operation_description_added","Case_2_4_operation_long_description_changed","Case_2_5_operation_long_description_removed","Case_2_6_operation_long_description_added","Case_2_7_operation_summary_changed","Case_2_8_operation_summary_removed","Case_2_9_operation_summary_added","Case_2_10_operation_long_summary_changed","Case_2_11_operation_long_summary_removed","Case_2_12_operation_long_summary_added","Case_2_13_operation_description_moved_to_summary","Case_2_14_operation_long_description_moved_to_summary","Case_2_15_operation_long_description_moved_to_long_summary","Case_2_16_operation_description_moved_to_long_summary","Case_2_17_operation_summary_moved_to_description","Case_2_18_operation_long_summary_moved_to_description","Case_2_19_operation_long_summary_moved_to_long_description","Case_2_20_operation_summary_moved_to_long_description","Case_3_1_operation_bindings_add_one_more_binding","Case_3_2_operation_bindings_remove_one_of_several_bindings","Case_3_3_operation_bindings_add_bindings","Case_3_4_operation_bindings_remove_bindings","Case_4_1_operation_bindings_kafka_bindingVersion_changed","Case_4_2_operation_bindings_kafka_bindingVersion_removed","Case_4_3_operation_bindings_kafka_bindingVersion_added","Case_5_1_operation_bindings_kafka_internal_jso_changes","Case_6_1_operation_x_second_added","Case_6_2_operation_x_second_removed","Case_6_3_operation_x_second_changed","Case_6_4_operation_x_first_and_x_second_added","Case_6_5_operation_x_first_and_x_second_removed"];export{a as Case_1_1_operation_title_changed,t as Case_1_2_operation_title_removed,o as Case_1_3_operation_title_added,_ as Case_2_10_operation_long_summary_changed,f as Case_2_11_operation_long_summary_removed,y as Case_2_12_operation_long_summary_added,h as Case_2_13_operation_description_moved_to_summary,v as Case_2_14_operation_long_description_moved_to_summary,M as Case_2_15_operation_long_description_moved_to_long_summary,T as Case_2_16_operation_description_moved_to_long_summary,b as Case_2_17_operation_summary_moved_to_description,C as Case_2_18_operation_long_summary_moved_to_description,$ as Case_2_19_operation_long_summary_moved_to_long_description,i as Case_2_1_operation_description_changed,A as Case_2_20_operation_summary_moved_to_long_description,r as Case_2_2_operation_description_removed,p as Case_2_3_operation_description_added,d as Case_2_4_operation_long_description_changed,m as Case_2_5_operation_long_description_removed,c as Case_2_6_operation_long_description_added,l as Case_2_7_operation_summary_changed,g as Case_2_8_operation_summary_removed,u as Case_2_9_operation_summary_added,q as Case_3_1_operation_bindings_add_one_more_binding,S as Case_3_2_operation_bindings_remove_one_of_several_bindings,x as Case_3_3_operation_bindings_add_bindings,j as Case_3_4_operation_bindings_remove_bindings,I as Case_4_1_operation_bindings_kafka_bindingVersion_changed,O as Case_4_2_operation_bindings_kafka_bindingVersion_removed,k as Case_4_3_operation_bindings_kafka_bindingVersion_added,P as Case_5_1_operation_bindings_kafka_internal_jso_changes,V as Case_6_1_operation_x_second_added,L as Case_6_2_operation_x_second_removed,E as Case_6_3_operation_x_second_changed,D as Case_6_4_operation_x_first_and_x_second_added,G as Case_6_5_operation_x_first_and_x_second_removed,Pa as __namedExportsOrder,ka as default};
