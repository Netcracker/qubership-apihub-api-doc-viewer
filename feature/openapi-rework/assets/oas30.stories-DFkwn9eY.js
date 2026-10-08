import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{a as t,i as n,n as r,r as i,t as a}from"./openapi-suite-utils-CXzw5vvh.js";var o;function s(){return(s=e((()=>{o=`openapi: 3.0.3
info:
  title: Pet store (full operation, OAS 3.0)
  version: 1.0.0
security:
  - api_key: []
paths:
  /pets/{petId}/photos:
    parameters:
      - name: petId
        in: path
        required: true
        description: Identifier of the pet. Declared on the **path item**; the unifier merges it into the operation.
        schema:
          type: integer
          format: int64
          minimum: 1
    post:
      operationId: uploadPetPhoto
      summary: Upload a photo of a pet
      description: |
        Uploads a new photo and attaches it to the pet.

        * Accepts PNG images or a multipart form.
        * Returns the stored photo metadata.
      externalDocs:
        description: Photo upload guide
        url: https://example.com/docs/photos
      x-rate-limit: 100
      x-audience:
        visibility: public
        owners: [pets-team]
      security:
        - petstore_auth: [write:pets, read:pets]
        - api_key: []
          request_signature: []
      parameters:
        - name: dryRun
          in: query
          description: Validate the request without storing the photo.
          schema:
            type: boolean
            default: false
        - name: tags
          in: query
          style: form
          explode: true
          schema:
            type: array
            items:
              type: string
              enum: [portrait, outdoor, vet]
        - name: X-Request-Id
          in: header
          required: true
          description: Correlation identifier.
          schema:
            type: string
            format: uuid
        - name: X-Legacy-Client
          in: header
          deprecated: true
          schema:
            type: string
            nullable: true
        - name: session
          in: cookie
          description: Browser session cookie.
          schema:
            type: string
            minLength: 16
      requestBody:
        required: true
        description: Photo binary **or** a multipart form with metadata.
        content:
          image/png:
            schema:
              type: string
              format: binary
          multipart/form-data:
            schema:
              type: object
              required: [file]
              properties:
                file:
                  type: string
                  format: binary
                caption:
                  type: string
                  maxLength: 140
                takenAt:
                  type: string
                  format: date-time
      responses:
        '201':
          description: Photo stored.
          headers:
            Location:
              description: URL of the stored photo.
              required: true
              schema:
                type: string
                format: uri
            X-Rate-Limit-Remaining:
              schema:
                type: integer
                minimum: 0
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/Photo'
            application/xml:
              schema:
                $ref: '#/components/schemas/Photo'
        '303':
          description: The same photo already exists; see the \`Location\` header.
          headers:
            Location:
              schema:
                type: string
                format: uri
        '400':
          description: Invalid image.
          content:
            application/problem+json:
              schema:
                $ref: '#/components/schemas/Problem'
        '404':
          description: Pet not found.
        '5XX':
          description: Server error.
          content:
            application/problem+json:
              schema:
                $ref: '#/components/schemas/Problem'
        default:
          description: Unexpected error.
components:
  securitySchemes:
    api_key:
      type: apiKey
      name: X-API-Key
      in: header
      description: Static API key issued per tenant.
    request_signature:
      type: http
      scheme: bearer
      bearerFormat: JWT
    petstore_auth:
      type: oauth2
      description: OAuth 2.0 with **authorization code** and client credentials flows.
      flows:
        authorizationCode:
          authorizationUrl: https://auth.example.com/authorize
          tokenUrl: https://auth.example.com/token
          refreshUrl: https://auth.example.com/refresh
          scopes:
            read:pets: Read pets
            write:pets: Modify pets
        clientCredentials:
          tokenUrl: https://auth.example.com/token
          scopes:
            read:pets: Read pets
  schemas:
    Photo:
      type: object
      required: [id, url]
      properties:
        id:
          type: string
          readOnly: true
        url:
          type: string
          format: uri
        caption:
          type: string
          nullable: true
        size:
          type: integer
          minimum: 0
          exclusiveMinimum: true
    Problem:
      type: object
      properties:
        type:
          type: string
          format: uri
        title:
          type: string
        status:
          type: integer
`})))()}var c;function l(){return(l=e((()=>{c=`openapi: 3.0.3
info:
  title: Minimal operation (OAS 3.0)
  version: 1.0.0
paths:
  /health:
    get:
      responses:
        '204':
          description: Service is healthy.
`})))()}var u;function d(){return(d=e((()=>{u=`openapi: 3.0.3
info:
  title: Security alternatives (OAS 3.0)
  version: 1.0.0
security:
  - api_key: []
paths:
  /reports:
    get:
      summary: Inherits the root security (the operation has no \`security\`)
      responses:
        '200':
          description: OK
    post:
      summary: Three alternatives, one of them anonymous
      security:
        - oidc: [reports.write]
        - api_key: []
          basic: []
        - {}
      responses:
        '201':
          description: Created
    delete:
      summary: Explicitly public (\`security\` set to an empty list overrides the root)
      deprecated: true
      security: []
      responses:
        '204':
          description: Deleted
components:
  securitySchemes:
    api_key:
      type: apiKey
      name: api_key
      in: query
    basic:
      type: http
      scheme: basic
    oidc:
      type: openIdConnect
      openIdConnectUrl: https://auth.example.com/.well-known/openid-configuration
`})))()}var f;function p(){return(p=e((()=>{f=`openapi: 3.0.3
info:
  title: Parameter sources (OAS 3.0)
  version: 1.0.0
paths:
  /orders/{orderId}:
    parameters:
      - name: orderId
        in: path
        required: true
        schema:
          type: string
      - name: X-Tenant
        in: header
        description: Path-item header; the operation-level parameter with the same name and location wins.
        schema:
          type: string
    get:
      summary: Parameters from the path item, a $ref, and content
      parameters:
        - name: X-Tenant
          in: header
          required: true
          description: Operation-level header; overrides the path-item one.
          schema:
            type: string
            enum: [eu, us]
        - $ref: '#/components/parameters/PageSize'
        - name: filter
          in: query
          description: JSON-encoded filter, described with \`content\` instead of \`schema\`.
          content:
            application/json:
              schema:
                type: object
                properties:
                  status:
                    type: string
                  createdAfter:
                    type: string
                    format: date
        - name: Accept
          in: header
          description: The specification says Accept, Content-Type and Authorization header parameters are ignored.
          schema:
            type: string
      responses:
        '200':
          description: OK
          content:
            application/json:
              schema:
                type: object
                properties:
                  id:
                    type: string
components:
  parameters:
    PageSize:
      name: pageSize
      in: query
      description: Page size (from \`components.parameters\`).
      schema:
        type: integer
        minimum: 1
        maximum: 100
        default: 20
`})))()}var m;function h(){return(h=e((()=>{m=`openapi: 3.0.3
info:
  title: Response code palette (OAS 3.0)
  version: 1.0.0
paths:
  /palette:
    get:
      summary: Every response code class
      responses:
        '500':
          description: Declared first on purpose - the selector uses canonical order, not document order.
        '101':
          description: Switching protocols (1XX - grey).
        '200':
          description: OK (2XX - green).
          content:
            application/json:
              schema:
                type: string
        '2XX':
          description: Any other success (range - green).
        '302':
          description: Found (3XX - blue).
        '404':
          description: Not found (4XX - orange).
        '4XX':
          description: Any other client error (range - orange).
        '503':
          description: Unavailable (5XX - red).
        default:
          description: Anything else (grey).
`})))()}var g,_,v,y,b,x,S,C,w,T,E,D,O;function k(){return(k=e((()=>{s(),l(),d(),p(),h(),t(),r(),g=a(Object.assign({"../../../../samples/openapi/oas30/01-full-operation/sample.yaml":o,"../../../../samples/openapi/oas30/02-minimal-operation/sample.yaml":c,"../../../../samples/openapi/oas30/03-security-alternatives/sample.yaml":u,"../../../../samples/openapi/oas30/04-parameters-sources/sample.yaml":f,"../../../../samples/openapi/oas30/05-response-codes-palette/sample.yaml":m})),_={title:`OpenAPI Operation Suite/OAS 3.0`,component:n},v=(e,t,n,r={},a=``)=>({name:`${e} ${n.toUpperCase()}${a}`,args:{caseId:e,sampleYaml:i(g,e),path:t,method:n,...r}}),y=v(`01-full-operation`,`/pets/{petId}/photos`,`post`),b=v(`01-full-operation`,`/pets/{petId}/photos`,`post`,{displayMode:`simple`},` (simple mode)`),x=v(`01-full-operation`,`/pets/{petId}/photos`,`post`,{noHeading:!0},` (no heading)`),S=v(`02-minimal-operation`,`/health`,`get`),C=v(`03-security-alternatives`,`/reports`,`get`),w=v(`03-security-alternatives`,`/reports`,`post`),T=v(`03-security-alternatives`,`/reports`,`delete`),E=v(`04-parameters-sources`,`/orders/{orderId}`,`get`),D=v(`05-response-codes-palette`,`/palette`,`get`),y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`createCaseStory("01-full-operation", "/pets/{petId}/photos", "post")`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`createCaseStory("01-full-operation", "/pets/{petId}/photos", "post", {
  displayMode: "simple"
}, " (simple mode)")`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`createCaseStory("01-full-operation", "/pets/{petId}/photos", "post", {
  noHeading: true
}, " (no heading)")`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`createCaseStory("02-minimal-operation", "/health", "get")`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`createCaseStory("03-security-alternatives", "/reports", "get")`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`createCaseStory("03-security-alternatives", "/reports", "post")`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`createCaseStory("03-security-alternatives", "/reports", "delete")`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`createCaseStory("04-parameters-sources", "/orders/{orderId}", "get")`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`createCaseStory("05-response-codes-palette", "/palette", "get")`,...D.parameters?.docs?.source}}},O=[`Case_01_full_operation`,`Case_01_full_operation_simple_mode`,`Case_01_full_operation_no_heading`,`Case_02_minimal_operation`,`Case_03_security_inherited_from_document`,`Case_03_security_three_alternatives`,`Case_03_security_disabled_deprecated`,`Case_04_parameters_sources`,`Case_05_response_codes_palette`]})))()}k();export{y as Case_01_full_operation,x as Case_01_full_operation_no_heading,b as Case_01_full_operation_simple_mode,S as Case_02_minimal_operation,T as Case_03_security_disabled_deprecated,C as Case_03_security_inherited_from_document,w as Case_03_security_three_alternatives,E as Case_04_parameters_sources,D as Case_05_response_codes_palette,O as __namedExportsOrder,_ as default};