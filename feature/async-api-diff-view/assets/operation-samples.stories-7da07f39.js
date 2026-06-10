import{j as S}from"./_commonjs-dynamic-modules-6308e768.js";import{a as Fe}from"./AsyncApiOperationViewer-8a936d2b.js";import{c as He}from"./parse-yaml-source-2575e8ef.js";import{c as Je,a as Re,b as ze}from"./async-api-diffs-utils-0a7ed732.js";import"./index-f46741a2.js";import"./GraphPropNodeViewer-197d46c7.js";import"./index-415bee12.js";import"./GraphQLOperationDiffViewer-fe9c20e5.js";import"./GraphQLOperationViewer-1303c112.js";import"./js-yaml-71a24e1f.js";import"./index-d5b0668c.js";import"./index-442a5f79.js";import"./preprocess-389e548a.js";const Le=`asyncapi: 3.0.0
info:
  title: Sample AsyncAPI
  version: 1.0.0
channels:
  testChannel:
    address: events.default
    messages:
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
operations:
  sendOperation:
    action: send
    channel:
      $ref: '#/channels/testChannel'
    messages:
      - $ref: '#/components/messages/TestMessage'
    description: this description will be moved to summary
components:
  messages:
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
operations:
  sendOperation:
    action: send
    channel:
      $ref: '#/channels/testChannel'
    messages:
      - $ref: '#/components/messages/TestMessage'
    summary: this summary will be moved to description
components:
  messages:
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
operations:
  sendOperation:
    action: send
    channel:
      $ref: '#/channels/testChannel'
    messages:
      - $ref: '#/components/messages/TestMessage'
components:
  messages:
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
operations:
  sendOperation:
    action: send
    channel:
      $ref: '#/channels/testChannel'
    messages:
      - $ref: '#/components/messages/TestMessage'
components:
  messages:
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
operations:
  sendOperation:
    action: send
    channel:
      $ref: '#/channels/testChannel'
    messages:
      - $ref: '#/components/messages/TestMessage'
    summary: here it is!
components:
  messages:
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
operations:
  sendOperation:
    action: send
    channel:
      $ref: '#/channels/testChannel'
    messages:
      - $ref: '#/components/messages/TestMessage'
    description: here it is!
components:
  messages:
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
operations:
  sendOperation:
    action: send
    channel:
      $ref: '#/channels/testChannel'
    messages:
      - $ref: '#/components/messages/TestMessage'
components:
  messages:
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
`,Yn=Object.assign({"../../../../samples/async-api-diffs/operation/1.1-operation-title-changed/before.yaml":Le,"../../../../samples/async-api-diffs/operation/1.2-operation-title-removed/before.yaml":Qe,"../../../../samples/async-api-diffs/operation/1.3-operation-title-added/before.yaml":Ue,"../../../../samples/async-api-diffs/operation/2.1-operation-description-changed/before.yaml":We,"../../../../samples/async-api-diffs/operation/2.2-operation-description-removed/before.yaml":Xe,"../../../../samples/async-api-diffs/operation/2.3-operation-description-added/before.yaml":Ze,"../../../../samples/async-api-diffs/operation/2.4-operation-summary-changed/before.yaml":en,"../../../../samples/async-api-diffs/operation/2.5-operation-summary-removed/before.yaml":nn,"../../../../samples/async-api-diffs/operation/2.6-operation-description-moved-to-summary/before.yaml":sn,"../../../../samples/async-api-diffs/operation/2.7-operation-summary-moved-to-description/before.yaml":an,"../../../../samples/async-api-diffs/operation/3.1-operation-bindings-add-one-more-binding/before.yaml":tn,"../../../../samples/async-api-diffs/operation/3.2-operation-bindings-remove-one-of-several-bindings/before.yaml":on,"../../../../samples/async-api-diffs/operation/3.3-operation-bindings-add-bindings/before.yaml":rn,"../../../../samples/async-api-diffs/operation/3.4-operation-bindings-remove-bindings/before.yaml":pn,"../../../../samples/async-api-diffs/operation/4.1-operation-bindings-kafka-bindingVersion-changed/before.yaml":dn,"../../../../samples/async-api-diffs/operation/4.2-operation-bindings-kafka-bindingVersion-removed/before.yaml":cn,"../../../../samples/async-api-diffs/operation/4.3-operation-bindings-kafka-bindingVersion-added/before.yaml":mn,"../../../../samples/async-api-diffs/operation/5.1-operation-bindings-kafka-internal-jso-changes/before.yaml":gn,"../../../../samples/async-api-diffs/operation/6.1-operation-x-second-added/before.yaml":ln,"../../../../samples/async-api-diffs/operation/6.2-operation-x-second-removed/before.yaml":_n,"../../../../samples/async-api-diffs/operation/6.3-operation-x-second-changed/before.yaml":fn,"../../../../samples/async-api-diffs/operation/6.4-operation-x-first-and-x-second-added/before.yaml":yn,"../../../../samples/async-api-diffs/operation/6.5-operation-x-first-and-x-second-removed/before.yaml":hn}),Bn=Object.assign({"../../../../samples/async-api-diffs/operation/1.1-operation-title-changed/after.yaml":bn,"../../../../samples/async-api-diffs/operation/1.2-operation-title-removed/after.yaml":Mn,"../../../../samples/async-api-diffs/operation/1.3-operation-title-added/after.yaml":un,"../../../../samples/async-api-diffs/operation/2.1-operation-description-changed/after.yaml":Tn,"../../../../samples/async-api-diffs/operation/2.2-operation-description-removed/after.yaml":vn,"../../../../samples/async-api-diffs/operation/2.3-operation-description-added/after.yaml":Cn,"../../../../samples/async-api-diffs/operation/2.4-operation-summary-changed/after.yaml":$n,"../../../../samples/async-api-diffs/operation/2.5-operation-summary-removed/after.yaml":An,"../../../../samples/async-api-diffs/operation/2.6-operation-description-moved-to-summary/after.yaml":Sn,"../../../../samples/async-api-diffs/operation/2.7-operation-summary-moved-to-description/after.yaml":kn,"../../../../samples/async-api-diffs/operation/3.1-operation-bindings-add-one-more-binding/after.yaml":xn,"../../../../samples/async-api-diffs/operation/3.2-operation-bindings-remove-one-of-several-bindings/after.yaml":jn,"../../../../samples/async-api-diffs/operation/3.3-operation-bindings-add-bindings/after.yaml":In,"../../../../samples/async-api-diffs/operation/3.4-operation-bindings-remove-bindings/after.yaml":On,"../../../../samples/async-api-diffs/operation/4.1-operation-bindings-kafka-bindingVersion-changed/after.yaml":qn,"../../../../samples/async-api-diffs/operation/4.2-operation-bindings-kafka-bindingVersion-removed/after.yaml":Pn,"../../../../samples/async-api-diffs/operation/4.3-operation-bindings-kafka-bindingVersion-added/after.yaml":Vn,"../../../../samples/async-api-diffs/operation/5.1-operation-bindings-kafka-internal-jso-changes/after.yaml":En,"../../../../samples/async-api-diffs/operation/6.1-operation-x-second-added/after.yaml":wn,"../../../../samples/async-api-diffs/operation/6.2-operation-x-second-removed/after.yaml":Dn,"../../../../samples/async-api-diffs/operation/6.3-operation-x-second-changed/after.yaml":Gn,"../../../../samples/async-api-diffs/operation/6.4-operation-x-first-and-x-second-added/after.yaml":Kn,"../../../../samples/async-api-diffs/operation/6.5-operation-x-first-and-x-second-removed/after.yaml":Nn}),Fn=He(Yn,Bn),Hn=Je(Fn),Be=({caseId:n})=>{const s=Hn[n];return s?S.jsx(Fe,{...zn(s.beforeYaml,s.afterYaml)}):S.jsxs("div",{children:["Sample case not found: ",n]})},ps={title:"Async API Diffs Suite/Operation Samples",component:Be},Jn="sendOperation",Rn="TestMessage",zn=(n,s)=>Re(n,s,{operationKey:Jn,messageKey:Rn}),Ln=ze(Be,"message-operation"),e=n=>Ln(n),a=e("1.1-operation-title-changed"),t=e("1.2-operation-title-removed"),o=e("1.3-operation-title-added"),r=e("2.1-operation-description-changed"),i=e("2.2-operation-description-removed"),p=e("2.3-operation-description-added"),d=e("2.4-operation-summary-changed"),c=e("2.5-operation-summary-removed"),m=e("2.6-operation-description-moved-to-summary"),g=e("2.7-operation-summary-moved-to-description"),l=e("3.1-operation-bindings-add-one-more-binding"),_=e("3.2-operation-bindings-remove-one-of-several-bindings"),f=e("3.3-operation-bindings-add-bindings"),y=e("3.4-operation-bindings-remove-bindings"),h=e("4.1-operation-bindings-kafka-bindingVersion-changed"),b=e("4.2-operation-bindings-kafka-bindingVersion-removed"),M=e("4.3-operation-bindings-kafka-bindingVersion-added"),u=e("5.1-operation-bindings-kafka-internal-jso-changes"),T=e("6.1-operation-x-second-added"),v=e("6.2-operation-x-second-removed"),C=e("6.3-operation-x-second-changed"),$=e("6.4-operation-x-first-and-x-second-added"),A=e("6.5-operation-x-first-and-x-second-removed");var k,x,j;a.parameters={...a.parameters,docs:{...(k=a.parameters)==null?void 0:k.docs,source:{originalSource:'createCaseStory("1.1-operation-title-changed")',...(j=(x=a.parameters)==null?void 0:x.docs)==null?void 0:j.source}}};var I,O,q;t.parameters={...t.parameters,docs:{...(I=t.parameters)==null?void 0:I.docs,source:{originalSource:'createCaseStory("1.2-operation-title-removed")',...(q=(O=t.parameters)==null?void 0:O.docs)==null?void 0:q.source}}};var P,V,E;o.parameters={...o.parameters,docs:{...(P=o.parameters)==null?void 0:P.docs,source:{originalSource:'createCaseStory("1.3-operation-title-added")',...(E=(V=o.parameters)==null?void 0:V.docs)==null?void 0:E.source}}};var w,D,G;r.parameters={...r.parameters,docs:{...(w=r.parameters)==null?void 0:w.docs,source:{originalSource:'createCaseStory("2.1-operation-description-changed")',...(G=(D=r.parameters)==null?void 0:D.docs)==null?void 0:G.source}}};var K,N,Y;i.parameters={...i.parameters,docs:{...(K=i.parameters)==null?void 0:K.docs,source:{originalSource:'createCaseStory("2.2-operation-description-removed")',...(Y=(N=i.parameters)==null?void 0:N.docs)==null?void 0:Y.source}}};var B,F,H;p.parameters={...p.parameters,docs:{...(B=p.parameters)==null?void 0:B.docs,source:{originalSource:'createCaseStory("2.3-operation-description-added")',...(H=(F=p.parameters)==null?void 0:F.docs)==null?void 0:H.source}}};var J,R,z;d.parameters={...d.parameters,docs:{...(J=d.parameters)==null?void 0:J.docs,source:{originalSource:'createCaseStory("2.4-operation-summary-changed")',...(z=(R=d.parameters)==null?void 0:R.docs)==null?void 0:z.source}}};var L,Q,U;c.parameters={...c.parameters,docs:{...(L=c.parameters)==null?void 0:L.docs,source:{originalSource:'createCaseStory("2.5-operation-summary-removed")',...(U=(Q=c.parameters)==null?void 0:Q.docs)==null?void 0:U.source}}};var W,X,Z;m.parameters={...m.parameters,docs:{...(W=m.parameters)==null?void 0:W.docs,source:{originalSource:'createCaseStory("2.6-operation-description-moved-to-summary")',...(Z=(X=m.parameters)==null?void 0:X.docs)==null?void 0:Z.source}}};var ee,ne,se;g.parameters={...g.parameters,docs:{...(ee=g.parameters)==null?void 0:ee.docs,source:{originalSource:'createCaseStory("2.7-operation-summary-moved-to-description")',...(se=(ne=g.parameters)==null?void 0:ne.docs)==null?void 0:se.source}}};var ae,te,oe;l.parameters={...l.parameters,docs:{...(ae=l.parameters)==null?void 0:ae.docs,source:{originalSource:'createCaseStory("3.1-operation-bindings-add-one-more-binding")',...(oe=(te=l.parameters)==null?void 0:te.docs)==null?void 0:oe.source}}};var re,ie,pe;_.parameters={..._.parameters,docs:{...(re=_.parameters)==null?void 0:re.docs,source:{originalSource:'createCaseStory("3.2-operation-bindings-remove-one-of-several-bindings")',...(pe=(ie=_.parameters)==null?void 0:ie.docs)==null?void 0:pe.source}}};var de,ce,me;f.parameters={...f.parameters,docs:{...(de=f.parameters)==null?void 0:de.docs,source:{originalSource:'createCaseStory("3.3-operation-bindings-add-bindings")',...(me=(ce=f.parameters)==null?void 0:ce.docs)==null?void 0:me.source}}};var ge,le,_e;y.parameters={...y.parameters,docs:{...(ge=y.parameters)==null?void 0:ge.docs,source:{originalSource:'createCaseStory("3.4-operation-bindings-remove-bindings")',...(_e=(le=y.parameters)==null?void 0:le.docs)==null?void 0:_e.source}}};var fe,ye,he;h.parameters={...h.parameters,docs:{...(fe=h.parameters)==null?void 0:fe.docs,source:{originalSource:'createCaseStory("4.1-operation-bindings-kafka-bindingVersion-changed")',...(he=(ye=h.parameters)==null?void 0:ye.docs)==null?void 0:he.source}}};var be,Me,ue;b.parameters={...b.parameters,docs:{...(be=b.parameters)==null?void 0:be.docs,source:{originalSource:'createCaseStory("4.2-operation-bindings-kafka-bindingVersion-removed")',...(ue=(Me=b.parameters)==null?void 0:Me.docs)==null?void 0:ue.source}}};var Te,ve,Ce;M.parameters={...M.parameters,docs:{...(Te=M.parameters)==null?void 0:Te.docs,source:{originalSource:'createCaseStory("4.3-operation-bindings-kafka-bindingVersion-added")',...(Ce=(ve=M.parameters)==null?void 0:ve.docs)==null?void 0:Ce.source}}};var $e,Ae,Se;u.parameters={...u.parameters,docs:{...($e=u.parameters)==null?void 0:$e.docs,source:{originalSource:'createCaseStory("5.1-operation-bindings-kafka-internal-jso-changes")',...(Se=(Ae=u.parameters)==null?void 0:Ae.docs)==null?void 0:Se.source}}};var ke,xe,je;T.parameters={...T.parameters,docs:{...(ke=T.parameters)==null?void 0:ke.docs,source:{originalSource:'createCaseStory("6.1-operation-x-second-added")',...(je=(xe=T.parameters)==null?void 0:xe.docs)==null?void 0:je.source}}};var Ie,Oe,qe;v.parameters={...v.parameters,docs:{...(Ie=v.parameters)==null?void 0:Ie.docs,source:{originalSource:'createCaseStory("6.2-operation-x-second-removed")',...(qe=(Oe=v.parameters)==null?void 0:Oe.docs)==null?void 0:qe.source}}};var Pe,Ve,Ee;C.parameters={...C.parameters,docs:{...(Pe=C.parameters)==null?void 0:Pe.docs,source:{originalSource:'createCaseStory("6.3-operation-x-second-changed")',...(Ee=(Ve=C.parameters)==null?void 0:Ve.docs)==null?void 0:Ee.source}}};var we,De,Ge;$.parameters={...$.parameters,docs:{...(we=$.parameters)==null?void 0:we.docs,source:{originalSource:'createCaseStory("6.4-operation-x-first-and-x-second-added")',...(Ge=(De=$.parameters)==null?void 0:De.docs)==null?void 0:Ge.source}}};var Ke,Ne,Ye;A.parameters={...A.parameters,docs:{...(Ke=A.parameters)==null?void 0:Ke.docs,source:{originalSource:'createCaseStory("6.5-operation-x-first-and-x-second-removed")',...(Ye=(Ne=A.parameters)==null?void 0:Ne.docs)==null?void 0:Ye.source}}};const ds=["Case_1_1_operation_title_changed","Case_1_2_operation_title_removed","Case_1_3_operation_title_added","Case_2_1_operation_description_changed","Case_2_2_operation_description_removed","Case_2_3_operation_description_added","Case_2_4_operation_summary_changed","Case_2_5_operation_summary_removed","Case_2_6_operation_description_moved_to_summary","Case_2_7_operation_summary_moved_to_description","Case_3_1_operation_bindings_add_one_more_binding","Case_3_2_operation_bindings_remove_one_of_several_bindings","Case_3_3_operation_bindings_add_bindings","Case_3_4_operation_bindings_remove_bindings","Case_4_1_operation_bindings_kafka_bindingVersion_changed","Case_4_2_operation_bindings_kafka_bindingVersion_removed","Case_4_3_operation_bindings_kafka_bindingVersion_added","Case_5_1_operation_bindings_kafka_internal_jso_changes","Case_6_1_operation_x_second_added","Case_6_2_operation_x_second_removed","Case_6_3_operation_x_second_changed","Case_6_4_operation_x_first_and_x_second_added","Case_6_5_operation_x_first_and_x_second_removed"];export{a as Case_1_1_operation_title_changed,t as Case_1_2_operation_title_removed,o as Case_1_3_operation_title_added,r as Case_2_1_operation_description_changed,i as Case_2_2_operation_description_removed,p as Case_2_3_operation_description_added,d as Case_2_4_operation_summary_changed,c as Case_2_5_operation_summary_removed,m as Case_2_6_operation_description_moved_to_summary,g as Case_2_7_operation_summary_moved_to_description,l as Case_3_1_operation_bindings_add_one_more_binding,_ as Case_3_2_operation_bindings_remove_one_of_several_bindings,f as Case_3_3_operation_bindings_add_bindings,y as Case_3_4_operation_bindings_remove_bindings,h as Case_4_1_operation_bindings_kafka_bindingVersion_changed,b as Case_4_2_operation_bindings_kafka_bindingVersion_removed,M as Case_4_3_operation_bindings_kafka_bindingVersion_added,u as Case_5_1_operation_bindings_kafka_internal_jso_changes,T as Case_6_1_operation_x_second_added,v as Case_6_2_operation_x_second_removed,C as Case_6_3_operation_x_second_changed,$ as Case_6_4_operation_x_first_and_x_second_added,A as Case_6_5_operation_x_first_and_x_second_removed,ds as __namedExportsOrder,ps as default};
