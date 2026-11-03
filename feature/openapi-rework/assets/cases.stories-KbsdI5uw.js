import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{i as ee,r as te}from"./sample-cases-DDoAHGgD.js";import{n as ne,t as re}from"./diffs-samples-cases-Bp0vvMWA.js";import{a as ie,c as ae,l as oe,n as se,r as ce}from"./json-schema-diffs-utils-BItPwbQF.js";var le;function ue(){return(ue=e((()=>{le=`type: string
description: Order identifier
`})))()}var de;function fe(){return(fe=e((()=>{de=`type: object
properties:
  code:
    type: string
    deprecated: true
    x-deprecated-reason: Use id instead
`})))()}var pe;function me(){return(me=e((()=>{pe=`type: string
enum:
  - new
  - paid
`})))()}var he;function ge(){return(ge=e((()=>{he=`type: string
default: new
`})))()}var t;function n(){return(n=e((()=>{t=`type: string
examples:
  - A-1
`})))()}var r;function i(){return(i=e((()=>{r=`type: integer
minimum: 1
maximum: 10
`})))()}var a;function o(){return(o=e((()=>{a=`type: string
minLength: 1
maxLength: 10
`})))()}var s;function c(){return(c=e((()=>{s=`type: string
pattern: ^[A-Z]+$
`})))()}var l;function u(){return(u=e((()=>{l=`type: number
multipleOf: 5
`})))()}var d;function f(){return(f=e((()=>{d=`type: object
minProperties: 1
`})))()}var p;function m(){return(m=e((()=>{p=`type: array
items:
  type: string
minItems: 1
`})))()}var h;function g(){return(g=e((()=>{h=`type: array
items:
  type: string
uniqueItems: true
`})))()}var _;function v(){return(v=e((()=>{_=`type: object
propertyNames:
  enum:
    - id
    - name
`})))()}var y;function b(){return(b=e((()=>{y=`type: string
description: Client-side order identifier
`})))()}var x;function S(){return(S=e((()=>{x=`type: object
properties:
  code:
    type: string
    deprecated: true
    x-deprecated-reason: Use orderId instead
`})))()}var C;function w(){return(w=e((()=>{C=`type: string
enum:
  - new
  - shipped
`})))()}var T;function E(){return(E=e((()=>{T=`type: string
default: paid
`})))()}var D;function O(){return(O=e((()=>{D=`type: string
examples:
  - B-1
`})))()}var k;function A(){return(A=e((()=>{k=`type: integer
minimum: 1
maximum: 20
`})))()}var j;function M(){return(M=e((()=>{j=`type: string
minLength: 1
maxLength: 20
`})))()}var N;function P(){return(P=e((()=>{N=`type: string
pattern: ^[a-z]+$
`})))()}var F;function _e(){return(_e=e((()=>{F=`type: number
multipleOf: 10
`})))()}var I;function L(){return(L=e((()=>{I=`type: object
minProperties: 2
`})))()}var R;function ve(){return(ve=e((()=>{R=`type: array
items:
  type: string
minItems: 2
`})))()}var ye;function be(){return(be=e((()=>{ye=`type: array
items:
  type: string
uniqueItems: false
`})))()}var xe;function Se(){return(Se=e((()=>{xe=`type: object
propertyNames:
  enum:
    - id
    - code
`})))()}var z,Ce,B,we,V,H,U,W,G,K,q,J,Y,X,Z,Q,$,Te;function Ee(){return(Ee=e((()=>{ue(),fe(),me(),ge(),n(),i(),o(),c(),u(),f(),m(),g(),v(),b(),S(),w(),E(),O(),A(),M(),P(),_e(),L(),ve(),be(),Se(),ae(),ne(),ee(),z=te(re(Object.assign({"../../../../samples/json-schema-diffs-display-mode-simple/01-description/before.yaml":le,"../../../../samples/json-schema-diffs-display-mode-simple/02-deprecation-reason/before.yaml":de,"../../../../samples/json-schema-diffs-display-mode-simple/03-allowed-values/before.yaml":pe,"../../../../samples/json-schema-diffs-display-mode-simple/04-default/before.yaml":he,"../../../../samples/json-schema-diffs-display-mode-simple/05-examples/before.yaml":t,"../../../../samples/json-schema-diffs-display-mode-simple/06-value-range/before.yaml":r,"../../../../samples/json-schema-diffs-display-mode-simple/07-value-length/before.yaml":a,"../../../../samples/json-schema-diffs-display-mode-simple/08-value-pattern/before.yaml":s,"../../../../samples/json-schema-diffs-display-mode-simple/09-value-multiple-of/before.yaml":l,"../../../../samples/json-schema-diffs-display-mode-simple/10-properties-count/before.yaml":d,"../../../../samples/json-schema-diffs-display-mode-simple/11-items-count/before.yaml":p,"../../../../samples/json-schema-diffs-display-mode-simple/12-unique-items/before.yaml":h,"../../../../samples/json-schema-diffs-display-mode-simple/13-allowed-property-names/before.yaml":_}),Object.assign({"../../../../samples/json-schema-diffs-display-mode-simple/01-description/after.yaml":y,"../../../../samples/json-schema-diffs-display-mode-simple/02-deprecation-reason/after.yaml":x,"../../../../samples/json-schema-diffs-display-mode-simple/03-allowed-values/after.yaml":C,"../../../../samples/json-schema-diffs-display-mode-simple/04-default/after.yaml":T,"../../../../samples/json-schema-diffs-display-mode-simple/05-examples/after.yaml":D,"../../../../samples/json-schema-diffs-display-mode-simple/06-value-range/after.yaml":k,"../../../../samples/json-schema-diffs-display-mode-simple/07-value-length/after.yaml":j,"../../../../samples/json-schema-diffs-display-mode-simple/08-value-pattern/after.yaml":N,"../../../../samples/json-schema-diffs-display-mode-simple/09-value-multiple-of/after.yaml":F,"../../../../samples/json-schema-diffs-display-mode-simple/10-properties-count/after.yaml":I,"../../../../samples/json-schema-diffs-display-mode-simple/11-items-count/after.yaml":R,"../../../../samples/json-schema-diffs-display-mode-simple/12-unique-items/after.yaml":ye,"../../../../samples/json-schema-diffs-display-mode-simple/13-allowed-property-names/after.yaml":xe}))),Ce={id:`json-schema-diffs-suite-display-mode-simple`,title:`JSON Schema Diffs Suite (Display Mode = simple)`,component:se,argTypes:oe},B=ie(se,z),we=ie(ce,z),V=B(`01-description`),H=B(`02-deprecation-reason`),U=B(`03-allowed-values`),W=B(`04-default`),G=B(`05-examples`),K=B(`06-value-range`),q=B(`07-value-length`),J=B(`08-value-pattern`),Y=B(`09-value-multiple-of`),X=B(`10-properties-count`),Z=B(`11-items-count`),Q=B(`12-unique-items`),$=we(`13-allowed-property-names`),V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`createCaseStory("01-description")`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`createCaseStory("02-deprecation-reason")`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`createCaseStory("03-allowed-values")`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`createCaseStory("04-default")`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`createCaseStory("05-examples")`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`createCaseStory("06-value-range")`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`createCaseStory("07-value-length")`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`createCaseStory("08-value-pattern")`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`createCaseStory("09-value-multiple-of")`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`createCaseStory("10-properties-count")`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`createCaseStory("11-items-count")`,...Z.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`createCaseStory("12-unique-items")`,...Q.parameters?.docs?.source}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`createOas31CaseStory("13-allowed-property-names")`,...$.parameters?.docs?.source}}},Te=[`Case_01_description`,`Case_02_deprecation_reason`,`Case_03_allowed_values`,`Case_04_default`,`Case_05_examples`,`Case_06_value_range`,`Case_07_value_length`,`Case_08_value_pattern`,`Case_09_value_multiple_of`,`Case_10_properties_count`,`Case_11_items_count`,`Case_12_unique_items`,`Case_13_allowed_property_names`]})))()}Ee();export{V as Case_01_description,H as Case_02_deprecation_reason,U as Case_03_allowed_values,W as Case_04_default,G as Case_05_examples,K as Case_06_value_range,q as Case_07_value_length,J as Case_08_value_pattern,Y as Case_09_value_multiple_of,X as Case_10_properties_count,Z as Case_11_items_count,Q as Case_12_unique_items,$ as Case_13_allowed_property_names,Te as __namedExportsOrder,Ce as default};