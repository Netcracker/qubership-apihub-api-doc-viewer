import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{c as t,o as n,s as r}from"./openapi-story-args-BtscIYO6.js";import{a as i,i as a,n as o,r as s,t as c}from"./OpenApiSampleStory-UvOU9QWX.js";var l;function u(){return(u=e((()=>{l=`openapi: 3.0.3
info:
  title: Orders
  version: 1.0.0
paths:
  /orders:
    post:
      responses:
        "200":
          description: ""
      description: Creates an order.
`})))()}var d;function f(){return(f=e((()=>{d=`openapi: 3.0.3
info:
  title: Orders
  version: 1.0.0
paths:
  /orders:
    post:
      responses:
        "200":
          description: ""
      requestBody:
        description: Order to create
        content:
          application/json:
            schema:
              type: string
`})))()}var p;function m(){return(m=e((()=>{p=`openapi: 3.0.3
info:
  title: Orders
  version: 1.0.0
paths:
  /orders:
    post:
      responses:
        "200":
          description: Order created
`})))()}var h;function g(){return(g=e((()=>{h=`openapi: 3.0.3
info:
  title: Orders
  version: 1.0.0
paths:
  /orders:
    post:
      responses:
        "200":
          description: ""
      security:
        - apiKey: []
components:
  securitySchemes:
    apiKey:
      type: apiKey
      in: header
      name: X-API-Key
      description: Key issued by the developer portal.
`})))()}var _;function v(){return(v=e((()=>{_=`openapi: 3.0.3
info:
  title: Orders
  version: 1.0.0
paths:
  /orders:
    post:
      responses:
        "200":
          description: ""
      security:
        - oauth:
            - orders:read
components:
  securitySchemes:
    oauth:
      type: oauth2
      flows:
        clientCredentials:
          tokenUrl: https://auth.example.com/token
          scopes:
            orders:read: Read orders
`})))()}var y;function b(){return(b=e((()=>{y=`openapi: 3.0.3
info:
  title: Orders
  version: 1.0.0
paths:
  /orders:
    post:
      responses:
        "200":
          description: ""
      parameters:
        - name: limit
          in: query
          description: Maximum number of items
          schema:
            type: integer
`})))()}var x;function S(){return(S=e((()=>{x=`openapi: 3.0.3
info:
  title: Orders
  version: 1.0.0
paths:
  /orders:
    post:
      responses:
        "200":
          description: ""
      parameters:
        - name: filter
          in: query
          content:
            application/json:
              schema:
                type: object
`})))()}var C;function w(){return(w=e((()=>{C=`openapi: 3.0.3
info:
  title: Orders
  version: 1.0.0
paths:
  /orders:
    post:
      responses:
        "200":
          description: ""
      requestBody:
        content:
          application/json:
            schema:
              type: object
              properties:
                id:
                  type: string
                  description: Order identifier
`})))()}var T;function E(){return(E=e((()=>{T=`openapi: 3.0.3
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
            X-Rate-Limit:
              description: Requests left in the window
              schema:
                type: integer
`})))()}var D,O,k,A,j,M,N,P,F,I,L,R,z;function B(){return(B=e((()=>{u(),f(),m(),g(),v(),b(),S(),w(),E(),t(),a(),o(),D=s(Object.assign({"../../../../samples/openapi-display-mode-simple/01-operation-description/sample.yaml":l,"../../../../samples/openapi-display-mode-simple/02-request-body-description/sample.yaml":d,"../../../../samples/openapi-display-mode-simple/03-response-description/sample.yaml":p,"../../../../samples/openapi-display-mode-simple/04-security-scheme-description/sample.yaml":h,"../../../../samples/openapi-display-mode-simple/05-security-scope-description/sample.yaml":_,"../../../../samples/openapi-display-mode-simple/06-parameter-description/sample.yaml":y,"../../../../samples/openapi-display-mode-simple/07-parameter-media-type/sample.yaml":x,"../../../../samples/openapi-display-mode-simple/08-body-schema-description/sample.yaml":C,"../../../../samples/openapi-display-mode-simple/09-response-header-description/sample.yaml":T})),O={id:`openapi-operation-suite-display-mode-simple`,title:`OpenAPI Operation Suite (Display Mode = simple)`,component:c,argTypes:n,args:r},k=e=>({name:e,args:{caseId:e,sampleYaml:i(D,e),path:`/orders`,method:`post`}}),A=k(`01-operation-description`),j=k(`02-request-body-description`),M=k(`03-response-description`),N=k(`04-security-scheme-description`),P=k(`05-security-scope-description`),F=k(`06-parameter-description`),I=k(`07-parameter-media-type`),L=k(`08-body-schema-description`),R=k(`09-response-header-description`),A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`createCaseStory("01-operation-description")`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`createCaseStory("02-request-body-description")`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`createCaseStory("03-response-description")`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`createCaseStory("04-security-scheme-description")`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`createCaseStory("05-security-scope-description")`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`createCaseStory("06-parameter-description")`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`createCaseStory("07-parameter-media-type")`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`createCaseStory("08-body-schema-description")`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`createCaseStory("09-response-header-description")`,...R.parameters?.docs?.source}}},z=[`Case_01_operation_description`,`Case_02_request_body_description`,`Case_03_response_description`,`Case_04_security_scheme_description`,`Case_05_security_scope_description`,`Case_06_parameter_description`,`Case_07_parameter_media_type`,`Case_08_body_schema_description`,`Case_09_response_header_description`]})))()}B();export{A as Case_01_operation_description,j as Case_02_request_body_description,M as Case_03_response_description,N as Case_04_security_scheme_description,P as Case_05_security_scope_description,F as Case_06_parameter_description,I as Case_07_parameter_media_type,L as Case_08_body_schema_description,R as Case_09_response_header_description,z as __namedExportsOrder,O as default};