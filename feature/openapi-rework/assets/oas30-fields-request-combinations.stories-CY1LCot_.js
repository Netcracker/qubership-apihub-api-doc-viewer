import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{a as t,c as n,i as r,l as i}from"./openapi-story-args-BtS9TgbL.js";import{a,i as o,n as s,r as c,t as l}from"./OpenApiSampleStory-DkIJxq9p.js";var u;function d(){return(d=e((()=>{u=`openapi: 3.0.3
info:
  title: Orders
  version: 1.0.0
paths:
  /orders/{orderId}/lines/{lineId}/legacy/{legacyId}/filter/{filter}:
    post:
      parameters:
        - name: orderId
          in: path
          required: true
          schema:
            type: string
        - name: lineId
          in: path
          required: true
          schema:
            type: integer
            format: int32
        - name: legacyId
          in: path
          required: true
          deprecated: true
          schema:
            type: string
        - name: filter
          in: path
          required: true
          content:
            application/json:
              schema:
                type: object
                properties:
                  status:
                    type: string
                  from:
                    type: string
                    format: date
        - name: limit
          in: query
          required: true
          schema:
            type: integer
            minimum: 1
        - name: cursor
          in: query
          schema:
            type: string
        - name: page
          in: query
          deprecated: true
          schema:
            type: integer
        - name: filter
          in: query
          content:
            application/json:
              schema:
                type: object
                properties:
                  status:
                    type: string
                  from:
                    type: string
                    format: date
      responses:
        "200":
          description: ""
`})))()}var f;function p(){return(p=e((()=>{f=`openapi: 3.0.3
info:
  title: Orders
  version: 1.0.0
paths:
  /orders/{orderId}/lines/{lineId}/legacy/{legacyId}/filter/{filter}:
    post:
      parameters:
        - name: orderId
          in: path
          required: true
          schema:
            type: string
        - name: lineId
          in: path
          required: true
          schema:
            type: integer
            format: int32
        - name: legacyId
          in: path
          required: true
          deprecated: true
          schema:
            type: string
        - name: filter
          in: path
          required: true
          content:
            application/json:
              schema:
                type: object
                properties:
                  status:
                    type: string
                  from:
                    type: string
                    format: date
        - name: X-Request-Id
          in: header
          required: true
          schema:
            type: string
            format: uuid
        - name: X-Trace
          in: header
          schema:
            type: string
        - name: X-Legacy-Token
          in: header
          deprecated: true
          schema:
            type: string
        - name: X-Filter
          in: header
          content:
            application/json:
              schema:
                type: object
                properties:
                  status:
                    type: string
                  from:
                    type: string
                    format: date
      responses:
        "200":
          description: ""
`})))()}var m;function h(){return(h=e((()=>{m=`openapi: 3.0.3
info:
  title: Orders
  version: 1.0.0
paths:
  /orders/{orderId}/lines/{lineId}/legacy/{legacyId}/filter/{filter}:
    post:
      parameters:
        - name: orderId
          in: path
          required: true
          schema:
            type: string
        - name: lineId
          in: path
          required: true
          schema:
            type: integer
            format: int32
        - name: legacyId
          in: path
          required: true
          deprecated: true
          schema:
            type: string
        - name: filter
          in: path
          required: true
          content:
            application/json:
              schema:
                type: object
                properties:
                  status:
                    type: string
                  from:
                    type: string
                    format: date
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
        - name: legacy_session
          in: cookie
          deprecated: true
          schema:
            type: string
        - name: prefs
          in: cookie
          content:
            application/json:
              schema:
                type: object
                properties:
                  status:
                    type: string
                  from:
                    type: string
                    format: date
      responses:
        "200":
          description: ""
`})))()}var g;function _(){return(_=e((()=>{g=`openapi: 3.0.3
info:
  title: Orders
  version: 1.0.0
paths:
  /orders/{orderId}/lines/{lineId}/legacy/{legacyId}/filter/{filter}:
    post:
      parameters:
        - name: orderId
          in: path
          required: true
          schema:
            type: string
        - name: lineId
          in: path
          required: true
          schema:
            type: integer
            format: int32
        - name: legacyId
          in: path
          required: true
          deprecated: true
          schema:
            type: string
        - name: filter
          in: path
          required: true
          content:
            application/json:
              schema:
                type: object
                properties:
                  status:
                    type: string
                  from:
                    type: string
                    format: date
      requestBody:
        description: New order state.
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
        "200":
          description: ""
`})))()}var v;function y(){return(y=e((()=>{v=`openapi: 3.0.3
info:
  title: Orders
  version: 1.0.0
paths:
  /orders:
    post:
      parameters:
        - name: limit
          in: query
          required: true
          schema:
            type: integer
            minimum: 1
        - name: cursor
          in: query
          schema:
            type: string
        - name: page
          in: query
          deprecated: true
          schema:
            type: integer
        - name: filter
          in: query
          content:
            application/json:
              schema:
                type: object
                properties:
                  status:
                    type: string
                  from:
                    type: string
                    format: date
        - name: X-Request-Id
          in: header
          required: true
          schema:
            type: string
            format: uuid
        - name: X-Trace
          in: header
          schema:
            type: string
        - name: X-Legacy-Token
          in: header
          deprecated: true
          schema:
            type: string
        - name: X-Filter
          in: header
          content:
            application/json:
              schema:
                type: object
                properties:
                  status:
                    type: string
                  from:
                    type: string
                    format: date
      responses:
        "200":
          description: ""
`})))()}var b;function x(){return(x=e((()=>{b=`openapi: 3.0.3
info:
  title: Orders
  version: 1.0.0
paths:
  /orders:
    post:
      parameters:
        - name: limit
          in: query
          required: true
          schema:
            type: integer
            minimum: 1
        - name: cursor
          in: query
          schema:
            type: string
        - name: page
          in: query
          deprecated: true
          schema:
            type: integer
        - name: filter
          in: query
          content:
            application/json:
              schema:
                type: object
                properties:
                  status:
                    type: string
                  from:
                    type: string
                    format: date
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
        - name: legacy_session
          in: cookie
          deprecated: true
          schema:
            type: string
        - name: prefs
          in: cookie
          content:
            application/json:
              schema:
                type: object
                properties:
                  status:
                    type: string
                  from:
                    type: string
                    format: date
      responses:
        "200":
          description: ""
`})))()}var S;function C(){return(C=e((()=>{S=`openapi: 3.0.3
info:
  title: Orders
  version: 1.0.0
paths:
  /orders:
    post:
      parameters:
        - name: limit
          in: query
          required: true
          schema:
            type: integer
            minimum: 1
        - name: cursor
          in: query
          schema:
            type: string
        - name: page
          in: query
          deprecated: true
          schema:
            type: integer
        - name: filter
          in: query
          content:
            application/json:
              schema:
                type: object
                properties:
                  status:
                    type: string
                  from:
                    type: string
                    format: date
      requestBody:
        description: New order state.
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
        "200":
          description: ""
`})))()}var w;function T(){return(T=e((()=>{w=`openapi: 3.0.3
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
        - name: X-Legacy-Token
          in: header
          deprecated: true
          schema:
            type: string
        - name: X-Filter
          in: header
          content:
            application/json:
              schema:
                type: object
                properties:
                  status:
                    type: string
                  from:
                    type: string
                    format: date
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
        - name: legacy_session
          in: cookie
          deprecated: true
          schema:
            type: string
        - name: prefs
          in: cookie
          content:
            application/json:
              schema:
                type: object
                properties:
                  status:
                    type: string
                  from:
                    type: string
                    format: date
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
        - name: X-Legacy-Token
          in: header
          deprecated: true
          schema:
            type: string
        - name: X-Filter
          in: header
          content:
            application/json:
              schema:
                type: object
                properties:
                  status:
                    type: string
                  from:
                    type: string
                    format: date
      requestBody:
        description: New order state.
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
        "200":
          description: ""
`})))()}var O;function k(){return(k=e((()=>{O=`openapi: 3.0.3
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
        - name: legacy_session
          in: cookie
          deprecated: true
          schema:
            type: string
        - name: prefs
          in: cookie
          content:
            application/json:
              schema:
                type: object
                properties:
                  status:
                    type: string
                  from:
                    type: string
                    format: date
      requestBody:
        description: New order state.
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
        "200":
          description: ""
`})))()}var A,j,M,N,P,F,I,L,R,z,B,V,H,U;function W(){return(W=e((()=>{d(),p(),h(),_(),y(),x(),C(),T(),D(),k(),n(),o(),s(),A=c(Object.assign({"../../../../samples/openapi/oas30/fields/request-combinations/01-path-parameters--query-parameters/sample.yaml":u,"../../../../samples/openapi/oas30/fields/request-combinations/02-path-parameters--request-headers/sample.yaml":f,"../../../../samples/openapi/oas30/fields/request-combinations/03-path-parameters--cookies/sample.yaml":m,"../../../../samples/openapi/oas30/fields/request-combinations/04-path-parameters--request-body/sample.yaml":g,"../../../../samples/openapi/oas30/fields/request-combinations/05-query-parameters--request-headers/sample.yaml":v,"../../../../samples/openapi/oas30/fields/request-combinations/06-query-parameters--cookies/sample.yaml":b,"../../../../samples/openapi/oas30/fields/request-combinations/07-query-parameters--request-body/sample.yaml":S,"../../../../samples/openapi/oas30/fields/request-combinations/08-request-headers--cookies/sample.yaml":w,"../../../../samples/openapi/oas30/fields/request-combinations/09-request-headers--request-body/sample.yaml":E,"../../../../samples/openapi/oas30/fields/request-combinations/10-cookies--request-body/sample.yaml":O})),j={title:`OpenAPI Operation Suite/OAS 3.0/Fields/Request Combinations`,component:l,argTypes:r,args:t,play:i},M=(e,t,n,r)=>({name:e,args:{caseId:e,sampleYaml:a(A,e),path:t,method:n,switchTo:r}}),N=M(`01-path-parameters--query-parameters`,`/orders/{orderId}/lines/{lineId}/legacy/{legacyId}/filter/{filter}`,`post`,[]),P=M(`02-path-parameters--request-headers`,`/orders/{orderId}/lines/{lineId}/legacy/{legacyId}/filter/{filter}`,`post`,[]),F=M(`03-path-parameters--cookies`,`/orders/{orderId}/lines/{lineId}/legacy/{legacyId}/filter/{filter}`,`post`,[]),I=M(`04-path-parameters--request-body`,`/orders/{orderId}/lines/{lineId}/legacy/{legacyId}/filter/{filter}`,`post`,[]),L=M(`05-query-parameters--request-headers`,`/orders`,`post`,[]),R=M(`06-query-parameters--cookies`,`/orders`,`post`,[]),z=M(`07-query-parameters--request-body`,`/orders`,`post`,[]),B=M(`08-request-headers--cookies`,`/orders`,`post`,[]),V=M(`09-request-headers--request-body`,`/orders`,`post`,[]),H=M(`10-cookies--request-body`,`/orders`,`post`,[]),N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`createCaseStory("01-path-parameters--query-parameters", "/orders/{orderId}/lines/{lineId}/legacy/{legacyId}/filter/{filter}", "post", [])`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`createCaseStory("02-path-parameters--request-headers", "/orders/{orderId}/lines/{lineId}/legacy/{legacyId}/filter/{filter}", "post", [])`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`createCaseStory("03-path-parameters--cookies", "/orders/{orderId}/lines/{lineId}/legacy/{legacyId}/filter/{filter}", "post", [])`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`createCaseStory("04-path-parameters--request-body", "/orders/{orderId}/lines/{lineId}/legacy/{legacyId}/filter/{filter}", "post", [])`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`createCaseStory("05-query-parameters--request-headers", "/orders", "post", [])`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`createCaseStory("06-query-parameters--cookies", "/orders", "post", [])`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`createCaseStory("07-query-parameters--request-body", "/orders", "post", [])`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`createCaseStory("08-request-headers--cookies", "/orders", "post", [])`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`createCaseStory("09-request-headers--request-body", "/orders", "post", [])`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`createCaseStory("10-cookies--request-body", "/orders", "post", [])`,...H.parameters?.docs?.source}}},U=[`Case_01_path_parameters__query_parameters`,`Case_02_path_parameters__request_headers`,`Case_03_path_parameters__cookies`,`Case_04_path_parameters__request_body`,`Case_05_query_parameters__request_headers`,`Case_06_query_parameters__cookies`,`Case_07_query_parameters__request_body`,`Case_08_request_headers__cookies`,`Case_09_request_headers__request_body`,`Case_10_cookies__request_body`]})))()}W();export{N as Case_01_path_parameters__query_parameters,P as Case_02_path_parameters__request_headers,F as Case_03_path_parameters__cookies,I as Case_04_path_parameters__request_body,L as Case_05_query_parameters__request_headers,R as Case_06_query_parameters__cookies,z as Case_07_query_parameters__request_body,B as Case_08_request_headers__cookies,V as Case_09_request_headers__request_body,H as Case_10_cookies__request_body,U as __namedExportsOrder,j as default};