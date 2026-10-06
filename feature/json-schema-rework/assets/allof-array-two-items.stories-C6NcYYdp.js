import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{i as t,r as n}from"./sample-cases-DDoAHGgD.js";import{n as r,t as i}from"./diffs-samples-cases-Bp0vvMWA.js";import{a,c as o,l as s,n as c}from"./json-schema-diffs-utils-Dqefin3y.js";var l;function u(){return(u=e((()=>{l=`allOf:
  - type: array
    items:
      - type: string
  - description: Unchanged constraint
`})))()}var d;function f(){return(f=e((()=>{d=`allOf:
  - type: array
    items:
      - type: string
      - type: integer
        x-internal: true
        x-version: '1.0.0'
  - description: Unchanged constraint
`})))()}var p;function m(){return(m=e((()=>{p=`allOf:
  - type: array
    items:
      - type: string
      - type: integer
        x-internal: true
        x-version: '1.0.0'
  - description: Unchanged constraint
`})))()}var h;function g(){return(g=e((()=>{h=`allOf:
  - type: array
    items:
      - type: string
  - description: Unchanged constraint
`})))()}var _,v,y,b,x,S,C;function w(){return(w=e((()=>{u(),f(),m(),g(),r(),o(),t(),_=i(Object.assign({"../../../../samples/json-schema-diffs/extensions/allof-array-two-items/01-second-item-added/before.yaml":l,"../../../../samples/json-schema-diffs/extensions/allof-array-two-items/02-second-item-removed/before.yaml":d}),Object.assign({"../../../../samples/json-schema-diffs/extensions/allof-array-two-items/01-second-item-added/after.yaml":p,"../../../../samples/json-schema-diffs/extensions/allof-array-two-items/02-second-item-removed/after.yaml":h})),v=n(_),y={title:`JSON Schema Diffs Suite (Extensions)/Node Diff to Extension Inheritance/AllOf Array Two Items`,component:c,argTypes:s},b=a(c,v),x=b(`01-second-item-added`),S=b(`02-second-item-removed`),x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`createCaseStory("01-second-item-added")`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`createCaseStory("02-second-item-removed")`,...S.parameters?.docs?.source}}},C=[`Case_01_second_item_added`,`Case_02_second_item_removed`]})))()}w();export{x as Case_01_second_item_added,S as Case_02_second_item_removed,C as __namedExportsOrder,y as default};