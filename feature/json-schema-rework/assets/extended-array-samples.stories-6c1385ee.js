import{c as U}from"./diffs-samples-cases-1df1f3ae.js";import{c as k,J as R,j as z,a as G}from"./json-schema-diffs-utils-c4d583df.js";import"./_commonjs-dynamic-modules-6308e768.js";import"./index-f46741a2.js";import"./AsyncApiOperationViewer-1c38bb10.js";import"./DiffBadge-04d5bd8d.js";import"./IndexesNodeViewer-d4b52b40.js";import"./DdlTableDiffsViewer-a7bf7281.js";/* empty css              */import"./DdlTableViewer-72898774.js";import"./GraphQLOperationDiffViewer-65ccf201.js";import"./GraphPropNodeViewer-114b5f87.js";import"./index-415bee12.js";import"./GraphQLOperationViewer-f7e37286.js";import"./preprocess-9a34e6e2.js";import"./parse-yaml-source-3e95a000.js";import"./public-api-99af098d.js";const H=`type: array
description: Tuple array
items:
  - type: string
  - type: integer

`,K=`type: array
description: Tuple array
items:
  - type: string
  - type: integer
additionalItems:
  type: boolean

`,L=`type: array
description: Tuple array
items:
  - type: string
  - type: integer
additionalItems:
  type: boolean

`,M=`type: array
description: Array with single items schema
items:
  type: string
  description: Item schema

`,P=`type: array
description: Tuple array
items:
  - type: string
  - type: integer
additionalItems: false

`,Q=`type: array
description: Tuple array with three slots
items:
  - type: string
  - type: integer
  - type: boolean

`,V=`type: array
description: Array with single items schema
items:
  type: string
  description: Item schema

`,W=`type: array
description: Array with single items schema
items:
  type: string
  description: Item schema

`,X=`type: array
description: Array with single items schema
items:
  type: string
  description: Item schema
uniqueItems: true

`,Y=`type: array
description: Tuple array
items:
  - type: string
  - type: integer
additionalItems:
  type: boolean

`,Z=`type: array
description: Tuple array
items:
  - type: string
  - type: integer

`,$=`type: array
description: Tuple array
items:
  - type: string
  - type: integer
additionalItems:
  type: number

`,ee=`type: array
description: Array with tuple items
items:
  - type: string
  - type: integer

`,te=`type: array
description: Tuple array with appended slot
items:
  - type: string
  - type: integer
  - type: boolean
additionalItems: false

`,ae=`type: array
description: Tuple array
items:
  - type: string
  - type: integer

`,se=`type: array
description: Array with single items schema
items:
  type: string
  description: Updated item schema

`,re=`type: array
description: Array with single items schema
items:
  type: string
  description: Item schema
uniqueItems: true

`,ne=`type: array
description: Array with single items schema
items:
  type: string
  description: Item schema

`,ie=Object.assign({"../../../../samples/json-schema-diffs/type-changes/extended/array/001-additional-items-added/before.yaml":H,"../../../../samples/json-schema-diffs/type-changes/extended/array/002-additional-items-removed/before.yaml":K,"../../../../samples/json-schema-diffs/type-changes/extended/array/003-additional-items-type-changed/before.yaml":L,"../../../../samples/json-schema-diffs/type-changes/extended/array/004-items-schema-to-array/before.yaml":M,"../../../../samples/json-schema-diffs/type-changes/extended/array/005-tuple-item-appended/before.yaml":P,"../../../../samples/json-schema-diffs/type-changes/extended/array/006-tuple-item-removed/before.yaml":Q,"../../../../samples/json-schema-diffs/type-changes/extended/array/007-items-schema-description-changed/before.yaml":V,"../../../../samples/json-schema-diffs/type-changes/extended/array/008-unique-items-added/before.yaml":W,"../../../../samples/json-schema-diffs/type-changes/extended/array/009-unique-items-removed/before.yaml":X}),oe=Object.assign({"../../../../samples/json-schema-diffs/type-changes/extended/array/001-additional-items-added/after.yaml":Y,"../../../../samples/json-schema-diffs/type-changes/extended/array/002-additional-items-removed/after.yaml":Z,"../../../../samples/json-schema-diffs/type-changes/extended/array/003-additional-items-type-changed/after.yaml":$,"../../../../samples/json-schema-diffs/type-changes/extended/array/004-items-schema-to-array/after.yaml":ee,"../../../../samples/json-schema-diffs/type-changes/extended/array/005-tuple-item-appended/after.yaml":te,"../../../../samples/json-schema-diffs/type-changes/extended/array/006-tuple-item-removed/after.yaml":ae,"../../../../samples/json-schema-diffs/type-changes/extended/array/007-items-schema-description-changed/after.yaml":se,"../../../../samples/json-schema-diffs/type-changes/extended/array/008-unique-items-added/after.yaml":re,"../../../../samples/json-schema-diffs/type-changes/extended/array/009-unique-items-removed/after.yaml":ne}),me=U(ie,oe),de=k(me),Te={title:"JSON Schema Diffs Suite/Extended Array Samples",component:R,argTypes:z},e=G(R,de),t=e("001-additional-items-added"),a=e("002-additional-items-removed"),s=e("003-additional-items-type-changed"),r=e("004-items-schema-to-array"),n=e("005-tuple-item-appended"),i=e("006-tuple-item-removed"),o=e("007-items-schema-description-changed"),m=e("008-unique-items-added"),d=e("009-unique-items-removed");var p,c,y;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:'createCaseStory("001-additional-items-added")',...(y=(c=t.parameters)==null?void 0:c.docs)==null?void 0:y.source}}};var _,l,g;a.parameters={...a.parameters,docs:{...(_=a.parameters)==null?void 0:_.docs,source:{originalSource:'createCaseStory("002-additional-items-removed")',...(g=(l=a.parameters)==null?void 0:l.docs)==null?void 0:g.source}}};var h,u,f;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:'createCaseStory("003-additional-items-type-changed")',...(f=(u=s.parameters)==null?void 0:u.docs)==null?void 0:f.source}}};var b,v,S;r.parameters={...r.parameters,docs:{...(b=r.parameters)==null?void 0:b.docs,source:{originalSource:'createCaseStory("004-items-schema-to-array")',...(S=(v=r.parameters)==null?void 0:v.docs)==null?void 0:S.source}}};var C,j,x;n.parameters={...n.parameters,docs:{...(C=n.parameters)==null?void 0:C.docs,source:{originalSource:'createCaseStory("005-tuple-item-appended")',...(x=(j=n.parameters)==null?void 0:j.docs)==null?void 0:x.source}}};var I,q,T;i.parameters={...i.parameters,docs:{...(I=i.parameters)==null?void 0:I.docs,source:{originalSource:'createCaseStory("006-tuple-item-removed")',...(T=(q=i.parameters)==null?void 0:q.docs)==null?void 0:T.source}}};var w,A,D;o.parameters={...o.parameters,docs:{...(w=o.parameters)==null?void 0:w.docs,source:{originalSource:'createCaseStory("007-items-schema-description-changed")',...(D=(A=o.parameters)==null?void 0:A.docs)==null?void 0:D.source}}};var J,O,F;m.parameters={...m.parameters,docs:{...(J=m.parameters)==null?void 0:J.docs,source:{originalSource:'createCaseStory("008-unique-items-added")',...(F=(O=m.parameters)==null?void 0:O.docs)==null?void 0:F.source}}};var B,E,N;d.parameters={...d.parameters,docs:{...(B=d.parameters)==null?void 0:B.docs,source:{originalSource:'createCaseStory("009-unique-items-removed")',...(N=(E=d.parameters)==null?void 0:E.docs)==null?void 0:N.source}}};const we=["Case_001_additional_items_added","Case_002_additional_items_removed","Case_003_additional_items_type_changed","Case_004_items_schema_to_array","Case_005_tuple_item_appended","Case_006_tuple_item_removed","Case_007_items_schema_description_changed","Case_008_unique_items_added","Case_009_unique_items_removed"];export{t as Case_001_additional_items_added,a as Case_002_additional_items_removed,s as Case_003_additional_items_type_changed,r as Case_004_items_schema_to_array,n as Case_005_tuple_item_appended,i as Case_006_tuple_item_removed,o as Case_007_items_schema_description_changed,m as Case_008_unique_items_added,d as Case_009_unique_items_removed,we as __namedExportsOrder,Te as default};
