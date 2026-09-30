import{j as Xn}from"./_commonjs-dynamic-modules-6308e768.js";import{a as Yn}from"./AsyncApiOperationViewer-4b2b995c.js";import{c as Zn}from"./diffs-samples-cases-91c2d1e6.js";import{a as et,c as st,b as nt}from"./async-api-diffs-utils-592897d7.js";import{b as tt}from"./sample-cases-8c510854.js";import"./index-f46741a2.js";import"./UxBadge-a3d5708d.js";import"./IndexesNodeViewer-04e95f65.js";import"./DdlTableDiffsViewer-b5691702.js";/* empty css              */import"./DdlTableViewer-34306a32.js";import"./GraphQLOperationDiffViewer-b8487c17.js";import"./GraphPropNodeViewer-c64786c2.js";import"./index-415bee12.js";import"./GraphQLOperationViewer-7b86c0e8.js";import"./index-d5b0668c.js";import"./index-442a5f79.js";import"./preprocess-fae22708.js";import"./test-diff-meta-keys-5677f54d.js";import"./parse-yaml-source-3e95a000.js";import"./public-api-99af098d.js";const at=`asyncapi: 3.0.0
info:
  title: Sample AsyncAPI
  version: 1.0.0
channels:
  testChannel:
    address: events.default
    messages:
      TestMessage:
        $ref: '#/components/messages/TestMessage'
operations:
  sendOperation:
    action: send
    channel:
      $ref: '#/channels/testChannel'
    messages:
      - $ref: '#/components/messages/TestMessage'
components:
  messages:
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
operations:
  sendOperation:
    action: send
    channel:
      $ref: '#/channels/testChannel'
    messages:
      - $ref: '#/components/messages/TestMessage'
components:
  messages:
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
        description: before description
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
        description: payload object
        properties:
          id:
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
        x-first: first
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
        x-first: first-old
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
        description: payload object
        properties:
          id:
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
        description: after description
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
      headers:
        type: object
        description: headers object
        properties:
          traceId:
            type: string
        x-first: first-new
        x-third: third
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
          correlationId:
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
        x-first: first
        x-second: second
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
`,er=Object.assign({"../../../../samples/async-api-diffs/message/1.1-message-title-changed/before.yaml":at,"../../../../samples/async-api-diffs/message/1.2-message-title-removed/before.yaml":rt,"../../../../samples/async-api-diffs/message/1.3-message-title-added/before.yaml":it,"../../../../samples/async-api-diffs/message/2.1-message-description-changed/before.yaml":ot,"../../../../samples/async-api-diffs/message/2.10-message-long-summary-changed/before.yaml":ct,"../../../../samples/async-api-diffs/message/2.11-message-long-summary-removed/before.yaml":dt,"../../../../samples/async-api-diffs/message/2.12-message-long-summary-added/before.yaml":mt,"../../../../samples/async-api-diffs/message/2.13-message-description-moved-to-summary/before.yaml":gt,"../../../../samples/async-api-diffs/message/2.14-message-long-description-moved-to-summary/before.yaml":ht,"../../../../samples/async-api-diffs/message/2.15-message-long-description-moved-to-long-summary/before.yaml":pt,"../../../../samples/async-api-diffs/message/2.16-message-description-moved-to-long-summary/before.yaml":lt,"../../../../samples/async-api-diffs/message/2.17-message-summary-moved-to-description/before.yaml":ut,"../../../../samples/async-api-diffs/message/2.18-message-long-summary-moved-to-description/before.yaml":yt,"../../../../samples/async-api-diffs/message/2.19-message-long-summary-moved-to-long-description/before.yaml":vt,"../../../../samples/async-api-diffs/message/2.2-message-description-removed/before.yaml":ft,"../../../../samples/async-api-diffs/message/2.20-message-summary-moved-to-long-description/before.yaml":_t,"../../../../samples/async-api-diffs/message/2.3-message-description-added/before.yaml":bt,"../../../../samples/async-api-diffs/message/2.4-message-long-description-changed/before.yaml":wt,"../../../../samples/async-api-diffs/message/2.5-message-long-description-removed/before.yaml":Tt,"../../../../samples/async-api-diffs/message/2.6-message-long-description-added/before.yaml":Mt,"../../../../samples/async-api-diffs/message/2.7-message-summary-changed/before.yaml":xt,"../../../../samples/async-api-diffs/message/2.8-message-summary-removed/before.yaml":jt,"../../../../samples/async-api-diffs/message/2.9-message-summary-added/before.yaml":Ct,"../../../../samples/async-api-diffs/message/3.1-message-bindings-add-one-more-binding/before.yaml":At,"../../../../samples/async-api-diffs/message/3.2-message-bindings-remove-one-of-several-bindings/before.yaml":kt,"../../../../samples/async-api-diffs/message/3.3-message-bindings-add-bindings/before.yaml":$t,"../../../../samples/async-api-diffs/message/3.4-message-bindings-remove-bindings/before.yaml":It,"../../../../samples/async-api-diffs/message/4.1-message-bindings-kafka-bindingVersion-changed/before.yaml":St,"../../../../samples/async-api-diffs/message/4.2-message-bindings-kafka-bindingVersion-removed/before.yaml":qt,"../../../../samples/async-api-diffs/message/4.3-message-bindings-kafka-bindingVersion-added/before.yaml":Ot,"../../../../samples/async-api-diffs/message/5.1-message-bindings-kafka-internal-jso-changes/before.yaml":Pt,"../../../../samples/async-api-diffs/message/6.1-message-x-second-added/before.yaml":Vt,"../../../../samples/async-api-diffs/message/6.2-message-x-second-removed/before.yaml":Bt,"../../../../samples/async-api-diffs/message/6.3-message-x-second-changed/before.yaml":Et,"../../../../samples/async-api-diffs/message/6.4-message-x-first-and-x-second-added/before.yaml":Dt,"../../../../samples/async-api-diffs/message/6.5-message-x-first-and-x-second-removed/before.yaml":Lt,"../../../../samples/async-api-diffs/message/7.1-message-headers-object-schema-added/before.yaml":zt,"../../../../samples/async-api-diffs/message/7.2-message-headers-object-schema-removed/before.yaml":Ft,"../../../../samples/async-api-diffs/message/7.3-message-headers-description-changed/before.yaml":Gt,"../../../../samples/async-api-diffs/message/7.4-message-payload-object-schema-added/before.yaml":Ht,"../../../../samples/async-api-diffs/message/7.5-message-payload-object-schema-removed/before.yaml":Nt,"../../../../samples/async-api-diffs/message/7.6-message-payload-description-changed/before.yaml":Jt,"../../../../samples/async-api-diffs/message/8.1-message-headers-object-schema-added-extensions/before.yaml":Rt,"../../../../samples/async-api-diffs/message/8.10-message-payload-object-schema-removed-property-with-extensions/before.yaml":Kt,"../../../../samples/async-api-diffs/message/8.2-message-headers-object-schema-removed-extensions/before.yaml":Qt,"../../../../samples/async-api-diffs/message/8.3-message-headers-object-schema-changed-extensions/before.yaml":Ut,"../../../../samples/async-api-diffs/message/8.4-message-headers-object-schema-added-property-with-extensions/before.yaml":Wt,"../../../../samples/async-api-diffs/message/8.5-message-headers-object-schema-removed-property-with-extensions/before.yaml":Xt,"../../../../samples/async-api-diffs/message/8.6-message-payload-object-schema-added-extensions/before.yaml":Yt,"../../../../samples/async-api-diffs/message/8.7-message-payload-object-schema-removed-extensions/before.yaml":Zt,"../../../../samples/async-api-diffs/message/8.8-message-payload-object-schema-changed-extensions/before.yaml":ea,"../../../../samples/async-api-diffs/message/8.9-message-payload-object-schema-added-property-with-extensions/before.yaml":sa}),sr=Object.assign({"../../../../samples/async-api-diffs/message/1.1-message-title-changed/after.yaml":na,"../../../../samples/async-api-diffs/message/1.2-message-title-removed/after.yaml":ta,"../../../../samples/async-api-diffs/message/1.3-message-title-added/after.yaml":aa,"../../../../samples/async-api-diffs/message/2.1-message-description-changed/after.yaml":ra,"../../../../samples/async-api-diffs/message/2.10-message-long-summary-changed/after.yaml":ia,"../../../../samples/async-api-diffs/message/2.11-message-long-summary-removed/after.yaml":oa,"../../../../samples/async-api-diffs/message/2.12-message-long-summary-added/after.yaml":ca,"../../../../samples/async-api-diffs/message/2.13-message-description-moved-to-summary/after.yaml":da,"../../../../samples/async-api-diffs/message/2.14-message-long-description-moved-to-summary/after.yaml":ma,"../../../../samples/async-api-diffs/message/2.15-message-long-description-moved-to-long-summary/after.yaml":ga,"../../../../samples/async-api-diffs/message/2.16-message-description-moved-to-long-summary/after.yaml":ha,"../../../../samples/async-api-diffs/message/2.17-message-summary-moved-to-description/after.yaml":pa,"../../../../samples/async-api-diffs/message/2.18-message-long-summary-moved-to-description/after.yaml":la,"../../../../samples/async-api-diffs/message/2.19-message-long-summary-moved-to-long-description/after.yaml":ua,"../../../../samples/async-api-diffs/message/2.2-message-description-removed/after.yaml":ya,"../../../../samples/async-api-diffs/message/2.20-message-summary-moved-to-long-description/after.yaml":va,"../../../../samples/async-api-diffs/message/2.3-message-description-added/after.yaml":fa,"../../../../samples/async-api-diffs/message/2.4-message-long-description-changed/after.yaml":_a,"../../../../samples/async-api-diffs/message/2.5-message-long-description-removed/after.yaml":ba,"../../../../samples/async-api-diffs/message/2.6-message-long-description-added/after.yaml":wa,"../../../../samples/async-api-diffs/message/2.7-message-summary-changed/after.yaml":Ta,"../../../../samples/async-api-diffs/message/2.8-message-summary-removed/after.yaml":Ma,"../../../../samples/async-api-diffs/message/2.9-message-summary-added/after.yaml":xa,"../../../../samples/async-api-diffs/message/3.1-message-bindings-add-one-more-binding/after.yaml":ja,"../../../../samples/async-api-diffs/message/3.2-message-bindings-remove-one-of-several-bindings/after.yaml":Ca,"../../../../samples/async-api-diffs/message/3.3-message-bindings-add-bindings/after.yaml":Aa,"../../../../samples/async-api-diffs/message/3.4-message-bindings-remove-bindings/after.yaml":ka,"../../../../samples/async-api-diffs/message/4.1-message-bindings-kafka-bindingVersion-changed/after.yaml":$a,"../../../../samples/async-api-diffs/message/4.2-message-bindings-kafka-bindingVersion-removed/after.yaml":Ia,"../../../../samples/async-api-diffs/message/4.3-message-bindings-kafka-bindingVersion-added/after.yaml":Sa,"../../../../samples/async-api-diffs/message/5.1-message-bindings-kafka-internal-jso-changes/after.yaml":qa,"../../../../samples/async-api-diffs/message/6.1-message-x-second-added/after.yaml":Oa,"../../../../samples/async-api-diffs/message/6.2-message-x-second-removed/after.yaml":Pa,"../../../../samples/async-api-diffs/message/6.3-message-x-second-changed/after.yaml":Va,"../../../../samples/async-api-diffs/message/6.4-message-x-first-and-x-second-added/after.yaml":Ba,"../../../../samples/async-api-diffs/message/6.5-message-x-first-and-x-second-removed/after.yaml":Ea,"../../../../samples/async-api-diffs/message/7.1-message-headers-object-schema-added/after.yaml":Da,"../../../../samples/async-api-diffs/message/7.2-message-headers-object-schema-removed/after.yaml":La,"../../../../samples/async-api-diffs/message/7.3-message-headers-description-changed/after.yaml":za,"../../../../samples/async-api-diffs/message/7.4-message-payload-object-schema-added/after.yaml":Fa,"../../../../samples/async-api-diffs/message/7.5-message-payload-object-schema-removed/after.yaml":Ga,"../../../../samples/async-api-diffs/message/7.6-message-payload-description-changed/after.yaml":Ha,"../../../../samples/async-api-diffs/message/8.1-message-headers-object-schema-added-extensions/after.yaml":Na,"../../../../samples/async-api-diffs/message/8.10-message-payload-object-schema-removed-property-with-extensions/after.yaml":Ja,"../../../../samples/async-api-diffs/message/8.2-message-headers-object-schema-removed-extensions/after.yaml":Ra,"../../../../samples/async-api-diffs/message/8.3-message-headers-object-schema-changed-extensions/after.yaml":Ka,"../../../../samples/async-api-diffs/message/8.4-message-headers-object-schema-added-property-with-extensions/after.yaml":Qa,"../../../../samples/async-api-diffs/message/8.5-message-headers-object-schema-removed-property-with-extensions/after.yaml":Ua,"../../../../samples/async-api-diffs/message/8.6-message-payload-object-schema-added-extensions/after.yaml":Wa,"../../../../samples/async-api-diffs/message/8.7-message-payload-object-schema-removed-extensions/after.yaml":Xa,"../../../../samples/async-api-diffs/message/8.8-message-payload-object-schema-changed-extensions/after.yaml":Ya,"../../../../samples/async-api-diffs/message/8.9-message-payload-object-schema-added-property-with-extensions/after.yaml":Za}),nr=Zn(er,sr),tr=tt(nr),Un=({beforeYaml:Z,afterYaml:Wn})=>Xn.jsx(Yn,{...st(Z,Wn)}),Cr={title:"Async API Diffs Suite/Message Samples",component:Un,argTypes:et},ar=nt(Un,tr),e=Z=>ar(Z),s=e("1.1-message-title-changed"),n=e("1.2-message-title-removed"),t=e("1.3-message-title-added"),a=e("2.1-message-description-changed"),r=e("2.2-message-description-removed"),i=e("2.3-message-description-added"),o=e("2.4-message-long-description-changed"),c=e("2.5-message-long-description-removed"),d=e("2.6-message-long-description-added"),m=e("2.7-message-summary-changed"),g=e("2.8-message-summary-removed"),h=e("2.9-message-summary-added"),p=e("2.10-message-long-summary-changed"),l=e("2.11-message-long-summary-removed"),u=e("2.12-message-long-summary-added"),y=e("2.13-message-description-moved-to-summary"),v=e("2.14-message-long-description-moved-to-summary"),f=e("2.15-message-long-description-moved-to-long-summary"),_=e("2.16-message-description-moved-to-long-summary"),b=e("2.17-message-summary-moved-to-description"),w=e("2.18-message-long-summary-moved-to-description"),T=e("2.19-message-long-summary-moved-to-long-description"),M=e("2.20-message-summary-moved-to-long-description"),x=e("3.1-message-bindings-add-one-more-binding"),j=e("3.2-message-bindings-remove-one-of-several-bindings"),C=e("3.3-message-bindings-add-bindings"),A=e("3.4-message-bindings-remove-bindings"),k=e("4.1-message-bindings-kafka-bindingVersion-changed"),$=e("4.2-message-bindings-kafka-bindingVersion-removed"),I=e("4.3-message-bindings-kafka-bindingVersion-added"),S=e("5.1-message-bindings-kafka-internal-jso-changes"),q=e("6.1-message-x-second-added"),O=e("6.2-message-x-second-removed"),P=e("6.3-message-x-second-changed"),V=e("6.4-message-x-first-and-x-second-added"),B=e("6.5-message-x-first-and-x-second-removed"),E=e("7.1-message-headers-object-schema-added"),D=e("7.2-message-headers-object-schema-removed"),L=e("7.3-message-headers-description-changed"),z=e("7.4-message-payload-object-schema-added"),F=e("7.5-message-payload-object-schema-removed"),G=e("7.6-message-payload-description-changed"),H=e("8.1-message-headers-object-schema-added-extensions"),N=e("8.2-message-headers-object-schema-removed-extensions"),J=e("8.3-message-headers-object-schema-changed-extensions"),R=e("8.4-message-headers-object-schema-added-property-with-extensions"),K=e("8.5-message-headers-object-schema-removed-property-with-extensions"),Q=e("8.6-message-payload-object-schema-added-extensions"),U=e("8.7-message-payload-object-schema-removed-extensions"),W=e("8.8-message-payload-object-schema-changed-extensions"),X=e("8.9-message-payload-object-schema-added-property-with-extensions"),Y=e("8.10-message-payload-object-schema-removed-property-with-extensions");var ee,se,ne;s.parameters={...s.parameters,docs:{...(ee=s.parameters)==null?void 0:ee.docs,source:{originalSource:'createCaseStory("1.1-message-title-changed")',...(ne=(se=s.parameters)==null?void 0:se.docs)==null?void 0:ne.source}}};var te,ae,re;n.parameters={...n.parameters,docs:{...(te=n.parameters)==null?void 0:te.docs,source:{originalSource:'createCaseStory("1.2-message-title-removed")',...(re=(ae=n.parameters)==null?void 0:ae.docs)==null?void 0:re.source}}};var ie,oe,ce;t.parameters={...t.parameters,docs:{...(ie=t.parameters)==null?void 0:ie.docs,source:{originalSource:'createCaseStory("1.3-message-title-added")',...(ce=(oe=t.parameters)==null?void 0:oe.docs)==null?void 0:ce.source}}};var de,me,ge;a.parameters={...a.parameters,docs:{...(de=a.parameters)==null?void 0:de.docs,source:{originalSource:'createCaseStory("2.1-message-description-changed")',...(ge=(me=a.parameters)==null?void 0:me.docs)==null?void 0:ge.source}}};var he,pe,le;r.parameters={...r.parameters,docs:{...(he=r.parameters)==null?void 0:he.docs,source:{originalSource:'createCaseStory("2.2-message-description-removed")',...(le=(pe=r.parameters)==null?void 0:pe.docs)==null?void 0:le.source}}};var ue,ye,ve;i.parameters={...i.parameters,docs:{...(ue=i.parameters)==null?void 0:ue.docs,source:{originalSource:'createCaseStory("2.3-message-description-added")',...(ve=(ye=i.parameters)==null?void 0:ye.docs)==null?void 0:ve.source}}};var fe,_e,be;o.parameters={...o.parameters,docs:{...(fe=o.parameters)==null?void 0:fe.docs,source:{originalSource:'createCaseStory("2.4-message-long-description-changed")',...(be=(_e=o.parameters)==null?void 0:_e.docs)==null?void 0:be.source}}};var we,Te,Me;c.parameters={...c.parameters,docs:{...(we=c.parameters)==null?void 0:we.docs,source:{originalSource:'createCaseStory("2.5-message-long-description-removed")',...(Me=(Te=c.parameters)==null?void 0:Te.docs)==null?void 0:Me.source}}};var xe,je,Ce;d.parameters={...d.parameters,docs:{...(xe=d.parameters)==null?void 0:xe.docs,source:{originalSource:'createCaseStory("2.6-message-long-description-added")',...(Ce=(je=d.parameters)==null?void 0:je.docs)==null?void 0:Ce.source}}};var Ae,ke,$e;m.parameters={...m.parameters,docs:{...(Ae=m.parameters)==null?void 0:Ae.docs,source:{originalSource:'createCaseStory("2.7-message-summary-changed")',...($e=(ke=m.parameters)==null?void 0:ke.docs)==null?void 0:$e.source}}};var Ie,Se,qe;g.parameters={...g.parameters,docs:{...(Ie=g.parameters)==null?void 0:Ie.docs,source:{originalSource:'createCaseStory("2.8-message-summary-removed")',...(qe=(Se=g.parameters)==null?void 0:Se.docs)==null?void 0:qe.source}}};var Oe,Pe,Ve;h.parameters={...h.parameters,docs:{...(Oe=h.parameters)==null?void 0:Oe.docs,source:{originalSource:'createCaseStory("2.9-message-summary-added")',...(Ve=(Pe=h.parameters)==null?void 0:Pe.docs)==null?void 0:Ve.source}}};var Be,Ee,De;p.parameters={...p.parameters,docs:{...(Be=p.parameters)==null?void 0:Be.docs,source:{originalSource:'createCaseStory("2.10-message-long-summary-changed")',...(De=(Ee=p.parameters)==null?void 0:Ee.docs)==null?void 0:De.source}}};var Le,ze,Fe;l.parameters={...l.parameters,docs:{...(Le=l.parameters)==null?void 0:Le.docs,source:{originalSource:'createCaseStory("2.11-message-long-summary-removed")',...(Fe=(ze=l.parameters)==null?void 0:ze.docs)==null?void 0:Fe.source}}};var Ge,He,Ne;u.parameters={...u.parameters,docs:{...(Ge=u.parameters)==null?void 0:Ge.docs,source:{originalSource:'createCaseStory("2.12-message-long-summary-added")',...(Ne=(He=u.parameters)==null?void 0:He.docs)==null?void 0:Ne.source}}};var Je,Re,Ke;y.parameters={...y.parameters,docs:{...(Je=y.parameters)==null?void 0:Je.docs,source:{originalSource:'createCaseStory("2.13-message-description-moved-to-summary")',...(Ke=(Re=y.parameters)==null?void 0:Re.docs)==null?void 0:Ke.source}}};var Qe,Ue,We;v.parameters={...v.parameters,docs:{...(Qe=v.parameters)==null?void 0:Qe.docs,source:{originalSource:'createCaseStory("2.14-message-long-description-moved-to-summary")',...(We=(Ue=v.parameters)==null?void 0:Ue.docs)==null?void 0:We.source}}};var Xe,Ye,Ze;f.parameters={...f.parameters,docs:{...(Xe=f.parameters)==null?void 0:Xe.docs,source:{originalSource:'createCaseStory("2.15-message-long-description-moved-to-long-summary")',...(Ze=(Ye=f.parameters)==null?void 0:Ye.docs)==null?void 0:Ze.source}}};var es,ss,ns;_.parameters={..._.parameters,docs:{...(es=_.parameters)==null?void 0:es.docs,source:{originalSource:'createCaseStory("2.16-message-description-moved-to-long-summary")',...(ns=(ss=_.parameters)==null?void 0:ss.docs)==null?void 0:ns.source}}};var ts,as,rs;b.parameters={...b.parameters,docs:{...(ts=b.parameters)==null?void 0:ts.docs,source:{originalSource:'createCaseStory("2.17-message-summary-moved-to-description")',...(rs=(as=b.parameters)==null?void 0:as.docs)==null?void 0:rs.source}}};var is,os,cs;w.parameters={...w.parameters,docs:{...(is=w.parameters)==null?void 0:is.docs,source:{originalSource:'createCaseStory("2.18-message-long-summary-moved-to-description")',...(cs=(os=w.parameters)==null?void 0:os.docs)==null?void 0:cs.source}}};var ds,ms,gs;T.parameters={...T.parameters,docs:{...(ds=T.parameters)==null?void 0:ds.docs,source:{originalSource:'createCaseStory("2.19-message-long-summary-moved-to-long-description")',...(gs=(ms=T.parameters)==null?void 0:ms.docs)==null?void 0:gs.source}}};var hs,ps,ls;M.parameters={...M.parameters,docs:{...(hs=M.parameters)==null?void 0:hs.docs,source:{originalSource:'createCaseStory("2.20-message-summary-moved-to-long-description")',...(ls=(ps=M.parameters)==null?void 0:ps.docs)==null?void 0:ls.source}}};var us,ys,vs;x.parameters={...x.parameters,docs:{...(us=x.parameters)==null?void 0:us.docs,source:{originalSource:'createCaseStory("3.1-message-bindings-add-one-more-binding")',...(vs=(ys=x.parameters)==null?void 0:ys.docs)==null?void 0:vs.source}}};var fs,_s,bs;j.parameters={...j.parameters,docs:{...(fs=j.parameters)==null?void 0:fs.docs,source:{originalSource:'createCaseStory("3.2-message-bindings-remove-one-of-several-bindings")',...(bs=(_s=j.parameters)==null?void 0:_s.docs)==null?void 0:bs.source}}};var ws,Ts,Ms;C.parameters={...C.parameters,docs:{...(ws=C.parameters)==null?void 0:ws.docs,source:{originalSource:'createCaseStory("3.3-message-bindings-add-bindings")',...(Ms=(Ts=C.parameters)==null?void 0:Ts.docs)==null?void 0:Ms.source}}};var xs,js,Cs;A.parameters={...A.parameters,docs:{...(xs=A.parameters)==null?void 0:xs.docs,source:{originalSource:'createCaseStory("3.4-message-bindings-remove-bindings")',...(Cs=(js=A.parameters)==null?void 0:js.docs)==null?void 0:Cs.source}}};var As,ks,$s;k.parameters={...k.parameters,docs:{...(As=k.parameters)==null?void 0:As.docs,source:{originalSource:'createCaseStory("4.1-message-bindings-kafka-bindingVersion-changed")',...($s=(ks=k.parameters)==null?void 0:ks.docs)==null?void 0:$s.source}}};var Is,Ss,qs;$.parameters={...$.parameters,docs:{...(Is=$.parameters)==null?void 0:Is.docs,source:{originalSource:'createCaseStory("4.2-message-bindings-kafka-bindingVersion-removed")',...(qs=(Ss=$.parameters)==null?void 0:Ss.docs)==null?void 0:qs.source}}};var Os,Ps,Vs;I.parameters={...I.parameters,docs:{...(Os=I.parameters)==null?void 0:Os.docs,source:{originalSource:'createCaseStory("4.3-message-bindings-kafka-bindingVersion-added")',...(Vs=(Ps=I.parameters)==null?void 0:Ps.docs)==null?void 0:Vs.source}}};var Bs,Es,Ds;S.parameters={...S.parameters,docs:{...(Bs=S.parameters)==null?void 0:Bs.docs,source:{originalSource:'createCaseStory("5.1-message-bindings-kafka-internal-jso-changes")',...(Ds=(Es=S.parameters)==null?void 0:Es.docs)==null?void 0:Ds.source}}};var Ls,zs,Fs;q.parameters={...q.parameters,docs:{...(Ls=q.parameters)==null?void 0:Ls.docs,source:{originalSource:'createCaseStory("6.1-message-x-second-added")',...(Fs=(zs=q.parameters)==null?void 0:zs.docs)==null?void 0:Fs.source}}};var Gs,Hs,Ns;O.parameters={...O.parameters,docs:{...(Gs=O.parameters)==null?void 0:Gs.docs,source:{originalSource:'createCaseStory("6.2-message-x-second-removed")',...(Ns=(Hs=O.parameters)==null?void 0:Hs.docs)==null?void 0:Ns.source}}};var Js,Rs,Ks;P.parameters={...P.parameters,docs:{...(Js=P.parameters)==null?void 0:Js.docs,source:{originalSource:'createCaseStory("6.3-message-x-second-changed")',...(Ks=(Rs=P.parameters)==null?void 0:Rs.docs)==null?void 0:Ks.source}}};var Qs,Us,Ws;V.parameters={...V.parameters,docs:{...(Qs=V.parameters)==null?void 0:Qs.docs,source:{originalSource:'createCaseStory("6.4-message-x-first-and-x-second-added")',...(Ws=(Us=V.parameters)==null?void 0:Us.docs)==null?void 0:Ws.source}}};var Xs,Ys,Zs;B.parameters={...B.parameters,docs:{...(Xs=B.parameters)==null?void 0:Xs.docs,source:{originalSource:'createCaseStory("6.5-message-x-first-and-x-second-removed")',...(Zs=(Ys=B.parameters)==null?void 0:Ys.docs)==null?void 0:Zs.source}}};var en,sn,nn;E.parameters={...E.parameters,docs:{...(en=E.parameters)==null?void 0:en.docs,source:{originalSource:'createCaseStory("7.1-message-headers-object-schema-added")',...(nn=(sn=E.parameters)==null?void 0:sn.docs)==null?void 0:nn.source}}};var tn,an,rn;D.parameters={...D.parameters,docs:{...(tn=D.parameters)==null?void 0:tn.docs,source:{originalSource:'createCaseStory("7.2-message-headers-object-schema-removed")',...(rn=(an=D.parameters)==null?void 0:an.docs)==null?void 0:rn.source}}};var on,cn,dn;L.parameters={...L.parameters,docs:{...(on=L.parameters)==null?void 0:on.docs,source:{originalSource:'createCaseStory("7.3-message-headers-description-changed")',...(dn=(cn=L.parameters)==null?void 0:cn.docs)==null?void 0:dn.source}}};var mn,gn,hn;z.parameters={...z.parameters,docs:{...(mn=z.parameters)==null?void 0:mn.docs,source:{originalSource:'createCaseStory("7.4-message-payload-object-schema-added")',...(hn=(gn=z.parameters)==null?void 0:gn.docs)==null?void 0:hn.source}}};var pn,ln,un;F.parameters={...F.parameters,docs:{...(pn=F.parameters)==null?void 0:pn.docs,source:{originalSource:'createCaseStory("7.5-message-payload-object-schema-removed")',...(un=(ln=F.parameters)==null?void 0:ln.docs)==null?void 0:un.source}}};var yn,vn,fn;G.parameters={...G.parameters,docs:{...(yn=G.parameters)==null?void 0:yn.docs,source:{originalSource:'createCaseStory("7.6-message-payload-description-changed")',...(fn=(vn=G.parameters)==null?void 0:vn.docs)==null?void 0:fn.source}}};var _n,bn,wn;H.parameters={...H.parameters,docs:{...(_n=H.parameters)==null?void 0:_n.docs,source:{originalSource:'createCaseStory("8.1-message-headers-object-schema-added-extensions")',...(wn=(bn=H.parameters)==null?void 0:bn.docs)==null?void 0:wn.source}}};var Tn,Mn,xn;N.parameters={...N.parameters,docs:{...(Tn=N.parameters)==null?void 0:Tn.docs,source:{originalSource:'createCaseStory("8.2-message-headers-object-schema-removed-extensions")',...(xn=(Mn=N.parameters)==null?void 0:Mn.docs)==null?void 0:xn.source}}};var jn,Cn,An;J.parameters={...J.parameters,docs:{...(jn=J.parameters)==null?void 0:jn.docs,source:{originalSource:'createCaseStory("8.3-message-headers-object-schema-changed-extensions")',...(An=(Cn=J.parameters)==null?void 0:Cn.docs)==null?void 0:An.source}}};var kn,$n,In;R.parameters={...R.parameters,docs:{...(kn=R.parameters)==null?void 0:kn.docs,source:{originalSource:'createCaseStory("8.4-message-headers-object-schema-added-property-with-extensions")',...(In=($n=R.parameters)==null?void 0:$n.docs)==null?void 0:In.source}}};var Sn,qn,On;K.parameters={...K.parameters,docs:{...(Sn=K.parameters)==null?void 0:Sn.docs,source:{originalSource:'createCaseStory("8.5-message-headers-object-schema-removed-property-with-extensions")',...(On=(qn=K.parameters)==null?void 0:qn.docs)==null?void 0:On.source}}};var Pn,Vn,Bn;Q.parameters={...Q.parameters,docs:{...(Pn=Q.parameters)==null?void 0:Pn.docs,source:{originalSource:'createCaseStory("8.6-message-payload-object-schema-added-extensions")',...(Bn=(Vn=Q.parameters)==null?void 0:Vn.docs)==null?void 0:Bn.source}}};var En,Dn,Ln;U.parameters={...U.parameters,docs:{...(En=U.parameters)==null?void 0:En.docs,source:{originalSource:'createCaseStory("8.7-message-payload-object-schema-removed-extensions")',...(Ln=(Dn=U.parameters)==null?void 0:Dn.docs)==null?void 0:Ln.source}}};var zn,Fn,Gn;W.parameters={...W.parameters,docs:{...(zn=W.parameters)==null?void 0:zn.docs,source:{originalSource:'createCaseStory("8.8-message-payload-object-schema-changed-extensions")',...(Gn=(Fn=W.parameters)==null?void 0:Fn.docs)==null?void 0:Gn.source}}};var Hn,Nn,Jn;X.parameters={...X.parameters,docs:{...(Hn=X.parameters)==null?void 0:Hn.docs,source:{originalSource:'createCaseStory("8.9-message-payload-object-schema-added-property-with-extensions")',...(Jn=(Nn=X.parameters)==null?void 0:Nn.docs)==null?void 0:Jn.source}}};var Rn,Kn,Qn;Y.parameters={...Y.parameters,docs:{...(Rn=Y.parameters)==null?void 0:Rn.docs,source:{originalSource:'createCaseStory("8.10-message-payload-object-schema-removed-property-with-extensions")',...(Qn=(Kn=Y.parameters)==null?void 0:Kn.docs)==null?void 0:Qn.source}}};const Ar=["Case_1_1_message_title_changed","Case_1_2_message_title_removed","Case_1_3_message_title_added","Case_2_1_message_description_changed","Case_2_2_message_description_removed","Case_2_3_message_description_added","Case_2_4_message_long_description_changed","Case_2_5_message_long_description_removed","Case_2_6_message_long_description_added","Case_2_7_message_summary_changed","Case_2_8_message_summary_removed","Case_2_9_message_summary_added","Case_2_10_message_long_summary_changed","Case_2_11_message_long_summary_removed","Case_2_12_message_long_summary_added","Case_2_13_message_description_moved_to_summary","Case_2_14_message_long_description_moved_to_summary","Case_2_15_message_long_description_moved_to_long_summary","Case_2_16_message_description_moved_to_long_summary","Case_2_17_message_summary_moved_to_description","Case_2_18_message_long_summary_moved_to_description","Case_2_19_message_long_summary_moved_to_long_description","Case_2_20_message_summary_moved_to_long_description","Case_3_1_message_bindings_add_one_more_binding","Case_3_2_message_bindings_remove_one_of_several_bindings","Case_3_3_message_bindings_add_bindings","Case_3_4_message_bindings_remove_bindings","Case_4_1_message_bindings_kafka_bindingVersion_changed","Case_4_2_message_bindings_kafka_bindingVersion_removed","Case_4_3_message_bindings_kafka_bindingVersion_added","Case_5_1_message_bindings_kafka_internal_jso_changes","Case_6_1_message_x_second_added","Case_6_2_message_x_second_removed","Case_6_3_message_x_second_changed","Case_6_4_message_x_first_and_x_second_added","Case_6_5_message_x_first_and_x_second_removed","Case_7_1_message_headers_object_schema_added","Case_7_2_message_headers_object_schema_removed","Case_7_3_message_headers_description_changed","Case_7_4_message_payload_object_schema_added","Case_7_5_message_payload_object_schema_removed","Case_7_6_message_payload_description_changed","Case_8_1_message_headers_object_schema_added_extensions","Case_8_2_message_headers_object_schema_removed_extensions","Case_8_3_message_headers_object_schema_changed_extensions","Case_8_4_message_headers_object_schema_added_property_with_extensions","Case_8_5_message_headers_object_schema_removed_property_with_extensions","Case_8_6_message_payload_object_schema_added_extensions","Case_8_7_message_payload_object_schema_removed_extensions","Case_8_8_message_payload_object_schema_changed_extensions","Case_8_9_message_payload_object_schema_added_property_with_extensions","Case_8_10_message_payload_object_schema_removed_property_with_extensions"];export{s as Case_1_1_message_title_changed,n as Case_1_2_message_title_removed,t as Case_1_3_message_title_added,p as Case_2_10_message_long_summary_changed,l as Case_2_11_message_long_summary_removed,u as Case_2_12_message_long_summary_added,y as Case_2_13_message_description_moved_to_summary,v as Case_2_14_message_long_description_moved_to_summary,f as Case_2_15_message_long_description_moved_to_long_summary,_ as Case_2_16_message_description_moved_to_long_summary,b as Case_2_17_message_summary_moved_to_description,w as Case_2_18_message_long_summary_moved_to_description,T as Case_2_19_message_long_summary_moved_to_long_description,a as Case_2_1_message_description_changed,M as Case_2_20_message_summary_moved_to_long_description,r as Case_2_2_message_description_removed,i as Case_2_3_message_description_added,o as Case_2_4_message_long_description_changed,c as Case_2_5_message_long_description_removed,d as Case_2_6_message_long_description_added,m as Case_2_7_message_summary_changed,g as Case_2_8_message_summary_removed,h as Case_2_9_message_summary_added,x as Case_3_1_message_bindings_add_one_more_binding,j as Case_3_2_message_bindings_remove_one_of_several_bindings,C as Case_3_3_message_bindings_add_bindings,A as Case_3_4_message_bindings_remove_bindings,k as Case_4_1_message_bindings_kafka_bindingVersion_changed,$ as Case_4_2_message_bindings_kafka_bindingVersion_removed,I as Case_4_3_message_bindings_kafka_bindingVersion_added,S as Case_5_1_message_bindings_kafka_internal_jso_changes,q as Case_6_1_message_x_second_added,O as Case_6_2_message_x_second_removed,P as Case_6_3_message_x_second_changed,V as Case_6_4_message_x_first_and_x_second_added,B as Case_6_5_message_x_first_and_x_second_removed,E as Case_7_1_message_headers_object_schema_added,D as Case_7_2_message_headers_object_schema_removed,L as Case_7_3_message_headers_description_changed,z as Case_7_4_message_payload_object_schema_added,F as Case_7_5_message_payload_object_schema_removed,G as Case_7_6_message_payload_description_changed,Y as Case_8_10_message_payload_object_schema_removed_property_with_extensions,H as Case_8_1_message_headers_object_schema_added_extensions,N as Case_8_2_message_headers_object_schema_removed_extensions,J as Case_8_3_message_headers_object_schema_changed_extensions,R as Case_8_4_message_headers_object_schema_added_property_with_extensions,K as Case_8_5_message_headers_object_schema_removed_property_with_extensions,Q as Case_8_6_message_payload_object_schema_added_extensions,U as Case_8_7_message_payload_object_schema_removed_extensions,W as Case_8_8_message_payload_object_schema_changed_extensions,X as Case_8_9_message_payload_object_schema_added_property_with_extensions,Ar as __namedExportsOrder,Cr as default};
