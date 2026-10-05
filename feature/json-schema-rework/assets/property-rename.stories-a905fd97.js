import{j as ce}from"./_commonjs-dynamic-modules-6308e768.js";import{c as _e}from"./AsyncApiOperationViewer-908de172.js";import{c as ue}from"./diffs-samples-cases-91c2d1e6.js";import{b as fe}from"./sample-cases-8c510854.js";import{j as ye,f as he,g as le,c as ge}from"./json-schema-diffs-utils-f1bfafd5.js";import{D as b,o as s,t as d,v as j,w as ve,x as R,y as U}from"./UxBadge-190a23d2.js";import{p as w}from"./parse-yaml-source-3e95a000.js";import{m as qe}from"./preprocess-39b8762b.js";import"./index-f46741a2.js";import"./IndexesNodeViewer-fee5cd8c.js";import"./DdlTableDiffsViewer-fd6285f4.js";/* empty css              */import"./DdlTableViewer-628f1b1b.js";import"./GraphQLOperationDiffViewer-8a73b026.js";import"./GraphPropNodeViewer-687f278e.js";import"./index-415bee12.js";import"./GraphQLOperationViewer-d1208066.js";import"./public-api-99af098d.js";import"./test-diff-meta-keys-5677f54d.js";const be=`openapi: 3.0.3
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
`,Ie=`openapi: 3.0.3
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
`,Oe=`openapi: 3.0.3
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
`,Se=`openapi: 3.0.3
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
`,je=`openapi: 3.0.3
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
`,Pe=`openapi: 3.0.3
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
`,Ce=`openapi: 3.0.3
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
`,De=`openapi: 3.0.3
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
`,Ke=`openapi: 3.0.3
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
`,Ae=`openapi: 3.0.3
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
`,Ee=`openapi: 3.0.3
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
`,Re=`openapi: 3.0.3
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
`,Ue=`openapi: 3.0.3
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
`,we=`openapi: 3.0.3
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
`,Fe=`openapi: 3.0.3
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
`,xe=`openapi: 3.0.3
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
`,Me=`openapi: 3.0.3
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
`,Te=`openapi: 3.0.3
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
`,Ve=["name","in","required","schema"],S=e=>s(e)?e[b]:void 0,ke=e=>s(e)&&typeof e.name=="string",Je=e=>{if(d(e))return{type:e.type,scope:e.scope,description:e.description,action:j.rename,beforeKey:String(e.beforeValue),afterKey:String(e.afterValue),beforeDeclarationPaths:e.beforeDeclarationPaths,afterDeclarationPaths:e.afterDeclarationPaths}},Le=(e,r)=>{if(!e||ve(e))return;const n=(R(e)||d(e))&&e.beforeValue===!0,a=(U(e)||d(e))&&e.afterValue===!0;if(n===a)return;const{type:p,scope:i,description:m}=e;return a?{type:p,scope:i,description:m,action:j.add,afterValue:r,afterDeclarationPaths:U(e)||d(e)?e.afterDeclarationPaths:[]}:{type:p,scope:i,description:m,action:j.remove,beforeValue:r,beforeDeclarationPaths:R(e)||d(e)?e.beforeDeclarationPaths:[]}},Ye=e=>{const r={type:"object",properties:{},required:[]},n={},a={},p=S(e)??{};return(Array.isArray(e)?e:[]).forEach((i,m)=>{if(!ke(i))return;const{name:o,required:pe,description:P,deprecated:C,schema:D}=i,c=S(i)??{},I={...S(D)};for(const[E,me]of Object.entries(c))Ve.includes(E)||(I[E]=me);r.properties[o]={...D,...P!==void 0?{description:P}:{},...C!==void 0?{deprecated:C}:{},[b]:Object.keys(I).length>0?I:void 0};const K=p[m];K&&(n[o]=K);const A=c.name&&Je(c.name);A&&(n[o]=A);const O=Le(c.required,o);(pe||O)&&(O&&(a[r.required.length]=O),r.required.push(o))}),Object.keys(n).length>0&&(r.properties[b]=n),Object.keys(a).length>0&&(r.required[b]=a),r},Ne=e=>{const r=s(e)?e.paths:void 0,n=s(r)?Object.values(r)[0]:void 0,a=s(n)?Object.values(n).find(s):void 0;return s(a)?a.parameters:void 0},He=(e,r)=>Ye(Ne(qe(w(e),w(r)))),ze=Object.assign({"../../../../samples/json-schema-diffs/property-rename/01-renamed-only/before.yaml":be,"../../../../samples/json-schema-diffs/property-rename/02-renamed-and-description-changed/before.yaml":Ie,"../../../../samples/json-schema-diffs/property-rename/03-renamed-and-type-changed/before.yaml":Oe,"../../../../samples/json-schema-diffs/property-rename/04-renamed-and-validation-changed/before.yaml":Se,"../../../../samples/json-schema-diffs/property-rename/05-renamed-and-deprecated/before.yaml":je,"../../../../samples/json-schema-diffs/property-rename/06-renamed-object-parameter/before.yaml":Pe,"../../../../samples/json-schema-diffs/property-rename/07-two-parameters-renamed/before.yaml":Ce,"../../../../samples/json-schema-diffs/property-rename/08-renamed-with-query-parameter-added/before.yaml":De,"../../../../samples/json-schema-diffs/property-rename/09-query-parameter-renamed-is-removed-and-added/before.yaml":Ke}),Be=Object.assign({"../../../../samples/json-schema-diffs/property-rename/01-renamed-only/after.yaml":Ae,"../../../../samples/json-schema-diffs/property-rename/02-renamed-and-description-changed/after.yaml":Ee,"../../../../samples/json-schema-diffs/property-rename/03-renamed-and-type-changed/after.yaml":Re,"../../../../samples/json-schema-diffs/property-rename/04-renamed-and-validation-changed/after.yaml":Ue,"../../../../samples/json-schema-diffs/property-rename/05-renamed-and-deprecated/after.yaml":we,"../../../../samples/json-schema-diffs/property-rename/06-renamed-object-parameter/after.yaml":Fe,"../../../../samples/json-schema-diffs/property-rename/07-two-parameters-renamed/after.yaml":xe,"../../../../samples/json-schema-diffs/property-rename/08-renamed-with-query-parameter-added/after.yaml":Me,"../../../../samples/json-schema-diffs/property-rename/09-query-parameter-renamed-is-removed-and-added/after.yaml":Te}),Xe=fe(ue(ze,Be)),de=({beforeYaml:e,afterYaml:r,hideUnchangedNodes:n})=>ce.jsx(_e,{schema:He(e,r),expandedDepth:he,diffMetaKeys:le,hideUnchangedNodes:n}),fr={title:"JSON Schema Diffs Suite/Property Rename",component:de,argTypes:ye},t=ge(de,Xe),_=t("01-renamed-only"),u=t("02-renamed-and-description-changed"),f=t("03-renamed-and-type-changed"),y=t("04-renamed-and-validation-changed"),h=t("05-renamed-and-deprecated"),l=t("06-renamed-object-parameter"),g=t("07-two-parameters-renamed"),v=t("08-renamed-with-query-parameter-added"),q=t("09-query-parameter-renamed-is-removed-and-added");var F,x,M;_.parameters={..._.parameters,docs:{...(F=_.parameters)==null?void 0:F.docs,source:{originalSource:'createCaseStory("01-renamed-only")',...(M=(x=_.parameters)==null?void 0:x.docs)==null?void 0:M.source}}};var T,V,k;u.parameters={...u.parameters,docs:{...(T=u.parameters)==null?void 0:T.docs,source:{originalSource:'createCaseStory("02-renamed-and-description-changed")',...(k=(V=u.parameters)==null?void 0:V.docs)==null?void 0:k.source}}};var J,L,Y;f.parameters={...f.parameters,docs:{...(J=f.parameters)==null?void 0:J.docs,source:{originalSource:'createCaseStory("03-renamed-and-type-changed")',...(Y=(L=f.parameters)==null?void 0:L.docs)==null?void 0:Y.source}}};var N,H,z;y.parameters={...y.parameters,docs:{...(N=y.parameters)==null?void 0:N.docs,source:{originalSource:'createCaseStory("04-renamed-and-validation-changed")',...(z=(H=y.parameters)==null?void 0:H.docs)==null?void 0:z.source}}};var B,X,$;h.parameters={...h.parameters,docs:{...(B=h.parameters)==null?void 0:B.docs,source:{originalSource:'createCaseStory("05-renamed-and-deprecated")',...($=(X=h.parameters)==null?void 0:X.docs)==null?void 0:$.source}}};var G,Q,W;l.parameters={...l.parameters,docs:{...(G=l.parameters)==null?void 0:G.docs,source:{originalSource:'createCaseStory("06-renamed-object-parameter")',...(W=(Q=l.parameters)==null?void 0:Q.docs)==null?void 0:W.source}}};var Z,ee,re;g.parameters={...g.parameters,docs:{...(Z=g.parameters)==null?void 0:Z.docs,source:{originalSource:'createCaseStory("07-two-parameters-renamed")',...(re=(ee=g.parameters)==null?void 0:ee.docs)==null?void 0:re.source}}};var ne,ae,te;v.parameters={...v.parameters,docs:{...(ne=v.parameters)==null?void 0:ne.docs,source:{originalSource:'createCaseStory("08-renamed-with-query-parameter-added")',...(te=(ae=v.parameters)==null?void 0:ae.docs)==null?void 0:te.source}}};var se,ie,oe;q.parameters={...q.parameters,docs:{...(se=q.parameters)==null?void 0:se.docs,source:{originalSource:'createCaseStory("09-query-parameter-renamed-is-removed-and-added")',...(oe=(ie=q.parameters)==null?void 0:ie.docs)==null?void 0:oe.source}}};const yr=["Case_01_renamed_only","Case_02_renamed_and_description_changed","Case_03_renamed_and_type_changed","Case_04_renamed_and_validation_changed","Case_05_renamed_and_deprecated","Case_06_renamed_object_parameter","Case_07_two_parameters_renamed","Case_08_renamed_with_query_parameter_added","Case_09_query_parameter_renamed_is_removed_and_added"];export{_ as Case_01_renamed_only,u as Case_02_renamed_and_description_changed,f as Case_03_renamed_and_type_changed,y as Case_04_renamed_and_validation_changed,h as Case_05_renamed_and_deprecated,l as Case_06_renamed_object_parameter,g as Case_07_two_parameters_renamed,v as Case_08_renamed_with_query_parameter_added,q as Case_09_query_parameter_renamed_is_removed_and_added,yr as __namedExportsOrder,fr as default};
