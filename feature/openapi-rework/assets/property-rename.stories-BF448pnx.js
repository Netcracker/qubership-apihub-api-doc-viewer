import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-ATHzeHXA.js";import{Ct as n,Xt as r,Yt as i,an as ee,ct as a,in as o,nn as s,on as c,rn as l}from"./UxBadge-CuFzjdSP.js";import{d as u,u as d}from"./AsyncApiOperationViewer-C5uY5-QJ.js";import{i as f,r as p}from"./preprocess-CkI9gXKd.js";import{n as m,t as h}from"./parse-yaml-source-C_EzBWAu.js";import{i as te,r as ne}from"./sample-cases-DDoAHGgD.js";import{n as re,t as ie}from"./diffs-samples-cases-Bp0vvMWA.js";import{a as ae,c as oe,l as se,t as ce}from"./json-schema-diffs-utils-DaC_u9DB.js";var le;function ue(){return(ue=e((()=>{le=`openapi: 3.0.3
info:
  title: Property rename sample
  version: 1.0.0
paths:
  '/users/{id}/orders/{orderId}':
    get:
      parameters:
        - name: id
          in: path
          required: true
          description: User identifier.
          schema:
            type: string
        - name: orderId
          in: path
          required: true
          description: Order identifier.
          schema:
            type: integer
      responses:
        '200':
          description: OK
`})))()}var g;function de(){return(de=e((()=>{g=`openapi: 3.0.3
info:
  title: Property rename sample
  version: 1.0.0
paths:
  '/users/{id}/orders/{orderId}':
    get:
      parameters:
        - name: id
          in: path
          required: true
          description: User identifier.
          schema:
            type: string
        - name: orderId
          in: path
          required: true
          description: Order identifier.
          schema:
            type: integer
      responses:
        '200':
          description: OK
`})))()}var fe;function _(){return(_=e((()=>{fe=`openapi: 3.0.3
info:
  title: Property rename sample
  version: 1.0.0
paths:
  '/users/{id}/orders/{orderId}':
    get:
      parameters:
        - name: id
          in: path
          required: true
          description: User identifier.
          schema:
            type: string
        - name: orderId
          in: path
          required: true
          description: Order identifier.
          schema:
            type: integer
      responses:
        '200':
          description: OK
`})))()}var v;function y(){return(y=e((()=>{v=`openapi: 3.0.3
info:
  title: Property rename sample
  version: 1.0.0
paths:
  '/users/{id}/orders/{orderId}':
    get:
      parameters:
        - name: id
          in: path
          required: true
          description: User identifier.
          schema:
            type: string
            maxLength: 36
        - name: orderId
          in: path
          required: true
          description: Order identifier.
          schema:
            type: integer
      responses:
        '200':
          description: OK
`})))()}var b;function x(){return(x=e((()=>{b=`openapi: 3.0.3
info:
  title: Property rename sample
  version: 1.0.0
paths:
  '/users/{id}/orders/{orderId}':
    get:
      parameters:
        - name: id
          in: path
          required: true
          description: User identifier.
          schema:
            type: string
        - name: orderId
          in: path
          required: true
          description: Order identifier.
          schema:
            type: integer
      responses:
        '200':
          description: OK
`})))()}var S;function C(){return(C=e((()=>{S=`openapi: 3.0.3
info:
  title: Property rename sample
  version: 1.0.0
paths:
  '/reports/{filter}':
    get:
      parameters:
        - name: filter
          in: path
          required: true
          description: Report filter.
          schema:
            type: object
            properties:
              from:
                type: string
                format: date
                description: First day of the period.
              to:
                type: string
                format: date
                description: Last day of the period.
      responses:
        '200':
          description: OK
`})))()}var w;function T(){return(T=e((()=>{w=`openapi: 3.0.3
info:
  title: Property rename sample
  version: 1.0.0
paths:
  '/users/{id}/orders/{oid}':
    get:
      parameters:
        - name: id
          in: path
          required: true
          description: User identifier.
          schema:
            type: string
        - name: oid
          in: path
          required: true
          description: Order identifier.
          schema:
            type: integer
      responses:
        '200':
          description: OK
`})))()}var E;function D(){return(D=e((()=>{E=`openapi: 3.0.3
info:
  title: Property rename sample
  version: 1.0.0
paths:
  '/users/{id}':
    get:
      parameters:
        - name: id
          in: path
          required: true
          description: User identifier.
          schema:
            type: string
      responses:
        '200':
          description: OK
`})))()}var O;function k(){return(k=e((()=>{O=`openapi: 3.0.3
info:
  title: Property rename sample
  version: 1.0.0
paths:
  '/users':
    get:
      parameters:
        - name: q
          in: query
          description: Search query.
          schema:
            type: string
      responses:
        '200':
          description: OK
`})))()}var A;function j(){return(j=e((()=>{A=`openapi: 3.0.3
info:
  title: Property rename sample
  version: 1.0.0
paths:
  '/users/{userId}/orders/{orderId}':
    get:
      parameters:
        - name: userId
          in: path
          required: true
          description: User identifier.
          schema:
            type: string
        - name: orderId
          in: path
          required: true
          description: Order identifier.
          schema:
            type: integer
      responses:
        '200':
          description: OK
`})))()}var M;function N(){return(N=e((()=>{M=`openapi: 3.0.3
info:
  title: Property rename sample
  version: 1.0.0
paths:
  '/users/{userId}/orders/{orderId}':
    get:
      parameters:
        - name: userId
          in: path
          required: true
          description: Unique identifier of the user.
          schema:
            type: string
        - name: orderId
          in: path
          required: true
          description: Order identifier.
          schema:
            type: integer
      responses:
        '200':
          description: OK
`})))()}var P;function F(){return(F=e((()=>{P=`openapi: 3.0.3
info:
  title: Property rename sample
  version: 1.0.0
paths:
  '/users/{userId}/orders/{orderId}':
    get:
      parameters:
        - name: userId
          in: path
          required: true
          description: User identifier.
          schema:
            type: integer
            format: int64
        - name: orderId
          in: path
          required: true
          description: Order identifier.
          schema:
            type: integer
      responses:
        '200':
          description: OK
`})))()}var I;function L(){return(L=e((()=>{I=`openapi: 3.0.3
info:
  title: Property rename sample
  version: 1.0.0
paths:
  '/users/{userId}/orders/{orderId}':
    get:
      parameters:
        - name: userId
          in: path
          required: true
          description: User identifier.
          schema:
            type: string
            maxLength: 64
            pattern: '^[a-z0-9-]+$'
        - name: orderId
          in: path
          required: true
          description: Order identifier.
          schema:
            type: integer
      responses:
        '200':
          description: OK
`})))()}var R;function z(){return(z=e((()=>{R=`openapi: 3.0.3
info:
  title: Property rename sample
  version: 1.0.0
paths:
  '/users/{userId}/orders/{orderId}':
    get:
      parameters:
        - name: userId
          in: path
          required: true
          description: User identifier.
          deprecated: true
          schema:
            type: string
        - name: orderId
          in: path
          required: true
          description: Order identifier.
          schema:
            type: integer
      responses:
        '200':
          description: OK
`})))()}var B;function V(){return(V=e((()=>{B=`openapi: 3.0.3
info:
  title: Property rename sample
  version: 1.0.0
paths:
  '/reports/{period}':
    get:
      parameters:
        - name: period
          in: path
          required: true
          description: Report filter.
          schema:
            type: object
            properties:
              from:
                type: string
                format: date
                description: First day of the period.
              to:
                type: string
                format: date-time
                description: Last day of the period.
      responses:
        '200':
          description: OK
`})))()}var pe;function me(){return(me=e((()=>{pe=`openapi: 3.0.3
info:
  title: Property rename sample
  version: 1.0.0
paths:
  '/users/{userId}/orders/{orderId}':
    get:
      parameters:
        - name: userId
          in: path
          required: true
          description: User identifier.
          schema:
            type: string
        - name: orderId
          in: path
          required: true
          description: Order identifier.
          schema:
            type: integer
      responses:
        '200':
          description: OK
`})))()}var he;function ge(){return(ge=e((()=>{he=`openapi: 3.0.3
info:
  title: Property rename sample
  version: 1.0.0
paths:
  '/users/{userId}':
    get:
      parameters:
        - name: userId
          in: path
          required: true
          description: User identifier.
          schema:
            type: string
        - name: verbose
          in: query
          description: Include optional fields.
          schema:
            type: boolean
      responses:
        '200':
          description: OK
`})))()}var _e;function ve(){return(ve=e((()=>{_e=`openapi: 3.0.3
info:
  title: Property rename sample
  version: 1.0.0
paths:
  '/users':
    get:
      parameters:
        - name: query
          in: query
          description: Search query.
          schema:
            type: string
      responses:
        '200':
          description: OK
`})))()}var ye,H,be,xe,Se,Ce,we,Te;function Ee(){return(Ee=e((()=>{s(),a(),h(),p(),ye=[`name`,`in`,`required`,`schema`],H=e=>n(e)?e[i]:void 0,be=e=>n(e)&&typeof e.name==`string`,xe=e=>{if(c(e))return{type:e.type,scope:e.scope,description:e.description,action:r.rename,beforeKey:String(e.beforeValue),afterKey:String(e.afterValue),beforeDeclarationPaths:e.beforeDeclarationPaths,afterDeclarationPaths:e.afterDeclarationPaths}},Se=(e,t)=>{if(!e||ee(e))return;let n=(o(e)||c(e))&&e.beforeValue===!0,i=(l(e)||c(e))&&e.afterValue===!0;if(n===i)return;let{type:a,scope:s,description:u}=e;return i?{type:a,scope:s,description:u,action:r.add,afterValue:t,afterDeclarationPaths:l(e)||c(e)?e.afterDeclarationPaths:[]}:{type:a,scope:s,description:u,action:r.remove,beforeValue:t,beforeDeclarationPaths:o(e)||c(e)?e.beforeDeclarationPaths:[]}},Ce=e=>{let t={type:`object`,properties:{},required:[]},n={},r={},ee=H(e)??{};return(Array.isArray(e)?e:[]).forEach((e,a)=>{if(!be(e))return;let{name:o,required:s,description:c,deprecated:l,schema:u}=e,d=H(e)??{},f={...H(u)};for(let[e,t]of Object.entries(d))ye.includes(e)||(f[e]=t);t.properties[o]={...u,...c===void 0?{}:{description:c},...l===void 0?{}:{deprecated:l},[i]:Object.keys(f).length>0?f:void 0};let p=ee[a];p&&(n[o]=p);let m=d.name&&xe(d.name);m&&(n[o]=m);let h=Se(d.required,o);(s||h)&&(h&&(r[t.required.length]=h),t.required.push(o))}),Object.keys(n).length>0&&(t.properties[i]=n),Object.keys(r).length>0&&(t.required[i]=r),t},we=e=>{let t=n(e)?e.paths:void 0,r=n(t)?Object.values(t)[0]:void 0,i=n(r)?Object.values(r).find(n):void 0;return n(i)?i.parameters:void 0},Te=(e,t)=>Ce(we(f(m(e),m(t))))})))()}var De,Oe,U,ke,W,G,K,q,J,Y,X,Z,Q,$,Ae;function je(){return(je=e((()=>{ue(),de(),_(),y(),x(),C(),T(),D(),k(),j(),N(),F(),L(),z(),V(),me(),ge(),ve(),u(),re(),te(),oe(),Ee(),De=t(),Oe=ne(ie(Object.assign({"../../../../samples/json-schema-diffs/property-rename/01-renamed-only/before.yaml":le,"../../../../samples/json-schema-diffs/property-rename/02-renamed-and-description-changed/before.yaml":g,"../../../../samples/json-schema-diffs/property-rename/03-renamed-and-type-changed/before.yaml":fe,"../../../../samples/json-schema-diffs/property-rename/04-renamed-and-validation-changed/before.yaml":v,"../../../../samples/json-schema-diffs/property-rename/05-renamed-and-deprecated/before.yaml":b,"../../../../samples/json-schema-diffs/property-rename/06-renamed-object-parameter/before.yaml":S,"../../../../samples/json-schema-diffs/property-rename/07-two-parameters-renamed/before.yaml":w,"../../../../samples/json-schema-diffs/property-rename/08-renamed-with-query-parameter-added/before.yaml":E,"../../../../samples/json-schema-diffs/property-rename/09-query-parameter-renamed-is-removed-and-added/before.yaml":O}),Object.assign({"../../../../samples/json-schema-diffs/property-rename/01-renamed-only/after.yaml":A,"../../../../samples/json-schema-diffs/property-rename/02-renamed-and-description-changed/after.yaml":M,"../../../../samples/json-schema-diffs/property-rename/03-renamed-and-type-changed/after.yaml":P,"../../../../samples/json-schema-diffs/property-rename/04-renamed-and-validation-changed/after.yaml":I,"../../../../samples/json-schema-diffs/property-rename/05-renamed-and-deprecated/after.yaml":R,"../../../../samples/json-schema-diffs/property-rename/06-renamed-object-parameter/after.yaml":B,"../../../../samples/json-schema-diffs/property-rename/07-two-parameters-renamed/after.yaml":pe,"../../../../samples/json-schema-diffs/property-rename/08-renamed-with-query-parameter-added/after.yaml":he,"../../../../samples/json-schema-diffs/property-rename/09-query-parameter-renamed-is-removed-and-added/after.yaml":_e}))),U=({beforeYaml:e,afterYaml:t,hideUnchangedNodes:n})=>(0,De.jsx)(d,{schema:Te(e,t),expandedDepth:5,diffMetaKeys:ce,hideUnchangedNodes:n}),ke={title:`JSON Schema Diffs Suite/Property Rename`,component:U,argTypes:se},W=ae(U,Oe),G=W(`01-renamed-only`),K=W(`02-renamed-and-description-changed`),q=W(`03-renamed-and-type-changed`),J=W(`04-renamed-and-validation-changed`),Y=W(`05-renamed-and-deprecated`),X=W(`06-renamed-object-parameter`),Z=W(`07-two-parameters-renamed`),Q=W(`08-renamed-with-query-parameter-added`),$=W(`09-query-parameter-renamed-is-removed-and-added`),G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`createCaseStory("01-renamed-only")`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`createCaseStory("02-renamed-and-description-changed")`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`createCaseStory("03-renamed-and-type-changed")`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`createCaseStory("04-renamed-and-validation-changed")`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`createCaseStory("05-renamed-and-deprecated")`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`createCaseStory("06-renamed-object-parameter")`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`createCaseStory("07-two-parameters-renamed")`,...Z.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`createCaseStory("08-renamed-with-query-parameter-added")`,...Q.parameters?.docs?.source}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`createCaseStory("09-query-parameter-renamed-is-removed-and-added")`,...$.parameters?.docs?.source}}},Ae=[`Case_01_renamed_only`,`Case_02_renamed_and_description_changed`,`Case_03_renamed_and_type_changed`,`Case_04_renamed_and_validation_changed`,`Case_05_renamed_and_deprecated`,`Case_06_renamed_object_parameter`,`Case_07_two_parameters_renamed`,`Case_08_renamed_with_query_parameter_added`,`Case_09_query_parameter_renamed_is_removed_and_added`]})))()}je();export{G as Case_01_renamed_only,K as Case_02_renamed_and_description_changed,q as Case_03_renamed_and_type_changed,J as Case_04_renamed_and_validation_changed,Y as Case_05_renamed_and_deprecated,X as Case_06_renamed_object_parameter,Z as Case_07_two_parameters_renamed,Q as Case_08_renamed_with_query_parameter_added,$ as Case_09_query_parameter_renamed_is_removed_and_added,Ae as __namedExportsOrder,ke as default};