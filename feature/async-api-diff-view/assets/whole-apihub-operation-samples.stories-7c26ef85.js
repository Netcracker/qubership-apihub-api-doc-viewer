import{j as t}from"./_commonjs-dynamic-modules-6308e768.js";import{a as g}from"./AsyncApiOperationViewer-941d28a8.js";import{b as h,T as y,a as f}from"./preprocess-8ae95fc4.js";import{c as b,p as v}from"./yaml-source-2575e8ef.js";import"./index-f46741a2.js";import"./GraphPropNodeViewer-b760dd16.js";import"./index-415bee12.js";import"./GraphQLOperationViewer-9fb52af0.js";import"./GraphQLOperationDiffViewer-bd710b7b.js";import"./js-yaml-71a24e1f.js";const x=`asyncapi: 3.0.0
id: urn:example:com:sample:asyncapi:maximal-template
info:
  title: Maximal AsyncAPI 3.0 Template
  version: 1.0.0
  description: A maximal AsyncAPI 3.0 document used as a template fixture.
  termsOfService: https://example.com/terms/
  contact:
    name: API Support
    url: https://example.com/support
    email: support@example.com
  license:
    name: Apache 2.0
    url: https://www.apache.org/licenses/LICENSE-2.0.html
  tags:
    - name: template
      description: Template fixture
  externalDocs:
    description: Find more info here
    url: https://example.com/docs
servers:
  production:
    host: '{stage}.broker.example.com:{port}'
    pathname: /{env}
    protocol: amqp
    protocolVersion: 0-9-1
    title: Production broker
    summary: Production message broker
    description: Production AMQP broker with configurable stage and port.
    variables:
      stage:
        $ref: '#/components/serverVariables/stage'
      port:
        $ref: '#/components/serverVariables/port'
      env:
        $ref: '#/components/serverVariables/env'
    security:
      - $ref: '#/components/securitySchemes/petstoreAuth'
    tags:
      - name: env:production
        description: Production environment
    externalDocs:
      description: Server documentation
      url: https://example.com/docs/servers/production
    bindings:
      amqp:
        connectionName: template-production
        bindingVersion: 0.3.0
defaultContentType: application/json
channels:
  UserSignup:
    address: user/{userId}/signedup
    title: User signup channel
    summary: Channel for user signup events
    description: This channel is used to exchange user signup messages.
    messages:
      UserMessage:
        $ref: '#/components/messages/UserMessage'
    parameters:
      userId:
        $ref: '#/components/parameters/userId'
    servers:
      - $ref: '#/servers/production'
    tags:
      - name: user
        description: User related messages
    externalDocs:
      description: Channel documentation
      url: https://example.com/docs/channels/user-signup
    bindings:
      amqp:
        is: queue
        queue:
          name: user.signup
          durable: true
          exclusive: false
        bindingVersion: 0.3.0
operations:
  ConsumeUserSignups:
    action: receive
    title: Consume user signups
    summary: Receive user signup events from the channel.
    description: The application receives user signup messages from the UserSignup channel.
    channel:
      $ref: '#/channels/UserSignup'
    security:
      - $ref: '#/components/securitySchemes/petstoreAuthRead'
    tags:
      - name: user
        description: User operations
      - name: signup
        description: Signup operations
    externalDocs:
      description: Operation documentation
      url: https://example.com/docs/operations/consume-user-signups
    bindings:
      amqp:
        ack: true
        bindingVersion: 0.3.0
    traits:
      - $ref: '#/components/operationTraits/common'
    messages:
      - $ref: '#/channels/UserSignup/messages/UserMessage'
components:
  schemas:
    UserCreate:
      type: object
      title: UserCreate
      description: User creation payload schema.
      required:
        - displayName
        - email
      properties:
        displayName:
          type: string
          description: Display name of the user
        email:
          type: string
          format: email
          description: Email address
        age:
          type: integer
          minimum: 0
          description: Age of the user
    SignupMetadata:
      type: object
      title: SignupMetadata
      properties:
        source:
          type: string
          description: Signup source
        campaign:
          type: string
          description: Marketing campaign id
    AvroUserRecord:
      type: object
      title: User
      description: User information (Avro record equivalent)
      required:
        - displayName
        - email
      properties:
        displayName:
          type: string
        email:
          type: string
  servers:
    stagingServer:
      host: staging.broker.example.com:5672
      protocol: amqp
      description: Reusable staging server definition
  channels:
    ReusableChannel:
      address: reusable/topic
      title: Reusable channel
      summary: Example reusable channel in components
      messages:
        PlaceholderMessage:
          $ref: '#/components/messages/UserMessage'
  operations:
    ReusableOperation:
      action: send
      title: Reusable operation
      summary: Example reusable operation in components
      channel:
        $ref: '#/components/channels/ReusableChannel'
      messages:
        - $ref: '#/components/channels/ReusableChannel/messages/PlaceholderMessage'
  messages:
    UserMessage:
      name: UserMessage
      title: User signup message
      summary: Message emitted when a user signs up
      description: Contains user and signup metadata for a signup event.
      contentType: application/json
      tags:
        - name: user
          description: User messages
        - name: signup
          description: Signup messages
      externalDocs:
        description: Message documentation
        url: https://example.com/docs/messages/user-message
      headers:
        type: object
        properties:
          correlationId:
            type: string
            description: Correlation ID set by application
          applicationInstanceId:
            type: string
            description: Unique identifier for a publishing application instance
      payload:
        type: object
        properties:
          user:
            $ref: '#/components/schemas/UserCreate'
          signup:
            $ref: '#/components/schemas/SignupMetadata'
      correlationId:
        $ref: '#/components/correlationIds/default'
      traits:
        - $ref: '#/components/messageTraits/commonHeaders'
      examples:
        - name: SimpleSignup
          summary: A simple user signup example
          headers:
            correlationId: 00000000-0000-0000-0000-000000000001
            applicationInstanceId: instance-1
          payload:
            user:
              displayName: Jane Doe
              email: jane.doe@example.com
              age: 30
            signup:
              source: web
              campaign: spring-2026
      bindings:
        amqp:
          contentEncoding: utf-8
          bindingVersion: 0.3.0
  securitySchemes:
    petstoreAuth:
      type: oauth2
      description: OAuth2 security scheme for the template API
      flows:
        implicit:
          authorizationUrl: https://example.com/oauth/authorize
          availableScopes:
            read:users: Read user data
            write:users: Write user data
        clientCredentials:
          tokenUrl: https://example.com/oauth/token
          availableScopes:
            read:users: Read user data
            write:users: Write user data
      scopes:
        - read:users
        - write:users
    petstoreAuthRead:
      type: oauth2
      description: OAuth2 security scheme for read-only operation access
      flows:
        implicit:
          authorizationUrl: https://example.com/oauth/authorize
          availableScopes:
            read:users: Read user data
        clientCredentials:
          tokenUrl: https://example.com/oauth/token
          availableScopes:
            read:users: Read user data
      scopes:
        - read:users
    apiKeyAuth:
      type: apiKey
      in: user
      description: API key provided by the application
  serverVariables:
    stage:
      enum:
        - demo
        - staging
        - production
      default: production
      description: Deployment stage
      examples:
        - production
    port:
      enum:
        - '5671'
        - '5672'
      default: '5672'
      description: Broker port
      examples:
        - '5672'
    env:
      default: production
      description: Broker virtual host or environment
      examples:
        - production
  parameters:
    userId:
      description: Identifier of the user in the channel address.
      enum:
        - test-user
      default: test-user
      examples:
        - test-user
      location: $message.payload#/user/id
  correlationIds:
    default:
      description: Default correlation ID
      location: $message.header#/correlationId
  replies:
    ExampleReply:
      address:
        $ref: '#/components/replyAddresses/replyToHeader'
      channel:
        $ref: '#/components/channels/ReusableChannel'
      messages:
        - $ref: '#/components/channels/ReusableChannel/messages/PlaceholderMessage'
  replyAddresses:
    replyToHeader:
      description: Reply address taken from the message replyTo header
      location: $message.header#/replyTo
  externalDocs:
    rootDocs:
      description: Reusable external documentation entry
      url: https://example.com/docs/root
  tags:
    userTag:
      name: user
      description: Reusable user tag
  operationTraits:
    common:
      title: Common operation trait
      summary: Shared operation metadata
      description: Trait applied to the root operation.
      tags:
        - name: trait
          description: Trait tag
      bindings:
        amqp:
          ack: true
          bindingVersion: 0.3.0
  messageTraits:
    commonHeaders:
      headers:
        type: object
        properties:
          x-template-header:
            type: integer
            minimum: 0
            maximum: 100
      contentType: application/json
  serverBindings:
    amqpServerBinding:
      amqp:
        connectionName: template-server-binding
        bindingVersion: 0.3.0
  channelBindings:
    amqpChannelBinding:
      amqp:
        is: queue
        queue:
          name: reusable.queue
          durable: true
          exclusive: false
        bindingVersion: 0.3.0
  operationBindings:
    amqpOperationBinding:
      amqp:
        ack: false
        bindingVersion: 0.3.0
  messageBindings:
    amqpMessageBinding:
      amqp:
        contentEncoding: utf-8
        bindingVersion: 0.3.0
`,S=`asyncapi: 3.0.0
id: urn:example:com:sample:asyncapi:maximal-template
info:
  title: Maximal AsyncAPI 3.0 Template
  version: 1.0.0
  description: A maximal AsyncAPI 3.0 document used as a template fixture.
  termsOfService: https://example.com/terms/
  contact:
    name: API Support
    url: https://example.com/support
    email: support@example.com
  license:
    name: Apache 2.0
    url: https://www.apache.org/licenses/LICENSE-2.0.html
  tags:
    - name: template
      description: Template fixture
  externalDocs:
    description: Find more info here
    url: https://example.com/docs
servers:
  production:
    host: '{stage}.broker.example.com:{port}'
    pathname: /{env}
    protocol: amqp
    protocolVersion: 0-9-1
    title: Production broker
    summary: Production message broker
    description: Production AMQP broker with configurable stage and port.
    variables:
      stage:
        $ref: '#/components/serverVariables/stage'
      port:
        $ref: '#/components/serverVariables/port'
      env:
        $ref: '#/components/serverVariables/env'
    security:
      - $ref: '#/components/securitySchemes/petstoreAuth'
    tags:
      - name: env:production
        description: Production environment
    externalDocs:
      description: Server documentation
      url: https://example.com/docs/servers/production
    bindings:
      amqp:
        connectionName: template-production
        bindingVersion: 0.3.0
defaultContentType: application/json
channels:
  UserSignup:
    address: user/{userId}/signedup
    title: User signup channel
    summary: Channel for user signup events
    description: This channel is used to exchange user signup messages.
    messages:
      UserMessage:
        $ref: '#/components/messages/UserMessage'
    parameters:
      userId:
        $ref: '#/components/parameters/userId'
    servers:
      - $ref: '#/servers/production'
    tags:
      - name: user
        description: User related messages
    externalDocs:
      description: Channel documentation
      url: https://example.com/docs/channels/user-signup
    bindings:
      amqp:
        is: queue
        queue:
          name: user.signup
          durable: true
          exclusive: false
        bindingVersion: 0.3.0
operations:
  ConsumeUserSignups:
    action: receive
    title: Consume user signups
    summary: Receive user signup events from the channel.
    description: The application receives user signup messages from the UserSignup channel.
    channel:
      $ref: '#/channels/UserSignup'
    security:
      - $ref: '#/components/securitySchemes/petstoreAuthRead'
    tags:
      - name: user
        description: User operations
      - name: signup
        description: Signup operations
    externalDocs:
      description: Operation documentation
      url: https://example.com/docs/operations/consume-user-signups
    bindings:
      amqp:
        ack: true
        bindingVersion: 0.3.0
    traits:
      - $ref: '#/components/operationTraits/common'
components:
  schemas:
    UserCreate:
      type: object
      title: UserCreate
      description: User creation payload schema.
      required:
        - displayName
        - email
      properties:
        displayName:
          type: string
          description: Display name of the user
        email:
          type: string
          format: email
          description: Email address
        age:
          type: integer
          minimum: 0
          description: Age of the user
    SignupMetadata:
      type: object
      title: SignupMetadata
      properties:
        source:
          type: string
          description: Signup source
        campaign:
          type: string
          description: Marketing campaign id
    AvroUserRecord:
      type: object
      title: User
      description: User information (Avro record equivalent)
      required:
        - displayName
        - email
      properties:
        displayName:
          type: string
        email:
          type: string
  servers:
    stagingServer:
      host: staging.broker.example.com:5672
      protocol: amqp
      description: Reusable staging server definition
  channels:
    ReusableChannel:
      address: reusable/topic
      title: Reusable channel
      summary: Example reusable channel in components
      messages:
        PlaceholderMessage:
          $ref: '#/components/messages/UserMessage'
  operations:
    ReusableOperation:
      action: send
      title: Reusable operation
      summary: Example reusable operation in components
      channel:
        $ref: '#/components/channels/ReusableChannel'
      messages:
        - $ref: '#/components/channels/ReusableChannel/messages/PlaceholderMessage'
  messages:
    UserMessage:
      name: UserMessage
      title: User signup message
      summary: Message emitted when a user signs up
      description: Contains user and signup metadata for a signup event.
      contentType: application/json
      tags:
        - name: user
          description: User messages
        - name: signup
          description: Signup messages
      externalDocs:
        description: Message documentation
        url: https://example.com/docs/messages/user-message
      headers:
        type: object
        properties:
          correlationId:
            type: string
            description: Correlation ID set by application
          applicationInstanceId:
            type: string
            description: Unique identifier for a publishing application instance
      payload:
        type: object
        properties:
          user:
            $ref: '#/components/schemas/UserCreate'
          signup:
            $ref: '#/components/schemas/SignupMetadata'
      correlationId:
        $ref: '#/components/correlationIds/default'
      traits:
        - $ref: '#/components/messageTraits/commonHeaders'
      examples:
        - name: SimpleSignup
          summary: A simple user signup example
          headers:
            correlationId: 00000000-0000-0000-0000-000000000001
            applicationInstanceId: instance-1
          payload:
            user:
              displayName: Jane Doe
              email: jane.doe@example.com
              age: 30
            signup:
              source: web
              campaign: spring-2026
      bindings:
        amqp:
          contentEncoding: utf-8
          bindingVersion: 0.3.0
  securitySchemes:
    petstoreAuth:
      type: oauth2
      description: OAuth2 security scheme for the template API
      flows:
        implicit:
          authorizationUrl: https://example.com/oauth/authorize
          availableScopes:
            read:users: Read user data
            write:users: Write user data
        clientCredentials:
          tokenUrl: https://example.com/oauth/token
          availableScopes:
            read:users: Read user data
            write:users: Write user data
      scopes:
        - read:users
        - write:users
    petstoreAuthRead:
      type: oauth2
      description: OAuth2 security scheme for read-only operation access
      flows:
        implicit:
          authorizationUrl: https://example.com/oauth/authorize
          availableScopes:
            read:users: Read user data
        clientCredentials:
          tokenUrl: https://example.com/oauth/token
          availableScopes:
            read:users: Read user data
      scopes:
        - read:users
    apiKeyAuth:
      type: apiKey
      in: user
      description: API key provided by the application
  serverVariables:
    stage:
      enum:
        - demo
        - staging
        - production
      default: production
      description: Deployment stage
      examples:
        - production
    port:
      enum:
        - '5671'
        - '5672'
      default: '5672'
      description: Broker port
      examples:
        - '5672'
    env:
      default: production
      description: Broker virtual host or environment
      examples:
        - production
  parameters:
    userId:
      description: Identifier of the user in the channel address.
      enum:
        - test-user
      default: test-user
      examples:
        - test-user
      location: $message.payload#/user/id
  correlationIds:
    default:
      description: Default correlation ID
      location: $message.header#/correlationId
  replies:
    ExampleReply:
      address:
        $ref: '#/components/replyAddresses/replyToHeader'
      channel:
        $ref: '#/components/channels/ReusableChannel'
      messages:
        - $ref: '#/components/channels/ReusableChannel/messages/PlaceholderMessage'
  replyAddresses:
    replyToHeader:
      description: Reply address taken from the message replyTo header
      location: $message.header#/replyTo
  externalDocs:
    rootDocs:
      description: Reusable external documentation entry
      url: https://example.com/docs/root
  tags:
    userTag:
      name: user
      description: Reusable user tag
  operationTraits:
    common:
      title: Common operation trait
      summary: Shared operation metadata
      description: Trait applied to the root operation.
      tags:
        - name: trait
          description: Trait tag
      bindings:
        amqp:
          ack: true
          bindingVersion: 0.3.0
  messageTraits:
    commonHeaders:
      headers:
        type: object
        properties:
          x-template-header:
            type: integer
            minimum: 0
            maximum: 100
      contentType: application/json
  serverBindings:
    amqpServerBinding:
      amqp:
        connectionName: template-server-binding
        bindingVersion: 0.3.0
  channelBindings:
    amqpChannelBinding:
      amqp:
        is: queue
        queue:
          name: reusable.queue
          durable: true
          exclusive: false
        bindingVersion: 0.3.0
  operationBindings:
    amqpOperationBinding:
      amqp:
        ack: false
        bindingVersion: 0.3.0
  messageBindings:
    amqpMessageBinding:
      amqp:
        contentEncoding: utf-8
        bindingVersion: 0.3.0
`,U=`asyncapi: 3.0.0
id: urn:example:com:sample:asyncapi:maximal-template
info:
  title: Maximal AsyncAPI 3.0 Template
  version: 1.0.0
  description: A maximal AsyncAPI 3.0 document used as a template fixture.
  termsOfService: https://example.com/terms/
  contact:
    name: API Support
    url: https://example.com/support
    email: support@example.com
  license:
    name: Apache 2.0
    url: https://www.apache.org/licenses/LICENSE-2.0.html
  tags:
    - name: template
      description: Template fixture
  externalDocs:
    description: Find more info here
    url: https://example.com/docs
servers:
  production:
    host: '{stage}.broker.example.com:{port}'
    pathname: /{env}
    protocol: amqp
    protocolVersion: 0-9-1
    title: Production broker
    summary: Production message broker
    description: Production AMQP broker with configurable stage and port.
    variables:
      stage:
        $ref: '#/components/serverVariables/stage'
      port:
        $ref: '#/components/serverVariables/port'
      env:
        $ref: '#/components/serverVariables/env'
    security:
      - $ref: '#/components/securitySchemes/petstoreAuth'
    tags:
      - name: env:production
        description: Production environment
    externalDocs:
      description: Server documentation
      url: https://example.com/docs/servers/production
    bindings:
      amqp:
        connectionName: template-production
        bindingVersion: 0.3.0
defaultContentType: application/json
channels:
  UserSignup:
    address: user/{userId}/signedup
    title: User signup channel
    summary: Channel for user signup events
    description: This channel is used to exchange user signup messages.
    messages:
      UserMessage:
        $ref: '#/components/messages/UserMessage'
    parameters:
      userId:
        $ref: '#/components/parameters/userId'
    servers:
      - $ref: '#/servers/production'
    tags:
      - name: user
        description: User related messages
    externalDocs:
      description: Channel documentation
      url: https://example.com/docs/channels/user-signup
    bindings:
      amqp:
        is: queue
        queue:
          name: user.signup
          durable: true
          exclusive: false
        bindingVersion: 0.3.0
operations:
  ConsumeUserSignups:
    action: receive
    title: Consume user signups
    summary: Receive user signup events from the channel.
    description: The application receives user signup messages from the UserSignup channel.
    channel:
      $ref: '#/channels/UserSignup'
    security:
      - $ref: '#/components/securitySchemes/petstoreAuthRead'
    tags:
      - name: user
        description: User operations
      - name: signup
        description: Signup operations
    externalDocs:
      description: Operation documentation
      url: https://example.com/docs/operations/consume-user-signups
    bindings:
      amqp:
        ack: true
        bindingVersion: 0.3.0
    traits:
      - $ref: '#/components/operationTraits/common'
components:
  schemas:
    UserCreate:
      type: object
      title: UserCreate
      description: User creation payload schema.
      required:
        - displayName
        - email
      properties:
        displayName:
          type: string
          description: Display name of the user
        email:
          type: string
          format: email
          description: Email address
        age:
          type: integer
          minimum: 0
          description: Age of the user
    SignupMetadata:
      type: object
      title: SignupMetadata
      properties:
        source:
          type: string
          description: Signup source
        campaign:
          type: string
          description: Marketing campaign id
    AvroUserRecord:
      type: object
      title: User
      description: User information (Avro record equivalent)
      required:
        - displayName
        - email
      properties:
        displayName:
          type: string
        email:
          type: string
  servers:
    stagingServer:
      host: staging.broker.example.com:5672
      protocol: amqp
      description: Reusable staging server definition
  channels:
    ReusableChannel:
      address: reusable/topic
      title: Reusable channel
      summary: Example reusable channel in components
      messages:
        PlaceholderMessage:
          $ref: '#/components/messages/UserMessage'
  operations:
    ReusableOperation:
      action: send
      title: Reusable operation
      summary: Example reusable operation in components
      channel:
        $ref: '#/components/channels/ReusableChannel'
      messages:
        - $ref: '#/components/channels/ReusableChannel/messages/PlaceholderMessage'
  messages:
    UserMessage:
      name: UserMessage
      title: User signup message
      summary: Message emitted when a user signs up
      description: Contains user and signup metadata for a signup event.
      contentType: application/json
      tags:
        - name: user
          description: User messages
        - name: signup
          description: Signup messages
      externalDocs:
        description: Message documentation
        url: https://example.com/docs/messages/user-message
      headers:
        type: object
        properties:
          correlationId:
            type: string
            description: Correlation ID set by application
          applicationInstanceId:
            type: string
            description: Unique identifier for a publishing application instance
      payload:
        type: object
        properties:
          user:
            $ref: '#/components/schemas/UserCreate'
          signup:
            $ref: '#/components/schemas/SignupMetadata'
      correlationId:
        $ref: '#/components/correlationIds/default'
      traits:
        - $ref: '#/components/messageTraits/commonHeaders'
      examples:
        - name: SimpleSignup
          summary: A simple user signup example
          headers:
            correlationId: 00000000-0000-0000-0000-000000000001
            applicationInstanceId: instance-1
          payload:
            user:
              displayName: Jane Doe
              email: jane.doe@example.com
              age: 30
            signup:
              source: web
              campaign: spring-2026
      bindings:
        amqp:
          contentEncoding: utf-8
          bindingVersion: 0.3.0
  securitySchemes:
    petstoreAuth:
      type: oauth2
      description: OAuth2 security scheme for the template API
      flows:
        implicit:
          authorizationUrl: https://example.com/oauth/authorize
          availableScopes:
            read:users: Read user data
            write:users: Write user data
        clientCredentials:
          tokenUrl: https://example.com/oauth/token
          availableScopes:
            read:users: Read user data
            write:users: Write user data
      scopes:
        - read:users
        - write:users
    petstoreAuthRead:
      type: oauth2
      description: OAuth2 security scheme for read-only operation access
      flows:
        implicit:
          authorizationUrl: https://example.com/oauth/authorize
          availableScopes:
            read:users: Read user data
        clientCredentials:
          tokenUrl: https://example.com/oauth/token
          availableScopes:
            read:users: Read user data
      scopes:
        - read:users
    apiKeyAuth:
      type: apiKey
      in: user
      description: API key provided by the application
  serverVariables:
    stage:
      enum:
        - demo
        - staging
        - production
      default: production
      description: Deployment stage
      examples:
        - production
    port:
      enum:
        - '5671'
        - '5672'
      default: '5672'
      description: Broker port
      examples:
        - '5672'
    env:
      default: production
      description: Broker virtual host or environment
      examples:
        - production
  parameters:
    userId:
      description: Identifier of the user in the channel address.
      enum:
        - test-user
      default: test-user
      examples:
        - test-user
      location: $message.payload#/user/id
  correlationIds:
    default:
      description: Default correlation ID
      location: $message.header#/correlationId
  replies:
    ExampleReply:
      address:
        $ref: '#/components/replyAddresses/replyToHeader'
      channel:
        $ref: '#/components/channels/ReusableChannel'
      messages:
        - $ref: '#/components/channels/ReusableChannel/messages/PlaceholderMessage'
  replyAddresses:
    replyToHeader:
      description: Reply address taken from the message replyTo header
      location: $message.header#/replyTo
  externalDocs:
    rootDocs:
      description: Reusable external documentation entry
      url: https://example.com/docs/root
  tags:
    userTag:
      name: user
      description: Reusable user tag
  operationTraits:
    common:
      title: Common operation trait
      summary: Shared operation metadata
      description: Trait applied to the root operation.
      tags:
        - name: trait
          description: Trait tag
      bindings:
        amqp:
          ack: true
          bindingVersion: 0.3.0
  messageTraits:
    commonHeaders:
      headers:
        type: object
        properties:
          x-template-header:
            type: integer
            minimum: 0
            maximum: 100
      contentType: application/json
  serverBindings:
    amqpServerBinding:
      amqp:
        connectionName: template-server-binding
        bindingVersion: 0.3.0
  channelBindings:
    amqpChannelBinding:
      amqp:
        is: queue
        queue:
          name: reusable.queue
          durable: true
          exclusive: false
        bindingVersion: 0.3.0
  operationBindings:
    amqpOperationBinding:
      amqp:
        ack: false
        bindingVersion: 0.3.0
  messageBindings:
    amqpMessageBinding:
      amqp:
        contentEncoding: utf-8
        bindingVersion: 0.3.0
`,A=`asyncapi: 3.0.0
id: urn:example:com:sample:asyncapi:maximal-template
info:
  title: Maximal AsyncAPI 3.0 Template
  version: 1.0.0
  description: A maximal AsyncAPI 3.0 document used as a template fixture.
  termsOfService: https://example.com/terms/
  contact:
    name: API Support
    url: https://example.com/support
    email: support@example.com
  license:
    name: Apache 2.0
    url: https://www.apache.org/licenses/LICENSE-2.0.html
  tags:
    - name: template
      description: Template fixture
  externalDocs:
    description: Find more info here
    url: https://example.com/docs
servers:
  production:
    host: '{stage}.broker.example.com:{port}'
    pathname: /{env}
    protocol: amqp
    protocolVersion: 0-9-1
    title: Production broker
    summary: Production message broker
    description: Production AMQP broker with configurable stage and port.
    variables:
      stage:
        $ref: '#/components/serverVariables/stage'
      port:
        $ref: '#/components/serverVariables/port'
      env:
        $ref: '#/components/serverVariables/env'
    security:
      - $ref: '#/components/securitySchemes/petstoreAuth'
    tags:
      - name: env:production
        description: Production environment
    externalDocs:
      description: Server documentation
      url: https://example.com/docs/servers/production
    bindings:
      amqp:
        connectionName: template-production
        bindingVersion: 0.3.0
defaultContentType: application/json
channels:
  UserSignup:
    address: user/{userId}/signedup
    title: User signup channel
    summary: Channel for user signup events
    description: This channel is used to exchange user signup messages.
    messages:
      UserMessage:
        $ref: '#/components/messages/UserMessage'
    parameters:
      userId:
        $ref: '#/components/parameters/userId'
    servers:
      - $ref: '#/servers/production'
    tags:
      - name: user
        description: User related messages
    externalDocs:
      description: Channel documentation
      url: https://example.com/docs/channels/user-signup
    bindings:
      amqp:
        is: queue
        queue:
          name: user.signup
          durable: true
          exclusive: false
        bindingVersion: 0.3.0
operations:
  ConsumeUserSignups:
    action: receive
    title: Consume user signups
    summary: Receive user signup events from the channel.
    description: The application receives user signup messages from the UserSignup channel.
    channel:
      $ref: '#/channels/UserSignup'
    security:
      - $ref: '#/components/securitySchemes/petstoreAuthRead'
    tags:
      - name: user
        description: User operations
      - name: signup
        description: Signup operations
    externalDocs:
      description: Operation documentation
      url: https://example.com/docs/operations/consume-user-signups
    bindings:
      amqp:
        ack: true
        bindingVersion: 0.3.0
    traits:
      - $ref: '#/components/operationTraits/common'
    messages:
      - $ref: '#/channels/UserSignup/messages/UserMessage'
components:
  schemas:
    UserCreate:
      type: object
      title: UserCreate
      description: User creation payload schema.
      required:
        - displayName
        - email
      properties:
        displayName:
          type: string
          description: Display name of the user
        email:
          type: string
          format: email
          description: Email address
        age:
          type: integer
          minimum: 0
          description: Age of the user
    SignupMetadata:
      type: object
      title: SignupMetadata
      properties:
        source:
          type: string
          description: Signup source
        campaign:
          type: string
          description: Marketing campaign id
    AvroUserRecord:
      type: object
      title: User
      description: User information (Avro record equivalent)
      required:
        - displayName
        - email
      properties:
        displayName:
          type: string
        email:
          type: string
  servers:
    stagingServer:
      host: staging.broker.example.com:5672
      protocol: amqp
      description: Reusable staging server definition
  channels:
    ReusableChannel:
      address: reusable/topic
      title: Reusable channel
      summary: Example reusable channel in components
      messages:
        PlaceholderMessage:
          $ref: '#/components/messages/UserMessage'
  operations:
    ReusableOperation:
      action: send
      title: Reusable operation
      summary: Example reusable operation in components
      channel:
        $ref: '#/components/channels/ReusableChannel'
      messages:
        - $ref: '#/components/channels/ReusableChannel/messages/PlaceholderMessage'
  messages:
    UserMessage:
      name: UserMessage
      title: User signup message
      summary: Message emitted when a user signs up
      description: Contains user and signup metadata for a signup event.
      contentType: application/json
      tags:
        - name: user
          description: User messages
        - name: signup
          description: Signup messages
      externalDocs:
        description: Message documentation
        url: https://example.com/docs/messages/user-message
      headers:
        type: object
        properties:
          correlationId:
            type: string
            description: Correlation ID set by application
          applicationInstanceId:
            type: string
            description: Unique identifier for a publishing application instance
      payload:
        type: object
        properties:
          user:
            $ref: '#/components/schemas/UserCreate'
          signup:
            $ref: '#/components/schemas/SignupMetadata'
      correlationId:
        $ref: '#/components/correlationIds/default'
      traits:
        - $ref: '#/components/messageTraits/commonHeaders'
      examples:
        - name: SimpleSignup
          summary: A simple user signup example
          headers:
            correlationId: 00000000-0000-0000-0000-000000000001
            applicationInstanceId: instance-1
          payload:
            user:
              displayName: Jane Doe
              email: jane.doe@example.com
              age: 30
            signup:
              source: web
              campaign: spring-2026
      bindings:
        amqp:
          contentEncoding: utf-8
          bindingVersion: 0.3.0
  securitySchemes:
    petstoreAuth:
      type: oauth2
      description: OAuth2 security scheme for the template API
      flows:
        implicit:
          authorizationUrl: https://example.com/oauth/authorize
          availableScopes:
            read:users: Read user data
            write:users: Write user data
        clientCredentials:
          tokenUrl: https://example.com/oauth/token
          availableScopes:
            read:users: Read user data
            write:users: Write user data
      scopes:
        - read:users
        - write:users
    petstoreAuthRead:
      type: oauth2
      description: OAuth2 security scheme for read-only operation access
      flows:
        implicit:
          authorizationUrl: https://example.com/oauth/authorize
          availableScopes:
            read:users: Read user data
        clientCredentials:
          tokenUrl: https://example.com/oauth/token
          availableScopes:
            read:users: Read user data
      scopes:
        - read:users
    apiKeyAuth:
      type: apiKey
      in: user
      description: API key provided by the application
  serverVariables:
    stage:
      enum:
        - demo
        - staging
        - production
      default: production
      description: Deployment stage
      examples:
        - production
    port:
      enum:
        - '5671'
        - '5672'
      default: '5672'
      description: Broker port
      examples:
        - '5672'
    env:
      default: production
      description: Broker virtual host or environment
      examples:
        - production
  parameters:
    userId:
      description: Identifier of the user in the channel address.
      enum:
        - test-user
      default: test-user
      examples:
        - test-user
      location: $message.payload#/user/id
  correlationIds:
    default:
      description: Default correlation ID
      location: $message.header#/correlationId
  replies:
    ExampleReply:
      address:
        $ref: '#/components/replyAddresses/replyToHeader'
      channel:
        $ref: '#/components/channels/ReusableChannel'
      messages:
        - $ref: '#/components/channels/ReusableChannel/messages/PlaceholderMessage'
  replyAddresses:
    replyToHeader:
      description: Reply address taken from the message replyTo header
      location: $message.header#/replyTo
  externalDocs:
    rootDocs:
      description: Reusable external documentation entry
      url: https://example.com/docs/root
  tags:
    userTag:
      name: user
      description: Reusable user tag
  operationTraits:
    common:
      title: Common operation trait
      summary: Shared operation metadata
      description: Trait applied to the root operation.
      tags:
        - name: trait
          description: Trait tag
      bindings:
        amqp:
          ack: true
          bindingVersion: 0.3.0
  messageTraits:
    commonHeaders:
      headers:
        type: object
        properties:
          x-template-header:
            type: integer
            minimum: 0
            maximum: 100
      contentType: application/json
  serverBindings:
    amqpServerBinding:
      amqp:
        connectionName: template-server-binding
        bindingVersion: 0.3.0
  channelBindings:
    amqpChannelBinding:
      amqp:
        is: queue
        queue:
          name: reusable.queue
          durable: true
          exclusive: false
        bindingVersion: 0.3.0
  operationBindings:
    amqpOperationBinding:
      amqp:
        ack: false
        bindingVersion: 0.3.0
  messageBindings:
    amqpMessageBinding:
      amqp:
        contentEncoding: utf-8
        bindingVersion: 0.3.0
`,I=Object.assign({"../../../../samples/async-api-diffs/whole-apihub-operation/1.1-message-removed-from-operation-channel-and-document/before.yaml":x,"../../../../samples/async-api-diffs/whole-apihub-operation/1.2-message-added-to-operation-channel-and-document/before.yaml":S}),q=Object.assign({"../../../../samples/async-api-diffs/whole-apihub-operation/1.1-message-removed-from-operation-channel-and-document/after.yaml":U,"../../../../samples/async-api-diffs/whole-apihub-operation/1.2-message-added-to-operation-channel-and-document/after.yaml":A}),$=b(I,q),C=Object.fromEntries($.map(e=>[e.caseId,e])),d=({caseId:e})=>{const n=C[e];return n?t.jsx(g,{...M(n.beforeYaml,n.afterYaml)}):t.jsxs("div",{children:["Sample case not found: ",e]})},O={title:"Async API Diffs Suite/Whole Apihub Operation Samples",component:d},R="ConsumeUserSignups",T="UserMessage",r=e=>v(e),M=(e,n)=>({devMode:!0,mergedSource:h({beforeSource:r(e),afterSource:r(n)}),operationKeys:{operationKey:R,messageKey:T},referenceNamePropertyKey:y,diffMetaKeys:f}),u=e=>({name:e,args:{caseId:e},render:n=>t.jsx(d,{caseId:n.caseId})}),s=u("1.1-message-removed-from-operation-channel-and-document"),a=u("1.2-message-added-to-operation-channel-and-document");var i,o,p;s.parameters={...s.parameters,docs:{...(i=s.parameters)==null?void 0:i.docs,source:{originalSource:'createCaseStory("1.1-message-removed-from-operation-channel-and-document")',...(p=(o=s.parameters)==null?void 0:o.docs)==null?void 0:p.source}}};var c,m,l;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:'createCaseStory("1.2-message-added-to-operation-channel-and-document")',...(l=(m=a.parameters)==null?void 0:m.docs)==null?void 0:l.source}}};const z=["Case_1_1_message_removed_from_operation_channel_and_document","Case_1_2_message_added_to_operation_channel_and_document"];export{s as Case_1_1_message_removed_from_operation_channel_and_document,a as Case_1_2_message_added_to_operation_channel_and_document,z as __namedExportsOrder,O as default};
