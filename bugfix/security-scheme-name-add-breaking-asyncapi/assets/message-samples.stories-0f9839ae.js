import{j as Wn}from"./_commonjs-dynamic-modules-6308e768.js";import{a as Xn}from"./AsyncApiOperationViewer-40f9536f.js";import{c as Zn}from"./parse-yaml-source-cd2e19a5.js";import{c as et,a as st,b as nt,d as tt}from"./async-api-diffs-utils-7c4af778.js";import"./index-f46741a2.js";import"./UxBadge-f1573550.js";import"./DdlTableViewer-7c24d5a9.js";import"./GraphQLOperationDiffViewer-2e9588f7.js";import"./GraphPropNodeViewer-c5476c9d.js";import"./index-415bee12.js";import"./GraphQLOperationViewer-fa244ce6.js";import"./public-api-d6a34651.js";import"./index-d5b0668c.js";import"./index-442a5f79.js";import"./preprocess-5b0b3b81.js";const at=`asyncapi: 3.0.0
info:
  title: Sample AsyncAPI
  version: 1.0.0
channels:
  testChannel:
    address: events.default
    messages:
      TestMessage:
        $ref: '#/components/messages/TestMessage'
operations:
  sendOperation:
    action: send
    channel:
      $ref: '#/channels/testChannel'
    messages:
      - $ref: '#/components/messages/TestMessage'
components:
  messages:
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
      title: message title
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
      description: message description
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
      summary: A concise but complete overview of the message purpose, summarising the event semantics, the producing service, the expected delivery guarantees and the recommended consumer handling strategy so that integrators can quickly decide whether subscribing to this message is relevant for their use case. A concise but complete overview of the message purpose, summarising the event semantics, the producing service, the expected delivery guarantees and the recommended consumer handling strategy so that integrators can quickly decide whether subscribing to this message is relevant for their use case. A concise but complete overview of the message purpose, summarising the event semantics, the producing service, the expected delivery guarantees and the recommended consumer handling strategy so that integrators can quickly decide whether subscribing to this message is relevant for their use case. A concise but complete overview of the message purpose, summarising the event semantics, the producing service, the expected delivery guarantees and the recommended consumer handling strategy so that integrators can quickly decide whether subscribing to this message is relevant for their use case. A concise but complete overview of the message purpose, summarising the event semantics, the producing service, the expected delivery guarantees and the recommended consumer handling strategy so that integrators can quickly decide whether subscribing to this message is relevant for their use case. A concise but complete overview of the message purpose, summarising the event semantics, the producing service, the expected delivery guarantees and the recommended consumer handling strategy so that integrators can quickly decide whether subscribing to this message is relevant for their use case. A concise but complete overview of the message purpose, summarising the event semantics, the producing service, the expected delivery guarantees and the recommended consumer handling strategy so that integrators can quickly decide whether subscribing to this message is relevant for their use case. A concise but complete overview of the message purpose, summarising the event semantics, the producing service, the expected delivery guarantees and the recommended consumer handling strategy so that integrators can quickly decide whether subscribing to this message is relevant for their use case. A concise but complete overview of the message purpose, summarising the event semantics, the producing service, the expected delivery guarantees and the recommended consumer handling strategy so that integrators can quickly decide whether subscribing to this message is relevant for their use case. A concise but complete overview of the message purpose, summarising the event semantics, the producing service, the expected delivery guarantees and the recommended consumer handling strategy so that integrators can quickly decide whether subscribing to this message is relevant for their use case. A concise but complete overview of the message purpose, summarising the event semantics, the producing service, the expected delivery guarantees and the recommended consumer handling strategy so that integrators can quickly decide whether subscribing to this message is relevant for their use case. A concise but complete overview of the message purpose, summarising the event semantics, the producing service, the expected delivery guarantees and the recommended consumer handling strategy so that integrators can quickly decide whether subscribing to this message is relevant for their use case. A concise but complete overview of the message purpose, summarising the event semantics, the producing service, the expected delivery guarantees and the recommended consumer handling strategy so that integrators can quickly decide whether subscribing to this message is relevant for their use case. A concise but complete overview of the message purpose, summarising the event semantics, the producing service, the expected delivery guarantees and the recommended consumer handling strategy so that integrators can quickly decide whether subscribing to this message is relevant for their use case. A concise but complete overview of the message purpose, summarising the event semantics, the producing service, the expected delivery guarantees and the recommended consumer handling strategy so that integrators can quickly decide whether subscribing to this message is relevant for their use case. A concise but complete overview of the message purpose, summarising the event semantics, the producing service, the expected delivery guarantees and the recommended consumer handling strategy so that integrators can quickly decide whether subscribing to this message is relevant for their use case.
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
operations:
  sendOperation:
    action: send
    channel:
      $ref: '#/channels/testChannel'
    messages:
      - $ref: '#/components/messages/TestMessage'
components:
  messages:
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
      description: This message represents a complete domain event that is published whenever the underlying aggregate changes its state. It contains the entity identifier, the previous and current values, the timestamp of the change and contextual metadata that downstream consumers rely on to reconcile their projections and trigger follow-up workflows. This message represents a complete domain event that is published whenever the underlying aggregate changes its state. It contains the entity identifier, the previous and current values, the timestamp of the change and contextual metadata that downstream consumers rely on to reconcile their projections and trigger follow-up workflows. This message represents a complete domain event that is published whenever the underlying aggregate changes its state. It contains the entity identifier, the previous and current values, the timestamp of the change and contextual metadata that downstream consumers rely on to reconcile their projections and trigger follow-up workflows. This message represents a complete domain event that is published whenever the underlying aggregate changes its state. It contains the entity identifier, the previous and current values, the timestamp of the change and contextual metadata that downstream consumers rely on to reconcile their projections and trigger follow-up workflows. This message represents a complete domain event that is published whenever the underlying aggregate changes its state. It contains the entity identifier, the previous and current values, the timestamp of the change and contextual metadata that downstream consumers rely on to reconcile their projections and trigger follow-up workflows. This message represents a complete domain event that is published whenever the underlying aggregate changes its state. It contains the entity identifier, the previous and current values, the timestamp of the change and contextual metadata that downstream consumers rely on to reconcile their projections and trigger follow-up workflows. This message represents a complete domain event that is published whenever the underlying aggregate changes its state. It contains the entity identifier, the previous and current values, the timestamp of the change and contextual metadata that downstream consumers rely on to reconcile their projections and trigger follow-up workflows. This message represents a complete domain event that is published whenever the underlying aggregate changes its state. It contains the entity identifier, the previous and current values, the timestamp of the change and contextual metadata that downstream consumers rely on to reconcile their projections and trigger follow-up workflows. This message represents a complete domain event that is published whenever the underlying aggregate changes its state. It contains the entity identifier, the previous and current values, the timestamp of the change and contextual metadata that downstream consumers rely on to reconcile their projections and trigger follow-up workflows. This message represents a complete domain event that is published whenever the underlying aggregate changes its state. It contains the entity identifier, the previous and current values, the timestamp of the change and contextual metadata that downstream consumers rely on to reconcile their projections and trigger follow-up workflows. This message represents a complete domain event that is published whenever the underlying aggregate changes its state. It contains the entity identifier, the previous and current values, the timestamp of the change and contextual metadata that downstream consumers rely on to reconcile their projections and trigger follow-up workflows. This message represents a complete domain event that is published whenever the underlying aggregate changes its state. It contains the entity identifier, the previous and current values, the timestamp of the change and contextual metadata that downstream consumers rely on to reconcile their projections and trigger follow-up workflows. This message represents a complete domain event that is published whenever the underlying aggregate changes its state. It contains the entity identifier, the previous and current values, the timestamp of the change and contextual metadata that downstream consumers rely on to reconcile their projections and trigger follow-up workflows. This message represents a complete domain event that is published whenever the underlying aggregate changes its state. It contains the entity identifier, the previous and current values, the timestamp of the change and contextual metadata that downstream consumers rely on to reconcile their projections and trigger follow-up workflows. This message represents a complete domain event that is published whenever the underlying aggregate changes its state. It contains the entity identifier, the previous and current values, the timestamp of the change and contextual metadata that downstream consumers rely on to reconcile their projections and trigger follow-up workflows. This message represents a complete domain event that is published whenever the underlying aggregate changes its state. It contains the entity identifier, the previous and current values, the timestamp of the change and contextual metadata that downstream consumers rely on to reconcile their projections and trigger follow-up workflows.
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
      description: message description
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
      summary: this summary will be moved to description
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
      summary: A concise but complete overview of the message purpose, summarising the event semantics, the producing service, the expected delivery guarantees and the recommended consumer handling strategy so that integrators can quickly decide whether subscribing to this message is relevant for their use case. A concise but complete overview of the message purpose, summarising the event semantics, the producing service, the expected delivery guarantees and the recommended consumer handling strategy so that integrators can quickly decide whether subscribing to this message is relevant for their use case. A concise but complete overview of the message purpose, summarising the event semantics, the producing service, the expected delivery guarantees and the recommended consumer handling strategy so that integrators can quickly decide whether subscribing to this message is relevant for their use case. A concise but complete overview of the message purpose, summarising the event semantics, the producing service, the expected delivery guarantees and the recommended consumer handling strategy so that integrators can quickly decide whether subscribing to this message is relevant for their use case. A concise but complete overview of the message purpose, summarising the event semantics, the producing service, the expected delivery guarantees and the recommended consumer handling strategy so that integrators can quickly decide whether subscribing to this message is relevant for their use case. A concise but complete overview of the message purpose, summarising the event semantics, the producing service, the expected delivery guarantees and the recommended consumer handling strategy so that integrators can quickly decide whether subscribing to this message is relevant for their use case. A concise but complete overview of the message purpose, summarising the event semantics, the producing service, the expected delivery guarantees and the recommended consumer handling strategy so that integrators can quickly decide whether subscribing to this message is relevant for their use case. A concise but complete overview of the message purpose, summarising the event semantics, the producing service, the expected delivery guarantees and the recommended consumer handling strategy so that integrators can quickly decide whether subscribing to this message is relevant for their use case. A concise but complete overview of the message purpose, summarising the event semantics, the producing service, the expected delivery guarantees and the recommended consumer handling strategy so that integrators can quickly decide whether subscribing to this message is relevant for their use case. A concise but complete overview of the message purpose, summarising the event semantics, the producing service, the expected delivery guarantees and the recommended consumer handling strategy so that integrators can quickly decide whether subscribing to this message is relevant for their use case. A concise but complete overview of the message purpose, summarising the event semantics, the producing service, the expected delivery guarantees and the recommended consumer handling strategy so that integrators can quickly decide whether subscribing to this message is relevant for their use case. A concise but complete overview of the message purpose, summarising the event semantics, the producing service, the expected delivery guarantees and the recommended consumer handling strategy so that integrators can quickly decide whether subscribing to this message is relevant for their use case. A concise but complete overview of the message purpose, summarising the event semantics, the producing service, the expected delivery guarantees and the recommended consumer handling strategy so that integrators can quickly decide whether subscribing to this message is relevant for their use case. A concise but complete overview of the message purpose, summarising the event semantics, the producing service, the expected delivery guarantees and the recommended consumer handling strategy so that integrators can quickly decide whether subscribing to this message is relevant for their use case. A concise but complete overview of the message purpose, summarising the event semantics, the producing service, the expected delivery guarantees and the recommended consumer handling strategy so that integrators can quickly decide whether subscribing to this message is relevant for their use case. A concise but complete overview of the message purpose, summarising the event semantics, the producing service, the expected delivery guarantees and the recommended consumer handling strategy so that integrators can quickly decide whether subscribing to this message is relevant for their use case.
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
      description: message description
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
      summary: message summary
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
      description: This message represents a complete domain event that is published whenever the underlying aggregate changes its state. It contains the entity identifier, the previous and current values, the timestamp of the change and contextual metadata that downstream consumers rely on to reconcile their projections and trigger follow-up workflows. This message represents a complete domain event that is published whenever the underlying aggregate changes its state. It contains the entity identifier, the previous and current values, the timestamp of the change and contextual metadata that downstream consumers rely on to reconcile their projections and trigger follow-up workflows. This message represents a complete domain event that is published whenever the underlying aggregate changes its state. It contains the entity identifier, the previous and current values, the timestamp of the change and contextual metadata that downstream consumers rely on to reconcile their projections and trigger follow-up workflows. This message represents a complete domain event that is published whenever the underlying aggregate changes its state. It contains the entity identifier, the previous and current values, the timestamp of the change and contextual metadata that downstream consumers rely on to reconcile their projections and trigger follow-up workflows. This message represents a complete domain event that is published whenever the underlying aggregate changes its state. It contains the entity identifier, the previous and current values, the timestamp of the change and contextual metadata that downstream consumers rely on to reconcile their projections and trigger follow-up workflows. This message represents a complete domain event that is published whenever the underlying aggregate changes its state. It contains the entity identifier, the previous and current values, the timestamp of the change and contextual metadata that downstream consumers rely on to reconcile their projections and trigger follow-up workflows. This message represents a complete domain event that is published whenever the underlying aggregate changes its state. It contains the entity identifier, the previous and current values, the timestamp of the change and contextual metadata that downstream consumers rely on to reconcile their projections and trigger follow-up workflows. This message represents a complete domain event that is published whenever the underlying aggregate changes its state. It contains the entity identifier, the previous and current values, the timestamp of the change and contextual metadata that downstream consumers rely on to reconcile their projections and trigger follow-up workflows. This message represents a complete domain event that is published whenever the underlying aggregate changes its state. It contains the entity identifier, the previous and current values, the timestamp of the change and contextual metadata that downstream consumers rely on to reconcile their projections and trigger follow-up workflows. This message represents a complete domain event that is published whenever the underlying aggregate changes its state. It contains the entity identifier, the previous and current values, the timestamp of the change and contextual metadata that downstream consumers rely on to reconcile their projections and trigger follow-up workflows. This message represents a complete domain event that is published whenever the underlying aggregate changes its state. It contains the entity identifier, the previous and current values, the timestamp of the change and contextual metadata that downstream consumers rely on to reconcile their projections and trigger follow-up workflows. This message represents a complete domain event that is published whenever the underlying aggregate changes its state. It contains the entity identifier, the previous and current values, the timestamp of the change and contextual metadata that downstream consumers rely on to reconcile their projections and trigger follow-up workflows. This message represents a complete domain event that is published whenever the underlying aggregate changes its state. It contains the entity identifier, the previous and current values, the timestamp of the change and contextual metadata that downstream consumers rely on to reconcile their projections and trigger follow-up workflows. This message represents a complete domain event that is published whenever the underlying aggregate changes its state. It contains the entity identifier, the previous and current values, the timestamp of the change and contextual metadata that downstream consumers rely on to reconcile their projections and trigger follow-up workflows. This message represents a complete domain event that is published whenever the underlying aggregate changes its state. It contains the entity identifier, the previous and current values, the timestamp of the change and contextual metadata that downstream consumers rely on to reconcile their projections and trigger follow-up workflows. This message represents a complete domain event that is published whenever the underlying aggregate changes its state. It contains the entity identifier, the previous and current values, the timestamp of the change and contextual metadata that downstream consumers rely on to reconcile their projections and trigger follow-up workflows.
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
      summary: message summary
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
          key:
            type: string
          schemaIdLocation: header
        amqp:
          bindingVersion: 0.3.0
          contentEncoding: gzip
          messageType: user.signup
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
          key:
            type: string
          schemaIdLocation: header
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
        kafka:
          bindingVersion: 1.0.0
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
        kafka: {}
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
      bindings:
        kafka:
          bindingVersion: 1.0.0
          arbitraryJso:
            unchanged: keep
            removed: bye
            changed: 111
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
      x-second: second
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
      x-second: before
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
      x-first: first
      x-second: second
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
      headers:
        type: object
        description: before description
        properties:
          traceId:
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
        description: payload object
        properties:
          id:
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
      payload:
        type: object
        description: before description
        properties:
          id:
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
        description: headers object
        properties:
          traceId:
            type: string
        x-first: first
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
        x-first: first-old
        x-second: second
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
        x-first: first
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
        x-first: first-old
        x-second: second
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
      title: CHANGED message title
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
      title: message title
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
      description: CHANGED message description
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
      summary: An updated overview of the message purpose, now clarifying the event semantics, the producing service, the at-least-once delivery guarantees, the ordering expectations and the recommended idempotent handling strategy so that integrators can decide more accurately whether subscribing to this message is relevant. An updated overview of the message purpose, now clarifying the event semantics, the producing service, the at-least-once delivery guarantees, the ordering expectations and the recommended idempotent handling strategy so that integrators can decide more accurately whether subscribing to this message is relevant. An updated overview of the message purpose, now clarifying the event semantics, the producing service, the at-least-once delivery guarantees, the ordering expectations and the recommended idempotent handling strategy so that integrators can decide more accurately whether subscribing to this message is relevant. An updated overview of the message purpose, now clarifying the event semantics, the producing service, the at-least-once delivery guarantees, the ordering expectations and the recommended idempotent handling strategy so that integrators can decide more accurately whether subscribing to this message is relevant. An updated overview of the message purpose, now clarifying the event semantics, the producing service, the at-least-once delivery guarantees, the ordering expectations and the recommended idempotent handling strategy so that integrators can decide more accurately whether subscribing to this message is relevant. An updated overview of the message purpose, now clarifying the event semantics, the producing service, the at-least-once delivery guarantees, the ordering expectations and the recommended idempotent handling strategy so that integrators can decide more accurately whether subscribing to this message is relevant. An updated overview of the message purpose, now clarifying the event semantics, the producing service, the at-least-once delivery guarantees, the ordering expectations and the recommended idempotent handling strategy so that integrators can decide more accurately whether subscribing to this message is relevant. An updated overview of the message purpose, now clarifying the event semantics, the producing service, the at-least-once delivery guarantees, the ordering expectations and the recommended idempotent handling strategy so that integrators can decide more accurately whether subscribing to this message is relevant. An updated overview of the message purpose, now clarifying the event semantics, the producing service, the at-least-once delivery guarantees, the ordering expectations and the recommended idempotent handling strategy so that integrators can decide more accurately whether subscribing to this message is relevant. An updated overview of the message purpose, now clarifying the event semantics, the producing service, the at-least-once delivery guarantees, the ordering expectations and the recommended idempotent handling strategy so that integrators can decide more accurately whether subscribing to this message is relevant. An updated overview of the message purpose, now clarifying the event semantics, the producing service, the at-least-once delivery guarantees, the ordering expectations and the recommended idempotent handling strategy so that integrators can decide more accurately whether subscribing to this message is relevant. An updated overview of the message purpose, now clarifying the event semantics, the producing service, the at-least-once delivery guarantees, the ordering expectations and the recommended idempotent handling strategy so that integrators can decide more accurately whether subscribing to this message is relevant. An updated overview of the message purpose, now clarifying the event semantics, the producing service, the at-least-once delivery guarantees, the ordering expectations and the recommended idempotent handling strategy so that integrators can decide more accurately whether subscribing to this message is relevant. An updated overview of the message purpose, now clarifying the event semantics, the producing service, the at-least-once delivery guarantees, the ordering expectations and the recommended idempotent handling strategy so that integrators can decide more accurately whether subscribing to this message is relevant. An updated overview of the message purpose, now clarifying the event semantics, the producing service, the at-least-once delivery guarantees, the ordering expectations and the recommended idempotent handling strategy so that integrators can decide more accurately whether subscribing to this message is relevant. An updated overview of the message purpose, now clarifying the event semantics, the producing service, the at-least-once delivery guarantees, the ordering expectations and the recommended idempotent handling strategy so that integrators can decide more accurately whether subscribing to this message is relevant.
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
      summary: A concise but complete overview of the message purpose, summarising the event semantics, the producing service, the expected delivery guarantees and the recommended consumer handling strategy so that integrators can quickly decide whether subscribing to this message is relevant for their use case. A concise but complete overview of the message purpose, summarising the event semantics, the producing service, the expected delivery guarantees and the recommended consumer handling strategy so that integrators can quickly decide whether subscribing to this message is relevant for their use case. A concise but complete overview of the message purpose, summarising the event semantics, the producing service, the expected delivery guarantees and the recommended consumer handling strategy so that integrators can quickly decide whether subscribing to this message is relevant for their use case. A concise but complete overview of the message purpose, summarising the event semantics, the producing service, the expected delivery guarantees and the recommended consumer handling strategy so that integrators can quickly decide whether subscribing to this message is relevant for their use case. A concise but complete overview of the message purpose, summarising the event semantics, the producing service, the expected delivery guarantees and the recommended consumer handling strategy so that integrators can quickly decide whether subscribing to this message is relevant for their use case. A concise but complete overview of the message purpose, summarising the event semantics, the producing service, the expected delivery guarantees and the recommended consumer handling strategy so that integrators can quickly decide whether subscribing to this message is relevant for their use case. A concise but complete overview of the message purpose, summarising the event semantics, the producing service, the expected delivery guarantees and the recommended consumer handling strategy so that integrators can quickly decide whether subscribing to this message is relevant for their use case. A concise but complete overview of the message purpose, summarising the event semantics, the producing service, the expected delivery guarantees and the recommended consumer handling strategy so that integrators can quickly decide whether subscribing to this message is relevant for their use case. A concise but complete overview of the message purpose, summarising the event semantics, the producing service, the expected delivery guarantees and the recommended consumer handling strategy so that integrators can quickly decide whether subscribing to this message is relevant for their use case. A concise but complete overview of the message purpose, summarising the event semantics, the producing service, the expected delivery guarantees and the recommended consumer handling strategy so that integrators can quickly decide whether subscribing to this message is relevant for their use case. A concise but complete overview of the message purpose, summarising the event semantics, the producing service, the expected delivery guarantees and the recommended consumer handling strategy so that integrators can quickly decide whether subscribing to this message is relevant for their use case. A concise but complete overview of the message purpose, summarising the event semantics, the producing service, the expected delivery guarantees and the recommended consumer handling strategy so that integrators can quickly decide whether subscribing to this message is relevant for their use case. A concise but complete overview of the message purpose, summarising the event semantics, the producing service, the expected delivery guarantees and the recommended consumer handling strategy so that integrators can quickly decide whether subscribing to this message is relevant for their use case. A concise but complete overview of the message purpose, summarising the event semantics, the producing service, the expected delivery guarantees and the recommended consumer handling strategy so that integrators can quickly decide whether subscribing to this message is relevant for their use case. A concise but complete overview of the message purpose, summarising the event semantics, the producing service, the expected delivery guarantees and the recommended consumer handling strategy so that integrators can quickly decide whether subscribing to this message is relevant for their use case. A concise but complete overview of the message purpose, summarising the event semantics, the producing service, the expected delivery guarantees and the recommended consumer handling strategy so that integrators can quickly decide whether subscribing to this message is relevant for their use case.
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
      summary: here it is!
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
      summary: message summary
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
      summary: A concise but complete overview of the message purpose, summarising the event semantics, the producing service, the expected delivery guarantees and the recommended consumer handling strategy so that integrators can quickly decide whether subscribing to this message is relevant for their use case. A concise but complete overview of the message purpose, summarising the event semantics, the producing service, the expected delivery guarantees and the recommended consumer handling strategy so that integrators can quickly decide whether subscribing to this message is relevant for their use case. A concise but complete overview of the message purpose, summarising the event semantics, the producing service, the expected delivery guarantees and the recommended consumer handling strategy so that integrators can quickly decide whether subscribing to this message is relevant for their use case. A concise but complete overview of the message purpose, summarising the event semantics, the producing service, the expected delivery guarantees and the recommended consumer handling strategy so that integrators can quickly decide whether subscribing to this message is relevant for their use case. A concise but complete overview of the message purpose, summarising the event semantics, the producing service, the expected delivery guarantees and the recommended consumer handling strategy so that integrators can quickly decide whether subscribing to this message is relevant for their use case. A concise but complete overview of the message purpose, summarising the event semantics, the producing service, the expected delivery guarantees and the recommended consumer handling strategy so that integrators can quickly decide whether subscribing to this message is relevant for their use case. A concise but complete overview of the message purpose, summarising the event semantics, the producing service, the expected delivery guarantees and the recommended consumer handling strategy so that integrators can quickly decide whether subscribing to this message is relevant for their use case. A concise but complete overview of the message purpose, summarising the event semantics, the producing service, the expected delivery guarantees and the recommended consumer handling strategy so that integrators can quickly decide whether subscribing to this message is relevant for their use case. A concise but complete overview of the message purpose, summarising the event semantics, the producing service, the expected delivery guarantees and the recommended consumer handling strategy so that integrators can quickly decide whether subscribing to this message is relevant for their use case. A concise but complete overview of the message purpose, summarising the event semantics, the producing service, the expected delivery guarantees and the recommended consumer handling strategy so that integrators can quickly decide whether subscribing to this message is relevant for their use case. A concise but complete overview of the message purpose, summarising the event semantics, the producing service, the expected delivery guarantees and the recommended consumer handling strategy so that integrators can quickly decide whether subscribing to this message is relevant for their use case. A concise but complete overview of the message purpose, summarising the event semantics, the producing service, the expected delivery guarantees and the recommended consumer handling strategy so that integrators can quickly decide whether subscribing to this message is relevant for their use case. A concise but complete overview of the message purpose, summarising the event semantics, the producing service, the expected delivery guarantees and the recommended consumer handling strategy so that integrators can quickly decide whether subscribing to this message is relevant for their use case. A concise but complete overview of the message purpose, summarising the event semantics, the producing service, the expected delivery guarantees and the recommended consumer handling strategy so that integrators can quickly decide whether subscribing to this message is relevant for their use case. A concise but complete overview of the message purpose, summarising the event semantics, the producing service, the expected delivery guarantees and the recommended consumer handling strategy so that integrators can quickly decide whether subscribing to this message is relevant for their use case. A concise but complete overview of the message purpose, summarising the event semantics, the producing service, the expected delivery guarantees and the recommended consumer handling strategy so that integrators can quickly decide whether subscribing to this message is relevant for their use case.
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
      description: here it is!
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
      description: message description
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
      description: This message represents a complete domain event that is published whenever the underlying aggregate changes its state. It contains the entity identifier, the previous and current values, the timestamp of the change and contextual metadata that downstream consumers rely on to reconcile their projections and trigger follow-up workflows. This message represents a complete domain event that is published whenever the underlying aggregate changes its state. It contains the entity identifier, the previous and current values, the timestamp of the change and contextual metadata that downstream consumers rely on to reconcile their projections and trigger follow-up workflows. This message represents a complete domain event that is published whenever the underlying aggregate changes its state. It contains the entity identifier, the previous and current values, the timestamp of the change and contextual metadata that downstream consumers rely on to reconcile their projections and trigger follow-up workflows. This message represents a complete domain event that is published whenever the underlying aggregate changes its state. It contains the entity identifier, the previous and current values, the timestamp of the change and contextual metadata that downstream consumers rely on to reconcile their projections and trigger follow-up workflows. This message represents a complete domain event that is published whenever the underlying aggregate changes its state. It contains the entity identifier, the previous and current values, the timestamp of the change and contextual metadata that downstream consumers rely on to reconcile their projections and trigger follow-up workflows. This message represents a complete domain event that is published whenever the underlying aggregate changes its state. It contains the entity identifier, the previous and current values, the timestamp of the change and contextual metadata that downstream consumers rely on to reconcile their projections and trigger follow-up workflows. This message represents a complete domain event that is published whenever the underlying aggregate changes its state. It contains the entity identifier, the previous and current values, the timestamp of the change and contextual metadata that downstream consumers rely on to reconcile their projections and trigger follow-up workflows. This message represents a complete domain event that is published whenever the underlying aggregate changes its state. It contains the entity identifier, the previous and current values, the timestamp of the change and contextual metadata that downstream consumers rely on to reconcile their projections and trigger follow-up workflows. This message represents a complete domain event that is published whenever the underlying aggregate changes its state. It contains the entity identifier, the previous and current values, the timestamp of the change and contextual metadata that downstream consumers rely on to reconcile their projections and trigger follow-up workflows. This message represents a complete domain event that is published whenever the underlying aggregate changes its state. It contains the entity identifier, the previous and current values, the timestamp of the change and contextual metadata that downstream consumers rely on to reconcile their projections and trigger follow-up workflows. This message represents a complete domain event that is published whenever the underlying aggregate changes its state. It contains the entity identifier, the previous and current values, the timestamp of the change and contextual metadata that downstream consumers rely on to reconcile their projections and trigger follow-up workflows. This message represents a complete domain event that is published whenever the underlying aggregate changes its state. It contains the entity identifier, the previous and current values, the timestamp of the change and contextual metadata that downstream consumers rely on to reconcile their projections and trigger follow-up workflows. This message represents a complete domain event that is published whenever the underlying aggregate changes its state. It contains the entity identifier, the previous and current values, the timestamp of the change and contextual metadata that downstream consumers rely on to reconcile their projections and trigger follow-up workflows. This message represents a complete domain event that is published whenever the underlying aggregate changes its state. It contains the entity identifier, the previous and current values, the timestamp of the change and contextual metadata that downstream consumers rely on to reconcile their projections and trigger follow-up workflows. This message represents a complete domain event that is published whenever the underlying aggregate changes its state. It contains the entity identifier, the previous and current values, the timestamp of the change and contextual metadata that downstream consumers rely on to reconcile their projections and trigger follow-up workflows. This message represents a complete domain event that is published whenever the underlying aggregate changes its state. It contains the entity identifier, the previous and current values, the timestamp of the change and contextual metadata that downstream consumers rely on to reconcile their projections and trigger follow-up workflows.
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
      description: This message represents a complete domain event that is published whenever the underlying aggregate changes its state. It contains the entity identifier, the previous and current values, the timestamp of the change and contextual metadata that downstream consumers rely on to reconcile their projections and trigger follow-up workflows. This message represents a complete domain event that is published whenever the underlying aggregate changes its state. It contains the entity identifier, the previous and current values, the timestamp of the change and contextual metadata that downstream consumers rely on to reconcile their projections and trigger follow-up workflows. This message represents a complete domain event that is published whenever the underlying aggregate changes its state. It contains the entity identifier, the previous and current values, the timestamp of the change and contextual metadata that downstream consumers rely on to reconcile their projections and trigger follow-up workflows. This message represents a complete domain event that is published whenever the underlying aggregate changes its state. It contains the entity identifier, the previous and current values, the timestamp of the change and contextual metadata that downstream consumers rely on to reconcile their projections and trigger follow-up workflows. This message represents a complete domain event that is published whenever the underlying aggregate changes its state. It contains the entity identifier, the previous and current values, the timestamp of the change and contextual metadata that downstream consumers rely on to reconcile their projections and trigger follow-up workflows. This message represents a complete domain event that is published whenever the underlying aggregate changes its state. It contains the entity identifier, the previous and current values, the timestamp of the change and contextual metadata that downstream consumers rely on to reconcile their projections and trigger follow-up workflows. This message represents a complete domain event that is published whenever the underlying aggregate changes its state. It contains the entity identifier, the previous and current values, the timestamp of the change and contextual metadata that downstream consumers rely on to reconcile their projections and trigger follow-up workflows. This message represents a complete domain event that is published whenever the underlying aggregate changes its state. It contains the entity identifier, the previous and current values, the timestamp of the change and contextual metadata that downstream consumers rely on to reconcile their projections and trigger follow-up workflows. This message represents a complete domain event that is published whenever the underlying aggregate changes its state. It contains the entity identifier, the previous and current values, the timestamp of the change and contextual metadata that downstream consumers rely on to reconcile their projections and trigger follow-up workflows. This message represents a complete domain event that is published whenever the underlying aggregate changes its state. It contains the entity identifier, the previous and current values, the timestamp of the change and contextual metadata that downstream consumers rely on to reconcile their projections and trigger follow-up workflows. This message represents a complete domain event that is published whenever the underlying aggregate changes its state. It contains the entity identifier, the previous and current values, the timestamp of the change and contextual metadata that downstream consumers rely on to reconcile their projections and trigger follow-up workflows. This message represents a complete domain event that is published whenever the underlying aggregate changes its state. It contains the entity identifier, the previous and current values, the timestamp of the change and contextual metadata that downstream consumers rely on to reconcile their projections and trigger follow-up workflows. This message represents a complete domain event that is published whenever the underlying aggregate changes its state. It contains the entity identifier, the previous and current values, the timestamp of the change and contextual metadata that downstream consumers rely on to reconcile their projections and trigger follow-up workflows. This message represents a complete domain event that is published whenever the underlying aggregate changes its state. It contains the entity identifier, the previous and current values, the timestamp of the change and contextual metadata that downstream consumers rely on to reconcile their projections and trigger follow-up workflows. This message represents a complete domain event that is published whenever the underlying aggregate changes its state. It contains the entity identifier, the previous and current values, the timestamp of the change and contextual metadata that downstream consumers rely on to reconcile their projections and trigger follow-up workflows. This message represents a complete domain event that is published whenever the underlying aggregate changes its state. It contains the entity identifier, the previous and current values, the timestamp of the change and contextual metadata that downstream consumers rely on to reconcile their projections and trigger follow-up workflows.
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
      description: message description
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
      description: This message now represents an enriched domain event published whenever the underlying aggregate changes its state. Besides the entity identifier, the previous and current values and the change timestamp, it also carries correlation data, the schema version and routing hints so that downstream consumers can reconcile projections, deduplicate retries and trigger follow-up workflows reliably. This message now represents an enriched domain event published whenever the underlying aggregate changes its state. Besides the entity identifier, the previous and current values and the change timestamp, it also carries correlation data, the schema version and routing hints so that downstream consumers can reconcile projections, deduplicate retries and trigger follow-up workflows reliably. This message now represents an enriched domain event published whenever the underlying aggregate changes its state. Besides the entity identifier, the previous and current values and the change timestamp, it also carries correlation data, the schema version and routing hints so that downstream consumers can reconcile projections, deduplicate retries and trigger follow-up workflows reliably. This message now represents an enriched domain event published whenever the underlying aggregate changes its state. Besides the entity identifier, the previous and current values and the change timestamp, it also carries correlation data, the schema version and routing hints so that downstream consumers can reconcile projections, deduplicate retries and trigger follow-up workflows reliably. This message now represents an enriched domain event published whenever the underlying aggregate changes its state. Besides the entity identifier, the previous and current values and the change timestamp, it also carries correlation data, the schema version and routing hints so that downstream consumers can reconcile projections, deduplicate retries and trigger follow-up workflows reliably. This message now represents an enriched domain event published whenever the underlying aggregate changes its state. Besides the entity identifier, the previous and current values and the change timestamp, it also carries correlation data, the schema version and routing hints so that downstream consumers can reconcile projections, deduplicate retries and trigger follow-up workflows reliably. This message now represents an enriched domain event published whenever the underlying aggregate changes its state. Besides the entity identifier, the previous and current values and the change timestamp, it also carries correlation data, the schema version and routing hints so that downstream consumers can reconcile projections, deduplicate retries and trigger follow-up workflows reliably. This message now represents an enriched domain event published whenever the underlying aggregate changes its state. Besides the entity identifier, the previous and current values and the change timestamp, it also carries correlation data, the schema version and routing hints so that downstream consumers can reconcile projections, deduplicate retries and trigger follow-up workflows reliably. This message now represents an enriched domain event published whenever the underlying aggregate changes its state. Besides the entity identifier, the previous and current values and the change timestamp, it also carries correlation data, the schema version and routing hints so that downstream consumers can reconcile projections, deduplicate retries and trigger follow-up workflows reliably. This message now represents an enriched domain event published whenever the underlying aggregate changes its state. Besides the entity identifier, the previous and current values and the change timestamp, it also carries correlation data, the schema version and routing hints so that downstream consumers can reconcile projections, deduplicate retries and trigger follow-up workflows reliably. This message now represents an enriched domain event published whenever the underlying aggregate changes its state. Besides the entity identifier, the previous and current values and the change timestamp, it also carries correlation data, the schema version and routing hints so that downstream consumers can reconcile projections, deduplicate retries and trigger follow-up workflows reliably. This message now represents an enriched domain event published whenever the underlying aggregate changes its state. Besides the entity identifier, the previous and current values and the change timestamp, it also carries correlation data, the schema version and routing hints so that downstream consumers can reconcile projections, deduplicate retries and trigger follow-up workflows reliably. This message now represents an enriched domain event published whenever the underlying aggregate changes its state. Besides the entity identifier, the previous and current values and the change timestamp, it also carries correlation data, the schema version and routing hints so that downstream consumers can reconcile projections, deduplicate retries and trigger follow-up workflows reliably. This message now represents an enriched domain event published whenever the underlying aggregate changes its state. Besides the entity identifier, the previous and current values and the change timestamp, it also carries correlation data, the schema version and routing hints so that downstream consumers can reconcile projections, deduplicate retries and trigger follow-up workflows reliably. This message now represents an enriched domain event published whenever the underlying aggregate changes its state. Besides the entity identifier, the previous and current values and the change timestamp, it also carries correlation data, the schema version and routing hints so that downstream consumers can reconcile projections, deduplicate retries and trigger follow-up workflows reliably. This message now represents an enriched domain event published whenever the underlying aggregate changes its state. Besides the entity identifier, the previous and current values and the change timestamp, it also carries correlation data, the schema version and routing hints so that downstream consumers can reconcile projections, deduplicate retries and trigger follow-up workflows reliably.
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
      description: This message represents a complete domain event that is published whenever the underlying aggregate changes its state. It contains the entity identifier, the previous and current values, the timestamp of the change and contextual metadata that downstream consumers rely on to reconcile their projections and trigger follow-up workflows. This message represents a complete domain event that is published whenever the underlying aggregate changes its state. It contains the entity identifier, the previous and current values, the timestamp of the change and contextual metadata that downstream consumers rely on to reconcile their projections and trigger follow-up workflows. This message represents a complete domain event that is published whenever the underlying aggregate changes its state. It contains the entity identifier, the previous and current values, the timestamp of the change and contextual metadata that downstream consumers rely on to reconcile their projections and trigger follow-up workflows. This message represents a complete domain event that is published whenever the underlying aggregate changes its state. It contains the entity identifier, the previous and current values, the timestamp of the change and contextual metadata that downstream consumers rely on to reconcile their projections and trigger follow-up workflows. This message represents a complete domain event that is published whenever the underlying aggregate changes its state. It contains the entity identifier, the previous and current values, the timestamp of the change and contextual metadata that downstream consumers rely on to reconcile their projections and trigger follow-up workflows. This message represents a complete domain event that is published whenever the underlying aggregate changes its state. It contains the entity identifier, the previous and current values, the timestamp of the change and contextual metadata that downstream consumers rely on to reconcile their projections and trigger follow-up workflows. This message represents a complete domain event that is published whenever the underlying aggregate changes its state. It contains the entity identifier, the previous and current values, the timestamp of the change and contextual metadata that downstream consumers rely on to reconcile their projections and trigger follow-up workflows. This message represents a complete domain event that is published whenever the underlying aggregate changes its state. It contains the entity identifier, the previous and current values, the timestamp of the change and contextual metadata that downstream consumers rely on to reconcile their projections and trigger follow-up workflows. This message represents a complete domain event that is published whenever the underlying aggregate changes its state. It contains the entity identifier, the previous and current values, the timestamp of the change and contextual metadata that downstream consumers rely on to reconcile their projections and trigger follow-up workflows. This message represents a complete domain event that is published whenever the underlying aggregate changes its state. It contains the entity identifier, the previous and current values, the timestamp of the change and contextual metadata that downstream consumers rely on to reconcile their projections and trigger follow-up workflows. This message represents a complete domain event that is published whenever the underlying aggregate changes its state. It contains the entity identifier, the previous and current values, the timestamp of the change and contextual metadata that downstream consumers rely on to reconcile their projections and trigger follow-up workflows. This message represents a complete domain event that is published whenever the underlying aggregate changes its state. It contains the entity identifier, the previous and current values, the timestamp of the change and contextual metadata that downstream consumers rely on to reconcile their projections and trigger follow-up workflows. This message represents a complete domain event that is published whenever the underlying aggregate changes its state. It contains the entity identifier, the previous and current values, the timestamp of the change and contextual metadata that downstream consumers rely on to reconcile their projections and trigger follow-up workflows. This message represents a complete domain event that is published whenever the underlying aggregate changes its state. It contains the entity identifier, the previous and current values, the timestamp of the change and contextual metadata that downstream consumers rely on to reconcile their projections and trigger follow-up workflows. This message represents a complete domain event that is published whenever the underlying aggregate changes its state. It contains the entity identifier, the previous and current values, the timestamp of the change and contextual metadata that downstream consumers rely on to reconcile their projections and trigger follow-up workflows. This message represents a complete domain event that is published whenever the underlying aggregate changes its state. It contains the entity identifier, the previous and current values, the timestamp of the change and contextual metadata that downstream consumers rely on to reconcile their projections and trigger follow-up workflows.
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
      summary: CHANGED message summary
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
      summary: message summary
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
          key:
            type: string
          schemaIdLocation: header
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
        amqp:
          bindingVersion: 0.3.0
          contentEncoding: gzip
          messageType: user.signup
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
          key:
            type: string
          schemaIdLocation: header
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
          bindingVersion: 2.0.0
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
        kafka: {}
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
          arbitraryJso:
            unchanged: keep
            changed: test string
            added: new
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
      x-second: second
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
      x-second: after
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
      x-first: first
      x-second: second
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
      headers:
        type: object
        description: headers object
        properties:
          traceId:
            type: string
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
        description: after description
        properties:
          traceId:
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
      payload:
        type: object
        description: payload object
        properties:
          id:
            type: string
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
        description: after description
        properties:
          id:
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
        x-first: first
        x-second: second
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
        x-first: first-new
        x-third: third
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
          correlationId:
            type: string
            x-first: first
            x-second: second
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
      headers:
        type: object
        description: headers object
        properties:
          traceId:
            type: string
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
        x-first: first
        x-second: second
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
        x-first: first-new
        x-third: third
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
`,er=Object.assign({"../../../../samples/async-api-diffs/message/1.1-message-title-changed/before.yaml":at,"../../../../samples/async-api-diffs/message/1.2-message-title-removed/before.yaml":rt,"../../../../samples/async-api-diffs/message/1.3-message-title-added/before.yaml":it,"../../../../samples/async-api-diffs/message/2.1-message-description-changed/before.yaml":ot,"../../../../samples/async-api-diffs/message/2.10-message-long-summary-changed/before.yaml":ct,"../../../../samples/async-api-diffs/message/2.11-message-long-summary-removed/before.yaml":dt,"../../../../samples/async-api-diffs/message/2.12-message-long-summary-added/before.yaml":mt,"../../../../samples/async-api-diffs/message/2.13-message-description-moved-to-summary/before.yaml":gt,"../../../../samples/async-api-diffs/message/2.14-message-long-description-moved-to-summary/before.yaml":ht,"../../../../samples/async-api-diffs/message/2.15-message-long-description-moved-to-long-summary/before.yaml":pt,"../../../../samples/async-api-diffs/message/2.16-message-description-moved-to-long-summary/before.yaml":lt,"../../../../samples/async-api-diffs/message/2.17-message-summary-moved-to-description/before.yaml":ut,"../../../../samples/async-api-diffs/message/2.18-message-long-summary-moved-to-description/before.yaml":yt,"../../../../samples/async-api-diffs/message/2.19-message-long-summary-moved-to-long-description/before.yaml":vt,"../../../../samples/async-api-diffs/message/2.2-message-description-removed/before.yaml":ft,"../../../../samples/async-api-diffs/message/2.20-message-summary-moved-to-long-description/before.yaml":_t,"../../../../samples/async-api-diffs/message/2.3-message-description-added/before.yaml":bt,"../../../../samples/async-api-diffs/message/2.4-message-long-description-changed/before.yaml":wt,"../../../../samples/async-api-diffs/message/2.5-message-long-description-removed/before.yaml":Tt,"../../../../samples/async-api-diffs/message/2.6-message-long-description-added/before.yaml":Mt,"../../../../samples/async-api-diffs/message/2.7-message-summary-changed/before.yaml":xt,"../../../../samples/async-api-diffs/message/2.8-message-summary-removed/before.yaml":jt,"../../../../samples/async-api-diffs/message/2.9-message-summary-added/before.yaml":Ct,"../../../../samples/async-api-diffs/message/3.1-message-bindings-add-one-more-binding/before.yaml":At,"../../../../samples/async-api-diffs/message/3.2-message-bindings-remove-one-of-several-bindings/before.yaml":kt,"../../../../samples/async-api-diffs/message/3.3-message-bindings-add-bindings/before.yaml":$t,"../../../../samples/async-api-diffs/message/3.4-message-bindings-remove-bindings/before.yaml":It,"../../../../samples/async-api-diffs/message/4.1-message-bindings-kafka-bindingVersion-changed/before.yaml":St,"../../../../samples/async-api-diffs/message/4.2-message-bindings-kafka-bindingVersion-removed/before.yaml":qt,"../../../../samples/async-api-diffs/message/4.3-message-bindings-kafka-bindingVersion-added/before.yaml":Ot,"../../../../samples/async-api-diffs/message/5.1-message-bindings-kafka-internal-jso-changes/before.yaml":Pt,"../../../../samples/async-api-diffs/message/6.1-message-x-second-added/before.yaml":Vt,"../../../../samples/async-api-diffs/message/6.2-message-x-second-removed/before.yaml":Bt,"../../../../samples/async-api-diffs/message/6.3-message-x-second-changed/before.yaml":Et,"../../../../samples/async-api-diffs/message/6.4-message-x-first-and-x-second-added/before.yaml":Dt,"../../../../samples/async-api-diffs/message/6.5-message-x-first-and-x-second-removed/before.yaml":Lt,"../../../../samples/async-api-diffs/message/7.1-message-headers-object-schema-added/before.yaml":Gt,"../../../../samples/async-api-diffs/message/7.2-message-headers-object-schema-removed/before.yaml":Kt,"../../../../samples/async-api-diffs/message/7.3-message-headers-description-changed/before.yaml":Nt,"../../../../samples/async-api-diffs/message/7.4-message-payload-object-schema-added/before.yaml":zt,"../../../../samples/async-api-diffs/message/7.5-message-payload-object-schema-removed/before.yaml":Ft,"../../../../samples/async-api-diffs/message/7.6-message-payload-description-changed/before.yaml":Ht,"../../../../samples/async-api-diffs/message/8.1-message-headers-object-schema-added-extensions/before.yaml":Rt,"../../../../samples/async-api-diffs/message/8.10-message-payload-object-schema-removed-property-with-extensions/before.yaml":Jt,"../../../../samples/async-api-diffs/message/8.2-message-headers-object-schema-removed-extensions/before.yaml":Yt,"../../../../samples/async-api-diffs/message/8.3-message-headers-object-schema-changed-extensions/before.yaml":Qt,"../../../../samples/async-api-diffs/message/8.4-message-headers-object-schema-added-property-with-extensions/before.yaml":Ut,"../../../../samples/async-api-diffs/message/8.5-message-headers-object-schema-removed-property-with-extensions/before.yaml":Wt,"../../../../samples/async-api-diffs/message/8.6-message-payload-object-schema-added-extensions/before.yaml":Xt,"../../../../samples/async-api-diffs/message/8.7-message-payload-object-schema-removed-extensions/before.yaml":Zt,"../../../../samples/async-api-diffs/message/8.8-message-payload-object-schema-changed-extensions/before.yaml":ea,"../../../../samples/async-api-diffs/message/8.9-message-payload-object-schema-added-property-with-extensions/before.yaml":sa}),sr=Object.assign({"../../../../samples/async-api-diffs/message/1.1-message-title-changed/after.yaml":na,"../../../../samples/async-api-diffs/message/1.2-message-title-removed/after.yaml":ta,"../../../../samples/async-api-diffs/message/1.3-message-title-added/after.yaml":aa,"../../../../samples/async-api-diffs/message/2.1-message-description-changed/after.yaml":ra,"../../../../samples/async-api-diffs/message/2.10-message-long-summary-changed/after.yaml":ia,"../../../../samples/async-api-diffs/message/2.11-message-long-summary-removed/after.yaml":oa,"../../../../samples/async-api-diffs/message/2.12-message-long-summary-added/after.yaml":ca,"../../../../samples/async-api-diffs/message/2.13-message-description-moved-to-summary/after.yaml":da,"../../../../samples/async-api-diffs/message/2.14-message-long-description-moved-to-summary/after.yaml":ma,"../../../../samples/async-api-diffs/message/2.15-message-long-description-moved-to-long-summary/after.yaml":ga,"../../../../samples/async-api-diffs/message/2.16-message-description-moved-to-long-summary/after.yaml":ha,"../../../../samples/async-api-diffs/message/2.17-message-summary-moved-to-description/after.yaml":pa,"../../../../samples/async-api-diffs/message/2.18-message-long-summary-moved-to-description/after.yaml":la,"../../../../samples/async-api-diffs/message/2.19-message-long-summary-moved-to-long-description/after.yaml":ua,"../../../../samples/async-api-diffs/message/2.2-message-description-removed/after.yaml":ya,"../../../../samples/async-api-diffs/message/2.20-message-summary-moved-to-long-description/after.yaml":va,"../../../../samples/async-api-diffs/message/2.3-message-description-added/after.yaml":fa,"../../../../samples/async-api-diffs/message/2.4-message-long-description-changed/after.yaml":_a,"../../../../samples/async-api-diffs/message/2.5-message-long-description-removed/after.yaml":ba,"../../../../samples/async-api-diffs/message/2.6-message-long-description-added/after.yaml":wa,"../../../../samples/async-api-diffs/message/2.7-message-summary-changed/after.yaml":Ta,"../../../../samples/async-api-diffs/message/2.8-message-summary-removed/after.yaml":Ma,"../../../../samples/async-api-diffs/message/2.9-message-summary-added/after.yaml":xa,"../../../../samples/async-api-diffs/message/3.1-message-bindings-add-one-more-binding/after.yaml":ja,"../../../../samples/async-api-diffs/message/3.2-message-bindings-remove-one-of-several-bindings/after.yaml":Ca,"../../../../samples/async-api-diffs/message/3.3-message-bindings-add-bindings/after.yaml":Aa,"../../../../samples/async-api-diffs/message/3.4-message-bindings-remove-bindings/after.yaml":ka,"../../../../samples/async-api-diffs/message/4.1-message-bindings-kafka-bindingVersion-changed/after.yaml":$a,"../../../../samples/async-api-diffs/message/4.2-message-bindings-kafka-bindingVersion-removed/after.yaml":Ia,"../../../../samples/async-api-diffs/message/4.3-message-bindings-kafka-bindingVersion-added/after.yaml":Sa,"../../../../samples/async-api-diffs/message/5.1-message-bindings-kafka-internal-jso-changes/after.yaml":qa,"../../../../samples/async-api-diffs/message/6.1-message-x-second-added/after.yaml":Oa,"../../../../samples/async-api-diffs/message/6.2-message-x-second-removed/after.yaml":Pa,"../../../../samples/async-api-diffs/message/6.3-message-x-second-changed/after.yaml":Va,"../../../../samples/async-api-diffs/message/6.4-message-x-first-and-x-second-added/after.yaml":Ba,"../../../../samples/async-api-diffs/message/6.5-message-x-first-and-x-second-removed/after.yaml":Ea,"../../../../samples/async-api-diffs/message/7.1-message-headers-object-schema-added/after.yaml":Da,"../../../../samples/async-api-diffs/message/7.2-message-headers-object-schema-removed/after.yaml":La,"../../../../samples/async-api-diffs/message/7.3-message-headers-description-changed/after.yaml":Ga,"../../../../samples/async-api-diffs/message/7.4-message-payload-object-schema-added/after.yaml":Ka,"../../../../samples/async-api-diffs/message/7.5-message-payload-object-schema-removed/after.yaml":Na,"../../../../samples/async-api-diffs/message/7.6-message-payload-description-changed/after.yaml":za,"../../../../samples/async-api-diffs/message/8.1-message-headers-object-schema-added-extensions/after.yaml":Fa,"../../../../samples/async-api-diffs/message/8.10-message-payload-object-schema-removed-property-with-extensions/after.yaml":Ha,"../../../../samples/async-api-diffs/message/8.2-message-headers-object-schema-removed-extensions/after.yaml":Ra,"../../../../samples/async-api-diffs/message/8.3-message-headers-object-schema-changed-extensions/after.yaml":Ja,"../../../../samples/async-api-diffs/message/8.4-message-headers-object-schema-added-property-with-extensions/after.yaml":Ya,"../../../../samples/async-api-diffs/message/8.5-message-headers-object-schema-removed-property-with-extensions/after.yaml":Qa,"../../../../samples/async-api-diffs/message/8.6-message-payload-object-schema-added-extensions/after.yaml":Ua,"../../../../samples/async-api-diffs/message/8.7-message-payload-object-schema-removed-extensions/after.yaml":Wa,"../../../../samples/async-api-diffs/message/8.8-message-payload-object-schema-changed-extensions/after.yaml":Xa,"../../../../samples/async-api-diffs/message/8.9-message-payload-object-schema-added-property-with-extensions/after.yaml":Za}),nr=Zn(er,sr),tr=et(nr),Un=({beforeYaml:s,afterYaml:ee})=>Wn.jsx(Xn,{...ir(s,ee)}),Mr={title:"Async API Diffs Suite/Message Samples",component:Un,argTypes:st},ar="sendOperation",rr="TestMessage",ir=(s,ee)=>nt(s,ee,{operationKey:ar,messageKey:rr}),or=tt(Un,tr),e=s=>or(s),n=e("1.1-message-title-changed"),t=e("1.2-message-title-removed"),a=e("1.3-message-title-added"),r=e("2.1-message-description-changed"),i=e("2.2-message-description-removed"),o=e("2.3-message-description-added"),c=e("2.4-message-long-description-changed"),d=e("2.5-message-long-description-removed"),m=e("2.6-message-long-description-added"),g=e("2.7-message-summary-changed"),h=e("2.8-message-summary-removed"),p=e("2.9-message-summary-added"),l=e("2.10-message-long-summary-changed"),u=e("2.11-message-long-summary-removed"),y=e("2.12-message-long-summary-added"),v=e("2.13-message-description-moved-to-summary"),f=e("2.14-message-long-description-moved-to-summary"),_=e("2.15-message-long-description-moved-to-long-summary"),b=e("2.16-message-description-moved-to-long-summary"),w=e("2.17-message-summary-moved-to-description"),T=e("2.18-message-long-summary-moved-to-description"),M=e("2.19-message-long-summary-moved-to-long-description"),x=e("2.20-message-summary-moved-to-long-description"),j=e("3.1-message-bindings-add-one-more-binding"),C=e("3.2-message-bindings-remove-one-of-several-bindings"),A=e("3.3-message-bindings-add-bindings"),k=e("3.4-message-bindings-remove-bindings"),$=e("4.1-message-bindings-kafka-bindingVersion-changed"),I=e("4.2-message-bindings-kafka-bindingVersion-removed"),S=e("4.3-message-bindings-kafka-bindingVersion-added"),q=e("5.1-message-bindings-kafka-internal-jso-changes"),O=e("6.1-message-x-second-added"),P=e("6.2-message-x-second-removed"),V=e("6.3-message-x-second-changed"),B=e("6.4-message-x-first-and-x-second-added"),E=e("6.5-message-x-first-and-x-second-removed"),D=e("7.1-message-headers-object-schema-added"),L=e("7.2-message-headers-object-schema-removed"),G=e("7.3-message-headers-description-changed"),K=e("7.4-message-payload-object-schema-added"),N=e("7.5-message-payload-object-schema-removed"),z=e("7.6-message-payload-description-changed"),F=e("8.1-message-headers-object-schema-added-extensions"),H=e("8.2-message-headers-object-schema-removed-extensions"),R=e("8.3-message-headers-object-schema-changed-extensions"),J=e("8.4-message-headers-object-schema-added-property-with-extensions"),Y=e("8.5-message-headers-object-schema-removed-property-with-extensions"),Q=e("8.6-message-payload-object-schema-added-extensions"),U=e("8.7-message-payload-object-schema-removed-extensions"),W=e("8.8-message-payload-object-schema-changed-extensions"),X=e("8.9-message-payload-object-schema-added-property-with-extensions"),Z=e("8.10-message-payload-object-schema-removed-property-with-extensions");var se,ne,te;n.parameters={...n.parameters,docs:{...(se=n.parameters)==null?void 0:se.docs,source:{originalSource:'createCaseStory("1.1-message-title-changed")',...(te=(ne=n.parameters)==null?void 0:ne.docs)==null?void 0:te.source}}};var ae,re,ie;t.parameters={...t.parameters,docs:{...(ae=t.parameters)==null?void 0:ae.docs,source:{originalSource:'createCaseStory("1.2-message-title-removed")',...(ie=(re=t.parameters)==null?void 0:re.docs)==null?void 0:ie.source}}};var oe,ce,de;a.parameters={...a.parameters,docs:{...(oe=a.parameters)==null?void 0:oe.docs,source:{originalSource:'createCaseStory("1.3-message-title-added")',...(de=(ce=a.parameters)==null?void 0:ce.docs)==null?void 0:de.source}}};var me,ge,he;r.parameters={...r.parameters,docs:{...(me=r.parameters)==null?void 0:me.docs,source:{originalSource:'createCaseStory("2.1-message-description-changed")',...(he=(ge=r.parameters)==null?void 0:ge.docs)==null?void 0:he.source}}};var pe,le,ue;i.parameters={...i.parameters,docs:{...(pe=i.parameters)==null?void 0:pe.docs,source:{originalSource:'createCaseStory("2.2-message-description-removed")',...(ue=(le=i.parameters)==null?void 0:le.docs)==null?void 0:ue.source}}};var ye,ve,fe;o.parameters={...o.parameters,docs:{...(ye=o.parameters)==null?void 0:ye.docs,source:{originalSource:'createCaseStory("2.3-message-description-added")',...(fe=(ve=o.parameters)==null?void 0:ve.docs)==null?void 0:fe.source}}};var _e,be,we;c.parameters={...c.parameters,docs:{...(_e=c.parameters)==null?void 0:_e.docs,source:{originalSource:'createCaseStory("2.4-message-long-description-changed")',...(we=(be=c.parameters)==null?void 0:be.docs)==null?void 0:we.source}}};var Te,Me,xe;d.parameters={...d.parameters,docs:{...(Te=d.parameters)==null?void 0:Te.docs,source:{originalSource:'createCaseStory("2.5-message-long-description-removed")',...(xe=(Me=d.parameters)==null?void 0:Me.docs)==null?void 0:xe.source}}};var je,Ce,Ae;m.parameters={...m.parameters,docs:{...(je=m.parameters)==null?void 0:je.docs,source:{originalSource:'createCaseStory("2.6-message-long-description-added")',...(Ae=(Ce=m.parameters)==null?void 0:Ce.docs)==null?void 0:Ae.source}}};var ke,$e,Ie;g.parameters={...g.parameters,docs:{...(ke=g.parameters)==null?void 0:ke.docs,source:{originalSource:'createCaseStory("2.7-message-summary-changed")',...(Ie=($e=g.parameters)==null?void 0:$e.docs)==null?void 0:Ie.source}}};var Se,qe,Oe;h.parameters={...h.parameters,docs:{...(Se=h.parameters)==null?void 0:Se.docs,source:{originalSource:'createCaseStory("2.8-message-summary-removed")',...(Oe=(qe=h.parameters)==null?void 0:qe.docs)==null?void 0:Oe.source}}};var Pe,Ve,Be;p.parameters={...p.parameters,docs:{...(Pe=p.parameters)==null?void 0:Pe.docs,source:{originalSource:'createCaseStory("2.9-message-summary-added")',...(Be=(Ve=p.parameters)==null?void 0:Ve.docs)==null?void 0:Be.source}}};var Ee,De,Le;l.parameters={...l.parameters,docs:{...(Ee=l.parameters)==null?void 0:Ee.docs,source:{originalSource:'createCaseStory("2.10-message-long-summary-changed")',...(Le=(De=l.parameters)==null?void 0:De.docs)==null?void 0:Le.source}}};var Ge,Ke,Ne;u.parameters={...u.parameters,docs:{...(Ge=u.parameters)==null?void 0:Ge.docs,source:{originalSource:'createCaseStory("2.11-message-long-summary-removed")',...(Ne=(Ke=u.parameters)==null?void 0:Ke.docs)==null?void 0:Ne.source}}};var ze,Fe,He;y.parameters={...y.parameters,docs:{...(ze=y.parameters)==null?void 0:ze.docs,source:{originalSource:'createCaseStory("2.12-message-long-summary-added")',...(He=(Fe=y.parameters)==null?void 0:Fe.docs)==null?void 0:He.source}}};var Re,Je,Ye;v.parameters={...v.parameters,docs:{...(Re=v.parameters)==null?void 0:Re.docs,source:{originalSource:'createCaseStory("2.13-message-description-moved-to-summary")',...(Ye=(Je=v.parameters)==null?void 0:Je.docs)==null?void 0:Ye.source}}};var Qe,Ue,We;f.parameters={...f.parameters,docs:{...(Qe=f.parameters)==null?void 0:Qe.docs,source:{originalSource:'createCaseStory("2.14-message-long-description-moved-to-summary")',...(We=(Ue=f.parameters)==null?void 0:Ue.docs)==null?void 0:We.source}}};var Xe,Ze,es;_.parameters={..._.parameters,docs:{...(Xe=_.parameters)==null?void 0:Xe.docs,source:{originalSource:'createCaseStory("2.15-message-long-description-moved-to-long-summary")',...(es=(Ze=_.parameters)==null?void 0:Ze.docs)==null?void 0:es.source}}};var ss,ns,ts;b.parameters={...b.parameters,docs:{...(ss=b.parameters)==null?void 0:ss.docs,source:{originalSource:'createCaseStory("2.16-message-description-moved-to-long-summary")',...(ts=(ns=b.parameters)==null?void 0:ns.docs)==null?void 0:ts.source}}};var as,rs,is;w.parameters={...w.parameters,docs:{...(as=w.parameters)==null?void 0:as.docs,source:{originalSource:'createCaseStory("2.17-message-summary-moved-to-description")',...(is=(rs=w.parameters)==null?void 0:rs.docs)==null?void 0:is.source}}};var os,cs,ds;T.parameters={...T.parameters,docs:{...(os=T.parameters)==null?void 0:os.docs,source:{originalSource:'createCaseStory("2.18-message-long-summary-moved-to-description")',...(ds=(cs=T.parameters)==null?void 0:cs.docs)==null?void 0:ds.source}}};var ms,gs,hs;M.parameters={...M.parameters,docs:{...(ms=M.parameters)==null?void 0:ms.docs,source:{originalSource:'createCaseStory("2.19-message-long-summary-moved-to-long-description")',...(hs=(gs=M.parameters)==null?void 0:gs.docs)==null?void 0:hs.source}}};var ps,ls,us;x.parameters={...x.parameters,docs:{...(ps=x.parameters)==null?void 0:ps.docs,source:{originalSource:'createCaseStory("2.20-message-summary-moved-to-long-description")',...(us=(ls=x.parameters)==null?void 0:ls.docs)==null?void 0:us.source}}};var ys,vs,fs;j.parameters={...j.parameters,docs:{...(ys=j.parameters)==null?void 0:ys.docs,source:{originalSource:'createCaseStory("3.1-message-bindings-add-one-more-binding")',...(fs=(vs=j.parameters)==null?void 0:vs.docs)==null?void 0:fs.source}}};var _s,bs,ws;C.parameters={...C.parameters,docs:{...(_s=C.parameters)==null?void 0:_s.docs,source:{originalSource:'createCaseStory("3.2-message-bindings-remove-one-of-several-bindings")',...(ws=(bs=C.parameters)==null?void 0:bs.docs)==null?void 0:ws.source}}};var Ts,Ms,xs;A.parameters={...A.parameters,docs:{...(Ts=A.parameters)==null?void 0:Ts.docs,source:{originalSource:'createCaseStory("3.3-message-bindings-add-bindings")',...(xs=(Ms=A.parameters)==null?void 0:Ms.docs)==null?void 0:xs.source}}};var js,Cs,As;k.parameters={...k.parameters,docs:{...(js=k.parameters)==null?void 0:js.docs,source:{originalSource:'createCaseStory("3.4-message-bindings-remove-bindings")',...(As=(Cs=k.parameters)==null?void 0:Cs.docs)==null?void 0:As.source}}};var ks,$s,Is;$.parameters={...$.parameters,docs:{...(ks=$.parameters)==null?void 0:ks.docs,source:{originalSource:'createCaseStory("4.1-message-bindings-kafka-bindingVersion-changed")',...(Is=($s=$.parameters)==null?void 0:$s.docs)==null?void 0:Is.source}}};var Ss,qs,Os;I.parameters={...I.parameters,docs:{...(Ss=I.parameters)==null?void 0:Ss.docs,source:{originalSource:'createCaseStory("4.2-message-bindings-kafka-bindingVersion-removed")',...(Os=(qs=I.parameters)==null?void 0:qs.docs)==null?void 0:Os.source}}};var Ps,Vs,Bs;S.parameters={...S.parameters,docs:{...(Ps=S.parameters)==null?void 0:Ps.docs,source:{originalSource:'createCaseStory("4.3-message-bindings-kafka-bindingVersion-added")',...(Bs=(Vs=S.parameters)==null?void 0:Vs.docs)==null?void 0:Bs.source}}};var Es,Ds,Ls;q.parameters={...q.parameters,docs:{...(Es=q.parameters)==null?void 0:Es.docs,source:{originalSource:'createCaseStory("5.1-message-bindings-kafka-internal-jso-changes")',...(Ls=(Ds=q.parameters)==null?void 0:Ds.docs)==null?void 0:Ls.source}}};var Gs,Ks,Ns;O.parameters={...O.parameters,docs:{...(Gs=O.parameters)==null?void 0:Gs.docs,source:{originalSource:'createCaseStory("6.1-message-x-second-added")',...(Ns=(Ks=O.parameters)==null?void 0:Ks.docs)==null?void 0:Ns.source}}};var zs,Fs,Hs;P.parameters={...P.parameters,docs:{...(zs=P.parameters)==null?void 0:zs.docs,source:{originalSource:'createCaseStory("6.2-message-x-second-removed")',...(Hs=(Fs=P.parameters)==null?void 0:Fs.docs)==null?void 0:Hs.source}}};var Rs,Js,Ys;V.parameters={...V.parameters,docs:{...(Rs=V.parameters)==null?void 0:Rs.docs,source:{originalSource:'createCaseStory("6.3-message-x-second-changed")',...(Ys=(Js=V.parameters)==null?void 0:Js.docs)==null?void 0:Ys.source}}};var Qs,Us,Ws;B.parameters={...B.parameters,docs:{...(Qs=B.parameters)==null?void 0:Qs.docs,source:{originalSource:'createCaseStory("6.4-message-x-first-and-x-second-added")',...(Ws=(Us=B.parameters)==null?void 0:Us.docs)==null?void 0:Ws.source}}};var Xs,Zs,en;E.parameters={...E.parameters,docs:{...(Xs=E.parameters)==null?void 0:Xs.docs,source:{originalSource:'createCaseStory("6.5-message-x-first-and-x-second-removed")',...(en=(Zs=E.parameters)==null?void 0:Zs.docs)==null?void 0:en.source}}};var sn,nn,tn;D.parameters={...D.parameters,docs:{...(sn=D.parameters)==null?void 0:sn.docs,source:{originalSource:'createCaseStory("7.1-message-headers-object-schema-added")',...(tn=(nn=D.parameters)==null?void 0:nn.docs)==null?void 0:tn.source}}};var an,rn,on;L.parameters={...L.parameters,docs:{...(an=L.parameters)==null?void 0:an.docs,source:{originalSource:'createCaseStory("7.2-message-headers-object-schema-removed")',...(on=(rn=L.parameters)==null?void 0:rn.docs)==null?void 0:on.source}}};var cn,dn,mn;G.parameters={...G.parameters,docs:{...(cn=G.parameters)==null?void 0:cn.docs,source:{originalSource:'createCaseStory("7.3-message-headers-description-changed")',...(mn=(dn=G.parameters)==null?void 0:dn.docs)==null?void 0:mn.source}}};var gn,hn,pn;K.parameters={...K.parameters,docs:{...(gn=K.parameters)==null?void 0:gn.docs,source:{originalSource:'createCaseStory("7.4-message-payload-object-schema-added")',...(pn=(hn=K.parameters)==null?void 0:hn.docs)==null?void 0:pn.source}}};var ln,un,yn;N.parameters={...N.parameters,docs:{...(ln=N.parameters)==null?void 0:ln.docs,source:{originalSource:'createCaseStory("7.5-message-payload-object-schema-removed")',...(yn=(un=N.parameters)==null?void 0:un.docs)==null?void 0:yn.source}}};var vn,fn,_n;z.parameters={...z.parameters,docs:{...(vn=z.parameters)==null?void 0:vn.docs,source:{originalSource:'createCaseStory("7.6-message-payload-description-changed")',...(_n=(fn=z.parameters)==null?void 0:fn.docs)==null?void 0:_n.source}}};var bn,wn,Tn;F.parameters={...F.parameters,docs:{...(bn=F.parameters)==null?void 0:bn.docs,source:{originalSource:'createCaseStory("8.1-message-headers-object-schema-added-extensions")',...(Tn=(wn=F.parameters)==null?void 0:wn.docs)==null?void 0:Tn.source}}};var Mn,xn,jn;H.parameters={...H.parameters,docs:{...(Mn=H.parameters)==null?void 0:Mn.docs,source:{originalSource:'createCaseStory("8.2-message-headers-object-schema-removed-extensions")',...(jn=(xn=H.parameters)==null?void 0:xn.docs)==null?void 0:jn.source}}};var Cn,An,kn;R.parameters={...R.parameters,docs:{...(Cn=R.parameters)==null?void 0:Cn.docs,source:{originalSource:'createCaseStory("8.3-message-headers-object-schema-changed-extensions")',...(kn=(An=R.parameters)==null?void 0:An.docs)==null?void 0:kn.source}}};var $n,In,Sn;J.parameters={...J.parameters,docs:{...($n=J.parameters)==null?void 0:$n.docs,source:{originalSource:'createCaseStory("8.4-message-headers-object-schema-added-property-with-extensions")',...(Sn=(In=J.parameters)==null?void 0:In.docs)==null?void 0:Sn.source}}};var qn,On,Pn;Y.parameters={...Y.parameters,docs:{...(qn=Y.parameters)==null?void 0:qn.docs,source:{originalSource:'createCaseStory("8.5-message-headers-object-schema-removed-property-with-extensions")',...(Pn=(On=Y.parameters)==null?void 0:On.docs)==null?void 0:Pn.source}}};var Vn,Bn,En;Q.parameters={...Q.parameters,docs:{...(Vn=Q.parameters)==null?void 0:Vn.docs,source:{originalSource:'createCaseStory("8.6-message-payload-object-schema-added-extensions")',...(En=(Bn=Q.parameters)==null?void 0:Bn.docs)==null?void 0:En.source}}};var Dn,Ln,Gn;U.parameters={...U.parameters,docs:{...(Dn=U.parameters)==null?void 0:Dn.docs,source:{originalSource:'createCaseStory("8.7-message-payload-object-schema-removed-extensions")',...(Gn=(Ln=U.parameters)==null?void 0:Ln.docs)==null?void 0:Gn.source}}};var Kn,Nn,zn;W.parameters={...W.parameters,docs:{...(Kn=W.parameters)==null?void 0:Kn.docs,source:{originalSource:'createCaseStory("8.8-message-payload-object-schema-changed-extensions")',...(zn=(Nn=W.parameters)==null?void 0:Nn.docs)==null?void 0:zn.source}}};var Fn,Hn,Rn;X.parameters={...X.parameters,docs:{...(Fn=X.parameters)==null?void 0:Fn.docs,source:{originalSource:'createCaseStory("8.9-message-payload-object-schema-added-property-with-extensions")',...(Rn=(Hn=X.parameters)==null?void 0:Hn.docs)==null?void 0:Rn.source}}};var Jn,Yn,Qn;Z.parameters={...Z.parameters,docs:{...(Jn=Z.parameters)==null?void 0:Jn.docs,source:{originalSource:'createCaseStory("8.10-message-payload-object-schema-removed-property-with-extensions")',...(Qn=(Yn=Z.parameters)==null?void 0:Yn.docs)==null?void 0:Qn.source}}};const xr=["Case_1_1_message_title_changed","Case_1_2_message_title_removed","Case_1_3_message_title_added","Case_2_1_message_description_changed","Case_2_2_message_description_removed","Case_2_3_message_description_added","Case_2_4_message_long_description_changed","Case_2_5_message_long_description_removed","Case_2_6_message_long_description_added","Case_2_7_message_summary_changed","Case_2_8_message_summary_removed","Case_2_9_message_summary_added","Case_2_10_message_long_summary_changed","Case_2_11_message_long_summary_removed","Case_2_12_message_long_summary_added","Case_2_13_message_description_moved_to_summary","Case_2_14_message_long_description_moved_to_summary","Case_2_15_message_long_description_moved_to_long_summary","Case_2_16_message_description_moved_to_long_summary","Case_2_17_message_summary_moved_to_description","Case_2_18_message_long_summary_moved_to_description","Case_2_19_message_long_summary_moved_to_long_description","Case_2_20_message_summary_moved_to_long_description","Case_3_1_message_bindings_add_one_more_binding","Case_3_2_message_bindings_remove_one_of_several_bindings","Case_3_3_message_bindings_add_bindings","Case_3_4_message_bindings_remove_bindings","Case_4_1_message_bindings_kafka_bindingVersion_changed","Case_4_2_message_bindings_kafka_bindingVersion_removed","Case_4_3_message_bindings_kafka_bindingVersion_added","Case_5_1_message_bindings_kafka_internal_jso_changes","Case_6_1_message_x_second_added","Case_6_2_message_x_second_removed","Case_6_3_message_x_second_changed","Case_6_4_message_x_first_and_x_second_added","Case_6_5_message_x_first_and_x_second_removed","Case_7_1_message_headers_object_schema_added","Case_7_2_message_headers_object_schema_removed","Case_7_3_message_headers_description_changed","Case_7_4_message_payload_object_schema_added","Case_7_5_message_payload_object_schema_removed","Case_7_6_message_payload_description_changed","Case_8_1_message_headers_object_schema_added_extensions","Case_8_2_message_headers_object_schema_removed_extensions","Case_8_3_message_headers_object_schema_changed_extensions","Case_8_4_message_headers_object_schema_added_property_with_extensions","Case_8_5_message_headers_object_schema_removed_property_with_extensions","Case_8_6_message_payload_object_schema_added_extensions","Case_8_7_message_payload_object_schema_removed_extensions","Case_8_8_message_payload_object_schema_changed_extensions","Case_8_9_message_payload_object_schema_added_property_with_extensions","Case_8_10_message_payload_object_schema_removed_property_with_extensions"];export{n as Case_1_1_message_title_changed,t as Case_1_2_message_title_removed,a as Case_1_3_message_title_added,l as Case_2_10_message_long_summary_changed,u as Case_2_11_message_long_summary_removed,y as Case_2_12_message_long_summary_added,v as Case_2_13_message_description_moved_to_summary,f as Case_2_14_message_long_description_moved_to_summary,_ as Case_2_15_message_long_description_moved_to_long_summary,b as Case_2_16_message_description_moved_to_long_summary,w as Case_2_17_message_summary_moved_to_description,T as Case_2_18_message_long_summary_moved_to_description,M as Case_2_19_message_long_summary_moved_to_long_description,r as Case_2_1_message_description_changed,x as Case_2_20_message_summary_moved_to_long_description,i as Case_2_2_message_description_removed,o as Case_2_3_message_description_added,c as Case_2_4_message_long_description_changed,d as Case_2_5_message_long_description_removed,m as Case_2_6_message_long_description_added,g as Case_2_7_message_summary_changed,h as Case_2_8_message_summary_removed,p as Case_2_9_message_summary_added,j as Case_3_1_message_bindings_add_one_more_binding,C as Case_3_2_message_bindings_remove_one_of_several_bindings,A as Case_3_3_message_bindings_add_bindings,k as Case_3_4_message_bindings_remove_bindings,$ as Case_4_1_message_bindings_kafka_bindingVersion_changed,I as Case_4_2_message_bindings_kafka_bindingVersion_removed,S as Case_4_3_message_bindings_kafka_bindingVersion_added,q as Case_5_1_message_bindings_kafka_internal_jso_changes,O as Case_6_1_message_x_second_added,P as Case_6_2_message_x_second_removed,V as Case_6_3_message_x_second_changed,B as Case_6_4_message_x_first_and_x_second_added,E as Case_6_5_message_x_first_and_x_second_removed,D as Case_7_1_message_headers_object_schema_added,L as Case_7_2_message_headers_object_schema_removed,G as Case_7_3_message_headers_description_changed,K as Case_7_4_message_payload_object_schema_added,N as Case_7_5_message_payload_object_schema_removed,z as Case_7_6_message_payload_description_changed,Z as Case_8_10_message_payload_object_schema_removed_property_with_extensions,F as Case_8_1_message_headers_object_schema_added_extensions,H as Case_8_2_message_headers_object_schema_removed_extensions,R as Case_8_3_message_headers_object_schema_changed_extensions,J as Case_8_4_message_headers_object_schema_added_property_with_extensions,Y as Case_8_5_message_headers_object_schema_removed_property_with_extensions,Q as Case_8_6_message_payload_object_schema_added_extensions,U as Case_8_7_message_payload_object_schema_removed_extensions,W as Case_8_8_message_payload_object_schema_changed_extensions,X as Case_8_9_message_payload_object_schema_added_property_with_extensions,xr as __namedExportsOrder,Mr as default};
