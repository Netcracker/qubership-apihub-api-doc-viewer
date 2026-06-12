import{j as y}from"./_commonjs-dynamic-modules-6308e768.js";import{a as pe}from"./AsyncApiOperationViewer-2714e842.js";import{c as de}from"./parse-yaml-source-2575e8ef.js";import{c as ge,a as ve,b as fe}from"./async-api-diffs-utils-c3758d61.js";import"./index-f46741a2.js";import"./GraphPropNodeViewer-85a44f20.js";import"./index-415bee12.js";import"./GraphQLOperationDiffViewer-5c5ab323.js";import"./GraphQLOperationViewer-92304b6d.js";import"./js-yaml-71a24e1f.js";import"./index-d5b0668c.js";import"./index-442a5f79.js";import"./preprocess-318649c5.js";const _e=`asyncapi: 3.0.0
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
`,he=`asyncapi: 3.0.0
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
`,ye=`asyncapi: 3.0.0
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
`,be=`asyncapi: 3.0.0
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
        schemaRegistryUrl: https://schema-registry.example.com
        schemaRegistryVendor: confluent
`,ke=`asyncapi: 3.0.0
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
        schemaRegistryUrl: https://schema-registry.example.com
        schemaRegistryVendor: confluent
      amqp:
        bindingVersion: 0.3.0
        connectionName: sample-server-connection
`,Me=`asyncapi: 3.0.0
info:
  title: Sample AsyncAPI
  version: 1.0.0
channels:
  testChannel:
    address: events.default
    messages:
      TestMessage:
        $ref: '#/components/messages/TestMessage'
operations:
  sendOperation:
    action: send
    channel:
      $ref: '#/channels/testChannel'
    messages:
      - $ref: '#/components/messages/TestMessage'
components:
  messages:
    TestMessage:
      name: TestMessage
      payload:
        type: object
        properties:
          id:
            type: string
        required:
          - id
`,Te=`asyncapi: 3.0.0
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
`,$e=`asyncapi: 3.0.0
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
`,ue=`asyncapi: 3.0.0
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
        schemaRegistryUrl: https://schema-registry.example.com
        schemaRegistryVendor: confluent
`,Ce=`asyncapi: 3.0.0
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
`,Ae=`asyncapi: 3.0.0
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
`,Se=`asyncapi: 3.0.0
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
`,xe=`asyncapi: 3.0.0
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
        arbitraryJso:
          unchanged: keep
          removed: bye
          changed: 111
`,je=`asyncapi: 3.0.0
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
`,Ve=`asyncapi: 3.0.0
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
`,qe=`asyncapi: 3.0.0
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
`,Oe=`asyncapi: 3.0.0
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
`,Pe=`asyncapi: 3.0.0
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
`,Ie=`asyncapi: 3.0.0
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
        schemaRegistryUrl: https://schema-registry.example.com
        schemaRegistryVendor: confluent
      amqp:
        bindingVersion: 0.3.0
        connectionName: sample-server-connection
`,Re=`asyncapi: 3.0.0
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
        connectionName: sample-server-connection
`,Ke=`asyncapi: 3.0.0
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
`,Ee=`asyncapi: 3.0.0
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
        schemaRegistryUrl: https://schema-registry.example.com
        schemaRegistryVendor: confluent
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
`,we=`asyncapi: 3.0.0
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
`,Ne=`asyncapi: 3.0.0
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
`,Ye=`asyncapi: 3.0.0
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
`,Be=`asyncapi: 3.0.0
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
        arbitraryJso:
          unchanged: keep
          changed: test string
          added: new
`,Fe=`asyncapi: 3.0.0
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
`,De=`asyncapi: 3.0.0
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
`,Je=Object.assign({"../../../../samples/async-api-diffs/channel-server/1.1-channel-servers-host-protocol-changed/before.yaml":_e,"../../../../samples/async-api-diffs/channel-server/1.2-channel-servers-description-set/before.yaml":he,"../../../../samples/async-api-diffs/channel-server/1.3-channel-servers-summary-set/before.yaml":ye,"../../../../samples/async-api-diffs/channel-server/2.1-channel-servers0-bindings-add-one-more-binding/before.yaml":be,"../../../../samples/async-api-diffs/channel-server/2.2-channel-servers0-bindings-remove-one-of-several-bindings/before.yaml":ke,"../../../../samples/async-api-diffs/channel-server/2.3-channel-servers-all-added/before.yaml":Me,"../../../../samples/async-api-diffs/channel-server/2.3-channel-servers0-bindings-add-bindings/before.yaml":Te,"../../../../samples/async-api-diffs/channel-server/2.4-channel-servers-all-removed/before.yaml":$e,"../../../../samples/async-api-diffs/channel-server/2.4-channel-servers0-bindings-remove-bindings/before.yaml":ue,"../../../../samples/async-api-diffs/channel-server/3.1-channel-servers0-bindings-kafka-bindingVersion-changed/before.yaml":Ce,"../../../../samples/async-api-diffs/channel-server/3.2-channel-servers0-bindings-kafka-bindingVersion-removed/before.yaml":Ae,"../../../../samples/async-api-diffs/channel-server/3.3-channel-servers0-bindings-kafka-bindingVersion-added/before.yaml":Se,"../../../../samples/async-api-diffs/channel-server/4.1-channel-server-bindings-kafka-internal-jso-changes/before.yaml":xe,"../../../../samples/async-api-diffs/channel-server/5.1-channel-servers-one-item-removed/before.yaml":je,"../../../../samples/async-api-diffs/channel-server/5.2-channel-servers-one-item-added/before.yaml":Ve}),Ge=Object.assign({"../../../../samples/async-api-diffs/channel-server/1.1-channel-servers-host-protocol-changed/after.yaml":qe,"../../../../samples/async-api-diffs/channel-server/1.2-channel-servers-description-set/after.yaml":Oe,"../../../../samples/async-api-diffs/channel-server/1.3-channel-servers-summary-set/after.yaml":Pe,"../../../../samples/async-api-diffs/channel-server/2.1-channel-servers0-bindings-add-one-more-binding/after.yaml":Ie,"../../../../samples/async-api-diffs/channel-server/2.2-channel-servers0-bindings-remove-one-of-several-bindings/after.yaml":Re,"../../../../samples/async-api-diffs/channel-server/2.3-channel-servers-all-added/after.yaml":Ke,"../../../../samples/async-api-diffs/channel-server/2.3-channel-servers0-bindings-add-bindings/after.yaml":Ee,"../../../../samples/async-api-diffs/channel-server/2.4-channel-servers-all-removed/after.yaml":Ue,"../../../../samples/async-api-diffs/channel-server/2.4-channel-servers0-bindings-remove-bindings/after.yaml":we,"../../../../samples/async-api-diffs/channel-server/3.1-channel-servers0-bindings-kafka-bindingVersion-changed/after.yaml":Ne,"../../../../samples/async-api-diffs/channel-server/3.2-channel-servers0-bindings-kafka-bindingVersion-removed/after.yaml":Qe,"../../../../samples/async-api-diffs/channel-server/3.3-channel-servers0-bindings-kafka-bindingVersion-added/after.yaml":Ye,"../../../../samples/async-api-diffs/channel-server/4.1-channel-server-bindings-kafka-internal-jso-changes/after.yaml":Be,"../../../../samples/async-api-diffs/channel-server/5.1-channel-servers-one-item-removed/after.yaml":Fe,"../../../../samples/async-api-diffs/channel-server/5.2-channel-servers-one-item-added/after.yaml":De}),ze=de(Je,Ge),He=ge(ze),le=({caseId:n})=>{const s=He[n];return s?y.jsx(pe,{...Xe(s.beforeYaml,s.afterYaml)}):y.jsxs("div",{children:["Sample case not found: ",n]})},vn={title:"Async API Diffs Suite/Channel Server Samples",component:le},Le="sendOperation",We="TestMessage",Xe=(n,s)=>ve(n,s,{operationKey:Le,messageKey:We}),Ze=fe(le,"message-channel"),e=n=>Ze(n),r=e("1.1-channel-servers-host-protocol-changed"),a=e("1.2-channel-servers-description-set"),o=e("1.3-channel-servers-summary-set"),t=e("2.1-channel-servers0-bindings-add-one-more-binding"),i=e("2.2-channel-servers0-bindings-remove-one-of-several-bindings"),c=e("2.3-channel-servers0-bindings-add-bindings"),m=e("2.4-channel-servers0-bindings-remove-bindings"),l=e("2.3-channel-servers-all-added"),p=e("2.4-channel-servers-all-removed"),d=e("3.1-channel-servers0-bindings-kafka-bindingVersion-changed"),g=e("3.2-channel-servers0-bindings-kafka-bindingVersion-removed"),v=e("3.3-channel-servers0-bindings-kafka-bindingVersion-added"),f=e("4.1-channel-server-bindings-kafka-internal-jso-changes"),_=e("5.1-channel-servers-one-item-removed"),h=e("5.2-channel-servers-one-item-added");var b,k,M;r.parameters={...r.parameters,docs:{...(b=r.parameters)==null?void 0:b.docs,source:{originalSource:'createCaseStory("1.1-channel-servers-host-protocol-changed")',...(M=(k=r.parameters)==null?void 0:k.docs)==null?void 0:M.source}}};var T,$,u;a.parameters={...a.parameters,docs:{...(T=a.parameters)==null?void 0:T.docs,source:{originalSource:'createCaseStory("1.2-channel-servers-description-set")',...(u=($=a.parameters)==null?void 0:$.docs)==null?void 0:u.source}}};var C,A,S;o.parameters={...o.parameters,docs:{...(C=o.parameters)==null?void 0:C.docs,source:{originalSource:'createCaseStory("1.3-channel-servers-summary-set")',...(S=(A=o.parameters)==null?void 0:A.docs)==null?void 0:S.source}}};var x,j,V;t.parameters={...t.parameters,docs:{...(x=t.parameters)==null?void 0:x.docs,source:{originalSource:'createCaseStory("2.1-channel-servers0-bindings-add-one-more-binding")',...(V=(j=t.parameters)==null?void 0:j.docs)==null?void 0:V.source}}};var q,O,P;i.parameters={...i.parameters,docs:{...(q=i.parameters)==null?void 0:q.docs,source:{originalSource:'createCaseStory("2.2-channel-servers0-bindings-remove-one-of-several-bindings")',...(P=(O=i.parameters)==null?void 0:O.docs)==null?void 0:P.source}}};var I,R,K;c.parameters={...c.parameters,docs:{...(I=c.parameters)==null?void 0:I.docs,source:{originalSource:'createCaseStory("2.3-channel-servers0-bindings-add-bindings")',...(K=(R=c.parameters)==null?void 0:R.docs)==null?void 0:K.source}}};var E,U,w;m.parameters={...m.parameters,docs:{...(E=m.parameters)==null?void 0:E.docs,source:{originalSource:'createCaseStory("2.4-channel-servers0-bindings-remove-bindings")',...(w=(U=m.parameters)==null?void 0:U.docs)==null?void 0:w.source}}};var N,Q,Y;l.parameters={...l.parameters,docs:{...(N=l.parameters)==null?void 0:N.docs,source:{originalSource:'createCaseStory("2.3-channel-servers-all-added")',...(Y=(Q=l.parameters)==null?void 0:Q.docs)==null?void 0:Y.source}}};var B,F,D;p.parameters={...p.parameters,docs:{...(B=p.parameters)==null?void 0:B.docs,source:{originalSource:'createCaseStory("2.4-channel-servers-all-removed")',...(D=(F=p.parameters)==null?void 0:F.docs)==null?void 0:D.source}}};var J,G,z;d.parameters={...d.parameters,docs:{...(J=d.parameters)==null?void 0:J.docs,source:{originalSource:'createCaseStory("3.1-channel-servers0-bindings-kafka-bindingVersion-changed")',...(z=(G=d.parameters)==null?void 0:G.docs)==null?void 0:z.source}}};var H,L,W;g.parameters={...g.parameters,docs:{...(H=g.parameters)==null?void 0:H.docs,source:{originalSource:'createCaseStory("3.2-channel-servers0-bindings-kafka-bindingVersion-removed")',...(W=(L=g.parameters)==null?void 0:L.docs)==null?void 0:W.source}}};var X,Z,ee;v.parameters={...v.parameters,docs:{...(X=v.parameters)==null?void 0:X.docs,source:{originalSource:'createCaseStory("3.3-channel-servers0-bindings-kafka-bindingVersion-added")',...(ee=(Z=v.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var ne,se,re;f.parameters={...f.parameters,docs:{...(ne=f.parameters)==null?void 0:ne.docs,source:{originalSource:'createCaseStory("4.1-channel-server-bindings-kafka-internal-jso-changes")',...(re=(se=f.parameters)==null?void 0:se.docs)==null?void 0:re.source}}};var ae,oe,te;_.parameters={..._.parameters,docs:{...(ae=_.parameters)==null?void 0:ae.docs,source:{originalSource:'createCaseStory("5.1-channel-servers-one-item-removed")',...(te=(oe=_.parameters)==null?void 0:oe.docs)==null?void 0:te.source}}};var ie,ce,me;h.parameters={...h.parameters,docs:{...(ie=h.parameters)==null?void 0:ie.docs,source:{originalSource:'createCaseStory("5.2-channel-servers-one-item-added")',...(me=(ce=h.parameters)==null?void 0:ce.docs)==null?void 0:me.source}}};const fn=["Case_1_1_channel_servers_host_protocol_changed","Case_1_2_channel_servers_description_set","Case_1_3_channel_servers_summary_set","Case_2_1_channel_servers0_bindings_add_one_more_binding","Case_2_2_channel_servers0_bindings_remove_one_of_several_bindings","Case_2_3_channel_servers0_bindings_add_bindings","Case_2_4_channel_servers0_bindings_remove_bindings","Case_2_3_channel_servers_all_added","Case_2_4_channel_servers_all_removed","Case_3_1_channel_servers0_bindings_kafka_bindingVersion_changed","Case_3_2_channel_servers0_bindings_kafka_bindingVersion_removed","Case_3_3_channel_servers0_bindings_kafka_bindingVersion_added","Case_4_1_channel_server_bindings_kafka_internal_jso_changes","Case_5_1_channel_servers_one_item_removed","Case_5_2_channel_servers_one_item_added"];export{r as Case_1_1_channel_servers_host_protocol_changed,a as Case_1_2_channel_servers_description_set,o as Case_1_3_channel_servers_summary_set,t as Case_2_1_channel_servers0_bindings_add_one_more_binding,i as Case_2_2_channel_servers0_bindings_remove_one_of_several_bindings,c as Case_2_3_channel_servers0_bindings_add_bindings,l as Case_2_3_channel_servers_all_added,m as Case_2_4_channel_servers0_bindings_remove_bindings,p as Case_2_4_channel_servers_all_removed,d as Case_3_1_channel_servers0_bindings_kafka_bindingVersion_changed,g as Case_3_2_channel_servers0_bindings_kafka_bindingVersion_removed,v as Case_3_3_channel_servers0_bindings_kafka_bindingVersion_added,f as Case_4_1_channel_server_bindings_kafka_internal_jso_changes,_ as Case_5_1_channel_servers_one_item_removed,h as Case_5_2_channel_servers_one_item_added,fn as __namedExportsOrder,vn as default};
