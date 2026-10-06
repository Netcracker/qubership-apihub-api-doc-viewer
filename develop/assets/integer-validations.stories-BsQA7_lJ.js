import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{i as t,r as n}from"./sample-cases-DDoAHGgD.js";import{n as r,t as i}from"./json-schema-samples-cases-CskDrk9H.js";import{n as a,r as o,t as s}from"./json-schema-samples-common-DkZHwgzB.js";var c;function l(){return(l=e((()=>{c=`type: integer
default: 0
title: "[default] default = 0"

`})))()}var u;function d(){return(d=e((()=>{u=`type: integer
example: 0
title: "[example] example = 0"

`})))()}var f;function p(){return(p=e((()=>{f=`type: integer
default: 1
title: "[default] default = 1"

`})))()}var m;function h(){return(h=e((()=>{m=`type: integer
example: 1
title: "[example] example = 1"

`})))()}var g;function _(){return(_=e((()=>{g=`type: integer
default: -1
title: "[default] default = -1"

`})))()}var v;function y(){return(y=e((()=>{v=`type: integer
example: -1
title: "[example] example = -1"

`})))()}var b;function x(){return(x=e((()=>{b=`type: integer
examples:
  - 0
title: "[examples] examples = [0]"

`})))()}var S;function C(){return(C=e((()=>{S=`type: integer
examples:
  - 1
title: "[examples] examples = [1]"

`})))()}var w;function T(){return(T=e((()=>{w=`type: integer
examples:
  - -1
title: "[examples] examples = [-1]"

`})))()}var E;function D(){return(D=e((()=>{E=`type: integer
examples:
  - -1
  - 0
  - 1
title: "[examples] examples = [-1, 0, 1]"

`})))()}var O;function k(){return(k=e((()=>{O=`type: integer
multipleOf: 0
title: "[multiple-of] multipleOf = 0"

`})))()}var A;function j(){return(j=e((()=>{A=`type: integer
multipleOf: 1
title: "[multiple-of] multipleOf = 1"

`})))()}var M;function N(){return(N=e((()=>{M=`type: integer
multipleOf: -1
title: "[multiple-of] multipleOf = -1"

`})))()}var P,F,I,L,R,z,B,V,H,U,W,G,K,q,J,Y,X,Z;function Q(){return(Q=e((()=>{l(),d(),p(),h(),_(),y(),x(),C(),T(),D(),k(),j(),N(),r(),t(),a(),P=i(Object.assign({"../../../../samples/json-schema/integer-validations/001-default-0/sample.yaml":c,"../../../../samples/json-schema/integer-validations/002-example-0/sample.yaml":u,"../../../../samples/json-schema/integer-validations/003-default-1/sample.yaml":f,"../../../../samples/json-schema/integer-validations/004-example-1/sample.yaml":m,"../../../../samples/json-schema/integer-validations/005-default--1/sample.yaml":g,"../../../../samples/json-schema/integer-validations/006-example--1/sample.yaml":v,"../../../../samples/json-schema/integer-validations/007-examples-0/sample.yaml":b,"../../../../samples/json-schema/integer-validations/008-examples-1/sample.yaml":S,"../../../../samples/json-schema/integer-validations/009-examples-minus-1/sample.yaml":w,"../../../../samples/json-schema/integer-validations/010-examples-minus-1-0-1/sample.yaml":E,"../../../../samples/json-schema/integer-validations/011-multiple-of-0/sample.yaml":O,"../../../../samples/json-schema/integer-validations/012-multiple-of-1/sample.yaml":A,"../../../../samples/json-schema/integer-validations/013-multiple-of--1/sample.yaml":M})),F=n(P),I=s(F),L={...o,id:`json-schema-suite-integer-validations`,title:`JSON Schema Suite/Integer  Validations`},R=I(`001-default-0`),z=I(`002-example-0`),B=I(`003-default-1`),V=I(`004-example-1`),H=I(`005-default--1`),U=I(`006-example--1`),W=I(`007-examples-0`),G=I(`008-examples-1`),K=I(`009-examples-minus-1`),q=I(`010-examples-minus-1-0-1`),J=I(`011-multiple-of-0`),Y=I(`012-multiple-of-1`),X=I(`013-multiple-of--1`),R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`createCaseStory("001-default-0")`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`createCaseStory("002-example-0")`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`createCaseStory("003-default-1")`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`createCaseStory("004-example-1")`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`createCaseStory("005-default--1")`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`createCaseStory("006-example--1")`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`createCaseStory("007-examples-0")`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`createCaseStory("008-examples-1")`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`createCaseStory("009-examples-minus-1")`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`createCaseStory("010-examples-minus-1-0-1")`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`createCaseStory("011-multiple-of-0")`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`createCaseStory("012-multiple-of-1")`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`createCaseStory("013-multiple-of--1")`,...X.parameters?.docs?.source}}},Z=[`Case_001_default_0`,`Case_002_example_0`,`Case_003_default_1`,`Case_004_example_1`,`Case_005_default__1`,`Case_006_example__1`,`Case_007_examples_0`,`Case_008_examples_1`,`Case_009_examples_minus_1`,`Case_010_examples_minus_1_0_1`,`Case_011_multiple_of_0`,`Case_012_multiple_of_1`,`Case_013_multiple_of__1`]})))()}Q();export{R as Case_001_default_0,z as Case_002_example_0,B as Case_003_default_1,V as Case_004_example_1,H as Case_005_default__1,U as Case_006_example__1,W as Case_007_examples_0,G as Case_008_examples_1,K as Case_009_examples_minus_1,q as Case_010_examples_minus_1_0_1,J as Case_011_multiple_of_0,Y as Case_012_multiple_of_1,X as Case_013_multiple_of__1,Z as __namedExportsOrder,L as default};