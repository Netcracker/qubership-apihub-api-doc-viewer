import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{i as t,r as ee}from"./sample-cases-DDoAHGgD.js";import{n as te,t as ne}from"./diffs-samples-cases-Bp0vvMWA.js";import{n as re,r as ie,t as ae}from"./openapi-story-args-BDyYngoO.js";import{n as oe,t as se}from"./OpenApiDiffSampleStory-u6TV2Eia.js";var ce;function le(){return(le=e((()=>{ce=`openapi: 3.0.3
info:
  title: Orders
  version: 1.0.0
security:
  - api_key: []
paths:
  /orders/{orderId}:
    post:
      operationId: updateOrder
      summary: Update an order
      description: Replaces the order.
      x-rate-limit: 100
      security:
        - oauth:
            - orders:write
      parameters:
        - name: orderId
          in: path
          required: true
          schema:
            type: string
        - name: dryRun
          in: query
          schema:
            type: boolean
        - name: expand
          in: query
          schema:
            type: string
        - name: X-Request-Id
          in: header
          required: true
          schema:
            type: string
            format: uuid
        - name: X-Trace
          in: header
          schema:
            type: string
        - name: session
          in: cookie
          schema:
            type: string
        - name: theme
          in: cookie
          schema:
            type: string
      requestBody:
        description: New order state.
        required: true
        content:
          application/json:
            schema:
              type: object
              required:
                - status
              properties:
                status:
                  type: string
                  enum:
                    - new
                    - paid
                note:
                  type: string
      responses:
        "200":
          description: Updated order.
          headers:
            ETag:
              schema:
                type: string
            X-Request-Id:
              schema:
                type: string
                format: uuid
          content:
            application/json:
              schema:
                type: object
                properties:
                  id:
                    type: string
                  status:
                    type: string
        "400":
          description: Invalid request.
          content:
            application/problem+json:
              schema:
                type: object
                properties:
                  title:
                    type: string
components:
  securitySchemes:
    api_key:
      type: apiKey
      in: header
      name: X-API-Key
    basic:
      type: http
      scheme: basic
    bearer:
      type: http
      scheme: bearer
      bearerFormat: JWT
    oauth:
      type: oauth2
      flows:
        clientCredentials:
          tokenUrl: https://auth.example.com/token
          scopes:
            orders:read: Read orders
            orders:write: Modify orders
    oidc:
      type: openIdConnect
      openIdConnectUrl: https://auth.example.com/.well-known/openid-configuration
`})))()}var ue;function de(){return(de=e((()=>{ue=`openapi: 3.0.3
info:
  title: Orders
  version: 1.0.0
security:
  - api_key: []
paths:
  /orders/{orderId}:
    post:
      operationId: updateOrder
      summary: Update an order
      description: Replaces the order.
      x-rate-limit: 100
      security:
        - oauth:
            - orders:write
      parameters:
        - name: orderId
          in: path
          required: true
          schema:
            type: string
        - name: dryRun
          in: query
          schema:
            type: boolean
        - name: expand
          in: query
          schema:
            type: string
        - name: X-Request-Id
          in: header
          required: true
          schema:
            type: string
            format: uuid
        - name: X-Trace
          in: header
          schema:
            type: string
        - name: session
          in: cookie
          schema:
            type: string
        - name: theme
          in: cookie
          schema:
            type: string
      requestBody:
        description: New order state.
        required: true
        content:
          application/json:
            schema:
              type: object
              required:
                - status
              properties:
                status:
                  type: string
                  enum:
                    - new
                    - paid
                note:
                  type: string
      responses:
        "200":
          description: Updated order.
          headers:
            ETag:
              schema:
                type: string
            X-Request-Id:
              schema:
                type: string
                format: uuid
            X-Rate-Limit-Remaining:
              schema:
                type: string
          content:
            application/json:
              schema:
                type: object
                properties:
                  id:
                    type: string
                  status:
                    type: string
        "400":
          description: Invalid request.
          content:
            application/problem+json:
              schema:
                type: object
                properties:
                  title:
                    type: string
components:
  securitySchemes:
    api_key:
      type: apiKey
      in: header
      name: X-API-Key
    basic:
      type: http
      scheme: basic
    bearer:
      type: http
      scheme: bearer
      bearerFormat: JWT
    oauth:
      type: oauth2
      flows:
        clientCredentials:
          tokenUrl: https://auth.example.com/token
          scopes:
            orders:read: Read orders
            orders:write: Modify orders
    oidc:
      type: openIdConnect
      openIdConnectUrl: https://auth.example.com/.well-known/openid-configuration
`})))()}var fe;function pe(){return(pe=e((()=>{fe=`openapi: 3.0.3
info:
  title: Orders
  version: 1.0.0
security:
  - api_key: []
paths:
  /orders/{orderId}:
    post:
      operationId: updateOrder
      summary: Update an order
      description: Replaces the order.
      x-rate-limit: 100
      security:
        - oauth:
            - orders:write
      parameters:
        - name: orderId
          in: path
          required: true
          schema:
            type: string
        - name: dryRun
          in: query
          schema:
            type: boolean
        - name: expand
          in: query
          schema:
            type: string
        - name: X-Request-Id
          in: header
          required: true
          schema:
            type: string
            format: uuid
        - name: X-Trace
          in: header
          schema:
            type: string
        - name: session
          in: cookie
          schema:
            type: string
        - name: theme
          in: cookie
          schema:
            type: string
      requestBody:
        description: New order state.
        required: true
        content:
          application/json:
            schema:
              type: object
              required:
                - status
              properties:
                status:
                  type: string
                  enum:
                    - new
                    - paid
                note:
                  type: string
      responses:
        "200":
          description: Updated order.
          headers:
            ETag:
              schema:
                type: string
            X-Request-Id:
              schema:
                type: string
                format: uuid
          content:
            application/json:
              schema:
                type: object
                properties:
                  id:
                    type: string
                  status:
                    type: string
        "400":
          description: Invalid request.
          content:
            application/problem+json:
              schema:
                type: object
                properties:
                  title:
                    type: string
components:
  securitySchemes:
    api_key:
      type: apiKey
      in: header
      name: X-API-Key
    basic:
      type: http
      scheme: basic
    bearer:
      type: http
      scheme: bearer
      bearerFormat: JWT
    oauth:
      type: oauth2
      flows:
        clientCredentials:
          tokenUrl: https://auth.example.com/token
          scopes:
            orders:read: Read orders
            orders:write: Modify orders
    oidc:
      type: openIdConnect
      openIdConnectUrl: https://auth.example.com/.well-known/openid-configuration
`})))()}var me;function he(){return(he=e((()=>{me=`openapi: 3.0.3
info:
  title: Orders
  version: 1.0.0
security:
  - api_key: []
paths:
  /orders/{orderId}:
    post:
      operationId: updateOrder
      summary: Update an order
      description: Replaces the order.
      x-rate-limit: 100
      security:
        - oauth:
            - orders:write
      parameters:
        - name: orderId
          in: path
          required: true
          schema:
            type: string
        - name: dryRun
          in: query
          schema:
            type: boolean
        - name: expand
          in: query
          schema:
            type: string
        - name: X-Request-Id
          in: header
          required: true
          schema:
            type: string
            format: uuid
        - name: X-Trace
          in: header
          schema:
            type: string
        - name: session
          in: cookie
          schema:
            type: string
        - name: theme
          in: cookie
          schema:
            type: string
      requestBody:
        description: New order state.
        required: true
        content:
          application/json:
            schema:
              type: object
              required:
                - status
              properties:
                status:
                  type: string
                  enum:
                    - new
                    - paid
                note:
                  type: string
      responses:
        "200":
          description: Updated order.
          headers:
            ETag:
              schema:
                type: string
            X-Request-Id:
              schema:
                type: string
                format: uuid
          content:
            application/json:
              schema:
                type: object
                properties:
                  id:
                    type: string
                  status:
                    type: string
        "400":
          description: Invalid request.
          content:
            application/problem+json:
              schema:
                type: object
                properties:
                  title:
                    type: string
components:
  securitySchemes:
    api_key:
      type: apiKey
      in: header
      name: X-API-Key
    basic:
      type: http
      scheme: basic
    bearer:
      type: http
      scheme: bearer
      bearerFormat: JWT
    oauth:
      type: oauth2
      flows:
        clientCredentials:
          tokenUrl: https://auth.example.com/token
          scopes:
            orders:read: Read orders
            orders:write: Modify orders
    oidc:
      type: openIdConnect
      openIdConnectUrl: https://auth.example.com/.well-known/openid-configuration
`})))()}var ge;function _e(){return(_e=e((()=>{ge=`openapi: 3.0.3
info:
  title: Orders
  version: 1.0.0
security:
  - api_key: []
paths:
  /orders/{orderId}:
    post:
      operationId: updateOrder
      summary: Update an order
      description: Replaces the order.
      x-rate-limit: 100
      security:
        - oauth:
            - orders:write
      parameters:
        - name: orderId
          in: path
          required: true
          schema:
            type: string
        - name: dryRun
          in: query
          schema:
            type: boolean
        - name: expand
          in: query
          schema:
            type: string
        - name: X-Request-Id
          in: header
          required: true
          schema:
            type: string
            format: uuid
        - name: X-Trace
          in: header
          schema:
            type: string
        - name: session
          in: cookie
          schema:
            type: string
        - name: theme
          in: cookie
          schema:
            type: string
      requestBody:
        description: New order state.
        required: true
        content:
          application/json:
            schema:
              type: object
              required:
                - status
              properties:
                status:
                  type: string
                  enum:
                    - new
                    - paid
                note:
                  type: string
      responses:
        "200":
          description: Updated order.
          headers:
            ETag:
              schema:
                type: string
              required: true
            X-Request-Id:
              schema:
                type: string
                format: uuid
          content:
            application/json:
              schema:
                type: object
                properties:
                  id:
                    type: string
                  status:
                    type: string
        "400":
          description: Invalid request.
          content:
            application/problem+json:
              schema:
                type: object
                properties:
                  title:
                    type: string
components:
  securitySchemes:
    api_key:
      type: apiKey
      in: header
      name: X-API-Key
    basic:
      type: http
      scheme: basic
    bearer:
      type: http
      scheme: bearer
      bearerFormat: JWT
    oauth:
      type: oauth2
      flows:
        clientCredentials:
          tokenUrl: https://auth.example.com/token
          scopes:
            orders:read: Read orders
            orders:write: Modify orders
    oidc:
      type: openIdConnect
      openIdConnectUrl: https://auth.example.com/.well-known/openid-configuration
`})))()}var ve;function ye(){return(ye=e((()=>{ve=`openapi: 3.0.3
info:
  title: Orders
  version: 1.0.0
security:
  - api_key: []
paths:
  /orders/{orderId}:
    post:
      operationId: updateOrder
      summary: Update an order
      description: Replaces the order.
      x-rate-limit: 100
      security:
        - oauth:
            - orders:write
      parameters:
        - name: orderId
          in: path
          required: true
          schema:
            type: string
        - name: dryRun
          in: query
          schema:
            type: boolean
        - name: expand
          in: query
          schema:
            type: string
        - name: X-Request-Id
          in: header
          required: true
          schema:
            type: string
            format: uuid
        - name: X-Trace
          in: header
          schema:
            type: string
        - name: session
          in: cookie
          schema:
            type: string
        - name: theme
          in: cookie
          schema:
            type: string
      requestBody:
        description: New order state.
        required: true
        content:
          application/json:
            schema:
              type: object
              required:
                - status
              properties:
                status:
                  type: string
                  enum:
                    - new
                    - paid
                note:
                  type: string
      responses:
        "200":
          description: Updated order.
          headers:
            ETag:
              schema:
                type: string
            X-Request-Id:
              schema:
                type: string
                format: uuid
          content:
            application/json:
              schema:
                type: object
                properties:
                  id:
                    type: string
                  status:
                    type: string
        "400":
          description: Invalid request.
          content:
            application/problem+json:
              schema:
                type: object
                properties:
                  title:
                    type: string
components:
  securitySchemes:
    api_key:
      type: apiKey
      in: header
      name: X-API-Key
    basic:
      type: http
      scheme: basic
    bearer:
      type: http
      scheme: bearer
      bearerFormat: JWT
    oauth:
      type: oauth2
      flows:
        clientCredentials:
          tokenUrl: https://auth.example.com/token
          scopes:
            orders:read: Read orders
            orders:write: Modify orders
    oidc:
      type: openIdConnect
      openIdConnectUrl: https://auth.example.com/.well-known/openid-configuration
`})))()}var be;function xe(){return(xe=e((()=>{be=`openapi: 3.0.3
info:
  title: Orders
  version: 1.0.0
security:
  - api_key: []
paths:
  /orders/{orderId}:
    post:
      operationId: updateOrder
      summary: Update an order
      description: Replaces the order.
      x-rate-limit: 100
      security:
        - oauth:
            - orders:write
      parameters:
        - name: orderId
          in: path
          required: true
          schema:
            type: string
        - name: dryRun
          in: query
          schema:
            type: boolean
        - name: expand
          in: query
          schema:
            type: string
        - name: X-Request-Id
          in: header
          required: true
          schema:
            type: string
            format: uuid
        - name: X-Trace
          in: header
          schema:
            type: string
        - name: session
          in: cookie
          schema:
            type: string
        - name: theme
          in: cookie
          schema:
            type: string
      requestBody:
        description: New order state.
        required: true
        content:
          application/json:
            schema:
              type: object
              required:
                - status
              properties:
                status:
                  type: string
                  enum:
                    - new
                    - paid
                note:
                  type: string
      responses:
        "200":
          description: Updated order.
          headers:
            ETag:
              schema:
                type: string
              description: Entry text v1.
            X-Request-Id:
              schema:
                type: string
                format: uuid
          content:
            application/json:
              schema:
                type: object
                properties:
                  id:
                    type: string
                  status:
                    type: string
        "400":
          description: Invalid request.
          content:
            application/problem+json:
              schema:
                type: object
                properties:
                  title:
                    type: string
components:
  securitySchemes:
    api_key:
      type: apiKey
      in: header
      name: X-API-Key
    basic:
      type: http
      scheme: basic
    bearer:
      type: http
      scheme: bearer
      bearerFormat: JWT
    oauth:
      type: oauth2
      flows:
        clientCredentials:
          tokenUrl: https://auth.example.com/token
          scopes:
            orders:read: Read orders
            orders:write: Modify orders
    oidc:
      type: openIdConnect
      openIdConnectUrl: https://auth.example.com/.well-known/openid-configuration
`})))()}var Se;function Ce(){return(Ce=e((()=>{Se=`openapi: 3.0.3
info:
  title: Orders
  version: 1.0.0
security:
  - api_key: []
paths:
  /orders/{orderId}:
    post:
      operationId: updateOrder
      summary: Update an order
      description: Replaces the order.
      x-rate-limit: 100
      security:
        - oauth:
            - orders:write
      parameters:
        - name: orderId
          in: path
          required: true
          schema:
            type: string
        - name: dryRun
          in: query
          schema:
            type: boolean
        - name: expand
          in: query
          schema:
            type: string
        - name: X-Request-Id
          in: header
          required: true
          schema:
            type: string
            format: uuid
        - name: X-Trace
          in: header
          schema:
            type: string
        - name: session
          in: cookie
          schema:
            type: string
        - name: theme
          in: cookie
          schema:
            type: string
      requestBody:
        description: New order state.
        required: true
        content:
          application/json:
            schema:
              type: object
              required:
                - status
              properties:
                status:
                  type: string
                  enum:
                    - new
                    - paid
                note:
                  type: string
      responses:
        "200":
          description: Updated order.
          headers:
            ETag:
              schema:
                type: string
              description: Entry text v1.
            X-Request-Id:
              schema:
                type: string
                format: uuid
          content:
            application/json:
              schema:
                type: object
                properties:
                  id:
                    type: string
                  status:
                    type: string
        "400":
          description: Invalid request.
          content:
            application/problem+json:
              schema:
                type: object
                properties:
                  title:
                    type: string
components:
  securitySchemes:
    api_key:
      type: apiKey
      in: header
      name: X-API-Key
    basic:
      type: http
      scheme: basic
    bearer:
      type: http
      scheme: bearer
      bearerFormat: JWT
    oauth:
      type: oauth2
      flows:
        clientCredentials:
          tokenUrl: https://auth.example.com/token
          scopes:
            orders:read: Read orders
            orders:write: Modify orders
    oidc:
      type: openIdConnect
      openIdConnectUrl: https://auth.example.com/.well-known/openid-configuration
`})))()}var we;function Te(){return(Te=e((()=>{we=`openapi: 3.0.3
info:
  title: Orders
  version: 1.0.0
security:
  - api_key: []
paths:
  /orders/{orderId}:
    post:
      operationId: updateOrder
      summary: Update an order
      description: Replaces the order.
      x-rate-limit: 100
      security:
        - oauth:
            - orders:write
      parameters:
        - name: orderId
          in: path
          required: true
          schema:
            type: string
        - name: dryRun
          in: query
          schema:
            type: boolean
        - name: expand
          in: query
          schema:
            type: string
        - name: X-Request-Id
          in: header
          required: true
          schema:
            type: string
            format: uuid
        - name: X-Trace
          in: header
          schema:
            type: string
        - name: session
          in: cookie
          schema:
            type: string
        - name: theme
          in: cookie
          schema:
            type: string
      requestBody:
        description: New order state.
        required: true
        content:
          application/json:
            schema:
              type: object
              required:
                - status
              properties:
                status:
                  type: string
                  enum:
                    - new
                    - paid
                note:
                  type: string
      responses:
        "200":
          description: Updated order.
          headers:
            ETag:
              schema:
                type: string
            X-Request-Id:
              schema:
                type: string
                format: uuid
          content:
            application/json:
              schema:
                type: object
                properties:
                  id:
                    type: string
                  status:
                    type: string
        "400":
          description: Invalid request.
          content:
            application/problem+json:
              schema:
                type: object
                properties:
                  title:
                    type: string
components:
  securitySchemes:
    api_key:
      type: apiKey
      in: header
      name: X-API-Key
    basic:
      type: http
      scheme: basic
    bearer:
      type: http
      scheme: bearer
      bearerFormat: JWT
    oauth:
      type: oauth2
      flows:
        clientCredentials:
          tokenUrl: https://auth.example.com/token
          scopes:
            orders:read: Read orders
            orders:write: Modify orders
    oidc:
      type: openIdConnect
      openIdConnectUrl: https://auth.example.com/.well-known/openid-configuration
`})))()}var Ee;function De(){return(De=e((()=>{Ee=`openapi: 3.0.3
info:
  title: Orders
  version: 1.0.0
security:
  - api_key: []
paths:
  /orders/{orderId}:
    post:
      operationId: updateOrder
      summary: Update an order
      description: Replaces the order.
      x-rate-limit: 100
      security:
        - oauth:
            - orders:write
      parameters:
        - name: orderId
          in: path
          required: true
          schema:
            type: string
        - name: dryRun
          in: query
          schema:
            type: boolean
        - name: expand
          in: query
          schema:
            type: string
        - name: X-Request-Id
          in: header
          required: true
          schema:
            type: string
            format: uuid
        - name: X-Trace
          in: header
          schema:
            type: string
        - name: session
          in: cookie
          schema:
            type: string
        - name: theme
          in: cookie
          schema:
            type: string
      requestBody:
        description: New order state.
        required: true
        content:
          application/json:
            schema:
              type: object
              required:
                - status
              properties:
                status:
                  type: string
                  enum:
                    - new
                    - paid
                note:
                  type: string
      responses:
        "200":
          description: Updated order.
          headers:
            ETag:
              schema:
                type: string
              deprecated: true
            X-Request-Id:
              schema:
                type: string
                format: uuid
          content:
            application/json:
              schema:
                type: object
                properties:
                  id:
                    type: string
                  status:
                    type: string
        "400":
          description: Invalid request.
          content:
            application/problem+json:
              schema:
                type: object
                properties:
                  title:
                    type: string
components:
  securitySchemes:
    api_key:
      type: apiKey
      in: header
      name: X-API-Key
    basic:
      type: http
      scheme: basic
    bearer:
      type: http
      scheme: bearer
      bearerFormat: JWT
    oauth:
      type: oauth2
      flows:
        clientCredentials:
          tokenUrl: https://auth.example.com/token
          scopes:
            orders:read: Read orders
            orders:write: Modify orders
    oidc:
      type: openIdConnect
      openIdConnectUrl: https://auth.example.com/.well-known/openid-configuration
`})))()}var Oe;function n(){return(n=e((()=>{Oe=`openapi: 3.0.3
info:
  title: Orders
  version: 1.0.0
security:
  - api_key: []
paths:
  /orders/{orderId}:
    post:
      operationId: updateOrder
      summary: Update an order
      description: Replaces the order.
      x-rate-limit: 100
      security:
        - oauth:
            - orders:write
      parameters:
        - name: orderId
          in: path
          required: true
          schema:
            type: string
        - name: dryRun
          in: query
          schema:
            type: boolean
        - name: expand
          in: query
          schema:
            type: string
        - name: X-Request-Id
          in: header
          required: true
          schema:
            type: string
            format: uuid
        - name: X-Trace
          in: header
          schema:
            type: string
        - name: session
          in: cookie
          schema:
            type: string
        - name: theme
          in: cookie
          schema:
            type: string
      requestBody:
        description: New order state.
        required: true
        content:
          application/json:
            schema:
              type: object
              required:
                - status
              properties:
                status:
                  type: string
                  enum:
                    - new
                    - paid
                note:
                  type: string
      responses:
        "200":
          description: Updated order.
          headers:
            ETag:
              schema:
                type: boolean
                description: Boolean flag.
            X-Request-Id:
              schema:
                type: string
                format: uuid
          content:
            application/json:
              schema:
                type: object
                properties:
                  id:
                    type: string
                  status:
                    type: string
        "400":
          description: Invalid request.
          content:
            application/problem+json:
              schema:
                type: object
                properties:
                  title:
                    type: string
components:
  securitySchemes:
    api_key:
      type: apiKey
      in: header
      name: X-API-Key
    basic:
      type: http
      scheme: basic
    bearer:
      type: http
      scheme: bearer
      bearerFormat: JWT
    oauth:
      type: oauth2
      flows:
        clientCredentials:
          tokenUrl: https://auth.example.com/token
          scopes:
            orders:read: Read orders
            orders:write: Modify orders
    oidc:
      type: openIdConnect
      openIdConnectUrl: https://auth.example.com/.well-known/openid-configuration
`})))()}var r;function i(){return(i=e((()=>{r=`openapi: 3.0.3
info:
  title: Orders
  version: 1.0.0
security:
  - api_key: []
paths:
  /orders/{orderId}:
    post:
      operationId: updateOrder
      summary: Update an order
      description: Replaces the order.
      x-rate-limit: 100
      security:
        - oauth:
            - orders:write
      parameters:
        - name: orderId
          in: path
          required: true
          schema:
            type: string
        - name: dryRun
          in: query
          schema:
            type: boolean
        - name: expand
          in: query
          schema:
            type: string
        - name: X-Request-Id
          in: header
          required: true
          schema:
            type: string
            format: uuid
        - name: X-Trace
          in: header
          schema:
            type: string
        - name: session
          in: cookie
          schema:
            type: string
        - name: theme
          in: cookie
          schema:
            type: string
      requestBody:
        description: New order state.
        required: true
        content:
          application/json:
            schema:
              type: object
              required:
                - status
              properties:
                status:
                  type: string
                  enum:
                    - new
                    - paid
                note:
                  type: string
      responses:
        "200":
          description: Updated order.
          headers:
            ETag:
              content:
                application/json:
                  schema:
                    type: object
                    description: JSON options.
                    properties:
                      strict:
                        type: boolean
            X-Request-Id:
              schema:
                type: string
                format: uuid
          content:
            application/json:
              schema:
                type: object
                properties:
                  id:
                    type: string
                  status:
                    type: string
        "400":
          description: Invalid request.
          content:
            application/problem+json:
              schema:
                type: object
                properties:
                  title:
                    type: string
components:
  securitySchemes:
    api_key:
      type: apiKey
      in: header
      name: X-API-Key
    basic:
      type: http
      scheme: basic
    bearer:
      type: http
      scheme: bearer
      bearerFormat: JWT
    oauth:
      type: oauth2
      flows:
        clientCredentials:
          tokenUrl: https://auth.example.com/token
          scopes:
            orders:read: Read orders
            orders:write: Modify orders
    oidc:
      type: openIdConnect
      openIdConnectUrl: https://auth.example.com/.well-known/openid-configuration
`})))()}var a;function o(){return(o=e((()=>{a=`openapi: 3.0.3
info:
  title: Orders
  version: 1.0.0
security:
  - api_key: []
paths:
  /orders/{orderId}:
    post:
      operationId: updateOrder
      summary: Update an order
      description: Replaces the order.
      x-rate-limit: 100
      security:
        - oauth:
            - orders:write
      parameters:
        - name: orderId
          in: path
          required: true
          schema:
            type: string
        - name: dryRun
          in: query
          schema:
            type: boolean
        - name: expand
          in: query
          schema:
            type: string
        - name: X-Request-Id
          in: header
          required: true
          schema:
            type: string
            format: uuid
        - name: X-Trace
          in: header
          schema:
            type: string
        - name: session
          in: cookie
          schema:
            type: string
        - name: theme
          in: cookie
          schema:
            type: string
      requestBody:
        description: New order state.
        required: true
        content:
          application/json:
            schema:
              type: object
              required:
                - status
              properties:
                status:
                  type: string
                  enum:
                    - new
                    - paid
                note:
                  type: string
      responses:
        "200":
          description: Updated order.
          headers:
            ETag:
              content:
                application/json:
                  schema:
                    type: object
                    description: JSON options.
                    properties:
                      strict:
                        type: boolean
            X-Request-Id:
              schema:
                type: string
                format: uuid
          content:
            application/json:
              schema:
                type: object
                properties:
                  id:
                    type: string
                  status:
                    type: string
        "400":
          description: Invalid request.
          content:
            application/problem+json:
              schema:
                type: object
                properties:
                  title:
                    type: string
components:
  securitySchemes:
    api_key:
      type: apiKey
      in: header
      name: X-API-Key
    basic:
      type: http
      scheme: basic
    bearer:
      type: http
      scheme: bearer
      bearerFormat: JWT
    oauth:
      type: oauth2
      flows:
        clientCredentials:
          tokenUrl: https://auth.example.com/token
          scopes:
            orders:read: Read orders
            orders:write: Modify orders
    oidc:
      type: openIdConnect
      openIdConnectUrl: https://auth.example.com/.well-known/openid-configuration
`})))()}var s;function c(){return(c=e((()=>{s=`openapi: 3.0.3
info:
  title: Orders
  version: 1.0.0
security:
  - api_key: []
paths:
  /orders/{orderId}:
    post:
      operationId: updateOrder
      summary: Update an order
      description: Replaces the order.
      x-rate-limit: 100
      security:
        - oauth:
            - orders:write
      parameters:
        - name: orderId
          in: path
          required: true
          schema:
            type: string
        - name: dryRun
          in: query
          schema:
            type: boolean
        - name: expand
          in: query
          schema:
            type: string
        - name: X-Request-Id
          in: header
          required: true
          schema:
            type: string
            format: uuid
        - name: X-Trace
          in: header
          schema:
            type: string
        - name: session
          in: cookie
          schema:
            type: string
        - name: theme
          in: cookie
          schema:
            type: string
      requestBody:
        description: New order state.
        required: true
        content:
          application/json:
            schema:
              type: object
              required:
                - status
              properties:
                status:
                  type: string
                  enum:
                    - new
                    - paid
                note:
                  type: string
      responses:
        "200":
          description: Updated order.
          headers:
            ETag:
              schema:
                type: string
            X-Request-Id:
              schema:
                type: string
                format: uuid
          content:
            application/json:
              schema:
                type: object
                properties:
                  id:
                    type: string
                  status:
                    type: string
        "400":
          description: Invalid request.
          content:
            application/problem+json:
              schema:
                type: object
                properties:
                  title:
                    type: string
components:
  securitySchemes:
    api_key:
      type: apiKey
      in: header
      name: X-API-Key
    basic:
      type: http
      scheme: basic
    bearer:
      type: http
      scheme: bearer
      bearerFormat: JWT
    oauth:
      type: oauth2
      flows:
        clientCredentials:
          tokenUrl: https://auth.example.com/token
          scopes:
            orders:read: Read orders
            orders:write: Modify orders
    oidc:
      type: openIdConnect
      openIdConnectUrl: https://auth.example.com/.well-known/openid-configuration
`})))()}var l;function u(){return(u=e((()=>{l=`openapi: 3.0.3
info:
  title: Orders
  version: 1.0.0
security:
  - api_key: []
paths:
  /orders/{orderId}:
    post:
      operationId: updateOrder
      summary: Update an order
      description: Replaces the order.
      x-rate-limit: 100
      security:
        - oauth:
            - orders:write
      parameters:
        - name: orderId
          in: path
          required: true
          schema:
            type: string
        - name: dryRun
          in: query
          schema:
            type: boolean
        - name: expand
          in: query
          schema:
            type: string
        - name: X-Request-Id
          in: header
          required: true
          schema:
            type: string
            format: uuid
        - name: X-Trace
          in: header
          schema:
            type: string
        - name: session
          in: cookie
          schema:
            type: string
        - name: theme
          in: cookie
          schema:
            type: string
      requestBody:
        description: New order state.
        required: true
        content:
          application/json:
            schema:
              type: object
              required:
                - status
              properties:
                status:
                  type: string
                  enum:
                    - new
                    - paid
                note:
                  type: string
      responses:
        "200":
          description: Updated order.
          headers:
            ETag:
              schema:
                type: string
              x-owner: orders-team
            X-Request-Id:
              schema:
                type: string
                format: uuid
          content:
            application/json:
              schema:
                type: object
                properties:
                  id:
                    type: string
                  status:
                    type: string
        "400":
          description: Invalid request.
          content:
            application/problem+json:
              schema:
                type: object
                properties:
                  title:
                    type: string
components:
  securitySchemes:
    api_key:
      type: apiKey
      in: header
      name: X-API-Key
    basic:
      type: http
      scheme: basic
    bearer:
      type: http
      scheme: bearer
      bearerFormat: JWT
    oauth:
      type: oauth2
      flows:
        clientCredentials:
          tokenUrl: https://auth.example.com/token
          scopes:
            orders:read: Read orders
            orders:write: Modify orders
    oidc:
      type: openIdConnect
      openIdConnectUrl: https://auth.example.com/.well-known/openid-configuration
`})))()}var d;function f(){return(f=e((()=>{d=`openapi: 3.0.3
info:
  title: Orders
  version: 1.0.0
security:
  - api_key: []
paths:
  /orders/{orderId}:
    post:
      operationId: updateOrder
      summary: Update an order
      description: Replaces the order.
      x-rate-limit: 100
      security:
        - oauth:
            - orders:write
      parameters:
        - name: orderId
          in: path
          required: true
          schema:
            type: string
        - name: dryRun
          in: query
          schema:
            type: boolean
        - name: expand
          in: query
          schema:
            type: string
        - name: X-Request-Id
          in: header
          required: true
          schema:
            type: string
            format: uuid
        - name: X-Trace
          in: header
          schema:
            type: string
        - name: session
          in: cookie
          schema:
            type: string
        - name: theme
          in: cookie
          schema:
            type: string
      requestBody:
        description: New order state.
        required: true
        content:
          application/json:
            schema:
              type: object
              required:
                - status
              properties:
                status:
                  type: string
                  enum:
                    - new
                    - paid
                note:
                  type: string
      responses:
        "200":
          description: Updated order.
          headers:
            ETag:
              schema:
                type: string
              x-owner: orders-team
            X-Request-Id:
              schema:
                type: string
                format: uuid
          content:
            application/json:
              schema:
                type: object
                properties:
                  id:
                    type: string
                  status:
                    type: string
        "400":
          description: Invalid request.
          content:
            application/problem+json:
              schema:
                type: object
                properties:
                  title:
                    type: string
components:
  securitySchemes:
    api_key:
      type: apiKey
      in: header
      name: X-API-Key
    basic:
      type: http
      scheme: basic
    bearer:
      type: http
      scheme: bearer
      bearerFormat: JWT
    oauth:
      type: oauth2
      flows:
        clientCredentials:
          tokenUrl: https://auth.example.com/token
          scopes:
            orders:read: Read orders
            orders:write: Modify orders
    oidc:
      type: openIdConnect
      openIdConnectUrl: https://auth.example.com/.well-known/openid-configuration
`})))()}var p;function m(){return(m=e((()=>{p=`openapi: 3.0.3
info:
  title: Orders
  version: 1.0.0
security:
  - api_key: []
paths:
  /orders/{orderId}:
    post:
      operationId: updateOrder
      summary: Update an order
      description: Replaces the order.
      x-rate-limit: 100
      security:
        - oauth:
            - orders:write
      parameters:
        - name: orderId
          in: path
          required: true
          schema:
            type: string
        - name: dryRun
          in: query
          schema:
            type: boolean
        - name: expand
          in: query
          schema:
            type: string
        - name: X-Request-Id
          in: header
          required: true
          schema:
            type: string
            format: uuid
        - name: X-Trace
          in: header
          schema:
            type: string
        - name: session
          in: cookie
          schema:
            type: string
        - name: theme
          in: cookie
          schema:
            type: string
      requestBody:
        description: New order state.
        required: true
        content:
          application/json:
            schema:
              type: object
              required:
                - status
              properties:
                status:
                  type: string
                  enum:
                    - new
                    - paid
                note:
                  type: string
      responses:
        "200":
          description: Updated order.
          headers:
            ETag:
              schema:
                type: string
              x-owner: orders-team
            X-Request-Id:
              schema:
                type: string
                format: uuid
          content:
            application/json:
              schema:
                type: object
                properties:
                  id:
                    type: string
                  status:
                    type: string
        "400":
          description: Invalid request.
          content:
            application/problem+json:
              schema:
                type: object
                properties:
                  title:
                    type: string
components:
  securitySchemes:
    api_key:
      type: apiKey
      in: header
      name: X-API-Key
    basic:
      type: http
      scheme: basic
    bearer:
      type: http
      scheme: bearer
      bearerFormat: JWT
    oauth:
      type: oauth2
      flows:
        clientCredentials:
          tokenUrl: https://auth.example.com/token
          scopes:
            orders:read: Read orders
            orders:write: Modify orders
    oidc:
      type: openIdConnect
      openIdConnectUrl: https://auth.example.com/.well-known/openid-configuration
`})))()}var h;function g(){return(g=e((()=>{h=`openapi: 3.0.3
info:
  title: Orders
  version: 1.0.0
security:
  - api_key: []
paths:
  /orders/{orderId}:
    post:
      operationId: updateOrder
      summary: Update an order
      description: Replaces the order.
      x-rate-limit: 100
      security:
        - oauth:
            - orders:write
      parameters:
        - name: orderId
          in: path
          required: true
          schema:
            type: string
        - name: dryRun
          in: query
          schema:
            type: boolean
        - name: expand
          in: query
          schema:
            type: string
        - name: X-Request-Id
          in: header
          required: true
          schema:
            type: string
            format: uuid
        - name: X-Trace
          in: header
          schema:
            type: string
        - name: session
          in: cookie
          schema:
            type: string
        - name: theme
          in: cookie
          schema:
            type: string
      requestBody:
        description: New order state.
        required: true
        content:
          application/json:
            schema:
              type: object
              required:
                - status
              properties:
                status:
                  type: string
                  enum:
                    - new
                    - paid
                note:
                  type: string
      responses:
        "200":
          description: Updated order.
          headers:
            ETag:
              schema:
                type: string
                x-owner: orders-team
            X-Request-Id:
              schema:
                type: string
                format: uuid
          content:
            application/json:
              schema:
                type: object
                properties:
                  id:
                    type: string
                  status:
                    type: string
        "400":
          description: Invalid request.
          content:
            application/problem+json:
              schema:
                type: object
                properties:
                  title:
                    type: string
components:
  securitySchemes:
    api_key:
      type: apiKey
      in: header
      name: X-API-Key
    basic:
      type: http
      scheme: basic
    bearer:
      type: http
      scheme: bearer
      bearerFormat: JWT
    oauth:
      type: oauth2
      flows:
        clientCredentials:
          tokenUrl: https://auth.example.com/token
          scopes:
            orders:read: Read orders
            orders:write: Modify orders
    oidc:
      type: openIdConnect
      openIdConnectUrl: https://auth.example.com/.well-known/openid-configuration
`})))()}var _;function v(){return(v=e((()=>{_=`openapi: 3.0.3
info:
  title: Orders
  version: 1.0.0
security:
  - api_key: []
paths:
  /orders/{orderId}:
    post:
      operationId: updateOrder
      summary: Update an order
      description: Replaces the order.
      x-rate-limit: 100
      security:
        - oauth:
            - orders:write
      parameters:
        - name: orderId
          in: path
          required: true
          schema:
            type: string
        - name: dryRun
          in: query
          schema:
            type: boolean
        - name: expand
          in: query
          schema:
            type: string
        - name: X-Request-Id
          in: header
          required: true
          schema:
            type: string
            format: uuid
        - name: X-Trace
          in: header
          schema:
            type: string
        - name: session
          in: cookie
          schema:
            type: string
        - name: theme
          in: cookie
          schema:
            type: string
      requestBody:
        description: New order state.
        required: true
        content:
          application/json:
            schema:
              type: object
              required:
                - status
              properties:
                status:
                  type: string
                  enum:
                    - new
                    - paid
                note:
                  type: string
      responses:
        "200":
          description: Updated order.
          content:
            application/json:
              schema:
                type: object
                properties:
                  id:
                    type: string
                  status:
                    type: string
        "400":
          description: Invalid request.
          content:
            application/problem+json:
              schema:
                type: object
                properties:
                  title:
                    type: string
components:
  securitySchemes:
    api_key:
      type: apiKey
      in: header
      name: X-API-Key
    basic:
      type: http
      scheme: basic
    bearer:
      type: http
      scheme: bearer
      bearerFormat: JWT
    oauth:
      type: oauth2
      flows:
        clientCredentials:
          tokenUrl: https://auth.example.com/token
          scopes:
            orders:read: Read orders
            orders:write: Modify orders
    oidc:
      type: openIdConnect
      openIdConnectUrl: https://auth.example.com/.well-known/openid-configuration
`})))()}var y;function b(){return(b=e((()=>{y=`openapi: 3.0.3
info:
  title: Orders
  version: 1.0.0
security:
  - api_key: []
paths:
  /orders/{orderId}:
    post:
      operationId: updateOrder
      summary: Update an order
      description: Replaces the order.
      x-rate-limit: 100
      security:
        - oauth:
            - orders:write
      parameters:
        - name: orderId
          in: path
          required: true
          schema:
            type: string
        - name: dryRun
          in: query
          schema:
            type: boolean
        - name: expand
          in: query
          schema:
            type: string
        - name: X-Request-Id
          in: header
          required: true
          schema:
            type: string
            format: uuid
        - name: X-Trace
          in: header
          schema:
            type: string
        - name: session
          in: cookie
          schema:
            type: string
        - name: theme
          in: cookie
          schema:
            type: string
      requestBody:
        description: New order state.
        required: true
        content:
          application/json:
            schema:
              type: object
              required:
                - status
              properties:
                status:
                  type: string
                  enum:
                    - new
                    - paid
                note:
                  type: string
      responses:
        "200":
          description: Updated order.
          headers:
            ETag:
              schema:
                type: string
            X-Request-Id:
              schema:
                type: string
                format: uuid
          content:
            application/json:
              schema:
                type: object
                properties:
                  id:
                    type: string
                  status:
                    type: string
        "400":
          description: Invalid request.
          content:
            application/problem+json:
              schema:
                type: object
                properties:
                  title:
                    type: string
components:
  securitySchemes:
    api_key:
      type: apiKey
      in: header
      name: X-API-Key
    basic:
      type: http
      scheme: basic
    bearer:
      type: http
      scheme: bearer
      bearerFormat: JWT
    oauth:
      type: oauth2
      flows:
        clientCredentials:
          tokenUrl: https://auth.example.com/token
          scopes:
            orders:read: Read orders
            orders:write: Modify orders
    oidc:
      type: openIdConnect
      openIdConnectUrl: https://auth.example.com/.well-known/openid-configuration
`})))()}var x;function S(){return(S=e((()=>{x=`openapi: 3.0.3
info:
  title: Orders
  version: 1.0.0
security:
  - api_key: []
paths:
  /orders/{orderId}:
    post:
      operationId: updateOrder
      summary: Update an order
      description: Replaces the order.
      x-rate-limit: 100
      security:
        - oauth:
            - orders:write
      parameters:
        - name: orderId
          in: path
          required: true
          schema:
            type: string
        - name: dryRun
          in: query
          schema:
            type: boolean
        - name: expand
          in: query
          schema:
            type: string
        - name: X-Request-Id
          in: header
          required: true
          schema:
            type: string
            format: uuid
        - name: X-Trace
          in: header
          schema:
            type: string
        - name: session
          in: cookie
          schema:
            type: string
        - name: theme
          in: cookie
          schema:
            type: string
      requestBody:
        description: New order state.
        required: true
        content:
          application/json:
            schema:
              type: object
              required:
                - status
              properties:
                status:
                  type: string
                  enum:
                    - new
                    - paid
                note:
                  type: string
      responses:
        "200":
          description: Updated order.
          headers:
            ETag:
              schema:
                type: string
              description: Entry text v1.
            X-Request-Id:
              schema:
                type: string
                format: uuid
          content:
            application/json:
              schema:
                type: object
                properties:
                  id:
                    type: string
                  status:
                    type: string
        "400":
          description: Invalid request.
          content:
            application/problem+json:
              schema:
                type: object
                properties:
                  title:
                    type: string
components:
  securitySchemes:
    api_key:
      type: apiKey
      in: header
      name: X-API-Key
    basic:
      type: http
      scheme: basic
    bearer:
      type: http
      scheme: bearer
      bearerFormat: JWT
    oauth:
      type: oauth2
      flows:
        clientCredentials:
          tokenUrl: https://auth.example.com/token
          scopes:
            orders:read: Read orders
            orders:write: Modify orders
    oidc:
      type: openIdConnect
      openIdConnectUrl: https://auth.example.com/.well-known/openid-configuration
`})))()}var C;function w(){return(w=e((()=>{C=`openapi: 3.0.3
info:
  title: Orders
  version: 1.0.0
security:
  - api_key: []
paths:
  /orders/{orderId}:
    post:
      operationId: updateOrder
      summary: Update an order
      description: Replaces the order.
      x-rate-limit: 100
      security:
        - oauth:
            - orders:write
      parameters:
        - name: orderId
          in: path
          required: true
          schema:
            type: string
        - name: dryRun
          in: query
          schema:
            type: boolean
        - name: expand
          in: query
          schema:
            type: string
        - name: X-Request-Id
          in: header
          required: true
          schema:
            type: string
            format: uuid
        - name: X-Trace
          in: header
          schema:
            type: string
        - name: session
          in: cookie
          schema:
            type: string
        - name: theme
          in: cookie
          schema:
            type: string
      requestBody:
        description: New order state.
        required: true
        content:
          application/json:
            schema:
              type: object
              required:
                - status
              properties:
                status:
                  type: string
                  enum:
                    - new
                    - paid
                note:
                  type: string
      responses:
        "200":
          description: Updated order.
          headers:
            ETag:
              schema:
                type: string
                description: Entry text v1.
            X-Request-Id:
              schema:
                type: string
                format: uuid
          content:
            application/json:
              schema:
                type: object
                properties:
                  id:
                    type: string
                  status:
                    type: string
        "400":
          description: Invalid request.
          content:
            application/problem+json:
              schema:
                type: object
                properties:
                  title:
                    type: string
components:
  securitySchemes:
    api_key:
      type: apiKey
      in: header
      name: X-API-Key
    basic:
      type: http
      scheme: basic
    bearer:
      type: http
      scheme: bearer
      bearerFormat: JWT
    oauth:
      type: oauth2
      flows:
        clientCredentials:
          tokenUrl: https://auth.example.com/token
          scopes:
            orders:read: Read orders
            orders:write: Modify orders
    oidc:
      type: openIdConnect
      openIdConnectUrl: https://auth.example.com/.well-known/openid-configuration
`})))()}var T;function ke(){return(ke=e((()=>{T=`openapi: 3.0.3
info:
  title: Orders
  version: 1.0.0
security:
  - api_key: []
paths:
  /orders/{orderId}:
    post:
      operationId: updateOrder
      summary: Update an order
      description: Replaces the order.
      x-rate-limit: 100
      security:
        - oauth:
            - orders:write
      parameters:
        - name: orderId
          in: path
          required: true
          schema:
            type: string
        - name: dryRun
          in: query
          schema:
            type: boolean
        - name: expand
          in: query
          schema:
            type: string
        - name: X-Request-Id
          in: header
          required: true
          schema:
            type: string
            format: uuid
        - name: X-Trace
          in: header
          schema:
            type: string
        - name: session
          in: cookie
          schema:
            type: string
        - name: theme
          in: cookie
          schema:
            type: string
      requestBody:
        description: New order state.
        required: true
        content:
          application/json:
            schema:
              type: object
              required:
                - status
              properties:
                status:
                  type: string
                  enum:
                    - new
                    - paid
                note:
                  type: string
      responses:
        "200":
          description: Updated order.
          headers:
            ETag:
              schema:
                type: string
              description: Entry text v1.
            X-Request-Id:
              schema:
                type: string
                format: uuid
          content:
            application/json:
              schema:
                type: object
                properties:
                  id:
                    type: string
                  status:
                    type: string
        "400":
          description: Invalid request.
          content:
            application/problem+json:
              schema:
                type: object
                properties:
                  title:
                    type: string
components:
  securitySchemes:
    api_key:
      type: apiKey
      in: header
      name: X-API-Key
    basic:
      type: http
      scheme: basic
    bearer:
      type: http
      scheme: bearer
      bearerFormat: JWT
    oauth:
      type: oauth2
      flows:
        clientCredentials:
          tokenUrl: https://auth.example.com/token
          scopes:
            orders:read: Read orders
            orders:write: Modify orders
    oidc:
      type: openIdConnect
      openIdConnectUrl: https://auth.example.com/.well-known/openid-configuration
`})))()}var Ae;function je(){return(je=e((()=>{Ae=`openapi: 3.0.3
info:
  title: Orders
  version: 1.0.0
security:
  - api_key: []
paths:
  /orders/{orderId}:
    post:
      operationId: updateOrder
      summary: Update an order
      description: Replaces the order.
      x-rate-limit: 100
      security:
        - oauth:
            - orders:write
      parameters:
        - name: orderId
          in: path
          required: true
          schema:
            type: string
        - name: dryRun
          in: query
          schema:
            type: boolean
        - name: expand
          in: query
          schema:
            type: string
        - name: X-Request-Id
          in: header
          required: true
          schema:
            type: string
            format: uuid
        - name: X-Trace
          in: header
          schema:
            type: string
        - name: session
          in: cookie
          schema:
            type: string
        - name: theme
          in: cookie
          schema:
            type: string
      requestBody:
        description: New order state.
        required: true
        content:
          application/json:
            schema:
              type: object
              required:
                - status
              properties:
                status:
                  type: string
                  enum:
                    - new
                    - paid
                note:
                  type: string
      responses:
        "200":
          description: Updated order.
          headers:
            ETag:
              schema:
                type: string
                description: Schema text v2.
            X-Request-Id:
              schema:
                type: string
                format: uuid
          content:
            application/json:
              schema:
                type: object
                properties:
                  id:
                    type: string
                  status:
                    type: string
        "400":
          description: Invalid request.
          content:
            application/problem+json:
              schema:
                type: object
                properties:
                  title:
                    type: string
components:
  securitySchemes:
    api_key:
      type: apiKey
      in: header
      name: X-API-Key
    basic:
      type: http
      scheme: basic
    bearer:
      type: http
      scheme: bearer
      bearerFormat: JWT
    oauth:
      type: oauth2
      flows:
        clientCredentials:
          tokenUrl: https://auth.example.com/token
          scopes:
            orders:read: Read orders
            orders:write: Modify orders
    oidc:
      type: openIdConnect
      openIdConnectUrl: https://auth.example.com/.well-known/openid-configuration
`})))()}var Me;function Ne(){return(Ne=e((()=>{Me=`openapi: 3.0.3
info:
  title: Orders
  version: 1.0.0
security:
  - api_key: []
paths:
  /orders/{orderId}:
    post:
      operationId: updateOrder
      summary: Update an order
      description: Replaces the order.
      x-rate-limit: 100
      security:
        - oauth:
            - orders:write
      parameters:
        - name: orderId
          in: path
          required: true
          schema:
            type: string
        - name: dryRun
          in: query
          schema:
            type: boolean
        - name: expand
          in: query
          schema:
            type: string
        - name: X-Request-Id
          in: header
          required: true
          schema:
            type: string
            format: uuid
        - name: X-Trace
          in: header
          schema:
            type: string
        - name: session
          in: cookie
          schema:
            type: string
        - name: theme
          in: cookie
          schema:
            type: string
      requestBody:
        description: New order state.
        required: true
        content:
          application/json:
            schema:
              type: object
              required:
                - status
              properties:
                status:
                  type: string
                  enum:
                    - new
                    - paid
                note:
                  type: string
      responses:
        "200":
          description: Updated order.
          headers:
            ETag:
              schema:
                type: string
                description: Schema text v1.
              description: Entry text v1.
            X-Request-Id:
              schema:
                type: string
                format: uuid
          content:
            application/json:
              schema:
                type: object
                properties:
                  id:
                    type: string
                  status:
                    type: string
        "400":
          description: Invalid request.
          content:
            application/problem+json:
              schema:
                type: object
                properties:
                  title:
                    type: string
components:
  securitySchemes:
    api_key:
      type: apiKey
      in: header
      name: X-API-Key
    basic:
      type: http
      scheme: basic
    bearer:
      type: http
      scheme: bearer
      bearerFormat: JWT
    oauth:
      type: oauth2
      flows:
        clientCredentials:
          tokenUrl: https://auth.example.com/token
          scopes:
            orders:read: Read orders
            orders:write: Modify orders
    oidc:
      type: openIdConnect
      openIdConnectUrl: https://auth.example.com/.well-known/openid-configuration
`})))()}var Pe;function Fe(){return(Fe=e((()=>{Pe=`openapi: 3.0.3
info:
  title: Orders
  version: 1.0.0
security:
  - api_key: []
paths:
  /orders/{orderId}:
    post:
      operationId: updateOrder
      summary: Update an order
      description: Replaces the order.
      x-rate-limit: 100
      security:
        - oauth:
            - orders:write
      parameters:
        - name: orderId
          in: path
          required: true
          schema:
            type: string
        - name: dryRun
          in: query
          schema:
            type: boolean
        - name: expand
          in: query
          schema:
            type: string
        - name: X-Request-Id
          in: header
          required: true
          schema:
            type: string
            format: uuid
        - name: X-Trace
          in: header
          schema:
            type: string
        - name: session
          in: cookie
          schema:
            type: string
        - name: theme
          in: cookie
          schema:
            type: string
      requestBody:
        description: New order state.
        required: true
        content:
          application/json:
            schema:
              type: object
              required:
                - status
              properties:
                status:
                  type: string
                  enum:
                    - new
                    - paid
                note:
                  type: string
      responses:
        "200":
          description: Updated order.
          headers:
            ETag:
              schema:
                type: string
                description: Schema text v1.
              description: Entry text v1.
            X-Request-Id:
              schema:
                type: string
                format: uuid
          content:
            application/json:
              schema:
                type: object
                properties:
                  id:
                    type: string
                  status:
                    type: string
        "400":
          description: Invalid request.
          content:
            application/problem+json:
              schema:
                type: object
                properties:
                  title:
                    type: string
components:
  securitySchemes:
    api_key:
      type: apiKey
      in: header
      name: X-API-Key
    basic:
      type: http
      scheme: basic
    bearer:
      type: http
      scheme: bearer
      bearerFormat: JWT
    oauth:
      type: oauth2
      flows:
        clientCredentials:
          tokenUrl: https://auth.example.com/token
          scopes:
            orders:read: Read orders
            orders:write: Modify orders
    oidc:
      type: openIdConnect
      openIdConnectUrl: https://auth.example.com/.well-known/openid-configuration
`})))()}var Ie;function Le(){return(Le=e((()=>{Ie=`openapi: 3.0.3
info:
  title: Orders
  version: 1.0.0
security:
  - api_key: []
paths:
  /orders/{orderId}:
    post:
      operationId: updateOrder
      summary: Update an order
      description: Replaces the order.
      x-rate-limit: 100
      security:
        - oauth:
            - orders:write
      parameters:
        - name: orderId
          in: path
          required: true
          schema:
            type: string
        - name: dryRun
          in: query
          schema:
            type: boolean
        - name: expand
          in: query
          schema:
            type: string
        - name: X-Request-Id
          in: header
          required: true
          schema:
            type: string
            format: uuid
        - name: X-Trace
          in: header
          schema:
            type: string
        - name: session
          in: cookie
          schema:
            type: string
        - name: theme
          in: cookie
          schema:
            type: string
      requestBody:
        description: New order state.
        required: true
        content:
          application/json:
            schema:
              type: object
              required:
                - status
              properties:
                status:
                  type: string
                  enum:
                    - new
                    - paid
                note:
                  type: string
      responses:
        "200":
          description: Updated order.
          headers:
            ETag:
              schema:
                type: string
            X-Request-Id:
              schema:
                type: string
                format: uuid
            X-Rate-Limit-Remaining:
              schema:
                type: string
          content:
            application/json:
              schema:
                type: object
                properties:
                  id:
                    type: string
                  status:
                    type: string
        "400":
          description: Invalid request.
          content:
            application/problem+json:
              schema:
                type: object
                properties:
                  title:
                    type: string
components:
  securitySchemes:
    api_key:
      type: apiKey
      in: header
      name: X-API-Key
    basic:
      type: http
      scheme: basic
    bearer:
      type: http
      scheme: bearer
      bearerFormat: JWT
    oauth:
      type: oauth2
      flows:
        clientCredentials:
          tokenUrl: https://auth.example.com/token
          scopes:
            orders:read: Read orders
            orders:write: Modify orders
    oidc:
      type: openIdConnect
      openIdConnectUrl: https://auth.example.com/.well-known/openid-configuration
`})))()}var Re;function ze(){return(ze=e((()=>{Re=`openapi: 3.0.3
info:
  title: Orders
  version: 1.0.0
security:
  - api_key: []
paths:
  /orders/{orderId}:
    post:
      operationId: updateOrder
      summary: Update an order
      description: Replaces the order.
      x-rate-limit: 100
      security:
        - oauth:
            - orders:write
      parameters:
        - name: orderId
          in: path
          required: true
          schema:
            type: string
        - name: dryRun
          in: query
          schema:
            type: boolean
        - name: expand
          in: query
          schema:
            type: string
        - name: X-Request-Id
          in: header
          required: true
          schema:
            type: string
            format: uuid
        - name: X-Trace
          in: header
          schema:
            type: string
        - name: session
          in: cookie
          schema:
            type: string
        - name: theme
          in: cookie
          schema:
            type: string
      requestBody:
        description: New order state.
        required: true
        content:
          application/json:
            schema:
              type: object
              required:
                - status
              properties:
                status:
                  type: string
                  enum:
                    - new
                    - paid
                note:
                  type: string
      responses:
        "200":
          description: Updated order.
          headers:
            ETag:
              schema:
                type: string
            X-Request-Id:
              schema:
                type: string
                format: uuid
          content:
            application/json:
              schema:
                type: object
                properties:
                  id:
                    type: string
                  status:
                    type: string
        "400":
          description: Invalid request.
          content:
            application/problem+json:
              schema:
                type: object
                properties:
                  title:
                    type: string
components:
  securitySchemes:
    api_key:
      type: apiKey
      in: header
      name: X-API-Key
    basic:
      type: http
      scheme: basic
    bearer:
      type: http
      scheme: bearer
      bearerFormat: JWT
    oauth:
      type: oauth2
      flows:
        clientCredentials:
          tokenUrl: https://auth.example.com/token
          scopes:
            orders:read: Read orders
            orders:write: Modify orders
    oidc:
      type: openIdConnect
      openIdConnectUrl: https://auth.example.com/.well-known/openid-configuration
`})))()}var Be;function Ve(){return(Ve=e((()=>{Be=`openapi: 3.0.3
info:
  title: Orders
  version: 1.0.0
security:
  - api_key: []
paths:
  /orders/{orderId}:
    post:
      operationId: updateOrder
      summary: Update an order
      description: Replaces the order.
      x-rate-limit: 100
      security:
        - oauth:
            - orders:write
      parameters:
        - name: orderId
          in: path
          required: true
          schema:
            type: string
        - name: dryRun
          in: query
          schema:
            type: boolean
        - name: expand
          in: query
          schema:
            type: string
        - name: X-Request-Id
          in: header
          required: true
          schema:
            type: string
            format: uuid
        - name: X-Trace
          in: header
          schema:
            type: string
        - name: session
          in: cookie
          schema:
            type: string
        - name: theme
          in: cookie
          schema:
            type: string
      requestBody:
        description: New order state.
        required: true
        content:
          application/json:
            schema:
              type: object
              required:
                - status
              properties:
                status:
                  type: string
                  enum:
                    - new
                    - paid
                note:
                  type: string
      responses:
        "200":
          description: Updated order.
          headers:
            ETag-v2:
              schema:
                type: string
            X-Request-Id:
              schema:
                type: string
                format: uuid
          content:
            application/json:
              schema:
                type: object
                properties:
                  id:
                    type: string
                  status:
                    type: string
        "400":
          description: Invalid request.
          content:
            application/problem+json:
              schema:
                type: object
                properties:
                  title:
                    type: string
components:
  securitySchemes:
    api_key:
      type: apiKey
      in: header
      name: X-API-Key
    basic:
      type: http
      scheme: basic
    bearer:
      type: http
      scheme: bearer
      bearerFormat: JWT
    oauth:
      type: oauth2
      flows:
        clientCredentials:
          tokenUrl: https://auth.example.com/token
          scopes:
            orders:read: Read orders
            orders:write: Modify orders
    oidc:
      type: openIdConnect
      openIdConnectUrl: https://auth.example.com/.well-known/openid-configuration
`})))()}var He;function Ue(){return(Ue=e((()=>{He=`openapi: 3.0.3
info:
  title: Orders
  version: 1.0.0
security:
  - api_key: []
paths:
  /orders/{orderId}:
    post:
      operationId: updateOrder
      summary: Update an order
      description: Replaces the order.
      x-rate-limit: 100
      security:
        - oauth:
            - orders:write
      parameters:
        - name: orderId
          in: path
          required: true
          schema:
            type: string
        - name: dryRun
          in: query
          schema:
            type: boolean
        - name: expand
          in: query
          schema:
            type: string
        - name: X-Request-Id
          in: header
          required: true
          schema:
            type: string
            format: uuid
        - name: X-Trace
          in: header
          schema:
            type: string
        - name: session
          in: cookie
          schema:
            type: string
        - name: theme
          in: cookie
          schema:
            type: string
      requestBody:
        description: New order state.
        required: true
        content:
          application/json:
            schema:
              type: object
              required:
                - status
              properties:
                status:
                  type: string
                  enum:
                    - new
                    - paid
                note:
                  type: string
      responses:
        "200":
          description: Updated order.
          headers:
            ETag:
              schema:
                type: string
              required: true
            X-Request-Id:
              schema:
                type: string
                format: uuid
          content:
            application/json:
              schema:
                type: object
                properties:
                  id:
                    type: string
                  status:
                    type: string
        "400":
          description: Invalid request.
          content:
            application/problem+json:
              schema:
                type: object
                properties:
                  title:
                    type: string
components:
  securitySchemes:
    api_key:
      type: apiKey
      in: header
      name: X-API-Key
    basic:
      type: http
      scheme: basic
    bearer:
      type: http
      scheme: bearer
      bearerFormat: JWT
    oauth:
      type: oauth2
      flows:
        clientCredentials:
          tokenUrl: https://auth.example.com/token
          scopes:
            orders:read: Read orders
            orders:write: Modify orders
    oidc:
      type: openIdConnect
      openIdConnectUrl: https://auth.example.com/.well-known/openid-configuration
`})))()}var We;function Ge(){return(Ge=e((()=>{We=`openapi: 3.0.3
info:
  title: Orders
  version: 1.0.0
security:
  - api_key: []
paths:
  /orders/{orderId}:
    post:
      operationId: updateOrder
      summary: Update an order
      description: Replaces the order.
      x-rate-limit: 100
      security:
        - oauth:
            - orders:write
      parameters:
        - name: orderId
          in: path
          required: true
          schema:
            type: string
        - name: dryRun
          in: query
          schema:
            type: boolean
        - name: expand
          in: query
          schema:
            type: string
        - name: X-Request-Id
          in: header
          required: true
          schema:
            type: string
            format: uuid
        - name: X-Trace
          in: header
          schema:
            type: string
        - name: session
          in: cookie
          schema:
            type: string
        - name: theme
          in: cookie
          schema:
            type: string
      requestBody:
        description: New order state.
        required: true
        content:
          application/json:
            schema:
              type: object
              required:
                - status
              properties:
                status:
                  type: string
                  enum:
                    - new
                    - paid
                note:
                  type: string
      responses:
        "200":
          description: Updated order.
          headers:
            ETag:
              schema:
                type: string
            X-Request-Id:
              schema:
                type: string
                format: uuid
          content:
            application/json:
              schema:
                type: object
                properties:
                  id:
                    type: string
                  status:
                    type: string
        "400":
          description: Invalid request.
          content:
            application/problem+json:
              schema:
                type: object
                properties:
                  title:
                    type: string
components:
  securitySchemes:
    api_key:
      type: apiKey
      in: header
      name: X-API-Key
    basic:
      type: http
      scheme: basic
    bearer:
      type: http
      scheme: bearer
      bearerFormat: JWT
    oauth:
      type: oauth2
      flows:
        clientCredentials:
          tokenUrl: https://auth.example.com/token
          scopes:
            orders:read: Read orders
            orders:write: Modify orders
    oidc:
      type: openIdConnect
      openIdConnectUrl: https://auth.example.com/.well-known/openid-configuration
`})))()}var Ke;function qe(){return(qe=e((()=>{Ke=`openapi: 3.0.3
info:
  title: Orders
  version: 1.0.0
security:
  - api_key: []
paths:
  /orders/{orderId}:
    post:
      operationId: updateOrder
      summary: Update an order
      description: Replaces the order.
      x-rate-limit: 100
      security:
        - oauth:
            - orders:write
      parameters:
        - name: orderId
          in: path
          required: true
          schema:
            type: string
        - name: dryRun
          in: query
          schema:
            type: boolean
        - name: expand
          in: query
          schema:
            type: string
        - name: X-Request-Id
          in: header
          required: true
          schema:
            type: string
            format: uuid
        - name: X-Trace
          in: header
          schema:
            type: string
        - name: session
          in: cookie
          schema:
            type: string
        - name: theme
          in: cookie
          schema:
            type: string
      requestBody:
        description: New order state.
        required: true
        content:
          application/json:
            schema:
              type: object
              required:
                - status
              properties:
                status:
                  type: string
                  enum:
                    - new
                    - paid
                note:
                  type: string
      responses:
        "200":
          description: Updated order.
          headers:
            ETag:
              schema:
                type: string
              description: Entry text v1.
            X-Request-Id:
              schema:
                type: string
                format: uuid
          content:
            application/json:
              schema:
                type: object
                properties:
                  id:
                    type: string
                  status:
                    type: string
        "400":
          description: Invalid request.
          content:
            application/problem+json:
              schema:
                type: object
                properties:
                  title:
                    type: string
components:
  securitySchemes:
    api_key:
      type: apiKey
      in: header
      name: X-API-Key
    basic:
      type: http
      scheme: basic
    bearer:
      type: http
      scheme: bearer
      bearerFormat: JWT
    oauth:
      type: oauth2
      flows:
        clientCredentials:
          tokenUrl: https://auth.example.com/token
          scopes:
            orders:read: Read orders
            orders:write: Modify orders
    oidc:
      type: openIdConnect
      openIdConnectUrl: https://auth.example.com/.well-known/openid-configuration
`})))()}var Je;function Ye(){return(Ye=e((()=>{Je=`openapi: 3.0.3
info:
  title: Orders
  version: 1.0.0
security:
  - api_key: []
paths:
  /orders/{orderId}:
    post:
      operationId: updateOrder
      summary: Update an order
      description: Replaces the order.
      x-rate-limit: 100
      security:
        - oauth:
            - orders:write
      parameters:
        - name: orderId
          in: path
          required: true
          schema:
            type: string
        - name: dryRun
          in: query
          schema:
            type: boolean
        - name: expand
          in: query
          schema:
            type: string
        - name: X-Request-Id
          in: header
          required: true
          schema:
            type: string
            format: uuid
        - name: X-Trace
          in: header
          schema:
            type: string
        - name: session
          in: cookie
          schema:
            type: string
        - name: theme
          in: cookie
          schema:
            type: string
      requestBody:
        description: New order state.
        required: true
        content:
          application/json:
            schema:
              type: object
              required:
                - status
              properties:
                status:
                  type: string
                  enum:
                    - new
                    - paid
                note:
                  type: string
      responses:
        "200":
          description: Updated order.
          headers:
            ETag:
              schema:
                type: string
            X-Request-Id:
              schema:
                type: string
                format: uuid
          content:
            application/json:
              schema:
                type: object
                properties:
                  id:
                    type: string
                  status:
                    type: string
        "400":
          description: Invalid request.
          content:
            application/problem+json:
              schema:
                type: object
                properties:
                  title:
                    type: string
components:
  securitySchemes:
    api_key:
      type: apiKey
      in: header
      name: X-API-Key
    basic:
      type: http
      scheme: basic
    bearer:
      type: http
      scheme: bearer
      bearerFormat: JWT
    oauth:
      type: oauth2
      flows:
        clientCredentials:
          tokenUrl: https://auth.example.com/token
          scopes:
            orders:read: Read orders
            orders:write: Modify orders
    oidc:
      type: openIdConnect
      openIdConnectUrl: https://auth.example.com/.well-known/openid-configuration
`})))()}var Xe;function Ze(){return(Ze=e((()=>{Xe=`openapi: 3.0.3
info:
  title: Orders
  version: 1.0.0
security:
  - api_key: []
paths:
  /orders/{orderId}:
    post:
      operationId: updateOrder
      summary: Update an order
      description: Replaces the order.
      x-rate-limit: 100
      security:
        - oauth:
            - orders:write
      parameters:
        - name: orderId
          in: path
          required: true
          schema:
            type: string
        - name: dryRun
          in: query
          schema:
            type: boolean
        - name: expand
          in: query
          schema:
            type: string
        - name: X-Request-Id
          in: header
          required: true
          schema:
            type: string
            format: uuid
        - name: X-Trace
          in: header
          schema:
            type: string
        - name: session
          in: cookie
          schema:
            type: string
        - name: theme
          in: cookie
          schema:
            type: string
      requestBody:
        description: New order state.
        required: true
        content:
          application/json:
            schema:
              type: object
              required:
                - status
              properties:
                status:
                  type: string
                  enum:
                    - new
                    - paid
                note:
                  type: string
      responses:
        "200":
          description: Updated order.
          headers:
            ETag:
              schema:
                type: string
              description: Entry text v2.
            X-Request-Id:
              schema:
                type: string
                format: uuid
          content:
            application/json:
              schema:
                type: object
                properties:
                  id:
                    type: string
                  status:
                    type: string
        "400":
          description: Invalid request.
          content:
            application/problem+json:
              schema:
                type: object
                properties:
                  title:
                    type: string
components:
  securitySchemes:
    api_key:
      type: apiKey
      in: header
      name: X-API-Key
    basic:
      type: http
      scheme: basic
    bearer:
      type: http
      scheme: bearer
      bearerFormat: JWT
    oauth:
      type: oauth2
      flows:
        clientCredentials:
          tokenUrl: https://auth.example.com/token
          scopes:
            orders:read: Read orders
            orders:write: Modify orders
    oidc:
      type: openIdConnect
      openIdConnectUrl: https://auth.example.com/.well-known/openid-configuration
`})))()}var Qe;function $e(){return($e=e((()=>{Qe=`openapi: 3.0.3
info:
  title: Orders
  version: 1.0.0
security:
  - api_key: []
paths:
  /orders/{orderId}:
    post:
      operationId: updateOrder
      summary: Update an order
      description: Replaces the order.
      x-rate-limit: 100
      security:
        - oauth:
            - orders:write
      parameters:
        - name: orderId
          in: path
          required: true
          schema:
            type: string
        - name: dryRun
          in: query
          schema:
            type: boolean
        - name: expand
          in: query
          schema:
            type: string
        - name: X-Request-Id
          in: header
          required: true
          schema:
            type: string
            format: uuid
        - name: X-Trace
          in: header
          schema:
            type: string
        - name: session
          in: cookie
          schema:
            type: string
        - name: theme
          in: cookie
          schema:
            type: string
      requestBody:
        description: New order state.
        required: true
        content:
          application/json:
            schema:
              type: object
              required:
                - status
              properties:
                status:
                  type: string
                  enum:
                    - new
                    - paid
                note:
                  type: string
      responses:
        "200":
          description: Updated order.
          headers:
            ETag:
              schema:
                type: string
              deprecated: true
            X-Request-Id:
              schema:
                type: string
                format: uuid
          content:
            application/json:
              schema:
                type: object
                properties:
                  id:
                    type: string
                  status:
                    type: string
        "400":
          description: Invalid request.
          content:
            application/problem+json:
              schema:
                type: object
                properties:
                  title:
                    type: string
components:
  securitySchemes:
    api_key:
      type: apiKey
      in: header
      name: X-API-Key
    basic:
      type: http
      scheme: basic
    bearer:
      type: http
      scheme: bearer
      bearerFormat: JWT
    oauth:
      type: oauth2
      flows:
        clientCredentials:
          tokenUrl: https://auth.example.com/token
          scopes:
            orders:read: Read orders
            orders:write: Modify orders
    oidc:
      type: openIdConnect
      openIdConnectUrl: https://auth.example.com/.well-known/openid-configuration
`})))()}var E;function et(){return(et=e((()=>{E=`openapi: 3.0.3
info:
  title: Orders
  version: 1.0.0
security:
  - api_key: []
paths:
  /orders/{orderId}:
    post:
      operationId: updateOrder
      summary: Update an order
      description: Replaces the order.
      x-rate-limit: 100
      security:
        - oauth:
            - orders:write
      parameters:
        - name: orderId
          in: path
          required: true
          schema:
            type: string
        - name: dryRun
          in: query
          schema:
            type: boolean
        - name: expand
          in: query
          schema:
            type: string
        - name: X-Request-Id
          in: header
          required: true
          schema:
            type: string
            format: uuid
        - name: X-Trace
          in: header
          schema:
            type: string
        - name: session
          in: cookie
          schema:
            type: string
        - name: theme
          in: cookie
          schema:
            type: string
      requestBody:
        description: New order state.
        required: true
        content:
          application/json:
            schema:
              type: object
              required:
                - status
              properties:
                status:
                  type: string
                  enum:
                    - new
                    - paid
                note:
                  type: string
      responses:
        "200":
          description: Updated order.
          headers:
            ETag:
              schema:
                type: string
            X-Request-Id:
              schema:
                type: string
                format: uuid
          content:
            application/json:
              schema:
                type: object
                properties:
                  id:
                    type: string
                  status:
                    type: string
        "400":
          description: Invalid request.
          content:
            application/problem+json:
              schema:
                type: object
                properties:
                  title:
                    type: string
components:
  securitySchemes:
    api_key:
      type: apiKey
      in: header
      name: X-API-Key
    basic:
      type: http
      scheme: basic
    bearer:
      type: http
      scheme: bearer
      bearerFormat: JWT
    oauth:
      type: oauth2
      flows:
        clientCredentials:
          tokenUrl: https://auth.example.com/token
          scopes:
            orders:read: Read orders
            orders:write: Modify orders
    oidc:
      type: openIdConnect
      openIdConnectUrl: https://auth.example.com/.well-known/openid-configuration
`})))()}var tt;function nt(){return(nt=e((()=>{tt=`openapi: 3.0.3
info:
  title: Orders
  version: 1.0.0
security:
  - api_key: []
paths:
  /orders/{orderId}:
    post:
      operationId: updateOrder
      summary: Update an order
      description: Replaces the order.
      x-rate-limit: 100
      security:
        - oauth:
            - orders:write
      parameters:
        - name: orderId
          in: path
          required: true
          schema:
            type: string
        - name: dryRun
          in: query
          schema:
            type: boolean
        - name: expand
          in: query
          schema:
            type: string
        - name: X-Request-Id
          in: header
          required: true
          schema:
            type: string
            format: uuid
        - name: X-Trace
          in: header
          schema:
            type: string
        - name: session
          in: cookie
          schema:
            type: string
        - name: theme
          in: cookie
          schema:
            type: string
      requestBody:
        description: New order state.
        required: true
        content:
          application/json:
            schema:
              type: object
              required:
                - status
              properties:
                status:
                  type: string
                  enum:
                    - new
                    - paid
                note:
                  type: string
      responses:
        "200":
          description: Updated order.
          headers:
            ETag:
              content:
                application/json:
                  schema:
                    type: object
                    description: JSON options.
                    properties:
                      strict:
                        type: boolean
            X-Request-Id:
              schema:
                type: string
                format: uuid
          content:
            application/json:
              schema:
                type: object
                properties:
                  id:
                    type: string
                  status:
                    type: string
        "400":
          description: Invalid request.
          content:
            application/problem+json:
              schema:
                type: object
                properties:
                  title:
                    type: string
components:
  securitySchemes:
    api_key:
      type: apiKey
      in: header
      name: X-API-Key
    basic:
      type: http
      scheme: basic
    bearer:
      type: http
      scheme: bearer
      bearerFormat: JWT
    oauth:
      type: oauth2
      flows:
        clientCredentials:
          tokenUrl: https://auth.example.com/token
          scopes:
            orders:read: Read orders
            orders:write: Modify orders
    oidc:
      type: openIdConnect
      openIdConnectUrl: https://auth.example.com/.well-known/openid-configuration
`})))()}var rt;function it(){return(it=e((()=>{rt=`openapi: 3.0.3
info:
  title: Orders
  version: 1.0.0
security:
  - api_key: []
paths:
  /orders/{orderId}:
    post:
      operationId: updateOrder
      summary: Update an order
      description: Replaces the order.
      x-rate-limit: 100
      security:
        - oauth:
            - orders:write
      parameters:
        - name: orderId
          in: path
          required: true
          schema:
            type: string
        - name: dryRun
          in: query
          schema:
            type: boolean
        - name: expand
          in: query
          schema:
            type: string
        - name: X-Request-Id
          in: header
          required: true
          schema:
            type: string
            format: uuid
        - name: X-Trace
          in: header
          schema:
            type: string
        - name: session
          in: cookie
          schema:
            type: string
        - name: theme
          in: cookie
          schema:
            type: string
      requestBody:
        description: New order state.
        required: true
        content:
          application/json:
            schema:
              type: object
              required:
                - status
              properties:
                status:
                  type: string
                  enum:
                    - new
                    - paid
                note:
                  type: string
      responses:
        "200":
          description: Updated order.
          headers:
            ETag:
              schema:
                type: boolean
                description: Boolean flag.
            X-Request-Id:
              schema:
                type: string
                format: uuid
          content:
            application/json:
              schema:
                type: object
                properties:
                  id:
                    type: string
                  status:
                    type: string
        "400":
          description: Invalid request.
          content:
            application/problem+json:
              schema:
                type: object
                properties:
                  title:
                    type: string
components:
  securitySchemes:
    api_key:
      type: apiKey
      in: header
      name: X-API-Key
    basic:
      type: http
      scheme: basic
    bearer:
      type: http
      scheme: bearer
      bearerFormat: JWT
    oauth:
      type: oauth2
      flows:
        clientCredentials:
          tokenUrl: https://auth.example.com/token
          scopes:
            orders:read: Read orders
            orders:write: Modify orders
    oidc:
      type: openIdConnect
      openIdConnectUrl: https://auth.example.com/.well-known/openid-configuration
`})))()}var at;function ot(){return(ot=e((()=>{at=`openapi: 3.0.3
info:
  title: Orders
  version: 1.0.0
security:
  - api_key: []
paths:
  /orders/{orderId}:
    post:
      operationId: updateOrder
      summary: Update an order
      description: Replaces the order.
      x-rate-limit: 100
      security:
        - oauth:
            - orders:write
      parameters:
        - name: orderId
          in: path
          required: true
          schema:
            type: string
        - name: dryRun
          in: query
          schema:
            type: boolean
        - name: expand
          in: query
          schema:
            type: string
        - name: X-Request-Id
          in: header
          required: true
          schema:
            type: string
            format: uuid
        - name: X-Trace
          in: header
          schema:
            type: string
        - name: session
          in: cookie
          schema:
            type: string
        - name: theme
          in: cookie
          schema:
            type: string
      requestBody:
        description: New order state.
        required: true
        content:
          application/json:
            schema:
              type: object
              required:
                - status
              properties:
                status:
                  type: string
                  enum:
                    - new
                    - paid
                note:
                  type: string
      responses:
        "200":
          description: Updated order.
          headers:
            ETag:
              content:
                application/json; charset=utf-8:
                  schema:
                    type: object
                    description: JSON options.
                    properties:
                      strict:
                        type: boolean
            X-Request-Id:
              schema:
                type: string
                format: uuid
          content:
            application/json:
              schema:
                type: object
                properties:
                  id:
                    type: string
                  status:
                    type: string
        "400":
          description: Invalid request.
          content:
            application/problem+json:
              schema:
                type: object
                properties:
                  title:
                    type: string
components:
  securitySchemes:
    api_key:
      type: apiKey
      in: header
      name: X-API-Key
    basic:
      type: http
      scheme: basic
    bearer:
      type: http
      scheme: bearer
      bearerFormat: JWT
    oauth:
      type: oauth2
      flows:
        clientCredentials:
          tokenUrl: https://auth.example.com/token
          scopes:
            orders:read: Read orders
            orders:write: Modify orders
    oidc:
      type: openIdConnect
      openIdConnectUrl: https://auth.example.com/.well-known/openid-configuration
`})))()}var st;function ct(){return(ct=e((()=>{st=`openapi: 3.0.3
info:
  title: Orders
  version: 1.0.0
security:
  - api_key: []
paths:
  /orders/{orderId}:
    post:
      operationId: updateOrder
      summary: Update an order
      description: Replaces the order.
      x-rate-limit: 100
      security:
        - oauth:
            - orders:write
      parameters:
        - name: orderId
          in: path
          required: true
          schema:
            type: string
        - name: dryRun
          in: query
          schema:
            type: boolean
        - name: expand
          in: query
          schema:
            type: string
        - name: X-Request-Id
          in: header
          required: true
          schema:
            type: string
            format: uuid
        - name: X-Trace
          in: header
          schema:
            type: string
        - name: session
          in: cookie
          schema:
            type: string
        - name: theme
          in: cookie
          schema:
            type: string
      requestBody:
        description: New order state.
        required: true
        content:
          application/json:
            schema:
              type: object
              required:
                - status
              properties:
                status:
                  type: string
                  enum:
                    - new
                    - paid
                note:
                  type: string
      responses:
        "200":
          description: Updated order.
          headers:
            ETag:
              schema:
                type: string
              x-owner: orders-team
            X-Request-Id:
              schema:
                type: string
                format: uuid
          content:
            application/json:
              schema:
                type: object
                properties:
                  id:
                    type: string
                  status:
                    type: string
        "400":
          description: Invalid request.
          content:
            application/problem+json:
              schema:
                type: object
                properties:
                  title:
                    type: string
components:
  securitySchemes:
    api_key:
      type: apiKey
      in: header
      name: X-API-Key
    basic:
      type: http
      scheme: basic
    bearer:
      type: http
      scheme: bearer
      bearerFormat: JWT
    oauth:
      type: oauth2
      flows:
        clientCredentials:
          tokenUrl: https://auth.example.com/token
          scopes:
            orders:read: Read orders
            orders:write: Modify orders
    oidc:
      type: openIdConnect
      openIdConnectUrl: https://auth.example.com/.well-known/openid-configuration
`})))()}var lt;function ut(){return(ut=e((()=>{lt=`openapi: 3.0.3
info:
  title: Orders
  version: 1.0.0
security:
  - api_key: []
paths:
  /orders/{orderId}:
    post:
      operationId: updateOrder
      summary: Update an order
      description: Replaces the order.
      x-rate-limit: 100
      security:
        - oauth:
            - orders:write
      parameters:
        - name: orderId
          in: path
          required: true
          schema:
            type: string
        - name: dryRun
          in: query
          schema:
            type: boolean
        - name: expand
          in: query
          schema:
            type: string
        - name: X-Request-Id
          in: header
          required: true
          schema:
            type: string
            format: uuid
        - name: X-Trace
          in: header
          schema:
            type: string
        - name: session
          in: cookie
          schema:
            type: string
        - name: theme
          in: cookie
          schema:
            type: string
      requestBody:
        description: New order state.
        required: true
        content:
          application/json:
            schema:
              type: object
              required:
                - status
              properties:
                status:
                  type: string
                  enum:
                    - new
                    - paid
                note:
                  type: string
      responses:
        "200":
          description: Updated order.
          headers:
            ETag:
              schema:
                type: string
            X-Request-Id:
              schema:
                type: string
                format: uuid
          content:
            application/json:
              schema:
                type: object
                properties:
                  id:
                    type: string
                  status:
                    type: string
        "400":
          description: Invalid request.
          content:
            application/problem+json:
              schema:
                type: object
                properties:
                  title:
                    type: string
components:
  securitySchemes:
    api_key:
      type: apiKey
      in: header
      name: X-API-Key
    basic:
      type: http
      scheme: basic
    bearer:
      type: http
      scheme: bearer
      bearerFormat: JWT
    oauth:
      type: oauth2
      flows:
        clientCredentials:
          tokenUrl: https://auth.example.com/token
          scopes:
            orders:read: Read orders
            orders:write: Modify orders
    oidc:
      type: openIdConnect
      openIdConnectUrl: https://auth.example.com/.well-known/openid-configuration
`})))()}var dt;function ft(){return(ft=e((()=>{dt=`openapi: 3.0.3
info:
  title: Orders
  version: 1.0.0
security:
  - api_key: []
paths:
  /orders/{orderId}:
    post:
      operationId: updateOrder
      summary: Update an order
      description: Replaces the order.
      x-rate-limit: 100
      security:
        - oauth:
            - orders:write
      parameters:
        - name: orderId
          in: path
          required: true
          schema:
            type: string
        - name: dryRun
          in: query
          schema:
            type: boolean
        - name: expand
          in: query
          schema:
            type: string
        - name: X-Request-Id
          in: header
          required: true
          schema:
            type: string
            format: uuid
        - name: X-Trace
          in: header
          schema:
            type: string
        - name: session
          in: cookie
          schema:
            type: string
        - name: theme
          in: cookie
          schema:
            type: string
      requestBody:
        description: New order state.
        required: true
        content:
          application/json:
            schema:
              type: object
              required:
                - status
              properties:
                status:
                  type: string
                  enum:
                    - new
                    - paid
                note:
                  type: string
      responses:
        "200":
          description: Updated order.
          headers:
            ETag:
              schema:
                type: string
              x-owner: billing-team
              x-internal: true
            X-Request-Id:
              schema:
                type: string
                format: uuid
          content:
            application/json:
              schema:
                type: object
                properties:
                  id:
                    type: string
                  status:
                    type: string
        "400":
          description: Invalid request.
          content:
            application/problem+json:
              schema:
                type: object
                properties:
                  title:
                    type: string
components:
  securitySchemes:
    api_key:
      type: apiKey
      in: header
      name: X-API-Key
    basic:
      type: http
      scheme: basic
    bearer:
      type: http
      scheme: bearer
      bearerFormat: JWT
    oauth:
      type: oauth2
      flows:
        clientCredentials:
          tokenUrl: https://auth.example.com/token
          scopes:
            orders:read: Read orders
            orders:write: Modify orders
    oidc:
      type: openIdConnect
      openIdConnectUrl: https://auth.example.com/.well-known/openid-configuration
`})))()}var pt;function mt(){return(mt=e((()=>{pt=`openapi: 3.0.3
info:
  title: Orders
  version: 1.0.0
security:
  - api_key: []
paths:
  /orders/{orderId}:
    post:
      operationId: updateOrder
      summary: Update an order
      description: Replaces the order.
      x-rate-limit: 100
      security:
        - oauth:
            - orders:write
      parameters:
        - name: orderId
          in: path
          required: true
          schema:
            type: string
        - name: dryRun
          in: query
          schema:
            type: boolean
        - name: expand
          in: query
          schema:
            type: string
        - name: X-Request-Id
          in: header
          required: true
          schema:
            type: string
            format: uuid
        - name: X-Trace
          in: header
          schema:
            type: string
        - name: session
          in: cookie
          schema:
            type: string
        - name: theme
          in: cookie
          schema:
            type: string
      requestBody:
        description: New order state.
        required: true
        content:
          application/json:
            schema:
              type: object
              required:
                - status
              properties:
                status:
                  type: string
                  enum:
                    - new
                    - paid
                note:
                  type: string
      responses:
        "200":
          description: Updated order.
          headers:
            ETag:
              schema:
                type: string
                x-owner: orders-team
            X-Request-Id:
              schema:
                type: string
                format: uuid
          content:
            application/json:
              schema:
                type: object
                properties:
                  id:
                    type: string
                  status:
                    type: string
        "400":
          description: Invalid request.
          content:
            application/problem+json:
              schema:
                type: object
                properties:
                  title:
                    type: string
components:
  securitySchemes:
    api_key:
      type: apiKey
      in: header
      name: X-API-Key
    basic:
      type: http
      scheme: basic
    bearer:
      type: http
      scheme: bearer
      bearerFormat: JWT
    oauth:
      type: oauth2
      flows:
        clientCredentials:
          tokenUrl: https://auth.example.com/token
          scopes:
            orders:read: Read orders
            orders:write: Modify orders
    oidc:
      type: openIdConnect
      openIdConnectUrl: https://auth.example.com/.well-known/openid-configuration
`})))()}var ht;function gt(){return(gt=e((()=>{ht=`openapi: 3.0.3
info:
  title: Orders
  version: 1.0.0
security:
  - api_key: []
paths:
  /orders/{orderId}:
    post:
      operationId: updateOrder
      summary: Update an order
      description: Replaces the order.
      x-rate-limit: 100
      security:
        - oauth:
            - orders:write
      parameters:
        - name: orderId
          in: path
          required: true
          schema:
            type: string
        - name: dryRun
          in: query
          schema:
            type: boolean
        - name: expand
          in: query
          schema:
            type: string
        - name: X-Request-Id
          in: header
          required: true
          schema:
            type: string
            format: uuid
        - name: X-Trace
          in: header
          schema:
            type: string
        - name: session
          in: cookie
          schema:
            type: string
        - name: theme
          in: cookie
          schema:
            type: string
      requestBody:
        description: New order state.
        required: true
        content:
          application/json:
            schema:
              type: object
              required:
                - status
              properties:
                status:
                  type: string
                  enum:
                    - new
                    - paid
                note:
                  type: string
      responses:
        "200":
          description: Updated order.
          headers:
            ETag:
              schema:
                type: string
              x-owner: orders-team
            X-Request-Id:
              schema:
                type: string
                format: uuid
          content:
            application/json:
              schema:
                type: object
                properties:
                  id:
                    type: string
                  status:
                    type: string
        "400":
          description: Invalid request.
          content:
            application/problem+json:
              schema:
                type: object
                properties:
                  title:
                    type: string
components:
  securitySchemes:
    api_key:
      type: apiKey
      in: header
      name: X-API-Key
    basic:
      type: http
      scheme: basic
    bearer:
      type: http
      scheme: bearer
      bearerFormat: JWT
    oauth:
      type: oauth2
      flows:
        clientCredentials:
          tokenUrl: https://auth.example.com/token
          scopes:
            orders:read: Read orders
            orders:write: Modify orders
    oidc:
      type: openIdConnect
      openIdConnectUrl: https://auth.example.com/.well-known/openid-configuration
`})))()}var _t;function vt(){return(vt=e((()=>{_t=`openapi: 3.0.3
info:
  title: Orders
  version: 1.0.0
security:
  - api_key: []
paths:
  /orders/{orderId}:
    post:
      operationId: updateOrder
      summary: Update an order
      description: Replaces the order.
      x-rate-limit: 100
      security:
        - oauth:
            - orders:write
      parameters:
        - name: orderId
          in: path
          required: true
          schema:
            type: string
        - name: dryRun
          in: query
          schema:
            type: boolean
        - name: expand
          in: query
          schema:
            type: string
        - name: X-Request-Id
          in: header
          required: true
          schema:
            type: string
            format: uuid
        - name: X-Trace
          in: header
          schema:
            type: string
        - name: session
          in: cookie
          schema:
            type: string
        - name: theme
          in: cookie
          schema:
            type: string
      requestBody:
        description: New order state.
        required: true
        content:
          application/json:
            schema:
              type: object
              required:
                - status
              properties:
                status:
                  type: string
                  enum:
                    - new
                    - paid
                note:
                  type: string
      responses:
        "200":
          description: Updated order.
          headers:
            ETag:
              schema:
                type: string
            X-Request-Id:
              schema:
                type: string
                format: uuid
          content:
            application/json:
              schema:
                type: object
                properties:
                  id:
                    type: string
                  status:
                    type: string
        "400":
          description: Invalid request.
          content:
            application/problem+json:
              schema:
                type: object
                properties:
                  title:
                    type: string
components:
  securitySchemes:
    api_key:
      type: apiKey
      in: header
      name: X-API-Key
    basic:
      type: http
      scheme: basic
    bearer:
      type: http
      scheme: bearer
      bearerFormat: JWT
    oauth:
      type: oauth2
      flows:
        clientCredentials:
          tokenUrl: https://auth.example.com/token
          scopes:
            orders:read: Read orders
            orders:write: Modify orders
    oidc:
      type: openIdConnect
      openIdConnectUrl: https://auth.example.com/.well-known/openid-configuration
`})))()}var yt;function bt(){return(bt=e((()=>{yt=`openapi: 3.0.3
info:
  title: Orders
  version: 1.0.0
security:
  - api_key: []
paths:
  /orders/{orderId}:
    post:
      operationId: updateOrder
      summary: Update an order
      description: Replaces the order.
      x-rate-limit: 100
      security:
        - oauth:
            - orders:write
      parameters:
        - name: orderId
          in: path
          required: true
          schema:
            type: string
        - name: dryRun
          in: query
          schema:
            type: boolean
        - name: expand
          in: query
          schema:
            type: string
        - name: X-Request-Id
          in: header
          required: true
          schema:
            type: string
            format: uuid
        - name: X-Trace
          in: header
          schema:
            type: string
        - name: session
          in: cookie
          schema:
            type: string
        - name: theme
          in: cookie
          schema:
            type: string
      requestBody:
        description: New order state.
        required: true
        content:
          application/json:
            schema:
              type: object
              required:
                - status
              properties:
                status:
                  type: string
                  enum:
                    - new
                    - paid
                note:
                  type: string
      responses:
        "200":
          description: Updated order.
          content:
            application/json:
              schema:
                type: object
                properties:
                  id:
                    type: string
                  status:
                    type: string
        "400":
          description: Invalid request.
          content:
            application/problem+json:
              schema:
                type: object
                properties:
                  title:
                    type: string
components:
  securitySchemes:
    api_key:
      type: apiKey
      in: header
      name: X-API-Key
    basic:
      type: http
      scheme: basic
    bearer:
      type: http
      scheme: bearer
      bearerFormat: JWT
    oauth:
      type: oauth2
      flows:
        clientCredentials:
          tokenUrl: https://auth.example.com/token
          scopes:
            orders:read: Read orders
            orders:write: Modify orders
    oidc:
      type: openIdConnect
      openIdConnectUrl: https://auth.example.com/.well-known/openid-configuration
`})))()}var xt;function St(){return(St=e((()=>{xt=`openapi: 3.0.3
info:
  title: Orders
  version: 1.0.0
security:
  - api_key: []
paths:
  /orders/{orderId}:
    post:
      operationId: updateOrder
      summary: Update an order
      description: Replaces the order.
      x-rate-limit: 100
      security:
        - oauth:
            - orders:write
      parameters:
        - name: orderId
          in: path
          required: true
          schema:
            type: string
        - name: dryRun
          in: query
          schema:
            type: boolean
        - name: expand
          in: query
          schema:
            type: string
        - name: X-Request-Id
          in: header
          required: true
          schema:
            type: string
            format: uuid
        - name: X-Trace
          in: header
          schema:
            type: string
        - name: session
          in: cookie
          schema:
            type: string
        - name: theme
          in: cookie
          schema:
            type: string
      requestBody:
        description: New order state.
        required: true
        content:
          application/json:
            schema:
              type: object
              required:
                - status
              properties:
                status:
                  type: string
                  enum:
                    - new
                    - paid
                note:
                  type: string
      responses:
        "200":
          description: Updated order.
          headers:
            ETag:
              schema:
                type: string
                description: Entry text v1.
            X-Request-Id:
              schema:
                type: string
                format: uuid
          content:
            application/json:
              schema:
                type: object
                properties:
                  id:
                    type: string
                  status:
                    type: string
        "400":
          description: Invalid request.
          content:
            application/problem+json:
              schema:
                type: object
                properties:
                  title:
                    type: string
components:
  securitySchemes:
    api_key:
      type: apiKey
      in: header
      name: X-API-Key
    basic:
      type: http
      scheme: basic
    bearer:
      type: http
      scheme: bearer
      bearerFormat: JWT
    oauth:
      type: oauth2
      flows:
        clientCredentials:
          tokenUrl: https://auth.example.com/token
          scopes:
            orders:read: Read orders
            orders:write: Modify orders
    oidc:
      type: openIdConnect
      openIdConnectUrl: https://auth.example.com/.well-known/openid-configuration
`})))()}var Ct;function wt(){return(wt=e((()=>{Ct=`openapi: 3.0.3
info:
  title: Orders
  version: 1.0.0
security:
  - api_key: []
paths:
  /orders/{orderId}:
    post:
      operationId: updateOrder
      summary: Update an order
      description: Replaces the order.
      x-rate-limit: 100
      security:
        - oauth:
            - orders:write
      parameters:
        - name: orderId
          in: path
          required: true
          schema:
            type: string
        - name: dryRun
          in: query
          schema:
            type: boolean
        - name: expand
          in: query
          schema:
            type: string
        - name: X-Request-Id
          in: header
          required: true
          schema:
            type: string
            format: uuid
        - name: X-Trace
          in: header
          schema:
            type: string
        - name: session
          in: cookie
          schema:
            type: string
        - name: theme
          in: cookie
          schema:
            type: string
      requestBody:
        description: New order state.
        required: true
        content:
          application/json:
            schema:
              type: object
              required:
                - status
              properties:
                status:
                  type: string
                  enum:
                    - new
                    - paid
                note:
                  type: string
      responses:
        "200":
          description: Updated order.
          headers:
            ETag:
              schema:
                type: string
              description: Entry text v1.
            X-Request-Id:
              schema:
                type: string
                format: uuid
          content:
            application/json:
              schema:
                type: object
                properties:
                  id:
                    type: string
                  status:
                    type: string
        "400":
          description: Invalid request.
          content:
            application/problem+json:
              schema:
                type: object
                properties:
                  title:
                    type: string
components:
  securitySchemes:
    api_key:
      type: apiKey
      in: header
      name: X-API-Key
    basic:
      type: http
      scheme: basic
    bearer:
      type: http
      scheme: bearer
      bearerFormat: JWT
    oauth:
      type: oauth2
      flows:
        clientCredentials:
          tokenUrl: https://auth.example.com/token
          scopes:
            orders:read: Read orders
            orders:write: Modify orders
    oidc:
      type: openIdConnect
      openIdConnectUrl: https://auth.example.com/.well-known/openid-configuration
`})))()}var Tt;function Et(){return(Et=e((()=>{Tt=`openapi: 3.0.3
info:
  title: Orders
  version: 1.0.0
security:
  - api_key: []
paths:
  /orders/{orderId}:
    post:
      operationId: updateOrder
      summary: Update an order
      description: Replaces the order.
      x-rate-limit: 100
      security:
        - oauth:
            - orders:write
      parameters:
        - name: orderId
          in: path
          required: true
          schema:
            type: string
        - name: dryRun
          in: query
          schema:
            type: boolean
        - name: expand
          in: query
          schema:
            type: string
        - name: X-Request-Id
          in: header
          required: true
          schema:
            type: string
            format: uuid
        - name: X-Trace
          in: header
          schema:
            type: string
        - name: session
          in: cookie
          schema:
            type: string
        - name: theme
          in: cookie
          schema:
            type: string
      requestBody:
        description: New order state.
        required: true
        content:
          application/json:
            schema:
              type: object
              required:
                - status
              properties:
                status:
                  type: string
                  enum:
                    - new
                    - paid
                note:
                  type: string
      responses:
        "200":
          description: Updated order.
          headers:
            ETag:
              schema:
                type: string
                description: Schema text v2.
            X-Request-Id:
              schema:
                type: string
                format: uuid
          content:
            application/json:
              schema:
                type: object
                properties:
                  id:
                    type: string
                  status:
                    type: string
        "400":
          description: Invalid request.
          content:
            application/problem+json:
              schema:
                type: object
                properties:
                  title:
                    type: string
components:
  securitySchemes:
    api_key:
      type: apiKey
      in: header
      name: X-API-Key
    basic:
      type: http
      scheme: basic
    bearer:
      type: http
      scheme: bearer
      bearerFormat: JWT
    oauth:
      type: oauth2
      flows:
        clientCredentials:
          tokenUrl: https://auth.example.com/token
          scopes:
            orders:read: Read orders
            orders:write: Modify orders
    oidc:
      type: openIdConnect
      openIdConnectUrl: https://auth.example.com/.well-known/openid-configuration
`})))()}var Dt;function Ot(){return(Ot=e((()=>{Dt=`openapi: 3.0.3
info:
  title: Orders
  version: 1.0.0
security:
  - api_key: []
paths:
  /orders/{orderId}:
    post:
      operationId: updateOrder
      summary: Update an order
      description: Replaces the order.
      x-rate-limit: 100
      security:
        - oauth:
            - orders:write
      parameters:
        - name: orderId
          in: path
          required: true
          schema:
            type: string
        - name: dryRun
          in: query
          schema:
            type: boolean
        - name: expand
          in: query
          schema:
            type: string
        - name: X-Request-Id
          in: header
          required: true
          schema:
            type: string
            format: uuid
        - name: X-Trace
          in: header
          schema:
            type: string
        - name: session
          in: cookie
          schema:
            type: string
        - name: theme
          in: cookie
          schema:
            type: string
      requestBody:
        description: New order state.
        required: true
        content:
          application/json:
            schema:
              type: object
              required:
                - status
              properties:
                status:
                  type: string
                  enum:
                    - new
                    - paid
                note:
                  type: string
      responses:
        "200":
          description: Updated order.
          headers:
            ETag:
              schema:
                type: string
              description: Entry text v1.
            X-Request-Id:
              schema:
                type: string
                format: uuid
          content:
            application/json:
              schema:
                type: object
                properties:
                  id:
                    type: string
                  status:
                    type: string
        "400":
          description: Invalid request.
          content:
            application/problem+json:
              schema:
                type: object
                properties:
                  title:
                    type: string
components:
  securitySchemes:
    api_key:
      type: apiKey
      in: header
      name: X-API-Key
    basic:
      type: http
      scheme: basic
    bearer:
      type: http
      scheme: bearer
      bearerFormat: JWT
    oauth:
      type: oauth2
      flows:
        clientCredentials:
          tokenUrl: https://auth.example.com/token
          scopes:
            orders:read: Read orders
            orders:write: Modify orders
    oidc:
      type: openIdConnect
      openIdConnectUrl: https://auth.example.com/.well-known/openid-configuration
`})))()}var kt;function At(){return(At=e((()=>{kt=`openapi: 3.0.3
info:
  title: Orders
  version: 1.0.0
security:
  - api_key: []
paths:
  /orders/{orderId}:
    post:
      operationId: updateOrder
      summary: Update an order
      description: Replaces the order.
      x-rate-limit: 100
      security:
        - oauth:
            - orders:write
      parameters:
        - name: orderId
          in: path
          required: true
          schema:
            type: string
        - name: dryRun
          in: query
          schema:
            type: boolean
        - name: expand
          in: query
          schema:
            type: string
        - name: X-Request-Id
          in: header
          required: true
          schema:
            type: string
            format: uuid
        - name: X-Trace
          in: header
          schema:
            type: string
        - name: session
          in: cookie
          schema:
            type: string
        - name: theme
          in: cookie
          schema:
            type: string
      requestBody:
        description: New order state.
        required: true
        content:
          application/json:
            schema:
              type: object
              required:
                - status
              properties:
                status:
                  type: string
                  enum:
                    - new
                    - paid
                note:
                  type: string
      responses:
        "200":
          description: Updated order.
          headers:
            ETag:
              schema:
                type: string
                description: Schema text v2.
              description: Entry text v2.
            X-Request-Id:
              schema:
                type: string
                format: uuid
          content:
            application/json:
              schema:
                type: object
                properties:
                  id:
                    type: string
                  status:
                    type: string
        "400":
          description: Invalid request.
          content:
            application/problem+json:
              schema:
                type: object
                properties:
                  title:
                    type: string
components:
  securitySchemes:
    api_key:
      type: apiKey
      in: header
      name: X-API-Key
    basic:
      type: http
      scheme: basic
    bearer:
      type: http
      scheme: bearer
      bearerFormat: JWT
    oauth:
      type: oauth2
      flows:
        clientCredentials:
          tokenUrl: https://auth.example.com/token
          scopes:
            orders:read: Read orders
            orders:write: Modify orders
    oidc:
      type: openIdConnect
      openIdConnectUrl: https://auth.example.com/.well-known/openid-configuration
`})))()}var jt;function Mt(){return(Mt=e((()=>{jt=`openapi: 3.0.3
info:
  title: Orders
  version: 1.0.0
security:
  - api_key: []
paths:
  /orders/{orderId}:
    post:
      operationId: updateOrder
      summary: Update an order
      description: Replaces the order.
      x-rate-limit: 100
      security:
        - oauth:
            - orders:write
      parameters:
        - name: orderId
          in: path
          required: true
          schema:
            type: string
        - name: dryRun
          in: query
          schema:
            type: boolean
        - name: expand
          in: query
          schema:
            type: string
        - name: X-Request-Id
          in: header
          required: true
          schema:
            type: string
            format: uuid
        - name: X-Trace
          in: header
          schema:
            type: string
        - name: session
          in: cookie
          schema:
            type: string
        - name: theme
          in: cookie
          schema:
            type: string
      requestBody:
        description: New order state.
        required: true
        content:
          application/json:
            schema:
              type: object
              required:
                - status
              properties:
                status:
                  type: string
                  enum:
                    - new
                    - paid
                note:
                  type: string
      responses:
        "200":
          description: Updated order.
          headers:
            ETag:
              schema:
                type: string
                description: Schema text v2.
              description: Entry text v1.
            X-Request-Id:
              schema:
                type: string
                format: uuid
          content:
            application/json:
              schema:
                type: object
                properties:
                  id:
                    type: string
                  status:
                    type: string
        "400":
          description: Invalid request.
          content:
            application/problem+json:
              schema:
                type: object
                properties:
                  title:
                    type: string
components:
  securitySchemes:
    api_key:
      type: apiKey
      in: header
      name: X-API-Key
    basic:
      type: http
      scheme: basic
    bearer:
      type: http
      scheme: bearer
      bearerFormat: JWT
    oauth:
      type: oauth2
      flows:
        clientCredentials:
          tokenUrl: https://auth.example.com/token
          scopes:
            orders:read: Read orders
            orders:write: Modify orders
    oidc:
      type: openIdConnect
      openIdConnectUrl: https://auth.example.com/.well-known/openid-configuration
`})))()}var Nt,Pt,D,O,k,A,j,M,N,P,F,I,L,R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q,$,Ft;function It(){return(It=e((()=>{le(),de(),pe(),he(),_e(),ye(),xe(),Ce(),Te(),De(),n(),i(),o(),c(),u(),f(),m(),g(),v(),b(),S(),w(),ke(),je(),Ne(),Fe(),Le(),ze(),Ve(),Ue(),Ge(),qe(),Ye(),Ze(),$e(),et(),nt(),it(),ot(),ct(),ut(),ft(),mt(),gt(),vt(),bt(),St(),wt(),Et(),Ot(),At(),Mt(),te(),t(),ie(),oe(),Nt=ee(ne(Object.assign({"../../../../samples/openapi-diffs/response-headers/01-entry-added/before.yaml":ce,"../../../../samples/openapi-diffs/response-headers/02-entry-removed/before.yaml":ue,"../../../../samples/openapi-diffs/response-headers/03-entry-renamed/before.yaml":fe,"../../../../samples/openapi-diffs/response-headers/04-required-added/before.yaml":me,"../../../../samples/openapi-diffs/response-headers/05-required-removed/before.yaml":ge,"../../../../samples/openapi-diffs/response-headers/06-description-added/before.yaml":ve,"../../../../samples/openapi-diffs/response-headers/07-description-removed/before.yaml":be,"../../../../samples/openapi-diffs/response-headers/08-description-changed/before.yaml":Se,"../../../../samples/openapi-diffs/response-headers/09-deprecated-added/before.yaml":we,"../../../../samples/openapi-diffs/response-headers/10-deprecated-removed/before.yaml":Ee,"../../../../samples/openapi-diffs/response-headers/11-schema-to-content/before.yaml":Oe,"../../../../samples/openapi-diffs/response-headers/12-content-to-schema/before.yaml":r,"../../../../samples/openapi-diffs/response-headers/13-content-media-type-renamed/before.yaml":a,"../../../../samples/openapi-diffs/response-headers/14-extension-added/before.yaml":s,"../../../../samples/openapi-diffs/response-headers/15-extension-removed/before.yaml":l,"../../../../samples/openapi-diffs/response-headers/16-extension-changed/before.yaml":d,"../../../../samples/openapi-diffs/response-headers/17-extension-moved-to-schema/before.yaml":p,"../../../../samples/openapi-diffs/response-headers/18-extension-moved-to-entry/before.yaml":h,"../../../../samples/openapi-diffs/response-headers/19-all-added/before.yaml":_,"../../../../samples/openapi-diffs/response-headers/20-all-removed/before.yaml":y,"../../../../samples/openapi-diffs/response-headers/21-description-moved-entry-to-schema/before.yaml":x,"../../../../samples/openapi-diffs/response-headers/22-description-moved-schema-to-entry/before.yaml":C,"../../../../samples/openapi-diffs/response-headers/23-description-entry-removed-schema-added/before.yaml":T,"../../../../samples/openapi-diffs/response-headers/24-description-schema-removed-entry-added/before.yaml":Ae,"../../../../samples/openapi-diffs/response-headers/25-description-both-places-changed/before.yaml":Me,"../../../../samples/openapi-diffs/response-headers/26-description-schema-changed-under-entry/before.yaml":Pe}),Object.assign({"../../../../samples/openapi-diffs/response-headers/01-entry-added/after.yaml":Ie,"../../../../samples/openapi-diffs/response-headers/02-entry-removed/after.yaml":Re,"../../../../samples/openapi-diffs/response-headers/03-entry-renamed/after.yaml":Be,"../../../../samples/openapi-diffs/response-headers/04-required-added/after.yaml":He,"../../../../samples/openapi-diffs/response-headers/05-required-removed/after.yaml":We,"../../../../samples/openapi-diffs/response-headers/06-description-added/after.yaml":Ke,"../../../../samples/openapi-diffs/response-headers/07-description-removed/after.yaml":Je,"../../../../samples/openapi-diffs/response-headers/08-description-changed/after.yaml":Xe,"../../../../samples/openapi-diffs/response-headers/09-deprecated-added/after.yaml":Qe,"../../../../samples/openapi-diffs/response-headers/10-deprecated-removed/after.yaml":E,"../../../../samples/openapi-diffs/response-headers/11-schema-to-content/after.yaml":tt,"../../../../samples/openapi-diffs/response-headers/12-content-to-schema/after.yaml":rt,"../../../../samples/openapi-diffs/response-headers/13-content-media-type-renamed/after.yaml":at,"../../../../samples/openapi-diffs/response-headers/14-extension-added/after.yaml":st,"../../../../samples/openapi-diffs/response-headers/15-extension-removed/after.yaml":lt,"../../../../samples/openapi-diffs/response-headers/16-extension-changed/after.yaml":dt,"../../../../samples/openapi-diffs/response-headers/17-extension-moved-to-schema/after.yaml":pt,"../../../../samples/openapi-diffs/response-headers/18-extension-moved-to-entry/after.yaml":ht,"../../../../samples/openapi-diffs/response-headers/19-all-added/after.yaml":_t,"../../../../samples/openapi-diffs/response-headers/20-all-removed/after.yaml":yt,"../../../../samples/openapi-diffs/response-headers/21-description-moved-entry-to-schema/after.yaml":xt,"../../../../samples/openapi-diffs/response-headers/22-description-moved-schema-to-entry/after.yaml":Ct,"../../../../samples/openapi-diffs/response-headers/23-description-entry-removed-schema-added/after.yaml":Tt,"../../../../samples/openapi-diffs/response-headers/24-description-schema-removed-entry-added/after.yaml":Dt,"../../../../samples/openapi-diffs/response-headers/25-description-both-places-changed/after.yaml":kt,"../../../../samples/openapi-diffs/response-headers/26-description-schema-changed-under-entry/after.yaml":jt}))),Pt={title:`OpenAPI Operation Diffs Suite/Response Headers`,component:se,argTypes:ae,args:re},D=e=>{let t=Nt[e];if(!t)throw Error(`Sample case not found: ${e}`);return{name:e,args:{caseId:e,beforeYaml:t.beforeYaml,afterYaml:t.afterYaml}}},O=D(`01-entry-added`),k=D(`02-entry-removed`),A=D(`03-entry-renamed`),j=D(`04-required-added`),M=D(`05-required-removed`),N=D(`06-description-added`),P=D(`07-description-removed`),F=D(`08-description-changed`),I=D(`09-deprecated-added`),L=D(`10-deprecated-removed`),R=D(`11-schema-to-content`),z=D(`12-content-to-schema`),B=D(`13-content-media-type-renamed`),V=D(`14-extension-added`),H=D(`15-extension-removed`),U=D(`16-extension-changed`),W=D(`17-extension-moved-to-schema`),G=D(`18-extension-moved-to-entry`),K=D(`19-all-added`),q=D(`20-all-removed`),J=D(`21-description-moved-entry-to-schema`),Y=D(`22-description-moved-schema-to-entry`),X=D(`23-description-entry-removed-schema-added`),Z=D(`24-description-schema-removed-entry-added`),Q=D(`25-description-both-places-changed`),$=D(`26-description-schema-changed-under-entry`),O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`createCaseStory("01-entry-added")`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`createCaseStory("02-entry-removed")`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`createCaseStory("03-entry-renamed")`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`createCaseStory("04-required-added")`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`createCaseStory("05-required-removed")`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`createCaseStory("06-description-added")`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`createCaseStory("07-description-removed")`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`createCaseStory("08-description-changed")`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`createCaseStory("09-deprecated-added")`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`createCaseStory("10-deprecated-removed")`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`createCaseStory("11-schema-to-content")`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`createCaseStory("12-content-to-schema")`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`createCaseStory("13-content-media-type-renamed")`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`createCaseStory("14-extension-added")`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`createCaseStory("15-extension-removed")`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`createCaseStory("16-extension-changed")`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`createCaseStory("17-extension-moved-to-schema")`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`createCaseStory("18-extension-moved-to-entry")`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`createCaseStory("19-all-added")`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`createCaseStory("20-all-removed")`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`createCaseStory("21-description-moved-entry-to-schema")`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`createCaseStory("22-description-moved-schema-to-entry")`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`createCaseStory("23-description-entry-removed-schema-added")`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`createCaseStory("24-description-schema-removed-entry-added")`,...Z.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`createCaseStory("25-description-both-places-changed")`,...Q.parameters?.docs?.source}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`createCaseStory("26-description-schema-changed-under-entry")`,...$.parameters?.docs?.source}}},Ft=`Case_01_entry_added.Case_02_entry_removed.Case_03_entry_renamed.Case_04_required_added.Case_05_required_removed.Case_06_description_added.Case_07_description_removed.Case_08_description_changed.Case_09_deprecated_added.Case_10_deprecated_removed.Case_11_schema_to_content.Case_12_content_to_schema.Case_13_content_media_type_renamed.Case_14_extension_added.Case_15_extension_removed.Case_16_extension_changed.Case_17_extension_moved_to_schema.Case_18_extension_moved_to_entry.Case_19_all_added.Case_20_all_removed.Case_21_description_moved_entry_to_schema.Case_22_description_moved_schema_to_entry.Case_23_description_entry_removed_schema_added.Case_24_description_schema_removed_entry_added.Case_25_description_both_places_changed.Case_26_description_schema_changed_under_entry`.split(`.`)})))()}It();export{O as Case_01_entry_added,k as Case_02_entry_removed,A as Case_03_entry_renamed,j as Case_04_required_added,M as Case_05_required_removed,N as Case_06_description_added,P as Case_07_description_removed,F as Case_08_description_changed,I as Case_09_deprecated_added,L as Case_10_deprecated_removed,R as Case_11_schema_to_content,z as Case_12_content_to_schema,B as Case_13_content_media_type_renamed,V as Case_14_extension_added,H as Case_15_extension_removed,U as Case_16_extension_changed,W as Case_17_extension_moved_to_schema,G as Case_18_extension_moved_to_entry,K as Case_19_all_added,q as Case_20_all_removed,J as Case_21_description_moved_entry_to_schema,Y as Case_22_description_moved_schema_to_entry,X as Case_23_description_entry_removed_schema_added,Z as Case_24_description_schema_removed_entry_added,Q as Case_25_description_both_places_changed,$ as Case_26_description_schema_changed_under_entry,Ft as __namedExportsOrder,Pt as default};