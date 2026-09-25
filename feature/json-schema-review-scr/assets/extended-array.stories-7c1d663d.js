import{c as J}from"./diffs-samples-cases-1df1f3ae.js";import{c as O,d as D,j as F,b as B}from"./json-schema-diffs-utils-0f350307.js";import"./_commonjs-dynamic-modules-6308e768.js";import"./index-f46741a2.js";import"./AsyncApiOperationViewer-51fb571b.js";import"./UxBadge-3d9cd0ec.js";import"./IndexesNodeViewer-bc39d3de.js";import"./DdlTableDiffsViewer-5f4cf09a.js";/* empty css              */import"./DdlTableViewer-30ab278b.js";import"./GraphQLOperationDiffViewer-a56ad3af.js";import"./GraphPropNodeViewer-0af21220.js";import"./index-415bee12.js";import"./GraphQLOperationViewer-19ba9549.js";import"./preprocess-8acbbf55.js";import"./parse-yaml-source-3e95a000.js";import"./public-api-99af098d.js";import"./combiner-changed-variant-43f703e4.js";const E=`type: array
description: Tuple array
items:
  - type: string
  - type: integer

`,N=`type: array
description: Tuple array
items:
  - type: string
  - type: integer
additionalItems:
  type: boolean

`,R=`type: array
description: Tuple array
items:
  - type: string
  - type: integer
additionalItems:
  type: boolean

`,U=`type: array
description: Array with single items schema
items:
  type: string
  description: Item schema

`,V=`type: array
description: Tuple array
items:
  - type: string
  - type: integer
additionalItems: false

`,W=`type: array
description: Tuple array with three slots
items:
  - type: string
  - type: integer
  - type: boolean

`,k=`type: array
description: Array with single items schema
items:
  type: string
  description: Item schema

`,q=`type: array
description: Tuple array
items:
  - type: string
  - type: integer
additionalItems:
  type: boolean

`,z=`type: array
description: Tuple array
items:
  - type: string
  - type: integer

`,G=`type: array
description: Tuple array
items:
  - type: string
  - type: integer
additionalItems:
  type: number

`,H=`type: array
description: Array with tuple items
items:
  - type: string
  - type: integer

`,K=`type: array
description: Tuple array with appended slot
items:
  - type: string
  - type: integer
  - type: boolean
additionalItems: false

`,L=`type: array
description: Tuple array
items:
  - type: string
  - type: integer

`,M=`type: array
description: Array with single items schema
items:
  type: string
  description: Updated item schema

`,P=Object.assign({"../../../../samples/json-schema-diffs/type-changes/extended/array/001-additional-items-added/before.yaml":E,"../../../../samples/json-schema-diffs/type-changes/extended/array/002-additional-items-removed/before.yaml":N,"../../../../samples/json-schema-diffs/type-changes/extended/array/003-additional-items-type-changed/before.yaml":R,"../../../../samples/json-schema-diffs/type-changes/extended/array/004-items-schema-to-array/before.yaml":U,"../../../../samples/json-schema-diffs/type-changes/extended/array/005-tuple-item-appended/before.yaml":V,"../../../../samples/json-schema-diffs/type-changes/extended/array/006-tuple-item-removed/before.yaml":W,"../../../../samples/json-schema-diffs/type-changes/extended/array/007-items-schema-description-changed/before.yaml":k}),Q=Object.assign({"../../../../samples/json-schema-diffs/type-changes/extended/array/001-additional-items-added/after.yaml":q,"../../../../samples/json-schema-diffs/type-changes/extended/array/002-additional-items-removed/after.yaml":z,"../../../../samples/json-schema-diffs/type-changes/extended/array/003-additional-items-type-changed/after.yaml":G,"../../../../samples/json-schema-diffs/type-changes/extended/array/004-items-schema-to-array/after.yaml":H,"../../../../samples/json-schema-diffs/type-changes/extended/array/005-tuple-item-appended/after.yaml":K,"../../../../samples/json-schema-diffs/type-changes/extended/array/006-tuple-item-removed/after.yaml":L,"../../../../samples/json-schema-diffs/type-changes/extended/array/007-items-schema-description-changed/after.yaml":M}),X=J(P,Q),Y=O(X),he={title:"JSON Schema Diffs Suite/Array Items And Additional Items/Extended Array",component:D,argTypes:F},e=B(D,Y),a=e("001-additional-items-added"),t=e("002-additional-items-removed"),s=e("003-additional-items-type-changed"),r=e("004-items-schema-to-array"),n=e("005-tuple-item-appended"),i=e("006-tuple-item-removed"),o=e("007-items-schema-description-changed");var m,d,p;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:'createCaseStory("001-additional-items-added")',...(p=(d=a.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};var c,y,_;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:'createCaseStory("002-additional-items-removed")',...(_=(y=t.parameters)==null?void 0:y.docs)==null?void 0:_.source}}};var l,g,h;s.parameters={...s.parameters,docs:{...(l=s.parameters)==null?void 0:l.docs,source:{originalSource:'createCaseStory("003-additional-items-type-changed")',...(h=(g=s.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};var f,u,b;r.parameters={...r.parameters,docs:{...(f=r.parameters)==null?void 0:f.docs,source:{originalSource:'createCaseStory("004-items-schema-to-array")',...(b=(u=r.parameters)==null?void 0:u.docs)==null?void 0:b.source}}};var S,v,C;n.parameters={...n.parameters,docs:{...(S=n.parameters)==null?void 0:S.docs,source:{originalSource:'createCaseStory("005-tuple-item-appended")',...(C=(v=n.parameters)==null?void 0:v.docs)==null?void 0:C.source}}};var j,x,I;i.parameters={...i.parameters,docs:{...(j=i.parameters)==null?void 0:j.docs,source:{originalSource:'createCaseStory("006-tuple-item-removed")',...(I=(x=i.parameters)==null?void 0:x.docs)==null?void 0:I.source}}};var T,A,w;o.parameters={...o.parameters,docs:{...(T=o.parameters)==null?void 0:T.docs,source:{originalSource:'createCaseStory("007-items-schema-description-changed")',...(w=(A=o.parameters)==null?void 0:A.docs)==null?void 0:w.source}}};const fe=["Case_001_additional_items_added","Case_002_additional_items_removed","Case_003_additional_items_type_changed","Case_004_items_schema_to_array","Case_005_tuple_item_appended","Case_006_tuple_item_removed","Case_007_items_schema_description_changed"];export{a as Case_001_additional_items_added,t as Case_002_additional_items_removed,s as Case_003_additional_items_type_changed,r as Case_004_items_schema_to_array,n as Case_005_tuple_item_appended,i as Case_006_tuple_item_removed,o as Case_007_items_schema_description_changed,fe as __namedExportsOrder,he as default};
