import{j as se}from"./_commonjs-dynamic-modules-6308e768.js";import{a as Xn}from"./AsyncApiOperationViewer-46f2f91e.js";import{c as Zn}from"./parse-yaml-source-2575e8ef.js";import{c as et,a as st,b as nt}from"./async-api-diffs-utils-d6b693ab.js";import"./index-f46741a2.js";import"./GraphPropNodeViewer-eccca14c.js";import"./index-415bee12.js";import"./GraphQLOperationDiffViewer-b27daf3f.js";import"./GraphQLOperationViewer-af235bab.js";import"./js-yaml-71a24e1f.js";import"./index-d5b0668c.js";import"./index-442a5f79.js";import"./preprocess-5bf59d8b.js";const tt=`asyncapi: 3.0.0
info:
  title: Sample AsyncAPI
  version: 1.0.0
channels:
  testChannel:
    address: events.default
    messages:
      TestMessage:
        $ref: '#/components/messages/TestMessage'
operations:
  sendOperation:
    action: send
    channel:
      $ref: '#/channels/testChannel'
    messages:
      - $ref: '#/components/messages/TestMessage'
components:
  messages:
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
      title: message title
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
      description: message description
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
      summary: A concise but complete overview of the message purpose, summarising the event semantics, the producing service, the expected delivery guarantees and the recommended consumer handling strategy so that integrators can quickly decide whether subscribing to this message is relevant for their use case. A concise but complete overview of the message purpose, summarising the event semantics, the producing service, the expected delivery guarantees and the recommended consumer handling strategy so that integrators can quickly decide whether subscribing to this message is relevant for their use case. A concise but complete overview of the message purpose, summarising the event semantics, the producing service, the expected delivery guarantees and the recommended consumer handling strategy so that integrators can quickly decide whether subscribing to this message is relevant for their use case. A concise but complete overview of the message purpose, summarising the event semantics, the producing service, the expected delivery guarantees and the recommended consumer handling strategy so that integrators can quickly decide whether subscribing to this message is relevant for their use case. A concise but complete overview of the message purpose, summarising the event semantics, the producing service, the expected delivery guarantees and the recommended consumer handling strategy so that integrators can quickly decide whether subscribing to this message is relevant for their use case. A concise but complete overview of the message purpose, summarising the event semantics, the producing service, the expected delivery guarantees and the recommended consumer handling strategy so that integrators can quickly decide whether subscribing to this message is relevant for their use case. A concise but complete overview of the message purpose, summarising the event semantics, the producing service, the expected delivery guarantees and the recommended consumer handling strategy so that integrators can quickly decide whether subscribing to this message is relevant for their use case. A concise but complete overview of the message purpose, summarising the event semantics, the producing service, the expected delivery guarantees and the recommended consumer handling strategy so that integrators can quickly decide whether subscribing to this message is relevant for their use case. A concise but complete overview of the message purpose, summarising the event semantics, the producing service, the expected delivery guarantees and the recommended consumer handling strategy so that integrators can quickly decide whether subscribing to this message is relevant for their use case. A concise but complete overview of the message purpose, summarising the event semantics, the producing service, the expected delivery guarantees and the recommended consumer handling strategy so that integrators can quickly decide whether subscribing to this message is relevant for their use case. A concise but complete overview of the message purpose, summarising the event semantics, the producing service, the expected delivery guarantees and the recommended consumer handling strategy so that integrators can quickly decide whether subscribing to this message is relevant for their use case. A concise but complete overview of the message purpose, summarising the event semantics, the producing service, the expected delivery guarantees and the recommended consumer handling strategy so that integrators can quickly decide whether subscribing to this message is relevant for their use case. A concise but complete overview of the message purpose, summarising the event semantics, the producing service, the expected delivery guarantees and the recommended consumer handling strategy so that integrators can quickly decide whether subscribing to this message is relevant for their use case. A concise but complete overview of the message purpose, summarising the event semantics, the producing service, the expected delivery guarantees and the recommended consumer handling strategy so that integrators can quickly decide whether subscribing to this message is relevant for their use case. A concise but complete overview of the message purpose, summarising the event semantics, the producing service, the expected delivery guarantees and the recommended consumer handling strategy so that integrators can quickly decide whether subscribing to this message is relevant for their use case. A concise but complete overview of the message purpose, summarising the event semantics, the producing service, the expected delivery guarantees and the recommended consumer handling strategy so that integrators can quickly decide whether subscribing to this message is relevant for their use case.
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
      summary: A concise but complete overview of the message purpose, summarising the event semantics, the producing service, the expected delivery guarantees and the recommended consumer handling strategy so that integrators can quickly decide whether subscribing to this message is relevant for their use case. A concise but complete overview of the message purpose, summarising the event semantics, the producing service, the expected delivery guarantees and the recommended consumer handling strategy so that integrators can quickly decide whether subscribing to this message is relevant for their use case. A concise but complete overview of the message purpose, summarising the event semantics, the producing service, the expected delivery guarantees and the recommended consumer handling strategy so that integrators can quickly decide whether subscribing to this message is relevant for their use case. A concise but complete overview of the message purpose, summarising the event semantics, the producing service, the expected delivery guarantees and the recommended consumer handling strategy so that integrators can quickly decide whether subscribing to this message is relevant for their use case. A concise but complete overview of the message purpose, summarising the event semantics, the producing service, the expected delivery guarantees and the recommended consumer handling strategy so that integrators can quickly decide whether subscribing to this message is relevant for their use case. A concise but complete overview of the message purpose, summarising the event semantics, the producing service, the expected delivery guarantees and the recommended consumer handling strategy so that integrators can quickly decide whether subscribing to this message is relevant for their use case. A concise but complete overview of the message purpose, summarising the event semantics, the producing service, the expected delivery guarantees and the recommended consumer handling strategy so that integrators can quickly decide whether subscribing to this message is relevant for their use case. A concise but complete overview of the message purpose, summarising the event semantics, the producing service, the expected delivery guarantees and the recommended consumer handling strategy so that integrators can quickly decide whether subscribing to this message is relevant for their use case. A concise but complete overview of the message purpose, summarising the event semantics, the producing service, the expected delivery guarantees and the recommended consumer handling strategy so that integrators can quickly decide whether subscribing to this message is relevant for their use case. A concise but complete overview of the message purpose, summarising the event semantics, the producing service, the expected delivery guarantees and the recommended consumer handling strategy so that integrators can quickly decide whether subscribing to this message is relevant for their use case. A concise but complete overview of the message purpose, summarising the event semantics, the producing service, the expected delivery guarantees and the recommended consumer handling strategy so that integrators can quickly decide whether subscribing to this message is relevant for their use case. A concise but complete overview of the message purpose, summarising the event semantics, the producing service, the expected delivery guarantees and the recommended consumer handling strategy so that integrators can quickly decide whether subscribing to this message is relevant for their use case. A concise but complete overview of the message purpose, summarising the event semantics, the producing service, the expected delivery guarantees and the recommended consumer handling strategy so that integrators can quickly decide whether subscribing to this message is relevant for their use case. A concise but complete overview of the message purpose, summarising the event semantics, the producing service, the expected delivery guarantees and the recommended consumer handling strategy so that integrators can quickly decide whether subscribing to this message is relevant for their use case. A concise but complete overview of the message purpose, summarising the event semantics, the producing service, the expected delivery guarantees and the recommended consumer handling strategy so that integrators can quickly decide whether subscribing to this message is relevant for their use case. A concise but complete overview of the message purpose, summarising the event semantics, the producing service, the expected delivery guarantees and the recommended consumer handling strategy so that integrators can quickly decide whether subscribing to this message is relevant for their use case.
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
      description: this description will be moved to summary
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
      description: This message represents a complete domain event that is published whenever the underlying aggregate changes its state. It contains the entity identifier, the previous and current values, the timestamp of the change and contextual metadata that downstream consumers rely on to reconcile their projections and trigger follow-up workflows. This message represents a complete domain event that is published whenever the underlying aggregate changes its state. It contains the entity identifier, the previous and current values, the timestamp of the change and contextual metadata that downstream consumers rely on to reconcile their projections and trigger follow-up workflows. This message represents a complete domain event that is published whenever the underlying aggregate changes its state. It contains the entity identifier, the previous and current values, the timestamp of the change and contextual metadata that downstream consumers rely on to reconcile their projections and trigger follow-up workflows. This message represents a complete domain event that is published whenever the underlying aggregate changes its state. It contains the entity identifier, the previous and current values, the timestamp of the change and contextual metadata that downstream consumers rely on to reconcile their projections and trigger follow-up workflows. This message represents a complete domain event that is published whenever the underlying aggregate changes its state. It contains the entity identifier, the previous and current values, the timestamp of the change and contextual metadata that downstream consumers rely on to reconcile their projections and trigger follow-up workflows. This message represents a complete domain event that is published whenever the underlying aggregate changes its state. It contains the entity identifier, the previous and current values, the timestamp of the change and contextual metadata that downstream consumers rely on to reconcile their projections and trigger follow-up workflows. This message represents a complete domain event that is published whenever the underlying aggregate changes its state. It contains the entity identifier, the previous and current values, the timestamp of the change and contextual metadata that downstream consumers rely on to reconcile their projections and trigger follow-up workflows. This message represents a complete domain event that is published whenever the underlying aggregate changes its state. It contains the entity identifier, the previous and current values, the timestamp of the change and contextual metadata that downstream consumers rely on to reconcile their projections and trigger follow-up workflows. This message represents a complete domain event that is published whenever the underlying aggregate changes its state. It contains the entity identifier, the previous and current values, the timestamp of the change and contextual metadata that downstream consumers rely on to reconcile their projections and trigger follow-up workflows. This message represents a complete domain event that is published whenever the underlying aggregate changes its state. It contains the entity identifier, the previous and current values, the timestamp of the change and contextual metadata that downstream consumers rely on to reconcile their projections and trigger follow-up workflows. This message represents a complete domain event that is published whenever the underlying aggregate changes its state. It contains the entity identifier, the previous and current values, the timestamp of the change and contextual metadata that downstream consumers rely on to reconcile their projections and trigger follow-up workflows. This message represents a complete domain event that is published whenever the underlying aggregate changes its state. It contains the entity identifier, the previous and current values, the timestamp of the change and contextual metadata that downstream consumers rely on to reconcile their projections and trigger follow-up workflows. This message represents a complete domain event that is published whenever the underlying aggregate changes its state. It contains the entity identifier, the previous and current values, the timestamp of the change and contextual metadata that downstream consumers rely on to reconcile their projections and trigger follow-up workflows. This message represents a complete domain event that is published whenever the underlying aggregate changes its state. It contains the entity identifier, the previous and current values, the timestamp of the change and contextual metadata that downstream consumers rely on to reconcile their projections and trigger follow-up workflows. This message represents a complete domain event that is published whenever the underlying aggregate changes its state. It contains the entity identifier, the previous and current values, the timestamp of the change and contextual metadata that downstream consumers rely on to reconcile their projections and trigger follow-up workflows. This message represents a complete domain event that is published whenever the underlying aggregate changes its state. It contains the entity identifier, the previous and current values, the timestamp of the change and contextual metadata that downstream consumers rely on to reconcile their projections and trigger follow-up workflows.
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
      description: This message represents a complete domain event that is published whenever the underlying aggregate changes its state. It contains the entity identifier, the previous and current values, the timestamp of the change and contextual metadata that downstream consumers rely on to reconcile their projections and trigger follow-up workflows. This message represents a complete domain event that is published whenever the underlying aggregate changes its state. It contains the entity identifier, the previous and current values, the timestamp of the change and contextual metadata that downstream consumers rely on to reconcile their projections and trigger follow-up workflows. This message represents a complete domain event that is published whenever the underlying aggregate changes its state. It contains the entity identifier, the previous and current values, the timestamp of the change and contextual metadata that downstream consumers rely on to reconcile their projections and trigger follow-up workflows. This message represents a complete domain event that is published whenever the underlying aggregate changes its state. It contains the entity identifier, the previous and current values, the timestamp of the change and contextual metadata that downstream consumers rely on to reconcile their projections and trigger follow-up workflows. This message represents a complete domain event that is published whenever the underlying aggregate changes its state. It contains the entity identifier, the previous and current values, the timestamp of the change and contextual metadata that downstream consumers rely on to reconcile their projections and trigger follow-up workflows. This message represents a complete domain event that is published whenever the underlying aggregate changes its state. It contains the entity identifier, the previous and current values, the timestamp of the change and contextual metadata that downstream consumers rely on to reconcile their projections and trigger follow-up workflows. This message represents a complete domain event that is published whenever the underlying aggregate changes its state. It contains the entity identifier, the previous and current values, the timestamp of the change and contextual metadata that downstream consumers rely on to reconcile their projections and trigger follow-up workflows. This message represents a complete domain event that is published whenever the underlying aggregate changes its state. It contains the entity identifier, the previous and current values, the timestamp of the change and contextual metadata that downstream consumers rely on to reconcile their projections and trigger follow-up workflows. This message represents a complete domain event that is published whenever the underlying aggregate changes its state. It contains the entity identifier, the previous and current values, the timestamp of the change and contextual metadata that downstream consumers rely on to reconcile their projections and trigger follow-up workflows. This message represents a complete domain event that is published whenever the underlying aggregate changes its state. It contains the entity identifier, the previous and current values, the timestamp of the change and contextual metadata that downstream consumers rely on to reconcile their projections and trigger follow-up workflows. This message represents a complete domain event that is published whenever the underlying aggregate changes its state. It contains the entity identifier, the previous and current values, the timestamp of the change and contextual metadata that downstream consumers rely on to reconcile their projections and trigger follow-up workflows. This message represents a complete domain event that is published whenever the underlying aggregate changes its state. It contains the entity identifier, the previous and current values, the timestamp of the change and contextual metadata that downstream consumers rely on to reconcile their projections and trigger follow-up workflows. This message represents a complete domain event that is published whenever the underlying aggregate changes its state. It contains the entity identifier, the previous and current values, the timestamp of the change and contextual metadata that downstream consumers rely on to reconcile their projections and trigger follow-up workflows. This message represents a complete domain event that is published whenever the underlying aggregate changes its state. It contains the entity identifier, the previous and current values, the timestamp of the change and contextual metadata that downstream consumers rely on to reconcile their projections and trigger follow-up workflows. This message represents a complete domain event that is published whenever the underlying aggregate changes its state. It contains the entity identifier, the previous and current values, the timestamp of the change and contextual metadata that downstream consumers rely on to reconcile their projections and trigger follow-up workflows. This message represents a complete domain event that is published whenever the underlying aggregate changes its state. It contains the entity identifier, the previous and current values, the timestamp of the change and contextual metadata that downstream consumers rely on to reconcile their projections and trigger follow-up workflows.
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
      description: message description
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
      summary: this summary will be moved to description
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
      summary: A concise but complete overview of the message purpose, summarising the event semantics, the producing service, the expected delivery guarantees and the recommended consumer handling strategy so that integrators can quickly decide whether subscribing to this message is relevant for their use case. A concise but complete overview of the message purpose, summarising the event semantics, the producing service, the expected delivery guarantees and the recommended consumer handling strategy so that integrators can quickly decide whether subscribing to this message is relevant for their use case. A concise but complete overview of the message purpose, summarising the event semantics, the producing service, the expected delivery guarantees and the recommended consumer handling strategy so that integrators can quickly decide whether subscribing to this message is relevant for their use case. A concise but complete overview of the message purpose, summarising the event semantics, the producing service, the expected delivery guarantees and the recommended consumer handling strategy so that integrators can quickly decide whether subscribing to this message is relevant for their use case. A concise but complete overview of the message purpose, summarising the event semantics, the producing service, the expected delivery guarantees and the recommended consumer handling strategy so that integrators can quickly decide whether subscribing to this message is relevant for their use case. A concise but complete overview of the message purpose, summarising the event semantics, the producing service, the expected delivery guarantees and the recommended consumer handling strategy so that integrators can quickly decide whether subscribing to this message is relevant for their use case. A concise but complete overview of the message purpose, summarising the event semantics, the producing service, the expected delivery guarantees and the recommended consumer handling strategy so that integrators can quickly decide whether subscribing to this message is relevant for their use case. A concise but complete overview of the message purpose, summarising the event semantics, the producing service, the expected delivery guarantees and the recommended consumer handling strategy so that integrators can quickly decide whether subscribing to this message is relevant for their use case. A concise but complete overview of the message purpose, summarising the event semantics, the producing service, the expected delivery guarantees and the recommended consumer handling strategy so that integrators can quickly decide whether subscribing to this message is relevant for their use case. A concise but complete overview of the message purpose, summarising the event semantics, the producing service, the expected delivery guarantees and the recommended consumer handling strategy so that integrators can quickly decide whether subscribing to this message is relevant for their use case. A concise but complete overview of the message purpose, summarising the event semantics, the producing service, the expected delivery guarantees and the recommended consumer handling strategy so that integrators can quickly decide whether subscribing to this message is relevant for their use case. A concise but complete overview of the message purpose, summarising the event semantics, the producing service, the expected delivery guarantees and the recommended consumer handling strategy so that integrators can quickly decide whether subscribing to this message is relevant for their use case. A concise but complete overview of the message purpose, summarising the event semantics, the producing service, the expected delivery guarantees and the recommended consumer handling strategy so that integrators can quickly decide whether subscribing to this message is relevant for their use case. A concise but complete overview of the message purpose, summarising the event semantics, the producing service, the expected delivery guarantees and the recommended consumer handling strategy so that integrators can quickly decide whether subscribing to this message is relevant for their use case. A concise but complete overview of the message purpose, summarising the event semantics, the producing service, the expected delivery guarantees and the recommended consumer handling strategy so that integrators can quickly decide whether subscribing to this message is relevant for their use case. A concise but complete overview of the message purpose, summarising the event semantics, the producing service, the expected delivery guarantees and the recommended consumer handling strategy so that integrators can quickly decide whether subscribing to this message is relevant for their use case.
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
      summary: A concise but complete overview of the message purpose, summarising the event semantics, the producing service, the expected delivery guarantees and the recommended consumer handling strategy so that integrators can quickly decide whether subscribing to this message is relevant for their use case. A concise but complete overview of the message purpose, summarising the event semantics, the producing service, the expected delivery guarantees and the recommended consumer handling strategy so that integrators can quickly decide whether subscribing to this message is relevant for their use case. A concise but complete overview of the message purpose, summarising the event semantics, the producing service, the expected delivery guarantees and the recommended consumer handling strategy so that integrators can quickly decide whether subscribing to this message is relevant for their use case. A concise but complete overview of the message purpose, summarising the event semantics, the producing service, the expected delivery guarantees and the recommended consumer handling strategy so that integrators can quickly decide whether subscribing to this message is relevant for their use case. A concise but complete overview of the message purpose, summarising the event semantics, the producing service, the expected delivery guarantees and the recommended consumer handling strategy so that integrators can quickly decide whether subscribing to this message is relevant for their use case. A concise but complete overview of the message purpose, summarising the event semantics, the producing service, the expected delivery guarantees and the recommended consumer handling strategy so that integrators can quickly decide whether subscribing to this message is relevant for their use case. A concise but complete overview of the message purpose, summarising the event semantics, the producing service, the expected delivery guarantees and the recommended consumer handling strategy so that integrators can quickly decide whether subscribing to this message is relevant for their use case. A concise but complete overview of the message purpose, summarising the event semantics, the producing service, the expected delivery guarantees and the recommended consumer handling strategy so that integrators can quickly decide whether subscribing to this message is relevant for their use case. A concise but complete overview of the message purpose, summarising the event semantics, the producing service, the expected delivery guarantees and the recommended consumer handling strategy so that integrators can quickly decide whether subscribing to this message is relevant for their use case. A concise but complete overview of the message purpose, summarising the event semantics, the producing service, the expected delivery guarantees and the recommended consumer handling strategy so that integrators can quickly decide whether subscribing to this message is relevant for their use case. A concise but complete overview of the message purpose, summarising the event semantics, the producing service, the expected delivery guarantees and the recommended consumer handling strategy so that integrators can quickly decide whether subscribing to this message is relevant for their use case. A concise but complete overview of the message purpose, summarising the event semantics, the producing service, the expected delivery guarantees and the recommended consumer handling strategy so that integrators can quickly decide whether subscribing to this message is relevant for their use case. A concise but complete overview of the message purpose, summarising the event semantics, the producing service, the expected delivery guarantees and the recommended consumer handling strategy so that integrators can quickly decide whether subscribing to this message is relevant for their use case. A concise but complete overview of the message purpose, summarising the event semantics, the producing service, the expected delivery guarantees and the recommended consumer handling strategy so that integrators can quickly decide whether subscribing to this message is relevant for their use case. A concise but complete overview of the message purpose, summarising the event semantics, the producing service, the expected delivery guarantees and the recommended consumer handling strategy so that integrators can quickly decide whether subscribing to this message is relevant for their use case. A concise but complete overview of the message purpose, summarising the event semantics, the producing service, the expected delivery guarantees and the recommended consumer handling strategy so that integrators can quickly decide whether subscribing to this message is relevant for their use case.
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
      description: message description
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
      summary: message summary
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
      description: This message represents a complete domain event that is published whenever the underlying aggregate changes its state. It contains the entity identifier, the previous and current values, the timestamp of the change and contextual metadata that downstream consumers rely on to reconcile their projections and trigger follow-up workflows. This message represents a complete domain event that is published whenever the underlying aggregate changes its state. It contains the entity identifier, the previous and current values, the timestamp of the change and contextual metadata that downstream consumers rely on to reconcile their projections and trigger follow-up workflows. This message represents a complete domain event that is published whenever the underlying aggregate changes its state. It contains the entity identifier, the previous and current values, the timestamp of the change and contextual metadata that downstream consumers rely on to reconcile their projections and trigger follow-up workflows. This message represents a complete domain event that is published whenever the underlying aggregate changes its state. It contains the entity identifier, the previous and current values, the timestamp of the change and contextual metadata that downstream consumers rely on to reconcile their projections and trigger follow-up workflows. This message represents a complete domain event that is published whenever the underlying aggregate changes its state. It contains the entity identifier, the previous and current values, the timestamp of the change and contextual metadata that downstream consumers rely on to reconcile their projections and trigger follow-up workflows. This message represents a complete domain event that is published whenever the underlying aggregate changes its state. It contains the entity identifier, the previous and current values, the timestamp of the change and contextual metadata that downstream consumers rely on to reconcile their projections and trigger follow-up workflows. This message represents a complete domain event that is published whenever the underlying aggregate changes its state. It contains the entity identifier, the previous and current values, the timestamp of the change and contextual metadata that downstream consumers rely on to reconcile their projections and trigger follow-up workflows. This message represents a complete domain event that is published whenever the underlying aggregate changes its state. It contains the entity identifier, the previous and current values, the timestamp of the change and contextual metadata that downstream consumers rely on to reconcile their projections and trigger follow-up workflows. This message represents a complete domain event that is published whenever the underlying aggregate changes its state. It contains the entity identifier, the previous and current values, the timestamp of the change and contextual metadata that downstream consumers rely on to reconcile their projections and trigger follow-up workflows. This message represents a complete domain event that is published whenever the underlying aggregate changes its state. It contains the entity identifier, the previous and current values, the timestamp of the change and contextual metadata that downstream consumers rely on to reconcile their projections and trigger follow-up workflows. This message represents a complete domain event that is published whenever the underlying aggregate changes its state. It contains the entity identifier, the previous and current values, the timestamp of the change and contextual metadata that downstream consumers rely on to reconcile their projections and trigger follow-up workflows. This message represents a complete domain event that is published whenever the underlying aggregate changes its state. It contains the entity identifier, the previous and current values, the timestamp of the change and contextual metadata that downstream consumers rely on to reconcile their projections and trigger follow-up workflows. This message represents a complete domain event that is published whenever the underlying aggregate changes its state. It contains the entity identifier, the previous and current values, the timestamp of the change and contextual metadata that downstream consumers rely on to reconcile their projections and trigger follow-up workflows. This message represents a complete domain event that is published whenever the underlying aggregate changes its state. It contains the entity identifier, the previous and current values, the timestamp of the change and contextual metadata that downstream consumers rely on to reconcile their projections and trigger follow-up workflows. This message represents a complete domain event that is published whenever the underlying aggregate changes its state. It contains the entity identifier, the previous and current values, the timestamp of the change and contextual metadata that downstream consumers rely on to reconcile their projections and trigger follow-up workflows. This message represents a complete domain event that is published whenever the underlying aggregate changes its state. It contains the entity identifier, the previous and current values, the timestamp of the change and contextual metadata that downstream consumers rely on to reconcile their projections and trigger follow-up workflows.
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
operations:
  sendOperation:
    action: send
    channel:
      $ref: '#/channels/testChannel'
    messages:
      - $ref: '#/components/messages/TestMessage'
components:
  messages:
    TestMessage:
      name: TestMessage
      payload:
        type: object
        properties:
          id:
            type: string
        required:
          - id
      description: This message represents a complete domain event that is published whenever the underlying aggregate changes its state. It contains the entity identifier, the previous and current values, the timestamp of the change and contextual metadata that downstream consumers rely on to reconcile their projections and trigger follow-up workflows. This message represents a complete domain event that is published whenever the underlying aggregate changes its state. It contains the entity identifier, the previous and current values, the timestamp of the change and contextual metadata that downstream consumers rely on to reconcile their projections and trigger follow-up workflows. This message represents a complete domain event that is published whenever the underlying aggregate changes its state. It contains the entity identifier, the previous and current values, the timestamp of the change and contextual metadata that downstream consumers rely on to reconcile their projections and trigger follow-up workflows. This message represents a complete domain event that is published whenever the underlying aggregate changes its state. It contains the entity identifier, the previous and current values, the timestamp of the change and contextual metadata that downstream consumers rely on to reconcile their projections and trigger follow-up workflows. This message represents a complete domain event that is published whenever the underlying aggregate changes its state. It contains the entity identifier, the previous and current values, the timestamp of the change and contextual metadata that downstream consumers rely on to reconcile their projections and trigger follow-up workflows. This message represents a complete domain event that is published whenever the underlying aggregate changes its state. It contains the entity identifier, the previous and current values, the timestamp of the change and contextual metadata that downstream consumers rely on to reconcile their projections and trigger follow-up workflows. This message represents a complete domain event that is published whenever the underlying aggregate changes its state. It contains the entity identifier, the previous and current values, the timestamp of the change and contextual metadata that downstream consumers rely on to reconcile their projections and trigger follow-up workflows. This message represents a complete domain event that is published whenever the underlying aggregate changes its state. It contains the entity identifier, the previous and current values, the timestamp of the change and contextual metadata that downstream consumers rely on to reconcile their projections and trigger follow-up workflows. This message represents a complete domain event that is published whenever the underlying aggregate changes its state. It contains the entity identifier, the previous and current values, the timestamp of the change and contextual metadata that downstream consumers rely on to reconcile their projections and trigger follow-up workflows. This message represents a complete domain event that is published whenever the underlying aggregate changes its state. It contains the entity identifier, the previous and current values, the timestamp of the change and contextual metadata that downstream consumers rely on to reconcile their projections and trigger follow-up workflows. This message represents a complete domain event that is published whenever the underlying aggregate changes its state. It contains the entity identifier, the previous and current values, the timestamp of the change and contextual metadata that downstream consumers rely on to reconcile their projections and trigger follow-up workflows. This message represents a complete domain event that is published whenever the underlying aggregate changes its state. It contains the entity identifier, the previous and current values, the timestamp of the change and contextual metadata that downstream consumers rely on to reconcile their projections and trigger follow-up workflows. This message represents a complete domain event that is published whenever the underlying aggregate changes its state. It contains the entity identifier, the previous and current values, the timestamp of the change and contextual metadata that downstream consumers rely on to reconcile their projections and trigger follow-up workflows. This message represents a complete domain event that is published whenever the underlying aggregate changes its state. It contains the entity identifier, the previous and current values, the timestamp of the change and contextual metadata that downstream consumers rely on to reconcile their projections and trigger follow-up workflows. This message represents a complete domain event that is published whenever the underlying aggregate changes its state. It contains the entity identifier, the previous and current values, the timestamp of the change and contextual metadata that downstream consumers rely on to reconcile their projections and trigger follow-up workflows. This message represents a complete domain event that is published whenever the underlying aggregate changes its state. It contains the entity identifier, the previous and current values, the timestamp of the change and contextual metadata that downstream consumers rely on to reconcile their projections and trigger follow-up workflows.
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
      summary: message summary
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
      summary: message summary
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
          key:
            type: string
          schemaIdLocation: header
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
          key:
            type: string
          schemaIdLocation: header
        amqp:
          bindingVersion: 0.3.0
          contentEncoding: gzip
          messageType: user.signup
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
          key:
            type: string
          schemaIdLocation: header
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
      bindings:
        kafka: {}
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
          arbitraryJso:
            unchanged: keep
            removed: bye
            changed: 111
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
      x-first: first
      x-second: second
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
operations:
  sendOperation:
    action: send
    channel:
      $ref: '#/channels/testChannel'
    messages:
      - $ref: '#/components/messages/TestMessage'
components:
  messages:
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
      x-first: first
      x-second: second
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
operations:
  sendOperation:
    action: send
    channel:
      $ref: '#/channels/testChannel'
    messages:
      - $ref: '#/components/messages/TestMessage'
components:
  messages:
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
operations:
  sendOperation:
    action: send
    channel:
      $ref: '#/channels/testChannel'
    messages:
      - $ref: '#/components/messages/TestMessage'
components:
  messages:
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
        description: before description
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
        description: payload object
        properties:
          id:
            type: string
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
operations:
  sendOperation:
    action: send
    channel:
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
operations:
  sendOperation:
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
operations:
  sendOperation:
    action: send
    channel:
      $ref: '#/channels/testChannel'
    messages:
      - $ref: '#/components/messages/TestMessage'
components:
  messages:
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
      headers:
        type: object
        description: headers object
        properties:
          traceId:
            type: string
        x-first: first-old
        x-second: second
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
operations:
  sendOperation:
    action: send
    channel:
      $ref: '#/channels/testChannel'
    messages:
      - $ref: '#/components/messages/TestMessage'
components:
  messages:
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
operations:
  sendOperation:
    action: send
    channel:
      $ref: '#/channels/testChannel'
    messages:
      - $ref: '#/components/messages/TestMessage'
components:
  messages:
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
operations:
  sendOperation:
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
operations:
  sendOperation:
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
operations:
  sendOperation:
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
      title: CHANGED message title
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
      title: message title
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
      description: CHANGED message description
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
      summary: An updated overview of the message purpose, now clarifying the event semantics, the producing service, the at-least-once delivery guarantees, the ordering expectations and the recommended idempotent handling strategy so that integrators can decide more accurately whether subscribing to this message is relevant. An updated overview of the message purpose, now clarifying the event semantics, the producing service, the at-least-once delivery guarantees, the ordering expectations and the recommended idempotent handling strategy so that integrators can decide more accurately whether subscribing to this message is relevant. An updated overview of the message purpose, now clarifying the event semantics, the producing service, the at-least-once delivery guarantees, the ordering expectations and the recommended idempotent handling strategy so that integrators can decide more accurately whether subscribing to this message is relevant. An updated overview of the message purpose, now clarifying the event semantics, the producing service, the at-least-once delivery guarantees, the ordering expectations and the recommended idempotent handling strategy so that integrators can decide more accurately whether subscribing to this message is relevant. An updated overview of the message purpose, now clarifying the event semantics, the producing service, the at-least-once delivery guarantees, the ordering expectations and the recommended idempotent handling strategy so that integrators can decide more accurately whether subscribing to this message is relevant. An updated overview of the message purpose, now clarifying the event semantics, the producing service, the at-least-once delivery guarantees, the ordering expectations and the recommended idempotent handling strategy so that integrators can decide more accurately whether subscribing to this message is relevant. An updated overview of the message purpose, now clarifying the event semantics, the producing service, the at-least-once delivery guarantees, the ordering expectations and the recommended idempotent handling strategy so that integrators can decide more accurately whether subscribing to this message is relevant. An updated overview of the message purpose, now clarifying the event semantics, the producing service, the at-least-once delivery guarantees, the ordering expectations and the recommended idempotent handling strategy so that integrators can decide more accurately whether subscribing to this message is relevant. An updated overview of the message purpose, now clarifying the event semantics, the producing service, the at-least-once delivery guarantees, the ordering expectations and the recommended idempotent handling strategy so that integrators can decide more accurately whether subscribing to this message is relevant. An updated overview of the message purpose, now clarifying the event semantics, the producing service, the at-least-once delivery guarantees, the ordering expectations and the recommended idempotent handling strategy so that integrators can decide more accurately whether subscribing to this message is relevant. An updated overview of the message purpose, now clarifying the event semantics, the producing service, the at-least-once delivery guarantees, the ordering expectations and the recommended idempotent handling strategy so that integrators can decide more accurately whether subscribing to this message is relevant. An updated overview of the message purpose, now clarifying the event semantics, the producing service, the at-least-once delivery guarantees, the ordering expectations and the recommended idempotent handling strategy so that integrators can decide more accurately whether subscribing to this message is relevant. An updated overview of the message purpose, now clarifying the event semantics, the producing service, the at-least-once delivery guarantees, the ordering expectations and the recommended idempotent handling strategy so that integrators can decide more accurately whether subscribing to this message is relevant. An updated overview of the message purpose, now clarifying the event semantics, the producing service, the at-least-once delivery guarantees, the ordering expectations and the recommended idempotent handling strategy so that integrators can decide more accurately whether subscribing to this message is relevant. An updated overview of the message purpose, now clarifying the event semantics, the producing service, the at-least-once delivery guarantees, the ordering expectations and the recommended idempotent handling strategy so that integrators can decide more accurately whether subscribing to this message is relevant. An updated overview of the message purpose, now clarifying the event semantics, the producing service, the at-least-once delivery guarantees, the ordering expectations and the recommended idempotent handling strategy so that integrators can decide more accurately whether subscribing to this message is relevant.
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
      summary: A concise but complete overview of the message purpose, summarising the event semantics, the producing service, the expected delivery guarantees and the recommended consumer handling strategy so that integrators can quickly decide whether subscribing to this message is relevant for their use case. A concise but complete overview of the message purpose, summarising the event semantics, the producing service, the expected delivery guarantees and the recommended consumer handling strategy so that integrators can quickly decide whether subscribing to this message is relevant for their use case. A concise but complete overview of the message purpose, summarising the event semantics, the producing service, the expected delivery guarantees and the recommended consumer handling strategy so that integrators can quickly decide whether subscribing to this message is relevant for their use case. A concise but complete overview of the message purpose, summarising the event semantics, the producing service, the expected delivery guarantees and the recommended consumer handling strategy so that integrators can quickly decide whether subscribing to this message is relevant for their use case. A concise but complete overview of the message purpose, summarising the event semantics, the producing service, the expected delivery guarantees and the recommended consumer handling strategy so that integrators can quickly decide whether subscribing to this message is relevant for their use case. A concise but complete overview of the message purpose, summarising the event semantics, the producing service, the expected delivery guarantees and the recommended consumer handling strategy so that integrators can quickly decide whether subscribing to this message is relevant for their use case. A concise but complete overview of the message purpose, summarising the event semantics, the producing service, the expected delivery guarantees and the recommended consumer handling strategy so that integrators can quickly decide whether subscribing to this message is relevant for their use case. A concise but complete overview of the message purpose, summarising the event semantics, the producing service, the expected delivery guarantees and the recommended consumer handling strategy so that integrators can quickly decide whether subscribing to this message is relevant for their use case. A concise but complete overview of the message purpose, summarising the event semantics, the producing service, the expected delivery guarantees and the recommended consumer handling strategy so that integrators can quickly decide whether subscribing to this message is relevant for their use case. A concise but complete overview of the message purpose, summarising the event semantics, the producing service, the expected delivery guarantees and the recommended consumer handling strategy so that integrators can quickly decide whether subscribing to this message is relevant for their use case. A concise but complete overview of the message purpose, summarising the event semantics, the producing service, the expected delivery guarantees and the recommended consumer handling strategy so that integrators can quickly decide whether subscribing to this message is relevant for their use case. A concise but complete overview of the message purpose, summarising the event semantics, the producing service, the expected delivery guarantees and the recommended consumer handling strategy so that integrators can quickly decide whether subscribing to this message is relevant for their use case. A concise but complete overview of the message purpose, summarising the event semantics, the producing service, the expected delivery guarantees and the recommended consumer handling strategy so that integrators can quickly decide whether subscribing to this message is relevant for their use case. A concise but complete overview of the message purpose, summarising the event semantics, the producing service, the expected delivery guarantees and the recommended consumer handling strategy so that integrators can quickly decide whether subscribing to this message is relevant for their use case. A concise but complete overview of the message purpose, summarising the event semantics, the producing service, the expected delivery guarantees and the recommended consumer handling strategy so that integrators can quickly decide whether subscribing to this message is relevant for their use case. A concise but complete overview of the message purpose, summarising the event semantics, the producing service, the expected delivery guarantees and the recommended consumer handling strategy so that integrators can quickly decide whether subscribing to this message is relevant for their use case.
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
      summary: here it is!
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
      summary: message summary
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
      summary: A concise but complete overview of the message purpose, summarising the event semantics, the producing service, the expected delivery guarantees and the recommended consumer handling strategy so that integrators can quickly decide whether subscribing to this message is relevant for their use case. A concise but complete overview of the message purpose, summarising the event semantics, the producing service, the expected delivery guarantees and the recommended consumer handling strategy so that integrators can quickly decide whether subscribing to this message is relevant for their use case. A concise but complete overview of the message purpose, summarising the event semantics, the producing service, the expected delivery guarantees and the recommended consumer handling strategy so that integrators can quickly decide whether subscribing to this message is relevant for their use case. A concise but complete overview of the message purpose, summarising the event semantics, the producing service, the expected delivery guarantees and the recommended consumer handling strategy so that integrators can quickly decide whether subscribing to this message is relevant for their use case. A concise but complete overview of the message purpose, summarising the event semantics, the producing service, the expected delivery guarantees and the recommended consumer handling strategy so that integrators can quickly decide whether subscribing to this message is relevant for their use case. A concise but complete overview of the message purpose, summarising the event semantics, the producing service, the expected delivery guarantees and the recommended consumer handling strategy so that integrators can quickly decide whether subscribing to this message is relevant for their use case. A concise but complete overview of the message purpose, summarising the event semantics, the producing service, the expected delivery guarantees and the recommended consumer handling strategy so that integrators can quickly decide whether subscribing to this message is relevant for their use case. A concise but complete overview of the message purpose, summarising the event semantics, the producing service, the expected delivery guarantees and the recommended consumer handling strategy so that integrators can quickly decide whether subscribing to this message is relevant for their use case. A concise but complete overview of the message purpose, summarising the event semantics, the producing service, the expected delivery guarantees and the recommended consumer handling strategy so that integrators can quickly decide whether subscribing to this message is relevant for their use case. A concise but complete overview of the message purpose, summarising the event semantics, the producing service, the expected delivery guarantees and the recommended consumer handling strategy so that integrators can quickly decide whether subscribing to this message is relevant for their use case. A concise but complete overview of the message purpose, summarising the event semantics, the producing service, the expected delivery guarantees and the recommended consumer handling strategy so that integrators can quickly decide whether subscribing to this message is relevant for their use case. A concise but complete overview of the message purpose, summarising the event semantics, the producing service, the expected delivery guarantees and the recommended consumer handling strategy so that integrators can quickly decide whether subscribing to this message is relevant for their use case. A concise but complete overview of the message purpose, summarising the event semantics, the producing service, the expected delivery guarantees and the recommended consumer handling strategy so that integrators can quickly decide whether subscribing to this message is relevant for their use case. A concise but complete overview of the message purpose, summarising the event semantics, the producing service, the expected delivery guarantees and the recommended consumer handling strategy so that integrators can quickly decide whether subscribing to this message is relevant for their use case. A concise but complete overview of the message purpose, summarising the event semantics, the producing service, the expected delivery guarantees and the recommended consumer handling strategy so that integrators can quickly decide whether subscribing to this message is relevant for their use case. A concise but complete overview of the message purpose, summarising the event semantics, the producing service, the expected delivery guarantees and the recommended consumer handling strategy so that integrators can quickly decide whether subscribing to this message is relevant for their use case.
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
      summary: A concise but complete overview of the message purpose, summarising the event semantics, the producing service, the expected delivery guarantees and the recommended consumer handling strategy so that integrators can quickly decide whether subscribing to this message is relevant for their use case. A concise but complete overview of the message purpose, summarising the event semantics, the producing service, the expected delivery guarantees and the recommended consumer handling strategy so that integrators can quickly decide whether subscribing to this message is relevant for their use case. A concise but complete overview of the message purpose, summarising the event semantics, the producing service, the expected delivery guarantees and the recommended consumer handling strategy so that integrators can quickly decide whether subscribing to this message is relevant for their use case. A concise but complete overview of the message purpose, summarising the event semantics, the producing service, the expected delivery guarantees and the recommended consumer handling strategy so that integrators can quickly decide whether subscribing to this message is relevant for their use case. A concise but complete overview of the message purpose, summarising the event semantics, the producing service, the expected delivery guarantees and the recommended consumer handling strategy so that integrators can quickly decide whether subscribing to this message is relevant for their use case. A concise but complete overview of the message purpose, summarising the event semantics, the producing service, the expected delivery guarantees and the recommended consumer handling strategy so that integrators can quickly decide whether subscribing to this message is relevant for their use case. A concise but complete overview of the message purpose, summarising the event semantics, the producing service, the expected delivery guarantees and the recommended consumer handling strategy so that integrators can quickly decide whether subscribing to this message is relevant for their use case. A concise but complete overview of the message purpose, summarising the event semantics, the producing service, the expected delivery guarantees and the recommended consumer handling strategy so that integrators can quickly decide whether subscribing to this message is relevant for their use case. A concise but complete overview of the message purpose, summarising the event semantics, the producing service, the expected delivery guarantees and the recommended consumer handling strategy so that integrators can quickly decide whether subscribing to this message is relevant for their use case. A concise but complete overview of the message purpose, summarising the event semantics, the producing service, the expected delivery guarantees and the recommended consumer handling strategy so that integrators can quickly decide whether subscribing to this message is relevant for their use case. A concise but complete overview of the message purpose, summarising the event semantics, the producing service, the expected delivery guarantees and the recommended consumer handling strategy so that integrators can quickly decide whether subscribing to this message is relevant for their use case. A concise but complete overview of the message purpose, summarising the event semantics, the producing service, the expected delivery guarantees and the recommended consumer handling strategy so that integrators can quickly decide whether subscribing to this message is relevant for their use case. A concise but complete overview of the message purpose, summarising the event semantics, the producing service, the expected delivery guarantees and the recommended consumer handling strategy so that integrators can quickly decide whether subscribing to this message is relevant for their use case. A concise but complete overview of the message purpose, summarising the event semantics, the producing service, the expected delivery guarantees and the recommended consumer handling strategy so that integrators can quickly decide whether subscribing to this message is relevant for their use case. A concise but complete overview of the message purpose, summarising the event semantics, the producing service, the expected delivery guarantees and the recommended consumer handling strategy so that integrators can quickly decide whether subscribing to this message is relevant for their use case. A concise but complete overview of the message purpose, summarising the event semantics, the producing service, the expected delivery guarantees and the recommended consumer handling strategy so that integrators can quickly decide whether subscribing to this message is relevant for their use case.
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
      description: here it is!
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
      description: message description
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
      description: This message represents a complete domain event that is published whenever the underlying aggregate changes its state. It contains the entity identifier, the previous and current values, the timestamp of the change and contextual metadata that downstream consumers rely on to reconcile their projections and trigger follow-up workflows. This message represents a complete domain event that is published whenever the underlying aggregate changes its state. It contains the entity identifier, the previous and current values, the timestamp of the change and contextual metadata that downstream consumers rely on to reconcile their projections and trigger follow-up workflows. This message represents a complete domain event that is published whenever the underlying aggregate changes its state. It contains the entity identifier, the previous and current values, the timestamp of the change and contextual metadata that downstream consumers rely on to reconcile their projections and trigger follow-up workflows. This message represents a complete domain event that is published whenever the underlying aggregate changes its state. It contains the entity identifier, the previous and current values, the timestamp of the change and contextual metadata that downstream consumers rely on to reconcile their projections and trigger follow-up workflows. This message represents a complete domain event that is published whenever the underlying aggregate changes its state. It contains the entity identifier, the previous and current values, the timestamp of the change and contextual metadata that downstream consumers rely on to reconcile their projections and trigger follow-up workflows. This message represents a complete domain event that is published whenever the underlying aggregate changes its state. It contains the entity identifier, the previous and current values, the timestamp of the change and contextual metadata that downstream consumers rely on to reconcile their projections and trigger follow-up workflows. This message represents a complete domain event that is published whenever the underlying aggregate changes its state. It contains the entity identifier, the previous and current values, the timestamp of the change and contextual metadata that downstream consumers rely on to reconcile their projections and trigger follow-up workflows. This message represents a complete domain event that is published whenever the underlying aggregate changes its state. It contains the entity identifier, the previous and current values, the timestamp of the change and contextual metadata that downstream consumers rely on to reconcile their projections and trigger follow-up workflows. This message represents a complete domain event that is published whenever the underlying aggregate changes its state. It contains the entity identifier, the previous and current values, the timestamp of the change and contextual metadata that downstream consumers rely on to reconcile their projections and trigger follow-up workflows. This message represents a complete domain event that is published whenever the underlying aggregate changes its state. It contains the entity identifier, the previous and current values, the timestamp of the change and contextual metadata that downstream consumers rely on to reconcile their projections and trigger follow-up workflows. This message represents a complete domain event that is published whenever the underlying aggregate changes its state. It contains the entity identifier, the previous and current values, the timestamp of the change and contextual metadata that downstream consumers rely on to reconcile their projections and trigger follow-up workflows. This message represents a complete domain event that is published whenever the underlying aggregate changes its state. It contains the entity identifier, the previous and current values, the timestamp of the change and contextual metadata that downstream consumers rely on to reconcile their projections and trigger follow-up workflows. This message represents a complete domain event that is published whenever the underlying aggregate changes its state. It contains the entity identifier, the previous and current values, the timestamp of the change and contextual metadata that downstream consumers rely on to reconcile their projections and trigger follow-up workflows. This message represents a complete domain event that is published whenever the underlying aggregate changes its state. It contains the entity identifier, the previous and current values, the timestamp of the change and contextual metadata that downstream consumers rely on to reconcile their projections and trigger follow-up workflows. This message represents a complete domain event that is published whenever the underlying aggregate changes its state. It contains the entity identifier, the previous and current values, the timestamp of the change and contextual metadata that downstream consumers rely on to reconcile their projections and trigger follow-up workflows. This message represents a complete domain event that is published whenever the underlying aggregate changes its state. It contains the entity identifier, the previous and current values, the timestamp of the change and contextual metadata that downstream consumers rely on to reconcile their projections and trigger follow-up workflows.
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
      description: This message represents a complete domain event that is published whenever the underlying aggregate changes its state. It contains the entity identifier, the previous and current values, the timestamp of the change and contextual metadata that downstream consumers rely on to reconcile their projections and trigger follow-up workflows. This message represents a complete domain event that is published whenever the underlying aggregate changes its state. It contains the entity identifier, the previous and current values, the timestamp of the change and contextual metadata that downstream consumers rely on to reconcile their projections and trigger follow-up workflows. This message represents a complete domain event that is published whenever the underlying aggregate changes its state. It contains the entity identifier, the previous and current values, the timestamp of the change and contextual metadata that downstream consumers rely on to reconcile their projections and trigger follow-up workflows. This message represents a complete domain event that is published whenever the underlying aggregate changes its state. It contains the entity identifier, the previous and current values, the timestamp of the change and contextual metadata that downstream consumers rely on to reconcile their projections and trigger follow-up workflows. This message represents a complete domain event that is published whenever the underlying aggregate changes its state. It contains the entity identifier, the previous and current values, the timestamp of the change and contextual metadata that downstream consumers rely on to reconcile their projections and trigger follow-up workflows. This message represents a complete domain event that is published whenever the underlying aggregate changes its state. It contains the entity identifier, the previous and current values, the timestamp of the change and contextual metadata that downstream consumers rely on to reconcile their projections and trigger follow-up workflows. This message represents a complete domain event that is published whenever the underlying aggregate changes its state. It contains the entity identifier, the previous and current values, the timestamp of the change and contextual metadata that downstream consumers rely on to reconcile their projections and trigger follow-up workflows. This message represents a complete domain event that is published whenever the underlying aggregate changes its state. It contains the entity identifier, the previous and current values, the timestamp of the change and contextual metadata that downstream consumers rely on to reconcile their projections and trigger follow-up workflows. This message represents a complete domain event that is published whenever the underlying aggregate changes its state. It contains the entity identifier, the previous and current values, the timestamp of the change and contextual metadata that downstream consumers rely on to reconcile their projections and trigger follow-up workflows. This message represents a complete domain event that is published whenever the underlying aggregate changes its state. It contains the entity identifier, the previous and current values, the timestamp of the change and contextual metadata that downstream consumers rely on to reconcile their projections and trigger follow-up workflows. This message represents a complete domain event that is published whenever the underlying aggregate changes its state. It contains the entity identifier, the previous and current values, the timestamp of the change and contextual metadata that downstream consumers rely on to reconcile their projections and trigger follow-up workflows. This message represents a complete domain event that is published whenever the underlying aggregate changes its state. It contains the entity identifier, the previous and current values, the timestamp of the change and contextual metadata that downstream consumers rely on to reconcile their projections and trigger follow-up workflows. This message represents a complete domain event that is published whenever the underlying aggregate changes its state. It contains the entity identifier, the previous and current values, the timestamp of the change and contextual metadata that downstream consumers rely on to reconcile their projections and trigger follow-up workflows. This message represents a complete domain event that is published whenever the underlying aggregate changes its state. It contains the entity identifier, the previous and current values, the timestamp of the change and contextual metadata that downstream consumers rely on to reconcile their projections and trigger follow-up workflows. This message represents a complete domain event that is published whenever the underlying aggregate changes its state. It contains the entity identifier, the previous and current values, the timestamp of the change and contextual metadata that downstream consumers rely on to reconcile their projections and trigger follow-up workflows. This message represents a complete domain event that is published whenever the underlying aggregate changes its state. It contains the entity identifier, the previous and current values, the timestamp of the change and contextual metadata that downstream consumers rely on to reconcile their projections and trigger follow-up workflows.
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
      description: message description
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
      description: This message now represents an enriched domain event published whenever the underlying aggregate changes its state. Besides the entity identifier, the previous and current values and the change timestamp, it also carries correlation data, the schema version and routing hints so that downstream consumers can reconcile projections, deduplicate retries and trigger follow-up workflows reliably. This message now represents an enriched domain event published whenever the underlying aggregate changes its state. Besides the entity identifier, the previous and current values and the change timestamp, it also carries correlation data, the schema version and routing hints so that downstream consumers can reconcile projections, deduplicate retries and trigger follow-up workflows reliably. This message now represents an enriched domain event published whenever the underlying aggregate changes its state. Besides the entity identifier, the previous and current values and the change timestamp, it also carries correlation data, the schema version and routing hints so that downstream consumers can reconcile projections, deduplicate retries and trigger follow-up workflows reliably. This message now represents an enriched domain event published whenever the underlying aggregate changes its state. Besides the entity identifier, the previous and current values and the change timestamp, it also carries correlation data, the schema version and routing hints so that downstream consumers can reconcile projections, deduplicate retries and trigger follow-up workflows reliably. This message now represents an enriched domain event published whenever the underlying aggregate changes its state. Besides the entity identifier, the previous and current values and the change timestamp, it also carries correlation data, the schema version and routing hints so that downstream consumers can reconcile projections, deduplicate retries and trigger follow-up workflows reliably. This message now represents an enriched domain event published whenever the underlying aggregate changes its state. Besides the entity identifier, the previous and current values and the change timestamp, it also carries correlation data, the schema version and routing hints so that downstream consumers can reconcile projections, deduplicate retries and trigger follow-up workflows reliably. This message now represents an enriched domain event published whenever the underlying aggregate changes its state. Besides the entity identifier, the previous and current values and the change timestamp, it also carries correlation data, the schema version and routing hints so that downstream consumers can reconcile projections, deduplicate retries and trigger follow-up workflows reliably. This message now represents an enriched domain event published whenever the underlying aggregate changes its state. Besides the entity identifier, the previous and current values and the change timestamp, it also carries correlation data, the schema version and routing hints so that downstream consumers can reconcile projections, deduplicate retries and trigger follow-up workflows reliably. This message now represents an enriched domain event published whenever the underlying aggregate changes its state. Besides the entity identifier, the previous and current values and the change timestamp, it also carries correlation data, the schema version and routing hints so that downstream consumers can reconcile projections, deduplicate retries and trigger follow-up workflows reliably. This message now represents an enriched domain event published whenever the underlying aggregate changes its state. Besides the entity identifier, the previous and current values and the change timestamp, it also carries correlation data, the schema version and routing hints so that downstream consumers can reconcile projections, deduplicate retries and trigger follow-up workflows reliably. This message now represents an enriched domain event published whenever the underlying aggregate changes its state. Besides the entity identifier, the previous and current values and the change timestamp, it also carries correlation data, the schema version and routing hints so that downstream consumers can reconcile projections, deduplicate retries and trigger follow-up workflows reliably. This message now represents an enriched domain event published whenever the underlying aggregate changes its state. Besides the entity identifier, the previous and current values and the change timestamp, it also carries correlation data, the schema version and routing hints so that downstream consumers can reconcile projections, deduplicate retries and trigger follow-up workflows reliably. This message now represents an enriched domain event published whenever the underlying aggregate changes its state. Besides the entity identifier, the previous and current values and the change timestamp, it also carries correlation data, the schema version and routing hints so that downstream consumers can reconcile projections, deduplicate retries and trigger follow-up workflows reliably. This message now represents an enriched domain event published whenever the underlying aggregate changes its state. Besides the entity identifier, the previous and current values and the change timestamp, it also carries correlation data, the schema version and routing hints so that downstream consumers can reconcile projections, deduplicate retries and trigger follow-up workflows reliably. This message now represents an enriched domain event published whenever the underlying aggregate changes its state. Besides the entity identifier, the previous and current values and the change timestamp, it also carries correlation data, the schema version and routing hints so that downstream consumers can reconcile projections, deduplicate retries and trigger follow-up workflows reliably. This message now represents an enriched domain event published whenever the underlying aggregate changes its state. Besides the entity identifier, the previous and current values and the change timestamp, it also carries correlation data, the schema version and routing hints so that downstream consumers can reconcile projections, deduplicate retries and trigger follow-up workflows reliably.
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
      description: This message represents a complete domain event that is published whenever the underlying aggregate changes its state. It contains the entity identifier, the previous and current values, the timestamp of the change and contextual metadata that downstream consumers rely on to reconcile their projections and trigger follow-up workflows. This message represents a complete domain event that is published whenever the underlying aggregate changes its state. It contains the entity identifier, the previous and current values, the timestamp of the change and contextual metadata that downstream consumers rely on to reconcile their projections and trigger follow-up workflows. This message represents a complete domain event that is published whenever the underlying aggregate changes its state. It contains the entity identifier, the previous and current values, the timestamp of the change and contextual metadata that downstream consumers rely on to reconcile their projections and trigger follow-up workflows. This message represents a complete domain event that is published whenever the underlying aggregate changes its state. It contains the entity identifier, the previous and current values, the timestamp of the change and contextual metadata that downstream consumers rely on to reconcile their projections and trigger follow-up workflows. This message represents a complete domain event that is published whenever the underlying aggregate changes its state. It contains the entity identifier, the previous and current values, the timestamp of the change and contextual metadata that downstream consumers rely on to reconcile their projections and trigger follow-up workflows. This message represents a complete domain event that is published whenever the underlying aggregate changes its state. It contains the entity identifier, the previous and current values, the timestamp of the change and contextual metadata that downstream consumers rely on to reconcile their projections and trigger follow-up workflows. This message represents a complete domain event that is published whenever the underlying aggregate changes its state. It contains the entity identifier, the previous and current values, the timestamp of the change and contextual metadata that downstream consumers rely on to reconcile their projections and trigger follow-up workflows. This message represents a complete domain event that is published whenever the underlying aggregate changes its state. It contains the entity identifier, the previous and current values, the timestamp of the change and contextual metadata that downstream consumers rely on to reconcile their projections and trigger follow-up workflows. This message represents a complete domain event that is published whenever the underlying aggregate changes its state. It contains the entity identifier, the previous and current values, the timestamp of the change and contextual metadata that downstream consumers rely on to reconcile their projections and trigger follow-up workflows. This message represents a complete domain event that is published whenever the underlying aggregate changes its state. It contains the entity identifier, the previous and current values, the timestamp of the change and contextual metadata that downstream consumers rely on to reconcile their projections and trigger follow-up workflows. This message represents a complete domain event that is published whenever the underlying aggregate changes its state. It contains the entity identifier, the previous and current values, the timestamp of the change and contextual metadata that downstream consumers rely on to reconcile their projections and trigger follow-up workflows. This message represents a complete domain event that is published whenever the underlying aggregate changes its state. It contains the entity identifier, the previous and current values, the timestamp of the change and contextual metadata that downstream consumers rely on to reconcile their projections and trigger follow-up workflows. This message represents a complete domain event that is published whenever the underlying aggregate changes its state. It contains the entity identifier, the previous and current values, the timestamp of the change and contextual metadata that downstream consumers rely on to reconcile their projections and trigger follow-up workflows. This message represents a complete domain event that is published whenever the underlying aggregate changes its state. It contains the entity identifier, the previous and current values, the timestamp of the change and contextual metadata that downstream consumers rely on to reconcile their projections and trigger follow-up workflows. This message represents a complete domain event that is published whenever the underlying aggregate changes its state. It contains the entity identifier, the previous and current values, the timestamp of the change and contextual metadata that downstream consumers rely on to reconcile their projections and trigger follow-up workflows. This message represents a complete domain event that is published whenever the underlying aggregate changes its state. It contains the entity identifier, the previous and current values, the timestamp of the change and contextual metadata that downstream consumers rely on to reconcile their projections and trigger follow-up workflows.
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
        type: object
        properties:
          id:
            type: string
        required:
          - id
      summary: CHANGED message summary
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
      summary: message summary
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
          key:
            type: string
          schemaIdLocation: header
        amqp:
          bindingVersion: 0.3.0
          contentEncoding: gzip
          messageType: user.signup
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
        amqp:
          bindingVersion: 0.3.0
          contentEncoding: gzip
          messageType: user.signup
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
          key:
            type: string
          schemaIdLocation: header
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
          bindingVersion: 2.0.0
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
        kafka: {}
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
          arbitraryJso:
            unchanged: keep
            changed: test string
            added: new
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
      x-first: first
      x-second: second
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
      x-first: first
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
      x-first: first
      x-second: after
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
      x-first: first
      x-second: second
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
components:
  messages:
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
      headers:
        type: object
        description: after description
        properties:
          traceId:
            type: string
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
        description: payload object
        properties:
          id:
            type: string
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
        description: after description
        properties:
          id:
            type: string
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
      headers:
        type: object
        description: headers object
        properties:
          traceId:
            type: string
        x-first: first
        x-second: second
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
        description: headers object
        properties:
          traceId:
            type: string
        x-first: first-new
        x-third: third
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
      headers:
        type: object
        description: headers object
        properties:
          traceId:
            type: string
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
`,Za=Object.assign({"../../../../samples/async-api-diffs/message/1.1-message-title-changed/before.yaml":tt,"../../../../samples/async-api-diffs/message/1.2-message-title-removed/before.yaml":at,"../../../../samples/async-api-diffs/message/1.3-message-title-added/before.yaml":rt,"../../../../samples/async-api-diffs/message/2.1-message-description-changed/before.yaml":it,"../../../../samples/async-api-diffs/message/2.10-message-long-summary-changed/before.yaml":ot,"../../../../samples/async-api-diffs/message/2.11-message-long-summary-removed/before.yaml":ct,"../../../../samples/async-api-diffs/message/2.12-message-long-summary-added/before.yaml":dt,"../../../../samples/async-api-diffs/message/2.13-message-description-moved-to-summary/before.yaml":mt,"../../../../samples/async-api-diffs/message/2.14-message-long-description-moved-to-summary/before.yaml":gt,"../../../../samples/async-api-diffs/message/2.15-message-long-description-moved-to-long-summary/before.yaml":ht,"../../../../samples/async-api-diffs/message/2.16-message-description-moved-to-long-summary/before.yaml":pt,"../../../../samples/async-api-diffs/message/2.17-message-summary-moved-to-description/before.yaml":lt,"../../../../samples/async-api-diffs/message/2.18-message-long-summary-moved-to-description/before.yaml":ut,"../../../../samples/async-api-diffs/message/2.19-message-long-summary-moved-to-long-description/before.yaml":yt,"../../../../samples/async-api-diffs/message/2.2-message-description-removed/before.yaml":vt,"../../../../samples/async-api-diffs/message/2.20-message-summary-moved-to-long-description/before.yaml":ft,"../../../../samples/async-api-diffs/message/2.3-message-description-added/before.yaml":_t,"../../../../samples/async-api-diffs/message/2.4-message-long-description-changed/before.yaml":bt,"../../../../samples/async-api-diffs/message/2.5-message-long-description-removed/before.yaml":wt,"../../../../samples/async-api-diffs/message/2.6-message-long-description-added/before.yaml":Tt,"../../../../samples/async-api-diffs/message/2.7-message-summary-changed/before.yaml":Mt,"../../../../samples/async-api-diffs/message/2.8-message-summary-removed/before.yaml":xt,"../../../../samples/async-api-diffs/message/2.9-message-summary-added/before.yaml":jt,"../../../../samples/async-api-diffs/message/3.1-message-bindings-add-one-more-binding/before.yaml":Ct,"../../../../samples/async-api-diffs/message/3.2-message-bindings-remove-one-of-several-bindings/before.yaml":At,"../../../../samples/async-api-diffs/message/3.3-message-bindings-add-bindings/before.yaml":kt,"../../../../samples/async-api-diffs/message/3.4-message-bindings-remove-bindings/before.yaml":$t,"../../../../samples/async-api-diffs/message/4.1-message-bindings-kafka-bindingVersion-changed/before.yaml":It,"../../../../samples/async-api-diffs/message/4.2-message-bindings-kafka-bindingVersion-removed/before.yaml":St,"../../../../samples/async-api-diffs/message/4.3-message-bindings-kafka-bindingVersion-added/before.yaml":qt,"../../../../samples/async-api-diffs/message/5.1-message-bindings-kafka-internal-jso-changes/before.yaml":Ot,"../../../../samples/async-api-diffs/message/6.1-message-x-second-added/before.yaml":Pt,"../../../../samples/async-api-diffs/message/6.2-message-x-second-removed/before.yaml":Vt,"../../../../samples/async-api-diffs/message/6.3-message-x-second-changed/before.yaml":Bt,"../../../../samples/async-api-diffs/message/6.4-message-x-first-and-x-second-added/before.yaml":Et,"../../../../samples/async-api-diffs/message/6.5-message-x-first-and-x-second-removed/before.yaml":Dt,"../../../../samples/async-api-diffs/message/7.1-message-headers-object-schema-added/before.yaml":Lt,"../../../../samples/async-api-diffs/message/7.2-message-headers-object-schema-removed/before.yaml":Gt,"../../../../samples/async-api-diffs/message/7.3-message-headers-description-changed/before.yaml":Kt,"../../../../samples/async-api-diffs/message/7.4-message-payload-object-schema-added/before.yaml":Nt,"../../../../samples/async-api-diffs/message/7.5-message-payload-object-schema-removed/before.yaml":Yt,"../../../../samples/async-api-diffs/message/7.6-message-payload-description-changed/before.yaml":zt,"../../../../samples/async-api-diffs/message/8.1-message-headers-object-schema-added-extensions/before.yaml":Ft,"../../../../samples/async-api-diffs/message/8.10-message-payload-object-schema-removed-property-with-extensions/before.yaml":Ht,"../../../../samples/async-api-diffs/message/8.2-message-headers-object-schema-removed-extensions/before.yaml":Jt,"../../../../samples/async-api-diffs/message/8.3-message-headers-object-schema-changed-extensions/before.yaml":Rt,"../../../../samples/async-api-diffs/message/8.4-message-headers-object-schema-added-property-with-extensions/before.yaml":Qt,"../../../../samples/async-api-diffs/message/8.5-message-headers-object-schema-removed-property-with-extensions/before.yaml":Ut,"../../../../samples/async-api-diffs/message/8.6-message-payload-object-schema-added-extensions/before.yaml":Wt,"../../../../samples/async-api-diffs/message/8.7-message-payload-object-schema-removed-extensions/before.yaml":Xt,"../../../../samples/async-api-diffs/message/8.8-message-payload-object-schema-changed-extensions/before.yaml":Zt,"../../../../samples/async-api-diffs/message/8.9-message-payload-object-schema-added-property-with-extensions/before.yaml":ea}),er=Object.assign({"../../../../samples/async-api-diffs/message/1.1-message-title-changed/after.yaml":sa,"../../../../samples/async-api-diffs/message/1.2-message-title-removed/after.yaml":na,"../../../../samples/async-api-diffs/message/1.3-message-title-added/after.yaml":ta,"../../../../samples/async-api-diffs/message/2.1-message-description-changed/after.yaml":aa,"../../../../samples/async-api-diffs/message/2.10-message-long-summary-changed/after.yaml":ra,"../../../../samples/async-api-diffs/message/2.11-message-long-summary-removed/after.yaml":ia,"../../../../samples/async-api-diffs/message/2.12-message-long-summary-added/after.yaml":oa,"../../../../samples/async-api-diffs/message/2.13-message-description-moved-to-summary/after.yaml":ca,"../../../../samples/async-api-diffs/message/2.14-message-long-description-moved-to-summary/after.yaml":da,"../../../../samples/async-api-diffs/message/2.15-message-long-description-moved-to-long-summary/after.yaml":ma,"../../../../samples/async-api-diffs/message/2.16-message-description-moved-to-long-summary/after.yaml":ga,"../../../../samples/async-api-diffs/message/2.17-message-summary-moved-to-description/after.yaml":ha,"../../../../samples/async-api-diffs/message/2.18-message-long-summary-moved-to-description/after.yaml":pa,"../../../../samples/async-api-diffs/message/2.19-message-long-summary-moved-to-long-description/after.yaml":la,"../../../../samples/async-api-diffs/message/2.2-message-description-removed/after.yaml":ua,"../../../../samples/async-api-diffs/message/2.20-message-summary-moved-to-long-description/after.yaml":ya,"../../../../samples/async-api-diffs/message/2.3-message-description-added/after.yaml":va,"../../../../samples/async-api-diffs/message/2.4-message-long-description-changed/after.yaml":fa,"../../../../samples/async-api-diffs/message/2.5-message-long-description-removed/after.yaml":_a,"../../../../samples/async-api-diffs/message/2.6-message-long-description-added/after.yaml":ba,"../../../../samples/async-api-diffs/message/2.7-message-summary-changed/after.yaml":wa,"../../../../samples/async-api-diffs/message/2.8-message-summary-removed/after.yaml":Ta,"../../../../samples/async-api-diffs/message/2.9-message-summary-added/after.yaml":Ma,"../../../../samples/async-api-diffs/message/3.1-message-bindings-add-one-more-binding/after.yaml":xa,"../../../../samples/async-api-diffs/message/3.2-message-bindings-remove-one-of-several-bindings/after.yaml":ja,"../../../../samples/async-api-diffs/message/3.3-message-bindings-add-bindings/after.yaml":Ca,"../../../../samples/async-api-diffs/message/3.4-message-bindings-remove-bindings/after.yaml":Aa,"../../../../samples/async-api-diffs/message/4.1-message-bindings-kafka-bindingVersion-changed/after.yaml":ka,"../../../../samples/async-api-diffs/message/4.2-message-bindings-kafka-bindingVersion-removed/after.yaml":$a,"../../../../samples/async-api-diffs/message/4.3-message-bindings-kafka-bindingVersion-added/after.yaml":Ia,"../../../../samples/async-api-diffs/message/5.1-message-bindings-kafka-internal-jso-changes/after.yaml":Sa,"../../../../samples/async-api-diffs/message/6.1-message-x-second-added/after.yaml":qa,"../../../../samples/async-api-diffs/message/6.2-message-x-second-removed/after.yaml":Oa,"../../../../samples/async-api-diffs/message/6.3-message-x-second-changed/after.yaml":Pa,"../../../../samples/async-api-diffs/message/6.4-message-x-first-and-x-second-added/after.yaml":Va,"../../../../samples/async-api-diffs/message/6.5-message-x-first-and-x-second-removed/after.yaml":Ba,"../../../../samples/async-api-diffs/message/7.1-message-headers-object-schema-added/after.yaml":Ea,"../../../../samples/async-api-diffs/message/7.2-message-headers-object-schema-removed/after.yaml":Da,"../../../../samples/async-api-diffs/message/7.3-message-headers-description-changed/after.yaml":La,"../../../../samples/async-api-diffs/message/7.4-message-payload-object-schema-added/after.yaml":Ga,"../../../../samples/async-api-diffs/message/7.5-message-payload-object-schema-removed/after.yaml":Ka,"../../../../samples/async-api-diffs/message/7.6-message-payload-description-changed/after.yaml":Na,"../../../../samples/async-api-diffs/message/8.1-message-headers-object-schema-added-extensions/after.yaml":Ya,"../../../../samples/async-api-diffs/message/8.10-message-payload-object-schema-removed-property-with-extensions/after.yaml":za,"../../../../samples/async-api-diffs/message/8.2-message-headers-object-schema-removed-extensions/after.yaml":Fa,"../../../../samples/async-api-diffs/message/8.3-message-headers-object-schema-changed-extensions/after.yaml":Ha,"../../../../samples/async-api-diffs/message/8.4-message-headers-object-schema-added-property-with-extensions/after.yaml":Ja,"../../../../samples/async-api-diffs/message/8.5-message-headers-object-schema-removed-property-with-extensions/after.yaml":Ra,"../../../../samples/async-api-diffs/message/8.6-message-payload-object-schema-added-extensions/after.yaml":Qa,"../../../../samples/async-api-diffs/message/8.7-message-payload-object-schema-removed-extensions/after.yaml":Ua,"../../../../samples/async-api-diffs/message/8.8-message-payload-object-schema-changed-extensions/after.yaml":Wa,"../../../../samples/async-api-diffs/message/8.9-message-payload-object-schema-added-property-with-extensions/after.yaml":Xa}),sr=Zn(Za,er),nr=et(sr),Wn=({caseId:s})=>{const n=nr[s];return n?se.jsx(Xn,{...rr(n.beforeYaml,n.afterYaml)}):se.jsxs("div",{children:["Sample case not found: ",s]})},br={title:"Async API Diffs Suite/Message Samples",component:Wn},tr="sendOperation",ar="TestMessage",rr=(s,n)=>st(s,n,{operationKey:tr,messageKey:ar}),ir=nt(Wn),e=s=>ir(s),t=e("1.1-message-title-changed"),a=e("1.2-message-title-removed"),r=e("1.3-message-title-added"),i=e("2.1-message-description-changed"),o=e("2.2-message-description-removed"),c=e("2.3-message-description-added"),d=e("2.4-message-long-description-changed"),m=e("2.5-message-long-description-removed"),g=e("2.6-message-long-description-added"),h=e("2.7-message-summary-changed"),p=e("2.8-message-summary-removed"),l=e("2.9-message-summary-added"),u=e("2.10-message-long-summary-changed"),y=e("2.11-message-long-summary-removed"),v=e("2.12-message-long-summary-added"),f=e("2.13-message-description-moved-to-summary"),_=e("2.14-message-long-description-moved-to-summary"),b=e("2.15-message-long-description-moved-to-long-summary"),w=e("2.16-message-description-moved-to-long-summary"),T=e("2.17-message-summary-moved-to-description"),M=e("2.18-message-long-summary-moved-to-description"),x=e("2.19-message-long-summary-moved-to-long-description"),j=e("2.20-message-summary-moved-to-long-description"),C=e("3.1-message-bindings-add-one-more-binding"),A=e("3.2-message-bindings-remove-one-of-several-bindings"),k=e("3.3-message-bindings-add-bindings"),$=e("3.4-message-bindings-remove-bindings"),I=e("4.1-message-bindings-kafka-bindingVersion-changed"),S=e("4.2-message-bindings-kafka-bindingVersion-removed"),q=e("4.3-message-bindings-kafka-bindingVersion-added"),O=e("5.1-message-bindings-kafka-internal-jso-changes"),P=e("6.1-message-x-second-added"),V=e("6.2-message-x-second-removed"),B=e("6.3-message-x-second-changed"),E=e("6.4-message-x-first-and-x-second-added"),D=e("6.5-message-x-first-and-x-second-removed"),L=e("7.1-message-headers-object-schema-added"),G=e("7.2-message-headers-object-schema-removed"),K=e("7.3-message-headers-description-changed"),N=e("7.4-message-payload-object-schema-added"),Y=e("7.5-message-payload-object-schema-removed"),z=e("7.6-message-payload-description-changed"),F=e("8.1-message-headers-object-schema-added-extensions"),H=e("8.2-message-headers-object-schema-removed-extensions"),J=e("8.3-message-headers-object-schema-changed-extensions"),R=e("8.4-message-headers-object-schema-added-property-with-extensions"),Q=e("8.5-message-headers-object-schema-removed-property-with-extensions"),U=e("8.6-message-payload-object-schema-added-extensions"),W=e("8.7-message-payload-object-schema-removed-extensions"),X=e("8.8-message-payload-object-schema-changed-extensions"),Z=e("8.9-message-payload-object-schema-added-property-with-extensions"),ee=e("8.10-message-payload-object-schema-removed-property-with-extensions");var ne,te,ae;t.parameters={...t.parameters,docs:{...(ne=t.parameters)==null?void 0:ne.docs,source:{originalSource:'createCaseStory("1.1-message-title-changed")',...(ae=(te=t.parameters)==null?void 0:te.docs)==null?void 0:ae.source}}};var re,ie,oe;a.parameters={...a.parameters,docs:{...(re=a.parameters)==null?void 0:re.docs,source:{originalSource:'createCaseStory("1.2-message-title-removed")',...(oe=(ie=a.parameters)==null?void 0:ie.docs)==null?void 0:oe.source}}};var ce,de,me;r.parameters={...r.parameters,docs:{...(ce=r.parameters)==null?void 0:ce.docs,source:{originalSource:'createCaseStory("1.3-message-title-added")',...(me=(de=r.parameters)==null?void 0:de.docs)==null?void 0:me.source}}};var ge,he,pe;i.parameters={...i.parameters,docs:{...(ge=i.parameters)==null?void 0:ge.docs,source:{originalSource:'createCaseStory("2.1-message-description-changed")',...(pe=(he=i.parameters)==null?void 0:he.docs)==null?void 0:pe.source}}};var le,ue,ye;o.parameters={...o.parameters,docs:{...(le=o.parameters)==null?void 0:le.docs,source:{originalSource:'createCaseStory("2.2-message-description-removed")',...(ye=(ue=o.parameters)==null?void 0:ue.docs)==null?void 0:ye.source}}};var ve,fe,_e;c.parameters={...c.parameters,docs:{...(ve=c.parameters)==null?void 0:ve.docs,source:{originalSource:'createCaseStory("2.3-message-description-added")',...(_e=(fe=c.parameters)==null?void 0:fe.docs)==null?void 0:_e.source}}};var be,we,Te;d.parameters={...d.parameters,docs:{...(be=d.parameters)==null?void 0:be.docs,source:{originalSource:'createCaseStory("2.4-message-long-description-changed")',...(Te=(we=d.parameters)==null?void 0:we.docs)==null?void 0:Te.source}}};var Me,xe,je;m.parameters={...m.parameters,docs:{...(Me=m.parameters)==null?void 0:Me.docs,source:{originalSource:'createCaseStory("2.5-message-long-description-removed")',...(je=(xe=m.parameters)==null?void 0:xe.docs)==null?void 0:je.source}}};var Ce,Ae,ke;g.parameters={...g.parameters,docs:{...(Ce=g.parameters)==null?void 0:Ce.docs,source:{originalSource:'createCaseStory("2.6-message-long-description-added")',...(ke=(Ae=g.parameters)==null?void 0:Ae.docs)==null?void 0:ke.source}}};var $e,Ie,Se;h.parameters={...h.parameters,docs:{...($e=h.parameters)==null?void 0:$e.docs,source:{originalSource:'createCaseStory("2.7-message-summary-changed")',...(Se=(Ie=h.parameters)==null?void 0:Ie.docs)==null?void 0:Se.source}}};var qe,Oe,Pe;p.parameters={...p.parameters,docs:{...(qe=p.parameters)==null?void 0:qe.docs,source:{originalSource:'createCaseStory("2.8-message-summary-removed")',...(Pe=(Oe=p.parameters)==null?void 0:Oe.docs)==null?void 0:Pe.source}}};var Ve,Be,Ee;l.parameters={...l.parameters,docs:{...(Ve=l.parameters)==null?void 0:Ve.docs,source:{originalSource:'createCaseStory("2.9-message-summary-added")',...(Ee=(Be=l.parameters)==null?void 0:Be.docs)==null?void 0:Ee.source}}};var De,Le,Ge;u.parameters={...u.parameters,docs:{...(De=u.parameters)==null?void 0:De.docs,source:{originalSource:'createCaseStory("2.10-message-long-summary-changed")',...(Ge=(Le=u.parameters)==null?void 0:Le.docs)==null?void 0:Ge.source}}};var Ke,Ne,Ye;y.parameters={...y.parameters,docs:{...(Ke=y.parameters)==null?void 0:Ke.docs,source:{originalSource:'createCaseStory("2.11-message-long-summary-removed")',...(Ye=(Ne=y.parameters)==null?void 0:Ne.docs)==null?void 0:Ye.source}}};var ze,Fe,He;v.parameters={...v.parameters,docs:{...(ze=v.parameters)==null?void 0:ze.docs,source:{originalSource:'createCaseStory("2.12-message-long-summary-added")',...(He=(Fe=v.parameters)==null?void 0:Fe.docs)==null?void 0:He.source}}};var Je,Re,Qe;f.parameters={...f.parameters,docs:{...(Je=f.parameters)==null?void 0:Je.docs,source:{originalSource:'createCaseStory("2.13-message-description-moved-to-summary")',...(Qe=(Re=f.parameters)==null?void 0:Re.docs)==null?void 0:Qe.source}}};var Ue,We,Xe;_.parameters={..._.parameters,docs:{...(Ue=_.parameters)==null?void 0:Ue.docs,source:{originalSource:'createCaseStory("2.14-message-long-description-moved-to-summary")',...(Xe=(We=_.parameters)==null?void 0:We.docs)==null?void 0:Xe.source}}};var Ze,es,ss;b.parameters={...b.parameters,docs:{...(Ze=b.parameters)==null?void 0:Ze.docs,source:{originalSource:'createCaseStory("2.15-message-long-description-moved-to-long-summary")',...(ss=(es=b.parameters)==null?void 0:es.docs)==null?void 0:ss.source}}};var ns,ts,as;w.parameters={...w.parameters,docs:{...(ns=w.parameters)==null?void 0:ns.docs,source:{originalSource:'createCaseStory("2.16-message-description-moved-to-long-summary")',...(as=(ts=w.parameters)==null?void 0:ts.docs)==null?void 0:as.source}}};var rs,is,os;T.parameters={...T.parameters,docs:{...(rs=T.parameters)==null?void 0:rs.docs,source:{originalSource:'createCaseStory("2.17-message-summary-moved-to-description")',...(os=(is=T.parameters)==null?void 0:is.docs)==null?void 0:os.source}}};var cs,ds,ms;M.parameters={...M.parameters,docs:{...(cs=M.parameters)==null?void 0:cs.docs,source:{originalSource:'createCaseStory("2.18-message-long-summary-moved-to-description")',...(ms=(ds=M.parameters)==null?void 0:ds.docs)==null?void 0:ms.source}}};var gs,hs,ps;x.parameters={...x.parameters,docs:{...(gs=x.parameters)==null?void 0:gs.docs,source:{originalSource:'createCaseStory("2.19-message-long-summary-moved-to-long-description")',...(ps=(hs=x.parameters)==null?void 0:hs.docs)==null?void 0:ps.source}}};var ls,us,ys;j.parameters={...j.parameters,docs:{...(ls=j.parameters)==null?void 0:ls.docs,source:{originalSource:'createCaseStory("2.20-message-summary-moved-to-long-description")',...(ys=(us=j.parameters)==null?void 0:us.docs)==null?void 0:ys.source}}};var vs,fs,_s;C.parameters={...C.parameters,docs:{...(vs=C.parameters)==null?void 0:vs.docs,source:{originalSource:'createCaseStory("3.1-message-bindings-add-one-more-binding")',...(_s=(fs=C.parameters)==null?void 0:fs.docs)==null?void 0:_s.source}}};var bs,ws,Ts;A.parameters={...A.parameters,docs:{...(bs=A.parameters)==null?void 0:bs.docs,source:{originalSource:'createCaseStory("3.2-message-bindings-remove-one-of-several-bindings")',...(Ts=(ws=A.parameters)==null?void 0:ws.docs)==null?void 0:Ts.source}}};var Ms,xs,js;k.parameters={...k.parameters,docs:{...(Ms=k.parameters)==null?void 0:Ms.docs,source:{originalSource:'createCaseStory("3.3-message-bindings-add-bindings")',...(js=(xs=k.parameters)==null?void 0:xs.docs)==null?void 0:js.source}}};var Cs,As,ks;$.parameters={...$.parameters,docs:{...(Cs=$.parameters)==null?void 0:Cs.docs,source:{originalSource:'createCaseStory("3.4-message-bindings-remove-bindings")',...(ks=(As=$.parameters)==null?void 0:As.docs)==null?void 0:ks.source}}};var $s,Is,Ss;I.parameters={...I.parameters,docs:{...($s=I.parameters)==null?void 0:$s.docs,source:{originalSource:'createCaseStory("4.1-message-bindings-kafka-bindingVersion-changed")',...(Ss=(Is=I.parameters)==null?void 0:Is.docs)==null?void 0:Ss.source}}};var qs,Os,Ps;S.parameters={...S.parameters,docs:{...(qs=S.parameters)==null?void 0:qs.docs,source:{originalSource:'createCaseStory("4.2-message-bindings-kafka-bindingVersion-removed")',...(Ps=(Os=S.parameters)==null?void 0:Os.docs)==null?void 0:Ps.source}}};var Vs,Bs,Es;q.parameters={...q.parameters,docs:{...(Vs=q.parameters)==null?void 0:Vs.docs,source:{originalSource:'createCaseStory("4.3-message-bindings-kafka-bindingVersion-added")',...(Es=(Bs=q.parameters)==null?void 0:Bs.docs)==null?void 0:Es.source}}};var Ds,Ls,Gs;O.parameters={...O.parameters,docs:{...(Ds=O.parameters)==null?void 0:Ds.docs,source:{originalSource:'createCaseStory("5.1-message-bindings-kafka-internal-jso-changes")',...(Gs=(Ls=O.parameters)==null?void 0:Ls.docs)==null?void 0:Gs.source}}};var Ks,Ns,Ys;P.parameters={...P.parameters,docs:{...(Ks=P.parameters)==null?void 0:Ks.docs,source:{originalSource:'createCaseStory("6.1-message-x-second-added")',...(Ys=(Ns=P.parameters)==null?void 0:Ns.docs)==null?void 0:Ys.source}}};var zs,Fs,Hs;V.parameters={...V.parameters,docs:{...(zs=V.parameters)==null?void 0:zs.docs,source:{originalSource:'createCaseStory("6.2-message-x-second-removed")',...(Hs=(Fs=V.parameters)==null?void 0:Fs.docs)==null?void 0:Hs.source}}};var Js,Rs,Qs;B.parameters={...B.parameters,docs:{...(Js=B.parameters)==null?void 0:Js.docs,source:{originalSource:'createCaseStory("6.3-message-x-second-changed")',...(Qs=(Rs=B.parameters)==null?void 0:Rs.docs)==null?void 0:Qs.source}}};var Us,Ws,Xs;E.parameters={...E.parameters,docs:{...(Us=E.parameters)==null?void 0:Us.docs,source:{originalSource:'createCaseStory("6.4-message-x-first-and-x-second-added")',...(Xs=(Ws=E.parameters)==null?void 0:Ws.docs)==null?void 0:Xs.source}}};var Zs,en,sn;D.parameters={...D.parameters,docs:{...(Zs=D.parameters)==null?void 0:Zs.docs,source:{originalSource:'createCaseStory("6.5-message-x-first-and-x-second-removed")',...(sn=(en=D.parameters)==null?void 0:en.docs)==null?void 0:sn.source}}};var nn,tn,an;L.parameters={...L.parameters,docs:{...(nn=L.parameters)==null?void 0:nn.docs,source:{originalSource:'createCaseStory("7.1-message-headers-object-schema-added")',...(an=(tn=L.parameters)==null?void 0:tn.docs)==null?void 0:an.source}}};var rn,on,cn;G.parameters={...G.parameters,docs:{...(rn=G.parameters)==null?void 0:rn.docs,source:{originalSource:'createCaseStory("7.2-message-headers-object-schema-removed")',...(cn=(on=G.parameters)==null?void 0:on.docs)==null?void 0:cn.source}}};var dn,mn,gn;K.parameters={...K.parameters,docs:{...(dn=K.parameters)==null?void 0:dn.docs,source:{originalSource:'createCaseStory("7.3-message-headers-description-changed")',...(gn=(mn=K.parameters)==null?void 0:mn.docs)==null?void 0:gn.source}}};var hn,pn,ln;N.parameters={...N.parameters,docs:{...(hn=N.parameters)==null?void 0:hn.docs,source:{originalSource:'createCaseStory("7.4-message-payload-object-schema-added")',...(ln=(pn=N.parameters)==null?void 0:pn.docs)==null?void 0:ln.source}}};var un,yn,vn;Y.parameters={...Y.parameters,docs:{...(un=Y.parameters)==null?void 0:un.docs,source:{originalSource:'createCaseStory("7.5-message-payload-object-schema-removed")',...(vn=(yn=Y.parameters)==null?void 0:yn.docs)==null?void 0:vn.source}}};var fn,_n,bn;z.parameters={...z.parameters,docs:{...(fn=z.parameters)==null?void 0:fn.docs,source:{originalSource:'createCaseStory("7.6-message-payload-description-changed")',...(bn=(_n=z.parameters)==null?void 0:_n.docs)==null?void 0:bn.source}}};var wn,Tn,Mn;F.parameters={...F.parameters,docs:{...(wn=F.parameters)==null?void 0:wn.docs,source:{originalSource:'createCaseStory("8.1-message-headers-object-schema-added-extensions")',...(Mn=(Tn=F.parameters)==null?void 0:Tn.docs)==null?void 0:Mn.source}}};var xn,jn,Cn;H.parameters={...H.parameters,docs:{...(xn=H.parameters)==null?void 0:xn.docs,source:{originalSource:'createCaseStory("8.2-message-headers-object-schema-removed-extensions")',...(Cn=(jn=H.parameters)==null?void 0:jn.docs)==null?void 0:Cn.source}}};var An,kn,$n;J.parameters={...J.parameters,docs:{...(An=J.parameters)==null?void 0:An.docs,source:{originalSource:'createCaseStory("8.3-message-headers-object-schema-changed-extensions")',...($n=(kn=J.parameters)==null?void 0:kn.docs)==null?void 0:$n.source}}};var In,Sn,qn;R.parameters={...R.parameters,docs:{...(In=R.parameters)==null?void 0:In.docs,source:{originalSource:'createCaseStory("8.4-message-headers-object-schema-added-property-with-extensions")',...(qn=(Sn=R.parameters)==null?void 0:Sn.docs)==null?void 0:qn.source}}};var On,Pn,Vn;Q.parameters={...Q.parameters,docs:{...(On=Q.parameters)==null?void 0:On.docs,source:{originalSource:'createCaseStory("8.5-message-headers-object-schema-removed-property-with-extensions")',...(Vn=(Pn=Q.parameters)==null?void 0:Pn.docs)==null?void 0:Vn.source}}};var Bn,En,Dn;U.parameters={...U.parameters,docs:{...(Bn=U.parameters)==null?void 0:Bn.docs,source:{originalSource:'createCaseStory("8.6-message-payload-object-schema-added-extensions")',...(Dn=(En=U.parameters)==null?void 0:En.docs)==null?void 0:Dn.source}}};var Ln,Gn,Kn;W.parameters={...W.parameters,docs:{...(Ln=W.parameters)==null?void 0:Ln.docs,source:{originalSource:'createCaseStory("8.7-message-payload-object-schema-removed-extensions")',...(Kn=(Gn=W.parameters)==null?void 0:Gn.docs)==null?void 0:Kn.source}}};var Nn,Yn,zn;X.parameters={...X.parameters,docs:{...(Nn=X.parameters)==null?void 0:Nn.docs,source:{originalSource:'createCaseStory("8.8-message-payload-object-schema-changed-extensions")',...(zn=(Yn=X.parameters)==null?void 0:Yn.docs)==null?void 0:zn.source}}};var Fn,Hn,Jn;Z.parameters={...Z.parameters,docs:{...(Fn=Z.parameters)==null?void 0:Fn.docs,source:{originalSource:'createCaseStory("8.9-message-payload-object-schema-added-property-with-extensions")',...(Jn=(Hn=Z.parameters)==null?void 0:Hn.docs)==null?void 0:Jn.source}}};var Rn,Qn,Un;ee.parameters={...ee.parameters,docs:{...(Rn=ee.parameters)==null?void 0:Rn.docs,source:{originalSource:'createCaseStory("8.10-message-payload-object-schema-removed-property-with-extensions")',...(Un=(Qn=ee.parameters)==null?void 0:Qn.docs)==null?void 0:Un.source}}};const wr=["Case_1_1_message_title_changed","Case_1_2_message_title_removed","Case_1_3_message_title_added","Case_2_1_message_description_changed","Case_2_2_message_description_removed","Case_2_3_message_description_added","Case_2_4_message_long_description_changed","Case_2_5_message_long_description_removed","Case_2_6_message_long_description_added","Case_2_7_message_summary_changed","Case_2_8_message_summary_removed","Case_2_9_message_summary_added","Case_2_10_message_long_summary_changed","Case_2_11_message_long_summary_removed","Case_2_12_message_long_summary_added","Case_2_13_message_description_moved_to_summary","Case_2_14_message_long_description_moved_to_summary","Case_2_15_message_long_description_moved_to_long_summary","Case_2_16_message_description_moved_to_long_summary","Case_2_17_message_summary_moved_to_description","Case_2_18_message_long_summary_moved_to_description","Case_2_19_message_long_summary_moved_to_long_description","Case_2_20_message_summary_moved_to_long_description","Case_3_1_message_bindings_add_one_more_binding","Case_3_2_message_bindings_remove_one_of_several_bindings","Case_3_3_message_bindings_add_bindings","Case_3_4_message_bindings_remove_bindings","Case_4_1_message_bindings_kafka_bindingVersion_changed","Case_4_2_message_bindings_kafka_bindingVersion_removed","Case_4_3_message_bindings_kafka_bindingVersion_added","Case_5_1_message_bindings_kafka_internal_jso_changes","Case_6_1_message_x_second_added","Case_6_2_message_x_second_removed","Case_6_3_message_x_second_changed","Case_6_4_message_x_first_and_x_second_added","Case_6_5_message_x_first_and_x_second_removed","Case_7_1_message_headers_object_schema_added","Case_7_2_message_headers_object_schema_removed","Case_7_3_message_headers_description_changed","Case_7_4_message_payload_object_schema_added","Case_7_5_message_payload_object_schema_removed","Case_7_6_message_payload_description_changed","Case_8_1_message_headers_object_schema_added_extensions","Case_8_2_message_headers_object_schema_removed_extensions","Case_8_3_message_headers_object_schema_changed_extensions","Case_8_4_message_headers_object_schema_added_property_with_extensions","Case_8_5_message_headers_object_schema_removed_property_with_extensions","Case_8_6_message_payload_object_schema_added_extensions","Case_8_7_message_payload_object_schema_removed_extensions","Case_8_8_message_payload_object_schema_changed_extensions","Case_8_9_message_payload_object_schema_added_property_with_extensions","Case_8_10_message_payload_object_schema_removed_property_with_extensions"];export{t as Case_1_1_message_title_changed,a as Case_1_2_message_title_removed,r as Case_1_3_message_title_added,u as Case_2_10_message_long_summary_changed,y as Case_2_11_message_long_summary_removed,v as Case_2_12_message_long_summary_added,f as Case_2_13_message_description_moved_to_summary,_ as Case_2_14_message_long_description_moved_to_summary,b as Case_2_15_message_long_description_moved_to_long_summary,w as Case_2_16_message_description_moved_to_long_summary,T as Case_2_17_message_summary_moved_to_description,M as Case_2_18_message_long_summary_moved_to_description,x as Case_2_19_message_long_summary_moved_to_long_description,i as Case_2_1_message_description_changed,j as Case_2_20_message_summary_moved_to_long_description,o as Case_2_2_message_description_removed,c as Case_2_3_message_description_added,d as Case_2_4_message_long_description_changed,m as Case_2_5_message_long_description_removed,g as Case_2_6_message_long_description_added,h as Case_2_7_message_summary_changed,p as Case_2_8_message_summary_removed,l as Case_2_9_message_summary_added,C as Case_3_1_message_bindings_add_one_more_binding,A as Case_3_2_message_bindings_remove_one_of_several_bindings,k as Case_3_3_message_bindings_add_bindings,$ as Case_3_4_message_bindings_remove_bindings,I as Case_4_1_message_bindings_kafka_bindingVersion_changed,S as Case_4_2_message_bindings_kafka_bindingVersion_removed,q as Case_4_3_message_bindings_kafka_bindingVersion_added,O as Case_5_1_message_bindings_kafka_internal_jso_changes,P as Case_6_1_message_x_second_added,V as Case_6_2_message_x_second_removed,B as Case_6_3_message_x_second_changed,E as Case_6_4_message_x_first_and_x_second_added,D as Case_6_5_message_x_first_and_x_second_removed,L as Case_7_1_message_headers_object_schema_added,G as Case_7_2_message_headers_object_schema_removed,K as Case_7_3_message_headers_description_changed,N as Case_7_4_message_payload_object_schema_added,Y as Case_7_5_message_payload_object_schema_removed,z as Case_7_6_message_payload_description_changed,ee as Case_8_10_message_payload_object_schema_removed_property_with_extensions,F as Case_8_1_message_headers_object_schema_added_extensions,H as Case_8_2_message_headers_object_schema_removed_extensions,J as Case_8_3_message_headers_object_schema_changed_extensions,R as Case_8_4_message_headers_object_schema_added_property_with_extensions,Q as Case_8_5_message_headers_object_schema_removed_property_with_extensions,U as Case_8_6_message_payload_object_schema_added_extensions,W as Case_8_7_message_payload_object_schema_removed_extensions,X as Case_8_8_message_payload_object_schema_changed_extensions,Z as Case_8_9_message_payload_object_schema_added_property_with_extensions,wr as __namedExportsOrder,br as default};
