import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{a as t,i as ee,n as te,r as ne}from"./AsyncApiSecuritySampleStory-CwLm3xEU.js";var re;function ie(){return(ie=e((()=>{re=`asyncapi: 3.0.0
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
`})))()}var ae;function oe(){return(oe=e((()=>{ae=`asyncapi: 3.0.0
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
`})))()}var se;function ce(){return(ce=e((()=>{se=`asyncapi: 3.0.0
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
      - $ref: "#/components/securitySchemes/apiKeyPassword"
components:
  messages:
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
`})))()}var le;function ue(){return(ue=e((()=>{le=`asyncapi: 3.0.0
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
      - $ref: "#/components/securitySchemes/x509"
components:
  messages:
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
`})))()}var de;function fe(){return(fe=e((()=>{de=`asyncapi: 3.0.0
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
      - $ref: "#/components/securitySchemes/symmetric"
components:
  messages:
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
`})))()}var pe;function me(){return(me=e((()=>{pe=`asyncapi: 3.0.0
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
      - $ref: "#/components/securitySchemes/asymmetric"
components:
  messages:
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
`})))()}var he;function ge(){return(ge=e((()=>{he=`asyncapi: 3.0.0
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
`})))()}var _e;function ve(){return(ve=e((()=>{_e=`asyncapi: 3.0.0
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
      - $ref: "#/components/securitySchemes/queryKey"
components:
  messages:
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
`})))()}var ye;function be(){return(be=e((()=>{ye=`asyncapi: 3.0.0
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
      - $ref: "#/components/securitySchemes/cookieKey"
components:
  messages:
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
`})))()}var xe;function Se(){return(Se=e((()=>{xe=`asyncapi: 3.0.0
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
`})))()}var Ce;function we(){return(we=e((()=>{Ce=`asyncapi: 3.0.0
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
`})))()}var Te;function Ee(){return(Ee=e((()=>{Te=`asyncapi: 3.0.0
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
      - $ref: "#/components/securitySchemes/oauthImplicit"
components:
  messages:
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
`})))()}var De;function Oe(){return(Oe=e((()=>{De=`asyncapi: 3.0.0
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
      - $ref: "#/components/securitySchemes/oauthPassword"
components:
  messages:
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
`})))()}var n;function r(){return(r=e((()=>{n=`asyncapi: 3.0.0
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
      - $ref: "#/components/securitySchemes/oauthCode"
components:
  messages:
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
      - $ref: "#/components/securitySchemes/oauthSeveralFlows"
components:
  messages:
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
      - $ref: "#/components/securitySchemes/plain"
components:
  messages:
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
      - $ref: "#/components/securitySchemes/scram256"
components:
  messages:
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
      - $ref: "#/components/securitySchemes/scram512"
components:
  messages:
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
      - $ref: "#/components/securitySchemes/gssapi"
components:
  messages:
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
`})))()}var v;function y(){return(y=e((()=>{v=`asyncapi: 3.0.0
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
      description: JWT issued by the **events** identity provider.
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
`})))()}var b;function x(){return(x=e((()=>{b=`asyncapi: 3.0.0
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
      - $ref: "#/components/securitySchemes/scram512"
components:
  messages:
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
`})))()}var S;function C(){return(C=e((()=>{S=`asyncapi: 3.0.0
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
      - type: http
        scheme: basic
        description: Inline basic authentication.
components:
  messages:
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
`})))()}var w;function T(){return(T=e((()=>{w=`asyncapi: 3.0.0
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
`})))()}var E;function ke(){return(ke=e((()=>{E=`asyncapi: 3.0.0
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
`})))()}var Ae,je,D,O,k,A,j,M,N,P,F,I,L,R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q,$,Me;function Ne(){return(Ne=e((()=>{ie(),oe(),ce(),ue(),fe(),me(),ge(),ve(),be(),Se(),we(),Ee(),Oe(),r(),a(),s(),l(),d(),p(),h(),_(),y(),x(),C(),T(),ke(),t(),Ae=Object.fromEntries(Object.entries(Object.assign({"../../../../samples/async-api/security/01-user-password/document.yaml":re,"../../../../samples/async-api/security/02-api-key-in-user/document.yaml":ae,"../../../../samples/async-api/security/03-api-key-in-password/document.yaml":se,"../../../../samples/async-api/security/04-x509/document.yaml":le,"../../../../samples/async-api/security/05-symmetric-encryption/document.yaml":de,"../../../../samples/async-api/security/06-asymmetric-encryption/document.yaml":pe,"../../../../samples/async-api/security/07-http-api-key-header/document.yaml":he,"../../../../samples/async-api/security/08-http-api-key-query/document.yaml":_e,"../../../../samples/async-api/security/09-http-api-key-cookie/document.yaml":ye,"../../../../samples/async-api/security/10-http-basic/document.yaml":xe,"../../../../samples/async-api/security/11-http-bearer-format/document.yaml":Ce,"../../../../samples/async-api/security/12-oauth2-implicit-required-scope/document.yaml":Te,"../../../../samples/async-api/security/13-oauth2-password-no-required-scopes/document.yaml":De,"../../../../samples/async-api/security/14-oauth2-client-credentials-required-scope/document.yaml":n,"../../../../samples/async-api/security/15-oauth2-authorization-code-all-urls/document.yaml":i,"../../../../samples/async-api/security/16-oauth2-several-flows-undeclared-scope/document.yaml":o,"../../../../samples/async-api/security/17-openid-connect-required-scopes/document.yaml":c,"../../../../samples/async-api/security/18-sasl-plain/document.yaml":u,"../../../../samples/async-api/security/19-scram-sha-256/document.yaml":f,"../../../../samples/async-api/security/20-scram-sha-512/document.yaml":m,"../../../../samples/async-api/security/21-gssapi/document.yaml":g,"../../../../samples/async-api/security/22-scheme-description/document.yaml":v,"../../../../samples/async-api/security/23-several-alternatives/document.yaml":b,"../../../../samples/async-api/security/24-inline-scheme/document.yaml":S,"../../../../samples/async-api/security/25-server-security/document.yaml":w,"../../../../samples/async-api/security/26-operation-and-server-security/document.yaml":E})).map(([e,t])=>[e.split(`/`).at(-2)??e,t])),je={title:`Async API Suite/Security`,component:ee,argTypes:te,args:ne},D=e=>{let t=Ae[e];if(!t)throw Error(`Sample case not found: ${e}`);return{name:e,args:{caseId:e,yaml:t}}},O=D(`01-user-password`),k=D(`02-api-key-in-user`),A=D(`03-api-key-in-password`),j=D(`04-x509`),M=D(`05-symmetric-encryption`),N=D(`06-asymmetric-encryption`),P=D(`07-http-api-key-header`),F=D(`08-http-api-key-query`),I=D(`09-http-api-key-cookie`),L=D(`10-http-basic`),R=D(`11-http-bearer-format`),z=D(`12-oauth2-implicit-required-scope`),B=D(`13-oauth2-password-no-required-scopes`),V=D(`14-oauth2-client-credentials-required-scope`),H=D(`15-oauth2-authorization-code-all-urls`),U=D(`16-oauth2-several-flows-undeclared-scope`),W=D(`17-openid-connect-required-scopes`),G=D(`18-sasl-plain`),K=D(`19-scram-sha-256`),q=D(`20-scram-sha-512`),J=D(`21-gssapi`),Y=D(`22-scheme-description`),X=D(`23-several-alternatives`),Z=D(`24-inline-scheme`),Q=D(`25-server-security`),$=D(`26-operation-and-server-security`),O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`createCaseStory("01-user-password")`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`createCaseStory("02-api-key-in-user")`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`createCaseStory("03-api-key-in-password")`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`createCaseStory("04-x509")`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`createCaseStory("05-symmetric-encryption")`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`createCaseStory("06-asymmetric-encryption")`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`createCaseStory("07-http-api-key-header")`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`createCaseStory("08-http-api-key-query")`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`createCaseStory("09-http-api-key-cookie")`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`createCaseStory("10-http-basic")`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`createCaseStory("11-http-bearer-format")`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`createCaseStory("12-oauth2-implicit-required-scope")`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`createCaseStory("13-oauth2-password-no-required-scopes")`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`createCaseStory("14-oauth2-client-credentials-required-scope")`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`createCaseStory("15-oauth2-authorization-code-all-urls")`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`createCaseStory("16-oauth2-several-flows-undeclared-scope")`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`createCaseStory("17-openid-connect-required-scopes")`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`createCaseStory("18-sasl-plain")`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`createCaseStory("19-scram-sha-256")`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`createCaseStory("20-scram-sha-512")`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`createCaseStory("21-gssapi")`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`createCaseStory("22-scheme-description")`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`createCaseStory("23-several-alternatives")`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`createCaseStory("24-inline-scheme")`,...Z.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`createCaseStory("25-server-security")`,...Q.parameters?.docs?.source}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`createCaseStory("26-operation-and-server-security")`,...$.parameters?.docs?.source}}},Me=`Case_01_user_password.Case_02_api_key_in_user.Case_03_api_key_in_password.Case_04_x509.Case_05_symmetric_encryption.Case_06_asymmetric_encryption.Case_07_http_api_key_header.Case_08_http_api_key_query.Case_09_http_api_key_cookie.Case_10_http_basic.Case_11_http_bearer_format.Case_12_oauth2_implicit_required_scope.Case_13_oauth2_password_no_required_scopes.Case_14_oauth2_client_credentials_required_scope.Case_15_oauth2_authorization_code_all_urls.Case_16_oauth2_several_flows_undeclared_scope.Case_17_openid_connect_required_scopes.Case_18_sasl_plain.Case_19_scram_sha_256.Case_20_scram_sha_512.Case_21_gssapi.Case_22_scheme_description.Case_23_several_alternatives.Case_24_inline_scheme.Case_25_server_security.Case_26_operation_and_server_security`.split(`.`)})))()}Ne();export{O as Case_01_user_password,k as Case_02_api_key_in_user,A as Case_03_api_key_in_password,j as Case_04_x509,M as Case_05_symmetric_encryption,N as Case_06_asymmetric_encryption,P as Case_07_http_api_key_header,F as Case_08_http_api_key_query,I as Case_09_http_api_key_cookie,L as Case_10_http_basic,R as Case_11_http_bearer_format,z as Case_12_oauth2_implicit_required_scope,B as Case_13_oauth2_password_no_required_scopes,V as Case_14_oauth2_client_credentials_required_scope,H as Case_15_oauth2_authorization_code_all_urls,U as Case_16_oauth2_several_flows_undeclared_scope,W as Case_17_openid_connect_required_scopes,G as Case_18_sasl_plain,K as Case_19_scram_sha_256,q as Case_20_scram_sha_512,J as Case_21_gssapi,Y as Case_22_scheme_description,X as Case_23_several_alternatives,Z as Case_24_inline_scheme,Q as Case_25_server_security,$ as Case_26_operation_and_server_security,Me as __namedExportsOrder,je as default};