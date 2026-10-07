import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{i as t,r as n}from"./sample-cases-DDoAHGgD.js";import{n as r,t as i}from"./diffs-samples-cases-Bp0vvMWA.js";import{c as a,l as o,n as s,o as c}from"./json-schema-diffs-utils-DGJ6v-OM.js";var l;function u(){return(u=e((()=>{l=`type: array
description: Tuple array
items:
  - type: string
  - type: integer

`})))()}var d;function f(){return(f=e((()=>{d=`type: array
description: Tuple array
items:
  - type: string
  - type: integer
additionalItems:
  type: boolean

`})))()}var p;function m(){return(m=e((()=>{p=`type: array
description: Tuple array
items:
  - type: string
  - type: integer
additionalItems:
  type: boolean

`})))()}var h;function g(){return(g=e((()=>{h=`type: array
description: Array with single items schema
items:
  type: string
  description: Item schema

`})))()}var _;function v(){return(v=e((()=>{_=`type: array
description: Tuple array
items:
  - type: string
  - type: integer
additionalItems: false

`})))()}var y;function b(){return(b=e((()=>{y=`type: array
description: Tuple array with three slots
items:
  - type: string
  - type: integer
  - type: boolean

`})))()}var x;function S(){return(S=e((()=>{x=`type: array
description: Array with single items schema
items:
  type: string
  description: Item schema

`})))()}var C;function w(){return(w=e((()=>{C=`type: array
description: Tuple array
items:
  - type: string
  - type: integer
additionalItems:
  type: boolean

`})))()}var T;function E(){return(E=e((()=>{T=`type: array
description: Tuple array
items:
  - type: string
  - type: integer

`})))()}var D;function O(){return(O=e((()=>{D=`type: array
description: Tuple array
items:
  - type: string
  - type: integer
additionalItems:
  type: number

`})))()}var k;function A(){return(A=e((()=>{k=`type: array
description: Array with tuple items
items:
  - type: string
  - type: integer

`})))()}var j;function M(){return(M=e((()=>{j=`type: array
description: Tuple array with appended slot
items:
  - type: string
  - type: integer
  - type: boolean
additionalItems: false

`})))()}var N;function P(){return(P=e((()=>{N=`type: array
description: Tuple array
items:
  - type: string
  - type: integer

`})))()}var F;function I(){return(I=e((()=>{F=`type: array
description: Array with single items schema
items:
  type: string
  description: Updated item schema

`})))()}var L,R,z,B,V,H,U,W,G,K,q,J;function Y(){return(Y=e((()=>{u(),f(),m(),g(),v(),b(),S(),w(),E(),O(),A(),M(),P(),I(),r(),a(),t(),L=i(Object.assign({"../../../../samples/json-schema-diffs/type-changes/extended/array/001-additional-items-added/before.yaml":l,"../../../../samples/json-schema-diffs/type-changes/extended/array/002-additional-items-removed/before.yaml":d,"../../../../samples/json-schema-diffs/type-changes/extended/array/003-additional-items-type-changed/before.yaml":p,"../../../../samples/json-schema-diffs/type-changes/extended/array/004-items-schema-to-array/before.yaml":h,"../../../../samples/json-schema-diffs/type-changes/extended/array/005-tuple-item-appended/before.yaml":_,"../../../../samples/json-schema-diffs/type-changes/extended/array/006-tuple-item-removed/before.yaml":y,"../../../../samples/json-schema-diffs/type-changes/extended/array/007-items-schema-description-changed/before.yaml":x}),Object.assign({"../../../../samples/json-schema-diffs/type-changes/extended/array/001-additional-items-added/after.yaml":C,"../../../../samples/json-schema-diffs/type-changes/extended/array/002-additional-items-removed/after.yaml":T,"../../../../samples/json-schema-diffs/type-changes/extended/array/003-additional-items-type-changed/after.yaml":D,"../../../../samples/json-schema-diffs/type-changes/extended/array/004-items-schema-to-array/after.yaml":k,"../../../../samples/json-schema-diffs/type-changes/extended/array/005-tuple-item-appended/after.yaml":j,"../../../../samples/json-schema-diffs/type-changes/extended/array/006-tuple-item-removed/after.yaml":N,"../../../../samples/json-schema-diffs/type-changes/extended/array/007-items-schema-description-changed/after.yaml":F})),R=n(L),z={title:`JSON Schema Diffs Suite/Array Items And Additional Items/Extended Array`,component:s,argTypes:o},B=c(s,R),V=B(`001-additional-items-added`),H=B(`002-additional-items-removed`),U=B(`003-additional-items-type-changed`),W=B(`004-items-schema-to-array`),G=B(`005-tuple-item-appended`),K=B(`006-tuple-item-removed`),q=B(`007-items-schema-description-changed`),V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`createCaseStory("001-additional-items-added")`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`createCaseStory("002-additional-items-removed")`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`createCaseStory("003-additional-items-type-changed")`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`createCaseStory("004-items-schema-to-array")`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`createCaseStory("005-tuple-item-appended")`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`createCaseStory("006-tuple-item-removed")`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`createCaseStory("007-items-schema-description-changed")`,...q.parameters?.docs?.source}}},J=[`Case_001_additional_items_added`,`Case_002_additional_items_removed`,`Case_003_additional_items_type_changed`,`Case_004_items_schema_to_array`,`Case_005_tuple_item_appended`,`Case_006_tuple_item_removed`,`Case_007_items_schema_description_changed`]})))()}Y();export{V as Case_001_additional_items_added,H as Case_002_additional_items_removed,U as Case_003_additional_items_type_changed,W as Case_004_items_schema_to_array,G as Case_005_tuple_item_appended,K as Case_006_tuple_item_removed,q as Case_007_items_schema_description_changed,J as __namedExportsOrder,z as default};