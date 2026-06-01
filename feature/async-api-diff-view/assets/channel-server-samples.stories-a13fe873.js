import{j as y}from"./_commonjs-dynamic-modules-6308e768.js";import{a as ge}from"./AsyncApiOperationViewer-bae90f3c.js";import{w as ve,u as fe}from"./index-d5b0668c.js";import{b as _e,T as he,a as ye}from"./preprocess-8e212c54.js";import{c as be,p as ke}from"./yaml-source-2575e8ef.js";import"./index-f46741a2.js";import"./GraphPropNodeViewer-0995ebff.js";import"./index-415bee12.js";import"./GraphQLOperationDiffViewer-4bebdd2b.js";import"./GraphQLOperationViewer-ad024f54.js";import"./index-442a5f79.js";import"./js-yaml-71a24e1f.js";const Me=`asyncapi: 3.0.0
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
        schemaRegistryUrl: https://schema-registry.example.com
        schemaRegistryVendor: confluent
      amqp:
        bindingVersion: 0.3.0
        connectionName: sample-server-connection
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
operations:
  sendOperation:
    action: send
    channel:
      $ref: '#/channels/testChannel'
    messages:
      - $ref: '#/components/messages/TestMessage'
components:
  messages:
    TestMessage:
      name: TestMessage
      payload:
        type: object
        properties:
          id:
            type: string
        required:
          - id
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
operations:
  sendOperation:
    action: send
    channel:
      $ref: '#/channels/testChannel'
    messages:
      - $ref: '#/components/messages/TestMessage'
components:
  messages:
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
    bindings:
      kafka:
        bindingVersion: 1.0.0
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
operations:
  sendOperation:
    action: send
    channel:
      $ref: '#/channels/testChannel'
    messages:
      - $ref: '#/components/messages/TestMessage'
components:
  messages:
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
operations:
  sendOperation:
    action: send
    channel:
      $ref: '#/channels/testChannel'
    messages:
      - $ref: '#/components/messages/TestMessage'
components:
  messages:
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
operations:
  sendOperation:
    action: send
    channel:
      $ref: '#/channels/testChannel'
    messages:
      - $ref: '#/components/messages/TestMessage'
components:
  messages:
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
    description: Main Kafka broker
  server1:
    host: broker-1.example.com:5672
    protocol: amqp
    description: Secondary AMQP broker
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
        bindingVersion: 1.0.0
        schemaRegistryUrl: https://schema-registry.example.com
        schemaRegistryVendor: confluent
      amqp:
        bindingVersion: 0.3.0
        connectionName: sample-server-connection
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
      amqp:
        bindingVersion: 0.3.0
        connectionName: sample-server-connection
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
operations:
  sendOperation:
    action: send
    channel:
      $ref: '#/channels/testChannel'
    messages:
      - $ref: '#/components/messages/TestMessage'
components:
  messages:
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
        bindingVersion: 2.0.0
`,Je=`asyncapi: 3.0.0
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
`,Ge=`asyncapi: 3.0.0
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
`,ze=`asyncapi: 3.0.0
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
`,He=`asyncapi: 3.0.0
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
`,Le=`asyncapi: 3.0.0
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
`,We=Object.assign({"../../../../samples/async-api-diffs/channel-server/1.1-channel-servers-host-protocol-changed/before.yaml":Me,"../../../../samples/async-api-diffs/channel-server/1.2-channel-servers-description-set/before.yaml":Te,"../../../../samples/async-api-diffs/channel-server/1.3-channel-servers-summary-set/before.yaml":ue,"../../../../samples/async-api-diffs/channel-server/2.1-channel-servers0-bindings-add-one-more-binding/before.yaml":$e,"../../../../samples/async-api-diffs/channel-server/2.2-channel-servers0-bindings-remove-one-of-several-bindings/before.yaml":Ce,"../../../../samples/async-api-diffs/channel-server/2.3-channel-servers-all-added/before.yaml":Se,"../../../../samples/async-api-diffs/channel-server/2.3-channel-servers0-bindings-add-bindings/before.yaml":Ae,"../../../../samples/async-api-diffs/channel-server/2.4-channel-servers-all-removed/before.yaml":xe,"../../../../samples/async-api-diffs/channel-server/2.4-channel-servers0-bindings-remove-bindings/before.yaml":je,"../../../../samples/async-api-diffs/channel-server/3.1-channel-servers0-bindings-kafka-bindingVersion-changed/before.yaml":Ve,"../../../../samples/async-api-diffs/channel-server/3.2-channel-servers0-bindings-kafka-bindingVersion-removed/before.yaml":qe,"../../../../samples/async-api-diffs/channel-server/3.3-channel-servers0-bindings-kafka-bindingVersion-added/before.yaml":Oe,"../../../../samples/async-api-diffs/channel-server/4.1-channel-server-bindings-kafka-internal-jso-changes/before.yaml":Pe,"../../../../samples/async-api-diffs/channel-server/5.1-channel-servers-one-item-removed/before.yaml":Ie,"../../../../samples/async-api-diffs/channel-server/5.2-channel-servers-one-item-added/before.yaml":Ee}),Xe=Object.assign({"../../../../samples/async-api-diffs/channel-server/1.1-channel-servers-host-protocol-changed/after.yaml":Re,"../../../../samples/async-api-diffs/channel-server/1.2-channel-servers-description-set/after.yaml":Ke,"../../../../samples/async-api-diffs/channel-server/1.3-channel-servers-summary-set/after.yaml":we,"../../../../samples/async-api-diffs/channel-server/2.1-channel-servers0-bindings-add-one-more-binding/after.yaml":Ne,"../../../../samples/async-api-diffs/channel-server/2.2-channel-servers0-bindings-remove-one-of-several-bindings/after.yaml":Ye,"../../../../samples/async-api-diffs/channel-server/2.3-channel-servers-all-added/after.yaml":De,"../../../../samples/async-api-diffs/channel-server/2.3-channel-servers0-bindings-add-bindings/after.yaml":Fe,"../../../../samples/async-api-diffs/channel-server/2.4-channel-servers-all-removed/after.yaml":Ue,"../../../../samples/async-api-diffs/channel-server/2.4-channel-servers0-bindings-remove-bindings/after.yaml":Qe,"../../../../samples/async-api-diffs/channel-server/3.1-channel-servers0-bindings-kafka-bindingVersion-changed/after.yaml":Be,"../../../../samples/async-api-diffs/channel-server/3.2-channel-servers0-bindings-kafka-bindingVersion-removed/after.yaml":Je,"../../../../samples/async-api-diffs/channel-server/3.3-channel-servers0-bindings-kafka-bindingVersion-added/after.yaml":Ge,"../../../../samples/async-api-diffs/channel-server/4.1-channel-server-bindings-kafka-internal-jso-changes/after.yaml":ze,"../../../../samples/async-api-diffs/channel-server/5.1-channel-servers-one-item-removed/after.yaml":He,"../../../../samples/async-api-diffs/channel-server/5.2-channel-servers-one-item-added/after.yaml":Le}),Ze=be(We,Xe),en=Object.fromEntries(Ze.map(n=>[n.caseId,n])),pe=({caseId:n})=>{const s=en[n];return s?y.jsx(ge,{...rn(s.beforeYaml,s.afterYaml)}):y.jsxs("div",{children:["Sample case not found: ",n]})},yn={title:"Async API Diffs Suite/Channel Server Samples",component:pe},nn="sendOperation",sn="TestMessage",b=n=>ke(n),rn=(n,s)=>({devMode:!0,mergedSource:_e({beforeSource:b(n),afterSource:b(s)}),operationKeys:{operationKey:nn,messageKey:sn},referenceNamePropertyKey:he,diffMetaKeys:ye}),e=n=>({name:n,args:{caseId:n},render:s=>y.jsx(pe,{caseId:s.caseId}),play:async({canvasElement:s})=>{const de=await ve(s).findAllByTestId("message-channel");await fe.click(de[0])}}),r=e("1.1-channel-servers-host-protocol-changed"),a=e("1.2-channel-servers-description-set"),o=e("1.3-channel-servers-summary-set"),t=e("2.1-channel-servers0-bindings-add-one-more-binding"),i=e("2.2-channel-servers0-bindings-remove-one-of-several-bindings"),c=e("2.3-channel-servers0-bindings-add-bindings"),m=e("2.4-channel-servers0-bindings-remove-bindings"),l=e("2.3-channel-servers-all-added"),p=e("2.4-channel-servers-all-removed"),d=e("3.1-channel-servers0-bindings-kafka-bindingVersion-changed"),g=e("3.2-channel-servers0-bindings-kafka-bindingVersion-removed"),v=e("3.3-channel-servers0-bindings-kafka-bindingVersion-added"),f=e("4.1-channel-server-bindings-kafka-internal-jso-changes"),_=e("5.1-channel-servers-one-item-removed"),h=e("5.2-channel-servers-one-item-added");var k,M,T;r.parameters={...r.parameters,docs:{...(k=r.parameters)==null?void 0:k.docs,source:{originalSource:'createCaseStory("1.1-channel-servers-host-protocol-changed")',...(T=(M=r.parameters)==null?void 0:M.docs)==null?void 0:T.source}}};var u,$,C;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:'createCaseStory("1.2-channel-servers-description-set")',...(C=($=a.parameters)==null?void 0:$.docs)==null?void 0:C.source}}};var S,A,x;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:'createCaseStory("1.3-channel-servers-summary-set")',...(x=(A=o.parameters)==null?void 0:A.docs)==null?void 0:x.source}}};var j,V,q;t.parameters={...t.parameters,docs:{...(j=t.parameters)==null?void 0:j.docs,source:{originalSource:'createCaseStory("2.1-channel-servers0-bindings-add-one-more-binding")',...(q=(V=t.parameters)==null?void 0:V.docs)==null?void 0:q.source}}};var O,P,I;i.parameters={...i.parameters,docs:{...(O=i.parameters)==null?void 0:O.docs,source:{originalSource:'createCaseStory("2.2-channel-servers0-bindings-remove-one-of-several-bindings")',...(I=(P=i.parameters)==null?void 0:P.docs)==null?void 0:I.source}}};var E,R,K;c.parameters={...c.parameters,docs:{...(E=c.parameters)==null?void 0:E.docs,source:{originalSource:'createCaseStory("2.3-channel-servers0-bindings-add-bindings")',...(K=(R=c.parameters)==null?void 0:R.docs)==null?void 0:K.source}}};var w,N,Y;m.parameters={...m.parameters,docs:{...(w=m.parameters)==null?void 0:w.docs,source:{originalSource:'createCaseStory("2.4-channel-servers0-bindings-remove-bindings")',...(Y=(N=m.parameters)==null?void 0:N.docs)==null?void 0:Y.source}}};var D,F,U;l.parameters={...l.parameters,docs:{...(D=l.parameters)==null?void 0:D.docs,source:{originalSource:'createCaseStory("2.3-channel-servers-all-added")',...(U=(F=l.parameters)==null?void 0:F.docs)==null?void 0:U.source}}};var Q,B,J;p.parameters={...p.parameters,docs:{...(Q=p.parameters)==null?void 0:Q.docs,source:{originalSource:'createCaseStory("2.4-channel-servers-all-removed")',...(J=(B=p.parameters)==null?void 0:B.docs)==null?void 0:J.source}}};var G,z,H;d.parameters={...d.parameters,docs:{...(G=d.parameters)==null?void 0:G.docs,source:{originalSource:'createCaseStory("3.1-channel-servers0-bindings-kafka-bindingVersion-changed")',...(H=(z=d.parameters)==null?void 0:z.docs)==null?void 0:H.source}}};var L,W,X;g.parameters={...g.parameters,docs:{...(L=g.parameters)==null?void 0:L.docs,source:{originalSource:'createCaseStory("3.2-channel-servers0-bindings-kafka-bindingVersion-removed")',...(X=(W=g.parameters)==null?void 0:W.docs)==null?void 0:X.source}}};var Z,ee,ne;v.parameters={...v.parameters,docs:{...(Z=v.parameters)==null?void 0:Z.docs,source:{originalSource:'createCaseStory("3.3-channel-servers0-bindings-kafka-bindingVersion-added")',...(ne=(ee=v.parameters)==null?void 0:ee.docs)==null?void 0:ne.source}}};var se,re,ae;f.parameters={...f.parameters,docs:{...(se=f.parameters)==null?void 0:se.docs,source:{originalSource:'createCaseStory("4.1-channel-server-bindings-kafka-internal-jso-changes")',...(ae=(re=f.parameters)==null?void 0:re.docs)==null?void 0:ae.source}}};var oe,te,ie;_.parameters={..._.parameters,docs:{...(oe=_.parameters)==null?void 0:oe.docs,source:{originalSource:'createCaseStory("5.1-channel-servers-one-item-removed")',...(ie=(te=_.parameters)==null?void 0:te.docs)==null?void 0:ie.source}}};var ce,me,le;h.parameters={...h.parameters,docs:{...(ce=h.parameters)==null?void 0:ce.docs,source:{originalSource:'createCaseStory("5.2-channel-servers-one-item-added")',...(le=(me=h.parameters)==null?void 0:me.docs)==null?void 0:le.source}}};const bn=["Case_1_1_channel_servers_host_protocol_changed","Case_1_2_channel_servers_description_set","Case_1_3_channel_servers_summary_set","Case_2_1_channel_servers0_bindings_add_one_more_binding","Case_2_2_channel_servers0_bindings_remove_one_of_several_bindings","Case_2_3_channel_servers0_bindings_add_bindings","Case_2_4_channel_servers0_bindings_remove_bindings","Case_2_3_channel_servers_all_added","Case_2_4_channel_servers_all_removed","Case_3_1_channel_servers0_bindings_kafka_bindingVersion_changed","Case_3_2_channel_servers0_bindings_kafka_bindingVersion_removed","Case_3_3_channel_servers0_bindings_kafka_bindingVersion_added","Case_4_1_channel_server_bindings_kafka_internal_jso_changes","Case_5_1_channel_servers_one_item_removed","Case_5_2_channel_servers_one_item_added"];export{r as Case_1_1_channel_servers_host_protocol_changed,a as Case_1_2_channel_servers_description_set,o as Case_1_3_channel_servers_summary_set,t as Case_2_1_channel_servers0_bindings_add_one_more_binding,i as Case_2_2_channel_servers0_bindings_remove_one_of_several_bindings,c as Case_2_3_channel_servers0_bindings_add_bindings,l as Case_2_3_channel_servers_all_added,m as Case_2_4_channel_servers0_bindings_remove_bindings,p as Case_2_4_channel_servers_all_removed,d as Case_3_1_channel_servers0_bindings_kafka_bindingVersion_changed,g as Case_3_2_channel_servers0_bindings_kafka_bindingVersion_removed,v as Case_3_3_channel_servers0_bindings_kafka_bindingVersion_added,f as Case_4_1_channel_server_bindings_kafka_internal_jso_changes,_ as Case_5_1_channel_servers_one_item_removed,h as Case_5_2_channel_servers_one_item_added,bn as __namedExportsOrder,yn as default};
