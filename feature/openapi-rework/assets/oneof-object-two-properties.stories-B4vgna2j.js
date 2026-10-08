import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{i as t,r as n}from"./sample-cases-DDoAHGgD.js";import{n as r,t as i}from"./diffs-samples-cases-Bp0vvMWA.js";import{a,c as o,l as s,n as c}from"./json-schema-diffs-utils-f2qGJeOS.js";var l;function u(){return(u=e((()=>{l=`oneOf:
  - type: object
    properties:
      name:
        type: string
  - type: boolean
`})))()}var d;function f(){return(f=e((()=>{d=`oneOf:
  - type: object
    properties:
      name:
        type: string
      count:
        type: integer
        x-internal: true
        x-version: '1.0.0'
  - type: boolean
`})))()}var p;function m(){return(m=e((()=>{p=`oneOf:
  - type: object
    properties:
      name:
        type: string
      count:
        type: integer
        x-internal: true
        x-version: '1.0.0'
  - type: boolean
`})))()}var h;function g(){return(g=e((()=>{h=`oneOf:
  - type: object
    properties:
      name:
        type: string
  - type: boolean
`})))()}var _,v,y,b,x,S,C;function w(){return(w=e((()=>{u(),f(),m(),g(),r(),o(),t(),_=i(Object.assign({"../../../../samples/json-schema-diffs/extensions/oneof-object-two-properties/01-second-property-added/before.yaml":l,"../../../../samples/json-schema-diffs/extensions/oneof-object-two-properties/02-second-property-removed/before.yaml":d}),Object.assign({"../../../../samples/json-schema-diffs/extensions/oneof-object-two-properties/01-second-property-added/after.yaml":p,"../../../../samples/json-schema-diffs/extensions/oneof-object-two-properties/02-second-property-removed/after.yaml":h})),v=n(_),y={title:`JSON Schema Diffs Suite (Extensions)/Node Diff to Extension Inheritance/OneOf Object Two Properties`,component:c,argTypes:s},b=a(c,v),x=b(`01-second-property-added`),S=b(`02-second-property-removed`),x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`createCaseStory("01-second-property-added")`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`createCaseStory("02-second-property-removed")`,...S.parameters?.docs?.source}}},C=[`Case_01_second_property_added`,`Case_02_second_property_removed`]})))()}w();export{x as Case_01_second_property_added,S as Case_02_second_property_removed,C as __namedExportsOrder,y as default};