import{c as X}from"./diffs-samples-cases-1df1f3ae.js";import{c as Y,J as W,j as Z,a as $}from"./json-schema-diffs-utils-bca2dcc7.js";import"./_commonjs-dynamic-modules-6308e768.js";import"./index-f46741a2.js";import"./AsyncApiOperationViewer-20adb5ef.js";import"./DiffBadge-2c39fcfb.js";import"./IndexesNodeViewer-d58b74b1.js";import"./DdlTableDiffsViewer-24e2ad47.js";/* empty css              */import"./DdlTableViewer-a4a3f251.js";import"./GraphQLOperationDiffViewer-89ad93c7.js";import"./GraphPropNodeViewer-3d0fd400.js";import"./index-415bee12.js";import"./GraphQLOperationViewer-f5bfa916.js";import"./preprocess-8cff05ac.js";import"./parse-yaml-source-3e95a000.js";import"./public-api-99af098d.js";const ee=`type: 'string'
x-internal: true
x-version: '1.0.0'
`,se=`type: 'string'
x-internal: true
x-metadata:
  owner: 'platform-team'
`,re=`type: 'string'
x-internal: true
x-tags:
  - 'beta'
  - 'internal'
`,te=`type: 'string'
x-internal: true
x-value-schema:
  type: 'integer'
  minimum: 0
`,ae=`type: 'string'
x-internal: true
x-version: '1.0.0'
`,ne=`type: 'string'
x-internal: true
x-version: '1.0.0'
`,oe=`type: 'string'
x-internal: true
x-version: '1.0.0'
`,ie=`type: 'string'
x-internal: true
x-version: '1.0.0'
`,me=`type: 'string'
x-internal: true
x-version: '1.0.0'
`,ce=`type: 'string'
x-internal: true
x-version: '1.0.0'
`,_e=`type: 'string'
x-internal: true
x-version: '1.0.0'
`,pe=`type: 'string'
x-internal: true
x-version: '1.0.0'
`,de=`type: 'string'
x-internal: true
`,le=`type: 'string'
x-internal: true
`,ve=`type: 'string'
x-internal: true
`,xe=`type: 'string'
x-internal: true
`,fe=`type: 'string'
x-internal: true
x-version: false
`,ge=`type: 'string'
x-internal: true
x-version:
  owner: 'platform-team'
`,ye=`type: 'string'
x-internal: true
x-version:
  - 'beta'
  - 'internal'
`,ue=`type: 'string'
x-internal: true
x-version:
  type: 'integer'
  minimum: 0
`,be=`type: 'string'
x-internal: true
x-metadata:
  owner: 'platform-team'
`,je=`type: 'string'
x-internal:
  owner: 'platform-team'
`,he=`type: 'string'
x-internal: true
x-version:
  owner: 'platform-team'
x-tags:
  - 'beta'
  - 'internal'
`,Ce=`type: 'string'
x-internal:
  owner: 'platform-team'
x-version:
  - 'beta'
  - 'internal'
`,Se=Object.assign({"../../../../samples/json-schema-diffs/extensions/existing-2-primitive/01-primitive-removed/before.yaml":ee,"../../../../samples/json-schema-diffs/extensions/existing-2-primitive/02-object-removed/before.yaml":se,"../../../../samples/json-schema-diffs/extensions/existing-2-primitive/03-array-removed/before.yaml":re,"../../../../samples/json-schema-diffs/extensions/existing-2-primitive/04-json-schema-removed/before.yaml":te,"../../../../samples/json-schema-diffs/extensions/existing-2-primitive/05-replaced-to-primitive/before.yaml":ae,"../../../../samples/json-schema-diffs/extensions/existing-2-primitive/06-replaced-to-object/before.yaml":ne,"../../../../samples/json-schema-diffs/extensions/existing-2-primitive/07-replaced-to-array/before.yaml":oe,"../../../../samples/json-schema-diffs/extensions/existing-2-primitive/08-replaced-to-json-schema/before.yaml":ie,"../../../../samples/json-schema-diffs/extensions/existing-2-primitive/09-added-and-removed/before.yaml":me,"../../../../samples/json-schema-diffs/extensions/existing-2-primitive/10-removed-and-replaced/before.yaml":ce,"../../../../samples/json-schema-diffs/extensions/existing-2-primitive/11-added-and-replaced/before.yaml":_e,"../../../../samples/json-schema-diffs/extensions/existing-2-primitive/12-both-replaced/before.yaml":pe}),we=Object.assign({"../../../../samples/json-schema-diffs/extensions/existing-2-primitive/01-primitive-removed/after.yaml":de,"../../../../samples/json-schema-diffs/extensions/existing-2-primitive/02-object-removed/after.yaml":le,"../../../../samples/json-schema-diffs/extensions/existing-2-primitive/03-array-removed/after.yaml":ve,"../../../../samples/json-schema-diffs/extensions/existing-2-primitive/04-json-schema-removed/after.yaml":xe,"../../../../samples/json-schema-diffs/extensions/existing-2-primitive/05-replaced-to-primitive/after.yaml":fe,"../../../../samples/json-schema-diffs/extensions/existing-2-primitive/06-replaced-to-object/after.yaml":ge,"../../../../samples/json-schema-diffs/extensions/existing-2-primitive/07-replaced-to-array/after.yaml":ye,"../../../../samples/json-schema-diffs/extensions/existing-2-primitive/08-replaced-to-json-schema/after.yaml":ue,"../../../../samples/json-schema-diffs/extensions/existing-2-primitive/09-added-and-removed/after.yaml":be,"../../../../samples/json-schema-diffs/extensions/existing-2-primitive/10-removed-and-replaced/after.yaml":je,"../../../../samples/json-schema-diffs/extensions/existing-2-primitive/11-added-and-replaced/after.yaml":he,"../../../../samples/json-schema-diffs/extensions/existing-2-primitive/12-both-replaced/after.yaml":Ce}),De=X(Se,we),Je=Y(De),Me={title:"JSON Schema Diffs Suite (Extensions)/Existing 2 Primitive",component:W,argTypes:Z},e=$(W,Je),s=e("01-primitive-removed"),r=e("02-object-removed"),t=e("03-array-removed"),a=e("04-json-schema-removed"),n=e("05-replaced-to-primitive"),o=e("06-replaced-to-object"),i=e("07-replaced-to-array"),m=e("08-replaced-to-json-schema"),c=e("09-added-and-removed"),_=e("10-removed-and-replaced"),p=e("11-added-and-replaced"),d=e("12-both-replaced");var l,v,x;s.parameters={...s.parameters,docs:{...(l=s.parameters)==null?void 0:l.docs,source:{originalSource:'createCaseStory("01-primitive-removed")',...(x=(v=s.parameters)==null?void 0:v.docs)==null?void 0:x.source}}};var f,g,y;r.parameters={...r.parameters,docs:{...(f=r.parameters)==null?void 0:f.docs,source:{originalSource:'createCaseStory("02-object-removed")',...(y=(g=r.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};var u,b,j;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:'createCaseStory("03-array-removed")',...(j=(b=t.parameters)==null?void 0:b.docs)==null?void 0:j.source}}};var h,C,S;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:'createCaseStory("04-json-schema-removed")',...(S=(C=a.parameters)==null?void 0:C.docs)==null?void 0:S.source}}};var w,D,J;n.parameters={...n.parameters,docs:{...(w=n.parameters)==null?void 0:w.docs,source:{originalSource:'createCaseStory("05-replaced-to-primitive")',...(J=(D=n.parameters)==null?void 0:D.docs)==null?void 0:J.source}}};var O,E,F;o.parameters={...o.parameters,docs:{...(O=o.parameters)==null?void 0:O.docs,source:{originalSource:'createCaseStory("06-replaced-to-object")',...(F=(E=o.parameters)==null?void 0:E.docs)==null?void 0:F.source}}};var B,I,T;i.parameters={...i.parameters,docs:{...(B=i.parameters)==null?void 0:B.docs,source:{originalSource:'createCaseStory("07-replaced-to-array")',...(T=(I=i.parameters)==null?void 0:I.docs)==null?void 0:T.source}}};var A,N,P;m.parameters={...m.parameters,docs:{...(A=m.parameters)==null?void 0:A.docs,source:{originalSource:'createCaseStory("08-replaced-to-json-schema")',...(P=(N=m.parameters)==null?void 0:N.docs)==null?void 0:P.source}}};var R,k,q;c.parameters={...c.parameters,docs:{...(R=c.parameters)==null?void 0:R.docs,source:{originalSource:'createCaseStory("09-added-and-removed")',...(q=(k=c.parameters)==null?void 0:k.docs)==null?void 0:q.source}}};var z,G,H;_.parameters={..._.parameters,docs:{...(z=_.parameters)==null?void 0:z.docs,source:{originalSource:'createCaseStory("10-removed-and-replaced")',...(H=(G=_.parameters)==null?void 0:G.docs)==null?void 0:H.source}}};var K,L,M;p.parameters={...p.parameters,docs:{...(K=p.parameters)==null?void 0:K.docs,source:{originalSource:'createCaseStory("11-added-and-replaced")',...(M=(L=p.parameters)==null?void 0:L.docs)==null?void 0:M.source}}};var Q,U,V;d.parameters={...d.parameters,docs:{...(Q=d.parameters)==null?void 0:Q.docs,source:{originalSource:'createCaseStory("12-both-replaced")',...(V=(U=d.parameters)==null?void 0:U.docs)==null?void 0:V.source}}};const Qe=["Case_01_primitive_removed","Case_02_object_removed","Case_03_array_removed","Case_04_json_schema_removed","Case_05_replaced_to_primitive","Case_06_replaced_to_object","Case_07_replaced_to_array","Case_08_replaced_to_json_schema","Case_09_added_and_removed","Case_10_removed_and_replaced","Case_11_added_and_replaced","Case_12_both_replaced"];export{s as Case_01_primitive_removed,r as Case_02_object_removed,t as Case_03_array_removed,a as Case_04_json_schema_removed,n as Case_05_replaced_to_primitive,o as Case_06_replaced_to_object,i as Case_07_replaced_to_array,m as Case_08_replaced_to_json_schema,c as Case_09_added_and_removed,_ as Case_10_removed_and_replaced,p as Case_11_added_and_replaced,d as Case_12_both_replaced,Qe as __namedExportsOrder,Me as default};
