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
        "101":
          description: Switching protocols.
          headers:
            Retry-After:
              schema:
                type: integer
          content:
            application/json:
              schema:
                type: object
                properties:
                  message:
                    type: string
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
        "201":
          description: Order created.
          headers:
            Retry-After:
              schema:
                type: integer
          content:
            application/json:
              schema:
                type: object
                properties:
                  message:
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
        "303":
          description: See the order.
          headers:
            Retry-After:
              schema:
                type: integer
          content:
            application/json:
              schema:
                type: object
                properties:
                  message:
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
        "404":
          description: Order not found.
          headers:
            Retry-After:
              schema:
                type: integer
          content:
            application/json:
              schema:
                type: object
                properties:
                  message:
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
        "500":
          description: Server error.
          headers:
            Retry-After:
              schema:
                type: integer
          content:
            application/json:
              schema:
                type: object
                properties:
                  message:
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
`})))()}var n;function r(){return(r=e((()=>{n=`openapi: 3.0.3
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
`})))()}var i;function a(){return(a=e((()=>{i=`openapi: 3.0.3
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
        5XX:
          description: Any server error.
          headers:
            Retry-After:
              schema:
                type: integer
          content:
            application/json:
              schema:
                type: object
                properties:
                  message:
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
`})))()}var o;function s(){return(s=e((()=>{o=`openapi: 3.0.3
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
`})))()}var c;function l(){return(l=e((()=>{c=`openapi: 3.0.3
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
        default:
          description: Unexpected error.
          headers:
            Retry-After:
              schema:
                type: integer
          content:
            application/json:
              schema:
                type: object
                properties:
                  message:
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
`})))()}var u;function d(){return(d=e((()=>{u=`openapi: 3.0.3
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
        4xx:
          description: Client error.
          headers:
            Retry-After:
              schema:
                type: integer
          content:
            application/json:
              schema:
                type: object
                properties:
                  message:
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
`})))()}var f;function p(){return(p=e((()=>{f=`openapi: 3.0.3
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
        4xx:
          description: Client error.
          headers:
            Retry-After:
              schema:
                type: integer
          content:
            application/json:
              schema:
                type: object
                properties:
                  message:
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
`})))()}var m;function h(){return(h=e((()=>{m=`openapi: 3.0.3
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
`})))()}var g;function _(){return(_=e((()=>{g=`openapi: 3.0.3
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
`})))()}var v;function y(){return(y=e((()=>{v=`openapi: 3.0.3
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
`})))()}var b;function x(){return(x=e((()=>{b=`openapi: 3.0.3
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
          x-cache: private
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
`})))()}var S;function C(){return(C=e((()=>{S=`openapi: 3.0.3
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
          x-cache: private
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
`})))()}var w;function T(){return(T=e((()=>{w=`openapi: 3.0.3
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
`})))()}var E;function Oe(){return(Oe=e((()=>{E=`openapi: 3.0.3
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
        x-rate-limited: true
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
`})))()}var ke;function Ae(){return(Ae=e((()=>{ke=`openapi: 3.0.3
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
          x-cache: private
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
`})))()}var je;function Me(){return(Me=e((()=>{je=`openapi: 3.0.3
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
            application/xml:
              schema:
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
`})))()}var Ne;function Pe(){return(Pe=e((()=>{Ne=`openapi: 3.0.3
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
        "101":
          description: Switching protocols.
          headers:
            Retry-After:
              schema:
                type: integer
          content:
            application/json:
              schema:
                type: object
                properties:
                  message:
                    type: string
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
`})))()}var Fe;function Ie(){return(Ie=e((()=>{Fe=`openapi: 3.0.3
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
`})))()}var Le;function Re(){return(Re=e((()=>{Le=`openapi: 3.0.3
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
        "201":
          description: Order created.
          headers:
            Retry-After:
              schema:
                type: integer
          content:
            application/json:
              schema:
                type: object
                properties:
                  message:
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
`})))()}var ze;function Be(){return(Be=e((()=>{ze=`openapi: 3.0.3
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
`})))()}var Ve;function He(){return(He=e((()=>{Ve=`openapi: 3.0.3
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
        "303":
          description: See the order.
          headers:
            Retry-After:
              schema:
                type: integer
          content:
            application/json:
              schema:
                type: object
                properties:
                  message:
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
`})))()}var Ue;function We(){return(We=e((()=>{Ue=`openapi: 3.0.3
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
`})))()}var Ge;function Ke(){return(Ke=e((()=>{Ge=`openapi: 3.0.3
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
        "404":
          description: Order not found.
          headers:
            Retry-After:
              schema:
                type: integer
          content:
            application/json:
              schema:
                type: object
                properties:
                  message:
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
`})))()}var qe;function Je(){return(Je=e((()=>{qe=`openapi: 3.0.3
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
`})))()}var D;function Ye(){return(Ye=e((()=>{D=`openapi: 3.0.3
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
        "500":
          description: Server error.
          headers:
            Retry-After:
              schema:
                type: integer
          content:
            application/json:
              schema:
                type: object
                properties:
                  message:
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
        5XX:
          description: Any server error.
          headers:
            Retry-After:
              schema:
                type: integer
          content:
            application/json:
              schema:
                type: object
                properties:
                  message:
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
`})))()}var et;function tt(){return(tt=e((()=>{et=`openapi: 3.0.3
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
`})))()}var nt;function rt(){return(rt=e((()=>{nt=`openapi: 3.0.3
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
        default:
          description: Unexpected error.
          headers:
            Retry-After:
              schema:
                type: integer
          content:
            application/json:
              schema:
                type: object
                properties:
                  message:
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
`})))()}var it;function at(){return(at=e((()=>{it=`openapi: 3.0.3
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
`})))()}var ot;function st(){return(st=e((()=>{ot=`openapi: 3.0.3
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
        4XX:
          description: Client error.
          headers:
            Retry-After:
              schema:
                type: integer
          content:
            application/json:
              schema:
                type: object
                properties:
                  message:
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
`})))()}var ct;function lt(){return(lt=e((()=>{ct=`openapi: 3.0.3
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
        4XX:
          description: Any client error.
          headers:
            Retry-After:
              schema:
                type: integer
          content:
            application/json:
              schema:
                type: object
                properties:
                  message:
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
`})))()}var ut;function dt(){return(dt=e((()=>{ut=`openapi: 3.0.3
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
          description: The order after the update.
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
`})))()}var ft;function pt(){return(pt=e((()=>{ft=`openapi: 3.0.3
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
          description: The request is invalid.
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
`})))()}var mt;function ht(){return(ht=e((()=>{mt=`openapi: 3.0.3
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
          x-cache: private
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
`})))()}var gt;function _t(){return(_t=e((()=>{gt=`openapi: 3.0.3
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
`})))()}var vt;function yt(){return(yt=e((()=>{vt=`openapi: 3.0.3
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
          x-cache: public
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
`})))()}var bt;function xt(){return(xt=e((()=>{bt=`openapi: 3.0.3
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
        x-rate-limited: true
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
`})))()}var St;function Ct(){return(Ct=e((()=>{St=`openapi: 3.0.3
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
`})))()}var wt;function Tt(){return(Tt=e((()=>{wt=`openapi: 3.0.3
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
              x-codec: br
          x-cache: public
        "400":
          description: Invalid request.
          content:
            application/problem+json:
              schema:
                type: object
                properties:
                  title:
                    type: string
        x-rate-limited: true
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
`})))()}var Et;function Dt(){return(Dt=e((()=>{Et=`openapi: 3.0.3
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
          description: The order after the update.
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
                type: integer
          content:
            application/json:
              schema:
                type: object
                properties:
                  id:
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
`})))()}var Ot,kt,O,k,A,j,M,N,P,F,I,L,R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q,$,At;function jt(){return(jt=e((()=>{le(),de(),pe(),he(),_e(),ye(),xe(),Ce(),Te(),De(),r(),a(),s(),l(),d(),p(),h(),_(),y(),x(),C(),T(),Oe(),Ae(),Me(),Pe(),Ie(),Re(),Be(),He(),We(),Ke(),Je(),Ye(),Ze(),$e(),tt(),rt(),at(),st(),lt(),dt(),pt(),ht(),_t(),yt(),xt(),Ct(),Tt(),Dt(),te(),t(),ie(),oe(),Ot=ee(ne(Object.assign({"../../../../samples/openapi-diffs/responses/01-response-1xx-added/before.yaml":ce,"../../../../samples/openapi-diffs/responses/02-response-1xx-removed/before.yaml":ue,"../../../../samples/openapi-diffs/responses/03-response-2xx-added/before.yaml":fe,"../../../../samples/openapi-diffs/responses/04-response-2xx-removed/before.yaml":me,"../../../../samples/openapi-diffs/responses/05-response-3xx-added/before.yaml":ge,"../../../../samples/openapi-diffs/responses/06-response-3xx-removed/before.yaml":ve,"../../../../samples/openapi-diffs/responses/07-response-4xx-added/before.yaml":be,"../../../../samples/openapi-diffs/responses/08-response-4xx-removed/before.yaml":Se,"../../../../samples/openapi-diffs/responses/09-response-5xx-added/before.yaml":we,"../../../../samples/openapi-diffs/responses/10-response-5xx-removed/before.yaml":Ee,"../../../../samples/openapi-diffs/responses/11-response-range-added/before.yaml":n,"../../../../samples/openapi-diffs/responses/12-response-range-removed/before.yaml":i,"../../../../samples/openapi-diffs/responses/13-response-default-added/before.yaml":o,"../../../../samples/openapi-diffs/responses/14-response-default-removed/before.yaml":c,"../../../../samples/openapi-diffs/responses/15-code-case-renamed/before.yaml":u,"../../../../samples/openapi-diffs/responses/16-code-renamed-and-description-changed/before.yaml":f,"../../../../samples/openapi-diffs/responses/17-description-changed/before.yaml":m,"../../../../samples/openapi-diffs/responses/18-description-changed-non-initial-code/before.yaml":g,"../../../../samples/openapi-diffs/responses/19-response-extension-added/before.yaml":v,"../../../../samples/openapi-diffs/responses/20-response-extension-removed/before.yaml":b,"../../../../samples/openapi-diffs/responses/21-response-extension-changed/before.yaml":S,"../../../../samples/openapi-diffs/responses/22-responses-extension-added/before.yaml":w,"../../../../samples/openapi-diffs/responses/23-responses-extension-removed/before.yaml":E,"../../../../samples/openapi-diffs/responses/24-responses-and-response-extensions-changed/before.yaml":ke,"../../../../samples/openapi-diffs/responses/25-changes-of-different-severity/before.yaml":je}),Object.assign({"../../../../samples/openapi-diffs/responses/01-response-1xx-added/after.yaml":Ne,"../../../../samples/openapi-diffs/responses/02-response-1xx-removed/after.yaml":Fe,"../../../../samples/openapi-diffs/responses/03-response-2xx-added/after.yaml":Le,"../../../../samples/openapi-diffs/responses/04-response-2xx-removed/after.yaml":ze,"../../../../samples/openapi-diffs/responses/05-response-3xx-added/after.yaml":Ve,"../../../../samples/openapi-diffs/responses/06-response-3xx-removed/after.yaml":Ue,"../../../../samples/openapi-diffs/responses/07-response-4xx-added/after.yaml":Ge,"../../../../samples/openapi-diffs/responses/08-response-4xx-removed/after.yaml":qe,"../../../../samples/openapi-diffs/responses/09-response-5xx-added/after.yaml":D,"../../../../samples/openapi-diffs/responses/10-response-5xx-removed/after.yaml":Xe,"../../../../samples/openapi-diffs/responses/11-response-range-added/after.yaml":Qe,"../../../../samples/openapi-diffs/responses/12-response-range-removed/after.yaml":et,"../../../../samples/openapi-diffs/responses/13-response-default-added/after.yaml":nt,"../../../../samples/openapi-diffs/responses/14-response-default-removed/after.yaml":it,"../../../../samples/openapi-diffs/responses/15-code-case-renamed/after.yaml":ot,"../../../../samples/openapi-diffs/responses/16-code-renamed-and-description-changed/after.yaml":ct,"../../../../samples/openapi-diffs/responses/17-description-changed/after.yaml":ut,"../../../../samples/openapi-diffs/responses/18-description-changed-non-initial-code/after.yaml":ft,"../../../../samples/openapi-diffs/responses/19-response-extension-added/after.yaml":mt,"../../../../samples/openapi-diffs/responses/20-response-extension-removed/after.yaml":gt,"../../../../samples/openapi-diffs/responses/21-response-extension-changed/after.yaml":vt,"../../../../samples/openapi-diffs/responses/22-responses-extension-added/after.yaml":bt,"../../../../samples/openapi-diffs/responses/23-responses-extension-removed/after.yaml":St,"../../../../samples/openapi-diffs/responses/24-responses-and-response-extensions-changed/after.yaml":wt,"../../../../samples/openapi-diffs/responses/25-changes-of-different-severity/after.yaml":Et}))),kt={title:`OpenAPI Operation Diffs Suite/Responses`,component:se,argTypes:ae,args:re},O=e=>{let t=Ot[e];if(!t)throw Error(`Sample case not found: ${e}`);return{name:e,args:{caseId:e,beforeYaml:t.beforeYaml,afterYaml:t.afterYaml}}},k=O(`01-response-1xx-added`),A=O(`02-response-1xx-removed`),j=O(`03-response-2xx-added`),M=O(`04-response-2xx-removed`),N=O(`05-response-3xx-added`),P=O(`06-response-3xx-removed`),F=O(`07-response-4xx-added`),I=O(`08-response-4xx-removed`),L=O(`09-response-5xx-added`),R=O(`10-response-5xx-removed`),z=O(`11-response-range-added`),B=O(`12-response-range-removed`),V=O(`13-response-default-added`),H=O(`14-response-default-removed`),U=O(`15-code-case-renamed`),W=O(`16-code-renamed-and-description-changed`),G=O(`17-description-changed`),K=O(`18-description-changed-non-initial-code`),q=O(`19-response-extension-added`),J=O(`20-response-extension-removed`),Y=O(`21-response-extension-changed`),X=O(`22-responses-extension-added`),Z=O(`23-responses-extension-removed`),Q=O(`24-responses-and-response-extensions-changed`),$=O(`25-changes-of-different-severity`),k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`createCaseStory("01-response-1xx-added")`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`createCaseStory("02-response-1xx-removed")`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`createCaseStory("03-response-2xx-added")`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`createCaseStory("04-response-2xx-removed")`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`createCaseStory("05-response-3xx-added")`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`createCaseStory("06-response-3xx-removed")`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`createCaseStory("07-response-4xx-added")`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`createCaseStory("08-response-4xx-removed")`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`createCaseStory("09-response-5xx-added")`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`createCaseStory("10-response-5xx-removed")`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`createCaseStory("11-response-range-added")`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`createCaseStory("12-response-range-removed")`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`createCaseStory("13-response-default-added")`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`createCaseStory("14-response-default-removed")`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`createCaseStory("15-code-case-renamed")`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`createCaseStory("16-code-renamed-and-description-changed")`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`createCaseStory("17-description-changed")`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`createCaseStory("18-description-changed-non-initial-code")`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`createCaseStory("19-response-extension-added")`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`createCaseStory("20-response-extension-removed")`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`createCaseStory("21-response-extension-changed")`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`createCaseStory("22-responses-extension-added")`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`createCaseStory("23-responses-extension-removed")`,...Z.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`createCaseStory("24-responses-and-response-extensions-changed")`,...Q.parameters?.docs?.source}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`createCaseStory("25-changes-of-different-severity")`,...$.parameters?.docs?.source}}},At=[`Case_01_response_1xx_added`,`Case_02_response_1xx_removed`,`Case_03_response_2xx_added`,`Case_04_response_2xx_removed`,`Case_05_response_3xx_added`,`Case_06_response_3xx_removed`,`Case_07_response_4xx_added`,`Case_08_response_4xx_removed`,`Case_09_response_5xx_added`,`Case_10_response_5xx_removed`,`Case_11_response_range_added`,`Case_12_response_range_removed`,`Case_13_response_default_added`,`Case_14_response_default_removed`,`Case_15_code_case_renamed`,`Case_16_code_renamed_and_description_changed`,`Case_17_description_changed`,`Case_18_description_changed_non_initial_code`,`Case_19_response_extension_added`,`Case_20_response_extension_removed`,`Case_21_response_extension_changed`,`Case_22_responses_extension_added`,`Case_23_responses_extension_removed`,`Case_24_responses_and_response_extensions_changed`,`Case_25_changes_of_different_severity`]})))()}jt();export{k as Case_01_response_1xx_added,A as Case_02_response_1xx_removed,j as Case_03_response_2xx_added,M as Case_04_response_2xx_removed,N as Case_05_response_3xx_added,P as Case_06_response_3xx_removed,F as Case_07_response_4xx_added,I as Case_08_response_4xx_removed,L as Case_09_response_5xx_added,R as Case_10_response_5xx_removed,z as Case_11_response_range_added,B as Case_12_response_range_removed,V as Case_13_response_default_added,H as Case_14_response_default_removed,U as Case_15_code_case_renamed,W as Case_16_code_renamed_and_description_changed,G as Case_17_description_changed,K as Case_18_description_changed_non_initial_code,q as Case_19_response_extension_added,J as Case_20_response_extension_removed,Y as Case_21_response_extension_changed,X as Case_22_responses_extension_added,Z as Case_23_responses_extension_removed,Q as Case_24_responses_and_response_extensions_changed,$ as Case_25_changes_of_different_severity,At as __namedExportsOrder,kt as default};