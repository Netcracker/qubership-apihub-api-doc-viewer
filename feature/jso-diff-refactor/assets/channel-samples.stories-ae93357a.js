import{j as se}from"./_commonjs-dynamic-modules-6308e768.js";import{A as ta}from"./AsyncApiOperationDiffsViewer-e4c76a3a.js";import{w as ra,u as oa}from"./index-d5b0668c.js";import{b as ia,T as ca,a as la}from"./preprocess-70e89217.js";import{c as da,p as pa}from"./yaml-source-2575e8ef.js";import"./index-f46741a2.js";import"./GraphPropNodeViewer-51972bf4.js";import"./index-415bee12.js";import"./AsyncApiOperationViewer-2fd250d4.js";import"./GraphQLOperationViewer-9f8dfa1a.js";import"./GraphQLOperationDiffViewer-43a6f48c.js";import"./index-442a5f79.js";import"./js-yaml-71a24e1f.js";const ma=`asyncapi: 3.0.0
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
components:
  messages:
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
components:
  messages:
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
components:
  messages:
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
`,st=`asyncapi: 3.0.0
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
`,rt=`asyncapi: 3.0.0
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
`,ot=`asyncapi: 3.0.0
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
`,it=`asyncapi: 3.0.0
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
`,ct=`asyncapi: 3.0.0
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
operations:
  sendOperation:
    action: send
    channel:
      $ref: '#/channels/testChannel'
    messages:
      - $ref: '#/components/messages/TestMessage'
components:
  messages:
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
operations:
  sendOperation:
    action: send
    channel:
      $ref: '#/channels/testChannel'
    messages:
      - $ref: '#/components/messages/TestMessage'
components:
  messages:
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
`,ft=`asyncapi: 3.0.0
info:
  title: Sample AsyncAPI
  version: 1.0.0
channels:
  testChannel:
    address: events.default
    messages:
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
operations:
  sendOperation:
    action: send
    channel:
      $ref: '#/channels/testChannel'
    messages:
      - $ref: '#/components/messages/TestMessage'
components:
  messages:
    TestMessage:
      name: TestMessage
      payload:
        type: object
        properties:
          id:
            type: string
        required:
          - id
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
`,ut=`asyncapi: 3.0.0
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
`,Tt=`asyncapi: 3.0.0
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
`,Mt=`asyncapi: 3.0.0
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
`,kt=`asyncapi: 3.0.0
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
`,Ct=`asyncapi: 3.0.0
info:
  title: Sample AsyncAPI
  version: 1.0.0
channels:
  testChannel:
    address: events.default
    messages:
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
`,$t=`asyncapi: 3.0.0
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
operations:
  sendOperation:
    action: send
    channel:
      $ref: '#/channels/testChannel'
    messages:
      - $ref: '#/components/messages/TestMessage'
components:
  messages:
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
`,tr=`asyncapi: 3.0.0
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
`,rr=`asyncapi: 3.0.0
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
`,or=`asyncapi: 3.0.0
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
`,ir=`asyncapi: 3.0.0
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
operations:
  sendOperation:
    action: send
    channel:
      $ref: '#/channels/testChannel'
    messages:
      - $ref: '#/components/messages/TestMessage'
components:
  messages:
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
`,dr=Object.assign({"../../../../samples/async-api-diffs/channel/1.1-channel-title-changed/before.yaml":ma,"../../../../samples/async-api-diffs/channel/1.2-channel-title-removed/before.yaml":ga,"../../../../samples/async-api-diffs/channel/1.3-channel-title-added/before.yaml":_a,"../../../../samples/async-api-diffs/channel/2.1-channel-description-changed/before.yaml":fa,"../../../../samples/async-api-diffs/channel/2.2-channel-description-removed/before.yaml":ha,"../../../../samples/async-api-diffs/channel/2.3-channel-description-added/before.yaml":ya,"../../../../samples/async-api-diffs/channel/2.4-channel-summary-changed/before.yaml":ba,"../../../../samples/async-api-diffs/channel/2.5-channel-summary-removed/before.yaml":va,"../../../../samples/async-api-diffs/channel/2.6-channel-description-moved-to-summary/before.yaml":ua,"../../../../samples/async-api-diffs/channel/2.7-channel-summary-moved-to-description/before.yaml":Ta,"../../../../samples/async-api-diffs/channel/3.1-channel-bindings-add-amqp/before.yaml":Ma,"../../../../samples/async-api-diffs/channel/3.2-channel-bindings-remove-kafka/before.yaml":ka,"../../../../samples/async-api-diffs/channel/3.3-channel-bindings-add-kafka/before.yaml":Ca,"../../../../samples/async-api-diffs/channel/3.4-channel-bindings-remove-kafka/before.yaml":$a,"../../../../samples/async-api-diffs/channel/4.1-channel-bindings-kafka-bindingVersion-changed/before.yaml":Aa,"../../../../samples/async-api-diffs/channel/4.2-channel-bindings-kafka-bindingVersion-removed/before.yaml":Sa,"../../../../samples/async-api-diffs/channel/4.3-channel-bindings-kafka-bindingVersion-added/before.yaml":ja,"../../../../samples/async-api-diffs/channel/5.1.1-channel-bindings-kafka-string-to-number/before.yaml":Pa,"../../../../samples/async-api-diffs/channel/5.1.10-channel-bindings-kafka-number-to-array-objects/before.yaml":qa,"../../../../samples/async-api-diffs/channel/5.1.11-channel-bindings-kafka-string-to-array-arrays-primitives/before.yaml":Oa,"../../../../samples/async-api-diffs/channel/5.1.12-channel-bindings-kafka-number-to-array-arrays-primitives/before.yaml":Va,"../../../../samples/async-api-diffs/channel/5.1.13-channel-bindings-kafka-boolean-to-null/before.yaml":Ia,"../../../../samples/async-api-diffs/channel/5.1.14-channel-bindings-kafka-boolean-to-array-primitives/before.yaml":xa,"../../../../samples/async-api-diffs/channel/5.1.15-channel-bindings-kafka-null-to-array-primitives/before.yaml":Ea,"../../../../samples/async-api-diffs/channel/5.1.16-channel-bindings-kafka-boolean-to-object/before.yaml":La,"../../../../samples/async-api-diffs/channel/5.1.17-channel-bindings-kafka-null-to-object/before.yaml":Da,"../../../../samples/async-api-diffs/channel/5.1.18-channel-bindings-kafka-array-primitives-to-object/before.yaml":Ka,"../../../../samples/async-api-diffs/channel/5.1.19-channel-bindings-kafka-array-objects-to-object/before.yaml":Na,"../../../../samples/async-api-diffs/channel/5.1.2-channel-bindings-kafka-number-to-string/before.yaml":Ya,"../../../../samples/async-api-diffs/channel/5.1.20-channel-bindings-kafka-array-arrays-primitives-to-object/before.yaml":wa,"../../../../samples/async-api-diffs/channel/5.1.21-channel-bindings-kafka-remove-object-property/before.yaml":Ra,"../../../../samples/async-api-diffs/channel/5.1.22-channel-bindings-kafka-add-object-property/before.yaml":Fa,"../../../../samples/async-api-diffs/channel/5.1.3-channel-bindings-kafka-string-to-boolean/before.yaml":Ga,"../../../../samples/async-api-diffs/channel/5.1.4-channel-bindings-kafka-number-to-null/before.yaml":Ha,"../../../../samples/async-api-diffs/channel/5.1.5-channel-bindings-kafka-boolean-to-string/before.yaml":Ba,"../../../../samples/async-api-diffs/channel/5.1.6-channel-bindings-kafka-null-to-number/before.yaml":za,"../../../../samples/async-api-diffs/channel/5.1.7-channel-bindings-kafka-string-to-array-primitives/before.yaml":Ja,"../../../../samples/async-api-diffs/channel/5.1.8-channel-bindings-kafka-number-to-array-primitives/before.yaml":Qa,"../../../../samples/async-api-diffs/channel/5.1.9-channel-bindings-kafka-string-to-array-objects/before.yaml":Ua,"../../../../samples/async-api-diffs/channel/6.1-channel-x-second-added/before.yaml":Wa,"../../../../samples/async-api-diffs/channel/6.2-channel-x-second-removed/before.yaml":Xa,"../../../../samples/async-api-diffs/channel/6.3-channel-x-second-changed/before.yaml":Za,"../../../../samples/async-api-diffs/channel/6.4-channel-x-first-and-x-second-added/before.yaml":et,"../../../../samples/async-api-diffs/channel/6.5-channel-x-first-and-x-second-removed/before.yaml":nt,"../../../../samples/async-api-diffs/channel/7.1-channel-parameters-added/before.yaml":st,"../../../../samples/async-api-diffs/channel/7.10-channel-servers-one-item-added/before.yaml":at,"../../../../samples/async-api-diffs/channel/7.11-channel-servers-one-item-removed/before.yaml":tt,"../../../../samples/async-api-diffs/channel/7.2-channel-parameters-removed/before.yaml":rt,"../../../../samples/async-api-diffs/channel/7.3-channel-parameters-firstParam-removed/before.yaml":ot,"../../../../samples/async-api-diffs/channel/7.4-channel-parameters-secondParam-added/before.yaml":it,"../../../../samples/async-api-diffs/channel/7.5-channel-parameters-key-rename/before.yaml":ct,"../../../../samples/async-api-diffs/channel/7.8-channel-servers-added/before.yaml":lt,"../../../../samples/async-api-diffs/channel/7.9-channel-servers-removed/before.yaml":dt}),pr=Object.assign({"../../../../samples/async-api-diffs/channel/1.1-channel-title-changed/after.yaml":pt,"../../../../samples/async-api-diffs/channel/1.2-channel-title-removed/after.yaml":mt,"../../../../samples/async-api-diffs/channel/1.3-channel-title-added/after.yaml":gt,"../../../../samples/async-api-diffs/channel/2.1-channel-description-changed/after.yaml":_t,"../../../../samples/async-api-diffs/channel/2.2-channel-description-removed/after.yaml":ft,"../../../../samples/async-api-diffs/channel/2.3-channel-description-added/after.yaml":ht,"../../../../samples/async-api-diffs/channel/2.4-channel-summary-changed/after.yaml":yt,"../../../../samples/async-api-diffs/channel/2.5-channel-summary-removed/after.yaml":bt,"../../../../samples/async-api-diffs/channel/2.6-channel-description-moved-to-summary/after.yaml":vt,"../../../../samples/async-api-diffs/channel/2.7-channel-summary-moved-to-description/after.yaml":ut,"../../../../samples/async-api-diffs/channel/3.1-channel-bindings-add-amqp/after.yaml":Tt,"../../../../samples/async-api-diffs/channel/3.2-channel-bindings-remove-kafka/after.yaml":Mt,"../../../../samples/async-api-diffs/channel/3.3-channel-bindings-add-kafka/after.yaml":kt,"../../../../samples/async-api-diffs/channel/3.4-channel-bindings-remove-kafka/after.yaml":Ct,"../../../../samples/async-api-diffs/channel/4.1-channel-bindings-kafka-bindingVersion-changed/after.yaml":$t,"../../../../samples/async-api-diffs/channel/4.2-channel-bindings-kafka-bindingVersion-removed/after.yaml":At,"../../../../samples/async-api-diffs/channel/4.3-channel-bindings-kafka-bindingVersion-added/after.yaml":St,"../../../../samples/async-api-diffs/channel/5.1.1-channel-bindings-kafka-string-to-number/after.yaml":jt,"../../../../samples/async-api-diffs/channel/5.1.10-channel-bindings-kafka-number-to-array-objects/after.yaml":Pt,"../../../../samples/async-api-diffs/channel/5.1.11-channel-bindings-kafka-string-to-array-arrays-primitives/after.yaml":qt,"../../../../samples/async-api-diffs/channel/5.1.12-channel-bindings-kafka-number-to-array-arrays-primitives/after.yaml":Ot,"../../../../samples/async-api-diffs/channel/5.1.13-channel-bindings-kafka-boolean-to-null/after.yaml":Vt,"../../../../samples/async-api-diffs/channel/5.1.14-channel-bindings-kafka-boolean-to-array-primitives/after.yaml":It,"../../../../samples/async-api-diffs/channel/5.1.15-channel-bindings-kafka-null-to-array-primitives/after.yaml":xt,"../../../../samples/async-api-diffs/channel/5.1.16-channel-bindings-kafka-boolean-to-object/after.yaml":Et,"../../../../samples/async-api-diffs/channel/5.1.17-channel-bindings-kafka-null-to-object/after.yaml":Lt,"../../../../samples/async-api-diffs/channel/5.1.18-channel-bindings-kafka-array-primitives-to-object/after.yaml":Dt,"../../../../samples/async-api-diffs/channel/5.1.19-channel-bindings-kafka-array-objects-to-object/after.yaml":Kt,"../../../../samples/async-api-diffs/channel/5.1.2-channel-bindings-kafka-number-to-string/after.yaml":Nt,"../../../../samples/async-api-diffs/channel/5.1.20-channel-bindings-kafka-array-arrays-primitives-to-object/after.yaml":Yt,"../../../../samples/async-api-diffs/channel/5.1.21-channel-bindings-kafka-remove-object-property/after.yaml":wt,"../../../../samples/async-api-diffs/channel/5.1.22-channel-bindings-kafka-add-object-property/after.yaml":Rt,"../../../../samples/async-api-diffs/channel/5.1.3-channel-bindings-kafka-string-to-boolean/after.yaml":Ft,"../../../../samples/async-api-diffs/channel/5.1.4-channel-bindings-kafka-number-to-null/after.yaml":Gt,"../../../../samples/async-api-diffs/channel/5.1.5-channel-bindings-kafka-boolean-to-string/after.yaml":Ht,"../../../../samples/async-api-diffs/channel/5.1.6-channel-bindings-kafka-null-to-number/after.yaml":Bt,"../../../../samples/async-api-diffs/channel/5.1.7-channel-bindings-kafka-string-to-array-primitives/after.yaml":zt,"../../../../samples/async-api-diffs/channel/5.1.8-channel-bindings-kafka-number-to-array-primitives/after.yaml":Jt,"../../../../samples/async-api-diffs/channel/5.1.9-channel-bindings-kafka-string-to-array-objects/after.yaml":Qt,"../../../../samples/async-api-diffs/channel/6.1-channel-x-second-added/after.yaml":Ut,"../../../../samples/async-api-diffs/channel/6.2-channel-x-second-removed/after.yaml":Wt,"../../../../samples/async-api-diffs/channel/6.3-channel-x-second-changed/after.yaml":Xt,"../../../../samples/async-api-diffs/channel/6.4-channel-x-first-and-x-second-added/after.yaml":Zt,"../../../../samples/async-api-diffs/channel/6.5-channel-x-first-and-x-second-removed/after.yaml":er,"../../../../samples/async-api-diffs/channel/7.1-channel-parameters-added/after.yaml":nr,"../../../../samples/async-api-diffs/channel/7.10-channel-servers-one-item-added/after.yaml":sr,"../../../../samples/async-api-diffs/channel/7.11-channel-servers-one-item-removed/after.yaml":ar,"../../../../samples/async-api-diffs/channel/7.2-channel-parameters-removed/after.yaml":tr,"../../../../samples/async-api-diffs/channel/7.3-channel-parameters-firstParam-removed/after.yaml":rr,"../../../../samples/async-api-diffs/channel/7.4-channel-parameters-secondParam-added/after.yaml":or,"../../../../samples/async-api-diffs/channel/7.5-channel-parameters-key-rename/after.yaml":ir,"../../../../samples/async-api-diffs/channel/7.8-channel-servers-added/after.yaml":cr,"../../../../samples/async-api-diffs/channel/7.9-channel-servers-removed/after.yaml":lr}),mr=da(dr,pr),gr=Object.fromEntries(mr.map(n=>[n.caseId,n])),sa=({caseId:n})=>{const s=gr[n];return s?se.jsx(ta,{...hr(s.beforeYaml,s.afterYaml)}):se.jsxs("div",{children:["Sample case not found: ",n]})},Or={title:"Async API Diffs Suite/Channel Samples",component:sa},_r="sendOperation",fr="TestMessage",ae=n=>pa(n),hr=(n,s)=>({devMode:!0,mergedSource:ia({beforeSource:ae(n),afterSource:ae(s)}),operationKeys:{operationKey:_r,messageKey:fr},referenceNamePropertyKey:ca,diffMetaKeys:la}),e=n=>({name:n,args:{caseId:n},render:s=>se.jsx(sa,{caseId:s.caseId}),play:async({canvasElement:s})=>{const aa=await ra(s).findAllByTestId("message-channel");await oa.click(aa[0])}}),a=e("1.1-channel-title-changed"),t=e("1.2-channel-title-removed"),r=e("1.3-channel-title-added"),o=e("2.1-channel-description-changed"),i=e("2.2-channel-description-removed"),c=e("2.3-channel-description-added"),l=e("2.4-channel-summary-changed"),d=e("2.5-channel-summary-removed"),p=e("2.6-channel-description-moved-to-summary"),m=e("2.7-channel-summary-moved-to-description"),g=e("3.1-channel-bindings-add-amqp"),_=e("3.2-channel-bindings-remove-kafka"),f=e("3.3-channel-bindings-add-kafka"),h=e("3.4-channel-bindings-remove-kafka"),y=e("4.1-channel-bindings-kafka-bindingVersion-changed"),b=e("4.2-channel-bindings-kafka-bindingVersion-removed"),v=e("4.3-channel-bindings-kafka-bindingVersion-added"),u=e("5.1.1-channel-bindings-kafka-string-to-number"),T=e("5.1.2-channel-bindings-kafka-number-to-string"),M=e("5.1.3-channel-bindings-kafka-string-to-boolean"),k=e("5.1.4-channel-bindings-kafka-number-to-null"),C=e("5.1.5-channel-bindings-kafka-boolean-to-string"),$=e("5.1.6-channel-bindings-kafka-null-to-number"),A=e("5.1.7-channel-bindings-kafka-string-to-array-primitives"),S=e("5.1.8-channel-bindings-kafka-number-to-array-primitives"),j=e("5.1.9-channel-bindings-kafka-string-to-array-objects"),P=e("5.1.10-channel-bindings-kafka-number-to-array-objects"),q=e("5.1.11-channel-bindings-kafka-string-to-array-arrays-primitives"),O=e("5.1.12-channel-bindings-kafka-number-to-array-arrays-primitives"),V=e("5.1.13-channel-bindings-kafka-boolean-to-null"),I=e("5.1.14-channel-bindings-kafka-boolean-to-array-primitives"),x=e("5.1.15-channel-bindings-kafka-null-to-array-primitives"),E=e("5.1.16-channel-bindings-kafka-boolean-to-object"),L=e("5.1.17-channel-bindings-kafka-null-to-object"),D=e("5.1.18-channel-bindings-kafka-array-primitives-to-object"),K=e("5.1.19-channel-bindings-kafka-array-objects-to-object"),N=e("5.1.20-channel-bindings-kafka-array-arrays-primitives-to-object"),Y=e("5.1.21-channel-bindings-kafka-remove-object-property"),w=e("5.1.22-channel-bindings-kafka-add-object-property"),R=e("6.1-channel-x-second-added"),F=e("6.2-channel-x-second-removed"),G=e("6.3-channel-x-second-changed"),H=e("6.4-channel-x-first-and-x-second-added"),B=e("6.5-channel-x-first-and-x-second-removed"),z=e("7.1-channel-parameters-added"),J=e("7.2-channel-parameters-removed"),Q=e("7.3-channel-parameters-firstParam-removed"),U=e("7.4-channel-parameters-secondParam-added"),W=e("7.5-channel-parameters-key-rename"),X=e("7.8-channel-servers-added"),Z=e("7.9-channel-servers-removed"),ee=e("7.10-channel-servers-one-item-added"),ne=e("7.11-channel-servers-one-item-removed");var te,re,oe;a.parameters={...a.parameters,docs:{...(te=a.parameters)==null?void 0:te.docs,source:{originalSource:'createCaseStory("1.1-channel-title-changed")',...(oe=(re=a.parameters)==null?void 0:re.docs)==null?void 0:oe.source}}};var ie,ce,le;t.parameters={...t.parameters,docs:{...(ie=t.parameters)==null?void 0:ie.docs,source:{originalSource:'createCaseStory("1.2-channel-title-removed")',...(le=(ce=t.parameters)==null?void 0:ce.docs)==null?void 0:le.source}}};var de,pe,me;r.parameters={...r.parameters,docs:{...(de=r.parameters)==null?void 0:de.docs,source:{originalSource:'createCaseStory("1.3-channel-title-added")',...(me=(pe=r.parameters)==null?void 0:pe.docs)==null?void 0:me.source}}};var ge,_e,fe;o.parameters={...o.parameters,docs:{...(ge=o.parameters)==null?void 0:ge.docs,source:{originalSource:'createCaseStory("2.1-channel-description-changed")',...(fe=(_e=o.parameters)==null?void 0:_e.docs)==null?void 0:fe.source}}};var he,ye,be;i.parameters={...i.parameters,docs:{...(he=i.parameters)==null?void 0:he.docs,source:{originalSource:'createCaseStory("2.2-channel-description-removed")',...(be=(ye=i.parameters)==null?void 0:ye.docs)==null?void 0:be.source}}};var ve,ue,Te;c.parameters={...c.parameters,docs:{...(ve=c.parameters)==null?void 0:ve.docs,source:{originalSource:'createCaseStory("2.3-channel-description-added")',...(Te=(ue=c.parameters)==null?void 0:ue.docs)==null?void 0:Te.source}}};var Me,ke,Ce;l.parameters={...l.parameters,docs:{...(Me=l.parameters)==null?void 0:Me.docs,source:{originalSource:'createCaseStory("2.4-channel-summary-changed")',...(Ce=(ke=l.parameters)==null?void 0:ke.docs)==null?void 0:Ce.source}}};var $e,Ae,Se;d.parameters={...d.parameters,docs:{...($e=d.parameters)==null?void 0:$e.docs,source:{originalSource:'createCaseStory("2.5-channel-summary-removed")',...(Se=(Ae=d.parameters)==null?void 0:Ae.docs)==null?void 0:Se.source}}};var je,Pe,qe;p.parameters={...p.parameters,docs:{...(je=p.parameters)==null?void 0:je.docs,source:{originalSource:'createCaseStory("2.6-channel-description-moved-to-summary")',...(qe=(Pe=p.parameters)==null?void 0:Pe.docs)==null?void 0:qe.source}}};var Oe,Ve,Ie;m.parameters={...m.parameters,docs:{...(Oe=m.parameters)==null?void 0:Oe.docs,source:{originalSource:'createCaseStory("2.7-channel-summary-moved-to-description")',...(Ie=(Ve=m.parameters)==null?void 0:Ve.docs)==null?void 0:Ie.source}}};var xe,Ee,Le;g.parameters={...g.parameters,docs:{...(xe=g.parameters)==null?void 0:xe.docs,source:{originalSource:'createCaseStory("3.1-channel-bindings-add-amqp")',...(Le=(Ee=g.parameters)==null?void 0:Ee.docs)==null?void 0:Le.source}}};var De,Ke,Ne;_.parameters={..._.parameters,docs:{...(De=_.parameters)==null?void 0:De.docs,source:{originalSource:'createCaseStory("3.2-channel-bindings-remove-kafka")',...(Ne=(Ke=_.parameters)==null?void 0:Ke.docs)==null?void 0:Ne.source}}};var Ye,we,Re;f.parameters={...f.parameters,docs:{...(Ye=f.parameters)==null?void 0:Ye.docs,source:{originalSource:'createCaseStory("3.3-channel-bindings-add-kafka")',...(Re=(we=f.parameters)==null?void 0:we.docs)==null?void 0:Re.source}}};var Fe,Ge,He;h.parameters={...h.parameters,docs:{...(Fe=h.parameters)==null?void 0:Fe.docs,source:{originalSource:'createCaseStory("3.4-channel-bindings-remove-kafka")',...(He=(Ge=h.parameters)==null?void 0:Ge.docs)==null?void 0:He.source}}};var Be,ze,Je;y.parameters={...y.parameters,docs:{...(Be=y.parameters)==null?void 0:Be.docs,source:{originalSource:'createCaseStory("4.1-channel-bindings-kafka-bindingVersion-changed")',...(Je=(ze=y.parameters)==null?void 0:ze.docs)==null?void 0:Je.source}}};var Qe,Ue,We;b.parameters={...b.parameters,docs:{...(Qe=b.parameters)==null?void 0:Qe.docs,source:{originalSource:'createCaseStory("4.2-channel-bindings-kafka-bindingVersion-removed")',...(We=(Ue=b.parameters)==null?void 0:Ue.docs)==null?void 0:We.source}}};var Xe,Ze,en;v.parameters={...v.parameters,docs:{...(Xe=v.parameters)==null?void 0:Xe.docs,source:{originalSource:'createCaseStory("4.3-channel-bindings-kafka-bindingVersion-added")',...(en=(Ze=v.parameters)==null?void 0:Ze.docs)==null?void 0:en.source}}};var nn,sn,an;u.parameters={...u.parameters,docs:{...(nn=u.parameters)==null?void 0:nn.docs,source:{originalSource:'createCaseStory("5.1.1-channel-bindings-kafka-string-to-number")',...(an=(sn=u.parameters)==null?void 0:sn.docs)==null?void 0:an.source}}};var tn,rn,on;T.parameters={...T.parameters,docs:{...(tn=T.parameters)==null?void 0:tn.docs,source:{originalSource:'createCaseStory("5.1.2-channel-bindings-kafka-number-to-string")',...(on=(rn=T.parameters)==null?void 0:rn.docs)==null?void 0:on.source}}};var cn,ln,dn;M.parameters={...M.parameters,docs:{...(cn=M.parameters)==null?void 0:cn.docs,source:{originalSource:'createCaseStory("5.1.3-channel-bindings-kafka-string-to-boolean")',...(dn=(ln=M.parameters)==null?void 0:ln.docs)==null?void 0:dn.source}}};var pn,mn,gn;k.parameters={...k.parameters,docs:{...(pn=k.parameters)==null?void 0:pn.docs,source:{originalSource:'createCaseStory("5.1.4-channel-bindings-kafka-number-to-null")',...(gn=(mn=k.parameters)==null?void 0:mn.docs)==null?void 0:gn.source}}};var _n,fn,hn;C.parameters={...C.parameters,docs:{...(_n=C.parameters)==null?void 0:_n.docs,source:{originalSource:'createCaseStory("5.1.5-channel-bindings-kafka-boolean-to-string")',...(hn=(fn=C.parameters)==null?void 0:fn.docs)==null?void 0:hn.source}}};var yn,bn,vn;$.parameters={...$.parameters,docs:{...(yn=$.parameters)==null?void 0:yn.docs,source:{originalSource:'createCaseStory("5.1.6-channel-bindings-kafka-null-to-number")',...(vn=(bn=$.parameters)==null?void 0:bn.docs)==null?void 0:vn.source}}};var un,Tn,Mn;A.parameters={...A.parameters,docs:{...(un=A.parameters)==null?void 0:un.docs,source:{originalSource:'createCaseStory("5.1.7-channel-bindings-kafka-string-to-array-primitives")',...(Mn=(Tn=A.parameters)==null?void 0:Tn.docs)==null?void 0:Mn.source}}};var kn,Cn,$n;S.parameters={...S.parameters,docs:{...(kn=S.parameters)==null?void 0:kn.docs,source:{originalSource:'createCaseStory("5.1.8-channel-bindings-kafka-number-to-array-primitives")',...($n=(Cn=S.parameters)==null?void 0:Cn.docs)==null?void 0:$n.source}}};var An,Sn,jn;j.parameters={...j.parameters,docs:{...(An=j.parameters)==null?void 0:An.docs,source:{originalSource:'createCaseStory("5.1.9-channel-bindings-kafka-string-to-array-objects")',...(jn=(Sn=j.parameters)==null?void 0:Sn.docs)==null?void 0:jn.source}}};var Pn,qn,On;P.parameters={...P.parameters,docs:{...(Pn=P.parameters)==null?void 0:Pn.docs,source:{originalSource:'createCaseStory("5.1.10-channel-bindings-kafka-number-to-array-objects")',...(On=(qn=P.parameters)==null?void 0:qn.docs)==null?void 0:On.source}}};var Vn,In,xn;q.parameters={...q.parameters,docs:{...(Vn=q.parameters)==null?void 0:Vn.docs,source:{originalSource:'createCaseStory("5.1.11-channel-bindings-kafka-string-to-array-arrays-primitives")',...(xn=(In=q.parameters)==null?void 0:In.docs)==null?void 0:xn.source}}};var En,Ln,Dn;O.parameters={...O.parameters,docs:{...(En=O.parameters)==null?void 0:En.docs,source:{originalSource:'createCaseStory("5.1.12-channel-bindings-kafka-number-to-array-arrays-primitives")',...(Dn=(Ln=O.parameters)==null?void 0:Ln.docs)==null?void 0:Dn.source}}};var Kn,Nn,Yn;V.parameters={...V.parameters,docs:{...(Kn=V.parameters)==null?void 0:Kn.docs,source:{originalSource:'createCaseStory("5.1.13-channel-bindings-kafka-boolean-to-null")',...(Yn=(Nn=V.parameters)==null?void 0:Nn.docs)==null?void 0:Yn.source}}};var wn,Rn,Fn;I.parameters={...I.parameters,docs:{...(wn=I.parameters)==null?void 0:wn.docs,source:{originalSource:'createCaseStory("5.1.14-channel-bindings-kafka-boolean-to-array-primitives")',...(Fn=(Rn=I.parameters)==null?void 0:Rn.docs)==null?void 0:Fn.source}}};var Gn,Hn,Bn;x.parameters={...x.parameters,docs:{...(Gn=x.parameters)==null?void 0:Gn.docs,source:{originalSource:'createCaseStory("5.1.15-channel-bindings-kafka-null-to-array-primitives")',...(Bn=(Hn=x.parameters)==null?void 0:Hn.docs)==null?void 0:Bn.source}}};var zn,Jn,Qn;E.parameters={...E.parameters,docs:{...(zn=E.parameters)==null?void 0:zn.docs,source:{originalSource:'createCaseStory("5.1.16-channel-bindings-kafka-boolean-to-object")',...(Qn=(Jn=E.parameters)==null?void 0:Jn.docs)==null?void 0:Qn.source}}};var Un,Wn,Xn;L.parameters={...L.parameters,docs:{...(Un=L.parameters)==null?void 0:Un.docs,source:{originalSource:'createCaseStory("5.1.17-channel-bindings-kafka-null-to-object")',...(Xn=(Wn=L.parameters)==null?void 0:Wn.docs)==null?void 0:Xn.source}}};var Zn,es,ns;D.parameters={...D.parameters,docs:{...(Zn=D.parameters)==null?void 0:Zn.docs,source:{originalSource:'createCaseStory("5.1.18-channel-bindings-kafka-array-primitives-to-object")',...(ns=(es=D.parameters)==null?void 0:es.docs)==null?void 0:ns.source}}};var ss,as,ts;K.parameters={...K.parameters,docs:{...(ss=K.parameters)==null?void 0:ss.docs,source:{originalSource:'createCaseStory("5.1.19-channel-bindings-kafka-array-objects-to-object")',...(ts=(as=K.parameters)==null?void 0:as.docs)==null?void 0:ts.source}}};var rs,os,is;N.parameters={...N.parameters,docs:{...(rs=N.parameters)==null?void 0:rs.docs,source:{originalSource:'createCaseStory("5.1.20-channel-bindings-kafka-array-arrays-primitives-to-object")',...(is=(os=N.parameters)==null?void 0:os.docs)==null?void 0:is.source}}};var cs,ls,ds;Y.parameters={...Y.parameters,docs:{...(cs=Y.parameters)==null?void 0:cs.docs,source:{originalSource:'createCaseStory("5.1.21-channel-bindings-kafka-remove-object-property")',...(ds=(ls=Y.parameters)==null?void 0:ls.docs)==null?void 0:ds.source}}};var ps,ms,gs;w.parameters={...w.parameters,docs:{...(ps=w.parameters)==null?void 0:ps.docs,source:{originalSource:'createCaseStory("5.1.22-channel-bindings-kafka-add-object-property")',...(gs=(ms=w.parameters)==null?void 0:ms.docs)==null?void 0:gs.source}}};var _s,fs,hs;R.parameters={...R.parameters,docs:{...(_s=R.parameters)==null?void 0:_s.docs,source:{originalSource:'createCaseStory("6.1-channel-x-second-added")',...(hs=(fs=R.parameters)==null?void 0:fs.docs)==null?void 0:hs.source}}};var ys,bs,vs;F.parameters={...F.parameters,docs:{...(ys=F.parameters)==null?void 0:ys.docs,source:{originalSource:'createCaseStory("6.2-channel-x-second-removed")',...(vs=(bs=F.parameters)==null?void 0:bs.docs)==null?void 0:vs.source}}};var us,Ts,Ms;G.parameters={...G.parameters,docs:{...(us=G.parameters)==null?void 0:us.docs,source:{originalSource:'createCaseStory("6.3-channel-x-second-changed")',...(Ms=(Ts=G.parameters)==null?void 0:Ts.docs)==null?void 0:Ms.source}}};var ks,Cs,$s;H.parameters={...H.parameters,docs:{...(ks=H.parameters)==null?void 0:ks.docs,source:{originalSource:'createCaseStory("6.4-channel-x-first-and-x-second-added")',...($s=(Cs=H.parameters)==null?void 0:Cs.docs)==null?void 0:$s.source}}};var As,Ss,js;B.parameters={...B.parameters,docs:{...(As=B.parameters)==null?void 0:As.docs,source:{originalSource:'createCaseStory("6.5-channel-x-first-and-x-second-removed")',...(js=(Ss=B.parameters)==null?void 0:Ss.docs)==null?void 0:js.source}}};var Ps,qs,Os;z.parameters={...z.parameters,docs:{...(Ps=z.parameters)==null?void 0:Ps.docs,source:{originalSource:'createCaseStory("7.1-channel-parameters-added")',...(Os=(qs=z.parameters)==null?void 0:qs.docs)==null?void 0:Os.source}}};var Vs,Is,xs;J.parameters={...J.parameters,docs:{...(Vs=J.parameters)==null?void 0:Vs.docs,source:{originalSource:'createCaseStory("7.2-channel-parameters-removed")',...(xs=(Is=J.parameters)==null?void 0:Is.docs)==null?void 0:xs.source}}};var Es,Ls,Ds;Q.parameters={...Q.parameters,docs:{...(Es=Q.parameters)==null?void 0:Es.docs,source:{originalSource:'createCaseStory("7.3-channel-parameters-firstParam-removed")',...(Ds=(Ls=Q.parameters)==null?void 0:Ls.docs)==null?void 0:Ds.source}}};var Ks,Ns,Ys;U.parameters={...U.parameters,docs:{...(Ks=U.parameters)==null?void 0:Ks.docs,source:{originalSource:'createCaseStory("7.4-channel-parameters-secondParam-added")',...(Ys=(Ns=U.parameters)==null?void 0:Ns.docs)==null?void 0:Ys.source}}};var ws,Rs,Fs;W.parameters={...W.parameters,docs:{...(ws=W.parameters)==null?void 0:ws.docs,source:{originalSource:'createCaseStory("7.5-channel-parameters-key-rename")',...(Fs=(Rs=W.parameters)==null?void 0:Rs.docs)==null?void 0:Fs.source}}};var Gs,Hs,Bs;X.parameters={...X.parameters,docs:{...(Gs=X.parameters)==null?void 0:Gs.docs,source:{originalSource:'createCaseStory("7.8-channel-servers-added")',...(Bs=(Hs=X.parameters)==null?void 0:Hs.docs)==null?void 0:Bs.source}}};var zs,Js,Qs;Z.parameters={...Z.parameters,docs:{...(zs=Z.parameters)==null?void 0:zs.docs,source:{originalSource:'createCaseStory("7.9-channel-servers-removed")',...(Qs=(Js=Z.parameters)==null?void 0:Js.docs)==null?void 0:Qs.source}}};var Us,Ws,Xs;ee.parameters={...ee.parameters,docs:{...(Us=ee.parameters)==null?void 0:Us.docs,source:{originalSource:'createCaseStory("7.10-channel-servers-one-item-added")',...(Xs=(Ws=ee.parameters)==null?void 0:Ws.docs)==null?void 0:Xs.source}}};var Zs,ea,na;ne.parameters={...ne.parameters,docs:{...(Zs=ne.parameters)==null?void 0:Zs.docs,source:{originalSource:'createCaseStory("7.11-channel-servers-one-item-removed")',...(na=(ea=ne.parameters)==null?void 0:ea.docs)==null?void 0:na.source}}};const Vr=["Case_1_1_channel_title_changed","Case_1_2_channel_title_removed","Case_1_3_channel_title_added","Case_2_1_channel_description_changed","Case_2_2_channel_description_removed","Case_2_3_channel_description_added","Case_2_4_channel_summary_changed","Case_2_5_channel_summary_removed","Case_2_6_channel_description_moved_to_summary","Case_2_7_channel_summary_moved_to_description","Case_3_1_channel_bindings_add_amqp","Case_3_2_channel_bindings_remove_kafka","Case_3_3_channel_bindings_add_kafka","Case_3_4_channel_bindings_remove_kafka","Case_4_1_channel_bindings_kafka_bindingVersion_changed","Case_4_2_channel_bindings_kafka_bindingVersion_removed","Case_4_3_channel_bindings_kafka_bindingVersion_added","Case_5_1_1_channel_bindings_kafka_string_to_number","Case_5_1_2_channel_bindings_kafka_number_to_string","Case_5_1_3_channel_bindings_kafka_string_to_boolean","Case_5_1_4_channel_bindings_kafka_number_to_null","Case_5_1_5_channel_bindings_kafka_boolean_to_string","Case_5_1_6_channel_bindings_kafka_null_to_number","Case_5_1_7_channel_bindings_kafka_string_to_array_primitives","Case_5_1_8_channel_bindings_kafka_number_to_array_primitives","Case_5_1_9_channel_bindings_kafka_string_to_array_objects","Case_5_1_10_channel_bindings_kafka_number_to_array_objects","Case_5_1_11_channel_bindings_kafka_string_to_array_arrays_primitives","Case_5_1_12_channel_bindings_kafka_number_to_array_arrays_primitives","Case_5_1_13_channel_bindings_kafka_boolean_to_null","Case_5_1_14_channel_bindings_kafka_boolean_to_array_primitives","Case_5_1_15_channel_bindings_kafka_null_to_array_primitives","Case_5_1_16_channel_bindings_kafka_boolean_to_object","Case_5_1_17_channel_bindings_kafka_null_to_object","Case_5_1_18_channel_bindings_kafka_array_primitives_to_object","Case_5_1_19_channel_bindings_kafka_array_objects_to_object","Case_5_1_20_channel_bindings_kafka_array_arrays_primitives_to_object","Case_5_1_21_channel_bindings_kafka_remove_object_property","Case_5_1_22_channel_bindings_kafka_add_object_property","Case_6_1_channel_x_second_added","Case_6_2_channel_x_second_removed","Case_6_3_channel_x_second_changed","Case_6_4_channel_x_first_and_x_second_added","Case_6_5_channel_x_first_and_x_second_removed","Case_7_1_channel_parameters_added","Case_7_2_channel_parameters_removed","Case_7_3_channel_parameters_firstParam_removed","Case_7_4_channel_parameters_secondParam_added","Case_7_5_channel_parameters_key_rename","Case_7_8_channel_servers_added","Case_7_9_channel_servers_removed","Case_7_10_channel_servers_one_item_added","Case_7_11_channel_servers_one_item_removed"];export{a as Case_1_1_channel_title_changed,t as Case_1_2_channel_title_removed,r as Case_1_3_channel_title_added,o as Case_2_1_channel_description_changed,i as Case_2_2_channel_description_removed,c as Case_2_3_channel_description_added,l as Case_2_4_channel_summary_changed,d as Case_2_5_channel_summary_removed,p as Case_2_6_channel_description_moved_to_summary,m as Case_2_7_channel_summary_moved_to_description,g as Case_3_1_channel_bindings_add_amqp,_ as Case_3_2_channel_bindings_remove_kafka,f as Case_3_3_channel_bindings_add_kafka,h as Case_3_4_channel_bindings_remove_kafka,y as Case_4_1_channel_bindings_kafka_bindingVersion_changed,b as Case_4_2_channel_bindings_kafka_bindingVersion_removed,v as Case_4_3_channel_bindings_kafka_bindingVersion_added,P as Case_5_1_10_channel_bindings_kafka_number_to_array_objects,q as Case_5_1_11_channel_bindings_kafka_string_to_array_arrays_primitives,O as Case_5_1_12_channel_bindings_kafka_number_to_array_arrays_primitives,V as Case_5_1_13_channel_bindings_kafka_boolean_to_null,I as Case_5_1_14_channel_bindings_kafka_boolean_to_array_primitives,x as Case_5_1_15_channel_bindings_kafka_null_to_array_primitives,E as Case_5_1_16_channel_bindings_kafka_boolean_to_object,L as Case_5_1_17_channel_bindings_kafka_null_to_object,D as Case_5_1_18_channel_bindings_kafka_array_primitives_to_object,K as Case_5_1_19_channel_bindings_kafka_array_objects_to_object,u as Case_5_1_1_channel_bindings_kafka_string_to_number,N as Case_5_1_20_channel_bindings_kafka_array_arrays_primitives_to_object,Y as Case_5_1_21_channel_bindings_kafka_remove_object_property,w as Case_5_1_22_channel_bindings_kafka_add_object_property,T as Case_5_1_2_channel_bindings_kafka_number_to_string,M as Case_5_1_3_channel_bindings_kafka_string_to_boolean,k as Case_5_1_4_channel_bindings_kafka_number_to_null,C as Case_5_1_5_channel_bindings_kafka_boolean_to_string,$ as Case_5_1_6_channel_bindings_kafka_null_to_number,A as Case_5_1_7_channel_bindings_kafka_string_to_array_primitives,S as Case_5_1_8_channel_bindings_kafka_number_to_array_primitives,j as Case_5_1_9_channel_bindings_kafka_string_to_array_objects,R as Case_6_1_channel_x_second_added,F as Case_6_2_channel_x_second_removed,G as Case_6_3_channel_x_second_changed,H as Case_6_4_channel_x_first_and_x_second_added,B as Case_6_5_channel_x_first_and_x_second_removed,ee as Case_7_10_channel_servers_one_item_added,ne as Case_7_11_channel_servers_one_item_removed,z as Case_7_1_channel_parameters_added,J as Case_7_2_channel_parameters_removed,Q as Case_7_3_channel_parameters_firstParam_removed,U as Case_7_4_channel_parameters_secondParam_added,W as Case_7_5_channel_parameters_key_rename,X as Case_7_8_channel_servers_added,Z as Case_7_9_channel_servers_removed,Vr as __namedExportsOrder,Or as default};
