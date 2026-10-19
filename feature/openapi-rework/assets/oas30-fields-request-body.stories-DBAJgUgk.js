import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{a as t,n,o as r,t as i}from"./openapi-story-args-BX7m-fBR.js";import{a,i as o,n as s,r as c,t as l}from"./OpenApiSampleStory-BV3l-QDA.js";var u;function d(){return(d=e((()=>{u=`openapi: 3.0.3
info:
  title: Orders
  version: 1.0.0
paths:
  /orders:
    post:
      requestBody:
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
`})))()}var f;function p(){return(p=e((()=>{f=`openapi: 3.0.3
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
`})))()}var m;function h(){return(h=e((()=>{m=`openapi: 3.0.3
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
              deprecated: true
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
`})))()}var g;function _(){return(_=e((()=>{g=`openapi: 3.0.3
info:
  title: Orders
  version: 1.0.0
paths:
  /orders:
    post:
      requestBody:
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
      requestBody:
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
      requestBody:
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
      requestBody:
        description: New order state.
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
              description: Order state object.
      responses:
        "200":
          description: ""
`})))()}var w,T,E,D,O,k,A,j,M,N,P;function F(){return(F=e((()=>{d(),p(),h(),_(),y(),x(),C(),t(),o(),s(),w=c(Object.assign({"../../../../samples/openapi/oas30/fields/request-body/01-required-1-media-type/sample.yaml":u,"../../../../samples/openapi/oas30/fields/request-body/02-optional-1-media-type/sample.yaml":f,"../../../../samples/openapi/oas30/fields/request-body/03-deprecated-1-media-type/sample.yaml":m,"../../../../samples/openapi/oas30/fields/request-body/04-required-2-media-types/sample.yaml":g,"../../../../samples/openapi/oas30/fields/request-body/05-optional-2-media-types/sample.yaml":v,"../../../../samples/openapi/oas30/fields/request-body/06-deprecated-2-media-types/sample.yaml":b,"../../../../samples/openapi/oas30/fields/request-body/07-body-and-schema-descriptions/sample.yaml":S})),T={title:`OpenAPI Operation Suite/OAS 3.0/Fields/Request Body`,component:l,argTypes:i,args:n,play:r},E=(e,t,n,r)=>({name:e,args:{caseId:e,sampleYaml:a(w,e),path:t,method:n,switchTo:r}}),D=E(`01-required-1-media-type`,`/orders`,`post`,[]),O=E(`02-optional-1-media-type`,`/orders`,`post`,[]),k=E(`03-deprecated-1-media-type`,`/orders`,`post`,[]),A=E(`04-required-2-media-types`,`/orders`,`post`,[`request-media-type-application/xml`]),j=E(`05-optional-2-media-types`,`/orders`,`post`,[`request-media-type-application/xml`]),M=E(`06-deprecated-2-media-types`,`/orders`,`post`,[`request-media-type-application/xml`]),N=E(`07-body-and-schema-descriptions`,`/orders`,`post`,[]),D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`createCaseStory("01-required-1-media-type", "/orders", "post", [])`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`createCaseStory("02-optional-1-media-type", "/orders", "post", [])`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`createCaseStory("03-deprecated-1-media-type", "/orders", "post", [])`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`createCaseStory("04-required-2-media-types", "/orders", "post", ["request-media-type-application/xml"])`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`createCaseStory("05-optional-2-media-types", "/orders", "post", ["request-media-type-application/xml"])`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`createCaseStory("06-deprecated-2-media-types", "/orders", "post", ["request-media-type-application/xml"])`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`createCaseStory("07-body-and-schema-descriptions", "/orders", "post", [])`,...N.parameters?.docs?.source}}},P=[`Case_01_required_1_media_type`,`Case_02_optional_1_media_type`,`Case_03_deprecated_1_media_type`,`Case_04_required_2_media_types`,`Case_05_optional_2_media_types`,`Case_06_deprecated_2_media_types`,`Case_07_body_and_schema_descriptions`]})))()}F();export{D as Case_01_required_1_media_type,O as Case_02_optional_1_media_type,k as Case_03_deprecated_1_media_type,A as Case_04_required_2_media_types,j as Case_05_optional_2_media_types,M as Case_06_deprecated_2_media_types,N as Case_07_body_and_schema_descriptions,P as __namedExportsOrder,T as default};