import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{i as t,r as n}from"./sample-cases-DDoAHGgD.js";import{n as r,t as i}from"./json-schema-samples-cases-CskDrk9H.js";import{n as a,r as o,t as s}from"./json-schema-samples-common-BoDTGKoe.js";var c;function l(){return(l=e((()=>{c=`type: object
properties:
  name:
    type: string
  id:
    type: integer
default: {}
title: "[default] default = {}"

`})))()}var u;function d(){return(d=e((()=>{u=`type: object
properties:
  name:
    type: string
  id:
    type: integer
default:
  name: sample
  id: 1
title: "[default] default = small object"

`})))()}var f;function p(){return(p=e((()=>{f=`type: object
properties:
  name:
    type: string
  id:
    type: integer
example: {}
title: "[example] example = {}"

`})))()}var m;function h(){return(h=e((()=>{m=`type: object
properties:
  name:
    type: string
  id:
    type: integer
example:
  name: sample
  id: 1
title: "[example] example = small object"

`})))()}var g;function _(){return(_=e((()=>{g=`type: object
properties:
  name:
    type: string
  id:
    type: integer
examples:
  - {}
title: "[examples] examples = [{}]"

`})))()}var v;function y(){return(y=e((()=>{v=`type: object
properties:
  name:
    type: string
  id:
    type: integer
examples:
  - name: sample
    id: 1
title: "[examples] examples = [small object]"

`})))()}var b;function x(){return(x=e((()=>{b=`type: object
properties:
  name:
    type: string
  id:
    type: integer
examples:
  - name: sample
    id: 1
  - name: other
    id: 2
title: "[examples] examples = [object 1, object 2]"

`})))()}var S;function C(){return(C=e((()=>{S=`type: object
properties:
  name:
    type: string
  id:
    type: integer
minProperties: 0
title: "[properties-count] minProperties = 0"

`})))()}var w;function T(){return(T=e((()=>{w=`type: object
properties:
  name:
    type: string
  id:
    type: integer
minProperties: 1
title: "[properties-count] minProperties = 1"

`})))()}var E;function D(){return(D=e((()=>{E=`type: object
properties:
  name:
    type: string
  id:
    type: integer
maxProperties: 1
title: "[properties-count] maxProperties = 1"

`})))()}var O,k,A,j,M,N,P,F,I,L,R,z,B,V,H;function U(){return(U=e((()=>{l(),d(),p(),h(),_(),y(),x(),C(),T(),D(),r(),t(),a(),O=i(Object.assign({"../../../../samples/json-schema/object-validations/001-default-empty-object/sample.yaml":c,"../../../../samples/json-schema/object-validations/002-default-small-object/sample.yaml":u,"../../../../samples/json-schema/object-validations/003-example-empty-object/sample.yaml":f,"../../../../samples/json-schema/object-validations/004-example-small-object/sample.yaml":m,"../../../../samples/json-schema/object-validations/005-examples-empty-object/sample.yaml":g,"../../../../samples/json-schema/object-validations/006-examples-small-object/sample.yaml":v,"../../../../samples/json-schema/object-validations/007-examples-two-objects/sample.yaml":b,"../../../../samples/json-schema/object-validations/008-min-properties-0/sample.yaml":S,"../../../../samples/json-schema/object-validations/009-min-properties-1/sample.yaml":w,"../../../../samples/json-schema/object-validations/010-max-properties-1/sample.yaml":E})),k=n(O),A=s(k),j={...o,id:`json-schema-suite-object-validations`,title:`JSON Schema Suite/Object And Validations/Object  Validations`},M=A(`001-default-empty-object`),N=A(`002-default-small-object`),P=A(`003-example-empty-object`),F=A(`004-example-small-object`),I=A(`005-examples-empty-object`),L=A(`006-examples-small-object`),R=A(`007-examples-two-objects`),z=A(`008-min-properties-0`),B=A(`009-min-properties-1`),V=A(`010-max-properties-1`),M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`createCaseStory("001-default-empty-object")`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`createCaseStory("002-default-small-object")`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`createCaseStory("003-example-empty-object")`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`createCaseStory("004-example-small-object")`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`createCaseStory("005-examples-empty-object")`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`createCaseStory("006-examples-small-object")`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`createCaseStory("007-examples-two-objects")`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`createCaseStory("008-min-properties-0")`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`createCaseStory("009-min-properties-1")`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`createCaseStory("010-max-properties-1")`,...V.parameters?.docs?.source}}},H=[`Case_001_default_empty_object`,`Case_002_default_small_object`,`Case_003_example_empty_object`,`Case_004_example_small_object`,`Case_005_examples_empty_object`,`Case_006_examples_small_object`,`Case_007_examples_two_objects`,`Case_008_min_properties_0`,`Case_009_min_properties_1`,`Case_010_max_properties_1`]})))()}U();export{M as Case_001_default_empty_object,N as Case_002_default_small_object,P as Case_003_example_empty_object,F as Case_004_example_small_object,I as Case_005_examples_empty_object,L as Case_006_examples_small_object,R as Case_007_examples_two_objects,z as Case_008_min_properties_0,B as Case_009_min_properties_1,V as Case_010_max_properties_1,H as __namedExportsOrder,j as default};