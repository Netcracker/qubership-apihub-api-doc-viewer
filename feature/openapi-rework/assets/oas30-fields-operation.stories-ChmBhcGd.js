import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{a as t,i as n,o as r,s as i}from"./openapi-story-args-BZjvIg4N.js";import{a,i as o,n as s,r as c,t as l}from"./OpenApiSampleStory-BV1ScTC8.js";var u;function d(){return(d=e((()=>{u=`openapi: 3.0.3
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
`})))()}var f;function p(){return(p=e((()=>{f=`openapi: 3.0.3
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
`})))()}var m;function h(){return(h=e((()=>{m=`openapi: 3.0.3
info:
  title: Orders
  version: 1.0.0
paths:
  /orders:
    post:
      description: |-
        Replaces the order.

        - Validates the **status** transition.
        - Returns the stored order.
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
      externalDocs:
        url: https://docs.example.com/orders
        description: Orders guide
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
      x-rate-limit: 100
      x-audience:
        visibility: public
        owners:
          - orders-team
      responses:
        "200":
          description: ""
`})))()}var b,x,S,C,w,T,E,D,O;function k(){return(k=e((()=>{d(),p(),h(),_(),y(),r(),o(),s(),b=c(Object.assign({"../../../../samples/openapi/oas30/fields/operation/01-summary/sample.yaml":u,"../../../../samples/openapi/oas30/fields/operation/02-operation-id/sample.yaml":f,"../../../../samples/openapi/oas30/fields/operation/03-description/sample.yaml":m,"../../../../samples/openapi/oas30/fields/operation/04-external-docs/sample.yaml":g,"../../../../samples/openapi/oas30/fields/operation/05-extensions/sample.yaml":v})),x={title:`OpenAPI Operation Suite/OAS 3.0/Fields/Operation`,component:l,argTypes:n,args:t,play:i},S=(e,t,n,r)=>({name:e,args:{caseId:e,sampleYaml:a(b,e),path:t,method:n,switchTo:r}}),C=S(`01-summary`,`/orders`,`post`,[]),w=S(`02-operation-id`,`/orders`,`post`,[]),T=S(`03-description`,`/orders`,`post`,[]),E=S(`04-external-docs`,`/orders`,`post`,[]),D=S(`05-extensions`,`/orders`,`post`,[]),C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`createCaseStory("01-summary", "/orders", "post", [])`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`createCaseStory("02-operation-id", "/orders", "post", [])`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`createCaseStory("03-description", "/orders", "post", [])`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`createCaseStory("04-external-docs", "/orders", "post", [])`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`createCaseStory("05-extensions", "/orders", "post", [])`,...D.parameters?.docs?.source}}},O=[`Case_01_summary`,`Case_02_operation_id`,`Case_03_description`,`Case_04_external_docs`,`Case_05_extensions`]})))()}k();export{C as Case_01_summary,w as Case_02_operation_id,T as Case_03_description,E as Case_04_external_docs,D as Case_05_extensions,O as __namedExportsOrder,x as default};