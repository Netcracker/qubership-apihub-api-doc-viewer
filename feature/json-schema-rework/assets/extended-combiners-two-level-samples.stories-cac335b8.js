import{c as P}from"./diffs-samples-cases-1df1f3ae.js";import{c as Q,J as M,j as V,a as W}from"./json-schema-diffs-utils-66c82383.js";import"./_commonjs-dynamic-modules-6308e768.js";import"./index-f46741a2.js";import"./AsyncApiOperationViewer-dc37219f.js";import"./DiffBadge-ceca5443.js";import"./IndexesNodeViewer-94209342.js";import"./DdlTableDiffsViewer-53cd81ea.js";/* empty css              */import"./DdlTableViewer-667c6095.js";import"./GraphQLOperationDiffViewer-5cbdc4b9.js";import"./GraphPropNodeViewer-587f63f5.js";import"./index-415bee12.js";import"./GraphQLOperationViewer-f77a6d51.js";import"./preprocess-d9011258.js";import"./parse-yaml-source-3e95a000.js";import"./public-api-99af098d.js";const X=`type: object
description: Root with nested combiner property
properties:
  payload:
    oneOf:
      - type: string
        description: String variant
      - type: object
        description: Object variant
        properties:
          id:
            type: string
          count:
            type: integer

`,Y=`type: object
description: Root with nested combiner property
properties:
  payload:
    oneOf:
      - type: string
        description: String variant
      - type: object
        description: Object variant
        properties:
          id:
            type: string
          count:
            type: integer

`,Z=`type: object
description: Root with nested combiner property
properties:
  payload:
    oneOf:
      - type: string
        description: String variant
      - type: object
        description: Object variant
        properties:
          id:
            type: string
          count:
            type: integer

`,$=`type: object
description: Root with nested combiner property
properties:
  payload:
    oneOf:
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

`,ee=`type: object
description: Root with nested combiner property
properties:
  payload:
    oneOf:
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

`,te=`type: object
description: Root with nested combiner property
properties:
  payload:
    oneOf:
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

`,ne=`type: object
description: Root with nested combiner property
properties:
  payload:
    oneOf:
      - type: string
        description: String variant
      - type: object
        description: Object variant
        properties:
          id:
            type: string
          count:
            type: integer

`,re=`type: object
description: Root with nested combiner property
properties:
  payload:
    oneOf:
      - type: string
        description: String variant
      - type: object
        description: Object variant
        properties:
          id:
            type: string
          count:
            type: integer

`,oe=`type: object
description: Root with nested combiner property
properties:
  payload:
    oneOf:
      - type: string
        description: String variant
      - type: array
        description: Array variant
        items:
          type: string

`,ae=`type: object
description: Root with nested combiner property
properties:
  payload:
    oneOf:
      - type: string
        description: String variant
      - type: object
        description: Object variant
        properties:
          id:
            type: string
          count:
            type: integer

`,ie=`type: object
description: Root with nested combiner property
properties:
  payload:
    oneOf:
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

`,se=`type: object
description: Root with nested combiner property
properties:
  payload:
    oneOf:
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

`,pe=`type: object
description: Root with nested combiner property
properties:
  payload:
    oneOf:
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

`,ce=`type: object
description: Root with nested combiner property
properties:
  payload:
    oneOf:
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

`,de=`type: object
description: Root with nested combiner property
properties:
  payload:
    oneOf:
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

`,le=`type: object
description: Root with nested combiner property
properties:
  payload:
    oneOf:
      - type: string
        description: String variant
      - type: array
        description: Array variant
        items:
          type: string

`,ye=`type: object
description: Root with nested combiner property
properties:
  payload:
    oneOf:
      - type: string
        description: String variant
      - type: object
        description: Object variant
        properties:
          id:
            type: string
          count:
            type: integer

`,ve=`type: object
description: Root with nested combiner property
properties:
  payload:
    oneOf:
      - type: string
        description: Updated string variant
      - type: object
        description: Object variant
        properties:
          id:
            type: string
          count:
            type: integer

`,_e=`type: object
description: Root with nested combiner property
properties:
  payload:
    oneOf:
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

`,me=`type: object
description: Root with nested combiner property
properties:
  payload:
    oneOf:
      - type: string
        description: String variant
      - type: array
        description: Array variant
        items:
          type: string
          description: Updated items schema

`,ge=`type: object
description: Root with nested combiner property
properties:
  payload:
    oneOf:
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

`,be=`type: object
description: Root with nested combiner property
properties:
  payload:
    oneOf:
      - type: string
        description: String variant
      - type: object
        description: Object variant
        properties:
          id:
            type: string
          count:
            type: integer

`,we=Object.assign({"../../../../samples/json-schema-diffs/type-changes/extended/combiners-two-level/001-two-level-append-variant-string/before.yaml":X,"../../../../samples/json-schema-diffs/type-changes/extended/combiners-two-level/002-two-level-append-variant-object/before.yaml":Y,"../../../../samples/json-schema-diffs/type-changes/extended/combiners-two-level/003-two-level-append-variant-array/before.yaml":Z,"../../../../samples/json-schema-diffs/type-changes/extended/combiners-two-level/004-two-level-remove-variant-string/before.yaml":$,"../../../../samples/json-schema-diffs/type-changes/extended/combiners-two-level/005-two-level-remove-variant-object/before.yaml":ee,"../../../../samples/json-schema-diffs/type-changes/extended/combiners-two-level/006-two-level-remove-variant-array/before.yaml":te,"../../../../samples/json-schema-diffs/type-changes/extended/combiners-two-level/007-two-level-change-variant-string/before.yaml":ne,"../../../../samples/json-schema-diffs/type-changes/extended/combiners-two-level/008-two-level-change-variant-object/before.yaml":re,"../../../../samples/json-schema-diffs/type-changes/extended/combiners-two-level/009-two-level-change-variant-array/before.yaml":oe,"../../../../samples/json-schema-diffs/type-changes/extended/combiners-two-level/010-two-level-append-variant-nested-combiner/before.yaml":ae,"../../../../samples/json-schema-diffs/type-changes/extended/combiners-two-level/011-two-level-remove-variant-nested-combiner/before.yaml":ie}),je=Object.assign({"../../../../samples/json-schema-diffs/type-changes/extended/combiners-two-level/001-two-level-append-variant-string/after.yaml":se,"../../../../samples/json-schema-diffs/type-changes/extended/combiners-two-level/002-two-level-append-variant-object/after.yaml":pe,"../../../../samples/json-schema-diffs/type-changes/extended/combiners-two-level/003-two-level-append-variant-array/after.yaml":ce,"../../../../samples/json-schema-diffs/type-changes/extended/combiners-two-level/004-two-level-remove-variant-string/after.yaml":de,"../../../../samples/json-schema-diffs/type-changes/extended/combiners-two-level/005-two-level-remove-variant-object/after.yaml":le,"../../../../samples/json-schema-diffs/type-changes/extended/combiners-two-level/006-two-level-remove-variant-array/after.yaml":ye,"../../../../samples/json-schema-diffs/type-changes/extended/combiners-two-level/007-two-level-change-variant-string/after.yaml":ve,"../../../../samples/json-schema-diffs/type-changes/extended/combiners-two-level/008-two-level-change-variant-object/after.yaml":_e,"../../../../samples/json-schema-diffs/type-changes/extended/combiners-two-level/009-two-level-change-variant-array/after.yaml":me,"../../../../samples/json-schema-diffs/type-changes/extended/combiners-two-level/010-two-level-append-variant-nested-combiner/after.yaml":ge,"../../../../samples/json-schema-diffs/type-changes/extended/combiners-two-level/011-two-level-remove-variant-nested-combiner/after.yaml":be}),fe=P(we,je),he=Q(fe),ke={title:"JSON Schema Diffs Suite/Extended Combiners Two Level Samples",component:M,argTypes:V},e=W(M,he),t=e("001-two-level-append-variant-string"),n=e("002-two-level-append-variant-object"),r=e("003-two-level-append-variant-array"),o=e("004-two-level-remove-variant-string"),a=e("005-two-level-remove-variant-object"),i=e("006-two-level-remove-variant-array"),s=e("007-two-level-change-variant-string"),p=e("008-two-level-change-variant-object"),c=e("009-two-level-change-variant-array"),d=e("010-two-level-append-variant-nested-combiner"),l=e("011-two-level-remove-variant-nested-combiner");var y,v,_;t.parameters={...t.parameters,docs:{...(y=t.parameters)==null?void 0:y.docs,source:{originalSource:'createCaseStory("001-two-level-append-variant-string")',...(_=(v=t.parameters)==null?void 0:v.docs)==null?void 0:_.source}}};var m,g,b;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:'createCaseStory("002-two-level-append-variant-object")',...(b=(g=n.parameters)==null?void 0:g.docs)==null?void 0:b.source}}};var w,j,f;r.parameters={...r.parameters,docs:{...(w=r.parameters)==null?void 0:w.docs,source:{originalSource:'createCaseStory("003-two-level-append-variant-array")',...(f=(j=r.parameters)==null?void 0:j.docs)==null?void 0:f.source}}};var h,S,u;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:'createCaseStory("004-two-level-remove-variant-string")',...(u=(S=o.parameters)==null?void 0:S.docs)==null?void 0:u.source}}};var O,C,x;a.parameters={...a.parameters,docs:{...(O=a.parameters)==null?void 0:O.docs,source:{originalSource:'createCaseStory("005-two-level-remove-variant-object")',...(x=(C=a.parameters)==null?void 0:C.docs)==null?void 0:x.source}}};var R,A,D;i.parameters={...i.parameters,docs:{...(R=i.parameters)==null?void 0:R.docs,source:{originalSource:'createCaseStory("006-two-level-remove-variant-array")',...(D=(A=i.parameters)==null?void 0:A.docs)==null?void 0:D.source}}};var J,N,F;s.parameters={...s.parameters,docs:{...(J=s.parameters)==null?void 0:J.docs,source:{originalSource:'createCaseStory("007-two-level-change-variant-string")',...(F=(N=s.parameters)==null?void 0:N.docs)==null?void 0:F.source}}};var T,U,B;p.parameters={...p.parameters,docs:{...(T=p.parameters)==null?void 0:T.docs,source:{originalSource:'createCaseStory("008-two-level-change-variant-object")',...(B=(U=p.parameters)==null?void 0:U.docs)==null?void 0:B.source}}};var E,I,L;c.parameters={...c.parameters,docs:{...(E=c.parameters)==null?void 0:E.docs,source:{originalSource:'createCaseStory("009-two-level-change-variant-array")',...(L=(I=c.parameters)==null?void 0:I.docs)==null?void 0:L.source}}};var k,q,z;d.parameters={...d.parameters,docs:{...(k=d.parameters)==null?void 0:k.docs,source:{originalSource:'createCaseStory("010-two-level-append-variant-nested-combiner")',...(z=(q=d.parameters)==null?void 0:q.docs)==null?void 0:z.source}}};var G,H,K;l.parameters={...l.parameters,docs:{...(G=l.parameters)==null?void 0:G.docs,source:{originalSource:'createCaseStory("011-two-level-remove-variant-nested-combiner")',...(K=(H=l.parameters)==null?void 0:H.docs)==null?void 0:K.source}}};const qe=["Case_001_two_level_append_variant_string","Case_002_two_level_append_variant_object","Case_003_two_level_append_variant_array","Case_004_two_level_remove_variant_string","Case_005_two_level_remove_variant_object","Case_006_two_level_remove_variant_array","Case_007_two_level_change_variant_string","Case_008_two_level_change_variant_object","Case_009_two_level_change_variant_array","Case_010_two_level_append_variant_nested_combiner","Case_011_two_level_remove_variant_nested_combiner"];export{t as Case_001_two_level_append_variant_string,n as Case_002_two_level_append_variant_object,r as Case_003_two_level_append_variant_array,o as Case_004_two_level_remove_variant_string,a as Case_005_two_level_remove_variant_object,i as Case_006_two_level_remove_variant_array,s as Case_007_two_level_change_variant_string,p as Case_008_two_level_change_variant_object,c as Case_009_two_level_change_variant_array,d as Case_010_two_level_append_variant_nested_combiner,l as Case_011_two_level_remove_variant_nested_combiner,qe as __namedExportsOrder,ke as default};
