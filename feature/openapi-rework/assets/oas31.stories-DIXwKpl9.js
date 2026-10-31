import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{c as t,n,t as r}from"./openapi-story-args-BABlzwB4.js";import{i,r as a}from"./sample-cases-DDoAHGgD.js";import{n as o,t as s}from"./diffs-samples-cases-Bp0vvMWA.js";import{n as c,t as l}from"./OpenApiDiffSampleStory-BJEvaDa9.js";var u;function d(){return(d=e((()=>{u=`openapi: 3.1.0
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
                note:
                  type: string
`})))()}var f;function p(){return(p=e((()=>{f=`openapi: 3.1.0
info:
  title: Orders
  version: 1.0.0
paths:
  /orders:
    post:
      security:
        - api_key: []
components:
  securitySchemes:
    api_key:
      type: apiKey
      in: header
      name: X-API-Key
    mtls:
      type: mutualTLS
`})))()}var m;function h(){return(h=e((()=>{m=`openapi: 3.1.0
info:
  title: Orders
  version: 1.0.0
paths:
  /orders:
    post:
      security:
        - api_key: []
        - mtls: []
components:
  securitySchemes:
    api_key:
      type: apiKey
      in: header
      name: X-API-Key
    mtls:
      type: mutualTLS
`})))()}var g;function _(){return(_=e((()=>{g=`openapi: 3.1.0
info:
  title: Orders
  version: 1.0.0
paths:
  /orders:
    post:
      security:
        - api_key:
            - admin
components:
  securitySchemes:
    api_key:
      type: apiKey
      in: header
      name: X-API-Key
`})))()}var v;function y(){return(y=e((()=>{v=`openapi: 3.1.0
info:
  title: Orders
  version: 1.0.0
paths:
  /orders:
    post:
      security:
        - api_key:
            - admin
components:
  securitySchemes:
    api_key:
      type: apiKey
      in: header
      name: X-API-Key
`})))()}var b;function x(){return(x=e((()=>{b=`openapi: 3.1.0
info:
  title: Orders
  version: 1.0.0
paths:
  /orders:
    post: {}
`})))()}var S;function C(){return(C=e((()=>{S=`openapi: 3.1.0
info:
  title: Orders
  version: 1.0.0
paths:
  /orders:
    post:
      responses:
        "200":
          description: Updated order.
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
                note:
                  type:
                    - string
                    - "null"
`})))()}var E;function D(){return(D=e((()=>{E=`openapi: 3.1.0
info:
  title: Orders
  version: 1.0.0
paths:
  /orders:
    post:
      security:
        - api_key: []
        - mtls: []
components:
  securitySchemes:
    api_key:
      type: apiKey
      in: header
      name: X-API-Key
    mtls:
      type: mutualTLS
`})))()}var O;function k(){return(k=e((()=>{O=`openapi: 3.1.0
info:
  title: Orders
  version: 1.0.0
paths:
  /orders:
    post:
      security:
        - api_key: []
components:
  securitySchemes:
    api_key:
      type: apiKey
      in: header
      name: X-API-Key
    mtls:
      type: mutualTLS
`})))()}var A;function j(){return(j=e((()=>{A=`openapi: 3.1.0
info:
  title: Orders
  version: 1.0.0
paths:
  /orders:
    post:
      security:
        - api_key:
            - admin
components:
  securitySchemes:
    api_key:
      type: apiKey
      in: header
      name: X-API-Key
`})))()}var M;function N(){return(N=e((()=>{M=`openapi: 3.1.0
info:
  title: Orders
  version: 1.0.0
paths:
  /orders:
    post:
      security:
        - api_key:
            - admin
components:
  securitySchemes:
    api_key:
      type: apiKey
      in: header
      name: X-API-Key
`})))()}var P;function F(){return(F=e((()=>{P=`openapi: 3.1.0
info:
  title: Orders
  version: 1.0.0
paths:
  /orders:
    post:
      responses:
        "200":
          description: Updated order.
`})))()}var I;function L(){return(L=e((()=>{I=`openapi: 3.1.0
info:
  title: Orders
  version: 1.0.0
paths:
  /orders:
    post: {}
`})))()}var R,z,B,V,H,U,W,G,K,q,J;function Y(){return(Y=e((()=>{d(),p(),h(),_(),y(),x(),C(),T(),D(),k(),j(),N(),F(),L(),o(),i(),t(),c(),R=a(s(Object.assign({"../../../../samples/openapi-diffs/oas31/01-nullable-via-type-array/before.yaml":u,"../../../../samples/openapi-diffs/oas31/02-mutual-tls-alternative-added/before.yaml":f,"../../../../samples/openapi-diffs/oas31/03-mutual-tls-alternative-removed/before.yaml":m,"../../../../samples/openapi-diffs/oas31/04-role-scopes-added/before.yaml":g,"../../../../samples/openapi-diffs/oas31/05-role-scopes-removed/before.yaml":v,"../../../../samples/openapi-diffs/oas31/06-responses-added/before.yaml":b,"../../../../samples/openapi-diffs/oas31/07-responses-removed/before.yaml":S}),Object.assign({"../../../../samples/openapi-diffs/oas31/01-nullable-via-type-array/after.yaml":w,"../../../../samples/openapi-diffs/oas31/02-mutual-tls-alternative-added/after.yaml":E,"../../../../samples/openapi-diffs/oas31/03-mutual-tls-alternative-removed/after.yaml":O,"../../../../samples/openapi-diffs/oas31/04-role-scopes-added/after.yaml":A,"../../../../samples/openapi-diffs/oas31/05-role-scopes-removed/after.yaml":M,"../../../../samples/openapi-diffs/oas31/06-responses-added/after.yaml":P,"../../../../samples/openapi-diffs/oas31/07-responses-removed/after.yaml":I}))),z={title:`OpenAPI Operation Diffs Suite/OAS 3.1`,component:l,argTypes:r,args:n},B=e=>{let t=R[e];if(!t)throw Error(`Sample case not found: ${e}`);return{name:e,args:{caseId:e,beforeYaml:t.beforeYaml,afterYaml:t.afterYaml}}},V=B(`01-nullable-via-type-array`),H=B(`02-mutual-tls-alternative-added`),U=B(`03-mutual-tls-alternative-removed`),W=B(`04-role-scopes-added`),G=B(`05-role-scopes-removed`),K=B(`06-responses-added`),q=B(`07-responses-removed`),V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`createCaseStory("01-nullable-via-type-array")`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`createCaseStory("02-mutual-tls-alternative-added")`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`createCaseStory("03-mutual-tls-alternative-removed")`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`createCaseStory("04-role-scopes-added")`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`createCaseStory("05-role-scopes-removed")`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`createCaseStory("06-responses-added")`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`createCaseStory("07-responses-removed")`,...q.parameters?.docs?.source}}},J=[`Case_01_nullable_via_type_array`,`Case_02_mutual_tls_alternative_added`,`Case_03_mutual_tls_alternative_removed`,`Case_04_role_scopes_added`,`Case_05_role_scopes_removed`,`Case_06_responses_added`,`Case_07_responses_removed`]})))()}Y();export{V as Case_01_nullable_via_type_array,H as Case_02_mutual_tls_alternative_added,U as Case_03_mutual_tls_alternative_removed,W as Case_04_role_scopes_added,G as Case_05_role_scopes_removed,K as Case_06_responses_added,q as Case_07_responses_removed,J as __namedExportsOrder,z as default};