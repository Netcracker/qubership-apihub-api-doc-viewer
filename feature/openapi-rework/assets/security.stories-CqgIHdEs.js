import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-B6tGW3fj.js";import{t as n}from"./jsx-runtime-ATHzeHXA.js";import{_ as ee,g as te}from"./AsyncApiOperationViewer-Bv5WFfYq.js";import{Qt as ne,en as re}from"./UxBadge-BGHR5KdO.js";import{i as ie,r as ae}from"./sample-cases-DDoAHGgD.js";import{n as oe,t as se}from"./diffs-samples-cases-Bp0vvMWA.js";import{i as ce,r as le}from"./async-api-diffs-utils-DCIRsQce.js";import{a as ue,n as de,r as fe,t as pe}from"./AsyncApiSecuritySampleStory-C5qPXBri.js";var me;function he(){return(he=e((()=>{me=`asyncapi: 3.0.0
info:
  title: Sample AsyncAPI
  version: 1.0.0
servers:
  server0:
    host: broker-0.example.com:9092
    protocol: kafka
    description: Main Kafka broker
channels:
  testChannel:
    address: events.default
    messages:
      TestMessage:
        $ref: "#/components/messages/TestMessage"
    servers:
      - $ref: "#/servers/server0"
operations:
  sendOperation:
    action: send
    channel:
      $ref: "#/channels/testChannel"
    messages:
      - $ref: "#/components/messages/TestMessage"
components:
  messages:
    TestMessage:
      name: TestMessage
      payload:
        type: object
        properties:
          id:
            type: string
        required:
          - id
  securitySchemes:
    userPassword:
      type: userPassword
    apiKeyUser:
      type: apiKey
      in: user
    apiKeyPassword:
      type: apiKey
      in: password
    x509:
      type: X509
    symmetric:
      type: symmetricEncryption
    asymmetric:
      type: asymmetricEncryption
    headerKey:
      type: httpApiKey
      name: X-API-Key
      in: header
    queryKey:
      type: httpApiKey
      name: api_key
      in: query
    cookieKey:
      type: httpApiKey
      name: session
      in: cookie
    basic:
      type: http
      scheme: basic
    bearer:
      type: http
      scheme: bearer
      bearerFormat: JWT
    oauthImplicit:
      type: oauth2
      flows:
        implicit:
          authorizationUrl: https://auth.example.com/authorize
          availableScopes:
            events:read: Read events
            events:write: Publish events
      scopes:
        - events:read
    oauthPassword:
      type: oauth2
      flows:
        password:
          tokenUrl: https://auth.example.com/token
          availableScopes:
            events:read: Read events
      scopes: []
    oauth:
      type: oauth2
      flows:
        clientCredentials:
          tokenUrl: https://auth.example.com/token
          availableScopes:
            events:read: Read events
            events:write: Publish events
      scopes:
        - events:write
    oauthCode:
      type: oauth2
      flows:
        authorizationCode:
          authorizationUrl: https://auth.example.com/authorize
          tokenUrl: https://auth.example.com/token
          refreshUrl: https://auth.example.com/refresh
          availableScopes:
            events:read: Read events
      scopes:
        - events:read
    oauthSeveralFlows:
      type: oauth2
      flows:
        clientCredentials:
          tokenUrl: https://auth.example.com/token
          availableScopes:
            events:read: Read events
        authorizationCode:
          authorizationUrl: https://auth.example.com/authorize
          tokenUrl: https://auth.example.com/token
          availableScopes:
            events:read: Read events
            events:admin: Administer events
      scopes:
        - events:read
        - events:audit
    oidc:
      type: openIdConnect
      openIdConnectUrl: https://auth.example.com/.well-known/openid-configuration
      scopes:
        - openid
        - events:read
    plain:
      type: plain
    scram256:
      type: scramSha256
    scram512:
      type: scramSha512
    gssapi:
      type: gssapi
`})))()}var ge;function _e(){return(_e=e((()=>{ge=`asyncapi: 3.0.0
info:
  title: Sample AsyncAPI
  version: 1.0.0
servers:
  server0:
    host: broker-0.example.com:9092
    protocol: kafka
    description: Main Kafka broker
channels:
  testChannel:
    address: events.default
    messages:
      TestMessage:
        $ref: "#/components/messages/TestMessage"
    servers:
      - $ref: "#/servers/server0"
operations:
  sendOperation:
    action: send
    channel:
      $ref: "#/channels/testChannel"
    messages:
      - $ref: "#/components/messages/TestMessage"
    security:
      - $ref: "#/components/securitySchemes/headerKey"
components:
  messages:
    TestMessage:
      name: TestMessage
      payload:
        type: object
        properties:
          id:
            type: string
        required:
          - id
  securitySchemes:
    userPassword:
      type: userPassword
    apiKeyUser:
      type: apiKey
      in: user
    apiKeyPassword:
      type: apiKey
      in: password
    x509:
      type: X509
    symmetric:
      type: symmetricEncryption
    asymmetric:
      type: asymmetricEncryption
    headerKey:
      type: httpApiKey
      name: X-API-Key
      in: header
    queryKey:
      type: httpApiKey
      name: api_key
      in: query
    cookieKey:
      type: httpApiKey
      name: session
      in: cookie
    basic:
      type: http
      scheme: basic
    bearer:
      type: http
      scheme: bearer
      bearerFormat: JWT
    oauthImplicit:
      type: oauth2
      flows:
        implicit:
          authorizationUrl: https://auth.example.com/authorize
          availableScopes:
            events:read: Read events
            events:write: Publish events
      scopes:
        - events:read
    oauthPassword:
      type: oauth2
      flows:
        password:
          tokenUrl: https://auth.example.com/token
          availableScopes:
            events:read: Read events
      scopes: []
    oauth:
      type: oauth2
      flows:
        clientCredentials:
          tokenUrl: https://auth.example.com/token
          availableScopes:
            events:read: Read events
            events:write: Publish events
      scopes:
        - events:write
    oauthCode:
      type: oauth2
      flows:
        authorizationCode:
          authorizationUrl: https://auth.example.com/authorize
          tokenUrl: https://auth.example.com/token
          refreshUrl: https://auth.example.com/refresh
          availableScopes:
            events:read: Read events
      scopes:
        - events:read
    oauthSeveralFlows:
      type: oauth2
      flows:
        clientCredentials:
          tokenUrl: https://auth.example.com/token
          availableScopes:
            events:read: Read events
        authorizationCode:
          authorizationUrl: https://auth.example.com/authorize
          tokenUrl: https://auth.example.com/token
          availableScopes:
            events:read: Read events
            events:admin: Administer events
      scopes:
        - events:read
        - events:audit
    oidc:
      type: openIdConnect
      openIdConnectUrl: https://auth.example.com/.well-known/openid-configuration
      scopes:
        - openid
        - events:read
    plain:
      type: plain
    scram256:
      type: scramSha256
    scram512:
      type: scramSha512
    gssapi:
      type: gssapi
`})))()}var ve;function ye(){return(ye=e((()=>{ve=`asyncapi: 3.0.0
info:
  title: Sample AsyncAPI
  version: 1.0.0
servers:
  server0:
    host: broker-0.example.com:9092
    protocol: kafka
    description: Main Kafka broker
channels:
  testChannel:
    address: events.default
    messages:
      TestMessage:
        $ref: "#/components/messages/TestMessage"
    servers:
      - $ref: "#/servers/server0"
operations:
  sendOperation:
    action: send
    channel:
      $ref: "#/channels/testChannel"
    messages:
      - $ref: "#/components/messages/TestMessage"
    security:
      - $ref: "#/components/securitySchemes/apiKeyUser"
components:
  messages:
    TestMessage:
      name: TestMessage
      payload:
        type: object
        properties:
          id:
            type: string
        required:
          - id
  securitySchemes:
    userPassword:
      type: userPassword
    apiKeyUser:
      type: apiKey
      in: user
    apiKeyPassword:
      type: apiKey
      in: password
    x509:
      type: X509
    symmetric:
      type: symmetricEncryption
    asymmetric:
      type: asymmetricEncryption
    headerKey:
      type: httpApiKey
      name: X-API-Key
      in: header
    queryKey:
      type: httpApiKey
      name: api_key
      in: query
    cookieKey:
      type: httpApiKey
      name: session
      in: cookie
    basic:
      type: http
      scheme: basic
    bearer:
      type: http
      scheme: bearer
      bearerFormat: JWT
    oauthImplicit:
      type: oauth2
      flows:
        implicit:
          authorizationUrl: https://auth.example.com/authorize
          availableScopes:
            events:read: Read events
            events:write: Publish events
      scopes:
        - events:read
    oauthPassword:
      type: oauth2
      flows:
        password:
          tokenUrl: https://auth.example.com/token
          availableScopes:
            events:read: Read events
      scopes: []
    oauth:
      type: oauth2
      flows:
        clientCredentials:
          tokenUrl: https://auth.example.com/token
          availableScopes:
            events:read: Read events
            events:write: Publish events
      scopes:
        - events:write
    oauthCode:
      type: oauth2
      flows:
        authorizationCode:
          authorizationUrl: https://auth.example.com/authorize
          tokenUrl: https://auth.example.com/token
          refreshUrl: https://auth.example.com/refresh
          availableScopes:
            events:read: Read events
      scopes:
        - events:read
    oauthSeveralFlows:
      type: oauth2
      flows:
        clientCredentials:
          tokenUrl: https://auth.example.com/token
          availableScopes:
            events:read: Read events
        authorizationCode:
          authorizationUrl: https://auth.example.com/authorize
          tokenUrl: https://auth.example.com/token
          availableScopes:
            events:read: Read events
            events:admin: Administer events
      scopes:
        - events:read
        - events:audit
    oidc:
      type: openIdConnect
      openIdConnectUrl: https://auth.example.com/.well-known/openid-configuration
      scopes:
        - openid
        - events:read
    plain:
      type: plain
    scram256:
      type: scramSha256
    scram512:
      type: scramSha512
    gssapi:
      type: gssapi
`})))()}var be;function xe(){return(xe=e((()=>{be=`asyncapi: 3.0.0
info:
  title: Sample AsyncAPI
  version: 1.0.0
servers:
  server0:
    host: broker-0.example.com:9092
    protocol: kafka
    description: Main Kafka broker
channels:
  testChannel:
    address: events.default
    messages:
      TestMessage:
        $ref: "#/components/messages/TestMessage"
    servers:
      - $ref: "#/servers/server0"
operations:
  sendOperation:
    action: send
    channel:
      $ref: "#/channels/testChannel"
    messages:
      - $ref: "#/components/messages/TestMessage"
    security:
      - $ref: "#/components/securitySchemes/basic"
components:
  messages:
    TestMessage:
      name: TestMessage
      payload:
        type: object
        properties:
          id:
            type: string
        required:
          - id
  securitySchemes:
    userPassword:
      type: userPassword
    apiKeyUser:
      type: apiKey
      in: user
    apiKeyPassword:
      type: apiKey
      in: password
    x509:
      type: X509
    symmetric:
      type: symmetricEncryption
    asymmetric:
      type: asymmetricEncryption
    headerKey:
      type: httpApiKey
      name: X-API-Key
      in: header
    queryKey:
      type: httpApiKey
      name: api_key
      in: query
    cookieKey:
      type: httpApiKey
      name: session
      in: cookie
    basic:
      type: http
      scheme: basic
    bearer:
      type: http
      scheme: bearer
      bearerFormat: JWT
    oauthImplicit:
      type: oauth2
      flows:
        implicit:
          authorizationUrl: https://auth.example.com/authorize
          availableScopes:
            events:read: Read events
            events:write: Publish events
      scopes:
        - events:read
    oauthPassword:
      type: oauth2
      flows:
        password:
          tokenUrl: https://auth.example.com/token
          availableScopes:
            events:read: Read events
      scopes: []
    oauth:
      type: oauth2
      flows:
        clientCredentials:
          tokenUrl: https://auth.example.com/token
          availableScopes:
            events:read: Read events
            events:write: Publish events
      scopes:
        - events:write
    oauthCode:
      type: oauth2
      flows:
        authorizationCode:
          authorizationUrl: https://auth.example.com/authorize
          tokenUrl: https://auth.example.com/token
          refreshUrl: https://auth.example.com/refresh
          availableScopes:
            events:read: Read events
      scopes:
        - events:read
    oauthSeveralFlows:
      type: oauth2
      flows:
        clientCredentials:
          tokenUrl: https://auth.example.com/token
          availableScopes:
            events:read: Read events
        authorizationCode:
          authorizationUrl: https://auth.example.com/authorize
          tokenUrl: https://auth.example.com/token
          availableScopes:
            events:read: Read events
            events:admin: Administer events
      scopes:
        - events:read
        - events:audit
    oidc:
      type: openIdConnect
      openIdConnectUrl: https://auth.example.com/.well-known/openid-configuration
      scopes:
        - openid
        - events:read
    plain:
      type: plain
    scram256:
      type: scramSha256
    scram512:
      type: scramSha512
    gssapi:
      type: gssapi
`})))()}var Se;function Ce(){return(Ce=e((()=>{Se=`asyncapi: 3.0.0
info:
  title: Sample AsyncAPI
  version: 1.0.0
servers:
  server0:
    host: broker-0.example.com:9092
    protocol: kafka
    description: Main Kafka broker
channels:
  testChannel:
    address: events.default
    messages:
      TestMessage:
        $ref: "#/components/messages/TestMessage"
    servers:
      - $ref: "#/servers/server0"
operations:
  sendOperation:
    action: send
    channel:
      $ref: "#/channels/testChannel"
    messages:
      - $ref: "#/components/messages/TestMessage"
    security:
      - $ref: "#/components/securitySchemes/bearer"
components:
  messages:
    TestMessage:
      name: TestMessage
      payload:
        type: object
        properties:
          id:
            type: string
        required:
          - id
  securitySchemes:
    userPassword:
      type: userPassword
    apiKeyUser:
      type: apiKey
      in: user
    apiKeyPassword:
      type: apiKey
      in: password
    x509:
      type: X509
    symmetric:
      type: symmetricEncryption
    asymmetric:
      type: asymmetricEncryption
    headerKey:
      type: httpApiKey
      name: X-API-Key
      in: header
    queryKey:
      type: httpApiKey
      name: api_key
      in: query
    cookieKey:
      type: httpApiKey
      name: session
      in: cookie
    basic:
      type: http
      scheme: basic
    bearer:
      type: http
      scheme: bearer
    oauthImplicit:
      type: oauth2
      flows:
        implicit:
          authorizationUrl: https://auth.example.com/authorize
          availableScopes:
            events:read: Read events
            events:write: Publish events
      scopes:
        - events:read
    oauthPassword:
      type: oauth2
      flows:
        password:
          tokenUrl: https://auth.example.com/token
          availableScopes:
            events:read: Read events
      scopes: []
    oauth:
      type: oauth2
      flows:
        clientCredentials:
          tokenUrl: https://auth.example.com/token
          availableScopes:
            events:read: Read events
            events:write: Publish events
      scopes:
        - events:write
    oauthCode:
      type: oauth2
      flows:
        authorizationCode:
          authorizationUrl: https://auth.example.com/authorize
          tokenUrl: https://auth.example.com/token
          refreshUrl: https://auth.example.com/refresh
          availableScopes:
            events:read: Read events
      scopes:
        - events:read
    oauthSeveralFlows:
      type: oauth2
      flows:
        clientCredentials:
          tokenUrl: https://auth.example.com/token
          availableScopes:
            events:read: Read events
        authorizationCode:
          authorizationUrl: https://auth.example.com/authorize
          tokenUrl: https://auth.example.com/token
          availableScopes:
            events:read: Read events
            events:admin: Administer events
      scopes:
        - events:read
        - events:audit
    oidc:
      type: openIdConnect
      openIdConnectUrl: https://auth.example.com/.well-known/openid-configuration
      scopes:
        - openid
        - events:read
    plain:
      type: plain
    scram256:
      type: scramSha256
    scram512:
      type: scramSha512
    gssapi:
      type: gssapi
`})))()}var we;function Te(){return(Te=e((()=>{we=`asyncapi: 3.0.0
info:
  title: Sample AsyncAPI
  version: 1.0.0
servers:
  server0:
    host: broker-0.example.com:9092
    protocol: kafka
    description: Main Kafka broker
channels:
  testChannel:
    address: events.default
    messages:
      TestMessage:
        $ref: "#/components/messages/TestMessage"
    servers:
      - $ref: "#/servers/server0"
operations:
  sendOperation:
    action: send
    channel:
      $ref: "#/channels/testChannel"
    messages:
      - $ref: "#/components/messages/TestMessage"
    security:
      - $ref: "#/components/securitySchemes/bearer"
components:
  messages:
    TestMessage:
      name: TestMessage
      payload:
        type: object
        properties:
          id:
            type: string
        required:
          - id
  securitySchemes:
    userPassword:
      type: userPassword
    apiKeyUser:
      type: apiKey
      in: user
    apiKeyPassword:
      type: apiKey
      in: password
    x509:
      type: X509
    symmetric:
      type: symmetricEncryption
    asymmetric:
      type: asymmetricEncryption
    headerKey:
      type: httpApiKey
      name: X-API-Key
      in: header
    queryKey:
      type: httpApiKey
      name: api_key
      in: query
    cookieKey:
      type: httpApiKey
      name: session
      in: cookie
    basic:
      type: http
      scheme: basic
    bearer:
      type: http
      scheme: bearer
      bearerFormat: JWT
    oauthImplicit:
      type: oauth2
      flows:
        implicit:
          authorizationUrl: https://auth.example.com/authorize
          availableScopes:
            events:read: Read events
            events:write: Publish events
      scopes:
        - events:read
    oauthPassword:
      type: oauth2
      flows:
        password:
          tokenUrl: https://auth.example.com/token
          availableScopes:
            events:read: Read events
      scopes: []
    oauth:
      type: oauth2
      flows:
        clientCredentials:
          tokenUrl: https://auth.example.com/token
          availableScopes:
            events:read: Read events
            events:write: Publish events
      scopes:
        - events:write
    oauthCode:
      type: oauth2
      flows:
        authorizationCode:
          authorizationUrl: https://auth.example.com/authorize
          tokenUrl: https://auth.example.com/token
          refreshUrl: https://auth.example.com/refresh
          availableScopes:
            events:read: Read events
      scopes:
        - events:read
    oauthSeveralFlows:
      type: oauth2
      flows:
        clientCredentials:
          tokenUrl: https://auth.example.com/token
          availableScopes:
            events:read: Read events
        authorizationCode:
          authorizationUrl: https://auth.example.com/authorize
          tokenUrl: https://auth.example.com/token
          availableScopes:
            events:read: Read events
            events:admin: Administer events
      scopes:
        - events:read
        - events:audit
    oidc:
      type: openIdConnect
      openIdConnectUrl: https://auth.example.com/.well-known/openid-configuration
      scopes:
        - openid
        - events:read
    plain:
      type: plain
    scram256:
      type: scramSha256
    scram512:
      type: scramSha512
    gssapi:
      type: gssapi
`})))()}var Ee;function De(){return(De=e((()=>{Ee=`asyncapi: 3.0.0
info:
  title: Sample AsyncAPI
  version: 1.0.0
servers:
  server0:
    host: broker-0.example.com:9092
    protocol: kafka
    description: Main Kafka broker
channels:
  testChannel:
    address: events.default
    messages:
      TestMessage:
        $ref: "#/components/messages/TestMessage"
    servers:
      - $ref: "#/servers/server0"
operations:
  sendOperation:
    action: send
    channel:
      $ref: "#/channels/testChannel"
    messages:
      - $ref: "#/components/messages/TestMessage"
    security:
      - $ref: "#/components/securitySchemes/oidc"
components:
  messages:
    TestMessage:
      name: TestMessage
      payload:
        type: object
        properties:
          id:
            type: string
        required:
          - id
  securitySchemes:
    userPassword:
      type: userPassword
    apiKeyUser:
      type: apiKey
      in: user
    apiKeyPassword:
      type: apiKey
      in: password
    x509:
      type: X509
    symmetric:
      type: symmetricEncryption
    asymmetric:
      type: asymmetricEncryption
    headerKey:
      type: httpApiKey
      name: X-API-Key
      in: header
    queryKey:
      type: httpApiKey
      name: api_key
      in: query
    cookieKey:
      type: httpApiKey
      name: session
      in: cookie
    basic:
      type: http
      scheme: basic
    bearer:
      type: http
      scheme: bearer
      bearerFormat: JWT
    oauthImplicit:
      type: oauth2
      flows:
        implicit:
          authorizationUrl: https://auth.example.com/authorize
          availableScopes:
            events:read: Read events
            events:write: Publish events
      scopes:
        - events:read
    oauthPassword:
      type: oauth2
      flows:
        password:
          tokenUrl: https://auth.example.com/token
          availableScopes:
            events:read: Read events
      scopes: []
    oauth:
      type: oauth2
      flows:
        clientCredentials:
          tokenUrl: https://auth.example.com/token
          availableScopes:
            events:read: Read events
            events:write: Publish events
      scopes:
        - events:write
    oauthCode:
      type: oauth2
      flows:
        authorizationCode:
          authorizationUrl: https://auth.example.com/authorize
          tokenUrl: https://auth.example.com/token
          refreshUrl: https://auth.example.com/refresh
          availableScopes:
            events:read: Read events
      scopes:
        - events:read
    oauthSeveralFlows:
      type: oauth2
      flows:
        clientCredentials:
          tokenUrl: https://auth.example.com/token
          availableScopes:
            events:read: Read events
        authorizationCode:
          authorizationUrl: https://auth.example.com/authorize
          tokenUrl: https://auth.example.com/token
          availableScopes:
            events:read: Read events
            events:admin: Administer events
      scopes:
        - events:read
        - events:audit
    oidc:
      type: openIdConnect
      openIdConnectUrl: https://auth.example.com/.well-known/openid-configuration
      scopes:
        - openid
        - events:read
    plain:
      type: plain
    scram256:
      type: scramSha256
    scram512:
      type: scramSha512
    gssapi:
      type: gssapi
`})))()}var Oe;function ke(){return(ke=e((()=>{Oe=`asyncapi: 3.0.0
info:
  title: Sample AsyncAPI
  version: 1.0.0
servers:
  server0:
    host: broker-0.example.com:9092
    protocol: kafka
    description: Main Kafka broker
channels:
  testChannel:
    address: events.default
    messages:
      TestMessage:
        $ref: "#/components/messages/TestMessage"
    servers:
      - $ref: "#/servers/server0"
operations:
  sendOperation:
    action: send
    channel:
      $ref: "#/channels/testChannel"
    messages:
      - $ref: "#/components/messages/TestMessage"
    security:
      - $ref: "#/components/securitySchemes/oauth"
components:
  messages:
    TestMessage:
      name: TestMessage
      payload:
        type: object
        properties:
          id:
            type: string
        required:
          - id
  securitySchemes:
    userPassword:
      type: userPassword
    apiKeyUser:
      type: apiKey
      in: user
    apiKeyPassword:
      type: apiKey
      in: password
    x509:
      type: X509
    symmetric:
      type: symmetricEncryption
    asymmetric:
      type: asymmetricEncryption
    headerKey:
      type: httpApiKey
      name: X-API-Key
      in: header
    queryKey:
      type: httpApiKey
      name: api_key
      in: query
    cookieKey:
      type: httpApiKey
      name: session
      in: cookie
    basic:
      type: http
      scheme: basic
    bearer:
      type: http
      scheme: bearer
      bearerFormat: JWT
    oauthImplicit:
      type: oauth2
      flows:
        implicit:
          authorizationUrl: https://auth.example.com/authorize
          availableScopes:
            events:read: Read events
            events:write: Publish events
      scopes:
        - events:read
    oauthPassword:
      type: oauth2
      flows:
        password:
          tokenUrl: https://auth.example.com/token
          availableScopes:
            events:read: Read events
      scopes: []
    oauth:
      type: oauth2
      flows:
        clientCredentials:
          tokenUrl: https://auth.example.com/token
          availableScopes:
            events:read: Read events
            events:write: Publish events
      scopes:
        - events:write
    oauthCode:
      type: oauth2
      flows:
        authorizationCode:
          authorizationUrl: https://auth.example.com/authorize
          tokenUrl: https://auth.example.com/token
          refreshUrl: https://auth.example.com/refresh
          availableScopes:
            events:read: Read events
      scopes:
        - events:read
    oauthSeveralFlows:
      type: oauth2
      flows:
        clientCredentials:
          tokenUrl: https://auth.example.com/token
          availableScopes:
            events:read: Read events
        authorizationCode:
          authorizationUrl: https://auth.example.com/authorize
          tokenUrl: https://auth.example.com/token
          availableScopes:
            events:read: Read events
            events:admin: Administer events
      scopes:
        - events:read
        - events:audit
    oidc:
      type: openIdConnect
      openIdConnectUrl: https://auth.example.com/.well-known/openid-configuration
      scopes:
        - openid
        - events:read
    plain:
      type: plain
    scram256:
      type: scramSha256
    scram512:
      type: scramSha512
    gssapi:
      type: gssapi
`})))()}var Ae;function je(){return(je=e((()=>{Ae=`asyncapi: 3.0.0
info:
  title: Sample AsyncAPI
  version: 1.0.0
servers:
  server0:
    host: broker-0.example.com:9092
    protocol: kafka
    description: Main Kafka broker
channels:
  testChannel:
    address: events.default
    messages:
      TestMessage:
        $ref: "#/components/messages/TestMessage"
    servers:
      - $ref: "#/servers/server0"
operations:
  sendOperation:
    action: send
    channel:
      $ref: "#/channels/testChannel"
    messages:
      - $ref: "#/components/messages/TestMessage"
    security:
      - $ref: "#/components/securitySchemes/oauth"
components:
  messages:
    TestMessage:
      name: TestMessage
      payload:
        type: object
        properties:
          id:
            type: string
        required:
          - id
  securitySchemes:
    userPassword:
      type: userPassword
    apiKeyUser:
      type: apiKey
      in: user
    apiKeyPassword:
      type: apiKey
      in: password
    x509:
      type: X509
    symmetric:
      type: symmetricEncryption
    asymmetric:
      type: asymmetricEncryption
    headerKey:
      type: httpApiKey
      name: X-API-Key
      in: header
    queryKey:
      type: httpApiKey
      name: api_key
      in: query
    cookieKey:
      type: httpApiKey
      name: session
      in: cookie
    basic:
      type: http
      scheme: basic
    bearer:
      type: http
      scheme: bearer
      bearerFormat: JWT
    oauthImplicit:
      type: oauth2
      flows:
        implicit:
          authorizationUrl: https://auth.example.com/authorize
          availableScopes:
            events:read: Read events
            events:write: Publish events
      scopes:
        - events:read
    oauthPassword:
      type: oauth2
      flows:
        password:
          tokenUrl: https://auth.example.com/token
          availableScopes:
            events:read: Read events
      scopes: []
    oauth:
      type: oauth2
      flows:
        clientCredentials:
          tokenUrl: https://auth.example.com/token
          availableScopes:
            events:read: Read events
            events:write: Publish events
      scopes:
        - events:write
    oauthCode:
      type: oauth2
      flows:
        authorizationCode:
          authorizationUrl: https://auth.example.com/authorize
          tokenUrl: https://auth.example.com/token
          refreshUrl: https://auth.example.com/refresh
          availableScopes:
            events:read: Read events
      scopes:
        - events:read
    oauthSeveralFlows:
      type: oauth2
      flows:
        clientCredentials:
          tokenUrl: https://auth.example.com/token
          availableScopes:
            events:read: Read events
        authorizationCode:
          authorizationUrl: https://auth.example.com/authorize
          tokenUrl: https://auth.example.com/token
          availableScopes:
            events:read: Read events
            events:admin: Administer events
      scopes:
        - events:read
        - events:audit
    oidc:
      type: openIdConnect
      openIdConnectUrl: https://auth.example.com/.well-known/openid-configuration
      scopes:
        - openid
        - events:read
    plain:
      type: plain
    scram256:
      type: scramSha256
    scram512:
      type: scramSha512
    gssapi:
      type: gssapi
`})))()}var Me;function Ne(){return(Ne=e((()=>{Me=`asyncapi: 3.0.0
info:
  title: Sample AsyncAPI
  version: 1.0.0
servers:
  server0:
    host: broker-0.example.com:9092
    protocol: kafka
    description: Main Kafka broker
channels:
  testChannel:
    address: events.default
    messages:
      TestMessage:
        $ref: "#/components/messages/TestMessage"
    servers:
      - $ref: "#/servers/server0"
operations:
  sendOperation:
    action: send
    channel:
      $ref: "#/channels/testChannel"
    messages:
      - $ref: "#/components/messages/TestMessage"
    security:
      - $ref: "#/components/securitySchemes/oauth"
components:
  messages:
    TestMessage:
      name: TestMessage
      payload:
        type: object
        properties:
          id:
            type: string
        required:
          - id
  securitySchemes:
    userPassword:
      type: userPassword
    apiKeyUser:
      type: apiKey
      in: user
    apiKeyPassword:
      type: apiKey
      in: password
    x509:
      type: X509
    symmetric:
      type: symmetricEncryption
    asymmetric:
      type: asymmetricEncryption
    headerKey:
      type: httpApiKey
      name: X-API-Key
      in: header
    queryKey:
      type: httpApiKey
      name: api_key
      in: query
    cookieKey:
      type: httpApiKey
      name: session
      in: cookie
    basic:
      type: http
      scheme: basic
    bearer:
      type: http
      scheme: bearer
      bearerFormat: JWT
    oauthImplicit:
      type: oauth2
      flows:
        implicit:
          authorizationUrl: https://auth.example.com/authorize
          availableScopes:
            events:read: Read events
            events:write: Publish events
      scopes:
        - events:read
    oauthPassword:
      type: oauth2
      flows:
        password:
          tokenUrl: https://auth.example.com/token
          availableScopes:
            events:read: Read events
      scopes: []
    oauth:
      type: oauth2
      flows:
        clientCredentials:
          tokenUrl: https://auth.example.com/token
          availableScopes:
            events:read: Read events
            events:write: Publish events
      scopes:
        - events:write
    oauthCode:
      type: oauth2
      flows:
        authorizationCode:
          authorizationUrl: https://auth.example.com/authorize
          tokenUrl: https://auth.example.com/token
          refreshUrl: https://auth.example.com/refresh
          availableScopes:
            events:read: Read events
      scopes:
        - events:read
    oauthSeveralFlows:
      type: oauth2
      flows:
        clientCredentials:
          tokenUrl: https://auth.example.com/token
          availableScopes:
            events:read: Read events
        authorizationCode:
          authorizationUrl: https://auth.example.com/authorize
          tokenUrl: https://auth.example.com/token
          availableScopes:
            events:read: Read events
            events:admin: Administer events
      scopes:
        - events:read
        - events:audit
    oidc:
      type: openIdConnect
      openIdConnectUrl: https://auth.example.com/.well-known/openid-configuration
      scopes:
        - openid
        - events:read
    plain:
      type: plain
    scram256:
      type: scramSha256
    scram512:
      type: scramSha512
    gssapi:
      type: gssapi
`})))()}var Pe;function Fe(){return(Fe=e((()=>{Pe=`asyncapi: 3.0.0
info:
  title: Sample AsyncAPI
  version: 1.0.0
servers:
  server0:
    host: broker-0.example.com:9092
    protocol: kafka
    description: Main Kafka broker
channels:
  testChannel:
    address: events.default
    messages:
      TestMessage:
        $ref: "#/components/messages/TestMessage"
    servers:
      - $ref: "#/servers/server0"
operations:
  sendOperation:
    action: send
    channel:
      $ref: "#/channels/testChannel"
    messages:
      - $ref: "#/components/messages/TestMessage"
    security:
      - $ref: "#/components/securitySchemes/oauth"
components:
  messages:
    TestMessage:
      name: TestMessage
      payload:
        type: object
        properties:
          id:
            type: string
        required:
          - id
  securitySchemes:
    userPassword:
      type: userPassword
    apiKeyUser:
      type: apiKey
      in: user
    apiKeyPassword:
      type: apiKey
      in: password
    x509:
      type: X509
    symmetric:
      type: symmetricEncryption
    asymmetric:
      type: asymmetricEncryption
    headerKey:
      type: httpApiKey
      name: X-API-Key
      in: header
    queryKey:
      type: httpApiKey
      name: api_key
      in: query
    cookieKey:
      type: httpApiKey
      name: session
      in: cookie
    basic:
      type: http
      scheme: basic
    bearer:
      type: http
      scheme: bearer
      bearerFormat: JWT
    oauthImplicit:
      type: oauth2
      flows:
        implicit:
          authorizationUrl: https://auth.example.com/authorize
          availableScopes:
            events:read: Read events
            events:write: Publish events
      scopes:
        - events:read
    oauthPassword:
      type: oauth2
      flows:
        password:
          tokenUrl: https://auth.example.com/token
          availableScopes:
            events:read: Read events
      scopes: []
    oauth:
      type: oauth2
      flows:
        clientCredentials:
          tokenUrl: https://auth.example.com/token
          availableScopes:
            events:read: Read events
            events:write: Publish events
        implicit:
          authorizationUrl: https://auth.example.com/authorize
          availableScopes:
            events:read: Read events
      scopes:
        - events:write
    oauthCode:
      type: oauth2
      flows:
        authorizationCode:
          authorizationUrl: https://auth.example.com/authorize
          tokenUrl: https://auth.example.com/token
          refreshUrl: https://auth.example.com/refresh
          availableScopes:
            events:read: Read events
      scopes:
        - events:read
    oauthSeveralFlows:
      type: oauth2
      flows:
        clientCredentials:
          tokenUrl: https://auth.example.com/token
          availableScopes:
            events:read: Read events
        authorizationCode:
          authorizationUrl: https://auth.example.com/authorize
          tokenUrl: https://auth.example.com/token
          availableScopes:
            events:read: Read events
            events:admin: Administer events
      scopes:
        - events:read
        - events:audit
    oidc:
      type: openIdConnect
      openIdConnectUrl: https://auth.example.com/.well-known/openid-configuration
      scopes:
        - openid
        - events:read
    plain:
      type: plain
    scram256:
      type: scramSha256
    scram512:
      type: scramSha512
    gssapi:
      type: gssapi
`})))()}var Ie;function r(){return(r=e((()=>{Ie=`asyncapi: 3.0.0
info:
  title: Sample AsyncAPI
  version: 1.0.0
servers:
  server0:
    host: broker-0.example.com:9092
    protocol: kafka
    description: Main Kafka broker
channels:
  testChannel:
    address: events.default
    messages:
      TestMessage:
        $ref: "#/components/messages/TestMessage"
    servers:
      - $ref: "#/servers/server0"
operations:
  sendOperation:
    action: send
    channel:
      $ref: "#/channels/testChannel"
    messages:
      - $ref: "#/components/messages/TestMessage"
    security:
      - $ref: "#/components/securitySchemes/oauth"
components:
  messages:
    TestMessage:
      name: TestMessage
      payload:
        type: object
        properties:
          id:
            type: string
        required:
          - id
  securitySchemes:
    userPassword:
      type: userPassword
    apiKeyUser:
      type: apiKey
      in: user
    apiKeyPassword:
      type: apiKey
      in: password
    x509:
      type: X509
    symmetric:
      type: symmetricEncryption
    asymmetric:
      type: asymmetricEncryption
    headerKey:
      type: httpApiKey
      name: X-API-Key
      in: header
    queryKey:
      type: httpApiKey
      name: api_key
      in: query
    cookieKey:
      type: httpApiKey
      name: session
      in: cookie
    basic:
      type: http
      scheme: basic
    bearer:
      type: http
      scheme: bearer
      bearerFormat: JWT
    oauthImplicit:
      type: oauth2
      flows:
        implicit:
          authorizationUrl: https://auth.example.com/authorize
          availableScopes:
            events:read: Read events
            events:write: Publish events
      scopes:
        - events:read
    oauthPassword:
      type: oauth2
      flows:
        password:
          tokenUrl: https://auth.example.com/token
          availableScopes:
            events:read: Read events
      scopes: []
    oauth:
      type: oauth2
      flows:
        clientCredentials:
          tokenUrl: https://auth.example.com/token
          availableScopes:
            events:read: Read events
            events:write: Publish events
      scopes:
        - events:write
    oauthCode:
      type: oauth2
      flows:
        authorizationCode:
          authorizationUrl: https://auth.example.com/authorize
          tokenUrl: https://auth.example.com/token
          refreshUrl: https://auth.example.com/refresh
          availableScopes:
            events:read: Read events
      scopes:
        - events:read
    oauthSeveralFlows:
      type: oauth2
      flows:
        clientCredentials:
          tokenUrl: https://auth.example.com/token
          availableScopes:
            events:read: Read events
        authorizationCode:
          authorizationUrl: https://auth.example.com/authorize
          tokenUrl: https://auth.example.com/token
          availableScopes:
            events:read: Read events
            events:admin: Administer events
      scopes:
        - events:read
        - events:audit
    oidc:
      type: openIdConnect
      openIdConnectUrl: https://auth.example.com/.well-known/openid-configuration
      scopes:
        - openid
        - events:read
    plain:
      type: plain
    scram256:
      type: scramSha256
    scram512:
      type: scramSha512
    gssapi:
      type: gssapi
`})))()}var i;function a(){return(a=e((()=>{i=`asyncapi: 3.0.0
info:
  title: Sample AsyncAPI
  version: 1.0.0
servers:
  server0:
    host: broker-0.example.com:9092
    protocol: kafka
    description: Main Kafka broker
channels:
  testChannel:
    address: events.default
    messages:
      TestMessage:
        $ref: "#/components/messages/TestMessage"
    servers:
      - $ref: "#/servers/server0"
operations:
  sendOperation:
    action: send
    channel:
      $ref: "#/channels/testChannel"
    messages:
      - $ref: "#/components/messages/TestMessage"
    security:
      - $ref: "#/components/securitySchemes/oauth"
components:
  messages:
    TestMessage:
      name: TestMessage
      payload:
        type: object
        properties:
          id:
            type: string
        required:
          - id
  securitySchemes:
    userPassword:
      type: userPassword
    apiKeyUser:
      type: apiKey
      in: user
    apiKeyPassword:
      type: apiKey
      in: password
    x509:
      type: X509
    symmetric:
      type: symmetricEncryption
    asymmetric:
      type: asymmetricEncryption
    headerKey:
      type: httpApiKey
      name: X-API-Key
      in: header
    queryKey:
      type: httpApiKey
      name: api_key
      in: query
    cookieKey:
      type: httpApiKey
      name: session
      in: cookie
    basic:
      type: http
      scheme: basic
    bearer:
      type: http
      scheme: bearer
      bearerFormat: JWT
    oauthImplicit:
      type: oauth2
      flows:
        implicit:
          authorizationUrl: https://auth.example.com/authorize
          availableScopes:
            events:read: Read events
            events:write: Publish events
      scopes:
        - events:read
    oauthPassword:
      type: oauth2
      flows:
        password:
          tokenUrl: https://auth.example.com/token
          availableScopes:
            events:read: Read events
      scopes: []
    oauth:
      type: oauth2
      flows:
        clientCredentials:
          tokenUrl: https://auth.example.com/token
          availableScopes:
            events:read: Read events
            events:write: Publish events
      scopes:
        - events:write
    oauthCode:
      type: oauth2
      flows:
        authorizationCode:
          authorizationUrl: https://auth.example.com/authorize
          tokenUrl: https://auth.example.com/token
          refreshUrl: https://auth.example.com/refresh
          availableScopes:
            events:read: Read events
      scopes:
        - events:read
    oauthSeveralFlows:
      type: oauth2
      flows:
        clientCredentials:
          tokenUrl: https://auth.example.com/token
          availableScopes:
            events:read: Read events
        authorizationCode:
          authorizationUrl: https://auth.example.com/authorize
          tokenUrl: https://auth.example.com/token
          availableScopes:
            events:read: Read events
            events:admin: Administer events
      scopes:
        - events:read
        - events:audit
    oidc:
      type: openIdConnect
      openIdConnectUrl: https://auth.example.com/.well-known/openid-configuration
      scopes:
        - openid
        - events:read
    plain:
      type: plain
    scram256:
      type: scramSha256
    scram512:
      type: scramSha512
    gssapi:
      type: gssapi
`})))()}var o;function s(){return(s=e((()=>{o=`asyncapi: 3.0.0
info:
  title: Sample AsyncAPI
  version: 1.0.0
servers:
  server0:
    host: broker-0.example.com:9092
    protocol: kafka
    description: Main Kafka broker
channels:
  testChannel:
    address: events.default
    messages:
      TestMessage:
        $ref: "#/components/messages/TestMessage"
    servers:
      - $ref: "#/servers/server0"
operations:
  sendOperation:
    action: send
    channel:
      $ref: "#/channels/testChannel"
    messages:
      - $ref: "#/components/messages/TestMessage"
    security:
      - $ref: "#/components/securitySchemes/oauth"
components:
  messages:
    TestMessage:
      name: TestMessage
      payload:
        type: object
        properties:
          id:
            type: string
        required:
          - id
  securitySchemes:
    userPassword:
      type: userPassword
    apiKeyUser:
      type: apiKey
      in: user
    apiKeyPassword:
      type: apiKey
      in: password
    x509:
      type: X509
    symmetric:
      type: symmetricEncryption
    asymmetric:
      type: asymmetricEncryption
    headerKey:
      type: httpApiKey
      name: X-API-Key
      in: header
    queryKey:
      type: httpApiKey
      name: api_key
      in: query
    cookieKey:
      type: httpApiKey
      name: session
      in: cookie
    basic:
      type: http
      scheme: basic
    bearer:
      type: http
      scheme: bearer
      bearerFormat: JWT
    oauthImplicit:
      type: oauth2
      flows:
        implicit:
          authorizationUrl: https://auth.example.com/authorize
          availableScopes:
            events:read: Read events
            events:write: Publish events
      scopes:
        - events:read
    oauthPassword:
      type: oauth2
      flows:
        password:
          tokenUrl: https://auth.example.com/token
          availableScopes:
            events:read: Read events
      scopes: []
    oauth:
      type: oauth2
      flows:
        clientCredentials:
          tokenUrl: https://auth.example.com/token
          availableScopes:
            events:read: Read events
            events:write: Publish events
      scopes:
        - events:write
    oauthCode:
      type: oauth2
      flows:
        authorizationCode:
          authorizationUrl: https://auth.example.com/authorize
          tokenUrl: https://auth.example.com/token
          refreshUrl: https://auth.example.com/refresh
          availableScopes:
            events:read: Read events
      scopes:
        - events:read
    oauthSeveralFlows:
      type: oauth2
      flows:
        clientCredentials:
          tokenUrl: https://auth.example.com/token
          availableScopes:
            events:read: Read events
        authorizationCode:
          authorizationUrl: https://auth.example.com/authorize
          tokenUrl: https://auth.example.com/token
          availableScopes:
            events:read: Read events
            events:admin: Administer events
      scopes:
        - events:read
        - events:audit
    oidc:
      type: openIdConnect
      openIdConnectUrl: https://auth.example.com/.well-known/openid-configuration
      scopes:
        - openid
        - events:read
    plain:
      type: plain
    scram256:
      type: scramSha256
    scram512:
      type: scramSha512
    gssapi:
      type: gssapi
`})))()}var c;function l(){return(l=e((()=>{c=`asyncapi: 3.0.0
info:
  title: Sample AsyncAPI
  version: 1.0.0
servers:
  server0:
    host: broker-0.example.com:9092
    protocol: kafka
    description: Main Kafka broker
channels:
  testChannel:
    address: events.default
    messages:
      TestMessage:
        $ref: "#/components/messages/TestMessage"
    servers:
      - $ref: "#/servers/server0"
operations:
  sendOperation:
    action: send
    channel:
      $ref: "#/channels/testChannel"
    messages:
      - $ref: "#/components/messages/TestMessage"
    security:
      - $ref: "#/components/securitySchemes/oauth"
components:
  messages:
    TestMessage:
      name: TestMessage
      payload:
        type: object
        properties:
          id:
            type: string
        required:
          - id
  securitySchemes:
    userPassword:
      type: userPassword
    apiKeyUser:
      type: apiKey
      in: user
    apiKeyPassword:
      type: apiKey
      in: password
    x509:
      type: X509
    symmetric:
      type: symmetricEncryption
    asymmetric:
      type: asymmetricEncryption
    headerKey:
      type: httpApiKey
      name: X-API-Key
      in: header
    queryKey:
      type: httpApiKey
      name: api_key
      in: query
    cookieKey:
      type: httpApiKey
      name: session
      in: cookie
    basic:
      type: http
      scheme: basic
    bearer:
      type: http
      scheme: bearer
      bearerFormat: JWT
    oauthImplicit:
      type: oauth2
      flows:
        implicit:
          authorizationUrl: https://auth.example.com/authorize
          availableScopes:
            events:read: Read events
            events:write: Publish events
      scopes:
        - events:read
    oauthPassword:
      type: oauth2
      flows:
        password:
          tokenUrl: https://auth.example.com/token
          availableScopes:
            events:read: Read events
      scopes: []
    oauth:
      type: oauth2
      flows:
        clientCredentials:
          tokenUrl: https://auth.example.com/token
          availableScopes:
            events:read: Read events
            events:write: Publish events
          refreshUrl: https://auth.example.com/refresh
      scopes:
        - events:write
    oauthCode:
      type: oauth2
      flows:
        authorizationCode:
          authorizationUrl: https://auth.example.com/authorize
          tokenUrl: https://auth.example.com/token
          refreshUrl: https://auth.example.com/refresh
          availableScopes:
            events:read: Read events
      scopes:
        - events:read
    oauthSeveralFlows:
      type: oauth2
      flows:
        clientCredentials:
          tokenUrl: https://auth.example.com/token
          availableScopes:
            events:read: Read events
        authorizationCode:
          authorizationUrl: https://auth.example.com/authorize
          tokenUrl: https://auth.example.com/token
          availableScopes:
            events:read: Read events
            events:admin: Administer events
      scopes:
        - events:read
        - events:audit
    oidc:
      type: openIdConnect
      openIdConnectUrl: https://auth.example.com/.well-known/openid-configuration
      scopes:
        - openid
        - events:read
    plain:
      type: plain
    scram256:
      type: scramSha256
    scram512:
      type: scramSha512
    gssapi:
      type: gssapi
`})))()}var u;function d(){return(d=e((()=>{u=`asyncapi: 3.0.0
info:
  title: Sample AsyncAPI
  version: 1.0.0
servers:
  server0:
    host: broker-0.example.com:9092
    protocol: kafka
    description: Main Kafka broker
channels:
  testChannel:
    address: events.default
    messages:
      TestMessage:
        $ref: "#/components/messages/TestMessage"
    servers:
      - $ref: "#/servers/server0"
operations:
  sendOperation:
    action: send
    channel:
      $ref: "#/channels/testChannel"
    messages:
      - $ref: "#/components/messages/TestMessage"
    security:
      - $ref: "#/components/securitySchemes/oauth"
components:
  messages:
    TestMessage:
      name: TestMessage
      payload:
        type: object
        properties:
          id:
            type: string
        required:
          - id
  securitySchemes:
    userPassword:
      type: userPassword
    apiKeyUser:
      type: apiKey
      in: user
    apiKeyPassword:
      type: apiKey
      in: password
    x509:
      type: X509
    symmetric:
      type: symmetricEncryption
    asymmetric:
      type: asymmetricEncryption
    headerKey:
      type: httpApiKey
      name: X-API-Key
      in: header
    queryKey:
      type: httpApiKey
      name: api_key
      in: query
    cookieKey:
      type: httpApiKey
      name: session
      in: cookie
    basic:
      type: http
      scheme: basic
    bearer:
      type: http
      scheme: bearer
      bearerFormat: JWT
    oauthImplicit:
      type: oauth2
      flows:
        implicit:
          authorizationUrl: https://auth.example.com/authorize
          availableScopes:
            events:read: Read events
            events:write: Publish events
      scopes:
        - events:read
    oauthPassword:
      type: oauth2
      flows:
        password:
          tokenUrl: https://auth.example.com/token
          availableScopes:
            events:read: Read events
      scopes: []
    oauth:
      type: oauth2
      flows:
        clientCredentials:
          tokenUrl: https://auth.example.com/token
          availableScopes:
            events:read: Read events
            events:write: Publish events
      scopes:
        - events:write
    oauthCode:
      type: oauth2
      flows:
        authorizationCode:
          authorizationUrl: https://auth.example.com/authorize
          tokenUrl: https://auth.example.com/token
          refreshUrl: https://auth.example.com/refresh
          availableScopes:
            events:read: Read events
      scopes:
        - events:read
    oauthSeveralFlows:
      type: oauth2
      flows:
        clientCredentials:
          tokenUrl: https://auth.example.com/token
          availableScopes:
            events:read: Read events
        authorizationCode:
          authorizationUrl: https://auth.example.com/authorize
          tokenUrl: https://auth.example.com/token
          availableScopes:
            events:read: Read events
            events:admin: Administer events
      scopes:
        - events:read
        - events:audit
    oidc:
      type: openIdConnect
      openIdConnectUrl: https://auth.example.com/.well-known/openid-configuration
      scopes:
        - openid
        - events:read
    plain:
      type: plain
    scram256:
      type: scramSha256
    scram512:
      type: scramSha512
    gssapi:
      type: gssapi
`})))()}var f;function p(){return(p=e((()=>{f=`asyncapi: 3.0.0
info:
  title: Sample AsyncAPI
  version: 1.0.0
servers:
  server0:
    host: broker-0.example.com:9092
    protocol: kafka
    description: Main Kafka broker
channels:
  testChannel:
    address: events.default
    messages:
      TestMessage:
        $ref: "#/components/messages/TestMessage"
    servers:
      - $ref: "#/servers/server0"
operations:
  sendOperation:
    action: send
    channel:
      $ref: "#/channels/testChannel"
    messages:
      - $ref: "#/components/messages/TestMessage"
    security:
      - $ref: "#/components/securitySchemes/oauth"
components:
  messages:
    TestMessage:
      name: TestMessage
      payload:
        type: object
        properties:
          id:
            type: string
        required:
          - id
  securitySchemes:
    userPassword:
      type: userPassword
    apiKeyUser:
      type: apiKey
      in: user
    apiKeyPassword:
      type: apiKey
      in: password
    x509:
      type: X509
    symmetric:
      type: symmetricEncryption
    asymmetric:
      type: asymmetricEncryption
    headerKey:
      type: httpApiKey
      name: X-API-Key
      in: header
    queryKey:
      type: httpApiKey
      name: api_key
      in: query
    cookieKey:
      type: httpApiKey
      name: session
      in: cookie
    basic:
      type: http
      scheme: basic
    bearer:
      type: http
      scheme: bearer
      bearerFormat: JWT
    oauthImplicit:
      type: oauth2
      flows:
        implicit:
          authorizationUrl: https://auth.example.com/authorize
          availableScopes:
            events:read: Read events
            events:write: Publish events
      scopes:
        - events:read
    oauthPassword:
      type: oauth2
      flows:
        password:
          tokenUrl: https://auth.example.com/token
          availableScopes:
            events:read: Read events
      scopes: []
    oauth:
      type: oauth2
      flows:
        clientCredentials:
          tokenUrl: https://auth.example.com/token
          availableScopes:
            events:read: Read events
            events:write: Publish events
            events:admin: Administer events
      scopes:
        - events:write
    oauthCode:
      type: oauth2
      flows:
        authorizationCode:
          authorizationUrl: https://auth.example.com/authorize
          tokenUrl: https://auth.example.com/token
          refreshUrl: https://auth.example.com/refresh
          availableScopes:
            events:read: Read events
      scopes:
        - events:read
    oauthSeveralFlows:
      type: oauth2
      flows:
        clientCredentials:
          tokenUrl: https://auth.example.com/token
          availableScopes:
            events:read: Read events
        authorizationCode:
          authorizationUrl: https://auth.example.com/authorize
          tokenUrl: https://auth.example.com/token
          availableScopes:
            events:read: Read events
            events:admin: Administer events
      scopes:
        - events:read
        - events:audit
    oidc:
      type: openIdConnect
      openIdConnectUrl: https://auth.example.com/.well-known/openid-configuration
      scopes:
        - openid
        - events:read
    plain:
      type: plain
    scram256:
      type: scramSha256
    scram512:
      type: scramSha512
    gssapi:
      type: gssapi
`})))()}var m;function h(){return(h=e((()=>{m=`asyncapi: 3.0.0
info:
  title: Sample AsyncAPI
  version: 1.0.0
servers:
  server0:
    host: broker-0.example.com:9092
    protocol: kafka
    description: Main Kafka broker
channels:
  testChannel:
    address: events.default
    messages:
      TestMessage:
        $ref: "#/components/messages/TestMessage"
    servers:
      - $ref: "#/servers/server0"
operations:
  sendOperation:
    action: send
    channel:
      $ref: "#/channels/testChannel"
    messages:
      - $ref: "#/components/messages/TestMessage"
    security:
      - $ref: "#/components/securitySchemes/oauth"
components:
  messages:
    TestMessage:
      name: TestMessage
      payload:
        type: object
        properties:
          id:
            type: string
        required:
          - id
  securitySchemes:
    userPassword:
      type: userPassword
    apiKeyUser:
      type: apiKey
      in: user
    apiKeyPassword:
      type: apiKey
      in: password
    x509:
      type: X509
    symmetric:
      type: symmetricEncryption
    asymmetric:
      type: asymmetricEncryption
    headerKey:
      type: httpApiKey
      name: X-API-Key
      in: header
    queryKey:
      type: httpApiKey
      name: api_key
      in: query
    cookieKey:
      type: httpApiKey
      name: session
      in: cookie
    basic:
      type: http
      scheme: basic
    bearer:
      type: http
      scheme: bearer
      bearerFormat: JWT
    oauthImplicit:
      type: oauth2
      flows:
        implicit:
          authorizationUrl: https://auth.example.com/authorize
          availableScopes:
            events:read: Read events
            events:write: Publish events
      scopes:
        - events:read
    oauthPassword:
      type: oauth2
      flows:
        password:
          tokenUrl: https://auth.example.com/token
          availableScopes:
            events:read: Read events
      scopes: []
    oauth:
      type: oauth2
      flows:
        clientCredentials:
          tokenUrl: https://auth.example.com/token
          availableScopes:
            events:read: Read events
            events:write: Publish events
      scopes:
        - events:write
    oauthCode:
      type: oauth2
      flows:
        authorizationCode:
          authorizationUrl: https://auth.example.com/authorize
          tokenUrl: https://auth.example.com/token
          refreshUrl: https://auth.example.com/refresh
          availableScopes:
            events:read: Read events
      scopes:
        - events:read
    oauthSeveralFlows:
      type: oauth2
      flows:
        clientCredentials:
          tokenUrl: https://auth.example.com/token
          availableScopes:
            events:read: Read events
        authorizationCode:
          authorizationUrl: https://auth.example.com/authorize
          tokenUrl: https://auth.example.com/token
          availableScopes:
            events:read: Read events
            events:admin: Administer events
      scopes:
        - events:read
        - events:audit
    oidc:
      type: openIdConnect
      openIdConnectUrl: https://auth.example.com/.well-known/openid-configuration
      scopes:
        - openid
        - events:read
    plain:
      type: plain
    scram256:
      type: scramSha256
    scram512:
      type: scramSha512
    gssapi:
      type: gssapi
`})))()}var g;function _(){return(_=e((()=>{g=`asyncapi: 3.0.0
info:
  title: Sample AsyncAPI
  version: 1.0.0
servers:
  server0:
    host: broker-0.example.com:9092
    protocol: kafka
    description: Main Kafka broker
channels:
  testChannel:
    address: events.default
    messages:
      TestMessage:
        $ref: "#/components/messages/TestMessage"
    servers:
      - $ref: "#/servers/server0"
operations:
  sendOperation:
    action: send
    channel:
      $ref: "#/channels/testChannel"
    messages:
      - $ref: "#/components/messages/TestMessage"
    security:
      - $ref: "#/components/securitySchemes/oauth"
components:
  messages:
    TestMessage:
      name: TestMessage
      payload:
        type: object
        properties:
          id:
            type: string
        required:
          - id
  securitySchemes:
    userPassword:
      type: userPassword
    apiKeyUser:
      type: apiKey
      in: user
    apiKeyPassword:
      type: apiKey
      in: password
    x509:
      type: X509
    symmetric:
      type: symmetricEncryption
    asymmetric:
      type: asymmetricEncryption
    headerKey:
      type: httpApiKey
      name: X-API-Key
      in: header
    queryKey:
      type: httpApiKey
      name: api_key
      in: query
    cookieKey:
      type: httpApiKey
      name: session
      in: cookie
    basic:
      type: http
      scheme: basic
    bearer:
      type: http
      scheme: bearer
      bearerFormat: JWT
    oauthImplicit:
      type: oauth2
      flows:
        implicit:
          authorizationUrl: https://auth.example.com/authorize
          availableScopes:
            events:read: Read events
            events:write: Publish events
      scopes:
        - events:read
    oauthPassword:
      type: oauth2
      flows:
        password:
          tokenUrl: https://auth.example.com/token
          availableScopes:
            events:read: Read events
      scopes: []
    oauth:
      type: oauth2
      flows:
        clientCredentials:
          tokenUrl: https://auth.example.com/token
          availableScopes:
            events:read: Read events
            events:write: Publish events
      scopes:
        - events:write
    oauthCode:
      type: oauth2
      flows:
        authorizationCode:
          authorizationUrl: https://auth.example.com/authorize
          tokenUrl: https://auth.example.com/token
          refreshUrl: https://auth.example.com/refresh
          availableScopes:
            events:read: Read events
      scopes:
        - events:read
    oauthSeveralFlows:
      type: oauth2
      flows:
        clientCredentials:
          tokenUrl: https://auth.example.com/token
          availableScopes:
            events:read: Read events
        authorizationCode:
          authorizationUrl: https://auth.example.com/authorize
          tokenUrl: https://auth.example.com/token
          availableScopes:
            events:read: Read events
            events:admin: Administer events
      scopes:
        - events:read
        - events:audit
    oidc:
      type: openIdConnect
      openIdConnectUrl: https://auth.example.com/.well-known/openid-configuration
      scopes:
        - openid
        - events:read
    plain:
      type: plain
    scram256:
      type: scramSha256
    scram512:
      type: scramSha512
    gssapi:
      type: gssapi
`})))()}var Le;function Re(){return(Re=e((()=>{Le=`asyncapi: 3.0.0
info:
  title: Sample AsyncAPI
  version: 1.0.0
servers:
  server0:
    host: broker-0.example.com:9092
    protocol: kafka
    description: Main Kafka broker
channels:
  testChannel:
    address: events.default
    messages:
      TestMessage:
        $ref: "#/components/messages/TestMessage"
    servers:
      - $ref: "#/servers/server0"
operations:
  sendOperation:
    action: send
    channel:
      $ref: "#/channels/testChannel"
    messages:
      - $ref: "#/components/messages/TestMessage"
    security:
      - $ref: "#/components/securitySchemes/oauth"
      - $ref: "#/components/securitySchemes/headerKey"
components:
  messages:
    TestMessage:
      name: TestMessage
      payload:
        type: object
        properties:
          id:
            type: string
        required:
          - id
  securitySchemes:
    userPassword:
      type: userPassword
    apiKeyUser:
      type: apiKey
      in: user
    apiKeyPassword:
      type: apiKey
      in: password
    x509:
      type: X509
    symmetric:
      type: symmetricEncryption
    asymmetric:
      type: asymmetricEncryption
    headerKey:
      type: httpApiKey
      name: X-API-Key
      in: header
    queryKey:
      type: httpApiKey
      name: api_key
      in: query
    cookieKey:
      type: httpApiKey
      name: session
      in: cookie
    basic:
      type: http
      scheme: basic
    bearer:
      type: http
      scheme: bearer
      bearerFormat: JWT
    oauthImplicit:
      type: oauth2
      flows:
        implicit:
          authorizationUrl: https://auth.example.com/authorize
          availableScopes:
            events:read: Read events
            events:write: Publish events
      scopes:
        - events:read
    oauthPassword:
      type: oauth2
      flows:
        password:
          tokenUrl: https://auth.example.com/token
          availableScopes:
            events:read: Read events
      scopes: []
    oauth:
      type: oauth2
      flows:
        clientCredentials:
          tokenUrl: https://auth.example.com/token
          availableScopes:
            events:read: Read events
            events:write: Publish events
      scopes:
        - events:write
    oauthCode:
      type: oauth2
      flows:
        authorizationCode:
          authorizationUrl: https://auth.example.com/authorize
          tokenUrl: https://auth.example.com/token
          refreshUrl: https://auth.example.com/refresh
          availableScopes:
            events:read: Read events
      scopes:
        - events:read
    oauthSeveralFlows:
      type: oauth2
      flows:
        clientCredentials:
          tokenUrl: https://auth.example.com/token
          availableScopes:
            events:read: Read events
        authorizationCode:
          authorizationUrl: https://auth.example.com/authorize
          tokenUrl: https://auth.example.com/token
          availableScopes:
            events:read: Read events
            events:admin: Administer events
      scopes:
        - events:read
        - events:audit
    oidc:
      type: openIdConnect
      openIdConnectUrl: https://auth.example.com/.well-known/openid-configuration
      scopes:
        - openid
        - events:read
    plain:
      type: plain
    scram256:
      type: scramSha256
    scram512:
      type: scramSha512
    gssapi:
      type: gssapi
`})))()}var ze;function Be(){return(Be=e((()=>{ze=`asyncapi: 3.0.0
info:
  title: Sample AsyncAPI
  version: 1.0.0
servers:
  server0:
    host: broker-0.example.com:9092
    protocol: kafka
    description: Main Kafka broker
channels:
  testChannel:
    address: events.default
    messages:
      TestMessage:
        $ref: "#/components/messages/TestMessage"
    servers:
      - $ref: "#/servers/server0"
operations:
  sendOperation:
    action: send
    channel:
      $ref: "#/channels/testChannel"
    messages:
      - $ref: "#/components/messages/TestMessage"
    security:
      - $ref: "#/components/securitySchemes/bearer"
components:
  messages:
    TestMessage:
      name: TestMessage
      payload:
        type: object
        properties:
          id:
            type: string
        required:
          - id
  securitySchemes:
    userPassword:
      type: userPassword
    apiKeyUser:
      type: apiKey
      in: user
    apiKeyPassword:
      type: apiKey
      in: password
    x509:
      type: X509
    symmetric:
      type: symmetricEncryption
    asymmetric:
      type: asymmetricEncryption
    headerKey:
      type: httpApiKey
      name: X-API-Key
      in: header
    queryKey:
      type: httpApiKey
      name: api_key
      in: query
    cookieKey:
      type: httpApiKey
      name: session
      in: cookie
    basic:
      type: http
      scheme: basic
    bearer:
      type: http
      scheme: bearer
      bearerFormat: JWT
    oauthImplicit:
      type: oauth2
      flows:
        implicit:
          authorizationUrl: https://auth.example.com/authorize
          availableScopes:
            events:read: Read events
            events:write: Publish events
      scopes:
        - events:read
    oauthPassword:
      type: oauth2
      flows:
        password:
          tokenUrl: https://auth.example.com/token
          availableScopes:
            events:read: Read events
      scopes: []
    oauth:
      type: oauth2
      flows:
        clientCredentials:
          tokenUrl: https://auth.example.com/token
          availableScopes:
            events:read: Read events
            events:write: Publish events
      scopes:
        - events:write
    oauthCode:
      type: oauth2
      flows:
        authorizationCode:
          authorizationUrl: https://auth.example.com/authorize
          tokenUrl: https://auth.example.com/token
          refreshUrl: https://auth.example.com/refresh
          availableScopes:
            events:read: Read events
      scopes:
        - events:read
    oauthSeveralFlows:
      type: oauth2
      flows:
        clientCredentials:
          tokenUrl: https://auth.example.com/token
          availableScopes:
            events:read: Read events
        authorizationCode:
          authorizationUrl: https://auth.example.com/authorize
          tokenUrl: https://auth.example.com/token
          availableScopes:
            events:read: Read events
            events:admin: Administer events
      scopes:
        - events:read
        - events:audit
    oidc:
      type: openIdConnect
      openIdConnectUrl: https://auth.example.com/.well-known/openid-configuration
      scopes:
        - openid
        - events:read
    plain:
      type: plain
    scram256:
      type: scramSha256
    scram512:
      type: scramSha512
    gssapi:
      type: gssapi
`})))()}var Ve;function He(){return(He=e((()=>{Ve=`asyncapi: 3.0.0
info:
  title: Sample AsyncAPI
  version: 1.0.0
servers:
  server0:
    host: broker-0.example.com:9092
    protocol: kafka
    description: Main Kafka broker
channels:
  testChannel:
    address: events.default
    messages:
      TestMessage:
        $ref: "#/components/messages/TestMessage"
    servers:
      - $ref: "#/servers/server0"
operations:
  sendOperation:
    action: send
    channel:
      $ref: "#/channels/testChannel"
    messages:
      - $ref: "#/components/messages/TestMessage"
    security:
      - $ref: "#/components/securitySchemes/bearer"
components:
  messages:
    TestMessage:
      name: TestMessage
      payload:
        type: object
        properties:
          id:
            type: string
        required:
          - id
  securitySchemes:
    userPassword:
      type: userPassword
    apiKeyUser:
      type: apiKey
      in: user
    apiKeyPassword:
      type: apiKey
      in: password
    x509:
      type: X509
    symmetric:
      type: symmetricEncryption
    asymmetric:
      type: asymmetricEncryption
    headerKey:
      type: httpApiKey
      name: X-API-Key
      in: header
    queryKey:
      type: httpApiKey
      name: api_key
      in: query
    cookieKey:
      type: httpApiKey
      name: session
      in: cookie
    basic:
      type: http
      scheme: basic
    bearer:
      type: http
      scheme: bearer
      bearerFormat: JWT
      description: JWT issued by the identity provider.
    oauthImplicit:
      type: oauth2
      flows:
        implicit:
          authorizationUrl: https://auth.example.com/authorize
          availableScopes:
            events:read: Read events
            events:write: Publish events
      scopes:
        - events:read
    oauthPassword:
      type: oauth2
      flows:
        password:
          tokenUrl: https://auth.example.com/token
          availableScopes:
            events:read: Read events
      scopes: []
    oauth:
      type: oauth2
      flows:
        clientCredentials:
          tokenUrl: https://auth.example.com/token
          availableScopes:
            events:read: Read events
            events:write: Publish events
      scopes:
        - events:write
    oauthCode:
      type: oauth2
      flows:
        authorizationCode:
          authorizationUrl: https://auth.example.com/authorize
          tokenUrl: https://auth.example.com/token
          refreshUrl: https://auth.example.com/refresh
          availableScopes:
            events:read: Read events
      scopes:
        - events:read
    oauthSeveralFlows:
      type: oauth2
      flows:
        clientCredentials:
          tokenUrl: https://auth.example.com/token
          availableScopes:
            events:read: Read events
        authorizationCode:
          authorizationUrl: https://auth.example.com/authorize
          tokenUrl: https://auth.example.com/token
          availableScopes:
            events:read: Read events
            events:admin: Administer events
      scopes:
        - events:read
        - events:audit
    oidc:
      type: openIdConnect
      openIdConnectUrl: https://auth.example.com/.well-known/openid-configuration
      scopes:
        - openid
        - events:read
    plain:
      type: plain
    scram256:
      type: scramSha256
    scram512:
      type: scramSha512
    gssapi:
      type: gssapi
`})))()}var Ue;function We(){return(We=e((()=>{Ue=`asyncapi: 3.0.0
info:
  title: Sample AsyncAPI
  version: 1.0.0
servers:
  server0:
    host: broker-0.example.com:9092
    protocol: kafka
    description: Main Kafka broker
channels:
  testChannel:
    address: events.default
    messages:
      TestMessage:
        $ref: "#/components/messages/TestMessage"
    servers:
      - $ref: "#/servers/server0"
operations:
  sendOperation:
    action: send
    channel:
      $ref: "#/channels/testChannel"
    messages:
      - $ref: "#/components/messages/TestMessage"
    security:
      - $ref: "#/components/securitySchemes/bearer"
components:
  messages:
    TestMessage:
      name: TestMessage
      payload:
        type: object
        properties:
          id:
            type: string
        required:
          - id
  securitySchemes:
    userPassword:
      type: userPassword
    apiKeyUser:
      type: apiKey
      in: user
    apiKeyPassword:
      type: apiKey
      in: password
    x509:
      type: X509
    symmetric:
      type: symmetricEncryption
    asymmetric:
      type: asymmetricEncryption
    headerKey:
      type: httpApiKey
      name: X-API-Key
      in: header
    queryKey:
      type: httpApiKey
      name: api_key
      in: query
    cookieKey:
      type: httpApiKey
      name: session
      in: cookie
    basic:
      type: http
      scheme: basic
    bearer:
      type: http
      scheme: bearer
      bearerFormat: JWT
      description: JWT issued by the identity provider.
    oauthImplicit:
      type: oauth2
      flows:
        implicit:
          authorizationUrl: https://auth.example.com/authorize
          availableScopes:
            events:read: Read events
            events:write: Publish events
      scopes:
        - events:read
    oauthPassword:
      type: oauth2
      flows:
        password:
          tokenUrl: https://auth.example.com/token
          availableScopes:
            events:read: Read events
      scopes: []
    oauth:
      type: oauth2
      flows:
        clientCredentials:
          tokenUrl: https://auth.example.com/token
          availableScopes:
            events:read: Read events
            events:write: Publish events
      scopes:
        - events:write
    oauthCode:
      type: oauth2
      flows:
        authorizationCode:
          authorizationUrl: https://auth.example.com/authorize
          tokenUrl: https://auth.example.com/token
          refreshUrl: https://auth.example.com/refresh
          availableScopes:
            events:read: Read events
      scopes:
        - events:read
    oauthSeveralFlows:
      type: oauth2
      flows:
        clientCredentials:
          tokenUrl: https://auth.example.com/token
          availableScopes:
            events:read: Read events
        authorizationCode:
          authorizationUrl: https://auth.example.com/authorize
          tokenUrl: https://auth.example.com/token
          availableScopes:
            events:read: Read events
            events:admin: Administer events
      scopes:
        - events:read
        - events:audit
    oidc:
      type: openIdConnect
      openIdConnectUrl: https://auth.example.com/.well-known/openid-configuration
      scopes:
        - openid
        - events:read
    plain:
      type: plain
    scram256:
      type: scramSha256
    scram512:
      type: scramSha512
    gssapi:
      type: gssapi
`})))()}var Ge;function Ke(){return(Ke=e((()=>{Ge=`asyncapi: 3.0.0
info:
  title: Sample AsyncAPI
  version: 1.0.0
servers:
  server0:
    host: broker-0.example.com:9092
    protocol: kafka
    description: Main Kafka broker
channels:
  testChannel:
    address: events.default
    messages:
      TestMessage:
        $ref: "#/components/messages/TestMessage"
    servers:
      - $ref: "#/servers/server0"
operations:
  sendOperation:
    action: send
    channel:
      $ref: "#/channels/testChannel"
    messages:
      - $ref: "#/components/messages/TestMessage"
    security:
      - $ref: "#/components/securitySchemes/userPassword"
components:
  messages:
    TestMessage:
      name: TestMessage
      payload:
        type: object
        properties:
          id:
            type: string
        required:
          - id
  securitySchemes:
    userPassword:
      type: userPassword
    apiKeyUser:
      type: apiKey
      in: user
    apiKeyPassword:
      type: apiKey
      in: password
    x509:
      type: X509
    symmetric:
      type: symmetricEncryption
    asymmetric:
      type: asymmetricEncryption
    headerKey:
      type: httpApiKey
      name: X-API-Key
      in: header
    queryKey:
      type: httpApiKey
      name: api_key
      in: query
    cookieKey:
      type: httpApiKey
      name: session
      in: cookie
    basic:
      type: http
      scheme: basic
    bearer:
      type: http
      scheme: bearer
      bearerFormat: JWT
    oauthImplicit:
      type: oauth2
      flows:
        implicit:
          authorizationUrl: https://auth.example.com/authorize
          availableScopes:
            events:read: Read events
            events:write: Publish events
      scopes:
        - events:read
    oauthPassword:
      type: oauth2
      flows:
        password:
          tokenUrl: https://auth.example.com/token
          availableScopes:
            events:read: Read events
      scopes: []
    oauth:
      type: oauth2
      flows:
        clientCredentials:
          tokenUrl: https://auth.example.com/token
          availableScopes:
            events:read: Read events
            events:write: Publish events
      scopes:
        - events:write
    oauthCode:
      type: oauth2
      flows:
        authorizationCode:
          authorizationUrl: https://auth.example.com/authorize
          tokenUrl: https://auth.example.com/token
          refreshUrl: https://auth.example.com/refresh
          availableScopes:
            events:read: Read events
      scopes:
        - events:read
    oauthSeveralFlows:
      type: oauth2
      flows:
        clientCredentials:
          tokenUrl: https://auth.example.com/token
          availableScopes:
            events:read: Read events
        authorizationCode:
          authorizationUrl: https://auth.example.com/authorize
          tokenUrl: https://auth.example.com/token
          availableScopes:
            events:read: Read events
            events:admin: Administer events
      scopes:
        - events:read
        - events:audit
    oidc:
      type: openIdConnect
      openIdConnectUrl: https://auth.example.com/.well-known/openid-configuration
      scopes:
        - openid
        - events:read
    plain:
      type: plain
    scram256:
      type: scramSha256
    scram512:
      type: scramSha512
    gssapi:
      type: gssapi
`})))()}var qe;function Je(){return(Je=e((()=>{qe=`asyncapi: 3.0.0
info:
  title: Sample AsyncAPI
  version: 1.0.0
servers:
  server0:
    host: broker-0.example.com:9092
    protocol: kafka
    description: Main Kafka broker
channels:
  testChannel:
    address: events.default
    messages:
      TestMessage:
        $ref: "#/components/messages/TestMessage"
    servers:
      - $ref: "#/servers/server0"
operations:
  sendOperation:
    action: send
    channel:
      $ref: "#/channels/testChannel"
    messages:
      - $ref: "#/components/messages/TestMessage"
    security:
      - $ref: "#/components/securitySchemes/headerKey"
components:
  messages:
    TestMessage:
      name: TestMessage
      payload:
        type: object
        properties:
          id:
            type: string
        required:
          - id
  securitySchemes:
    userPassword:
      type: userPassword
    apiKeyUser:
      type: apiKey
      in: user
    apiKeyPassword:
      type: apiKey
      in: password
    x509:
      type: X509
    symmetric:
      type: symmetricEncryption
    asymmetric:
      type: asymmetricEncryption
    headerKey:
      type: httpApiKey
      name: X-API-Key
      in: header
    queryKey:
      type: httpApiKey
      name: api_key
      in: query
    cookieKey:
      type: httpApiKey
      name: session
      in: cookie
    basic:
      type: http
      scheme: basic
    bearer:
      type: http
      scheme: bearer
      bearerFormat: JWT
    oauthImplicit:
      type: oauth2
      flows:
        implicit:
          authorizationUrl: https://auth.example.com/authorize
          availableScopes:
            events:read: Read events
            events:write: Publish events
      scopes:
        - events:read
    oauthPassword:
      type: oauth2
      flows:
        password:
          tokenUrl: https://auth.example.com/token
          availableScopes:
            events:read: Read events
      scopes: []
    oauth:
      type: oauth2
      flows:
        clientCredentials:
          tokenUrl: https://auth.example.com/token
          availableScopes:
            events:read: Read events
            events:write: Publish events
      scopes:
        - events:write
    oauthCode:
      type: oauth2
      flows:
        authorizationCode:
          authorizationUrl: https://auth.example.com/authorize
          tokenUrl: https://auth.example.com/token
          refreshUrl: https://auth.example.com/refresh
          availableScopes:
            events:read: Read events
      scopes:
        - events:read
    oauthSeveralFlows:
      type: oauth2
      flows:
        clientCredentials:
          tokenUrl: https://auth.example.com/token
          availableScopes:
            events:read: Read events
        authorizationCode:
          authorizationUrl: https://auth.example.com/authorize
          tokenUrl: https://auth.example.com/token
          availableScopes:
            events:read: Read events
            events:admin: Administer events
      scopes:
        - events:read
        - events:audit
    oidc:
      type: openIdConnect
      openIdConnectUrl: https://auth.example.com/.well-known/openid-configuration
      scopes:
        - openid
        - events:read
    plain:
      type: plain
    scram256:
      type: scramSha256
    scram512:
      type: scramSha512
    gssapi:
      type: gssapi
`})))()}var Ye;function Xe(){return(Xe=e((()=>{Ye=`asyncapi: 3.0.0
info:
  title: Sample AsyncAPI
  version: 1.0.0
servers:
  server0:
    host: broker-0.example.com:9092
    protocol: kafka
    description: Main Kafka broker
channels:
  testChannel:
    address: events.default
    messages:
      TestMessage:
        $ref: "#/components/messages/TestMessage"
    servers:
      - $ref: "#/servers/server0"
operations:
  sendOperation:
    action: send
    channel:
      $ref: "#/channels/testChannel"
    messages:
      - $ref: "#/components/messages/TestMessage"
components:
  messages:
    TestMessage:
      name: TestMessage
      payload:
        type: object
        properties:
          id:
            type: string
        required:
          - id
  securitySchemes:
    userPassword:
      type: userPassword
    apiKeyUser:
      type: apiKey
      in: user
    apiKeyPassword:
      type: apiKey
      in: password
    x509:
      type: X509
    symmetric:
      type: symmetricEncryption
    asymmetric:
      type: asymmetricEncryption
    headerKey:
      type: httpApiKey
      name: X-API-Key
      in: header
    queryKey:
      type: httpApiKey
      name: api_key
      in: query
    cookieKey:
      type: httpApiKey
      name: session
      in: cookie
    basic:
      type: http
      scheme: basic
    bearer:
      type: http
      scheme: bearer
      bearerFormat: JWT
    oauthImplicit:
      type: oauth2
      flows:
        implicit:
          authorizationUrl: https://auth.example.com/authorize
          availableScopes:
            events:read: Read events
            events:write: Publish events
      scopes:
        - events:read
    oauthPassword:
      type: oauth2
      flows:
        password:
          tokenUrl: https://auth.example.com/token
          availableScopes:
            events:read: Read events
      scopes: []
    oauth:
      type: oauth2
      flows:
        clientCredentials:
          tokenUrl: https://auth.example.com/token
          availableScopes:
            events:read: Read events
            events:write: Publish events
      scopes:
        - events:write
    oauthCode:
      type: oauth2
      flows:
        authorizationCode:
          authorizationUrl: https://auth.example.com/authorize
          tokenUrl: https://auth.example.com/token
          refreshUrl: https://auth.example.com/refresh
          availableScopes:
            events:read: Read events
      scopes:
        - events:read
    oauthSeveralFlows:
      type: oauth2
      flows:
        clientCredentials:
          tokenUrl: https://auth.example.com/token
          availableScopes:
            events:read: Read events
        authorizationCode:
          authorizationUrl: https://auth.example.com/authorize
          tokenUrl: https://auth.example.com/token
          availableScopes:
            events:read: Read events
            events:admin: Administer events
      scopes:
        - events:read
        - events:audit
    oidc:
      type: openIdConnect
      openIdConnectUrl: https://auth.example.com/.well-known/openid-configuration
      scopes:
        - openid
        - events:read
    plain:
      type: plain
    scram256:
      type: scramSha256
    scram512:
      type: scramSha512
    gssapi:
      type: gssapi
`})))()}var Ze;function Qe(){return(Qe=e((()=>{Ze=`asyncapi: 3.0.0
info:
  title: Sample AsyncAPI
  version: 1.0.0
servers:
  server0:
    host: broker-0.example.com:9092
    protocol: kafka
    description: Main Kafka broker
    security:
      - $ref: "#/components/securitySchemes/userPassword"
channels:
  testChannel:
    address: events.default
    messages:
      TestMessage:
        $ref: "#/components/messages/TestMessage"
    servers:
      - $ref: "#/servers/server0"
operations:
  sendOperation:
    action: send
    channel:
      $ref: "#/channels/testChannel"
    messages:
      - $ref: "#/components/messages/TestMessage"
components:
  messages:
    TestMessage:
      name: TestMessage
      payload:
        type: object
        properties:
          id:
            type: string
        required:
          - id
  securitySchemes:
    userPassword:
      type: userPassword
    apiKeyUser:
      type: apiKey
      in: user
    apiKeyPassword:
      type: apiKey
      in: password
    x509:
      type: X509
    symmetric:
      type: symmetricEncryption
    asymmetric:
      type: asymmetricEncryption
    headerKey:
      type: httpApiKey
      name: X-API-Key
      in: header
    queryKey:
      type: httpApiKey
      name: api_key
      in: query
    cookieKey:
      type: httpApiKey
      name: session
      in: cookie
    basic:
      type: http
      scheme: basic
    bearer:
      type: http
      scheme: bearer
      bearerFormat: JWT
    oauthImplicit:
      type: oauth2
      flows:
        implicit:
          authorizationUrl: https://auth.example.com/authorize
          availableScopes:
            events:read: Read events
            events:write: Publish events
      scopes:
        - events:read
    oauthPassword:
      type: oauth2
      flows:
        password:
          tokenUrl: https://auth.example.com/token
          availableScopes:
            events:read: Read events
      scopes: []
    oauth:
      type: oauth2
      flows:
        clientCredentials:
          tokenUrl: https://auth.example.com/token
          availableScopes:
            events:read: Read events
            events:write: Publish events
      scopes:
        - events:write
    oauthCode:
      type: oauth2
      flows:
        authorizationCode:
          authorizationUrl: https://auth.example.com/authorize
          tokenUrl: https://auth.example.com/token
          refreshUrl: https://auth.example.com/refresh
          availableScopes:
            events:read: Read events
      scopes:
        - events:read
    oauthSeveralFlows:
      type: oauth2
      flows:
        clientCredentials:
          tokenUrl: https://auth.example.com/token
          availableScopes:
            events:read: Read events
        authorizationCode:
          authorizationUrl: https://auth.example.com/authorize
          tokenUrl: https://auth.example.com/token
          availableScopes:
            events:read: Read events
            events:admin: Administer events
      scopes:
        - events:read
        - events:audit
    oidc:
      type: openIdConnect
      openIdConnectUrl: https://auth.example.com/.well-known/openid-configuration
      scopes:
        - openid
        - events:read
    plain:
      type: plain
    scram256:
      type: scramSha256
    scram512:
      type: scramSha512
    gssapi:
      type: gssapi
`})))()}var $e;function et(){return(et=e((()=>{$e=`asyncapi: 3.0.0
info:
  title: Sample AsyncAPI
  version: 1.0.0
servers:
  server0:
    host: broker-0.example.com:9092
    protocol: kafka
    description: Main Kafka broker
    security:
      - $ref: "#/components/securitySchemes/userPassword"
channels:
  testChannel:
    address: events.default
    messages:
      TestMessage:
        $ref: "#/components/messages/TestMessage"
    servers:
      - $ref: "#/servers/server0"
operations:
  sendOperation:
    action: send
    channel:
      $ref: "#/channels/testChannel"
    messages:
      - $ref: "#/components/messages/TestMessage"
components:
  messages:
    TestMessage:
      name: TestMessage
      payload:
        type: object
        properties:
          id:
            type: string
        required:
          - id
  securitySchemes:
    userPassword:
      type: userPassword
    apiKeyUser:
      type: apiKey
      in: user
    apiKeyPassword:
      type: apiKey
      in: password
    x509:
      type: X509
    symmetric:
      type: symmetricEncryption
    asymmetric:
      type: asymmetricEncryption
    headerKey:
      type: httpApiKey
      name: X-API-Key
      in: header
    queryKey:
      type: httpApiKey
      name: api_key
      in: query
    cookieKey:
      type: httpApiKey
      name: session
      in: cookie
    basic:
      type: http
      scheme: basic
    bearer:
      type: http
      scheme: bearer
      bearerFormat: JWT
    oauthImplicit:
      type: oauth2
      flows:
        implicit:
          authorizationUrl: https://auth.example.com/authorize
          availableScopes:
            events:read: Read events
            events:write: Publish events
      scopes:
        - events:read
    oauthPassword:
      type: oauth2
      flows:
        password:
          tokenUrl: https://auth.example.com/token
          availableScopes:
            events:read: Read events
      scopes: []
    oauth:
      type: oauth2
      flows:
        clientCredentials:
          tokenUrl: https://auth.example.com/token
          availableScopes:
            events:read: Read events
            events:write: Publish events
      scopes:
        - events:write
    oauthCode:
      type: oauth2
      flows:
        authorizationCode:
          authorizationUrl: https://auth.example.com/authorize
          tokenUrl: https://auth.example.com/token
          refreshUrl: https://auth.example.com/refresh
          availableScopes:
            events:read: Read events
      scopes:
        - events:read
    oauthSeveralFlows:
      type: oauth2
      flows:
        clientCredentials:
          tokenUrl: https://auth.example.com/token
          availableScopes:
            events:read: Read events
        authorizationCode:
          authorizationUrl: https://auth.example.com/authorize
          tokenUrl: https://auth.example.com/token
          availableScopes:
            events:read: Read events
            events:admin: Administer events
      scopes:
        - events:read
        - events:audit
    oidc:
      type: openIdConnect
      openIdConnectUrl: https://auth.example.com/.well-known/openid-configuration
      scopes:
        - openid
        - events:read
    plain:
      type: plain
    scram256:
      type: scramSha256
    scram512:
      type: scramSha512
    gssapi:
      type: gssapi
`})))()}var tt;function nt(){return(nt=e((()=>{tt=`asyncapi: 3.0.0
info:
  title: Sample AsyncAPI
  version: 1.0.0
servers:
  server0:
    host: broker-0.example.com:9092
    protocol: kafka
    description: Main Kafka broker
    security:
      - $ref: "#/components/securitySchemes/userPassword"
      - $ref: "#/components/securitySchemes/x509"
channels:
  testChannel:
    address: events.default
    messages:
      TestMessage:
        $ref: "#/components/messages/TestMessage"
    servers:
      - $ref: "#/servers/server0"
operations:
  sendOperation:
    action: send
    channel:
      $ref: "#/channels/testChannel"
    messages:
      - $ref: "#/components/messages/TestMessage"
components:
  messages:
    TestMessage:
      name: TestMessage
      payload:
        type: object
        properties:
          id:
            type: string
        required:
          - id
  securitySchemes:
    userPassword:
      type: userPassword
    apiKeyUser:
      type: apiKey
      in: user
    apiKeyPassword:
      type: apiKey
      in: password
    x509:
      type: X509
    symmetric:
      type: symmetricEncryption
    asymmetric:
      type: asymmetricEncryption
    headerKey:
      type: httpApiKey
      name: X-API-Key
      in: header
    queryKey:
      type: httpApiKey
      name: api_key
      in: query
    cookieKey:
      type: httpApiKey
      name: session
      in: cookie
    basic:
      type: http
      scheme: basic
    bearer:
      type: http
      scheme: bearer
      bearerFormat: JWT
    oauthImplicit:
      type: oauth2
      flows:
        implicit:
          authorizationUrl: https://auth.example.com/authorize
          availableScopes:
            events:read: Read events
            events:write: Publish events
      scopes:
        - events:read
    oauthPassword:
      type: oauth2
      flows:
        password:
          tokenUrl: https://auth.example.com/token
          availableScopes:
            events:read: Read events
      scopes: []
    oauth:
      type: oauth2
      flows:
        clientCredentials:
          tokenUrl: https://auth.example.com/token
          availableScopes:
            events:read: Read events
            events:write: Publish events
      scopes:
        - events:write
    oauthCode:
      type: oauth2
      flows:
        authorizationCode:
          authorizationUrl: https://auth.example.com/authorize
          tokenUrl: https://auth.example.com/token
          refreshUrl: https://auth.example.com/refresh
          availableScopes:
            events:read: Read events
      scopes:
        - events:read
    oauthSeveralFlows:
      type: oauth2
      flows:
        clientCredentials:
          tokenUrl: https://auth.example.com/token
          availableScopes:
            events:read: Read events
        authorizationCode:
          authorizationUrl: https://auth.example.com/authorize
          tokenUrl: https://auth.example.com/token
          availableScopes:
            events:read: Read events
            events:admin: Administer events
      scopes:
        - events:read
        - events:audit
    oidc:
      type: openIdConnect
      openIdConnectUrl: https://auth.example.com/.well-known/openid-configuration
      scopes:
        - openid
        - events:read
    plain:
      type: plain
    scram256:
      type: scramSha256
    scram512:
      type: scramSha512
    gssapi:
      type: gssapi
`})))()}var rt;function it(){return(it=e((()=>{rt=`asyncapi: 3.0.0
info:
  title: Sample AsyncAPI
  version: 1.0.0
servers:
  server0:
    host: broker-0.example.com:9092
    protocol: kafka
    description: Main Kafka broker
    security:
      - $ref: "#/components/securitySchemes/scram256"
channels:
  testChannel:
    address: events.default
    messages:
      TestMessage:
        $ref: "#/components/messages/TestMessage"
    servers:
      - $ref: "#/servers/server0"
operations:
  sendOperation:
    action: send
    channel:
      $ref: "#/channels/testChannel"
    messages:
      - $ref: "#/components/messages/TestMessage"
components:
  messages:
    TestMessage:
      name: TestMessage
      payload:
        type: object
        properties:
          id:
            type: string
        required:
          - id
  securitySchemes:
    userPassword:
      type: userPassword
    apiKeyUser:
      type: apiKey
      in: user
    apiKeyPassword:
      type: apiKey
      in: password
    x509:
      type: X509
    symmetric:
      type: symmetricEncryption
    asymmetric:
      type: asymmetricEncryption
    headerKey:
      type: httpApiKey
      name: X-API-Key
      in: header
    queryKey:
      type: httpApiKey
      name: api_key
      in: query
    cookieKey:
      type: httpApiKey
      name: session
      in: cookie
    basic:
      type: http
      scheme: basic
    bearer:
      type: http
      scheme: bearer
      bearerFormat: JWT
    oauthImplicit:
      type: oauth2
      flows:
        implicit:
          authorizationUrl: https://auth.example.com/authorize
          availableScopes:
            events:read: Read events
            events:write: Publish events
      scopes:
        - events:read
    oauthPassword:
      type: oauth2
      flows:
        password:
          tokenUrl: https://auth.example.com/token
          availableScopes:
            events:read: Read events
      scopes: []
    oauth:
      type: oauth2
      flows:
        clientCredentials:
          tokenUrl: https://auth.example.com/token
          availableScopes:
            events:read: Read events
            events:write: Publish events
      scopes:
        - events:write
    oauthCode:
      type: oauth2
      flows:
        authorizationCode:
          authorizationUrl: https://auth.example.com/authorize
          tokenUrl: https://auth.example.com/token
          refreshUrl: https://auth.example.com/refresh
          availableScopes:
            events:read: Read events
      scopes:
        - events:read
    oauthSeveralFlows:
      type: oauth2
      flows:
        clientCredentials:
          tokenUrl: https://auth.example.com/token
          availableScopes:
            events:read: Read events
        authorizationCode:
          authorizationUrl: https://auth.example.com/authorize
          tokenUrl: https://auth.example.com/token
          availableScopes:
            events:read: Read events
            events:admin: Administer events
      scopes:
        - events:read
        - events:audit
    oidc:
      type: openIdConnect
      openIdConnectUrl: https://auth.example.com/.well-known/openid-configuration
      scopes:
        - openid
        - events:read
    plain:
      type: plain
    scram256:
      type: scramSha256
      description: SCRAM credentials from the vault.
    scram512:
      type: scramSha512
    gssapi:
      type: gssapi
`})))()}var at;function ot(){return(ot=e((()=>{at=`asyncapi: 3.0.0
info:
  title: Sample AsyncAPI
  version: 1.0.0
servers:
  server0:
    host: broker-0.example.com:9092
    protocol: kafka
    description: Main Kafka broker
    security:
      - $ref: "#/components/securitySchemes/scram256"
channels:
  testChannel:
    address: events.default
    messages:
      TestMessage:
        $ref: "#/components/messages/TestMessage"
    servers:
      - $ref: "#/servers/server0"
operations:
  sendOperation:
    action: send
    channel:
      $ref: "#/channels/testChannel"
    messages:
      - $ref: "#/components/messages/TestMessage"
components:
  messages:
    TestMessage:
      name: TestMessage
      payload:
        type: object
        properties:
          id:
            type: string
        required:
          - id
  securitySchemes:
    userPassword:
      type: userPassword
    apiKeyUser:
      type: apiKey
      in: user
    apiKeyPassword:
      type: apiKey
      in: password
    x509:
      type: X509
    symmetric:
      type: symmetricEncryption
    asymmetric:
      type: asymmetricEncryption
    headerKey:
      type: httpApiKey
      name: X-API-Key
      in: header
    queryKey:
      type: httpApiKey
      name: api_key
      in: query
    cookieKey:
      type: httpApiKey
      name: session
      in: cookie
    basic:
      type: http
      scheme: basic
    bearer:
      type: http
      scheme: bearer
      bearerFormat: JWT
    oauthImplicit:
      type: oauth2
      flows:
        implicit:
          authorizationUrl: https://auth.example.com/authorize
          availableScopes:
            events:read: Read events
            events:write: Publish events
      scopes:
        - events:read
    oauthPassword:
      type: oauth2
      flows:
        password:
          tokenUrl: https://auth.example.com/token
          availableScopes:
            events:read: Read events
      scopes: []
    oauth:
      type: oauth2
      flows:
        clientCredentials:
          tokenUrl: https://auth.example.com/token
          availableScopes:
            events:read: Read events
            events:write: Publish events
      scopes:
        - events:write
    oauthCode:
      type: oauth2
      flows:
        authorizationCode:
          authorizationUrl: https://auth.example.com/authorize
          tokenUrl: https://auth.example.com/token
          refreshUrl: https://auth.example.com/refresh
          availableScopes:
            events:read: Read events
      scopes:
        - events:read
    oauthSeveralFlows:
      type: oauth2
      flows:
        clientCredentials:
          tokenUrl: https://auth.example.com/token
          availableScopes:
            events:read: Read events
        authorizationCode:
          authorizationUrl: https://auth.example.com/authorize
          tokenUrl: https://auth.example.com/token
          availableScopes:
            events:read: Read events
            events:admin: Administer events
      scopes:
        - events:read
        - events:audit
    oidc:
      type: openIdConnect
      openIdConnectUrl: https://auth.example.com/.well-known/openid-configuration
      scopes:
        - openid
        - events:read
    plain:
      type: plain
    scram256:
      type: scramSha256
    scram512:
      type: scramSha512
    gssapi:
      type: gssapi
`})))()}var st;function ct(){return(ct=e((()=>{st=`asyncapi: 3.0.0
info:
  title: Sample AsyncAPI
  version: 1.0.0
servers:
  server0:
    host: broker-0.example.com:9092
    protocol: kafka
    description: Main Kafka broker
    security:
      - $ref: "#/components/securitySchemes/userPassword"
channels:
  testChannel:
    address: events.default
    messages:
      TestMessage:
        $ref: "#/components/messages/TestMessage"
    servers:
      - $ref: "#/servers/server0"
operations:
  sendOperation:
    action: send
    channel:
      $ref: "#/channels/testChannel"
    messages:
      - $ref: "#/components/messages/TestMessage"
components:
  messages:
    TestMessage:
      name: TestMessage
      payload:
        type: object
        properties:
          id:
            type: string
        required:
          - id
  securitySchemes:
    userPassword:
      type: userPassword
    apiKeyUser:
      type: apiKey
      in: user
    apiKeyPassword:
      type: apiKey
      in: password
    x509:
      type: X509
    symmetric:
      type: symmetricEncryption
    asymmetric:
      type: asymmetricEncryption
    headerKey:
      type: httpApiKey
      name: X-API-Key
      in: header
    queryKey:
      type: httpApiKey
      name: api_key
      in: query
    cookieKey:
      type: httpApiKey
      name: session
      in: cookie
    basic:
      type: http
      scheme: basic
    bearer:
      type: http
      scheme: bearer
      bearerFormat: JWT
    oauthImplicit:
      type: oauth2
      flows:
        implicit:
          authorizationUrl: https://auth.example.com/authorize
          availableScopes:
            events:read: Read events
            events:write: Publish events
      scopes:
        - events:read
    oauthPassword:
      type: oauth2
      flows:
        password:
          tokenUrl: https://auth.example.com/token
          availableScopes:
            events:read: Read events
      scopes: []
    oauth:
      type: oauth2
      flows:
        clientCredentials:
          tokenUrl: https://auth.example.com/token
          availableScopes:
            events:read: Read events
            events:write: Publish events
      scopes:
        - events:write
    oauthCode:
      type: oauth2
      flows:
        authorizationCode:
          authorizationUrl: https://auth.example.com/authorize
          tokenUrl: https://auth.example.com/token
          refreshUrl: https://auth.example.com/refresh
          availableScopes:
            events:read: Read events
      scopes:
        - events:read
    oauthSeveralFlows:
      type: oauth2
      flows:
        clientCredentials:
          tokenUrl: https://auth.example.com/token
          availableScopes:
            events:read: Read events
        authorizationCode:
          authorizationUrl: https://auth.example.com/authorize
          tokenUrl: https://auth.example.com/token
          availableScopes:
            events:read: Read events
            events:admin: Administer events
      scopes:
        - events:read
        - events:audit
    oidc:
      type: openIdConnect
      openIdConnectUrl: https://auth.example.com/.well-known/openid-configuration
      scopes:
        - openid
        - events:read
    plain:
      type: plain
    scram256:
      type: scramSha256
    scram512:
      type: scramSha512
    gssapi:
      type: gssapi
`})))()}var lt;function ut(){return(ut=e((()=>{lt=`asyncapi: 3.0.0
info:
  title: Sample AsyncAPI
  version: 1.0.0
servers:
  server0:
    host: broker-0.example.com:9092
    protocol: kafka
    description: Main Kafka broker
    security:
      - $ref: "#/components/securitySchemes/userPassword"
  server1:
    host: broker-1.example.com:9093
    protocol: kafka-secure
    security:
      - $ref: "#/components/securitySchemes/x509"
channels:
  testChannel:
    address: events.default
    messages:
      TestMessage:
        $ref: "#/components/messages/TestMessage"
    servers:
      - $ref: "#/servers/server0"
      - $ref: "#/servers/server1"
operations:
  sendOperation:
    action: send
    channel:
      $ref: "#/channels/testChannel"
    messages:
      - $ref: "#/components/messages/TestMessage"
components:
  messages:
    TestMessage:
      name: TestMessage
      payload:
        type: object
        properties:
          id:
            type: string
        required:
          - id
  securitySchemes:
    userPassword:
      type: userPassword
    apiKeyUser:
      type: apiKey
      in: user
    apiKeyPassword:
      type: apiKey
      in: password
    x509:
      type: X509
    symmetric:
      type: symmetricEncryption
    asymmetric:
      type: asymmetricEncryption
    headerKey:
      type: httpApiKey
      name: X-API-Key
      in: header
    queryKey:
      type: httpApiKey
      name: api_key
      in: query
    cookieKey:
      type: httpApiKey
      name: session
      in: cookie
    basic:
      type: http
      scheme: basic
    bearer:
      type: http
      scheme: bearer
      bearerFormat: JWT
    oauthImplicit:
      type: oauth2
      flows:
        implicit:
          authorizationUrl: https://auth.example.com/authorize
          availableScopes:
            events:read: Read events
            events:write: Publish events
      scopes:
        - events:read
    oauthPassword:
      type: oauth2
      flows:
        password:
          tokenUrl: https://auth.example.com/token
          availableScopes:
            events:read: Read events
      scopes: []
    oauth:
      type: oauth2
      flows:
        clientCredentials:
          tokenUrl: https://auth.example.com/token
          availableScopes:
            events:read: Read events
            events:write: Publish events
      scopes:
        - events:write
    oauthCode:
      type: oauth2
      flows:
        authorizationCode:
          authorizationUrl: https://auth.example.com/authorize
          tokenUrl: https://auth.example.com/token
          refreshUrl: https://auth.example.com/refresh
          availableScopes:
            events:read: Read events
      scopes:
        - events:read
    oauthSeveralFlows:
      type: oauth2
      flows:
        clientCredentials:
          tokenUrl: https://auth.example.com/token
          availableScopes:
            events:read: Read events
        authorizationCode:
          authorizationUrl: https://auth.example.com/authorize
          tokenUrl: https://auth.example.com/token
          availableScopes:
            events:read: Read events
            events:admin: Administer events
      scopes:
        - events:read
        - events:audit
    oidc:
      type: openIdConnect
      openIdConnectUrl: https://auth.example.com/.well-known/openid-configuration
      scopes:
        - openid
        - events:read
    plain:
      type: plain
    scram256:
      type: scramSha256
    scram512:
      type: scramSha512
    gssapi:
      type: gssapi
`})))()}var dt;function ft(){return(ft=e((()=>{dt=`asyncapi: 3.0.0
info:
  title: Sample AsyncAPI
  version: 1.0.0
servers:
  server0:
    host: broker-0.example.com:9092
    protocol: kafka
    description: Main Kafka broker
channels:
  testChannel:
    address: events.default
    messages:
      TestMessage:
        $ref: "#/components/messages/TestMessage"
    servers:
      - $ref: "#/servers/server0"
operations:
  sendOperation:
    action: send
    channel:
      $ref: "#/channels/testChannel"
    messages:
      - $ref: "#/components/messages/TestMessage"
    security:
      - $ref: "#/components/securitySchemes/oauth"
components:
  messages:
    TestMessage:
      name: TestMessage
      payload:
        type: object
        properties:
          id:
            type: string
        required:
          - id
  securitySchemes:
    userPassword:
      type: userPassword
    apiKeyUser:
      type: apiKey
      in: user
    apiKeyPassword:
      type: apiKey
      in: password
    x509:
      type: X509
    symmetric:
      type: symmetricEncryption
    asymmetric:
      type: asymmetricEncryption
    headerKey:
      type: httpApiKey
      name: X-API-Key
      in: header
    queryKey:
      type: httpApiKey
      name: api_key
      in: query
    cookieKey:
      type: httpApiKey
      name: session
      in: cookie
    basic:
      type: http
      scheme: basic
    bearer:
      type: http
      scheme: bearer
      bearerFormat: JWT
    oauthImplicit:
      type: oauth2
      flows:
        implicit:
          authorizationUrl: https://auth.example.com/authorize
          availableScopes:
            events:read: Read events
            events:write: Publish events
      scopes:
        - events:read
    oauthPassword:
      type: oauth2
      flows:
        password:
          tokenUrl: https://auth.example.com/token
          availableScopes:
            events:read: Read events
      scopes: []
    oauth:
      type: oauth2
      flows:
        clientCredentials:
          tokenUrl: https://auth.example.com/token
          availableScopes:
            events:read: Read events
            events:write: Publish events
      scopes:
        - events:write
    oauthCode:
      type: oauth2
      flows:
        authorizationCode:
          authorizationUrl: https://auth.example.com/authorize
          tokenUrl: https://auth.example.com/token
          refreshUrl: https://auth.example.com/refresh
          availableScopes:
            events:read: Read events
      scopes:
        - events:read
    oauthSeveralFlows:
      type: oauth2
      flows:
        clientCredentials:
          tokenUrl: https://auth.example.com/token
          availableScopes:
            events:read: Read events
        authorizationCode:
          authorizationUrl: https://auth.example.com/authorize
          tokenUrl: https://auth.example.com/token
          availableScopes:
            events:read: Read events
            events:admin: Administer events
      scopes:
        - events:read
        - events:audit
    oidc:
      type: openIdConnect
      openIdConnectUrl: https://auth.example.com/.well-known/openid-configuration
      scopes:
        - openid
        - events:read
    plain:
      type: plain
    scram256:
      type: scramSha256
    scram512:
      type: scramSha512
    gssapi:
      type: gssapi
`})))()}var pt;function mt(){return(mt=e((()=>{pt=`asyncapi: 3.0.0
info:
  title: Sample AsyncAPI
  version: 1.0.0
servers:
  server0:
    host: broker-0.example.com:9092
    protocol: kafka
    description: Main Kafka broker
channels:
  testChannel:
    address: events.default
    messages:
      TestMessage:
        $ref: "#/components/messages/TestMessage"
    servers:
      - $ref: "#/servers/server0"
operations:
  sendOperation:
    action: send
    channel:
      $ref: "#/channels/testChannel"
    messages:
      - $ref: "#/components/messages/TestMessage"
    security:
      - $ref: "#/components/securitySchemes/headerKey"
components:
  messages:
    TestMessage:
      name: TestMessage
      payload:
        type: object
        properties:
          id:
            type: string
        required:
          - id
  securitySchemes:
    userPassword:
      type: userPassword
    apiKeyUser:
      type: apiKey
      in: user
    apiKeyPassword:
      type: apiKey
      in: password
    x509:
      type: X509
    symmetric:
      type: symmetricEncryption
    asymmetric:
      type: asymmetricEncryption
    headerKey:
      type: httpApiKey
      name: X-Events-Key
      in: header
    queryKey:
      type: httpApiKey
      name: api_key
      in: query
    cookieKey:
      type: httpApiKey
      name: session
      in: cookie
    basic:
      type: http
      scheme: basic
    bearer:
      type: http
      scheme: bearer
      bearerFormat: JWT
    oauthImplicit:
      type: oauth2
      flows:
        implicit:
          authorizationUrl: https://auth.example.com/authorize
          availableScopes:
            events:read: Read events
            events:write: Publish events
      scopes:
        - events:read
    oauthPassword:
      type: oauth2
      flows:
        password:
          tokenUrl: https://auth.example.com/token
          availableScopes:
            events:read: Read events
      scopes: []
    oauth:
      type: oauth2
      flows:
        clientCredentials:
          tokenUrl: https://auth.example.com/token
          availableScopes:
            events:read: Read events
            events:write: Publish events
      scopes:
        - events:write
    oauthCode:
      type: oauth2
      flows:
        authorizationCode:
          authorizationUrl: https://auth.example.com/authorize
          tokenUrl: https://auth.example.com/token
          refreshUrl: https://auth.example.com/refresh
          availableScopes:
            events:read: Read events
      scopes:
        - events:read
    oauthSeveralFlows:
      type: oauth2
      flows:
        clientCredentials:
          tokenUrl: https://auth.example.com/token
          availableScopes:
            events:read: Read events
        authorizationCode:
          authorizationUrl: https://auth.example.com/authorize
          tokenUrl: https://auth.example.com/token
          availableScopes:
            events:read: Read events
            events:admin: Administer events
      scopes:
        - events:read
        - events:audit
    oidc:
      type: openIdConnect
      openIdConnectUrl: https://auth.example.com/.well-known/openid-configuration
      scopes:
        - openid
        - events:read
    plain:
      type: plain
    scram256:
      type: scramSha256
    scram512:
      type: scramSha512
    gssapi:
      type: gssapi
`})))()}var ht;function gt(){return(gt=e((()=>{ht=`asyncapi: 3.0.0
info:
  title: Sample AsyncAPI
  version: 1.0.0
servers:
  server0:
    host: broker-0.example.com:9092
    protocol: kafka
    description: Main Kafka broker
channels:
  testChannel:
    address: events.default
    messages:
      TestMessage:
        $ref: "#/components/messages/TestMessage"
    servers:
      - $ref: "#/servers/server0"
operations:
  sendOperation:
    action: send
    channel:
      $ref: "#/channels/testChannel"
    messages:
      - $ref: "#/components/messages/TestMessage"
    security:
      - $ref: "#/components/securitySchemes/apiKeyUser"
components:
  messages:
    TestMessage:
      name: TestMessage
      payload:
        type: object
        properties:
          id:
            type: string
        required:
          - id
  securitySchemes:
    userPassword:
      type: userPassword
    apiKeyUser:
      type: apiKey
      in: password
    apiKeyPassword:
      type: apiKey
      in: password
    x509:
      type: X509
    symmetric:
      type: symmetricEncryption
    asymmetric:
      type: asymmetricEncryption
    headerKey:
      type: httpApiKey
      name: X-API-Key
      in: header
    queryKey:
      type: httpApiKey
      name: api_key
      in: query
    cookieKey:
      type: httpApiKey
      name: session
      in: cookie
    basic:
      type: http
      scheme: basic
    bearer:
      type: http
      scheme: bearer
      bearerFormat: JWT
    oauthImplicit:
      type: oauth2
      flows:
        implicit:
          authorizationUrl: https://auth.example.com/authorize
          availableScopes:
            events:read: Read events
            events:write: Publish events
      scopes:
        - events:read
    oauthPassword:
      type: oauth2
      flows:
        password:
          tokenUrl: https://auth.example.com/token
          availableScopes:
            events:read: Read events
      scopes: []
    oauth:
      type: oauth2
      flows:
        clientCredentials:
          tokenUrl: https://auth.example.com/token
          availableScopes:
            events:read: Read events
            events:write: Publish events
      scopes:
        - events:write
    oauthCode:
      type: oauth2
      flows:
        authorizationCode:
          authorizationUrl: https://auth.example.com/authorize
          tokenUrl: https://auth.example.com/token
          refreshUrl: https://auth.example.com/refresh
          availableScopes:
            events:read: Read events
      scopes:
        - events:read
    oauthSeveralFlows:
      type: oauth2
      flows:
        clientCredentials:
          tokenUrl: https://auth.example.com/token
          availableScopes:
            events:read: Read events
        authorizationCode:
          authorizationUrl: https://auth.example.com/authorize
          tokenUrl: https://auth.example.com/token
          availableScopes:
            events:read: Read events
            events:admin: Administer events
      scopes:
        - events:read
        - events:audit
    oidc:
      type: openIdConnect
      openIdConnectUrl: https://auth.example.com/.well-known/openid-configuration
      scopes:
        - openid
        - events:read
    plain:
      type: plain
    scram256:
      type: scramSha256
    scram512:
      type: scramSha512
    gssapi:
      type: gssapi
`})))()}var _t;function vt(){return(vt=e((()=>{_t=`asyncapi: 3.0.0
info:
  title: Sample AsyncAPI
  version: 1.0.0
servers:
  server0:
    host: broker-0.example.com:9092
    protocol: kafka
    description: Main Kafka broker
channels:
  testChannel:
    address: events.default
    messages:
      TestMessage:
        $ref: "#/components/messages/TestMessage"
    servers:
      - $ref: "#/servers/server0"
operations:
  sendOperation:
    action: send
    channel:
      $ref: "#/channels/testChannel"
    messages:
      - $ref: "#/components/messages/TestMessage"
    security:
      - $ref: "#/components/securitySchemes/basic"
components:
  messages:
    TestMessage:
      name: TestMessage
      payload:
        type: object
        properties:
          id:
            type: string
        required:
          - id
  securitySchemes:
    userPassword:
      type: userPassword
    apiKeyUser:
      type: apiKey
      in: user
    apiKeyPassword:
      type: apiKey
      in: password
    x509:
      type: X509
    symmetric:
      type: symmetricEncryption
    asymmetric:
      type: asymmetricEncryption
    headerKey:
      type: httpApiKey
      name: X-API-Key
      in: header
    queryKey:
      type: httpApiKey
      name: api_key
      in: query
    cookieKey:
      type: httpApiKey
      name: session
      in: cookie
    basic:
      type: http
      scheme: digest
    bearer:
      type: http
      scheme: bearer
      bearerFormat: JWT
    oauthImplicit:
      type: oauth2
      flows:
        implicit:
          authorizationUrl: https://auth.example.com/authorize
          availableScopes:
            events:read: Read events
            events:write: Publish events
      scopes:
        - events:read
    oauthPassword:
      type: oauth2
      flows:
        password:
          tokenUrl: https://auth.example.com/token
          availableScopes:
            events:read: Read events
      scopes: []
    oauth:
      type: oauth2
      flows:
        clientCredentials:
          tokenUrl: https://auth.example.com/token
          availableScopes:
            events:read: Read events
            events:write: Publish events
      scopes:
        - events:write
    oauthCode:
      type: oauth2
      flows:
        authorizationCode:
          authorizationUrl: https://auth.example.com/authorize
          tokenUrl: https://auth.example.com/token
          refreshUrl: https://auth.example.com/refresh
          availableScopes:
            events:read: Read events
      scopes:
        - events:read
    oauthSeveralFlows:
      type: oauth2
      flows:
        clientCredentials:
          tokenUrl: https://auth.example.com/token
          availableScopes:
            events:read: Read events
        authorizationCode:
          authorizationUrl: https://auth.example.com/authorize
          tokenUrl: https://auth.example.com/token
          availableScopes:
            events:read: Read events
            events:admin: Administer events
      scopes:
        - events:read
        - events:audit
    oidc:
      type: openIdConnect
      openIdConnectUrl: https://auth.example.com/.well-known/openid-configuration
      scopes:
        - openid
        - events:read
    plain:
      type: plain
    scram256:
      type: scramSha256
    scram512:
      type: scramSha512
    gssapi:
      type: gssapi
`})))()}var yt;function bt(){return(bt=e((()=>{yt=`asyncapi: 3.0.0
info:
  title: Sample AsyncAPI
  version: 1.0.0
servers:
  server0:
    host: broker-0.example.com:9092
    protocol: kafka
    description: Main Kafka broker
channels:
  testChannel:
    address: events.default
    messages:
      TestMessage:
        $ref: "#/components/messages/TestMessage"
    servers:
      - $ref: "#/servers/server0"
operations:
  sendOperation:
    action: send
    channel:
      $ref: "#/channels/testChannel"
    messages:
      - $ref: "#/components/messages/TestMessage"
    security:
      - $ref: "#/components/securitySchemes/bearer"
components:
  messages:
    TestMessage:
      name: TestMessage
      payload:
        type: object
        properties:
          id:
            type: string
        required:
          - id
  securitySchemes:
    userPassword:
      type: userPassword
    apiKeyUser:
      type: apiKey
      in: user
    apiKeyPassword:
      type: apiKey
      in: password
    x509:
      type: X509
    symmetric:
      type: symmetricEncryption
    asymmetric:
      type: asymmetricEncryption
    headerKey:
      type: httpApiKey
      name: X-API-Key
      in: header
    queryKey:
      type: httpApiKey
      name: api_key
      in: query
    cookieKey:
      type: httpApiKey
      name: session
      in: cookie
    basic:
      type: http
      scheme: basic
    bearer:
      type: http
      scheme: bearer
      bearerFormat: JWT
    oauthImplicit:
      type: oauth2
      flows:
        implicit:
          authorizationUrl: https://auth.example.com/authorize
          availableScopes:
            events:read: Read events
            events:write: Publish events
      scopes:
        - events:read
    oauthPassword:
      type: oauth2
      flows:
        password:
          tokenUrl: https://auth.example.com/token
          availableScopes:
            events:read: Read events
      scopes: []
    oauth:
      type: oauth2
      flows:
        clientCredentials:
          tokenUrl: https://auth.example.com/token
          availableScopes:
            events:read: Read events
            events:write: Publish events
      scopes:
        - events:write
    oauthCode:
      type: oauth2
      flows:
        authorizationCode:
          authorizationUrl: https://auth.example.com/authorize
          tokenUrl: https://auth.example.com/token
          refreshUrl: https://auth.example.com/refresh
          availableScopes:
            events:read: Read events
      scopes:
        - events:read
    oauthSeveralFlows:
      type: oauth2
      flows:
        clientCredentials:
          tokenUrl: https://auth.example.com/token
          availableScopes:
            events:read: Read events
        authorizationCode:
          authorizationUrl: https://auth.example.com/authorize
          tokenUrl: https://auth.example.com/token
          availableScopes:
            events:read: Read events
            events:admin: Administer events
      scopes:
        - events:read
        - events:audit
    oidc:
      type: openIdConnect
      openIdConnectUrl: https://auth.example.com/.well-known/openid-configuration
      scopes:
        - openid
        - events:read
    plain:
      type: plain
    scram256:
      type: scramSha256
    scram512:
      type: scramSha512
    gssapi:
      type: gssapi
`})))()}var xt;function St(){return(St=e((()=>{xt=`asyncapi: 3.0.0
info:
  title: Sample AsyncAPI
  version: 1.0.0
servers:
  server0:
    host: broker-0.example.com:9092
    protocol: kafka
    description: Main Kafka broker
channels:
  testChannel:
    address: events.default
    messages:
      TestMessage:
        $ref: "#/components/messages/TestMessage"
    servers:
      - $ref: "#/servers/server0"
operations:
  sendOperation:
    action: send
    channel:
      $ref: "#/channels/testChannel"
    messages:
      - $ref: "#/components/messages/TestMessage"
    security:
      - $ref: "#/components/securitySchemes/bearer"
components:
  messages:
    TestMessage:
      name: TestMessage
      payload:
        type: object
        properties:
          id:
            type: string
        required:
          - id
  securitySchemes:
    userPassword:
      type: userPassword
    apiKeyUser:
      type: apiKey
      in: user
    apiKeyPassword:
      type: apiKey
      in: password
    x509:
      type: X509
    symmetric:
      type: symmetricEncryption
    asymmetric:
      type: asymmetricEncryption
    headerKey:
      type: httpApiKey
      name: X-API-Key
      in: header
    queryKey:
      type: httpApiKey
      name: api_key
      in: query
    cookieKey:
      type: httpApiKey
      name: session
      in: cookie
    basic:
      type: http
      scheme: basic
    bearer:
      type: http
      scheme: bearer
    oauthImplicit:
      type: oauth2
      flows:
        implicit:
          authorizationUrl: https://auth.example.com/authorize
          availableScopes:
            events:read: Read events
            events:write: Publish events
      scopes:
        - events:read
    oauthPassword:
      type: oauth2
      flows:
        password:
          tokenUrl: https://auth.example.com/token
          availableScopes:
            events:read: Read events
      scopes: []
    oauth:
      type: oauth2
      flows:
        clientCredentials:
          tokenUrl: https://auth.example.com/token
          availableScopes:
            events:read: Read events
            events:write: Publish events
      scopes:
        - events:write
    oauthCode:
      type: oauth2
      flows:
        authorizationCode:
          authorizationUrl: https://auth.example.com/authorize
          tokenUrl: https://auth.example.com/token
          refreshUrl: https://auth.example.com/refresh
          availableScopes:
            events:read: Read events
      scopes:
        - events:read
    oauthSeveralFlows:
      type: oauth2
      flows:
        clientCredentials:
          tokenUrl: https://auth.example.com/token
          availableScopes:
            events:read: Read events
        authorizationCode:
          authorizationUrl: https://auth.example.com/authorize
          tokenUrl: https://auth.example.com/token
          availableScopes:
            events:read: Read events
            events:admin: Administer events
      scopes:
        - events:read
        - events:audit
    oidc:
      type: openIdConnect
      openIdConnectUrl: https://auth.example.com/.well-known/openid-configuration
      scopes:
        - openid
        - events:read
    plain:
      type: plain
    scram256:
      type: scramSha256
    scram512:
      type: scramSha512
    gssapi:
      type: gssapi
`})))()}var Ct;function wt(){return(wt=e((()=>{Ct=`asyncapi: 3.0.0
info:
  title: Sample AsyncAPI
  version: 1.0.0
servers:
  server0:
    host: broker-0.example.com:9092
    protocol: kafka
    description: Main Kafka broker
channels:
  testChannel:
    address: events.default
    messages:
      TestMessage:
        $ref: "#/components/messages/TestMessage"
    servers:
      - $ref: "#/servers/server0"
operations:
  sendOperation:
    action: send
    channel:
      $ref: "#/channels/testChannel"
    messages:
      - $ref: "#/components/messages/TestMessage"
    security:
      - $ref: "#/components/securitySchemes/oidc"
components:
  messages:
    TestMessage:
      name: TestMessage
      payload:
        type: object
        properties:
          id:
            type: string
        required:
          - id
  securitySchemes:
    userPassword:
      type: userPassword
    apiKeyUser:
      type: apiKey
      in: user
    apiKeyPassword:
      type: apiKey
      in: password
    x509:
      type: X509
    symmetric:
      type: symmetricEncryption
    asymmetric:
      type: asymmetricEncryption
    headerKey:
      type: httpApiKey
      name: X-API-Key
      in: header
    queryKey:
      type: httpApiKey
      name: api_key
      in: query
    cookieKey:
      type: httpApiKey
      name: session
      in: cookie
    basic:
      type: http
      scheme: basic
    bearer:
      type: http
      scheme: bearer
      bearerFormat: JWT
    oauthImplicit:
      type: oauth2
      flows:
        implicit:
          authorizationUrl: https://auth.example.com/authorize
          availableScopes:
            events:read: Read events
            events:write: Publish events
      scopes:
        - events:read
    oauthPassword:
      type: oauth2
      flows:
        password:
          tokenUrl: https://auth.example.com/token
          availableScopes:
            events:read: Read events
      scopes: []
    oauth:
      type: oauth2
      flows:
        clientCredentials:
          tokenUrl: https://auth.example.com/token
          availableScopes:
            events:read: Read events
            events:write: Publish events
      scopes:
        - events:write
    oauthCode:
      type: oauth2
      flows:
        authorizationCode:
          authorizationUrl: https://auth.example.com/authorize
          tokenUrl: https://auth.example.com/token
          refreshUrl: https://auth.example.com/refresh
          availableScopes:
            events:read: Read events
      scopes:
        - events:read
    oauthSeveralFlows:
      type: oauth2
      flows:
        clientCredentials:
          tokenUrl: https://auth.example.com/token
          availableScopes:
            events:read: Read events
        authorizationCode:
          authorizationUrl: https://auth.example.com/authorize
          tokenUrl: https://auth.example.com/token
          availableScopes:
            events:read: Read events
            events:admin: Administer events
      scopes:
        - events:read
        - events:audit
    oidc:
      type: openIdConnect
      openIdConnectUrl: https://login.example.com/.well-known/openid-configuration
      scopes:
        - openid
        - events:read
    plain:
      type: plain
    scram256:
      type: scramSha256
    scram512:
      type: scramSha512
    gssapi:
      type: gssapi
`})))()}var Tt;function Et(){return(Et=e((()=>{Tt=`asyncapi: 3.0.0
info:
  title: Sample AsyncAPI
  version: 1.0.0
servers:
  server0:
    host: broker-0.example.com:9092
    protocol: kafka
    description: Main Kafka broker
channels:
  testChannel:
    address: events.default
    messages:
      TestMessage:
        $ref: "#/components/messages/TestMessage"
    servers:
      - $ref: "#/servers/server0"
operations:
  sendOperation:
    action: send
    channel:
      $ref: "#/channels/testChannel"
    messages:
      - $ref: "#/components/messages/TestMessage"
    security:
      - $ref: "#/components/securitySchemes/oauth"
components:
  messages:
    TestMessage:
      name: TestMessage
      payload:
        type: object
        properties:
          id:
            type: string
        required:
          - id
  securitySchemes:
    userPassword:
      type: userPassword
    apiKeyUser:
      type: apiKey
      in: user
    apiKeyPassword:
      type: apiKey
      in: password
    x509:
      type: X509
    symmetric:
      type: symmetricEncryption
    asymmetric:
      type: asymmetricEncryption
    headerKey:
      type: httpApiKey
      name: X-API-Key
      in: header
    queryKey:
      type: httpApiKey
      name: api_key
      in: query
    cookieKey:
      type: httpApiKey
      name: session
      in: cookie
    basic:
      type: http
      scheme: basic
    bearer:
      type: http
      scheme: bearer
      bearerFormat: JWT
    oauthImplicit:
      type: oauth2
      flows:
        implicit:
          authorizationUrl: https://auth.example.com/authorize
          availableScopes:
            events:read: Read events
            events:write: Publish events
      scopes:
        - events:read
    oauthPassword:
      type: oauth2
      flows:
        password:
          tokenUrl: https://auth.example.com/token
          availableScopes:
            events:read: Read events
      scopes: []
    oauth:
      type: oauth2
      flows:
        clientCredentials:
          tokenUrl: https://auth.example.com/token
          availableScopes:
            events:read: Read events
            events:write: Publish events
      scopes:
        - events:write
        - events:read
    oauthCode:
      type: oauth2
      flows:
        authorizationCode:
          authorizationUrl: https://auth.example.com/authorize
          tokenUrl: https://auth.example.com/token
          refreshUrl: https://auth.example.com/refresh
          availableScopes:
            events:read: Read events
      scopes:
        - events:read
    oauthSeveralFlows:
      type: oauth2
      flows:
        clientCredentials:
          tokenUrl: https://auth.example.com/token
          availableScopes:
            events:read: Read events
        authorizationCode:
          authorizationUrl: https://auth.example.com/authorize
          tokenUrl: https://auth.example.com/token
          availableScopes:
            events:read: Read events
            events:admin: Administer events
      scopes:
        - events:read
        - events:audit
    oidc:
      type: openIdConnect
      openIdConnectUrl: https://auth.example.com/.well-known/openid-configuration
      scopes:
        - openid
        - events:read
    plain:
      type: plain
    scram256:
      type: scramSha256
    scram512:
      type: scramSha512
    gssapi:
      type: gssapi
`})))()}var Dt;function v(){return(v=e((()=>{Dt=`asyncapi: 3.0.0
info:
  title: Sample AsyncAPI
  version: 1.0.0
servers:
  server0:
    host: broker-0.example.com:9092
    protocol: kafka
    description: Main Kafka broker
channels:
  testChannel:
    address: events.default
    messages:
      TestMessage:
        $ref: "#/components/messages/TestMessage"
    servers:
      - $ref: "#/servers/server0"
operations:
  sendOperation:
    action: send
    channel:
      $ref: "#/channels/testChannel"
    messages:
      - $ref: "#/components/messages/TestMessage"
    security:
      - $ref: "#/components/securitySchemes/oauth"
components:
  messages:
    TestMessage:
      name: TestMessage
      payload:
        type: object
        properties:
          id:
            type: string
        required:
          - id
  securitySchemes:
    userPassword:
      type: userPassword
    apiKeyUser:
      type: apiKey
      in: user
    apiKeyPassword:
      type: apiKey
      in: password
    x509:
      type: X509
    symmetric:
      type: symmetricEncryption
    asymmetric:
      type: asymmetricEncryption
    headerKey:
      type: httpApiKey
      name: X-API-Key
      in: header
    queryKey:
      type: httpApiKey
      name: api_key
      in: query
    cookieKey:
      type: httpApiKey
      name: session
      in: cookie
    basic:
      type: http
      scheme: basic
    bearer:
      type: http
      scheme: bearer
      bearerFormat: JWT
    oauthImplicit:
      type: oauth2
      flows:
        implicit:
          authorizationUrl: https://auth.example.com/authorize
          availableScopes:
            events:read: Read events
            events:write: Publish events
      scopes:
        - events:read
    oauthPassword:
      type: oauth2
      flows:
        password:
          tokenUrl: https://auth.example.com/token
          availableScopes:
            events:read: Read events
      scopes: []
    oauth:
      type: oauth2
      flows:
        clientCredentials:
          tokenUrl: https://auth.example.com/token
          availableScopes:
            events:read: Read events
            events:write: Publish events
      scopes: []
    oauthCode:
      type: oauth2
      flows:
        authorizationCode:
          authorizationUrl: https://auth.example.com/authorize
          tokenUrl: https://auth.example.com/token
          refreshUrl: https://auth.example.com/refresh
          availableScopes:
            events:read: Read events
      scopes:
        - events:read
    oauthSeveralFlows:
      type: oauth2
      flows:
        clientCredentials:
          tokenUrl: https://auth.example.com/token
          availableScopes:
            events:read: Read events
        authorizationCode:
          authorizationUrl: https://auth.example.com/authorize
          tokenUrl: https://auth.example.com/token
          availableScopes:
            events:read: Read events
            events:admin: Administer events
      scopes:
        - events:read
        - events:audit
    oidc:
      type: openIdConnect
      openIdConnectUrl: https://auth.example.com/.well-known/openid-configuration
      scopes:
        - openid
        - events:read
    plain:
      type: plain
    scram256:
      type: scramSha256
    scram512:
      type: scramSha512
    gssapi:
      type: gssapi
`})))()}var Ot;function kt(){return(kt=e((()=>{Ot=`asyncapi: 3.0.0
info:
  title: Sample AsyncAPI
  version: 1.0.0
servers:
  server0:
    host: broker-0.example.com:9092
    protocol: kafka
    description: Main Kafka broker
channels:
  testChannel:
    address: events.default
    messages:
      TestMessage:
        $ref: "#/components/messages/TestMessage"
    servers:
      - $ref: "#/servers/server0"
operations:
  sendOperation:
    action: send
    channel:
      $ref: "#/channels/testChannel"
    messages:
      - $ref: "#/components/messages/TestMessage"
    security:
      - $ref: "#/components/securitySchemes/oauth"
components:
  messages:
    TestMessage:
      name: TestMessage
      payload:
        type: object
        properties:
          id:
            type: string
        required:
          - id
  securitySchemes:
    userPassword:
      type: userPassword
    apiKeyUser:
      type: apiKey
      in: user
    apiKeyPassword:
      type: apiKey
      in: password
    x509:
      type: X509
    symmetric:
      type: symmetricEncryption
    asymmetric:
      type: asymmetricEncryption
    headerKey:
      type: httpApiKey
      name: X-API-Key
      in: header
    queryKey:
      type: httpApiKey
      name: api_key
      in: query
    cookieKey:
      type: httpApiKey
      name: session
      in: cookie
    basic:
      type: http
      scheme: basic
    bearer:
      type: http
      scheme: bearer
      bearerFormat: JWT
    oauthImplicit:
      type: oauth2
      flows:
        implicit:
          authorizationUrl: https://auth.example.com/authorize
          availableScopes:
            events:read: Read events
            events:write: Publish events
      scopes:
        - events:read
    oauthPassword:
      type: oauth2
      flows:
        password:
          tokenUrl: https://auth.example.com/token
          availableScopes:
            events:read: Read events
      scopes: []
    oauth:
      type: oauth2
      flows:
        clientCredentials:
          tokenUrl: https://auth.example.com/token
          availableScopes:
            events:read: Read events
            events:write: Publish events
        implicit:
          authorizationUrl: https://auth.example.com/authorize
          availableScopes:
            events:read: Read events
      scopes:
        - events:write
    oauthCode:
      type: oauth2
      flows:
        authorizationCode:
          authorizationUrl: https://auth.example.com/authorize
          tokenUrl: https://auth.example.com/token
          refreshUrl: https://auth.example.com/refresh
          availableScopes:
            events:read: Read events
      scopes:
        - events:read
    oauthSeveralFlows:
      type: oauth2
      flows:
        clientCredentials:
          tokenUrl: https://auth.example.com/token
          availableScopes:
            events:read: Read events
        authorizationCode:
          authorizationUrl: https://auth.example.com/authorize
          tokenUrl: https://auth.example.com/token
          availableScopes:
            events:read: Read events
            events:admin: Administer events
      scopes:
        - events:read
        - events:audit
    oidc:
      type: openIdConnect
      openIdConnectUrl: https://auth.example.com/.well-known/openid-configuration
      scopes:
        - openid
        - events:read
    plain:
      type: plain
    scram256:
      type: scramSha256
    scram512:
      type: scramSha512
    gssapi:
      type: gssapi
`})))()}var At;function jt(){return(jt=e((()=>{At=`asyncapi: 3.0.0
info:
  title: Sample AsyncAPI
  version: 1.0.0
servers:
  server0:
    host: broker-0.example.com:9092
    protocol: kafka
    description: Main Kafka broker
channels:
  testChannel:
    address: events.default
    messages:
      TestMessage:
        $ref: "#/components/messages/TestMessage"
    servers:
      - $ref: "#/servers/server0"
operations:
  sendOperation:
    action: send
    channel:
      $ref: "#/channels/testChannel"
    messages:
      - $ref: "#/components/messages/TestMessage"
    security:
      - $ref: "#/components/securitySchemes/oauth"
components:
  messages:
    TestMessage:
      name: TestMessage
      payload:
        type: object
        properties:
          id:
            type: string
        required:
          - id
  securitySchemes:
    userPassword:
      type: userPassword
    apiKeyUser:
      type: apiKey
      in: user
    apiKeyPassword:
      type: apiKey
      in: password
    x509:
      type: X509
    symmetric:
      type: symmetricEncryption
    asymmetric:
      type: asymmetricEncryption
    headerKey:
      type: httpApiKey
      name: X-API-Key
      in: header
    queryKey:
      type: httpApiKey
      name: api_key
      in: query
    cookieKey:
      type: httpApiKey
      name: session
      in: cookie
    basic:
      type: http
      scheme: basic
    bearer:
      type: http
      scheme: bearer
      bearerFormat: JWT
    oauthImplicit:
      type: oauth2
      flows:
        implicit:
          authorizationUrl: https://auth.example.com/authorize
          availableScopes:
            events:read: Read events
            events:write: Publish events
      scopes:
        - events:read
    oauthPassword:
      type: oauth2
      flows:
        password:
          tokenUrl: https://auth.example.com/token
          availableScopes:
            events:read: Read events
      scopes: []
    oauth:
      type: oauth2
      flows:
        clientCredentials:
          tokenUrl: https://auth.example.com/token
          availableScopes:
            events:read: Read events
            events:write: Publish events
      scopes:
        - events:write
    oauthCode:
      type: oauth2
      flows:
        authorizationCode:
          authorizationUrl: https://auth.example.com/authorize
          tokenUrl: https://auth.example.com/token
          refreshUrl: https://auth.example.com/refresh
          availableScopes:
            events:read: Read events
      scopes:
        - events:read
    oauthSeveralFlows:
      type: oauth2
      flows:
        clientCredentials:
          tokenUrl: https://auth.example.com/token
          availableScopes:
            events:read: Read events
        authorizationCode:
          authorizationUrl: https://auth.example.com/authorize
          tokenUrl: https://auth.example.com/token
          availableScopes:
            events:read: Read events
            events:admin: Administer events
      scopes:
        - events:read
        - events:audit
    oidc:
      type: openIdConnect
      openIdConnectUrl: https://auth.example.com/.well-known/openid-configuration
      scopes:
        - openid
        - events:read
    plain:
      type: plain
    scram256:
      type: scramSha256
    scram512:
      type: scramSha512
    gssapi:
      type: gssapi
`})))()}var Mt;function Nt(){return(Nt=e((()=>{Mt=`asyncapi: 3.0.0
info:
  title: Sample AsyncAPI
  version: 1.0.0
servers:
  server0:
    host: broker-0.example.com:9092
    protocol: kafka
    description: Main Kafka broker
channels:
  testChannel:
    address: events.default
    messages:
      TestMessage:
        $ref: "#/components/messages/TestMessage"
    servers:
      - $ref: "#/servers/server0"
operations:
  sendOperation:
    action: send
    channel:
      $ref: "#/channels/testChannel"
    messages:
      - $ref: "#/components/messages/TestMessage"
components:
  messages:
    TestMessage:
      name: TestMessage
      payload:
        type: object
        properties:
          id:
            type: string
        required:
          - id
  securitySchemes:
    userPassword:
      type: userPassword
    apiKeyUser:
      type: apiKey
      in: user
    apiKeyPassword:
      type: apiKey
      in: password
    x509:
      type: X509
    symmetric:
      type: symmetricEncryption
    asymmetric:
      type: asymmetricEncryption
    headerKey:
      type: httpApiKey
      name: X-API-Key
      in: header
    queryKey:
      type: httpApiKey
      name: api_key
      in: query
    cookieKey:
      type: httpApiKey
      name: session
      in: cookie
    basic:
      type: http
      scheme: basic
    bearer:
      type: http
      scheme: bearer
      bearerFormat: JWT
    oauthImplicit:
      type: oauth2
      flows:
        implicit:
          authorizationUrl: https://auth.example.com/authorize
          availableScopes:
            events:read: Read events
            events:write: Publish events
      scopes:
        - events:read
    oauthPassword:
      type: oauth2
      flows:
        password:
          tokenUrl: https://auth.example.com/token
          availableScopes:
            events:read: Read events
      scopes: []
    oauth:
      type: oauth2
      flows:
        clientCredentials:
          tokenUrl: https://auth.example.com/token
          availableScopes:
            events:read: Read events
            events:write: Publish events
      scopes:
        - events:write
    oauthCode:
      type: oauth2
      flows:
        authorizationCode:
          authorizationUrl: https://auth.example.com/authorize
          tokenUrl: https://auth.example.com/token
          refreshUrl: https://auth.example.com/refresh
          availableScopes:
            events:read: Read events
      scopes:
        - events:read
    oauthSeveralFlows:
      type: oauth2
      flows:
        clientCredentials:
          tokenUrl: https://auth.example.com/token
          availableScopes:
            events:read: Read events
        authorizationCode:
          authorizationUrl: https://auth.example.com/authorize
          tokenUrl: https://auth.example.com/token
          availableScopes:
            events:read: Read events
            events:admin: Administer events
      scopes:
        - events:read
        - events:audit
    oidc:
      type: openIdConnect
      openIdConnectUrl: https://auth.example.com/.well-known/openid-configuration
      scopes:
        - openid
        - events:read
    plain:
      type: plain
    scram256:
      type: scramSha256
    scram512:
      type: scramSha512
    gssapi:
      type: gssapi
`})))()}var Pt;function Ft(){return(Ft=e((()=>{Pt=`asyncapi: 3.0.0
info:
  title: Sample AsyncAPI
  version: 1.0.0
servers:
  server0:
    host: broker-0.example.com:9092
    protocol: kafka
    description: Main Kafka broker
channels:
  testChannel:
    address: events.default
    messages:
      TestMessage:
        $ref: "#/components/messages/TestMessage"
    servers:
      - $ref: "#/servers/server0"
operations:
  sendOperation:
    action: send
    channel:
      $ref: "#/channels/testChannel"
    messages:
      - $ref: "#/components/messages/TestMessage"
    security:
      - $ref: "#/components/securitySchemes/oauth"
components:
  messages:
    TestMessage:
      name: TestMessage
      payload:
        type: object
        properties:
          id:
            type: string
        required:
          - id
  securitySchemes:
    userPassword:
      type: userPassword
    apiKeyUser:
      type: apiKey
      in: user
    apiKeyPassword:
      type: apiKey
      in: password
    x509:
      type: X509
    symmetric:
      type: symmetricEncryption
    asymmetric:
      type: asymmetricEncryption
    headerKey:
      type: httpApiKey
      name: X-API-Key
      in: header
    queryKey:
      type: httpApiKey
      name: api_key
      in: query
    cookieKey:
      type: httpApiKey
      name: session
      in: cookie
    basic:
      type: http
      scheme: basic
    bearer:
      type: http
      scheme: bearer
      bearerFormat: JWT
    oauthImplicit:
      type: oauth2
      flows:
        implicit:
          authorizationUrl: https://auth.example.com/authorize
          availableScopes:
            events:read: Read events
            events:write: Publish events
      scopes:
        - events:read
    oauthPassword:
      type: oauth2
      flows:
        password:
          tokenUrl: https://auth.example.com/token
          availableScopes:
            events:read: Read events
      scopes: []
    oauth:
      type: oauth2
      flows:
        clientCredentials:
          tokenUrl: https://login.example.com/token
          availableScopes:
            events:read: Read events
            events:write: Publish events
      scopes:
        - events:write
    oauthCode:
      type: oauth2
      flows:
        authorizationCode:
          authorizationUrl: https://auth.example.com/authorize
          tokenUrl: https://auth.example.com/token
          refreshUrl: https://auth.example.com/refresh
          availableScopes:
            events:read: Read events
      scopes:
        - events:read
    oauthSeveralFlows:
      type: oauth2
      flows:
        clientCredentials:
          tokenUrl: https://auth.example.com/token
          availableScopes:
            events:read: Read events
        authorizationCode:
          authorizationUrl: https://auth.example.com/authorize
          tokenUrl: https://auth.example.com/token
          availableScopes:
            events:read: Read events
            events:admin: Administer events
      scopes:
        - events:read
        - events:audit
    oidc:
      type: openIdConnect
      openIdConnectUrl: https://auth.example.com/.well-known/openid-configuration
      scopes:
        - openid
        - events:read
    plain:
      type: plain
    scram256:
      type: scramSha256
    scram512:
      type: scramSha512
    gssapi:
      type: gssapi
`})))()}var It;function Lt(){return(Lt=e((()=>{It=`asyncapi: 3.0.0
info:
  title: Sample AsyncAPI
  version: 1.0.0
servers:
  server0:
    host: broker-0.example.com:9092
    protocol: kafka
    description: Main Kafka broker
channels:
  testChannel:
    address: events.default
    messages:
      TestMessage:
        $ref: "#/components/messages/TestMessage"
    servers:
      - $ref: "#/servers/server0"
operations:
  sendOperation:
    action: send
    channel:
      $ref: "#/channels/testChannel"
    messages:
      - $ref: "#/components/messages/TestMessage"
    security:
      - $ref: "#/components/securitySchemes/oauth"
components:
  messages:
    TestMessage:
      name: TestMessage
      payload:
        type: object
        properties:
          id:
            type: string
        required:
          - id
  securitySchemes:
    userPassword:
      type: userPassword
    apiKeyUser:
      type: apiKey
      in: user
    apiKeyPassword:
      type: apiKey
      in: password
    x509:
      type: X509
    symmetric:
      type: symmetricEncryption
    asymmetric:
      type: asymmetricEncryption
    headerKey:
      type: httpApiKey
      name: X-API-Key
      in: header
    queryKey:
      type: httpApiKey
      name: api_key
      in: query
    cookieKey:
      type: httpApiKey
      name: session
      in: cookie
    basic:
      type: http
      scheme: basic
    bearer:
      type: http
      scheme: bearer
      bearerFormat: JWT
    oauthImplicit:
      type: oauth2
      flows:
        implicit:
          authorizationUrl: https://auth.example.com/authorize
          availableScopes:
            events:read: Read events
            events:write: Publish events
      scopes:
        - events:read
    oauthPassword:
      type: oauth2
      flows:
        password:
          tokenUrl: https://auth.example.com/token
          availableScopes:
            events:read: Read events
      scopes: []
    oauth:
      type: oauth2
      flows:
        clientCredentials:
          tokenUrl: https://auth.example.com/token
          availableScopes:
            events:read: Read events
            events:write: Publish events
          refreshUrl: https://auth.example.com/refresh
      scopes:
        - events:write
    oauthCode:
      type: oauth2
      flows:
        authorizationCode:
          authorizationUrl: https://auth.example.com/authorize
          tokenUrl: https://auth.example.com/token
          refreshUrl: https://auth.example.com/refresh
          availableScopes:
            events:read: Read events
      scopes:
        - events:read
    oauthSeveralFlows:
      type: oauth2
      flows:
        clientCredentials:
          tokenUrl: https://auth.example.com/token
          availableScopes:
            events:read: Read events
        authorizationCode:
          authorizationUrl: https://auth.example.com/authorize
          tokenUrl: https://auth.example.com/token
          availableScopes:
            events:read: Read events
            events:admin: Administer events
      scopes:
        - events:read
        - events:audit
    oidc:
      type: openIdConnect
      openIdConnectUrl: https://auth.example.com/.well-known/openid-configuration
      scopes:
        - openid
        - events:read
    plain:
      type: plain
    scram256:
      type: scramSha256
    scram512:
      type: scramSha512
    gssapi:
      type: gssapi
`})))()}var Rt;function zt(){return(zt=e((()=>{Rt=`asyncapi: 3.0.0
info:
  title: Sample AsyncAPI
  version: 1.0.0
servers:
  server0:
    host: broker-0.example.com:9092
    protocol: kafka
    description: Main Kafka broker
channels:
  testChannel:
    address: events.default
    messages:
      TestMessage:
        $ref: "#/components/messages/TestMessage"
    servers:
      - $ref: "#/servers/server0"
operations:
  sendOperation:
    action: send
    channel:
      $ref: "#/channels/testChannel"
    messages:
      - $ref: "#/components/messages/TestMessage"
    security:
      - $ref: "#/components/securitySchemes/oauth"
components:
  messages:
    TestMessage:
      name: TestMessage
      payload:
        type: object
        properties:
          id:
            type: string
        required:
          - id
  securitySchemes:
    userPassword:
      type: userPassword
    apiKeyUser:
      type: apiKey
      in: user
    apiKeyPassword:
      type: apiKey
      in: password
    x509:
      type: X509
    symmetric:
      type: symmetricEncryption
    asymmetric:
      type: asymmetricEncryption
    headerKey:
      type: httpApiKey
      name: X-API-Key
      in: header
    queryKey:
      type: httpApiKey
      name: api_key
      in: query
    cookieKey:
      type: httpApiKey
      name: session
      in: cookie
    basic:
      type: http
      scheme: basic
    bearer:
      type: http
      scheme: bearer
      bearerFormat: JWT
    oauthImplicit:
      type: oauth2
      flows:
        implicit:
          authorizationUrl: https://auth.example.com/authorize
          availableScopes:
            events:read: Read events
            events:write: Publish events
      scopes:
        - events:read
    oauthPassword:
      type: oauth2
      flows:
        password:
          tokenUrl: https://auth.example.com/token
          availableScopes:
            events:read: Read events
      scopes: []
    oauth:
      type: oauth2
      flows:
        clientCredentials:
          tokenUrl: https://auth.example.com/token
          availableScopes:
            events:read: Read events
            events:write: Publish events
      scopes:
        - events:write
    oauthCode:
      type: oauth2
      flows:
        authorizationCode:
          authorizationUrl: https://auth.example.com/authorize
          tokenUrl: https://auth.example.com/token
          refreshUrl: https://auth.example.com/refresh
          availableScopes:
            events:read: Read events
      scopes:
        - events:read
    oauthSeveralFlows:
      type: oauth2
      flows:
        clientCredentials:
          tokenUrl: https://auth.example.com/token
          availableScopes:
            events:read: Read events
        authorizationCode:
          authorizationUrl: https://auth.example.com/authorize
          tokenUrl: https://auth.example.com/token
          availableScopes:
            events:read: Read events
            events:admin: Administer events
      scopes:
        - events:read
        - events:audit
    oidc:
      type: openIdConnect
      openIdConnectUrl: https://auth.example.com/.well-known/openid-configuration
      scopes:
        - openid
        - events:read
    plain:
      type: plain
    scram256:
      type: scramSha256
    scram512:
      type: scramSha512
    gssapi:
      type: gssapi
`})))()}var Bt;function Vt(){return(Vt=e((()=>{Bt=`asyncapi: 3.0.0
info:
  title: Sample AsyncAPI
  version: 1.0.0
servers:
  server0:
    host: broker-0.example.com:9092
    protocol: kafka
    description: Main Kafka broker
channels:
  testChannel:
    address: events.default
    messages:
      TestMessage:
        $ref: "#/components/messages/TestMessage"
    servers:
      - $ref: "#/servers/server0"
operations:
  sendOperation:
    action: send
    channel:
      $ref: "#/channels/testChannel"
    messages:
      - $ref: "#/components/messages/TestMessage"
    security:
      - $ref: "#/components/securitySchemes/oauth"
components:
  messages:
    TestMessage:
      name: TestMessage
      payload:
        type: object
        properties:
          id:
            type: string
        required:
          - id
  securitySchemes:
    userPassword:
      type: userPassword
    apiKeyUser:
      type: apiKey
      in: user
    apiKeyPassword:
      type: apiKey
      in: password
    x509:
      type: X509
    symmetric:
      type: symmetricEncryption
    asymmetric:
      type: asymmetricEncryption
    headerKey:
      type: httpApiKey
      name: X-API-Key
      in: header
    queryKey:
      type: httpApiKey
      name: api_key
      in: query
    cookieKey:
      type: httpApiKey
      name: session
      in: cookie
    basic:
      type: http
      scheme: basic
    bearer:
      type: http
      scheme: bearer
      bearerFormat: JWT
    oauthImplicit:
      type: oauth2
      flows:
        implicit:
          authorizationUrl: https://auth.example.com/authorize
          availableScopes:
            events:read: Read events
            events:write: Publish events
      scopes:
        - events:read
    oauthPassword:
      type: oauth2
      flows:
        password:
          tokenUrl: https://auth.example.com/token
          availableScopes:
            events:read: Read events
      scopes: []
    oauth:
      type: oauth2
      flows:
        clientCredentials:
          tokenUrl: https://auth.example.com/token
          availableScopes:
            events:read: Read events
            events:write: Publish events
            events:admin: Administer events
      scopes:
        - events:write
    oauthCode:
      type: oauth2
      flows:
        authorizationCode:
          authorizationUrl: https://auth.example.com/authorize
          tokenUrl: https://auth.example.com/token
          refreshUrl: https://auth.example.com/refresh
          availableScopes:
            events:read: Read events
      scopes:
        - events:read
    oauthSeveralFlows:
      type: oauth2
      flows:
        clientCredentials:
          tokenUrl: https://auth.example.com/token
          availableScopes:
            events:read: Read events
        authorizationCode:
          authorizationUrl: https://auth.example.com/authorize
          tokenUrl: https://auth.example.com/token
          availableScopes:
            events:read: Read events
            events:admin: Administer events
      scopes:
        - events:read
        - events:audit
    oidc:
      type: openIdConnect
      openIdConnectUrl: https://auth.example.com/.well-known/openid-configuration
      scopes:
        - openid
        - events:read
    plain:
      type: plain
    scram256:
      type: scramSha256
    scram512:
      type: scramSha512
    gssapi:
      type: gssapi
`})))()}var Ht;function Ut(){return(Ut=e((()=>{Ht=`asyncapi: 3.0.0
info:
  title: Sample AsyncAPI
  version: 1.0.0
servers:
  server0:
    host: broker-0.example.com:9092
    protocol: kafka
    description: Main Kafka broker
channels:
  testChannel:
    address: events.default
    messages:
      TestMessage:
        $ref: "#/components/messages/TestMessage"
    servers:
      - $ref: "#/servers/server0"
operations:
  sendOperation:
    action: send
    channel:
      $ref: "#/channels/testChannel"
    messages:
      - $ref: "#/components/messages/TestMessage"
    security:
      - $ref: "#/components/securitySchemes/oauth"
components:
  messages:
    TestMessage:
      name: TestMessage
      payload:
        type: object
        properties:
          id:
            type: string
        required:
          - id
  securitySchemes:
    userPassword:
      type: userPassword
    apiKeyUser:
      type: apiKey
      in: user
    apiKeyPassword:
      type: apiKey
      in: password
    x509:
      type: X509
    symmetric:
      type: symmetricEncryption
    asymmetric:
      type: asymmetricEncryption
    headerKey:
      type: httpApiKey
      name: X-API-Key
      in: header
    queryKey:
      type: httpApiKey
      name: api_key
      in: query
    cookieKey:
      type: httpApiKey
      name: session
      in: cookie
    basic:
      type: http
      scheme: basic
    bearer:
      type: http
      scheme: bearer
      bearerFormat: JWT
    oauthImplicit:
      type: oauth2
      flows:
        implicit:
          authorizationUrl: https://auth.example.com/authorize
          availableScopes:
            events:read: Read events
            events:write: Publish events
      scopes:
        - events:read
    oauthPassword:
      type: oauth2
      flows:
        password:
          tokenUrl: https://auth.example.com/token
          availableScopes:
            events:read: Read events
      scopes: []
    oauth:
      type: oauth2
      flows:
        clientCredentials:
          tokenUrl: https://auth.example.com/token
          availableScopes:
            events:read: Read events
            events:write: Publish events
      scopes:
        - events:write
    oauthCode:
      type: oauth2
      flows:
        authorizationCode:
          authorizationUrl: https://auth.example.com/authorize
          tokenUrl: https://auth.example.com/token
          refreshUrl: https://auth.example.com/refresh
          availableScopes:
            events:read: Read events
      scopes:
        - events:read
    oauthSeveralFlows:
      type: oauth2
      flows:
        clientCredentials:
          tokenUrl: https://auth.example.com/token
          availableScopes:
            events:read: Read events
        authorizationCode:
          authorizationUrl: https://auth.example.com/authorize
          tokenUrl: https://auth.example.com/token
          availableScopes:
            events:read: Read events
            events:admin: Administer events
      scopes:
        - events:read
        - events:audit
    oidc:
      type: openIdConnect
      openIdConnectUrl: https://auth.example.com/.well-known/openid-configuration
      scopes:
        - openid
        - events:read
    plain:
      type: plain
    scram256:
      type: scramSha256
    scram512:
      type: scramSha512
    gssapi:
      type: gssapi
`})))()}var Wt;function Gt(){return(Gt=e((()=>{Wt=`asyncapi: 3.0.0
info:
  title: Sample AsyncAPI
  version: 1.0.0
servers:
  server0:
    host: broker-0.example.com:9092
    protocol: kafka
    description: Main Kafka broker
channels:
  testChannel:
    address: events.default
    messages:
      TestMessage:
        $ref: "#/components/messages/TestMessage"
    servers:
      - $ref: "#/servers/server0"
operations:
  sendOperation:
    action: send
    channel:
      $ref: "#/channels/testChannel"
    messages:
      - $ref: "#/components/messages/TestMessage"
    security:
      - $ref: "#/components/securitySchemes/oauth"
components:
  messages:
    TestMessage:
      name: TestMessage
      payload:
        type: object
        properties:
          id:
            type: string
        required:
          - id
  securitySchemes:
    userPassword:
      type: userPassword
    apiKeyUser:
      type: apiKey
      in: user
    apiKeyPassword:
      type: apiKey
      in: password
    x509:
      type: X509
    symmetric:
      type: symmetricEncryption
    asymmetric:
      type: asymmetricEncryption
    headerKey:
      type: httpApiKey
      name: X-API-Key
      in: header
    queryKey:
      type: httpApiKey
      name: api_key
      in: query
    cookieKey:
      type: httpApiKey
      name: session
      in: cookie
    basic:
      type: http
      scheme: basic
    bearer:
      type: http
      scheme: bearer
      bearerFormat: JWT
    oauthImplicit:
      type: oauth2
      flows:
        implicit:
          authorizationUrl: https://auth.example.com/authorize
          availableScopes:
            events:read: Read events
            events:write: Publish events
      scopes:
        - events:read
    oauthPassword:
      type: oauth2
      flows:
        password:
          tokenUrl: https://auth.example.com/token
          availableScopes:
            events:read: Read events
      scopes: []
    oauth:
      type: oauth2
      flows:
        clientCredentials:
          tokenUrl: https://auth.example.com/token
          availableScopes:
            events:read: Read all events
            events:write: Publish events
      scopes:
        - events:write
    oauthCode:
      type: oauth2
      flows:
        authorizationCode:
          authorizationUrl: https://auth.example.com/authorize
          tokenUrl: https://auth.example.com/token
          refreshUrl: https://auth.example.com/refresh
          availableScopes:
            events:read: Read events
      scopes:
        - events:read
    oauthSeveralFlows:
      type: oauth2
      flows:
        clientCredentials:
          tokenUrl: https://auth.example.com/token
          availableScopes:
            events:read: Read events
        authorizationCode:
          authorizationUrl: https://auth.example.com/authorize
          tokenUrl: https://auth.example.com/token
          availableScopes:
            events:read: Read events
            events:admin: Administer events
      scopes:
        - events:read
        - events:audit
    oidc:
      type: openIdConnect
      openIdConnectUrl: https://auth.example.com/.well-known/openid-configuration
      scopes:
        - openid
        - events:read
    plain:
      type: plain
    scram256:
      type: scramSha256
    scram512:
      type: scramSha512
    gssapi:
      type: gssapi
`})))()}var Kt;function qt(){return(qt=e((()=>{Kt=`asyncapi: 3.0.0
info:
  title: Sample AsyncAPI
  version: 1.0.0
servers:
  server0:
    host: broker-0.example.com:9092
    protocol: kafka
    description: Main Kafka broker
channels:
  testChannel:
    address: events.default
    messages:
      TestMessage:
        $ref: "#/components/messages/TestMessage"
    servers:
      - $ref: "#/servers/server0"
operations:
  sendOperation:
    action: send
    channel:
      $ref: "#/channels/testChannel"
    messages:
      - $ref: "#/components/messages/TestMessage"
    security:
      - $ref: "#/components/securitySchemes/oauth"
      - $ref: "#/components/securitySchemes/headerKey"
components:
  messages:
    TestMessage:
      name: TestMessage
      payload:
        type: object
        properties:
          id:
            type: string
        required:
          - id
  securitySchemes:
    userPassword:
      type: userPassword
    apiKeyUser:
      type: apiKey
      in: user
    apiKeyPassword:
      type: apiKey
      in: password
    x509:
      type: X509
    symmetric:
      type: symmetricEncryption
    asymmetric:
      type: asymmetricEncryption
    headerKey:
      type: httpApiKey
      name: X-API-Key
      in: header
    queryKey:
      type: httpApiKey
      name: api_key
      in: query
    cookieKey:
      type: httpApiKey
      name: session
      in: cookie
    basic:
      type: http
      scheme: basic
    bearer:
      type: http
      scheme: bearer
      bearerFormat: JWT
    oauthImplicit:
      type: oauth2
      flows:
        implicit:
          authorizationUrl: https://auth.example.com/authorize
          availableScopes:
            events:read: Read events
            events:write: Publish events
      scopes:
        - events:read
    oauthPassword:
      type: oauth2
      flows:
        password:
          tokenUrl: https://auth.example.com/token
          availableScopes:
            events:read: Read events
      scopes: []
    oauth:
      type: oauth2
      flows:
        clientCredentials:
          tokenUrl: https://auth.example.com/token
          availableScopes:
            events:read: Read events
            events:write: Publish events
      scopes:
        - events:write
    oauthCode:
      type: oauth2
      flows:
        authorizationCode:
          authorizationUrl: https://auth.example.com/authorize
          tokenUrl: https://auth.example.com/token
          refreshUrl: https://auth.example.com/refresh
          availableScopes:
            events:read: Read events
      scopes:
        - events:read
    oauthSeveralFlows:
      type: oauth2
      flows:
        clientCredentials:
          tokenUrl: https://auth.example.com/token
          availableScopes:
            events:read: Read events
        authorizationCode:
          authorizationUrl: https://auth.example.com/authorize
          tokenUrl: https://auth.example.com/token
          availableScopes:
            events:read: Read events
            events:admin: Administer events
      scopes:
        - events:read
        - events:audit
    oidc:
      type: openIdConnect
      openIdConnectUrl: https://auth.example.com/.well-known/openid-configuration
      scopes:
        - openid
        - events:read
    plain:
      type: plain
    scram256:
      type: scramSha256
    scram512:
      type: scramSha512
    gssapi:
      type: gssapi
`})))()}var Jt;function Yt(){return(Yt=e((()=>{Jt=`asyncapi: 3.0.0
info:
  title: Sample AsyncAPI
  version: 1.0.0
servers:
  server0:
    host: broker-0.example.com:9092
    protocol: kafka
    description: Main Kafka broker
channels:
  testChannel:
    address: events.default
    messages:
      TestMessage:
        $ref: "#/components/messages/TestMessage"
    servers:
      - $ref: "#/servers/server0"
operations:
  sendOperation:
    action: send
    channel:
      $ref: "#/channels/testChannel"
    messages:
      - $ref: "#/components/messages/TestMessage"
    security:
      - $ref: "#/components/securitySchemes/oauth"
components:
  messages:
    TestMessage:
      name: TestMessage
      payload:
        type: object
        properties:
          id:
            type: string
        required:
          - id
  securitySchemes:
    userPassword:
      type: userPassword
    apiKeyUser:
      type: apiKey
      in: user
    apiKeyPassword:
      type: apiKey
      in: password
    x509:
      type: X509
    symmetric:
      type: symmetricEncryption
    asymmetric:
      type: asymmetricEncryption
    headerKey:
      type: httpApiKey
      name: X-API-Key
      in: header
    queryKey:
      type: httpApiKey
      name: api_key
      in: query
    cookieKey:
      type: httpApiKey
      name: session
      in: cookie
    basic:
      type: http
      scheme: basic
    bearer:
      type: http
      scheme: bearer
      bearerFormat: JWT
    oauthImplicit:
      type: oauth2
      flows:
        implicit:
          authorizationUrl: https://auth.example.com/authorize
          availableScopes:
            events:read: Read events
            events:write: Publish events
      scopes:
        - events:read
    oauthPassword:
      type: oauth2
      flows:
        password:
          tokenUrl: https://auth.example.com/token
          availableScopes:
            events:read: Read events
      scopes: []
    oauth:
      type: oauth2
      flows:
        clientCredentials:
          tokenUrl: https://auth.example.com/token
          availableScopes:
            events:read: Read events
            events:write: Publish events
      scopes:
        - events:write
    oauthCode:
      type: oauth2
      flows:
        authorizationCode:
          authorizationUrl: https://auth.example.com/authorize
          tokenUrl: https://auth.example.com/token
          refreshUrl: https://auth.example.com/refresh
          availableScopes:
            events:read: Read events
      scopes:
        - events:read
    oauthSeveralFlows:
      type: oauth2
      flows:
        clientCredentials:
          tokenUrl: https://auth.example.com/token
          availableScopes:
            events:read: Read events
        authorizationCode:
          authorizationUrl: https://auth.example.com/authorize
          tokenUrl: https://auth.example.com/token
          availableScopes:
            events:read: Read events
            events:admin: Administer events
      scopes:
        - events:read
        - events:audit
    oidc:
      type: openIdConnect
      openIdConnectUrl: https://auth.example.com/.well-known/openid-configuration
      scopes:
        - openid
        - events:read
    plain:
      type: plain
    scram256:
      type: scramSha256
    scram512:
      type: scramSha512
    gssapi:
      type: gssapi
`})))()}var Xt;function Zt(){return(Zt=e((()=>{Xt=`asyncapi: 3.0.0
info:
  title: Sample AsyncAPI
  version: 1.0.0
servers:
  server0:
    host: broker-0.example.com:9092
    protocol: kafka
    description: Main Kafka broker
channels:
  testChannel:
    address: events.default
    messages:
      TestMessage:
        $ref: "#/components/messages/TestMessage"
    servers:
      - $ref: "#/servers/server0"
operations:
  sendOperation:
    action: send
    channel:
      $ref: "#/channels/testChannel"
    messages:
      - $ref: "#/components/messages/TestMessage"
    security:
      - $ref: "#/components/securitySchemes/bearer"
components:
  messages:
    TestMessage:
      name: TestMessage
      payload:
        type: object
        properties:
          id:
            type: string
        required:
          - id
  securitySchemes:
    userPassword:
      type: userPassword
    apiKeyUser:
      type: apiKey
      in: user
    apiKeyPassword:
      type: apiKey
      in: password
    x509:
      type: X509
    symmetric:
      type: symmetricEncryption
    asymmetric:
      type: asymmetricEncryption
    headerKey:
      type: httpApiKey
      name: X-API-Key
      in: header
    queryKey:
      type: httpApiKey
      name: api_key
      in: query
    cookieKey:
      type: httpApiKey
      name: session
      in: cookie
    basic:
      type: http
      scheme: basic
    bearer:
      type: http
      scheme: bearer
      bearerFormat: JWT
      description: JWT issued by the identity provider.
    oauthImplicit:
      type: oauth2
      flows:
        implicit:
          authorizationUrl: https://auth.example.com/authorize
          availableScopes:
            events:read: Read events
            events:write: Publish events
      scopes:
        - events:read
    oauthPassword:
      type: oauth2
      flows:
        password:
          tokenUrl: https://auth.example.com/token
          availableScopes:
            events:read: Read events
      scopes: []
    oauth:
      type: oauth2
      flows:
        clientCredentials:
          tokenUrl: https://auth.example.com/token
          availableScopes:
            events:read: Read events
            events:write: Publish events
      scopes:
        - events:write
    oauthCode:
      type: oauth2
      flows:
        authorizationCode:
          authorizationUrl: https://auth.example.com/authorize
          tokenUrl: https://auth.example.com/token
          refreshUrl: https://auth.example.com/refresh
          availableScopes:
            events:read: Read events
      scopes:
        - events:read
    oauthSeveralFlows:
      type: oauth2
      flows:
        clientCredentials:
          tokenUrl: https://auth.example.com/token
          availableScopes:
            events:read: Read events
        authorizationCode:
          authorizationUrl: https://auth.example.com/authorize
          tokenUrl: https://auth.example.com/token
          availableScopes:
            events:read: Read events
            events:admin: Administer events
      scopes:
        - events:read
        - events:audit
    oidc:
      type: openIdConnect
      openIdConnectUrl: https://auth.example.com/.well-known/openid-configuration
      scopes:
        - openid
        - events:read
    plain:
      type: plain
    scram256:
      type: scramSha256
    scram512:
      type: scramSha512
    gssapi:
      type: gssapi
`})))()}var Qt;function $t(){return($t=e((()=>{Qt=`asyncapi: 3.0.0
info:
  title: Sample AsyncAPI
  version: 1.0.0
servers:
  server0:
    host: broker-0.example.com:9092
    protocol: kafka
    description: Main Kafka broker
channels:
  testChannel:
    address: events.default
    messages:
      TestMessage:
        $ref: "#/components/messages/TestMessage"
    servers:
      - $ref: "#/servers/server0"
operations:
  sendOperation:
    action: send
    channel:
      $ref: "#/channels/testChannel"
    messages:
      - $ref: "#/components/messages/TestMessage"
    security:
      - $ref: "#/components/securitySchemes/bearer"
components:
  messages:
    TestMessage:
      name: TestMessage
      payload:
        type: object
        properties:
          id:
            type: string
        required:
          - id
  securitySchemes:
    userPassword:
      type: userPassword
    apiKeyUser:
      type: apiKey
      in: user
    apiKeyPassword:
      type: apiKey
      in: password
    x509:
      type: X509
    symmetric:
      type: symmetricEncryption
    asymmetric:
      type: asymmetricEncryption
    headerKey:
      type: httpApiKey
      name: X-API-Key
      in: header
    queryKey:
      type: httpApiKey
      name: api_key
      in: query
    cookieKey:
      type: httpApiKey
      name: session
      in: cookie
    basic:
      type: http
      scheme: basic
    bearer:
      type: http
      scheme: bearer
      bearerFormat: JWT
    oauthImplicit:
      type: oauth2
      flows:
        implicit:
          authorizationUrl: https://auth.example.com/authorize
          availableScopes:
            events:read: Read events
            events:write: Publish events
      scopes:
        - events:read
    oauthPassword:
      type: oauth2
      flows:
        password:
          tokenUrl: https://auth.example.com/token
          availableScopes:
            events:read: Read events
      scopes: []
    oauth:
      type: oauth2
      flows:
        clientCredentials:
          tokenUrl: https://auth.example.com/token
          availableScopes:
            events:read: Read events
            events:write: Publish events
      scopes:
        - events:write
    oauthCode:
      type: oauth2
      flows:
        authorizationCode:
          authorizationUrl: https://auth.example.com/authorize
          tokenUrl: https://auth.example.com/token
          refreshUrl: https://auth.example.com/refresh
          availableScopes:
            events:read: Read events
      scopes:
        - events:read
    oauthSeveralFlows:
      type: oauth2
      flows:
        clientCredentials:
          tokenUrl: https://auth.example.com/token
          availableScopes:
            events:read: Read events
        authorizationCode:
          authorizationUrl: https://auth.example.com/authorize
          tokenUrl: https://auth.example.com/token
          availableScopes:
            events:read: Read events
            events:admin: Administer events
      scopes:
        - events:read
        - events:audit
    oidc:
      type: openIdConnect
      openIdConnectUrl: https://auth.example.com/.well-known/openid-configuration
      scopes:
        - openid
        - events:read
    plain:
      type: plain
    scram256:
      type: scramSha256
    scram512:
      type: scramSha512
    gssapi:
      type: gssapi
`})))()}var en;function tn(){return(tn=e((()=>{en=`asyncapi: 3.0.0
info:
  title: Sample AsyncAPI
  version: 1.0.0
servers:
  server0:
    host: broker-0.example.com:9092
    protocol: kafka
    description: Main Kafka broker
channels:
  testChannel:
    address: events.default
    messages:
      TestMessage:
        $ref: "#/components/messages/TestMessage"
    servers:
      - $ref: "#/servers/server0"
operations:
  sendOperation:
    action: send
    channel:
      $ref: "#/channels/testChannel"
    messages:
      - $ref: "#/components/messages/TestMessage"
    security:
      - $ref: "#/components/securitySchemes/bearer"
components:
  messages:
    TestMessage:
      name: TestMessage
      payload:
        type: object
        properties:
          id:
            type: string
        required:
          - id
  securitySchemes:
    userPassword:
      type: userPassword
    apiKeyUser:
      type: apiKey
      in: user
    apiKeyPassword:
      type: apiKey
      in: password
    x509:
      type: X509
    symmetric:
      type: symmetricEncryption
    asymmetric:
      type: asymmetricEncryption
    headerKey:
      type: httpApiKey
      name: X-API-Key
      in: header
    queryKey:
      type: httpApiKey
      name: api_key
      in: query
    cookieKey:
      type: httpApiKey
      name: session
      in: cookie
    basic:
      type: http
      scheme: basic
    bearer:
      type: http
      scheme: bearer
      bearerFormat: JWT
      description: JWT issued by the events identity provider.
    oauthImplicit:
      type: oauth2
      flows:
        implicit:
          authorizationUrl: https://auth.example.com/authorize
          availableScopes:
            events:read: Read events
            events:write: Publish events
      scopes:
        - events:read
    oauthPassword:
      type: oauth2
      flows:
        password:
          tokenUrl: https://auth.example.com/token
          availableScopes:
            events:read: Read events
      scopes: []
    oauth:
      type: oauth2
      flows:
        clientCredentials:
          tokenUrl: https://auth.example.com/token
          availableScopes:
            events:read: Read events
            events:write: Publish events
      scopes:
        - events:write
    oauthCode:
      type: oauth2
      flows:
        authorizationCode:
          authorizationUrl: https://auth.example.com/authorize
          tokenUrl: https://auth.example.com/token
          refreshUrl: https://auth.example.com/refresh
          availableScopes:
            events:read: Read events
      scopes:
        - events:read
    oauthSeveralFlows:
      type: oauth2
      flows:
        clientCredentials:
          tokenUrl: https://auth.example.com/token
          availableScopes:
            events:read: Read events
        authorizationCode:
          authorizationUrl: https://auth.example.com/authorize
          tokenUrl: https://auth.example.com/token
          availableScopes:
            events:read: Read events
            events:admin: Administer events
      scopes:
        - events:read
        - events:audit
    oidc:
      type: openIdConnect
      openIdConnectUrl: https://auth.example.com/.well-known/openid-configuration
      scopes:
        - openid
        - events:read
    plain:
      type: plain
    scram256:
      type: scramSha256
    scram512:
      type: scramSha512
    gssapi:
      type: gssapi
`})))()}var nn;function rn(){return(rn=e((()=>{nn=`asyncapi: 3.0.0
info:
  title: Sample AsyncAPI
  version: 1.0.0
servers:
  server0:
    host: broker-0.example.com:9092
    protocol: kafka
    description: Main Kafka broker
channels:
  testChannel:
    address: events.default
    messages:
      TestMessage:
        $ref: "#/components/messages/TestMessage"
    servers:
      - $ref: "#/servers/server0"
operations:
  sendOperation:
    action: send
    channel:
      $ref: "#/channels/testChannel"
    messages:
      - $ref: "#/components/messages/TestMessage"
    security:
      - $ref: "#/components/securitySchemes/userPassword"
components:
  messages:
    TestMessage:
      name: TestMessage
      payload:
        type: object
        properties:
          id:
            type: string
        required:
          - id
  securitySchemes:
    userPassword:
      type: X509
    apiKeyUser:
      type: apiKey
      in: user
    apiKeyPassword:
      type: apiKey
      in: password
    x509:
      type: X509
    symmetric:
      type: symmetricEncryption
    asymmetric:
      type: asymmetricEncryption
    headerKey:
      type: httpApiKey
      name: X-API-Key
      in: header
    queryKey:
      type: httpApiKey
      name: api_key
      in: query
    cookieKey:
      type: httpApiKey
      name: session
      in: cookie
    basic:
      type: http
      scheme: basic
    bearer:
      type: http
      scheme: bearer
      bearerFormat: JWT
    oauthImplicit:
      type: oauth2
      flows:
        implicit:
          authorizationUrl: https://auth.example.com/authorize
          availableScopes:
            events:read: Read events
            events:write: Publish events
      scopes:
        - events:read
    oauthPassword:
      type: oauth2
      flows:
        password:
          tokenUrl: https://auth.example.com/token
          availableScopes:
            events:read: Read events
      scopes: []
    oauth:
      type: oauth2
      flows:
        clientCredentials:
          tokenUrl: https://auth.example.com/token
          availableScopes:
            events:read: Read events
            events:write: Publish events
      scopes:
        - events:write
    oauthCode:
      type: oauth2
      flows:
        authorizationCode:
          authorizationUrl: https://auth.example.com/authorize
          tokenUrl: https://auth.example.com/token
          refreshUrl: https://auth.example.com/refresh
          availableScopes:
            events:read: Read events
      scopes:
        - events:read
    oauthSeveralFlows:
      type: oauth2
      flows:
        clientCredentials:
          tokenUrl: https://auth.example.com/token
          availableScopes:
            events:read: Read events
        authorizationCode:
          authorizationUrl: https://auth.example.com/authorize
          tokenUrl: https://auth.example.com/token
          availableScopes:
            events:read: Read events
            events:admin: Administer events
      scopes:
        - events:read
        - events:audit
    oidc:
      type: openIdConnect
      openIdConnectUrl: https://auth.example.com/.well-known/openid-configuration
      scopes:
        - openid
        - events:read
    plain:
      type: plain
    scram256:
      type: scramSha256
    scram512:
      type: scramSha512
    gssapi:
      type: gssapi
`})))()}var an;function on(){return(on=e((()=>{an=`asyncapi: 3.0.0
info:
  title: Sample AsyncAPI
  version: 1.0.0
servers:
  server0:
    host: broker-0.example.com:9092
    protocol: kafka
    description: Main Kafka broker
channels:
  testChannel:
    address: events.default
    messages:
      TestMessage:
        $ref: "#/components/messages/TestMessage"
    servers:
      - $ref: "#/servers/server0"
operations:
  sendOperation:
    action: send
    channel:
      $ref: "#/channels/testChannel"
    messages:
      - $ref: "#/components/messages/TestMessage"
    security:
      - $ref: "#/components/securitySchemes/headerKey"
components:
  messages:
    TestMessage:
      name: TestMessage
      payload:
        type: object
        properties:
          id:
            type: string
        required:
          - id
  securitySchemes:
    userPassword:
      type: userPassword
    apiKeyUser:
      type: apiKey
      in: user
    apiKeyPassword:
      type: apiKey
      in: password
    x509:
      type: X509
    symmetric:
      type: symmetricEncryption
    asymmetric:
      type: asymmetricEncryption
    headerKey:
      type: httpApiKey
      name: X-API-Key
      in: query
    queryKey:
      type: httpApiKey
      name: api_key
      in: query
    cookieKey:
      type: httpApiKey
      name: session
      in: cookie
    basic:
      type: http
      scheme: basic
    bearer:
      type: http
      scheme: bearer
      bearerFormat: JWT
    oauthImplicit:
      type: oauth2
      flows:
        implicit:
          authorizationUrl: https://auth.example.com/authorize
          availableScopes:
            events:read: Read events
            events:write: Publish events
      scopes:
        - events:read
    oauthPassword:
      type: oauth2
      flows:
        password:
          tokenUrl: https://auth.example.com/token
          availableScopes:
            events:read: Read events
      scopes: []
    oauth:
      type: oauth2
      flows:
        clientCredentials:
          tokenUrl: https://auth.example.com/token
          availableScopes:
            events:read: Read events
            events:write: Publish events
      scopes:
        - events:write
    oauthCode:
      type: oauth2
      flows:
        authorizationCode:
          authorizationUrl: https://auth.example.com/authorize
          tokenUrl: https://auth.example.com/token
          refreshUrl: https://auth.example.com/refresh
          availableScopes:
            events:read: Read events
      scopes:
        - events:read
    oauthSeveralFlows:
      type: oauth2
      flows:
        clientCredentials:
          tokenUrl: https://auth.example.com/token
          availableScopes:
            events:read: Read events
        authorizationCode:
          authorizationUrl: https://auth.example.com/authorize
          tokenUrl: https://auth.example.com/token
          availableScopes:
            events:read: Read events
            events:admin: Administer events
      scopes:
        - events:read
        - events:audit
    oidc:
      type: openIdConnect
      openIdConnectUrl: https://auth.example.com/.well-known/openid-configuration
      scopes:
        - openid
        - events:read
    plain:
      type: plain
    scram256:
      type: scramSha256
    scram512:
      type: scramSha512
    gssapi:
      type: gssapi
`})))()}var sn;function cn(){return(cn=e((()=>{sn=`asyncapi: 3.0.0
info:
  title: Sample AsyncAPI
  version: 1.0.0
servers:
  server0:
    host: broker-0.example.com:9092
    protocol: kafka
    description: Main Kafka broker
    security:
      - $ref: "#/components/securitySchemes/userPassword"
channels:
  testChannel:
    address: events.default
    messages:
      TestMessage:
        $ref: "#/components/messages/TestMessage"
    servers:
      - $ref: "#/servers/server0"
operations:
  sendOperation:
    action: send
    channel:
      $ref: "#/channels/testChannel"
    messages:
      - $ref: "#/components/messages/TestMessage"
components:
  messages:
    TestMessage:
      name: TestMessage
      payload:
        type: object
        properties:
          id:
            type: string
        required:
          - id
  securitySchemes:
    userPassword:
      type: userPassword
    apiKeyUser:
      type: apiKey
      in: user
    apiKeyPassword:
      type: apiKey
      in: password
    x509:
      type: X509
    symmetric:
      type: symmetricEncryption
    asymmetric:
      type: asymmetricEncryption
    headerKey:
      type: httpApiKey
      name: X-API-Key
      in: header
    queryKey:
      type: httpApiKey
      name: api_key
      in: query
    cookieKey:
      type: httpApiKey
      name: session
      in: cookie
    basic:
      type: http
      scheme: basic
    bearer:
      type: http
      scheme: bearer
      bearerFormat: JWT
    oauthImplicit:
      type: oauth2
      flows:
        implicit:
          authorizationUrl: https://auth.example.com/authorize
          availableScopes:
            events:read: Read events
            events:write: Publish events
      scopes:
        - events:read
    oauthPassword:
      type: oauth2
      flows:
        password:
          tokenUrl: https://auth.example.com/token
          availableScopes:
            events:read: Read events
      scopes: []
    oauth:
      type: oauth2
      flows:
        clientCredentials:
          tokenUrl: https://auth.example.com/token
          availableScopes:
            events:read: Read events
            events:write: Publish events
      scopes:
        - events:write
    oauthCode:
      type: oauth2
      flows:
        authorizationCode:
          authorizationUrl: https://auth.example.com/authorize
          tokenUrl: https://auth.example.com/token
          refreshUrl: https://auth.example.com/refresh
          availableScopes:
            events:read: Read events
      scopes:
        - events:read
    oauthSeveralFlows:
      type: oauth2
      flows:
        clientCredentials:
          tokenUrl: https://auth.example.com/token
          availableScopes:
            events:read: Read events
        authorizationCode:
          authorizationUrl: https://auth.example.com/authorize
          tokenUrl: https://auth.example.com/token
          availableScopes:
            events:read: Read events
            events:admin: Administer events
      scopes:
        - events:read
        - events:audit
    oidc:
      type: openIdConnect
      openIdConnectUrl: https://auth.example.com/.well-known/openid-configuration
      scopes:
        - openid
        - events:read
    plain:
      type: plain
    scram256:
      type: scramSha256
    scram512:
      type: scramSha512
    gssapi:
      type: gssapi
`})))()}var ln;function un(){return(un=e((()=>{ln=`asyncapi: 3.0.0
info:
  title: Sample AsyncAPI
  version: 1.0.0
servers:
  server0:
    host: broker-0.example.com:9092
    protocol: kafka
    description: Main Kafka broker
channels:
  testChannel:
    address: events.default
    messages:
      TestMessage:
        $ref: "#/components/messages/TestMessage"
    servers:
      - $ref: "#/servers/server0"
operations:
  sendOperation:
    action: send
    channel:
      $ref: "#/channels/testChannel"
    messages:
      - $ref: "#/components/messages/TestMessage"
components:
  messages:
    TestMessage:
      name: TestMessage
      payload:
        type: object
        properties:
          id:
            type: string
        required:
          - id
  securitySchemes:
    userPassword:
      type: userPassword
    apiKeyUser:
      type: apiKey
      in: user
    apiKeyPassword:
      type: apiKey
      in: password
    x509:
      type: X509
    symmetric:
      type: symmetricEncryption
    asymmetric:
      type: asymmetricEncryption
    headerKey:
      type: httpApiKey
      name: X-API-Key
      in: header
    queryKey:
      type: httpApiKey
      name: api_key
      in: query
    cookieKey:
      type: httpApiKey
      name: session
      in: cookie
    basic:
      type: http
      scheme: basic
    bearer:
      type: http
      scheme: bearer
      bearerFormat: JWT
    oauthImplicit:
      type: oauth2
      flows:
        implicit:
          authorizationUrl: https://auth.example.com/authorize
          availableScopes:
            events:read: Read events
            events:write: Publish events
      scopes:
        - events:read
    oauthPassword:
      type: oauth2
      flows:
        password:
          tokenUrl: https://auth.example.com/token
          availableScopes:
            events:read: Read events
      scopes: []
    oauth:
      type: oauth2
      flows:
        clientCredentials:
          tokenUrl: https://auth.example.com/token
          availableScopes:
            events:read: Read events
            events:write: Publish events
      scopes:
        - events:write
    oauthCode:
      type: oauth2
      flows:
        authorizationCode:
          authorizationUrl: https://auth.example.com/authorize
          tokenUrl: https://auth.example.com/token
          refreshUrl: https://auth.example.com/refresh
          availableScopes:
            events:read: Read events
      scopes:
        - events:read
    oauthSeveralFlows:
      type: oauth2
      flows:
        clientCredentials:
          tokenUrl: https://auth.example.com/token
          availableScopes:
            events:read: Read events
        authorizationCode:
          authorizationUrl: https://auth.example.com/authorize
          tokenUrl: https://auth.example.com/token
          availableScopes:
            events:read: Read events
            events:admin: Administer events
      scopes:
        - events:read
        - events:audit
    oidc:
      type: openIdConnect
      openIdConnectUrl: https://auth.example.com/.well-known/openid-configuration
      scopes:
        - openid
        - events:read
    plain:
      type: plain
    scram256:
      type: scramSha256
    scram512:
      type: scramSha512
    gssapi:
      type: gssapi
`})))()}var dn;function fn(){return(fn=e((()=>{dn=`asyncapi: 3.0.0
info:
  title: Sample AsyncAPI
  version: 1.0.0
servers:
  server0:
    host: broker-0.example.com:9092
    protocol: kafka
    description: Main Kafka broker
    security:
      - $ref: "#/components/securitySchemes/userPassword"
      - $ref: "#/components/securitySchemes/x509"
channels:
  testChannel:
    address: events.default
    messages:
      TestMessage:
        $ref: "#/components/messages/TestMessage"
    servers:
      - $ref: "#/servers/server0"
operations:
  sendOperation:
    action: send
    channel:
      $ref: "#/channels/testChannel"
    messages:
      - $ref: "#/components/messages/TestMessage"
components:
  messages:
    TestMessage:
      name: TestMessage
      payload:
        type: object
        properties:
          id:
            type: string
        required:
          - id
  securitySchemes:
    userPassword:
      type: userPassword
    apiKeyUser:
      type: apiKey
      in: user
    apiKeyPassword:
      type: apiKey
      in: password
    x509:
      type: X509
    symmetric:
      type: symmetricEncryption
    asymmetric:
      type: asymmetricEncryption
    headerKey:
      type: httpApiKey
      name: X-API-Key
      in: header
    queryKey:
      type: httpApiKey
      name: api_key
      in: query
    cookieKey:
      type: httpApiKey
      name: session
      in: cookie
    basic:
      type: http
      scheme: basic
    bearer:
      type: http
      scheme: bearer
      bearerFormat: JWT
    oauthImplicit:
      type: oauth2
      flows:
        implicit:
          authorizationUrl: https://auth.example.com/authorize
          availableScopes:
            events:read: Read events
            events:write: Publish events
      scopes:
        - events:read
    oauthPassword:
      type: oauth2
      flows:
        password:
          tokenUrl: https://auth.example.com/token
          availableScopes:
            events:read: Read events
      scopes: []
    oauth:
      type: oauth2
      flows:
        clientCredentials:
          tokenUrl: https://auth.example.com/token
          availableScopes:
            events:read: Read events
            events:write: Publish events
      scopes:
        - events:write
    oauthCode:
      type: oauth2
      flows:
        authorizationCode:
          authorizationUrl: https://auth.example.com/authorize
          tokenUrl: https://auth.example.com/token
          refreshUrl: https://auth.example.com/refresh
          availableScopes:
            events:read: Read events
      scopes:
        - events:read
    oauthSeveralFlows:
      type: oauth2
      flows:
        clientCredentials:
          tokenUrl: https://auth.example.com/token
          availableScopes:
            events:read: Read events
        authorizationCode:
          authorizationUrl: https://auth.example.com/authorize
          tokenUrl: https://auth.example.com/token
          availableScopes:
            events:read: Read events
            events:admin: Administer events
      scopes:
        - events:read
        - events:audit
    oidc:
      type: openIdConnect
      openIdConnectUrl: https://auth.example.com/.well-known/openid-configuration
      scopes:
        - openid
        - events:read
    plain:
      type: plain
    scram256:
      type: scramSha256
    scram512:
      type: scramSha512
    gssapi:
      type: gssapi
`})))()}var pn;function mn(){return(mn=e((()=>{pn=`asyncapi: 3.0.0
info:
  title: Sample AsyncAPI
  version: 1.0.0
servers:
  server0:
    host: broker-0.example.com:9092
    protocol: kafka
    description: Main Kafka broker
    security:
      - $ref: "#/components/securitySchemes/userPassword"
channels:
  testChannel:
    address: events.default
    messages:
      TestMessage:
        $ref: "#/components/messages/TestMessage"
    servers:
      - $ref: "#/servers/server0"
operations:
  sendOperation:
    action: send
    channel:
      $ref: "#/channels/testChannel"
    messages:
      - $ref: "#/components/messages/TestMessage"
components:
  messages:
    TestMessage:
      name: TestMessage
      payload:
        type: object
        properties:
          id:
            type: string
        required:
          - id
  securitySchemes:
    userPassword:
      type: userPassword
    apiKeyUser:
      type: apiKey
      in: user
    apiKeyPassword:
      type: apiKey
      in: password
    x509:
      type: X509
    symmetric:
      type: symmetricEncryption
    asymmetric:
      type: asymmetricEncryption
    headerKey:
      type: httpApiKey
      name: X-API-Key
      in: header
    queryKey:
      type: httpApiKey
      name: api_key
      in: query
    cookieKey:
      type: httpApiKey
      name: session
      in: cookie
    basic:
      type: http
      scheme: basic
    bearer:
      type: http
      scheme: bearer
      bearerFormat: JWT
    oauthImplicit:
      type: oauth2
      flows:
        implicit:
          authorizationUrl: https://auth.example.com/authorize
          availableScopes:
            events:read: Read events
            events:write: Publish events
      scopes:
        - events:read
    oauthPassword:
      type: oauth2
      flows:
        password:
          tokenUrl: https://auth.example.com/token
          availableScopes:
            events:read: Read events
      scopes: []
    oauth:
      type: oauth2
      flows:
        clientCredentials:
          tokenUrl: https://auth.example.com/token
          availableScopes:
            events:read: Read events
            events:write: Publish events
      scopes:
        - events:write
    oauthCode:
      type: oauth2
      flows:
        authorizationCode:
          authorizationUrl: https://auth.example.com/authorize
          tokenUrl: https://auth.example.com/token
          refreshUrl: https://auth.example.com/refresh
          availableScopes:
            events:read: Read events
      scopes:
        - events:read
    oauthSeveralFlows:
      type: oauth2
      flows:
        clientCredentials:
          tokenUrl: https://auth.example.com/token
          availableScopes:
            events:read: Read events
        authorizationCode:
          authorizationUrl: https://auth.example.com/authorize
          tokenUrl: https://auth.example.com/token
          availableScopes:
            events:read: Read events
            events:admin: Administer events
      scopes:
        - events:read
        - events:audit
    oidc:
      type: openIdConnect
      openIdConnectUrl: https://auth.example.com/.well-known/openid-configuration
      scopes:
        - openid
        - events:read
    plain:
      type: plain
    scram256:
      type: scramSha256
    scram512:
      type: scramSha512
    gssapi:
      type: gssapi
`})))()}var hn;function gn(){return(gn=e((()=>{hn=`asyncapi: 3.0.0
info:
  title: Sample AsyncAPI
  version: 1.0.0
servers:
  server0:
    host: broker-0.example.com:9092
    protocol: kafka
    description: Main Kafka broker
    security:
      - $ref: "#/components/securitySchemes/scram256"
channels:
  testChannel:
    address: events.default
    messages:
      TestMessage:
        $ref: "#/components/messages/TestMessage"
    servers:
      - $ref: "#/servers/server0"
operations:
  sendOperation:
    action: send
    channel:
      $ref: "#/channels/testChannel"
    messages:
      - $ref: "#/components/messages/TestMessage"
components:
  messages:
    TestMessage:
      name: TestMessage
      payload:
        type: object
        properties:
          id:
            type: string
        required:
          - id
  securitySchemes:
    userPassword:
      type: userPassword
    apiKeyUser:
      type: apiKey
      in: user
    apiKeyPassword:
      type: apiKey
      in: password
    x509:
      type: X509
    symmetric:
      type: symmetricEncryption
    asymmetric:
      type: asymmetricEncryption
    headerKey:
      type: httpApiKey
      name: X-API-Key
      in: header
    queryKey:
      type: httpApiKey
      name: api_key
      in: query
    cookieKey:
      type: httpApiKey
      name: session
      in: cookie
    basic:
      type: http
      scheme: basic
    bearer:
      type: http
      scheme: bearer
      bearerFormat: JWT
    oauthImplicit:
      type: oauth2
      flows:
        implicit:
          authorizationUrl: https://auth.example.com/authorize
          availableScopes:
            events:read: Read events
            events:write: Publish events
      scopes:
        - events:read
    oauthPassword:
      type: oauth2
      flows:
        password:
          tokenUrl: https://auth.example.com/token
          availableScopes:
            events:read: Read events
      scopes: []
    oauth:
      type: oauth2
      flows:
        clientCredentials:
          tokenUrl: https://auth.example.com/token
          availableScopes:
            events:read: Read events
            events:write: Publish events
      scopes:
        - events:write
    oauthCode:
      type: oauth2
      flows:
        authorizationCode:
          authorizationUrl: https://auth.example.com/authorize
          tokenUrl: https://auth.example.com/token
          refreshUrl: https://auth.example.com/refresh
          availableScopes:
            events:read: Read events
      scopes:
        - events:read
    oauthSeveralFlows:
      type: oauth2
      flows:
        clientCredentials:
          tokenUrl: https://auth.example.com/token
          availableScopes:
            events:read: Read events
        authorizationCode:
          authorizationUrl: https://auth.example.com/authorize
          tokenUrl: https://auth.example.com/token
          availableScopes:
            events:read: Read events
            events:admin: Administer events
      scopes:
        - events:read
        - events:audit
    oidc:
      type: openIdConnect
      openIdConnectUrl: https://auth.example.com/.well-known/openid-configuration
      scopes:
        - openid
        - events:read
    plain:
      type: plain
    scram256:
      type: scramSha256
      description: SCRAM credentials from the secrets store.
    scram512:
      type: scramSha512
    gssapi:
      type: gssapi
`})))()}var _n;function vn(){return(vn=e((()=>{_n=`asyncapi: 3.0.0
info:
  title: Sample AsyncAPI
  version: 1.0.0
servers:
  server0:
    host: broker-0.example.com:9092
    protocol: kafka
    description: Main Kafka broker
    security:
      - $ref: "#/components/securitySchemes/scram256"
channels:
  testChannel:
    address: events.default
    messages:
      TestMessage:
        $ref: "#/components/messages/TestMessage"
    servers:
      - $ref: "#/servers/server0"
operations:
  sendOperation:
    action: send
    channel:
      $ref: "#/channels/testChannel"
    messages:
      - $ref: "#/components/messages/TestMessage"
components:
  messages:
    TestMessage:
      name: TestMessage
      payload:
        type: object
        properties:
          id:
            type: string
        required:
          - id
  securitySchemes:
    userPassword:
      type: userPassword
    apiKeyUser:
      type: apiKey
      in: user
    apiKeyPassword:
      type: apiKey
      in: password
    x509:
      type: X509
    symmetric:
      type: symmetricEncryption
    asymmetric:
      type: asymmetricEncryption
    headerKey:
      type: httpApiKey
      name: X-API-Key
      in: header
    queryKey:
      type: httpApiKey
      name: api_key
      in: query
    cookieKey:
      type: httpApiKey
      name: session
      in: cookie
    basic:
      type: http
      scheme: basic
    bearer:
      type: http
      scheme: bearer
      bearerFormat: JWT
    oauthImplicit:
      type: oauth2
      flows:
        implicit:
          authorizationUrl: https://auth.example.com/authorize
          availableScopes:
            events:read: Read events
            events:write: Publish events
      scopes:
        - events:read
    oauthPassword:
      type: oauth2
      flows:
        password:
          tokenUrl: https://auth.example.com/token
          availableScopes:
            events:read: Read events
      scopes: []
    oauth:
      type: oauth2
      flows:
        clientCredentials:
          tokenUrl: https://auth.example.com/token
          availableScopes:
            events:read: Read events
            events:write: Publish events
      scopes:
        - events:write
    oauthCode:
      type: oauth2
      flows:
        authorizationCode:
          authorizationUrl: https://auth.example.com/authorize
          tokenUrl: https://auth.example.com/token
          refreshUrl: https://auth.example.com/refresh
          availableScopes:
            events:read: Read events
      scopes:
        - events:read
    oauthSeveralFlows:
      type: oauth2
      flows:
        clientCredentials:
          tokenUrl: https://auth.example.com/token
          availableScopes:
            events:read: Read events
        authorizationCode:
          authorizationUrl: https://auth.example.com/authorize
          tokenUrl: https://auth.example.com/token
          availableScopes:
            events:read: Read events
            events:admin: Administer events
      scopes:
        - events:read
        - events:audit
    oidc:
      type: openIdConnect
      openIdConnectUrl: https://auth.example.com/.well-known/openid-configuration
      scopes:
        - openid
        - events:read
    plain:
      type: plain
    scram256:
      type: scramSha512
    scram512:
      type: scramSha512
    gssapi:
      type: gssapi
`})))()}var yn;function bn(){return(bn=e((()=>{yn=`asyncapi: 3.0.0
info:
  title: Sample AsyncAPI
  version: 1.0.0
servers:
  server0:
    host: broker-0.example.com:9092
    protocol: kafka
    description: Main Kafka broker
    security:
      - $ref: "#/components/securitySchemes/userPassword"
  server1:
    host: broker-1.example.com:9093
    protocol: kafka-secure
    security:
      - $ref: "#/components/securitySchemes/x509"
channels:
  testChannel:
    address: events.default
    messages:
      TestMessage:
        $ref: "#/components/messages/TestMessage"
    servers:
      - $ref: "#/servers/server0"
      - $ref: "#/servers/server1"
operations:
  sendOperation:
    action: send
    channel:
      $ref: "#/channels/testChannel"
    messages:
      - $ref: "#/components/messages/TestMessage"
components:
  messages:
    TestMessage:
      name: TestMessage
      payload:
        type: object
        properties:
          id:
            type: string
        required:
          - id
  securitySchemes:
    userPassword:
      type: userPassword
    apiKeyUser:
      type: apiKey
      in: user
    apiKeyPassword:
      type: apiKey
      in: password
    x509:
      type: X509
    symmetric:
      type: symmetricEncryption
    asymmetric:
      type: asymmetricEncryption
    headerKey:
      type: httpApiKey
      name: X-API-Key
      in: header
    queryKey:
      type: httpApiKey
      name: api_key
      in: query
    cookieKey:
      type: httpApiKey
      name: session
      in: cookie
    basic:
      type: http
      scheme: basic
    bearer:
      type: http
      scheme: bearer
      bearerFormat: JWT
    oauthImplicit:
      type: oauth2
      flows:
        implicit:
          authorizationUrl: https://auth.example.com/authorize
          availableScopes:
            events:read: Read events
            events:write: Publish events
      scopes:
        - events:read
    oauthPassword:
      type: oauth2
      flows:
        password:
          tokenUrl: https://auth.example.com/token
          availableScopes:
            events:read: Read events
      scopes: []
    oauth:
      type: oauth2
      flows:
        clientCredentials:
          tokenUrl: https://auth.example.com/token
          availableScopes:
            events:read: Read events
            events:write: Publish events
      scopes:
        - events:write
    oauthCode:
      type: oauth2
      flows:
        authorizationCode:
          authorizationUrl: https://auth.example.com/authorize
          tokenUrl: https://auth.example.com/token
          refreshUrl: https://auth.example.com/refresh
          availableScopes:
            events:read: Read events
      scopes:
        - events:read
    oauthSeveralFlows:
      type: oauth2
      flows:
        clientCredentials:
          tokenUrl: https://auth.example.com/token
          availableScopes:
            events:read: Read events
        authorizationCode:
          authorizationUrl: https://auth.example.com/authorize
          tokenUrl: https://auth.example.com/token
          availableScopes:
            events:read: Read events
            events:admin: Administer events
      scopes:
        - events:read
        - events:audit
    oidc:
      type: openIdConnect
      openIdConnectUrl: https://auth.example.com/.well-known/openid-configuration
      scopes:
        - openid
        - events:read
    plain:
      type: plain
    scram256:
      type: scramSha256
    scram512:
      type: scramSha512
    gssapi:
      type: gssapi
`})))()}var xn;function Sn(){return(Sn=e((()=>{xn=`asyncapi: 3.0.0
info:
  title: Sample AsyncAPI
  version: 1.0.0
servers:
  server0:
    host: broker-0.example.com:9092
    protocol: kafka
    description: Main Kafka broker
    security:
      - $ref: "#/components/securitySchemes/userPassword"
channels:
  testChannel:
    address: events.default
    messages:
      TestMessage:
        $ref: "#/components/messages/TestMessage"
    servers:
      - $ref: "#/servers/server0"
operations:
  sendOperation:
    action: send
    channel:
      $ref: "#/channels/testChannel"
    messages:
      - $ref: "#/components/messages/TestMessage"
components:
  messages:
    TestMessage:
      name: TestMessage
      payload:
        type: object
        properties:
          id:
            type: string
        required:
          - id
  securitySchemes:
    userPassword:
      type: userPassword
    apiKeyUser:
      type: apiKey
      in: user
    apiKeyPassword:
      type: apiKey
      in: password
    x509:
      type: X509
    symmetric:
      type: symmetricEncryption
    asymmetric:
      type: asymmetricEncryption
    headerKey:
      type: httpApiKey
      name: X-API-Key
      in: header
    queryKey:
      type: httpApiKey
      name: api_key
      in: query
    cookieKey:
      type: httpApiKey
      name: session
      in: cookie
    basic:
      type: http
      scheme: basic
    bearer:
      type: http
      scheme: bearer
      bearerFormat: JWT
    oauthImplicit:
      type: oauth2
      flows:
        implicit:
          authorizationUrl: https://auth.example.com/authorize
          availableScopes:
            events:read: Read events
            events:write: Publish events
      scopes:
        - events:read
    oauthPassword:
      type: oauth2
      flows:
        password:
          tokenUrl: https://auth.example.com/token
          availableScopes:
            events:read: Read events
      scopes: []
    oauth:
      type: oauth2
      flows:
        clientCredentials:
          tokenUrl: https://auth.example.com/token
          availableScopes:
            events:read: Read events
            events:write: Publish events
      scopes:
        - events:write
    oauthCode:
      type: oauth2
      flows:
        authorizationCode:
          authorizationUrl: https://auth.example.com/authorize
          tokenUrl: https://auth.example.com/token
          refreshUrl: https://auth.example.com/refresh
          availableScopes:
            events:read: Read events
      scopes:
        - events:read
    oauthSeveralFlows:
      type: oauth2
      flows:
        clientCredentials:
          tokenUrl: https://auth.example.com/token
          availableScopes:
            events:read: Read events
        authorizationCode:
          authorizationUrl: https://auth.example.com/authorize
          tokenUrl: https://auth.example.com/token
          availableScopes:
            events:read: Read events
            events:admin: Administer events
      scopes:
        - events:read
        - events:audit
    oidc:
      type: openIdConnect
      openIdConnectUrl: https://auth.example.com/.well-known/openid-configuration
      scopes:
        - openid
        - events:read
    plain:
      type: plain
    scram256:
      type: scramSha256
    scram512:
      type: scramSha512
    gssapi:
      type: gssapi
`})))()}var Cn,wn,y;function Tn(){return(Tn=e((()=>{ee(),re(),Cn=t(),ue(),ce(),wn=n(),y=e=>{let{beforeYaml:t,afterYaml:n,displayMode:ee=ne}=e,re=(0,Cn.useMemo)(()=>le(t,n,pe),[t,n]);return(0,wn.jsx)(te,{...re,displayMode:ee})},y.__docgenInfo={description:"One AsyncAPI Security diff fixture (`packages/samples/async-api-diffs/security/<case>/{before,after}.yaml`).",methods:[],displayName:`AsyncApiSecurityDiffSampleStory`,props:{caseId:{required:!0,tsType:{name:`string`},description:``},beforeYaml:{required:!0,tsType:{name:`string`},description:``},afterYaml:{required:!0,tsType:{name:`string`},description:``},displayMode:{required:!1,tsType:{name:`DisplayMode`},description:``}}}})))()}var En,Dn,b,x,S,C,w,T,E,D,O,k,A,j,M,N,P,F,I,L,R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q,$,On;function kn(){return(kn=e((()=>{he(),_e(),ye(),xe(),Ce(),Te(),De(),ke(),je(),Ne(),Fe(),r(),a(),s(),l(),d(),p(),h(),_(),Re(),Be(),He(),We(),Ke(),Je(),Xe(),Qe(),et(),nt(),it(),ot(),ct(),ut(),ft(),mt(),gt(),vt(),bt(),St(),wt(),Et(),v(),kt(),jt(),Nt(),Ft(),Lt(),zt(),Vt(),Ut(),Gt(),qt(),Yt(),Zt(),$t(),tn(),rn(),on(),cn(),un(),fn(),mn(),gn(),vn(),bn(),Sn(),ue(),oe(),ie(),Tn(),En=ae(se(Object.assign({"../../../../samples/async-api-diffs/security/1.1-operation-security-added/before.yaml":me,"../../../../samples/async-api-diffs/security/1.10-http-api-key-name-changed/before.yaml":ge,"../../../../samples/async-api-diffs/security/1.11-api-key-location-changed/before.yaml":ve,"../../../../samples/async-api-diffs/security/1.12-http-scheme-changed/before.yaml":be,"../../../../samples/async-api-diffs/security/1.13-bearer-format-added/before.yaml":Se,"../../../../samples/async-api-diffs/security/1.14-bearer-format-removed/before.yaml":we,"../../../../samples/async-api-diffs/security/1.15-openid-connect-url-changed/before.yaml":Ee,"../../../../samples/async-api-diffs/security/1.16-required-scope-added/before.yaml":Oe,"../../../../samples/async-api-diffs/security/1.17-required-scope-removed/before.yaml":Ae,"../../../../samples/async-api-diffs/security/1.18-oauth-flow-added/before.yaml":Me,"../../../../samples/async-api-diffs/security/1.19-oauth-flow-removed/before.yaml":Pe,"../../../../samples/async-api-diffs/security/1.2-operation-security-removed/before.yaml":Ie,"../../../../samples/async-api-diffs/security/1.20-token-url-changed/before.yaml":i,"../../../../samples/async-api-diffs/security/1.21-refresh-url-added/before.yaml":o,"../../../../samples/async-api-diffs/security/1.22-refresh-url-removed/before.yaml":c,"../../../../samples/async-api-diffs/security/1.23-flow-scope-added/before.yaml":u,"../../../../samples/async-api-diffs/security/1.24-flow-scope-removed/before.yaml":f,"../../../../samples/async-api-diffs/security/1.25-flow-scope-description-changed/before.yaml":m,"../../../../samples/async-api-diffs/security/1.3-alternative-added/before.yaml":g,"../../../../samples/async-api-diffs/security/1.4-alternative-removed/before.yaml":Le,"../../../../samples/async-api-diffs/security/1.5-scheme-description-added/before.yaml":ze,"../../../../samples/async-api-diffs/security/1.6-scheme-description-removed/before.yaml":Ve,"../../../../samples/async-api-diffs/security/1.7-scheme-description-changed/before.yaml":Ue,"../../../../samples/async-api-diffs/security/1.8-scheme-type-changed/before.yaml":Ge,"../../../../samples/async-api-diffs/security/1.9-http-api-key-location-changed/before.yaml":qe,"../../../../samples/async-api-diffs/security/2.1-server-security-added/before.yaml":Ye,"../../../../samples/async-api-diffs/security/2.2-server-security-removed/before.yaml":Ze,"../../../../samples/async-api-diffs/security/2.3-server-alternative-added/before.yaml":$e,"../../../../samples/async-api-diffs/security/2.4-server-alternative-removed/before.yaml":tt,"../../../../samples/async-api-diffs/security/2.5-server-scheme-description-changed/before.yaml":rt,"../../../../samples/async-api-diffs/security/2.6-server-scheme-type-changed/before.yaml":at,"../../../../samples/async-api-diffs/security/2.7-server-with-security-added/before.yaml":st,"../../../../samples/async-api-diffs/security/2.8-server-with-security-removed/before.yaml":lt}),Object.assign({"../../../../samples/async-api-diffs/security/1.1-operation-security-added/after.yaml":dt,"../../../../samples/async-api-diffs/security/1.10-http-api-key-name-changed/after.yaml":pt,"../../../../samples/async-api-diffs/security/1.11-api-key-location-changed/after.yaml":ht,"../../../../samples/async-api-diffs/security/1.12-http-scheme-changed/after.yaml":_t,"../../../../samples/async-api-diffs/security/1.13-bearer-format-added/after.yaml":yt,"../../../../samples/async-api-diffs/security/1.14-bearer-format-removed/after.yaml":xt,"../../../../samples/async-api-diffs/security/1.15-openid-connect-url-changed/after.yaml":Ct,"../../../../samples/async-api-diffs/security/1.16-required-scope-added/after.yaml":Tt,"../../../../samples/async-api-diffs/security/1.17-required-scope-removed/after.yaml":Dt,"../../../../samples/async-api-diffs/security/1.18-oauth-flow-added/after.yaml":Ot,"../../../../samples/async-api-diffs/security/1.19-oauth-flow-removed/after.yaml":At,"../../../../samples/async-api-diffs/security/1.2-operation-security-removed/after.yaml":Mt,"../../../../samples/async-api-diffs/security/1.20-token-url-changed/after.yaml":Pt,"../../../../samples/async-api-diffs/security/1.21-refresh-url-added/after.yaml":It,"../../../../samples/async-api-diffs/security/1.22-refresh-url-removed/after.yaml":Rt,"../../../../samples/async-api-diffs/security/1.23-flow-scope-added/after.yaml":Bt,"../../../../samples/async-api-diffs/security/1.24-flow-scope-removed/after.yaml":Ht,"../../../../samples/async-api-diffs/security/1.25-flow-scope-description-changed/after.yaml":Wt,"../../../../samples/async-api-diffs/security/1.3-alternative-added/after.yaml":Kt,"../../../../samples/async-api-diffs/security/1.4-alternative-removed/after.yaml":Jt,"../../../../samples/async-api-diffs/security/1.5-scheme-description-added/after.yaml":Xt,"../../../../samples/async-api-diffs/security/1.6-scheme-description-removed/after.yaml":Qt,"../../../../samples/async-api-diffs/security/1.7-scheme-description-changed/after.yaml":en,"../../../../samples/async-api-diffs/security/1.8-scheme-type-changed/after.yaml":nn,"../../../../samples/async-api-diffs/security/1.9-http-api-key-location-changed/after.yaml":an,"../../../../samples/async-api-diffs/security/2.1-server-security-added/after.yaml":sn,"../../../../samples/async-api-diffs/security/2.2-server-security-removed/after.yaml":ln,"../../../../samples/async-api-diffs/security/2.3-server-alternative-added/after.yaml":dn,"../../../../samples/async-api-diffs/security/2.4-server-alternative-removed/after.yaml":pn,"../../../../samples/async-api-diffs/security/2.5-server-scheme-description-changed/after.yaml":hn,"../../../../samples/async-api-diffs/security/2.6-server-scheme-type-changed/after.yaml":_n,"../../../../samples/async-api-diffs/security/2.7-server-with-security-added/after.yaml":yn,"../../../../samples/async-api-diffs/security/2.8-server-with-security-removed/after.yaml":xn}))),Dn={title:`Async API Diffs Suite/Security Samples`,component:y,argTypes:de,args:fe},b=e=>{let t=En[e];if(!t)throw Error(`Sample case not found: ${e}`);return{name:e,args:{caseId:e,beforeYaml:t.beforeYaml,afterYaml:t.afterYaml}}},x=b(`1.1-operation-security-added`),S=b(`1.2-operation-security-removed`),C=b(`1.3-alternative-added`),w=b(`1.4-alternative-removed`),T=b(`1.5-scheme-description-added`),E=b(`1.6-scheme-description-removed`),D=b(`1.7-scheme-description-changed`),O=b(`1.8-scheme-type-changed`),k=b(`1.9-http-api-key-location-changed`),A=b(`1.10-http-api-key-name-changed`),j=b(`1.11-api-key-location-changed`),M=b(`1.12-http-scheme-changed`),N=b(`1.13-bearer-format-added`),P=b(`1.14-bearer-format-removed`),F=b(`1.15-openid-connect-url-changed`),I=b(`1.16-required-scope-added`),L=b(`1.17-required-scope-removed`),R=b(`1.18-oauth-flow-added`),z=b(`1.19-oauth-flow-removed`),B=b(`1.20-token-url-changed`),V=b(`1.21-refresh-url-added`),H=b(`1.22-refresh-url-removed`),U=b(`1.23-flow-scope-added`),W=b(`1.24-flow-scope-removed`),G=b(`1.25-flow-scope-description-changed`),K=b(`2.1-server-security-added`),q=b(`2.2-server-security-removed`),J=b(`2.3-server-alternative-added`),Y=b(`2.4-server-alternative-removed`),X=b(`2.5-server-scheme-description-changed`),Z=b(`2.6-server-scheme-type-changed`),Q=b(`2.7-server-with-security-added`),$=b(`2.8-server-with-security-removed`),x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`createCaseStory("1.1-operation-security-added")`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`createCaseStory("1.2-operation-security-removed")`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`createCaseStory("1.3-alternative-added")`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`createCaseStory("1.4-alternative-removed")`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`createCaseStory("1.5-scheme-description-added")`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`createCaseStory("1.6-scheme-description-removed")`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`createCaseStory("1.7-scheme-description-changed")`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`createCaseStory("1.8-scheme-type-changed")`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`createCaseStory("1.9-http-api-key-location-changed")`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`createCaseStory("1.10-http-api-key-name-changed")`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`createCaseStory("1.11-api-key-location-changed")`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`createCaseStory("1.12-http-scheme-changed")`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`createCaseStory("1.13-bearer-format-added")`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`createCaseStory("1.14-bearer-format-removed")`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`createCaseStory("1.15-openid-connect-url-changed")`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`createCaseStory("1.16-required-scope-added")`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`createCaseStory("1.17-required-scope-removed")`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`createCaseStory("1.18-oauth-flow-added")`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`createCaseStory("1.19-oauth-flow-removed")`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`createCaseStory("1.20-token-url-changed")`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`createCaseStory("1.21-refresh-url-added")`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`createCaseStory("1.22-refresh-url-removed")`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`createCaseStory("1.23-flow-scope-added")`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`createCaseStory("1.24-flow-scope-removed")`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`createCaseStory("1.25-flow-scope-description-changed")`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`createCaseStory("2.1-server-security-added")`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`createCaseStory("2.2-server-security-removed")`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`createCaseStory("2.3-server-alternative-added")`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`createCaseStory("2.4-server-alternative-removed")`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`createCaseStory("2.5-server-scheme-description-changed")`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`createCaseStory("2.6-server-scheme-type-changed")`,...Z.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`createCaseStory("2.7-server-with-security-added")`,...Q.parameters?.docs?.source}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`createCaseStory("2.8-server-with-security-removed")`,...$.parameters?.docs?.source}}},On=`Case_1_1_operation_security_added.Case_1_2_operation_security_removed.Case_1_3_alternative_added.Case_1_4_alternative_removed.Case_1_5_scheme_description_added.Case_1_6_scheme_description_removed.Case_1_7_scheme_description_changed.Case_1_8_scheme_type_changed.Case_1_9_http_api_key_location_changed.Case_1_10_http_api_key_name_changed.Case_1_11_api_key_location_changed.Case_1_12_http_scheme_changed.Case_1_13_bearer_format_added.Case_1_14_bearer_format_removed.Case_1_15_openid_connect_url_changed.Case_1_16_required_scope_added.Case_1_17_required_scope_removed.Case_1_18_oauth_flow_added.Case_1_19_oauth_flow_removed.Case_1_20_token_url_changed.Case_1_21_refresh_url_added.Case_1_22_refresh_url_removed.Case_1_23_flow_scope_added.Case_1_24_flow_scope_removed.Case_1_25_flow_scope_description_changed.Case_2_1_server_security_added.Case_2_2_server_security_removed.Case_2_3_server_alternative_added.Case_2_4_server_alternative_removed.Case_2_5_server_scheme_description_changed.Case_2_6_server_scheme_type_changed.Case_2_7_server_with_security_added.Case_2_8_server_with_security_removed`.split(`.`)})))()}kn();export{A as Case_1_10_http_api_key_name_changed,j as Case_1_11_api_key_location_changed,M as Case_1_12_http_scheme_changed,N as Case_1_13_bearer_format_added,P as Case_1_14_bearer_format_removed,F as Case_1_15_openid_connect_url_changed,I as Case_1_16_required_scope_added,L as Case_1_17_required_scope_removed,R as Case_1_18_oauth_flow_added,z as Case_1_19_oauth_flow_removed,x as Case_1_1_operation_security_added,B as Case_1_20_token_url_changed,V as Case_1_21_refresh_url_added,H as Case_1_22_refresh_url_removed,U as Case_1_23_flow_scope_added,W as Case_1_24_flow_scope_removed,G as Case_1_25_flow_scope_description_changed,S as Case_1_2_operation_security_removed,C as Case_1_3_alternative_added,w as Case_1_4_alternative_removed,T as Case_1_5_scheme_description_added,E as Case_1_6_scheme_description_removed,D as Case_1_7_scheme_description_changed,O as Case_1_8_scheme_type_changed,k as Case_1_9_http_api_key_location_changed,K as Case_2_1_server_security_added,q as Case_2_2_server_security_removed,J as Case_2_3_server_alternative_added,Y as Case_2_4_server_alternative_removed,X as Case_2_5_server_scheme_description_changed,Z as Case_2_6_server_scheme_type_changed,Q as Case_2_7_server_with_security_added,$ as Case_2_8_server_with_security_removed,On as __namedExportsOrder,Dn as default};