import{b as m}from"./AsyncApiOperationViewer-ac5ce6e0.js";import"./_commonjs-dynamic-modules-6308e768.js";import"./index-f46741a2.js";import"./UxBadge-bbd2cd58.js";import"./IndexesNodeViewer-75d730b0.js";import"./DdlTableDiffsViewer-5153503a.js";/* empty css              */import"./DdlTableViewer-e322261b.js";import"./GraphQLOperationDiffViewer-2fcd01db.js";import"./GraphPropNodeViewer-8013ceba.js";import"./index-415bee12.js";import"./GraphQLOperationViewer-8e03d2cf.js";const d={type:"object",required:["complex"],properties:{simple:{type:"number",description:"Number param"},complex:{type:"string",description:"String param",deprecated:!0},nested:{type:"object",description:"Object param",properties:{complex:{type:"string",description:"Nested property with the same key"}}}}},c={complex:"application/json",nested:"application/xml"},j={id:"json-schema-suite-top-level-props-media-types",title:"JSON Schema Suite/Top Level Props Media Types",component:m,args:{schema:d,expandedDepth:5,topLevelPropsMediaTypes:c}},e={args:{displayMode:"detailed"}},r={args:{displayMode:"simple"}};var p,t,o;e.parameters={...e.parameters,docs:{...(p=e.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    displayMode: "detailed"
  }
}`,...(o=(t=e.parameters)==null?void 0:t.docs)==null?void 0:o.source}}};var s,a,i;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    displayMode: "simple"
  }
}`,...(i=(a=r.parameters)==null?void 0:a.docs)==null?void 0:i.source}}};const E=["DetailedMode","SimpleMode"];export{e as DetailedMode,r as SimpleMode,E as __namedExportsOrder,j as default};
