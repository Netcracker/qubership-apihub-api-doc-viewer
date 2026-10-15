import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{a as t,n,o as r,t as i}from"./openapi-story-args-CszyPRIM.js";import{a,i as o,n as s,r as c,t as l}from"./OpenApiSampleStory-B5ZAgCAF.js";var u;function d(){return(d=e((()=>{u=`openapi: 3.0.3
info:
  title: Orders
  version: 1.0.0
paths:
  /orders:
    post:
      security:
        - stub_key: []
        - api-key-header: []
      responses:
        "200":
          description: ""
components:
  securitySchemes:
    stub_key:
      type: apiKey
      in: header
      name: X-Stub-Key
    api-key-header:
      type: apiKey
      in: header
      name: X-API-Key
`})))()}var f;function p(){return(p=e((()=>{f=`openapi: 3.0.3
info:
  title: Orders
  version: 1.0.0
paths:
  /orders:
    post:
      security:
        - stub_key: []
        - api-key-query: []
      responses:
        "200":
          description: ""
components:
  securitySchemes:
    stub_key:
      type: apiKey
      in: header
      name: X-Stub-Key
    api-key-query:
      type: apiKey
      in: query
      name: api_key
`})))()}var m;function h(){return(h=e((()=>{m=`openapi: 3.0.3
info:
  title: Orders
  version: 1.0.0
paths:
  /orders:
    post:
      security:
        - stub_key: []
        - api-key-cookie: []
      responses:
        "200":
          description: ""
components:
  securitySchemes:
    stub_key:
      type: apiKey
      in: header
      name: X-Stub-Key
    api-key-cookie:
      type: apiKey
      in: cookie
      name: api_key
`})))()}var g;function _(){return(_=e((()=>{g=`openapi: 3.0.3
info:
  title: Orders
  version: 1.0.0
paths:
  /orders:
    post:
      security:
        - stub_key: []
        - http-basic: []
      responses:
        "200":
          description: ""
components:
  securitySchemes:
    stub_key:
      type: apiKey
      in: header
      name: X-Stub-Key
    http-basic:
      type: http
      scheme: basic
`})))()}var v;function y(){return(y=e((()=>{v=`openapi: 3.0.3
info:
  title: Orders
  version: 1.0.0
paths:
  /orders:
    post:
      security:
        - stub_key: []
        - http-bearer: []
      responses:
        "200":
          description: ""
components:
  securitySchemes:
    stub_key:
      type: apiKey
      in: header
      name: X-Stub-Key
    http-bearer:
      type: http
      scheme: bearer
`})))()}var b;function x(){return(x=e((()=>{b=`openapi: 3.0.3
info:
  title: Orders
  version: 1.0.0
paths:
  /orders:
    post:
      security:
        - stub_key: []
        - http-bearer-format: []
      responses:
        "200":
          description: ""
components:
  securitySchemes:
    stub_key:
      type: apiKey
      in: header
      name: X-Stub-Key
    http-bearer-format:
      type: http
      scheme: bearer
      bearerFormat: JWT
`})))()}var S;function C(){return(C=e((()=>{S=`openapi: 3.0.3
info:
  title: Orders
  version: 1.0.0
paths:
  /orders:
    post:
      security:
        - stub_key: []
        - oauth2-implicit:
            - orders:read
      responses:
        "200":
          description: ""
components:
  securitySchemes:
    stub_key:
      type: apiKey
      in: header
      name: X-Stub-Key
    oauth2-implicit:
      type: oauth2
      flows:
        implicit:
          authorizationUrl: https://auth.example.com/authorize
          scopes:
            orders:read: Read orders
`})))()}var w;function T(){return(T=e((()=>{w=`openapi: 3.0.3
info:
  title: Orders
  version: 1.0.0
paths:
  /orders:
    post:
      security:
        - stub_key: []
        - oauth2-password:
            - orders:read
      responses:
        "200":
          description: ""
components:
  securitySchemes:
    stub_key:
      type: apiKey
      in: header
      name: X-Stub-Key
    oauth2-password:
      type: oauth2
      flows:
        password:
          tokenUrl: https://auth.example.com/token
          scopes:
            orders:read: Read orders
`})))()}var E;function D(){return(D=e((()=>{E=`openapi: 3.0.3
info:
  title: Orders
  version: 1.0.0
paths:
  /orders:
    post:
      security:
        - stub_key: []
        - oauth2-client-credentials:
            - orders:read
      responses:
        "200":
          description: ""
components:
  securitySchemes:
    stub_key:
      type: apiKey
      in: header
      name: X-Stub-Key
    oauth2-client-credentials:
      type: oauth2
      flows:
        clientCredentials:
          tokenUrl: https://auth.example.com/token
          scopes:
            orders:read: Read orders
`})))()}var O;function k(){return(k=e((()=>{O=`openapi: 3.0.3
info:
  title: Orders
  version: 1.0.0
paths:
  /orders:
    post:
      security:
        - stub_key: []
        - oauth2-authorization-code:
            - orders:read
      responses:
        "200":
          description: ""
components:
  securitySchemes:
    stub_key:
      type: apiKey
      in: header
      name: X-Stub-Key
    oauth2-authorization-code:
      type: oauth2
      flows:
        authorizationCode:
          authorizationUrl: https://auth.example.com/authorize
          tokenUrl: https://auth.example.com/token
          scopes:
            orders:read: Read orders
`})))()}var A;function j(){return(j=e((()=>{A=`openapi: 3.0.3
info:
  title: Orders
  version: 1.0.0
paths:
  /orders:
    post:
      security:
        - stub_key: []
        - openid-connect:
            - openid
      responses:
        "200":
          description: ""
components:
  securitySchemes:
    stub_key:
      type: apiKey
      in: header
      name: X-Stub-Key
    openid-connect:
      type: openIdConnect
      openIdConnectUrl: https://auth.example.com/.well-known/openid-configuration
`})))()}var M,N,P,F,I,L,R,z,B,V,H,U,W,G,K;function q(){return(q=e((()=>{d(),p(),h(),_(),y(),x(),C(),T(),D(),k(),j(),t(),o(),s(),M=c(Object.assign({"../../../../samples/openapi/oas30/fields/security/01-api-key-header/sample.yaml":u,"../../../../samples/openapi/oas30/fields/security/02-api-key-query/sample.yaml":f,"../../../../samples/openapi/oas30/fields/security/03-api-key-cookie/sample.yaml":m,"../../../../samples/openapi/oas30/fields/security/04-http-basic/sample.yaml":g,"../../../../samples/openapi/oas30/fields/security/05-http-bearer/sample.yaml":v,"../../../../samples/openapi/oas30/fields/security/06-http-bearer-format/sample.yaml":b,"../../../../samples/openapi/oas30/fields/security/07-oauth2-implicit/sample.yaml":S,"../../../../samples/openapi/oas30/fields/security/08-oauth2-password/sample.yaml":w,"../../../../samples/openapi/oas30/fields/security/09-oauth2-client-credentials/sample.yaml":E,"../../../../samples/openapi/oas30/fields/security/10-oauth2-authorization-code/sample.yaml":O,"../../../../samples/openapi/oas30/fields/security/11-openid-connect/sample.yaml":A})),N={title:`OpenAPI Operation Suite/OAS 3.0/Fields/Security`,component:l,argTypes:i,args:n,play:r},P=(e,t,n,r)=>({name:e,args:{caseId:e,sampleYaml:a(M,e),path:t,method:n,switchTo:r}}),F=P(`01-api-key-header`,`/orders`,`post`,[`security-alternative-1`]),I=P(`02-api-key-query`,`/orders`,`post`,[`security-alternative-1`]),L=P(`03-api-key-cookie`,`/orders`,`post`,[`security-alternative-1`]),R=P(`04-http-basic`,`/orders`,`post`,[`security-alternative-1`]),z=P(`05-http-bearer`,`/orders`,`post`,[`security-alternative-1`]),B=P(`06-http-bearer-format`,`/orders`,`post`,[`security-alternative-1`]),V=P(`07-oauth2-implicit`,`/orders`,`post`,[`security-alternative-1`]),H=P(`08-oauth2-password`,`/orders`,`post`,[`security-alternative-1`]),U=P(`09-oauth2-client-credentials`,`/orders`,`post`,[`security-alternative-1`]),W=P(`10-oauth2-authorization-code`,`/orders`,`post`,[`security-alternative-1`]),G=P(`11-openid-connect`,`/orders`,`post`,[`security-alternative-1`]),F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`createCaseStory("01-api-key-header", "/orders", "post", ["security-alternative-1"])`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`createCaseStory("02-api-key-query", "/orders", "post", ["security-alternative-1"])`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`createCaseStory("03-api-key-cookie", "/orders", "post", ["security-alternative-1"])`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`createCaseStory("04-http-basic", "/orders", "post", ["security-alternative-1"])`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`createCaseStory("05-http-bearer", "/orders", "post", ["security-alternative-1"])`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`createCaseStory("06-http-bearer-format", "/orders", "post", ["security-alternative-1"])`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`createCaseStory("07-oauth2-implicit", "/orders", "post", ["security-alternative-1"])`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`createCaseStory("08-oauth2-password", "/orders", "post", ["security-alternative-1"])`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`createCaseStory("09-oauth2-client-credentials", "/orders", "post", ["security-alternative-1"])`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`createCaseStory("10-oauth2-authorization-code", "/orders", "post", ["security-alternative-1"])`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`createCaseStory("11-openid-connect", "/orders", "post", ["security-alternative-1"])`,...G.parameters?.docs?.source}}},K=[`Case_01_api_key_header`,`Case_02_api_key_query`,`Case_03_api_key_cookie`,`Case_04_http_basic`,`Case_05_http_bearer`,`Case_06_http_bearer_format`,`Case_07_oauth2_implicit`,`Case_08_oauth2_password`,`Case_09_oauth2_client_credentials`,`Case_10_oauth2_authorization_code`,`Case_11_openid_connect`]})))()}q();export{F as Case_01_api_key_header,I as Case_02_api_key_query,L as Case_03_api_key_cookie,R as Case_04_http_basic,z as Case_05_http_bearer,B as Case_06_http_bearer_format,V as Case_07_oauth2_implicit,H as Case_08_oauth2_password,U as Case_09_oauth2_client_credentials,W as Case_10_oauth2_authorization_code,G as Case_11_openid_connect,K as __namedExportsOrder,N as default};