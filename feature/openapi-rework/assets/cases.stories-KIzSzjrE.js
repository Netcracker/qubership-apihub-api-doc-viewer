import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{i as t,r as n}from"./sample-cases-DDoAHGgD.js";import{n as r,t as i}from"./json-schema-samples-cases-CskDrk9H.js";import{n as a,r as ee,t as o}from"./json-schema-samples-common-TX2IdOX4.js";var s;function c(){return(c=e((()=>{s=`type: string
description: Order identifier
`})))()}var l;function u(){return(u=e((()=>{l=`type: object
properties:
  code:
    type: string
    deprecated: true
    x-deprecated-reason: Use id instead
`})))()}var d;function f(){return(f=e((()=>{d=`type: string
enum:
  - new
  - paid
`})))()}var p;function m(){return(m=e((()=>{p=`type: string
default: new
`})))()}var h;function g(){return(g=e((()=>{h=`type: string
examples:
  - A-1
`})))()}var _;function v(){return(v=e((()=>{_=`type: integer
minimum: 1
maximum: 10
`})))()}var y;function b(){return(b=e((()=>{y=`type: string
minLength: 1
maxLength: 10
`})))()}var x;function S(){return(S=e((()=>{x=`type: string
pattern: ^[A-Z]+$
`})))()}var C;function w(){return(w=e((()=>{C=`type: number
multipleOf: 5
`})))()}var T;function E(){return(E=e((()=>{T=`type: object
minProperties: 1
`})))()}var D;function O(){return(O=e((()=>{D=`type: array
items:
  type: string
minItems: 1
`})))()}var k;function A(){return(A=e((()=>{k=`type: array
items:
  type: string
uniqueItems: true
`})))()}var j;function M(){return(M=e((()=>{j=`type: object
propertyNames:
  enum:
    - id
    - name
`})))()}var N;function P(){return(P=e((()=>{N=`type: object
required:
  - complex
properties:
  simple:
    type: number
    description: Number param
  complex:
    type: string
    description: String param
  nested:
    type: object
    description: Object param
    properties:
      complex:
        type: string
        description: Nested property with the same key
`})))()}var F,I,L,R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q;function $(){return($=e((()=>{c(),u(),f(),m(),g(),v(),b(),S(),w(),E(),O(),A(),M(),P(),r(),t(),a(),F=n(i(Object.assign({"../../../../samples/json-schema-display-mode-simple/01-description/sample.yaml":s,"../../../../samples/json-schema-display-mode-simple/02-deprecation-reason/sample.yaml":l,"../../../../samples/json-schema-display-mode-simple/03-allowed-values/sample.yaml":d,"../../../../samples/json-schema-display-mode-simple/04-default/sample.yaml":p,"../../../../samples/json-schema-display-mode-simple/05-examples/sample.yaml":h,"../../../../samples/json-schema-display-mode-simple/06-value-range/sample.yaml":_,"../../../../samples/json-schema-display-mode-simple/07-value-length/sample.yaml":y,"../../../../samples/json-schema-display-mode-simple/08-value-pattern/sample.yaml":x,"../../../../samples/json-schema-display-mode-simple/09-value-multiple-of/sample.yaml":C,"../../../../samples/json-schema-display-mode-simple/10-properties-count/sample.yaml":T,"../../../../samples/json-schema-display-mode-simple/11-items-count/sample.yaml":D,"../../../../samples/json-schema-display-mode-simple/12-unique-items/sample.yaml":k,"../../../../samples/json-schema-display-mode-simple/13-allowed-property-names/sample.yaml":j,"../../../../samples/json-schema-display-mode-simple/14-top-level-props-media-types/sample.yaml":N}))),I=o(F,{topLevelPropsMediaTypes:{"14-top-level-props-media-types":{complex:`application/json`,nested:`application/xml`}}}),L={...ee,id:`json-schema-suite-display-mode-simple`,title:`JSON Schema Suite (Display Mode = simple)`},R=I(`01-description`),z=I(`02-deprecation-reason`),B=I(`03-allowed-values`),V=I(`04-default`),H=I(`05-examples`),U=I(`06-value-range`),W=I(`07-value-length`),G=I(`08-value-pattern`),K=I(`09-value-multiple-of`),q=I(`10-properties-count`),J=I(`11-items-count`),Y=I(`12-unique-items`),X=I(`13-allowed-property-names`),Z=I(`14-top-level-props-media-types`),R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`createCaseStory("01-description")`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`createCaseStory("02-deprecation-reason")`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`createCaseStory("03-allowed-values")`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`createCaseStory("04-default")`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`createCaseStory("05-examples")`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`createCaseStory("06-value-range")`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`createCaseStory("07-value-length")`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`createCaseStory("08-value-pattern")`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`createCaseStory("09-value-multiple-of")`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`createCaseStory("10-properties-count")`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`createCaseStory("11-items-count")`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`createCaseStory("12-unique-items")`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`createCaseStory("13-allowed-property-names")`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`createCaseStory("14-top-level-props-media-types")`,...Z.parameters?.docs?.source}}},Q=[`Case_01_description`,`Case_02_deprecation_reason`,`Case_03_allowed_values`,`Case_04_default`,`Case_05_examples`,`Case_06_value_range`,`Case_07_value_length`,`Case_08_value_pattern`,`Case_09_value_multiple_of`,`Case_10_properties_count`,`Case_11_items_count`,`Case_12_unique_items`,`Case_13_allowed_property_names`,`Case_14_top_level_props_media_types`]})))()}$();export{R as Case_01_description,z as Case_02_deprecation_reason,B as Case_03_allowed_values,V as Case_04_default,H as Case_05_examples,U as Case_06_value_range,W as Case_07_value_length,G as Case_08_value_pattern,K as Case_09_value_multiple_of,q as Case_10_properties_count,J as Case_11_items_count,Y as Case_12_unique_items,X as Case_13_allowed_property_names,Z as Case_14_top_level_props_media_types,Q as __namedExportsOrder,L as default};