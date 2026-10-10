import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n,t as r}from"./openapi-story-args-BDyYngoO.js";import{a as i,i as a,n as o,r as s,t as c}from"./openapi-suite-utils-CXzw5vvh.js";var l;function u(){return(u=e((()=>{l=`openapi: 3.1.0
info:
  title: Pet store (full operation, OAS 3.1)
  version: 1.0.0
paths:
  /pets/{petId}:
    patch:
      operationId: patchPet
      summary: Partially update a pet
      description: Applies a JSON merge patch. Nullable fields use **type arrays** (OAS 3.1 / JSON Schema 2020-12).
      externalDocs:
        url: https://example.com/docs/pets#patch
      x-internal: false
      security:
        - petstore_auth: [write:pets]
      parameters:
        - name: petId
          in: path
          required: true
          schema:
            type: integer
            exclusiveMinimum: 0
        - name: If-Match
          in: header
          required: true
          description: ETag of the pet version being modified.
          schema:
            type: string
        - name: fields
          in: query
          schema:
            type: [array, 'null']
            items:
              type: string
            examples:
              - [name, status]
      requestBody:
        description: Merge patch document.
        content:
          application/merge-patch+json:
            schema:
              $ref: '#/components/schemas/PetPatch'
          application/octet-stream:
            schema:
              type: string
              contentMediaType: image/png
              contentEncoding: base64
      responses:
        '200':
          description: The updated pet.
          headers:
            ETag:
              required: true
              schema:
                type: string
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/Pet'
        '412':
          description: The \`If-Match\` precondition failed.
        '422':
          description: The patch is not applicable.
          content:
            application/problem+json:
              schema:
                type: object
                properties:
                  title:
                    type: string
                  errors:
                    type: array
                    items:
                      type: string
components:
  securitySchemes:
    petstore_auth:
      type: oauth2
      flows:
        implicit:
          authorizationUrl: https://auth.example.com/authorize
          scopes:
            write:pets: Modify pets
            read:pets: Read pets
  schemas:
    Pet:
      type: object
      required: [id, name]
      properties:
        id:
          type: integer
        name:
          type: string
        status:
          enum: [available, pending, sold]
        nickname:
          type: [string, 'null']
        weight:
          type: number
          exclusiveMinimum: 0
          maximum: 200
    PetPatch:
      type: object
      properties:
        name:
          type: string
        status:
          const: sold
        nickname:
          type: [string, 'null']
`})))()}var d;function f(){return(f=e((()=>{d=`openapi: 3.1.0
info:
  title: Operation without responses (OAS 3.1)
  version: 1.0.0
paths:
  /events:
    post:
      summary: Fire-and-forget event
      description: OAS 3.1 makes \`responses\` optional; the Responses section is not rendered.
      requestBody:
        content:
          application/cloudevents+json:
            schema:
              type: object
              required: [id, type]
              properties:
                id:
                  type: string
                type:
                  type: string
                data: true
`})))()}var p;function m(){return(m=e((()=>{p=`openapi: 3.1.0
info:
  title: mutualTLS and role scopes (OAS 3.1)
  version: 1.0.0
paths:
  /admin/keys:
    post:
      summary: Rotate signing keys
      description: |
        OAS 3.1 only:
        * \`mutualTLS\` security scheme type;
        * requirement scopes on non-OAuth schemes (role names).
      security:
        - mtls: []
          bearer: [admin, key-manager]
        - api_key: [admin]
      responses:
        '204':
          description: Keys rotated.
components:
  securitySchemes:
    mtls:
      type: mutualTLS
      description: Client certificate issued by the internal CA.
    bearer:
      type: http
      scheme: bearer
      bearerFormat: JWT
    api_key:
      type: apiKey
      in: cookie
      name: ADMIN_KEY
`})))()}var h;function g(){return(g=e((()=>{h=`openapi: 3.1.0
info:
  title: Reference overrides and components.pathItems (OAS 3.1)
  version: 1.0.0
paths:
  /invoices/{invoiceId}:
    $ref: '#/components/pathItems/Invoice'
components:
  pathItems:
    Invoice:
      parameters:
        - name: invoiceId
          in: path
          required: true
          schema:
            type: string
      get:
        summary: Path item resolved from components.pathItems
        parameters:
          - $ref: '#/components/parameters/Locale'
            description: Overridden description (a Reference Object sibling - OAS 3.1 only).
        requestBody:
          $ref: '#/components/requestBodies/Empty'
        responses:
          '200':
            $ref: '#/components/responses/Invoice'
            description: Overridden response description (a Reference Object sibling - OAS 3.1 only).
  parameters:
    Locale:
      name: locale
      in: query
      description: Original description from components.parameters.
      schema:
        type: string
  requestBodies:
    Empty:
      description: Unused body declared for completeness.
      content:
        text/plain:
          schema:
            type: string
            maxLength: 0
  responses:
    Invoice:
      description: Original response description from components.responses.
      content:
        application/pdf:
          schema:
            type: string
            contentMediaType: application/pdf
        application/json:
          schema:
            type: object
            properties:
              total:
                type: number
`})))()}var _,v,y,b,x,S,C,w;function T(){return(T=e((()=>{u(),f(),m(),g(),n(),i(),o(),_=c(Object.assign({"../../../../samples/openapi/oas31/01-full-operation/sample.yaml":l,"../../../../samples/openapi/oas31/02-no-responses/sample.yaml":d,"../../../../samples/openapi/oas31/03-security-mutual-tls-and-roles/sample.yaml":p,"../../../../samples/openapi/oas31/04-reference-overrides-and-path-items/sample.yaml":h})),v={title:`OpenAPI Operation Suite/OAS 3.1`,component:a,argTypes:r,args:t},y=(e,t,n,r={},i=``)=>({name:`${e} ${n.toUpperCase()}${i}`,args:{caseId:e,sampleYaml:s(_,e),path:t,method:n,...r}}),b=y(`01-full-operation`,`/pets/{petId}`,`patch`),x=y(`02-no-responses`,`/events`,`post`),S=y(`03-security-mutual-tls-and-roles`,`/admin/keys`,`post`),C=y(`04-reference-overrides-and-path-items`,`/invoices/{invoiceId}`,`get`),b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`createCaseStory("01-full-operation", "/pets/{petId}", "patch")`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`createCaseStory("02-no-responses", "/events", "post")`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`createCaseStory("03-security-mutual-tls-and-roles", "/admin/keys", "post")`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`createCaseStory("04-reference-overrides-and-path-items", "/invoices/{invoiceId}", "get")`,...C.parameters?.docs?.source}}},w=[`Case_01_full_operation`,`Case_02_no_responses`,`Case_03_security_mutual_tls_and_roles`,`Case_04_reference_overrides_and_path_items`]})))()}T();export{b as Case_01_full_operation,x as Case_02_no_responses,S as Case_03_security_mutual_tls_and_roles,C as Case_04_reference_overrides_and_path_items,w as __namedExportsOrder,v as default};