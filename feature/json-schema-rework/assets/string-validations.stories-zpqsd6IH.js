import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{i as ee,r as te}from"./sample-cases-DDoAHGgD.js";import{n as ne,t as re}from"./json-schema-samples-cases-CskDrk9H.js";import{n as ie,r as ae,t as oe}from"./json-schema-samples-common-DkZHwgzB.js";var se;function ce(){return(ce=e((()=>{se=`type: string
default: ""
title: '[default] default = ""'

`})))()}var le;function ue(){return(ue=e((()=>{le=`type: string
example: ""
title: '[example] example = ""'

`})))()}var de;function fe(){return(fe=e((()=>{de=`type: string
default: "     "
title: '[default] default = "     "'

`})))()}var pe;function me(){return(me=e((()=>{pe=`type: string
example: "     "
title: '[example] example = "     "'

`})))()}var he;function ge(){return(ge=e((()=>{he=`type: string
default: "\\r\\n"
title: '[default] default = "\\r\\n"'

`})))()}var _e;function ve(){return(ve=e((()=>{_e=`type: string
example: "\\r\\n"
title: '[example] example = "\\r\\n"'

`})))()}var ye;function be(){return(be=e((()=>{ye=`type: string
default: "\\r"
title: '[default] default = "\\r"'

`})))()}var xe;function Se(){return(Se=e((()=>{xe=`type: string
example: "\\r"
title: '[example] example = "\\r"'

`})))()}var Ce;function we(){return(we=e((()=>{Ce=`type: string
default: "\\n"
title: '[default] default = "\\n"'

`})))()}var Te;function Ee(){return(Ee=e((()=>{Te=`type: string
example: "\\n"
title: '[example] example = "\\n"'

`})))()}var t;function n(){return(n=e((()=>{t=`type: string
default: "\\t"
title: '[default] default = "\\t"'

`})))()}var r;function i(){return(i=e((()=>{r=`type: string
example: "\\t"
title: '[example] example = "\\t"'

`})))()}var a;function o(){return(o=e((()=>{a=`type: string
default: "    value with whitespaces around     "
title: '[default] default = "    value with whitespaces around     "'

`})))()}var s;function c(){return(c=e((()=>{s=`type: string
example: "    value with whitespaces around     "
title: '[example] example = "    value with whitespaces around     "'

`})))()}var l;function u(){return(u=e((()=>{l=`type: string
default: just a value
title: '[default] default = "just a value"'

`})))()}var d;function f(){return(f=e((()=>{d=`type: string
example: just a value
title: '[example] example = "just a value"'

`})))()}var p;function m(){return(m=e((()=>{p=`type: string
examples:
  - ""
  - "     "
  - "\\r\\n"
  - "\\r"
  - "\\n"
  - "\\t"
  - "    value with whitespaces around     "
  - just a value
title: "[examples] examples = all sample strings"

`})))()}var h;function g(){return(g=e((()=>{h=`type: string
enum:
  - ""
  - "     "
  - "\\r\\n"
  - "\\r"
  - "\\n"
  - "\\t"
  - "    value with whitespaces around     "
  - just a value
title: "[enum] enum = all sample strings"

`})))()}var _;function v(){return(v=e((()=>{_=`type: string
minLength: 0
title: "[value-length] minLength = 0"

`})))()}var y;function b(){return(b=e((()=>{y=`type: string
minLength: 1
title: "[value-length] minLength = 1"

`})))()}var x;function S(){return(S=e((()=>{x=`type: string
maxLength: 1
title: "[value-length] maxLength = 1"

`})))()}var C;function w(){return(w=e((()=>{C=`type: string
minLength: 0
maxLength: 1
title: "[value-length] minLength = 0, maxLength = 1"

`})))()}var T;function E(){return(E=e((()=>{T=`type: string
minLength: 1
maxLength: 2
title: "[value-length] minLength = 1, maxLength = 2"

`})))()}var D;function De(){return(De=e((()=>{D=`type: string
pattern: ^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$
title: "[pattern] pattern = email regexp"

`})))()}var O,Oe,k,ke,A,j,M,N,P,F,I,L,R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q,$,Ae;function je(){return(je=e((()=>{ce(),ue(),fe(),me(),ge(),ve(),be(),Se(),we(),Ee(),n(),i(),o(),c(),u(),f(),m(),g(),v(),b(),S(),w(),E(),De(),ne(),ee(),ie(),O=re(Object.assign({"../../../../samples/json-schema/string-validations/001-default-empty/sample.yaml":se,"../../../../samples/json-schema/string-validations/002-example-empty/sample.yaml":le,"../../../../samples/json-schema/string-validations/003-default-whitespaces/sample.yaml":de,"../../../../samples/json-schema/string-validations/004-example-whitespaces/sample.yaml":pe,"../../../../samples/json-schema/string-validations/005-default-crlf/sample.yaml":he,"../../../../samples/json-schema/string-validations/006-example-crlf/sample.yaml":_e,"../../../../samples/json-schema/string-validations/007-default-cr/sample.yaml":ye,"../../../../samples/json-schema/string-validations/008-example-cr/sample.yaml":xe,"../../../../samples/json-schema/string-validations/009-default-lf/sample.yaml":Ce,"../../../../samples/json-schema/string-validations/010-example-lf/sample.yaml":Te,"../../../../samples/json-schema/string-validations/011-default-tab/sample.yaml":t,"../../../../samples/json-schema/string-validations/012-example-tab/sample.yaml":r,"../../../../samples/json-schema/string-validations/013-default-padded/sample.yaml":a,"../../../../samples/json-schema/string-validations/014-example-padded/sample.yaml":s,"../../../../samples/json-schema/string-validations/015-default-plain/sample.yaml":l,"../../../../samples/json-schema/string-validations/016-example-plain/sample.yaml":d,"../../../../samples/json-schema/string-validations/017-examples-all-samples/sample.yaml":p,"../../../../samples/json-schema/string-validations/018-enum-all-samples/sample.yaml":h,"../../../../samples/json-schema/string-validations/019-min-length-0/sample.yaml":_,"../../../../samples/json-schema/string-validations/020-min-length-1/sample.yaml":y,"../../../../samples/json-schema/string-validations/021-max-length-1/sample.yaml":x,"../../../../samples/json-schema/string-validations/022-min-length-0-max-length-1/sample.yaml":C,"../../../../samples/json-schema/string-validations/023-min-length-1-max-length-2/sample.yaml":T,"../../../../samples/json-schema/string-validations/024-pattern-email/sample.yaml":D})),Oe=te(O),k=oe(Oe),ke={...ae,id:`json-schema-suite-string-validations`,title:`JSON Schema Suite/String And Validations/String  Validations`},A=k(`001-default-empty`),j=k(`002-example-empty`),M=k(`003-default-whitespaces`),N=k(`004-example-whitespaces`),P=k(`005-default-crlf`),F=k(`006-example-crlf`),I=k(`007-default-cr`),L=k(`008-example-cr`),R=k(`009-default-lf`),z=k(`010-example-lf`),B=k(`011-default-tab`),V=k(`012-example-tab`),H=k(`013-default-padded`),U=k(`014-example-padded`),W=k(`015-default-plain`),G=k(`016-example-plain`),K=k(`017-examples-all-samples`),q=k(`018-enum-all-samples`),J=k(`019-min-length-0`),Y=k(`020-min-length-1`),X=k(`021-max-length-1`),Z=k(`022-min-length-0-max-length-1`),Q=k(`023-min-length-1-max-length-2`),$=k(`024-pattern-email`),A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`createCaseStory("001-default-empty")`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`createCaseStory("002-example-empty")`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`createCaseStory("003-default-whitespaces")`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`createCaseStory("004-example-whitespaces")`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`createCaseStory("005-default-crlf")`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`createCaseStory("006-example-crlf")`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`createCaseStory("007-default-cr")`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`createCaseStory("008-example-cr")`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`createCaseStory("009-default-lf")`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`createCaseStory("010-example-lf")`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`createCaseStory("011-default-tab")`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`createCaseStory("012-example-tab")`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`createCaseStory("013-default-padded")`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`createCaseStory("014-example-padded")`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`createCaseStory("015-default-plain")`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`createCaseStory("016-example-plain")`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`createCaseStory("017-examples-all-samples")`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`createCaseStory("018-enum-all-samples")`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`createCaseStory("019-min-length-0")`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`createCaseStory("020-min-length-1")`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`createCaseStory("021-max-length-1")`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`createCaseStory("022-min-length-0-max-length-1")`,...Z.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`createCaseStory("023-min-length-1-max-length-2")`,...Q.parameters?.docs?.source}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`createCaseStory("024-pattern-email")`,...$.parameters?.docs?.source}}},Ae=[`Case_001_default_empty`,`Case_002_example_empty`,`Case_003_default_whitespaces`,`Case_004_example_whitespaces`,`Case_005_default_crlf`,`Case_006_example_crlf`,`Case_007_default_cr`,`Case_008_example_cr`,`Case_009_default_lf`,`Case_010_example_lf`,`Case_011_default_tab`,`Case_012_example_tab`,`Case_013_default_padded`,`Case_014_example_padded`,`Case_015_default_plain`,`Case_016_example_plain`,`Case_017_examples_all_samples`,`Case_018_enum_all_samples`,`Case_019_min_length_0`,`Case_020_min_length_1`,`Case_021_max_length_1`,`Case_022_min_length_0_max_length_1`,`Case_023_min_length_1_max_length_2`,`Case_024_pattern_email`]})))()}je();export{A as Case_001_default_empty,j as Case_002_example_empty,M as Case_003_default_whitespaces,N as Case_004_example_whitespaces,P as Case_005_default_crlf,F as Case_006_example_crlf,I as Case_007_default_cr,L as Case_008_example_cr,R as Case_009_default_lf,z as Case_010_example_lf,B as Case_011_default_tab,V as Case_012_example_tab,H as Case_013_default_padded,U as Case_014_example_padded,W as Case_015_default_plain,G as Case_016_example_plain,K as Case_017_examples_all_samples,q as Case_018_enum_all_samples,J as Case_019_min_length_0,Y as Case_020_min_length_1,X as Case_021_max_length_1,Z as Case_022_min_length_0_max_length_1,Q as Case_023_min_length_1_max_length_2,$ as Case_024_pattern_email,Ae as __namedExportsOrder,ke as default};