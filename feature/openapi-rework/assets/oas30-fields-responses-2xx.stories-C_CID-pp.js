import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{a as t,n,o as r,t as i}from"./openapi-story-args-BX7m-fBR.js";import{a,i as o,n as s,r as c,t as l}from"./OpenApiSampleStory-B3RAgmaW.js";var u;function d(){return(d=e((()=>{u=`openapi: 3.0.3
info:
  title: Orders
  version: 1.0.0
paths:
  /orders:
    post:
      responses:
        "200":
          description: ""
        default:
          description: ""
`})))()}var f;function p(){return(p=e((()=>{f=`openapi: 3.0.3
info:
  title: Orders
  version: 1.0.0
paths:
  /orders:
    post:
      responses:
        "200":
          description: The result of the request.
        default:
          description: ""
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
          headers:
            X-Request-Id:
              required: true
              schema:
                type: string
                format: uuid
            X-Rate-Limit-Remaining:
              schema:
                type: integer
            X-Legacy-Token:
              deprecated: true
              schema:
                type: string
            X-Filter:
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
        default:
          description: ""
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
        default:
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
            application/xml:
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
        default:
          description: ""
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
          content:
            application/json:
              schema:
                type: object
                deprecated: true
                properties:
                  id:
                    type: string
                  status:
                    type: string
                    enum:
                      - new
                      - paid
        default:
          description: ""
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
          content:
            application/json:
              schema:
                type: object
                deprecated: true
                properties:
                  id:
                    type: string
                  status:
                    type: string
                    enum:
                      - new
                      - paid
            application/xml:
              schema:
                type: object
                deprecated: true
                properties:
                  id:
                    type: string
                  status:
                    type: string
                    enum:
                      - new
                      - paid
        default:
          description: ""
`})))()}var w;function T(){return(T=e((()=>{w=`openapi: 3.0.3
info:
  title: Orders
  version: 1.0.0
paths:
  /orders:
    post:
      responses:
        "200":
          description: The result of the request.
          headers:
            X-Request-Id:
              required: true
              schema:
                type: string
                format: uuid
            X-Rate-Limit-Remaining:
              schema:
                type: integer
            X-Legacy-Token:
              deprecated: true
              schema:
                type: string
            X-Filter:
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
        default:
          description: ""
`})))()}var E;function D(){return(D=e((()=>{E=`openapi: 3.0.3
info:
  title: Orders
  version: 1.0.0
paths:
  /orders:
    post:
      responses:
        "200":
          description: The result of the request.
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
        default:
          description: ""
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
          headers:
            X-Request-Id:
              required: true
              schema:
                type: string
                format: uuid
            X-Rate-Limit-Remaining:
              schema:
                type: integer
            X-Legacy-Token:
              deprecated: true
              schema:
                type: string
            X-Filter:
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
        default:
          description: ""
`})))()}var A;function j(){return(j=e((()=>{A=`openapi: 3.0.3
info:
  title: Orders
  version: 1.0.0
paths:
  /orders:
    post:
      responses:
        "200":
          description: The result of the request.
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
                description: Order object.
        default:
          description: ""
`})))()}var M,N,P,F,I,L,R,z,B,V,H,U,W,G,K;function q(){return(q=e((()=>{d(),p(),h(),_(),y(),x(),C(),T(),D(),k(),j(),t(),o(),s(),M=c(Object.assign({"../../../../samples/openapi/oas30/fields/responses/2xx/01-status-only/sample.yaml":u,"../../../../samples/openapi/oas30/fields/responses/2xx/02-description-only/sample.yaml":f,"../../../../samples/openapi/oas30/fields/responses/2xx/03-headers-only/sample.yaml":m,"../../../../samples/openapi/oas30/fields/responses/2xx/04-body-1-media-type/sample.yaml":g,"../../../../samples/openapi/oas30/fields/responses/2xx/05-body-2-media-types/sample.yaml":v,"../../../../samples/openapi/oas30/fields/responses/2xx/06-body-deprecated-1-media-type/sample.yaml":b,"../../../../samples/openapi/oas30/fields/responses/2xx/07-body-deprecated-2-media-types/sample.yaml":S,"../../../../samples/openapi/oas30/fields/responses/2xx/08-description-and-headers/sample.yaml":w,"../../../../samples/openapi/oas30/fields/responses/2xx/09-description-and-body/sample.yaml":E,"../../../../samples/openapi/oas30/fields/responses/2xx/10-headers-and-body/sample.yaml":O,"../../../../samples/openapi/oas30/fields/responses/2xx/11-description-and-body-schema-description/sample.yaml":A})),N={title:`OpenAPI Operation Suite/OAS 3.0/Fields/Responses/2XX`,component:l,argTypes:i,args:n,play:r},P=(e,t,n,r)=>({name:e,args:{caseId:e,sampleYaml:a(M,e),path:t,method:n,switchTo:r}}),F=P(`01-status-only`,`/orders`,`post`,[`response-code-200`]),I=P(`02-description-only`,`/orders`,`post`,[`response-code-200`]),L=P(`03-headers-only`,`/orders`,`post`,[`response-code-200`]),R=P(`04-body-1-media-type`,`/orders`,`post`,[`response-code-200`]),z=P(`05-body-2-media-types`,`/orders`,`post`,[`response-code-200`,`response-media-type-application/xml`]),B=P(`06-body-deprecated-1-media-type`,`/orders`,`post`,[`response-code-200`]),V=P(`07-body-deprecated-2-media-types`,`/orders`,`post`,[`response-code-200`,`response-media-type-application/xml`]),H=P(`08-description-and-headers`,`/orders`,`post`,[`response-code-200`]),U=P(`09-description-and-body`,`/orders`,`post`,[`response-code-200`]),W=P(`10-headers-and-body`,`/orders`,`post`,[`response-code-200`]),G=P(`11-description-and-body-schema-description`,`/orders`,`post`,[`response-code-200`]),F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`createCaseStory("01-status-only", "/orders", "post", ["response-code-200"])`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`createCaseStory("02-description-only", "/orders", "post", ["response-code-200"])`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`createCaseStory("03-headers-only", "/orders", "post", ["response-code-200"])`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`createCaseStory("04-body-1-media-type", "/orders", "post", ["response-code-200"])`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`createCaseStory("05-body-2-media-types", "/orders", "post", ["response-code-200", "response-media-type-application/xml"])`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`createCaseStory("06-body-deprecated-1-media-type", "/orders", "post", ["response-code-200"])`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`createCaseStory("07-body-deprecated-2-media-types", "/orders", "post", ["response-code-200", "response-media-type-application/xml"])`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`createCaseStory("08-description-and-headers", "/orders", "post", ["response-code-200"])`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`createCaseStory("09-description-and-body", "/orders", "post", ["response-code-200"])`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`createCaseStory("10-headers-and-body", "/orders", "post", ["response-code-200"])`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`createCaseStory("11-description-and-body-schema-description", "/orders", "post", ["response-code-200"])`,...G.parameters?.docs?.source}}},K=[`Case_01_status_only`,`Case_02_description_only`,`Case_03_headers_only`,`Case_04_body_1_media_type`,`Case_05_body_2_media_types`,`Case_06_body_deprecated_1_media_type`,`Case_07_body_deprecated_2_media_types`,`Case_08_description_and_headers`,`Case_09_description_and_body`,`Case_10_headers_and_body`,`Case_11_description_and_body_schema_description`]})))()}q();export{F as Case_01_status_only,I as Case_02_description_only,L as Case_03_headers_only,R as Case_04_body_1_media_type,z as Case_05_body_2_media_types,B as Case_06_body_deprecated_1_media_type,V as Case_07_body_deprecated_2_media_types,H as Case_08_description_and_headers,U as Case_09_description_and_body,W as Case_10_headers_and_body,G as Case_11_description_and_body_schema_description,K as __namedExportsOrder,N as default};