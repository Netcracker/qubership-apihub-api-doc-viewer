import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{c as t,n as ee,t as te}from"./openapi-story-args-BtscIYO6.js";import{i as ne,r as re}from"./sample-cases-DDoAHGgD.js";import{n as ie,t as ae}from"./diffs-samples-cases-Bp0vvMWA.js";import{n,t as r}from"./OpenApiDiffSampleStory-DBvlbuwF.js";var i;function a(){return(a=e((()=>{i=`openapi: 3.0.3
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
`})))()}var o;function s(){return(s=e((()=>{o=`openapi: 3.0.3
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
`})))()}var c;function l(){return(l=e((()=>{c=`openapi: 3.0.3
info:
  title: Orders
  version: 1.0.0
paths:
  /orders:
    post:
      responses:
        "200":
          description: Order created
`})))()}var u;function d(){return(d=e((()=>{u=`openapi: 3.0.3
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
`})))()}var f;function p(){return(p=e((()=>{f=`openapi: 3.0.3
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
`})))()}var m;function h(){return(h=e((()=>{m=`openapi: 3.0.3
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
`})))()}var g;function _(){return(_=e((()=>{g=`openapi: 3.0.3
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
      requestBody:
        content:
          application/json:
            schema:
              type: object
              properties:
                id:
                  type: string
                  description: Order identifier
`})))()}var b;function x(){return(x=e((()=>{b=`openapi: 3.0.3
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
`})))()}var S;function C(){return(C=e((()=>{S=`openapi: 3.0.3
info:
  title: Orders
  version: 1.0.0
paths:
  /orders:
    post:
      responses:
        "200":
          description: ""
      description: Creates an order for the current customer.
`})))()}var w;function T(){return(T=e((()=>{w=`openapi: 3.0.3
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
        description: Order to create, without an id
        content:
          application/json:
            schema:
              type: string
`})))()}var E;function D(){return(D=e((()=>{E=`openapi: 3.0.3
info:
  title: Orders
  version: 1.0.0
paths:
  /orders:
    post:
      responses:
        "200":
          description: Order created and queued
`})))()}var O;function k(){return(k=e((()=>{O=`openapi: 3.0.3
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
      description: Key issued by the partner portal.
`})))()}var A;function j(){return(j=e((()=>{A=`openapi: 3.0.3
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
            orders:read: Read all orders
`})))()}var M;function N(){return(N=e((()=>{M=`openapi: 3.0.3
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
          description: Maximum number of returned items
          schema:
            type: integer
`})))()}var P;function F(){return(F=e((()=>{P=`openapi: 3.0.3
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
            application/xml:
              schema:
                type: object
`})))()}var I;function L(){return(L=e((()=>{I=`openapi: 3.0.3
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
                  description: Client-side order identifier
`})))()}var R;function z(){return(z=e((()=>{R=`openapi: 3.0.3
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
              description: Requests left in the current window
              schema:
                type: integer
`})))()}var B,V,H,U,W,G,K,q,J,Y,X,Z,Q;function $(){return($=e((()=>{a(),s(),l(),d(),p(),h(),_(),y(),x(),C(),T(),D(),k(),j(),N(),F(),L(),z(),t(),n(),ie(),ne(),B=re(ae(Object.assign({"../../../../samples/openapi-diffs-display-mode-simple/01-operation-description/before.yaml":i,"../../../../samples/openapi-diffs-display-mode-simple/02-request-body-description/before.yaml":o,"../../../../samples/openapi-diffs-display-mode-simple/03-response-description/before.yaml":c,"../../../../samples/openapi-diffs-display-mode-simple/04-security-scheme-description/before.yaml":u,"../../../../samples/openapi-diffs-display-mode-simple/05-security-scope-description/before.yaml":f,"../../../../samples/openapi-diffs-display-mode-simple/06-parameter-description/before.yaml":m,"../../../../samples/openapi-diffs-display-mode-simple/07-parameter-media-type/before.yaml":g,"../../../../samples/openapi-diffs-display-mode-simple/08-body-schema-description/before.yaml":v,"../../../../samples/openapi-diffs-display-mode-simple/09-response-header-description/before.yaml":b}),Object.assign({"../../../../samples/openapi-diffs-display-mode-simple/01-operation-description/after.yaml":S,"../../../../samples/openapi-diffs-display-mode-simple/02-request-body-description/after.yaml":w,"../../../../samples/openapi-diffs-display-mode-simple/03-response-description/after.yaml":E,"../../../../samples/openapi-diffs-display-mode-simple/04-security-scheme-description/after.yaml":O,"../../../../samples/openapi-diffs-display-mode-simple/05-security-scope-description/after.yaml":A,"../../../../samples/openapi-diffs-display-mode-simple/06-parameter-description/after.yaml":M,"../../../../samples/openapi-diffs-display-mode-simple/07-parameter-media-type/after.yaml":P,"../../../../samples/openapi-diffs-display-mode-simple/08-body-schema-description/after.yaml":I,"../../../../samples/openapi-diffs-display-mode-simple/09-response-header-description/after.yaml":R}))),V={id:`openapi-operation-diffs-suite-display-mode-simple`,title:`OpenAPI Operation Diffs Suite (Display Mode = simple)`,component:r,argTypes:te,args:ee},H=e=>{let t=B[e];if(!t)throw Error(`Sample case not found: ${e}`);return{name:e,args:{caseId:e,beforeYaml:t.beforeYaml,afterYaml:t.afterYaml}}},U=H(`01-operation-description`),W=H(`02-request-body-description`),G=H(`03-response-description`),K=H(`04-security-scheme-description`),q=H(`05-security-scope-description`),J=H(`06-parameter-description`),Y=H(`07-parameter-media-type`),X=H(`08-body-schema-description`),Z=H(`09-response-header-description`),U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`createCaseStory("01-operation-description")`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`createCaseStory("02-request-body-description")`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`createCaseStory("03-response-description")`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`createCaseStory("04-security-scheme-description")`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`createCaseStory("05-security-scope-description")`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`createCaseStory("06-parameter-description")`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`createCaseStory("07-parameter-media-type")`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`createCaseStory("08-body-schema-description")`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`createCaseStory("09-response-header-description")`,...Z.parameters?.docs?.source}}},Q=[`Case_01_operation_description`,`Case_02_request_body_description`,`Case_03_response_description`,`Case_04_security_scheme_description`,`Case_05_security_scope_description`,`Case_06_parameter_description`,`Case_07_parameter_media_type`,`Case_08_body_schema_description`,`Case_09_response_header_description`]})))()}$();export{U as Case_01_operation_description,W as Case_02_request_body_description,G as Case_03_response_description,K as Case_04_security_scheme_description,q as Case_05_security_scope_description,J as Case_06_parameter_description,Y as Case_07_parameter_media_type,X as Case_08_body_schema_description,Z as Case_09_response_header_description,Q as __namedExportsOrder,V as default};