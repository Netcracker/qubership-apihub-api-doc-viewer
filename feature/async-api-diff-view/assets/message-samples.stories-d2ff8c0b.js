import{j as Y}from"./_commonjs-dynamic-modules-6308e768.js";import{a as Zs}from"./AsyncApiOperationViewer-46340743.js";import{c as en}from"./parse-yaml-source-2575e8ef.js";import{c as sn,a as nn,b as an}from"./async-api-diffs-utils-8842d617.js";import"./index-f46741a2.js";import"./GraphPropNodeViewer-ddb3eb8e.js";import"./index-415bee12.js";import"./GraphQLOperationDiffViewer-1717c8e1.js";import"./GraphQLOperationViewer-6251f3a9.js";import"./js-yaml-71a24e1f.js";import"./index-d5b0668c.js";import"./index-442a5f79.js";import"./preprocess-70e8b3d0.js";const tn=`asyncapi: 3.0.0
info:
  title: Sample AsyncAPI
  version: 1.0.0
channels:
  testChannel:
    address: events.default
    messages:
      TestMessage:
        $ref: '#/components/messages/TestMessage'
operations:
  sendOperation:
    action: send
    channel:
      $ref: '#/channels/testChannel'
    messages:
      - $ref: '#/components/messages/TestMessage'
components:
  messages:
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
      title: message title
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
operations:
  sendOperation:
    action: send
    channel:
      $ref: '#/channels/testChannel'
    messages:
      - $ref: '#/components/messages/TestMessage'
components:
  messages:
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
      description: message description
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
      summary: message summary
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
      summary: message summary
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
      description: this description will be moved to summary
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
      summary: this summary will be moved to description
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
      bindings:
        kafka:
          bindingVersion: 1.0.0
          key:
            type: string
          schemaIdLocation: header
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
      bindings:
        kafka:
          bindingVersion: 1.0.0
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
        kafka: {}
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
          arbitraryJso:
            unchanged: keep
            removed: bye
            changed: 111
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
      x-first: first
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
      x-first: first
      x-second: second
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
      x-second: before
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
components:
  messages:
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
      headers:
        type: object
        description: headers object
        properties:
          traceId:
            type: string
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
      headers:
        type: object
        description: before description
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
        description: payload object
        properties:
          id:
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
      payload:
        type: object
        description: before description
        properties:
          id:
            type: string
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
        x-first: first
        x-second: second
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
      title: CHANGED message title
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
operations:
  sendOperation:
    action: send
    channel:
      $ref: '#/channels/testChannel'
    messages:
      - $ref: '#/components/messages/TestMessage'
components:
  messages:
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
      description: CHANGED message description
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
      description: message description
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
      summary: CHANGED message summary
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
      summary: here it is!
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
      description: here it is!
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
      bindings:
        amqp:
          bindingVersion: 0.3.0
          contentEncoding: gzip
          messageType: user.signup
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
          bindingVersion: 2.0.0
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
      bindings:
        kafka: {}
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
          bindingVersion: 1.0.0
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
          arbitraryJso:
            unchanged: keep
            changed: test string
            added: new
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
      x-first: first
      x-second: second
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
      x-first: first
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
      x-second: after
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
      x-second: second
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
      headers:
        type: object
        description: headers object
        properties:
          traceId:
            type: string
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
        description: after description
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
        description: payload object
        properties:
          id:
            type: string
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
        description: after description
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
      headers:
        type: object
        description: headers object
        properties:
          traceId:
            type: string
        x-first: first-new
        x-third: third
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
          correlationId:
            type: string
            x-first: first
            x-second: second
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
          correlationId:
            type: string
            x-first: first
            x-second: second
`,Ia=Object.assign({"../../../../samples/async-api-diffs/message/1.1-message-title-changed/before.yaml":tn,"../../../../samples/async-api-diffs/message/1.2-message-title-removed/before.yaml":on,"../../../../samples/async-api-diffs/message/1.3-message-title-added/before.yaml":rn,"../../../../samples/async-api-diffs/message/2.1-message-description-changed/before.yaml":cn,"../../../../samples/async-api-diffs/message/2.2-message-description-removed/before.yaml":dn,"../../../../samples/async-api-diffs/message/2.3-message-description-added/before.yaml":mn,"../../../../samples/async-api-diffs/message/2.4-message-summary-changed/before.yaml":pn,"../../../../samples/async-api-diffs/message/2.5-message-summary-removed/before.yaml":gn,"../../../../samples/async-api-diffs/message/2.6-message-description-moved-to-summary/before.yaml":ln,"../../../../samples/async-api-diffs/message/2.7-message-summary-moved-to-description/before.yaml":_n,"../../../../samples/async-api-diffs/message/3.1-message-bindings-add-one-more-binding/before.yaml":yn,"../../../../samples/async-api-diffs/message/3.2-message-bindings-remove-one-of-several-bindings/before.yaml":fn,"../../../../samples/async-api-diffs/message/3.3-message-bindings-add-bindings/before.yaml":hn,"../../../../samples/async-api-diffs/message/3.4-message-bindings-remove-bindings/before.yaml":bn,"../../../../samples/async-api-diffs/message/4.1-message-bindings-kafka-bindingVersion-changed/before.yaml":Tn,"../../../../samples/async-api-diffs/message/4.2-message-bindings-kafka-bindingVersion-removed/before.yaml":Mn,"../../../../samples/async-api-diffs/message/4.3-message-bindings-kafka-bindingVersion-added/before.yaml":vn,"../../../../samples/async-api-diffs/message/5.1-message-bindings-kafka-internal-jso-changes/before.yaml":un,"../../../../samples/async-api-diffs/message/6.1-message-x-second-added/before.yaml":Cn,"../../../../samples/async-api-diffs/message/6.2-message-x-second-removed/before.yaml":$n,"../../../../samples/async-api-diffs/message/6.3-message-x-second-changed/before.yaml":jn,"../../../../samples/async-api-diffs/message/6.4-message-x-first-and-x-second-added/before.yaml":An,"../../../../samples/async-api-diffs/message/6.5-message-x-first-and-x-second-removed/before.yaml":Sn,"../../../../samples/async-api-diffs/message/7.1-message-headers-object-schema-added/before.yaml":xn,"../../../../samples/async-api-diffs/message/7.2-message-headers-object-schema-removed/before.yaml":In,"../../../../samples/async-api-diffs/message/7.3-message-headers-description-changed/before.yaml":On,"../../../../samples/async-api-diffs/message/7.4-message-payload-object-schema-added/before.yaml":kn,"../../../../samples/async-api-diffs/message/7.5-message-payload-object-schema-removed/before.yaml":Pn,"../../../../samples/async-api-diffs/message/7.6-message-payload-description-changed/before.yaml":qn,"../../../../samples/async-api-diffs/message/8.1-message-headers-object-schema-added-extensions/before.yaml":Vn,"../../../../samples/async-api-diffs/message/8.10-message-payload-object-schema-removed-property-with-extensions/before.yaml":wn,"../../../../samples/async-api-diffs/message/8.2-message-headers-object-schema-removed-extensions/before.yaml":En,"../../../../samples/async-api-diffs/message/8.3-message-headers-object-schema-changed-extensions/before.yaml":Dn,"../../../../samples/async-api-diffs/message/8.4-message-headers-object-schema-added-property-with-extensions/before.yaml":Ln,"../../../../samples/async-api-diffs/message/8.5-message-headers-object-schema-removed-property-with-extensions/before.yaml":Gn,"../../../../samples/async-api-diffs/message/8.6-message-payload-object-schema-added-extensions/before.yaml":Kn,"../../../../samples/async-api-diffs/message/8.7-message-payload-object-schema-removed-extensions/before.yaml":Nn,"../../../../samples/async-api-diffs/message/8.8-message-payload-object-schema-changed-extensions/before.yaml":Yn,"../../../../samples/async-api-diffs/message/8.9-message-payload-object-schema-added-property-with-extensions/before.yaml":zn}),Oa=Object.assign({"../../../../samples/async-api-diffs/message/1.1-message-title-changed/after.yaml":Bn,"../../../../samples/async-api-diffs/message/1.2-message-title-removed/after.yaml":Fn,"../../../../samples/async-api-diffs/message/1.3-message-title-added/after.yaml":Hn,"../../../../samples/async-api-diffs/message/2.1-message-description-changed/after.yaml":Jn,"../../../../samples/async-api-diffs/message/2.2-message-description-removed/after.yaml":Rn,"../../../../samples/async-api-diffs/message/2.3-message-description-added/after.yaml":Qn,"../../../../samples/async-api-diffs/message/2.4-message-summary-changed/after.yaml":Un,"../../../../samples/async-api-diffs/message/2.5-message-summary-removed/after.yaml":Wn,"../../../../samples/async-api-diffs/message/2.6-message-description-moved-to-summary/after.yaml":Xn,"../../../../samples/async-api-diffs/message/2.7-message-summary-moved-to-description/after.yaml":Zn,"../../../../samples/async-api-diffs/message/3.1-message-bindings-add-one-more-binding/after.yaml":ea,"../../../../samples/async-api-diffs/message/3.2-message-bindings-remove-one-of-several-bindings/after.yaml":sa,"../../../../samples/async-api-diffs/message/3.3-message-bindings-add-bindings/after.yaml":na,"../../../../samples/async-api-diffs/message/3.4-message-bindings-remove-bindings/after.yaml":aa,"../../../../samples/async-api-diffs/message/4.1-message-bindings-kafka-bindingVersion-changed/after.yaml":ta,"../../../../samples/async-api-diffs/message/4.2-message-bindings-kafka-bindingVersion-removed/after.yaml":oa,"../../../../samples/async-api-diffs/message/4.3-message-bindings-kafka-bindingVersion-added/after.yaml":ra,"../../../../samples/async-api-diffs/message/5.1-message-bindings-kafka-internal-jso-changes/after.yaml":ia,"../../../../samples/async-api-diffs/message/6.1-message-x-second-added/after.yaml":ca,"../../../../samples/async-api-diffs/message/6.2-message-x-second-removed/after.yaml":da,"../../../../samples/async-api-diffs/message/6.3-message-x-second-changed/after.yaml":ma,"../../../../samples/async-api-diffs/message/6.4-message-x-first-and-x-second-added/after.yaml":pa,"../../../../samples/async-api-diffs/message/6.5-message-x-first-and-x-second-removed/after.yaml":ga,"../../../../samples/async-api-diffs/message/7.1-message-headers-object-schema-added/after.yaml":la,"../../../../samples/async-api-diffs/message/7.2-message-headers-object-schema-removed/after.yaml":_a,"../../../../samples/async-api-diffs/message/7.3-message-headers-description-changed/after.yaml":ya,"../../../../samples/async-api-diffs/message/7.4-message-payload-object-schema-added/after.yaml":fa,"../../../../samples/async-api-diffs/message/7.5-message-payload-object-schema-removed/after.yaml":ha,"../../../../samples/async-api-diffs/message/7.6-message-payload-description-changed/after.yaml":ba,"../../../../samples/async-api-diffs/message/8.1-message-headers-object-schema-added-extensions/after.yaml":Ta,"../../../../samples/async-api-diffs/message/8.10-message-payload-object-schema-removed-property-with-extensions/after.yaml":Ma,"../../../../samples/async-api-diffs/message/8.2-message-headers-object-schema-removed-extensions/after.yaml":va,"../../../../samples/async-api-diffs/message/8.3-message-headers-object-schema-changed-extensions/after.yaml":ua,"../../../../samples/async-api-diffs/message/8.4-message-headers-object-schema-added-property-with-extensions/after.yaml":Ca,"../../../../samples/async-api-diffs/message/8.5-message-headers-object-schema-removed-property-with-extensions/after.yaml":$a,"../../../../samples/async-api-diffs/message/8.6-message-payload-object-schema-added-extensions/after.yaml":ja,"../../../../samples/async-api-diffs/message/8.7-message-payload-object-schema-removed-extensions/after.yaml":Aa,"../../../../samples/async-api-diffs/message/8.8-message-payload-object-schema-changed-extensions/after.yaml":Sa,"../../../../samples/async-api-diffs/message/8.9-message-payload-object-schema-added-property-with-extensions/after.yaml":xa}),ka=en(Ia,Oa),Pa=sn(ka),Xs=({caseId:s})=>{const n=Pa[s];return n?Y.jsx(Zs,{...wa(n.beforeYaml,n.afterYaml)}):Y.jsxs("div",{children:["Sample case not found: ",s]})},Ua={title:"Async API Diffs Suite/Message Samples",component:Xs},qa="sendOperation",Va="TestMessage",wa=(s,n)=>nn(s,n,{operationKey:qa,messageKey:Va}),Ea=an(Xs),e=s=>Ea(s),a=e("1.1-message-title-changed"),t=e("1.2-message-title-removed"),o=e("1.3-message-title-added"),r=e("2.1-message-description-changed"),i=e("2.2-message-description-removed"),c=e("2.3-message-description-added"),d=e("2.4-message-summary-changed"),m=e("2.5-message-summary-removed"),p=e("2.6-message-description-moved-to-summary"),g=e("2.7-message-summary-moved-to-description"),l=e("3.1-message-bindings-add-one-more-binding"),_=e("3.2-message-bindings-remove-one-of-several-bindings"),y=e("3.3-message-bindings-add-bindings"),f=e("3.4-message-bindings-remove-bindings"),h=e("4.1-message-bindings-kafka-bindingVersion-changed"),b=e("4.2-message-bindings-kafka-bindingVersion-removed"),T=e("4.3-message-bindings-kafka-bindingVersion-added"),M=e("5.1-message-bindings-kafka-internal-jso-changes"),v=e("6.1-message-x-second-added"),u=e("6.2-message-x-second-removed"),C=e("6.3-message-x-second-changed"),$=e("6.4-message-x-first-and-x-second-added"),j=e("6.5-message-x-first-and-x-second-removed"),A=e("7.1-message-headers-object-schema-added"),S=e("7.2-message-headers-object-schema-removed"),x=e("7.3-message-headers-description-changed"),I=e("7.4-message-payload-object-schema-added"),O=e("7.5-message-payload-object-schema-removed"),k=e("7.6-message-payload-description-changed"),P=e("8.1-message-headers-object-schema-added-extensions"),q=e("8.2-message-headers-object-schema-removed-extensions"),V=e("8.3-message-headers-object-schema-changed-extensions"),w=e("8.4-message-headers-object-schema-added-property-with-extensions"),E=e("8.5-message-headers-object-schema-removed-property-with-extensions"),D=e("8.6-message-payload-object-schema-added-extensions"),L=e("8.7-message-payload-object-schema-removed-extensions"),G=e("8.8-message-payload-object-schema-changed-extensions"),K=e("8.9-message-payload-object-schema-added-property-with-extensions"),N=e("8.10-message-payload-object-schema-removed-property-with-extensions");var z,B,F;a.parameters={...a.parameters,docs:{...(z=a.parameters)==null?void 0:z.docs,source:{originalSource:'createCaseStory("1.1-message-title-changed")',...(F=(B=a.parameters)==null?void 0:B.docs)==null?void 0:F.source}}};var H,J,R;t.parameters={...t.parameters,docs:{...(H=t.parameters)==null?void 0:H.docs,source:{originalSource:'createCaseStory("1.2-message-title-removed")',...(R=(J=t.parameters)==null?void 0:J.docs)==null?void 0:R.source}}};var Q,U,W;o.parameters={...o.parameters,docs:{...(Q=o.parameters)==null?void 0:Q.docs,source:{originalSource:'createCaseStory("1.3-message-title-added")',...(W=(U=o.parameters)==null?void 0:U.docs)==null?void 0:W.source}}};var X,Z,ee;r.parameters={...r.parameters,docs:{...(X=r.parameters)==null?void 0:X.docs,source:{originalSource:'createCaseStory("2.1-message-description-changed")',...(ee=(Z=r.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var se,ne,ae;i.parameters={...i.parameters,docs:{...(se=i.parameters)==null?void 0:se.docs,source:{originalSource:'createCaseStory("2.2-message-description-removed")',...(ae=(ne=i.parameters)==null?void 0:ne.docs)==null?void 0:ae.source}}};var te,oe,re;c.parameters={...c.parameters,docs:{...(te=c.parameters)==null?void 0:te.docs,source:{originalSource:'createCaseStory("2.3-message-description-added")',...(re=(oe=c.parameters)==null?void 0:oe.docs)==null?void 0:re.source}}};var ie,ce,de;d.parameters={...d.parameters,docs:{...(ie=d.parameters)==null?void 0:ie.docs,source:{originalSource:'createCaseStory("2.4-message-summary-changed")',...(de=(ce=d.parameters)==null?void 0:ce.docs)==null?void 0:de.source}}};var me,pe,ge;m.parameters={...m.parameters,docs:{...(me=m.parameters)==null?void 0:me.docs,source:{originalSource:'createCaseStory("2.5-message-summary-removed")',...(ge=(pe=m.parameters)==null?void 0:pe.docs)==null?void 0:ge.source}}};var le,_e,ye;p.parameters={...p.parameters,docs:{...(le=p.parameters)==null?void 0:le.docs,source:{originalSource:'createCaseStory("2.6-message-description-moved-to-summary")',...(ye=(_e=p.parameters)==null?void 0:_e.docs)==null?void 0:ye.source}}};var fe,he,be;g.parameters={...g.parameters,docs:{...(fe=g.parameters)==null?void 0:fe.docs,source:{originalSource:'createCaseStory("2.7-message-summary-moved-to-description")',...(be=(he=g.parameters)==null?void 0:he.docs)==null?void 0:be.source}}};var Te,Me,ve;l.parameters={...l.parameters,docs:{...(Te=l.parameters)==null?void 0:Te.docs,source:{originalSource:'createCaseStory("3.1-message-bindings-add-one-more-binding")',...(ve=(Me=l.parameters)==null?void 0:Me.docs)==null?void 0:ve.source}}};var ue,Ce,$e;_.parameters={..._.parameters,docs:{...(ue=_.parameters)==null?void 0:ue.docs,source:{originalSource:'createCaseStory("3.2-message-bindings-remove-one-of-several-bindings")',...($e=(Ce=_.parameters)==null?void 0:Ce.docs)==null?void 0:$e.source}}};var je,Ae,Se;y.parameters={...y.parameters,docs:{...(je=y.parameters)==null?void 0:je.docs,source:{originalSource:'createCaseStory("3.3-message-bindings-add-bindings")',...(Se=(Ae=y.parameters)==null?void 0:Ae.docs)==null?void 0:Se.source}}};var xe,Ie,Oe;f.parameters={...f.parameters,docs:{...(xe=f.parameters)==null?void 0:xe.docs,source:{originalSource:'createCaseStory("3.4-message-bindings-remove-bindings")',...(Oe=(Ie=f.parameters)==null?void 0:Ie.docs)==null?void 0:Oe.source}}};var ke,Pe,qe;h.parameters={...h.parameters,docs:{...(ke=h.parameters)==null?void 0:ke.docs,source:{originalSource:'createCaseStory("4.1-message-bindings-kafka-bindingVersion-changed")',...(qe=(Pe=h.parameters)==null?void 0:Pe.docs)==null?void 0:qe.source}}};var Ve,we,Ee;b.parameters={...b.parameters,docs:{...(Ve=b.parameters)==null?void 0:Ve.docs,source:{originalSource:'createCaseStory("4.2-message-bindings-kafka-bindingVersion-removed")',...(Ee=(we=b.parameters)==null?void 0:we.docs)==null?void 0:Ee.source}}};var De,Le,Ge;T.parameters={...T.parameters,docs:{...(De=T.parameters)==null?void 0:De.docs,source:{originalSource:'createCaseStory("4.3-message-bindings-kafka-bindingVersion-added")',...(Ge=(Le=T.parameters)==null?void 0:Le.docs)==null?void 0:Ge.source}}};var Ke,Ne,Ye;M.parameters={...M.parameters,docs:{...(Ke=M.parameters)==null?void 0:Ke.docs,source:{originalSource:'createCaseStory("5.1-message-bindings-kafka-internal-jso-changes")',...(Ye=(Ne=M.parameters)==null?void 0:Ne.docs)==null?void 0:Ye.source}}};var ze,Be,Fe;v.parameters={...v.parameters,docs:{...(ze=v.parameters)==null?void 0:ze.docs,source:{originalSource:'createCaseStory("6.1-message-x-second-added")',...(Fe=(Be=v.parameters)==null?void 0:Be.docs)==null?void 0:Fe.source}}};var He,Je,Re;u.parameters={...u.parameters,docs:{...(He=u.parameters)==null?void 0:He.docs,source:{originalSource:'createCaseStory("6.2-message-x-second-removed")',...(Re=(Je=u.parameters)==null?void 0:Je.docs)==null?void 0:Re.source}}};var Qe,Ue,We;C.parameters={...C.parameters,docs:{...(Qe=C.parameters)==null?void 0:Qe.docs,source:{originalSource:'createCaseStory("6.3-message-x-second-changed")',...(We=(Ue=C.parameters)==null?void 0:Ue.docs)==null?void 0:We.source}}};var Xe,Ze,es;$.parameters={...$.parameters,docs:{...(Xe=$.parameters)==null?void 0:Xe.docs,source:{originalSource:'createCaseStory("6.4-message-x-first-and-x-second-added")',...(es=(Ze=$.parameters)==null?void 0:Ze.docs)==null?void 0:es.source}}};var ss,ns,as;j.parameters={...j.parameters,docs:{...(ss=j.parameters)==null?void 0:ss.docs,source:{originalSource:'createCaseStory("6.5-message-x-first-and-x-second-removed")',...(as=(ns=j.parameters)==null?void 0:ns.docs)==null?void 0:as.source}}};var ts,os,rs;A.parameters={...A.parameters,docs:{...(ts=A.parameters)==null?void 0:ts.docs,source:{originalSource:'createCaseStory("7.1-message-headers-object-schema-added")',...(rs=(os=A.parameters)==null?void 0:os.docs)==null?void 0:rs.source}}};var is,cs,ds;S.parameters={...S.parameters,docs:{...(is=S.parameters)==null?void 0:is.docs,source:{originalSource:'createCaseStory("7.2-message-headers-object-schema-removed")',...(ds=(cs=S.parameters)==null?void 0:cs.docs)==null?void 0:ds.source}}};var ms,ps,gs;x.parameters={...x.parameters,docs:{...(ms=x.parameters)==null?void 0:ms.docs,source:{originalSource:'createCaseStory("7.3-message-headers-description-changed")',...(gs=(ps=x.parameters)==null?void 0:ps.docs)==null?void 0:gs.source}}};var ls,_s,ys;I.parameters={...I.parameters,docs:{...(ls=I.parameters)==null?void 0:ls.docs,source:{originalSource:'createCaseStory("7.4-message-payload-object-schema-added")',...(ys=(_s=I.parameters)==null?void 0:_s.docs)==null?void 0:ys.source}}};var fs,hs,bs;O.parameters={...O.parameters,docs:{...(fs=O.parameters)==null?void 0:fs.docs,source:{originalSource:'createCaseStory("7.5-message-payload-object-schema-removed")',...(bs=(hs=O.parameters)==null?void 0:hs.docs)==null?void 0:bs.source}}};var Ts,Ms,vs;k.parameters={...k.parameters,docs:{...(Ts=k.parameters)==null?void 0:Ts.docs,source:{originalSource:'createCaseStory("7.6-message-payload-description-changed")',...(vs=(Ms=k.parameters)==null?void 0:Ms.docs)==null?void 0:vs.source}}};var us,Cs,$s;P.parameters={...P.parameters,docs:{...(us=P.parameters)==null?void 0:us.docs,source:{originalSource:'createCaseStory("8.1-message-headers-object-schema-added-extensions")',...($s=(Cs=P.parameters)==null?void 0:Cs.docs)==null?void 0:$s.source}}};var js,As,Ss;q.parameters={...q.parameters,docs:{...(js=q.parameters)==null?void 0:js.docs,source:{originalSource:'createCaseStory("8.2-message-headers-object-schema-removed-extensions")',...(Ss=(As=q.parameters)==null?void 0:As.docs)==null?void 0:Ss.source}}};var xs,Is,Os;V.parameters={...V.parameters,docs:{...(xs=V.parameters)==null?void 0:xs.docs,source:{originalSource:'createCaseStory("8.3-message-headers-object-schema-changed-extensions")',...(Os=(Is=V.parameters)==null?void 0:Is.docs)==null?void 0:Os.source}}};var ks,Ps,qs;w.parameters={...w.parameters,docs:{...(ks=w.parameters)==null?void 0:ks.docs,source:{originalSource:'createCaseStory("8.4-message-headers-object-schema-added-property-with-extensions")',...(qs=(Ps=w.parameters)==null?void 0:Ps.docs)==null?void 0:qs.source}}};var Vs,ws,Es;E.parameters={...E.parameters,docs:{...(Vs=E.parameters)==null?void 0:Vs.docs,source:{originalSource:'createCaseStory("8.5-message-headers-object-schema-removed-property-with-extensions")',...(Es=(ws=E.parameters)==null?void 0:ws.docs)==null?void 0:Es.source}}};var Ds,Ls,Gs;D.parameters={...D.parameters,docs:{...(Ds=D.parameters)==null?void 0:Ds.docs,source:{originalSource:'createCaseStory("8.6-message-payload-object-schema-added-extensions")',...(Gs=(Ls=D.parameters)==null?void 0:Ls.docs)==null?void 0:Gs.source}}};var Ks,Ns,Ys;L.parameters={...L.parameters,docs:{...(Ks=L.parameters)==null?void 0:Ks.docs,source:{originalSource:'createCaseStory("8.7-message-payload-object-schema-removed-extensions")',...(Ys=(Ns=L.parameters)==null?void 0:Ns.docs)==null?void 0:Ys.source}}};var zs,Bs,Fs;G.parameters={...G.parameters,docs:{...(zs=G.parameters)==null?void 0:zs.docs,source:{originalSource:'createCaseStory("8.8-message-payload-object-schema-changed-extensions")',...(Fs=(Bs=G.parameters)==null?void 0:Bs.docs)==null?void 0:Fs.source}}};var Hs,Js,Rs;K.parameters={...K.parameters,docs:{...(Hs=K.parameters)==null?void 0:Hs.docs,source:{originalSource:'createCaseStory("8.9-message-payload-object-schema-added-property-with-extensions")',...(Rs=(Js=K.parameters)==null?void 0:Js.docs)==null?void 0:Rs.source}}};var Qs,Us,Ws;N.parameters={...N.parameters,docs:{...(Qs=N.parameters)==null?void 0:Qs.docs,source:{originalSource:'createCaseStory("8.10-message-payload-object-schema-removed-property-with-extensions")',...(Ws=(Us=N.parameters)==null?void 0:Us.docs)==null?void 0:Ws.source}}};const Wa=["Case_1_1_message_title_changed","Case_1_2_message_title_removed","Case_1_3_message_title_added","Case_2_1_message_description_changed","Case_2_2_message_description_removed","Case_2_3_message_description_added","Case_2_4_message_summary_changed","Case_2_5_message_summary_removed","Case_2_6_message_description_moved_to_summary","Case_2_7_message_summary_moved_to_description","Case_3_1_message_bindings_add_one_more_binding","Case_3_2_message_bindings_remove_one_of_several_bindings","Case_3_3_message_bindings_add_bindings","Case_3_4_message_bindings_remove_bindings","Case_4_1_message_bindings_kafka_bindingVersion_changed","Case_4_2_message_bindings_kafka_bindingVersion_removed","Case_4_3_message_bindings_kafka_bindingVersion_added","Case_5_1_message_bindings_kafka_internal_jso_changes","Case_6_1_message_x_second_added","Case_6_2_message_x_second_removed","Case_6_3_message_x_second_changed","Case_6_4_message_x_first_and_x_second_added","Case_6_5_message_x_first_and_x_second_removed","Case_7_1_message_headers_object_schema_added","Case_7_2_message_headers_object_schema_removed","Case_7_3_message_headers_description_changed","Case_7_4_message_payload_object_schema_added","Case_7_5_message_payload_object_schema_removed","Case_7_6_message_payload_description_changed","Case_8_1_message_headers_object_schema_added_extensions","Case_8_2_message_headers_object_schema_removed_extensions","Case_8_3_message_headers_object_schema_changed_extensions","Case_8_4_message_headers_object_schema_added_property_with_extensions","Case_8_5_message_headers_object_schema_removed_property_with_extensions","Case_8_6_message_payload_object_schema_added_extensions","Case_8_7_message_payload_object_schema_removed_extensions","Case_8_8_message_payload_object_schema_changed_extensions","Case_8_9_message_payload_object_schema_added_property_with_extensions","Case_8_10_message_payload_object_schema_removed_property_with_extensions"];export{a as Case_1_1_message_title_changed,t as Case_1_2_message_title_removed,o as Case_1_3_message_title_added,r as Case_2_1_message_description_changed,i as Case_2_2_message_description_removed,c as Case_2_3_message_description_added,d as Case_2_4_message_summary_changed,m as Case_2_5_message_summary_removed,p as Case_2_6_message_description_moved_to_summary,g as Case_2_7_message_summary_moved_to_description,l as Case_3_1_message_bindings_add_one_more_binding,_ as Case_3_2_message_bindings_remove_one_of_several_bindings,y as Case_3_3_message_bindings_add_bindings,f as Case_3_4_message_bindings_remove_bindings,h as Case_4_1_message_bindings_kafka_bindingVersion_changed,b as Case_4_2_message_bindings_kafka_bindingVersion_removed,T as Case_4_3_message_bindings_kafka_bindingVersion_added,M as Case_5_1_message_bindings_kafka_internal_jso_changes,v as Case_6_1_message_x_second_added,u as Case_6_2_message_x_second_removed,C as Case_6_3_message_x_second_changed,$ as Case_6_4_message_x_first_and_x_second_added,j as Case_6_5_message_x_first_and_x_second_removed,A as Case_7_1_message_headers_object_schema_added,S as Case_7_2_message_headers_object_schema_removed,x as Case_7_3_message_headers_description_changed,I as Case_7_4_message_payload_object_schema_added,O as Case_7_5_message_payload_object_schema_removed,k as Case_7_6_message_payload_description_changed,N as Case_8_10_message_payload_object_schema_removed_property_with_extensions,P as Case_8_1_message_headers_object_schema_added_extensions,q as Case_8_2_message_headers_object_schema_removed_extensions,V as Case_8_3_message_headers_object_schema_changed_extensions,w as Case_8_4_message_headers_object_schema_added_property_with_extensions,E as Case_8_5_message_headers_object_schema_removed_property_with_extensions,D as Case_8_6_message_payload_object_schema_added_extensions,L as Case_8_7_message_payload_object_schema_removed_extensions,G as Case_8_8_message_payload_object_schema_changed_extensions,K as Case_8_9_message_payload_object_schema_added_property_with_extensions,Wa as __namedExportsOrder,Ua as default};
