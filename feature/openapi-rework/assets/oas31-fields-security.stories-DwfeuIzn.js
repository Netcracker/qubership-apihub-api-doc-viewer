import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{a as t,n,o as r,t as i}from"./openapi-story-args-COGjx5pK.js";import{a,i as o,n as s,r as c,t as l}from"./OpenApiSampleStory-Ci1hcvGM.js";var u;function d(){return(d=e((()=>{u=`openapi: 3.1.0
info:
  title: Orders
  version: 1.0.0
paths:
  /orders:
    post:
      security:
        - stub_key: []
        - mutual-tls: []
      responses:
        "200":
          description: ""
components:
  securitySchemes:
    stub_key:
      type: apiKey
      in: header
      name: X-Stub-Key
    mutual-tls:
      type: mutualTLS
`})))()}var f;function p(){return(p=e((()=>{f=`openapi: 3.1.0
info:
  title: Orders
  version: 1.0.0
paths:
  /orders:
    post:
      security:
        - api_key:
            - admin
            - auditor
      responses:
        "200":
          description: ""
components:
  securitySchemes:
    api_key:
      type: apiKey
      in: header
      name: X-API-Key
`})))()}var m;function h(){return(h=e((()=>{m=`openapi: 3.1.0
info:
  title: Orders
  version: 1.0.0
paths:
  /orders:
    post:
      security:
        - bearer:
            - admin
      responses:
        "200":
          description: ""
components:
  securitySchemes:
    bearer:
      type: http
      scheme: bearer
`})))()}var g,_,v,y,b,x,S;function C(){return(C=e((()=>{d(),p(),h(),t(),o(),s(),g=c(Object.assign({"../../../../samples/openapi/oas31/fields/security/01-mutual-tls/sample.yaml":u,"../../../../samples/openapi/oas31/fields/security/02-roles-on-api-key/sample.yaml":f,"../../../../samples/openapi/oas31/fields/security/03-roles-on-http-bearer/sample.yaml":m})),_={title:`OpenAPI Operation Suite/OAS 3.1/Fields/Security`,component:l,argTypes:i,args:n,play:r},v=(e,t,n,r)=>({name:e,args:{caseId:e,sampleYaml:a(g,e),path:t,method:n,switchTo:r}}),y=v(`01-mutual-tls`,`/orders`,`post`,[`security-alternative-1`]),b=v(`02-roles-on-api-key`,`/orders`,`post`,[]),x=v(`03-roles-on-http-bearer`,`/orders`,`post`,[]),y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`createCaseStory("01-mutual-tls", "/orders", "post", ["security-alternative-1"])`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`createCaseStory("02-roles-on-api-key", "/orders", "post", [])`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`createCaseStory("03-roles-on-http-bearer", "/orders", "post", [])`,...x.parameters?.docs?.source}}},S=[`Case_01_mutual_tls`,`Case_02_roles_on_api_key`,`Case_03_roles_on_http_bearer`]})))()}C();export{y as Case_01_mutual_tls,b as Case_02_roles_on_api_key,x as Case_03_roles_on_http_bearer,S as __namedExportsOrder,_ as default};