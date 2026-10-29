import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{a as t,c as n,i as r,l as i}from"./openapi-story-args-DSlkmn-B.js";import{a,i as o,n as s,r as c,t as l}from"./OpenApiSampleStory-CEwHhWBz.js";var u;function d(){return(d=e((()=>{u=`openapi: 3.0.3
info:
  title: Orders
  version: 1.0.0
paths:
  /orders/{orderId}:
    parameters:
      - name: orderId
        in: path
        required: true
        description: Declared on the path item.
        schema:
          type: string
      - name: pageSize
        in: query
        schema:
          type: integer
          default: 20
      - name: X-Tenant
        in: header
        schema:
          type: string
    get:
      parameters:
        - name: X-Tenant
          in: header
          required: true
          description: Overridden by the operation.
          schema:
            type: string
        - name: filter
          in: query
          content:
            application/json:
              schema:
                type: object
                description: JSON-encoded filter, described with \`content\` instead of \`schema\`.
                properties:
                  status:
                    type: string
      responses:
        "200":
          description: ""
`})))()}var f;function p(){return(p=e((()=>{f=`openapi: 3.0.3
info:
  title: Orders
  version: 1.0.0
paths:
  /orders:
    post:
      parameters:
        - $ref: "#/components/parameters/PageSize"
      requestBody:
        $ref: "#/components/requestBodies/OrderBody"
      responses:
        "200":
          description: ""
        "404":
          $ref: "#/components/responses/NotFound"
components:
  parameters:
    PageSize:
      name: pageSize
      in: query
      description: Page size from components.
      schema:
        type: integer
  requestBodies:
    OrderBody:
      description: Order body from components.
      required: true
      content:
        application/json:
          schema:
            type: object
            properties:
              id:
                type: string
              status:
                type: string
                enum:
                  - new
                  - paid
  responses:
    NotFound:
      description: Not found (from components).
      content:
        application/problem+json:
          schema:
            type: object
            properties:
              title:
                type: string
`})))()}var m;function h(){return(h=e((()=>{m=`openapi: 3.0.3
info:
  title: Orders
  version: 1.0.0
paths:
  /orders:
    post:
      parameters:
        - name: Accept
          in: header
          schema:
            type: string
        - name: Content-Type
          in: header
          schema:
            type: string
        - name: Authorization
          in: header
          schema:
            type: string
      responses:
        "200":
          description: ""
          headers:
            Content-Type:
              schema:
                type: string
`})))()}var g;function _(){return(_=e((()=>{g=`openapi: 3.0.3
info:
  title: Orders
  version: 1.0.0
paths:
  /orders:
    post:
      responses:
        "101":
          description: ""
        "201":
          description: ""
        "302":
          description: ""
        "404":
          description: ""
        "500":
          description: ""
        4XX:
          description: ""
        default:
          description: ""
        2XX:
          description: ""
`})))()}var v;function y(){return(y=e((()=>{v=`openapi: 3.0.3
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
  - api_key: []
components:
  securitySchemes:
    api_key:
      type: apiKey
      in: header
      name: X-API-Key
`})))()}var b;function x(){return(x=e((()=>{b=`openapi: 3.0.3
info:
  title: Orders
  version: 1.0.0
paths:
  /orders:
    post:
      security: []
      responses:
        "200":
          description: ""
security:
  - api_key: []
components:
  securitySchemes:
    api_key:
      type: apiKey
      in: header
      name: X-API-Key
`})))()}var S;function C(){return(C=e((()=>{S=`openapi: 3.0.3
info:
  title: Orders
  version: 1.0.0
paths:
  /orders:
    post:
      security:
        - api_key: []
        - {}
      responses:
        "200":
          description: ""
components:
  securitySchemes:
    api_key:
      type: apiKey
      in: header
      name: X-API-Key
`})))()}var w;function T(){return(T=e((()=>{w=`openapi: 3.0.3
info:
  title: Orders
  version: 1.0.0
paths:
  /orders:
    post:
      summary: Update an order
      deprecated: true
      responses:
        "200":
          description: ""
`})))()}var E;function D(){return(D=e((()=>{E=`openapi: 3.0.3
info:
  title: Orders
  version: 1.0.0
paths:
  /orders:
    post:
      deprecated: true
      responses:
        "200":
          description: ""
`})))()}var O;function k(){return(k=e((()=>{O=`openapi: 3.0.3
info:
  title: Orders
  version: 1.0.0
paths:
  /orders:
    post:
      security:
        - {}
      responses:
        "200":
          description: ""
`})))()}var A,j,M,N,P,F,I,L,R,z,B,V,H,U;function W(){return(W=e((()=>{d(),p(),h(),_(),y(),x(),C(),T(),D(),k(),n(),o(),s(),A=c(Object.assign({"../../../../samples/openapi/oas30/structure/01-path-item-parameters-with-override/sample.yaml":u,"../../../../samples/openapi/oas30/structure/02-ref-parameter-body-response/sample.yaml":f,"../../../../samples/openapi/oas30/structure/03-ignored-headers-shown/sample.yaml":m,"../../../../samples/openapi/oas30/structure/04-response-code-order/sample.yaml":g,"../../../../samples/openapi/oas30/structure/05-security-inherited-from-document/sample.yaml":v,"../../../../samples/openapi/oas30/structure/06-security-disabled/sample.yaml":b,"../../../../samples/openapi/oas30/structure/07-security-anonymous-alternative/sample.yaml":S,"../../../../samples/openapi/oas30/structure/08-deprecated-operation/sample.yaml":w,"../../../../samples/openapi/oas30/structure/09-deprecated-operation-without-summary/sample.yaml":E,"../../../../samples/openapi/oas30/structure/10-security-anonymous-only/sample.yaml":O})),j={title:`OpenAPI Operation Suite/OAS 3.0/Document Structure`,component:l,argTypes:r,args:t,play:i},M=(e,t,n,r)=>({name:e,args:{caseId:e,sampleYaml:a(A,e),path:t,method:n,switchTo:r}}),N=M(`01-path-item-parameters-with-override`,`/orders/{orderId}`,`get`,[]),P=M(`02-ref-parameter-body-response`,`/orders`,`post`,[`response-code-404`]),F=M(`03-ignored-headers-shown`,`/orders`,`post`,[]),I=M(`04-response-code-order`,`/orders`,`post`,[]),L=M(`05-security-inherited-from-document`,`/orders`,`post`,[]),R=M(`06-security-disabled`,`/orders`,`post`,[]),z=M(`07-security-anonymous-alternative`,`/orders`,`post`,[]),B=M(`08-deprecated-operation`,`/orders`,`post`,[]),V=M(`09-deprecated-operation-without-summary`,`/orders`,`post`,[]),H=M(`10-security-anonymous-only`,`/orders`,`post`,[]),N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`createCaseStory("01-path-item-parameters-with-override", "/orders/{orderId}", "get", [])`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`createCaseStory("02-ref-parameter-body-response", "/orders", "post", ["response-code-404"])`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`createCaseStory("03-ignored-headers-shown", "/orders", "post", [])`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`createCaseStory("04-response-code-order", "/orders", "post", [])`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`createCaseStory("05-security-inherited-from-document", "/orders", "post", [])`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`createCaseStory("06-security-disabled", "/orders", "post", [])`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`createCaseStory("07-security-anonymous-alternative", "/orders", "post", [])`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`createCaseStory("08-deprecated-operation", "/orders", "post", [])`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`createCaseStory("09-deprecated-operation-without-summary", "/orders", "post", [])`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`createCaseStory("10-security-anonymous-only", "/orders", "post", [])`,...H.parameters?.docs?.source}}},U=[`Case_01_path_item_parameters_with_override`,`Case_02_ref_parameter_body_response`,`Case_03_ignored_headers_shown`,`Case_04_response_code_order`,`Case_05_security_inherited_from_document`,`Case_06_security_disabled`,`Case_07_security_anonymous_alternative`,`Case_08_deprecated_operation`,`Case_09_deprecated_operation_without_summary`,`Case_10_security_anonymous_only`]})))()}W();export{N as Case_01_path_item_parameters_with_override,P as Case_02_ref_parameter_body_response,F as Case_03_ignored_headers_shown,I as Case_04_response_code_order,L as Case_05_security_inherited_from_document,R as Case_06_security_disabled,z as Case_07_security_anonymous_alternative,B as Case_08_deprecated_operation,V as Case_09_deprecated_operation_without_summary,H as Case_10_security_anonymous_only,U as __namedExportsOrder,j as default};