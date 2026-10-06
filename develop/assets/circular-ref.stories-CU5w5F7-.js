import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-ATHzeHXA.js";import{o as n,s as r}from"./AsyncApiOperationViewer-DfoTMA5W.js";import{f as i,r as a,t as o}from"./preprocess-CZgi8RCV.js";import{i as s,n as c,r as l}from"./json-schema-samples-common-DkZHwgzB.js";var u,d,f,p,m,h,g,_;function v(){return(v=e((()=>{r(),a(),c(),u=t(),d=5,f={type:`object`,properties:{a:{$ref:`#/components/schemas/A`},b:{$ref:`#/components/schemas/A`},c:{type:`string`},d:{type:`object`,properties:{e:{type:`number`}}}}},p={schemas:{A:{type:`object`,properties:{c:{$ref:`#/components/schemas/A`}}}}},m=i({schema:f,target:o,additionalComponents:p,circular:!0}),h={...l,id:`json-schema-suite-circular-ref`,title:`JSON Schema Suite/Circular Ref`},g={args:{caseId:`cycled`,sampleYaml:s({schema:f,additionalComponents:p})},render:()=>(0,u.jsx)(n,{schema:m,expandedDepth:d})},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    caseId: "cycled",
    sampleYaml: toSampleYaml({
      schema: rawSchema,
      additionalComponents
    })
  },
  render: () => <JsonSchemaViewer schema={cycledSchema} expandedDepth={JSON_SCHEMA_SUITE_EXPANDED_DEPTH} />
}`,...g.parameters?.docs?.source}}},_=[`Cycled`]})))()}v();export{g as Cycled,_ as __namedExportsOrder,h as default};