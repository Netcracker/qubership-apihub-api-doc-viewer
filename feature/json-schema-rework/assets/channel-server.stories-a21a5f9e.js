import{j as Dn}from"./_commonjs-dynamic-modules-6308e768.js";import{a as Nn}from"./AsyncApiOperationViewer-908de172.js";import{c as En}from"./diffs-samples-cases-91c2d1e6.js";import{a as Un,c as Gn,b as Hn}from"./async-api-diffs-utils-1d7606b0.js";import{b as Kn}from"./sample-cases-8c510854.js";import"./index-f46741a2.js";import"./UxBadge-190a23d2.js";import"./IndexesNodeViewer-fee5cd8c.js";import"./DdlTableDiffsViewer-fd6285f4.js";/* empty css              */import"./DdlTableViewer-628f1b1b.js";import"./GraphQLOperationDiffViewer-8a73b026.js";import"./GraphPropNodeViewer-687f278e.js";import"./index-415bee12.js";import"./GraphQLOperationViewer-d1208066.js";import"./index-d5b0668c.js";import"./index-442a5f79.js";import"./preprocess-39b8762b.js";import"./test-diff-meta-keys-5677f54d.js";import"./parse-yaml-source-3e95a000.js";import"./public-api-99af098d.js";const Qn=`asyncapi: 3.0.0
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
    description: channel-server description
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
    description: Long channel-server description. Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum sed ut perspiciatis unde omnis iste natus error sit voluptatem
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
    summary: channel-server summary
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
    summary: channel-server summary
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
operations:
  sendOperation:
    action: send
    channel:
      $ref: '#/channels/testChannel'
    messages:
      - $ref: '#/components/messages/TestMessage'
components:
  messages:
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
operations:
  sendOperation:
    action: send
    channel:
      $ref: '#/channels/testChannel'
    messages:
      - $ref: '#/components/messages/TestMessage'
components:
  messages:
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
    description: channel-server description
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
    description: CHANGED long channel-server description. Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium
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
      amqp:
        bindingVersion: 0.3.0
        connectionName: sample-server-connection
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
`,oa=Object.assign({"../../../../samples/async-api-diffs/channel-server/1.1-channel-servers-host-protocol-changed/before.yaml":Qn,"../../../../samples/async-api-diffs/channel-server/1.10-channel-server-summary-added/before.yaml":wn,"../../../../samples/async-api-diffs/channel-server/1.11-channel-server-long-summary-changed/before.yaml":Bn,"../../../../samples/async-api-diffs/channel-server/1.12-channel-server-long-summary-removed/before.yaml":Fn,"../../../../samples/async-api-diffs/channel-server/1.13-channel-server-long-summary-added/before.yaml":Jn,"../../../../samples/async-api-diffs/channel-server/1.14-channel-server-description-moved-to-summary/before.yaml":zn,"../../../../samples/async-api-diffs/channel-server/1.15-channel-server-long-description-moved-to-summary/before.yaml":Wn,"../../../../samples/async-api-diffs/channel-server/1.16-channel-server-long-description-moved-to-long-summary/before.yaml":Xn,"../../../../samples/async-api-diffs/channel-server/1.17-channel-server-description-moved-to-long-summary/before.yaml":Yn,"../../../../samples/async-api-diffs/channel-server/1.18-channel-server-summary-moved-to-description/before.yaml":Zn,"../../../../samples/async-api-diffs/channel-server/1.19-channel-server-long-summary-moved-to-description/before.yaml":es,"../../../../samples/async-api-diffs/channel-server/1.2-channel-server-description-changed/before.yaml":ns,"../../../../samples/async-api-diffs/channel-server/1.20-channel-server-long-summary-moved-to-long-description/before.yaml":ss,"../../../../samples/async-api-diffs/channel-server/1.21-channel-server-summary-moved-to-long-description/before.yaml":as,"../../../../samples/async-api-diffs/channel-server/1.22-channel-servers-description-set/before.yaml":rs,"../../../../samples/async-api-diffs/channel-server/1.23-channel-servers-summary-set/before.yaml":ts,"../../../../samples/async-api-diffs/channel-server/1.3-channel-server-description-removed/before.yaml":os,"../../../../samples/async-api-diffs/channel-server/1.4-channel-server-description-added/before.yaml":is,"../../../../samples/async-api-diffs/channel-server/1.5-channel-server-long-description-changed/before.yaml":cs,"../../../../samples/async-api-diffs/channel-server/1.6-channel-server-long-description-removed/before.yaml":ms,"../../../../samples/async-api-diffs/channel-server/1.7-channel-server-long-description-added/before.yaml":ls,"../../../../samples/async-api-diffs/channel-server/1.8-channel-server-summary-changed/before.yaml":ps,"../../../../samples/async-api-diffs/channel-server/1.9-channel-server-summary-removed/before.yaml":ds,"../../../../samples/async-api-diffs/channel-server/2.1-channel-servers0-bindings-add-one-more-binding/before.yaml":gs,"../../../../samples/async-api-diffs/channel-server/2.2-channel-servers0-bindings-remove-one-of-several-bindings/before.yaml":vs,"../../../../samples/async-api-diffs/channel-server/2.3-channel-servers-all-added/before.yaml":us,"../../../../samples/async-api-diffs/channel-server/2.3-channel-servers0-bindings-add-bindings/before.yaml":_s,"../../../../samples/async-api-diffs/channel-server/2.4-channel-servers-all-removed/before.yaml":fs,"../../../../samples/async-api-diffs/channel-server/2.4-channel-servers0-bindings-remove-bindings/before.yaml":hs,"../../../../samples/async-api-diffs/channel-server/3.1-channel-servers0-bindings-kafka-bindingVersion-changed/before.yaml":ys,"../../../../samples/async-api-diffs/channel-server/3.2-channel-servers0-bindings-kafka-bindingVersion-removed/before.yaml":bs,"../../../../samples/async-api-diffs/channel-server/3.3-channel-servers0-bindings-kafka-bindingVersion-added/before.yaml":Ms,"../../../../samples/async-api-diffs/channel-server/4.1-channel-server-bindings-kafka-internal-jso-changes/before.yaml":Ts,"../../../../samples/async-api-diffs/channel-server/5.1-channel-servers-one-item-removed/before.yaml":ks,"../../../../samples/async-api-diffs/channel-server/5.2-channel-servers-one-item-added/before.yaml":$s}),ia=Object.assign({"../../../../samples/async-api-diffs/channel-server/1.1-channel-servers-host-protocol-changed/after.yaml":Cs,"../../../../samples/async-api-diffs/channel-server/1.10-channel-server-summary-added/after.yaml":qs,"../../../../samples/async-api-diffs/channel-server/1.11-channel-server-long-summary-changed/after.yaml":As,"../../../../samples/async-api-diffs/channel-server/1.12-channel-server-long-summary-removed/after.yaml":Ss,"../../../../samples/async-api-diffs/channel-server/1.13-channel-server-long-summary-added/after.yaml":xs,"../../../../samples/async-api-diffs/channel-server/1.14-channel-server-description-moved-to-summary/after.yaml":js,"../../../../samples/async-api-diffs/channel-server/1.15-channel-server-long-description-moved-to-summary/after.yaml":Ps,"../../../../samples/async-api-diffs/channel-server/1.16-channel-server-long-description-moved-to-long-summary/after.yaml":Os,"../../../../samples/async-api-diffs/channel-server/1.17-channel-server-description-moved-to-long-summary/after.yaml":Is,"../../../../samples/async-api-diffs/channel-server/1.18-channel-server-summary-moved-to-description/after.yaml":Vs,"../../../../samples/async-api-diffs/channel-server/1.19-channel-server-long-summary-moved-to-description/after.yaml":Ls,"../../../../samples/async-api-diffs/channel-server/1.2-channel-server-description-changed/after.yaml":Rs,"../../../../samples/async-api-diffs/channel-server/1.20-channel-server-long-summary-moved-to-long-description/after.yaml":Ds,"../../../../samples/async-api-diffs/channel-server/1.21-channel-server-summary-moved-to-long-description/after.yaml":Ns,"../../../../samples/async-api-diffs/channel-server/1.22-channel-servers-description-set/after.yaml":Es,"../../../../samples/async-api-diffs/channel-server/1.23-channel-servers-summary-set/after.yaml":Us,"../../../../samples/async-api-diffs/channel-server/1.3-channel-server-description-removed/after.yaml":Gs,"../../../../samples/async-api-diffs/channel-server/1.4-channel-server-description-added/after.yaml":Hs,"../../../../samples/async-api-diffs/channel-server/1.5-channel-server-long-description-changed/after.yaml":Ks,"../../../../samples/async-api-diffs/channel-server/1.6-channel-server-long-description-removed/after.yaml":Qs,"../../../../samples/async-api-diffs/channel-server/1.7-channel-server-long-description-added/after.yaml":ws,"../../../../samples/async-api-diffs/channel-server/1.8-channel-server-summary-changed/after.yaml":Bs,"../../../../samples/async-api-diffs/channel-server/1.9-channel-server-summary-removed/after.yaml":Fs,"../../../../samples/async-api-diffs/channel-server/2.1-channel-servers0-bindings-add-one-more-binding/after.yaml":Js,"../../../../samples/async-api-diffs/channel-server/2.2-channel-servers0-bindings-remove-one-of-several-bindings/after.yaml":zs,"../../../../samples/async-api-diffs/channel-server/2.3-channel-servers-all-added/after.yaml":Ws,"../../../../samples/async-api-diffs/channel-server/2.3-channel-servers0-bindings-add-bindings/after.yaml":Xs,"../../../../samples/async-api-diffs/channel-server/2.4-channel-servers-all-removed/after.yaml":Ys,"../../../../samples/async-api-diffs/channel-server/2.4-channel-servers0-bindings-remove-bindings/after.yaml":Zs,"../../../../samples/async-api-diffs/channel-server/3.1-channel-servers0-bindings-kafka-bindingVersion-changed/after.yaml":ea,"../../../../samples/async-api-diffs/channel-server/3.2-channel-servers0-bindings-kafka-bindingVersion-removed/after.yaml":na,"../../../../samples/async-api-diffs/channel-server/3.3-channel-servers0-bindings-kafka-bindingVersion-added/after.yaml":sa,"../../../../samples/async-api-diffs/channel-server/4.1-channel-server-bindings-kafka-internal-jso-changes/after.yaml":aa,"../../../../samples/async-api-diffs/channel-server/5.1-channel-servers-one-item-removed/after.yaml":ra,"../../../../samples/async-api-diffs/channel-server/5.2-channel-servers-one-item-added/after.yaml":ta}),ca=En(oa,ia),ma=Kn(ca),Ln=({beforeYaml:R,afterYaml:Rn})=>Dn.jsx(Nn,{...Gn(R,Rn)}),Oa={title:"Async API Diffs Suite/Channel Server Samples",component:Ln,argTypes:Un},la=Hn(Ln,ma,"message-channel"),e=R=>la(R),n=e("1.1-channel-servers-host-protocol-changed"),s=e("1.2-channel-server-description-changed"),a=e("1.3-channel-server-description-removed"),r=e("1.4-channel-server-description-added"),t=e("1.5-channel-server-long-description-changed"),o=e("1.6-channel-server-long-description-removed"),i=e("1.7-channel-server-long-description-added"),c=e("1.8-channel-server-summary-changed"),m=e("1.9-channel-server-summary-removed"),l=e("1.10-channel-server-summary-added"),p=e("1.11-channel-server-long-summary-changed"),d=e("1.12-channel-server-long-summary-removed"),g=e("1.13-channel-server-long-summary-added"),v=e("1.14-channel-server-description-moved-to-summary"),u=e("1.15-channel-server-long-description-moved-to-summary"),_=e("1.16-channel-server-long-description-moved-to-long-summary"),f=e("1.17-channel-server-description-moved-to-long-summary"),h=e("1.18-channel-server-summary-moved-to-description"),y=e("1.19-channel-server-long-summary-moved-to-description"),b=e("1.20-channel-server-long-summary-moved-to-long-description"),M=e("1.21-channel-server-summary-moved-to-long-description"),T=e("1.22-channel-servers-description-set"),k=e("1.23-channel-servers-summary-set"),$=e("2.1-channel-servers0-bindings-add-one-more-binding"),C=e("2.2-channel-servers0-bindings-remove-one-of-several-bindings"),q=e("2.3-channel-servers0-bindings-add-bindings"),A=e("2.4-channel-servers0-bindings-remove-bindings"),S=e("2.3-channel-servers-all-added"),x=e("2.4-channel-servers-all-removed"),j=e("3.1-channel-servers0-bindings-kafka-bindingVersion-changed"),P=e("3.2-channel-servers0-bindings-kafka-bindingVersion-removed"),O=e("3.3-channel-servers0-bindings-kafka-bindingVersion-added"),I=e("4.1-channel-server-bindings-kafka-internal-jso-changes"),V=e("5.1-channel-servers-one-item-removed"),L=e("5.2-channel-servers-one-item-added");var D,N,E;n.parameters={...n.parameters,docs:{...(D=n.parameters)==null?void 0:D.docs,source:{originalSource:'createCaseStory("1.1-channel-servers-host-protocol-changed")',...(E=(N=n.parameters)==null?void 0:N.docs)==null?void 0:E.source}}};var U,G,H;s.parameters={...s.parameters,docs:{...(U=s.parameters)==null?void 0:U.docs,source:{originalSource:'createCaseStory("1.2-channel-server-description-changed")',...(H=(G=s.parameters)==null?void 0:G.docs)==null?void 0:H.source}}};var K,Q,w;a.parameters={...a.parameters,docs:{...(K=a.parameters)==null?void 0:K.docs,source:{originalSource:'createCaseStory("1.3-channel-server-description-removed")',...(w=(Q=a.parameters)==null?void 0:Q.docs)==null?void 0:w.source}}};var B,F,J;r.parameters={...r.parameters,docs:{...(B=r.parameters)==null?void 0:B.docs,source:{originalSource:'createCaseStory("1.4-channel-server-description-added")',...(J=(F=r.parameters)==null?void 0:F.docs)==null?void 0:J.source}}};var z,W,X;t.parameters={...t.parameters,docs:{...(z=t.parameters)==null?void 0:z.docs,source:{originalSource:'createCaseStory("1.5-channel-server-long-description-changed")',...(X=(W=t.parameters)==null?void 0:W.docs)==null?void 0:X.source}}};var Y,Z,ee;o.parameters={...o.parameters,docs:{...(Y=o.parameters)==null?void 0:Y.docs,source:{originalSource:'createCaseStory("1.6-channel-server-long-description-removed")',...(ee=(Z=o.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var ne,se,ae;i.parameters={...i.parameters,docs:{...(ne=i.parameters)==null?void 0:ne.docs,source:{originalSource:'createCaseStory("1.7-channel-server-long-description-added")',...(ae=(se=i.parameters)==null?void 0:se.docs)==null?void 0:ae.source}}};var re,te,oe;c.parameters={...c.parameters,docs:{...(re=c.parameters)==null?void 0:re.docs,source:{originalSource:'createCaseStory("1.8-channel-server-summary-changed")',...(oe=(te=c.parameters)==null?void 0:te.docs)==null?void 0:oe.source}}};var ie,ce,me;m.parameters={...m.parameters,docs:{...(ie=m.parameters)==null?void 0:ie.docs,source:{originalSource:'createCaseStory("1.9-channel-server-summary-removed")',...(me=(ce=m.parameters)==null?void 0:ce.docs)==null?void 0:me.source}}};var le,pe,de;l.parameters={...l.parameters,docs:{...(le=l.parameters)==null?void 0:le.docs,source:{originalSource:'createCaseStory("1.10-channel-server-summary-added")',...(de=(pe=l.parameters)==null?void 0:pe.docs)==null?void 0:de.source}}};var ge,ve,ue;p.parameters={...p.parameters,docs:{...(ge=p.parameters)==null?void 0:ge.docs,source:{originalSource:'createCaseStory("1.11-channel-server-long-summary-changed")',...(ue=(ve=p.parameters)==null?void 0:ve.docs)==null?void 0:ue.source}}};var _e,fe,he;d.parameters={...d.parameters,docs:{...(_e=d.parameters)==null?void 0:_e.docs,source:{originalSource:'createCaseStory("1.12-channel-server-long-summary-removed")',...(he=(fe=d.parameters)==null?void 0:fe.docs)==null?void 0:he.source}}};var ye,be,Me;g.parameters={...g.parameters,docs:{...(ye=g.parameters)==null?void 0:ye.docs,source:{originalSource:'createCaseStory("1.13-channel-server-long-summary-added")',...(Me=(be=g.parameters)==null?void 0:be.docs)==null?void 0:Me.source}}};var Te,ke,$e;v.parameters={...v.parameters,docs:{...(Te=v.parameters)==null?void 0:Te.docs,source:{originalSource:'createCaseStory("1.14-channel-server-description-moved-to-summary")',...($e=(ke=v.parameters)==null?void 0:ke.docs)==null?void 0:$e.source}}};var Ce,qe,Ae;u.parameters={...u.parameters,docs:{...(Ce=u.parameters)==null?void 0:Ce.docs,source:{originalSource:'createCaseStory("1.15-channel-server-long-description-moved-to-summary")',...(Ae=(qe=u.parameters)==null?void 0:qe.docs)==null?void 0:Ae.source}}};var Se,xe,je;_.parameters={..._.parameters,docs:{...(Se=_.parameters)==null?void 0:Se.docs,source:{originalSource:'createCaseStory("1.16-channel-server-long-description-moved-to-long-summary")',...(je=(xe=_.parameters)==null?void 0:xe.docs)==null?void 0:je.source}}};var Pe,Oe,Ie;f.parameters={...f.parameters,docs:{...(Pe=f.parameters)==null?void 0:Pe.docs,source:{originalSource:'createCaseStory("1.17-channel-server-description-moved-to-long-summary")',...(Ie=(Oe=f.parameters)==null?void 0:Oe.docs)==null?void 0:Ie.source}}};var Ve,Le,Re;h.parameters={...h.parameters,docs:{...(Ve=h.parameters)==null?void 0:Ve.docs,source:{originalSource:'createCaseStory("1.18-channel-server-summary-moved-to-description")',...(Re=(Le=h.parameters)==null?void 0:Le.docs)==null?void 0:Re.source}}};var De,Ne,Ee;y.parameters={...y.parameters,docs:{...(De=y.parameters)==null?void 0:De.docs,source:{originalSource:'createCaseStory("1.19-channel-server-long-summary-moved-to-description")',...(Ee=(Ne=y.parameters)==null?void 0:Ne.docs)==null?void 0:Ee.source}}};var Ue,Ge,He;b.parameters={...b.parameters,docs:{...(Ue=b.parameters)==null?void 0:Ue.docs,source:{originalSource:'createCaseStory("1.20-channel-server-long-summary-moved-to-long-description")',...(He=(Ge=b.parameters)==null?void 0:Ge.docs)==null?void 0:He.source}}};var Ke,Qe,we;M.parameters={...M.parameters,docs:{...(Ke=M.parameters)==null?void 0:Ke.docs,source:{originalSource:'createCaseStory("1.21-channel-server-summary-moved-to-long-description")',...(we=(Qe=M.parameters)==null?void 0:Qe.docs)==null?void 0:we.source}}};var Be,Fe,Je;T.parameters={...T.parameters,docs:{...(Be=T.parameters)==null?void 0:Be.docs,source:{originalSource:'createCaseStory("1.22-channel-servers-description-set")',...(Je=(Fe=T.parameters)==null?void 0:Fe.docs)==null?void 0:Je.source}}};var ze,We,Xe;k.parameters={...k.parameters,docs:{...(ze=k.parameters)==null?void 0:ze.docs,source:{originalSource:'createCaseStory("1.23-channel-servers-summary-set")',...(Xe=(We=k.parameters)==null?void 0:We.docs)==null?void 0:Xe.source}}};var Ye,Ze,en;$.parameters={...$.parameters,docs:{...(Ye=$.parameters)==null?void 0:Ye.docs,source:{originalSource:'createCaseStory("2.1-channel-servers0-bindings-add-one-more-binding")',...(en=(Ze=$.parameters)==null?void 0:Ze.docs)==null?void 0:en.source}}};var nn,sn,an;C.parameters={...C.parameters,docs:{...(nn=C.parameters)==null?void 0:nn.docs,source:{originalSource:'createCaseStory("2.2-channel-servers0-bindings-remove-one-of-several-bindings")',...(an=(sn=C.parameters)==null?void 0:sn.docs)==null?void 0:an.source}}};var rn,tn,on;q.parameters={...q.parameters,docs:{...(rn=q.parameters)==null?void 0:rn.docs,source:{originalSource:'createCaseStory("2.3-channel-servers0-bindings-add-bindings")',...(on=(tn=q.parameters)==null?void 0:tn.docs)==null?void 0:on.source}}};var cn,mn,ln;A.parameters={...A.parameters,docs:{...(cn=A.parameters)==null?void 0:cn.docs,source:{originalSource:'createCaseStory("2.4-channel-servers0-bindings-remove-bindings")',...(ln=(mn=A.parameters)==null?void 0:mn.docs)==null?void 0:ln.source}}};var pn,dn,gn;S.parameters={...S.parameters,docs:{...(pn=S.parameters)==null?void 0:pn.docs,source:{originalSource:'createCaseStory("2.3-channel-servers-all-added")',...(gn=(dn=S.parameters)==null?void 0:dn.docs)==null?void 0:gn.source}}};var vn,un,_n;x.parameters={...x.parameters,docs:{...(vn=x.parameters)==null?void 0:vn.docs,source:{originalSource:'createCaseStory("2.4-channel-servers-all-removed")',...(_n=(un=x.parameters)==null?void 0:un.docs)==null?void 0:_n.source}}};var fn,hn,yn;j.parameters={...j.parameters,docs:{...(fn=j.parameters)==null?void 0:fn.docs,source:{originalSource:'createCaseStory("3.1-channel-servers0-bindings-kafka-bindingVersion-changed")',...(yn=(hn=j.parameters)==null?void 0:hn.docs)==null?void 0:yn.source}}};var bn,Mn,Tn;P.parameters={...P.parameters,docs:{...(bn=P.parameters)==null?void 0:bn.docs,source:{originalSource:'createCaseStory("3.2-channel-servers0-bindings-kafka-bindingVersion-removed")',...(Tn=(Mn=P.parameters)==null?void 0:Mn.docs)==null?void 0:Tn.source}}};var kn,$n,Cn;O.parameters={...O.parameters,docs:{...(kn=O.parameters)==null?void 0:kn.docs,source:{originalSource:'createCaseStory("3.3-channel-servers0-bindings-kafka-bindingVersion-added")',...(Cn=($n=O.parameters)==null?void 0:$n.docs)==null?void 0:Cn.source}}};var qn,An,Sn;I.parameters={...I.parameters,docs:{...(qn=I.parameters)==null?void 0:qn.docs,source:{originalSource:'createCaseStory("4.1-channel-server-bindings-kafka-internal-jso-changes")',...(Sn=(An=I.parameters)==null?void 0:An.docs)==null?void 0:Sn.source}}};var xn,jn,Pn;V.parameters={...V.parameters,docs:{...(xn=V.parameters)==null?void 0:xn.docs,source:{originalSource:'createCaseStory("5.1-channel-servers-one-item-removed")',...(Pn=(jn=V.parameters)==null?void 0:jn.docs)==null?void 0:Pn.source}}};var On,In,Vn;L.parameters={...L.parameters,docs:{...(On=L.parameters)==null?void 0:On.docs,source:{originalSource:'createCaseStory("5.2-channel-servers-one-item-added")',...(Vn=(In=L.parameters)==null?void 0:In.docs)==null?void 0:Vn.source}}};const Ia=["Case_1_1_channel_servers_host_protocol_changed","Case_1_2_channel_server_description_changed","Case_1_3_channel_server_description_removed","Case_1_4_channel_server_description_added","Case_1_5_channel_server_long_description_changed","Case_1_6_channel_server_long_description_removed","Case_1_7_channel_server_long_description_added","Case_1_8_channel_server_summary_changed","Case_1_9_channel_server_summary_removed","Case_1_10_channel_server_summary_added","Case_1_11_channel_server_long_summary_changed","Case_1_12_channel_server_long_summary_removed","Case_1_13_channel_server_long_summary_added","Case_1_14_channel_server_description_moved_to_summary","Case_1_15_channel_server_long_description_moved_to_summary","Case_1_16_channel_server_long_description_moved_to_long_summary","Case_1_17_channel_server_description_moved_to_long_summary","Case_1_18_channel_server_summary_moved_to_description","Case_1_19_channel_server_long_summary_moved_to_description","Case_1_20_channel_server_long_summary_moved_to_long_description","Case_1_21_channel_server_summary_moved_to_long_description","Case_1_22_channel_servers_description_set","Case_1_23_channel_servers_summary_set","Case_2_1_channel_servers0_bindings_add_one_more_binding","Case_2_2_channel_servers0_bindings_remove_one_of_several_bindings","Case_2_3_channel_servers0_bindings_add_bindings","Case_2_4_channel_servers0_bindings_remove_bindings","Case_2_3_channel_servers_all_added","Case_2_4_channel_servers_all_removed","Case_3_1_channel_servers0_bindings_kafka_bindingVersion_changed","Case_3_2_channel_servers0_bindings_kafka_bindingVersion_removed","Case_3_3_channel_servers0_bindings_kafka_bindingVersion_added","Case_4_1_channel_server_bindings_kafka_internal_jso_changes","Case_5_1_channel_servers_one_item_removed","Case_5_2_channel_servers_one_item_added"];export{l as Case_1_10_channel_server_summary_added,p as Case_1_11_channel_server_long_summary_changed,d as Case_1_12_channel_server_long_summary_removed,g as Case_1_13_channel_server_long_summary_added,v as Case_1_14_channel_server_description_moved_to_summary,u as Case_1_15_channel_server_long_description_moved_to_summary,_ as Case_1_16_channel_server_long_description_moved_to_long_summary,f as Case_1_17_channel_server_description_moved_to_long_summary,h as Case_1_18_channel_server_summary_moved_to_description,y as Case_1_19_channel_server_long_summary_moved_to_description,n as Case_1_1_channel_servers_host_protocol_changed,b as Case_1_20_channel_server_long_summary_moved_to_long_description,M as Case_1_21_channel_server_summary_moved_to_long_description,T as Case_1_22_channel_servers_description_set,k as Case_1_23_channel_servers_summary_set,s as Case_1_2_channel_server_description_changed,a as Case_1_3_channel_server_description_removed,r as Case_1_4_channel_server_description_added,t as Case_1_5_channel_server_long_description_changed,o as Case_1_6_channel_server_long_description_removed,i as Case_1_7_channel_server_long_description_added,c as Case_1_8_channel_server_summary_changed,m as Case_1_9_channel_server_summary_removed,$ as Case_2_1_channel_servers0_bindings_add_one_more_binding,C as Case_2_2_channel_servers0_bindings_remove_one_of_several_bindings,q as Case_2_3_channel_servers0_bindings_add_bindings,S as Case_2_3_channel_servers_all_added,A as Case_2_4_channel_servers0_bindings_remove_bindings,x as Case_2_4_channel_servers_all_removed,j as Case_3_1_channel_servers0_bindings_kafka_bindingVersion_changed,P as Case_3_2_channel_servers0_bindings_kafka_bindingVersion_removed,O as Case_3_3_channel_servers0_bindings_kafka_bindingVersion_added,I as Case_4_1_channel_server_bindings_kafka_internal_jso_changes,V as Case_5_1_channel_servers_one_item_removed,L as Case_5_2_channel_servers_one_item_added,Ia as __namedExportsOrder,Oa as default};
