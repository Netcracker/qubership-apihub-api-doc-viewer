import{c as K}from"./diffs-samples-cases-1df1f3ae.js";import{c as M,d as H,j as P,b as Q}from"./json-schema-diffs-utils-c410b856.js";import"./_commonjs-dynamic-modules-6308e768.js";import"./index-f46741a2.js";import"./AsyncApiOperationViewer-6f01e639.js";import"./UxBadge-96977876.js";import"./IndexesNodeViewer-decab25f.js";import"./DdlTableDiffsViewer-1efcef13.js";/* empty css              */import"./DdlTableViewer-3f8f7ca3.js";import"./GraphQLOperationDiffViewer-90d7fdae.js";import"./GraphPropNodeViewer-de716f5c.js";import"./index-415bee12.js";import"./GraphQLOperationViewer-2c9808a5.js";import"./preprocess-f40c604b.js";import"./parse-yaml-source-3e95a000.js";import"./public-api-99af098d.js";import"./combiner-changed-variant-43f703e4.js";const X=`oneOf:
  - type: string
    description: String variant
  - type: object
    description: Object variant
    properties:
      id:
        type: string
      count:
        type: integer

`,Y=`oneOf:
  - type: string
    description: String variant
  - type: object
    description: Object variant
    properties:
      id:
        type: string
      count:
        type: integer

`,Z=`oneOf:
  - type: string
    description: String variant
  - type: object
    description: Object variant
    properties:
      id:
        type: string
      count:
        type: integer

`,$=`oneOf:
  - type: string
    description: String variant
  - type: object
    description: Object variant
    properties:
      id:
        type: string
      count:
        type: integer
  - type: array
    description: Array variant
    items:
      type: string

`,ee=`oneOf:
  - type: string
    description: String variant
  - type: object
    description: Object variant
    properties:
      id:
        type: string
      count:
        type: integer
  - type: array
    description: Array variant
    items:
      type: string

`,ne=`oneOf:
  - type: string
    description: String variant
  - type: object
    description: Object variant
    properties:
      id:
        type: string
      count:
        type: integer
  - type: array
    description: Array variant
    items:
      type: string

`,te=`oneOf:
  - type: string
    description: String variant
  - type: object
    description: Object variant
    properties:
      id:
        type: string
      count:
        type: integer

`,re=`oneOf:
  - type: string
    description: String variant
  - type: object
    description: Object variant
    properties:
      id:
        type: string
      count:
        type: integer

`,ae=`oneOf:
  - type: string
    description: String variant
  - type: array
    description: Array variant
    items:
      type: string

`,se=`oneOf:
  - type: string
    description: String variant
  - type: object
    description: Object variant
    properties:
      id:
        type: string
      count:
        type: integer

`,ie=`oneOf:
  - type: string
    description: String variant
  - type: object
    description: Object variant
    properties:
      id:
        type: string
      count:
        type: integer
  - oneOf:
      - type: string
        description: Nested string
      - type: integer
        description: Nested integer

`,oe=`oneOf:
  - type: string
    description: String variant
  - type: object
    description: Object variant
    properties:
      id:
        type: string
      count:
        type: integer
  - type: string
    description: String variant

`,pe=`oneOf:
  - type: string
    description: String variant
  - type: object
    description: Object variant
    properties:
      id:
        type: string
      count:
        type: integer
  - type: object
    description: Object variant
    properties:
      id:
        type: string
      count:
        type: integer

`,ce=`oneOf:
  - type: string
    description: String variant
  - type: object
    description: Object variant
    properties:
      id:
        type: string
      count:
        type: integer
  - type: array
    description: Array variant
    items:
      type: string

`,de=`oneOf:
  - type: object
    description: Object variant
    properties:
      id:
        type: string
      count:
        type: integer
  - type: array
    description: Array variant
    items:
      type: string

`,me=`oneOf:
  - type: string
    description: String variant
  - type: array
    description: Array variant
    items:
      type: string

`,_e=`oneOf:
  - type: string
    description: String variant
  - type: object
    description: Object variant
    properties:
      id:
        type: string
      count:
        type: integer

`,ye=`oneOf:
  - type: string
    description: Updated string variant
  - type: object
    description: Object variant
    properties:
      id:
        type: string
      count:
        type: integer

`,ge=`oneOf:
  - type: string
    description: String variant
  - type: object
    description: Object variant
    properties:
      id:
        type: string
        description: Updated id property
      count:
        type: integer

`,ve=`oneOf:
  - type: string
    description: String variant
  - type: array
    description: Array variant
    items:
      type: string
      description: Updated items schema

`,le=`oneOf:
  - type: string
    description: String variant
  - type: object
    description: Object variant
    properties:
      id:
        type: string
      count:
        type: integer
  - oneOf:
      - type: string
        description: Nested string
      - type: integer
        description: Nested integer

`,be=`oneOf:
  - type: string
    description: String variant
  - type: object
    description: Object variant
    properties:
      id:
        type: string
      count:
        type: integer

`,fe=Object.assign({"../../../../samples/json-schema-diffs/type-changes/extended/combiners-one-level/001-append-variant-string/before.yaml":X,"../../../../samples/json-schema-diffs/type-changes/extended/combiners-one-level/002-append-variant-object/before.yaml":Y,"../../../../samples/json-schema-diffs/type-changes/extended/combiners-one-level/003-append-variant-array/before.yaml":Z,"../../../../samples/json-schema-diffs/type-changes/extended/combiners-one-level/004-remove-variant-string/before.yaml":$,"../../../../samples/json-schema-diffs/type-changes/extended/combiners-one-level/005-remove-variant-object/before.yaml":ee,"../../../../samples/json-schema-diffs/type-changes/extended/combiners-one-level/006-remove-variant-array/before.yaml":ne,"../../../../samples/json-schema-diffs/type-changes/extended/combiners-one-level/007-change-variant-string/before.yaml":te,"../../../../samples/json-schema-diffs/type-changes/extended/combiners-one-level/008-change-variant-object/before.yaml":re,"../../../../samples/json-schema-diffs/type-changes/extended/combiners-one-level/009-change-variant-array/before.yaml":ae,"../../../../samples/json-schema-diffs/type-changes/extended/combiners-one-level/010-append-variant-nested-combiner/before.yaml":se,"../../../../samples/json-schema-diffs/type-changes/extended/combiners-one-level/011-remove-variant-nested-combiner/before.yaml":ie}),je=Object.assign({"../../../../samples/json-schema-diffs/type-changes/extended/combiners-one-level/001-append-variant-string/after.yaml":oe,"../../../../samples/json-schema-diffs/type-changes/extended/combiners-one-level/002-append-variant-object/after.yaml":pe,"../../../../samples/json-schema-diffs/type-changes/extended/combiners-one-level/003-append-variant-array/after.yaml":ce,"../../../../samples/json-schema-diffs/type-changes/extended/combiners-one-level/004-remove-variant-string/after.yaml":de,"../../../../samples/json-schema-diffs/type-changes/extended/combiners-one-level/005-remove-variant-object/after.yaml":me,"../../../../samples/json-schema-diffs/type-changes/extended/combiners-one-level/006-remove-variant-array/after.yaml":_e,"../../../../samples/json-schema-diffs/type-changes/extended/combiners-one-level/007-change-variant-string/after.yaml":ye,"../../../../samples/json-schema-diffs/type-changes/extended/combiners-one-level/008-change-variant-object/after.yaml":ge,"../../../../samples/json-schema-diffs/type-changes/extended/combiners-one-level/009-change-variant-array/after.yaml":ve,"../../../../samples/json-schema-diffs/type-changes/extended/combiners-one-level/010-append-variant-nested-combiner/after.yaml":le,"../../../../samples/json-schema-diffs/type-changes/extended/combiners-one-level/011-remove-variant-nested-combiner/after.yaml":be}),he=K(fe,je),Se=M(he),ke={title:"JSON Schema Diffs Suite/Combiners/Extended Combiners One Level",component:H,argTypes:P},e=Q(H,Se),n=e("001-append-variant-string"),t=e("002-append-variant-object"),r=e("003-append-variant-array"),a=e("004-remove-variant-string"),s=e("005-remove-variant-object"),i=e("006-remove-variant-array"),o=e("007-change-variant-string"),p=e("008-change-variant-object"),c=e("009-change-variant-array"),d=e("010-append-variant-nested-combiner"),m=e("011-remove-variant-nested-combiner");var _,y,g;n.parameters={...n.parameters,docs:{...(_=n.parameters)==null?void 0:_.docs,source:{originalSource:'createCaseStory("001-append-variant-string")',...(g=(y=n.parameters)==null?void 0:y.docs)==null?void 0:g.source}}};var v,l,b;t.parameters={...t.parameters,docs:{...(v=t.parameters)==null?void 0:v.docs,source:{originalSource:'createCaseStory("002-append-variant-object")',...(b=(l=t.parameters)==null?void 0:l.docs)==null?void 0:b.source}}};var f,j,h;r.parameters={...r.parameters,docs:{...(f=r.parameters)==null?void 0:f.docs,source:{originalSource:'createCaseStory("003-append-variant-array")',...(h=(j=r.parameters)==null?void 0:j.docs)==null?void 0:h.source}}};var S,u,O;a.parameters={...a.parameters,docs:{...(S=a.parameters)==null?void 0:S.docs,source:{originalSource:'createCaseStory("004-remove-variant-string")',...(O=(u=a.parameters)==null?void 0:u.docs)==null?void 0:O.source}}};var C,x,A;s.parameters={...s.parameters,docs:{...(C=s.parameters)==null?void 0:C.docs,source:{originalSource:'createCaseStory("005-remove-variant-object")',...(A=(x=s.parameters)==null?void 0:x.docs)==null?void 0:A.source}}};var D,N,J;i.parameters={...i.parameters,docs:{...(D=i.parameters)==null?void 0:D.docs,source:{originalSource:'createCaseStory("006-remove-variant-array")',...(J=(N=i.parameters)==null?void 0:N.docs)==null?void 0:J.source}}};var F,U,B;o.parameters={...o.parameters,docs:{...(F=o.parameters)==null?void 0:F.docs,source:{originalSource:'createCaseStory("007-change-variant-string")',...(B=(U=o.parameters)==null?void 0:U.docs)==null?void 0:B.source}}};var E,I,T;p.parameters={...p.parameters,docs:{...(E=p.parameters)==null?void 0:E.docs,source:{originalSource:'createCaseStory("008-change-variant-object")',...(T=(I=p.parameters)==null?void 0:I.docs)==null?void 0:T.source}}};var L,R,V;c.parameters={...c.parameters,docs:{...(L=c.parameters)==null?void 0:L.docs,source:{originalSource:'createCaseStory("009-change-variant-array")',...(V=(R=c.parameters)==null?void 0:R.docs)==null?void 0:V.source}}};var W,k,q;d.parameters={...d.parameters,docs:{...(W=d.parameters)==null?void 0:W.docs,source:{originalSource:'createCaseStory("010-append-variant-nested-combiner")',...(q=(k=d.parameters)==null?void 0:k.docs)==null?void 0:q.source}}};var w,z,G;m.parameters={...m.parameters,docs:{...(w=m.parameters)==null?void 0:w.docs,source:{originalSource:'createCaseStory("011-remove-variant-nested-combiner")',...(G=(z=m.parameters)==null?void 0:z.docs)==null?void 0:G.source}}};const qe=["Case_001_append_variant_string","Case_002_append_variant_object","Case_003_append_variant_array","Case_004_remove_variant_string","Case_005_remove_variant_object","Case_006_remove_variant_array","Case_007_change_variant_string","Case_008_change_variant_object","Case_009_change_variant_array","Case_010_append_variant_nested_combiner","Case_011_remove_variant_nested_combiner"];export{n as Case_001_append_variant_string,t as Case_002_append_variant_object,r as Case_003_append_variant_array,a as Case_004_remove_variant_string,s as Case_005_remove_variant_object,i as Case_006_remove_variant_array,o as Case_007_change_variant_string,p as Case_008_change_variant_object,c as Case_009_change_variant_array,d as Case_010_append_variant_nested_combiner,m as Case_011_remove_variant_nested_combiner,qe as __namedExportsOrder,ke as default};
