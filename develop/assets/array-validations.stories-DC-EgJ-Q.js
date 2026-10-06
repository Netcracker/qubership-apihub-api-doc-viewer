import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{i as t,r as n}from"./sample-cases-DDoAHGgD.js";import{n as r,t as i}from"./json-schema-samples-cases-CskDrk9H.js";import{n as a,r as o,t as s}from"./json-schema-samples-common-DkZHwgzB.js";var c;function l(){return(l=e((()=>{c=`type: array
items:
  type: string
default:
  - alpha
  - beta
title: "[default] Arbitrary array matching items schema"

`})))()}var u;function d(){return(d=e((()=>{u=`type: array
items:
  type: string
example:
  - alpha
  - beta
  - gamma
title: "[example] One arbitrary array as example"

`})))()}var f;function p(){return(p=e((()=>{f=`type: array
items:
  type: string
examples:
  - - alpha
  - - alpha
    - beta
title: "[examples] Two example arrays matching items schema"

`})))()}var m;function h(){return(h=e((()=>{m=`type: array
items:
  type: string
minItems: 0
title: "[items-count] minItems = 0"

`})))()}var g;function _(){return(_=e((()=>{g=`type: array
items:
  type: string
minItems: 2
title: "[items-count] minItems = 2"

`})))()}var v;function y(){return(y=e((()=>{v=`type: array
items:
  type: string
maxItems: 5
title: "[items-count] maxItems = 5"

`})))()}var b;function x(){return(x=e((()=>{b=`type: array
items:
  type: string
minItems: 0
maxItems: 5
title: "[items-count] minItems = 0, maxItems = 5"

`})))()}var S;function C(){return(C=e((()=>{S=`type: array
items:
  type: string
minItems: 2
maxItems: 5
title: "[items-count] minItems = 2, maxItems = 5"

`})))()}var w;function T(){return(T=e((()=>{w=`type: array
items:
  type: string
uniqueItems: false
title: "[unique-items] uniqueItems = false"

`})))()}var E;function D(){return(D=e((()=>{E=`type: array
items:
  type: string
uniqueItems: true
title: "[unique-items] uniqueItems = true"

`})))()}var O,k,A,j,M,N,P,F,I,L,R,z,B,V,H;function U(){return(U=e((()=>{l(),d(),p(),h(),_(),y(),x(),C(),T(),D(),r(),t(),a(),O=i(Object.assign({"../../../../samples/json-schema/array-validations/001-default-arbitrary-array/sample.yaml":c,"../../../../samples/json-schema/array-validations/002-example-arbitrary-array/sample.yaml":u,"../../../../samples/json-schema/array-validations/003-examples-two-items/sample.yaml":f,"../../../../samples/json-schema/array-validations/004-min-items-0/sample.yaml":m,"../../../../samples/json-schema/array-validations/005-min-items-2/sample.yaml":g,"../../../../samples/json-schema/array-validations/006-max-items-5/sample.yaml":v,"../../../../samples/json-schema/array-validations/007-min-items-0-max-items-5/sample.yaml":b,"../../../../samples/json-schema/array-validations/008-min-items-2-max-items-5/sample.yaml":S,"../../../../samples/json-schema/array-validations/009-unique-items-false/sample.yaml":w,"../../../../samples/json-schema/array-validations/010-unique-items-true/sample.yaml":E})),k=n(O),A=s(k),j={...o,id:`json-schema-suite-array-validations`,title:`JSON Schema Suite/Array And Validations/Array  Validations`},M=A(`001-default-arbitrary-array`),N=A(`002-example-arbitrary-array`),P=A(`003-examples-two-items`),F=A(`004-min-items-0`),I=A(`005-min-items-2`),L=A(`006-max-items-5`),R=A(`007-min-items-0-max-items-5`),z=A(`008-min-items-2-max-items-5`),B=A(`009-unique-items-false`),V=A(`010-unique-items-true`),M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`createCaseStory("001-default-arbitrary-array")`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`createCaseStory("002-example-arbitrary-array")`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`createCaseStory("003-examples-two-items")`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`createCaseStory("004-min-items-0")`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`createCaseStory("005-min-items-2")`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`createCaseStory("006-max-items-5")`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`createCaseStory("007-min-items-0-max-items-5")`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`createCaseStory("008-min-items-2-max-items-5")`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`createCaseStory("009-unique-items-false")`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`createCaseStory("010-unique-items-true")`,...V.parameters?.docs?.source}}},H=[`Case_001_default_arbitrary_array`,`Case_002_example_arbitrary_array`,`Case_003_examples_two_items`,`Case_004_min_items_0`,`Case_005_min_items_2`,`Case_006_max_items_5`,`Case_007_min_items_0_max_items_5`,`Case_008_min_items_2_max_items_5`,`Case_009_unique_items_false`,`Case_010_unique_items_true`]})))()}U();export{M as Case_001_default_arbitrary_array,N as Case_002_example_arbitrary_array,P as Case_003_examples_two_items,F as Case_004_min_items_0,I as Case_005_min_items_2,L as Case_006_max_items_5,R as Case_007_min_items_0_max_items_5,z as Case_008_min_items_2_max_items_5,B as Case_009_unique_items_false,V as Case_010_unique_items_true,H as __namedExportsOrder,j as default};