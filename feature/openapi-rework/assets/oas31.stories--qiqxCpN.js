import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{i as t,r as n}from"./sample-cases-DDoAHGgD.js";import{n as r,t as i}from"./diffs-samples-cases-Bp0vvMWA.js";import{n as a,t as o}from"./OpenApiDiffSampleStory-BEM122y8.js";var s;function c(){return(c=e((()=>{s=`openapi: 3.1.0
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
`})))()}var l;function u(){return(u=e((()=>{l=`openapi: 3.1.0
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
`})))()}var d;function f(){return(f=e((()=>{d=`openapi: 3.1.0
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
        - api_key: []
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
`})))()}var p;function m(){return(m=e((()=>{p=`openapi: 3.1.0
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
                  type:
                    - string
                    - 'null'
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
`})))()}var h;function g(){return(g=e((()=>{h=`openapi: 3.1.0
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
        - mtls: []
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
    mtls:
      type: mutualTLS
      description: Client certificate.
`})))()}var _;function v(){return(v=e((()=>{_=`openapi: 3.1.0
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
        - api_key:
            - admin
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
`})))()}var y,b,x,S,C,w,T;function E(){return(E=e((()=>{c(),u(),f(),m(),g(),v(),r(),t(),a(),y=n(i(Object.assign({"../../../../samples/openapi-diffs/oas31/01-nullable-via-type-array/before.yaml":s,"../../../../samples/openapi-diffs/oas31/02-mutual-tls-alternative-added/before.yaml":l,"../../../../samples/openapi-diffs/oas31/03-role-scopes-on-api-key/before.yaml":d}),Object.assign({"../../../../samples/openapi-diffs/oas31/01-nullable-via-type-array/after.yaml":p,"../../../../samples/openapi-diffs/oas31/02-mutual-tls-alternative-added/after.yaml":h,"../../../../samples/openapi-diffs/oas31/03-role-scopes-on-api-key/after.yaml":_}))),b={title:`OpenAPI Operation Diffs Suite/OAS 3.1 Samples`,component:o},x=e=>{let t=y[e];if(!t)throw Error(`Sample case not found: ${e}`);return{name:e,args:{caseId:e,beforeYaml:t.beforeYaml,afterYaml:t.afterYaml}}},S=x(`01-nullable-via-type-array`),C=x(`02-mutual-tls-alternative-added`),w=x(`03-role-scopes-on-api-key`),S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`createCaseStory("01-nullable-via-type-array")`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`createCaseStory("02-mutual-tls-alternative-added")`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`createCaseStory("03-role-scopes-on-api-key")`,...w.parameters?.docs?.source}}},T=[`Case_01_nullable_via_type_array`,`Case_02_mutual_tls_alternative_added`,`Case_03_role_scopes_on_api_key`]})))()}E();export{S as Case_01_nullable_via_type_array,C as Case_02_mutual_tls_alternative_added,w as Case_03_role_scopes_on_api_key,T as __namedExportsOrder,b as default};