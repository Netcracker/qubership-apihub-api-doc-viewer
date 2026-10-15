import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{a as t,n,o as r,t as i}from"./openapi-story-args-CszyPRIM.js";import{a,i as o,n as s,r as c,t as l}from"./OpenApiSampleStory-D2ZLb262.js";var u;function d(){return(d=e((()=>{u=`openapi: 3.0.3
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
`})))()}var m;function h(){return(h=e((()=>{m=`openapi: 3.0.3
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
      responses:
        "200":
          description: ""
`})))()}var g;function _(){return(_=e((()=>{g=`openapi: 3.0.3
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
      responses:
        "200":
          description: ""
`})))()}var v,y,b,x,S,C,w,T;function E(){return(E=e((()=>{d(),p(),h(),_(),t(),o(),s(),v=c(Object.assign({"../../../../samples/openapi/oas30/fields/parameters/01-path-parameters/sample.yaml":u,"../../../../samples/openapi/oas30/fields/parameters/02-query-parameters/sample.yaml":f,"../../../../samples/openapi/oas30/fields/parameters/03-request-headers/sample.yaml":m,"../../../../samples/openapi/oas30/fields/parameters/04-cookies/sample.yaml":g})),y={title:`OpenAPI Operation Suite/OAS 3.0/Fields/Parameters`,component:l,argTypes:i,args:n,play:r},b=(e,t,n,r)=>({name:e,args:{caseId:e,sampleYaml:a(v,e),path:t,method:n,switchTo:r}}),x=b(`01-path-parameters`,`/orders/{orderId}/lines/{lineId}/legacy/{legacyId}/filter/{filter}`,`post`,[]),S=b(`02-query-parameters`,`/orders`,`post`,[]),C=b(`03-request-headers`,`/orders`,`post`,[]),w=b(`04-cookies`,`/orders`,`post`,[]),x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`createCaseStory("01-path-parameters", "/orders/{orderId}/lines/{lineId}/legacy/{legacyId}/filter/{filter}", "post", [])`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`createCaseStory("02-query-parameters", "/orders", "post", [])`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`createCaseStory("03-request-headers", "/orders", "post", [])`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`createCaseStory("04-cookies", "/orders", "post", [])`,...w.parameters?.docs?.source}}},T=[`Case_01_path_parameters`,`Case_02_query_parameters`,`Case_03_request_headers`,`Case_04_cookies`]})))()}E();export{x as Case_01_path_parameters,S as Case_02_query_parameters,C as Case_03_request_headers,w as Case_04_cookies,T as __namedExportsOrder,y as default};