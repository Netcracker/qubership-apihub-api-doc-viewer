import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{i as t,r as ee}from"./sample-cases-DDoAHGgD.js";import{n as te,t as ne}from"./diffs-samples-cases-Bp0vvMWA.js";import{n as re,t as ie}from"./OpenApiDiffSampleStory-BEM122y8.js";var ae;function oe(){return(oe=e((()=>{ae=`openapi: 3.0.3
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
        '200':
          description: Updated order.
          headers:
            ETag:
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
        '400':
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
    oauth:
      type: oauth2
      flows:
        clientCredentials:
          tokenUrl: https://auth.example.com/token
          scopes:
            orders:read: Read orders
            orders:write: Modify orders
`})))()}var se;function ce(){return(ce=e((()=>{se=`openapi: 3.0.3
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
        '200':
          description: Updated order.
          headers:
            ETag:
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
        '400':
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
    oauth:
      type: oauth2
      flows:
        clientCredentials:
          tokenUrl: https://auth.example.com/token
          scopes:
            orders:read: Read orders
            orders:write: Modify orders
`})))()}var le;function ue(){return(ue=e((()=>{le=`openapi: 3.0.3
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
        '200':
          description: Updated order.
          headers:
            ETag:
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
        '400':
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
    oauth:
      type: oauth2
      flows:
        clientCredentials:
          tokenUrl: https://auth.example.com/token
          scopes:
            orders:read: Read orders
            orders:write: Modify orders
`})))()}var de;function fe(){return(fe=e((()=>{de=`openapi: 3.0.3
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
        '200':
          description: Updated order.
          headers:
            ETag:
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
        '400':
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
    oauth:
      type: oauth2
      flows:
        clientCredentials:
          tokenUrl: https://auth.example.com/token
          scopes:
            orders:read: Read orders
            orders:write: Modify orders
`})))()}var pe;function me(){return(me=e((()=>{pe=`openapi: 3.0.3
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
        '200':
          description: Updated order.
          headers:
            ETag:
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
        '400':
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
    oauth:
      type: oauth2
      flows:
        clientCredentials:
          tokenUrl: https://auth.example.com/token
          scopes:
            orders:read: Read orders
            orders:write: Modify orders
`})))()}var he;function ge(){return(ge=e((()=>{he=`openapi: 3.0.3
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
        '200':
          description: Updated order.
          headers:
            ETag:
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
        '400':
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
    oauth:
      type: oauth2
      flows:
        clientCredentials:
          tokenUrl: https://auth.example.com/token
          scopes:
            orders:read: Read orders
            orders:write: Modify orders
`})))()}var _e;function ve(){return(ve=e((()=>{_e=`openapi: 3.0.3
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
        '200':
          description: Updated order.
          headers:
            ETag:
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
        '400':
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
    oauth:
      type: oauth2
      flows:
        clientCredentials:
          tokenUrl: https://auth.example.com/token
          scopes:
            orders:read: Read orders
            orders:write: Modify orders
`})))()}var ye;function be(){return(be=e((()=>{ye=`openapi: 3.0.3
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
        '200':
          description: Updated order.
          headers:
            ETag:
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
        '400':
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
    oauth:
      type: oauth2
      flows:
        clientCredentials:
          tokenUrl: https://auth.example.com/token
          scopes:
            orders:read: Read orders
            orders:write: Modify orders
`})))()}var xe;function Se(){return(Se=e((()=>{xe=`openapi: 3.0.3
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
      responses:
        '200':
          description: Updated order.
          headers:
            ETag:
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
        '400':
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
    oauth:
      type: oauth2
      flows:
        clientCredentials:
          tokenUrl: https://auth.example.com/token
          scopes:
            orders:read: Read orders
            orders:write: Modify orders
`})))()}var Ce;function we(){return(we=e((()=>{Ce=`openapi: 3.0.3
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
        '200':
          description: Updated order.
          headers:
            ETag:
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
        '400':
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
    oauth:
      type: oauth2
      flows:
        clientCredentials:
          tokenUrl: https://auth.example.com/token
          scopes:
            orders:read: Read orders
            orders:write: Modify orders
`})))()}var Te;function Ee(){return(Ee=e((()=>{Te=`openapi: 3.0.3
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
          description: Validate only.
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
        '200':
          description: Updated order.
          headers:
            ETag:
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
        '400':
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
    oauth:
      type: oauth2
      flows:
        clientCredentials:
          tokenUrl: https://auth.example.com/token
          scopes:
            orders:read: Read orders
            orders:write: Modify orders
`})))()}var De;function Oe(){return(Oe=e((()=>{De=`openapi: 3.0.3
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
          description: Validate only.
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
        '200':
          description: Updated order.
          headers:
            ETag:
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
        '400':
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
    oauth:
      type: oauth2
      flows:
        clientCredentials:
          tokenUrl: https://auth.example.com/token
          scopes:
            orders:read: Read orders
            orders:write: Modify orders
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
            description: Validate only.
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
        '200':
          description: Updated order.
          headers:
            ETag:
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
        '400':
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
    oauth:
      type: oauth2
      flows:
        clientCredentials:
          tokenUrl: https://auth.example.com/token
          scopes:
            orders:read: Read orders
            orders:write: Modify orders
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
            description: Schema text v1.
          description: Entry text v1.
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
        '200':
          description: Updated order.
          headers:
            ETag:
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
        '400':
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
    oauth:
      type: oauth2
      flows:
        clientCredentials:
          tokenUrl: https://auth.example.com/token
          scopes:
            orders:read: Read orders
            orders:write: Modify orders
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
            description: Schema text v1.
          description: Entry text.
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
        '200':
          description: Updated order.
          headers:
            ETag:
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
        '400':
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
    oauth:
      type: oauth2
      flows:
        clientCredentials:
          tokenUrl: https://auth.example.com/token
          scopes:
            orders:read: Read orders
            orders:write: Modify orders
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
            description: Boolean flag.
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
        '200':
          description: Updated order.
          headers:
            ETag:
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
        '400':
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
    oauth:
      type: oauth2
      flows:
        clientCredentials:
          tokenUrl: https://auth.example.com/token
          scopes:
            orders:read: Read orders
            orders:write: Modify orders
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
          content:
            application/json:
              schema:
                type: object
                description: Filter.
                properties:
                  status:
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
        '200':
          description: Updated order.
          headers:
            ETag:
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
        '400':
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
    oauth:
      type: oauth2
      flows:
        clientCredentials:
          tokenUrl: https://auth.example.com/token
          scopes:
            orders:read: Read orders
            orders:write: Modify orders
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
          content:
            application/json:
              schema:
                type: object
                description: JSON filter.
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
        '200':
          description: Updated order.
          headers:
            ETag:
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
        '400':
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
    oauth:
      type: oauth2
      flows:
        clientCredentials:
          tokenUrl: https://auth.example.com/token
          scopes:
            orders:read: Read orders
            orders:write: Modify orders
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
      requestBody:
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
        '200':
          description: Updated order.
          headers:
            ETag:
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
        '400':
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
    oauth:
      type: oauth2
      flows:
        clientCredentials:
          tokenUrl: https://auth.example.com/token
          scopes:
            orders:read: Read orders
            orders:write: Modify orders
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
      requestBody:
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
        '200':
          description: Updated order.
          headers:
            ETag:
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
        '400':
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
    oauth:
      type: oauth2
      flows:
        clientCredentials:
          tokenUrl: https://auth.example.com/token
          scopes:
            orders:read: Read orders
            orders:write: Modify orders
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
      requestBody:
        required: true
        content:
          application/json: {}
      responses:
        '200':
          description: Updated order.
          headers:
            ETag:
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
        '400':
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
    oauth:
      type: oauth2
      flows:
        clientCredentials:
          tokenUrl: https://auth.example.com/token
          scopes:
            orders:read: Read orders
            orders:write: Modify orders
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
        '200':
          description: Updated order.
          headers:
            ETag:
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
        '400':
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
    oauth:
      type: oauth2
      flows:
        clientCredentials:
          tokenUrl: https://auth.example.com/token
          scopes:
            orders:read: Read orders
            orders:write: Modify orders
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
        '200':
          description: Updated order.
          headers:
            ETag:
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
        '400':
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
    oauth:
      type: oauth2
      flows:
        clientCredentials:
          tokenUrl: https://auth.example.com/token
          scopes:
            orders:read: Read orders
            orders:write: Modify orders
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
          x-owner: orders-team
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
        '200':
          description: Updated order.
          headers:
            ETag:
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
        '400':
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
    oauth:
      type: oauth2
      flows:
        clientCredentials:
          tokenUrl: https://auth.example.com/token
          scopes:
            orders:read: Read orders
            orders:write: Modify orders
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
          x-owner: orders-team
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
        '200':
          description: Updated order.
          headers:
            ETag:
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
        '400':
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
    oauth:
      type: oauth2
      flows:
        clientCredentials:
          tokenUrl: https://auth.example.com/token
          scopes:
            orders:read: Read orders
            orders:write: Modify orders
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
          x-audience:
            owners:
              - orders-team
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
        '200':
          description: Updated order.
          headers:
            ETag:
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
        '400':
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
    oauth:
      type: oauth2
      flows:
        clientCredentials:
          tokenUrl: https://auth.example.com/token
          scopes:
            orders:read: Read orders
            orders:write: Modify orders
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
        x-max-size: 1MB
      responses:
        '200':
          description: Updated order.
          headers:
            ETag:
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
        '400':
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
    oauth:
      type: oauth2
      flows:
        clientCredentials:
          tokenUrl: https://auth.example.com/token
          scopes:
            orders:read: Read orders
            orders:write: Modify orders
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
              x-codec: none
      responses:
        '200':
          description: Updated order.
          headers:
            ETag:
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
        '400':
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
    oauth:
      type: oauth2
      flows:
        clientCredentials:
          tokenUrl: https://auth.example.com/token
          scopes:
            orders:read: Read orders
            orders:write: Modify orders
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
        - name: notify
          in: query
          description: Send a notification.
          schema:
            type: boolean
            default: true
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
        '200':
          description: Updated order.
          headers:
            ETag:
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
        '400':
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
    oauth:
      type: oauth2
      flows:
        clientCredentials:
          tokenUrl: https://auth.example.com/token
          scopes:
            orders:read: Read orders
            orders:write: Modify orders
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
        '200':
          description: Updated order.
          headers:
            ETag:
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
        '400':
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
    oauth:
      type: oauth2
      flows:
        clientCredentials:
          tokenUrl: https://auth.example.com/token
          scopes:
            orders:read: Read orders
            orders:write: Modify orders
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
        - name: X-Request-Id
          in: header
          required: true
          schema:
            type: string
            format: uuid
        - name: X-Client
          in: header
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
        '200':
          description: Updated order.
          headers:
            ETag:
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
        '400':
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
    oauth:
      type: oauth2
      flows:
        clientCredentials:
          tokenUrl: https://auth.example.com/token
          scopes:
            orders:read: Read orders
            orders:write: Modify orders
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
          required: true
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
        '200':
          description: Updated order.
          headers:
            ETag:
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
        '400':
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
    oauth:
      type: oauth2
      flows:
        clientCredentials:
          tokenUrl: https://auth.example.com/token
          scopes:
            orders:read: Read orders
            orders:write: Modify orders
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
        - name: X-Dry-Run
          in: header
          schema:
            type: boolean
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
        '200':
          description: Updated order.
          headers:
            ETag:
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
        '400':
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
    oauth:
      type: oauth2
      flows:
        clientCredentials:
          tokenUrl: https://auth.example.com/token
          scopes:
            orders:read: Read orders
            orders:write: Modify orders
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
        - name: dryRun
          in: query
          schema:
            type: boolean
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
          application/xml:
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
        '200':
          description: Updated order.
          headers:
            ETag:
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
        '400':
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
    oauth:
      type: oauth2
      flows:
        clientCredentials:
          tokenUrl: https://auth.example.com/token
          scopes:
            orders:read: Read orders
            orders:write: Modify orders
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
        - name: dryRun
          in: query
          schema:
            type: boolean
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
      requestBody:
        description: New order state.
        required: true
        content:
          application/json; charset=utf-8:
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
        '200':
          description: Updated order.
          headers:
            ETag:
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
        '400':
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
    oauth:
      type: oauth2
      flows:
        clientCredentials:
          tokenUrl: https://auth.example.com/token
          scopes:
            orders:read: Read orders
            orders:write: Modify orders
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
        - name: dryRun
          in: query
          schema:
            type: boolean
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
      requestBody:
        description: New order state. Unknown fields are rejected.
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
                    - cancelled
                note:
                  type: string
                  maxLength: 500
      responses:
        '200':
          description: Updated order.
          headers:
            ETag:
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
        '400':
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
    oauth:
      type: oauth2
      flows:
        clientCredentials:
          tokenUrl: https://auth.example.com/token
          scopes:
            orders:read: Read orders
            orders:write: Modify orders
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
        '200':
          description: Updated order.
          headers:
            ETag:
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
        '400':
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
    oauth:
      type: oauth2
      flows:
        clientCredentials:
          tokenUrl: https://auth.example.com/token
          scopes:
            orders:read: Read orders
            orders:write: Modify orders
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
      requestBody:
        description: New order state.
        required: false
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
        '200':
          description: Updated order.
          headers:
            ETag:
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
        '400':
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
    oauth:
      type: oauth2
      flows:
        clientCredentials:
          tokenUrl: https://auth.example.com/token
          scopes:
            orders:read: Read orders
            orders:write: Modify orders
`})))()}var at;function w(){return(w=e((()=>{at=`openapi: 3.0.3
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
            description: Validate only.
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
        '200':
          description: Updated order.
          headers:
            ETag:
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
        '400':
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
    oauth:
      type: oauth2
      flows:
        clientCredentials:
          tokenUrl: https://auth.example.com/token
          scopes:
            orders:read: Read orders
            orders:write: Modify orders
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
            description: Validate the request without storing it.
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
        '200':
          description: Updated order.
          headers:
            ETag:
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
        '400':
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
    oauth:
      type: oauth2
      flows:
        clientCredentials:
          tokenUrl: https://auth.example.com/token
          scopes:
            orders:read: Read orders
            orders:write: Modify orders
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
          description: Validate the request without storing it.
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
        '200':
          description: Updated order.
          headers:
            ETag:
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
        '400':
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
    oauth:
      type: oauth2
      flows:
        clientCredentials:
          tokenUrl: https://auth.example.com/token
          scopes:
            orders:read: Read orders
            orders:write: Modify orders
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
            description: Schema text v2.
          description: Entry text v2.
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
        '200':
          description: Updated order.
          headers:
            ETag:
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
        '400':
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
    oauth:
      type: oauth2
      flows:
        clientCredentials:
          tokenUrl: https://auth.example.com/token
          scopes:
            orders:read: Read orders
            orders:write: Modify orders
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
            description: Schema text v2.
          description: Entry text.
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
        '200':
          description: Updated order.
          headers:
            ETag:
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
        '400':
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
    oauth:
      type: oauth2
      flows:
        clientCredentials:
          tokenUrl: https://auth.example.com/token
          scopes:
            orders:read: Read orders
            orders:write: Modify orders
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
          content:
            application/json:
              schema:
                type: object
                description: JSON options.
                properties:
                  strict:
                    type: boolean
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
        '200':
          description: Updated order.
          headers:
            ETag:
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
        '400':
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
    oauth:
      type: oauth2
      flows:
        clientCredentials:
          tokenUrl: https://auth.example.com/token
          scopes:
            orders:read: Read orders
            orders:write: Modify orders
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
          content:
            application/json; charset=utf-8:
              schema:
                type: object
                description: Filter.
                properties:
                  status:
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
        '200':
          description: Updated order.
          headers:
            ETag:
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
        '400':
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
    oauth:
      type: oauth2
      flows:
        clientCredentials:
          tokenUrl: https://auth.example.com/token
          scopes:
            orders:read: Read orders
            orders:write: Modify orders
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
          content:
            text/plain:
              schema:
                type: string
                description: Plain filter.
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
        '200':
          description: Updated order.
          headers:
            ETag:
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
        '400':
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
    oauth:
      type: oauth2
      flows:
        clientCredentials:
          tokenUrl: https://auth.example.com/token
          scopes:
            orders:read: Read orders
            orders:write: Modify orders
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
      requestBody:
        required: true
        content: {}
      responses:
        '200':
          description: Updated order.
          headers:
            ETag:
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
        '400':
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
    oauth:
      type: oauth2
      flows:
        clientCredentials:
          tokenUrl: https://auth.example.com/token
          scopes:
            orders:read: Read orders
            orders:write: Modify orders
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
      requestBody:
        required: true
        content:
          application/json: {}
      responses:
        '200':
          description: Updated order.
          headers:
            ETag:
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
        '400':
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
    oauth:
      type: oauth2
      flows:
        clientCredentials:
          tokenUrl: https://auth.example.com/token
          scopes:
            orders:read: Read orders
            orders:write: Modify orders
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
      requestBody:
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
        '200':
          description: Updated order.
          headers:
            ETag:
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
        '400':
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
    oauth:
      type: oauth2
      flows:
        clientCredentials:
          tokenUrl: https://auth.example.com/token
          scopes:
            orders:read: Read orders
            orders:write: Modify orders
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
      requestBody:
        description: New order state.
        required: true
        content: {}
      responses:
        '200':
          description: Updated order.
          headers:
            ETag:
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
        '400':
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
    oauth:
      type: oauth2
      flows:
        clientCredentials:
          tokenUrl: https://auth.example.com/token
          scopes:
            orders:read: Read orders
            orders:write: Modify orders
`})))()}var Ot;function kt(){return(kt=e((()=>{Ot=`openapi: 3.0.3
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
      responses:
        '200':
          description: Updated order.
          headers:
            ETag:
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
        '400':
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
    oauth:
      type: oauth2
      flows:
        clientCredentials:
          tokenUrl: https://auth.example.com/token
          scopes:
            orders:read: Read orders
            orders:write: Modify orders
`})))()}var At;function jt(){return(jt=e((()=>{At=`openapi: 3.0.3
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
          x-owner: billing-team
          x-internal: true
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
        '200':
          description: Updated order.
          headers:
            ETag:
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
        '400':
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
    oauth:
      type: oauth2
      flows:
        clientCredentials:
          tokenUrl: https://auth.example.com/token
          scopes:
            orders:read: Read orders
            orders:write: Modify orders
`})))()}var Mt;function Nt(){return(Nt=e((()=>{Mt=`openapi: 3.0.3
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
            x-owner: orders-team
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
        '200':
          description: Updated order.
          headers:
            ETag:
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
        '400':
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
    oauth:
      type: oauth2
      flows:
        clientCredentials:
          tokenUrl: https://auth.example.com/token
          scopes:
            orders:read: Read orders
            orders:write: Modify orders
`})))()}var Pt;function Ft(){return(Ft=e((()=>{Pt=`openapi: 3.0.3
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
          x-audience:
            owners:
              - orders-team
              - billing-team
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
        '200':
          description: Updated order.
          headers:
            ETag:
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
        '400':
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
    oauth:
      type: oauth2
      flows:
        clientCredentials:
          tokenUrl: https://auth.example.com/token
          scopes:
            orders:read: Read orders
            orders:write: Modify orders
`})))()}var It;function Lt(){return(Lt=e((()=>{It=`openapi: 3.0.3
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
            x-codec: gzip
          x-not-a-media-type: ignored
        x-max-size: 5MB
      responses:
        '200':
          description: Updated order.
          headers:
            ETag:
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
        '400':
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
    oauth:
      type: oauth2
      flows:
        clientCredentials:
          tokenUrl: https://auth.example.com/token
          scopes:
            orders:read: Read orders
            orders:write: Modify orders
`})))()}var Rt;function zt(){return(zt=e((()=>{Rt=`openapi: 3.0.3
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
              x-codec: none
            x-codec: gzip
      responses:
        '200':
          description: Updated order.
          headers:
            ETag:
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
        '400':
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
    oauth:
      type: oauth2
      flows:
        clientCredentials:
          tokenUrl: https://auth.example.com/token
          scopes:
            orders:read: Read orders
            orders:write: Modify orders
`})))()}var Bt,Vt,T,E,D,O,k,A,j,M,N,P,F,I,L,R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q,$,Ht;function Ut(){return(Ut=e((()=>{oe(),ce(),ue(),fe(),me(),ge(),ve(),be(),Se(),we(),Ee(),Oe(),Ae(),r(),a(),s(),l(),d(),p(),h(),_(),y(),x(),C(),Me(),Pe(),Ie(),Re(),Be(),He(),We(),Ke(),Je(),Xe(),Qe(),et(),nt(),it(),w(),st(),lt(),dt(),pt(),ht(),_t(),yt(),xt(),Ct(),Tt(),Dt(),kt(),jt(),Nt(),Ft(),Lt(),zt(),te(),t(),re(),Bt=ee(ne(Object.assign({"../../../../samples/openapi-diffs/request/01-query-parameter-added/before.yaml":ae,"../../../../samples/openapi-diffs/request/02-all-headers-removed/before.yaml":se,"../../../../samples/openapi-diffs/request/03-mixed-header-changes/before.yaml":le,"../../../../samples/openapi-diffs/request/04-parameter-required-changed/before.yaml":de,"../../../../samples/openapi-diffs/request/05-parameter-moved-query-to-header/before.yaml":pe,"../../../../samples/openapi-diffs/request/06-body-media-type-added/before.yaml":he,"../../../../samples/openapi-diffs/request/07-body-media-type-renamed/before.yaml":_e,"../../../../samples/openapi-diffs/request/08-body-description-and-schema-changed/before.yaml":ye,"../../../../samples/openapi-diffs/request/09-request-body-added/before.yaml":xe,"../../../../samples/openapi-diffs/request/10-request-body-became-optional/before.yaml":Ce,"../../../../samples/openapi-diffs/request/11-description-moved-entry-to-schema/before.yaml":Te,"../../../../samples/openapi-diffs/request/12-description-entry-removed-schema-added/before.yaml":De,"../../../../samples/openapi-diffs/request/13-description-schema-removed-entry-added/before.yaml":ke,"../../../../samples/openapi-diffs/request/14-description-both-places-changed/before.yaml":n,"../../../../samples/openapi-diffs/request/15-description-schema-changed-under-entry/before.yaml":i,"../../../../samples/openapi-diffs/request/16-parameter-schema-to-content/before.yaml":o,"../../../../samples/openapi-diffs/request/17-parameter-content-media-type-renamed/before.yaml":c,"../../../../samples/openapi-diffs/request/18-parameter-content-media-type-replaced/before.yaml":u,"../../../../samples/openapi-diffs/request/19-body-only-media-type-removed/before.yaml":f,"../../../../samples/openapi-diffs/request/20-body-only-schema-removed/before.yaml":m,"../../../../samples/openapi-diffs/request/21-body-only-schema-added/before.yaml":g,"../../../../samples/openapi-diffs/request/22-body-media-type-removed-description-kept/before.yaml":v,"../../../../samples/openapi-diffs/request/23-body-removed/before.yaml":b,"../../../../samples/openapi-diffs/request/24-parameter-extension-added-and-changed/before.yaml":S,"../../../../samples/openapi-diffs/request/25-parameter-extension-moved-to-schema/before.yaml":je,"../../../../samples/openapi-diffs/request/26-parameter-extension-nested-change/before.yaml":Ne,"../../../../samples/openapi-diffs/request/27-body-and-media-type-extensions-changed/before.yaml":Fe,"../../../../samples/openapi-diffs/request/28-media-type-extension-shadows-schema-root/before.yaml":Le}),Object.assign({"../../../../samples/openapi-diffs/request/01-query-parameter-added/after.yaml":ze,"../../../../samples/openapi-diffs/request/02-all-headers-removed/after.yaml":Ve,"../../../../samples/openapi-diffs/request/03-mixed-header-changes/after.yaml":Ue,"../../../../samples/openapi-diffs/request/04-parameter-required-changed/after.yaml":Ge,"../../../../samples/openapi-diffs/request/05-parameter-moved-query-to-header/after.yaml":qe,"../../../../samples/openapi-diffs/request/06-body-media-type-added/after.yaml":Ye,"../../../../samples/openapi-diffs/request/07-body-media-type-renamed/after.yaml":Ze,"../../../../samples/openapi-diffs/request/08-body-description-and-schema-changed/after.yaml":$e,"../../../../samples/openapi-diffs/request/09-request-body-added/after.yaml":tt,"../../../../samples/openapi-diffs/request/10-request-body-became-optional/after.yaml":rt,"../../../../samples/openapi-diffs/request/11-description-moved-entry-to-schema/after.yaml":at,"../../../../samples/openapi-diffs/request/12-description-entry-removed-schema-added/after.yaml":ot,"../../../../samples/openapi-diffs/request/13-description-schema-removed-entry-added/after.yaml":ct,"../../../../samples/openapi-diffs/request/14-description-both-places-changed/after.yaml":ut,"../../../../samples/openapi-diffs/request/15-description-schema-changed-under-entry/after.yaml":ft,"../../../../samples/openapi-diffs/request/16-parameter-schema-to-content/after.yaml":mt,"../../../../samples/openapi-diffs/request/17-parameter-content-media-type-renamed/after.yaml":gt,"../../../../samples/openapi-diffs/request/18-parameter-content-media-type-replaced/after.yaml":vt,"../../../../samples/openapi-diffs/request/19-body-only-media-type-removed/after.yaml":bt,"../../../../samples/openapi-diffs/request/20-body-only-schema-removed/after.yaml":St,"../../../../samples/openapi-diffs/request/21-body-only-schema-added/after.yaml":wt,"../../../../samples/openapi-diffs/request/22-body-media-type-removed-description-kept/after.yaml":Et,"../../../../samples/openapi-diffs/request/23-body-removed/after.yaml":Ot,"../../../../samples/openapi-diffs/request/24-parameter-extension-added-and-changed/after.yaml":At,"../../../../samples/openapi-diffs/request/25-parameter-extension-moved-to-schema/after.yaml":Mt,"../../../../samples/openapi-diffs/request/26-parameter-extension-nested-change/after.yaml":Pt,"../../../../samples/openapi-diffs/request/27-body-and-media-type-extensions-changed/after.yaml":It,"../../../../samples/openapi-diffs/request/28-media-type-extension-shadows-schema-root/after.yaml":Rt}))),Vt={title:`OpenAPI Operation Diffs Suite/Request Samples`,component:ie},T=e=>{let t=Bt[e];if(!t)throw Error(`Sample case not found: ${e}`);return{name:e,args:{caseId:e,beforeYaml:t.beforeYaml,afterYaml:t.afterYaml}}},E=T(`01-query-parameter-added`),D=T(`02-all-headers-removed`),O=T(`03-mixed-header-changes`),k=T(`04-parameter-required-changed`),A=T(`05-parameter-moved-query-to-header`),j=T(`06-body-media-type-added`),M=T(`07-body-media-type-renamed`),N=T(`08-body-description-and-schema-changed`),P=T(`09-request-body-added`),F=T(`10-request-body-became-optional`),I=T(`11-description-moved-entry-to-schema`),L=T(`12-description-entry-removed-schema-added`),R=T(`13-description-schema-removed-entry-added`),z=T(`14-description-both-places-changed`),B=T(`15-description-schema-changed-under-entry`),V=T(`16-parameter-schema-to-content`),H=T(`17-parameter-content-media-type-renamed`),U=T(`18-parameter-content-media-type-replaced`),W=T(`19-body-only-media-type-removed`),G=T(`20-body-only-schema-removed`),K=T(`21-body-only-schema-added`),q=T(`22-body-media-type-removed-description-kept`),J=T(`23-body-removed`),Y=T(`24-parameter-extension-added-and-changed`),X=T(`25-parameter-extension-moved-to-schema`),Z=T(`26-parameter-extension-nested-change`),Q=T(`27-body-and-media-type-extensions-changed`),$=T(`28-media-type-extension-shadows-schema-root`),E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`createCaseStory("01-query-parameter-added")`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`createCaseStory("02-all-headers-removed")`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`createCaseStory("03-mixed-header-changes")`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`createCaseStory("04-parameter-required-changed")`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`createCaseStory("05-parameter-moved-query-to-header")`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`createCaseStory("06-body-media-type-added")`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`createCaseStory("07-body-media-type-renamed")`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`createCaseStory("08-body-description-and-schema-changed")`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`createCaseStory("09-request-body-added")`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`createCaseStory("10-request-body-became-optional")`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`createCaseStory("11-description-moved-entry-to-schema")`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`createCaseStory("12-description-entry-removed-schema-added")`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`createCaseStory("13-description-schema-removed-entry-added")`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`createCaseStory("14-description-both-places-changed")`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`createCaseStory("15-description-schema-changed-under-entry")`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`createCaseStory("16-parameter-schema-to-content")`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`createCaseStory("17-parameter-content-media-type-renamed")`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`createCaseStory("18-parameter-content-media-type-replaced")`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`createCaseStory("19-body-only-media-type-removed")`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`createCaseStory("20-body-only-schema-removed")`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`createCaseStory("21-body-only-schema-added")`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`createCaseStory("22-body-media-type-removed-description-kept")`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`createCaseStory("23-body-removed")`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`createCaseStory("24-parameter-extension-added-and-changed")`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`createCaseStory("25-parameter-extension-moved-to-schema")`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`createCaseStory("26-parameter-extension-nested-change")`,...Z.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`createCaseStory("27-body-and-media-type-extensions-changed")`,...Q.parameters?.docs?.source}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`createCaseStory("28-media-type-extension-shadows-schema-root")`,...$.parameters?.docs?.source}}},Ht=`Case_01_query_parameter_added.Case_02_all_headers_removed.Case_03_mixed_header_changes.Case_04_parameter_required_changed.Case_05_parameter_moved_query_to_header.Case_06_body_media_type_added.Case_07_body_media_type_renamed.Case_08_body_description_and_schema_changed.Case_09_request_body_added.Case_10_request_body_became_optional.Case_11_description_moved_entry_to_schema.Case_12_description_entry_removed_schema_added.Case_13_description_schema_removed_entry_added.Case_14_description_both_places_changed.Case_15_description_schema_changed_under_entry.Case_16_parameter_schema_to_content.Case_17_parameter_content_media_type_renamed.Case_18_parameter_content_media_type_replaced.Case_19_body_only_media_type_removed.Case_20_body_only_schema_removed.Case_21_body_only_schema_added.Case_22_body_media_type_removed_description_kept.Case_23_body_removed.Case_24_parameter_extension_added_and_changed.Case_25_parameter_extension_moved_to_schema.Case_26_parameter_extension_nested_change.Case_27_body_and_media_type_extensions_changed.Case_28_media_type_extension_shadows_schema_root`.split(`.`)})))()}Ut();export{E as Case_01_query_parameter_added,D as Case_02_all_headers_removed,O as Case_03_mixed_header_changes,k as Case_04_parameter_required_changed,A as Case_05_parameter_moved_query_to_header,j as Case_06_body_media_type_added,M as Case_07_body_media_type_renamed,N as Case_08_body_description_and_schema_changed,P as Case_09_request_body_added,F as Case_10_request_body_became_optional,I as Case_11_description_moved_entry_to_schema,L as Case_12_description_entry_removed_schema_added,R as Case_13_description_schema_removed_entry_added,z as Case_14_description_both_places_changed,B as Case_15_description_schema_changed_under_entry,V as Case_16_parameter_schema_to_content,H as Case_17_parameter_content_media_type_renamed,U as Case_18_parameter_content_media_type_replaced,W as Case_19_body_only_media_type_removed,G as Case_20_body_only_schema_removed,K as Case_21_body_only_schema_added,q as Case_22_body_media_type_removed_description_kept,J as Case_23_body_removed,Y as Case_24_parameter_extension_added_and_changed,X as Case_25_parameter_extension_moved_to_schema,Z as Case_26_parameter_extension_nested_change,Q as Case_27_body_and_media_type_extensions_changed,$ as Case_28_media_type_extension_shadows_schema_root,Ht as __namedExportsOrder,Vt as default};