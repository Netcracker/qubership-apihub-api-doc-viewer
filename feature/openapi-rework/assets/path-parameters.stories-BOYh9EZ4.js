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
          description: Entry text v1.
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
          description: Entry text v1.
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
          deprecated: true
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
            type: boolean
            description: Boolean flag.
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
`})))()}var Se;function n(){return(n=e((()=>{Se=`openapi: 3.0.3
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
          content:
            application/json:
              schema:
                type: object
                description: JSON options.
                properties:
                  strict:
                    type: boolean
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
          content:
            application/json:
              schema:
                type: object
                description: JSON options.
                properties:
                  strict:
                    type: boolean
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
          x-owner: orders-team
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
          x-owner: orders-team
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
          x-owner: orders-team
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
            x-owner: orders-team
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
          description: Entry text v1.
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
            description: Entry text v1.
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
          description: Entry text v1.
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
            description: Schema text v2.
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
            description: Schema text v1.
          description: Entry text v1.
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
`})))()}var T;function E(){return(E=e((()=>{T=`openapi: 3.0.3
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
            description: Schema text v1.
          description: Entry text v1.
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
`})))()}var D;function O(){return(O=e((()=>{D=`openapi: 3.0.3
info:
  title: Orders
  version: 1.0.0
security:
  - api_key: []
paths:
  /orders/{id}:
    post:
      operationId: updateOrder
      summary: Update an order
      description: Replaces the order.
      x-rate-limit: 100
      security:
        - oauth:
            - orders:write
      parameters:
        - name: id
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
`})))()}var k;function A(){return(A=e((()=>{k=`openapi: 3.0.3
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
          description: Entry text v1.
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
`})))()}var j;function Ce(){return(Ce=e((()=>{j=`openapi: 3.0.3
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
          description: Entry text v2.
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
          deprecated: true
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
`})))()}var M;function Oe(){return(Oe=e((()=>{M=`openapi: 3.0.3
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
          content:
            application/json:
              schema:
                type: object
                description: JSON options.
                properties:
                  strict:
                    type: boolean
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
            type: boolean
            description: Boolean flag.
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
          content:
            application/json; charset=utf-8:
              schema:
                type: object
                description: JSON options.
                properties:
                  strict:
                    type: boolean
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
          x-owner: orders-team
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
          x-owner: billing-team
          x-internal: true
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
            x-owner: orders-team
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
          x-owner: orders-team
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
            description: Entry text v1.
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
          description: Entry text v1.
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
`})))()}var Ye;function Xe(){return(Xe=e((()=>{Ye=`openapi: 3.0.3
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
            description: Schema text v2.
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
`})))()}var Ze;function Qe(){return(Qe=e((()=>{Ze=`openapi: 3.0.3
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
          description: Entry text v1.
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
`})))()}var $e;function et(){return(et=e((()=>{$e=`openapi: 3.0.3
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
            description: Schema text v2.
          description: Entry text v2.
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
            description: Schema text v2.
          description: Entry text v1.
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
`})))()}var rt,it,N,P,F,I,L,R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q,$,at;function ot(){return(ot=e((()=>{le(),de(),pe(),he(),_e(),ye(),xe(),n(),i(),o(),c(),u(),f(),m(),g(),v(),b(),S(),w(),E(),O(),A(),Ce(),Te(),De(),Oe(),Ae(),Me(),Pe(),Ie(),Re(),Be(),He(),We(),Ke(),Je(),Xe(),Qe(),et(),nt(),te(),t(),ie(),oe(),rt=ee(ne(Object.assign({"../../../../samples/openapi-diffs/path-parameters/03-entry-renamed/before.yaml":ce,"../../../../samples/openapi-diffs/path-parameters/06-description-added/before.yaml":ue,"../../../../samples/openapi-diffs/path-parameters/07-description-removed/before.yaml":fe,"../../../../samples/openapi-diffs/path-parameters/08-description-changed/before.yaml":me,"../../../../samples/openapi-diffs/path-parameters/09-deprecated-added/before.yaml":ge,"../../../../samples/openapi-diffs/path-parameters/10-deprecated-removed/before.yaml":ve,"../../../../samples/openapi-diffs/path-parameters/11-schema-to-content/before.yaml":be,"../../../../samples/openapi-diffs/path-parameters/12-content-to-schema/before.yaml":Se,"../../../../samples/openapi-diffs/path-parameters/13-content-media-type-renamed/before.yaml":r,"../../../../samples/openapi-diffs/path-parameters/14-extension-added/before.yaml":a,"../../../../samples/openapi-diffs/path-parameters/15-extension-removed/before.yaml":s,"../../../../samples/openapi-diffs/path-parameters/16-extension-changed/before.yaml":l,"../../../../samples/openapi-diffs/path-parameters/17-extension-moved-to-schema/before.yaml":d,"../../../../samples/openapi-diffs/path-parameters/18-extension-moved-to-entry/before.yaml":p,"../../../../samples/openapi-diffs/path-parameters/21-description-moved-entry-to-schema/before.yaml":h,"../../../../samples/openapi-diffs/path-parameters/22-description-moved-schema-to-entry/before.yaml":_,"../../../../samples/openapi-diffs/path-parameters/23-description-entry-removed-schema-added/before.yaml":y,"../../../../samples/openapi-diffs/path-parameters/24-description-schema-removed-entry-added/before.yaml":x,"../../../../samples/openapi-diffs/path-parameters/25-description-both-places-changed/before.yaml":C,"../../../../samples/openapi-diffs/path-parameters/26-description-schema-changed-under-entry/before.yaml":T}),Object.assign({"../../../../samples/openapi-diffs/path-parameters/03-entry-renamed/after.yaml":D,"../../../../samples/openapi-diffs/path-parameters/06-description-added/after.yaml":k,"../../../../samples/openapi-diffs/path-parameters/07-description-removed/after.yaml":j,"../../../../samples/openapi-diffs/path-parameters/08-description-changed/after.yaml":we,"../../../../samples/openapi-diffs/path-parameters/09-deprecated-added/after.yaml":Ee,"../../../../samples/openapi-diffs/path-parameters/10-deprecated-removed/after.yaml":M,"../../../../samples/openapi-diffs/path-parameters/11-schema-to-content/after.yaml":ke,"../../../../samples/openapi-diffs/path-parameters/12-content-to-schema/after.yaml":je,"../../../../samples/openapi-diffs/path-parameters/13-content-media-type-renamed/after.yaml":Ne,"../../../../samples/openapi-diffs/path-parameters/14-extension-added/after.yaml":Fe,"../../../../samples/openapi-diffs/path-parameters/15-extension-removed/after.yaml":Le,"../../../../samples/openapi-diffs/path-parameters/16-extension-changed/after.yaml":ze,"../../../../samples/openapi-diffs/path-parameters/17-extension-moved-to-schema/after.yaml":Ve,"../../../../samples/openapi-diffs/path-parameters/18-extension-moved-to-entry/after.yaml":Ue,"../../../../samples/openapi-diffs/path-parameters/21-description-moved-entry-to-schema/after.yaml":Ge,"../../../../samples/openapi-diffs/path-parameters/22-description-moved-schema-to-entry/after.yaml":qe,"../../../../samples/openapi-diffs/path-parameters/23-description-entry-removed-schema-added/after.yaml":Ye,"../../../../samples/openapi-diffs/path-parameters/24-description-schema-removed-entry-added/after.yaml":Ze,"../../../../samples/openapi-diffs/path-parameters/25-description-both-places-changed/after.yaml":$e,"../../../../samples/openapi-diffs/path-parameters/26-description-schema-changed-under-entry/after.yaml":tt}))),it={title:`OpenAPI Operation Diffs Suite/Path Parameters`,component:se,argTypes:ae,args:re},N=e=>{let t=rt[e];if(!t)throw Error(`Sample case not found: ${e}`);return{name:e,args:{caseId:e,beforeYaml:t.beforeYaml,afterYaml:t.afterYaml}}},P=N(`03-entry-renamed`),F=N(`06-description-added`),I=N(`07-description-removed`),L=N(`08-description-changed`),R=N(`09-deprecated-added`),z=N(`10-deprecated-removed`),B=N(`11-schema-to-content`),V=N(`12-content-to-schema`),H=N(`13-content-media-type-renamed`),U=N(`14-extension-added`),W=N(`15-extension-removed`),G=N(`16-extension-changed`),K=N(`17-extension-moved-to-schema`),q=N(`18-extension-moved-to-entry`),J=N(`21-description-moved-entry-to-schema`),Y=N(`22-description-moved-schema-to-entry`),X=N(`23-description-entry-removed-schema-added`),Z=N(`24-description-schema-removed-entry-added`),Q=N(`25-description-both-places-changed`),$=N(`26-description-schema-changed-under-entry`),P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`createCaseStory("03-entry-renamed")`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`createCaseStory("06-description-added")`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`createCaseStory("07-description-removed")`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`createCaseStory("08-description-changed")`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`createCaseStory("09-deprecated-added")`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`createCaseStory("10-deprecated-removed")`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`createCaseStory("11-schema-to-content")`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`createCaseStory("12-content-to-schema")`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`createCaseStory("13-content-media-type-renamed")`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`createCaseStory("14-extension-added")`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`createCaseStory("15-extension-removed")`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`createCaseStory("16-extension-changed")`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`createCaseStory("17-extension-moved-to-schema")`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`createCaseStory("18-extension-moved-to-entry")`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`createCaseStory("21-description-moved-entry-to-schema")`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`createCaseStory("22-description-moved-schema-to-entry")`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`createCaseStory("23-description-entry-removed-schema-added")`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`createCaseStory("24-description-schema-removed-entry-added")`,...Z.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`createCaseStory("25-description-both-places-changed")`,...Q.parameters?.docs?.source}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`createCaseStory("26-description-schema-changed-under-entry")`,...$.parameters?.docs?.source}}},at=[`Case_03_entry_renamed`,`Case_06_description_added`,`Case_07_description_removed`,`Case_08_description_changed`,`Case_09_deprecated_added`,`Case_10_deprecated_removed`,`Case_11_schema_to_content`,`Case_12_content_to_schema`,`Case_13_content_media_type_renamed`,`Case_14_extension_added`,`Case_15_extension_removed`,`Case_16_extension_changed`,`Case_17_extension_moved_to_schema`,`Case_18_extension_moved_to_entry`,`Case_21_description_moved_entry_to_schema`,`Case_22_description_moved_schema_to_entry`,`Case_23_description_entry_removed_schema_added`,`Case_24_description_schema_removed_entry_added`,`Case_25_description_both_places_changed`,`Case_26_description_schema_changed_under_entry`]})))()}ot();export{P as Case_03_entry_renamed,F as Case_06_description_added,I as Case_07_description_removed,L as Case_08_description_changed,R as Case_09_deprecated_added,z as Case_10_deprecated_removed,B as Case_11_schema_to_content,V as Case_12_content_to_schema,H as Case_13_content_media_type_renamed,U as Case_14_extension_added,W as Case_15_extension_removed,G as Case_16_extension_changed,K as Case_17_extension_moved_to_schema,q as Case_18_extension_moved_to_entry,J as Case_21_description_moved_entry_to_schema,Y as Case_22_description_moved_schema_to_entry,X as Case_23_description_entry_removed_schema_added,Z as Case_24_description_schema_removed_entry_added,Q as Case_25_description_both_places_changed,$ as Case_26_description_schema_changed_under_entry,at as __namedExportsOrder,it as default};