import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{a as t,n,o as r,t as i}from"./openapi-story-args-CzZuWdxk.js";import{a,i as o,n as s,r as c,t as l}from"./OpenApiSampleStory-B2gHfl62.js";var u;function d(){return(d=e((()=>{u=`openapi: 3.1.0
info:
  title: Orders
  version: 1.0.0
paths:
  /orders:
    post:
      parameters:
        - name: note
          in: query
          schema:
            type:
              - string
              - "null"
      responses:
        "200":
          description: ""
`})))()}var f;function p(){return(p=e((()=>{f=`openapi: 3.1.0
info:
  title: Orders
  version: 1.0.0
paths:
  /orders:
    post:
      requestBody:
        content:
          application/json:
            schema:
              type: object
              properties:
                value:
                  type:
                    - integer
                    - "null"
      responses:
        "200":
          description: ""
`})))()}var m;function h(){return(h=e((()=>{m=`openapi: 3.1.0
info:
  title: Orders
  version: 1.0.0
paths:
  /orders:
    post:
      requestBody:
        content:
          application/json:
            schema:
              type: object
              properties:
                value:
                  type: number
                  exclusiveMinimum: 0
                  exclusiveMaximum: 100
      responses:
        "200":
          description: ""
`})))()}var g;function _(){return(_=e((()=>{g=`openapi: 3.1.0
info:
  title: Orders
  version: 1.0.0
paths:
  /orders:
    post:
      requestBody:
        content:
          application/json:
            schema:
              type: object
              properties:
                value:
                  type: string
                  examples:
                    - new
                    - paid
      responses:
        "200":
          description: ""
`})))()}var v;function y(){return(y=e((()=>{v=`openapi: 3.1.0
info:
  title: Orders
  version: 1.0.0
paths:
  /orders:
    post:
      requestBody:
        content:
          application/json:
            schema:
              type: object
              properties:
                value:
                  const: fixed
      responses:
        "200":
          description: ""
`})))()}var b;function x(){return(x=e((()=>{b=`openapi: 3.1.0
info:
  title: Orders
  version: 1.0.0
paths:
  /orders:
    post:
      requestBody:
        content:
          application/json:
            schema:
              type: object
              properties:
                value:
                  enum:
                    - new
                    - paid
                    - 1
      responses:
        "200":
          description: ""
`})))()}var S;function C(){return(C=e((()=>{S=`openapi: 3.1.0
info:
  title: Orders
  version: 1.0.0
paths:
  /orders:
    post:
      requestBody:
        content:
          application/json:
            schema:
              type: object
              properties:
                value: true
      responses:
        "200":
          description: ""
`})))()}var w;function T(){return(T=e((()=>{w=`openapi: 3.1.0
info:
  title: Orders
  version: 1.0.0
paths:
  /orders:
    post:
      requestBody:
        content:
          application/json:
            schema:
              type: object
              properties:
                value:
                  type: string
                  contentMediaType: image/png
                  contentEncoding: base64
      responses:
        "200":
          description: ""
`})))()}var E,D,O,k,A,j,M,N,P,F,I,L;function R(){return(R=e((()=>{d(),p(),h(),_(),y(),x(),C(),T(),t(),o(),s(),E=c(Object.assign({"../../../../samples/openapi/oas31/fields/schemas/01-nullable-type-array-parameter/sample.yaml":u,"../../../../samples/openapi/oas31/fields/schemas/02-nullable-type-array-body/sample.yaml":f,"../../../../samples/openapi/oas31/fields/schemas/03-numeric-exclusive-bounds/sample.yaml":m,"../../../../samples/openapi/oas31/fields/schemas/04-examples-array/sample.yaml":g,"../../../../samples/openapi/oas31/fields/schemas/05-const/sample.yaml":v,"../../../../samples/openapi/oas31/fields/schemas/06-enum-without-type/sample.yaml":b,"../../../../samples/openapi/oas31/fields/schemas/07-boolean-schema/sample.yaml":S,"../../../../samples/openapi/oas31/fields/schemas/08-content-media-type-encoding/sample.yaml":w})),D={title:`OpenAPI Operation Suite/OAS 3.1/Fields/Schemas`,component:l,argTypes:i,args:n,play:r},O=(e,t,n,r)=>({name:e,args:{caseId:e,sampleYaml:a(E,e),path:t,method:n,switchTo:r}}),k=O(`01-nullable-type-array-parameter`,`/orders`,`post`,[]),A=O(`02-nullable-type-array-body`,`/orders`,`post`,[]),j=O(`03-numeric-exclusive-bounds`,`/orders`,`post`,[]),M=O(`04-examples-array`,`/orders`,`post`,[]),N=O(`05-const`,`/orders`,`post`,[]),P=O(`06-enum-without-type`,`/orders`,`post`,[]),F=O(`07-boolean-schema`,`/orders`,`post`,[]),I=O(`08-content-media-type-encoding`,`/orders`,`post`,[]),k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`createCaseStory("01-nullable-type-array-parameter", "/orders", "post", [])`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`createCaseStory("02-nullable-type-array-body", "/orders", "post", [])`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`createCaseStory("03-numeric-exclusive-bounds", "/orders", "post", [])`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`createCaseStory("04-examples-array", "/orders", "post", [])`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`createCaseStory("05-const", "/orders", "post", [])`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`createCaseStory("06-enum-without-type", "/orders", "post", [])`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`createCaseStory("07-boolean-schema", "/orders", "post", [])`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`createCaseStory("08-content-media-type-encoding", "/orders", "post", [])`,...I.parameters?.docs?.source}}},L=[`Case_01_nullable_type_array_parameter`,`Case_02_nullable_type_array_body`,`Case_03_numeric_exclusive_bounds`,`Case_04_examples_array`,`Case_05_const`,`Case_06_enum_without_type`,`Case_07_boolean_schema`,`Case_08_content_media_type_encoding`]})))()}R();export{k as Case_01_nullable_type_array_parameter,A as Case_02_nullable_type_array_body,j as Case_03_numeric_exclusive_bounds,M as Case_04_examples_array,N as Case_05_const,P as Case_06_enum_without_type,F as Case_07_boolean_schema,I as Case_08_content_media_type_encoding,L as __namedExportsOrder,D as default};