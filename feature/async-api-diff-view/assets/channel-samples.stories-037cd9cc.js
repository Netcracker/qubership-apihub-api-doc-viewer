import{j as S}from"./_commonjs-dynamic-modules-6308e768.js";import{a as Fe}from"./AsyncApiOperationViewer-2714e842.js";import{c as He}from"./parse-yaml-source-2575e8ef.js";import{c as Je,a as Re,b as ze}from"./async-api-diffs-utils-c3758d61.js";import"./index-f46741a2.js";import"./GraphPropNodeViewer-85a44f20.js";import"./index-415bee12.js";import"./GraphQLOperationDiffViewer-5c5ab323.js";import"./GraphQLOperationViewer-92304b6d.js";import"./js-yaml-71a24e1f.js";import"./index-d5b0668c.js";import"./index-442a5f79.js";import"./preprocess-318649c5.js";const Le=`asyncapi: 3.0.0
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
`,Qe=`asyncapi: 3.0.0
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
`,Ue=`asyncapi: 3.0.0
info:
  title: Sample AsyncAPI
  version: 1.0.0
channels:
  testChannel:
    address: events.default
    messages:
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
`,We=`asyncapi: 3.0.0
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
`,Xe=`asyncapi: 3.0.0
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
`,Ze=`asyncapi: 3.0.0
info:
  title: Sample AsyncAPI
  version: 1.0.0
channels:
  testChannel:
    address: events.default
    messages:
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
`,en=`asyncapi: 3.0.0
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
`,nn=`asyncapi: 3.0.0
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
`,sn=`asyncapi: 3.0.0
info:
  title: Sample AsyncAPI
  version: 1.0.0
channels:
  testChannel:
    address: events.default
    messages:
      TestMessage:
        $ref: '#/components/messages/TestMessage'
    description: this description will be moved to summary
operations:
  sendOperation:
    action: send
    channel:
      $ref: '#/channels/testChannel'
    messages:
      - $ref: '#/components/messages/TestMessage'
components:
  messages:
    TestMessage:
      name: TestMessage
      payload:
        type: object
        properties:
          id:
            type: string
        required:
          - id
`,an=`asyncapi: 3.0.0
info:
  title: Sample AsyncAPI
  version: 1.0.0
channels:
  testChannel:
    address: events.default
    messages:
      TestMessage:
        $ref: '#/components/messages/TestMessage'
    summary: this is summary will be moved to description
operations:
  sendOperation:
    action: send
    channel:
      $ref: '#/channels/testChannel'
    messages:
      - $ref: '#/components/messages/TestMessage'
components:
  messages:
    TestMessage:
      name: TestMessage
      payload:
        type: object
        properties:
          id:
            type: string
        required:
          - id
`,tn=`asyncapi: 3.0.0
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
`,on=`asyncapi: 3.0.0
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
`,rn=`asyncapi: 3.0.0
info:
  title: Sample AsyncAPI
  version: 1.0.0
channels:
  testChannel:
    address: events.default
    messages:
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
`,cn=`asyncapi: 3.0.0
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
`,dn=`asyncapi: 3.0.0
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
`,ln=`asyncapi: 3.0.0
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
`,pn=`asyncapi: 3.0.0
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
`,mn=`asyncapi: 3.0.0
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
`,gn=`asyncapi: 3.0.0
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
`,_n=`asyncapi: 3.0.0
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
`,hn=`asyncapi: 3.0.0
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
`,fn=`asyncapi: 3.0.0
info:
  title: Sample AsyncAPI
  version: 1.0.0
channels:
  testChannel:
    address: events.default
    messages:
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
`,yn=`asyncapi: 3.0.0
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
`,bn=`asyncapi: 3.0.0
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
`,Mn=`asyncapi: 3.0.0
info:
  title: Sample AsyncAPI
  version: 1.0.0
channels:
  testChannel:
    address: events.default
    messages:
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
`,Tn=`asyncapi: 3.0.0
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
`,vn=`asyncapi: 3.0.0
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
`,un=`asyncapi: 3.0.0
info:
  title: Sample AsyncAPI
  version: 1.0.0
channels:
  testChannel:
    address: events.default
    messages:
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
`,Cn=`asyncapi: 3.0.0
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
`,$n=`asyncapi: 3.0.0
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
`,An=`asyncapi: 3.0.0
info:
  title: Sample AsyncAPI
  version: 1.0.0
channels:
  testChannel:
    address: events.default
    messages:
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
`,Sn=`asyncapi: 3.0.0
info:
  title: Sample AsyncAPI
  version: 1.0.0
channels:
  testChannel:
    address: events.default
    messages:
      TestMessage:
        $ref: '#/components/messages/TestMessage'
    summary: here it is!
operations:
  sendOperation:
    action: send
    channel:
      $ref: '#/channels/testChannel'
    messages:
      - $ref: '#/components/messages/TestMessage'
components:
  messages:
    TestMessage:
      name: TestMessage
      payload:
        type: object
        properties:
          id:
            type: string
        required:
          - id
`,kn=`asyncapi: 3.0.0
info:
  title: Sample AsyncAPI
  version: 1.0.0
channels:
  testChannel:
    address: events.default
    messages:
      TestMessage:
        $ref: '#/components/messages/TestMessage'
    description: here it is!
operations:
  sendOperation:
    action: send
    channel:
      $ref: '#/channels/testChannel'
    messages:
      - $ref: '#/components/messages/TestMessage'
components:
  messages:
    TestMessage:
      name: TestMessage
      payload:
        type: object
        properties:
          id:
            type: string
        required:
          - id
`,xn=`asyncapi: 3.0.0
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
`,jn=`asyncapi: 3.0.0
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
`,On=`asyncapi: 3.0.0
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
`,qn=`asyncapi: 3.0.0
info:
  title: Sample AsyncAPI
  version: 1.0.0
channels:
  testChannel:
    address: events.default
    messages:
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
`,In=`asyncapi: 3.0.0
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
`,Pn=`asyncapi: 3.0.0
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
`,Vn=`asyncapi: 3.0.0
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
`,En=`asyncapi: 3.0.0
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
`,Dn=`asyncapi: 3.0.0
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
`,Kn=`asyncapi: 3.0.0
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
`,Nn=`asyncapi: 3.0.0
info:
  title: Sample AsyncAPI
  version: 1.0.0
channels:
  testChannel:
    address: events.default
    messages:
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
`,Yn=Object.assign({"../../../../samples/async-api-diffs/channel/1.1-channel-title-changed/before.yaml":Le,"../../../../samples/async-api-diffs/channel/1.2-channel-title-removed/before.yaml":Qe,"../../../../samples/async-api-diffs/channel/1.3-channel-title-added/before.yaml":Ue,"../../../../samples/async-api-diffs/channel/2.1-channel-description-changed/before.yaml":We,"../../../../samples/async-api-diffs/channel/2.2-channel-description-removed/before.yaml":Xe,"../../../../samples/async-api-diffs/channel/2.3-channel-description-added/before.yaml":Ze,"../../../../samples/async-api-diffs/channel/2.4-channel-summary-changed/before.yaml":en,"../../../../samples/async-api-diffs/channel/2.5-channel-summary-removed/before.yaml":nn,"../../../../samples/async-api-diffs/channel/2.6-channel-description-moved-to-summary/before.yaml":sn,"../../../../samples/async-api-diffs/channel/2.7-channel-summary-moved-to-description/before.yaml":an,"../../../../samples/async-api-diffs/channel/3.1-channel-bindings-add-one-more-binding/before.yaml":tn,"../../../../samples/async-api-diffs/channel/3.2-channel-bindings-remove-one-of-several-bindings/before.yaml":on,"../../../../samples/async-api-diffs/channel/3.3-channel-bindings-add-bindings/before.yaml":rn,"../../../../samples/async-api-diffs/channel/3.4-channel-bindings-remove-bindings/before.yaml":cn,"../../../../samples/async-api-diffs/channel/4.1-channel-bindings-kafka-bindingVersion-changed/before.yaml":dn,"../../../../samples/async-api-diffs/channel/4.2-channel-bindings-kafka-bindingVersion-removed/before.yaml":ln,"../../../../samples/async-api-diffs/channel/4.3-channel-bindings-kafka-bindingVersion-added/before.yaml":pn,"../../../../samples/async-api-diffs/channel/5.1-channel-bindings-kafka-internal-jso-changes/before.yaml":mn,"../../../../samples/async-api-diffs/channel/6.1-channel-x-second-added/before.yaml":gn,"../../../../samples/async-api-diffs/channel/6.2-channel-x-second-removed/before.yaml":_n,"../../../../samples/async-api-diffs/channel/6.3-channel-x-second-changed/before.yaml":hn,"../../../../samples/async-api-diffs/channel/6.4-channel-x-first-and-x-second-added/before.yaml":fn,"../../../../samples/async-api-diffs/channel/6.5-channel-x-first-and-x-second-removed/before.yaml":yn}),Bn=Object.assign({"../../../../samples/async-api-diffs/channel/1.1-channel-title-changed/after.yaml":bn,"../../../../samples/async-api-diffs/channel/1.2-channel-title-removed/after.yaml":Mn,"../../../../samples/async-api-diffs/channel/1.3-channel-title-added/after.yaml":Tn,"../../../../samples/async-api-diffs/channel/2.1-channel-description-changed/after.yaml":vn,"../../../../samples/async-api-diffs/channel/2.2-channel-description-removed/after.yaml":un,"../../../../samples/async-api-diffs/channel/2.3-channel-description-added/after.yaml":Cn,"../../../../samples/async-api-diffs/channel/2.4-channel-summary-changed/after.yaml":$n,"../../../../samples/async-api-diffs/channel/2.5-channel-summary-removed/after.yaml":An,"../../../../samples/async-api-diffs/channel/2.6-channel-description-moved-to-summary/after.yaml":Sn,"../../../../samples/async-api-diffs/channel/2.7-channel-summary-moved-to-description/after.yaml":kn,"../../../../samples/async-api-diffs/channel/3.1-channel-bindings-add-one-more-binding/after.yaml":xn,"../../../../samples/async-api-diffs/channel/3.2-channel-bindings-remove-one-of-several-bindings/after.yaml":jn,"../../../../samples/async-api-diffs/channel/3.3-channel-bindings-add-bindings/after.yaml":On,"../../../../samples/async-api-diffs/channel/3.4-channel-bindings-remove-bindings/after.yaml":qn,"../../../../samples/async-api-diffs/channel/4.1-channel-bindings-kafka-bindingVersion-changed/after.yaml":In,"../../../../samples/async-api-diffs/channel/4.2-channel-bindings-kafka-bindingVersion-removed/after.yaml":Pn,"../../../../samples/async-api-diffs/channel/4.3-channel-bindings-kafka-bindingVersion-added/after.yaml":Vn,"../../../../samples/async-api-diffs/channel/5.1-channel-bindings-kafka-internal-jso-changes/after.yaml":En,"../../../../samples/async-api-diffs/channel/6.1-channel-x-second-added/after.yaml":Dn,"../../../../samples/async-api-diffs/channel/6.2-channel-x-second-removed/after.yaml":Kn,"../../../../samples/async-api-diffs/channel/6.3-channel-x-second-changed/after.yaml":wn,"../../../../samples/async-api-diffs/channel/6.4-channel-x-first-and-x-second-added/after.yaml":Gn,"../../../../samples/async-api-diffs/channel/6.5-channel-x-first-and-x-second-removed/after.yaml":Nn}),Fn=He(Yn,Bn),Hn=Je(Fn),Be=({caseId:n})=>{const s=Hn[n];return s?S.jsx(Fe,{...zn(s.beforeYaml,s.afterYaml)}):S.jsxs("div",{children:["Sample case not found: ",n]})},cs={title:"Async API Diffs Suite/Channel Samples",component:Be},Jn="sendOperation",Rn="TestMessage",zn=(n,s)=>Re(n,s,{operationKey:Jn,messageKey:Rn}),Ln=ze(Be,"message-channel"),e=n=>Ln(n),a=e("1.1-channel-title-changed"),t=e("1.2-channel-title-removed"),o=e("1.3-channel-title-added"),i=e("2.1-channel-description-changed"),r=e("2.2-channel-description-removed"),c=e("2.3-channel-description-added"),d=e("2.4-channel-summary-changed"),l=e("2.5-channel-summary-removed"),p=e("2.6-channel-description-moved-to-summary"),m=e("2.7-channel-summary-moved-to-description"),g=e("3.1-channel-bindings-add-one-more-binding"),_=e("3.2-channel-bindings-remove-one-of-several-bindings"),h=e("3.3-channel-bindings-add-bindings"),f=e("3.4-channel-bindings-remove-bindings"),y=e("4.1-channel-bindings-kafka-bindingVersion-changed"),b=e("4.2-channel-bindings-kafka-bindingVersion-removed"),M=e("4.3-channel-bindings-kafka-bindingVersion-added"),T=e("5.1-channel-bindings-kafka-internal-jso-changes"),v=e("6.1-channel-x-second-added"),u=e("6.2-channel-x-second-removed"),C=e("6.3-channel-x-second-changed"),$=e("6.4-channel-x-first-and-x-second-added"),A=e("6.5-channel-x-first-and-x-second-removed");var k,x,j;a.parameters={...a.parameters,docs:{...(k=a.parameters)==null?void 0:k.docs,source:{originalSource:'createCaseStory("1.1-channel-title-changed")',...(j=(x=a.parameters)==null?void 0:x.docs)==null?void 0:j.source}}};var O,q,I;t.parameters={...t.parameters,docs:{...(O=t.parameters)==null?void 0:O.docs,source:{originalSource:'createCaseStory("1.2-channel-title-removed")',...(I=(q=t.parameters)==null?void 0:q.docs)==null?void 0:I.source}}};var P,V,E;o.parameters={...o.parameters,docs:{...(P=o.parameters)==null?void 0:P.docs,source:{originalSource:'createCaseStory("1.3-channel-title-added")',...(E=(V=o.parameters)==null?void 0:V.docs)==null?void 0:E.source}}};var D,K,w;i.parameters={...i.parameters,docs:{...(D=i.parameters)==null?void 0:D.docs,source:{originalSource:'createCaseStory("2.1-channel-description-changed")',...(w=(K=i.parameters)==null?void 0:K.docs)==null?void 0:w.source}}};var G,N,Y;r.parameters={...r.parameters,docs:{...(G=r.parameters)==null?void 0:G.docs,source:{originalSource:'createCaseStory("2.2-channel-description-removed")',...(Y=(N=r.parameters)==null?void 0:N.docs)==null?void 0:Y.source}}};var B,F,H;c.parameters={...c.parameters,docs:{...(B=c.parameters)==null?void 0:B.docs,source:{originalSource:'createCaseStory("2.3-channel-description-added")',...(H=(F=c.parameters)==null?void 0:F.docs)==null?void 0:H.source}}};var J,R,z;d.parameters={...d.parameters,docs:{...(J=d.parameters)==null?void 0:J.docs,source:{originalSource:'createCaseStory("2.4-channel-summary-changed")',...(z=(R=d.parameters)==null?void 0:R.docs)==null?void 0:z.source}}};var L,Q,U;l.parameters={...l.parameters,docs:{...(L=l.parameters)==null?void 0:L.docs,source:{originalSource:'createCaseStory("2.5-channel-summary-removed")',...(U=(Q=l.parameters)==null?void 0:Q.docs)==null?void 0:U.source}}};var W,X,Z;p.parameters={...p.parameters,docs:{...(W=p.parameters)==null?void 0:W.docs,source:{originalSource:'createCaseStory("2.6-channel-description-moved-to-summary")',...(Z=(X=p.parameters)==null?void 0:X.docs)==null?void 0:Z.source}}};var ee,ne,se;m.parameters={...m.parameters,docs:{...(ee=m.parameters)==null?void 0:ee.docs,source:{originalSource:'createCaseStory("2.7-channel-summary-moved-to-description")',...(se=(ne=m.parameters)==null?void 0:ne.docs)==null?void 0:se.source}}};var ae,te,oe;g.parameters={...g.parameters,docs:{...(ae=g.parameters)==null?void 0:ae.docs,source:{originalSource:'createCaseStory("3.1-channel-bindings-add-one-more-binding")',...(oe=(te=g.parameters)==null?void 0:te.docs)==null?void 0:oe.source}}};var ie,re,ce;_.parameters={..._.parameters,docs:{...(ie=_.parameters)==null?void 0:ie.docs,source:{originalSource:'createCaseStory("3.2-channel-bindings-remove-one-of-several-bindings")',...(ce=(re=_.parameters)==null?void 0:re.docs)==null?void 0:ce.source}}};var de,le,pe;h.parameters={...h.parameters,docs:{...(de=h.parameters)==null?void 0:de.docs,source:{originalSource:'createCaseStory("3.3-channel-bindings-add-bindings")',...(pe=(le=h.parameters)==null?void 0:le.docs)==null?void 0:pe.source}}};var me,ge,_e;f.parameters={...f.parameters,docs:{...(me=f.parameters)==null?void 0:me.docs,source:{originalSource:'createCaseStory("3.4-channel-bindings-remove-bindings")',...(_e=(ge=f.parameters)==null?void 0:ge.docs)==null?void 0:_e.source}}};var he,fe,ye;y.parameters={...y.parameters,docs:{...(he=y.parameters)==null?void 0:he.docs,source:{originalSource:'createCaseStory("4.1-channel-bindings-kafka-bindingVersion-changed")',...(ye=(fe=y.parameters)==null?void 0:fe.docs)==null?void 0:ye.source}}};var be,Me,Te;b.parameters={...b.parameters,docs:{...(be=b.parameters)==null?void 0:be.docs,source:{originalSource:'createCaseStory("4.2-channel-bindings-kafka-bindingVersion-removed")',...(Te=(Me=b.parameters)==null?void 0:Me.docs)==null?void 0:Te.source}}};var ve,ue,Ce;M.parameters={...M.parameters,docs:{...(ve=M.parameters)==null?void 0:ve.docs,source:{originalSource:'createCaseStory("4.3-channel-bindings-kafka-bindingVersion-added")',...(Ce=(ue=M.parameters)==null?void 0:ue.docs)==null?void 0:Ce.source}}};var $e,Ae,Se;T.parameters={...T.parameters,docs:{...($e=T.parameters)==null?void 0:$e.docs,source:{originalSource:'createCaseStory("5.1-channel-bindings-kafka-internal-jso-changes")',...(Se=(Ae=T.parameters)==null?void 0:Ae.docs)==null?void 0:Se.source}}};var ke,xe,je;v.parameters={...v.parameters,docs:{...(ke=v.parameters)==null?void 0:ke.docs,source:{originalSource:'createCaseStory("6.1-channel-x-second-added")',...(je=(xe=v.parameters)==null?void 0:xe.docs)==null?void 0:je.source}}};var Oe,qe,Ie;u.parameters={...u.parameters,docs:{...(Oe=u.parameters)==null?void 0:Oe.docs,source:{originalSource:'createCaseStory("6.2-channel-x-second-removed")',...(Ie=(qe=u.parameters)==null?void 0:qe.docs)==null?void 0:Ie.source}}};var Pe,Ve,Ee;C.parameters={...C.parameters,docs:{...(Pe=C.parameters)==null?void 0:Pe.docs,source:{originalSource:'createCaseStory("6.3-channel-x-second-changed")',...(Ee=(Ve=C.parameters)==null?void 0:Ve.docs)==null?void 0:Ee.source}}};var De,Ke,we;$.parameters={...$.parameters,docs:{...(De=$.parameters)==null?void 0:De.docs,source:{originalSource:'createCaseStory("6.4-channel-x-first-and-x-second-added")',...(we=(Ke=$.parameters)==null?void 0:Ke.docs)==null?void 0:we.source}}};var Ge,Ne,Ye;A.parameters={...A.parameters,docs:{...(Ge=A.parameters)==null?void 0:Ge.docs,source:{originalSource:'createCaseStory("6.5-channel-x-first-and-x-second-removed")',...(Ye=(Ne=A.parameters)==null?void 0:Ne.docs)==null?void 0:Ye.source}}};const ds=["Case_1_1_channel_title_changed","Case_1_2_channel_title_removed","Case_1_3_channel_title_added","Case_2_1_channel_description_changed","Case_2_2_channel_description_removed","Case_2_3_channel_description_added","Case_2_4_channel_summary_changed","Case_2_5_channel_summary_removed","Case_2_6_channel_description_moved_to_summary","Case_2_7_channel_summary_moved_to_description","Case_3_1_channel_bindings_add_one_more_binding","Case_3_2_channel_bindings_remove_one_of_several_bindings","Case_3_3_channel_bindings_add_bindings","Case_3_4_channel_bindings_remove_bindings","Case_4_1_channel_bindings_kafka_bindingVersion_changed","Case_4_2_channel_bindings_kafka_bindingVersion_removed","Case_4_3_channel_bindings_kafka_bindingVersion_added","Case_5_1_channel_bindings_kafka_internal_jso_changes","Case_6_1_channel_x_second_added","Case_6_2_channel_x_second_removed","Case_6_3_channel_x_second_changed","Case_6_4_channel_x_first_and_x_second_added","Case_6_5_channel_x_first_and_x_second_removed"];export{a as Case_1_1_channel_title_changed,t as Case_1_2_channel_title_removed,o as Case_1_3_channel_title_added,i as Case_2_1_channel_description_changed,r as Case_2_2_channel_description_removed,c as Case_2_3_channel_description_added,d as Case_2_4_channel_summary_changed,l as Case_2_5_channel_summary_removed,p as Case_2_6_channel_description_moved_to_summary,m as Case_2_7_channel_summary_moved_to_description,g as Case_3_1_channel_bindings_add_one_more_binding,_ as Case_3_2_channel_bindings_remove_one_of_several_bindings,h as Case_3_3_channel_bindings_add_bindings,f as Case_3_4_channel_bindings_remove_bindings,y as Case_4_1_channel_bindings_kafka_bindingVersion_changed,b as Case_4_2_channel_bindings_kafka_bindingVersion_removed,M as Case_4_3_channel_bindings_kafka_bindingVersion_added,T as Case_5_1_channel_bindings_kafka_internal_jso_changes,v as Case_6_1_channel_x_second_added,u as Case_6_2_channel_x_second_removed,C as Case_6_3_channel_x_second_changed,$ as Case_6_4_channel_x_first_and_x_second_added,A as Case_6_5_channel_x_first_and_x_second_removed,ds as __namedExportsOrder,cs as default};
