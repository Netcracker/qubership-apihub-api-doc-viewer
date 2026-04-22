import{j as Y}from"./_commonjs-dynamic-modules-6308e768.js";import{A as En}from"./AsyncApiOperationDiffsViewer-745e651d.js";import{b as Kn,T as Yn,a as Rn}from"./preprocess-442fc617.js";import{c as Dn,p as Fn}from"./yaml-source-2575e8ef.js";import"./index-f46741a2.js";import"./GraphPropNodeViewer-74f48742.js";import"./index-415bee12.js";import"./AsyncApiOperationViewer-9ff67c36.js";import"./GraphQLOperationViewer-a40cc735.js";import"./GraphQLOperationDiffViewer-e155066c.js";import"./js-yaml-71a24e1f.js";const Nn=`asyncapi: 3.0.0
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
    host: broker-1.example.com:5672
    protocol: amqp
  server2:
    host: broker-2.example.com:9092
    protocol: kafka
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
    servers:
      - $ref: '#/servers/server0'
      - $ref: '#/servers/server1'
      - $ref: '#/servers/server2'
      - $ref: '#/servers/server3'
operations:
  sendOperation:
    action: send
    channel:
      $ref: '#/channels/testChannel'
    messages:
      - $ref: '#/components/messages/TestMessage'
components:
  messages:
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
    description: remove me
  server2:
    host: broker-2.example.com:9092
    protocol: kafka
    description: before description
  server3:
    host: broker-3.example.com:9092
    protocol: kafka
    description: to summary
`,wn=`asyncapi: 3.0.0
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
      - $ref: '#/servers/server3'
operations:
  sendOperation:
    action: send
    channel:
      $ref: '#/channels/testChannel'
    messages:
      - $ref: '#/components/messages/TestMessage'
components:
  messages:
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
    summary: remove me
  server2:
    host: broker-2.example.com:9092
    protocol: kafka
    summary: before summary
  server3:
    host: broker-3.example.com:9092
    protocol: kafka
    summary: to description
`,Bn=`asyncapi: 3.0.0
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
operations:
  sendOperation:
    action: send
    channel:
      $ref: '#/channels/testChannel'
    messages:
      - $ref: '#/components/messages/TestMessage'
components:
  messages:
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
    bindings:
      kafka:
        bindingVersion: 1.0.0
`,Gn=`asyncapi: 3.0.0
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
operations:
  sendOperation:
    action: send
    channel:
      $ref: '#/channels/testChannel'
    messages:
      - $ref: '#/components/messages/TestMessage'
components:
  messages:
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
    bindings:
      kafka:
        bindingVersion: 1.0.0
      amqp:
        bindingVersion: 0.3.0
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
components:
  messages:
    TestMessage:
      name: TestMessage
      payload:
        type: object
        properties:
          id:
            type: string
        required:
          - id
`,Hn=`asyncapi: 3.0.0
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
operations:
  sendOperation:
    action: send
    channel:
      $ref: '#/channels/testChannel'
    messages:
      - $ref: '#/components/messages/TestMessage'
components:
  messages:
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
    bindings:
      kafka:
        bindingVersion: 1.0.0
`,Jn=`asyncapi: 3.0.0
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
operations:
  sendOperation:
    action: send
    channel:
      $ref: '#/channels/testChannel'
    messages:
      - $ref: '#/components/messages/TestMessage'
components:
  messages:
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
    bindings:
      kafka:
        bindingVersion: 1.0.0
`,Ln=`asyncapi: 3.0.0
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
operations:
  sendOperation:
    action: send
    channel:
      $ref: '#/channels/testChannel'
    messages:
      - $ref: '#/components/messages/TestMessage'
components:
  messages:
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
    bindings:
      kafka:
        bindingVersion: 1.0.0
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
    servers:
      - $ref: '#/servers/server0'
operations:
  sendOperation:
    action: send
    channel:
      $ref: '#/channels/testChannel'
    messages:
      - $ref: '#/components/messages/TestMessage'
components:
  messages:
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
    bindings:
      kafka: {}
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
    servers:
      - $ref: '#/servers/server0'
operations:
  sendOperation:
    action: send
    channel:
      $ref: '#/channels/testChannel'
    messages:
      - $ref: '#/components/messages/TestMessage'
components:
  messages:
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
    bindings:
      kafka:
        bindingVersion: 1.0.0
        stringValue: hello
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
    servers:
      - $ref: '#/servers/server0'
operations:
  sendOperation:
    action: send
    channel:
      $ref: '#/channels/testChannel'
    messages:
      - $ref: '#/components/messages/TestMessage'
components:
  messages:
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
    bindings:
      kafka:
        bindingVersion: 1.0.0
        numberValue: 7
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
    servers:
      - $ref: '#/servers/server0'
operations:
  sendOperation:
    action: send
    channel:
      $ref: '#/channels/testChannel'
    messages:
      - $ref: '#/components/messages/TestMessage'
components:
  messages:
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
    bindings:
      kafka:
        bindingVersion: 1.0.0
        stringValue: hello
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
    servers:
      - $ref: '#/servers/server0'
operations:
  sendOperation:
    action: send
    channel:
      $ref: '#/channels/testChannel'
    messages:
      - $ref: '#/components/messages/TestMessage'
components:
  messages:
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
    bindings:
      kafka:
        bindingVersion: 1.0.0
        numberValue: 7
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
    servers:
      - $ref: '#/servers/server0'
operations:
  sendOperation:
    action: send
    channel:
      $ref: '#/channels/testChannel'
    messages:
      - $ref: '#/components/messages/TestMessage'
components:
  messages:
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
    bindings:
      kafka:
        bindingVersion: 1.0.0
        booleanValue: true
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
    servers:
      - $ref: '#/servers/server0'
operations:
  sendOperation:
    action: send
    channel:
      $ref: '#/channels/testChannel'
    messages:
      - $ref: '#/components/messages/TestMessage'
components:
  messages:
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
    bindings:
      kafka:
        bindingVersion: 1.0.0
        booleanValue: true
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
    servers:
      - $ref: '#/servers/server0'
operations:
  sendOperation:
    action: send
    channel:
      $ref: '#/channels/testChannel'
    messages:
      - $ref: '#/components/messages/TestMessage'
components:
  messages:
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
    bindings:
      kafka:
        bindingVersion: 1.0.0
        nullValue: null
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
    servers:
      - $ref: '#/servers/server0'
operations:
  sendOperation:
    action: send
    channel:
      $ref: '#/channels/testChannel'
    messages:
      - $ref: '#/components/messages/TestMessage'
components:
  messages:
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
    bindings:
      kafka:
        bindingVersion: 1.0.0
        booleanValue: true
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
    servers:
      - $ref: '#/servers/server0'
operations:
  sendOperation:
    action: send
    channel:
      $ref: '#/channels/testChannel'
    messages:
      - $ref: '#/components/messages/TestMessage'
components:
  messages:
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
    bindings:
      kafka:
        bindingVersion: 1.0.0
        nullValue: null
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
    servers:
      - $ref: '#/servers/server0'
operations:
  sendOperation:
    action: send
    channel:
      $ref: '#/channels/testChannel'
    messages:
      - $ref: '#/components/messages/TestMessage'
components:
  messages:
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
    bindings:
      kafka:
        bindingVersion: 1.0.0
        arrayPrimitives:
          - x
          - 1
          - false
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
    servers:
      - $ref: '#/servers/server0'
operations:
  sendOperation:
    action: send
    channel:
      $ref: '#/channels/testChannel'
    messages:
      - $ref: '#/components/messages/TestMessage'
components:
  messages:
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
    bindings:
      kafka:
        bindingVersion: 1.0.0
        arrayObjects:
          - id: 1
          - id: 2
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
    servers:
      - $ref: '#/servers/server0'
operations:
  sendOperation:
    action: send
    channel:
      $ref: '#/channels/testChannel'
    messages:
      - $ref: '#/components/messages/TestMessage'
components:
  messages:
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
    bindings:
      kafka:
        bindingVersion: 1.0.0
        numberValue: 7
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
    servers:
      - $ref: '#/servers/server0'
operations:
  sendOperation:
    action: send
    channel:
      $ref: '#/channels/testChannel'
    messages:
      - $ref: '#/components/messages/TestMessage'
components:
  messages:
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
    servers:
      - $ref: '#/servers/server0'
operations:
  sendOperation:
    action: send
    channel:
      $ref: '#/channels/testChannel'
    messages:
      - $ref: '#/components/messages/TestMessage'
components:
  messages:
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
    bindings:
      kafka:
        bindingVersion: 1.0.0
        objectValue:
          first: one
          second: 2
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
    servers:
      - $ref: '#/servers/server0'
operations:
  sendOperation:
    action: send
    channel:
      $ref: '#/channels/testChannel'
    messages:
      - $ref: '#/components/messages/TestMessage'
components:
  messages:
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
    bindings:
      kafka:
        bindingVersion: 1.0.0
        objectValue:
          first: one
          second: 2
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
    servers:
      - $ref: '#/servers/server0'
operations:
  sendOperation:
    action: send
    channel:
      $ref: '#/channels/testChannel'
    messages:
      - $ref: '#/components/messages/TestMessage'
components:
  messages:
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
    bindings:
      kafka:
        bindingVersion: 1.0.0
        stringValue: hello
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
    servers:
      - $ref: '#/servers/server0'
operations:
  sendOperation:
    action: send
    channel:
      $ref: '#/channels/testChannel'
    messages:
      - $ref: '#/components/messages/TestMessage'
components:
  messages:
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
    bindings:
      kafka:
        bindingVersion: 1.0.0
        numberValue: 7
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
    servers:
      - $ref: '#/servers/server0'
operations:
  sendOperation:
    action: send
    channel:
      $ref: '#/channels/testChannel'
    messages:
      - $ref: '#/components/messages/TestMessage'
components:
  messages:
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
    bindings:
      kafka:
        bindingVersion: 1.0.0
        booleanValue: true
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
    servers:
      - $ref: '#/servers/server0'
operations:
  sendOperation:
    action: send
    channel:
      $ref: '#/channels/testChannel'
    messages:
      - $ref: '#/components/messages/TestMessage'
components:
  messages:
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
    bindings:
      kafka:
        bindingVersion: 1.0.0
        nullValue: null
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
    servers:
      - $ref: '#/servers/server0'
operations:
  sendOperation:
    action: send
    channel:
      $ref: '#/channels/testChannel'
    messages:
      - $ref: '#/components/messages/TestMessage'
components:
  messages:
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
    bindings:
      kafka:
        bindingVersion: 1.0.0
        stringValue: hello
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
    servers:
      - $ref: '#/servers/server0'
operations:
  sendOperation:
    action: send
    channel:
      $ref: '#/channels/testChannel'
    messages:
      - $ref: '#/components/messages/TestMessage'
components:
  messages:
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
    bindings:
      kafka:
        bindingVersion: 1.0.0
        numberValue: 7
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
    servers:
      - $ref: '#/servers/server0'
operations:
  sendOperation:
    action: send
    channel:
      $ref: '#/channels/testChannel'
    messages:
      - $ref: '#/components/messages/TestMessage'
components:
  messages:
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
    bindings:
      kafka:
        bindingVersion: 1.0.0
        stringValue: hello
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
    description: Main Kafka broker
  server1:
    host: broker-1.example.com:5672
    protocol: amqp
    description: Secondary AMQP broker
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
    servers:
      - $ref: '#/servers/server0'
operations:
  sendOperation:
    action: send
    channel:
      $ref: '#/channels/testChannel'
    messages:
      - $ref: '#/components/messages/TestMessage'
components:
  messages:
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
    description: Main Kafka broker
  server1:
    host: broker-1.example.com:5672
    protocol: amqp
    description: Secondary AMQP broker
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
    host: changed-0.example.com:9092
    protocol: kafka
  server1:
    host: broker-1.example.com:5672
    protocol: mqtt
  server2:
    host: changed-2.example.com:443
    protocol: https
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
    servers:
      - $ref: '#/servers/server0'
      - $ref: '#/servers/server1'
      - $ref: '#/servers/server2'
      - $ref: '#/servers/server3'
operations:
  sendOperation:
    action: send
    channel:
      $ref: '#/channels/testChannel'
    messages:
      - $ref: '#/components/messages/TestMessage'
components:
  messages:
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
    description: added description
  server1:
    host: broker-1.example.com:9092
    protocol: kafka
  server2:
    host: broker-2.example.com:9092
    protocol: kafka
    description: after description
  server3:
    host: broker-3.example.com:9092
    protocol: kafka
    summary: to summary
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
    servers:
      - $ref: '#/servers/server0'
      - $ref: '#/servers/server1'
      - $ref: '#/servers/server2'
      - $ref: '#/servers/server3'
operations:
  sendOperation:
    action: send
    channel:
      $ref: '#/channels/testChannel'
    messages:
      - $ref: '#/components/messages/TestMessage'
components:
  messages:
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
    summary: added summary
  server1:
    host: broker-1.example.com:9092
    protocol: kafka
  server2:
    host: broker-2.example.com:9092
    protocol: kafka
    summary: after summary
  server3:
    host: broker-3.example.com:9092
    protocol: kafka
    description: to description
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
    servers:
      - $ref: '#/servers/server0'
operations:
  sendOperation:
    action: send
    channel:
      $ref: '#/channels/testChannel'
    messages:
      - $ref: '#/components/messages/TestMessage'
components:
  messages:
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
    bindings:
      kafka:
        bindingVersion: 1.0.0
      amqp:
        bindingVersion: 0.3.0
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
    servers:
      - $ref: '#/servers/server0'
operations:
  sendOperation:
    action: send
    channel:
      $ref: '#/channels/testChannel'
    messages:
      - $ref: '#/components/messages/TestMessage'
components:
  messages:
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
    bindings:
      amqp:
        bindingVersion: 0.3.0
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
    servers:
      - $ref: '#/servers/server0'
operations:
  sendOperation:
    action: send
    channel:
      $ref: '#/channels/testChannel'
    messages:
      - $ref: '#/components/messages/TestMessage'
components:
  messages:
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
    bindings:
      kafka:
        bindingVersion: 1.0.0
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
components:
  messages:
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
    servers:
      - $ref: '#/servers/server0'
operations:
  sendOperation:
    action: send
    channel:
      $ref: '#/channels/testChannel'
    messages:
      - $ref: '#/components/messages/TestMessage'
components:
  messages:
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
    bindings:
      kafka:
        bindingVersion: 2.0.0
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
    servers:
      - $ref: '#/servers/server0'
operations:
  sendOperation:
    action: send
    channel:
      $ref: '#/channels/testChannel'
    messages:
      - $ref: '#/components/messages/TestMessage'
components:
  messages:
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
    bindings:
      kafka: {}
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
    servers:
      - $ref: '#/servers/server0'
operations:
  sendOperation:
    action: send
    channel:
      $ref: '#/channels/testChannel'
    messages:
      - $ref: '#/components/messages/TestMessage'
components:
  messages:
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
    bindings:
      kafka:
        bindingVersion: 1.0.0
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
    servers:
      - $ref: '#/servers/server0'
operations:
  sendOperation:
    action: send
    channel:
      $ref: '#/channels/testChannel'
    messages:
      - $ref: '#/components/messages/TestMessage'
components:
  messages:
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
    bindings:
      kafka:
        bindingVersion: 1.0.0
        stringValue: 1
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
    servers:
      - $ref: '#/servers/server0'
operations:
  sendOperation:
    action: send
    channel:
      $ref: '#/channels/testChannel'
    messages:
      - $ref: '#/components/messages/TestMessage'
components:
  messages:
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
    bindings:
      kafka:
        bindingVersion: 1.0.0
        numberValue:
          - a: 1
          - a: 2
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
    servers:
      - $ref: '#/servers/server0'
operations:
  sendOperation:
    action: send
    channel:
      $ref: '#/channels/testChannel'
    messages:
      - $ref: '#/components/messages/TestMessage'
components:
  messages:
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
    bindings:
      kafka:
        bindingVersion: 1.0.0
        stringValue:
          - - a
          - - 1
          - - false
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
    servers:
      - $ref: '#/servers/server0'
operations:
  sendOperation:
    action: send
    channel:
      $ref: '#/channels/testChannel'
    messages:
      - $ref: '#/components/messages/TestMessage'
components:
  messages:
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
    bindings:
      kafka:
        bindingVersion: 1.0.0
        numberValue:
          - - a
          - - 1
          - - false
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
    servers:
      - $ref: '#/servers/server0'
operations:
  sendOperation:
    action: send
    channel:
      $ref: '#/channels/testChannel'
    messages:
      - $ref: '#/components/messages/TestMessage'
components:
  messages:
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
    bindings:
      kafka:
        bindingVersion: 1.0.0
        booleanValue: null
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
    servers:
      - $ref: '#/servers/server0'
operations:
  sendOperation:
    action: send
    channel:
      $ref: '#/channels/testChannel'
    messages:
      - $ref: '#/components/messages/TestMessage'
components:
  messages:
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
    bindings:
      kafka:
        bindingVersion: 1.0.0
        booleanValue:
          - a
          - 1
          - false
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
    servers:
      - $ref: '#/servers/server0'
operations:
  sendOperation:
    action: send
    channel:
      $ref: '#/channels/testChannel'
    messages:
      - $ref: '#/components/messages/TestMessage'
components:
  messages:
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
    bindings:
      kafka:
        bindingVersion: 1.0.0
        nullValue:
          - a
          - 1
          - false
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
    servers:
      - $ref: '#/servers/server0'
operations:
  sendOperation:
    action: send
    channel:
      $ref: '#/channels/testChannel'
    messages:
      - $ref: '#/components/messages/TestMessage'
components:
  messages:
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
    bindings:
      kafka:
        bindingVersion: 1.0.0
        booleanValue:
          changed: true
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
    servers:
      - $ref: '#/servers/server0'
operations:
  sendOperation:
    action: send
    channel:
      $ref: '#/channels/testChannel'
    messages:
      - $ref: '#/components/messages/TestMessage'
components:
  messages:
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
    bindings:
      kafka:
        bindingVersion: 1.0.0
        nullValue:
          changed: true
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
    servers:
      - $ref: '#/servers/server0'
operations:
  sendOperation:
    action: send
    channel:
      $ref: '#/channels/testChannel'
    messages:
      - $ref: '#/components/messages/TestMessage'
components:
  messages:
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
    bindings:
      kafka:
        bindingVersion: 1.0.0
        arrayPrimitives:
          changed: true
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
    servers:
      - $ref: '#/servers/server0'
operations:
  sendOperation:
    action: send
    channel:
      $ref: '#/channels/testChannel'
    messages:
      - $ref: '#/components/messages/TestMessage'
components:
  messages:
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
    bindings:
      kafka:
        bindingVersion: 1.0.0
        arrayObjects:
          changed: true
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
    servers:
      - $ref: '#/servers/server0'
operations:
  sendOperation:
    action: send
    channel:
      $ref: '#/channels/testChannel'
    messages:
      - $ref: '#/components/messages/TestMessage'
components:
  messages:
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
    bindings:
      kafka:
        bindingVersion: 1.0.0
        numberValue: hello
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
    servers:
      - $ref: '#/servers/server0'
operations:
  sendOperation:
    action: send
    channel:
      $ref: '#/channels/testChannel'
    messages:
      - $ref: '#/components/messages/TestMessage'
components:
  messages:
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
    bindings:
      kafka:
        bindingVersion: 1.0.0
        arrayArrayPrimitives:
          changed: true
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
    servers:
      - $ref: '#/servers/server0'
operations:
  sendOperation:
    action: send
    channel:
      $ref: '#/channels/testChannel'
    messages:
      - $ref: '#/components/messages/TestMessage'
components:
  messages:
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
    bindings:
      kafka:
        bindingVersion: 1.0.0
        objectValue:
          first: one
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
    servers:
      - $ref: '#/servers/server0'
operations:
  sendOperation:
    action: send
    channel:
      $ref: '#/channels/testChannel'
    messages:
      - $ref: '#/components/messages/TestMessage'
components:
  messages:
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
    bindings:
      kafka:
        bindingVersion: 1.0.0
        objectValue:
          first: one
          second: 2
          third: added
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
    servers:
      - $ref: '#/servers/server0'
operations:
  sendOperation:
    action: send
    channel:
      $ref: '#/channels/testChannel'
    messages:
      - $ref: '#/components/messages/TestMessage'
components:
  messages:
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
    bindings:
      kafka:
        bindingVersion: 1.0.0
        stringValue: true
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
    servers:
      - $ref: '#/servers/server0'
operations:
  sendOperation:
    action: send
    channel:
      $ref: '#/channels/testChannel'
    messages:
      - $ref: '#/components/messages/TestMessage'
components:
  messages:
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
    bindings:
      kafka:
        bindingVersion: 1.0.0
        numberValue: null
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
    servers:
      - $ref: '#/servers/server0'
operations:
  sendOperation:
    action: send
    channel:
      $ref: '#/channels/testChannel'
    messages:
      - $ref: '#/components/messages/TestMessage'
components:
  messages:
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
    bindings:
      kafka:
        bindingVersion: 1.0.0
        booleanValue: 'true'
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
    servers:
      - $ref: '#/servers/server0'
operations:
  sendOperation:
    action: send
    channel:
      $ref: '#/channels/testChannel'
    messages:
      - $ref: '#/components/messages/TestMessage'
components:
  messages:
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
    bindings:
      kafka:
        bindingVersion: 1.0.0
        nullValue: 5
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
    servers:
      - $ref: '#/servers/server0'
operations:
  sendOperation:
    action: send
    channel:
      $ref: '#/channels/testChannel'
    messages:
      - $ref: '#/components/messages/TestMessage'
components:
  messages:
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
    bindings:
      kafka:
        bindingVersion: 1.0.0
        stringValue:
          - a
          - 1
          - false
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
    servers:
      - $ref: '#/servers/server0'
operations:
  sendOperation:
    action: send
    channel:
      $ref: '#/channels/testChannel'
    messages:
      - $ref: '#/components/messages/TestMessage'
components:
  messages:
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
    bindings:
      kafka:
        bindingVersion: 1.0.0
        numberValue:
          - a
          - 1
          - false
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
    servers:
      - $ref: '#/servers/server0'
operations:
  sendOperation:
    action: send
    channel:
      $ref: '#/channels/testChannel'
    messages:
      - $ref: '#/components/messages/TestMessage'
components:
  messages:
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
    bindings:
      kafka:
        bindingVersion: 1.0.0
        stringValue:
          - a: 1
          - a: 2
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
    servers:
      - $ref: '#/servers/server0'
operations:
  sendOperation:
    action: send
    channel:
      $ref: '#/channels/testChannel'
    messages:
      - $ref: '#/components/messages/TestMessage'
components:
  messages:
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
    description: Main Kafka broker
  server1:
    host: broker-1.example.com:5672
    protocol: amqp
    description: Secondary AMQP broker
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
    description: Main Kafka broker
  server1:
    host: broker-1.example.com:5672
    protocol: amqp
    description: Secondary AMQP broker
`,na=Object.assign({"../../../../samples/async-api-diffs/channel-server/1.1-channel-servers-host-protocol-changed/before.yaml":Nn,"../../../../samples/async-api-diffs/channel-server/1.2-channel-servers-description-set/before.yaml":Qn,"../../../../samples/async-api-diffs/channel-server/1.3-channel-servers-summary-set/before.yaml":wn,"../../../../samples/async-api-diffs/channel-server/2.1-channel-servers0-bindings-add-amqp/before.yaml":Bn,"../../../../samples/async-api-diffs/channel-server/2.2-channel-servers0-bindings-remove-kafka/before.yaml":Gn,"../../../../samples/async-api-diffs/channel-server/2.3-channel-servers0-bindings-add-kafka/before.yaml":zn,"../../../../samples/async-api-diffs/channel-server/2.4-channel-servers0-bindings-remove-kafka/before.yaml":Hn,"../../../../samples/async-api-diffs/channel-server/3.1-channel-servers0-bindings-kafka-bindingVersion-changed/before.yaml":Jn,"../../../../samples/async-api-diffs/channel-server/3.2-channel-servers0-bindings-kafka-bindingVersion-removed/before.yaml":Ln,"../../../../samples/async-api-diffs/channel-server/3.3-channel-servers0-bindings-kafka-bindingVersion-added/before.yaml":Un,"../../../../samples/async-api-diffs/channel-server/4.1.1-channel-servers0-bindings-kafka-string-to-number/before.yaml":Wn,"../../../../samples/async-api-diffs/channel-server/4.1.10-channel-servers0-bindings-kafka-number-to-array-objects/before.yaml":Xn,"../../../../samples/async-api-diffs/channel-server/4.1.11-channel-servers0-bindings-kafka-string-to-array-arrays-primitives/before.yaml":Zn,"../../../../samples/async-api-diffs/channel-server/4.1.12-channel-servers0-bindings-kafka-number-to-array-arrays-primitives/before.yaml":es,"../../../../samples/async-api-diffs/channel-server/4.1.13-channel-servers0-bindings-kafka-boolean-to-null/before.yaml":ns,"../../../../samples/async-api-diffs/channel-server/4.1.14-channel-servers0-bindings-kafka-boolean-to-array-primitives/before.yaml":ss,"../../../../samples/async-api-diffs/channel-server/4.1.15-channel-servers0-bindings-kafka-null-to-array-primitives/before.yaml":as,"../../../../samples/async-api-diffs/channel-server/4.1.16-channel-servers0-bindings-kafka-boolean-to-object/before.yaml":rs,"../../../../samples/async-api-diffs/channel-server/4.1.17-channel-servers0-bindings-kafka-null-to-object/before.yaml":ts,"../../../../samples/async-api-diffs/channel-server/4.1.18-channel-servers0-bindings-kafka-array-primitives-to-object/before.yaml":os,"../../../../samples/async-api-diffs/channel-server/4.1.19-channel-servers0-bindings-kafka-array-objects-to-object/before.yaml":is,"../../../../samples/async-api-diffs/channel-server/4.1.2-channel-servers0-bindings-kafka-number-to-string/before.yaml":cs,"../../../../samples/async-api-diffs/channel-server/4.1.20-channel-servers0-bindings-kafka-array-arrays-primitives-to-object/before.yaml":ls,"../../../../samples/async-api-diffs/channel-server/4.1.21-channel-servers0-bindings-kafka-remove-object-property/before.yaml":ps,"../../../../samples/async-api-diffs/channel-server/4.1.22-channel-servers0-bindings-kafka-add-object-property/before.yaml":ms,"../../../../samples/async-api-diffs/channel-server/4.1.3-channel-servers0-bindings-kafka-string-to-boolean/before.yaml":ds,"../../../../samples/async-api-diffs/channel-server/4.1.4-channel-servers0-bindings-kafka-number-to-null/before.yaml":gs,"../../../../samples/async-api-diffs/channel-server/4.1.5-channel-servers0-bindings-kafka-boolean-to-string/before.yaml":_s,"../../../../samples/async-api-diffs/channel-server/4.1.6-channel-servers0-bindings-kafka-null-to-number/before.yaml":fs,"../../../../samples/async-api-diffs/channel-server/4.1.7-channel-servers0-bindings-kafka-string-to-array-primitives/before.yaml":vs,"../../../../samples/async-api-diffs/channel-server/4.1.8-channel-servers0-bindings-kafka-number-to-array-primitives/before.yaml":bs,"../../../../samples/async-api-diffs/channel-server/4.1.9-channel-servers0-bindings-kafka-string-to-array-objects/before.yaml":hs,"../../../../samples/async-api-diffs/channel-server/5.1-channel-servers-one-item-removed/before.yaml":ks,"../../../../samples/async-api-diffs/channel-server/5.2-channel-servers-one-item-added/before.yaml":ys}),sa=Object.assign({"../../../../samples/async-api-diffs/channel-server/1.1-channel-servers-host-protocol-changed/after.yaml":us,"../../../../samples/async-api-diffs/channel-server/1.2-channel-servers-description-set/after.yaml":Ms,"../../../../samples/async-api-diffs/channel-server/1.3-channel-servers-summary-set/after.yaml":Ts,"../../../../samples/async-api-diffs/channel-server/2.1-channel-servers0-bindings-add-amqp/after.yaml":$s,"../../../../samples/async-api-diffs/channel-server/2.2-channel-servers0-bindings-remove-kafka/after.yaml":Cs,"../../../../samples/async-api-diffs/channel-server/2.3-channel-servers0-bindings-add-kafka/after.yaml":Ss,"../../../../samples/async-api-diffs/channel-server/2.4-channel-servers0-bindings-remove-kafka/after.yaml":As,"../../../../samples/async-api-diffs/channel-server/3.1-channel-servers0-bindings-kafka-bindingVersion-changed/after.yaml":js,"../../../../samples/async-api-diffs/channel-server/3.2-channel-servers0-bindings-kafka-bindingVersion-removed/after.yaml":Vs,"../../../../samples/async-api-diffs/channel-server/3.3-channel-servers0-bindings-kafka-bindingVersion-added/after.yaml":xs,"../../../../samples/async-api-diffs/channel-server/4.1.1-channel-servers0-bindings-kafka-string-to-number/after.yaml":qs,"../../../../samples/async-api-diffs/channel-server/4.1.10-channel-servers0-bindings-kafka-number-to-array-objects/after.yaml":Ps,"../../../../samples/async-api-diffs/channel-server/4.1.11-channel-servers0-bindings-kafka-string-to-array-arrays-primitives/after.yaml":Os,"../../../../samples/async-api-diffs/channel-server/4.1.12-channel-servers0-bindings-kafka-number-to-array-arrays-primitives/after.yaml":Is,"../../../../samples/async-api-diffs/channel-server/4.1.13-channel-servers0-bindings-kafka-boolean-to-null/after.yaml":Es,"../../../../samples/async-api-diffs/channel-server/4.1.14-channel-servers0-bindings-kafka-boolean-to-array-primitives/after.yaml":Ks,"../../../../samples/async-api-diffs/channel-server/4.1.15-channel-servers0-bindings-kafka-null-to-array-primitives/after.yaml":Ys,"../../../../samples/async-api-diffs/channel-server/4.1.16-channel-servers0-bindings-kafka-boolean-to-object/after.yaml":Rs,"../../../../samples/async-api-diffs/channel-server/4.1.17-channel-servers0-bindings-kafka-null-to-object/after.yaml":Ds,"../../../../samples/async-api-diffs/channel-server/4.1.18-channel-servers0-bindings-kafka-array-primitives-to-object/after.yaml":Fs,"../../../../samples/async-api-diffs/channel-server/4.1.19-channel-servers0-bindings-kafka-array-objects-to-object/after.yaml":Ns,"../../../../samples/async-api-diffs/channel-server/4.1.2-channel-servers0-bindings-kafka-number-to-string/after.yaml":Qs,"../../../../samples/async-api-diffs/channel-server/4.1.20-channel-servers0-bindings-kafka-array-arrays-primitives-to-object/after.yaml":ws,"../../../../samples/async-api-diffs/channel-server/4.1.21-channel-servers0-bindings-kafka-remove-object-property/after.yaml":Bs,"../../../../samples/async-api-diffs/channel-server/4.1.22-channel-servers0-bindings-kafka-add-object-property/after.yaml":Gs,"../../../../samples/async-api-diffs/channel-server/4.1.3-channel-servers0-bindings-kafka-string-to-boolean/after.yaml":zs,"../../../../samples/async-api-diffs/channel-server/4.1.4-channel-servers0-bindings-kafka-number-to-null/after.yaml":Hs,"../../../../samples/async-api-diffs/channel-server/4.1.5-channel-servers0-bindings-kafka-boolean-to-string/after.yaml":Js,"../../../../samples/async-api-diffs/channel-server/4.1.6-channel-servers0-bindings-kafka-null-to-number/after.yaml":Ls,"../../../../samples/async-api-diffs/channel-server/4.1.7-channel-servers0-bindings-kafka-string-to-array-primitives/after.yaml":Us,"../../../../samples/async-api-diffs/channel-server/4.1.8-channel-servers0-bindings-kafka-number-to-array-primitives/after.yaml":Ws,"../../../../samples/async-api-diffs/channel-server/4.1.9-channel-servers0-bindings-kafka-string-to-array-objects/after.yaml":Xs,"../../../../samples/async-api-diffs/channel-server/5.1-channel-servers-one-item-removed/after.yaml":Zs,"../../../../samples/async-api-diffs/channel-server/5.2-channel-servers-one-item-added/after.yaml":ea}),aa=Dn(na,sa),ra=Object.fromEntries(aa.map(n=>[n.caseId,n])),In=({caseId:n})=>{const s=ra[n];return s?Y.jsx(En,{...ia(s.beforeYaml,s.afterYaml)}):Y.jsxs("div",{children:["Sample case not found: ",n]})},ka={title:"Async API Diffs Suite/Server Samples",component:In},ta="sendOperation",oa="TestMessage",R=n=>Fn(n),ia=(n,s)=>({devMode:!0,mergedSource:Kn({beforeSource:R(n),afterSource:R(s)}),operationKeys:{operationKey:ta,messageKey:oa},referenceNamePropertyKey:Yn,diffMetaKeys:Rn}),e=n=>({name:n,args:{caseId:n},render:s=>Y.jsx(In,{caseId:s.caseId})}),a=e("1.1-channel-servers-host-protocol-changed"),r=e("1.2-channel-servers-description-set"),t=e("1.3-channel-servers-summary-set"),o=e("2.1-channel-servers0-bindings-add-amqp"),i=e("2.2-channel-servers0-bindings-remove-kafka"),c=e("2.3-channel-servers0-bindings-add-kafka"),l=e("2.4-channel-servers0-bindings-remove-kafka"),p=e("3.1-channel-servers0-bindings-kafka-bindingVersion-changed"),m=e("3.2-channel-servers0-bindings-kafka-bindingVersion-removed"),d=e("3.3-channel-servers0-bindings-kafka-bindingVersion-added"),g=e("4.1.1-channel-servers0-bindings-kafka-string-to-number"),_=e("4.1.2-channel-servers0-bindings-kafka-number-to-string"),f=e("4.1.3-channel-servers0-bindings-kafka-string-to-boolean"),v=e("4.1.4-channel-servers0-bindings-kafka-number-to-null"),b=e("4.1.5-channel-servers0-bindings-kafka-boolean-to-string"),h=e("4.1.6-channel-servers0-bindings-kafka-null-to-number"),k=e("4.1.7-channel-servers0-bindings-kafka-string-to-array-primitives"),y=e("4.1.8-channel-servers0-bindings-kafka-number-to-array-primitives"),u=e("4.1.9-channel-servers0-bindings-kafka-string-to-array-objects"),M=e("4.1.10-channel-servers0-bindings-kafka-number-to-array-objects"),T=e("4.1.11-channel-servers0-bindings-kafka-string-to-array-arrays-primitives"),$=e("4.1.12-channel-servers0-bindings-kafka-number-to-array-arrays-primitives"),C=e("4.1.13-channel-servers0-bindings-kafka-boolean-to-null"),S=e("4.1.14-channel-servers0-bindings-kafka-boolean-to-array-primitives"),A=e("4.1.15-channel-servers0-bindings-kafka-null-to-array-primitives"),j=e("4.1.16-channel-servers0-bindings-kafka-boolean-to-object"),V=e("4.1.17-channel-servers0-bindings-kafka-null-to-object"),x=e("4.1.18-channel-servers0-bindings-kafka-array-primitives-to-object"),q=e("4.1.19-channel-servers0-bindings-kafka-array-objects-to-object"),P=e("4.1.20-channel-servers0-bindings-kafka-array-arrays-primitives-to-object"),O=e("4.1.21-channel-servers0-bindings-kafka-remove-object-property"),I=e("4.1.22-channel-servers0-bindings-kafka-add-object-property"),E=e("5.1-channel-servers-one-item-removed"),K=e("5.2-channel-servers-one-item-added");var D,F,N;a.parameters={...a.parameters,docs:{...(D=a.parameters)==null?void 0:D.docs,source:{originalSource:'createCaseStory("1.1-channel-servers-host-protocol-changed")',...(N=(F=a.parameters)==null?void 0:F.docs)==null?void 0:N.source}}};var Q,w,B;r.parameters={...r.parameters,docs:{...(Q=r.parameters)==null?void 0:Q.docs,source:{originalSource:'createCaseStory("1.2-channel-servers-description-set")',...(B=(w=r.parameters)==null?void 0:w.docs)==null?void 0:B.source}}};var G,z,H;t.parameters={...t.parameters,docs:{...(G=t.parameters)==null?void 0:G.docs,source:{originalSource:'createCaseStory("1.3-channel-servers-summary-set")',...(H=(z=t.parameters)==null?void 0:z.docs)==null?void 0:H.source}}};var J,L,U;o.parameters={...o.parameters,docs:{...(J=o.parameters)==null?void 0:J.docs,source:{originalSource:'createCaseStory("2.1-channel-servers0-bindings-add-amqp")',...(U=(L=o.parameters)==null?void 0:L.docs)==null?void 0:U.source}}};var W,X,Z;i.parameters={...i.parameters,docs:{...(W=i.parameters)==null?void 0:W.docs,source:{originalSource:'createCaseStory("2.2-channel-servers0-bindings-remove-kafka")',...(Z=(X=i.parameters)==null?void 0:X.docs)==null?void 0:Z.source}}};var ee,ne,se;c.parameters={...c.parameters,docs:{...(ee=c.parameters)==null?void 0:ee.docs,source:{originalSource:'createCaseStory("2.3-channel-servers0-bindings-add-kafka")',...(se=(ne=c.parameters)==null?void 0:ne.docs)==null?void 0:se.source}}};var ae,re,te;l.parameters={...l.parameters,docs:{...(ae=l.parameters)==null?void 0:ae.docs,source:{originalSource:'createCaseStory("2.4-channel-servers0-bindings-remove-kafka")',...(te=(re=l.parameters)==null?void 0:re.docs)==null?void 0:te.source}}};var oe,ie,ce;p.parameters={...p.parameters,docs:{...(oe=p.parameters)==null?void 0:oe.docs,source:{originalSource:'createCaseStory("3.1-channel-servers0-bindings-kafka-bindingVersion-changed")',...(ce=(ie=p.parameters)==null?void 0:ie.docs)==null?void 0:ce.source}}};var le,pe,me;m.parameters={...m.parameters,docs:{...(le=m.parameters)==null?void 0:le.docs,source:{originalSource:'createCaseStory("3.2-channel-servers0-bindings-kafka-bindingVersion-removed")',...(me=(pe=m.parameters)==null?void 0:pe.docs)==null?void 0:me.source}}};var de,ge,_e;d.parameters={...d.parameters,docs:{...(de=d.parameters)==null?void 0:de.docs,source:{originalSource:'createCaseStory("3.3-channel-servers0-bindings-kafka-bindingVersion-added")',...(_e=(ge=d.parameters)==null?void 0:ge.docs)==null?void 0:_e.source}}};var fe,ve,be;g.parameters={...g.parameters,docs:{...(fe=g.parameters)==null?void 0:fe.docs,source:{originalSource:'createCaseStory("4.1.1-channel-servers0-bindings-kafka-string-to-number")',...(be=(ve=g.parameters)==null?void 0:ve.docs)==null?void 0:be.source}}};var he,ke,ye;_.parameters={..._.parameters,docs:{...(he=_.parameters)==null?void 0:he.docs,source:{originalSource:'createCaseStory("4.1.2-channel-servers0-bindings-kafka-number-to-string")',...(ye=(ke=_.parameters)==null?void 0:ke.docs)==null?void 0:ye.source}}};var ue,Me,Te;f.parameters={...f.parameters,docs:{...(ue=f.parameters)==null?void 0:ue.docs,source:{originalSource:'createCaseStory("4.1.3-channel-servers0-bindings-kafka-string-to-boolean")',...(Te=(Me=f.parameters)==null?void 0:Me.docs)==null?void 0:Te.source}}};var $e,Ce,Se;v.parameters={...v.parameters,docs:{...($e=v.parameters)==null?void 0:$e.docs,source:{originalSource:'createCaseStory("4.1.4-channel-servers0-bindings-kafka-number-to-null")',...(Se=(Ce=v.parameters)==null?void 0:Ce.docs)==null?void 0:Se.source}}};var Ae,je,Ve;b.parameters={...b.parameters,docs:{...(Ae=b.parameters)==null?void 0:Ae.docs,source:{originalSource:'createCaseStory("4.1.5-channel-servers0-bindings-kafka-boolean-to-string")',...(Ve=(je=b.parameters)==null?void 0:je.docs)==null?void 0:Ve.source}}};var xe,qe,Pe;h.parameters={...h.parameters,docs:{...(xe=h.parameters)==null?void 0:xe.docs,source:{originalSource:'createCaseStory("4.1.6-channel-servers0-bindings-kafka-null-to-number")',...(Pe=(qe=h.parameters)==null?void 0:qe.docs)==null?void 0:Pe.source}}};var Oe,Ie,Ee;k.parameters={...k.parameters,docs:{...(Oe=k.parameters)==null?void 0:Oe.docs,source:{originalSource:'createCaseStory("4.1.7-channel-servers0-bindings-kafka-string-to-array-primitives")',...(Ee=(Ie=k.parameters)==null?void 0:Ie.docs)==null?void 0:Ee.source}}};var Ke,Ye,Re;y.parameters={...y.parameters,docs:{...(Ke=y.parameters)==null?void 0:Ke.docs,source:{originalSource:'createCaseStory("4.1.8-channel-servers0-bindings-kafka-number-to-array-primitives")',...(Re=(Ye=y.parameters)==null?void 0:Ye.docs)==null?void 0:Re.source}}};var De,Fe,Ne;u.parameters={...u.parameters,docs:{...(De=u.parameters)==null?void 0:De.docs,source:{originalSource:'createCaseStory("4.1.9-channel-servers0-bindings-kafka-string-to-array-objects")',...(Ne=(Fe=u.parameters)==null?void 0:Fe.docs)==null?void 0:Ne.source}}};var Qe,we,Be;M.parameters={...M.parameters,docs:{...(Qe=M.parameters)==null?void 0:Qe.docs,source:{originalSource:'createCaseStory("4.1.10-channel-servers0-bindings-kafka-number-to-array-objects")',...(Be=(we=M.parameters)==null?void 0:we.docs)==null?void 0:Be.source}}};var Ge,ze,He;T.parameters={...T.parameters,docs:{...(Ge=T.parameters)==null?void 0:Ge.docs,source:{originalSource:'createCaseStory("4.1.11-channel-servers0-bindings-kafka-string-to-array-arrays-primitives")',...(He=(ze=T.parameters)==null?void 0:ze.docs)==null?void 0:He.source}}};var Je,Le,Ue;$.parameters={...$.parameters,docs:{...(Je=$.parameters)==null?void 0:Je.docs,source:{originalSource:'createCaseStory("4.1.12-channel-servers0-bindings-kafka-number-to-array-arrays-primitives")',...(Ue=(Le=$.parameters)==null?void 0:Le.docs)==null?void 0:Ue.source}}};var We,Xe,Ze;C.parameters={...C.parameters,docs:{...(We=C.parameters)==null?void 0:We.docs,source:{originalSource:'createCaseStory("4.1.13-channel-servers0-bindings-kafka-boolean-to-null")',...(Ze=(Xe=C.parameters)==null?void 0:Xe.docs)==null?void 0:Ze.source}}};var en,nn,sn;S.parameters={...S.parameters,docs:{...(en=S.parameters)==null?void 0:en.docs,source:{originalSource:'createCaseStory("4.1.14-channel-servers0-bindings-kafka-boolean-to-array-primitives")',...(sn=(nn=S.parameters)==null?void 0:nn.docs)==null?void 0:sn.source}}};var an,rn,tn;A.parameters={...A.parameters,docs:{...(an=A.parameters)==null?void 0:an.docs,source:{originalSource:'createCaseStory("4.1.15-channel-servers0-bindings-kafka-null-to-array-primitives")',...(tn=(rn=A.parameters)==null?void 0:rn.docs)==null?void 0:tn.source}}};var on,cn,ln;j.parameters={...j.parameters,docs:{...(on=j.parameters)==null?void 0:on.docs,source:{originalSource:'createCaseStory("4.1.16-channel-servers0-bindings-kafka-boolean-to-object")',...(ln=(cn=j.parameters)==null?void 0:cn.docs)==null?void 0:ln.source}}};var pn,mn,dn;V.parameters={...V.parameters,docs:{...(pn=V.parameters)==null?void 0:pn.docs,source:{originalSource:'createCaseStory("4.1.17-channel-servers0-bindings-kafka-null-to-object")',...(dn=(mn=V.parameters)==null?void 0:mn.docs)==null?void 0:dn.source}}};var gn,_n,fn;x.parameters={...x.parameters,docs:{...(gn=x.parameters)==null?void 0:gn.docs,source:{originalSource:'createCaseStory("4.1.18-channel-servers0-bindings-kafka-array-primitives-to-object")',...(fn=(_n=x.parameters)==null?void 0:_n.docs)==null?void 0:fn.source}}};var vn,bn,hn;q.parameters={...q.parameters,docs:{...(vn=q.parameters)==null?void 0:vn.docs,source:{originalSource:'createCaseStory("4.1.19-channel-servers0-bindings-kafka-array-objects-to-object")',...(hn=(bn=q.parameters)==null?void 0:bn.docs)==null?void 0:hn.source}}};var kn,yn,un;P.parameters={...P.parameters,docs:{...(kn=P.parameters)==null?void 0:kn.docs,source:{originalSource:'createCaseStory("4.1.20-channel-servers0-bindings-kafka-array-arrays-primitives-to-object")',...(un=(yn=P.parameters)==null?void 0:yn.docs)==null?void 0:un.source}}};var Mn,Tn,$n;O.parameters={...O.parameters,docs:{...(Mn=O.parameters)==null?void 0:Mn.docs,source:{originalSource:'createCaseStory("4.1.21-channel-servers0-bindings-kafka-remove-object-property")',...($n=(Tn=O.parameters)==null?void 0:Tn.docs)==null?void 0:$n.source}}};var Cn,Sn,An;I.parameters={...I.parameters,docs:{...(Cn=I.parameters)==null?void 0:Cn.docs,source:{originalSource:'createCaseStory("4.1.22-channel-servers0-bindings-kafka-add-object-property")',...(An=(Sn=I.parameters)==null?void 0:Sn.docs)==null?void 0:An.source}}};var jn,Vn,xn;E.parameters={...E.parameters,docs:{...(jn=E.parameters)==null?void 0:jn.docs,source:{originalSource:'createCaseStory("5.1-channel-servers-one-item-removed")',...(xn=(Vn=E.parameters)==null?void 0:Vn.docs)==null?void 0:xn.source}}};var qn,Pn,On;K.parameters={...K.parameters,docs:{...(qn=K.parameters)==null?void 0:qn.docs,source:{originalSource:'createCaseStory("5.2-channel-servers-one-item-added")',...(On=(Pn=K.parameters)==null?void 0:Pn.docs)==null?void 0:On.source}}};const ya=["Case_1_1_channel_servers_host_protocol_changed","Case_1_2_channel_servers_description_set","Case_1_3_channel_servers_summary_set","Case_2_1_channel_servers0_bindings_add_amqp","Case_2_2_channel_servers0_bindings_remove_kafka","Case_2_3_channel_servers0_bindings_add_kafka","Case_2_4_channel_servers0_bindings_remove_kafka","Case_3_1_channel_servers0_bindings_kafka_bindingVersion_changed","Case_3_2_channel_servers0_bindings_kafka_bindingVersion_removed","Case_3_3_channel_servers0_bindings_kafka_bindingVersion_added","Case_4_1_1_channel_servers0_bindings_kafka_string_to_number","Case_4_1_2_channel_servers0_bindings_kafka_number_to_string","Case_4_1_3_channel_servers0_bindings_kafka_string_to_boolean","Case_4_1_4_channel_servers0_bindings_kafka_number_to_null","Case_4_1_5_channel_servers0_bindings_kafka_boolean_to_string","Case_4_1_6_channel_servers0_bindings_kafka_null_to_number","Case_4_1_7_channel_servers0_bindings_kafka_string_to_array_primitives","Case_4_1_8_channel_servers0_bindings_kafka_number_to_array_primitives","Case_4_1_9_channel_servers0_bindings_kafka_string_to_array_objects","Case_4_1_10_channel_servers0_bindings_kafka_number_to_array_objects","Case_4_1_11_channel_servers0_bindings_kafka_string_to_array_arrays_primitives","Case_4_1_12_channel_servers0_bindings_kafka_number_to_array_arrays_primitives","Case_4_1_13_channel_servers0_bindings_kafka_boolean_to_null","Case_4_1_14_channel_servers0_bindings_kafka_boolean_to_array_primitives","Case_4_1_15_channel_servers0_bindings_kafka_null_to_array_primitives","Case_4_1_16_channel_servers0_bindings_kafka_boolean_to_object","Case_4_1_17_channel_servers0_bindings_kafka_null_to_object","Case_4_1_18_channel_servers0_bindings_kafka_array_primitives_to_object","Case_4_1_19_channel_servers0_bindings_kafka_array_objects_to_object","Case_4_1_20_channel_servers0_bindings_kafka_array_arrays_primitives_to_object","Case_4_1_21_channel_servers0_bindings_kafka_remove_object_property","Case_4_1_22_channel_servers0_bindings_kafka_add_object_property","Case_5_1_channel_servers_one_item_removed","Case_5_2_channel_servers_one_item_added"];export{a as Case_1_1_channel_servers_host_protocol_changed,r as Case_1_2_channel_servers_description_set,t as Case_1_3_channel_servers_summary_set,o as Case_2_1_channel_servers0_bindings_add_amqp,i as Case_2_2_channel_servers0_bindings_remove_kafka,c as Case_2_3_channel_servers0_bindings_add_kafka,l as Case_2_4_channel_servers0_bindings_remove_kafka,p as Case_3_1_channel_servers0_bindings_kafka_bindingVersion_changed,m as Case_3_2_channel_servers0_bindings_kafka_bindingVersion_removed,d as Case_3_3_channel_servers0_bindings_kafka_bindingVersion_added,M as Case_4_1_10_channel_servers0_bindings_kafka_number_to_array_objects,T as Case_4_1_11_channel_servers0_bindings_kafka_string_to_array_arrays_primitives,$ as Case_4_1_12_channel_servers0_bindings_kafka_number_to_array_arrays_primitives,C as Case_4_1_13_channel_servers0_bindings_kafka_boolean_to_null,S as Case_4_1_14_channel_servers0_bindings_kafka_boolean_to_array_primitives,A as Case_4_1_15_channel_servers0_bindings_kafka_null_to_array_primitives,j as Case_4_1_16_channel_servers0_bindings_kafka_boolean_to_object,V as Case_4_1_17_channel_servers0_bindings_kafka_null_to_object,x as Case_4_1_18_channel_servers0_bindings_kafka_array_primitives_to_object,q as Case_4_1_19_channel_servers0_bindings_kafka_array_objects_to_object,g as Case_4_1_1_channel_servers0_bindings_kafka_string_to_number,P as Case_4_1_20_channel_servers0_bindings_kafka_array_arrays_primitives_to_object,O as Case_4_1_21_channel_servers0_bindings_kafka_remove_object_property,I as Case_4_1_22_channel_servers0_bindings_kafka_add_object_property,_ as Case_4_1_2_channel_servers0_bindings_kafka_number_to_string,f as Case_4_1_3_channel_servers0_bindings_kafka_string_to_boolean,v as Case_4_1_4_channel_servers0_bindings_kafka_number_to_null,b as Case_4_1_5_channel_servers0_bindings_kafka_boolean_to_string,h as Case_4_1_6_channel_servers0_bindings_kafka_null_to_number,k as Case_4_1_7_channel_servers0_bindings_kafka_string_to_array_primitives,y as Case_4_1_8_channel_servers0_bindings_kafka_number_to_array_primitives,u as Case_4_1_9_channel_servers0_bindings_kafka_string_to_array_objects,E as Case_5_1_channel_servers_one_item_removed,K as Case_5_2_channel_servers_one_item_added,ya as __namedExportsOrder,ka as default};
