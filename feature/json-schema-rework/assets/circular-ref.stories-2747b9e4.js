import{j as m}from"./_commonjs-dynamic-modules-6308e768.js";import{b as c}from"./AsyncApiOperationViewer-7637814e.js";import{d as p,R as n}from"./preprocess-16c50892.js";import{j as i,t as d}from"./json-schema-samples-common-ca8aab3e.js";import"./index-f46741a2.js";import"./UxBadge-7cc75759.js";import"./IndexesNodeViewer-6f9d01f2.js";import"./DdlTableDiffsViewer-7db18fb9.js";/* empty css              */import"./DdlTableViewer-d84f848c.js";import"./GraphQLOperationDiffViewer-e32d3161.js";import"./GraphPropNodeViewer-d304f569.js";import"./index-415bee12.js";import"./GraphQLOperationViewer-f79343a0.js";import"./test-diff-meta-keys-5677f54d.js";import"./public-api-99af098d.js";const l=5,s={type:"object",properties:{a:{$ref:"#/components/schemas/A"},b:{$ref:"#/components/schemas/A"},c:{type:"string"},d:{type:"object",properties:{e:{type:"number"}}}}},o={schemas:{A:{type:"object",properties:{c:{$ref:"#/components/schemas/A"}}}}},S=p({schema:s,target:n,additionalComponents:o,circular:!0}),O={...i,id:"json-schema-suite-circular-ref",title:"JSON Schema Suite/Circular Ref"},e={args:{caseId:"cycled",sampleYaml:d({schema:s,additionalComponents:o})},render:()=>m.jsx(c,{schema:S,expandedDepth:l})};var r,a,t;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    caseId: "cycled",
    sampleYaml: toSampleYaml({
      schema: rawSchema,
      additionalComponents
    })
  },
  render: () => <JsonSchemaViewer schema={cycledSchema} expandedDepth={JSON_SCHEMA_SUITE_EXPANDED_DEPTH} />
}`,...(t=(a=e.parameters)==null?void 0:a.docs)==null?void 0:t.source}}};const R=["Cycled"];export{e as Cycled,R as __namedExportsOrder,O as default};
