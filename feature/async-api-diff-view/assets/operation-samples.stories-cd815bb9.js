import{j as J}from"./_commonjs-dynamic-modules-6308e768.js";import{A as ks}from"./AsyncApiOperationDiffsViewer-ccf32630.js";import{b as Ms,T as vs,a as Cs}from"./preprocess-442fc617.js";import{c as $s,p as As}from"./yaml-source-2575e8ef.js";import"./index-f46741a2.js";import"./GraphPropNodeViewer-74f48742.js";import"./index-415bee12.js";import"./AsyncApiOperationViewer-dc58a23b.js";import"./GraphQLOperationViewer-a40cc735.js";import"./GraphQLOperationDiffViewer-e155066c.js";import"./js-yaml-71a24e1f.js";const Ss=`asyncapi: 3.0.0
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
components:
  messages:
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
    description: operation moved value
components:
  messages:
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
    summary: operation moved value
components:
  messages:
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
    bindings:
      kafka:
        bindingVersion: 1.0.0
      amqp:
        bindingVersion: 0.3.0
components:
  messages:
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
    bindings:
      kafka:
        bindingVersion: 1.0.0
        stringValue: hello
components:
  messages:
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
    bindings:
      kafka:
        bindingVersion: 1.0.0
        numberValue: 7
components:
  messages:
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
    bindings:
      kafka:
        bindingVersion: 1.0.0
        stringValue: hello
components:
  messages:
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
    bindings:
      kafka:
        bindingVersion: 1.0.0
        numberValue: 7
components:
  messages:
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
    bindings:
      kafka:
        bindingVersion: 1.0.0
        booleanValue: true
components:
  messages:
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
    bindings:
      kafka:
        bindingVersion: 1.0.0
        booleanValue: true
components:
  messages:
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
    bindings:
      kafka:
        bindingVersion: 1.0.0
        nullValue: null
components:
  messages:
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
    bindings:
      kafka:
        bindingVersion: 1.0.0
        booleanValue: true
components:
  messages:
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
        nullValue: null
components:
  messages:
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
        arrayPrimitives:
          - x
          - 1
          - false
components:
  messages:
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
        arrayObjects:
          - id: 1
          - id: 2
components:
  messages:
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
        numberValue: 7
components:
  messages:
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
        bindingVersion: 1.0.0
        arrayArrayPrimitives:
          - - a
            - b
          - - 1
            - 2
          - - true
            - false
components:
  messages:
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
        bindingVersion: 1.0.0
        objectValue:
          first: one
          second: 2
components:
  messages:
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
        objectValue:
          first: one
          second: 2
components:
  messages:
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
        stringValue: hello
components:
  messages:
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
        numberValue: 7
components:
  messages:
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
    bindings:
      kafka:
        bindingVersion: 1.0.0
        booleanValue: true
components:
  messages:
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
    bindings:
      kafka:
        bindingVersion: 1.0.0
        nullValue: null
components:
  messages:
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
    bindings:
      kafka:
        bindingVersion: 1.0.0
        stringValue: hello
components:
  messages:
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
    bindings:
      kafka:
        bindingVersion: 1.0.0
        numberValue: 7
components:
  messages:
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
    bindings:
      kafka:
        bindingVersion: 1.0.0
        stringValue: hello
components:
  messages:
    TestMessage:
      name: TestMessage
      payload:
        type: object
        properties:
          id:
            type: string
        required:
          - id
`,ga=`asyncapi: 3.0.0
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
`,_a=`asyncapi: 3.0.0
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
`,fa=`asyncapi: 3.0.0
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
`,ya=`asyncapi: 3.0.0
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
`,ba=`asyncapi: 3.0.0
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
`,ua=`asyncapi: 3.0.0
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
`,ha=`asyncapi: 3.0.0
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
`,Ta=`asyncapi: 3.0.0
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
`,ka=`asyncapi: 3.0.0
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
`,Ma=`asyncapi: 3.0.0
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
`,va=`asyncapi: 3.0.0
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
`,Ca=`asyncapi: 3.0.0
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
`,$a=`asyncapi: 3.0.0
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
    summary: operation moved value
components:
  messages:
    TestMessage:
      name: TestMessage
      payload:
        type: object
        properties:
          id:
            type: string
        required:
          - id
`,Aa=`asyncapi: 3.0.0
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
    description: operation moved value
components:
  messages:
    TestMessage:
      name: TestMessage
      payload:
        type: object
        properties:
          id:
            type: string
        required:
          - id
`,Sa=`asyncapi: 3.0.0
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
      amqp:
        bindingVersion: 0.3.0
components:
  messages:
    TestMessage:
      name: TestMessage
      payload:
        type: object
        properties:
          id:
            type: string
        required:
          - id
`,ja=`asyncapi: 3.0.0
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
components:
  messages:
    TestMessage:
      name: TestMessage
      payload:
        type: object
        properties:
          id:
            type: string
        required:
          - id
`,Va=`asyncapi: 3.0.0
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
`,Oa=`asyncapi: 3.0.0
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
`,qa=`asyncapi: 3.0.0
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
`,Pa=`asyncapi: 3.0.0
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
`,Ia=`asyncapi: 3.0.0
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
`,xa=`asyncapi: 3.0.0
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
        stringValue: 1
components:
  messages:
    TestMessage:
      name: TestMessage
      payload:
        type: object
        properties:
          id:
            type: string
        required:
          - id
`,Ea=`asyncapi: 3.0.0
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
        numberValue:
          - a: 1
          - a: 2
components:
  messages:
    TestMessage:
      name: TestMessage
      payload:
        type: object
        properties:
          id:
            type: string
        required:
          - id
`,Da=`asyncapi: 3.0.0
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
        stringValue:
          - - a
          - - 1
          - - false
components:
  messages:
    TestMessage:
      name: TestMessage
      payload:
        type: object
        properties:
          id:
            type: string
        required:
          - id
`,Ka=`asyncapi: 3.0.0
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
        numberValue:
          - - a
          - - 1
          - - false
components:
  messages:
    TestMessage:
      name: TestMessage
      payload:
        type: object
        properties:
          id:
            type: string
        required:
          - id
`,Na=`asyncapi: 3.0.0
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
        booleanValue: null
components:
  messages:
    TestMessage:
      name: TestMessage
      payload:
        type: object
        properties:
          id:
            type: string
        required:
          - id
`,Ya=`asyncapi: 3.0.0
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
        booleanValue:
          - a
          - 1
          - false
components:
  messages:
    TestMessage:
      name: TestMessage
      payload:
        type: object
        properties:
          id:
            type: string
        required:
          - id
`,Ra=`asyncapi: 3.0.0
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
        nullValue:
          - a
          - 1
          - false
components:
  messages:
    TestMessage:
      name: TestMessage
      payload:
        type: object
        properties:
          id:
            type: string
        required:
          - id
`,Fa=`asyncapi: 3.0.0
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
        booleanValue:
          changed: true
components:
  messages:
    TestMessage:
      name: TestMessage
      payload:
        type: object
        properties:
          id:
            type: string
        required:
          - id
`,Ga=`asyncapi: 3.0.0
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
        nullValue:
          changed: true
components:
  messages:
    TestMessage:
      name: TestMessage
      payload:
        type: object
        properties:
          id:
            type: string
        required:
          - id
`,Ha=`asyncapi: 3.0.0
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
        arrayPrimitives:
          changed: true
components:
  messages:
    TestMessage:
      name: TestMessage
      payload:
        type: object
        properties:
          id:
            type: string
        required:
          - id
`,wa=`asyncapi: 3.0.0
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
        arrayObjects:
          changed: true
components:
  messages:
    TestMessage:
      name: TestMessage
      payload:
        type: object
        properties:
          id:
            type: string
        required:
          - id
`,Ba=`asyncapi: 3.0.0
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
        numberValue: hello
components:
  messages:
    TestMessage:
      name: TestMessage
      payload:
        type: object
        properties:
          id:
            type: string
        required:
          - id
`,za=`asyncapi: 3.0.0
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
        arrayArrayPrimitives:
          changed: true
components:
  messages:
    TestMessage:
      name: TestMessage
      payload:
        type: object
        properties:
          id:
            type: string
        required:
          - id
`,Ja=`asyncapi: 3.0.0
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
        objectValue:
          first: one
components:
  messages:
    TestMessage:
      name: TestMessage
      payload:
        type: object
        properties:
          id:
            type: string
        required:
          - id
`,La=`asyncapi: 3.0.0
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
        objectValue:
          first: one
          second: 2
          third: added
components:
  messages:
    TestMessage:
      name: TestMessage
      payload:
        type: object
        properties:
          id:
            type: string
        required:
          - id
`,Qa=`asyncapi: 3.0.0
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
        stringValue: true
components:
  messages:
    TestMessage:
      name: TestMessage
      payload:
        type: object
        properties:
          id:
            type: string
        required:
          - id
`,Ua=`asyncapi: 3.0.0
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
        numberValue: null
components:
  messages:
    TestMessage:
      name: TestMessage
      payload:
        type: object
        properties:
          id:
            type: string
        required:
          - id
`,Wa=`asyncapi: 3.0.0
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
        booleanValue: 'true'
components:
  messages:
    TestMessage:
      name: TestMessage
      payload:
        type: object
        properties:
          id:
            type: string
        required:
          - id
`,Xa=`asyncapi: 3.0.0
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
        nullValue: 5
components:
  messages:
    TestMessage:
      name: TestMessage
      payload:
        type: object
        properties:
          id:
            type: string
        required:
          - id
`,Za=`asyncapi: 3.0.0
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
        stringValue:
          - a
          - 1
          - false
components:
  messages:
    TestMessage:
      name: TestMessage
      payload:
        type: object
        properties:
          id:
            type: string
        required:
          - id
`,et=`asyncapi: 3.0.0
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
        numberValue:
          - a
          - 1
          - false
components:
  messages:
    TestMessage:
      name: TestMessage
      payload:
        type: object
        properties:
          id:
            type: string
        required:
          - id
`,nt=`asyncapi: 3.0.0
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
        stringValue:
          - a: 1
          - a: 2
components:
  messages:
    TestMessage:
      name: TestMessage
      payload:
        type: object
        properties:
          id:
            type: string
        required:
          - id
`,st=`asyncapi: 3.0.0
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
`,at=`asyncapi: 3.0.0
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
`,tt=`asyncapi: 3.0.0
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
`,ot=`asyncapi: 3.0.0
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
`,it=`asyncapi: 3.0.0
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
`,rt=Object.assign({"../../../../samples/async-api-diffs/operation/1.1-operation-title-changed/before.yaml":Ss,"../../../../samples/async-api-diffs/operation/1.2-operation-title-removed/before.yaml":js,"../../../../samples/async-api-diffs/operation/1.3-operation-title-added/before.yaml":Vs,"../../../../samples/async-api-diffs/operation/2.1-operation-description-changed/before.yaml":Os,"../../../../samples/async-api-diffs/operation/2.2-operation-description-removed/before.yaml":qs,"../../../../samples/async-api-diffs/operation/2.3-operation-description-added/before.yaml":Ps,"../../../../samples/async-api-diffs/operation/2.4-operation-summary-changed/before.yaml":Is,"../../../../samples/async-api-diffs/operation/2.5-operation-summary-removed/before.yaml":xs,"../../../../samples/async-api-diffs/operation/2.6-operation-description-moved-to-summary/before.yaml":Es,"../../../../samples/async-api-diffs/operation/2.7-operation-summary-moved-to-description/before.yaml":Ds,"../../../../samples/async-api-diffs/operation/3.1-operation-bindings-add-amqp/before.yaml":Ks,"../../../../samples/async-api-diffs/operation/3.2-operation-bindings-remove-kafka/before.yaml":Ns,"../../../../samples/async-api-diffs/operation/3.3-operation-bindings-add-kafka/before.yaml":Ys,"../../../../samples/async-api-diffs/operation/3.4-operation-bindings-remove-kafka/before.yaml":Rs,"../../../../samples/async-api-diffs/operation/4.1-operation-bindings-kafka-bindingVersion-changed/before.yaml":Fs,"../../../../samples/async-api-diffs/operation/4.2-operation-bindings-kafka-bindingVersion-removed/before.yaml":Gs,"../../../../samples/async-api-diffs/operation/4.3-operation-bindings-kafka-bindingVersion-added/before.yaml":Hs,"../../../../samples/async-api-diffs/operation/5.1.1-operation-bindings-kafka-string-to-number/before.yaml":ws,"../../../../samples/async-api-diffs/operation/5.1.10-operation-bindings-kafka-number-to-array-objects/before.yaml":Bs,"../../../../samples/async-api-diffs/operation/5.1.11-operation-bindings-kafka-string-to-array-arrays-primitives/before.yaml":zs,"../../../../samples/async-api-diffs/operation/5.1.12-operation-bindings-kafka-number-to-array-arrays-primitives/before.yaml":Js,"../../../../samples/async-api-diffs/operation/5.1.13-operation-bindings-kafka-boolean-to-null/before.yaml":Ls,"../../../../samples/async-api-diffs/operation/5.1.14-operation-bindings-kafka-boolean-to-array-primitives/before.yaml":Qs,"../../../../samples/async-api-diffs/operation/5.1.15-operation-bindings-kafka-null-to-array-primitives/before.yaml":Us,"../../../../samples/async-api-diffs/operation/5.1.16-operation-bindings-kafka-boolean-to-object/before.yaml":Ws,"../../../../samples/async-api-diffs/operation/5.1.17-operation-bindings-kafka-null-to-object/before.yaml":Xs,"../../../../samples/async-api-diffs/operation/5.1.18-operation-bindings-kafka-array-primitives-to-object/before.yaml":Zs,"../../../../samples/async-api-diffs/operation/5.1.19-operation-bindings-kafka-array-objects-to-object/before.yaml":ea,"../../../../samples/async-api-diffs/operation/5.1.2-operation-bindings-kafka-number-to-string/before.yaml":na,"../../../../samples/async-api-diffs/operation/5.1.20-operation-bindings-kafka-array-arrays-primitives-to-object/before.yaml":sa,"../../../../samples/async-api-diffs/operation/5.1.21-operation-bindings-kafka-remove-object-property/before.yaml":aa,"../../../../samples/async-api-diffs/operation/5.1.22-operation-bindings-kafka-add-object-property/before.yaml":ta,"../../../../samples/async-api-diffs/operation/5.1.3-operation-bindings-kafka-string-to-boolean/before.yaml":oa,"../../../../samples/async-api-diffs/operation/5.1.4-operation-bindings-kafka-number-to-null/before.yaml":ia,"../../../../samples/async-api-diffs/operation/5.1.5-operation-bindings-kafka-boolean-to-string/before.yaml":ra,"../../../../samples/async-api-diffs/operation/5.1.6-operation-bindings-kafka-null-to-number/before.yaml":pa,"../../../../samples/async-api-diffs/operation/5.1.7-operation-bindings-kafka-string-to-array-primitives/before.yaml":da,"../../../../samples/async-api-diffs/operation/5.1.8-operation-bindings-kafka-number-to-array-primitives/before.yaml":ca,"../../../../samples/async-api-diffs/operation/5.1.9-operation-bindings-kafka-string-to-array-objects/before.yaml":ma,"../../../../samples/async-api-diffs/operation/6.1-operation-x-second-added/before.yaml":ga,"../../../../samples/async-api-diffs/operation/6.2-operation-x-second-removed/before.yaml":la,"../../../../samples/async-api-diffs/operation/6.3-operation-x-second-changed/before.yaml":_a,"../../../../samples/async-api-diffs/operation/6.4-operation-x-first-and-x-second-added/before.yaml":fa,"../../../../samples/async-api-diffs/operation/6.5-operation-x-first-and-x-second-removed/before.yaml":ya}),pt=Object.assign({"../../../../samples/async-api-diffs/operation/1.1-operation-title-changed/after.yaml":ba,"../../../../samples/async-api-diffs/operation/1.2-operation-title-removed/after.yaml":ua,"../../../../samples/async-api-diffs/operation/1.3-operation-title-added/after.yaml":ha,"../../../../samples/async-api-diffs/operation/2.1-operation-description-changed/after.yaml":Ta,"../../../../samples/async-api-diffs/operation/2.2-operation-description-removed/after.yaml":ka,"../../../../samples/async-api-diffs/operation/2.3-operation-description-added/after.yaml":Ma,"../../../../samples/async-api-diffs/operation/2.4-operation-summary-changed/after.yaml":va,"../../../../samples/async-api-diffs/operation/2.5-operation-summary-removed/after.yaml":Ca,"../../../../samples/async-api-diffs/operation/2.6-operation-description-moved-to-summary/after.yaml":$a,"../../../../samples/async-api-diffs/operation/2.7-operation-summary-moved-to-description/after.yaml":Aa,"../../../../samples/async-api-diffs/operation/3.1-operation-bindings-add-amqp/after.yaml":Sa,"../../../../samples/async-api-diffs/operation/3.2-operation-bindings-remove-kafka/after.yaml":ja,"../../../../samples/async-api-diffs/operation/3.3-operation-bindings-add-kafka/after.yaml":Va,"../../../../samples/async-api-diffs/operation/3.4-operation-bindings-remove-kafka/after.yaml":Oa,"../../../../samples/async-api-diffs/operation/4.1-operation-bindings-kafka-bindingVersion-changed/after.yaml":qa,"../../../../samples/async-api-diffs/operation/4.2-operation-bindings-kafka-bindingVersion-removed/after.yaml":Pa,"../../../../samples/async-api-diffs/operation/4.3-operation-bindings-kafka-bindingVersion-added/after.yaml":Ia,"../../../../samples/async-api-diffs/operation/5.1.1-operation-bindings-kafka-string-to-number/after.yaml":xa,"../../../../samples/async-api-diffs/operation/5.1.10-operation-bindings-kafka-number-to-array-objects/after.yaml":Ea,"../../../../samples/async-api-diffs/operation/5.1.11-operation-bindings-kafka-string-to-array-arrays-primitives/after.yaml":Da,"../../../../samples/async-api-diffs/operation/5.1.12-operation-bindings-kafka-number-to-array-arrays-primitives/after.yaml":Ka,"../../../../samples/async-api-diffs/operation/5.1.13-operation-bindings-kafka-boolean-to-null/after.yaml":Na,"../../../../samples/async-api-diffs/operation/5.1.14-operation-bindings-kafka-boolean-to-array-primitives/after.yaml":Ya,"../../../../samples/async-api-diffs/operation/5.1.15-operation-bindings-kafka-null-to-array-primitives/after.yaml":Ra,"../../../../samples/async-api-diffs/operation/5.1.16-operation-bindings-kafka-boolean-to-object/after.yaml":Fa,"../../../../samples/async-api-diffs/operation/5.1.17-operation-bindings-kafka-null-to-object/after.yaml":Ga,"../../../../samples/async-api-diffs/operation/5.1.18-operation-bindings-kafka-array-primitives-to-object/after.yaml":Ha,"../../../../samples/async-api-diffs/operation/5.1.19-operation-bindings-kafka-array-objects-to-object/after.yaml":wa,"../../../../samples/async-api-diffs/operation/5.1.2-operation-bindings-kafka-number-to-string/after.yaml":Ba,"../../../../samples/async-api-diffs/operation/5.1.20-operation-bindings-kafka-array-arrays-primitives-to-object/after.yaml":za,"../../../../samples/async-api-diffs/operation/5.1.21-operation-bindings-kafka-remove-object-property/after.yaml":Ja,"../../../../samples/async-api-diffs/operation/5.1.22-operation-bindings-kafka-add-object-property/after.yaml":La,"../../../../samples/async-api-diffs/operation/5.1.3-operation-bindings-kafka-string-to-boolean/after.yaml":Qa,"../../../../samples/async-api-diffs/operation/5.1.4-operation-bindings-kafka-number-to-null/after.yaml":Ua,"../../../../samples/async-api-diffs/operation/5.1.5-operation-bindings-kafka-boolean-to-string/after.yaml":Wa,"../../../../samples/async-api-diffs/operation/5.1.6-operation-bindings-kafka-null-to-number/after.yaml":Xa,"../../../../samples/async-api-diffs/operation/5.1.7-operation-bindings-kafka-string-to-array-primitives/after.yaml":Za,"../../../../samples/async-api-diffs/operation/5.1.8-operation-bindings-kafka-number-to-array-primitives/after.yaml":et,"../../../../samples/async-api-diffs/operation/5.1.9-operation-bindings-kafka-string-to-array-objects/after.yaml":nt,"../../../../samples/async-api-diffs/operation/6.1-operation-x-second-added/after.yaml":st,"../../../../samples/async-api-diffs/operation/6.2-operation-x-second-removed/after.yaml":at,"../../../../samples/async-api-diffs/operation/6.3-operation-x-second-changed/after.yaml":tt,"../../../../samples/async-api-diffs/operation/6.4-operation-x-first-and-x-second-added/after.yaml":ot,"../../../../samples/async-api-diffs/operation/6.5-operation-x-first-and-x-second-removed/after.yaml":it}),dt=$s(rt,pt),ct=Object.fromEntries(dt.map(n=>[n.caseId,n])),Ts=({caseId:n})=>{const s=ct[n];return s?J.jsx(ks,{...lt(s.beforeYaml,s.afterYaml)}):J.jsxs("div",{children:["Sample case not found: ",n]})},$t={title:"Async API Diffs Suite/Operation Samples",component:Ts},mt="sendOperation",gt="TestMessage",L=n=>As(n),lt=(n,s)=>({devMode:!0,mergedSource:Ms({beforeSource:L(n),afterSource:L(s)}),operationKeys:{operationKey:mt,messageKey:gt},referenceNamePropertyKey:vs,diffMetaKeys:Cs}),e=n=>({name:n,args:{caseId:n},render:s=>J.jsx(Ts,{caseId:s.caseId})}),a=e("1.1-operation-title-changed"),t=e("1.2-operation-title-removed"),o=e("1.3-operation-title-added"),i=e("2.1-operation-description-changed"),r=e("2.2-operation-description-removed"),p=e("2.3-operation-description-added"),d=e("2.4-operation-summary-changed"),c=e("2.5-operation-summary-removed"),m=e("2.6-operation-description-moved-to-summary"),g=e("2.7-operation-summary-moved-to-description"),l=e("3.1-operation-bindings-add-amqp"),_=e("3.2-operation-bindings-remove-kafka"),f=e("3.3-operation-bindings-add-kafka"),y=e("3.4-operation-bindings-remove-kafka"),b=e("4.1-operation-bindings-kafka-bindingVersion-changed"),u=e("4.2-operation-bindings-kafka-bindingVersion-removed"),h=e("4.3-operation-bindings-kafka-bindingVersion-added"),T=e("5.1.1-operation-bindings-kafka-string-to-number"),k=e("5.1.2-operation-bindings-kafka-number-to-string"),M=e("5.1.3-operation-bindings-kafka-string-to-boolean"),v=e("5.1.4-operation-bindings-kafka-number-to-null"),C=e("5.1.5-operation-bindings-kafka-boolean-to-string"),$=e("5.1.6-operation-bindings-kafka-null-to-number"),A=e("5.1.7-operation-bindings-kafka-string-to-array-primitives"),S=e("5.1.8-operation-bindings-kafka-number-to-array-primitives"),j=e("5.1.9-operation-bindings-kafka-string-to-array-objects"),V=e("5.1.10-operation-bindings-kafka-number-to-array-objects"),O=e("5.1.11-operation-bindings-kafka-string-to-array-arrays-primitives"),q=e("5.1.12-operation-bindings-kafka-number-to-array-arrays-primitives"),P=e("5.1.13-operation-bindings-kafka-boolean-to-null"),I=e("5.1.14-operation-bindings-kafka-boolean-to-array-primitives"),x=e("5.1.15-operation-bindings-kafka-null-to-array-primitives"),E=e("5.1.16-operation-bindings-kafka-boolean-to-object"),D=e("5.1.17-operation-bindings-kafka-null-to-object"),K=e("5.1.18-operation-bindings-kafka-array-primitives-to-object"),N=e("5.1.19-operation-bindings-kafka-array-objects-to-object"),Y=e("5.1.20-operation-bindings-kafka-array-arrays-primitives-to-object"),R=e("5.1.21-operation-bindings-kafka-remove-object-property"),F=e("5.1.22-operation-bindings-kafka-add-object-property"),G=e("6.1-operation-x-second-added"),H=e("6.2-operation-x-second-removed"),w=e("6.3-operation-x-second-changed"),B=e("6.4-operation-x-first-and-x-second-added"),z=e("6.5-operation-x-first-and-x-second-removed");var Q,U,W;a.parameters={...a.parameters,docs:{...(Q=a.parameters)==null?void 0:Q.docs,source:{originalSource:'createCaseStory("1.1-operation-title-changed")',...(W=(U=a.parameters)==null?void 0:U.docs)==null?void 0:W.source}}};var X,Z,ee;t.parameters={...t.parameters,docs:{...(X=t.parameters)==null?void 0:X.docs,source:{originalSource:'createCaseStory("1.2-operation-title-removed")',...(ee=(Z=t.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var ne,se,ae;o.parameters={...o.parameters,docs:{...(ne=o.parameters)==null?void 0:ne.docs,source:{originalSource:'createCaseStory("1.3-operation-title-added")',...(ae=(se=o.parameters)==null?void 0:se.docs)==null?void 0:ae.source}}};var te,oe,ie;i.parameters={...i.parameters,docs:{...(te=i.parameters)==null?void 0:te.docs,source:{originalSource:'createCaseStory("2.1-operation-description-changed")',...(ie=(oe=i.parameters)==null?void 0:oe.docs)==null?void 0:ie.source}}};var re,pe,de;r.parameters={...r.parameters,docs:{...(re=r.parameters)==null?void 0:re.docs,source:{originalSource:'createCaseStory("2.2-operation-description-removed")',...(de=(pe=r.parameters)==null?void 0:pe.docs)==null?void 0:de.source}}};var ce,me,ge;p.parameters={...p.parameters,docs:{...(ce=p.parameters)==null?void 0:ce.docs,source:{originalSource:'createCaseStory("2.3-operation-description-added")',...(ge=(me=p.parameters)==null?void 0:me.docs)==null?void 0:ge.source}}};var le,_e,fe;d.parameters={...d.parameters,docs:{...(le=d.parameters)==null?void 0:le.docs,source:{originalSource:'createCaseStory("2.4-operation-summary-changed")',...(fe=(_e=d.parameters)==null?void 0:_e.docs)==null?void 0:fe.source}}};var ye,be,ue;c.parameters={...c.parameters,docs:{...(ye=c.parameters)==null?void 0:ye.docs,source:{originalSource:'createCaseStory("2.5-operation-summary-removed")',...(ue=(be=c.parameters)==null?void 0:be.docs)==null?void 0:ue.source}}};var he,Te,ke;m.parameters={...m.parameters,docs:{...(he=m.parameters)==null?void 0:he.docs,source:{originalSource:'createCaseStory("2.6-operation-description-moved-to-summary")',...(ke=(Te=m.parameters)==null?void 0:Te.docs)==null?void 0:ke.source}}};var Me,ve,Ce;g.parameters={...g.parameters,docs:{...(Me=g.parameters)==null?void 0:Me.docs,source:{originalSource:'createCaseStory("2.7-operation-summary-moved-to-description")',...(Ce=(ve=g.parameters)==null?void 0:ve.docs)==null?void 0:Ce.source}}};var $e,Ae,Se;l.parameters={...l.parameters,docs:{...($e=l.parameters)==null?void 0:$e.docs,source:{originalSource:'createCaseStory("3.1-operation-bindings-add-amqp")',...(Se=(Ae=l.parameters)==null?void 0:Ae.docs)==null?void 0:Se.source}}};var je,Ve,Oe;_.parameters={..._.parameters,docs:{...(je=_.parameters)==null?void 0:je.docs,source:{originalSource:'createCaseStory("3.2-operation-bindings-remove-kafka")',...(Oe=(Ve=_.parameters)==null?void 0:Ve.docs)==null?void 0:Oe.source}}};var qe,Pe,Ie;f.parameters={...f.parameters,docs:{...(qe=f.parameters)==null?void 0:qe.docs,source:{originalSource:'createCaseStory("3.3-operation-bindings-add-kafka")',...(Ie=(Pe=f.parameters)==null?void 0:Pe.docs)==null?void 0:Ie.source}}};var xe,Ee,De;y.parameters={...y.parameters,docs:{...(xe=y.parameters)==null?void 0:xe.docs,source:{originalSource:'createCaseStory("3.4-operation-bindings-remove-kafka")',...(De=(Ee=y.parameters)==null?void 0:Ee.docs)==null?void 0:De.source}}};var Ke,Ne,Ye;b.parameters={...b.parameters,docs:{...(Ke=b.parameters)==null?void 0:Ke.docs,source:{originalSource:'createCaseStory("4.1-operation-bindings-kafka-bindingVersion-changed")',...(Ye=(Ne=b.parameters)==null?void 0:Ne.docs)==null?void 0:Ye.source}}};var Re,Fe,Ge;u.parameters={...u.parameters,docs:{...(Re=u.parameters)==null?void 0:Re.docs,source:{originalSource:'createCaseStory("4.2-operation-bindings-kafka-bindingVersion-removed")',...(Ge=(Fe=u.parameters)==null?void 0:Fe.docs)==null?void 0:Ge.source}}};var He,we,Be;h.parameters={...h.parameters,docs:{...(He=h.parameters)==null?void 0:He.docs,source:{originalSource:'createCaseStory("4.3-operation-bindings-kafka-bindingVersion-added")',...(Be=(we=h.parameters)==null?void 0:we.docs)==null?void 0:Be.source}}};var ze,Je,Le;T.parameters={...T.parameters,docs:{...(ze=T.parameters)==null?void 0:ze.docs,source:{originalSource:'createCaseStory("5.1.1-operation-bindings-kafka-string-to-number")',...(Le=(Je=T.parameters)==null?void 0:Je.docs)==null?void 0:Le.source}}};var Qe,Ue,We;k.parameters={...k.parameters,docs:{...(Qe=k.parameters)==null?void 0:Qe.docs,source:{originalSource:'createCaseStory("5.1.2-operation-bindings-kafka-number-to-string")',...(We=(Ue=k.parameters)==null?void 0:Ue.docs)==null?void 0:We.source}}};var Xe,Ze,en;M.parameters={...M.parameters,docs:{...(Xe=M.parameters)==null?void 0:Xe.docs,source:{originalSource:'createCaseStory("5.1.3-operation-bindings-kafka-string-to-boolean")',...(en=(Ze=M.parameters)==null?void 0:Ze.docs)==null?void 0:en.source}}};var nn,sn,an;v.parameters={...v.parameters,docs:{...(nn=v.parameters)==null?void 0:nn.docs,source:{originalSource:'createCaseStory("5.1.4-operation-bindings-kafka-number-to-null")',...(an=(sn=v.parameters)==null?void 0:sn.docs)==null?void 0:an.source}}};var tn,on,rn;C.parameters={...C.parameters,docs:{...(tn=C.parameters)==null?void 0:tn.docs,source:{originalSource:'createCaseStory("5.1.5-operation-bindings-kafka-boolean-to-string")',...(rn=(on=C.parameters)==null?void 0:on.docs)==null?void 0:rn.source}}};var pn,dn,cn;$.parameters={...$.parameters,docs:{...(pn=$.parameters)==null?void 0:pn.docs,source:{originalSource:'createCaseStory("5.1.6-operation-bindings-kafka-null-to-number")',...(cn=(dn=$.parameters)==null?void 0:dn.docs)==null?void 0:cn.source}}};var mn,gn,ln;A.parameters={...A.parameters,docs:{...(mn=A.parameters)==null?void 0:mn.docs,source:{originalSource:'createCaseStory("5.1.7-operation-bindings-kafka-string-to-array-primitives")',...(ln=(gn=A.parameters)==null?void 0:gn.docs)==null?void 0:ln.source}}};var _n,fn,yn;S.parameters={...S.parameters,docs:{...(_n=S.parameters)==null?void 0:_n.docs,source:{originalSource:'createCaseStory("5.1.8-operation-bindings-kafka-number-to-array-primitives")',...(yn=(fn=S.parameters)==null?void 0:fn.docs)==null?void 0:yn.source}}};var bn,un,hn;j.parameters={...j.parameters,docs:{...(bn=j.parameters)==null?void 0:bn.docs,source:{originalSource:'createCaseStory("5.1.9-operation-bindings-kafka-string-to-array-objects")',...(hn=(un=j.parameters)==null?void 0:un.docs)==null?void 0:hn.source}}};var Tn,kn,Mn;V.parameters={...V.parameters,docs:{...(Tn=V.parameters)==null?void 0:Tn.docs,source:{originalSource:'createCaseStory("5.1.10-operation-bindings-kafka-number-to-array-objects")',...(Mn=(kn=V.parameters)==null?void 0:kn.docs)==null?void 0:Mn.source}}};var vn,Cn,$n;O.parameters={...O.parameters,docs:{...(vn=O.parameters)==null?void 0:vn.docs,source:{originalSource:'createCaseStory("5.1.11-operation-bindings-kafka-string-to-array-arrays-primitives")',...($n=(Cn=O.parameters)==null?void 0:Cn.docs)==null?void 0:$n.source}}};var An,Sn,jn;q.parameters={...q.parameters,docs:{...(An=q.parameters)==null?void 0:An.docs,source:{originalSource:'createCaseStory("5.1.12-operation-bindings-kafka-number-to-array-arrays-primitives")',...(jn=(Sn=q.parameters)==null?void 0:Sn.docs)==null?void 0:jn.source}}};var Vn,On,qn;P.parameters={...P.parameters,docs:{...(Vn=P.parameters)==null?void 0:Vn.docs,source:{originalSource:'createCaseStory("5.1.13-operation-bindings-kafka-boolean-to-null")',...(qn=(On=P.parameters)==null?void 0:On.docs)==null?void 0:qn.source}}};var Pn,In,xn;I.parameters={...I.parameters,docs:{...(Pn=I.parameters)==null?void 0:Pn.docs,source:{originalSource:'createCaseStory("5.1.14-operation-bindings-kafka-boolean-to-array-primitives")',...(xn=(In=I.parameters)==null?void 0:In.docs)==null?void 0:xn.source}}};var En,Dn,Kn;x.parameters={...x.parameters,docs:{...(En=x.parameters)==null?void 0:En.docs,source:{originalSource:'createCaseStory("5.1.15-operation-bindings-kafka-null-to-array-primitives")',...(Kn=(Dn=x.parameters)==null?void 0:Dn.docs)==null?void 0:Kn.source}}};var Nn,Yn,Rn;E.parameters={...E.parameters,docs:{...(Nn=E.parameters)==null?void 0:Nn.docs,source:{originalSource:'createCaseStory("5.1.16-operation-bindings-kafka-boolean-to-object")',...(Rn=(Yn=E.parameters)==null?void 0:Yn.docs)==null?void 0:Rn.source}}};var Fn,Gn,Hn;D.parameters={...D.parameters,docs:{...(Fn=D.parameters)==null?void 0:Fn.docs,source:{originalSource:'createCaseStory("5.1.17-operation-bindings-kafka-null-to-object")',...(Hn=(Gn=D.parameters)==null?void 0:Gn.docs)==null?void 0:Hn.source}}};var wn,Bn,zn;K.parameters={...K.parameters,docs:{...(wn=K.parameters)==null?void 0:wn.docs,source:{originalSource:'createCaseStory("5.1.18-operation-bindings-kafka-array-primitives-to-object")',...(zn=(Bn=K.parameters)==null?void 0:Bn.docs)==null?void 0:zn.source}}};var Jn,Ln,Qn;N.parameters={...N.parameters,docs:{...(Jn=N.parameters)==null?void 0:Jn.docs,source:{originalSource:'createCaseStory("5.1.19-operation-bindings-kafka-array-objects-to-object")',...(Qn=(Ln=N.parameters)==null?void 0:Ln.docs)==null?void 0:Qn.source}}};var Un,Wn,Xn;Y.parameters={...Y.parameters,docs:{...(Un=Y.parameters)==null?void 0:Un.docs,source:{originalSource:'createCaseStory("5.1.20-operation-bindings-kafka-array-arrays-primitives-to-object")',...(Xn=(Wn=Y.parameters)==null?void 0:Wn.docs)==null?void 0:Xn.source}}};var Zn,es,ns;R.parameters={...R.parameters,docs:{...(Zn=R.parameters)==null?void 0:Zn.docs,source:{originalSource:'createCaseStory("5.1.21-operation-bindings-kafka-remove-object-property")',...(ns=(es=R.parameters)==null?void 0:es.docs)==null?void 0:ns.source}}};var ss,as,ts;F.parameters={...F.parameters,docs:{...(ss=F.parameters)==null?void 0:ss.docs,source:{originalSource:'createCaseStory("5.1.22-operation-bindings-kafka-add-object-property")',...(ts=(as=F.parameters)==null?void 0:as.docs)==null?void 0:ts.source}}};var os,is,rs;G.parameters={...G.parameters,docs:{...(os=G.parameters)==null?void 0:os.docs,source:{originalSource:'createCaseStory("6.1-operation-x-second-added")',...(rs=(is=G.parameters)==null?void 0:is.docs)==null?void 0:rs.source}}};var ps,ds,cs;H.parameters={...H.parameters,docs:{...(ps=H.parameters)==null?void 0:ps.docs,source:{originalSource:'createCaseStory("6.2-operation-x-second-removed")',...(cs=(ds=H.parameters)==null?void 0:ds.docs)==null?void 0:cs.source}}};var ms,gs,ls;w.parameters={...w.parameters,docs:{...(ms=w.parameters)==null?void 0:ms.docs,source:{originalSource:'createCaseStory("6.3-operation-x-second-changed")',...(ls=(gs=w.parameters)==null?void 0:gs.docs)==null?void 0:ls.source}}};var _s,fs,ys;B.parameters={...B.parameters,docs:{...(_s=B.parameters)==null?void 0:_s.docs,source:{originalSource:'createCaseStory("6.4-operation-x-first-and-x-second-added")',...(ys=(fs=B.parameters)==null?void 0:fs.docs)==null?void 0:ys.source}}};var bs,us,hs;z.parameters={...z.parameters,docs:{...(bs=z.parameters)==null?void 0:bs.docs,source:{originalSource:'createCaseStory("6.5-operation-x-first-and-x-second-removed")',...(hs=(us=z.parameters)==null?void 0:us.docs)==null?void 0:hs.source}}};const At=["Case_1_1_operation_title_changed","Case_1_2_operation_title_removed","Case_1_3_operation_title_added","Case_2_1_operation_description_changed","Case_2_2_operation_description_removed","Case_2_3_operation_description_added","Case_2_4_operation_summary_changed","Case_2_5_operation_summary_removed","Case_2_6_operation_description_moved_to_summary","Case_2_7_operation_summary_moved_to_description","Case_3_1_operation_bindings_add_amqp","Case_3_2_operation_bindings_remove_kafka","Case_3_3_operation_bindings_add_kafka","Case_3_4_operation_bindings_remove_kafka","Case_4_1_operation_bindings_kafka_bindingVersion_changed","Case_4_2_operation_bindings_kafka_bindingVersion_removed","Case_4_3_operation_bindings_kafka_bindingVersion_added","Case_5_1_1_operation_bindings_kafka_string_to_number","Case_5_1_2_operation_bindings_kafka_number_to_string","Case_5_1_3_operation_bindings_kafka_string_to_boolean","Case_5_1_4_operation_bindings_kafka_number_to_null","Case_5_1_5_operation_bindings_kafka_boolean_to_string","Case_5_1_6_operation_bindings_kafka_null_to_number","Case_5_1_7_operation_bindings_kafka_string_to_array_primitives","Case_5_1_8_operation_bindings_kafka_number_to_array_primitives","Case_5_1_9_operation_bindings_kafka_string_to_array_objects","Case_5_1_10_operation_bindings_kafka_number_to_array_objects","Case_5_1_11_operation_bindings_kafka_string_to_array_arrays_primitives","Case_5_1_12_operation_bindings_kafka_number_to_array_arrays_primitives","Case_5_1_13_operation_bindings_kafka_boolean_to_null","Case_5_1_14_operation_bindings_kafka_boolean_to_array_primitives","Case_5_1_15_operation_bindings_kafka_null_to_array_primitives","Case_5_1_16_operation_bindings_kafka_boolean_to_object","Case_5_1_17_operation_bindings_kafka_null_to_object","Case_5_1_18_operation_bindings_kafka_array_primitives_to_object","Case_5_1_19_operation_bindings_kafka_array_objects_to_object","Case_5_1_20_operation_bindings_kafka_array_arrays_primitives_to_object","Case_5_1_21_operation_bindings_kafka_remove_object_property","Case_5_1_22_operation_bindings_kafka_add_object_property","Case_6_1_operation_x_second_added","Case_6_2_operation_x_second_removed","Case_6_3_operation_x_second_changed","Case_6_4_operation_x_first_and_x_second_added","Case_6_5_operation_x_first_and_x_second_removed"];export{a as Case_1_1_operation_title_changed,t as Case_1_2_operation_title_removed,o as Case_1_3_operation_title_added,i as Case_2_1_operation_description_changed,r as Case_2_2_operation_description_removed,p as Case_2_3_operation_description_added,d as Case_2_4_operation_summary_changed,c as Case_2_5_operation_summary_removed,m as Case_2_6_operation_description_moved_to_summary,g as Case_2_7_operation_summary_moved_to_description,l as Case_3_1_operation_bindings_add_amqp,_ as Case_3_2_operation_bindings_remove_kafka,f as Case_3_3_operation_bindings_add_kafka,y as Case_3_4_operation_bindings_remove_kafka,b as Case_4_1_operation_bindings_kafka_bindingVersion_changed,u as Case_4_2_operation_bindings_kafka_bindingVersion_removed,h as Case_4_3_operation_bindings_kafka_bindingVersion_added,V as Case_5_1_10_operation_bindings_kafka_number_to_array_objects,O as Case_5_1_11_operation_bindings_kafka_string_to_array_arrays_primitives,q as Case_5_1_12_operation_bindings_kafka_number_to_array_arrays_primitives,P as Case_5_1_13_operation_bindings_kafka_boolean_to_null,I as Case_5_1_14_operation_bindings_kafka_boolean_to_array_primitives,x as Case_5_1_15_operation_bindings_kafka_null_to_array_primitives,E as Case_5_1_16_operation_bindings_kafka_boolean_to_object,D as Case_5_1_17_operation_bindings_kafka_null_to_object,K as Case_5_1_18_operation_bindings_kafka_array_primitives_to_object,N as Case_5_1_19_operation_bindings_kafka_array_objects_to_object,T as Case_5_1_1_operation_bindings_kafka_string_to_number,Y as Case_5_1_20_operation_bindings_kafka_array_arrays_primitives_to_object,R as Case_5_1_21_operation_bindings_kafka_remove_object_property,F as Case_5_1_22_operation_bindings_kafka_add_object_property,k as Case_5_1_2_operation_bindings_kafka_number_to_string,M as Case_5_1_3_operation_bindings_kafka_string_to_boolean,v as Case_5_1_4_operation_bindings_kafka_number_to_null,C as Case_5_1_5_operation_bindings_kafka_boolean_to_string,$ as Case_5_1_6_operation_bindings_kafka_null_to_number,A as Case_5_1_7_operation_bindings_kafka_string_to_array_primitives,S as Case_5_1_8_operation_bindings_kafka_number_to_array_primitives,j as Case_5_1_9_operation_bindings_kafka_string_to_array_objects,G as Case_6_1_operation_x_second_added,H as Case_6_2_operation_x_second_removed,w as Case_6_3_operation_x_second_changed,B as Case_6_4_operation_x_first_and_x_second_added,z as Case_6_5_operation_x_first_and_x_second_removed,At as __namedExportsOrder,$t as default};
