import{j as Z}from"./_commonjs-dynamic-modules-6308e768.js";import{A as Bn}from"./AsyncApiOperationDiffsViewer-04bcbd68.js";import{b as zn,T as Jn,a as Ln}from"./preprocess-442fc617.js";import{c as Qn,p as Un}from"./yaml-source-2575e8ef.js";import"./index-f46741a2.js";import"./GraphPropNodeViewer-74f48742.js";import"./index-415bee12.js";import"./AsyncApiOperationViewer-7981c654.js";import"./GraphQLOperationViewer-a40cc735.js";import"./GraphQLOperationDiffViewer-e155066c.js";import"./js-yaml-71a24e1f.js";const Wn=`asyncapi: 3.0.0
info:
  title: Sample AsyncAPI
  version: 1.0.0
channels:
  testChannel:
    address: events.default
    messages:
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
      title: message title
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
components:
  messages:
    TestMessage:
      name: TestMessage
      payload:
        type: object
        properties:
          id:
            type: string
        required:
          - id
      title: message title
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
components:
  messages:
    TestMessage:
      name: TestMessage
      payload:
        type: object
        properties:
          id:
            type: string
        required:
          - id
      description: message description
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
      description: message description
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
components:
  messages:
    TestMessage:
      name: TestMessage
      payload:
        type: object
        properties:
          id:
            type: string
        required:
          - id
      summary: message summary
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
components:
  messages:
    TestMessage:
      name: TestMessage
      payload:
        type: object
        properties:
          id:
            type: string
        required:
          - id
      summary: message summary
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
components:
  messages:
    TestMessage:
      name: TestMessage
      payload:
        type: object
        properties:
          id:
            type: string
        required:
          - id
      description: message moved value
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
components:
  messages:
    TestMessage:
      name: TestMessage
      payload:
        type: object
        properties:
          id:
            type: string
        required:
          - id
      summary: message moved value
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
components:
  messages:
    TestMessage:
      name: TestMessage
      payload:
        type: object
        properties:
          id:
            type: string
        required:
          - id
      bindings:
        kafka:
          bindingVersion: 1.0.0
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
      bindings:
        kafka:
          bindingVersion: 1.0.0
        amqp:
          bindingVersion: 0.3.0
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
components:
  messages:
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
      bindings:
        kafka:
          bindingVersion: 1.0.0
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
components:
  messages:
    TestMessage:
      name: TestMessage
      payload:
        type: object
        properties:
          id:
            type: string
        required:
          - id
      bindings:
        kafka:
          bindingVersion: 1.0.0
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
components:
  messages:
    TestMessage:
      name: TestMessage
      payload:
        type: object
        properties:
          id:
            type: string
        required:
          - id
      bindings:
        kafka:
          bindingVersion: 1.0.0
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
      bindings:
        kafka: {}
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
      bindings:
        kafka:
          bindingVersion: 1.0.0
          stringValue: hello
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
      bindings:
        kafka:
          bindingVersion: 1.0.0
          numberValue: 7
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
      bindings:
        kafka:
          bindingVersion: 1.0.0
          stringValue: hello
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
components:
  messages:
    TestMessage:
      name: TestMessage
      payload:
        type: object
        properties:
          id:
            type: string
        required:
          - id
      bindings:
        kafka:
          bindingVersion: 1.0.0
          numberValue: 7
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
components:
  messages:
    TestMessage:
      name: TestMessage
      payload:
        type: object
        properties:
          id:
            type: string
        required:
          - id
      bindings:
        kafka:
          bindingVersion: 1.0.0
          booleanValue: true
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
      bindings:
        kafka:
          bindingVersion: 1.0.0
          booleanValue: true
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
components:
  messages:
    TestMessage:
      name: TestMessage
      payload:
        type: object
        properties:
          id:
            type: string
        required:
          - id
      bindings:
        kafka:
          bindingVersion: 1.0.0
          nullValue: null
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
components:
  messages:
    TestMessage:
      name: TestMessage
      payload:
        type: object
        properties:
          id:
            type: string
        required:
          - id
      bindings:
        kafka:
          bindingVersion: 1.0.0
          booleanValue: true
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
      bindings:
        kafka:
          bindingVersion: 1.0.0
          nullValue: null
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
components:
  messages:
    TestMessage:
      name: TestMessage
      payload:
        type: object
        properties:
          id:
            type: string
        required:
          - id
      bindings:
        kafka:
          bindingVersion: 1.0.0
          arrayPrimitives:
            - x
            - 1
            - false
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
      bindings:
        kafka:
          bindingVersion: 1.0.0
          arrayObjects:
            - id: 1
            - id: 2
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
components:
  messages:
    TestMessage:
      name: TestMessage
      payload:
        type: object
        properties:
          id:
            type: string
        required:
          - id
      bindings:
        kafka:
          bindingVersion: 1.0.0
          numberValue: 7
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
components:
  messages:
    TestMessage:
      name: TestMessage
      payload:
        type: object
        properties:
          id:
            type: string
        required:
          - id
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
      bindings:
        kafka:
          bindingVersion: 1.0.0
          objectValue:
            first: one
            second: 2
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
components:
  messages:
    TestMessage:
      name: TestMessage
      payload:
        type: object
        properties:
          id:
            type: string
        required:
          - id
      bindings:
        kafka:
          bindingVersion: 1.0.0
          objectValue:
            first: one
            second: 2
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
components:
  messages:
    TestMessage:
      name: TestMessage
      payload:
        type: object
        properties:
          id:
            type: string
        required:
          - id
      bindings:
        kafka:
          bindingVersion: 1.0.0
          stringValue: hello
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
      bindings:
        kafka:
          bindingVersion: 1.0.0
          numberValue: 7
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
components:
  messages:
    TestMessage:
      name: TestMessage
      payload:
        type: object
        properties:
          id:
            type: string
        required:
          - id
      bindings:
        kafka:
          bindingVersion: 1.0.0
          booleanValue: true
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
components:
  messages:
    TestMessage:
      name: TestMessage
      payload:
        type: object
        properties:
          id:
            type: string
        required:
          - id
      bindings:
        kafka:
          bindingVersion: 1.0.0
          nullValue: null
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
      bindings:
        kafka:
          bindingVersion: 1.0.0
          stringValue: hello
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
components:
  messages:
    TestMessage:
      name: TestMessage
      payload:
        type: object
        properties:
          id:
            type: string
        required:
          - id
      bindings:
        kafka:
          bindingVersion: 1.0.0
          numberValue: 7
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
components:
  messages:
    TestMessage:
      name: TestMessage
      payload:
        type: object
        properties:
          id:
            type: string
        required:
          - id
      bindings:
        kafka:
          bindingVersion: 1.0.0
          stringValue: hello
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
      x-first: first
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
components:
  messages:
    TestMessage:
      name: TestMessage
      payload:
        type: object
        properties:
          id:
            type: string
        required:
          - id
      x-first: first
      x-second: second
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
components:
  messages:
    TestMessage:
      name: TestMessage
      payload:
        type: object
        properties:
          id:
            type: string
        required:
          - id
      x-first: first
      x-second: before
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
components:
  messages:
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
components:
  messages:
    TestMessage:
      name: TestMessage
      payload:
        type: object
        properties:
          id:
            type: string
        required:
          - id
      x-first: first
      x-second: second
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
components:
  messages:
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
components:
  messages:
    TestMessage:
      name: TestMessage
      payload:
        type: object
        properties:
          id:
            type: string
        required:
          - id
      headers:
        type: object
        description: headers object
        properties:
          traceId:
            type: string
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
components:
  messages:
    TestMessage:
      name: TestMessage
      payload:
        type: object
        properties:
          id:
            type: string
        required:
          - id
      headers:
        type: object
        description: before description
        properties:
          traceId:
            type: string
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
components:
  messages:
    TestMessage:
      name: TestMessage
      payload:
        type: string
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
components:
  messages:
    TestMessage:
      name: TestMessage
      payload:
        type: object
        description: payload object
        properties:
          id:
            type: string
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
components:
  messages:
    TestMessage:
      name: TestMessage
      payload:
        type: object
        description: before description
        properties:
          id:
            type: string
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
components:
  messages:
    TestMessage:
      name: TestMessage
      payload:
        type: object
        properties:
          id:
            type: string
        required:
          - id
      title: CHANGED message title
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
components:
  messages:
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
components:
  messages:
    TestMessage:
      name: TestMessage
      payload:
        type: object
        properties:
          id:
            type: string
        required:
          - id
      title: message title
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
components:
  messages:
    TestMessage:
      name: TestMessage
      payload:
        type: object
        properties:
          id:
            type: string
        required:
          - id
      description: CHANGED message description
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
components:
  messages:
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
components:
  messages:
    TestMessage:
      name: TestMessage
      payload:
        type: object
        properties:
          id:
            type: string
        required:
          - id
      description: message description
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
components:
  messages:
    TestMessage:
      name: TestMessage
      payload:
        type: object
        properties:
          id:
            type: string
        required:
          - id
      summary: CHANGED message summary
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
components:
  messages:
    TestMessage:
      name: TestMessage
      payload:
        type: object
        properties:
          id:
            type: string
        required:
          - id
      summary: message moved value
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
components:
  messages:
    TestMessage:
      name: TestMessage
      payload:
        type: object
        properties:
          id:
            type: string
        required:
          - id
      description: message moved value
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
components:
  messages:
    TestMessage:
      name: TestMessage
      payload:
        type: object
        properties:
          id:
            type: string
        required:
          - id
      bindings:
        kafka:
          bindingVersion: 1.0.0
        amqp:
          bindingVersion: 0.3.0
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
components:
  messages:
    TestMessage:
      name: TestMessage
      payload:
        type: object
        properties:
          id:
            type: string
        required:
          - id
      bindings:
        amqp:
          bindingVersion: 0.3.0
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
components:
  messages:
    TestMessage:
      name: TestMessage
      payload:
        type: object
        properties:
          id:
            type: string
        required:
          - id
      bindings:
        kafka:
          bindingVersion: 1.0.0
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
operations:
  sendOperation:
    action: send
    channel:
      $ref: '#/channels/testChannel'
    messages:
      - $ref: '#/components/messages/TestMessage'
components:
  messages:
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
      bindings:
        kafka:
          bindingVersion: 2.0.0
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
      bindings:
        kafka: {}
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
      bindings:
        kafka:
          bindingVersion: 1.0.0
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
operations:
  sendOperation:
    action: send
    channel:
      $ref: '#/channels/testChannel'
    messages:
      - $ref: '#/components/messages/TestMessage'
components:
  messages:
    TestMessage:
      name: TestMessage
      payload:
        type: object
        properties:
          id:
            type: string
        required:
          - id
      bindings:
        kafka:
          bindingVersion: 1.0.0
          stringValue: 1
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
operations:
  sendOperation:
    action: send
    channel:
      $ref: '#/channels/testChannel'
    messages:
      - $ref: '#/components/messages/TestMessage'
components:
  messages:
    TestMessage:
      name: TestMessage
      payload:
        type: object
        properties:
          id:
            type: string
        required:
          - id
      bindings:
        kafka:
          bindingVersion: 1.0.0
          numberValue:
            - a: 1
            - a: 2
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
operations:
  sendOperation:
    action: send
    channel:
      $ref: '#/channels/testChannel'
    messages:
      - $ref: '#/components/messages/TestMessage'
components:
  messages:
    TestMessage:
      name: TestMessage
      payload:
        type: object
        properties:
          id:
            type: string
        required:
          - id
      bindings:
        kafka:
          bindingVersion: 1.0.0
          stringValue:
            - - a
            - - 1
            - - false
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
      bindings:
        kafka:
          bindingVersion: 1.0.0
          numberValue:
            - - a
            - - 1
            - - false
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
operations:
  sendOperation:
    action: send
    channel:
      $ref: '#/channels/testChannel'
    messages:
      - $ref: '#/components/messages/TestMessage'
components:
  messages:
    TestMessage:
      name: TestMessage
      payload:
        type: object
        properties:
          id:
            type: string
        required:
          - id
      bindings:
        kafka:
          bindingVersion: 1.0.0
          booleanValue: null
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
      bindings:
        kafka:
          bindingVersion: 1.0.0
          booleanValue:
            - a
            - 1
            - false
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
operations:
  sendOperation:
    action: send
    channel:
      $ref: '#/channels/testChannel'
    messages:
      - $ref: '#/components/messages/TestMessage'
components:
  messages:
    TestMessage:
      name: TestMessage
      payload:
        type: object
        properties:
          id:
            type: string
        required:
          - id
      bindings:
        kafka:
          bindingVersion: 1.0.0
          nullValue:
            - a
            - 1
            - false
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
      bindings:
        kafka:
          bindingVersion: 1.0.0
          booleanValue:
            changed: true
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
operations:
  sendOperation:
    action: send
    channel:
      $ref: '#/channels/testChannel'
    messages:
      - $ref: '#/components/messages/TestMessage'
components:
  messages:
    TestMessage:
      name: TestMessage
      payload:
        type: object
        properties:
          id:
            type: string
        required:
          - id
      bindings:
        kafka:
          bindingVersion: 1.0.0
          nullValue:
            changed: true
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
operations:
  sendOperation:
    action: send
    channel:
      $ref: '#/channels/testChannel'
    messages:
      - $ref: '#/components/messages/TestMessage'
components:
  messages:
    TestMessage:
      name: TestMessage
      payload:
        type: object
        properties:
          id:
            type: string
        required:
          - id
      bindings:
        kafka:
          bindingVersion: 1.0.0
          arrayPrimitives:
            changed: true
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
operations:
  sendOperation:
    action: send
    channel:
      $ref: '#/channels/testChannel'
    messages:
      - $ref: '#/components/messages/TestMessage'
components:
  messages:
    TestMessage:
      name: TestMessage
      payload:
        type: object
        properties:
          id:
            type: string
        required:
          - id
      bindings:
        kafka:
          bindingVersion: 1.0.0
          arrayObjects:
            changed: true
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
operations:
  sendOperation:
    action: send
    channel:
      $ref: '#/channels/testChannel'
    messages:
      - $ref: '#/components/messages/TestMessage'
components:
  messages:
    TestMessage:
      name: TestMessage
      payload:
        type: object
        properties:
          id:
            type: string
        required:
          - id
      bindings:
        kafka:
          bindingVersion: 1.0.0
          numberValue: hello
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
operations:
  sendOperation:
    action: send
    channel:
      $ref: '#/channels/testChannel'
    messages:
      - $ref: '#/components/messages/TestMessage'
components:
  messages:
    TestMessage:
      name: TestMessage
      payload:
        type: object
        properties:
          id:
            type: string
        required:
          - id
      bindings:
        kafka:
          bindingVersion: 1.0.0
          arrayArrayPrimitives:
            changed: true
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
operations:
  sendOperation:
    action: send
    channel:
      $ref: '#/channels/testChannel'
    messages:
      - $ref: '#/components/messages/TestMessage'
components:
  messages:
    TestMessage:
      name: TestMessage
      payload:
        type: object
        properties:
          id:
            type: string
        required:
          - id
      bindings:
        kafka:
          bindingVersion: 1.0.0
          objectValue:
            first: one
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
      bindings:
        kafka:
          bindingVersion: 1.0.0
          objectValue:
            first: one
            second: 2
            third: added
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
operations:
  sendOperation:
    action: send
    channel:
      $ref: '#/channels/testChannel'
    messages:
      - $ref: '#/components/messages/TestMessage'
components:
  messages:
    TestMessage:
      name: TestMessage
      payload:
        type: object
        properties:
          id:
            type: string
        required:
          - id
      bindings:
        kafka:
          bindingVersion: 1.0.0
          stringValue: true
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
      bindings:
        kafka:
          bindingVersion: 1.0.0
          numberValue: null
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
operations:
  sendOperation:
    action: send
    channel:
      $ref: '#/channels/testChannel'
    messages:
      - $ref: '#/components/messages/TestMessage'
components:
  messages:
    TestMessage:
      name: TestMessage
      payload:
        type: object
        properties:
          id:
            type: string
        required:
          - id
      bindings:
        kafka:
          bindingVersion: 1.0.0
          booleanValue: 'true'
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
operations:
  sendOperation:
    action: send
    channel:
      $ref: '#/channels/testChannel'
    messages:
      - $ref: '#/components/messages/TestMessage'
components:
  messages:
    TestMessage:
      name: TestMessage
      payload:
        type: object
        properties:
          id:
            type: string
        required:
          - id
      bindings:
        kafka:
          bindingVersion: 1.0.0
          nullValue: 5
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
operations:
  sendOperation:
    action: send
    channel:
      $ref: '#/channels/testChannel'
    messages:
      - $ref: '#/components/messages/TestMessage'
components:
  messages:
    TestMessage:
      name: TestMessage
      payload:
        type: object
        properties:
          id:
            type: string
        required:
          - id
      bindings:
        kafka:
          bindingVersion: 1.0.0
          stringValue:
            - a
            - 1
            - false
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
operations:
  sendOperation:
    action: send
    channel:
      $ref: '#/channels/testChannel'
    messages:
      - $ref: '#/components/messages/TestMessage'
components:
  messages:
    TestMessage:
      name: TestMessage
      payload:
        type: object
        properties:
          id:
            type: string
        required:
          - id
      bindings:
        kafka:
          bindingVersion: 1.0.0
          numberValue:
            - a
            - 1
            - false
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
      bindings:
        kafka:
          bindingVersion: 1.0.0
          stringValue:
            - a: 1
            - a: 2
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
      x-first: first
      x-second: second
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
operations:
  sendOperation:
    action: send
    channel:
      $ref: '#/channels/testChannel'
    messages:
      - $ref: '#/components/messages/TestMessage'
components:
  messages:
    TestMessage:
      name: TestMessage
      payload:
        type: object
        properties:
          id:
            type: string
        required:
          - id
      x-first: first
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
operations:
  sendOperation:
    action: send
    channel:
      $ref: '#/channels/testChannel'
    messages:
      - $ref: '#/components/messages/TestMessage'
components:
  messages:
    TestMessage:
      name: TestMessage
      payload:
        type: object
        properties:
          id:
            type: string
        required:
          - id
      x-first: first
      x-second: after
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
      x-first: first
      x-second: second
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
operations:
  sendOperation:
    action: send
    channel:
      $ref: '#/channels/testChannel'
    messages:
      - $ref: '#/components/messages/TestMessage'
components:
  messages:
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
operations:
  sendOperation:
    action: send
    channel:
      $ref: '#/channels/testChannel'
    messages:
      - $ref: '#/components/messages/TestMessage'
components:
  messages:
    TestMessage:
      name: TestMessage
      payload:
        type: object
        properties:
          id:
            type: string
        required:
          - id
      headers:
        type: object
        description: headers object
        properties:
          traceId:
            type: string
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
operations:
  sendOperation:
    action: send
    channel:
      $ref: '#/channels/testChannel'
    messages:
      - $ref: '#/components/messages/TestMessage'
components:
  messages:
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
operations:
  sendOperation:
    action: send
    channel:
      $ref: '#/channels/testChannel'
    messages:
      - $ref: '#/components/messages/TestMessage'
components:
  messages:
    TestMessage:
      name: TestMessage
      payload:
        type: object
        properties:
          id:
            type: string
        required:
          - id
      headers:
        type: object
        description: after description
        properties:
          traceId:
            type: string
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
        description: payload object
        properties:
          id:
            type: string
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
operations:
  sendOperation:
    action: send
    channel:
      $ref: '#/channels/testChannel'
    messages:
      - $ref: '#/components/messages/TestMessage'
components:
  messages:
    TestMessage:
      name: TestMessage
      payload:
        type: string
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
operations:
  sendOperation:
    action: send
    channel:
      $ref: '#/channels/testChannel'
    messages:
      - $ref: '#/components/messages/TestMessage'
components:
  messages:
    TestMessage:
      name: TestMessage
      payload:
        type: object
        description: after description
        properties:
          id:
            type: string
`,Ht=Object.assign({"../../../../samples/async-api-diffs/message/1.1-message-title-changed/before.yaml":Wn,"../../../../samples/async-api-diffs/message/1.2-message-title-removed/before.yaml":Xn,"../../../../samples/async-api-diffs/message/1.3-message-title-added/before.yaml":Zn,"../../../../samples/async-api-diffs/message/2.1-message-description-changed/before.yaml":ea,"../../../../samples/async-api-diffs/message/2.2-message-description-removed/before.yaml":sa,"../../../../samples/async-api-diffs/message/2.3-message-description-added/before.yaml":na,"../../../../samples/async-api-diffs/message/2.4-message-summary-changed/before.yaml":aa,"../../../../samples/async-api-diffs/message/2.5-message-summary-removed/before.yaml":ta,"../../../../samples/async-api-diffs/message/2.6-message-description-moved-to-summary/before.yaml":oa,"../../../../samples/async-api-diffs/message/2.7-message-summary-moved-to-description/before.yaml":ra,"../../../../samples/async-api-diffs/message/3.1-message-bindings-add-amqp/before.yaml":ia,"../../../../samples/async-api-diffs/message/3.2-message-bindings-remove-kafka/before.yaml":ma,"../../../../samples/async-api-diffs/message/3.3-message-bindings-add-kafka/before.yaml":ga,"../../../../samples/async-api-diffs/message/3.4-message-bindings-remove-kafka/before.yaml":ca,"../../../../samples/async-api-diffs/message/4.1-message-bindings-kafka-bindingVersion-changed/before.yaml":da,"../../../../samples/async-api-diffs/message/4.2-message-bindings-kafka-bindingVersion-removed/before.yaml":pa,"../../../../samples/async-api-diffs/message/4.3-message-bindings-kafka-bindingVersion-added/before.yaml":la,"../../../../samples/async-api-diffs/message/5.1.1-message-bindings-kafka-string-to-number/before.yaml":_a,"../../../../samples/async-api-diffs/message/5.1.10-message-bindings-kafka-number-to-array-objects/before.yaml":fa,"../../../../samples/async-api-diffs/message/5.1.11-message-bindings-kafka-string-to-array-arrays-primitives/before.yaml":ya,"../../../../samples/async-api-diffs/message/5.1.12-message-bindings-kafka-number-to-array-arrays-primitives/before.yaml":ba,"../../../../samples/async-api-diffs/message/5.1.13-message-bindings-kafka-boolean-to-null/before.yaml":ha,"../../../../samples/async-api-diffs/message/5.1.14-message-bindings-kafka-boolean-to-array-primitives/before.yaml":ua,"../../../../samples/async-api-diffs/message/5.1.15-message-bindings-kafka-null-to-array-primitives/before.yaml":Ta,"../../../../samples/async-api-diffs/message/5.1.16-message-bindings-kafka-boolean-to-object/before.yaml":Ma,"../../../../samples/async-api-diffs/message/5.1.17-message-bindings-kafka-null-to-object/before.yaml":ka,"../../../../samples/async-api-diffs/message/5.1.18-message-bindings-kafka-array-primitives-to-object/before.yaml":va,"../../../../samples/async-api-diffs/message/5.1.19-message-bindings-kafka-array-objects-to-object/before.yaml":Ca,"../../../../samples/async-api-diffs/message/5.1.2-message-bindings-kafka-number-to-string/before.yaml":$a,"../../../../samples/async-api-diffs/message/5.1.20-message-bindings-kafka-array-arrays-primitives-to-object/before.yaml":Aa,"../../../../samples/async-api-diffs/message/5.1.21-message-bindings-kafka-remove-object-property/before.yaml":Sa,"../../../../samples/async-api-diffs/message/5.1.22-message-bindings-kafka-add-object-property/before.yaml":ja,"../../../../samples/async-api-diffs/message/5.1.3-message-bindings-kafka-string-to-boolean/before.yaml":Va,"../../../../samples/async-api-diffs/message/5.1.4-message-bindings-kafka-number-to-null/before.yaml":Oa,"../../../../samples/async-api-diffs/message/5.1.5-message-bindings-kafka-boolean-to-string/before.yaml":Ia,"../../../../samples/async-api-diffs/message/5.1.6-message-bindings-kafka-null-to-number/before.yaml":Pa,"../../../../samples/async-api-diffs/message/5.1.7-message-bindings-kafka-string-to-array-primitives/before.yaml":qa,"../../../../samples/async-api-diffs/message/5.1.8-message-bindings-kafka-number-to-array-primitives/before.yaml":xa,"../../../../samples/async-api-diffs/message/5.1.9-message-bindings-kafka-string-to-array-objects/before.yaml":Ea,"../../../../samples/async-api-diffs/message/6.1-message-x-second-added/before.yaml":Da,"../../../../samples/async-api-diffs/message/6.2-message-x-second-removed/before.yaml":Ka,"../../../../samples/async-api-diffs/message/6.3-message-x-second-changed/before.yaml":Na,"../../../../samples/async-api-diffs/message/6.4-message-x-first-and-x-second-added/before.yaml":Ya,"../../../../samples/async-api-diffs/message/6.5-message-x-first-and-x-second-removed/before.yaml":Ra,"../../../../samples/async-api-diffs/message/7.1-message-headers-object-schema-added/before.yaml":Fa,"../../../../samples/async-api-diffs/message/7.2-message-headers-object-schema-removed/before.yaml":Ga,"../../../../samples/async-api-diffs/message/7.3-message-headers-description-changed/before.yaml":Ha,"../../../../samples/async-api-diffs/message/7.4-message-payload-object-schema-added/before.yaml":wa,"../../../../samples/async-api-diffs/message/7.5-message-payload-object-schema-removed/before.yaml":Ba,"../../../../samples/async-api-diffs/message/7.6-message-payload-description-changed/before.yaml":za}),wt=Object.assign({"../../../../samples/async-api-diffs/message/1.1-message-title-changed/after.yaml":Ja,"../../../../samples/async-api-diffs/message/1.2-message-title-removed/after.yaml":La,"../../../../samples/async-api-diffs/message/1.3-message-title-added/after.yaml":Qa,"../../../../samples/async-api-diffs/message/2.1-message-description-changed/after.yaml":Ua,"../../../../samples/async-api-diffs/message/2.2-message-description-removed/after.yaml":Wa,"../../../../samples/async-api-diffs/message/2.3-message-description-added/after.yaml":Xa,"../../../../samples/async-api-diffs/message/2.4-message-summary-changed/after.yaml":Za,"../../../../samples/async-api-diffs/message/2.5-message-summary-removed/after.yaml":et,"../../../../samples/async-api-diffs/message/2.6-message-description-moved-to-summary/after.yaml":st,"../../../../samples/async-api-diffs/message/2.7-message-summary-moved-to-description/after.yaml":nt,"../../../../samples/async-api-diffs/message/3.1-message-bindings-add-amqp/after.yaml":at,"../../../../samples/async-api-diffs/message/3.2-message-bindings-remove-kafka/after.yaml":tt,"../../../../samples/async-api-diffs/message/3.3-message-bindings-add-kafka/after.yaml":ot,"../../../../samples/async-api-diffs/message/3.4-message-bindings-remove-kafka/after.yaml":rt,"../../../../samples/async-api-diffs/message/4.1-message-bindings-kafka-bindingVersion-changed/after.yaml":it,"../../../../samples/async-api-diffs/message/4.2-message-bindings-kafka-bindingVersion-removed/after.yaml":mt,"../../../../samples/async-api-diffs/message/4.3-message-bindings-kafka-bindingVersion-added/after.yaml":gt,"../../../../samples/async-api-diffs/message/5.1.1-message-bindings-kafka-string-to-number/after.yaml":ct,"../../../../samples/async-api-diffs/message/5.1.10-message-bindings-kafka-number-to-array-objects/after.yaml":dt,"../../../../samples/async-api-diffs/message/5.1.11-message-bindings-kafka-string-to-array-arrays-primitives/after.yaml":pt,"../../../../samples/async-api-diffs/message/5.1.12-message-bindings-kafka-number-to-array-arrays-primitives/after.yaml":lt,"../../../../samples/async-api-diffs/message/5.1.13-message-bindings-kafka-boolean-to-null/after.yaml":_t,"../../../../samples/async-api-diffs/message/5.1.14-message-bindings-kafka-boolean-to-array-primitives/after.yaml":ft,"../../../../samples/async-api-diffs/message/5.1.15-message-bindings-kafka-null-to-array-primitives/after.yaml":yt,"../../../../samples/async-api-diffs/message/5.1.16-message-bindings-kafka-boolean-to-object/after.yaml":bt,"../../../../samples/async-api-diffs/message/5.1.17-message-bindings-kafka-null-to-object/after.yaml":ht,"../../../../samples/async-api-diffs/message/5.1.18-message-bindings-kafka-array-primitives-to-object/after.yaml":ut,"../../../../samples/async-api-diffs/message/5.1.19-message-bindings-kafka-array-objects-to-object/after.yaml":Tt,"../../../../samples/async-api-diffs/message/5.1.2-message-bindings-kafka-number-to-string/after.yaml":Mt,"../../../../samples/async-api-diffs/message/5.1.20-message-bindings-kafka-array-arrays-primitives-to-object/after.yaml":kt,"../../../../samples/async-api-diffs/message/5.1.21-message-bindings-kafka-remove-object-property/after.yaml":vt,"../../../../samples/async-api-diffs/message/5.1.22-message-bindings-kafka-add-object-property/after.yaml":Ct,"../../../../samples/async-api-diffs/message/5.1.3-message-bindings-kafka-string-to-boolean/after.yaml":$t,"../../../../samples/async-api-diffs/message/5.1.4-message-bindings-kafka-number-to-null/after.yaml":At,"../../../../samples/async-api-diffs/message/5.1.5-message-bindings-kafka-boolean-to-string/after.yaml":St,"../../../../samples/async-api-diffs/message/5.1.6-message-bindings-kafka-null-to-number/after.yaml":jt,"../../../../samples/async-api-diffs/message/5.1.7-message-bindings-kafka-string-to-array-primitives/after.yaml":Vt,"../../../../samples/async-api-diffs/message/5.1.8-message-bindings-kafka-number-to-array-primitives/after.yaml":Ot,"../../../../samples/async-api-diffs/message/5.1.9-message-bindings-kafka-string-to-array-objects/after.yaml":It,"../../../../samples/async-api-diffs/message/6.1-message-x-second-added/after.yaml":Pt,"../../../../samples/async-api-diffs/message/6.2-message-x-second-removed/after.yaml":qt,"../../../../samples/async-api-diffs/message/6.3-message-x-second-changed/after.yaml":xt,"../../../../samples/async-api-diffs/message/6.4-message-x-first-and-x-second-added/after.yaml":Et,"../../../../samples/async-api-diffs/message/6.5-message-x-first-and-x-second-removed/after.yaml":Dt,"../../../../samples/async-api-diffs/message/7.1-message-headers-object-schema-added/after.yaml":Kt,"../../../../samples/async-api-diffs/message/7.2-message-headers-object-schema-removed/after.yaml":Nt,"../../../../samples/async-api-diffs/message/7.3-message-headers-description-changed/after.yaml":Yt,"../../../../samples/async-api-diffs/message/7.4-message-payload-object-schema-added/after.yaml":Rt,"../../../../samples/async-api-diffs/message/7.5-message-payload-object-schema-removed/after.yaml":Ft,"../../../../samples/async-api-diffs/message/7.6-message-payload-description-changed/after.yaml":Gt}),Bt=Qn(Ht,wt),zt=Object.fromEntries(Bt.map(s=>[s.caseId,s])),wn=({caseId:s})=>{const n=zt[s];return n?Z.jsx(Bn,{...Qt(n.beforeYaml,n.afterYaml)}):Z.jsxs("div",{children:["Sample case not found: ",s]})},io={title:"Async API Diffs Suite/Message Samples",component:wn},Jt="sendOperation",Lt="TestMessage",ee=s=>Un(s),Qt=(s,n)=>({devMode:!0,mergedSource:zn({beforeSource:ee(s),afterSource:ee(n)}),operationKeys:{operationKey:Jt,messageKey:Lt},referenceNamePropertyKey:Jn,diffMetaKeys:Ln}),e=s=>({name:s,args:{caseId:s},render:n=>Z.jsx(wn,{caseId:n.caseId})}),a=e("1.1-message-title-changed"),t=e("1.2-message-title-removed"),o=e("1.3-message-title-added"),r=e("2.1-message-description-changed"),i=e("2.2-message-description-removed"),m=e("2.3-message-description-added"),g=e("2.4-message-summary-changed"),c=e("2.5-message-summary-removed"),d=e("2.6-message-description-moved-to-summary"),p=e("2.7-message-summary-moved-to-description"),l=e("3.1-message-bindings-add-amqp"),_=e("3.2-message-bindings-remove-kafka"),f=e("3.3-message-bindings-add-kafka"),y=e("3.4-message-bindings-remove-kafka"),b=e("4.1-message-bindings-kafka-bindingVersion-changed"),h=e("4.2-message-bindings-kafka-bindingVersion-removed"),u=e("4.3-message-bindings-kafka-bindingVersion-added"),T=e("5.1.1-message-bindings-kafka-string-to-number"),M=e("5.1.2-message-bindings-kafka-number-to-string"),k=e("5.1.3-message-bindings-kafka-string-to-boolean"),v=e("5.1.4-message-bindings-kafka-number-to-null"),C=e("5.1.5-message-bindings-kafka-boolean-to-string"),$=e("5.1.6-message-bindings-kafka-null-to-number"),A=e("5.1.7-message-bindings-kafka-string-to-array-primitives"),S=e("5.1.8-message-bindings-kafka-number-to-array-primitives"),j=e("5.1.9-message-bindings-kafka-string-to-array-objects"),V=e("5.1.10-message-bindings-kafka-number-to-array-objects"),O=e("5.1.11-message-bindings-kafka-string-to-array-arrays-primitives"),I=e("5.1.12-message-bindings-kafka-number-to-array-arrays-primitives"),P=e("5.1.13-message-bindings-kafka-boolean-to-null"),q=e("5.1.14-message-bindings-kafka-boolean-to-array-primitives"),x=e("5.1.15-message-bindings-kafka-null-to-array-primitives"),E=e("5.1.16-message-bindings-kafka-boolean-to-object"),D=e("5.1.17-message-bindings-kafka-null-to-object"),K=e("5.1.18-message-bindings-kafka-array-primitives-to-object"),N=e("5.1.19-message-bindings-kafka-array-objects-to-object"),Y=e("5.1.20-message-bindings-kafka-array-arrays-primitives-to-object"),R=e("5.1.21-message-bindings-kafka-remove-object-property"),F=e("5.1.22-message-bindings-kafka-add-object-property"),G=e("6.1-message-x-second-added"),H=e("6.2-message-x-second-removed"),w=e("6.3-message-x-second-changed"),B=e("6.4-message-x-first-and-x-second-added"),z=e("6.5-message-x-first-and-x-second-removed"),J=e("7.1-message-headers-object-schema-added"),L=e("7.2-message-headers-object-schema-removed"),Q=e("7.3-message-headers-description-changed"),U=e("7.4-message-payload-object-schema-added"),W=e("7.5-message-payload-object-schema-removed"),X=e("7.6-message-payload-description-changed");var se,ne,ae;a.parameters={...a.parameters,docs:{...(se=a.parameters)==null?void 0:se.docs,source:{originalSource:'createCaseStory("1.1-message-title-changed")',...(ae=(ne=a.parameters)==null?void 0:ne.docs)==null?void 0:ae.source}}};var te,oe,re;t.parameters={...t.parameters,docs:{...(te=t.parameters)==null?void 0:te.docs,source:{originalSource:'createCaseStory("1.2-message-title-removed")',...(re=(oe=t.parameters)==null?void 0:oe.docs)==null?void 0:re.source}}};var ie,me,ge;o.parameters={...o.parameters,docs:{...(ie=o.parameters)==null?void 0:ie.docs,source:{originalSource:'createCaseStory("1.3-message-title-added")',...(ge=(me=o.parameters)==null?void 0:me.docs)==null?void 0:ge.source}}};var ce,de,pe;r.parameters={...r.parameters,docs:{...(ce=r.parameters)==null?void 0:ce.docs,source:{originalSource:'createCaseStory("2.1-message-description-changed")',...(pe=(de=r.parameters)==null?void 0:de.docs)==null?void 0:pe.source}}};var le,_e,fe;i.parameters={...i.parameters,docs:{...(le=i.parameters)==null?void 0:le.docs,source:{originalSource:'createCaseStory("2.2-message-description-removed")',...(fe=(_e=i.parameters)==null?void 0:_e.docs)==null?void 0:fe.source}}};var ye,be,he;m.parameters={...m.parameters,docs:{...(ye=m.parameters)==null?void 0:ye.docs,source:{originalSource:'createCaseStory("2.3-message-description-added")',...(he=(be=m.parameters)==null?void 0:be.docs)==null?void 0:he.source}}};var ue,Te,Me;g.parameters={...g.parameters,docs:{...(ue=g.parameters)==null?void 0:ue.docs,source:{originalSource:'createCaseStory("2.4-message-summary-changed")',...(Me=(Te=g.parameters)==null?void 0:Te.docs)==null?void 0:Me.source}}};var ke,ve,Ce;c.parameters={...c.parameters,docs:{...(ke=c.parameters)==null?void 0:ke.docs,source:{originalSource:'createCaseStory("2.5-message-summary-removed")',...(Ce=(ve=c.parameters)==null?void 0:ve.docs)==null?void 0:Ce.source}}};var $e,Ae,Se;d.parameters={...d.parameters,docs:{...($e=d.parameters)==null?void 0:$e.docs,source:{originalSource:'createCaseStory("2.6-message-description-moved-to-summary")',...(Se=(Ae=d.parameters)==null?void 0:Ae.docs)==null?void 0:Se.source}}};var je,Ve,Oe;p.parameters={...p.parameters,docs:{...(je=p.parameters)==null?void 0:je.docs,source:{originalSource:'createCaseStory("2.7-message-summary-moved-to-description")',...(Oe=(Ve=p.parameters)==null?void 0:Ve.docs)==null?void 0:Oe.source}}};var Ie,Pe,qe;l.parameters={...l.parameters,docs:{...(Ie=l.parameters)==null?void 0:Ie.docs,source:{originalSource:'createCaseStory("3.1-message-bindings-add-amqp")',...(qe=(Pe=l.parameters)==null?void 0:Pe.docs)==null?void 0:qe.source}}};var xe,Ee,De;_.parameters={..._.parameters,docs:{...(xe=_.parameters)==null?void 0:xe.docs,source:{originalSource:'createCaseStory("3.2-message-bindings-remove-kafka")',...(De=(Ee=_.parameters)==null?void 0:Ee.docs)==null?void 0:De.source}}};var Ke,Ne,Ye;f.parameters={...f.parameters,docs:{...(Ke=f.parameters)==null?void 0:Ke.docs,source:{originalSource:'createCaseStory("3.3-message-bindings-add-kafka")',...(Ye=(Ne=f.parameters)==null?void 0:Ne.docs)==null?void 0:Ye.source}}};var Re,Fe,Ge;y.parameters={...y.parameters,docs:{...(Re=y.parameters)==null?void 0:Re.docs,source:{originalSource:'createCaseStory("3.4-message-bindings-remove-kafka")',...(Ge=(Fe=y.parameters)==null?void 0:Fe.docs)==null?void 0:Ge.source}}};var He,we,Be;b.parameters={...b.parameters,docs:{...(He=b.parameters)==null?void 0:He.docs,source:{originalSource:'createCaseStory("4.1-message-bindings-kafka-bindingVersion-changed")',...(Be=(we=b.parameters)==null?void 0:we.docs)==null?void 0:Be.source}}};var ze,Je,Le;h.parameters={...h.parameters,docs:{...(ze=h.parameters)==null?void 0:ze.docs,source:{originalSource:'createCaseStory("4.2-message-bindings-kafka-bindingVersion-removed")',...(Le=(Je=h.parameters)==null?void 0:Je.docs)==null?void 0:Le.source}}};var Qe,Ue,We;u.parameters={...u.parameters,docs:{...(Qe=u.parameters)==null?void 0:Qe.docs,source:{originalSource:'createCaseStory("4.3-message-bindings-kafka-bindingVersion-added")',...(We=(Ue=u.parameters)==null?void 0:Ue.docs)==null?void 0:We.source}}};var Xe,Ze,es;T.parameters={...T.parameters,docs:{...(Xe=T.parameters)==null?void 0:Xe.docs,source:{originalSource:'createCaseStory("5.1.1-message-bindings-kafka-string-to-number")',...(es=(Ze=T.parameters)==null?void 0:Ze.docs)==null?void 0:es.source}}};var ss,ns,as;M.parameters={...M.parameters,docs:{...(ss=M.parameters)==null?void 0:ss.docs,source:{originalSource:'createCaseStory("5.1.2-message-bindings-kafka-number-to-string")',...(as=(ns=M.parameters)==null?void 0:ns.docs)==null?void 0:as.source}}};var ts,os,rs;k.parameters={...k.parameters,docs:{...(ts=k.parameters)==null?void 0:ts.docs,source:{originalSource:'createCaseStory("5.1.3-message-bindings-kafka-string-to-boolean")',...(rs=(os=k.parameters)==null?void 0:os.docs)==null?void 0:rs.source}}};var is,ms,gs;v.parameters={...v.parameters,docs:{...(is=v.parameters)==null?void 0:is.docs,source:{originalSource:'createCaseStory("5.1.4-message-bindings-kafka-number-to-null")',...(gs=(ms=v.parameters)==null?void 0:ms.docs)==null?void 0:gs.source}}};var cs,ds,ps;C.parameters={...C.parameters,docs:{...(cs=C.parameters)==null?void 0:cs.docs,source:{originalSource:'createCaseStory("5.1.5-message-bindings-kafka-boolean-to-string")',...(ps=(ds=C.parameters)==null?void 0:ds.docs)==null?void 0:ps.source}}};var ls,_s,fs;$.parameters={...$.parameters,docs:{...(ls=$.parameters)==null?void 0:ls.docs,source:{originalSource:'createCaseStory("5.1.6-message-bindings-kafka-null-to-number")',...(fs=(_s=$.parameters)==null?void 0:_s.docs)==null?void 0:fs.source}}};var ys,bs,hs;A.parameters={...A.parameters,docs:{...(ys=A.parameters)==null?void 0:ys.docs,source:{originalSource:'createCaseStory("5.1.7-message-bindings-kafka-string-to-array-primitives")',...(hs=(bs=A.parameters)==null?void 0:bs.docs)==null?void 0:hs.source}}};var us,Ts,Ms;S.parameters={...S.parameters,docs:{...(us=S.parameters)==null?void 0:us.docs,source:{originalSource:'createCaseStory("5.1.8-message-bindings-kafka-number-to-array-primitives")',...(Ms=(Ts=S.parameters)==null?void 0:Ts.docs)==null?void 0:Ms.source}}};var ks,vs,Cs;j.parameters={...j.parameters,docs:{...(ks=j.parameters)==null?void 0:ks.docs,source:{originalSource:'createCaseStory("5.1.9-message-bindings-kafka-string-to-array-objects")',...(Cs=(vs=j.parameters)==null?void 0:vs.docs)==null?void 0:Cs.source}}};var $s,As,Ss;V.parameters={...V.parameters,docs:{...($s=V.parameters)==null?void 0:$s.docs,source:{originalSource:'createCaseStory("5.1.10-message-bindings-kafka-number-to-array-objects")',...(Ss=(As=V.parameters)==null?void 0:As.docs)==null?void 0:Ss.source}}};var js,Vs,Os;O.parameters={...O.parameters,docs:{...(js=O.parameters)==null?void 0:js.docs,source:{originalSource:'createCaseStory("5.1.11-message-bindings-kafka-string-to-array-arrays-primitives")',...(Os=(Vs=O.parameters)==null?void 0:Vs.docs)==null?void 0:Os.source}}};var Is,Ps,qs;I.parameters={...I.parameters,docs:{...(Is=I.parameters)==null?void 0:Is.docs,source:{originalSource:'createCaseStory("5.1.12-message-bindings-kafka-number-to-array-arrays-primitives")',...(qs=(Ps=I.parameters)==null?void 0:Ps.docs)==null?void 0:qs.source}}};var xs,Es,Ds;P.parameters={...P.parameters,docs:{...(xs=P.parameters)==null?void 0:xs.docs,source:{originalSource:'createCaseStory("5.1.13-message-bindings-kafka-boolean-to-null")',...(Ds=(Es=P.parameters)==null?void 0:Es.docs)==null?void 0:Ds.source}}};var Ks,Ns,Ys;q.parameters={...q.parameters,docs:{...(Ks=q.parameters)==null?void 0:Ks.docs,source:{originalSource:'createCaseStory("5.1.14-message-bindings-kafka-boolean-to-array-primitives")',...(Ys=(Ns=q.parameters)==null?void 0:Ns.docs)==null?void 0:Ys.source}}};var Rs,Fs,Gs;x.parameters={...x.parameters,docs:{...(Rs=x.parameters)==null?void 0:Rs.docs,source:{originalSource:'createCaseStory("5.1.15-message-bindings-kafka-null-to-array-primitives")',...(Gs=(Fs=x.parameters)==null?void 0:Fs.docs)==null?void 0:Gs.source}}};var Hs,ws,Bs;E.parameters={...E.parameters,docs:{...(Hs=E.parameters)==null?void 0:Hs.docs,source:{originalSource:'createCaseStory("5.1.16-message-bindings-kafka-boolean-to-object")',...(Bs=(ws=E.parameters)==null?void 0:ws.docs)==null?void 0:Bs.source}}};var zs,Js,Ls;D.parameters={...D.parameters,docs:{...(zs=D.parameters)==null?void 0:zs.docs,source:{originalSource:'createCaseStory("5.1.17-message-bindings-kafka-null-to-object")',...(Ls=(Js=D.parameters)==null?void 0:Js.docs)==null?void 0:Ls.source}}};var Qs,Us,Ws;K.parameters={...K.parameters,docs:{...(Qs=K.parameters)==null?void 0:Qs.docs,source:{originalSource:'createCaseStory("5.1.18-message-bindings-kafka-array-primitives-to-object")',...(Ws=(Us=K.parameters)==null?void 0:Us.docs)==null?void 0:Ws.source}}};var Xs,Zs,en;N.parameters={...N.parameters,docs:{...(Xs=N.parameters)==null?void 0:Xs.docs,source:{originalSource:'createCaseStory("5.1.19-message-bindings-kafka-array-objects-to-object")',...(en=(Zs=N.parameters)==null?void 0:Zs.docs)==null?void 0:en.source}}};var sn,nn,an;Y.parameters={...Y.parameters,docs:{...(sn=Y.parameters)==null?void 0:sn.docs,source:{originalSource:'createCaseStory("5.1.20-message-bindings-kafka-array-arrays-primitives-to-object")',...(an=(nn=Y.parameters)==null?void 0:nn.docs)==null?void 0:an.source}}};var tn,on,rn;R.parameters={...R.parameters,docs:{...(tn=R.parameters)==null?void 0:tn.docs,source:{originalSource:'createCaseStory("5.1.21-message-bindings-kafka-remove-object-property")',...(rn=(on=R.parameters)==null?void 0:on.docs)==null?void 0:rn.source}}};var mn,gn,cn;F.parameters={...F.parameters,docs:{...(mn=F.parameters)==null?void 0:mn.docs,source:{originalSource:'createCaseStory("5.1.22-message-bindings-kafka-add-object-property")',...(cn=(gn=F.parameters)==null?void 0:gn.docs)==null?void 0:cn.source}}};var dn,pn,ln;G.parameters={...G.parameters,docs:{...(dn=G.parameters)==null?void 0:dn.docs,source:{originalSource:'createCaseStory("6.1-message-x-second-added")',...(ln=(pn=G.parameters)==null?void 0:pn.docs)==null?void 0:ln.source}}};var _n,fn,yn;H.parameters={...H.parameters,docs:{...(_n=H.parameters)==null?void 0:_n.docs,source:{originalSource:'createCaseStory("6.2-message-x-second-removed")',...(yn=(fn=H.parameters)==null?void 0:fn.docs)==null?void 0:yn.source}}};var bn,hn,un;w.parameters={...w.parameters,docs:{...(bn=w.parameters)==null?void 0:bn.docs,source:{originalSource:'createCaseStory("6.3-message-x-second-changed")',...(un=(hn=w.parameters)==null?void 0:hn.docs)==null?void 0:un.source}}};var Tn,Mn,kn;B.parameters={...B.parameters,docs:{...(Tn=B.parameters)==null?void 0:Tn.docs,source:{originalSource:'createCaseStory("6.4-message-x-first-and-x-second-added")',...(kn=(Mn=B.parameters)==null?void 0:Mn.docs)==null?void 0:kn.source}}};var vn,Cn,$n;z.parameters={...z.parameters,docs:{...(vn=z.parameters)==null?void 0:vn.docs,source:{originalSource:'createCaseStory("6.5-message-x-first-and-x-second-removed")',...($n=(Cn=z.parameters)==null?void 0:Cn.docs)==null?void 0:$n.source}}};var An,Sn,jn;J.parameters={...J.parameters,docs:{...(An=J.parameters)==null?void 0:An.docs,source:{originalSource:'createCaseStory("7.1-message-headers-object-schema-added")',...(jn=(Sn=J.parameters)==null?void 0:Sn.docs)==null?void 0:jn.source}}};var Vn,On,In;L.parameters={...L.parameters,docs:{...(Vn=L.parameters)==null?void 0:Vn.docs,source:{originalSource:'createCaseStory("7.2-message-headers-object-schema-removed")',...(In=(On=L.parameters)==null?void 0:On.docs)==null?void 0:In.source}}};var Pn,qn,xn;Q.parameters={...Q.parameters,docs:{...(Pn=Q.parameters)==null?void 0:Pn.docs,source:{originalSource:'createCaseStory("7.3-message-headers-description-changed")',...(xn=(qn=Q.parameters)==null?void 0:qn.docs)==null?void 0:xn.source}}};var En,Dn,Kn;U.parameters={...U.parameters,docs:{...(En=U.parameters)==null?void 0:En.docs,source:{originalSource:'createCaseStory("7.4-message-payload-object-schema-added")',...(Kn=(Dn=U.parameters)==null?void 0:Dn.docs)==null?void 0:Kn.source}}};var Nn,Yn,Rn;W.parameters={...W.parameters,docs:{...(Nn=W.parameters)==null?void 0:Nn.docs,source:{originalSource:'createCaseStory("7.5-message-payload-object-schema-removed")',...(Rn=(Yn=W.parameters)==null?void 0:Yn.docs)==null?void 0:Rn.source}}};var Fn,Gn,Hn;X.parameters={...X.parameters,docs:{...(Fn=X.parameters)==null?void 0:Fn.docs,source:{originalSource:'createCaseStory("7.6-message-payload-description-changed")',...(Hn=(Gn=X.parameters)==null?void 0:Gn.docs)==null?void 0:Hn.source}}};const mo=["Case_1_1_message_title_changed","Case_1_2_message_title_removed","Case_1_3_message_title_added","Case_2_1_message_description_changed","Case_2_2_message_description_removed","Case_2_3_message_description_added","Case_2_4_message_summary_changed","Case_2_5_message_summary_removed","Case_2_6_message_description_moved_to_summary","Case_2_7_message_summary_moved_to_description","Case_3_1_message_bindings_add_amqp","Case_3_2_message_bindings_remove_kafka","Case_3_3_message_bindings_add_kafka","Case_3_4_message_bindings_remove_kafka","Case_4_1_message_bindings_kafka_bindingVersion_changed","Case_4_2_message_bindings_kafka_bindingVersion_removed","Case_4_3_message_bindings_kafka_bindingVersion_added","Case_5_1_1_message_bindings_kafka_string_to_number","Case_5_1_2_message_bindings_kafka_number_to_string","Case_5_1_3_message_bindings_kafka_string_to_boolean","Case_5_1_4_message_bindings_kafka_number_to_null","Case_5_1_5_message_bindings_kafka_boolean_to_string","Case_5_1_6_message_bindings_kafka_null_to_number","Case_5_1_7_message_bindings_kafka_string_to_array_primitives","Case_5_1_8_message_bindings_kafka_number_to_array_primitives","Case_5_1_9_message_bindings_kafka_string_to_array_objects","Case_5_1_10_message_bindings_kafka_number_to_array_objects","Case_5_1_11_message_bindings_kafka_string_to_array_arrays_primitives","Case_5_1_12_message_bindings_kafka_number_to_array_arrays_primitives","Case_5_1_13_message_bindings_kafka_boolean_to_null","Case_5_1_14_message_bindings_kafka_boolean_to_array_primitives","Case_5_1_15_message_bindings_kafka_null_to_array_primitives","Case_5_1_16_message_bindings_kafka_boolean_to_object","Case_5_1_17_message_bindings_kafka_null_to_object","Case_5_1_18_message_bindings_kafka_array_primitives_to_object","Case_5_1_19_message_bindings_kafka_array_objects_to_object","Case_5_1_20_message_bindings_kafka_array_arrays_primitives_to_object","Case_5_1_21_message_bindings_kafka_remove_object_property","Case_5_1_22_message_bindings_kafka_add_object_property","Case_6_1_message_x_second_added","Case_6_2_message_x_second_removed","Case_6_3_message_x_second_changed","Case_6_4_message_x_first_and_x_second_added","Case_6_5_message_x_first_and_x_second_removed","Case_7_1_message_headers_object_schema_added","Case_7_2_message_headers_object_schema_removed","Case_7_3_message_headers_description_changed","Case_7_4_message_payload_object_schema_added","Case_7_5_message_payload_object_schema_removed","Case_7_6_message_payload_description_changed"];export{a as Case_1_1_message_title_changed,t as Case_1_2_message_title_removed,o as Case_1_3_message_title_added,r as Case_2_1_message_description_changed,i as Case_2_2_message_description_removed,m as Case_2_3_message_description_added,g as Case_2_4_message_summary_changed,c as Case_2_5_message_summary_removed,d as Case_2_6_message_description_moved_to_summary,p as Case_2_7_message_summary_moved_to_description,l as Case_3_1_message_bindings_add_amqp,_ as Case_3_2_message_bindings_remove_kafka,f as Case_3_3_message_bindings_add_kafka,y as Case_3_4_message_bindings_remove_kafka,b as Case_4_1_message_bindings_kafka_bindingVersion_changed,h as Case_4_2_message_bindings_kafka_bindingVersion_removed,u as Case_4_3_message_bindings_kafka_bindingVersion_added,V as Case_5_1_10_message_bindings_kafka_number_to_array_objects,O as Case_5_1_11_message_bindings_kafka_string_to_array_arrays_primitives,I as Case_5_1_12_message_bindings_kafka_number_to_array_arrays_primitives,P as Case_5_1_13_message_bindings_kafka_boolean_to_null,q as Case_5_1_14_message_bindings_kafka_boolean_to_array_primitives,x as Case_5_1_15_message_bindings_kafka_null_to_array_primitives,E as Case_5_1_16_message_bindings_kafka_boolean_to_object,D as Case_5_1_17_message_bindings_kafka_null_to_object,K as Case_5_1_18_message_bindings_kafka_array_primitives_to_object,N as Case_5_1_19_message_bindings_kafka_array_objects_to_object,T as Case_5_1_1_message_bindings_kafka_string_to_number,Y as Case_5_1_20_message_bindings_kafka_array_arrays_primitives_to_object,R as Case_5_1_21_message_bindings_kafka_remove_object_property,F as Case_5_1_22_message_bindings_kafka_add_object_property,M as Case_5_1_2_message_bindings_kafka_number_to_string,k as Case_5_1_3_message_bindings_kafka_string_to_boolean,v as Case_5_1_4_message_bindings_kafka_number_to_null,C as Case_5_1_5_message_bindings_kafka_boolean_to_string,$ as Case_5_1_6_message_bindings_kafka_null_to_number,A as Case_5_1_7_message_bindings_kafka_string_to_array_primitives,S as Case_5_1_8_message_bindings_kafka_number_to_array_primitives,j as Case_5_1_9_message_bindings_kafka_string_to_array_objects,G as Case_6_1_message_x_second_added,H as Case_6_2_message_x_second_removed,w as Case_6_3_message_x_second_changed,B as Case_6_4_message_x_first_and_x_second_added,z as Case_6_5_message_x_first_and_x_second_removed,J as Case_7_1_message_headers_object_schema_added,L as Case_7_2_message_headers_object_schema_removed,Q as Case_7_3_message_headers_description_changed,U as Case_7_4_message_payload_object_schema_added,W as Case_7_5_message_payload_object_schema_removed,X as Case_7_6_message_payload_description_changed,mo as __namedExportsOrder,io as default};
