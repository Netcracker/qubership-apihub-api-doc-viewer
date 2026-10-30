import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{a as t,c as n,i as r,l as ee}from"./openapi-story-args-DobFVmKK.js";import{a as te,i as ne,n as re,r as ie,t as ae}from"./OpenApiSampleStory-D_l0tIDB.js";var i;function a(){return(a=e((()=>{i=`openapi: 3.0.3
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
`})))()}var o;function s(){return(s=e((()=>{o=`openapi: 3.0.3
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
`})))()}var c;function l(){return(l=e((()=>{c=`openapi: 3.0.3
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
`})))()}var u;function d(){return(d=e((()=>{u=`openapi: 3.0.3
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
`})))()}var oe;function se(){return(se=e((()=>{oe=`openapi: 3.0.3
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
`})))()}var ce;function f(){return(f=e((()=>{ce=`openapi: 3.0.3
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
`})))()}var p;function m(){return(m=e((()=>{p=`openapi: 3.0.3
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
`})))()}var h;function g(){return(g=e((()=>{h=`openapi: 3.0.3
info:
  title: Orders
  version: 1.0.0
paths:
  /orders:
    post:
      security:
        - stub_key: []
        - oauth2-implicit: []
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
`})))()}var _;function v(){return(v=e((()=>{_=`openapi: 3.0.3
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
`})))()}var y;function b(){return(b=e((()=>{y=`openapi: 3.0.3
info:
  title: Orders
  version: 1.0.0
paths:
  /orders:
    post:
      security:
        - stub_key: []
        - oauth2-password: []
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
`})))()}var x;function S(){return(S=e((()=>{x=`openapi: 3.0.3
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
`})))()}var C;function w(){return(w=e((()=>{C=`openapi: 3.0.3
info:
  title: Orders
  version: 1.0.0
paths:
  /orders:
    post:
      security:
        - stub_key: []
        - oauth2-client-credentials: []
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
`})))()}var T;function E(){return(E=e((()=>{T=`openapi: 3.0.3
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
`})))()}var D;function O(){return(O=e((()=>{D=`openapi: 3.0.3
info:
  title: Orders
  version: 1.0.0
paths:
  /orders:
    post:
      security:
        - stub_key: []
        - oauth2-authorization-code: []
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
`})))()}var k;function A(){return(A=e((()=>{k=`openapi: 3.0.3
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
`})))()}var le;function j(){return(j=e((()=>{le=`openapi: 3.0.3
info:
  title: Orders
  version: 1.0.0
paths:
  /orders:
    post:
      security:
        - stub_key: []
        - openid-connect: []
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
`})))()}var M;function N(){return(N=e((()=>{M=`openapi: 3.0.3
info:
  title: Orders
  version: 1.0.0
paths:
  /orders:
    post:
      security:
        - stub_key: []
        - scheme-description: []
      responses:
        "200":
          description: ""
components:
  securitySchemes:
    stub_key:
      type: apiKey
      in: header
      name: X-Stub-Key
    scheme-description:
      type: apiKey
      in: header
      name: X-API-Key
      description: |-
        Key issued in the **developer portal**.

        - Send it with every request.
        - Rotate it every 90 days.
`})))()}var P,F,I,L,R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q,$,ue;function de(){return(de=e((()=>{a(),s(),l(),d(),se(),f(),m(),g(),v(),b(),S(),w(),E(),O(),A(),j(),N(),n(),ne(),re(),P=ie(Object.assign({"../../../../samples/openapi/oas30/fields/security/01-api-key-header/sample.yaml":i,"../../../../samples/openapi/oas30/fields/security/02-api-key-query/sample.yaml":o,"../../../../samples/openapi/oas30/fields/security/03-api-key-cookie/sample.yaml":c,"../../../../samples/openapi/oas30/fields/security/04-http-basic/sample.yaml":u,"../../../../samples/openapi/oas30/fields/security/05-http-bearer/sample.yaml":oe,"../../../../samples/openapi/oas30/fields/security/06-http-bearer-format/sample.yaml":ce,"../../../../samples/openapi/oas30/fields/security/07-oauth2-implicit-required-scope/sample.yaml":p,"../../../../samples/openapi/oas30/fields/security/08-oauth2-implicit-optional-scope/sample.yaml":h,"../../../../samples/openapi/oas30/fields/security/09-oauth2-password-required-scope/sample.yaml":_,"../../../../samples/openapi/oas30/fields/security/10-oauth2-password-optional-scope/sample.yaml":y,"../../../../samples/openapi/oas30/fields/security/11-oauth2-client-credentials-required-scope/sample.yaml":x,"../../../../samples/openapi/oas30/fields/security/12-oauth2-client-credentials-optional-scope/sample.yaml":C,"../../../../samples/openapi/oas30/fields/security/13-oauth2-authorization-code-required-scope/sample.yaml":T,"../../../../samples/openapi/oas30/fields/security/14-oauth2-authorization-code-optional-scope/sample.yaml":D,"../../../../samples/openapi/oas30/fields/security/15-openid-connect-required-scope/sample.yaml":k,"../../../../samples/openapi/oas30/fields/security/16-openid-connect-no-required-scopes/sample.yaml":le,"../../../../samples/openapi/oas30/fields/security/17-scheme-description/sample.yaml":M})),F={title:`OpenAPI Operation Suite/OAS 3.0/Fields/Security`,component:ae,argTypes:r,args:t,play:ee},I=(e,t,n,r)=>({name:e,args:{caseId:e,sampleYaml:te(P,e),path:t,method:n,switchTo:r}}),L=I(`01-api-key-header`,`/orders`,`post`,[`security-alternative-1`]),R=I(`02-api-key-query`,`/orders`,`post`,[`security-alternative-1`]),z=I(`03-api-key-cookie`,`/orders`,`post`,[`security-alternative-1`]),B=I(`04-http-basic`,`/orders`,`post`,[`security-alternative-1`]),V=I(`05-http-bearer`,`/orders`,`post`,[`security-alternative-1`]),H=I(`06-http-bearer-format`,`/orders`,`post`,[`security-alternative-1`]),U=I(`07-oauth2-implicit-required-scope`,`/orders`,`post`,[`security-alternative-1`]),W=I(`08-oauth2-implicit-optional-scope`,`/orders`,`post`,[`security-alternative-1`]),G=I(`09-oauth2-password-required-scope`,`/orders`,`post`,[`security-alternative-1`]),K=I(`10-oauth2-password-optional-scope`,`/orders`,`post`,[`security-alternative-1`]),q=I(`11-oauth2-client-credentials-required-scope`,`/orders`,`post`,[`security-alternative-1`]),J=I(`12-oauth2-client-credentials-optional-scope`,`/orders`,`post`,[`security-alternative-1`]),Y=I(`13-oauth2-authorization-code-required-scope`,`/orders`,`post`,[`security-alternative-1`]),X=I(`14-oauth2-authorization-code-optional-scope`,`/orders`,`post`,[`security-alternative-1`]),Z=I(`15-openid-connect-required-scope`,`/orders`,`post`,[`security-alternative-1`]),Q=I(`16-openid-connect-no-required-scopes`,`/orders`,`post`,[`security-alternative-1`]),$=I(`17-scheme-description`,`/orders`,`post`,[`security-alternative-1`]),L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`createCaseStory("01-api-key-header", "/orders", "post", ["security-alternative-1"])`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`createCaseStory("02-api-key-query", "/orders", "post", ["security-alternative-1"])`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`createCaseStory("03-api-key-cookie", "/orders", "post", ["security-alternative-1"])`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`createCaseStory("04-http-basic", "/orders", "post", ["security-alternative-1"])`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`createCaseStory("05-http-bearer", "/orders", "post", ["security-alternative-1"])`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`createCaseStory("06-http-bearer-format", "/orders", "post", ["security-alternative-1"])`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`createCaseStory("07-oauth2-implicit-required-scope", "/orders", "post", ["security-alternative-1"])`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`createCaseStory("08-oauth2-implicit-optional-scope", "/orders", "post", ["security-alternative-1"])`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`createCaseStory("09-oauth2-password-required-scope", "/orders", "post", ["security-alternative-1"])`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`createCaseStory("10-oauth2-password-optional-scope", "/orders", "post", ["security-alternative-1"])`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`createCaseStory("11-oauth2-client-credentials-required-scope", "/orders", "post", ["security-alternative-1"])`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`createCaseStory("12-oauth2-client-credentials-optional-scope", "/orders", "post", ["security-alternative-1"])`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`createCaseStory("13-oauth2-authorization-code-required-scope", "/orders", "post", ["security-alternative-1"])`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`createCaseStory("14-oauth2-authorization-code-optional-scope", "/orders", "post", ["security-alternative-1"])`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`createCaseStory("15-openid-connect-required-scope", "/orders", "post", ["security-alternative-1"])`,...Z.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`createCaseStory("16-openid-connect-no-required-scopes", "/orders", "post", ["security-alternative-1"])`,...Q.parameters?.docs?.source}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`createCaseStory("17-scheme-description", "/orders", "post", ["security-alternative-1"])`,...$.parameters?.docs?.source}}},ue=[`Case_01_api_key_header`,`Case_02_api_key_query`,`Case_03_api_key_cookie`,`Case_04_http_basic`,`Case_05_http_bearer`,`Case_06_http_bearer_format`,`Case_07_oauth2_implicit_required_scope`,`Case_08_oauth2_implicit_optional_scope`,`Case_09_oauth2_password_required_scope`,`Case_10_oauth2_password_optional_scope`,`Case_11_oauth2_client_credentials_required_scope`,`Case_12_oauth2_client_credentials_optional_scope`,`Case_13_oauth2_authorization_code_required_scope`,`Case_14_oauth2_authorization_code_optional_scope`,`Case_15_openid_connect_required_scope`,`Case_16_openid_connect_no_required_scopes`,`Case_17_scheme_description`]})))()}de();export{L as Case_01_api_key_header,R as Case_02_api_key_query,z as Case_03_api_key_cookie,B as Case_04_http_basic,V as Case_05_http_bearer,H as Case_06_http_bearer_format,U as Case_07_oauth2_implicit_required_scope,W as Case_08_oauth2_implicit_optional_scope,G as Case_09_oauth2_password_required_scope,K as Case_10_oauth2_password_optional_scope,q as Case_11_oauth2_client_credentials_required_scope,J as Case_12_oauth2_client_credentials_optional_scope,Y as Case_13_oauth2_authorization_code_required_scope,X as Case_14_oauth2_authorization_code_optional_scope,Z as Case_15_openid_connect_required_scope,Q as Case_16_openid_connect_no_required_scopes,$ as Case_17_scheme_description,ue as __namedExportsOrder,F as default};