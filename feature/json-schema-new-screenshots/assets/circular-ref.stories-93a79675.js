import{j as m}from"./_commonjs-dynamic-modules-6308e768.js";import{e as c}from"./AsyncApiOperationViewer-8152ae02.js";import{e as p,R as n}from"./preprocess-0750a535.js";import{j as i,t as d}from"./json-schema-samples-common-4d1e808f.js";import"./index-f46741a2.js";import"./DiffBadge-f5ba12be.js";import"./IndexesNodeViewer-71f18f3c.js";import"./DdlTableDiffsViewer-c0933c8a.js";/* empty css              */import"./DdlTableViewer-47d4d8fc.js";import"./GraphQLOperationDiffViewer-ec42f7d3.js";import"./GraphPropNodeViewer-452b0f1f.js";import"./index-415bee12.js";import"./GraphQLOperationViewer-c53f5f81.js";import"./public-api-99af098d.js";const l=5,s={type:"object",properties:{a:{$ref:"#/components/schemas/A"},b:{$ref:"#/components/schemas/A"},c:{type:"string"},d:{type:"object",properties:{e:{type:"number"}}}}},o={schemas:{A:{type:"object",properties:{c:{$ref:"#/components/schemas/A"}}}}},S=p({schema:s,target:n,additionalComponents:o,circular:!0}),g={...i,id:"json-schema-suite-circular-ref",title:"JSON Schema Suite/Circular Ref"},e={args:{caseId:"cycled",sampleYaml:d({schema:s,additionalComponents:o})},render:()=>m.jsx(c,{schema:S,expandedDepth:l})};var r,a,t;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    caseId: "cycled",
    sampleYaml: toSampleYaml({
      schema: rawSchema,
      additionalComponents
    })
  },
  render: () => <JsonSchemaNextViewer schema={cycledSchema} expandedDepth={JSON_SCHEMA_SUITE_EXPANDED_DEPTH} />
}`,...(t=(a=e.parameters)==null?void 0:a.docs)==null?void 0:t.source}}};const O=["Cycled"];export{e as Cycled,O as __namedExportsOrder,g as default};
