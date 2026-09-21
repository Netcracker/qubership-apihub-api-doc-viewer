import{j as m}from"./_commonjs-dynamic-modules-6308e768.js";import{e as c}from"./AsyncApiOperationViewer-f409c7c9.js";import{e as p,R as n}from"./preprocess-2e2ab2fd.js";import{j as i,t as d}from"./json-schema-samples-common-604a7651.js";import"./index-f46741a2.js";import"./UxBadge-26cb9909.js";import"./IndexesNodeViewer-9562384b.js";import"./DdlTableDiffsViewer-dbb8d5b6.js";/* empty css              */import"./DdlTableViewer-65ac2970.js";import"./GraphQLOperationDiffViewer-1684ae4b.js";import"./GraphPropNodeViewer-8d4634e8.js";import"./index-415bee12.js";import"./GraphQLOperationViewer-938dff1f.js";import"./public-api-99af098d.js";const l=5,s={type:"object",properties:{a:{$ref:"#/components/schemas/A"},b:{$ref:"#/components/schemas/A"},c:{type:"string"},d:{type:"object",properties:{e:{type:"number"}}}}},o={schemas:{A:{type:"object",properties:{c:{$ref:"#/components/schemas/A"}}}}},S=p({schema:s,target:n,additionalComponents:o,circular:!0}),g={...i,id:"json-schema-suite-circular-ref",title:"JSON Schema Suite/Circular Ref"},e={args:{caseId:"cycled",sampleYaml:d({schema:s,additionalComponents:o})},render:()=>m.jsx(c,{schema:S,expandedDepth:l})};var r,a,t;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    caseId: "cycled",
    sampleYaml: toSampleYaml({
      schema: rawSchema,
      additionalComponents
    })
  },
  render: () => <JsonSchemaNextViewer schema={cycledSchema} expandedDepth={JSON_SCHEMA_SUITE_EXPANDED_DEPTH} />
}`,...(t=(a=e.parameters)==null?void 0:a.docs)==null?void 0:t.source}}};const O=["Cycled"];export{e as Cycled,O as __namedExportsOrder,g as default};
