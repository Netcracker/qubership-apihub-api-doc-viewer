import{j as En}from"./_commonjs-dynamic-modules-6308e768.js";import{a as Kn}from"./AsyncApiOperationViewer-4126e0c9.js";import{c as Nn}from"./parse-yaml-source-cd2e19a5.js";import{c as Dn,a as Gn,b as Un,d as wn}from"./async-api-diffs-utils-37c2bfd4.js";import"./index-f46741a2.js";import"./UxBadge-d0e51bff.js";import"./DdlTableViewer-4c3a3e60.js";import"./index-abe66225.js";import"./DdlTableDiffsViewer-06cb784a.js";/* empty css              */import"./GraphQLOperationDiffViewer-54a4e89c.js";import"./GraphPropNodeViewer-76557377.js";import"./index-415bee12.js";import"./GraphQLOperationViewer-14cec534.js";import"./public-api-d6a34651.js";import"./index-d5b0668c.js";import"./index-442a5f79.js";import"./preprocess-9f23dbe6.js";const Hn=`asyncapi: 3.0.0
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
    summary: Long channel-server summary. Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum sed ut perspiciatis unde omnis iste natus error sit voluptatem
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
    summary: Long channel-server summary. Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum sed ut perspiciatis unde omnis iste natus error sit voluptatem
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
    description: channel-server description
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
    description: Long channel-server description. Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum sed ut perspiciatis unde omnis iste natus error sit voluptatem
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
    description: Long channel-server description. Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum sed ut perspiciatis unde omnis iste natus error sit voluptatem
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
    description: channel-server description
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
    summary: channel-server summary
`,es=`asyncapi: 3.0.0
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
    summary: Long channel-server summary. Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum sed ut perspiciatis unde omnis iste natus error sit voluptatem
`,ns=`asyncapi: 3.0.0
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
    description: channel-server description
`,ss=`asyncapi: 3.0.0
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
    summary: Long channel-server summary. Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum sed ut perspiciatis unde omnis iste natus error sit voluptatem
`,as=`asyncapi: 3.0.0
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
    summary: channel-server summary
`,rs=`asyncapi: 3.0.0
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
`,ts=`asyncapi: 3.0.0
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
`,os=`asyncapi: 3.0.0
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
    description: channel-server description
`,is=`asyncapi: 3.0.0
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
`,cs=`asyncapi: 3.0.0
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
    description: Long channel-server description. Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum sed ut perspiciatis unde omnis iste natus error sit voluptatem
`,ms=`asyncapi: 3.0.0
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
    description: Long channel-server description. Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum sed ut perspiciatis unde omnis iste natus error sit voluptatem
`,ls=`asyncapi: 3.0.0
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
`,ps=`asyncapi: 3.0.0
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
    summary: channel-server summary
`,ds=`asyncapi: 3.0.0
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
    summary: channel-server summary
`,gs=`asyncapi: 3.0.0
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
`,_s=`asyncapi: 3.0.0
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
`,fs=`asyncapi: 3.0.0
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
`,hs=`asyncapi: 3.0.0
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
`,ys=`asyncapi: 3.0.0
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
`,bs=`asyncapi: 3.0.0
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
`,Ms=`asyncapi: 3.0.0
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
`,Ts=`asyncapi: 3.0.0
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
    summary: channel-server summary
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
    summary: CHANGED long channel-server summary. Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam
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
    summary: Long channel-server summary. Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum sed ut perspiciatis unde omnis iste natus error sit voluptatem
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
    summary: channel-server description
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
    summary: channel-server summary
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
    summary: Long channel-server description. Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum sed ut perspiciatis unde omnis iste natus error sit voluptatem
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
    summary: Long channel-server summary. Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum sed ut perspiciatis unde omnis iste natus error sit voluptatem
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
    description: channel-server summary
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
    description: channel-server description
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
    description: CHANGED channel-server description
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
    description: Long channel-server summary. Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum sed ut perspiciatis unde omnis iste natus error sit voluptatem
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
    description: Long channel-server description. Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum sed ut perspiciatis unde omnis iste natus error sit voluptatem
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
    description: channel-server description
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
    description: CHANGED long channel-server description. Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium
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
    description: Long channel-server description. Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum sed ut perspiciatis unde omnis iste natus error sit voluptatem
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
    summary: CHANGED channel-server summary
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
`,oa=Object.assign({"../../../../samples/async-api-diffs/channel-server/1.1-channel-servers-host-protocol-changed/before.yaml":Hn,"../../../../samples/async-api-diffs/channel-server/1.10-channel-server-summary-added/before.yaml":Qn,"../../../../samples/async-api-diffs/channel-server/1.11-channel-server-long-summary-changed/before.yaml":Bn,"../../../../samples/async-api-diffs/channel-server/1.12-channel-server-long-summary-removed/before.yaml":Fn,"../../../../samples/async-api-diffs/channel-server/1.13-channel-server-long-summary-added/before.yaml":Jn,"../../../../samples/async-api-diffs/channel-server/1.14-channel-server-description-moved-to-summary/before.yaml":Yn,"../../../../samples/async-api-diffs/channel-server/1.15-channel-server-long-description-moved-to-summary/before.yaml":zn,"../../../../samples/async-api-diffs/channel-server/1.16-channel-server-long-description-moved-to-long-summary/before.yaml":Wn,"../../../../samples/async-api-diffs/channel-server/1.17-channel-server-description-moved-to-long-summary/before.yaml":Xn,"../../../../samples/async-api-diffs/channel-server/1.18-channel-server-summary-moved-to-description/before.yaml":Zn,"../../../../samples/async-api-diffs/channel-server/1.19-channel-server-long-summary-moved-to-description/before.yaml":es,"../../../../samples/async-api-diffs/channel-server/1.2-channel-server-description-changed/before.yaml":ns,"../../../../samples/async-api-diffs/channel-server/1.20-channel-server-long-summary-moved-to-long-description/before.yaml":ss,"../../../../samples/async-api-diffs/channel-server/1.21-channel-server-summary-moved-to-long-description/before.yaml":as,"../../../../samples/async-api-diffs/channel-server/1.22-channel-servers-description-set/before.yaml":rs,"../../../../samples/async-api-diffs/channel-server/1.23-channel-servers-summary-set/before.yaml":ts,"../../../../samples/async-api-diffs/channel-server/1.3-channel-server-description-removed/before.yaml":os,"../../../../samples/async-api-diffs/channel-server/1.4-channel-server-description-added/before.yaml":is,"../../../../samples/async-api-diffs/channel-server/1.5-channel-server-long-description-changed/before.yaml":cs,"../../../../samples/async-api-diffs/channel-server/1.6-channel-server-long-description-removed/before.yaml":ms,"../../../../samples/async-api-diffs/channel-server/1.7-channel-server-long-description-added/before.yaml":ls,"../../../../samples/async-api-diffs/channel-server/1.8-channel-server-summary-changed/before.yaml":ps,"../../../../samples/async-api-diffs/channel-server/1.9-channel-server-summary-removed/before.yaml":ds,"../../../../samples/async-api-diffs/channel-server/2.1-channel-servers0-bindings-add-one-more-binding/before.yaml":gs,"../../../../samples/async-api-diffs/channel-server/2.2-channel-servers0-bindings-remove-one-of-several-bindings/before.yaml":vs,"../../../../samples/async-api-diffs/channel-server/2.3-channel-servers-all-added/before.yaml":us,"../../../../samples/async-api-diffs/channel-server/2.3-channel-servers0-bindings-add-bindings/before.yaml":_s,"../../../../samples/async-api-diffs/channel-server/2.4-channel-servers-all-removed/before.yaml":fs,"../../../../samples/async-api-diffs/channel-server/2.4-channel-servers0-bindings-remove-bindings/before.yaml":hs,"../../../../samples/async-api-diffs/channel-server/3.1-channel-servers0-bindings-kafka-bindingVersion-changed/before.yaml":ys,"../../../../samples/async-api-diffs/channel-server/3.2-channel-servers0-bindings-kafka-bindingVersion-removed/before.yaml":bs,"../../../../samples/async-api-diffs/channel-server/3.3-channel-servers0-bindings-kafka-bindingVersion-added/before.yaml":Ms,"../../../../samples/async-api-diffs/channel-server/4.1-channel-server-bindings-kafka-internal-jso-changes/before.yaml":Ts,"../../../../samples/async-api-diffs/channel-server/5.1-channel-servers-one-item-removed/before.yaml":ks,"../../../../samples/async-api-diffs/channel-server/5.2-channel-servers-one-item-added/before.yaml":$s}),ia=Object.assign({"../../../../samples/async-api-diffs/channel-server/1.1-channel-servers-host-protocol-changed/after.yaml":Cs,"../../../../samples/async-api-diffs/channel-server/1.10-channel-server-summary-added/after.yaml":As,"../../../../samples/async-api-diffs/channel-server/1.11-channel-server-long-summary-changed/after.yaml":qs,"../../../../samples/async-api-diffs/channel-server/1.12-channel-server-long-summary-removed/after.yaml":Ss,"../../../../samples/async-api-diffs/channel-server/1.13-channel-server-long-summary-added/after.yaml":xs,"../../../../samples/async-api-diffs/channel-server/1.14-channel-server-description-moved-to-summary/after.yaml":js,"../../../../samples/async-api-diffs/channel-server/1.15-channel-server-long-description-moved-to-summary/after.yaml":Os,"../../../../samples/async-api-diffs/channel-server/1.16-channel-server-long-description-moved-to-long-summary/after.yaml":Ps,"../../../../samples/async-api-diffs/channel-server/1.17-channel-server-description-moved-to-long-summary/after.yaml":Is,"../../../../samples/async-api-diffs/channel-server/1.18-channel-server-summary-moved-to-description/after.yaml":Vs,"../../../../samples/async-api-diffs/channel-server/1.19-channel-server-long-summary-moved-to-description/after.yaml":Ls,"../../../../samples/async-api-diffs/channel-server/1.2-channel-server-description-changed/after.yaml":Rs,"../../../../samples/async-api-diffs/channel-server/1.20-channel-server-long-summary-moved-to-long-description/after.yaml":Es,"../../../../samples/async-api-diffs/channel-server/1.21-channel-server-summary-moved-to-long-description/after.yaml":Ks,"../../../../samples/async-api-diffs/channel-server/1.22-channel-servers-description-set/after.yaml":Ns,"../../../../samples/async-api-diffs/channel-server/1.23-channel-servers-summary-set/after.yaml":Ds,"../../../../samples/async-api-diffs/channel-server/1.3-channel-server-description-removed/after.yaml":Gs,"../../../../samples/async-api-diffs/channel-server/1.4-channel-server-description-added/after.yaml":Us,"../../../../samples/async-api-diffs/channel-server/1.5-channel-server-long-description-changed/after.yaml":ws,"../../../../samples/async-api-diffs/channel-server/1.6-channel-server-long-description-removed/after.yaml":Hs,"../../../../samples/async-api-diffs/channel-server/1.7-channel-server-long-description-added/after.yaml":Qs,"../../../../samples/async-api-diffs/channel-server/1.8-channel-server-summary-changed/after.yaml":Bs,"../../../../samples/async-api-diffs/channel-server/1.9-channel-server-summary-removed/after.yaml":Fs,"../../../../samples/async-api-diffs/channel-server/2.1-channel-servers0-bindings-add-one-more-binding/after.yaml":Js,"../../../../samples/async-api-diffs/channel-server/2.2-channel-servers0-bindings-remove-one-of-several-bindings/after.yaml":Ys,"../../../../samples/async-api-diffs/channel-server/2.3-channel-servers-all-added/after.yaml":zs,"../../../../samples/async-api-diffs/channel-server/2.3-channel-servers0-bindings-add-bindings/after.yaml":Ws,"../../../../samples/async-api-diffs/channel-server/2.4-channel-servers-all-removed/after.yaml":Xs,"../../../../samples/async-api-diffs/channel-server/2.4-channel-servers0-bindings-remove-bindings/after.yaml":Zs,"../../../../samples/async-api-diffs/channel-server/3.1-channel-servers0-bindings-kafka-bindingVersion-changed/after.yaml":ea,"../../../../samples/async-api-diffs/channel-server/3.2-channel-servers0-bindings-kafka-bindingVersion-removed/after.yaml":na,"../../../../samples/async-api-diffs/channel-server/3.3-channel-servers0-bindings-kafka-bindingVersion-added/after.yaml":sa,"../../../../samples/async-api-diffs/channel-server/4.1-channel-server-bindings-kafka-internal-jso-changes/after.yaml":aa,"../../../../samples/async-api-diffs/channel-server/5.1-channel-servers-one-item-removed/after.yaml":ra,"../../../../samples/async-api-diffs/channel-server/5.2-channel-servers-one-item-added/after.yaml":ta}),ca=Nn(oa,ia),ma=Dn(ca),Rn=({beforeYaml:n,afterYaml:E})=>En.jsx(Kn,{...da(n,E)}),Pa={title:"Async API Diffs Suite/Channel Server Samples",component:Rn,argTypes:Gn},la="sendOperation",pa="TestMessage",da=(n,E)=>Un(n,E,{operationKey:la,messageKey:pa}),ga=wn(Rn,ma,"message-channel"),e=n=>ga(n),s=e("1.1-channel-servers-host-protocol-changed"),a=e("1.2-channel-server-description-changed"),r=e("1.3-channel-server-description-removed"),t=e("1.4-channel-server-description-added"),o=e("1.5-channel-server-long-description-changed"),i=e("1.6-channel-server-long-description-removed"),c=e("1.7-channel-server-long-description-added"),m=e("1.8-channel-server-summary-changed"),l=e("1.9-channel-server-summary-removed"),p=e("1.10-channel-server-summary-added"),d=e("1.11-channel-server-long-summary-changed"),g=e("1.12-channel-server-long-summary-removed"),v=e("1.13-channel-server-long-summary-added"),u=e("1.14-channel-server-description-moved-to-summary"),_=e("1.15-channel-server-long-description-moved-to-summary"),f=e("1.16-channel-server-long-description-moved-to-long-summary"),h=e("1.17-channel-server-description-moved-to-long-summary"),y=e("1.18-channel-server-summary-moved-to-description"),b=e("1.19-channel-server-long-summary-moved-to-description"),M=e("1.20-channel-server-long-summary-moved-to-long-description"),T=e("1.21-channel-server-summary-moved-to-long-description"),k=e("1.22-channel-servers-description-set"),$=e("1.23-channel-servers-summary-set"),C=e("2.1-channel-servers0-bindings-add-one-more-binding"),A=e("2.2-channel-servers0-bindings-remove-one-of-several-bindings"),q=e("2.3-channel-servers0-bindings-add-bindings"),S=e("2.4-channel-servers0-bindings-remove-bindings"),x=e("2.3-channel-servers-all-added"),j=e("2.4-channel-servers-all-removed"),O=e("3.1-channel-servers0-bindings-kafka-bindingVersion-changed"),P=e("3.2-channel-servers0-bindings-kafka-bindingVersion-removed"),I=e("3.3-channel-servers0-bindings-kafka-bindingVersion-added"),V=e("4.1-channel-server-bindings-kafka-internal-jso-changes"),L=e("5.1-channel-servers-one-item-removed"),R=e("5.2-channel-servers-one-item-added");var K,N,D;s.parameters={...s.parameters,docs:{...(K=s.parameters)==null?void 0:K.docs,source:{originalSource:'createCaseStory("1.1-channel-servers-host-protocol-changed")',...(D=(N=s.parameters)==null?void 0:N.docs)==null?void 0:D.source}}};var G,U,w;a.parameters={...a.parameters,docs:{...(G=a.parameters)==null?void 0:G.docs,source:{originalSource:'createCaseStory("1.2-channel-server-description-changed")',...(w=(U=a.parameters)==null?void 0:U.docs)==null?void 0:w.source}}};var H,Q,B;r.parameters={...r.parameters,docs:{...(H=r.parameters)==null?void 0:H.docs,source:{originalSource:'createCaseStory("1.3-channel-server-description-removed")',...(B=(Q=r.parameters)==null?void 0:Q.docs)==null?void 0:B.source}}};var F,J,Y;t.parameters={...t.parameters,docs:{...(F=t.parameters)==null?void 0:F.docs,source:{originalSource:'createCaseStory("1.4-channel-server-description-added")',...(Y=(J=t.parameters)==null?void 0:J.docs)==null?void 0:Y.source}}};var z,W,X;o.parameters={...o.parameters,docs:{...(z=o.parameters)==null?void 0:z.docs,source:{originalSource:'createCaseStory("1.5-channel-server-long-description-changed")',...(X=(W=o.parameters)==null?void 0:W.docs)==null?void 0:X.source}}};var Z,ee,ne;i.parameters={...i.parameters,docs:{...(Z=i.parameters)==null?void 0:Z.docs,source:{originalSource:'createCaseStory("1.6-channel-server-long-description-removed")',...(ne=(ee=i.parameters)==null?void 0:ee.docs)==null?void 0:ne.source}}};var se,ae,re;c.parameters={...c.parameters,docs:{...(se=c.parameters)==null?void 0:se.docs,source:{originalSource:'createCaseStory("1.7-channel-server-long-description-added")',...(re=(ae=c.parameters)==null?void 0:ae.docs)==null?void 0:re.source}}};var te,oe,ie;m.parameters={...m.parameters,docs:{...(te=m.parameters)==null?void 0:te.docs,source:{originalSource:'createCaseStory("1.8-channel-server-summary-changed")',...(ie=(oe=m.parameters)==null?void 0:oe.docs)==null?void 0:ie.source}}};var ce,me,le;l.parameters={...l.parameters,docs:{...(ce=l.parameters)==null?void 0:ce.docs,source:{originalSource:'createCaseStory("1.9-channel-server-summary-removed")',...(le=(me=l.parameters)==null?void 0:me.docs)==null?void 0:le.source}}};var pe,de,ge;p.parameters={...p.parameters,docs:{...(pe=p.parameters)==null?void 0:pe.docs,source:{originalSource:'createCaseStory("1.10-channel-server-summary-added")',...(ge=(de=p.parameters)==null?void 0:de.docs)==null?void 0:ge.source}}};var ve,ue,_e;d.parameters={...d.parameters,docs:{...(ve=d.parameters)==null?void 0:ve.docs,source:{originalSource:'createCaseStory("1.11-channel-server-long-summary-changed")',...(_e=(ue=d.parameters)==null?void 0:ue.docs)==null?void 0:_e.source}}};var fe,he,ye;g.parameters={...g.parameters,docs:{...(fe=g.parameters)==null?void 0:fe.docs,source:{originalSource:'createCaseStory("1.12-channel-server-long-summary-removed")',...(ye=(he=g.parameters)==null?void 0:he.docs)==null?void 0:ye.source}}};var be,Me,Te;v.parameters={...v.parameters,docs:{...(be=v.parameters)==null?void 0:be.docs,source:{originalSource:'createCaseStory("1.13-channel-server-long-summary-added")',...(Te=(Me=v.parameters)==null?void 0:Me.docs)==null?void 0:Te.source}}};var ke,$e,Ce;u.parameters={...u.parameters,docs:{...(ke=u.parameters)==null?void 0:ke.docs,source:{originalSource:'createCaseStory("1.14-channel-server-description-moved-to-summary")',...(Ce=($e=u.parameters)==null?void 0:$e.docs)==null?void 0:Ce.source}}};var Ae,qe,Se;_.parameters={..._.parameters,docs:{...(Ae=_.parameters)==null?void 0:Ae.docs,source:{originalSource:'createCaseStory("1.15-channel-server-long-description-moved-to-summary")',...(Se=(qe=_.parameters)==null?void 0:qe.docs)==null?void 0:Se.source}}};var xe,je,Oe;f.parameters={...f.parameters,docs:{...(xe=f.parameters)==null?void 0:xe.docs,source:{originalSource:'createCaseStory("1.16-channel-server-long-description-moved-to-long-summary")',...(Oe=(je=f.parameters)==null?void 0:je.docs)==null?void 0:Oe.source}}};var Pe,Ie,Ve;h.parameters={...h.parameters,docs:{...(Pe=h.parameters)==null?void 0:Pe.docs,source:{originalSource:'createCaseStory("1.17-channel-server-description-moved-to-long-summary")',...(Ve=(Ie=h.parameters)==null?void 0:Ie.docs)==null?void 0:Ve.source}}};var Le,Re,Ee;y.parameters={...y.parameters,docs:{...(Le=y.parameters)==null?void 0:Le.docs,source:{originalSource:'createCaseStory("1.18-channel-server-summary-moved-to-description")',...(Ee=(Re=y.parameters)==null?void 0:Re.docs)==null?void 0:Ee.source}}};var Ke,Ne,De;b.parameters={...b.parameters,docs:{...(Ke=b.parameters)==null?void 0:Ke.docs,source:{originalSource:'createCaseStory("1.19-channel-server-long-summary-moved-to-description")',...(De=(Ne=b.parameters)==null?void 0:Ne.docs)==null?void 0:De.source}}};var Ge,Ue,we;M.parameters={...M.parameters,docs:{...(Ge=M.parameters)==null?void 0:Ge.docs,source:{originalSource:'createCaseStory("1.20-channel-server-long-summary-moved-to-long-description")',...(we=(Ue=M.parameters)==null?void 0:Ue.docs)==null?void 0:we.source}}};var He,Qe,Be;T.parameters={...T.parameters,docs:{...(He=T.parameters)==null?void 0:He.docs,source:{originalSource:'createCaseStory("1.21-channel-server-summary-moved-to-long-description")',...(Be=(Qe=T.parameters)==null?void 0:Qe.docs)==null?void 0:Be.source}}};var Fe,Je,Ye;k.parameters={...k.parameters,docs:{...(Fe=k.parameters)==null?void 0:Fe.docs,source:{originalSource:'createCaseStory("1.22-channel-servers-description-set")',...(Ye=(Je=k.parameters)==null?void 0:Je.docs)==null?void 0:Ye.source}}};var ze,We,Xe;$.parameters={...$.parameters,docs:{...(ze=$.parameters)==null?void 0:ze.docs,source:{originalSource:'createCaseStory("1.23-channel-servers-summary-set")',...(Xe=(We=$.parameters)==null?void 0:We.docs)==null?void 0:Xe.source}}};var Ze,en,nn;C.parameters={...C.parameters,docs:{...(Ze=C.parameters)==null?void 0:Ze.docs,source:{originalSource:'createCaseStory("2.1-channel-servers0-bindings-add-one-more-binding")',...(nn=(en=C.parameters)==null?void 0:en.docs)==null?void 0:nn.source}}};var sn,an,rn;A.parameters={...A.parameters,docs:{...(sn=A.parameters)==null?void 0:sn.docs,source:{originalSource:'createCaseStory("2.2-channel-servers0-bindings-remove-one-of-several-bindings")',...(rn=(an=A.parameters)==null?void 0:an.docs)==null?void 0:rn.source}}};var tn,on,cn;q.parameters={...q.parameters,docs:{...(tn=q.parameters)==null?void 0:tn.docs,source:{originalSource:'createCaseStory("2.3-channel-servers0-bindings-add-bindings")',...(cn=(on=q.parameters)==null?void 0:on.docs)==null?void 0:cn.source}}};var mn,ln,pn;S.parameters={...S.parameters,docs:{...(mn=S.parameters)==null?void 0:mn.docs,source:{originalSource:'createCaseStory("2.4-channel-servers0-bindings-remove-bindings")',...(pn=(ln=S.parameters)==null?void 0:ln.docs)==null?void 0:pn.source}}};var dn,gn,vn;x.parameters={...x.parameters,docs:{...(dn=x.parameters)==null?void 0:dn.docs,source:{originalSource:'createCaseStory("2.3-channel-servers-all-added")',...(vn=(gn=x.parameters)==null?void 0:gn.docs)==null?void 0:vn.source}}};var un,_n,fn;j.parameters={...j.parameters,docs:{...(un=j.parameters)==null?void 0:un.docs,source:{originalSource:'createCaseStory("2.4-channel-servers-all-removed")',...(fn=(_n=j.parameters)==null?void 0:_n.docs)==null?void 0:fn.source}}};var hn,yn,bn;O.parameters={...O.parameters,docs:{...(hn=O.parameters)==null?void 0:hn.docs,source:{originalSource:'createCaseStory("3.1-channel-servers0-bindings-kafka-bindingVersion-changed")',...(bn=(yn=O.parameters)==null?void 0:yn.docs)==null?void 0:bn.source}}};var Mn,Tn,kn;P.parameters={...P.parameters,docs:{...(Mn=P.parameters)==null?void 0:Mn.docs,source:{originalSource:'createCaseStory("3.2-channel-servers0-bindings-kafka-bindingVersion-removed")',...(kn=(Tn=P.parameters)==null?void 0:Tn.docs)==null?void 0:kn.source}}};var $n,Cn,An;I.parameters={...I.parameters,docs:{...($n=I.parameters)==null?void 0:$n.docs,source:{originalSource:'createCaseStory("3.3-channel-servers0-bindings-kafka-bindingVersion-added")',...(An=(Cn=I.parameters)==null?void 0:Cn.docs)==null?void 0:An.source}}};var qn,Sn,xn;V.parameters={...V.parameters,docs:{...(qn=V.parameters)==null?void 0:qn.docs,source:{originalSource:'createCaseStory("4.1-channel-server-bindings-kafka-internal-jso-changes")',...(xn=(Sn=V.parameters)==null?void 0:Sn.docs)==null?void 0:xn.source}}};var jn,On,Pn;L.parameters={...L.parameters,docs:{...(jn=L.parameters)==null?void 0:jn.docs,source:{originalSource:'createCaseStory("5.1-channel-servers-one-item-removed")',...(Pn=(On=L.parameters)==null?void 0:On.docs)==null?void 0:Pn.source}}};var In,Vn,Ln;R.parameters={...R.parameters,docs:{...(In=R.parameters)==null?void 0:In.docs,source:{originalSource:'createCaseStory("5.2-channel-servers-one-item-added")',...(Ln=(Vn=R.parameters)==null?void 0:Vn.docs)==null?void 0:Ln.source}}};const Ia=["Case_1_1_channel_servers_host_protocol_changed","Case_1_2_channel_server_description_changed","Case_1_3_channel_server_description_removed","Case_1_4_channel_server_description_added","Case_1_5_channel_server_long_description_changed","Case_1_6_channel_server_long_description_removed","Case_1_7_channel_server_long_description_added","Case_1_8_channel_server_summary_changed","Case_1_9_channel_server_summary_removed","Case_1_10_channel_server_summary_added","Case_1_11_channel_server_long_summary_changed","Case_1_12_channel_server_long_summary_removed","Case_1_13_channel_server_long_summary_added","Case_1_14_channel_server_description_moved_to_summary","Case_1_15_channel_server_long_description_moved_to_summary","Case_1_16_channel_server_long_description_moved_to_long_summary","Case_1_17_channel_server_description_moved_to_long_summary","Case_1_18_channel_server_summary_moved_to_description","Case_1_19_channel_server_long_summary_moved_to_description","Case_1_20_channel_server_long_summary_moved_to_long_description","Case_1_21_channel_server_summary_moved_to_long_description","Case_1_22_channel_servers_description_set","Case_1_23_channel_servers_summary_set","Case_2_1_channel_servers0_bindings_add_one_more_binding","Case_2_2_channel_servers0_bindings_remove_one_of_several_bindings","Case_2_3_channel_servers0_bindings_add_bindings","Case_2_4_channel_servers0_bindings_remove_bindings","Case_2_3_channel_servers_all_added","Case_2_4_channel_servers_all_removed","Case_3_1_channel_servers0_bindings_kafka_bindingVersion_changed","Case_3_2_channel_servers0_bindings_kafka_bindingVersion_removed","Case_3_3_channel_servers0_bindings_kafka_bindingVersion_added","Case_4_1_channel_server_bindings_kafka_internal_jso_changes","Case_5_1_channel_servers_one_item_removed","Case_5_2_channel_servers_one_item_added"];export{p as Case_1_10_channel_server_summary_added,d as Case_1_11_channel_server_long_summary_changed,g as Case_1_12_channel_server_long_summary_removed,v as Case_1_13_channel_server_long_summary_added,u as Case_1_14_channel_server_description_moved_to_summary,_ as Case_1_15_channel_server_long_description_moved_to_summary,f as Case_1_16_channel_server_long_description_moved_to_long_summary,h as Case_1_17_channel_server_description_moved_to_long_summary,y as Case_1_18_channel_server_summary_moved_to_description,b as Case_1_19_channel_server_long_summary_moved_to_description,s as Case_1_1_channel_servers_host_protocol_changed,M as Case_1_20_channel_server_long_summary_moved_to_long_description,T as Case_1_21_channel_server_summary_moved_to_long_description,k as Case_1_22_channel_servers_description_set,$ as Case_1_23_channel_servers_summary_set,a as Case_1_2_channel_server_description_changed,r as Case_1_3_channel_server_description_removed,t as Case_1_4_channel_server_description_added,o as Case_1_5_channel_server_long_description_changed,i as Case_1_6_channel_server_long_description_removed,c as Case_1_7_channel_server_long_description_added,m as Case_1_8_channel_server_summary_changed,l as Case_1_9_channel_server_summary_removed,C as Case_2_1_channel_servers0_bindings_add_one_more_binding,A as Case_2_2_channel_servers0_bindings_remove_one_of_several_bindings,q as Case_2_3_channel_servers0_bindings_add_bindings,x as Case_2_3_channel_servers_all_added,S as Case_2_4_channel_servers0_bindings_remove_bindings,j as Case_2_4_channel_servers_all_removed,O as Case_3_1_channel_servers0_bindings_kafka_bindingVersion_changed,P as Case_3_2_channel_servers0_bindings_kafka_bindingVersion_removed,I as Case_3_3_channel_servers0_bindings_kafka_bindingVersion_added,V as Case_4_1_channel_server_bindings_kafka_internal_jso_changes,L as Case_5_1_channel_servers_one_item_removed,R as Case_5_2_channel_servers_one_item_added,Ia as __namedExportsOrder,Pa as default};
