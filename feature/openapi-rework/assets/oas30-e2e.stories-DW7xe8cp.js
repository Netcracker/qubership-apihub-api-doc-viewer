import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{a as ee,n as te,o as ne,t as re}from"./openapi-story-args-fiqq9EJa.js";import{a as ie,i as ae,n as oe,r as se,t as ce}from"./OpenApiSampleStory-Bw6tYL_D.js";var le;function ue(){return(ue=e((()=>{le=`openapi: 3.0.3
info:
  title: Orders
  version: 1.0.0
paths:
  /orders:
    post:
      summary: Update an order
      operationId: updateOrder
      responses:
        "200":
          description: ""
`})))()}var de;function fe(){return(fe=e((()=>{de=`openapi: 3.0.3
info:
  title: Orders
  version: 1.0.0
paths:
  /api/v2/stores/main-store/orders/pending/export-requests:
    post:
      summary: Update an order
      responses:
        "200":
          description: ""
`})))()}var pe;function me(){return(me=e((()=>{pe=`openapi: 3.0.3
info:
  title: Orders
  version: 1.0.0
paths:
  /orders:
    post:
      summary: Update an order
      description: |-
        Replaces the order with the given state.

        - Validates the **status** transition.
        - Returns the stored order.
      responses:
        "200":
          description: ""
`})))()}var he;function ge(){return(ge=e((()=>{he=`openapi: 3.0.3
info:
  title: Orders
  version: 1.0.0
paths:
  /orders:
    post:
      summary: Update an order
      security:
        - oauth:
            - orders:write
        - api_key: []
      responses:
        "200":
          description: ""
components:
  securitySchemes:
    oauth:
      type: oauth2
      flows:
        clientCredentials:
          tokenUrl: https://auth.example.com/token
          scopes:
            orders:read: Read orders
            orders:write: Modify orders
    api_key:
      type: apiKey
      in: header
      name: X-API-Key
`})))()}var _e;function ve(){return(ve=e((()=>{_e=`openapi: 3.0.3
info:
  title: Orders
  version: 1.0.0
paths:
  /orders:
    post:
      summary: Update an order
      x-rate-limit: 100
      x-audience:
        visibility: public
      responses:
        "200":
          description: ""
`})))()}var ye;function be(){return(be=e((()=>{ye=`openapi: 3.0.3
info:
  title: Orders
  version: 1.0.0
paths:
  /orders/{orderId}:
    post:
      summary: Update an order
      parameters:
        - name: orderId
          in: path
          required: true
          description: Order identifier.
          schema:
            type: string
      responses:
        "200":
          description: ""
`})))()}var xe;function Se(){return(Se=e((()=>{xe=`openapi: 3.0.3
info:
  title: Orders
  version: 1.0.0
paths:
  /orders:
    post:
      summary: Update an order
      parameters:
        - name: dryRun
          in: query
          description: Validate without storing.
          schema:
            type: boolean
            default: false
        - name: expand
          in: query
          schema:
            type: array
            items:
              type: string
              enum:
                - lines
                - customer
      responses:
        "200":
          description: ""
`})))()}var Ce;function we(){return(we=e((()=>{Ce=`openapi: 3.0.3
info:
  title: Orders
  version: 1.0.0
paths:
  /orders:
    post:
      summary: Update an order
      parameters:
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
        "200":
          description: ""
`})))()}var Te;function Ee(){return(Ee=e((()=>{Te=`openapi: 3.0.3
info:
  title: Orders
  version: 1.0.0
paths:
  /orders:
    post:
      summary: Update an order
      parameters:
        - name: session
          in: cookie
          required: true
          schema:
            type: string
        - name: theme
          in: cookie
          schema:
            type: string
            enum:
              - light
              - dark
      responses:
        "200":
          description: ""
`})))()}var De;function Oe(){return(Oe=e((()=>{De=`openapi: 3.0.3
info:
  title: Orders
  version: 1.0.0
paths:
  /orders:
    post:
      summary: Update an order
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
          description: ""
`})))()}var ke;function Ae(){return(Ae=e((()=>{ke=`openapi: 3.0.3
info:
  title: Orders
  version: 1.0.0
paths:
  /orders:
    post:
      summary: Update an order
      responses:
        "200":
          description: ""
          headers:
            ETag:
              schema:
                type: string
            X-Rate-Limit-Remaining:
              description: Requests left in the window.
              schema:
                type: integer
`})))()}var je;function Me(){return(Me=e((()=>{je=`openapi: 3.0.3
info:
  title: Orders
  version: 1.0.0
paths:
  /orders:
    post:
      summary: Update an order
      responses:
        "200":
          description: ""
          content:
            application/json:
              schema:
                type: object
                properties:
                  id:
                    type: string
                  status:
                    type: string
`})))()}var Ne;function Pe(){return(Pe=e((()=>{Ne=`openapi: 3.0.3
info:
  title: Orders
  version: 1.0.0
paths:
  /orders:
    post:
      summary: Update an order
      responses:
        "200":
          description: ""
          headers:
            ETag:
              schema:
                type: string
            X-Rate-Limit-Remaining:
              description: Requests left in the window.
              schema:
                type: integer
        "400":
          description: ""
          headers:
            ETag:
              schema:
                type: string
            X-Rate-Limit-Remaining:
              description: Requests left in the window.
              schema:
                type: integer
`})))()}var Fe;function Ie(){return(Ie=e((()=>{Fe=`openapi: 3.0.3
info:
  title: Orders
  version: 1.0.0
paths:
  /orders:
    post:
      summary: Update an order
      responses:
        "200":
          description: ""
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
          description: ""
          content:
            application/problem+json:
              schema:
                type: object
                properties:
                  title:
                    type: string
                  detail:
                    type: string
`})))()}var Le;function Re(){return(Re=e((()=>{Le=`openapi: 3.0.3
info:
  title: Orders
  version: 1.0.0
paths:
  /api/v2/stores/main-store/orders/pending/export-requests:
    post:
      operationId: updateOrder
      responses:
        "200":
          description: ""
`})))()}var ze;function Be(){return(Be=e((()=>{ze=`openapi: 3.0.3
info:
  title: Orders
  version: 1.0.0
paths:
  /orders:
    post:
      operationId: updateOrder
      description: |-
        Replaces the order with the given state.

        - Validates the **status** transition.
        - Returns the stored order.
      responses:
        "200":
          description: ""
`})))()}var Ve;function He(){return(He=e((()=>{Ve=`openapi: 3.0.3
info:
  title: Orders
  version: 1.0.0
paths:
  /orders:
    post:
      operationId: updateOrder
      security:
        - oauth:
            - orders:write
        - api_key: []
      responses:
        "200":
          description: ""
components:
  securitySchemes:
    oauth:
      type: oauth2
      flows:
        clientCredentials:
          tokenUrl: https://auth.example.com/token
          scopes:
            orders:read: Read orders
            orders:write: Modify orders
    api_key:
      type: apiKey
      in: header
      name: X-API-Key
`})))()}var Ue;function We(){return(We=e((()=>{Ue=`openapi: 3.0.3
info:
  title: Orders
  version: 1.0.0
paths:
  /orders:
    post:
      operationId: updateOrder
      x-rate-limit: 100
      x-audience:
        visibility: public
      responses:
        "200":
          description: ""
`})))()}var Ge;function Ke(){return(Ke=e((()=>{Ge=`openapi: 3.0.3
info:
  title: Orders
  version: 1.0.0
paths:
  /orders/{orderId}:
    post:
      operationId: updateOrder
      parameters:
        - name: orderId
          in: path
          required: true
          description: Order identifier.
          schema:
            type: string
      responses:
        "200":
          description: ""
`})))()}var qe;function Je(){return(Je=e((()=>{qe=`openapi: 3.0.3
info:
  title: Orders
  version: 1.0.0
paths:
  /orders:
    post:
      operationId: updateOrder
      parameters:
        - name: dryRun
          in: query
          description: Validate without storing.
          schema:
            type: boolean
            default: false
        - name: expand
          in: query
          schema:
            type: array
            items:
              type: string
              enum:
                - lines
                - customer
      responses:
        "200":
          description: ""
`})))()}var Ye;function Xe(){return(Xe=e((()=>{Ye=`openapi: 3.0.3
info:
  title: Orders
  version: 1.0.0
paths:
  /orders:
    post:
      operationId: updateOrder
      parameters:
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
        "200":
          description: ""
`})))()}var Ze;function Qe(){return(Qe=e((()=>{Ze=`openapi: 3.0.3
info:
  title: Orders
  version: 1.0.0
paths:
  /orders:
    post:
      operationId: updateOrder
      parameters:
        - name: session
          in: cookie
          required: true
          schema:
            type: string
        - name: theme
          in: cookie
          schema:
            type: string
            enum:
              - light
              - dark
      responses:
        "200":
          description: ""
`})))()}var $e;function et(){return(et=e((()=>{$e=`openapi: 3.0.3
info:
  title: Orders
  version: 1.0.0
paths:
  /orders:
    post:
      operationId: updateOrder
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
          description: ""
`})))()}var tt;function nt(){return(nt=e((()=>{tt=`openapi: 3.0.3
info:
  title: Orders
  version: 1.0.0
paths:
  /orders:
    post:
      operationId: updateOrder
      responses:
        "200":
          description: ""
          headers:
            ETag:
              schema:
                type: string
            X-Rate-Limit-Remaining:
              description: Requests left in the window.
              schema:
                type: integer
`})))()}var rt;function it(){return(it=e((()=>{rt=`openapi: 3.0.3
info:
  title: Orders
  version: 1.0.0
paths:
  /orders:
    post:
      operationId: updateOrder
      responses:
        "200":
          description: ""
          content:
            application/json:
              schema:
                type: object
                properties:
                  id:
                    type: string
                  status:
                    type: string
`})))()}var at;function ot(){return(ot=e((()=>{at=`openapi: 3.0.3
info:
  title: Orders
  version: 1.0.0
paths:
  /orders:
    post:
      operationId: updateOrder
      responses:
        "200":
          description: ""
          headers:
            ETag:
              schema:
                type: string
            X-Rate-Limit-Remaining:
              description: Requests left in the window.
              schema:
                type: integer
        "400":
          description: ""
          headers:
            ETag:
              schema:
                type: string
            X-Rate-Limit-Remaining:
              description: Requests left in the window.
              schema:
                type: integer
`})))()}var st;function ct(){return(ct=e((()=>{st=`openapi: 3.0.3
info:
  title: Orders
  version: 1.0.0
paths:
  /orders:
    post:
      operationId: updateOrder
      responses:
        "200":
          description: ""
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
          description: ""
          content:
            application/problem+json:
              schema:
                type: object
                properties:
                  title:
                    type: string
                  detail:
                    type: string
`})))()}var lt;function ut(){return(ut=e((()=>{lt=`openapi: 3.0.3
info:
  title: Orders
  version: 1.0.0
paths:
  /api/v2/stores/main-store/orders/pending/export-requests:
    post:
      description: |-
        Replaces the order with the given state.

        - Validates the **status** transition.
        - Returns the stored order.
      responses:
        "200":
          description: ""
`})))()}var dt;function ft(){return(ft=e((()=>{dt=`openapi: 3.0.3
info:
  title: Orders
  version: 1.0.0
paths:
  /api/v2/stores/main-store/orders/pending/export-requests:
    post:
      security:
        - oauth:
            - orders:write
        - api_key: []
      responses:
        "200":
          description: ""
components:
  securitySchemes:
    oauth:
      type: oauth2
      flows:
        clientCredentials:
          tokenUrl: https://auth.example.com/token
          scopes:
            orders:read: Read orders
            orders:write: Modify orders
    api_key:
      type: apiKey
      in: header
      name: X-API-Key
`})))()}var pt;function mt(){return(mt=e((()=>{pt=`openapi: 3.0.3
info:
  title: Orders
  version: 1.0.0
paths:
  /api/v2/stores/main-store/orders/pending/export-requests:
    post:
      x-rate-limit: 100
      x-audience:
        visibility: public
      responses:
        "200":
          description: ""
`})))()}var ht;function gt(){return(gt=e((()=>{ht=`openapi: 3.0.3
info:
  title: Orders
  version: 1.0.0
paths:
  /api/v2/stores/main-store/orders/pending/export-requests/{orderId}:
    post:
      parameters:
        - name: orderId
          in: path
          required: true
          description: Order identifier.
          schema:
            type: string
      responses:
        "200":
          description: ""
`})))()}var _t;function vt(){return(vt=e((()=>{_t=`openapi: 3.0.3
info:
  title: Orders
  version: 1.0.0
paths:
  /api/v2/stores/main-store/orders/pending/export-requests:
    post:
      parameters:
        - name: dryRun
          in: query
          description: Validate without storing.
          schema:
            type: boolean
            default: false
        - name: expand
          in: query
          schema:
            type: array
            items:
              type: string
              enum:
                - lines
                - customer
      responses:
        "200":
          description: ""
`})))()}var yt;function bt(){return(bt=e((()=>{yt=`openapi: 3.0.3
info:
  title: Orders
  version: 1.0.0
paths:
  /api/v2/stores/main-store/orders/pending/export-requests:
    post:
      parameters:
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
        "200":
          description: ""
`})))()}var xt;function St(){return(St=e((()=>{xt=`openapi: 3.0.3
info:
  title: Orders
  version: 1.0.0
paths:
  /api/v2/stores/main-store/orders/pending/export-requests:
    post:
      parameters:
        - name: session
          in: cookie
          required: true
          schema:
            type: string
        - name: theme
          in: cookie
          schema:
            type: string
            enum:
              - light
              - dark
      responses:
        "200":
          description: ""
`})))()}var Ct;function wt(){return(wt=e((()=>{Ct=`openapi: 3.0.3
info:
  title: Orders
  version: 1.0.0
paths:
  /api/v2/stores/main-store/orders/pending/export-requests:
    post:
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
          description: ""
`})))()}var Tt;function Et(){return(Et=e((()=>{Tt=`openapi: 3.0.3
info:
  title: Orders
  version: 1.0.0
paths:
  /api/v2/stores/main-store/orders/pending/export-requests:
    post:
      responses:
        "200":
          description: ""
          headers:
            ETag:
              schema:
                type: string
            X-Rate-Limit-Remaining:
              description: Requests left in the window.
              schema:
                type: integer
`})))()}var Dt;function Ot(){return(Ot=e((()=>{Dt=`openapi: 3.0.3
info:
  title: Orders
  version: 1.0.0
paths:
  /api/v2/stores/main-store/orders/pending/export-requests:
    post:
      responses:
        "200":
          description: ""
          content:
            application/json:
              schema:
                type: object
                properties:
                  id:
                    type: string
                  status:
                    type: string
`})))()}var kt;function At(){return(At=e((()=>{kt=`openapi: 3.0.3
info:
  title: Orders
  version: 1.0.0
paths:
  /api/v2/stores/main-store/orders/pending/export-requests:
    post:
      responses:
        "200":
          description: ""
          headers:
            ETag:
              schema:
                type: string
            X-Rate-Limit-Remaining:
              description: Requests left in the window.
              schema:
                type: integer
        "400":
          description: ""
          headers:
            ETag:
              schema:
                type: string
            X-Rate-Limit-Remaining:
              description: Requests left in the window.
              schema:
                type: integer
`})))()}var jt;function Mt(){return(Mt=e((()=>{jt=`openapi: 3.0.3
info:
  title: Orders
  version: 1.0.0
paths:
  /api/v2/stores/main-store/orders/pending/export-requests:
    post:
      responses:
        "200":
          description: ""
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
          description: ""
          content:
            application/problem+json:
              schema:
                type: object
                properties:
                  title:
                    type: string
                  detail:
                    type: string
`})))()}var Nt;function Pt(){return(Pt=e((()=>{Nt=`openapi: 3.0.3
info:
  title: Orders
  version: 1.0.0
paths:
  /orders:
    post:
      description: |-
        Replaces the order with the given state.

        - Validates the **status** transition.
        - Returns the stored order.
      security:
        - oauth:
            - orders:write
        - api_key: []
      responses:
        "200":
          description: ""
components:
  securitySchemes:
    oauth:
      type: oauth2
      flows:
        clientCredentials:
          tokenUrl: https://auth.example.com/token
          scopes:
            orders:read: Read orders
            orders:write: Modify orders
    api_key:
      type: apiKey
      in: header
      name: X-API-Key
`})))()}var Ft;function It(){return(It=e((()=>{Ft=`openapi: 3.0.3
info:
  title: Orders
  version: 1.0.0
paths:
  /orders:
    post:
      description: |-
        Replaces the order with the given state.

        - Validates the **status** transition.
        - Returns the stored order.
      x-rate-limit: 100
      x-audience:
        visibility: public
      responses:
        "200":
          description: ""
`})))()}var Lt;function Rt(){return(Rt=e((()=>{Lt=`openapi: 3.0.3
info:
  title: Orders
  version: 1.0.0
paths:
  /orders/{orderId}:
    post:
      description: |-
        Replaces the order with the given state.

        - Validates the **status** transition.
        - Returns the stored order.
      parameters:
        - name: orderId
          in: path
          required: true
          description: Order identifier.
          schema:
            type: string
      responses:
        "200":
          description: ""
`})))()}var zt;function Bt(){return(Bt=e((()=>{zt=`openapi: 3.0.3
info:
  title: Orders
  version: 1.0.0
paths:
  /orders:
    post:
      description: |-
        Replaces the order with the given state.

        - Validates the **status** transition.
        - Returns the stored order.
      parameters:
        - name: dryRun
          in: query
          description: Validate without storing.
          schema:
            type: boolean
            default: false
        - name: expand
          in: query
          schema:
            type: array
            items:
              type: string
              enum:
                - lines
                - customer
      responses:
        "200":
          description: ""
`})))()}var Vt;function Ht(){return(Ht=e((()=>{Vt=`openapi: 3.0.3
info:
  title: Orders
  version: 1.0.0
paths:
  /orders:
    post:
      description: |-
        Replaces the order with the given state.

        - Validates the **status** transition.
        - Returns the stored order.
      parameters:
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
        "200":
          description: ""
`})))()}var Ut;function Wt(){return(Wt=e((()=>{Ut=`openapi: 3.0.3
info:
  title: Orders
  version: 1.0.0
paths:
  /orders:
    post:
      description: |-
        Replaces the order with the given state.

        - Validates the **status** transition.
        - Returns the stored order.
      parameters:
        - name: session
          in: cookie
          required: true
          schema:
            type: string
        - name: theme
          in: cookie
          schema:
            type: string
            enum:
              - light
              - dark
      responses:
        "200":
          description: ""
`})))()}var Gt;function Kt(){return(Kt=e((()=>{Gt=`openapi: 3.0.3
info:
  title: Orders
  version: 1.0.0
paths:
  /orders:
    post:
      description: |-
        Replaces the order with the given state.

        - Validates the **status** transition.
        - Returns the stored order.
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
          description: ""
`})))()}var qt;function Jt(){return(Jt=e((()=>{qt=`openapi: 3.0.3
info:
  title: Orders
  version: 1.0.0
paths:
  /orders:
    post:
      description: |-
        Replaces the order with the given state.

        - Validates the **status** transition.
        - Returns the stored order.
      responses:
        "200":
          description: ""
          headers:
            ETag:
              schema:
                type: string
            X-Rate-Limit-Remaining:
              description: Requests left in the window.
              schema:
                type: integer
`})))()}var Yt;function Xt(){return(Xt=e((()=>{Yt=`openapi: 3.0.3
info:
  title: Orders
  version: 1.0.0
paths:
  /orders:
    post:
      description: |-
        Replaces the order with the given state.

        - Validates the **status** transition.
        - Returns the stored order.
      responses:
        "200":
          description: ""
          content:
            application/json:
              schema:
                type: object
                properties:
                  id:
                    type: string
                  status:
                    type: string
`})))()}var Zt;function Qt(){return(Qt=e((()=>{Zt=`openapi: 3.0.3
info:
  title: Orders
  version: 1.0.0
paths:
  /orders:
    post:
      description: |-
        Replaces the order with the given state.

        - Validates the **status** transition.
        - Returns the stored order.
      responses:
        "200":
          description: ""
          headers:
            ETag:
              schema:
                type: string
            X-Rate-Limit-Remaining:
              description: Requests left in the window.
              schema:
                type: integer
        "400":
          description: ""
          headers:
            ETag:
              schema:
                type: string
            X-Rate-Limit-Remaining:
              description: Requests left in the window.
              schema:
                type: integer
`})))()}var $t;function en(){return(en=e((()=>{$t=`openapi: 3.0.3
info:
  title: Orders
  version: 1.0.0
paths:
  /orders:
    post:
      description: |-
        Replaces the order with the given state.

        - Validates the **status** transition.
        - Returns the stored order.
      responses:
        "200":
          description: ""
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
          description: ""
          content:
            application/problem+json:
              schema:
                type: object
                properties:
                  title:
                    type: string
                  detail:
                    type: string
`})))()}var tn;function nn(){return(nn=e((()=>{tn=`openapi: 3.0.3
info:
  title: Orders
  version: 1.0.0
paths:
  /orders:
    post:
      security:
        - oauth:
            - orders:write
        - api_key: []
      x-rate-limit: 100
      x-audience:
        visibility: public
      responses:
        "200":
          description: ""
components:
  securitySchemes:
    oauth:
      type: oauth2
      flows:
        clientCredentials:
          tokenUrl: https://auth.example.com/token
          scopes:
            orders:read: Read orders
            orders:write: Modify orders
    api_key:
      type: apiKey
      in: header
      name: X-API-Key
`})))()}var rn;function an(){return(an=e((()=>{rn=`openapi: 3.0.3
info:
  title: Orders
  version: 1.0.0
paths:
  /orders/{orderId}:
    post:
      security:
        - oauth:
            - orders:write
        - api_key: []
      parameters:
        - name: orderId
          in: path
          required: true
          description: Order identifier.
          schema:
            type: string
      responses:
        "200":
          description: ""
components:
  securitySchemes:
    oauth:
      type: oauth2
      flows:
        clientCredentials:
          tokenUrl: https://auth.example.com/token
          scopes:
            orders:read: Read orders
            orders:write: Modify orders
    api_key:
      type: apiKey
      in: header
      name: X-API-Key
`})))()}var on;function sn(){return(sn=e((()=>{on=`openapi: 3.0.3
info:
  title: Orders
  version: 1.0.0
paths:
  /orders:
    post:
      security:
        - oauth:
            - orders:write
        - api_key: []
      parameters:
        - name: dryRun
          in: query
          description: Validate without storing.
          schema:
            type: boolean
            default: false
        - name: expand
          in: query
          schema:
            type: array
            items:
              type: string
              enum:
                - lines
                - customer
      responses:
        "200":
          description: ""
components:
  securitySchemes:
    oauth:
      type: oauth2
      flows:
        clientCredentials:
          tokenUrl: https://auth.example.com/token
          scopes:
            orders:read: Read orders
            orders:write: Modify orders
    api_key:
      type: apiKey
      in: header
      name: X-API-Key
`})))()}var cn;function ln(){return(ln=e((()=>{cn=`openapi: 3.0.3
info:
  title: Orders
  version: 1.0.0
paths:
  /orders:
    post:
      security:
        - oauth:
            - orders:write
        - api_key: []
      parameters:
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
        "200":
          description: ""
components:
  securitySchemes:
    oauth:
      type: oauth2
      flows:
        clientCredentials:
          tokenUrl: https://auth.example.com/token
          scopes:
            orders:read: Read orders
            orders:write: Modify orders
    api_key:
      type: apiKey
      in: header
      name: X-API-Key
`})))()}var un;function dn(){return(dn=e((()=>{un=`openapi: 3.0.3
info:
  title: Orders
  version: 1.0.0
paths:
  /orders:
    post:
      security:
        - oauth:
            - orders:write
        - api_key: []
      parameters:
        - name: session
          in: cookie
          required: true
          schema:
            type: string
        - name: theme
          in: cookie
          schema:
            type: string
            enum:
              - light
              - dark
      responses:
        "200":
          description: ""
components:
  securitySchemes:
    oauth:
      type: oauth2
      flows:
        clientCredentials:
          tokenUrl: https://auth.example.com/token
          scopes:
            orders:read: Read orders
            orders:write: Modify orders
    api_key:
      type: apiKey
      in: header
      name: X-API-Key
`})))()}var fn;function pn(){return(pn=e((()=>{fn=`openapi: 3.0.3
info:
  title: Orders
  version: 1.0.0
paths:
  /orders:
    post:
      security:
        - oauth:
            - orders:write
        - api_key: []
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
          description: ""
components:
  securitySchemes:
    oauth:
      type: oauth2
      flows:
        clientCredentials:
          tokenUrl: https://auth.example.com/token
          scopes:
            orders:read: Read orders
            orders:write: Modify orders
    api_key:
      type: apiKey
      in: header
      name: X-API-Key
`})))()}var mn;function hn(){return(hn=e((()=>{mn=`openapi: 3.0.3
info:
  title: Orders
  version: 1.0.0
paths:
  /orders:
    post:
      security:
        - oauth:
            - orders:write
        - api_key: []
      responses:
        "200":
          description: ""
          headers:
            ETag:
              schema:
                type: string
            X-Rate-Limit-Remaining:
              description: Requests left in the window.
              schema:
                type: integer
components:
  securitySchemes:
    oauth:
      type: oauth2
      flows:
        clientCredentials:
          tokenUrl: https://auth.example.com/token
          scopes:
            orders:read: Read orders
            orders:write: Modify orders
    api_key:
      type: apiKey
      in: header
      name: X-API-Key
`})))()}var gn;function _n(){return(_n=e((()=>{gn=`openapi: 3.0.3
info:
  title: Orders
  version: 1.0.0
paths:
  /orders:
    post:
      security:
        - oauth:
            - orders:write
        - api_key: []
      responses:
        "200":
          description: ""
          content:
            application/json:
              schema:
                type: object
                properties:
                  id:
                    type: string
                  status:
                    type: string
components:
  securitySchemes:
    oauth:
      type: oauth2
      flows:
        clientCredentials:
          tokenUrl: https://auth.example.com/token
          scopes:
            orders:read: Read orders
            orders:write: Modify orders
    api_key:
      type: apiKey
      in: header
      name: X-API-Key
`})))()}var vn;function yn(){return(yn=e((()=>{vn=`openapi: 3.0.3
info:
  title: Orders
  version: 1.0.0
paths:
  /orders:
    post:
      security:
        - oauth:
            - orders:write
        - api_key: []
      responses:
        "200":
          description: ""
          headers:
            ETag:
              schema:
                type: string
            X-Rate-Limit-Remaining:
              description: Requests left in the window.
              schema:
                type: integer
        "400":
          description: ""
          headers:
            ETag:
              schema:
                type: string
            X-Rate-Limit-Remaining:
              description: Requests left in the window.
              schema:
                type: integer
components:
  securitySchemes:
    oauth:
      type: oauth2
      flows:
        clientCredentials:
          tokenUrl: https://auth.example.com/token
          scopes:
            orders:read: Read orders
            orders:write: Modify orders
    api_key:
      type: apiKey
      in: header
      name: X-API-Key
`})))()}var bn;function xn(){return(xn=e((()=>{bn=`openapi: 3.0.3
info:
  title: Orders
  version: 1.0.0
paths:
  /orders:
    post:
      security:
        - oauth:
            - orders:write
        - api_key: []
      responses:
        "200":
          description: ""
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
          description: ""
          content:
            application/problem+json:
              schema:
                type: object
                properties:
                  title:
                    type: string
                  detail:
                    type: string
components:
  securitySchemes:
    oauth:
      type: oauth2
      flows:
        clientCredentials:
          tokenUrl: https://auth.example.com/token
          scopes:
            orders:read: Read orders
            orders:write: Modify orders
    api_key:
      type: apiKey
      in: header
      name: X-API-Key
`})))()}var Sn;function Cn(){return(Cn=e((()=>{Sn=`openapi: 3.0.3
info:
  title: Orders
  version: 1.0.0
paths:
  /orders/{orderId}:
    post:
      x-rate-limit: 100
      x-audience:
        visibility: public
      parameters:
        - name: orderId
          in: path
          required: true
          description: Order identifier.
          schema:
            type: string
      responses:
        "200":
          description: ""
`})))()}var wn;function Tn(){return(Tn=e((()=>{wn=`openapi: 3.0.3
info:
  title: Orders
  version: 1.0.0
paths:
  /orders:
    post:
      x-rate-limit: 100
      x-audience:
        visibility: public
      parameters:
        - name: dryRun
          in: query
          description: Validate without storing.
          schema:
            type: boolean
            default: false
        - name: expand
          in: query
          schema:
            type: array
            items:
              type: string
              enum:
                - lines
                - customer
      responses:
        "200":
          description: ""
`})))()}var En;function Dn(){return(Dn=e((()=>{En=`openapi: 3.0.3
info:
  title: Orders
  version: 1.0.0
paths:
  /orders:
    post:
      x-rate-limit: 100
      x-audience:
        visibility: public
      parameters:
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
        "200":
          description: ""
`})))()}var On;function kn(){return(kn=e((()=>{On=`openapi: 3.0.3
info:
  title: Orders
  version: 1.0.0
paths:
  /orders:
    post:
      x-rate-limit: 100
      x-audience:
        visibility: public
      parameters:
        - name: session
          in: cookie
          required: true
          schema:
            type: string
        - name: theme
          in: cookie
          schema:
            type: string
            enum:
              - light
              - dark
      responses:
        "200":
          description: ""
`})))()}var An;function jn(){return(jn=e((()=>{An=`openapi: 3.0.3
info:
  title: Orders
  version: 1.0.0
paths:
  /orders:
    post:
      x-rate-limit: 100
      x-audience:
        visibility: public
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
          description: ""
`})))()}var Mn;function Nn(){return(Nn=e((()=>{Mn=`openapi: 3.0.3
info:
  title: Orders
  version: 1.0.0
paths:
  /orders:
    post:
      x-rate-limit: 100
      x-audience:
        visibility: public
      responses:
        "200":
          description: ""
          headers:
            ETag:
              schema:
                type: string
            X-Rate-Limit-Remaining:
              description: Requests left in the window.
              schema:
                type: integer
`})))()}var Pn;function Fn(){return(Fn=e((()=>{Pn=`openapi: 3.0.3
info:
  title: Orders
  version: 1.0.0
paths:
  /orders:
    post:
      x-rate-limit: 100
      x-audience:
        visibility: public
      responses:
        "200":
          description: ""
          content:
            application/json:
              schema:
                type: object
                properties:
                  id:
                    type: string
                  status:
                    type: string
`})))()}var In;function Ln(){return(Ln=e((()=>{In=`openapi: 3.0.3
info:
  title: Orders
  version: 1.0.0
paths:
  /orders:
    post:
      x-rate-limit: 100
      x-audience:
        visibility: public
      responses:
        "200":
          description: ""
          headers:
            ETag:
              schema:
                type: string
            X-Rate-Limit-Remaining:
              description: Requests left in the window.
              schema:
                type: integer
        "400":
          description: ""
          headers:
            ETag:
              schema:
                type: string
            X-Rate-Limit-Remaining:
              description: Requests left in the window.
              schema:
                type: integer
`})))()}var Rn;function zn(){return(zn=e((()=>{Rn=`openapi: 3.0.3
info:
  title: Orders
  version: 1.0.0
paths:
  /orders:
    post:
      x-rate-limit: 100
      x-audience:
        visibility: public
      responses:
        "200":
          description: ""
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
          description: ""
          content:
            application/problem+json:
              schema:
                type: object
                properties:
                  title:
                    type: string
                  detail:
                    type: string
`})))()}var Bn;function Vn(){return(Vn=e((()=>{Bn=`openapi: 3.0.3
info:
  title: Orders
  version: 1.0.0
paths:
  /orders/{orderId}:
    post:
      parameters:
        - name: orderId
          in: path
          required: true
          description: Order identifier.
          schema:
            type: string
        - name: dryRun
          in: query
          description: Validate without storing.
          schema:
            type: boolean
            default: false
        - name: expand
          in: query
          schema:
            type: array
            items:
              type: string
              enum:
                - lines
                - customer
      responses:
        "200":
          description: ""
`})))()}var Hn;function Un(){return(Un=e((()=>{Hn=`openapi: 3.0.3
info:
  title: Orders
  version: 1.0.0
paths:
  /orders/{orderId}:
    post:
      parameters:
        - name: orderId
          in: path
          required: true
          description: Order identifier.
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
      responses:
        "200":
          description: ""
`})))()}var Wn;function Gn(){return(Gn=e((()=>{Wn=`openapi: 3.0.3
info:
  title: Orders
  version: 1.0.0
paths:
  /orders/{orderId}:
    post:
      parameters:
        - name: orderId
          in: path
          required: true
          description: Order identifier.
          schema:
            type: string
        - name: session
          in: cookie
          required: true
          schema:
            type: string
        - name: theme
          in: cookie
          schema:
            type: string
            enum:
              - light
              - dark
      responses:
        "200":
          description: ""
`})))()}var Kn;function qn(){return(qn=e((()=>{Kn=`openapi: 3.0.3
info:
  title: Orders
  version: 1.0.0
paths:
  /orders/{orderId}:
    post:
      parameters:
        - name: orderId
          in: path
          required: true
          description: Order identifier.
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
          description: ""
`})))()}var Jn;function Yn(){return(Yn=e((()=>{Jn=`openapi: 3.0.3
info:
  title: Orders
  version: 1.0.0
paths:
  /orders/{orderId}:
    post:
      parameters:
        - name: orderId
          in: path
          required: true
          description: Order identifier.
          schema:
            type: string
      responses:
        "200":
          description: ""
          headers:
            ETag:
              schema:
                type: string
            X-Rate-Limit-Remaining:
              description: Requests left in the window.
              schema:
                type: integer
`})))()}var Xn;function Zn(){return(Zn=e((()=>{Xn=`openapi: 3.0.3
info:
  title: Orders
  version: 1.0.0
paths:
  /orders/{orderId}:
    post:
      parameters:
        - name: orderId
          in: path
          required: true
          description: Order identifier.
          schema:
            type: string
      responses:
        "200":
          description: ""
          content:
            application/json:
              schema:
                type: object
                properties:
                  id:
                    type: string
                  status:
                    type: string
`})))()}var Qn;function $n(){return($n=e((()=>{Qn=`openapi: 3.0.3
info:
  title: Orders
  version: 1.0.0
paths:
  /orders/{orderId}:
    post:
      parameters:
        - name: orderId
          in: path
          required: true
          description: Order identifier.
          schema:
            type: string
      responses:
        "200":
          description: ""
          headers:
            ETag:
              schema:
                type: string
            X-Rate-Limit-Remaining:
              description: Requests left in the window.
              schema:
                type: integer
        "400":
          description: ""
          headers:
            ETag:
              schema:
                type: string
            X-Rate-Limit-Remaining:
              description: Requests left in the window.
              schema:
                type: integer
`})))()}var er;function tr(){return(tr=e((()=>{er=`openapi: 3.0.3
info:
  title: Orders
  version: 1.0.0
paths:
  /orders/{orderId}:
    post:
      parameters:
        - name: orderId
          in: path
          required: true
          description: Order identifier.
          schema:
            type: string
      responses:
        "200":
          description: ""
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
          description: ""
          content:
            application/problem+json:
              schema:
                type: object
                properties:
                  title:
                    type: string
                  detail:
                    type: string
`})))()}var nr;function rr(){return(rr=e((()=>{nr=`openapi: 3.0.3
info:
  title: Orders
  version: 1.0.0
paths:
  /orders:
    post:
      parameters:
        - name: dryRun
          in: query
          description: Validate without storing.
          schema:
            type: boolean
            default: false
        - name: expand
          in: query
          schema:
            type: array
            items:
              type: string
              enum:
                - lines
                - customer
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
        "200":
          description: ""
`})))()}var ir;function ar(){return(ar=e((()=>{ir=`openapi: 3.0.3
info:
  title: Orders
  version: 1.0.0
paths:
  /orders:
    post:
      parameters:
        - name: dryRun
          in: query
          description: Validate without storing.
          schema:
            type: boolean
            default: false
        - name: expand
          in: query
          schema:
            type: array
            items:
              type: string
              enum:
                - lines
                - customer
        - name: session
          in: cookie
          required: true
          schema:
            type: string
        - name: theme
          in: cookie
          schema:
            type: string
            enum:
              - light
              - dark
      responses:
        "200":
          description: ""
`})))()}var or;function sr(){return(sr=e((()=>{or=`openapi: 3.0.3
info:
  title: Orders
  version: 1.0.0
paths:
  /orders:
    post:
      parameters:
        - name: dryRun
          in: query
          description: Validate without storing.
          schema:
            type: boolean
            default: false
        - name: expand
          in: query
          schema:
            type: array
            items:
              type: string
              enum:
                - lines
                - customer
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
          description: ""
`})))()}var cr;function lr(){return(lr=e((()=>{cr=`openapi: 3.0.3
info:
  title: Orders
  version: 1.0.0
paths:
  /orders:
    post:
      parameters:
        - name: dryRun
          in: query
          description: Validate without storing.
          schema:
            type: boolean
            default: false
        - name: expand
          in: query
          schema:
            type: array
            items:
              type: string
              enum:
                - lines
                - customer
      responses:
        "200":
          description: ""
          headers:
            ETag:
              schema:
                type: string
            X-Rate-Limit-Remaining:
              description: Requests left in the window.
              schema:
                type: integer
`})))()}var ur;function dr(){return(dr=e((()=>{ur=`openapi: 3.0.3
info:
  title: Orders
  version: 1.0.0
paths:
  /orders:
    post:
      parameters:
        - name: dryRun
          in: query
          description: Validate without storing.
          schema:
            type: boolean
            default: false
        - name: expand
          in: query
          schema:
            type: array
            items:
              type: string
              enum:
                - lines
                - customer
      responses:
        "200":
          description: ""
          content:
            application/json:
              schema:
                type: object
                properties:
                  id:
                    type: string
                  status:
                    type: string
`})))()}var fr;function pr(){return(pr=e((()=>{fr=`openapi: 3.0.3
info:
  title: Orders
  version: 1.0.0
paths:
  /orders:
    post:
      parameters:
        - name: dryRun
          in: query
          description: Validate without storing.
          schema:
            type: boolean
            default: false
        - name: expand
          in: query
          schema:
            type: array
            items:
              type: string
              enum:
                - lines
                - customer
      responses:
        "200":
          description: ""
          headers:
            ETag:
              schema:
                type: string
            X-Rate-Limit-Remaining:
              description: Requests left in the window.
              schema:
                type: integer
        "400":
          description: ""
          headers:
            ETag:
              schema:
                type: string
            X-Rate-Limit-Remaining:
              description: Requests left in the window.
              schema:
                type: integer
`})))()}var mr;function hr(){return(hr=e((()=>{mr=`openapi: 3.0.3
info:
  title: Orders
  version: 1.0.0
paths:
  /orders:
    post:
      parameters:
        - name: dryRun
          in: query
          description: Validate without storing.
          schema:
            type: boolean
            default: false
        - name: expand
          in: query
          schema:
            type: array
            items:
              type: string
              enum:
                - lines
                - customer
      responses:
        "200":
          description: ""
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
          description: ""
          content:
            application/problem+json:
              schema:
                type: object
                properties:
                  title:
                    type: string
                  detail:
                    type: string
`})))()}var gr;function _r(){return(_r=e((()=>{gr=`openapi: 3.0.3
info:
  title: Orders
  version: 1.0.0
paths:
  /orders:
    post:
      parameters:
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
          required: true
          schema:
            type: string
        - name: theme
          in: cookie
          schema:
            type: string
            enum:
              - light
              - dark
      responses:
        "200":
          description: ""
`})))()}var vr;function yr(){return(yr=e((()=>{vr=`openapi: 3.0.3
info:
  title: Orders
  version: 1.0.0
paths:
  /orders:
    post:
      parameters:
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
        "200":
          description: ""
`})))()}var br;function xr(){return(xr=e((()=>{br=`openapi: 3.0.3
info:
  title: Orders
  version: 1.0.0
paths:
  /orders:
    post:
      parameters:
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
        "200":
          description: ""
          headers:
            ETag:
              schema:
                type: string
            X-Rate-Limit-Remaining:
              description: Requests left in the window.
              schema:
                type: integer
`})))()}var Sr;function Cr(){return(Cr=e((()=>{Sr=`openapi: 3.0.3
info:
  title: Orders
  version: 1.0.0
paths:
  /orders:
    post:
      parameters:
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
        "200":
          description: ""
          content:
            application/json:
              schema:
                type: object
                properties:
                  id:
                    type: string
                  status:
                    type: string
`})))()}var wr;function Tr(){return(Tr=e((()=>{wr=`openapi: 3.0.3
info:
  title: Orders
  version: 1.0.0
paths:
  /orders:
    post:
      parameters:
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
        "200":
          description: ""
          headers:
            ETag:
              schema:
                type: string
            X-Rate-Limit-Remaining:
              description: Requests left in the window.
              schema:
                type: integer
        "400":
          description: ""
          headers:
            ETag:
              schema:
                type: string
            X-Rate-Limit-Remaining:
              description: Requests left in the window.
              schema:
                type: integer
`})))()}var Er;function Dr(){return(Dr=e((()=>{Er=`openapi: 3.0.3
info:
  title: Orders
  version: 1.0.0
paths:
  /orders:
    post:
      parameters:
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
        "200":
          description: ""
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
          description: ""
          content:
            application/problem+json:
              schema:
                type: object
                properties:
                  title:
                    type: string
                  detail:
                    type: string
`})))()}var Or;function kr(){return(kr=e((()=>{Or=`openapi: 3.0.3
info:
  title: Orders
  version: 1.0.0
paths:
  /orders:
    post:
      parameters:
        - name: session
          in: cookie
          required: true
          schema:
            type: string
        - name: theme
          in: cookie
          schema:
            type: string
            enum:
              - light
              - dark
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
          description: ""
`})))()}var Ar;function jr(){return(jr=e((()=>{Ar=`openapi: 3.0.3
info:
  title: Orders
  version: 1.0.0
paths:
  /orders:
    post:
      parameters:
        - name: session
          in: cookie
          required: true
          schema:
            type: string
        - name: theme
          in: cookie
          schema:
            type: string
            enum:
              - light
              - dark
      responses:
        "200":
          description: ""
          headers:
            ETag:
              schema:
                type: string
            X-Rate-Limit-Remaining:
              description: Requests left in the window.
              schema:
                type: integer
`})))()}var Mr;function Nr(){return(Nr=e((()=>{Mr=`openapi: 3.0.3
info:
  title: Orders
  version: 1.0.0
paths:
  /orders:
    post:
      parameters:
        - name: session
          in: cookie
          required: true
          schema:
            type: string
        - name: theme
          in: cookie
          schema:
            type: string
            enum:
              - light
              - dark
      responses:
        "200":
          description: ""
          content:
            application/json:
              schema:
                type: object
                properties:
                  id:
                    type: string
                  status:
                    type: string
`})))()}var Pr;function Fr(){return(Fr=e((()=>{Pr=`openapi: 3.0.3
info:
  title: Orders
  version: 1.0.0
paths:
  /orders:
    post:
      parameters:
        - name: session
          in: cookie
          required: true
          schema:
            type: string
        - name: theme
          in: cookie
          schema:
            type: string
            enum:
              - light
              - dark
      responses:
        "200":
          description: ""
          headers:
            ETag:
              schema:
                type: string
            X-Rate-Limit-Remaining:
              description: Requests left in the window.
              schema:
                type: integer
        "400":
          description: ""
          headers:
            ETag:
              schema:
                type: string
            X-Rate-Limit-Remaining:
              description: Requests left in the window.
              schema:
                type: integer
`})))()}var Ir;function Lr(){return(Lr=e((()=>{Ir=`openapi: 3.0.3
info:
  title: Orders
  version: 1.0.0
paths:
  /orders:
    post:
      parameters:
        - name: session
          in: cookie
          required: true
          schema:
            type: string
        - name: theme
          in: cookie
          schema:
            type: string
            enum:
              - light
              - dark
      responses:
        "200":
          description: ""
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
          description: ""
          content:
            application/problem+json:
              schema:
                type: object
                properties:
                  title:
                    type: string
                  detail:
                    type: string
`})))()}var Rr;function zr(){return(zr=e((()=>{Rr=`openapi: 3.0.3
info:
  title: Orders
  version: 1.0.0
paths:
  /orders:
    post:
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
          description: ""
          headers:
            ETag:
              schema:
                type: string
            X-Rate-Limit-Remaining:
              description: Requests left in the window.
              schema:
                type: integer
`})))()}var Br;function Vr(){return(Vr=e((()=>{Br=`openapi: 3.0.3
info:
  title: Orders
  version: 1.0.0
paths:
  /orders:
    post:
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
          description: ""
          content:
            application/json:
              schema:
                type: object
                properties:
                  id:
                    type: string
                  status:
                    type: string
`})))()}var Hr;function Ur(){return(Ur=e((()=>{Hr=`openapi: 3.0.3
info:
  title: Orders
  version: 1.0.0
paths:
  /orders:
    post:
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
          description: ""
          headers:
            ETag:
              schema:
                type: string
            X-Rate-Limit-Remaining:
              description: Requests left in the window.
              schema:
                type: integer
        "400":
          description: ""
          headers:
            ETag:
              schema:
                type: string
            X-Rate-Limit-Remaining:
              description: Requests left in the window.
              schema:
                type: integer
`})))()}var Wr;function Gr(){return(Gr=e((()=>{Wr=`openapi: 3.0.3
info:
  title: Orders
  version: 1.0.0
paths:
  /orders:
    post:
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
          description: ""
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
          description: ""
          content:
            application/problem+json:
              schema:
                type: object
                properties:
                  title:
                    type: string
                  detail:
                    type: string
`})))()}var Kr;function qr(){return(qr=e((()=>{Kr=`openapi: 3.0.3
info:
  title: Orders
  version: 1.0.0
paths:
  /orders:
    post:
      responses:
        "200":
          description: ""
          headers:
            ETag:
              schema:
                type: string
            X-Rate-Limit-Remaining:
              description: Requests left in the window.
              schema:
                type: integer
          content:
            application/json:
              schema:
                type: object
                properties:
                  id:
                    type: string
                  status:
                    type: string
`})))()}var Jr;function Yr(){return(Yr=e((()=>{Jr=`openapi: 3.0.3
info:
  title: Orders
  version: 1.0.0
paths:
  /orders:
    post:
      responses:
        "200":
          description: ""
          headers:
            ETag:
              schema:
                type: string
            X-Rate-Limit-Remaining:
              description: Requests left in the window.
              schema:
                type: integer
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
          description: ""
          headers:
            ETag:
              schema:
                type: string
            X-Rate-Limit-Remaining:
              description: Requests left in the window.
              schema:
                type: integer
          content:
            application/problem+json:
              schema:
                type: object
                properties:
                  title:
                    type: string
                  detail:
                    type: string
`})))()}var Xr;function Zr(){return(Zr=e((()=>{Xr=`openapi: 3.0.3
info:
  title: Orders
  version: 1.0.0
paths:
  /api/v2/stores/main-store/orders/pending/export-requests:
    post:
      summary: Update an order
      operationId: updateOrder
      responses:
        "200":
          description: ""
`})))()}var Qr;function $r(){return($r=e((()=>{Qr=`openapi: 3.0.3
info:
  title: Orders
  version: 1.0.0
paths:
  /api/v2/stores/main-store/orders/pending/export-requests:
    post:
      operationId: updateOrder
      description: |-
        Replaces the order with the given state.

        - Validates the **status** transition.
        - Returns the stored order.
      responses:
        "200":
          description: ""
`})))()}var ei;function ti(){return(ti=e((()=>{ei=`openapi: 3.0.3
info:
  title: Orders
  version: 1.0.0
paths:
  /api/v2/stores/main-store/orders/pending/export-requests:
    post:
      description: |-
        Replaces the order with the given state.

        - Validates the **status** transition.
        - Returns the stored order.
      security:
        - oauth:
            - orders:write
        - api_key: []
      responses:
        "200":
          description: ""
components:
  securitySchemes:
    oauth:
      type: oauth2
      flows:
        clientCredentials:
          tokenUrl: https://auth.example.com/token
          scopes:
            orders:read: Read orders
            orders:write: Modify orders
    api_key:
      type: apiKey
      in: header
      name: X-API-Key
`})))()}var ni;function ri(){return(ri=e((()=>{ni=`openapi: 3.0.3
info:
  title: Orders
  version: 1.0.0
paths:
  /orders:
    post:
      description: |-
        Replaces the order with the given state.

        - Validates the **status** transition.
        - Returns the stored order.
      security:
        - oauth:
            - orders:write
        - api_key: []
      x-rate-limit: 100
      x-audience:
        visibility: public
      responses:
        "200":
          description: ""
components:
  securitySchemes:
    oauth:
      type: oauth2
      flows:
        clientCredentials:
          tokenUrl: https://auth.example.com/token
          scopes:
            orders:read: Read orders
            orders:write: Modify orders
    api_key:
      type: apiKey
      in: header
      name: X-API-Key
`})))()}var ii;function ai(){return(ai=e((()=>{ii=`openapi: 3.0.3
info:
  title: Orders
  version: 1.0.0
paths:
  /orders/{orderId}:
    post:
      security:
        - oauth:
            - orders:write
        - api_key: []
      x-rate-limit: 100
      x-audience:
        visibility: public
      parameters:
        - name: orderId
          in: path
          required: true
          description: Order identifier.
          schema:
            type: string
      responses:
        "200":
          description: ""
components:
  securitySchemes:
    oauth:
      type: oauth2
      flows:
        clientCredentials:
          tokenUrl: https://auth.example.com/token
          scopes:
            orders:read: Read orders
            orders:write: Modify orders
    api_key:
      type: apiKey
      in: header
      name: X-API-Key
`})))()}var oi;function si(){return(si=e((()=>{oi=`openapi: 3.0.3
info:
  title: Orders
  version: 1.0.0
paths:
  /orders/{orderId}:
    post:
      x-rate-limit: 100
      x-audience:
        visibility: public
      parameters:
        - name: orderId
          in: path
          required: true
          description: Order identifier.
          schema:
            type: string
        - name: dryRun
          in: query
          description: Validate without storing.
          schema:
            type: boolean
            default: false
        - name: expand
          in: query
          schema:
            type: array
            items:
              type: string
              enum:
                - lines
                - customer
      responses:
        "200":
          description: ""
`})))()}var ci;function li(){return(li=e((()=>{ci=`openapi: 3.0.3
info:
  title: Orders
  version: 1.0.0
paths:
  /orders/{orderId}:
    post:
      parameters:
        - name: orderId
          in: path
          required: true
          description: Order identifier.
          schema:
            type: string
        - name: dryRun
          in: query
          description: Validate without storing.
          schema:
            type: boolean
            default: false
        - name: expand
          in: query
          schema:
            type: array
            items:
              type: string
              enum:
                - lines
                - customer
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
        "200":
          description: ""
`})))()}var ui;function di(){return(di=e((()=>{ui=`openapi: 3.0.3
info:
  title: Orders
  version: 1.0.0
paths:
  /orders:
    post:
      parameters:
        - name: dryRun
          in: query
          description: Validate without storing.
          schema:
            type: boolean
            default: false
        - name: expand
          in: query
          schema:
            type: array
            items:
              type: string
              enum:
                - lines
                - customer
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
          required: true
          schema:
            type: string
        - name: theme
          in: cookie
          schema:
            type: string
            enum:
              - light
              - dark
      responses:
        "200":
          description: ""
`})))()}var fi;function pi(){return(pi=e((()=>{fi=`openapi: 3.0.3
info:
  title: Orders
  version: 1.0.0
paths:
  /orders:
    post:
      parameters:
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
          required: true
          schema:
            type: string
        - name: theme
          in: cookie
          schema:
            type: string
            enum:
              - light
              - dark
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
          description: ""
`})))()}var mi;function hi(){return(hi=e((()=>{mi=`openapi: 3.0.3
info:
  title: Orders
  version: 1.0.0
paths:
  /orders:
    post:
      parameters:
        - name: session
          in: cookie
          required: true
          schema:
            type: string
        - name: theme
          in: cookie
          schema:
            type: string
            enum:
              - light
              - dark
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
          description: ""
          headers:
            ETag:
              schema:
                type: string
            X-Rate-Limit-Remaining:
              description: Requests left in the window.
              schema:
                type: integer
`})))()}var gi;function _i(){return(_i=e((()=>{gi=`openapi: 3.0.3
info:
  title: Orders
  version: 1.0.0
paths:
  /orders:
    post:
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
          description: ""
          headers:
            ETag:
              schema:
                type: string
            X-Rate-Limit-Remaining:
              description: Requests left in the window.
              schema:
                type: integer
          content:
            application/json:
              schema:
                type: object
                properties:
                  id:
                    type: string
                  status:
                    type: string
`})))()}var vi;function yi(){return(yi=e((()=>{vi=`openapi: 3.0.3
info:
  title: Orders
  version: 1.0.0
paths:
  /api/v2/stores/main-store/orders/pending/export-requests:
    post:
      summary: Update an order
      operationId: updateOrder
      description: |-
        Replaces the order with the given state.

        - Validates the **status** transition.
        - Returns the stored order.
      responses:
        "200":
          description: ""
`})))()}var bi;function xi(){return(xi=e((()=>{bi=`openapi: 3.0.3
info:
  title: Orders
  version: 1.0.0
paths:
  /api/v2/stores/main-store/orders/pending/export-requests:
    post:
      operationId: updateOrder
      description: |-
        Replaces the order with the given state.

        - Validates the **status** transition.
        - Returns the stored order.
      security:
        - oauth:
            - orders:write
        - api_key: []
      responses:
        "200":
          description: ""
components:
  securitySchemes:
    oauth:
      type: oauth2
      flows:
        clientCredentials:
          tokenUrl: https://auth.example.com/token
          scopes:
            orders:read: Read orders
            orders:write: Modify orders
    api_key:
      type: apiKey
      in: header
      name: X-API-Key
`})))()}var Si;function Ci(){return(Ci=e((()=>{Si=`openapi: 3.0.3
info:
  title: Orders
  version: 1.0.0
paths:
  /api/v2/stores/main-store/orders/pending/export-requests:
    post:
      description: |-
        Replaces the order with the given state.

        - Validates the **status** transition.
        - Returns the stored order.
      security:
        - oauth:
            - orders:write
        - api_key: []
      x-rate-limit: 100
      x-audience:
        visibility: public
      responses:
        "200":
          description: ""
components:
  securitySchemes:
    oauth:
      type: oauth2
      flows:
        clientCredentials:
          tokenUrl: https://auth.example.com/token
          scopes:
            orders:read: Read orders
            orders:write: Modify orders
    api_key:
      type: apiKey
      in: header
      name: X-API-Key
`})))()}var wi;function Ti(){return(Ti=e((()=>{wi=`openapi: 3.0.3
info:
  title: Orders
  version: 1.0.0
paths:
  /orders/{orderId}:
    post:
      description: |-
        Replaces the order with the given state.

        - Validates the **status** transition.
        - Returns the stored order.
      security:
        - oauth:
            - orders:write
        - api_key: []
      x-rate-limit: 100
      x-audience:
        visibility: public
      parameters:
        - name: orderId
          in: path
          required: true
          description: Order identifier.
          schema:
            type: string
      responses:
        "200":
          description: ""
components:
  securitySchemes:
    oauth:
      type: oauth2
      flows:
        clientCredentials:
          tokenUrl: https://auth.example.com/token
          scopes:
            orders:read: Read orders
            orders:write: Modify orders
    api_key:
      type: apiKey
      in: header
      name: X-API-Key
`})))()}var Ei;function Di(){return(Di=e((()=>{Ei=`openapi: 3.0.3
info:
  title: Orders
  version: 1.0.0
paths:
  /orders/{orderId}:
    post:
      security:
        - oauth:
            - orders:write
        - api_key: []
      x-rate-limit: 100
      x-audience:
        visibility: public
      parameters:
        - name: orderId
          in: path
          required: true
          description: Order identifier.
          schema:
            type: string
        - name: dryRun
          in: query
          description: Validate without storing.
          schema:
            type: boolean
            default: false
        - name: expand
          in: query
          schema:
            type: array
            items:
              type: string
              enum:
                - lines
                - customer
      responses:
        "200":
          description: ""
components:
  securitySchemes:
    oauth:
      type: oauth2
      flows:
        clientCredentials:
          tokenUrl: https://auth.example.com/token
          scopes:
            orders:read: Read orders
            orders:write: Modify orders
    api_key:
      type: apiKey
      in: header
      name: X-API-Key
`})))()}var Oi;function ki(){return(ki=e((()=>{Oi=`openapi: 3.0.3
info:
  title: Orders
  version: 1.0.0
paths:
  /orders/{orderId}:
    post:
      x-rate-limit: 100
      x-audience:
        visibility: public
      parameters:
        - name: orderId
          in: path
          required: true
          description: Order identifier.
          schema:
            type: string
        - name: dryRun
          in: query
          description: Validate without storing.
          schema:
            type: boolean
            default: false
        - name: expand
          in: query
          schema:
            type: array
            items:
              type: string
              enum:
                - lines
                - customer
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
        "200":
          description: ""
`})))()}var Ai;function ji(){return(ji=e((()=>{Ai=`openapi: 3.0.3
info:
  title: Orders
  version: 1.0.0
paths:
  /orders/{orderId}:
    post:
      parameters:
        - name: orderId
          in: path
          required: true
          description: Order identifier.
          schema:
            type: string
        - name: dryRun
          in: query
          description: Validate without storing.
          schema:
            type: boolean
            default: false
        - name: expand
          in: query
          schema:
            type: array
            items:
              type: string
              enum:
                - lines
                - customer
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
          required: true
          schema:
            type: string
        - name: theme
          in: cookie
          schema:
            type: string
            enum:
              - light
              - dark
      responses:
        "200":
          description: ""
`})))()}var Mi;function Ni(){return(Ni=e((()=>{Mi=`openapi: 3.0.3
info:
  title: Orders
  version: 1.0.0
paths:
  /orders:
    post:
      parameters:
        - name: dryRun
          in: query
          description: Validate without storing.
          schema:
            type: boolean
            default: false
        - name: expand
          in: query
          schema:
            type: array
            items:
              type: string
              enum:
                - lines
                - customer
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
          required: true
          schema:
            type: string
        - name: theme
          in: cookie
          schema:
            type: string
            enum:
              - light
              - dark
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
          description: ""
`})))()}var Pi;function Fi(){return(Fi=e((()=>{Pi=`openapi: 3.0.3
info:
  title: Orders
  version: 1.0.0
paths:
  /orders:
    post:
      parameters:
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
          required: true
          schema:
            type: string
        - name: theme
          in: cookie
          schema:
            type: string
            enum:
              - light
              - dark
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
          description: ""
          headers:
            ETag:
              schema:
                type: string
            X-Rate-Limit-Remaining:
              description: Requests left in the window.
              schema:
                type: integer
`})))()}var Ii;function Li(){return(Li=e((()=>{Ii=`openapi: 3.0.3
info:
  title: Orders
  version: 1.0.0
paths:
  /orders:
    post:
      parameters:
        - name: session
          in: cookie
          required: true
          schema:
            type: string
        - name: theme
          in: cookie
          schema:
            type: string
            enum:
              - light
              - dark
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
          description: ""
          headers:
            ETag:
              schema:
                type: string
            X-Rate-Limit-Remaining:
              description: Requests left in the window.
              schema:
                type: integer
          content:
            application/json:
              schema:
                type: object
                properties:
                  id:
                    type: string
                  status:
                    type: string
`})))()}var Ri;function zi(){return(zi=e((()=>{Ri=`openapi: 3.0.3
info:
  title: Orders
  version: 1.0.0
paths:
  /api/v2/stores/main-store/orders/pending/export-requests:
    post:
      summary: Update an order
      operationId: updateOrder
      description: |-
        Replaces the order with the given state.

        - Validates the **status** transition.
        - Returns the stored order.
      security:
        - oauth:
            - orders:write
        - api_key: []
      responses:
        "200":
          description: ""
components:
  securitySchemes:
    oauth:
      type: oauth2
      flows:
        clientCredentials:
          tokenUrl: https://auth.example.com/token
          scopes:
            orders:read: Read orders
            orders:write: Modify orders
    api_key:
      type: apiKey
      in: header
      name: X-API-Key
`})))()}var Bi;function Vi(){return(Vi=e((()=>{Bi=`openapi: 3.0.3
info:
  title: Orders
  version: 1.0.0
paths:
  /api/v2/stores/main-store/orders/pending/export-requests:
    post:
      operationId: updateOrder
      description: |-
        Replaces the order with the given state.

        - Validates the **status** transition.
        - Returns the stored order.
      security:
        - oauth:
            - orders:write
        - api_key: []
      x-rate-limit: 100
      x-audience:
        visibility: public
      responses:
        "200":
          description: ""
components:
  securitySchemes:
    oauth:
      type: oauth2
      flows:
        clientCredentials:
          tokenUrl: https://auth.example.com/token
          scopes:
            orders:read: Read orders
            orders:write: Modify orders
    api_key:
      type: apiKey
      in: header
      name: X-API-Key
`})))()}var Hi;function Ui(){return(Ui=e((()=>{Hi=`openapi: 3.0.3
info:
  title: Orders
  version: 1.0.0
paths:
  /api/v2/stores/main-store/orders/pending/export-requests/{orderId}:
    post:
      description: |-
        Replaces the order with the given state.

        - Validates the **status** transition.
        - Returns the stored order.
      security:
        - oauth:
            - orders:write
        - api_key: []
      x-rate-limit: 100
      x-audience:
        visibility: public
      parameters:
        - name: orderId
          in: path
          required: true
          description: Order identifier.
          schema:
            type: string
      responses:
        "200":
          description: ""
components:
  securitySchemes:
    oauth:
      type: oauth2
      flows:
        clientCredentials:
          tokenUrl: https://auth.example.com/token
          scopes:
            orders:read: Read orders
            orders:write: Modify orders
    api_key:
      type: apiKey
      in: header
      name: X-API-Key
`})))()}var Wi;function Gi(){return(Gi=e((()=>{Wi=`openapi: 3.0.3
info:
  title: Orders
  version: 1.0.0
paths:
  /orders/{orderId}:
    post:
      description: |-
        Replaces the order with the given state.

        - Validates the **status** transition.
        - Returns the stored order.
      security:
        - oauth:
            - orders:write
        - api_key: []
      x-rate-limit: 100
      x-audience:
        visibility: public
      parameters:
        - name: orderId
          in: path
          required: true
          description: Order identifier.
          schema:
            type: string
        - name: dryRun
          in: query
          description: Validate without storing.
          schema:
            type: boolean
            default: false
        - name: expand
          in: query
          schema:
            type: array
            items:
              type: string
              enum:
                - lines
                - customer
      responses:
        "200":
          description: ""
components:
  securitySchemes:
    oauth:
      type: oauth2
      flows:
        clientCredentials:
          tokenUrl: https://auth.example.com/token
          scopes:
            orders:read: Read orders
            orders:write: Modify orders
    api_key:
      type: apiKey
      in: header
      name: X-API-Key
`})))()}var Ki;function qi(){return(qi=e((()=>{Ki=`openapi: 3.0.3
info:
  title: Orders
  version: 1.0.0
paths:
  /orders/{orderId}:
    post:
      security:
        - oauth:
            - orders:write
        - api_key: []
      x-rate-limit: 100
      x-audience:
        visibility: public
      parameters:
        - name: orderId
          in: path
          required: true
          description: Order identifier.
          schema:
            type: string
        - name: dryRun
          in: query
          description: Validate without storing.
          schema:
            type: boolean
            default: false
        - name: expand
          in: query
          schema:
            type: array
            items:
              type: string
              enum:
                - lines
                - customer
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
        "200":
          description: ""
components:
  securitySchemes:
    oauth:
      type: oauth2
      flows:
        clientCredentials:
          tokenUrl: https://auth.example.com/token
          scopes:
            orders:read: Read orders
            orders:write: Modify orders
    api_key:
      type: apiKey
      in: header
      name: X-API-Key
`})))()}var Ji;function Yi(){return(Yi=e((()=>{Ji=`openapi: 3.0.3
info:
  title: Orders
  version: 1.0.0
paths:
  /orders/{orderId}:
    post:
      x-rate-limit: 100
      x-audience:
        visibility: public
      parameters:
        - name: orderId
          in: path
          required: true
          description: Order identifier.
          schema:
            type: string
        - name: dryRun
          in: query
          description: Validate without storing.
          schema:
            type: boolean
            default: false
        - name: expand
          in: query
          schema:
            type: array
            items:
              type: string
              enum:
                - lines
                - customer
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
          required: true
          schema:
            type: string
        - name: theme
          in: cookie
          schema:
            type: string
            enum:
              - light
              - dark
      responses:
        "200":
          description: ""
`})))()}var Xi;function Zi(){return(Zi=e((()=>{Xi=`openapi: 3.0.3
info:
  title: Orders
  version: 1.0.0
paths:
  /orders/{orderId}:
    post:
      parameters:
        - name: orderId
          in: path
          required: true
          description: Order identifier.
          schema:
            type: string
        - name: dryRun
          in: query
          description: Validate without storing.
          schema:
            type: boolean
            default: false
        - name: expand
          in: query
          schema:
            type: array
            items:
              type: string
              enum:
                - lines
                - customer
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
          required: true
          schema:
            type: string
        - name: theme
          in: cookie
          schema:
            type: string
            enum:
              - light
              - dark
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
          description: ""
`})))()}var Qi;function $i(){return($i=e((()=>{Qi=`openapi: 3.0.3
info:
  title: Orders
  version: 1.0.0
paths:
  /orders:
    post:
      parameters:
        - name: dryRun
          in: query
          description: Validate without storing.
          schema:
            type: boolean
            default: false
        - name: expand
          in: query
          schema:
            type: array
            items:
              type: string
              enum:
                - lines
                - customer
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
          required: true
          schema:
            type: string
        - name: theme
          in: cookie
          schema:
            type: string
            enum:
              - light
              - dark
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
          description: ""
          headers:
            ETag:
              schema:
                type: string
            X-Rate-Limit-Remaining:
              description: Requests left in the window.
              schema:
                type: integer
`})))()}var ea;function ta(){return(ta=e((()=>{ea=`openapi: 3.0.3
info:
  title: Orders
  version: 1.0.0
paths:
  /orders:
    post:
      parameters:
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
          required: true
          schema:
            type: string
        - name: theme
          in: cookie
          schema:
            type: string
            enum:
              - light
              - dark
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
          description: ""
          headers:
            ETag:
              schema:
                type: string
            X-Rate-Limit-Remaining:
              description: Requests left in the window.
              schema:
                type: integer
          content:
            application/json:
              schema:
                type: object
                properties:
                  id:
                    type: string
                  status:
                    type: string
`})))()}var na;function ra(){return(ra=e((()=>{na=`openapi: 3.0.3
info:
  title: Orders
  version: 1.0.0
paths:
  /api/v2/stores/main-store/orders/pending/export-requests:
    post:
      summary: Update an order
      operationId: updateOrder
      description: |-
        Replaces the order with the given state.

        - Validates the **status** transition.
        - Returns the stored order.
      security:
        - oauth:
            - orders:write
        - api_key: []
      x-rate-limit: 100
      x-audience:
        visibility: public
      responses:
        "200":
          description: ""
components:
  securitySchemes:
    oauth:
      type: oauth2
      flows:
        clientCredentials:
          tokenUrl: https://auth.example.com/token
          scopes:
            orders:read: Read orders
            orders:write: Modify orders
    api_key:
      type: apiKey
      in: header
      name: X-API-Key
`})))()}var ia;function aa(){return(aa=e((()=>{ia=`openapi: 3.0.3
info:
  title: Orders
  version: 1.0.0
paths:
  /api/v2/stores/main-store/orders/pending/export-requests/{orderId}:
    post:
      operationId: updateOrder
      description: |-
        Replaces the order with the given state.

        - Validates the **status** transition.
        - Returns the stored order.
      security:
        - oauth:
            - orders:write
        - api_key: []
      x-rate-limit: 100
      x-audience:
        visibility: public
      parameters:
        - name: orderId
          in: path
          required: true
          description: Order identifier.
          schema:
            type: string
      responses:
        "200":
          description: ""
components:
  securitySchemes:
    oauth:
      type: oauth2
      flows:
        clientCredentials:
          tokenUrl: https://auth.example.com/token
          scopes:
            orders:read: Read orders
            orders:write: Modify orders
    api_key:
      type: apiKey
      in: header
      name: X-API-Key
`})))()}var oa;function sa(){return(sa=e((()=>{oa=`openapi: 3.0.3
info:
  title: Orders
  version: 1.0.0
paths:
  /api/v2/stores/main-store/orders/pending/export-requests/{orderId}:
    post:
      description: |-
        Replaces the order with the given state.

        - Validates the **status** transition.
        - Returns the stored order.
      security:
        - oauth:
            - orders:write
        - api_key: []
      x-rate-limit: 100
      x-audience:
        visibility: public
      parameters:
        - name: orderId
          in: path
          required: true
          description: Order identifier.
          schema:
            type: string
        - name: dryRun
          in: query
          description: Validate without storing.
          schema:
            type: boolean
            default: false
        - name: expand
          in: query
          schema:
            type: array
            items:
              type: string
              enum:
                - lines
                - customer
      responses:
        "200":
          description: ""
components:
  securitySchemes:
    oauth:
      type: oauth2
      flows:
        clientCredentials:
          tokenUrl: https://auth.example.com/token
          scopes:
            orders:read: Read orders
            orders:write: Modify orders
    api_key:
      type: apiKey
      in: header
      name: X-API-Key
`})))()}var ca;function la(){return(la=e((()=>{ca=`openapi: 3.0.3
info:
  title: Orders
  version: 1.0.0
paths:
  /orders/{orderId}:
    post:
      description: |-
        Replaces the order with the given state.

        - Validates the **status** transition.
        - Returns the stored order.
      security:
        - oauth:
            - orders:write
        - api_key: []
      x-rate-limit: 100
      x-audience:
        visibility: public
      parameters:
        - name: orderId
          in: path
          required: true
          description: Order identifier.
          schema:
            type: string
        - name: dryRun
          in: query
          description: Validate without storing.
          schema:
            type: boolean
            default: false
        - name: expand
          in: query
          schema:
            type: array
            items:
              type: string
              enum:
                - lines
                - customer
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
        "200":
          description: ""
components:
  securitySchemes:
    oauth:
      type: oauth2
      flows:
        clientCredentials:
          tokenUrl: https://auth.example.com/token
          scopes:
            orders:read: Read orders
            orders:write: Modify orders
    api_key:
      type: apiKey
      in: header
      name: X-API-Key
`})))()}var ua;function da(){return(da=e((()=>{ua=`openapi: 3.0.3
info:
  title: Orders
  version: 1.0.0
paths:
  /orders/{orderId}:
    post:
      security:
        - oauth:
            - orders:write
        - api_key: []
      x-rate-limit: 100
      x-audience:
        visibility: public
      parameters:
        - name: orderId
          in: path
          required: true
          description: Order identifier.
          schema:
            type: string
        - name: dryRun
          in: query
          description: Validate without storing.
          schema:
            type: boolean
            default: false
        - name: expand
          in: query
          schema:
            type: array
            items:
              type: string
              enum:
                - lines
                - customer
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
          required: true
          schema:
            type: string
        - name: theme
          in: cookie
          schema:
            type: string
            enum:
              - light
              - dark
      responses:
        "200":
          description: ""
components:
  securitySchemes:
    oauth:
      type: oauth2
      flows:
        clientCredentials:
          tokenUrl: https://auth.example.com/token
          scopes:
            orders:read: Read orders
            orders:write: Modify orders
    api_key:
      type: apiKey
      in: header
      name: X-API-Key
`})))()}var fa;function pa(){return(pa=e((()=>{fa=`openapi: 3.0.3
info:
  title: Orders
  version: 1.0.0
paths:
  /orders/{orderId}:
    post:
      x-rate-limit: 100
      x-audience:
        visibility: public
      parameters:
        - name: orderId
          in: path
          required: true
          description: Order identifier.
          schema:
            type: string
        - name: dryRun
          in: query
          description: Validate without storing.
          schema:
            type: boolean
            default: false
        - name: expand
          in: query
          schema:
            type: array
            items:
              type: string
              enum:
                - lines
                - customer
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
          required: true
          schema:
            type: string
        - name: theme
          in: cookie
          schema:
            type: string
            enum:
              - light
              - dark
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
          description: ""
`})))()}var ma;function ha(){return(ha=e((()=>{ma=`openapi: 3.0.3
info:
  title: Orders
  version: 1.0.0
paths:
  /orders/{orderId}:
    post:
      parameters:
        - name: orderId
          in: path
          required: true
          description: Order identifier.
          schema:
            type: string
        - name: dryRun
          in: query
          description: Validate without storing.
          schema:
            type: boolean
            default: false
        - name: expand
          in: query
          schema:
            type: array
            items:
              type: string
              enum:
                - lines
                - customer
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
          required: true
          schema:
            type: string
        - name: theme
          in: cookie
          schema:
            type: string
            enum:
              - light
              - dark
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
          description: ""
          headers:
            ETag:
              schema:
                type: string
            X-Rate-Limit-Remaining:
              description: Requests left in the window.
              schema:
                type: integer
`})))()}var ga;function _a(){return(_a=e((()=>{ga=`openapi: 3.0.3
info:
  title: Orders
  version: 1.0.0
paths:
  /orders:
    post:
      parameters:
        - name: dryRun
          in: query
          description: Validate without storing.
          schema:
            type: boolean
            default: false
        - name: expand
          in: query
          schema:
            type: array
            items:
              type: string
              enum:
                - lines
                - customer
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
          required: true
          schema:
            type: string
        - name: theme
          in: cookie
          schema:
            type: string
            enum:
              - light
              - dark
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
          description: ""
          headers:
            ETag:
              schema:
                type: string
            X-Rate-Limit-Remaining:
              description: Requests left in the window.
              schema:
                type: integer
          content:
            application/json:
              schema:
                type: object
                properties:
                  id:
                    type: string
                  status:
                    type: string
`})))()}var va;function ya(){return(ya=e((()=>{va=`openapi: 3.0.3
info:
  title: Orders
  version: 1.0.0
paths:
  /api/v2/stores/main-store/orders/pending/export-requests/{orderId}:
    post:
      summary: Update an order
      operationId: updateOrder
      description: |-
        Replaces the order with the given state.

        - Validates the **status** transition.
        - Returns the stored order.
      security:
        - oauth:
            - orders:write
        - api_key: []
      x-rate-limit: 100
      x-audience:
        visibility: public
      parameters:
        - name: orderId
          in: path
          required: true
          description: Order identifier.
          schema:
            type: string
      responses:
        "200":
          description: ""
components:
  securitySchemes:
    oauth:
      type: oauth2
      flows:
        clientCredentials:
          tokenUrl: https://auth.example.com/token
          scopes:
            orders:read: Read orders
            orders:write: Modify orders
    api_key:
      type: apiKey
      in: header
      name: X-API-Key
`})))()}var ba;function xa(){return(xa=e((()=>{ba=`openapi: 3.0.3
info:
  title: Orders
  version: 1.0.0
paths:
  /api/v2/stores/main-store/orders/pending/export-requests/{orderId}:
    post:
      operationId: updateOrder
      description: |-
        Replaces the order with the given state.

        - Validates the **status** transition.
        - Returns the stored order.
      security:
        - oauth:
            - orders:write
        - api_key: []
      x-rate-limit: 100
      x-audience:
        visibility: public
      parameters:
        - name: orderId
          in: path
          required: true
          description: Order identifier.
          schema:
            type: string
        - name: dryRun
          in: query
          description: Validate without storing.
          schema:
            type: boolean
            default: false
        - name: expand
          in: query
          schema:
            type: array
            items:
              type: string
              enum:
                - lines
                - customer
      responses:
        "200":
          description: ""
components:
  securitySchemes:
    oauth:
      type: oauth2
      flows:
        clientCredentials:
          tokenUrl: https://auth.example.com/token
          scopes:
            orders:read: Read orders
            orders:write: Modify orders
    api_key:
      type: apiKey
      in: header
      name: X-API-Key
`})))()}var Sa;function Ca(){return(Ca=e((()=>{Sa=`openapi: 3.0.3
info:
  title: Orders
  version: 1.0.0
paths:
  /api/v2/stores/main-store/orders/pending/export-requests/{orderId}:
    post:
      description: |-
        Replaces the order with the given state.

        - Validates the **status** transition.
        - Returns the stored order.
      security:
        - oauth:
            - orders:write
        - api_key: []
      x-rate-limit: 100
      x-audience:
        visibility: public
      parameters:
        - name: orderId
          in: path
          required: true
          description: Order identifier.
          schema:
            type: string
        - name: dryRun
          in: query
          description: Validate without storing.
          schema:
            type: boolean
            default: false
        - name: expand
          in: query
          schema:
            type: array
            items:
              type: string
              enum:
                - lines
                - customer
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
        "200":
          description: ""
components:
  securitySchemes:
    oauth:
      type: oauth2
      flows:
        clientCredentials:
          tokenUrl: https://auth.example.com/token
          scopes:
            orders:read: Read orders
            orders:write: Modify orders
    api_key:
      type: apiKey
      in: header
      name: X-API-Key
`})))()}var wa;function Ta(){return(Ta=e((()=>{wa=`openapi: 3.0.3
info:
  title: Orders
  version: 1.0.0
paths:
  /orders/{orderId}:
    post:
      description: |-
        Replaces the order with the given state.

        - Validates the **status** transition.
        - Returns the stored order.
      security:
        - oauth:
            - orders:write
        - api_key: []
      x-rate-limit: 100
      x-audience:
        visibility: public
      parameters:
        - name: orderId
          in: path
          required: true
          description: Order identifier.
          schema:
            type: string
        - name: dryRun
          in: query
          description: Validate without storing.
          schema:
            type: boolean
            default: false
        - name: expand
          in: query
          schema:
            type: array
            items:
              type: string
              enum:
                - lines
                - customer
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
          required: true
          schema:
            type: string
        - name: theme
          in: cookie
          schema:
            type: string
            enum:
              - light
              - dark
      responses:
        "200":
          description: ""
components:
  securitySchemes:
    oauth:
      type: oauth2
      flows:
        clientCredentials:
          tokenUrl: https://auth.example.com/token
          scopes:
            orders:read: Read orders
            orders:write: Modify orders
    api_key:
      type: apiKey
      in: header
      name: X-API-Key
`})))()}var Ea;function Da(){return(Da=e((()=>{Ea=`openapi: 3.0.3
info:
  title: Orders
  version: 1.0.0
paths:
  /orders/{orderId}:
    post:
      security:
        - oauth:
            - orders:write
        - api_key: []
      x-rate-limit: 100
      x-audience:
        visibility: public
      parameters:
        - name: orderId
          in: path
          required: true
          description: Order identifier.
          schema:
            type: string
        - name: dryRun
          in: query
          description: Validate without storing.
          schema:
            type: boolean
            default: false
        - name: expand
          in: query
          schema:
            type: array
            items:
              type: string
              enum:
                - lines
                - customer
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
          required: true
          schema:
            type: string
        - name: theme
          in: cookie
          schema:
            type: string
            enum:
              - light
              - dark
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
          description: ""
components:
  securitySchemes:
    oauth:
      type: oauth2
      flows:
        clientCredentials:
          tokenUrl: https://auth.example.com/token
          scopes:
            orders:read: Read orders
            orders:write: Modify orders
    api_key:
      type: apiKey
      in: header
      name: X-API-Key
`})))()}var Oa;function ka(){return(ka=e((()=>{Oa=`openapi: 3.0.3
info:
  title: Orders
  version: 1.0.0
paths:
  /orders/{orderId}:
    post:
      x-rate-limit: 100
      x-audience:
        visibility: public
      parameters:
        - name: orderId
          in: path
          required: true
          description: Order identifier.
          schema:
            type: string
        - name: dryRun
          in: query
          description: Validate without storing.
          schema:
            type: boolean
            default: false
        - name: expand
          in: query
          schema:
            type: array
            items:
              type: string
              enum:
                - lines
                - customer
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
          required: true
          schema:
            type: string
        - name: theme
          in: cookie
          schema:
            type: string
            enum:
              - light
              - dark
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
          description: ""
          headers:
            ETag:
              schema:
                type: string
            X-Rate-Limit-Remaining:
              description: Requests left in the window.
              schema:
                type: integer
`})))()}var Aa;function ja(){return(ja=e((()=>{Aa=`openapi: 3.0.3
info:
  title: Orders
  version: 1.0.0
paths:
  /orders/{orderId}:
    post:
      parameters:
        - name: orderId
          in: path
          required: true
          description: Order identifier.
          schema:
            type: string
        - name: dryRun
          in: query
          description: Validate without storing.
          schema:
            type: boolean
            default: false
        - name: expand
          in: query
          schema:
            type: array
            items:
              type: string
              enum:
                - lines
                - customer
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
          required: true
          schema:
            type: string
        - name: theme
          in: cookie
          schema:
            type: string
            enum:
              - light
              - dark
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
          description: ""
          headers:
            ETag:
              schema:
                type: string
            X-Rate-Limit-Remaining:
              description: Requests left in the window.
              schema:
                type: integer
          content:
            application/json:
              schema:
                type: object
                properties:
                  id:
                    type: string
                  status:
                    type: string
`})))()}var Ma;function Na(){return(Na=e((()=>{Ma=`openapi: 3.0.3
info:
  title: Orders
  version: 1.0.0
paths:
  /api/v2/stores/main-store/orders/pending/export-requests/{orderId}:
    post:
      summary: Update an order
      operationId: updateOrder
      description: |-
        Replaces the order with the given state.

        - Validates the **status** transition.
        - Returns the stored order.
      security:
        - oauth:
            - orders:write
        - api_key: []
      x-rate-limit: 100
      x-audience:
        visibility: public
      parameters:
        - name: orderId
          in: path
          required: true
          description: Order identifier.
          schema:
            type: string
        - name: dryRun
          in: query
          description: Validate without storing.
          schema:
            type: boolean
            default: false
        - name: expand
          in: query
          schema:
            type: array
            items:
              type: string
              enum:
                - lines
                - customer
      responses:
        "200":
          description: ""
components:
  securitySchemes:
    oauth:
      type: oauth2
      flows:
        clientCredentials:
          tokenUrl: https://auth.example.com/token
          scopes:
            orders:read: Read orders
            orders:write: Modify orders
    api_key:
      type: apiKey
      in: header
      name: X-API-Key
`})))()}var Pa;function Fa(){return(Fa=e((()=>{Pa=`openapi: 3.0.3
info:
  title: Orders
  version: 1.0.0
paths:
  /api/v2/stores/main-store/orders/pending/export-requests/{orderId}:
    post:
      operationId: updateOrder
      description: |-
        Replaces the order with the given state.

        - Validates the **status** transition.
        - Returns the stored order.
      security:
        - oauth:
            - orders:write
        - api_key: []
      x-rate-limit: 100
      x-audience:
        visibility: public
      parameters:
        - name: orderId
          in: path
          required: true
          description: Order identifier.
          schema:
            type: string
        - name: dryRun
          in: query
          description: Validate without storing.
          schema:
            type: boolean
            default: false
        - name: expand
          in: query
          schema:
            type: array
            items:
              type: string
              enum:
                - lines
                - customer
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
        "200":
          description: ""
components:
  securitySchemes:
    oauth:
      type: oauth2
      flows:
        clientCredentials:
          tokenUrl: https://auth.example.com/token
          scopes:
            orders:read: Read orders
            orders:write: Modify orders
    api_key:
      type: apiKey
      in: header
      name: X-API-Key
`})))()}var Ia;function La(){return(La=e((()=>{Ia=`openapi: 3.0.3
info:
  title: Orders
  version: 1.0.0
paths:
  /api/v2/stores/main-store/orders/pending/export-requests/{orderId}:
    post:
      description: |-
        Replaces the order with the given state.

        - Validates the **status** transition.
        - Returns the stored order.
      security:
        - oauth:
            - orders:write
        - api_key: []
      x-rate-limit: 100
      x-audience:
        visibility: public
      parameters:
        - name: orderId
          in: path
          required: true
          description: Order identifier.
          schema:
            type: string
        - name: dryRun
          in: query
          description: Validate without storing.
          schema:
            type: boolean
            default: false
        - name: expand
          in: query
          schema:
            type: array
            items:
              type: string
              enum:
                - lines
                - customer
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
          required: true
          schema:
            type: string
        - name: theme
          in: cookie
          schema:
            type: string
            enum:
              - light
              - dark
      responses:
        "200":
          description: ""
components:
  securitySchemes:
    oauth:
      type: oauth2
      flows:
        clientCredentials:
          tokenUrl: https://auth.example.com/token
          scopes:
            orders:read: Read orders
            orders:write: Modify orders
    api_key:
      type: apiKey
      in: header
      name: X-API-Key
`})))()}var Ra;function za(){return(za=e((()=>{Ra=`openapi: 3.0.3
info:
  title: Orders
  version: 1.0.0
paths:
  /orders/{orderId}:
    post:
      description: |-
        Replaces the order with the given state.

        - Validates the **status** transition.
        - Returns the stored order.
      security:
        - oauth:
            - orders:write
        - api_key: []
      x-rate-limit: 100
      x-audience:
        visibility: public
      parameters:
        - name: orderId
          in: path
          required: true
          description: Order identifier.
          schema:
            type: string
        - name: dryRun
          in: query
          description: Validate without storing.
          schema:
            type: boolean
            default: false
        - name: expand
          in: query
          schema:
            type: array
            items:
              type: string
              enum:
                - lines
                - customer
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
          required: true
          schema:
            type: string
        - name: theme
          in: cookie
          schema:
            type: string
            enum:
              - light
              - dark
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
          description: ""
components:
  securitySchemes:
    oauth:
      type: oauth2
      flows:
        clientCredentials:
          tokenUrl: https://auth.example.com/token
          scopes:
            orders:read: Read orders
            orders:write: Modify orders
    api_key:
      type: apiKey
      in: header
      name: X-API-Key
`})))()}var Ba;function Va(){return(Va=e((()=>{Ba=`openapi: 3.0.3
info:
  title: Orders
  version: 1.0.0
paths:
  /orders/{orderId}:
    post:
      security:
        - oauth:
            - orders:write
        - api_key: []
      x-rate-limit: 100
      x-audience:
        visibility: public
      parameters:
        - name: orderId
          in: path
          required: true
          description: Order identifier.
          schema:
            type: string
        - name: dryRun
          in: query
          description: Validate without storing.
          schema:
            type: boolean
            default: false
        - name: expand
          in: query
          schema:
            type: array
            items:
              type: string
              enum:
                - lines
                - customer
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
          required: true
          schema:
            type: string
        - name: theme
          in: cookie
          schema:
            type: string
            enum:
              - light
              - dark
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
          description: ""
          headers:
            ETag:
              schema:
                type: string
            X-Rate-Limit-Remaining:
              description: Requests left in the window.
              schema:
                type: integer
components:
  securitySchemes:
    oauth:
      type: oauth2
      flows:
        clientCredentials:
          tokenUrl: https://auth.example.com/token
          scopes:
            orders:read: Read orders
            orders:write: Modify orders
    api_key:
      type: apiKey
      in: header
      name: X-API-Key
`})))()}var Ha;function Ua(){return(Ua=e((()=>{Ha=`openapi: 3.0.3
info:
  title: Orders
  version: 1.0.0
paths:
  /orders/{orderId}:
    post:
      x-rate-limit: 100
      x-audience:
        visibility: public
      parameters:
        - name: orderId
          in: path
          required: true
          description: Order identifier.
          schema:
            type: string
        - name: dryRun
          in: query
          description: Validate without storing.
          schema:
            type: boolean
            default: false
        - name: expand
          in: query
          schema:
            type: array
            items:
              type: string
              enum:
                - lines
                - customer
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
          required: true
          schema:
            type: string
        - name: theme
          in: cookie
          schema:
            type: string
            enum:
              - light
              - dark
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
          description: ""
          headers:
            ETag:
              schema:
                type: string
            X-Rate-Limit-Remaining:
              description: Requests left in the window.
              schema:
                type: integer
          content:
            application/json:
              schema:
                type: object
                properties:
                  id:
                    type: string
                  status:
                    type: string
`})))()}var Wa;function Ga(){return(Ga=e((()=>{Wa=`openapi: 3.0.3
info:
  title: Orders
  version: 1.0.0
paths:
  /api/v2/stores/main-store/orders/pending/export-requests/{orderId}:
    post:
      summary: Update an order
      operationId: updateOrder
      description: |-
        Replaces the order with the given state.

        - Validates the **status** transition.
        - Returns the stored order.
      security:
        - oauth:
            - orders:write
        - api_key: []
      x-rate-limit: 100
      x-audience:
        visibility: public
      parameters:
        - name: orderId
          in: path
          required: true
          description: Order identifier.
          schema:
            type: string
        - name: dryRun
          in: query
          description: Validate without storing.
          schema:
            type: boolean
            default: false
        - name: expand
          in: query
          schema:
            type: array
            items:
              type: string
              enum:
                - lines
                - customer
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
        "200":
          description: ""
components:
  securitySchemes:
    oauth:
      type: oauth2
      flows:
        clientCredentials:
          tokenUrl: https://auth.example.com/token
          scopes:
            orders:read: Read orders
            orders:write: Modify orders
    api_key:
      type: apiKey
      in: header
      name: X-API-Key
`})))()}var Ka;function qa(){return(qa=e((()=>{Ka=`openapi: 3.0.3
info:
  title: Orders
  version: 1.0.0
paths:
  /api/v2/stores/main-store/orders/pending/export-requests/{orderId}:
    post:
      operationId: updateOrder
      description: |-
        Replaces the order with the given state.

        - Validates the **status** transition.
        - Returns the stored order.
      security:
        - oauth:
            - orders:write
        - api_key: []
      x-rate-limit: 100
      x-audience:
        visibility: public
      parameters:
        - name: orderId
          in: path
          required: true
          description: Order identifier.
          schema:
            type: string
        - name: dryRun
          in: query
          description: Validate without storing.
          schema:
            type: boolean
            default: false
        - name: expand
          in: query
          schema:
            type: array
            items:
              type: string
              enum:
                - lines
                - customer
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
          required: true
          schema:
            type: string
        - name: theme
          in: cookie
          schema:
            type: string
            enum:
              - light
              - dark
      responses:
        "200":
          description: ""
components:
  securitySchemes:
    oauth:
      type: oauth2
      flows:
        clientCredentials:
          tokenUrl: https://auth.example.com/token
          scopes:
            orders:read: Read orders
            orders:write: Modify orders
    api_key:
      type: apiKey
      in: header
      name: X-API-Key
`})))()}var Ja;function Ya(){return(Ya=e((()=>{Ja=`openapi: 3.0.3
info:
  title: Orders
  version: 1.0.0
paths:
  /api/v2/stores/main-store/orders/pending/export-requests/{orderId}:
    post:
      description: |-
        Replaces the order with the given state.

        - Validates the **status** transition.
        - Returns the stored order.
      security:
        - oauth:
            - orders:write
        - api_key: []
      x-rate-limit: 100
      x-audience:
        visibility: public
      parameters:
        - name: orderId
          in: path
          required: true
          description: Order identifier.
          schema:
            type: string
        - name: dryRun
          in: query
          description: Validate without storing.
          schema:
            type: boolean
            default: false
        - name: expand
          in: query
          schema:
            type: array
            items:
              type: string
              enum:
                - lines
                - customer
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
          required: true
          schema:
            type: string
        - name: theme
          in: cookie
          schema:
            type: string
            enum:
              - light
              - dark
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
          description: ""
components:
  securitySchemes:
    oauth:
      type: oauth2
      flows:
        clientCredentials:
          tokenUrl: https://auth.example.com/token
          scopes:
            orders:read: Read orders
            orders:write: Modify orders
    api_key:
      type: apiKey
      in: header
      name: X-API-Key
`})))()}var Xa;function Za(){return(Za=e((()=>{Xa=`openapi: 3.0.3
info:
  title: Orders
  version: 1.0.0
paths:
  /orders/{orderId}:
    post:
      description: |-
        Replaces the order with the given state.

        - Validates the **status** transition.
        - Returns the stored order.
      security:
        - oauth:
            - orders:write
        - api_key: []
      x-rate-limit: 100
      x-audience:
        visibility: public
      parameters:
        - name: orderId
          in: path
          required: true
          description: Order identifier.
          schema:
            type: string
        - name: dryRun
          in: query
          description: Validate without storing.
          schema:
            type: boolean
            default: false
        - name: expand
          in: query
          schema:
            type: array
            items:
              type: string
              enum:
                - lines
                - customer
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
          required: true
          schema:
            type: string
        - name: theme
          in: cookie
          schema:
            type: string
            enum:
              - light
              - dark
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
          description: ""
          headers:
            ETag:
              schema:
                type: string
            X-Rate-Limit-Remaining:
              description: Requests left in the window.
              schema:
                type: integer
components:
  securitySchemes:
    oauth:
      type: oauth2
      flows:
        clientCredentials:
          tokenUrl: https://auth.example.com/token
          scopes:
            orders:read: Read orders
            orders:write: Modify orders
    api_key:
      type: apiKey
      in: header
      name: X-API-Key
`})))()}var Qa;function $a(){return($a=e((()=>{Qa=`openapi: 3.0.3
info:
  title: Orders
  version: 1.0.0
paths:
  /orders/{orderId}:
    post:
      security:
        - oauth:
            - orders:write
        - api_key: []
      x-rate-limit: 100
      x-audience:
        visibility: public
      parameters:
        - name: orderId
          in: path
          required: true
          description: Order identifier.
          schema:
            type: string
        - name: dryRun
          in: query
          description: Validate without storing.
          schema:
            type: boolean
            default: false
        - name: expand
          in: query
          schema:
            type: array
            items:
              type: string
              enum:
                - lines
                - customer
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
          required: true
          schema:
            type: string
        - name: theme
          in: cookie
          schema:
            type: string
            enum:
              - light
              - dark
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
          description: ""
          headers:
            ETag:
              schema:
                type: string
            X-Rate-Limit-Remaining:
              description: Requests left in the window.
              schema:
                type: integer
          content:
            application/json:
              schema:
                type: object
                properties:
                  id:
                    type: string
                  status:
                    type: string
components:
  securitySchemes:
    oauth:
      type: oauth2
      flows:
        clientCredentials:
          tokenUrl: https://auth.example.com/token
          scopes:
            orders:read: Read orders
            orders:write: Modify orders
    api_key:
      type: apiKey
      in: header
      name: X-API-Key
`})))()}var eo;function to(){return(to=e((()=>{eo=`openapi: 3.0.3
info:
  title: Orders
  version: 1.0.0
paths:
  /api/v2/stores/main-store/orders/pending/export-requests/{orderId}:
    post:
      summary: Update an order
      operationId: updateOrder
      description: |-
        Replaces the order with the given state.

        - Validates the **status** transition.
        - Returns the stored order.
      security:
        - oauth:
            - orders:write
        - api_key: []
      x-rate-limit: 100
      x-audience:
        visibility: public
      parameters:
        - name: orderId
          in: path
          required: true
          description: Order identifier.
          schema:
            type: string
        - name: dryRun
          in: query
          description: Validate without storing.
          schema:
            type: boolean
            default: false
        - name: expand
          in: query
          schema:
            type: array
            items:
              type: string
              enum:
                - lines
                - customer
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
          required: true
          schema:
            type: string
        - name: theme
          in: cookie
          schema:
            type: string
            enum:
              - light
              - dark
      responses:
        "200":
          description: ""
components:
  securitySchemes:
    oauth:
      type: oauth2
      flows:
        clientCredentials:
          tokenUrl: https://auth.example.com/token
          scopes:
            orders:read: Read orders
            orders:write: Modify orders
    api_key:
      type: apiKey
      in: header
      name: X-API-Key
`})))()}var no;function ro(){return(ro=e((()=>{no=`openapi: 3.0.3
info:
  title: Orders
  version: 1.0.0
paths:
  /api/v2/stores/main-store/orders/pending/export-requests/{orderId}:
    post:
      operationId: updateOrder
      description: |-
        Replaces the order with the given state.

        - Validates the **status** transition.
        - Returns the stored order.
      security:
        - oauth:
            - orders:write
        - api_key: []
      x-rate-limit: 100
      x-audience:
        visibility: public
      parameters:
        - name: orderId
          in: path
          required: true
          description: Order identifier.
          schema:
            type: string
        - name: dryRun
          in: query
          description: Validate without storing.
          schema:
            type: boolean
            default: false
        - name: expand
          in: query
          schema:
            type: array
            items:
              type: string
              enum:
                - lines
                - customer
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
          required: true
          schema:
            type: string
        - name: theme
          in: cookie
          schema:
            type: string
            enum:
              - light
              - dark
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
          description: ""
components:
  securitySchemes:
    oauth:
      type: oauth2
      flows:
        clientCredentials:
          tokenUrl: https://auth.example.com/token
          scopes:
            orders:read: Read orders
            orders:write: Modify orders
    api_key:
      type: apiKey
      in: header
      name: X-API-Key
`})))()}var io;function ao(){return(ao=e((()=>{io=`openapi: 3.0.3
info:
  title: Orders
  version: 1.0.0
paths:
  /api/v2/stores/main-store/orders/pending/export-requests/{orderId}:
    post:
      description: |-
        Replaces the order with the given state.

        - Validates the **status** transition.
        - Returns the stored order.
      security:
        - oauth:
            - orders:write
        - api_key: []
      x-rate-limit: 100
      x-audience:
        visibility: public
      parameters:
        - name: orderId
          in: path
          required: true
          description: Order identifier.
          schema:
            type: string
        - name: dryRun
          in: query
          description: Validate without storing.
          schema:
            type: boolean
            default: false
        - name: expand
          in: query
          schema:
            type: array
            items:
              type: string
              enum:
                - lines
                - customer
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
          required: true
          schema:
            type: string
        - name: theme
          in: cookie
          schema:
            type: string
            enum:
              - light
              - dark
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
          description: ""
          headers:
            ETag:
              schema:
                type: string
            X-Rate-Limit-Remaining:
              description: Requests left in the window.
              schema:
                type: integer
components:
  securitySchemes:
    oauth:
      type: oauth2
      flows:
        clientCredentials:
          tokenUrl: https://auth.example.com/token
          scopes:
            orders:read: Read orders
            orders:write: Modify orders
    api_key:
      type: apiKey
      in: header
      name: X-API-Key
`})))()}var oo;function so(){return(so=e((()=>{oo=`openapi: 3.0.3
info:
  title: Orders
  version: 1.0.0
paths:
  /orders/{orderId}:
    post:
      description: |-
        Replaces the order with the given state.

        - Validates the **status** transition.
        - Returns the stored order.
      security:
        - oauth:
            - orders:write
        - api_key: []
      x-rate-limit: 100
      x-audience:
        visibility: public
      parameters:
        - name: orderId
          in: path
          required: true
          description: Order identifier.
          schema:
            type: string
        - name: dryRun
          in: query
          description: Validate without storing.
          schema:
            type: boolean
            default: false
        - name: expand
          in: query
          schema:
            type: array
            items:
              type: string
              enum:
                - lines
                - customer
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
          required: true
          schema:
            type: string
        - name: theme
          in: cookie
          schema:
            type: string
            enum:
              - light
              - dark
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
          description: ""
          headers:
            ETag:
              schema:
                type: string
            X-Rate-Limit-Remaining:
              description: Requests left in the window.
              schema:
                type: integer
          content:
            application/json:
              schema:
                type: object
                properties:
                  id:
                    type: string
                  status:
                    type: string
components:
  securitySchemes:
    oauth:
      type: oauth2
      flows:
        clientCredentials:
          tokenUrl: https://auth.example.com/token
          scopes:
            orders:read: Read orders
            orders:write: Modify orders
    api_key:
      type: apiKey
      in: header
      name: X-API-Key
`})))()}var co;function lo(){return(lo=e((()=>{co=`openapi: 3.0.3
info:
  title: Orders
  version: 1.0.0
paths:
  /api/v2/stores/main-store/orders/pending/export-requests/{orderId}:
    post:
      summary: Update an order
      operationId: updateOrder
      description: |-
        Replaces the order with the given state.

        - Validates the **status** transition.
        - Returns the stored order.
      security:
        - oauth:
            - orders:write
        - api_key: []
      x-rate-limit: 100
      x-audience:
        visibility: public
      parameters:
        - name: orderId
          in: path
          required: true
          description: Order identifier.
          schema:
            type: string
        - name: dryRun
          in: query
          description: Validate without storing.
          schema:
            type: boolean
            default: false
        - name: expand
          in: query
          schema:
            type: array
            items:
              type: string
              enum:
                - lines
                - customer
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
          required: true
          schema:
            type: string
        - name: theme
          in: cookie
          schema:
            type: string
            enum:
              - light
              - dark
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
          description: ""
components:
  securitySchemes:
    oauth:
      type: oauth2
      flows:
        clientCredentials:
          tokenUrl: https://auth.example.com/token
          scopes:
            orders:read: Read orders
            orders:write: Modify orders
    api_key:
      type: apiKey
      in: header
      name: X-API-Key
`})))()}var uo;function fo(){return(fo=e((()=>{uo=`openapi: 3.0.3
info:
  title: Orders
  version: 1.0.0
paths:
  /api/v2/stores/main-store/orders/pending/export-requests/{orderId}:
    post:
      operationId: updateOrder
      description: |-
        Replaces the order with the given state.

        - Validates the **status** transition.
        - Returns the stored order.
      security:
        - oauth:
            - orders:write
        - api_key: []
      x-rate-limit: 100
      x-audience:
        visibility: public
      parameters:
        - name: orderId
          in: path
          required: true
          description: Order identifier.
          schema:
            type: string
        - name: dryRun
          in: query
          description: Validate without storing.
          schema:
            type: boolean
            default: false
        - name: expand
          in: query
          schema:
            type: array
            items:
              type: string
              enum:
                - lines
                - customer
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
          required: true
          schema:
            type: string
        - name: theme
          in: cookie
          schema:
            type: string
            enum:
              - light
              - dark
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
          description: ""
          headers:
            ETag:
              schema:
                type: string
            X-Rate-Limit-Remaining:
              description: Requests left in the window.
              schema:
                type: integer
components:
  securitySchemes:
    oauth:
      type: oauth2
      flows:
        clientCredentials:
          tokenUrl: https://auth.example.com/token
          scopes:
            orders:read: Read orders
            orders:write: Modify orders
    api_key:
      type: apiKey
      in: header
      name: X-API-Key
`})))()}var po;function mo(){return(mo=e((()=>{po=`openapi: 3.0.3
info:
  title: Orders
  version: 1.0.0
paths:
  /api/v2/stores/main-store/orders/pending/export-requests/{orderId}:
    post:
      description: |-
        Replaces the order with the given state.

        - Validates the **status** transition.
        - Returns the stored order.
      security:
        - oauth:
            - orders:write
        - api_key: []
      x-rate-limit: 100
      x-audience:
        visibility: public
      parameters:
        - name: orderId
          in: path
          required: true
          description: Order identifier.
          schema:
            type: string
        - name: dryRun
          in: query
          description: Validate without storing.
          schema:
            type: boolean
            default: false
        - name: expand
          in: query
          schema:
            type: array
            items:
              type: string
              enum:
                - lines
                - customer
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
          required: true
          schema:
            type: string
        - name: theme
          in: cookie
          schema:
            type: string
            enum:
              - light
              - dark
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
          description: ""
          headers:
            ETag:
              schema:
                type: string
            X-Rate-Limit-Remaining:
              description: Requests left in the window.
              schema:
                type: integer
          content:
            application/json:
              schema:
                type: object
                properties:
                  id:
                    type: string
                  status:
                    type: string
components:
  securitySchemes:
    oauth:
      type: oauth2
      flows:
        clientCredentials:
          tokenUrl: https://auth.example.com/token
          scopes:
            orders:read: Read orders
            orders:write: Modify orders
    api_key:
      type: apiKey
      in: header
      name: X-API-Key
`})))()}var ho;function go(){return(go=e((()=>{ho=`openapi: 3.0.3
info:
  title: Orders
  version: 1.0.0
paths:
  /api/v2/stores/main-store/orders/pending/export-requests/{orderId}:
    post:
      summary: Update an order
      operationId: updateOrder
      description: |-
        Replaces the order with the given state.

        - Validates the **status** transition.
        - Returns the stored order.
      security:
        - oauth:
            - orders:write
        - api_key: []
      x-rate-limit: 100
      x-audience:
        visibility: public
      parameters:
        - name: orderId
          in: path
          required: true
          description: Order identifier.
          schema:
            type: string
        - name: dryRun
          in: query
          description: Validate without storing.
          schema:
            type: boolean
            default: false
        - name: expand
          in: query
          schema:
            type: array
            items:
              type: string
              enum:
                - lines
                - customer
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
          required: true
          schema:
            type: string
        - name: theme
          in: cookie
          schema:
            type: string
            enum:
              - light
              - dark
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
          description: ""
          headers:
            ETag:
              schema:
                type: string
            X-Rate-Limit-Remaining:
              description: Requests left in the window.
              schema:
                type: integer
components:
  securitySchemes:
    oauth:
      type: oauth2
      flows:
        clientCredentials:
          tokenUrl: https://auth.example.com/token
          scopes:
            orders:read: Read orders
            orders:write: Modify orders
    api_key:
      type: apiKey
      in: header
      name: X-API-Key
`})))()}var _o;function vo(){return(vo=e((()=>{_o=`openapi: 3.0.3
info:
  title: Orders
  version: 1.0.0
paths:
  /api/v2/stores/main-store/orders/pending/export-requests/{orderId}:
    post:
      operationId: updateOrder
      description: |-
        Replaces the order with the given state.

        - Validates the **status** transition.
        - Returns the stored order.
      security:
        - oauth:
            - orders:write
        - api_key: []
      x-rate-limit: 100
      x-audience:
        visibility: public
      parameters:
        - name: orderId
          in: path
          required: true
          description: Order identifier.
          schema:
            type: string
        - name: dryRun
          in: query
          description: Validate without storing.
          schema:
            type: boolean
            default: false
        - name: expand
          in: query
          schema:
            type: array
            items:
              type: string
              enum:
                - lines
                - customer
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
          required: true
          schema:
            type: string
        - name: theme
          in: cookie
          schema:
            type: string
            enum:
              - light
              - dark
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
          description: ""
          headers:
            ETag:
              schema:
                type: string
            X-Rate-Limit-Remaining:
              description: Requests left in the window.
              schema:
                type: integer
          content:
            application/json:
              schema:
                type: object
                properties:
                  id:
                    type: string
                  status:
                    type: string
components:
  securitySchemes:
    oauth:
      type: oauth2
      flows:
        clientCredentials:
          tokenUrl: https://auth.example.com/token
          scopes:
            orders:read: Read orders
            orders:write: Modify orders
    api_key:
      type: apiKey
      in: header
      name: X-API-Key
`})))()}var yo;function bo(){return(bo=e((()=>{yo=`openapi: 3.0.3
info:
  title: Orders
  version: 1.0.0
paths:
  /api/v2/stores/main-store/orders/pending/export-requests/{orderId}:
    post:
      summary: Update an order
      operationId: updateOrder
      description: |-
        Replaces the order with the given state.

        - Validates the **status** transition.
        - Returns the stored order.
      security:
        - oauth:
            - orders:write
        - api_key: []
      x-rate-limit: 100
      x-audience:
        visibility: public
      parameters:
        - name: orderId
          in: path
          required: true
          description: Order identifier.
          schema:
            type: string
        - name: dryRun
          in: query
          description: Validate without storing.
          schema:
            type: boolean
            default: false
        - name: expand
          in: query
          schema:
            type: array
            items:
              type: string
              enum:
                - lines
                - customer
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
          required: true
          schema:
            type: string
        - name: theme
          in: cookie
          schema:
            type: string
            enum:
              - light
              - dark
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
          description: ""
          headers:
            ETag:
              schema:
                type: string
            X-Rate-Limit-Remaining:
              description: Requests left in the window.
              schema:
                type: integer
          content:
            application/json:
              schema:
                type: object
                properties:
                  id:
                    type: string
                  status:
                    type: string
components:
  securitySchemes:
    oauth:
      type: oauth2
      flows:
        clientCredentials:
          tokenUrl: https://auth.example.com/token
          scopes:
            orders:read: Read orders
            orders:write: Modify orders
    api_key:
      type: apiKey
      in: header
      name: X-API-Key
`})))()}var xo;function So(){return(So=e((()=>{xo=`openapi: 3.0.3
info:
  title: Orders
  version: 1.0.0
paths:
  /api/v2/stores/main-store/orders/pending/export-requests/{orderId}:
    post:
      summary: Update an order
      operationId: updateOrder
      description: |-
        Replaces the order with the given state.

        - Validates the **status** transition.
        - Returns the stored order.
      security:
        - oauth:
            - orders:write
        - api_key: []
      x-rate-limit: 100
      x-audience:
        visibility: public
      parameters:
        - name: orderId
          in: path
          required: true
          description: Order identifier.
          schema:
            type: string
        - name: dryRun
          in: query
          description: Validate without storing.
          schema:
            type: boolean
            default: false
        - name: expand
          in: query
          schema:
            type: array
            items:
              type: string
              enum:
                - lines
                - customer
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
          required: true
          schema:
            type: string
        - name: theme
          in: cookie
          schema:
            type: string
            enum:
              - light
              - dark
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
          description: ""
          headers:
            ETag:
              schema:
                type: string
            X-Rate-Limit-Remaining:
              description: Requests left in the window.
              schema:
                type: integer
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
          description: ""
          headers:
            ETag:
              schema:
                type: string
            X-Rate-Limit-Remaining:
              description: Requests left in the window.
              schema:
                type: integer
          content:
            application/problem+json:
              schema:
                type: object
                properties:
                  title:
                    type: string
                  detail:
                    type: string
components:
  securitySchemes:
    oauth:
      type: oauth2
      flows:
        clientCredentials:
          tokenUrl: https://auth.example.com/token
          scopes:
            orders:read: Read orders
            orders:write: Modify orders
    api_key:
      type: apiKey
      in: header
      name: X-API-Key
`})))()}var Co,wo,t,To,n,r,i,a,o,s,c,l,u,d,f,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j,M,N,P,F,I,L,R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q,Eo,Do,Oo,ko,Ao,jo,Mo,No,Po,Fo,Io,Lo,Ro,zo,Bo,Vo,Ho,Uo,Wo,Go,Ko,qo,Jo,Yo,Xo,Zo,Qo,$o,es,ts,ns,rs,is,as,os,ss,cs,$,ls,us,ds,fs,ps,ms,hs,gs,_s,vs,ys,bs,xs,Ss,Cs,ws,Ts,Es,Ds,Os,ks,As,js,Ms,Ns,Ps,Fs,Is,Ls,Rs,zs,Bs,Vs,Hs,Us,Ws,Gs,Ks,qs,Js,Ys,Xs,Zs,Qs,$s,ec,tc,nc,rc,ic,ac,oc,sc,cc,lc,uc,dc,fc,pc,mc,hc,gc,_c,vc,yc,bc,xc,Sc,Cc,wc,Tc,Ec,Dc,Oc,kc,Ac,jc,Mc,Nc;function Pc(){return(Pc=e((()=>{ue(),fe(),me(),ge(),ve(),be(),Se(),we(),Ee(),Oe(),Ae(),Me(),Pe(),Ie(),Re(),Be(),He(),We(),Ke(),Je(),Xe(),Qe(),et(),nt(),it(),ot(),ct(),ut(),ft(),mt(),gt(),vt(),bt(),St(),wt(),Et(),Ot(),At(),Mt(),Pt(),It(),Rt(),Bt(),Ht(),Wt(),Kt(),Jt(),Xt(),Qt(),en(),nn(),an(),sn(),ln(),dn(),pn(),hn(),_n(),yn(),xn(),Cn(),Tn(),Dn(),kn(),jn(),Nn(),Fn(),Ln(),zn(),Vn(),Un(),Gn(),qn(),Yn(),Zn(),$n(),tr(),rr(),ar(),sr(),lr(),dr(),pr(),hr(),_r(),yr(),xr(),Cr(),Tr(),Dr(),kr(),jr(),Nr(),Fr(),Lr(),zr(),Vr(),Ur(),Gr(),qr(),Yr(),Zr(),$r(),ti(),ri(),ai(),si(),li(),di(),pi(),hi(),_i(),yi(),xi(),Ci(),Ti(),Di(),ki(),ji(),Ni(),Fi(),Li(),zi(),Vi(),Ui(),Gi(),qi(),Yi(),Zi(),$i(),ta(),ra(),aa(),sa(),la(),da(),pa(),ha(),_a(),ya(),xa(),Ca(),Ta(),Da(),ka(),ja(),Na(),Fa(),La(),za(),Va(),Ua(),Ga(),qa(),Ya(),Za(),$a(),to(),ro(),ao(),so(),lo(),fo(),mo(),go(),vo(),bo(),So(),ee(),ae(),oe(),Co=se(Object.assign({"../../../../samples/openapi/oas30/e2e/001-pair--summary--operation-id/sample.yaml":le,"../../../../samples/openapi/oas30/e2e/002-pair--summary--address/sample.yaml":de,"../../../../samples/openapi/oas30/e2e/003-pair--summary--description/sample.yaml":pe,"../../../../samples/openapi/oas30/e2e/004-pair--summary--security/sample.yaml":he,"../../../../samples/openapi/oas30/e2e/005-pair--summary--operation-extensions/sample.yaml":_e,"../../../../samples/openapi/oas30/e2e/006-pair--summary--path-parameters/sample.yaml":ye,"../../../../samples/openapi/oas30/e2e/007-pair--summary--query-parameters/sample.yaml":xe,"../../../../samples/openapi/oas30/e2e/008-pair--summary--headers/sample.yaml":Ce,"../../../../samples/openapi/oas30/e2e/009-pair--summary--cookies/sample.yaml":Te,"../../../../samples/openapi/oas30/e2e/010-pair--summary--body/sample.yaml":De,"../../../../samples/openapi/oas30/e2e/011-pair--summary--responses-1-code-headers/sample.yaml":ke,"../../../../samples/openapi/oas30/e2e/012-pair--summary--responses-1-code-body/sample.yaml":je,"../../../../samples/openapi/oas30/e2e/013-pair--summary--responses-2-codes-headers/sample.yaml":Ne,"../../../../samples/openapi/oas30/e2e/014-pair--summary--responses-2-codes-body/sample.yaml":Fe,"../../../../samples/openapi/oas30/e2e/015-pair--operation-id--address/sample.yaml":Le,"../../../../samples/openapi/oas30/e2e/016-pair--operation-id--description/sample.yaml":ze,"../../../../samples/openapi/oas30/e2e/017-pair--operation-id--security/sample.yaml":Ve,"../../../../samples/openapi/oas30/e2e/018-pair--operation-id--operation-extensions/sample.yaml":Ue,"../../../../samples/openapi/oas30/e2e/019-pair--operation-id--path-parameters/sample.yaml":Ge,"../../../../samples/openapi/oas30/e2e/020-pair--operation-id--query-parameters/sample.yaml":qe,"../../../../samples/openapi/oas30/e2e/021-pair--operation-id--headers/sample.yaml":Ye,"../../../../samples/openapi/oas30/e2e/022-pair--operation-id--cookies/sample.yaml":Ze,"../../../../samples/openapi/oas30/e2e/023-pair--operation-id--body/sample.yaml":$e,"../../../../samples/openapi/oas30/e2e/024-pair--operation-id--responses-1-code-headers/sample.yaml":tt,"../../../../samples/openapi/oas30/e2e/025-pair--operation-id--responses-1-code-body/sample.yaml":rt,"../../../../samples/openapi/oas30/e2e/026-pair--operation-id--responses-2-codes-headers/sample.yaml":at,"../../../../samples/openapi/oas30/e2e/027-pair--operation-id--responses-2-codes-body/sample.yaml":st,"../../../../samples/openapi/oas30/e2e/028-pair--address--description/sample.yaml":lt,"../../../../samples/openapi/oas30/e2e/029-pair--address--security/sample.yaml":dt,"../../../../samples/openapi/oas30/e2e/030-pair--address--operation-extensions/sample.yaml":pt,"../../../../samples/openapi/oas30/e2e/031-pair--address--path-parameters/sample.yaml":ht,"../../../../samples/openapi/oas30/e2e/032-pair--address--query-parameters/sample.yaml":_t,"../../../../samples/openapi/oas30/e2e/033-pair--address--headers/sample.yaml":yt,"../../../../samples/openapi/oas30/e2e/034-pair--address--cookies/sample.yaml":xt,"../../../../samples/openapi/oas30/e2e/035-pair--address--body/sample.yaml":Ct,"../../../../samples/openapi/oas30/e2e/036-pair--address--responses-1-code-headers/sample.yaml":Tt,"../../../../samples/openapi/oas30/e2e/037-pair--address--responses-1-code-body/sample.yaml":Dt,"../../../../samples/openapi/oas30/e2e/038-pair--address--responses-2-codes-headers/sample.yaml":kt,"../../../../samples/openapi/oas30/e2e/039-pair--address--responses-2-codes-body/sample.yaml":jt,"../../../../samples/openapi/oas30/e2e/040-pair--description--security/sample.yaml":Nt,"../../../../samples/openapi/oas30/e2e/041-pair--description--operation-extensions/sample.yaml":Ft,"../../../../samples/openapi/oas30/e2e/042-pair--description--path-parameters/sample.yaml":Lt,"../../../../samples/openapi/oas30/e2e/043-pair--description--query-parameters/sample.yaml":zt,"../../../../samples/openapi/oas30/e2e/044-pair--description--headers/sample.yaml":Vt,"../../../../samples/openapi/oas30/e2e/045-pair--description--cookies/sample.yaml":Ut,"../../../../samples/openapi/oas30/e2e/046-pair--description--body/sample.yaml":Gt,"../../../../samples/openapi/oas30/e2e/047-pair--description--responses-1-code-headers/sample.yaml":qt,"../../../../samples/openapi/oas30/e2e/048-pair--description--responses-1-code-body/sample.yaml":Yt,"../../../../samples/openapi/oas30/e2e/049-pair--description--responses-2-codes-headers/sample.yaml":Zt,"../../../../samples/openapi/oas30/e2e/050-pair--description--responses-2-codes-body/sample.yaml":$t,"../../../../samples/openapi/oas30/e2e/051-pair--security--operation-extensions/sample.yaml":tn,"../../../../samples/openapi/oas30/e2e/052-pair--security--path-parameters/sample.yaml":rn,"../../../../samples/openapi/oas30/e2e/053-pair--security--query-parameters/sample.yaml":on,"../../../../samples/openapi/oas30/e2e/054-pair--security--headers/sample.yaml":cn,"../../../../samples/openapi/oas30/e2e/055-pair--security--cookies/sample.yaml":un,"../../../../samples/openapi/oas30/e2e/056-pair--security--body/sample.yaml":fn,"../../../../samples/openapi/oas30/e2e/057-pair--security--responses-1-code-headers/sample.yaml":mn,"../../../../samples/openapi/oas30/e2e/058-pair--security--responses-1-code-body/sample.yaml":gn,"../../../../samples/openapi/oas30/e2e/059-pair--security--responses-2-codes-headers/sample.yaml":vn,"../../../../samples/openapi/oas30/e2e/060-pair--security--responses-2-codes-body/sample.yaml":bn,"../../../../samples/openapi/oas30/e2e/061-pair--operation-extensions--path-parameters/sample.yaml":Sn,"../../../../samples/openapi/oas30/e2e/062-pair--operation-extensions--query-parameters/sample.yaml":wn,"../../../../samples/openapi/oas30/e2e/063-pair--operation-extensions--headers/sample.yaml":En,"../../../../samples/openapi/oas30/e2e/064-pair--operation-extensions--cookies/sample.yaml":On,"../../../../samples/openapi/oas30/e2e/065-pair--operation-extensions--body/sample.yaml":An,"../../../../samples/openapi/oas30/e2e/066-pair--operation-extensions--responses-1-code-headers/sample.yaml":Mn,"../../../../samples/openapi/oas30/e2e/067-pair--operation-extensions--responses-1-code-body/sample.yaml":Pn,"../../../../samples/openapi/oas30/e2e/068-pair--operation-extensions--responses-2-codes-headers/sample.yaml":In,"../../../../samples/openapi/oas30/e2e/069-pair--operation-extensions--responses-2-codes-body/sample.yaml":Rn,"../../../../samples/openapi/oas30/e2e/070-pair--path-parameters--query-parameters/sample.yaml":Bn,"../../../../samples/openapi/oas30/e2e/071-pair--path-parameters--headers/sample.yaml":Hn,"../../../../samples/openapi/oas30/e2e/072-pair--path-parameters--cookies/sample.yaml":Wn,"../../../../samples/openapi/oas30/e2e/073-pair--path-parameters--body/sample.yaml":Kn,"../../../../samples/openapi/oas30/e2e/074-pair--path-parameters--responses-1-code-headers/sample.yaml":Jn,"../../../../samples/openapi/oas30/e2e/075-pair--path-parameters--responses-1-code-body/sample.yaml":Xn,"../../../../samples/openapi/oas30/e2e/076-pair--path-parameters--responses-2-codes-headers/sample.yaml":Qn,"../../../../samples/openapi/oas30/e2e/077-pair--path-parameters--responses-2-codes-body/sample.yaml":er,"../../../../samples/openapi/oas30/e2e/078-pair--query-parameters--headers/sample.yaml":nr,"../../../../samples/openapi/oas30/e2e/079-pair--query-parameters--cookies/sample.yaml":ir,"../../../../samples/openapi/oas30/e2e/080-pair--query-parameters--body/sample.yaml":or,"../../../../samples/openapi/oas30/e2e/081-pair--query-parameters--responses-1-code-headers/sample.yaml":cr,"../../../../samples/openapi/oas30/e2e/082-pair--query-parameters--responses-1-code-body/sample.yaml":ur,"../../../../samples/openapi/oas30/e2e/083-pair--query-parameters--responses-2-codes-headers/sample.yaml":fr,"../../../../samples/openapi/oas30/e2e/084-pair--query-parameters--responses-2-codes-body/sample.yaml":mr,"../../../../samples/openapi/oas30/e2e/085-pair--headers--cookies/sample.yaml":gr,"../../../../samples/openapi/oas30/e2e/086-pair--headers--body/sample.yaml":vr,"../../../../samples/openapi/oas30/e2e/087-pair--headers--responses-1-code-headers/sample.yaml":br,"../../../../samples/openapi/oas30/e2e/088-pair--headers--responses-1-code-body/sample.yaml":Sr,"../../../../samples/openapi/oas30/e2e/089-pair--headers--responses-2-codes-headers/sample.yaml":wr,"../../../../samples/openapi/oas30/e2e/090-pair--headers--responses-2-codes-body/sample.yaml":Er,"../../../../samples/openapi/oas30/e2e/091-pair--cookies--body/sample.yaml":Or,"../../../../samples/openapi/oas30/e2e/092-pair--cookies--responses-1-code-headers/sample.yaml":Ar,"../../../../samples/openapi/oas30/e2e/093-pair--cookies--responses-1-code-body/sample.yaml":Mr,"../../../../samples/openapi/oas30/e2e/094-pair--cookies--responses-2-codes-headers/sample.yaml":Pr,"../../../../samples/openapi/oas30/e2e/095-pair--cookies--responses-2-codes-body/sample.yaml":Ir,"../../../../samples/openapi/oas30/e2e/096-pair--body--responses-1-code-headers/sample.yaml":Rr,"../../../../samples/openapi/oas30/e2e/097-pair--body--responses-1-code-body/sample.yaml":Br,"../../../../samples/openapi/oas30/e2e/098-pair--body--responses-2-codes-headers/sample.yaml":Hr,"../../../../samples/openapi/oas30/e2e/099-pair--body--responses-2-codes-body/sample.yaml":Wr,"../../../../samples/openapi/oas30/e2e/100-pair--responses-1-code-headers--responses-1-code-body/sample.yaml":Kr,"../../../../samples/openapi/oas30/e2e/101-pair--responses-2-codes-headers--responses-2-codes-body/sample.yaml":Jr,"../../../../samples/openapi/oas30/e2e/102-window-3--summary--to--address/sample.yaml":Xr,"../../../../samples/openapi/oas30/e2e/103-window-3--operation-id--to--description/sample.yaml":Qr,"../../../../samples/openapi/oas30/e2e/104-window-3--address--to--security/sample.yaml":ei,"../../../../samples/openapi/oas30/e2e/105-window-3--description--to--operation-extensions/sample.yaml":ni,"../../../../samples/openapi/oas30/e2e/106-window-3--security--to--path-parameters/sample.yaml":ii,"../../../../samples/openapi/oas30/e2e/107-window-3--operation-extensions--to--query-parameters/sample.yaml":oi,"../../../../samples/openapi/oas30/e2e/108-window-3--path-parameters--to--headers/sample.yaml":ci,"../../../../samples/openapi/oas30/e2e/109-window-3--query-parameters--to--cookies/sample.yaml":ui,"../../../../samples/openapi/oas30/e2e/110-window-3--headers--to--body/sample.yaml":fi,"../../../../samples/openapi/oas30/e2e/111-window-3--cookies--to--responses-1-code-headers/sample.yaml":mi,"../../../../samples/openapi/oas30/e2e/112-window-3--body--to--responses-1-code-body/sample.yaml":gi,"../../../../samples/openapi/oas30/e2e/113-window-4--summary--to--description/sample.yaml":vi,"../../../../samples/openapi/oas30/e2e/114-window-4--operation-id--to--security/sample.yaml":bi,"../../../../samples/openapi/oas30/e2e/115-window-4--address--to--operation-extensions/sample.yaml":Si,"../../../../samples/openapi/oas30/e2e/116-window-4--description--to--path-parameters/sample.yaml":wi,"../../../../samples/openapi/oas30/e2e/117-window-4--security--to--query-parameters/sample.yaml":Ei,"../../../../samples/openapi/oas30/e2e/118-window-4--operation-extensions--to--headers/sample.yaml":Oi,"../../../../samples/openapi/oas30/e2e/119-window-4--path-parameters--to--cookies/sample.yaml":Ai,"../../../../samples/openapi/oas30/e2e/120-window-4--query-parameters--to--body/sample.yaml":Mi,"../../../../samples/openapi/oas30/e2e/121-window-4--headers--to--responses-1-code-headers/sample.yaml":Pi,"../../../../samples/openapi/oas30/e2e/122-window-4--cookies--to--responses-1-code-body/sample.yaml":Ii,"../../../../samples/openapi/oas30/e2e/123-window-5--summary--to--security/sample.yaml":Ri,"../../../../samples/openapi/oas30/e2e/124-window-5--operation-id--to--operation-extensions/sample.yaml":Bi,"../../../../samples/openapi/oas30/e2e/125-window-5--address--to--path-parameters/sample.yaml":Hi,"../../../../samples/openapi/oas30/e2e/126-window-5--description--to--query-parameters/sample.yaml":Wi,"../../../../samples/openapi/oas30/e2e/127-window-5--security--to--headers/sample.yaml":Ki,"../../../../samples/openapi/oas30/e2e/128-window-5--operation-extensions--to--cookies/sample.yaml":Ji,"../../../../samples/openapi/oas30/e2e/129-window-5--path-parameters--to--body/sample.yaml":Xi,"../../../../samples/openapi/oas30/e2e/130-window-5--query-parameters--to--responses-1-code-headers/sample.yaml":Qi,"../../../../samples/openapi/oas30/e2e/131-window-5--headers--to--responses-1-code-body/sample.yaml":ea,"../../../../samples/openapi/oas30/e2e/132-window-6--summary--to--operation-extensions/sample.yaml":na,"../../../../samples/openapi/oas30/e2e/133-window-6--operation-id--to--path-parameters/sample.yaml":ia,"../../../../samples/openapi/oas30/e2e/134-window-6--address--to--query-parameters/sample.yaml":oa,"../../../../samples/openapi/oas30/e2e/135-window-6--description--to--headers/sample.yaml":ca,"../../../../samples/openapi/oas30/e2e/136-window-6--security--to--cookies/sample.yaml":ua,"../../../../samples/openapi/oas30/e2e/137-window-6--operation-extensions--to--body/sample.yaml":fa,"../../../../samples/openapi/oas30/e2e/138-window-6--path-parameters--to--responses-1-code-headers/sample.yaml":ma,"../../../../samples/openapi/oas30/e2e/139-window-6--query-parameters--to--responses-1-code-body/sample.yaml":ga,"../../../../samples/openapi/oas30/e2e/140-window-7--summary--to--path-parameters/sample.yaml":va,"../../../../samples/openapi/oas30/e2e/141-window-7--operation-id--to--query-parameters/sample.yaml":ba,"../../../../samples/openapi/oas30/e2e/142-window-7--address--to--headers/sample.yaml":Sa,"../../../../samples/openapi/oas30/e2e/143-window-7--description--to--cookies/sample.yaml":wa,"../../../../samples/openapi/oas30/e2e/144-window-7--security--to--body/sample.yaml":Ea,"../../../../samples/openapi/oas30/e2e/145-window-7--operation-extensions--to--responses-1-code-headers/sample.yaml":Oa,"../../../../samples/openapi/oas30/e2e/146-window-7--path-parameters--to--responses-1-code-body/sample.yaml":Aa,"../../../../samples/openapi/oas30/e2e/147-window-8--summary--to--query-parameters/sample.yaml":Ma,"../../../../samples/openapi/oas30/e2e/148-window-8--operation-id--to--headers/sample.yaml":Pa,"../../../../samples/openapi/oas30/e2e/149-window-8--address--to--cookies/sample.yaml":Ia,"../../../../samples/openapi/oas30/e2e/150-window-8--description--to--body/sample.yaml":Ra,"../../../../samples/openapi/oas30/e2e/151-window-8--security--to--responses-1-code-headers/sample.yaml":Ba,"../../../../samples/openapi/oas30/e2e/152-window-8--operation-extensions--to--responses-1-code-body/sample.yaml":Ha,"../../../../samples/openapi/oas30/e2e/153-window-9--summary--to--headers/sample.yaml":Wa,"../../../../samples/openapi/oas30/e2e/154-window-9--operation-id--to--cookies/sample.yaml":Ka,"../../../../samples/openapi/oas30/e2e/155-window-9--address--to--body/sample.yaml":Ja,"../../../../samples/openapi/oas30/e2e/156-window-9--description--to--responses-1-code-headers/sample.yaml":Xa,"../../../../samples/openapi/oas30/e2e/157-window-9--security--to--responses-1-code-body/sample.yaml":Qa,"../../../../samples/openapi/oas30/e2e/158-window-10--summary--to--cookies/sample.yaml":eo,"../../../../samples/openapi/oas30/e2e/159-window-10--operation-id--to--body/sample.yaml":no,"../../../../samples/openapi/oas30/e2e/160-window-10--address--to--responses-1-code-headers/sample.yaml":io,"../../../../samples/openapi/oas30/e2e/161-window-10--description--to--responses-1-code-body/sample.yaml":oo,"../../../../samples/openapi/oas30/e2e/162-window-11--summary--to--body/sample.yaml":co,"../../../../samples/openapi/oas30/e2e/163-window-11--operation-id--to--responses-1-code-headers/sample.yaml":uo,"../../../../samples/openapi/oas30/e2e/164-window-11--address--to--responses-1-code-body/sample.yaml":po,"../../../../samples/openapi/oas30/e2e/165-window-12--summary--to--responses-1-code-headers/sample.yaml":ho,"../../../../samples/openapi/oas30/e2e/166-window-12--operation-id--to--responses-1-code-body/sample.yaml":_o,"../../../../samples/openapi/oas30/e2e/167-window-13--summary--to--responses-1-code-body/sample.yaml":yo,"../../../../samples/openapi/oas30/e2e/168-all-sections/sample.yaml":xo})),wo={title:`OpenAPI Operation Suite/OAS 3.0/E2E`,component:ce,argTypes:re,args:te,play:ne},t=(e,ee,te,ne)=>({name:e,args:{caseId:e,sampleYaml:ie(Co,e),path:ee,method:te,switchTo:ne}}),To=t(`001-pair--summary--operation-id`,`/orders`,`post`,[]),n=t(`002-pair--summary--address`,`/api/v2/stores/main-store/orders/pending/export-requests`,`post`,[]),r=t(`003-pair--summary--description`,`/orders`,`post`,[]),i=t(`004-pair--summary--security`,`/orders`,`post`,[]),a=t(`005-pair--summary--operation-extensions`,`/orders`,`post`,[]),o=t(`006-pair--summary--path-parameters`,`/orders/{orderId}`,`post`,[]),s=t(`007-pair--summary--query-parameters`,`/orders`,`post`,[]),c=t(`008-pair--summary--headers`,`/orders`,`post`,[]),l=t(`009-pair--summary--cookies`,`/orders`,`post`,[]),u=t(`010-pair--summary--body`,`/orders`,`post`,[]),d=t(`011-pair--summary--responses-1-code-headers`,`/orders`,`post`,[]),f=t(`012-pair--summary--responses-1-code-body`,`/orders`,`post`,[]),p=t(`013-pair--summary--responses-2-codes-headers`,`/orders`,`post`,[]),m=t(`014-pair--summary--responses-2-codes-body`,`/orders`,`post`,[]),h=t(`015-pair--operation-id--address`,`/api/v2/stores/main-store/orders/pending/export-requests`,`post`,[]),g=t(`016-pair--operation-id--description`,`/orders`,`post`,[]),_=t(`017-pair--operation-id--security`,`/orders`,`post`,[]),v=t(`018-pair--operation-id--operation-extensions`,`/orders`,`post`,[]),y=t(`019-pair--operation-id--path-parameters`,`/orders/{orderId}`,`post`,[]),b=t(`020-pair--operation-id--query-parameters`,`/orders`,`post`,[]),x=t(`021-pair--operation-id--headers`,`/orders`,`post`,[]),S=t(`022-pair--operation-id--cookies`,`/orders`,`post`,[]),C=t(`023-pair--operation-id--body`,`/orders`,`post`,[]),w=t(`024-pair--operation-id--responses-1-code-headers`,`/orders`,`post`,[]),T=t(`025-pair--operation-id--responses-1-code-body`,`/orders`,`post`,[]),E=t(`026-pair--operation-id--responses-2-codes-headers`,`/orders`,`post`,[]),D=t(`027-pair--operation-id--responses-2-codes-body`,`/orders`,`post`,[]),O=t(`028-pair--address--description`,`/api/v2/stores/main-store/orders/pending/export-requests`,`post`,[]),k=t(`029-pair--address--security`,`/api/v2/stores/main-store/orders/pending/export-requests`,`post`,[]),A=t(`030-pair--address--operation-extensions`,`/api/v2/stores/main-store/orders/pending/export-requests`,`post`,[]),j=t(`031-pair--address--path-parameters`,`/api/v2/stores/main-store/orders/pending/export-requests/{orderId}`,`post`,[]),M=t(`032-pair--address--query-parameters`,`/api/v2/stores/main-store/orders/pending/export-requests`,`post`,[]),N=t(`033-pair--address--headers`,`/api/v2/stores/main-store/orders/pending/export-requests`,`post`,[]),P=t(`034-pair--address--cookies`,`/api/v2/stores/main-store/orders/pending/export-requests`,`post`,[]),F=t(`035-pair--address--body`,`/api/v2/stores/main-store/orders/pending/export-requests`,`post`,[]),I=t(`036-pair--address--responses-1-code-headers`,`/api/v2/stores/main-store/orders/pending/export-requests`,`post`,[]),L=t(`037-pair--address--responses-1-code-body`,`/api/v2/stores/main-store/orders/pending/export-requests`,`post`,[]),R=t(`038-pair--address--responses-2-codes-headers`,`/api/v2/stores/main-store/orders/pending/export-requests`,`post`,[]),z=t(`039-pair--address--responses-2-codes-body`,`/api/v2/stores/main-store/orders/pending/export-requests`,`post`,[]),B=t(`040-pair--description--security`,`/orders`,`post`,[]),V=t(`041-pair--description--operation-extensions`,`/orders`,`post`,[]),H=t(`042-pair--description--path-parameters`,`/orders/{orderId}`,`post`,[]),U=t(`043-pair--description--query-parameters`,`/orders`,`post`,[]),W=t(`044-pair--description--headers`,`/orders`,`post`,[]),G=t(`045-pair--description--cookies`,`/orders`,`post`,[]),K=t(`046-pair--description--body`,`/orders`,`post`,[]),q=t(`047-pair--description--responses-1-code-headers`,`/orders`,`post`,[]),J=t(`048-pair--description--responses-1-code-body`,`/orders`,`post`,[]),Y=t(`049-pair--description--responses-2-codes-headers`,`/orders`,`post`,[]),X=t(`050-pair--description--responses-2-codes-body`,`/orders`,`post`,[]),Z=t(`051-pair--security--operation-extensions`,`/orders`,`post`,[]),Q=t(`052-pair--security--path-parameters`,`/orders/{orderId}`,`post`,[]),Eo=t(`053-pair--security--query-parameters`,`/orders`,`post`,[]),Do=t(`054-pair--security--headers`,`/orders`,`post`,[]),Oo=t(`055-pair--security--cookies`,`/orders`,`post`,[]),ko=t(`056-pair--security--body`,`/orders`,`post`,[]),Ao=t(`057-pair--security--responses-1-code-headers`,`/orders`,`post`,[]),jo=t(`058-pair--security--responses-1-code-body`,`/orders`,`post`,[]),Mo=t(`059-pair--security--responses-2-codes-headers`,`/orders`,`post`,[]),No=t(`060-pair--security--responses-2-codes-body`,`/orders`,`post`,[]),Po=t(`061-pair--operation-extensions--path-parameters`,`/orders/{orderId}`,`post`,[]),Fo=t(`062-pair--operation-extensions--query-parameters`,`/orders`,`post`,[]),Io=t(`063-pair--operation-extensions--headers`,`/orders`,`post`,[]),Lo=t(`064-pair--operation-extensions--cookies`,`/orders`,`post`,[]),Ro=t(`065-pair--operation-extensions--body`,`/orders`,`post`,[]),zo=t(`066-pair--operation-extensions--responses-1-code-headers`,`/orders`,`post`,[]),Bo=t(`067-pair--operation-extensions--responses-1-code-body`,`/orders`,`post`,[]),Vo=t(`068-pair--operation-extensions--responses-2-codes-headers`,`/orders`,`post`,[]),Ho=t(`069-pair--operation-extensions--responses-2-codes-body`,`/orders`,`post`,[]),Uo=t(`070-pair--path-parameters--query-parameters`,`/orders/{orderId}`,`post`,[]),Wo=t(`071-pair--path-parameters--headers`,`/orders/{orderId}`,`post`,[]),Go=t(`072-pair--path-parameters--cookies`,`/orders/{orderId}`,`post`,[]),Ko=t(`073-pair--path-parameters--body`,`/orders/{orderId}`,`post`,[]),qo=t(`074-pair--path-parameters--responses-1-code-headers`,`/orders/{orderId}`,`post`,[]),Jo=t(`075-pair--path-parameters--responses-1-code-body`,`/orders/{orderId}`,`post`,[]),Yo=t(`076-pair--path-parameters--responses-2-codes-headers`,`/orders/{orderId}`,`post`,[]),Xo=t(`077-pair--path-parameters--responses-2-codes-body`,`/orders/{orderId}`,`post`,[]),Zo=t(`078-pair--query-parameters--headers`,`/orders`,`post`,[]),Qo=t(`079-pair--query-parameters--cookies`,`/orders`,`post`,[]),$o=t(`080-pair--query-parameters--body`,`/orders`,`post`,[]),es=t(`081-pair--query-parameters--responses-1-code-headers`,`/orders`,`post`,[]),ts=t(`082-pair--query-parameters--responses-1-code-body`,`/orders`,`post`,[]),ns=t(`083-pair--query-parameters--responses-2-codes-headers`,`/orders`,`post`,[]),rs=t(`084-pair--query-parameters--responses-2-codes-body`,`/orders`,`post`,[]),is=t(`085-pair--headers--cookies`,`/orders`,`post`,[]),as=t(`086-pair--headers--body`,`/orders`,`post`,[]),os=t(`087-pair--headers--responses-1-code-headers`,`/orders`,`post`,[]),ss=t(`088-pair--headers--responses-1-code-body`,`/orders`,`post`,[]),cs=t(`089-pair--headers--responses-2-codes-headers`,`/orders`,`post`,[]),$=t(`090-pair--headers--responses-2-codes-body`,`/orders`,`post`,[]),ls=t(`091-pair--cookies--body`,`/orders`,`post`,[]),us=t(`092-pair--cookies--responses-1-code-headers`,`/orders`,`post`,[]),ds=t(`093-pair--cookies--responses-1-code-body`,`/orders`,`post`,[]),fs=t(`094-pair--cookies--responses-2-codes-headers`,`/orders`,`post`,[]),ps=t(`095-pair--cookies--responses-2-codes-body`,`/orders`,`post`,[]),ms=t(`096-pair--body--responses-1-code-headers`,`/orders`,`post`,[]),hs=t(`097-pair--body--responses-1-code-body`,`/orders`,`post`,[]),gs=t(`098-pair--body--responses-2-codes-headers`,`/orders`,`post`,[]),_s=t(`099-pair--body--responses-2-codes-body`,`/orders`,`post`,[]),vs=t(`100-pair--responses-1-code-headers--responses-1-code-body`,`/orders`,`post`,[]),ys=t(`101-pair--responses-2-codes-headers--responses-2-codes-body`,`/orders`,`post`,[]),bs=t(`102-window-3--summary--to--address`,`/api/v2/stores/main-store/orders/pending/export-requests`,`post`,[]),xs=t(`103-window-3--operation-id--to--description`,`/api/v2/stores/main-store/orders/pending/export-requests`,`post`,[]),Ss=t(`104-window-3--address--to--security`,`/api/v2/stores/main-store/orders/pending/export-requests`,`post`,[]),Cs=t(`105-window-3--description--to--operation-extensions`,`/orders`,`post`,[]),ws=t(`106-window-3--security--to--path-parameters`,`/orders/{orderId}`,`post`,[]),Ts=t(`107-window-3--operation-extensions--to--query-parameters`,`/orders/{orderId}`,`post`,[]),Es=t(`108-window-3--path-parameters--to--headers`,`/orders/{orderId}`,`post`,[]),Ds=t(`109-window-3--query-parameters--to--cookies`,`/orders`,`post`,[]),Os=t(`110-window-3--headers--to--body`,`/orders`,`post`,[]),ks=t(`111-window-3--cookies--to--responses-1-code-headers`,`/orders`,`post`,[]),As=t(`112-window-3--body--to--responses-1-code-body`,`/orders`,`post`,[]),js=t(`113-window-4--summary--to--description`,`/api/v2/stores/main-store/orders/pending/export-requests`,`post`,[]),Ms=t(`114-window-4--operation-id--to--security`,`/api/v2/stores/main-store/orders/pending/export-requests`,`post`,[]),Ns=t(`115-window-4--address--to--operation-extensions`,`/api/v2/stores/main-store/orders/pending/export-requests`,`post`,[]),Ps=t(`116-window-4--description--to--path-parameters`,`/orders/{orderId}`,`post`,[]),Fs=t(`117-window-4--security--to--query-parameters`,`/orders/{orderId}`,`post`,[]),Is=t(`118-window-4--operation-extensions--to--headers`,`/orders/{orderId}`,`post`,[]),Ls=t(`119-window-4--path-parameters--to--cookies`,`/orders/{orderId}`,`post`,[]),Rs=t(`120-window-4--query-parameters--to--body`,`/orders`,`post`,[]),zs=t(`121-window-4--headers--to--responses-1-code-headers`,`/orders`,`post`,[]),Bs=t(`122-window-4--cookies--to--responses-1-code-body`,`/orders`,`post`,[]),Vs=t(`123-window-5--summary--to--security`,`/api/v2/stores/main-store/orders/pending/export-requests`,`post`,[]),Hs=t(`124-window-5--operation-id--to--operation-extensions`,`/api/v2/stores/main-store/orders/pending/export-requests`,`post`,[]),Us=t(`125-window-5--address--to--path-parameters`,`/api/v2/stores/main-store/orders/pending/export-requests/{orderId}`,`post`,[]),Ws=t(`126-window-5--description--to--query-parameters`,`/orders/{orderId}`,`post`,[]),Gs=t(`127-window-5--security--to--headers`,`/orders/{orderId}`,`post`,[]),Ks=t(`128-window-5--operation-extensions--to--cookies`,`/orders/{orderId}`,`post`,[]),qs=t(`129-window-5--path-parameters--to--body`,`/orders/{orderId}`,`post`,[]),Js=t(`130-window-5--query-parameters--to--responses-1-code-headers`,`/orders`,`post`,[]),Ys=t(`131-window-5--headers--to--responses-1-code-body`,`/orders`,`post`,[]),Xs=t(`132-window-6--summary--to--operation-extensions`,`/api/v2/stores/main-store/orders/pending/export-requests`,`post`,[]),Zs=t(`133-window-6--operation-id--to--path-parameters`,`/api/v2/stores/main-store/orders/pending/export-requests/{orderId}`,`post`,[]),Qs=t(`134-window-6--address--to--query-parameters`,`/api/v2/stores/main-store/orders/pending/export-requests/{orderId}`,`post`,[]),$s=t(`135-window-6--description--to--headers`,`/orders/{orderId}`,`post`,[]),ec=t(`136-window-6--security--to--cookies`,`/orders/{orderId}`,`post`,[]),tc=t(`137-window-6--operation-extensions--to--body`,`/orders/{orderId}`,`post`,[]),nc=t(`138-window-6--path-parameters--to--responses-1-code-headers`,`/orders/{orderId}`,`post`,[]),rc=t(`139-window-6--query-parameters--to--responses-1-code-body`,`/orders`,`post`,[]),ic=t(`140-window-7--summary--to--path-parameters`,`/api/v2/stores/main-store/orders/pending/export-requests/{orderId}`,`post`,[]),ac=t(`141-window-7--operation-id--to--query-parameters`,`/api/v2/stores/main-store/orders/pending/export-requests/{orderId}`,`post`,[]),oc=t(`142-window-7--address--to--headers`,`/api/v2/stores/main-store/orders/pending/export-requests/{orderId}`,`post`,[]),sc=t(`143-window-7--description--to--cookies`,`/orders/{orderId}`,`post`,[]),cc=t(`144-window-7--security--to--body`,`/orders/{orderId}`,`post`,[]),lc=t(`145-window-7--operation-extensions--to--responses-1-code-headers`,`/orders/{orderId}`,`post`,[]),uc=t(`146-window-7--path-parameters--to--responses-1-code-body`,`/orders/{orderId}`,`post`,[]),dc=t(`147-window-8--summary--to--query-parameters`,`/api/v2/stores/main-store/orders/pending/export-requests/{orderId}`,`post`,[]),fc=t(`148-window-8--operation-id--to--headers`,`/api/v2/stores/main-store/orders/pending/export-requests/{orderId}`,`post`,[]),pc=t(`149-window-8--address--to--cookies`,`/api/v2/stores/main-store/orders/pending/export-requests/{orderId}`,`post`,[]),mc=t(`150-window-8--description--to--body`,`/orders/{orderId}`,`post`,[]),hc=t(`151-window-8--security--to--responses-1-code-headers`,`/orders/{orderId}`,`post`,[]),gc=t(`152-window-8--operation-extensions--to--responses-1-code-body`,`/orders/{orderId}`,`post`,[]),_c=t(`153-window-9--summary--to--headers`,`/api/v2/stores/main-store/orders/pending/export-requests/{orderId}`,`post`,[]),vc=t(`154-window-9--operation-id--to--cookies`,`/api/v2/stores/main-store/orders/pending/export-requests/{orderId}`,`post`,[]),yc=t(`155-window-9--address--to--body`,`/api/v2/stores/main-store/orders/pending/export-requests/{orderId}`,`post`,[]),bc=t(`156-window-9--description--to--responses-1-code-headers`,`/orders/{orderId}`,`post`,[]),xc=t(`157-window-9--security--to--responses-1-code-body`,`/orders/{orderId}`,`post`,[]),Sc=t(`158-window-10--summary--to--cookies`,`/api/v2/stores/main-store/orders/pending/export-requests/{orderId}`,`post`,[]),Cc=t(`159-window-10--operation-id--to--body`,`/api/v2/stores/main-store/orders/pending/export-requests/{orderId}`,`post`,[]),wc=t(`160-window-10--address--to--responses-1-code-headers`,`/api/v2/stores/main-store/orders/pending/export-requests/{orderId}`,`post`,[]),Tc=t(`161-window-10--description--to--responses-1-code-body`,`/orders/{orderId}`,`post`,[]),Ec=t(`162-window-11--summary--to--body`,`/api/v2/stores/main-store/orders/pending/export-requests/{orderId}`,`post`,[]),Dc=t(`163-window-11--operation-id--to--responses-1-code-headers`,`/api/v2/stores/main-store/orders/pending/export-requests/{orderId}`,`post`,[]),Oc=t(`164-window-11--address--to--responses-1-code-body`,`/api/v2/stores/main-store/orders/pending/export-requests/{orderId}`,`post`,[]),kc=t(`165-window-12--summary--to--responses-1-code-headers`,`/api/v2/stores/main-store/orders/pending/export-requests/{orderId}`,`post`,[]),Ac=t(`166-window-12--operation-id--to--responses-1-code-body`,`/api/v2/stores/main-store/orders/pending/export-requests/{orderId}`,`post`,[]),jc=t(`167-window-13--summary--to--responses-1-code-body`,`/api/v2/stores/main-store/orders/pending/export-requests/{orderId}`,`post`,[]),Mc=t(`168-all-sections`,`/api/v2/stores/main-store/orders/pending/export-requests/{orderId}`,`post`,[]),To.parameters={...To.parameters,docs:{...To.parameters?.docs,source:{originalSource:`createCaseStory("001-pair--summary--operation-id", "/orders", "post", [])`,...To.parameters?.docs?.source}}},n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`createCaseStory("002-pair--summary--address", "/api/v2/stores/main-store/orders/pending/export-requests", "post", [])`,...n.parameters?.docs?.source}}},r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`createCaseStory("003-pair--summary--description", "/orders", "post", [])`,...r.parameters?.docs?.source}}},i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`createCaseStory("004-pair--summary--security", "/orders", "post", [])`,...i.parameters?.docs?.source}}},a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`createCaseStory("005-pair--summary--operation-extensions", "/orders", "post", [])`,...a.parameters?.docs?.source}}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`createCaseStory("006-pair--summary--path-parameters", "/orders/{orderId}", "post", [])`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`createCaseStory("007-pair--summary--query-parameters", "/orders", "post", [])`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`createCaseStory("008-pair--summary--headers", "/orders", "post", [])`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`createCaseStory("009-pair--summary--cookies", "/orders", "post", [])`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`createCaseStory("010-pair--summary--body", "/orders", "post", [])`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`createCaseStory("011-pair--summary--responses-1-code-headers", "/orders", "post", [])`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`createCaseStory("012-pair--summary--responses-1-code-body", "/orders", "post", [])`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`createCaseStory("013-pair--summary--responses-2-codes-headers", "/orders", "post", [])`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`createCaseStory("014-pair--summary--responses-2-codes-body", "/orders", "post", [])`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`createCaseStory("015-pair--operation-id--address", "/api/v2/stores/main-store/orders/pending/export-requests", "post", [])`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`createCaseStory("016-pair--operation-id--description", "/orders", "post", [])`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`createCaseStory("017-pair--operation-id--security", "/orders", "post", [])`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`createCaseStory("018-pair--operation-id--operation-extensions", "/orders", "post", [])`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`createCaseStory("019-pair--operation-id--path-parameters", "/orders/{orderId}", "post", [])`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`createCaseStory("020-pair--operation-id--query-parameters", "/orders", "post", [])`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`createCaseStory("021-pair--operation-id--headers", "/orders", "post", [])`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`createCaseStory("022-pair--operation-id--cookies", "/orders", "post", [])`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`createCaseStory("023-pair--operation-id--body", "/orders", "post", [])`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`createCaseStory("024-pair--operation-id--responses-1-code-headers", "/orders", "post", [])`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`createCaseStory("025-pair--operation-id--responses-1-code-body", "/orders", "post", [])`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`createCaseStory("026-pair--operation-id--responses-2-codes-headers", "/orders", "post", [])`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`createCaseStory("027-pair--operation-id--responses-2-codes-body", "/orders", "post", [])`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`createCaseStory("028-pair--address--description", "/api/v2/stores/main-store/orders/pending/export-requests", "post", [])`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`createCaseStory("029-pair--address--security", "/api/v2/stores/main-store/orders/pending/export-requests", "post", [])`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`createCaseStory("030-pair--address--operation-extensions", "/api/v2/stores/main-store/orders/pending/export-requests", "post", [])`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`createCaseStory("031-pair--address--path-parameters", "/api/v2/stores/main-store/orders/pending/export-requests/{orderId}", "post", [])`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`createCaseStory("032-pair--address--query-parameters", "/api/v2/stores/main-store/orders/pending/export-requests", "post", [])`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`createCaseStory("033-pair--address--headers", "/api/v2/stores/main-store/orders/pending/export-requests", "post", [])`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`createCaseStory("034-pair--address--cookies", "/api/v2/stores/main-store/orders/pending/export-requests", "post", [])`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`createCaseStory("035-pair--address--body", "/api/v2/stores/main-store/orders/pending/export-requests", "post", [])`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`createCaseStory("036-pair--address--responses-1-code-headers", "/api/v2/stores/main-store/orders/pending/export-requests", "post", [])`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`createCaseStory("037-pair--address--responses-1-code-body", "/api/v2/stores/main-store/orders/pending/export-requests", "post", [])`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`createCaseStory("038-pair--address--responses-2-codes-headers", "/api/v2/stores/main-store/orders/pending/export-requests", "post", [])`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`createCaseStory("039-pair--address--responses-2-codes-body", "/api/v2/stores/main-store/orders/pending/export-requests", "post", [])`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`createCaseStory("040-pair--description--security", "/orders", "post", [])`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`createCaseStory("041-pair--description--operation-extensions", "/orders", "post", [])`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`createCaseStory("042-pair--description--path-parameters", "/orders/{orderId}", "post", [])`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`createCaseStory("043-pair--description--query-parameters", "/orders", "post", [])`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`createCaseStory("044-pair--description--headers", "/orders", "post", [])`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`createCaseStory("045-pair--description--cookies", "/orders", "post", [])`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`createCaseStory("046-pair--description--body", "/orders", "post", [])`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`createCaseStory("047-pair--description--responses-1-code-headers", "/orders", "post", [])`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`createCaseStory("048-pair--description--responses-1-code-body", "/orders", "post", [])`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`createCaseStory("049-pair--description--responses-2-codes-headers", "/orders", "post", [])`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`createCaseStory("050-pair--description--responses-2-codes-body", "/orders", "post", [])`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`createCaseStory("051-pair--security--operation-extensions", "/orders", "post", [])`,...Z.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`createCaseStory("052-pair--security--path-parameters", "/orders/{orderId}", "post", [])`,...Q.parameters?.docs?.source}}},Eo.parameters={...Eo.parameters,docs:{...Eo.parameters?.docs,source:{originalSource:`createCaseStory("053-pair--security--query-parameters", "/orders", "post", [])`,...Eo.parameters?.docs?.source}}},Do.parameters={...Do.parameters,docs:{...Do.parameters?.docs,source:{originalSource:`createCaseStory("054-pair--security--headers", "/orders", "post", [])`,...Do.parameters?.docs?.source}}},Oo.parameters={...Oo.parameters,docs:{...Oo.parameters?.docs,source:{originalSource:`createCaseStory("055-pair--security--cookies", "/orders", "post", [])`,...Oo.parameters?.docs?.source}}},ko.parameters={...ko.parameters,docs:{...ko.parameters?.docs,source:{originalSource:`createCaseStory("056-pair--security--body", "/orders", "post", [])`,...ko.parameters?.docs?.source}}},Ao.parameters={...Ao.parameters,docs:{...Ao.parameters?.docs,source:{originalSource:`createCaseStory("057-pair--security--responses-1-code-headers", "/orders", "post", [])`,...Ao.parameters?.docs?.source}}},jo.parameters={...jo.parameters,docs:{...jo.parameters?.docs,source:{originalSource:`createCaseStory("058-pair--security--responses-1-code-body", "/orders", "post", [])`,...jo.parameters?.docs?.source}}},Mo.parameters={...Mo.parameters,docs:{...Mo.parameters?.docs,source:{originalSource:`createCaseStory("059-pair--security--responses-2-codes-headers", "/orders", "post", [])`,...Mo.parameters?.docs?.source}}},No.parameters={...No.parameters,docs:{...No.parameters?.docs,source:{originalSource:`createCaseStory("060-pair--security--responses-2-codes-body", "/orders", "post", [])`,...No.parameters?.docs?.source}}},Po.parameters={...Po.parameters,docs:{...Po.parameters?.docs,source:{originalSource:`createCaseStory("061-pair--operation-extensions--path-parameters", "/orders/{orderId}", "post", [])`,...Po.parameters?.docs?.source}}},Fo.parameters={...Fo.parameters,docs:{...Fo.parameters?.docs,source:{originalSource:`createCaseStory("062-pair--operation-extensions--query-parameters", "/orders", "post", [])`,...Fo.parameters?.docs?.source}}},Io.parameters={...Io.parameters,docs:{...Io.parameters?.docs,source:{originalSource:`createCaseStory("063-pair--operation-extensions--headers", "/orders", "post", [])`,...Io.parameters?.docs?.source}}},Lo.parameters={...Lo.parameters,docs:{...Lo.parameters?.docs,source:{originalSource:`createCaseStory("064-pair--operation-extensions--cookies", "/orders", "post", [])`,...Lo.parameters?.docs?.source}}},Ro.parameters={...Ro.parameters,docs:{...Ro.parameters?.docs,source:{originalSource:`createCaseStory("065-pair--operation-extensions--body", "/orders", "post", [])`,...Ro.parameters?.docs?.source}}},zo.parameters={...zo.parameters,docs:{...zo.parameters?.docs,source:{originalSource:`createCaseStory("066-pair--operation-extensions--responses-1-code-headers", "/orders", "post", [])`,...zo.parameters?.docs?.source}}},Bo.parameters={...Bo.parameters,docs:{...Bo.parameters?.docs,source:{originalSource:`createCaseStory("067-pair--operation-extensions--responses-1-code-body", "/orders", "post", [])`,...Bo.parameters?.docs?.source}}},Vo.parameters={...Vo.parameters,docs:{...Vo.parameters?.docs,source:{originalSource:`createCaseStory("068-pair--operation-extensions--responses-2-codes-headers", "/orders", "post", [])`,...Vo.parameters?.docs?.source}}},Ho.parameters={...Ho.parameters,docs:{...Ho.parameters?.docs,source:{originalSource:`createCaseStory("069-pair--operation-extensions--responses-2-codes-body", "/orders", "post", [])`,...Ho.parameters?.docs?.source}}},Uo.parameters={...Uo.parameters,docs:{...Uo.parameters?.docs,source:{originalSource:`createCaseStory("070-pair--path-parameters--query-parameters", "/orders/{orderId}", "post", [])`,...Uo.parameters?.docs?.source}}},Wo.parameters={...Wo.parameters,docs:{...Wo.parameters?.docs,source:{originalSource:`createCaseStory("071-pair--path-parameters--headers", "/orders/{orderId}", "post", [])`,...Wo.parameters?.docs?.source}}},Go.parameters={...Go.parameters,docs:{...Go.parameters?.docs,source:{originalSource:`createCaseStory("072-pair--path-parameters--cookies", "/orders/{orderId}", "post", [])`,...Go.parameters?.docs?.source}}},Ko.parameters={...Ko.parameters,docs:{...Ko.parameters?.docs,source:{originalSource:`createCaseStory("073-pair--path-parameters--body", "/orders/{orderId}", "post", [])`,...Ko.parameters?.docs?.source}}},qo.parameters={...qo.parameters,docs:{...qo.parameters?.docs,source:{originalSource:`createCaseStory("074-pair--path-parameters--responses-1-code-headers", "/orders/{orderId}", "post", [])`,...qo.parameters?.docs?.source}}},Jo.parameters={...Jo.parameters,docs:{...Jo.parameters?.docs,source:{originalSource:`createCaseStory("075-pair--path-parameters--responses-1-code-body", "/orders/{orderId}", "post", [])`,...Jo.parameters?.docs?.source}}},Yo.parameters={...Yo.parameters,docs:{...Yo.parameters?.docs,source:{originalSource:`createCaseStory("076-pair--path-parameters--responses-2-codes-headers", "/orders/{orderId}", "post", [])`,...Yo.parameters?.docs?.source}}},Xo.parameters={...Xo.parameters,docs:{...Xo.parameters?.docs,source:{originalSource:`createCaseStory("077-pair--path-parameters--responses-2-codes-body", "/orders/{orderId}", "post", [])`,...Xo.parameters?.docs?.source}}},Zo.parameters={...Zo.parameters,docs:{...Zo.parameters?.docs,source:{originalSource:`createCaseStory("078-pair--query-parameters--headers", "/orders", "post", [])`,...Zo.parameters?.docs?.source}}},Qo.parameters={...Qo.parameters,docs:{...Qo.parameters?.docs,source:{originalSource:`createCaseStory("079-pair--query-parameters--cookies", "/orders", "post", [])`,...Qo.parameters?.docs?.source}}},$o.parameters={...$o.parameters,docs:{...$o.parameters?.docs,source:{originalSource:`createCaseStory("080-pair--query-parameters--body", "/orders", "post", [])`,...$o.parameters?.docs?.source}}},es.parameters={...es.parameters,docs:{...es.parameters?.docs,source:{originalSource:`createCaseStory("081-pair--query-parameters--responses-1-code-headers", "/orders", "post", [])`,...es.parameters?.docs?.source}}},ts.parameters={...ts.parameters,docs:{...ts.parameters?.docs,source:{originalSource:`createCaseStory("082-pair--query-parameters--responses-1-code-body", "/orders", "post", [])`,...ts.parameters?.docs?.source}}},ns.parameters={...ns.parameters,docs:{...ns.parameters?.docs,source:{originalSource:`createCaseStory("083-pair--query-parameters--responses-2-codes-headers", "/orders", "post", [])`,...ns.parameters?.docs?.source}}},rs.parameters={...rs.parameters,docs:{...rs.parameters?.docs,source:{originalSource:`createCaseStory("084-pair--query-parameters--responses-2-codes-body", "/orders", "post", [])`,...rs.parameters?.docs?.source}}},is.parameters={...is.parameters,docs:{...is.parameters?.docs,source:{originalSource:`createCaseStory("085-pair--headers--cookies", "/orders", "post", [])`,...is.parameters?.docs?.source}}},as.parameters={...as.parameters,docs:{...as.parameters?.docs,source:{originalSource:`createCaseStory("086-pair--headers--body", "/orders", "post", [])`,...as.parameters?.docs?.source}}},os.parameters={...os.parameters,docs:{...os.parameters?.docs,source:{originalSource:`createCaseStory("087-pair--headers--responses-1-code-headers", "/orders", "post", [])`,...os.parameters?.docs?.source}}},ss.parameters={...ss.parameters,docs:{...ss.parameters?.docs,source:{originalSource:`createCaseStory("088-pair--headers--responses-1-code-body", "/orders", "post", [])`,...ss.parameters?.docs?.source}}},cs.parameters={...cs.parameters,docs:{...cs.parameters?.docs,source:{originalSource:`createCaseStory("089-pair--headers--responses-2-codes-headers", "/orders", "post", [])`,...cs.parameters?.docs?.source}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`createCaseStory("090-pair--headers--responses-2-codes-body", "/orders", "post", [])`,...$.parameters?.docs?.source}}},ls.parameters={...ls.parameters,docs:{...ls.parameters?.docs,source:{originalSource:`createCaseStory("091-pair--cookies--body", "/orders", "post", [])`,...ls.parameters?.docs?.source}}},us.parameters={...us.parameters,docs:{...us.parameters?.docs,source:{originalSource:`createCaseStory("092-pair--cookies--responses-1-code-headers", "/orders", "post", [])`,...us.parameters?.docs?.source}}},ds.parameters={...ds.parameters,docs:{...ds.parameters?.docs,source:{originalSource:`createCaseStory("093-pair--cookies--responses-1-code-body", "/orders", "post", [])`,...ds.parameters?.docs?.source}}},fs.parameters={...fs.parameters,docs:{...fs.parameters?.docs,source:{originalSource:`createCaseStory("094-pair--cookies--responses-2-codes-headers", "/orders", "post", [])`,...fs.parameters?.docs?.source}}},ps.parameters={...ps.parameters,docs:{...ps.parameters?.docs,source:{originalSource:`createCaseStory("095-pair--cookies--responses-2-codes-body", "/orders", "post", [])`,...ps.parameters?.docs?.source}}},ms.parameters={...ms.parameters,docs:{...ms.parameters?.docs,source:{originalSource:`createCaseStory("096-pair--body--responses-1-code-headers", "/orders", "post", [])`,...ms.parameters?.docs?.source}}},hs.parameters={...hs.parameters,docs:{...hs.parameters?.docs,source:{originalSource:`createCaseStory("097-pair--body--responses-1-code-body", "/orders", "post", [])`,...hs.parameters?.docs?.source}}},gs.parameters={...gs.parameters,docs:{...gs.parameters?.docs,source:{originalSource:`createCaseStory("098-pair--body--responses-2-codes-headers", "/orders", "post", [])`,...gs.parameters?.docs?.source}}},_s.parameters={..._s.parameters,docs:{..._s.parameters?.docs,source:{originalSource:`createCaseStory("099-pair--body--responses-2-codes-body", "/orders", "post", [])`,..._s.parameters?.docs?.source}}},vs.parameters={...vs.parameters,docs:{...vs.parameters?.docs,source:{originalSource:`createCaseStory("100-pair--responses-1-code-headers--responses-1-code-body", "/orders", "post", [])`,...vs.parameters?.docs?.source}}},ys.parameters={...ys.parameters,docs:{...ys.parameters?.docs,source:{originalSource:`createCaseStory("101-pair--responses-2-codes-headers--responses-2-codes-body", "/orders", "post", [])`,...ys.parameters?.docs?.source}}},bs.parameters={...bs.parameters,docs:{...bs.parameters?.docs,source:{originalSource:`createCaseStory("102-window-3--summary--to--address", "/api/v2/stores/main-store/orders/pending/export-requests", "post", [])`,...bs.parameters?.docs?.source}}},xs.parameters={...xs.parameters,docs:{...xs.parameters?.docs,source:{originalSource:`createCaseStory("103-window-3--operation-id--to--description", "/api/v2/stores/main-store/orders/pending/export-requests", "post", [])`,...xs.parameters?.docs?.source}}},Ss.parameters={...Ss.parameters,docs:{...Ss.parameters?.docs,source:{originalSource:`createCaseStory("104-window-3--address--to--security", "/api/v2/stores/main-store/orders/pending/export-requests", "post", [])`,...Ss.parameters?.docs?.source}}},Cs.parameters={...Cs.parameters,docs:{...Cs.parameters?.docs,source:{originalSource:`createCaseStory("105-window-3--description--to--operation-extensions", "/orders", "post", [])`,...Cs.parameters?.docs?.source}}},ws.parameters={...ws.parameters,docs:{...ws.parameters?.docs,source:{originalSource:`createCaseStory("106-window-3--security--to--path-parameters", "/orders/{orderId}", "post", [])`,...ws.parameters?.docs?.source}}},Ts.parameters={...Ts.parameters,docs:{...Ts.parameters?.docs,source:{originalSource:`createCaseStory("107-window-3--operation-extensions--to--query-parameters", "/orders/{orderId}", "post", [])`,...Ts.parameters?.docs?.source}}},Es.parameters={...Es.parameters,docs:{...Es.parameters?.docs,source:{originalSource:`createCaseStory("108-window-3--path-parameters--to--headers", "/orders/{orderId}", "post", [])`,...Es.parameters?.docs?.source}}},Ds.parameters={...Ds.parameters,docs:{...Ds.parameters?.docs,source:{originalSource:`createCaseStory("109-window-3--query-parameters--to--cookies", "/orders", "post", [])`,...Ds.parameters?.docs?.source}}},Os.parameters={...Os.parameters,docs:{...Os.parameters?.docs,source:{originalSource:`createCaseStory("110-window-3--headers--to--body", "/orders", "post", [])`,...Os.parameters?.docs?.source}}},ks.parameters={...ks.parameters,docs:{...ks.parameters?.docs,source:{originalSource:`createCaseStory("111-window-3--cookies--to--responses-1-code-headers", "/orders", "post", [])`,...ks.parameters?.docs?.source}}},As.parameters={...As.parameters,docs:{...As.parameters?.docs,source:{originalSource:`createCaseStory("112-window-3--body--to--responses-1-code-body", "/orders", "post", [])`,...As.parameters?.docs?.source}}},js.parameters={...js.parameters,docs:{...js.parameters?.docs,source:{originalSource:`createCaseStory("113-window-4--summary--to--description", "/api/v2/stores/main-store/orders/pending/export-requests", "post", [])`,...js.parameters?.docs?.source}}},Ms.parameters={...Ms.parameters,docs:{...Ms.parameters?.docs,source:{originalSource:`createCaseStory("114-window-4--operation-id--to--security", "/api/v2/stores/main-store/orders/pending/export-requests", "post", [])`,...Ms.parameters?.docs?.source}}},Ns.parameters={...Ns.parameters,docs:{...Ns.parameters?.docs,source:{originalSource:`createCaseStory("115-window-4--address--to--operation-extensions", "/api/v2/stores/main-store/orders/pending/export-requests", "post", [])`,...Ns.parameters?.docs?.source}}},Ps.parameters={...Ps.parameters,docs:{...Ps.parameters?.docs,source:{originalSource:`createCaseStory("116-window-4--description--to--path-parameters", "/orders/{orderId}", "post", [])`,...Ps.parameters?.docs?.source}}},Fs.parameters={...Fs.parameters,docs:{...Fs.parameters?.docs,source:{originalSource:`createCaseStory("117-window-4--security--to--query-parameters", "/orders/{orderId}", "post", [])`,...Fs.parameters?.docs?.source}}},Is.parameters={...Is.parameters,docs:{...Is.parameters?.docs,source:{originalSource:`createCaseStory("118-window-4--operation-extensions--to--headers", "/orders/{orderId}", "post", [])`,...Is.parameters?.docs?.source}}},Ls.parameters={...Ls.parameters,docs:{...Ls.parameters?.docs,source:{originalSource:`createCaseStory("119-window-4--path-parameters--to--cookies", "/orders/{orderId}", "post", [])`,...Ls.parameters?.docs?.source}}},Rs.parameters={...Rs.parameters,docs:{...Rs.parameters?.docs,source:{originalSource:`createCaseStory("120-window-4--query-parameters--to--body", "/orders", "post", [])`,...Rs.parameters?.docs?.source}}},zs.parameters={...zs.parameters,docs:{...zs.parameters?.docs,source:{originalSource:`createCaseStory("121-window-4--headers--to--responses-1-code-headers", "/orders", "post", [])`,...zs.parameters?.docs?.source}}},Bs.parameters={...Bs.parameters,docs:{...Bs.parameters?.docs,source:{originalSource:`createCaseStory("122-window-4--cookies--to--responses-1-code-body", "/orders", "post", [])`,...Bs.parameters?.docs?.source}}},Vs.parameters={...Vs.parameters,docs:{...Vs.parameters?.docs,source:{originalSource:`createCaseStory("123-window-5--summary--to--security", "/api/v2/stores/main-store/orders/pending/export-requests", "post", [])`,...Vs.parameters?.docs?.source}}},Hs.parameters={...Hs.parameters,docs:{...Hs.parameters?.docs,source:{originalSource:`createCaseStory("124-window-5--operation-id--to--operation-extensions", "/api/v2/stores/main-store/orders/pending/export-requests", "post", [])`,...Hs.parameters?.docs?.source}}},Us.parameters={...Us.parameters,docs:{...Us.parameters?.docs,source:{originalSource:`createCaseStory("125-window-5--address--to--path-parameters", "/api/v2/stores/main-store/orders/pending/export-requests/{orderId}", "post", [])`,...Us.parameters?.docs?.source}}},Ws.parameters={...Ws.parameters,docs:{...Ws.parameters?.docs,source:{originalSource:`createCaseStory("126-window-5--description--to--query-parameters", "/orders/{orderId}", "post", [])`,...Ws.parameters?.docs?.source}}},Gs.parameters={...Gs.parameters,docs:{...Gs.parameters?.docs,source:{originalSource:`createCaseStory("127-window-5--security--to--headers", "/orders/{orderId}", "post", [])`,...Gs.parameters?.docs?.source}}},Ks.parameters={...Ks.parameters,docs:{...Ks.parameters?.docs,source:{originalSource:`createCaseStory("128-window-5--operation-extensions--to--cookies", "/orders/{orderId}", "post", [])`,...Ks.parameters?.docs?.source}}},qs.parameters={...qs.parameters,docs:{...qs.parameters?.docs,source:{originalSource:`createCaseStory("129-window-5--path-parameters--to--body", "/orders/{orderId}", "post", [])`,...qs.parameters?.docs?.source}}},Js.parameters={...Js.parameters,docs:{...Js.parameters?.docs,source:{originalSource:`createCaseStory("130-window-5--query-parameters--to--responses-1-code-headers", "/orders", "post", [])`,...Js.parameters?.docs?.source}}},Ys.parameters={...Ys.parameters,docs:{...Ys.parameters?.docs,source:{originalSource:`createCaseStory("131-window-5--headers--to--responses-1-code-body", "/orders", "post", [])`,...Ys.parameters?.docs?.source}}},Xs.parameters={...Xs.parameters,docs:{...Xs.parameters?.docs,source:{originalSource:`createCaseStory("132-window-6--summary--to--operation-extensions", "/api/v2/stores/main-store/orders/pending/export-requests", "post", [])`,...Xs.parameters?.docs?.source}}},Zs.parameters={...Zs.parameters,docs:{...Zs.parameters?.docs,source:{originalSource:`createCaseStory("133-window-6--operation-id--to--path-parameters", "/api/v2/stores/main-store/orders/pending/export-requests/{orderId}", "post", [])`,...Zs.parameters?.docs?.source}}},Qs.parameters={...Qs.parameters,docs:{...Qs.parameters?.docs,source:{originalSource:`createCaseStory("134-window-6--address--to--query-parameters", "/api/v2/stores/main-store/orders/pending/export-requests/{orderId}", "post", [])`,...Qs.parameters?.docs?.source}}},$s.parameters={...$s.parameters,docs:{...$s.parameters?.docs,source:{originalSource:`createCaseStory("135-window-6--description--to--headers", "/orders/{orderId}", "post", [])`,...$s.parameters?.docs?.source}}},ec.parameters={...ec.parameters,docs:{...ec.parameters?.docs,source:{originalSource:`createCaseStory("136-window-6--security--to--cookies", "/orders/{orderId}", "post", [])`,...ec.parameters?.docs?.source}}},tc.parameters={...tc.parameters,docs:{...tc.parameters?.docs,source:{originalSource:`createCaseStory("137-window-6--operation-extensions--to--body", "/orders/{orderId}", "post", [])`,...tc.parameters?.docs?.source}}},nc.parameters={...nc.parameters,docs:{...nc.parameters?.docs,source:{originalSource:`createCaseStory("138-window-6--path-parameters--to--responses-1-code-headers", "/orders/{orderId}", "post", [])`,...nc.parameters?.docs?.source}}},rc.parameters={...rc.parameters,docs:{...rc.parameters?.docs,source:{originalSource:`createCaseStory("139-window-6--query-parameters--to--responses-1-code-body", "/orders", "post", [])`,...rc.parameters?.docs?.source}}},ic.parameters={...ic.parameters,docs:{...ic.parameters?.docs,source:{originalSource:`createCaseStory("140-window-7--summary--to--path-parameters", "/api/v2/stores/main-store/orders/pending/export-requests/{orderId}", "post", [])`,...ic.parameters?.docs?.source}}},ac.parameters={...ac.parameters,docs:{...ac.parameters?.docs,source:{originalSource:`createCaseStory("141-window-7--operation-id--to--query-parameters", "/api/v2/stores/main-store/orders/pending/export-requests/{orderId}", "post", [])`,...ac.parameters?.docs?.source}}},oc.parameters={...oc.parameters,docs:{...oc.parameters?.docs,source:{originalSource:`createCaseStory("142-window-7--address--to--headers", "/api/v2/stores/main-store/orders/pending/export-requests/{orderId}", "post", [])`,...oc.parameters?.docs?.source}}},sc.parameters={...sc.parameters,docs:{...sc.parameters?.docs,source:{originalSource:`createCaseStory("143-window-7--description--to--cookies", "/orders/{orderId}", "post", [])`,...sc.parameters?.docs?.source}}},cc.parameters={...cc.parameters,docs:{...cc.parameters?.docs,source:{originalSource:`createCaseStory("144-window-7--security--to--body", "/orders/{orderId}", "post", [])`,...cc.parameters?.docs?.source}}},lc.parameters={...lc.parameters,docs:{...lc.parameters?.docs,source:{originalSource:`createCaseStory("145-window-7--operation-extensions--to--responses-1-code-headers", "/orders/{orderId}", "post", [])`,...lc.parameters?.docs?.source}}},uc.parameters={...uc.parameters,docs:{...uc.parameters?.docs,source:{originalSource:`createCaseStory("146-window-7--path-parameters--to--responses-1-code-body", "/orders/{orderId}", "post", [])`,...uc.parameters?.docs?.source}}},dc.parameters={...dc.parameters,docs:{...dc.parameters?.docs,source:{originalSource:`createCaseStory("147-window-8--summary--to--query-parameters", "/api/v2/stores/main-store/orders/pending/export-requests/{orderId}", "post", [])`,...dc.parameters?.docs?.source}}},fc.parameters={...fc.parameters,docs:{...fc.parameters?.docs,source:{originalSource:`createCaseStory("148-window-8--operation-id--to--headers", "/api/v2/stores/main-store/orders/pending/export-requests/{orderId}", "post", [])`,...fc.parameters?.docs?.source}}},pc.parameters={...pc.parameters,docs:{...pc.parameters?.docs,source:{originalSource:`createCaseStory("149-window-8--address--to--cookies", "/api/v2/stores/main-store/orders/pending/export-requests/{orderId}", "post", [])`,...pc.parameters?.docs?.source}}},mc.parameters={...mc.parameters,docs:{...mc.parameters?.docs,source:{originalSource:`createCaseStory("150-window-8--description--to--body", "/orders/{orderId}", "post", [])`,...mc.parameters?.docs?.source}}},hc.parameters={...hc.parameters,docs:{...hc.parameters?.docs,source:{originalSource:`createCaseStory("151-window-8--security--to--responses-1-code-headers", "/orders/{orderId}", "post", [])`,...hc.parameters?.docs?.source}}},gc.parameters={...gc.parameters,docs:{...gc.parameters?.docs,source:{originalSource:`createCaseStory("152-window-8--operation-extensions--to--responses-1-code-body", "/orders/{orderId}", "post", [])`,...gc.parameters?.docs?.source}}},_c.parameters={..._c.parameters,docs:{..._c.parameters?.docs,source:{originalSource:`createCaseStory("153-window-9--summary--to--headers", "/api/v2/stores/main-store/orders/pending/export-requests/{orderId}", "post", [])`,..._c.parameters?.docs?.source}}},vc.parameters={...vc.parameters,docs:{...vc.parameters?.docs,source:{originalSource:`createCaseStory("154-window-9--operation-id--to--cookies", "/api/v2/stores/main-store/orders/pending/export-requests/{orderId}", "post", [])`,...vc.parameters?.docs?.source}}},yc.parameters={...yc.parameters,docs:{...yc.parameters?.docs,source:{originalSource:`createCaseStory("155-window-9--address--to--body", "/api/v2/stores/main-store/orders/pending/export-requests/{orderId}", "post", [])`,...yc.parameters?.docs?.source}}},bc.parameters={...bc.parameters,docs:{...bc.parameters?.docs,source:{originalSource:`createCaseStory("156-window-9--description--to--responses-1-code-headers", "/orders/{orderId}", "post", [])`,...bc.parameters?.docs?.source}}},xc.parameters={...xc.parameters,docs:{...xc.parameters?.docs,source:{originalSource:`createCaseStory("157-window-9--security--to--responses-1-code-body", "/orders/{orderId}", "post", [])`,...xc.parameters?.docs?.source}}},Sc.parameters={...Sc.parameters,docs:{...Sc.parameters?.docs,source:{originalSource:`createCaseStory("158-window-10--summary--to--cookies", "/api/v2/stores/main-store/orders/pending/export-requests/{orderId}", "post", [])`,...Sc.parameters?.docs?.source}}},Cc.parameters={...Cc.parameters,docs:{...Cc.parameters?.docs,source:{originalSource:`createCaseStory("159-window-10--operation-id--to--body", "/api/v2/stores/main-store/orders/pending/export-requests/{orderId}", "post", [])`,...Cc.parameters?.docs?.source}}},wc.parameters={...wc.parameters,docs:{...wc.parameters?.docs,source:{originalSource:`createCaseStory("160-window-10--address--to--responses-1-code-headers", "/api/v2/stores/main-store/orders/pending/export-requests/{orderId}", "post", [])`,...wc.parameters?.docs?.source}}},Tc.parameters={...Tc.parameters,docs:{...Tc.parameters?.docs,source:{originalSource:`createCaseStory("161-window-10--description--to--responses-1-code-body", "/orders/{orderId}", "post", [])`,...Tc.parameters?.docs?.source}}},Ec.parameters={...Ec.parameters,docs:{...Ec.parameters?.docs,source:{originalSource:`createCaseStory("162-window-11--summary--to--body", "/api/v2/stores/main-store/orders/pending/export-requests/{orderId}", "post", [])`,...Ec.parameters?.docs?.source}}},Dc.parameters={...Dc.parameters,docs:{...Dc.parameters?.docs,source:{originalSource:`createCaseStory("163-window-11--operation-id--to--responses-1-code-headers", "/api/v2/stores/main-store/orders/pending/export-requests/{orderId}", "post", [])`,...Dc.parameters?.docs?.source}}},Oc.parameters={...Oc.parameters,docs:{...Oc.parameters?.docs,source:{originalSource:`createCaseStory("164-window-11--address--to--responses-1-code-body", "/api/v2/stores/main-store/orders/pending/export-requests/{orderId}", "post", [])`,...Oc.parameters?.docs?.source}}},kc.parameters={...kc.parameters,docs:{...kc.parameters?.docs,source:{originalSource:`createCaseStory("165-window-12--summary--to--responses-1-code-headers", "/api/v2/stores/main-store/orders/pending/export-requests/{orderId}", "post", [])`,...kc.parameters?.docs?.source}}},Ac.parameters={...Ac.parameters,docs:{...Ac.parameters?.docs,source:{originalSource:`createCaseStory("166-window-12--operation-id--to--responses-1-code-body", "/api/v2/stores/main-store/orders/pending/export-requests/{orderId}", "post", [])`,...Ac.parameters?.docs?.source}}},jc.parameters={...jc.parameters,docs:{...jc.parameters?.docs,source:{originalSource:`createCaseStory("167-window-13--summary--to--responses-1-code-body", "/api/v2/stores/main-store/orders/pending/export-requests/{orderId}", "post", [])`,...jc.parameters?.docs?.source}}},Mc.parameters={...Mc.parameters,docs:{...Mc.parameters?.docs,source:{originalSource:`createCaseStory("168-all-sections", "/api/v2/stores/main-store/orders/pending/export-requests/{orderId}", "post", [])`,...Mc.parameters?.docs?.source}}},Nc=`Case_001_pair__summary__operation_id.Case_002_pair__summary__address.Case_003_pair__summary__description.Case_004_pair__summary__security.Case_005_pair__summary__operation_extensions.Case_006_pair__summary__path_parameters.Case_007_pair__summary__query_parameters.Case_008_pair__summary__headers.Case_009_pair__summary__cookies.Case_010_pair__summary__body.Case_011_pair__summary__responses_1_code_headers.Case_012_pair__summary__responses_1_code_body.Case_013_pair__summary__responses_2_codes_headers.Case_014_pair__summary__responses_2_codes_body.Case_015_pair__operation_id__address.Case_016_pair__operation_id__description.Case_017_pair__operation_id__security.Case_018_pair__operation_id__operation_extensions.Case_019_pair__operation_id__path_parameters.Case_020_pair__operation_id__query_parameters.Case_021_pair__operation_id__headers.Case_022_pair__operation_id__cookies.Case_023_pair__operation_id__body.Case_024_pair__operation_id__responses_1_code_headers.Case_025_pair__operation_id__responses_1_code_body.Case_026_pair__operation_id__responses_2_codes_headers.Case_027_pair__operation_id__responses_2_codes_body.Case_028_pair__address__description.Case_029_pair__address__security.Case_030_pair__address__operation_extensions.Case_031_pair__address__path_parameters.Case_032_pair__address__query_parameters.Case_033_pair__address__headers.Case_034_pair__address__cookies.Case_035_pair__address__body.Case_036_pair__address__responses_1_code_headers.Case_037_pair__address__responses_1_code_body.Case_038_pair__address__responses_2_codes_headers.Case_039_pair__address__responses_2_codes_body.Case_040_pair__description__security.Case_041_pair__description__operation_extensions.Case_042_pair__description__path_parameters.Case_043_pair__description__query_parameters.Case_044_pair__description__headers.Case_045_pair__description__cookies.Case_046_pair__description__body.Case_047_pair__description__responses_1_code_headers.Case_048_pair__description__responses_1_code_body.Case_049_pair__description__responses_2_codes_headers.Case_050_pair__description__responses_2_codes_body.Case_051_pair__security__operation_extensions.Case_052_pair__security__path_parameters.Case_053_pair__security__query_parameters.Case_054_pair__security__headers.Case_055_pair__security__cookies.Case_056_pair__security__body.Case_057_pair__security__responses_1_code_headers.Case_058_pair__security__responses_1_code_body.Case_059_pair__security__responses_2_codes_headers.Case_060_pair__security__responses_2_codes_body.Case_061_pair__operation_extensions__path_parameters.Case_062_pair__operation_extensions__query_parameters.Case_063_pair__operation_extensions__headers.Case_064_pair__operation_extensions__cookies.Case_065_pair__operation_extensions__body.Case_066_pair__operation_extensions__responses_1_code_headers.Case_067_pair__operation_extensions__responses_1_code_body.Case_068_pair__operation_extensions__responses_2_codes_headers.Case_069_pair__operation_extensions__responses_2_codes_body.Case_070_pair__path_parameters__query_parameters.Case_071_pair__path_parameters__headers.Case_072_pair__path_parameters__cookies.Case_073_pair__path_parameters__body.Case_074_pair__path_parameters__responses_1_code_headers.Case_075_pair__path_parameters__responses_1_code_body.Case_076_pair__path_parameters__responses_2_codes_headers.Case_077_pair__path_parameters__responses_2_codes_body.Case_078_pair__query_parameters__headers.Case_079_pair__query_parameters__cookies.Case_080_pair__query_parameters__body.Case_081_pair__query_parameters__responses_1_code_headers.Case_082_pair__query_parameters__responses_1_code_body.Case_083_pair__query_parameters__responses_2_codes_headers.Case_084_pair__query_parameters__responses_2_codes_body.Case_085_pair__headers__cookies.Case_086_pair__headers__body.Case_087_pair__headers__responses_1_code_headers.Case_088_pair__headers__responses_1_code_body.Case_089_pair__headers__responses_2_codes_headers.Case_090_pair__headers__responses_2_codes_body.Case_091_pair__cookies__body.Case_092_pair__cookies__responses_1_code_headers.Case_093_pair__cookies__responses_1_code_body.Case_094_pair__cookies__responses_2_codes_headers.Case_095_pair__cookies__responses_2_codes_body.Case_096_pair__body__responses_1_code_headers.Case_097_pair__body__responses_1_code_body.Case_098_pair__body__responses_2_codes_headers.Case_099_pair__body__responses_2_codes_body.Case_100_pair__responses_1_code_headers__responses_1_code_body.Case_101_pair__responses_2_codes_headers__responses_2_codes_body.Case_102_window_3__summary__to__address.Case_103_window_3__operation_id__to__description.Case_104_window_3__address__to__security.Case_105_window_3__description__to__operation_extensions.Case_106_window_3__security__to__path_parameters.Case_107_window_3__operation_extensions__to__query_parameters.Case_108_window_3__path_parameters__to__headers.Case_109_window_3__query_parameters__to__cookies.Case_110_window_3__headers__to__body.Case_111_window_3__cookies__to__responses_1_code_headers.Case_112_window_3__body__to__responses_1_code_body.Case_113_window_4__summary__to__description.Case_114_window_4__operation_id__to__security.Case_115_window_4__address__to__operation_extensions.Case_116_window_4__description__to__path_parameters.Case_117_window_4__security__to__query_parameters.Case_118_window_4__operation_extensions__to__headers.Case_119_window_4__path_parameters__to__cookies.Case_120_window_4__query_parameters__to__body.Case_121_window_4__headers__to__responses_1_code_headers.Case_122_window_4__cookies__to__responses_1_code_body.Case_123_window_5__summary__to__security.Case_124_window_5__operation_id__to__operation_extensions.Case_125_window_5__address__to__path_parameters.Case_126_window_5__description__to__query_parameters.Case_127_window_5__security__to__headers.Case_128_window_5__operation_extensions__to__cookies.Case_129_window_5__path_parameters__to__body.Case_130_window_5__query_parameters__to__responses_1_code_headers.Case_131_window_5__headers__to__responses_1_code_body.Case_132_window_6__summary__to__operation_extensions.Case_133_window_6__operation_id__to__path_parameters.Case_134_window_6__address__to__query_parameters.Case_135_window_6__description__to__headers.Case_136_window_6__security__to__cookies.Case_137_window_6__operation_extensions__to__body.Case_138_window_6__path_parameters__to__responses_1_code_headers.Case_139_window_6__query_parameters__to__responses_1_code_body.Case_140_window_7__summary__to__path_parameters.Case_141_window_7__operation_id__to__query_parameters.Case_142_window_7__address__to__headers.Case_143_window_7__description__to__cookies.Case_144_window_7__security__to__body.Case_145_window_7__operation_extensions__to__responses_1_code_headers.Case_146_window_7__path_parameters__to__responses_1_code_body.Case_147_window_8__summary__to__query_parameters.Case_148_window_8__operation_id__to__headers.Case_149_window_8__address__to__cookies.Case_150_window_8__description__to__body.Case_151_window_8__security__to__responses_1_code_headers.Case_152_window_8__operation_extensions__to__responses_1_code_body.Case_153_window_9__summary__to__headers.Case_154_window_9__operation_id__to__cookies.Case_155_window_9__address__to__body.Case_156_window_9__description__to__responses_1_code_headers.Case_157_window_9__security__to__responses_1_code_body.Case_158_window_10__summary__to__cookies.Case_159_window_10__operation_id__to__body.Case_160_window_10__address__to__responses_1_code_headers.Case_161_window_10__description__to__responses_1_code_body.Case_162_window_11__summary__to__body.Case_163_window_11__operation_id__to__responses_1_code_headers.Case_164_window_11__address__to__responses_1_code_body.Case_165_window_12__summary__to__responses_1_code_headers.Case_166_window_12__operation_id__to__responses_1_code_body.Case_167_window_13__summary__to__responses_1_code_body.Case_168_all_sections`.split(`.`)})))()}Pc();export{To as Case_001_pair__summary__operation_id,n as Case_002_pair__summary__address,r as Case_003_pair__summary__description,i as Case_004_pair__summary__security,a as Case_005_pair__summary__operation_extensions,o as Case_006_pair__summary__path_parameters,s as Case_007_pair__summary__query_parameters,c as Case_008_pair__summary__headers,l as Case_009_pair__summary__cookies,u as Case_010_pair__summary__body,d as Case_011_pair__summary__responses_1_code_headers,f as Case_012_pair__summary__responses_1_code_body,p as Case_013_pair__summary__responses_2_codes_headers,m as Case_014_pair__summary__responses_2_codes_body,h as Case_015_pair__operation_id__address,g as Case_016_pair__operation_id__description,_ as Case_017_pair__operation_id__security,v as Case_018_pair__operation_id__operation_extensions,y as Case_019_pair__operation_id__path_parameters,b as Case_020_pair__operation_id__query_parameters,x as Case_021_pair__operation_id__headers,S as Case_022_pair__operation_id__cookies,C as Case_023_pair__operation_id__body,w as Case_024_pair__operation_id__responses_1_code_headers,T as Case_025_pair__operation_id__responses_1_code_body,E as Case_026_pair__operation_id__responses_2_codes_headers,D as Case_027_pair__operation_id__responses_2_codes_body,O as Case_028_pair__address__description,k as Case_029_pair__address__security,A as Case_030_pair__address__operation_extensions,j as Case_031_pair__address__path_parameters,M as Case_032_pair__address__query_parameters,N as Case_033_pair__address__headers,P as Case_034_pair__address__cookies,F as Case_035_pair__address__body,I as Case_036_pair__address__responses_1_code_headers,L as Case_037_pair__address__responses_1_code_body,R as Case_038_pair__address__responses_2_codes_headers,z as Case_039_pair__address__responses_2_codes_body,B as Case_040_pair__description__security,V as Case_041_pair__description__operation_extensions,H as Case_042_pair__description__path_parameters,U as Case_043_pair__description__query_parameters,W as Case_044_pair__description__headers,G as Case_045_pair__description__cookies,K as Case_046_pair__description__body,q as Case_047_pair__description__responses_1_code_headers,J as Case_048_pair__description__responses_1_code_body,Y as Case_049_pair__description__responses_2_codes_headers,X as Case_050_pair__description__responses_2_codes_body,Z as Case_051_pair__security__operation_extensions,Q as Case_052_pair__security__path_parameters,Eo as Case_053_pair__security__query_parameters,Do as Case_054_pair__security__headers,Oo as Case_055_pair__security__cookies,ko as Case_056_pair__security__body,Ao as Case_057_pair__security__responses_1_code_headers,jo as Case_058_pair__security__responses_1_code_body,Mo as Case_059_pair__security__responses_2_codes_headers,No as Case_060_pair__security__responses_2_codes_body,Po as Case_061_pair__operation_extensions__path_parameters,Fo as Case_062_pair__operation_extensions__query_parameters,Io as Case_063_pair__operation_extensions__headers,Lo as Case_064_pair__operation_extensions__cookies,Ro as Case_065_pair__operation_extensions__body,zo as Case_066_pair__operation_extensions__responses_1_code_headers,Bo as Case_067_pair__operation_extensions__responses_1_code_body,Vo as Case_068_pair__operation_extensions__responses_2_codes_headers,Ho as Case_069_pair__operation_extensions__responses_2_codes_body,Uo as Case_070_pair__path_parameters__query_parameters,Wo as Case_071_pair__path_parameters__headers,Go as Case_072_pair__path_parameters__cookies,Ko as Case_073_pair__path_parameters__body,qo as Case_074_pair__path_parameters__responses_1_code_headers,Jo as Case_075_pair__path_parameters__responses_1_code_body,Yo as Case_076_pair__path_parameters__responses_2_codes_headers,Xo as Case_077_pair__path_parameters__responses_2_codes_body,Zo as Case_078_pair__query_parameters__headers,Qo as Case_079_pair__query_parameters__cookies,$o as Case_080_pair__query_parameters__body,es as Case_081_pair__query_parameters__responses_1_code_headers,ts as Case_082_pair__query_parameters__responses_1_code_body,ns as Case_083_pair__query_parameters__responses_2_codes_headers,rs as Case_084_pair__query_parameters__responses_2_codes_body,is as Case_085_pair__headers__cookies,as as Case_086_pair__headers__body,os as Case_087_pair__headers__responses_1_code_headers,ss as Case_088_pair__headers__responses_1_code_body,cs as Case_089_pair__headers__responses_2_codes_headers,$ as Case_090_pair__headers__responses_2_codes_body,ls as Case_091_pair__cookies__body,us as Case_092_pair__cookies__responses_1_code_headers,ds as Case_093_pair__cookies__responses_1_code_body,fs as Case_094_pair__cookies__responses_2_codes_headers,ps as Case_095_pair__cookies__responses_2_codes_body,ms as Case_096_pair__body__responses_1_code_headers,hs as Case_097_pair__body__responses_1_code_body,gs as Case_098_pair__body__responses_2_codes_headers,_s as Case_099_pair__body__responses_2_codes_body,vs as Case_100_pair__responses_1_code_headers__responses_1_code_body,ys as Case_101_pair__responses_2_codes_headers__responses_2_codes_body,bs as Case_102_window_3__summary__to__address,xs as Case_103_window_3__operation_id__to__description,Ss as Case_104_window_3__address__to__security,Cs as Case_105_window_3__description__to__operation_extensions,ws as Case_106_window_3__security__to__path_parameters,Ts as Case_107_window_3__operation_extensions__to__query_parameters,Es as Case_108_window_3__path_parameters__to__headers,Ds as Case_109_window_3__query_parameters__to__cookies,Os as Case_110_window_3__headers__to__body,ks as Case_111_window_3__cookies__to__responses_1_code_headers,As as Case_112_window_3__body__to__responses_1_code_body,js as Case_113_window_4__summary__to__description,Ms as Case_114_window_4__operation_id__to__security,Ns as Case_115_window_4__address__to__operation_extensions,Ps as Case_116_window_4__description__to__path_parameters,Fs as Case_117_window_4__security__to__query_parameters,Is as Case_118_window_4__operation_extensions__to__headers,Ls as Case_119_window_4__path_parameters__to__cookies,Rs as Case_120_window_4__query_parameters__to__body,zs as Case_121_window_4__headers__to__responses_1_code_headers,Bs as Case_122_window_4__cookies__to__responses_1_code_body,Vs as Case_123_window_5__summary__to__security,Hs as Case_124_window_5__operation_id__to__operation_extensions,Us as Case_125_window_5__address__to__path_parameters,Ws as Case_126_window_5__description__to__query_parameters,Gs as Case_127_window_5__security__to__headers,Ks as Case_128_window_5__operation_extensions__to__cookies,qs as Case_129_window_5__path_parameters__to__body,Js as Case_130_window_5__query_parameters__to__responses_1_code_headers,Ys as Case_131_window_5__headers__to__responses_1_code_body,Xs as Case_132_window_6__summary__to__operation_extensions,Zs as Case_133_window_6__operation_id__to__path_parameters,Qs as Case_134_window_6__address__to__query_parameters,$s as Case_135_window_6__description__to__headers,ec as Case_136_window_6__security__to__cookies,tc as Case_137_window_6__operation_extensions__to__body,nc as Case_138_window_6__path_parameters__to__responses_1_code_headers,rc as Case_139_window_6__query_parameters__to__responses_1_code_body,ic as Case_140_window_7__summary__to__path_parameters,ac as Case_141_window_7__operation_id__to__query_parameters,oc as Case_142_window_7__address__to__headers,sc as Case_143_window_7__description__to__cookies,cc as Case_144_window_7__security__to__body,lc as Case_145_window_7__operation_extensions__to__responses_1_code_headers,uc as Case_146_window_7__path_parameters__to__responses_1_code_body,dc as Case_147_window_8__summary__to__query_parameters,fc as Case_148_window_8__operation_id__to__headers,pc as Case_149_window_8__address__to__cookies,mc as Case_150_window_8__description__to__body,hc as Case_151_window_8__security__to__responses_1_code_headers,gc as Case_152_window_8__operation_extensions__to__responses_1_code_body,_c as Case_153_window_9__summary__to__headers,vc as Case_154_window_9__operation_id__to__cookies,yc as Case_155_window_9__address__to__body,bc as Case_156_window_9__description__to__responses_1_code_headers,xc as Case_157_window_9__security__to__responses_1_code_body,Sc as Case_158_window_10__summary__to__cookies,Cc as Case_159_window_10__operation_id__to__body,wc as Case_160_window_10__address__to__responses_1_code_headers,Tc as Case_161_window_10__description__to__responses_1_code_body,Ec as Case_162_window_11__summary__to__body,Dc as Case_163_window_11__operation_id__to__responses_1_code_headers,Oc as Case_164_window_11__address__to__responses_1_code_body,kc as Case_165_window_12__summary__to__responses_1_code_headers,Ac as Case_166_window_12__operation_id__to__responses_1_code_body,jc as Case_167_window_13__summary__to__responses_1_code_body,Mc as Case_168_all_sections,Nc as __namedExportsOrder,wo as default};