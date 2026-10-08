import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{c as t,l as n}from"./AsyncApiOperationViewer-DEWrqy33.js";var r,i,a,o;function s(){return(s=e((()=>{n(),r={id:`json-schema-suite-top-level-props-media-types`,title:`JSON Schema Suite/Top Level Props Media Types`,component:t,args:{schema:{type:`object`,required:[`complex`],properties:{simple:{type:`number`,description:`Number param`},complex:{type:`string`,description:`String param`,deprecated:!0},nested:{type:`object`,description:`Object param`,properties:{complex:{type:`string`,description:`Nested property with the same key`}}}}},expandedDepth:5,topLevelPropsMediaTypes:{complex:`application/json`,nested:`application/xml`}}},i={args:{displayMode:`detailed`}},a={args:{displayMode:`simple`}},i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    displayMode: "detailed"
  }
}`,...i.parameters?.docs?.source}}},a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    displayMode: "simple"
  }
}`,...a.parameters?.docs?.source}}},o=[`DetailedMode`,`SimpleMode`]})))()}s();export{i as DetailedMode,a as SimpleMode,o as __namedExportsOrder,r as default};