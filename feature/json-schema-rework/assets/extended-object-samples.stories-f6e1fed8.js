import{c as q}from"./diffs-samples-cases-1df1f3ae.js";import{c as w,J as k,j as z,a as G}from"./json-schema-diffs-utils-91655df0.js";import"./_commonjs-dynamic-modules-6308e768.js";import"./index-f46741a2.js";import"./AsyncApiOperationViewer-41da122b.js";import"./DiffBadge-636b527d.js";import"./IndexesNodeViewer-7234b4ff.js";import"./DdlTableDiffsViewer-956a7783.js";/* empty css              */import"./DdlTableViewer-82237eef.js";import"./GraphQLOperationDiffViewer-ad5e8f40.js";import"./GraphPropNodeViewer-47a3eb3c.js";import"./index-415bee12.js";import"./GraphQLOperationViewer-5f3933cf.js";import"./preprocess-6c565c6a.js";import"./parse-yaml-source-3e95a000.js";import"./public-api-99af098d.js";const H=`type: object
description: Sample object
properties:
  name:
    type: string

`,K=`type: object
description: Sample object
properties:
  name:
    type: string

`,L=`type: object
description: Sample object
properties:
  name:
    type: string

`,M=`type: object
description: Sample object
properties:
  name:
    type: string

`,Q=`type: object
description: Sample object
properties:
  name:
    type: string
patternProperties:
  ^x:
    type: string

`,U=`type: object
description: Sample object
properties:
  name:
    type: string
patternProperties:
  ^x:
    type: string

`,V=`type: object
description: Sample object
properties:
  name:
    type: string

`,W=`type: object
description: Sample object
properties:
  name:
    type: string
minProperties: 1
maxProperties: 5

`,X=`type: object
description: Sample object
properties:
  name:
    type: string
minProperties: 1
maxProperties: 5

`,Y=`type: object
description: Sample object
properties:
  name:
    type: string
additionalProperties: false

`,Z=`type: object
description: Sample object
properties:
  name:
    type: string
additionalProperties: true

`,$=`type: object
description: Sample object
properties:
  name:
    type: string
additionalProperties:
  type: string

`,ee=`type: object
description: Sample object
properties:
  name:
    type: string
patternProperties:
  ^x:
    type: string

`,te=`type: object
description: Sample object
properties:
  name:
    type: string

`,re=`type: object
description: Sample object
properties:
  name:
    type: string
patternProperties:
  ^y:
    type: integer

`,se=`type: object
description: Sample object
properties:
  name:
    type: string
minProperties: 1
maxProperties: 5

`,oe=`type: object
description: Sample object
properties:
  name:
    type: string

`,ae=`type: object
description: Sample object
properties:
  name:
    type: string
minProperties: 2
maxProperties: 10

`,ne=Object.assign({"../../../../samples/json-schema-diffs/type-changes/extended/object/001-additional-properties-false-added/before.yaml":H,"../../../../samples/json-schema-diffs/type-changes/extended/object/002-additional-properties-true-added/before.yaml":K,"../../../../samples/json-schema-diffs/type-changes/extended/object/003-additional-properties-schema-added/before.yaml":L,"../../../../samples/json-schema-diffs/type-changes/extended/object/004-pattern-properties-added/before.yaml":M,"../../../../samples/json-schema-diffs/type-changes/extended/object/005-pattern-properties-removed/before.yaml":Q,"../../../../samples/json-schema-diffs/type-changes/extended/object/006-pattern-properties-replaced/before.yaml":U,"../../../../samples/json-schema-diffs/type-changes/extended/object/007-property-count-bounds-added/before.yaml":V,"../../../../samples/json-schema-diffs/type-changes/extended/object/008-property-count-bounds-removed/before.yaml":W,"../../../../samples/json-schema-diffs/type-changes/extended/object/009-property-count-bounds-replaced/before.yaml":X}),pe=Object.assign({"../../../../samples/json-schema-diffs/type-changes/extended/object/001-additional-properties-false-added/after.yaml":Y,"../../../../samples/json-schema-diffs/type-changes/extended/object/002-additional-properties-true-added/after.yaml":Z,"../../../../samples/json-schema-diffs/type-changes/extended/object/003-additional-properties-schema-added/after.yaml":$,"../../../../samples/json-schema-diffs/type-changes/extended/object/004-pattern-properties-added/after.yaml":ee,"../../../../samples/json-schema-diffs/type-changes/extended/object/005-pattern-properties-removed/after.yaml":te,"../../../../samples/json-schema-diffs/type-changes/extended/object/006-pattern-properties-replaced/after.yaml":re,"../../../../samples/json-schema-diffs/type-changes/extended/object/007-property-count-bounds-added/after.yaml":se,"../../../../samples/json-schema-diffs/type-changes/extended/object/008-property-count-bounds-removed/after.yaml":oe,"../../../../samples/json-schema-diffs/type-changes/extended/object/009-property-count-bounds-replaced/after.yaml":ae}),de=q(ne,pe),ce=w(de),Je={title:"JSON Schema Diffs Suite/Extended Object Samples",component:k,argTypes:z},e=G(k,ce),t=e("001-additional-properties-false-added"),r=e("002-additional-properties-true-added"),s=e("003-additional-properties-schema-added"),o=e("004-pattern-properties-added"),a=e("005-pattern-properties-removed"),n=e("006-pattern-properties-replaced"),p=e("007-property-count-bounds-added"),d=e("008-property-count-bounds-removed"),c=e("009-property-count-bounds-replaced");var i,m,_;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:'createCaseStory("001-additional-properties-false-added")',...(_=(m=t.parameters)==null?void 0:m.docs)==null?void 0:_.source}}};var l,y,b;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:'createCaseStory("002-additional-properties-true-added")',...(b=(y=r.parameters)==null?void 0:y.docs)==null?void 0:b.source}}};var j,f,g;s.parameters={...s.parameters,docs:{...(j=s.parameters)==null?void 0:j.docs,source:{originalSource:'createCaseStory("003-additional-properties-schema-added")',...(g=(f=s.parameters)==null?void 0:f.docs)==null?void 0:g.source}}};var u,S,h;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:'createCaseStory("004-pattern-properties-added")',...(h=(S=o.parameters)==null?void 0:S.docs)==null?void 0:h.source}}};var C,v,x;a.parameters={...a.parameters,docs:{...(C=a.parameters)==null?void 0:C.docs,source:{originalSource:'createCaseStory("005-pattern-properties-removed")',...(x=(v=a.parameters)==null?void 0:v.docs)==null?void 0:x.source}}};var P,D,J;n.parameters={...n.parameters,docs:{...(P=n.parameters)==null?void 0:P.docs,source:{originalSource:'createCaseStory("006-pattern-properties-replaced")',...(J=(D=n.parameters)==null?void 0:D.docs)==null?void 0:J.source}}};var O,F,B;p.parameters={...p.parameters,docs:{...(O=p.parameters)==null?void 0:O.docs,source:{originalSource:'createCaseStory("007-property-count-bounds-added")',...(B=(F=p.parameters)==null?void 0:F.docs)==null?void 0:B.source}}};var E,I,T;d.parameters={...d.parameters,docs:{...(E=d.parameters)==null?void 0:E.docs,source:{originalSource:'createCaseStory("008-property-count-bounds-removed")',...(T=(I=d.parameters)==null?void 0:I.docs)==null?void 0:T.source}}};var A,N,R;c.parameters={...c.parameters,docs:{...(A=c.parameters)==null?void 0:A.docs,source:{originalSource:'createCaseStory("009-property-count-bounds-replaced")',...(R=(N=c.parameters)==null?void 0:N.docs)==null?void 0:R.source}}};const Oe=["Case_001_additional_properties_false_added","Case_002_additional_properties_true_added","Case_003_additional_properties_schema_added","Case_004_pattern_properties_added","Case_005_pattern_properties_removed","Case_006_pattern_properties_replaced","Case_007_property_count_bounds_added","Case_008_property_count_bounds_removed","Case_009_property_count_bounds_replaced"];export{t as Case_001_additional_properties_false_added,r as Case_002_additional_properties_true_added,s as Case_003_additional_properties_schema_added,o as Case_004_pattern_properties_added,a as Case_005_pattern_properties_removed,n as Case_006_pattern_properties_replaced,p as Case_007_property_count_bounds_added,d as Case_008_property_count_bounds_removed,c as Case_009_property_count_bounds_replaced,Oe as __namedExportsOrder,Je as default};
