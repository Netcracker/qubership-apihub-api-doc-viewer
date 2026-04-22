import{j as oe}from"./_commonjs-dynamic-modules-6308e768.js";import{A as va}from"./AsyncApiOperationDiffsViewer-0238598c.js";import{b as Ta,T as ua,a as Ma}from"./preprocess-442fc617.js";import{c as ka,p as Ca}from"./yaml-source-2575e8ef.js";import"./index-f46741a2.js";import"./GraphPropNodeViewer-74f48742.js";import"./index-415bee12.js";import"./AsyncApiOperationViewer-60c23ed4.js";import"./GraphQLOperationViewer-a40cc735.js";import"./GraphQLOperationDiffViewer-e155066c.js";import"./js-yaml-71a24e1f.js";const $a=`asyncapi: 3.0.0
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
components:
  messages:
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
components:
  messages:
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
    description: channel moved value
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
    summary: channel moved value
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
    bindings:
      kafka:
        bindingVersion: 1.0.0
      amqp:
        bindingVersion: 0.3.0
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
components:
  messages:
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
    bindings:
      kafka:
        bindingVersion: 1.0.0
        stringValue: hello
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
    bindings:
      kafka:
        bindingVersion: 1.0.0
        numberValue: 7
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
    bindings:
      kafka:
        bindingVersion: 1.0.0
        stringValue: hello
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
    bindings:
      kafka:
        bindingVersion: 1.0.0
        numberValue: 7
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
    bindings:
      kafka:
        bindingVersion: 1.0.0
        booleanValue: true
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
    bindings:
      kafka:
        bindingVersion: 1.0.0
        booleanValue: true
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
    bindings:
      kafka:
        bindingVersion: 1.0.0
        nullValue: null
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
    bindings:
      kafka:
        bindingVersion: 1.0.0
        booleanValue: true
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
    bindings:
      kafka:
        bindingVersion: 1.0.0
        nullValue: null
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
    bindings:
      kafka:
        bindingVersion: 1.0.0
        arrayPrimitives:
          - x
          - 1
          - false
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
    bindings:
      kafka:
        bindingVersion: 1.0.0
        arrayObjects:
          - id: 1
          - id: 2
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
    bindings:
      kafka:
        bindingVersion: 1.0.0
        numberValue: 7
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
    bindings:
      kafka:
        bindingVersion: 1.0.0
        objectValue:
          first: one
          second: 2
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
    bindings:
      kafka:
        bindingVersion: 1.0.0
        objectValue:
          first: one
          second: 2
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
    bindings:
      kafka:
        bindingVersion: 1.0.0
        stringValue: hello
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
    bindings:
      kafka:
        bindingVersion: 1.0.0
        numberValue: 7
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
`,rt=`asyncapi: 3.0.0
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
        booleanValue: true
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
    bindings:
      kafka:
        bindingVersion: 1.0.0
        nullValue: null
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
    bindings:
      kafka:
        bindingVersion: 1.0.0
        stringValue: hello
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
`,ct=`asyncapi: 3.0.0
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
        numberValue: 7
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
`,lt=`asyncapi: 3.0.0
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
        stringValue: hello
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
`,mt=`asyncapi: 3.0.0
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
`,pt=`asyncapi: 3.0.0
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
`,dt=`asyncapi: 3.0.0
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
`,gt=`asyncapi: 3.0.0
info:
  title: Sample AsyncAPI
  version: 1.0.0
channels:
  testChannel:
    address: events.default
    messages:
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
`,_t=`asyncapi: 3.0.0
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
`,ft=`asyncapi: 3.0.0
info:
  title: Sample AsyncAPI
  version: 1.0.0
channels:
  testChannel:
    address: events.static
    messages:
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
`,ht=`asyncapi: 3.0.0
info:
  title: Sample AsyncAPI
  version: 1.0.0
channels:
  testChannel:
    address: events.default
    messages:
      TestMessage:
        $ref: '#/components/messages/TestMessage'
    servers:
      - $ref: '#/servers/server0'
      - $ref: '#/servers/server1'
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
servers:
  server0:
    host: broker-0.example.com:9092
    protocol: kafka
  server1:
    host: broker-1.example.com:9092
    protocol: kafka
  server2:
    host: broker-2.example.com:5672
    protocol: amqp
`,yt=`asyncapi: 3.0.0
info:
  title: Sample AsyncAPI
  version: 1.0.0
channels:
  testChannel:
    address: events.default
    messages:
      TestMessage:
        $ref: '#/components/messages/TestMessage'
    servers:
      - $ref: '#/servers/server0'
      - $ref: '#/servers/server1'
      - $ref: '#/servers/server2'
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
servers:
  server0:
    host: broker-0.example.com:9092
    protocol: kafka
  server1:
    host: broker-1.example.com:9092
    protocol: kafka
  server2:
    host: broker-2.example.com:5672
    protocol: amqp
`,bt=`asyncapi: 3.0.0
info:
  title: Sample AsyncAPI
  version: 1.0.0
channels:
  testChannel:
    address: events.default
    messages:
      TestMessage:
        $ref: '#/components/messages/TestMessage'
    servers:
      - $ref: '#/servers/server0'
      - $ref: '#/servers/server1'
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
servers:
  server0:
    host: broker-0.example.com:9092
    protocol: kafka
  server1:
    host: broker-1.example.com:9092
    protocol: kafka
  server2:
    host: broker-2.example.com:5672
    protocol: amqp
`,vt=`asyncapi: 3.0.0
info:
  title: Sample AsyncAPI
  version: 1.0.0
channels:
  testChannel:
    address: events.default
    messages:
      TestMessage:
        $ref: '#/components/messages/TestMessage'
    servers:
      - $ref: '#/servers/server0'
      - $ref: '#/servers/missing-server'
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
servers:
  server0:
    host: broker-0.example.com:9092
    protocol: kafka
  server1:
    host: broker-1.example.com:9092
    protocol: kafka
  server2:
    host: broker-2.example.com:5672
    protocol: amqp
`,Tt=`asyncapi: 3.0.0
info:
  title: Sample AsyncAPI
  version: 1.0.0
channels:
  testChannel:
    address: events.{firstParam}.{secondParam}
    messages:
      TestMessage:
        $ref: '#/components/messages/TestMessage'
    parameters:
      firstParam:
        description: first parameter
        location: $message.payload#/id
        schema:
          type: string
          minLength: 1
      secondParam:
        description: second parameter
        location: $message.payload#/id
        schema:
          type: string
          minLength: 1
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
`,ut=`asyncapi: 3.0.0
info:
  title: Sample AsyncAPI
  version: 1.0.0
channels:
  testChannel:
    address: events.{firstParam}.{secondParam}
    messages:
      TestMessage:
        $ref: '#/components/messages/TestMessage'
    parameters:
      firstParam:
        description: first parameter
        location: $message.payload#/id
        schema:
          type: string
          minLength: 1
      secondParam:
        description: second parameter
        location: $message.payload#/id
        schema:
          type: string
          minLength: 1
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
`,Mt=`asyncapi: 3.0.0
info:
  title: Sample AsyncAPI
  version: 1.0.0
channels:
  testChannel:
    address: events.{firstParam}
    messages:
      TestMessage:
        $ref: '#/components/messages/TestMessage'
    parameters:
      firstParam:
        description: first parameter
        location: $message.payload#/id
        schema:
          type: string
          minLength: 1
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
`,kt=`asyncapi: 3.0.0
info:
  title: Sample AsyncAPI
  version: 1.0.0
channels:
  testChannel:
    address: events.{firstParam}.{secondParam}
    messages:
      TestMessage:
        $ref: '#/components/messages/TestMessage'
    parameters:
      firstParam:
        description: first parameter
        location: $message.payload#/id
        schema:
          type: string
          minLength: 1
      secondParam:
        description: second parameter
        location: $message.payload#/id
        schema:
          type: string
          minLength: 1
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
`,Ct=`asyncapi: 3.0.0
info:
  title: Sample AsyncAPI
  version: 1.0.0
channels:
  testChannel:
    address: events.{firstParam}.{secondParam}
    messages:
      TestMessage:
        $ref: '#/components/messages/TestMessage'
    parameters:
      firstParam:
        description: first parameter
        location: $message.payload#/id
        schema:
          type: string
          minLength: 1
      secondParam:
        description: second parameter
        location: $message.payload#/id
        schema:
          type: string
          minLength: 1
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
`,$t=`asyncapi: 3.0.0
info:
  title: Sample AsyncAPI
  version: 1.0.0
channels:
  testChannel:
    address: events.{firstParam}.{secondParam}
    messages:
      TestMessage:
        $ref: '#/components/messages/TestMessage'
    parameters:
      firstParam:
        description: first parameter
        location: $message.payload#/id
        schema:
          type: string
          minLength: 1
      secondParam:
        $ref: '#/components/parameters/DoesNotExist'
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
`,At=`asyncapi: 3.0.0
info:
  title: Sample AsyncAPI
  version: 1.0.0
channels:
  testChannel:
    address: events.default
    messages:
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
servers:
  server0:
    host: broker-0.example.com:9092
    protocol: kafka
  server1:
    host: broker-1.example.com:9092
    protocol: kafka
  server2:
    host: broker-2.example.com:5672
    protocol: amqp
`,St=`asyncapi: 3.0.0
info:
  title: Sample AsyncAPI
  version: 1.0.0
channels:
  testChannel:
    address: events.default
    messages:
      TestMessage:
        $ref: '#/components/messages/TestMessage'
    servers:
      - $ref: '#/servers/server0'
      - $ref: '#/servers/server1'
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
servers:
  server0:
    host: broker-0.example.com:9092
    protocol: kafka
  server1:
    host: broker-1.example.com:9092
    protocol: kafka
  server2:
    host: broker-2.example.com:5672
    protocol: amqp
`,jt=`asyncapi: 3.0.0
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
`,Pt=`asyncapi: 3.0.0
info:
  title: Sample AsyncAPI
  version: 1.0.0
channels:
  testChannel:
    address: events.default
    messages:
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
`,qt=`asyncapi: 3.0.0
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
`,Ot=`asyncapi: 3.0.0
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
`,It=`asyncapi: 3.0.0
info:
  title: Sample AsyncAPI
  version: 1.0.0
channels:
  testChannel:
    address: events.default
    messages:
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
`,Vt=`asyncapi: 3.0.0
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
`,xt=`asyncapi: 3.0.0
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
`,Et=`asyncapi: 3.0.0
info:
  title: Sample AsyncAPI
  version: 1.0.0
channels:
  testChannel:
    address: events.default
    messages:
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
`,Lt=`asyncapi: 3.0.0
info:
  title: Sample AsyncAPI
  version: 1.0.0
channels:
  testChannel:
    address: events.default
    messages:
      TestMessage:
        $ref: '#/components/messages/TestMessage'
    summary: channel moved value
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
`,Dt=`asyncapi: 3.0.0
info:
  title: Sample AsyncAPI
  version: 1.0.0
channels:
  testChannel:
    address: events.default
    messages:
      TestMessage:
        $ref: '#/components/messages/TestMessage'
    description: channel moved value
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
`,Nt=`asyncapi: 3.0.0
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
      amqp:
        bindingVersion: 0.3.0
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
`,Kt=`asyncapi: 3.0.0
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
`,Yt=`asyncapi: 3.0.0
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
`,Rt=`asyncapi: 3.0.0
info:
  title: Sample AsyncAPI
  version: 1.0.0
channels:
  testChannel:
    address: events.default
    messages:
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
`,Ft=`asyncapi: 3.0.0
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
`,Gt=`asyncapi: 3.0.0
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
`,Ht=`asyncapi: 3.0.0
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
`,wt=`asyncapi: 3.0.0
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
        stringValue: 1
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
`,Bt=`asyncapi: 3.0.0
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
        numberValue:
          - a: 1
          - a: 2
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
`,zt=`asyncapi: 3.0.0
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
        stringValue:
          - - a
          - - 1
          - - false
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
`,Jt=`asyncapi: 3.0.0
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
        numberValue:
          - - a
          - - 1
          - - false
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
`,Qt=`asyncapi: 3.0.0
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
        booleanValue: null
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
`,Ut=`asyncapi: 3.0.0
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
        booleanValue:
          - a
          - 1
          - false
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
`,Wt=`asyncapi: 3.0.0
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
        nullValue:
          - a
          - 1
          - false
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
`,Xt=`asyncapi: 3.0.0
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
        booleanValue:
          changed: true
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
`,Zt=`asyncapi: 3.0.0
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
        nullValue:
          changed: true
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
`,er=`asyncapi: 3.0.0
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
        arrayPrimitives:
          changed: true
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
`,nr=`asyncapi: 3.0.0
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
        arrayObjects:
          changed: true
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
`,sr=`asyncapi: 3.0.0
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
        numberValue: hello
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
`,ar=`asyncapi: 3.0.0
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
        arrayArrayPrimitives:
          changed: true
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
`,tr=`asyncapi: 3.0.0
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
        objectValue:
          first: one
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
`,rr=`asyncapi: 3.0.0
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
        objectValue:
          first: one
          second: 2
          third: added
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
`,or=`asyncapi: 3.0.0
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
        stringValue: true
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
`,ir=`asyncapi: 3.0.0
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
        numberValue: null
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
`,cr=`asyncapi: 3.0.0
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
        booleanValue: 'true'
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
`,lr=`asyncapi: 3.0.0
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
        nullValue: 5
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
`,mr=`asyncapi: 3.0.0
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
        stringValue:
          - a
          - 1
          - false
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
`,pr=`asyncapi: 3.0.0
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
        numberValue:
          - a
          - 1
          - false
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
`,dr=`asyncapi: 3.0.0
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
        stringValue:
          - a: 1
          - a: 2
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
`,gr=`asyncapi: 3.0.0
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
`,_r=`asyncapi: 3.0.0
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
`,fr=`asyncapi: 3.0.0
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
`,hr=`asyncapi: 3.0.0
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
`,yr=`asyncapi: 3.0.0
info:
  title: Sample AsyncAPI
  version: 1.0.0
channels:
  testChannel:
    address: events.default
    messages:
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
`,br=`asyncapi: 3.0.0
info:
  title: Sample AsyncAPI
  version: 1.0.0
channels:
  testChannel:
    address: events.{firstParam}.{secondParam}
    messages:
      TestMessage:
        $ref: '#/components/messages/TestMessage'
    parameters:
      firstParam:
        description: first parameter
        location: $message.payload#/id
        schema:
          type: string
          minLength: 1
      secondParam:
        description: second parameter
        location: $message.payload#/id
        schema:
          type: string
          minLength: 1
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
`,vr=`asyncapi: 3.0.0
info:
  title: Sample AsyncAPI
  version: 1.0.0
channels:
  testChannel:
    address: events.default
    messages:
      TestMessage:
        $ref: '#/components/messages/TestMessage'
    servers:
      - $ref: '#/servers/server0'
      - $ref: '#/servers/server1'
      - $ref: '#/servers/server2'
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
servers:
  server0:
    host: broker-0.example.com:9092
    protocol: kafka
  server1:
    host: broker-1.example.com:9092
    protocol: kafka
  server2:
    host: broker-2.example.com:5672
    protocol: amqp
`,Tr=`asyncapi: 3.0.0
info:
  title: Sample AsyncAPI
  version: 1.0.0
channels:
  testChannel:
    address: events.default
    messages:
      TestMessage:
        $ref: '#/components/messages/TestMessage'
    servers:
      - $ref: '#/servers/server0'
      - $ref: '#/servers/server1'
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
servers:
  server0:
    host: broker-0.example.com:9092
    protocol: kafka
  server1:
    host: broker-1.example.com:9092
    protocol: kafka
  server2:
    host: broker-2.example.com:5672
    protocol: amqp
`,ur=`asyncapi: 3.0.0
info:
  title: Sample AsyncAPI
  version: 1.0.0
channels:
  testChannel:
    address: events.default
    messages:
      TestMessage:
        $ref: '#/components/messages/TestMessage'
    servers:
      - $ref: '#/servers/server0'
      - $ref: '#/servers/missing-server'
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
servers:
  server0:
    host: broker-0.example.com:9092
    protocol: kafka
  server1:
    host: broker-1.example.com:9092
    protocol: kafka
  server2:
    host: broker-2.example.com:5672
    protocol: amqp
`,Mr=`asyncapi: 3.0.0
info:
  title: Sample AsyncAPI
  version: 1.0.0
channels:
  testChannel:
    address: events.default
    messages:
      TestMessage:
        $ref: '#/components/messages/TestMessage'
    servers:
      - $ref: '#/servers/server0'
      - $ref: '#/servers/server1'
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
servers:
  server0:
    host: broker-0.example.com:9092
    protocol: kafka
  server1:
    host: broker-1.example.com:9092
    protocol: kafka
  server2:
    host: broker-2.example.com:5672
    protocol: amqp
`,kr=`asyncapi: 3.0.0
info:
  title: Sample AsyncAPI
  version: 1.0.0
channels:
  testChannel:
    address: events.static
    messages:
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
`,Cr=`asyncapi: 3.0.0
info:
  title: Sample AsyncAPI
  version: 1.0.0
channels:
  testChannel:
    address: events.{secondParam}
    messages:
      TestMessage:
        $ref: '#/components/messages/TestMessage'
    parameters:
      secondParam:
        description: second parameter
        location: $message.payload#/id
        schema:
          type: string
          minLength: 1
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
`,$r=`asyncapi: 3.0.0
info:
  title: Sample AsyncAPI
  version: 1.0.0
channels:
  testChannel:
    address: events.{firstParam}.{secondParam}
    messages:
      TestMessage:
        $ref: '#/components/messages/TestMessage'
    parameters:
      firstParam:
        description: first parameter
        location: $message.payload#/id
        schema:
          type: string
          minLength: 1
      secondParam:
        description: second parameter
        location: $message.payload#/id
        schema:
          type: string
          minLength: 1
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
`,Ar=`asyncapi: 3.0.0
info:
  title: Sample AsyncAPI
  version: 1.0.0
channels:
  testChannel:
    address: events.{firstParam}.{param_2}
    messages:
      TestMessage:
        $ref: '#/components/messages/TestMessage'
    parameters:
      firstParam:
        description: first parameter
        location: $message.payload#/id
        schema:
          type: string
          minLength: 1
      param_2:
        description: second parameter
        location: $message.payload#/id
        schema:
          type: string
          minLength: 1
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
`,Sr=`asyncapi: 3.0.0
info:
  title: Sample AsyncAPI
  version: 1.0.0
channels:
  testChannel:
    address: events.{firstParam}.{secondParam}
    messages:
      TestMessage:
        $ref: '#/components/messages/TestMessage'
    parameters:
      firstParam:
        description: first parameter
        location: $message.payload#/id
        schema:
          type: string
          minLength: 1
      secondParam:
        $ref: '#/components/parameters/DoesNotExist'
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
`,jr=`asyncapi: 3.0.0
info:
  title: Sample AsyncAPI
  version: 1.0.0
channels:
  testChannel:
    address: events.{firstParam}.{secondParam}
    messages:
      TestMessage:
        $ref: '#/components/messages/TestMessage'
    parameters:
      firstParam:
        description: first parameter
        location: $message.payload#/id
        schema:
          type: string
          minLength: 1
      secondParam:
        description: second parameter
        location: $message.payload#/id
        schema:
          type: string
          minLength: 1
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
`,Pr=`asyncapi: 3.0.0
info:
  title: Sample AsyncAPI
  version: 1.0.0
channels:
  testChannel:
    address: events.default
    messages:
      TestMessage:
        $ref: '#/components/messages/TestMessage'
    servers:
      - $ref: '#/servers/server0'
      - $ref: '#/servers/server1'
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
servers:
  server0:
    host: broker-0.example.com:9092
    protocol: kafka
  server1:
    host: broker-1.example.com:9092
    protocol: kafka
  server2:
    host: broker-2.example.com:5672
    protocol: amqp
`,qr=`asyncapi: 3.0.0
info:
  title: Sample AsyncAPI
  version: 1.0.0
channels:
  testChannel:
    address: events.default
    messages:
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
servers:
  server0:
    host: broker-0.example.com:9092
    protocol: kafka
  server1:
    host: broker-1.example.com:9092
    protocol: kafka
  server2:
    host: broker-2.example.com:5672
    protocol: amqp
`,Or=Object.assign({"../../../../samples/async-api-diffs/channel/1.1-channel-title-changed/before.yaml":$a,"../../../../samples/async-api-diffs/channel/1.2-channel-title-removed/before.yaml":Aa,"../../../../samples/async-api-diffs/channel/1.3-channel-title-added/before.yaml":Sa,"../../../../samples/async-api-diffs/channel/2.1-channel-description-changed/before.yaml":ja,"../../../../samples/async-api-diffs/channel/2.2-channel-description-removed/before.yaml":Pa,"../../../../samples/async-api-diffs/channel/2.3-channel-description-added/before.yaml":qa,"../../../../samples/async-api-diffs/channel/2.4-channel-summary-changed/before.yaml":Oa,"../../../../samples/async-api-diffs/channel/2.5-channel-summary-removed/before.yaml":Ia,"../../../../samples/async-api-diffs/channel/2.6-channel-description-moved-to-summary/before.yaml":Va,"../../../../samples/async-api-diffs/channel/2.7-channel-summary-moved-to-description/before.yaml":xa,"../../../../samples/async-api-diffs/channel/3.1-channel-bindings-add-amqp/before.yaml":Ea,"../../../../samples/async-api-diffs/channel/3.2-channel-bindings-remove-kafka/before.yaml":La,"../../../../samples/async-api-diffs/channel/3.3-channel-bindings-add-kafka/before.yaml":Da,"../../../../samples/async-api-diffs/channel/3.4-channel-bindings-remove-kafka/before.yaml":Na,"../../../../samples/async-api-diffs/channel/4.1-channel-bindings-kafka-bindingVersion-changed/before.yaml":Ka,"../../../../samples/async-api-diffs/channel/4.2-channel-bindings-kafka-bindingVersion-removed/before.yaml":Ya,"../../../../samples/async-api-diffs/channel/4.3-channel-bindings-kafka-bindingVersion-added/before.yaml":Ra,"../../../../samples/async-api-diffs/channel/5.1.1-channel-bindings-kafka-string-to-number/before.yaml":Fa,"../../../../samples/async-api-diffs/channel/5.1.10-channel-bindings-kafka-number-to-array-objects/before.yaml":Ga,"../../../../samples/async-api-diffs/channel/5.1.11-channel-bindings-kafka-string-to-array-arrays-primitives/before.yaml":Ha,"../../../../samples/async-api-diffs/channel/5.1.12-channel-bindings-kafka-number-to-array-arrays-primitives/before.yaml":wa,"../../../../samples/async-api-diffs/channel/5.1.13-channel-bindings-kafka-boolean-to-null/before.yaml":Ba,"../../../../samples/async-api-diffs/channel/5.1.14-channel-bindings-kafka-boolean-to-array-primitives/before.yaml":za,"../../../../samples/async-api-diffs/channel/5.1.15-channel-bindings-kafka-null-to-array-primitives/before.yaml":Ja,"../../../../samples/async-api-diffs/channel/5.1.16-channel-bindings-kafka-boolean-to-object/before.yaml":Qa,"../../../../samples/async-api-diffs/channel/5.1.17-channel-bindings-kafka-null-to-object/before.yaml":Ua,"../../../../samples/async-api-diffs/channel/5.1.18-channel-bindings-kafka-array-primitives-to-object/before.yaml":Wa,"../../../../samples/async-api-diffs/channel/5.1.19-channel-bindings-kafka-array-objects-to-object/before.yaml":Xa,"../../../../samples/async-api-diffs/channel/5.1.2-channel-bindings-kafka-number-to-string/before.yaml":Za,"../../../../samples/async-api-diffs/channel/5.1.20-channel-bindings-kafka-array-arrays-primitives-to-object/before.yaml":et,"../../../../samples/async-api-diffs/channel/5.1.21-channel-bindings-kafka-remove-object-property/before.yaml":nt,"../../../../samples/async-api-diffs/channel/5.1.22-channel-bindings-kafka-add-object-property/before.yaml":st,"../../../../samples/async-api-diffs/channel/5.1.3-channel-bindings-kafka-string-to-boolean/before.yaml":at,"../../../../samples/async-api-diffs/channel/5.1.4-channel-bindings-kafka-number-to-null/before.yaml":tt,"../../../../samples/async-api-diffs/channel/5.1.5-channel-bindings-kafka-boolean-to-string/before.yaml":rt,"../../../../samples/async-api-diffs/channel/5.1.6-channel-bindings-kafka-null-to-number/before.yaml":ot,"../../../../samples/async-api-diffs/channel/5.1.7-channel-bindings-kafka-string-to-array-primitives/before.yaml":it,"../../../../samples/async-api-diffs/channel/5.1.8-channel-bindings-kafka-number-to-array-primitives/before.yaml":ct,"../../../../samples/async-api-diffs/channel/5.1.9-channel-bindings-kafka-string-to-array-objects/before.yaml":lt,"../../../../samples/async-api-diffs/channel/6.1-channel-x-second-added/before.yaml":mt,"../../../../samples/async-api-diffs/channel/6.2-channel-x-second-removed/before.yaml":pt,"../../../../samples/async-api-diffs/channel/6.3-channel-x-second-changed/before.yaml":dt,"../../../../samples/async-api-diffs/channel/6.4-channel-x-first-and-x-second-added/before.yaml":gt,"../../../../samples/async-api-diffs/channel/6.5-channel-x-first-and-x-second-removed/before.yaml":_t,"../../../../samples/async-api-diffs/channel/7.1-channel-parameters-added/before.yaml":ft,"../../../../samples/async-api-diffs/channel/7.10-channel-servers-one-item-added/before.yaml":ht,"../../../../samples/async-api-diffs/channel/7.11-channel-servers-one-item-removed/before.yaml":yt,"../../../../samples/async-api-diffs/channel/7.12-channel-servers-ref-changed-to-broken-ref/before.yaml":bt,"../../../../samples/async-api-diffs/channel/7.13-channel-servers-broken-ref-changed-to-existing-ref/before.yaml":vt,"../../../../samples/async-api-diffs/channel/7.2-channel-parameters-removed/before.yaml":Tt,"../../../../samples/async-api-diffs/channel/7.3-channel-parameters-firstParam-removed/before.yaml":ut,"../../../../samples/async-api-diffs/channel/7.4-channel-parameters-secondParam-added/before.yaml":Mt,"../../../../samples/async-api-diffs/channel/7.5-channel-parameters-key-rename/before.yaml":kt,"../../../../samples/async-api-diffs/channel/7.6-channel-parameters-secondParam-object-to-broken-ref/before.yaml":Ct,"../../../../samples/async-api-diffs/channel/7.7-channel-parameters-secondParam-broken-ref-to-object/before.yaml":$t,"../../../../samples/async-api-diffs/channel/7.8-channel-servers-added/before.yaml":At,"../../../../samples/async-api-diffs/channel/7.9-channel-servers-removed/before.yaml":St}),Ir=Object.assign({"../../../../samples/async-api-diffs/channel/1.1-channel-title-changed/after.yaml":jt,"../../../../samples/async-api-diffs/channel/1.2-channel-title-removed/after.yaml":Pt,"../../../../samples/async-api-diffs/channel/1.3-channel-title-added/after.yaml":qt,"../../../../samples/async-api-diffs/channel/2.1-channel-description-changed/after.yaml":Ot,"../../../../samples/async-api-diffs/channel/2.2-channel-description-removed/after.yaml":It,"../../../../samples/async-api-diffs/channel/2.3-channel-description-added/after.yaml":Vt,"../../../../samples/async-api-diffs/channel/2.4-channel-summary-changed/after.yaml":xt,"../../../../samples/async-api-diffs/channel/2.5-channel-summary-removed/after.yaml":Et,"../../../../samples/async-api-diffs/channel/2.6-channel-description-moved-to-summary/after.yaml":Lt,"../../../../samples/async-api-diffs/channel/2.7-channel-summary-moved-to-description/after.yaml":Dt,"../../../../samples/async-api-diffs/channel/3.1-channel-bindings-add-amqp/after.yaml":Nt,"../../../../samples/async-api-diffs/channel/3.2-channel-bindings-remove-kafka/after.yaml":Kt,"../../../../samples/async-api-diffs/channel/3.3-channel-bindings-add-kafka/after.yaml":Yt,"../../../../samples/async-api-diffs/channel/3.4-channel-bindings-remove-kafka/after.yaml":Rt,"../../../../samples/async-api-diffs/channel/4.1-channel-bindings-kafka-bindingVersion-changed/after.yaml":Ft,"../../../../samples/async-api-diffs/channel/4.2-channel-bindings-kafka-bindingVersion-removed/after.yaml":Gt,"../../../../samples/async-api-diffs/channel/4.3-channel-bindings-kafka-bindingVersion-added/after.yaml":Ht,"../../../../samples/async-api-diffs/channel/5.1.1-channel-bindings-kafka-string-to-number/after.yaml":wt,"../../../../samples/async-api-diffs/channel/5.1.10-channel-bindings-kafka-number-to-array-objects/after.yaml":Bt,"../../../../samples/async-api-diffs/channel/5.1.11-channel-bindings-kafka-string-to-array-arrays-primitives/after.yaml":zt,"../../../../samples/async-api-diffs/channel/5.1.12-channel-bindings-kafka-number-to-array-arrays-primitives/after.yaml":Jt,"../../../../samples/async-api-diffs/channel/5.1.13-channel-bindings-kafka-boolean-to-null/after.yaml":Qt,"../../../../samples/async-api-diffs/channel/5.1.14-channel-bindings-kafka-boolean-to-array-primitives/after.yaml":Ut,"../../../../samples/async-api-diffs/channel/5.1.15-channel-bindings-kafka-null-to-array-primitives/after.yaml":Wt,"../../../../samples/async-api-diffs/channel/5.1.16-channel-bindings-kafka-boolean-to-object/after.yaml":Xt,"../../../../samples/async-api-diffs/channel/5.1.17-channel-bindings-kafka-null-to-object/after.yaml":Zt,"../../../../samples/async-api-diffs/channel/5.1.18-channel-bindings-kafka-array-primitives-to-object/after.yaml":er,"../../../../samples/async-api-diffs/channel/5.1.19-channel-bindings-kafka-array-objects-to-object/after.yaml":nr,"../../../../samples/async-api-diffs/channel/5.1.2-channel-bindings-kafka-number-to-string/after.yaml":sr,"../../../../samples/async-api-diffs/channel/5.1.20-channel-bindings-kafka-array-arrays-primitives-to-object/after.yaml":ar,"../../../../samples/async-api-diffs/channel/5.1.21-channel-bindings-kafka-remove-object-property/after.yaml":tr,"../../../../samples/async-api-diffs/channel/5.1.22-channel-bindings-kafka-add-object-property/after.yaml":rr,"../../../../samples/async-api-diffs/channel/5.1.3-channel-bindings-kafka-string-to-boolean/after.yaml":or,"../../../../samples/async-api-diffs/channel/5.1.4-channel-bindings-kafka-number-to-null/after.yaml":ir,"../../../../samples/async-api-diffs/channel/5.1.5-channel-bindings-kafka-boolean-to-string/after.yaml":cr,"../../../../samples/async-api-diffs/channel/5.1.6-channel-bindings-kafka-null-to-number/after.yaml":lr,"../../../../samples/async-api-diffs/channel/5.1.7-channel-bindings-kafka-string-to-array-primitives/after.yaml":mr,"../../../../samples/async-api-diffs/channel/5.1.8-channel-bindings-kafka-number-to-array-primitives/after.yaml":pr,"../../../../samples/async-api-diffs/channel/5.1.9-channel-bindings-kafka-string-to-array-objects/after.yaml":dr,"../../../../samples/async-api-diffs/channel/6.1-channel-x-second-added/after.yaml":gr,"../../../../samples/async-api-diffs/channel/6.2-channel-x-second-removed/after.yaml":_r,"../../../../samples/async-api-diffs/channel/6.3-channel-x-second-changed/after.yaml":fr,"../../../../samples/async-api-diffs/channel/6.4-channel-x-first-and-x-second-added/after.yaml":hr,"../../../../samples/async-api-diffs/channel/6.5-channel-x-first-and-x-second-removed/after.yaml":yr,"../../../../samples/async-api-diffs/channel/7.1-channel-parameters-added/after.yaml":br,"../../../../samples/async-api-diffs/channel/7.10-channel-servers-one-item-added/after.yaml":vr,"../../../../samples/async-api-diffs/channel/7.11-channel-servers-one-item-removed/after.yaml":Tr,"../../../../samples/async-api-diffs/channel/7.12-channel-servers-ref-changed-to-broken-ref/after.yaml":ur,"../../../../samples/async-api-diffs/channel/7.13-channel-servers-broken-ref-changed-to-existing-ref/after.yaml":Mr,"../../../../samples/async-api-diffs/channel/7.2-channel-parameters-removed/after.yaml":kr,"../../../../samples/async-api-diffs/channel/7.3-channel-parameters-firstParam-removed/after.yaml":Cr,"../../../../samples/async-api-diffs/channel/7.4-channel-parameters-secondParam-added/after.yaml":$r,"../../../../samples/async-api-diffs/channel/7.5-channel-parameters-key-rename/after.yaml":Ar,"../../../../samples/async-api-diffs/channel/7.6-channel-parameters-secondParam-object-to-broken-ref/after.yaml":Sr,"../../../../samples/async-api-diffs/channel/7.7-channel-parameters-secondParam-broken-ref-to-object/after.yaml":jr,"../../../../samples/async-api-diffs/channel/7.8-channel-servers-added/after.yaml":Pr,"../../../../samples/async-api-diffs/channel/7.9-channel-servers-removed/after.yaml":qr}),Vr=ka(Or,Ir),xr=Object.fromEntries(Vr.map(n=>[n.caseId,n])),ba=({caseId:n})=>{const s=xr[n];return s?oe.jsx(va,{...Dr(s.beforeYaml,s.afterYaml)}):oe.jsxs("div",{children:["Sample case not found: ",n]})},Qr={title:"Async API Diffs Suite/Channel Samples",component:ba},Er="sendOperation",Lr="TestMessage",ie=n=>Ca(n),Dr=(n,s)=>({devMode:!0,mergedSource:Ta({beforeSource:ie(n),afterSource:ie(s)}),operationKeys:{operationKey:Er,messageKey:Lr},referenceNamePropertyKey:ua,diffMetaKeys:Ma}),e=n=>({name:n,args:{caseId:n},render:s=>oe.jsx(ba,{caseId:s.caseId})}),a=e("1.1-channel-title-changed"),t=e("1.2-channel-title-removed"),r=e("1.3-channel-title-added"),o=e("2.1-channel-description-changed"),i=e("2.2-channel-description-removed"),c=e("2.3-channel-description-added"),l=e("2.4-channel-summary-changed"),m=e("2.5-channel-summary-removed"),p=e("2.6-channel-description-moved-to-summary"),d=e("2.7-channel-summary-moved-to-description"),g=e("3.1-channel-bindings-add-amqp"),_=e("3.2-channel-bindings-remove-kafka"),f=e("3.3-channel-bindings-add-kafka"),h=e("3.4-channel-bindings-remove-kafka"),y=e("4.1-channel-bindings-kafka-bindingVersion-changed"),b=e("4.2-channel-bindings-kafka-bindingVersion-removed"),v=e("4.3-channel-bindings-kafka-bindingVersion-added"),T=e("5.1.1-channel-bindings-kafka-string-to-number"),u=e("5.1.2-channel-bindings-kafka-number-to-string"),M=e("5.1.3-channel-bindings-kafka-string-to-boolean"),k=e("5.1.4-channel-bindings-kafka-number-to-null"),C=e("5.1.5-channel-bindings-kafka-boolean-to-string"),$=e("5.1.6-channel-bindings-kafka-null-to-number"),A=e("5.1.7-channel-bindings-kafka-string-to-array-primitives"),S=e("5.1.8-channel-bindings-kafka-number-to-array-primitives"),j=e("5.1.9-channel-bindings-kafka-string-to-array-objects"),P=e("5.1.10-channel-bindings-kafka-number-to-array-objects"),q=e("5.1.11-channel-bindings-kafka-string-to-array-arrays-primitives"),O=e("5.1.12-channel-bindings-kafka-number-to-array-arrays-primitives"),I=e("5.1.13-channel-bindings-kafka-boolean-to-null"),V=e("5.1.14-channel-bindings-kafka-boolean-to-array-primitives"),x=e("5.1.15-channel-bindings-kafka-null-to-array-primitives"),E=e("5.1.16-channel-bindings-kafka-boolean-to-object"),L=e("5.1.17-channel-bindings-kafka-null-to-object"),D=e("5.1.18-channel-bindings-kafka-array-primitives-to-object"),N=e("5.1.19-channel-bindings-kafka-array-objects-to-object"),K=e("5.1.20-channel-bindings-kafka-array-arrays-primitives-to-object"),Y=e("5.1.21-channel-bindings-kafka-remove-object-property"),R=e("5.1.22-channel-bindings-kafka-add-object-property"),F=e("6.1-channel-x-second-added"),G=e("6.2-channel-x-second-removed"),H=e("6.3-channel-x-second-changed"),w=e("6.4-channel-x-first-and-x-second-added"),B=e("6.5-channel-x-first-and-x-second-removed"),z=e("7.1-channel-parameters-added"),J=e("7.2-channel-parameters-removed"),Q=e("7.3-channel-parameters-firstParam-removed"),U=e("7.4-channel-parameters-secondParam-added"),W=e("7.5-channel-parameters-key-rename"),X=e("7.6-channel-parameters-secondParam-object-to-broken-ref"),Z=e("7.7-channel-parameters-secondParam-broken-ref-to-object"),ee=e("7.8-channel-servers-added"),ne=e("7.9-channel-servers-removed"),se=e("7.10-channel-servers-one-item-added"),ae=e("7.11-channel-servers-one-item-removed"),te=e("7.12-channel-servers-ref-changed-to-broken-ref"),re=e("7.13-channel-servers-broken-ref-changed-to-existing-ref");var ce,le,me;a.parameters={...a.parameters,docs:{...(ce=a.parameters)==null?void 0:ce.docs,source:{originalSource:'createCaseStory("1.1-channel-title-changed")',...(me=(le=a.parameters)==null?void 0:le.docs)==null?void 0:me.source}}};var pe,de,ge;t.parameters={...t.parameters,docs:{...(pe=t.parameters)==null?void 0:pe.docs,source:{originalSource:'createCaseStory("1.2-channel-title-removed")',...(ge=(de=t.parameters)==null?void 0:de.docs)==null?void 0:ge.source}}};var _e,fe,he;r.parameters={...r.parameters,docs:{...(_e=r.parameters)==null?void 0:_e.docs,source:{originalSource:'createCaseStory("1.3-channel-title-added")',...(he=(fe=r.parameters)==null?void 0:fe.docs)==null?void 0:he.source}}};var ye,be,ve;o.parameters={...o.parameters,docs:{...(ye=o.parameters)==null?void 0:ye.docs,source:{originalSource:'createCaseStory("2.1-channel-description-changed")',...(ve=(be=o.parameters)==null?void 0:be.docs)==null?void 0:ve.source}}};var Te,ue,Me;i.parameters={...i.parameters,docs:{...(Te=i.parameters)==null?void 0:Te.docs,source:{originalSource:'createCaseStory("2.2-channel-description-removed")',...(Me=(ue=i.parameters)==null?void 0:ue.docs)==null?void 0:Me.source}}};var ke,Ce,$e;c.parameters={...c.parameters,docs:{...(ke=c.parameters)==null?void 0:ke.docs,source:{originalSource:'createCaseStory("2.3-channel-description-added")',...($e=(Ce=c.parameters)==null?void 0:Ce.docs)==null?void 0:$e.source}}};var Ae,Se,je;l.parameters={...l.parameters,docs:{...(Ae=l.parameters)==null?void 0:Ae.docs,source:{originalSource:'createCaseStory("2.4-channel-summary-changed")',...(je=(Se=l.parameters)==null?void 0:Se.docs)==null?void 0:je.source}}};var Pe,qe,Oe;m.parameters={...m.parameters,docs:{...(Pe=m.parameters)==null?void 0:Pe.docs,source:{originalSource:'createCaseStory("2.5-channel-summary-removed")',...(Oe=(qe=m.parameters)==null?void 0:qe.docs)==null?void 0:Oe.source}}};var Ie,Ve,xe;p.parameters={...p.parameters,docs:{...(Ie=p.parameters)==null?void 0:Ie.docs,source:{originalSource:'createCaseStory("2.6-channel-description-moved-to-summary")',...(xe=(Ve=p.parameters)==null?void 0:Ve.docs)==null?void 0:xe.source}}};var Ee,Le,De;d.parameters={...d.parameters,docs:{...(Ee=d.parameters)==null?void 0:Ee.docs,source:{originalSource:'createCaseStory("2.7-channel-summary-moved-to-description")',...(De=(Le=d.parameters)==null?void 0:Le.docs)==null?void 0:De.source}}};var Ne,Ke,Ye;g.parameters={...g.parameters,docs:{...(Ne=g.parameters)==null?void 0:Ne.docs,source:{originalSource:'createCaseStory("3.1-channel-bindings-add-amqp")',...(Ye=(Ke=g.parameters)==null?void 0:Ke.docs)==null?void 0:Ye.source}}};var Re,Fe,Ge;_.parameters={..._.parameters,docs:{...(Re=_.parameters)==null?void 0:Re.docs,source:{originalSource:'createCaseStory("3.2-channel-bindings-remove-kafka")',...(Ge=(Fe=_.parameters)==null?void 0:Fe.docs)==null?void 0:Ge.source}}};var He,we,Be;f.parameters={...f.parameters,docs:{...(He=f.parameters)==null?void 0:He.docs,source:{originalSource:'createCaseStory("3.3-channel-bindings-add-kafka")',...(Be=(we=f.parameters)==null?void 0:we.docs)==null?void 0:Be.source}}};var ze,Je,Qe;h.parameters={...h.parameters,docs:{...(ze=h.parameters)==null?void 0:ze.docs,source:{originalSource:'createCaseStory("3.4-channel-bindings-remove-kafka")',...(Qe=(Je=h.parameters)==null?void 0:Je.docs)==null?void 0:Qe.source}}};var Ue,We,Xe;y.parameters={...y.parameters,docs:{...(Ue=y.parameters)==null?void 0:Ue.docs,source:{originalSource:'createCaseStory("4.1-channel-bindings-kafka-bindingVersion-changed")',...(Xe=(We=y.parameters)==null?void 0:We.docs)==null?void 0:Xe.source}}};var Ze,en,nn;b.parameters={...b.parameters,docs:{...(Ze=b.parameters)==null?void 0:Ze.docs,source:{originalSource:'createCaseStory("4.2-channel-bindings-kafka-bindingVersion-removed")',...(nn=(en=b.parameters)==null?void 0:en.docs)==null?void 0:nn.source}}};var sn,an,tn;v.parameters={...v.parameters,docs:{...(sn=v.parameters)==null?void 0:sn.docs,source:{originalSource:'createCaseStory("4.3-channel-bindings-kafka-bindingVersion-added")',...(tn=(an=v.parameters)==null?void 0:an.docs)==null?void 0:tn.source}}};var rn,on,cn;T.parameters={...T.parameters,docs:{...(rn=T.parameters)==null?void 0:rn.docs,source:{originalSource:'createCaseStory("5.1.1-channel-bindings-kafka-string-to-number")',...(cn=(on=T.parameters)==null?void 0:on.docs)==null?void 0:cn.source}}};var ln,mn,pn;u.parameters={...u.parameters,docs:{...(ln=u.parameters)==null?void 0:ln.docs,source:{originalSource:'createCaseStory("5.1.2-channel-bindings-kafka-number-to-string")',...(pn=(mn=u.parameters)==null?void 0:mn.docs)==null?void 0:pn.source}}};var dn,gn,_n;M.parameters={...M.parameters,docs:{...(dn=M.parameters)==null?void 0:dn.docs,source:{originalSource:'createCaseStory("5.1.3-channel-bindings-kafka-string-to-boolean")',...(_n=(gn=M.parameters)==null?void 0:gn.docs)==null?void 0:_n.source}}};var fn,hn,yn;k.parameters={...k.parameters,docs:{...(fn=k.parameters)==null?void 0:fn.docs,source:{originalSource:'createCaseStory("5.1.4-channel-bindings-kafka-number-to-null")',...(yn=(hn=k.parameters)==null?void 0:hn.docs)==null?void 0:yn.source}}};var bn,vn,Tn;C.parameters={...C.parameters,docs:{...(bn=C.parameters)==null?void 0:bn.docs,source:{originalSource:'createCaseStory("5.1.5-channel-bindings-kafka-boolean-to-string")',...(Tn=(vn=C.parameters)==null?void 0:vn.docs)==null?void 0:Tn.source}}};var un,Mn,kn;$.parameters={...$.parameters,docs:{...(un=$.parameters)==null?void 0:un.docs,source:{originalSource:'createCaseStory("5.1.6-channel-bindings-kafka-null-to-number")',...(kn=(Mn=$.parameters)==null?void 0:Mn.docs)==null?void 0:kn.source}}};var Cn,$n,An;A.parameters={...A.parameters,docs:{...(Cn=A.parameters)==null?void 0:Cn.docs,source:{originalSource:'createCaseStory("5.1.7-channel-bindings-kafka-string-to-array-primitives")',...(An=($n=A.parameters)==null?void 0:$n.docs)==null?void 0:An.source}}};var Sn,jn,Pn;S.parameters={...S.parameters,docs:{...(Sn=S.parameters)==null?void 0:Sn.docs,source:{originalSource:'createCaseStory("5.1.8-channel-bindings-kafka-number-to-array-primitives")',...(Pn=(jn=S.parameters)==null?void 0:jn.docs)==null?void 0:Pn.source}}};var qn,On,In;j.parameters={...j.parameters,docs:{...(qn=j.parameters)==null?void 0:qn.docs,source:{originalSource:'createCaseStory("5.1.9-channel-bindings-kafka-string-to-array-objects")',...(In=(On=j.parameters)==null?void 0:On.docs)==null?void 0:In.source}}};var Vn,xn,En;P.parameters={...P.parameters,docs:{...(Vn=P.parameters)==null?void 0:Vn.docs,source:{originalSource:'createCaseStory("5.1.10-channel-bindings-kafka-number-to-array-objects")',...(En=(xn=P.parameters)==null?void 0:xn.docs)==null?void 0:En.source}}};var Ln,Dn,Nn;q.parameters={...q.parameters,docs:{...(Ln=q.parameters)==null?void 0:Ln.docs,source:{originalSource:'createCaseStory("5.1.11-channel-bindings-kafka-string-to-array-arrays-primitives")',...(Nn=(Dn=q.parameters)==null?void 0:Dn.docs)==null?void 0:Nn.source}}};var Kn,Yn,Rn;O.parameters={...O.parameters,docs:{...(Kn=O.parameters)==null?void 0:Kn.docs,source:{originalSource:'createCaseStory("5.1.12-channel-bindings-kafka-number-to-array-arrays-primitives")',...(Rn=(Yn=O.parameters)==null?void 0:Yn.docs)==null?void 0:Rn.source}}};var Fn,Gn,Hn;I.parameters={...I.parameters,docs:{...(Fn=I.parameters)==null?void 0:Fn.docs,source:{originalSource:'createCaseStory("5.1.13-channel-bindings-kafka-boolean-to-null")',...(Hn=(Gn=I.parameters)==null?void 0:Gn.docs)==null?void 0:Hn.source}}};var wn,Bn,zn;V.parameters={...V.parameters,docs:{...(wn=V.parameters)==null?void 0:wn.docs,source:{originalSource:'createCaseStory("5.1.14-channel-bindings-kafka-boolean-to-array-primitives")',...(zn=(Bn=V.parameters)==null?void 0:Bn.docs)==null?void 0:zn.source}}};var Jn,Qn,Un;x.parameters={...x.parameters,docs:{...(Jn=x.parameters)==null?void 0:Jn.docs,source:{originalSource:'createCaseStory("5.1.15-channel-bindings-kafka-null-to-array-primitives")',...(Un=(Qn=x.parameters)==null?void 0:Qn.docs)==null?void 0:Un.source}}};var Wn,Xn,Zn;E.parameters={...E.parameters,docs:{...(Wn=E.parameters)==null?void 0:Wn.docs,source:{originalSource:'createCaseStory("5.1.16-channel-bindings-kafka-boolean-to-object")',...(Zn=(Xn=E.parameters)==null?void 0:Xn.docs)==null?void 0:Zn.source}}};var es,ns,ss;L.parameters={...L.parameters,docs:{...(es=L.parameters)==null?void 0:es.docs,source:{originalSource:'createCaseStory("5.1.17-channel-bindings-kafka-null-to-object")',...(ss=(ns=L.parameters)==null?void 0:ns.docs)==null?void 0:ss.source}}};var as,ts,rs;D.parameters={...D.parameters,docs:{...(as=D.parameters)==null?void 0:as.docs,source:{originalSource:'createCaseStory("5.1.18-channel-bindings-kafka-array-primitives-to-object")',...(rs=(ts=D.parameters)==null?void 0:ts.docs)==null?void 0:rs.source}}};var os,is,cs;N.parameters={...N.parameters,docs:{...(os=N.parameters)==null?void 0:os.docs,source:{originalSource:'createCaseStory("5.1.19-channel-bindings-kafka-array-objects-to-object")',...(cs=(is=N.parameters)==null?void 0:is.docs)==null?void 0:cs.source}}};var ls,ms,ps;K.parameters={...K.parameters,docs:{...(ls=K.parameters)==null?void 0:ls.docs,source:{originalSource:'createCaseStory("5.1.20-channel-bindings-kafka-array-arrays-primitives-to-object")',...(ps=(ms=K.parameters)==null?void 0:ms.docs)==null?void 0:ps.source}}};var ds,gs,_s;Y.parameters={...Y.parameters,docs:{...(ds=Y.parameters)==null?void 0:ds.docs,source:{originalSource:'createCaseStory("5.1.21-channel-bindings-kafka-remove-object-property")',...(_s=(gs=Y.parameters)==null?void 0:gs.docs)==null?void 0:_s.source}}};var fs,hs,ys;R.parameters={...R.parameters,docs:{...(fs=R.parameters)==null?void 0:fs.docs,source:{originalSource:'createCaseStory("5.1.22-channel-bindings-kafka-add-object-property")',...(ys=(hs=R.parameters)==null?void 0:hs.docs)==null?void 0:ys.source}}};var bs,vs,Ts;F.parameters={...F.parameters,docs:{...(bs=F.parameters)==null?void 0:bs.docs,source:{originalSource:'createCaseStory("6.1-channel-x-second-added")',...(Ts=(vs=F.parameters)==null?void 0:vs.docs)==null?void 0:Ts.source}}};var us,Ms,ks;G.parameters={...G.parameters,docs:{...(us=G.parameters)==null?void 0:us.docs,source:{originalSource:'createCaseStory("6.2-channel-x-second-removed")',...(ks=(Ms=G.parameters)==null?void 0:Ms.docs)==null?void 0:ks.source}}};var Cs,$s,As;H.parameters={...H.parameters,docs:{...(Cs=H.parameters)==null?void 0:Cs.docs,source:{originalSource:'createCaseStory("6.3-channel-x-second-changed")',...(As=($s=H.parameters)==null?void 0:$s.docs)==null?void 0:As.source}}};var Ss,js,Ps;w.parameters={...w.parameters,docs:{...(Ss=w.parameters)==null?void 0:Ss.docs,source:{originalSource:'createCaseStory("6.4-channel-x-first-and-x-second-added")',...(Ps=(js=w.parameters)==null?void 0:js.docs)==null?void 0:Ps.source}}};var qs,Os,Is;B.parameters={...B.parameters,docs:{...(qs=B.parameters)==null?void 0:qs.docs,source:{originalSource:'createCaseStory("6.5-channel-x-first-and-x-second-removed")',...(Is=(Os=B.parameters)==null?void 0:Os.docs)==null?void 0:Is.source}}};var Vs,xs,Es;z.parameters={...z.parameters,docs:{...(Vs=z.parameters)==null?void 0:Vs.docs,source:{originalSource:'createCaseStory("7.1-channel-parameters-added")',...(Es=(xs=z.parameters)==null?void 0:xs.docs)==null?void 0:Es.source}}};var Ls,Ds,Ns;J.parameters={...J.parameters,docs:{...(Ls=J.parameters)==null?void 0:Ls.docs,source:{originalSource:'createCaseStory("7.2-channel-parameters-removed")',...(Ns=(Ds=J.parameters)==null?void 0:Ds.docs)==null?void 0:Ns.source}}};var Ks,Ys,Rs;Q.parameters={...Q.parameters,docs:{...(Ks=Q.parameters)==null?void 0:Ks.docs,source:{originalSource:'createCaseStory("7.3-channel-parameters-firstParam-removed")',...(Rs=(Ys=Q.parameters)==null?void 0:Ys.docs)==null?void 0:Rs.source}}};var Fs,Gs,Hs;U.parameters={...U.parameters,docs:{...(Fs=U.parameters)==null?void 0:Fs.docs,source:{originalSource:'createCaseStory("7.4-channel-parameters-secondParam-added")',...(Hs=(Gs=U.parameters)==null?void 0:Gs.docs)==null?void 0:Hs.source}}};var ws,Bs,zs;W.parameters={...W.parameters,docs:{...(ws=W.parameters)==null?void 0:ws.docs,source:{originalSource:'createCaseStory("7.5-channel-parameters-key-rename")',...(zs=(Bs=W.parameters)==null?void 0:Bs.docs)==null?void 0:zs.source}}};var Js,Qs,Us;X.parameters={...X.parameters,docs:{...(Js=X.parameters)==null?void 0:Js.docs,source:{originalSource:'createCaseStory("7.6-channel-parameters-secondParam-object-to-broken-ref")',...(Us=(Qs=X.parameters)==null?void 0:Qs.docs)==null?void 0:Us.source}}};var Ws,Xs,Zs;Z.parameters={...Z.parameters,docs:{...(Ws=Z.parameters)==null?void 0:Ws.docs,source:{originalSource:'createCaseStory("7.7-channel-parameters-secondParam-broken-ref-to-object")',...(Zs=(Xs=Z.parameters)==null?void 0:Xs.docs)==null?void 0:Zs.source}}};var ea,na,sa;ee.parameters={...ee.parameters,docs:{...(ea=ee.parameters)==null?void 0:ea.docs,source:{originalSource:'createCaseStory("7.8-channel-servers-added")',...(sa=(na=ee.parameters)==null?void 0:na.docs)==null?void 0:sa.source}}};var aa,ta,ra;ne.parameters={...ne.parameters,docs:{...(aa=ne.parameters)==null?void 0:aa.docs,source:{originalSource:'createCaseStory("7.9-channel-servers-removed")',...(ra=(ta=ne.parameters)==null?void 0:ta.docs)==null?void 0:ra.source}}};var oa,ia,ca;se.parameters={...se.parameters,docs:{...(oa=se.parameters)==null?void 0:oa.docs,source:{originalSource:'createCaseStory("7.10-channel-servers-one-item-added")',...(ca=(ia=se.parameters)==null?void 0:ia.docs)==null?void 0:ca.source}}};var la,ma,pa;ae.parameters={...ae.parameters,docs:{...(la=ae.parameters)==null?void 0:la.docs,source:{originalSource:'createCaseStory("7.11-channel-servers-one-item-removed")',...(pa=(ma=ae.parameters)==null?void 0:ma.docs)==null?void 0:pa.source}}};var da,ga,_a;te.parameters={...te.parameters,docs:{...(da=te.parameters)==null?void 0:da.docs,source:{originalSource:'createCaseStory("7.12-channel-servers-ref-changed-to-broken-ref")',...(_a=(ga=te.parameters)==null?void 0:ga.docs)==null?void 0:_a.source}}};var fa,ha,ya;re.parameters={...re.parameters,docs:{...(fa=re.parameters)==null?void 0:fa.docs,source:{originalSource:'createCaseStory("7.13-channel-servers-broken-ref-changed-to-existing-ref")',...(ya=(ha=re.parameters)==null?void 0:ha.docs)==null?void 0:ya.source}}};const Ur=["Case_1_1_channel_title_changed","Case_1_2_channel_title_removed","Case_1_3_channel_title_added","Case_2_1_channel_description_changed","Case_2_2_channel_description_removed","Case_2_3_channel_description_added","Case_2_4_channel_summary_changed","Case_2_5_channel_summary_removed","Case_2_6_channel_description_moved_to_summary","Case_2_7_channel_summary_moved_to_description","Case_3_1_channel_bindings_add_amqp","Case_3_2_channel_bindings_remove_kafka","Case_3_3_channel_bindings_add_kafka","Case_3_4_channel_bindings_remove_kafka","Case_4_1_channel_bindings_kafka_bindingVersion_changed","Case_4_2_channel_bindings_kafka_bindingVersion_removed","Case_4_3_channel_bindings_kafka_bindingVersion_added","Case_5_1_1_channel_bindings_kafka_string_to_number","Case_5_1_2_channel_bindings_kafka_number_to_string","Case_5_1_3_channel_bindings_kafka_string_to_boolean","Case_5_1_4_channel_bindings_kafka_number_to_null","Case_5_1_5_channel_bindings_kafka_boolean_to_string","Case_5_1_6_channel_bindings_kafka_null_to_number","Case_5_1_7_channel_bindings_kafka_string_to_array_primitives","Case_5_1_8_channel_bindings_kafka_number_to_array_primitives","Case_5_1_9_channel_bindings_kafka_string_to_array_objects","Case_5_1_10_channel_bindings_kafka_number_to_array_objects","Case_5_1_11_channel_bindings_kafka_string_to_array_arrays_primitives","Case_5_1_12_channel_bindings_kafka_number_to_array_arrays_primitives","Case_5_1_13_channel_bindings_kafka_boolean_to_null","Case_5_1_14_channel_bindings_kafka_boolean_to_array_primitives","Case_5_1_15_channel_bindings_kafka_null_to_array_primitives","Case_5_1_16_channel_bindings_kafka_boolean_to_object","Case_5_1_17_channel_bindings_kafka_null_to_object","Case_5_1_18_channel_bindings_kafka_array_primitives_to_object","Case_5_1_19_channel_bindings_kafka_array_objects_to_object","Case_5_1_20_channel_bindings_kafka_array_arrays_primitives_to_object","Case_5_1_21_channel_bindings_kafka_remove_object_property","Case_5_1_22_channel_bindings_kafka_add_object_property","Case_6_1_channel_x_second_added","Case_6_2_channel_x_second_removed","Case_6_3_channel_x_second_changed","Case_6_4_channel_x_first_and_x_second_added","Case_6_5_channel_x_first_and_x_second_removed","Case_7_1_channel_parameters_added","Case_7_2_channel_parameters_removed","Case_7_3_channel_parameters_firstParam_removed","Case_7_4_channel_parameters_secondParam_added","Case_7_5_channel_parameters_key_rename","Case_7_6_channel_parameters_secondParam_object_to_broken_ref","Case_7_7_channel_parameters_secondParam_broken_ref_to_object","Case_7_8_channel_servers_added","Case_7_9_channel_servers_removed","Case_7_10_channel_servers_one_item_added","Case_7_11_channel_servers_one_item_removed","Case_7_12_channel_servers_ref_changed_to_broken_ref","Case_7_13_channel_servers_broken_ref_changed_to_existing_ref"];export{a as Case_1_1_channel_title_changed,t as Case_1_2_channel_title_removed,r as Case_1_3_channel_title_added,o as Case_2_1_channel_description_changed,i as Case_2_2_channel_description_removed,c as Case_2_3_channel_description_added,l as Case_2_4_channel_summary_changed,m as Case_2_5_channel_summary_removed,p as Case_2_6_channel_description_moved_to_summary,d as Case_2_7_channel_summary_moved_to_description,g as Case_3_1_channel_bindings_add_amqp,_ as Case_3_2_channel_bindings_remove_kafka,f as Case_3_3_channel_bindings_add_kafka,h as Case_3_4_channel_bindings_remove_kafka,y as Case_4_1_channel_bindings_kafka_bindingVersion_changed,b as Case_4_2_channel_bindings_kafka_bindingVersion_removed,v as Case_4_3_channel_bindings_kafka_bindingVersion_added,P as Case_5_1_10_channel_bindings_kafka_number_to_array_objects,q as Case_5_1_11_channel_bindings_kafka_string_to_array_arrays_primitives,O as Case_5_1_12_channel_bindings_kafka_number_to_array_arrays_primitives,I as Case_5_1_13_channel_bindings_kafka_boolean_to_null,V as Case_5_1_14_channel_bindings_kafka_boolean_to_array_primitives,x as Case_5_1_15_channel_bindings_kafka_null_to_array_primitives,E as Case_5_1_16_channel_bindings_kafka_boolean_to_object,L as Case_5_1_17_channel_bindings_kafka_null_to_object,D as Case_5_1_18_channel_bindings_kafka_array_primitives_to_object,N as Case_5_1_19_channel_bindings_kafka_array_objects_to_object,T as Case_5_1_1_channel_bindings_kafka_string_to_number,K as Case_5_1_20_channel_bindings_kafka_array_arrays_primitives_to_object,Y as Case_5_1_21_channel_bindings_kafka_remove_object_property,R as Case_5_1_22_channel_bindings_kafka_add_object_property,u as Case_5_1_2_channel_bindings_kafka_number_to_string,M as Case_5_1_3_channel_bindings_kafka_string_to_boolean,k as Case_5_1_4_channel_bindings_kafka_number_to_null,C as Case_5_1_5_channel_bindings_kafka_boolean_to_string,$ as Case_5_1_6_channel_bindings_kafka_null_to_number,A as Case_5_1_7_channel_bindings_kafka_string_to_array_primitives,S as Case_5_1_8_channel_bindings_kafka_number_to_array_primitives,j as Case_5_1_9_channel_bindings_kafka_string_to_array_objects,F as Case_6_1_channel_x_second_added,G as Case_6_2_channel_x_second_removed,H as Case_6_3_channel_x_second_changed,w as Case_6_4_channel_x_first_and_x_second_added,B as Case_6_5_channel_x_first_and_x_second_removed,se as Case_7_10_channel_servers_one_item_added,ae as Case_7_11_channel_servers_one_item_removed,te as Case_7_12_channel_servers_ref_changed_to_broken_ref,re as Case_7_13_channel_servers_broken_ref_changed_to_existing_ref,z as Case_7_1_channel_parameters_added,J as Case_7_2_channel_parameters_removed,Q as Case_7_3_channel_parameters_firstParam_removed,U as Case_7_4_channel_parameters_secondParam_added,W as Case_7_5_channel_parameters_key_rename,X as Case_7_6_channel_parameters_secondParam_object_to_broken_ref,Z as Case_7_7_channel_parameters_secondParam_broken_ref_to_object,ee as Case_7_8_channel_servers_added,ne as Case_7_9_channel_servers_removed,Ur as __namedExportsOrder,Qr as default};
