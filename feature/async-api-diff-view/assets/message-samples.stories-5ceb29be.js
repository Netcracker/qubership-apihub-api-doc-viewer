import{j as F}from"./_commonjs-dynamic-modules-6308e768.js";import{a as en}from"./AsyncApiOperationViewer-78094fe5.js";import{b as sn,T as nn,a as an}from"./preprocess-0b5e1c79.js";import{c as tn,p as on}from"./yaml-source-2575e8ef.js";import"./index-f46741a2.js";import"./GraphPropNodeViewer-ba775d99.js";import"./index-415bee12.js";import"./GraphQLOperationDiffViewer-0272a921.js";import"./GraphQLOperationViewer-b4610d98.js";import"./js-yaml-71a24e1f.js";const rn=`asyncapi: 3.0.0
info:
  title: Sample AsyncAPI
  version: 1.0.0
channels:
  testChannel:
    address: events.default
    messages:
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
      title: message title
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
      description: message description
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
      description: message description
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
      summary: message summary
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
      summary: message summary
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
      description: this description will be moved to summary
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
      summary: this summary will be moved to description
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
      bindings:
        kafka:
          bindingVersion: 1.0.0
          key:
            type: string
          schemaIdLocation: header
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
      bindings:
        kafka:
          bindingVersion: 1.0.0
          key:
            type: string
          schemaIdLocation: header
        amqp:
          bindingVersion: 0.3.0
          contentEncoding: gzip
          messageType: user.signup
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
      bindings:
        kafka:
          bindingVersion: 1.0.0
          key:
            type: string
          schemaIdLocation: header
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
      bindings:
        kafka:
          bindingVersion: 1.0.0
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
      bindings:
        kafka:
          bindingVersion: 1.0.0
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
        type: object
        properties:
          id:
            type: string
        required:
          - id
      bindings:
        kafka: {}
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
components:
  messages:
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
components:
  messages:
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
      x-first: first
      x-second: before
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
components:
  messages:
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
components:
  messages:
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
components:
  messages:
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
components:
  messages:
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
components:
  messages:
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
components:
  messages:
    TestMessage:
      name: TestMessage
      headers:
        type: object
        properties:
          id:
            type: string
        required:
          - id
      payload:
        type: object
        description: payload object
        properties:
          traceId:
            type: string
          correlationId:
            type: string
            x-first: first
            x-second: second
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
components:
  messages:
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
        x-first: first
        x-second: second
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
      headers:
        type: object
        description: headers object
        properties:
          traceId:
            type: string
        x-first: first-old
        x-second: second
`,Yn=`asyncapi: 3.0.0
info:
  title: Sample AsyncAPI
  version: 1.0.0
channels:
  testChannel:
    address: events.default
    messages:
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
`,Rn=`asyncapi: 3.0.0
info:
  title: Sample AsyncAPI
  version: 1.0.0
channels:
  testChannel:
    address: events.default
    messages:
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
          correlationId:
            type: string
            x-first: first
            x-second: second
`,Fn=`asyncapi: 3.0.0
info:
  title: Sample AsyncAPI
  version: 1.0.0
channels:
  testChannel:
    address: events.default
    messages:
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
      headers:
        type: object
        properties:
          id:
            type: string
        required:
          - id
      payload:
        type: object
        description: payload object
        properties:
          traceId:
            type: string
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
operations:
  sendOperation:
    action: send
    channel:
      $ref: '#/channels/testChannel'
    messages:
      - $ref: '#/components/messages/TestMessage'
components:
  messages:
    TestMessage:
      name: TestMessage
      headers:
        type: object
        properties:
          id:
            type: string
        required:
          - id
      payload:
        type: object
        description: payload object
        properties:
          traceId:
            type: string
        x-first: first
        x-second: second
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
components:
  messages:
    TestMessage:
      name: TestMessage
      headers:
        type: object
        properties:
          id:
            type: string
        required:
          - id
      payload:
        type: object
        description: payload object
        properties:
          traceId:
            type: string
        x-first: first-old
        x-second: second
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
      headers:
        type: object
        properties:
          id:
            type: string
        required:
          - id
      payload:
        type: object
        description: payload object
        properties:
          traceId:
            type: string
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
operations:
  sendOperation:
    action: send
    channel:
      $ref: '#/channels/testChannel'
    messages:
      - $ref: '#/components/messages/TestMessage'
components:
  messages:
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
operations:
  sendOperation:
    action: send
    channel:
      $ref: '#/channels/testChannel'
    messages:
      - $ref: '#/components/messages/TestMessage'
components:
  messages:
    TestMessage:
      name: TestMessage
      payload:
        type: object
        properties:
          id:
            type: string
        required:
          - id
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
operations:
  sendOperation:
    action: send
    channel:
      $ref: '#/channels/testChannel'
    messages:
      - $ref: '#/components/messages/TestMessage'
components:
  messages:
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
      description: CHANGED message description
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
components:
  messages:
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
      summary: CHANGED message summary
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
      summary: here it is!
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
      description: here it is!
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
      bindings:
        kafka:
          bindingVersion: 1.0.0
          key:
            type: string
          schemaIdLocation: header
        amqp:
          bindingVersion: 0.3.0
          contentEncoding: gzip
          messageType: user.signup
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
      bindings:
        amqp:
          bindingVersion: 0.3.0
          contentEncoding: gzip
          messageType: user.signup
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
      bindings:
        kafka:
          bindingVersion: 1.0.0
          key:
            type: string
          schemaIdLocation: header
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
      bindings:
        kafka:
          bindingVersion: 2.0.0
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
        kafka: {}
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
          arbitraryJso:
            unchanged: keep
            changed: test string
            added: new
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
      x-first: first
      x-second: second
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
      x-first: first
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
      x-first: first
      x-second: after
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
      x-first: first
      x-second: second
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
      headers:
        type: object
        description: headers object
        properties:
          traceId:
            type: string
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
      headers:
        type: object
        description: after description
        properties:
          traceId:
            type: string
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
        description: payload object
        properties:
          id:
            type: string
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
        description: after description
        properties:
          id:
            type: string
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
      headers:
        type: object
        description: headers object
        properties:
          traceId:
            type: string
        x-first: first
        x-second: second
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
      headers:
        type: object
        properties:
          id:
            type: string
        required:
          - id
      payload:
        type: object
        description: payload object
        properties:
          traceId:
            type: string
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
      headers:
        type: object
        description: headers object
        properties:
          traceId:
            type: string
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
      headers:
        type: object
        description: headers object
        properties:
          traceId:
            type: string
        x-first: first-new
        x-third: third
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
      headers:
        type: object
        description: headers object
        properties:
          traceId:
            type: string
          correlationId:
            type: string
            x-first: first
            x-second: second
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
      headers:
        type: object
        description: headers object
        properties:
          traceId:
            type: string
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
      headers:
        type: object
        properties:
          id:
            type: string
        required:
          - id
      payload:
        type: object
        description: payload object
        properties:
          traceId:
            type: string
        x-first: first
        x-second: second
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
      headers:
        type: object
        properties:
          id:
            type: string
        required:
          - id
      payload:
        type: object
        description: payload object
        properties:
          traceId:
            type: string
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
      headers:
        type: object
        properties:
          id:
            type: string
        required:
          - id
      payload:
        type: object
        description: payload object
        properties:
          traceId:
            type: string
        x-first: first-new
        x-third: third
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
      headers:
        type: object
        properties:
          id:
            type: string
        required:
          - id
      payload:
        type: object
        description: payload object
        properties:
          traceId:
            type: string
          correlationId:
            type: string
            x-first: first
            x-second: second
`,Pa=Object.assign({"../../../../samples/async-api-diffs/message/1.1-message-title-changed/before.yaml":rn,"../../../../samples/async-api-diffs/message/1.2-message-title-removed/before.yaml":cn,"../../../../samples/async-api-diffs/message/1.3-message-title-added/before.yaml":dn,"../../../../samples/async-api-diffs/message/2.1-message-description-changed/before.yaml":mn,"../../../../samples/async-api-diffs/message/2.2-message-description-removed/before.yaml":pn,"../../../../samples/async-api-diffs/message/2.3-message-description-added/before.yaml":gn,"../../../../samples/async-api-diffs/message/2.4-message-summary-changed/before.yaml":ln,"../../../../samples/async-api-diffs/message/2.5-message-summary-removed/before.yaml":_n,"../../../../samples/async-api-diffs/message/2.6-message-description-moved-to-summary/before.yaml":yn,"../../../../samples/async-api-diffs/message/2.7-message-summary-moved-to-description/before.yaml":fn,"../../../../samples/async-api-diffs/message/3.1-message-bindings-add-one-more-binding/before.yaml":hn,"../../../../samples/async-api-diffs/message/3.2-message-bindings-remove-one-of-several-bindings/before.yaml":bn,"../../../../samples/async-api-diffs/message/3.3-message-bindings-add-bindings/before.yaml":Tn,"../../../../samples/async-api-diffs/message/3.4-message-bindings-remove-bindings/before.yaml":Mn,"../../../../samples/async-api-diffs/message/4.1-message-bindings-kafka-bindingVersion-changed/before.yaml":vn,"../../../../samples/async-api-diffs/message/4.2-message-bindings-kafka-bindingVersion-removed/before.yaml":un,"../../../../samples/async-api-diffs/message/4.3-message-bindings-kafka-bindingVersion-added/before.yaml":Cn,"../../../../samples/async-api-diffs/message/5.1-message-bindings-kafka-internal-jso-changes/before.yaml":$n,"../../../../samples/async-api-diffs/message/6.1-message-x-second-added/before.yaml":jn,"../../../../samples/async-api-diffs/message/6.2-message-x-second-removed/before.yaml":Sn,"../../../../samples/async-api-diffs/message/6.3-message-x-second-changed/before.yaml":An,"../../../../samples/async-api-diffs/message/6.4-message-x-first-and-x-second-added/before.yaml":xn,"../../../../samples/async-api-diffs/message/6.5-message-x-first-and-x-second-removed/before.yaml":In,"../../../../samples/async-api-diffs/message/7.1-message-headers-object-schema-added/before.yaml":On,"../../../../samples/async-api-diffs/message/7.2-message-headers-object-schema-removed/before.yaml":Pn,"../../../../samples/async-api-diffs/message/7.3-message-headers-description-changed/before.yaml":kn,"../../../../samples/async-api-diffs/message/7.4-message-payload-object-schema-added/before.yaml":qn,"../../../../samples/async-api-diffs/message/7.5-message-payload-object-schema-removed/before.yaml":Vn,"../../../../samples/async-api-diffs/message/7.6-message-payload-description-changed/before.yaml":wn,"../../../../samples/async-api-diffs/message/8.1-message-headers-object-schema-added-extensions/before.yaml":En,"../../../../samples/async-api-diffs/message/8.10-message-payload-object-schema-removed-property-with-extensions/before.yaml":Dn,"../../../../samples/async-api-diffs/message/8.2-message-headers-object-schema-removed-extensions/before.yaml":Kn,"../../../../samples/async-api-diffs/message/8.3-message-headers-object-schema-changed-extensions/before.yaml":Nn,"../../../../samples/async-api-diffs/message/8.4-message-headers-object-schema-added-property-with-extensions/before.yaml":Yn,"../../../../samples/async-api-diffs/message/8.5-message-headers-object-schema-removed-property-with-extensions/before.yaml":Rn,"../../../../samples/async-api-diffs/message/8.6-message-payload-object-schema-added-extensions/before.yaml":Fn,"../../../../samples/async-api-diffs/message/8.7-message-payload-object-schema-removed-extensions/before.yaml":Ln,"../../../../samples/async-api-diffs/message/8.8-message-payload-object-schema-changed-extensions/before.yaml":Gn,"../../../../samples/async-api-diffs/message/8.9-message-payload-object-schema-added-property-with-extensions/before.yaml":zn}),ka=Object.assign({"../../../../samples/async-api-diffs/message/1.1-message-title-changed/after.yaml":Hn,"../../../../samples/async-api-diffs/message/1.2-message-title-removed/after.yaml":Jn,"../../../../samples/async-api-diffs/message/1.3-message-title-added/after.yaml":Bn,"../../../../samples/async-api-diffs/message/2.1-message-description-changed/after.yaml":Qn,"../../../../samples/async-api-diffs/message/2.2-message-description-removed/after.yaml":Un,"../../../../samples/async-api-diffs/message/2.3-message-description-added/after.yaml":Wn,"../../../../samples/async-api-diffs/message/2.4-message-summary-changed/after.yaml":Xn,"../../../../samples/async-api-diffs/message/2.5-message-summary-removed/after.yaml":Zn,"../../../../samples/async-api-diffs/message/2.6-message-description-moved-to-summary/after.yaml":ea,"../../../../samples/async-api-diffs/message/2.7-message-summary-moved-to-description/after.yaml":sa,"../../../../samples/async-api-diffs/message/3.1-message-bindings-add-one-more-binding/after.yaml":na,"../../../../samples/async-api-diffs/message/3.2-message-bindings-remove-one-of-several-bindings/after.yaml":aa,"../../../../samples/async-api-diffs/message/3.3-message-bindings-add-bindings/after.yaml":ta,"../../../../samples/async-api-diffs/message/3.4-message-bindings-remove-bindings/after.yaml":oa,"../../../../samples/async-api-diffs/message/4.1-message-bindings-kafka-bindingVersion-changed/after.yaml":ra,"../../../../samples/async-api-diffs/message/4.2-message-bindings-kafka-bindingVersion-removed/after.yaml":ia,"../../../../samples/async-api-diffs/message/4.3-message-bindings-kafka-bindingVersion-added/after.yaml":ca,"../../../../samples/async-api-diffs/message/5.1-message-bindings-kafka-internal-jso-changes/after.yaml":da,"../../../../samples/async-api-diffs/message/6.1-message-x-second-added/after.yaml":ma,"../../../../samples/async-api-diffs/message/6.2-message-x-second-removed/after.yaml":pa,"../../../../samples/async-api-diffs/message/6.3-message-x-second-changed/after.yaml":ga,"../../../../samples/async-api-diffs/message/6.4-message-x-first-and-x-second-added/after.yaml":la,"../../../../samples/async-api-diffs/message/6.5-message-x-first-and-x-second-removed/after.yaml":_a,"../../../../samples/async-api-diffs/message/7.1-message-headers-object-schema-added/after.yaml":ya,"../../../../samples/async-api-diffs/message/7.2-message-headers-object-schema-removed/after.yaml":fa,"../../../../samples/async-api-diffs/message/7.3-message-headers-description-changed/after.yaml":ha,"../../../../samples/async-api-diffs/message/7.4-message-payload-object-schema-added/after.yaml":ba,"../../../../samples/async-api-diffs/message/7.5-message-payload-object-schema-removed/after.yaml":Ta,"../../../../samples/async-api-diffs/message/7.6-message-payload-description-changed/after.yaml":Ma,"../../../../samples/async-api-diffs/message/8.1-message-headers-object-schema-added-extensions/after.yaml":va,"../../../../samples/async-api-diffs/message/8.10-message-payload-object-schema-removed-property-with-extensions/after.yaml":ua,"../../../../samples/async-api-diffs/message/8.2-message-headers-object-schema-removed-extensions/after.yaml":Ca,"../../../../samples/async-api-diffs/message/8.3-message-headers-object-schema-changed-extensions/after.yaml":$a,"../../../../samples/async-api-diffs/message/8.4-message-headers-object-schema-added-property-with-extensions/after.yaml":ja,"../../../../samples/async-api-diffs/message/8.5-message-headers-object-schema-removed-property-with-extensions/after.yaml":Sa,"../../../../samples/async-api-diffs/message/8.6-message-payload-object-schema-added-extensions/after.yaml":Aa,"../../../../samples/async-api-diffs/message/8.7-message-payload-object-schema-removed-extensions/after.yaml":xa,"../../../../samples/async-api-diffs/message/8.8-message-payload-object-schema-changed-extensions/after.yaml":Ia,"../../../../samples/async-api-diffs/message/8.9-message-payload-object-schema-added-property-with-extensions/after.yaml":Oa}),qa=tn(Pa,ka),Va=Object.fromEntries(qa.map(s=>[s.caseId,s])),Zs=({caseId:s})=>{const n=Va[s];return n?F.jsx(en,{...Da(n.beforeYaml,n.afterYaml)}):F.jsxs("div",{children:["Sample case not found: ",s]})},Ba={title:"Async API Diffs Suite/Message Samples",component:Zs},wa="sendOperation",Ea="TestMessage",L=s=>on(s),Da=(s,n)=>({devMode:!0,mergedSource:sn({beforeSource:L(s),afterSource:L(n)}),operationKeys:{operationKey:wa,messageKey:Ea},referenceNamePropertyKey:nn,diffMetaKeys:an}),e=s=>({name:s,args:{caseId:s},render:n=>F.jsx(Zs,{caseId:n.caseId})}),a=e("1.1-message-title-changed"),t=e("1.2-message-title-removed"),o=e("1.3-message-title-added"),r=e("2.1-message-description-changed"),i=e("2.2-message-description-removed"),c=e("2.3-message-description-added"),d=e("2.4-message-summary-changed"),m=e("2.5-message-summary-removed"),p=e("2.6-message-description-moved-to-summary"),g=e("2.7-message-summary-moved-to-description"),l=e("3.1-message-bindings-add-one-more-binding"),_=e("3.2-message-bindings-remove-one-of-several-bindings"),y=e("3.3-message-bindings-add-bindings"),f=e("3.4-message-bindings-remove-bindings"),h=e("4.1-message-bindings-kafka-bindingVersion-changed"),b=e("4.2-message-bindings-kafka-bindingVersion-removed"),T=e("4.3-message-bindings-kafka-bindingVersion-added"),M=e("5.1-message-bindings-kafka-internal-jso-changes"),v=e("6.1-message-x-second-added"),u=e("6.2-message-x-second-removed"),C=e("6.3-message-x-second-changed"),$=e("6.4-message-x-first-and-x-second-added"),j=e("6.5-message-x-first-and-x-second-removed"),S=e("7.1-message-headers-object-schema-added"),A=e("7.2-message-headers-object-schema-removed"),x=e("7.3-message-headers-description-changed"),I=e("7.4-message-payload-object-schema-added"),O=e("7.5-message-payload-object-schema-removed"),P=e("7.6-message-payload-description-changed"),k=e("8.1-message-headers-object-schema-added-extensions"),q=e("8.2-message-headers-object-schema-removed-extensions"),V=e("8.3-message-headers-object-schema-changed-extensions"),w=e("8.4-message-headers-object-schema-added-property-with-extensions"),E=e("8.5-message-headers-object-schema-removed-property-with-extensions"),D=e("8.6-message-payload-object-schema-added-extensions"),K=e("8.7-message-payload-object-schema-removed-extensions"),N=e("8.8-message-payload-object-schema-changed-extensions"),Y=e("8.9-message-payload-object-schema-added-property-with-extensions"),R=e("8.10-message-payload-object-schema-removed-property-with-extensions");var G,z,H;a.parameters={...a.parameters,docs:{...(G=a.parameters)==null?void 0:G.docs,source:{originalSource:'createCaseStory("1.1-message-title-changed")',...(H=(z=a.parameters)==null?void 0:z.docs)==null?void 0:H.source}}};var J,B,Q;t.parameters={...t.parameters,docs:{...(J=t.parameters)==null?void 0:J.docs,source:{originalSource:'createCaseStory("1.2-message-title-removed")',...(Q=(B=t.parameters)==null?void 0:B.docs)==null?void 0:Q.source}}};var U,W,X;o.parameters={...o.parameters,docs:{...(U=o.parameters)==null?void 0:U.docs,source:{originalSource:'createCaseStory("1.3-message-title-added")',...(X=(W=o.parameters)==null?void 0:W.docs)==null?void 0:X.source}}};var Z,ee,se;r.parameters={...r.parameters,docs:{...(Z=r.parameters)==null?void 0:Z.docs,source:{originalSource:'createCaseStory("2.1-message-description-changed")',...(se=(ee=r.parameters)==null?void 0:ee.docs)==null?void 0:se.source}}};var ne,ae,te;i.parameters={...i.parameters,docs:{...(ne=i.parameters)==null?void 0:ne.docs,source:{originalSource:'createCaseStory("2.2-message-description-removed")',...(te=(ae=i.parameters)==null?void 0:ae.docs)==null?void 0:te.source}}};var oe,re,ie;c.parameters={...c.parameters,docs:{...(oe=c.parameters)==null?void 0:oe.docs,source:{originalSource:'createCaseStory("2.3-message-description-added")',...(ie=(re=c.parameters)==null?void 0:re.docs)==null?void 0:ie.source}}};var ce,de,me;d.parameters={...d.parameters,docs:{...(ce=d.parameters)==null?void 0:ce.docs,source:{originalSource:'createCaseStory("2.4-message-summary-changed")',...(me=(de=d.parameters)==null?void 0:de.docs)==null?void 0:me.source}}};var pe,ge,le;m.parameters={...m.parameters,docs:{...(pe=m.parameters)==null?void 0:pe.docs,source:{originalSource:'createCaseStory("2.5-message-summary-removed")',...(le=(ge=m.parameters)==null?void 0:ge.docs)==null?void 0:le.source}}};var _e,ye,fe;p.parameters={...p.parameters,docs:{...(_e=p.parameters)==null?void 0:_e.docs,source:{originalSource:'createCaseStory("2.6-message-description-moved-to-summary")',...(fe=(ye=p.parameters)==null?void 0:ye.docs)==null?void 0:fe.source}}};var he,be,Te;g.parameters={...g.parameters,docs:{...(he=g.parameters)==null?void 0:he.docs,source:{originalSource:'createCaseStory("2.7-message-summary-moved-to-description")',...(Te=(be=g.parameters)==null?void 0:be.docs)==null?void 0:Te.source}}};var Me,ve,ue;l.parameters={...l.parameters,docs:{...(Me=l.parameters)==null?void 0:Me.docs,source:{originalSource:'createCaseStory("3.1-message-bindings-add-one-more-binding")',...(ue=(ve=l.parameters)==null?void 0:ve.docs)==null?void 0:ue.source}}};var Ce,$e,je;_.parameters={..._.parameters,docs:{...(Ce=_.parameters)==null?void 0:Ce.docs,source:{originalSource:'createCaseStory("3.2-message-bindings-remove-one-of-several-bindings")',...(je=($e=_.parameters)==null?void 0:$e.docs)==null?void 0:je.source}}};var Se,Ae,xe;y.parameters={...y.parameters,docs:{...(Se=y.parameters)==null?void 0:Se.docs,source:{originalSource:'createCaseStory("3.3-message-bindings-add-bindings")',...(xe=(Ae=y.parameters)==null?void 0:Ae.docs)==null?void 0:xe.source}}};var Ie,Oe,Pe;f.parameters={...f.parameters,docs:{...(Ie=f.parameters)==null?void 0:Ie.docs,source:{originalSource:'createCaseStory("3.4-message-bindings-remove-bindings")',...(Pe=(Oe=f.parameters)==null?void 0:Oe.docs)==null?void 0:Pe.source}}};var ke,qe,Ve;h.parameters={...h.parameters,docs:{...(ke=h.parameters)==null?void 0:ke.docs,source:{originalSource:'createCaseStory("4.1-message-bindings-kafka-bindingVersion-changed")',...(Ve=(qe=h.parameters)==null?void 0:qe.docs)==null?void 0:Ve.source}}};var we,Ee,De;b.parameters={...b.parameters,docs:{...(we=b.parameters)==null?void 0:we.docs,source:{originalSource:'createCaseStory("4.2-message-bindings-kafka-bindingVersion-removed")',...(De=(Ee=b.parameters)==null?void 0:Ee.docs)==null?void 0:De.source}}};var Ke,Ne,Ye;T.parameters={...T.parameters,docs:{...(Ke=T.parameters)==null?void 0:Ke.docs,source:{originalSource:'createCaseStory("4.3-message-bindings-kafka-bindingVersion-added")',...(Ye=(Ne=T.parameters)==null?void 0:Ne.docs)==null?void 0:Ye.source}}};var Re,Fe,Le;M.parameters={...M.parameters,docs:{...(Re=M.parameters)==null?void 0:Re.docs,source:{originalSource:'createCaseStory("5.1-message-bindings-kafka-internal-jso-changes")',...(Le=(Fe=M.parameters)==null?void 0:Fe.docs)==null?void 0:Le.source}}};var Ge,ze,He;v.parameters={...v.parameters,docs:{...(Ge=v.parameters)==null?void 0:Ge.docs,source:{originalSource:'createCaseStory("6.1-message-x-second-added")',...(He=(ze=v.parameters)==null?void 0:ze.docs)==null?void 0:He.source}}};var Je,Be,Qe;u.parameters={...u.parameters,docs:{...(Je=u.parameters)==null?void 0:Je.docs,source:{originalSource:'createCaseStory("6.2-message-x-second-removed")',...(Qe=(Be=u.parameters)==null?void 0:Be.docs)==null?void 0:Qe.source}}};var Ue,We,Xe;C.parameters={...C.parameters,docs:{...(Ue=C.parameters)==null?void 0:Ue.docs,source:{originalSource:'createCaseStory("6.3-message-x-second-changed")',...(Xe=(We=C.parameters)==null?void 0:We.docs)==null?void 0:Xe.source}}};var Ze,es,ss;$.parameters={...$.parameters,docs:{...(Ze=$.parameters)==null?void 0:Ze.docs,source:{originalSource:'createCaseStory("6.4-message-x-first-and-x-second-added")',...(ss=(es=$.parameters)==null?void 0:es.docs)==null?void 0:ss.source}}};var ns,as,ts;j.parameters={...j.parameters,docs:{...(ns=j.parameters)==null?void 0:ns.docs,source:{originalSource:'createCaseStory("6.5-message-x-first-and-x-second-removed")',...(ts=(as=j.parameters)==null?void 0:as.docs)==null?void 0:ts.source}}};var os,rs,is;S.parameters={...S.parameters,docs:{...(os=S.parameters)==null?void 0:os.docs,source:{originalSource:'createCaseStory("7.1-message-headers-object-schema-added")',...(is=(rs=S.parameters)==null?void 0:rs.docs)==null?void 0:is.source}}};var cs,ds,ms;A.parameters={...A.parameters,docs:{...(cs=A.parameters)==null?void 0:cs.docs,source:{originalSource:'createCaseStory("7.2-message-headers-object-schema-removed")',...(ms=(ds=A.parameters)==null?void 0:ds.docs)==null?void 0:ms.source}}};var ps,gs,ls;x.parameters={...x.parameters,docs:{...(ps=x.parameters)==null?void 0:ps.docs,source:{originalSource:'createCaseStory("7.3-message-headers-description-changed")',...(ls=(gs=x.parameters)==null?void 0:gs.docs)==null?void 0:ls.source}}};var _s,ys,fs;I.parameters={...I.parameters,docs:{...(_s=I.parameters)==null?void 0:_s.docs,source:{originalSource:'createCaseStory("7.4-message-payload-object-schema-added")',...(fs=(ys=I.parameters)==null?void 0:ys.docs)==null?void 0:fs.source}}};var hs,bs,Ts;O.parameters={...O.parameters,docs:{...(hs=O.parameters)==null?void 0:hs.docs,source:{originalSource:'createCaseStory("7.5-message-payload-object-schema-removed")',...(Ts=(bs=O.parameters)==null?void 0:bs.docs)==null?void 0:Ts.source}}};var Ms,vs,us;P.parameters={...P.parameters,docs:{...(Ms=P.parameters)==null?void 0:Ms.docs,source:{originalSource:'createCaseStory("7.6-message-payload-description-changed")',...(us=(vs=P.parameters)==null?void 0:vs.docs)==null?void 0:us.source}}};var Cs,$s,js;k.parameters={...k.parameters,docs:{...(Cs=k.parameters)==null?void 0:Cs.docs,source:{originalSource:'createCaseStory("8.1-message-headers-object-schema-added-extensions")',...(js=($s=k.parameters)==null?void 0:$s.docs)==null?void 0:js.source}}};var Ss,As,xs;q.parameters={...q.parameters,docs:{...(Ss=q.parameters)==null?void 0:Ss.docs,source:{originalSource:'createCaseStory("8.2-message-headers-object-schema-removed-extensions")',...(xs=(As=q.parameters)==null?void 0:As.docs)==null?void 0:xs.source}}};var Is,Os,Ps;V.parameters={...V.parameters,docs:{...(Is=V.parameters)==null?void 0:Is.docs,source:{originalSource:'createCaseStory("8.3-message-headers-object-schema-changed-extensions")',...(Ps=(Os=V.parameters)==null?void 0:Os.docs)==null?void 0:Ps.source}}};var ks,qs,Vs;w.parameters={...w.parameters,docs:{...(ks=w.parameters)==null?void 0:ks.docs,source:{originalSource:'createCaseStory("8.4-message-headers-object-schema-added-property-with-extensions")',...(Vs=(qs=w.parameters)==null?void 0:qs.docs)==null?void 0:Vs.source}}};var ws,Es,Ds;E.parameters={...E.parameters,docs:{...(ws=E.parameters)==null?void 0:ws.docs,source:{originalSource:'createCaseStory("8.5-message-headers-object-schema-removed-property-with-extensions")',...(Ds=(Es=E.parameters)==null?void 0:Es.docs)==null?void 0:Ds.source}}};var Ks,Ns,Ys;D.parameters={...D.parameters,docs:{...(Ks=D.parameters)==null?void 0:Ks.docs,source:{originalSource:'createCaseStory("8.6-message-payload-object-schema-added-extensions")',...(Ys=(Ns=D.parameters)==null?void 0:Ns.docs)==null?void 0:Ys.source}}};var Rs,Fs,Ls;K.parameters={...K.parameters,docs:{...(Rs=K.parameters)==null?void 0:Rs.docs,source:{originalSource:'createCaseStory("8.7-message-payload-object-schema-removed-extensions")',...(Ls=(Fs=K.parameters)==null?void 0:Fs.docs)==null?void 0:Ls.source}}};var Gs,zs,Hs;N.parameters={...N.parameters,docs:{...(Gs=N.parameters)==null?void 0:Gs.docs,source:{originalSource:'createCaseStory("8.8-message-payload-object-schema-changed-extensions")',...(Hs=(zs=N.parameters)==null?void 0:zs.docs)==null?void 0:Hs.source}}};var Js,Bs,Qs;Y.parameters={...Y.parameters,docs:{...(Js=Y.parameters)==null?void 0:Js.docs,source:{originalSource:'createCaseStory("8.9-message-payload-object-schema-added-property-with-extensions")',...(Qs=(Bs=Y.parameters)==null?void 0:Bs.docs)==null?void 0:Qs.source}}};var Us,Ws,Xs;R.parameters={...R.parameters,docs:{...(Us=R.parameters)==null?void 0:Us.docs,source:{originalSource:'createCaseStory("8.10-message-payload-object-schema-removed-property-with-extensions")',...(Xs=(Ws=R.parameters)==null?void 0:Ws.docs)==null?void 0:Xs.source}}};const Qa=["Case_1_1_message_title_changed","Case_1_2_message_title_removed","Case_1_3_message_title_added","Case_2_1_message_description_changed","Case_2_2_message_description_removed","Case_2_3_message_description_added","Case_2_4_message_summary_changed","Case_2_5_message_summary_removed","Case_2_6_message_description_moved_to_summary","Case_2_7_message_summary_moved_to_description","Case_3_1_message_bindings_add_one_more_binding","Case_3_2_message_bindings_remove_one_of_several_bindings","Case_3_3_message_bindings_add_bindings","Case_3_4_message_bindings_remove_bindings","Case_4_1_message_bindings_kafka_bindingVersion_changed","Case_4_2_message_bindings_kafka_bindingVersion_removed","Case_4_3_message_bindings_kafka_bindingVersion_added","Case_5_1_message_bindings_kafka_internal_jso_changes","Case_6_1_message_x_second_added","Case_6_2_message_x_second_removed","Case_6_3_message_x_second_changed","Case_6_4_message_x_first_and_x_second_added","Case_6_5_message_x_first_and_x_second_removed","Case_7_1_message_headers_object_schema_added","Case_7_2_message_headers_object_schema_removed","Case_7_3_message_headers_description_changed","Case_7_4_message_payload_object_schema_added","Case_7_5_message_payload_object_schema_removed","Case_7_6_message_payload_description_changed","Case_8_1_message_headers_object_schema_added_extensions","Case_8_2_message_headers_object_schema_removed_extensions","Case_8_3_message_headers_object_schema_changed_extensions","Case_8_4_message_headers_object_schema_added_property_with_extensions","Case_8_5_message_headers_object_schema_removed_property_with_extensions","Case_8_6_message_payload_object_schema_added_extensions","Case_8_7_message_payload_object_schema_removed_extensions","Case_8_8_message_payload_object_schema_changed_extensions","Case_8_9_message_payload_object_schema_added_property_with_extensions","Case_8_10_message_payload_object_schema_removed_property_with_extensions"];export{a as Case_1_1_message_title_changed,t as Case_1_2_message_title_removed,o as Case_1_3_message_title_added,r as Case_2_1_message_description_changed,i as Case_2_2_message_description_removed,c as Case_2_3_message_description_added,d as Case_2_4_message_summary_changed,m as Case_2_5_message_summary_removed,p as Case_2_6_message_description_moved_to_summary,g as Case_2_7_message_summary_moved_to_description,l as Case_3_1_message_bindings_add_one_more_binding,_ as Case_3_2_message_bindings_remove_one_of_several_bindings,y as Case_3_3_message_bindings_add_bindings,f as Case_3_4_message_bindings_remove_bindings,h as Case_4_1_message_bindings_kafka_bindingVersion_changed,b as Case_4_2_message_bindings_kafka_bindingVersion_removed,T as Case_4_3_message_bindings_kafka_bindingVersion_added,M as Case_5_1_message_bindings_kafka_internal_jso_changes,v as Case_6_1_message_x_second_added,u as Case_6_2_message_x_second_removed,C as Case_6_3_message_x_second_changed,$ as Case_6_4_message_x_first_and_x_second_added,j as Case_6_5_message_x_first_and_x_second_removed,S as Case_7_1_message_headers_object_schema_added,A as Case_7_2_message_headers_object_schema_removed,x as Case_7_3_message_headers_description_changed,I as Case_7_4_message_payload_object_schema_added,O as Case_7_5_message_payload_object_schema_removed,P as Case_7_6_message_payload_description_changed,R as Case_8_10_message_payload_object_schema_removed_property_with_extensions,k as Case_8_1_message_headers_object_schema_added_extensions,q as Case_8_2_message_headers_object_schema_removed_extensions,V as Case_8_3_message_headers_object_schema_changed_extensions,w as Case_8_4_message_headers_object_schema_added_property_with_extensions,E as Case_8_5_message_headers_object_schema_removed_property_with_extensions,D as Case_8_6_message_payload_object_schema_added_extensions,K as Case_8_7_message_payload_object_schema_removed_extensions,N as Case_8_8_message_payload_object_schema_changed_extensions,Y as Case_8_9_message_payload_object_schema_added_property_with_extensions,Qa as __namedExportsOrder,Ba as default};
