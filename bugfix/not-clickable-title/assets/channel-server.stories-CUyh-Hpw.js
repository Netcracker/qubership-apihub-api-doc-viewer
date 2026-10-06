import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t as ee}from"./jsx-runtime-ATHzeHXA.js";import{f as te,p as ne}from"./AsyncApiOperationViewer-GQiP-9Ep.js";import{i as re,r as ie}from"./sample-cases-DDoAHGgD.js";import{n as ae,t as oe}from"./diffs-samples-cases-Bp0vvMWA.js";import{i as se,n as ce,r as le,t as ue}from"./async-api-diffs-utils-DCcLNj-J.js";var de;function fe(){return(fe=e((()=>{de=`asyncapi: 3.0.0
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
`})))()}var pe;function me(){return(me=e((()=>{pe=`asyncapi: 3.0.0
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
`})))()}var he;function ge(){return(ge=e((()=>{he=`asyncapi: 3.0.0
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
`})))()}var _e;function ve(){return(ve=e((()=>{_e=`asyncapi: 3.0.0
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
`})))()}var ye;function be(){return(be=e((()=>{ye=`asyncapi: 3.0.0
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
`})))()}var xe;function Se(){return(Se=e((()=>{xe=`asyncapi: 3.0.0
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
`})))()}var Ce;function we(){return(we=e((()=>{Ce=`asyncapi: 3.0.0
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
`})))()}var Te;function Ee(){return(Ee=e((()=>{Te=`asyncapi: 3.0.0
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
`})))()}var De;function Oe(){return(Oe=e((()=>{De=`asyncapi: 3.0.0
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
`})))()}var ke;function Ae(){return(Ae=e((()=>{ke=`asyncapi: 3.0.0
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
`})))()}var je;function Me(){return(Me=e((()=>{je=`asyncapi: 3.0.0
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
`})))()}var Ne;function Pe(){return(Pe=e((()=>{Ne=`asyncapi: 3.0.0
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
`})))()}var Fe;function Ie(){return(Ie=e((()=>{Fe=`asyncapi: 3.0.0
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
`})))()}var Le;function Re(){return(Re=e((()=>{Le=`asyncapi: 3.0.0
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
`})))()}var t;function n(){return(n=e((()=>{t=`asyncapi: 3.0.0
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
`})))()}var r;function i(){return(i=e((()=>{r=`asyncapi: 3.0.0
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
`})))()}var a;function o(){return(o=e((()=>{a=`asyncapi: 3.0.0
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
`})))()}var s;function c(){return(c=e((()=>{s=`asyncapi: 3.0.0
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
`})))()}var l;function u(){return(u=e((()=>{l=`asyncapi: 3.0.0
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
`})))()}var d;function f(){return(f=e((()=>{d=`asyncapi: 3.0.0
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
`})))()}var p;function m(){return(m=e((()=>{p=`asyncapi: 3.0.0
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
`})))()}var h;function ze(){return(ze=e((()=>{h=`asyncapi: 3.0.0
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
`})))()}var Be;function Ve(){return(Ve=e((()=>{Be=`asyncapi: 3.0.0
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
`})))()}var He;function Ue(){return(Ue=e((()=>{He=`asyncapi: 3.0.0
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
`})))()}var We;function Ge(){return(Ge=e((()=>{We=`asyncapi: 3.0.0
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
`})))()}var Ke;function qe(){return(qe=e((()=>{Ke=`asyncapi: 3.0.0
info:
  title: Sample AsyncAPI
  version: 1.0.0
channels:
  testChannel:
    address: events.default
    messages:
      TestMessage:
        $ref: '#/components/messages/TestMessage'
operations:
  sendOperation:
    action: send
    channel:
      $ref: '#/channels/testChannel'
    messages:
      - $ref: '#/components/messages/TestMessage'
components:
  messages:
    TestMessage:
      name: TestMessage
      payload:
        type: object
        properties:
          id:
            type: string
        required:
          - id
`})))()}var Je;function Ye(){return(Ye=e((()=>{Je=`asyncapi: 3.0.0
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
`})))()}var Xe;function Ze(){return(Ze=e((()=>{Xe=`asyncapi: 3.0.0
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
`})))()}var Qe;function $e(){return($e=e((()=>{Qe=`asyncapi: 3.0.0
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
`})))()}var et;function tt(){return(tt=e((()=>{et=`asyncapi: 3.0.0
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
`})))()}var nt;function rt(){return(rt=e((()=>{nt=`asyncapi: 3.0.0
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
`})))()}var it;function at(){return(at=e((()=>{it=`asyncapi: 3.0.0
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
`})))()}var ot;function st(){return(st=e((()=>{ot=`asyncapi: 3.0.0
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
`})))()}var ct;function lt(){return(lt=e((()=>{ct=`asyncapi: 3.0.0
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
`})))()}var ut;function dt(){return(dt=e((()=>{ut=`asyncapi: 3.0.0
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
`})))()}var ft;function pt(){return(pt=e((()=>{ft=`asyncapi: 3.0.0
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
`})))()}var mt;function ht(){return(ht=e((()=>{mt=`asyncapi: 3.0.0
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
`})))()}var gt;function _t(){return(_t=e((()=>{gt=`asyncapi: 3.0.0
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
`})))()}var vt;function yt(){return(yt=e((()=>{vt=`asyncapi: 3.0.0
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
`})))()}var bt;function xt(){return(xt=e((()=>{bt=`asyncapi: 3.0.0
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
`})))()}var St;function Ct(){return(Ct=e((()=>{St=`asyncapi: 3.0.0
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
`})))()}var wt;function Tt(){return(Tt=e((()=>{wt=`asyncapi: 3.0.0
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
`})))()}var Et;function Dt(){return(Dt=e((()=>{Et=`asyncapi: 3.0.0
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
`})))()}var Ot;function kt(){return(kt=e((()=>{Ot=`asyncapi: 3.0.0
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
`})))()}var At;function jt(){return(jt=e((()=>{At=`asyncapi: 3.0.0
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
`})))()}var Mt;function Nt(){return(Nt=e((()=>{Mt=`asyncapi: 3.0.0
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
`})))()}var Pt;function Ft(){return(Ft=e((()=>{Pt=`asyncapi: 3.0.0
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
`})))()}var It;function Lt(){return(Lt=e((()=>{It=`asyncapi: 3.0.0
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
`})))()}var g;function Rt(){return(Rt=e((()=>{g=`asyncapi: 3.0.0
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
`})))()}var zt;function Bt(){return(Bt=e((()=>{zt=`asyncapi: 3.0.0
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
`})))()}var Vt;function Ht(){return(Ht=e((()=>{Vt=`asyncapi: 3.0.0
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
`})))()}var Ut;function Wt(){return(Wt=e((()=>{Ut=`asyncapi: 3.0.0
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
`})))()}var Gt;function Kt(){return(Kt=e((()=>{Gt=`asyncapi: 3.0.0
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
`})))()}var qt;function Jt(){return(Jt=e((()=>{qt=`asyncapi: 3.0.0
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
`})))()}var Yt;function Xt(){return(Xt=e((()=>{Yt=`asyncapi: 3.0.0
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
`})))()}var Zt;function Qt(){return(Qt=e((()=>{Zt=`asyncapi: 3.0.0
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
`})))()}var $t;function en(){return(en=e((()=>{$t=`asyncapi: 3.0.0
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
`})))()}var tn;function nn(){return(nn=e((()=>{tn=`asyncapi: 3.0.0
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
`})))()}var rn;function an(){return(an=e((()=>{rn=`asyncapi: 3.0.0
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
`})))()}var on;function sn(){return(sn=e((()=>{on=`asyncapi: 3.0.0
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
`})))()}var cn;function ln(){return(ln=e((()=>{cn=`asyncapi: 3.0.0
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
`})))()}var un;function dn(){return(dn=e((()=>{un=`asyncapi: 3.0.0
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
`})))()}var fn;function pn(){return(pn=e((()=>{fn=`asyncapi: 3.0.0
info:
  title: Sample AsyncAPI
  version: 1.0.0
channels:
  testChannel:
    address: events.default
    messages:
      TestMessage:
        $ref: '#/components/messages/TestMessage'
operations:
  sendOperation:
    action: send
    channel:
      $ref: '#/channels/testChannel'
    messages:
      - $ref: '#/components/messages/TestMessage'
components:
  messages:
    TestMessage:
      name: TestMessage
      payload:
        type: object
        properties:
          id:
            type: string
        required:
          - id
`})))()}var mn;function hn(){return(hn=e((()=>{mn=`asyncapi: 3.0.0
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
`})))()}var gn;function _n(){return(_n=e((()=>{gn=`asyncapi: 3.0.0
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
`})))()}var vn;function yn(){return(yn=e((()=>{vn=`asyncapi: 3.0.0
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
`})))()}var bn;function xn(){return(xn=e((()=>{bn=`asyncapi: 3.0.0
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
`})))()}var Sn;function Cn(){return(Cn=e((()=>{Sn=`asyncapi: 3.0.0
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
`})))()}var wn;function Tn(){return(Tn=e((()=>{wn=`asyncapi: 3.0.0
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
`})))()}var En;function Dn(){return(Dn=e((()=>{En=`asyncapi: 3.0.0
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
`})))()}var On,kn,An,_,jn,Mn,v,y,b,x,S,C,w,T,E,D,O,k,A,j,M,N,P,F,I,L,R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q,$,Nn;function Pn(){return(Pn=e((()=>{fe(),me(),ge(),ve(),be(),Se(),we(),Ee(),Oe(),Ae(),Me(),Pe(),Ie(),Re(),n(),i(),o(),c(),u(),f(),m(),ze(),Ve(),Ue(),Ge(),qe(),Ye(),Ze(),$e(),tt(),rt(),at(),st(),lt(),dt(),pt(),ht(),_t(),yt(),xt(),Ct(),Tt(),Dt(),kt(),jt(),Nt(),Ft(),Lt(),Rt(),Bt(),Ht(),Wt(),Kt(),Jt(),Xt(),Qt(),en(),nn(),an(),sn(),ln(),dn(),pn(),hn(),_n(),yn(),xn(),Cn(),Tn(),Dn(),ne(),ae(),se(),re(),On=ee(),kn=oe(Object.assign({"../../../../samples/async-api-diffs/channel-server/1.1-channel-servers-host-protocol-changed/before.yaml":de,"../../../../samples/async-api-diffs/channel-server/1.10-channel-server-summary-added/before.yaml":pe,"../../../../samples/async-api-diffs/channel-server/1.11-channel-server-long-summary-changed/before.yaml":he,"../../../../samples/async-api-diffs/channel-server/1.12-channel-server-long-summary-removed/before.yaml":_e,"../../../../samples/async-api-diffs/channel-server/1.13-channel-server-long-summary-added/before.yaml":ye,"../../../../samples/async-api-diffs/channel-server/1.14-channel-server-description-moved-to-summary/before.yaml":xe,"../../../../samples/async-api-diffs/channel-server/1.15-channel-server-long-description-moved-to-summary/before.yaml":Ce,"../../../../samples/async-api-diffs/channel-server/1.16-channel-server-long-description-moved-to-long-summary/before.yaml":Te,"../../../../samples/async-api-diffs/channel-server/1.17-channel-server-description-moved-to-long-summary/before.yaml":De,"../../../../samples/async-api-diffs/channel-server/1.18-channel-server-summary-moved-to-description/before.yaml":ke,"../../../../samples/async-api-diffs/channel-server/1.19-channel-server-long-summary-moved-to-description/before.yaml":je,"../../../../samples/async-api-diffs/channel-server/1.2-channel-server-description-changed/before.yaml":Ne,"../../../../samples/async-api-diffs/channel-server/1.20-channel-server-long-summary-moved-to-long-description/before.yaml":Fe,"../../../../samples/async-api-diffs/channel-server/1.21-channel-server-summary-moved-to-long-description/before.yaml":Le,"../../../../samples/async-api-diffs/channel-server/1.22-channel-servers-description-set/before.yaml":t,"../../../../samples/async-api-diffs/channel-server/1.23-channel-servers-summary-set/before.yaml":r,"../../../../samples/async-api-diffs/channel-server/1.3-channel-server-description-removed/before.yaml":a,"../../../../samples/async-api-diffs/channel-server/1.4-channel-server-description-added/before.yaml":s,"../../../../samples/async-api-diffs/channel-server/1.5-channel-server-long-description-changed/before.yaml":l,"../../../../samples/async-api-diffs/channel-server/1.6-channel-server-long-description-removed/before.yaml":d,"../../../../samples/async-api-diffs/channel-server/1.7-channel-server-long-description-added/before.yaml":p,"../../../../samples/async-api-diffs/channel-server/1.8-channel-server-summary-changed/before.yaml":h,"../../../../samples/async-api-diffs/channel-server/1.9-channel-server-summary-removed/before.yaml":Be,"../../../../samples/async-api-diffs/channel-server/2.1-channel-servers0-bindings-add-one-more-binding/before.yaml":He,"../../../../samples/async-api-diffs/channel-server/2.2-channel-servers0-bindings-remove-one-of-several-bindings/before.yaml":We,"../../../../samples/async-api-diffs/channel-server/2.3-channel-servers-all-added/before.yaml":Ke,"../../../../samples/async-api-diffs/channel-server/2.3-channel-servers0-bindings-add-bindings/before.yaml":Je,"../../../../samples/async-api-diffs/channel-server/2.4-channel-servers-all-removed/before.yaml":Xe,"../../../../samples/async-api-diffs/channel-server/2.4-channel-servers0-bindings-remove-bindings/before.yaml":Qe,"../../../../samples/async-api-diffs/channel-server/3.1-channel-servers0-bindings-kafka-bindingVersion-changed/before.yaml":et,"../../../../samples/async-api-diffs/channel-server/3.2-channel-servers0-bindings-kafka-bindingVersion-removed/before.yaml":nt,"../../../../samples/async-api-diffs/channel-server/3.3-channel-servers0-bindings-kafka-bindingVersion-added/before.yaml":it,"../../../../samples/async-api-diffs/channel-server/4.1-channel-server-bindings-kafka-internal-jso-changes/before.yaml":ot,"../../../../samples/async-api-diffs/channel-server/5.1-channel-servers-one-item-removed/before.yaml":ct,"../../../../samples/async-api-diffs/channel-server/5.2-channel-servers-one-item-added/before.yaml":ut}),Object.assign({"../../../../samples/async-api-diffs/channel-server/1.1-channel-servers-host-protocol-changed/after.yaml":ft,"../../../../samples/async-api-diffs/channel-server/1.10-channel-server-summary-added/after.yaml":mt,"../../../../samples/async-api-diffs/channel-server/1.11-channel-server-long-summary-changed/after.yaml":gt,"../../../../samples/async-api-diffs/channel-server/1.12-channel-server-long-summary-removed/after.yaml":vt,"../../../../samples/async-api-diffs/channel-server/1.13-channel-server-long-summary-added/after.yaml":bt,"../../../../samples/async-api-diffs/channel-server/1.14-channel-server-description-moved-to-summary/after.yaml":St,"../../../../samples/async-api-diffs/channel-server/1.15-channel-server-long-description-moved-to-summary/after.yaml":wt,"../../../../samples/async-api-diffs/channel-server/1.16-channel-server-long-description-moved-to-long-summary/after.yaml":Et,"../../../../samples/async-api-diffs/channel-server/1.17-channel-server-description-moved-to-long-summary/after.yaml":Ot,"../../../../samples/async-api-diffs/channel-server/1.18-channel-server-summary-moved-to-description/after.yaml":At,"../../../../samples/async-api-diffs/channel-server/1.19-channel-server-long-summary-moved-to-description/after.yaml":Mt,"../../../../samples/async-api-diffs/channel-server/1.2-channel-server-description-changed/after.yaml":Pt,"../../../../samples/async-api-diffs/channel-server/1.20-channel-server-long-summary-moved-to-long-description/after.yaml":It,"../../../../samples/async-api-diffs/channel-server/1.21-channel-server-summary-moved-to-long-description/after.yaml":g,"../../../../samples/async-api-diffs/channel-server/1.22-channel-servers-description-set/after.yaml":zt,"../../../../samples/async-api-diffs/channel-server/1.23-channel-servers-summary-set/after.yaml":Vt,"../../../../samples/async-api-diffs/channel-server/1.3-channel-server-description-removed/after.yaml":Ut,"../../../../samples/async-api-diffs/channel-server/1.4-channel-server-description-added/after.yaml":Gt,"../../../../samples/async-api-diffs/channel-server/1.5-channel-server-long-description-changed/after.yaml":qt,"../../../../samples/async-api-diffs/channel-server/1.6-channel-server-long-description-removed/after.yaml":Yt,"../../../../samples/async-api-diffs/channel-server/1.7-channel-server-long-description-added/after.yaml":Zt,"../../../../samples/async-api-diffs/channel-server/1.8-channel-server-summary-changed/after.yaml":$t,"../../../../samples/async-api-diffs/channel-server/1.9-channel-server-summary-removed/after.yaml":tn,"../../../../samples/async-api-diffs/channel-server/2.1-channel-servers0-bindings-add-one-more-binding/after.yaml":rn,"../../../../samples/async-api-diffs/channel-server/2.2-channel-servers0-bindings-remove-one-of-several-bindings/after.yaml":on,"../../../../samples/async-api-diffs/channel-server/2.3-channel-servers-all-added/after.yaml":cn,"../../../../samples/async-api-diffs/channel-server/2.3-channel-servers0-bindings-add-bindings/after.yaml":un,"../../../../samples/async-api-diffs/channel-server/2.4-channel-servers-all-removed/after.yaml":fn,"../../../../samples/async-api-diffs/channel-server/2.4-channel-servers0-bindings-remove-bindings/after.yaml":mn,"../../../../samples/async-api-diffs/channel-server/3.1-channel-servers0-bindings-kafka-bindingVersion-changed/after.yaml":gn,"../../../../samples/async-api-diffs/channel-server/3.2-channel-servers0-bindings-kafka-bindingVersion-removed/after.yaml":vn,"../../../../samples/async-api-diffs/channel-server/3.3-channel-servers0-bindings-kafka-bindingVersion-added/after.yaml":bn,"../../../../samples/async-api-diffs/channel-server/4.1-channel-server-bindings-kafka-internal-jso-changes/after.yaml":Sn,"../../../../samples/async-api-diffs/channel-server/5.1-channel-servers-one-item-removed/after.yaml":wn,"../../../../samples/async-api-diffs/channel-server/5.2-channel-servers-one-item-added/after.yaml":En})),An=ie(kn),_=({beforeYaml:e,afterYaml:ee})=>(0,On.jsx)(te,{...le(e,ee)}),jn={title:`Async API Diffs Suite/Channel Server Samples`,component:_,argTypes:ue},Mn=ce(_,An,`message-channel`),v=e=>Mn(e),y=v(`1.1-channel-servers-host-protocol-changed`),b=v(`1.2-channel-server-description-changed`),x=v(`1.3-channel-server-description-removed`),S=v(`1.4-channel-server-description-added`),C=v(`1.5-channel-server-long-description-changed`),w=v(`1.6-channel-server-long-description-removed`),T=v(`1.7-channel-server-long-description-added`),E=v(`1.8-channel-server-summary-changed`),D=v(`1.9-channel-server-summary-removed`),O=v(`1.10-channel-server-summary-added`),k=v(`1.11-channel-server-long-summary-changed`),A=v(`1.12-channel-server-long-summary-removed`),j=v(`1.13-channel-server-long-summary-added`),M=v(`1.14-channel-server-description-moved-to-summary`),N=v(`1.15-channel-server-long-description-moved-to-summary`),P=v(`1.16-channel-server-long-description-moved-to-long-summary`),F=v(`1.17-channel-server-description-moved-to-long-summary`),I=v(`1.18-channel-server-summary-moved-to-description`),L=v(`1.19-channel-server-long-summary-moved-to-description`),R=v(`1.20-channel-server-long-summary-moved-to-long-description`),z=v(`1.21-channel-server-summary-moved-to-long-description`),B=v(`1.22-channel-servers-description-set`),V=v(`1.23-channel-servers-summary-set`),H=v(`2.1-channel-servers0-bindings-add-one-more-binding`),U=v(`2.2-channel-servers0-bindings-remove-one-of-several-bindings`),W=v(`2.3-channel-servers0-bindings-add-bindings`),G=v(`2.4-channel-servers0-bindings-remove-bindings`),K=v(`2.3-channel-servers-all-added`),q=v(`2.4-channel-servers-all-removed`),J=v(`3.1-channel-servers0-bindings-kafka-bindingVersion-changed`),Y=v(`3.2-channel-servers0-bindings-kafka-bindingVersion-removed`),X=v(`3.3-channel-servers0-bindings-kafka-bindingVersion-added`),Z=v(`4.1-channel-server-bindings-kafka-internal-jso-changes`),Q=v(`5.1-channel-servers-one-item-removed`),$=v(`5.2-channel-servers-one-item-added`),y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`createCaseStory("1.1-channel-servers-host-protocol-changed")`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`createCaseStory("1.2-channel-server-description-changed")`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`createCaseStory("1.3-channel-server-description-removed")`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`createCaseStory("1.4-channel-server-description-added")`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`createCaseStory("1.5-channel-server-long-description-changed")`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`createCaseStory("1.6-channel-server-long-description-removed")`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`createCaseStory("1.7-channel-server-long-description-added")`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`createCaseStory("1.8-channel-server-summary-changed")`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`createCaseStory("1.9-channel-server-summary-removed")`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`createCaseStory("1.10-channel-server-summary-added")`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`createCaseStory("1.11-channel-server-long-summary-changed")`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`createCaseStory("1.12-channel-server-long-summary-removed")`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`createCaseStory("1.13-channel-server-long-summary-added")`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`createCaseStory("1.14-channel-server-description-moved-to-summary")`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`createCaseStory("1.15-channel-server-long-description-moved-to-summary")`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`createCaseStory("1.16-channel-server-long-description-moved-to-long-summary")`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`createCaseStory("1.17-channel-server-description-moved-to-long-summary")`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`createCaseStory("1.18-channel-server-summary-moved-to-description")`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`createCaseStory("1.19-channel-server-long-summary-moved-to-description")`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`createCaseStory("1.20-channel-server-long-summary-moved-to-long-description")`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`createCaseStory("1.21-channel-server-summary-moved-to-long-description")`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`createCaseStory("1.22-channel-servers-description-set")`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`createCaseStory("1.23-channel-servers-summary-set")`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`createCaseStory("2.1-channel-servers0-bindings-add-one-more-binding")`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`createCaseStory("2.2-channel-servers0-bindings-remove-one-of-several-bindings")`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`createCaseStory("2.3-channel-servers0-bindings-add-bindings")`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`createCaseStory("2.4-channel-servers0-bindings-remove-bindings")`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`createCaseStory("2.3-channel-servers-all-added")`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`createCaseStory("2.4-channel-servers-all-removed")`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`createCaseStory("3.1-channel-servers0-bindings-kafka-bindingVersion-changed")`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`createCaseStory("3.2-channel-servers0-bindings-kafka-bindingVersion-removed")`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`createCaseStory("3.3-channel-servers0-bindings-kafka-bindingVersion-added")`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`createCaseStory("4.1-channel-server-bindings-kafka-internal-jso-changes")`,...Z.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`createCaseStory("5.1-channel-servers-one-item-removed")`,...Q.parameters?.docs?.source}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`createCaseStory("5.2-channel-servers-one-item-added")`,...$.parameters?.docs?.source}}},Nn=`Case_1_1_channel_servers_host_protocol_changed.Case_1_2_channel_server_description_changed.Case_1_3_channel_server_description_removed.Case_1_4_channel_server_description_added.Case_1_5_channel_server_long_description_changed.Case_1_6_channel_server_long_description_removed.Case_1_7_channel_server_long_description_added.Case_1_8_channel_server_summary_changed.Case_1_9_channel_server_summary_removed.Case_1_10_channel_server_summary_added.Case_1_11_channel_server_long_summary_changed.Case_1_12_channel_server_long_summary_removed.Case_1_13_channel_server_long_summary_added.Case_1_14_channel_server_description_moved_to_summary.Case_1_15_channel_server_long_description_moved_to_summary.Case_1_16_channel_server_long_description_moved_to_long_summary.Case_1_17_channel_server_description_moved_to_long_summary.Case_1_18_channel_server_summary_moved_to_description.Case_1_19_channel_server_long_summary_moved_to_description.Case_1_20_channel_server_long_summary_moved_to_long_description.Case_1_21_channel_server_summary_moved_to_long_description.Case_1_22_channel_servers_description_set.Case_1_23_channel_servers_summary_set.Case_2_1_channel_servers0_bindings_add_one_more_binding.Case_2_2_channel_servers0_bindings_remove_one_of_several_bindings.Case_2_3_channel_servers0_bindings_add_bindings.Case_2_4_channel_servers0_bindings_remove_bindings.Case_2_3_channel_servers_all_added.Case_2_4_channel_servers_all_removed.Case_3_1_channel_servers0_bindings_kafka_bindingVersion_changed.Case_3_2_channel_servers0_bindings_kafka_bindingVersion_removed.Case_3_3_channel_servers0_bindings_kafka_bindingVersion_added.Case_4_1_channel_server_bindings_kafka_internal_jso_changes.Case_5_1_channel_servers_one_item_removed.Case_5_2_channel_servers_one_item_added`.split(`.`)})))()}Pn();export{O as Case_1_10_channel_server_summary_added,k as Case_1_11_channel_server_long_summary_changed,A as Case_1_12_channel_server_long_summary_removed,j as Case_1_13_channel_server_long_summary_added,M as Case_1_14_channel_server_description_moved_to_summary,N as Case_1_15_channel_server_long_description_moved_to_summary,P as Case_1_16_channel_server_long_description_moved_to_long_summary,F as Case_1_17_channel_server_description_moved_to_long_summary,I as Case_1_18_channel_server_summary_moved_to_description,L as Case_1_19_channel_server_long_summary_moved_to_description,y as Case_1_1_channel_servers_host_protocol_changed,R as Case_1_20_channel_server_long_summary_moved_to_long_description,z as Case_1_21_channel_server_summary_moved_to_long_description,B as Case_1_22_channel_servers_description_set,V as Case_1_23_channel_servers_summary_set,b as Case_1_2_channel_server_description_changed,x as Case_1_3_channel_server_description_removed,S as Case_1_4_channel_server_description_added,C as Case_1_5_channel_server_long_description_changed,w as Case_1_6_channel_server_long_description_removed,T as Case_1_7_channel_server_long_description_added,E as Case_1_8_channel_server_summary_changed,D as Case_1_9_channel_server_summary_removed,H as Case_2_1_channel_servers0_bindings_add_one_more_binding,U as Case_2_2_channel_servers0_bindings_remove_one_of_several_bindings,W as Case_2_3_channel_servers0_bindings_add_bindings,K as Case_2_3_channel_servers_all_added,G as Case_2_4_channel_servers0_bindings_remove_bindings,q as Case_2_4_channel_servers_all_removed,J as Case_3_1_channel_servers0_bindings_kafka_bindingVersion_changed,Y as Case_3_2_channel_servers0_bindings_kafka_bindingVersion_removed,X as Case_3_3_channel_servers0_bindings_kafka_bindingVersion_added,Z as Case_4_1_channel_server_bindings_kafka_internal_jso_changes,Q as Case_5_1_channel_servers_one_item_removed,$ as Case_5_2_channel_servers_one_item_added,Nn as __namedExportsOrder,jn as default};