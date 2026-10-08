import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{i as t,r as n}from"./sample-cases-DDoAHGgD.js";import{n as r,t as i}from"./diffs-samples-cases-Bp0vvMWA.js";import{a,c as o,l as s,n as c}from"./json-schema-diffs-utils-f2qGJeOS.js";var l;function u(){return(u=e((()=>{l=`type: object
description: Simple object with five primitive properties
properties:
  prop1:
    type: string
    description: First property
  prop2:
    type: string
    description: Second property
  prop3:
    type: integer
    description: Third property
  prop4:
    type: boolean
    description: Fourth property
  prop5:
    type: number
    description: Fifth property
`})))()}var d;function f(){return(f=e((()=>{d=`type: object
description: Simple object with five primitive properties
properties:
  prop1:
    type: string
    description: First property
  prop3:
    type: integer
    description: Third property
  prop4:
    type: boolean
    description: Fourth property
`})))()}var p;function m(){return(m=e((()=>{p=`type: object
description: Before root description
properties:
  prop1:
    type: string
    description: First property
  prop2:
    type: string
    description: Second property
  prop3:
    type: integer
    description: Third property
  prop4:
    type: boolean
    description: Fourth property
  prop5:
    type: number
    description: Fifth property
`})))()}var h;function g(){return(g=e((()=>{h=`type: object
description: Simple object with five primitive properties
properties:
  prop1:
    type: string
    description: First property — before description
  prop2:
    type: string
    description: Second property
    enum:
      - alpha
      - beta
      - gamma
  prop3:
    type: integer
    description: Third property
  prop4:
    type: boolean
    description: Fourth property
    default: false
  prop5:
    type: number
    description: Fifth property
`})))()}var _;function v(){return(v=e((()=>{_=`type: object
description: Simple object with five primitive properties
properties:
  prop1:
    type: string
    description: First property
  prop2:
    type: string
    description: Second property
  prop6:
    type: string
    description: Sixth property (added)
  prop7:
    type: integer
    description: Seventh property (added)
`})))()}var y;function b(){return(b=e((()=>{y=`type: object
description: Simple object with five primitive properties
properties:
  prop1:
    type: string
    description: First property
  prop2:
    type: string
    description: Second property
  prop3:
    type: integer
    description: Third property
  prop4:
    type: boolean
    description: Fourth property
  prop5:
    type: number
    description: Fifth property
`})))()}var x;function S(){return(S=e((()=>{x=`type: object
description: After root description
properties:
  prop1:
    type: string
    description: First property
  prop2:
    type: string
    description: Second property
  prop3:
    type: integer
    description: Third property
  prop4:
    type: boolean
    description: Fourth property
  prop5:
    type: number
    description: Fifth property
`})))()}var C;function w(){return(w=e((()=>{C=`type: object
description: Simple object with five primitive properties
properties:
  prop1:
    type: string
    description: First property — after description
  prop2:
    type: string
    description: Second property
    enum:
      - alpha
      - beta
      - gamma
      - delta
  prop3:
    type: integer
    description: Third property
    minimum: 0
    maximum: 100
  prop4:
    type: boolean
    description: Fourth property
  prop5:
    type: number
    description: Fifth property
`})))()}var T,E,D,O,k,A,j,M,N,P;function F(){return(F=e((()=>{u(),f(),m(),g(),v(),b(),S(),w(),r(),o(),t(),T=!0,E=i(Object.assign({"../../../../samples/json-schema-diffs/hiding-unchanged-rows/simple-object/1.1-two-added-three-removed/before.yaml":l,"../../../../samples/json-schema-diffs/hiding-unchanged-rows/simple-object/1.2-second-and-fifth-added-others-unchanged/before.yaml":d,"../../../../samples/json-schema-diffs/hiding-unchanged-rows/simple-object/1.3-root-description-replaced/before.yaml":p,"../../../../samples/json-schema-diffs/hiding-unchanged-rows/simple-object/1.4-property-metadata-and-constraints-changed/before.yaml":h}),Object.assign({"../../../../samples/json-schema-diffs/hiding-unchanged-rows/simple-object/1.1-two-added-three-removed/after.yaml":_,"../../../../samples/json-schema-diffs/hiding-unchanged-rows/simple-object/1.2-second-and-fifth-added-others-unchanged/after.yaml":y,"../../../../samples/json-schema-diffs/hiding-unchanged-rows/simple-object/1.3-root-description-replaced/after.yaml":x,"../../../../samples/json-schema-diffs/hiding-unchanged-rows/simple-object/1.4-property-metadata-and-constraints-changed/after.yaml":C})),D=n(E),O={title:`JSON Schema Diffs Suite (Hiding Unchanged Nodes)/Simple Object`,component:c,argTypes:s},k=a(c,D,T),A=k(`1.1-two-added-three-removed`),j=k(`1.2-second-and-fifth-added-others-unchanged`),M=k(`1.3-root-description-replaced`),N=k(`1.4-property-metadata-and-constraints-changed`),A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`createCaseStory("1.1-two-added-three-removed")`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`createCaseStory("1.2-second-and-fifth-added-others-unchanged")`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`createCaseStory("1.3-root-description-replaced")`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`createCaseStory("1.4-property-metadata-and-constraints-changed")`,...N.parameters?.docs?.source}}},P=[`Case_1_1_two_added_three_removed`,`Case_1_2_second_and_fifth_added_others_unchanged`,`Case_1_3_root_description_replaced`,`Case_1_4_property_metadata_and_constraints_changed`]})))()}F();export{A as Case_1_1_two_added_three_removed,j as Case_1_2_second_and_fifth_added_others_unchanged,M as Case_1_3_root_description_replaced,N as Case_1_4_property_metadata_and_constraints_changed,P as __namedExportsOrder,O as default};