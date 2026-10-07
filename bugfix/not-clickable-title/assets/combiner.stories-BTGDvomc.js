import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{i as t,r as n}from"./sample-cases-DDoAHGgD.js";import{n as r,t as i}from"./json-schema-samples-cases-CskDrk9H.js";import{n as a,r as o,t as s}from"./json-schema-samples-common-BLYm_bEn.js";var c;function l(){return(l=e((()=>{c=`oneOf:
  - type: string
    description: String variant
    minLength: 1
  - type: object
    description: Object variant
    properties:
      prop1:
        type: string
      prop2:
        type: number
  - anyOf:
      - type: number
      - type: boolean
        description: Boolean variant
`})))()}var u,d,f,p,m,h;function g(){return(g=e((()=>{l(),r(),t(),a(),u=i(Object.assign({"../../../../samples/json-schema/combiner/001-oneof-nested-anyof/sample.yaml":c})),d=n(u),f=s(d),p={...o,id:`json-schema-suite-combiner`,title:`JSON Schema Suite/Combiners/Combiner`},m=f(`001-oneof-nested-anyof`),m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`createCaseStory("001-oneof-nested-anyof")`,...m.parameters?.docs?.source}}},h=[`Case_001_oneof_nested_anyof`]})))()}g();export{m as Case_001_oneof_nested_anyof,h as __namedExportsOrder,p as default};