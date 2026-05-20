import{j as P}from"./_commonjs-dynamic-modules-6308e768.js";import{A as _s}from"./AsyncApiOperationDiffsViewer-13587ab8.js";import{b as fs,T as ys,a as hs}from"./preprocess-70e89217.js";import{c as Ts,p as Ms}from"./yaml-source-2575e8ef.js";import"./index-f46741a2.js";import"./GraphPropNodeViewer-51972bf4.js";import"./index-415bee12.js";import"./AsyncApiOperationViewer-2fd250d4.js";import"./GraphQLOperationViewer-9f8dfa1a.js";import"./GraphQLOperationDiffViewer-43a6f48c.js";import"./js-yaml-71a24e1f.js";const bs=`asyncapi: 3.0.0
info:
  title: Sample AsyncAPI
  version: 1.0.0
channels:
  testChannel:
    address: events.default
    messages:
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
      title: message title
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
components:
  messages:
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
components:
  messages:
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
components:
  messages:
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
      summary: message summary
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
components:
  messages:
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
components:
  messages:
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
      summary: message moved value
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
      bindings:
        kafka:
          bindingVersion: 1.0.0
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
      bindings:
        kafka:
          bindingVersion: 1.0.0
        amqp:
          bindingVersion: 0.3.0
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
components:
  messages:
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
      bindings:
        kafka:
          bindingVersion: 1.0.0
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
components:
  messages:
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
components:
  messages:
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
components:
  messages:
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
          arbitraryJso:
            unchanged: keep
            removed: bye
            changed: 111
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
components:
  messages:
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
      x-first: first
      x-second: second
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
      x-first: first
      x-second: before
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
components:
  messages:
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
components:
  messages:
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
components:
  messages:
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
      headers:
        type: object
        description: before description
        properties:
          traceId:
            type: string
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
components:
  messages:
    TestMessage:
      name: TestMessage
      payload:
        type: string
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
        description: payload object
        properties:
          id:
            type: string
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
        description: before description
        properties:
          id:
            type: string
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
      title: CHANGED message title
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
components:
  messages:
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
      description: CHANGED message description
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
components:
  messages:
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
components:
  messages:
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
components:
  messages:
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
components:
  messages:
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
components:
  messages:
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
components:
  messages:
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
components:
  messages:
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
      bindings:
        amqp:
          bindingVersion: 0.3.0
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
components:
  messages:
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
components:
  messages:
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
components:
  messages:
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
components:
  messages:
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
components:
  messages:
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
components:
  messages:
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
          arbitraryJso:
            unchanged: keep
            changed: test string
            added: new
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
components:
  messages:
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
      x-first: first
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
      x-first: first
      x-second: after
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
components:
  messages:
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
components:
  messages:
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
      headers:
        type: object
        description: headers object
        properties:
          traceId:
            type: string
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
components:
  messages:
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
      headers:
        type: object
        description: after description
        properties:
          traceId:
            type: string
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
        description: payload object
        properties:
          id:
            type: string
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
components:
  messages:
    TestMessage:
      name: TestMessage
      payload:
        type: string
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
`,An=Object.assign({"../../../../samples/async-api-diffs/message/1.1-message-title-changed/before.yaml":bs,"../../../../samples/async-api-diffs/message/1.2-message-title-removed/before.yaml":vs,"../../../../samples/async-api-diffs/message/1.3-message-title-added/before.yaml":us,"../../../../samples/async-api-diffs/message/2.1-message-description-changed/before.yaml":Cs,"../../../../samples/async-api-diffs/message/2.2-message-description-removed/before.yaml":$s,"../../../../samples/async-api-diffs/message/2.3-message-description-added/before.yaml":As,"../../../../samples/async-api-diffs/message/2.4-message-summary-changed/before.yaml":Ss,"../../../../samples/async-api-diffs/message/2.5-message-summary-removed/before.yaml":ks,"../../../../samples/async-api-diffs/message/2.6-message-description-moved-to-summary/before.yaml":js,"../../../../samples/async-api-diffs/message/2.7-message-summary-moved-to-description/before.yaml":Is,"../../../../samples/async-api-diffs/message/3.1-message-bindings-add-amqp/before.yaml":Os,"../../../../samples/async-api-diffs/message/3.2-message-bindings-remove-kafka/before.yaml":xs,"../../../../samples/async-api-diffs/message/3.3-message-bindings-add-kafka/before.yaml":Ps,"../../../../samples/async-api-diffs/message/3.4-message-bindings-remove-kafka/before.yaml":qs,"../../../../samples/async-api-diffs/message/4.1-message-bindings-kafka-bindingVersion-changed/before.yaml":Vs,"../../../../samples/async-api-diffs/message/4.2-message-bindings-kafka-bindingVersion-removed/before.yaml":Es,"../../../../samples/async-api-diffs/message/4.3-message-bindings-kafka-bindingVersion-added/before.yaml":Ds,"../../../../samples/async-api-diffs/message/5.1-message-bindings-kafka-internal-jso-changes/before.yaml":Ks,"../../../../samples/async-api-diffs/message/6.1-message-x-second-added/before.yaml":Ns,"../../../../samples/async-api-diffs/message/6.2-message-x-second-removed/before.yaml":Ys,"../../../../samples/async-api-diffs/message/6.3-message-x-second-changed/before.yaml":Rs,"../../../../samples/async-api-diffs/message/6.4-message-x-first-and-x-second-added/before.yaml":Fs,"../../../../samples/async-api-diffs/message/6.5-message-x-first-and-x-second-removed/before.yaml":Gs,"../../../../samples/async-api-diffs/message/7.1-message-headers-object-schema-added/before.yaml":ws,"../../../../samples/async-api-diffs/message/7.2-message-headers-object-schema-removed/before.yaml":Hs,"../../../../samples/async-api-diffs/message/7.3-message-headers-description-changed/before.yaml":Js,"../../../../samples/async-api-diffs/message/7.4-message-payload-object-schema-added/before.yaml":Bs,"../../../../samples/async-api-diffs/message/7.5-message-payload-object-schema-removed/before.yaml":zs,"../../../../samples/async-api-diffs/message/7.6-message-payload-description-changed/before.yaml":Ls}),Sn=Object.assign({"../../../../samples/async-api-diffs/message/1.1-message-title-changed/after.yaml":Qs,"../../../../samples/async-api-diffs/message/1.2-message-title-removed/after.yaml":Us,"../../../../samples/async-api-diffs/message/1.3-message-title-added/after.yaml":Ws,"../../../../samples/async-api-diffs/message/2.1-message-description-changed/after.yaml":Xs,"../../../../samples/async-api-diffs/message/2.2-message-description-removed/after.yaml":Zs,"../../../../samples/async-api-diffs/message/2.3-message-description-added/after.yaml":en,"../../../../samples/async-api-diffs/message/2.4-message-summary-changed/after.yaml":sn,"../../../../samples/async-api-diffs/message/2.5-message-summary-removed/after.yaml":nn,"../../../../samples/async-api-diffs/message/2.6-message-description-moved-to-summary/after.yaml":an,"../../../../samples/async-api-diffs/message/2.7-message-summary-moved-to-description/after.yaml":tn,"../../../../samples/async-api-diffs/message/3.1-message-bindings-add-amqp/after.yaml":on,"../../../../samples/async-api-diffs/message/3.2-message-bindings-remove-kafka/after.yaml":rn,"../../../../samples/async-api-diffs/message/3.3-message-bindings-add-kafka/after.yaml":mn,"../../../../samples/async-api-diffs/message/3.4-message-bindings-remove-kafka/after.yaml":dn,"../../../../samples/async-api-diffs/message/4.1-message-bindings-kafka-bindingVersion-changed/after.yaml":cn,"../../../../samples/async-api-diffs/message/4.2-message-bindings-kafka-bindingVersion-removed/after.yaml":gn,"../../../../samples/async-api-diffs/message/4.3-message-bindings-kafka-bindingVersion-added/after.yaml":pn,"../../../../samples/async-api-diffs/message/5.1-message-bindings-kafka-internal-jso-changes/after.yaml":ln,"../../../../samples/async-api-diffs/message/6.1-message-x-second-added/after.yaml":_n,"../../../../samples/async-api-diffs/message/6.2-message-x-second-removed/after.yaml":fn,"../../../../samples/async-api-diffs/message/6.3-message-x-second-changed/after.yaml":yn,"../../../../samples/async-api-diffs/message/6.4-message-x-first-and-x-second-added/after.yaml":hn,"../../../../samples/async-api-diffs/message/6.5-message-x-first-and-x-second-removed/after.yaml":Tn,"../../../../samples/async-api-diffs/message/7.1-message-headers-object-schema-added/after.yaml":Mn,"../../../../samples/async-api-diffs/message/7.2-message-headers-object-schema-removed/after.yaml":bn,"../../../../samples/async-api-diffs/message/7.3-message-headers-description-changed/after.yaml":vn,"../../../../samples/async-api-diffs/message/7.4-message-payload-object-schema-added/after.yaml":un,"../../../../samples/async-api-diffs/message/7.5-message-payload-object-schema-removed/after.yaml":Cn,"../../../../samples/async-api-diffs/message/7.6-message-payload-description-changed/after.yaml":$n}),kn=Ts(An,Sn),jn=Object.fromEntries(kn.map(s=>[s.caseId,s])),ls=({caseId:s})=>{const n=jn[s];return n?P.jsx(_s,{...xn(n.beforeYaml,n.afterYaml)}):P.jsxs("div",{children:["Sample case not found: ",s]})},wn={title:"Async API Diffs Suite/Message Samples",component:ls},In="sendOperation",On="TestMessage",q=s=>Ms(s),xn=(s,n)=>({devMode:!0,mergedSource:fs({beforeSource:q(s),afterSource:q(n)}),operationKeys:{operationKey:In,messageKey:On},referenceNamePropertyKey:ys,diffMetaKeys:hs}),e=s=>({name:s,args:{caseId:s},render:n=>P.jsx(ls,{caseId:n.caseId})}),a=e("1.1-message-title-changed"),t=e("1.2-message-title-removed"),o=e("1.3-message-title-added"),r=e("2.1-message-description-changed"),i=e("2.2-message-description-removed"),m=e("2.3-message-description-added"),d=e("2.4-message-summary-changed"),c=e("2.5-message-summary-removed"),g=e("2.6-message-description-moved-to-summary"),p=e("2.7-message-summary-moved-to-description"),l=e("3.1-message-bindings-add-amqp"),_=e("3.2-message-bindings-remove-kafka"),f=e("3.3-message-bindings-add-kafka"),y=e("3.4-message-bindings-remove-kafka"),h=e("4.1-message-bindings-kafka-bindingVersion-changed"),T=e("4.2-message-bindings-kafka-bindingVersion-removed"),M=e("4.3-message-bindings-kafka-bindingVersion-added"),b=e("5.1-message-bindings-kafka-internal-jso-changes"),v=e("6.1-message-x-second-added"),u=e("6.2-message-x-second-removed"),C=e("6.3-message-x-second-changed"),$=e("6.4-message-x-first-and-x-second-added"),A=e("6.5-message-x-first-and-x-second-removed"),S=e("7.1-message-headers-object-schema-added"),k=e("7.2-message-headers-object-schema-removed"),j=e("7.3-message-headers-description-changed"),I=e("7.4-message-payload-object-schema-added"),O=e("7.5-message-payload-object-schema-removed"),x=e("7.6-message-payload-description-changed");var V,E,D;a.parameters={...a.parameters,docs:{...(V=a.parameters)==null?void 0:V.docs,source:{originalSource:'createCaseStory("1.1-message-title-changed")',...(D=(E=a.parameters)==null?void 0:E.docs)==null?void 0:D.source}}};var K,N,Y;t.parameters={...t.parameters,docs:{...(K=t.parameters)==null?void 0:K.docs,source:{originalSource:'createCaseStory("1.2-message-title-removed")',...(Y=(N=t.parameters)==null?void 0:N.docs)==null?void 0:Y.source}}};var R,F,G;o.parameters={...o.parameters,docs:{...(R=o.parameters)==null?void 0:R.docs,source:{originalSource:'createCaseStory("1.3-message-title-added")',...(G=(F=o.parameters)==null?void 0:F.docs)==null?void 0:G.source}}};var w,H,J;r.parameters={...r.parameters,docs:{...(w=r.parameters)==null?void 0:w.docs,source:{originalSource:'createCaseStory("2.1-message-description-changed")',...(J=(H=r.parameters)==null?void 0:H.docs)==null?void 0:J.source}}};var B,z,L;i.parameters={...i.parameters,docs:{...(B=i.parameters)==null?void 0:B.docs,source:{originalSource:'createCaseStory("2.2-message-description-removed")',...(L=(z=i.parameters)==null?void 0:z.docs)==null?void 0:L.source}}};var Q,U,W;m.parameters={...m.parameters,docs:{...(Q=m.parameters)==null?void 0:Q.docs,source:{originalSource:'createCaseStory("2.3-message-description-added")',...(W=(U=m.parameters)==null?void 0:U.docs)==null?void 0:W.source}}};var X,Z,ee;d.parameters={...d.parameters,docs:{...(X=d.parameters)==null?void 0:X.docs,source:{originalSource:'createCaseStory("2.4-message-summary-changed")',...(ee=(Z=d.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var se,ne,ae;c.parameters={...c.parameters,docs:{...(se=c.parameters)==null?void 0:se.docs,source:{originalSource:'createCaseStory("2.5-message-summary-removed")',...(ae=(ne=c.parameters)==null?void 0:ne.docs)==null?void 0:ae.source}}};var te,oe,re;g.parameters={...g.parameters,docs:{...(te=g.parameters)==null?void 0:te.docs,source:{originalSource:'createCaseStory("2.6-message-description-moved-to-summary")',...(re=(oe=g.parameters)==null?void 0:oe.docs)==null?void 0:re.source}}};var ie,me,de;p.parameters={...p.parameters,docs:{...(ie=p.parameters)==null?void 0:ie.docs,source:{originalSource:'createCaseStory("2.7-message-summary-moved-to-description")',...(de=(me=p.parameters)==null?void 0:me.docs)==null?void 0:de.source}}};var ce,ge,pe;l.parameters={...l.parameters,docs:{...(ce=l.parameters)==null?void 0:ce.docs,source:{originalSource:'createCaseStory("3.1-message-bindings-add-amqp")',...(pe=(ge=l.parameters)==null?void 0:ge.docs)==null?void 0:pe.source}}};var le,_e,fe;_.parameters={..._.parameters,docs:{...(le=_.parameters)==null?void 0:le.docs,source:{originalSource:'createCaseStory("3.2-message-bindings-remove-kafka")',...(fe=(_e=_.parameters)==null?void 0:_e.docs)==null?void 0:fe.source}}};var ye,he,Te;f.parameters={...f.parameters,docs:{...(ye=f.parameters)==null?void 0:ye.docs,source:{originalSource:'createCaseStory("3.3-message-bindings-add-kafka")',...(Te=(he=f.parameters)==null?void 0:he.docs)==null?void 0:Te.source}}};var Me,be,ve;y.parameters={...y.parameters,docs:{...(Me=y.parameters)==null?void 0:Me.docs,source:{originalSource:'createCaseStory("3.4-message-bindings-remove-kafka")',...(ve=(be=y.parameters)==null?void 0:be.docs)==null?void 0:ve.source}}};var ue,Ce,$e;h.parameters={...h.parameters,docs:{...(ue=h.parameters)==null?void 0:ue.docs,source:{originalSource:'createCaseStory("4.1-message-bindings-kafka-bindingVersion-changed")',...($e=(Ce=h.parameters)==null?void 0:Ce.docs)==null?void 0:$e.source}}};var Ae,Se,ke;T.parameters={...T.parameters,docs:{...(Ae=T.parameters)==null?void 0:Ae.docs,source:{originalSource:'createCaseStory("4.2-message-bindings-kafka-bindingVersion-removed")',...(ke=(Se=T.parameters)==null?void 0:Se.docs)==null?void 0:ke.source}}};var je,Ie,Oe;M.parameters={...M.parameters,docs:{...(je=M.parameters)==null?void 0:je.docs,source:{originalSource:'createCaseStory("4.3-message-bindings-kafka-bindingVersion-added")',...(Oe=(Ie=M.parameters)==null?void 0:Ie.docs)==null?void 0:Oe.source}}};var xe,Pe,qe;b.parameters={...b.parameters,docs:{...(xe=b.parameters)==null?void 0:xe.docs,source:{originalSource:'createCaseStory("5.1-message-bindings-kafka-internal-jso-changes")',...(qe=(Pe=b.parameters)==null?void 0:Pe.docs)==null?void 0:qe.source}}};var Ve,Ee,De;v.parameters={...v.parameters,docs:{...(Ve=v.parameters)==null?void 0:Ve.docs,source:{originalSource:'createCaseStory("6.1-message-x-second-added")',...(De=(Ee=v.parameters)==null?void 0:Ee.docs)==null?void 0:De.source}}};var Ke,Ne,Ye;u.parameters={...u.parameters,docs:{...(Ke=u.parameters)==null?void 0:Ke.docs,source:{originalSource:'createCaseStory("6.2-message-x-second-removed")',...(Ye=(Ne=u.parameters)==null?void 0:Ne.docs)==null?void 0:Ye.source}}};var Re,Fe,Ge;C.parameters={...C.parameters,docs:{...(Re=C.parameters)==null?void 0:Re.docs,source:{originalSource:'createCaseStory("6.3-message-x-second-changed")',...(Ge=(Fe=C.parameters)==null?void 0:Fe.docs)==null?void 0:Ge.source}}};var we,He,Je;$.parameters={...$.parameters,docs:{...(we=$.parameters)==null?void 0:we.docs,source:{originalSource:'createCaseStory("6.4-message-x-first-and-x-second-added")',...(Je=(He=$.parameters)==null?void 0:He.docs)==null?void 0:Je.source}}};var Be,ze,Le;A.parameters={...A.parameters,docs:{...(Be=A.parameters)==null?void 0:Be.docs,source:{originalSource:'createCaseStory("6.5-message-x-first-and-x-second-removed")',...(Le=(ze=A.parameters)==null?void 0:ze.docs)==null?void 0:Le.source}}};var Qe,Ue,We;S.parameters={...S.parameters,docs:{...(Qe=S.parameters)==null?void 0:Qe.docs,source:{originalSource:'createCaseStory("7.1-message-headers-object-schema-added")',...(We=(Ue=S.parameters)==null?void 0:Ue.docs)==null?void 0:We.source}}};var Xe,Ze,es;k.parameters={...k.parameters,docs:{...(Xe=k.parameters)==null?void 0:Xe.docs,source:{originalSource:'createCaseStory("7.2-message-headers-object-schema-removed")',...(es=(Ze=k.parameters)==null?void 0:Ze.docs)==null?void 0:es.source}}};var ss,ns,as;j.parameters={...j.parameters,docs:{...(ss=j.parameters)==null?void 0:ss.docs,source:{originalSource:'createCaseStory("7.3-message-headers-description-changed")',...(as=(ns=j.parameters)==null?void 0:ns.docs)==null?void 0:as.source}}};var ts,os,rs;I.parameters={...I.parameters,docs:{...(ts=I.parameters)==null?void 0:ts.docs,source:{originalSource:'createCaseStory("7.4-message-payload-object-schema-added")',...(rs=(os=I.parameters)==null?void 0:os.docs)==null?void 0:rs.source}}};var is,ms,ds;O.parameters={...O.parameters,docs:{...(is=O.parameters)==null?void 0:is.docs,source:{originalSource:'createCaseStory("7.5-message-payload-object-schema-removed")',...(ds=(ms=O.parameters)==null?void 0:ms.docs)==null?void 0:ds.source}}};var cs,gs,ps;x.parameters={...x.parameters,docs:{...(cs=x.parameters)==null?void 0:cs.docs,source:{originalSource:'createCaseStory("7.6-message-payload-description-changed")',...(ps=(gs=x.parameters)==null?void 0:gs.docs)==null?void 0:ps.source}}};const Hn=["Case_1_1_message_title_changed","Case_1_2_message_title_removed","Case_1_3_message_title_added","Case_2_1_message_description_changed","Case_2_2_message_description_removed","Case_2_3_message_description_added","Case_2_4_message_summary_changed","Case_2_5_message_summary_removed","Case_2_6_message_description_moved_to_summary","Case_2_7_message_summary_moved_to_description","Case_3_1_message_bindings_add_amqp","Case_3_2_message_bindings_remove_kafka","Case_3_3_message_bindings_add_kafka","Case_3_4_message_bindings_remove_kafka","Case_4_1_message_bindings_kafka_bindingVersion_changed","Case_4_2_message_bindings_kafka_bindingVersion_removed","Case_4_3_message_bindings_kafka_bindingVersion_added","Case_5_1_message_bindings_kafka_internal_jso_changes","Case_6_1_message_x_second_added","Case_6_2_message_x_second_removed","Case_6_3_message_x_second_changed","Case_6_4_message_x_first_and_x_second_added","Case_6_5_message_x_first_and_x_second_removed","Case_7_1_message_headers_object_schema_added","Case_7_2_message_headers_object_schema_removed","Case_7_3_message_headers_description_changed","Case_7_4_message_payload_object_schema_added","Case_7_5_message_payload_object_schema_removed","Case_7_6_message_payload_description_changed"];export{a as Case_1_1_message_title_changed,t as Case_1_2_message_title_removed,o as Case_1_3_message_title_added,r as Case_2_1_message_description_changed,i as Case_2_2_message_description_removed,m as Case_2_3_message_description_added,d as Case_2_4_message_summary_changed,c as Case_2_5_message_summary_removed,g as Case_2_6_message_description_moved_to_summary,p as Case_2_7_message_summary_moved_to_description,l as Case_3_1_message_bindings_add_amqp,_ as Case_3_2_message_bindings_remove_kafka,f as Case_3_3_message_bindings_add_kafka,y as Case_3_4_message_bindings_remove_kafka,h as Case_4_1_message_bindings_kafka_bindingVersion_changed,T as Case_4_2_message_bindings_kafka_bindingVersion_removed,M as Case_4_3_message_bindings_kafka_bindingVersion_added,b as Case_5_1_message_bindings_kafka_internal_jso_changes,v as Case_6_1_message_x_second_added,u as Case_6_2_message_x_second_removed,C as Case_6_3_message_x_second_changed,$ as Case_6_4_message_x_first_and_x_second_added,A as Case_6_5_message_x_first_and_x_second_removed,S as Case_7_1_message_headers_object_schema_added,k as Case_7_2_message_headers_object_schema_removed,j as Case_7_3_message_headers_description_changed,I as Case_7_4_message_payload_object_schema_added,O as Case_7_5_message_payload_object_schema_removed,x as Case_7_6_message_payload_description_changed,Hn as __namedExportsOrder,wn as default};
