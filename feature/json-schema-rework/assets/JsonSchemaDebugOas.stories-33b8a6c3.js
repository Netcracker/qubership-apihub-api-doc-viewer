import{j as h}from"./_commonjs-dynamic-modules-6308e768.js";import{b as c}from"./AsyncApiOperationViewer-7637814e.js";import{e as l}from"./preprocess-16c50892.js";import{p as S}from"./parse-yaml-source-3e95a000.js";import"./index-f46741a2.js";import"./UxBadge-7cc75759.js";import"./IndexesNodeViewer-6f9d01f2.js";import"./DdlTableDiffsViewer-7db18fb9.js";/* empty css              */import"./DdlTableViewer-d84f848c.js";import"./GraphQLOperationDiffViewer-e32d3161.js";import"./GraphPropNodeViewer-d304f569.js";import"./index-415bee12.js";import"./GraphQLOperationViewer-f79343a0.js";import"./test-diff-meta-keys-5677f54d.js";import"./public-api-99af098d.js";const y={title:"Debug/Json Schema Viewer (OAS)",component:c,parameters:{},argTypes:{oasText:{control:"text"},refToSchema:{control:"text"},schema:{control:{disable:!0},table:{disable:!0}}},args:{oasText:"",refToSchema:""}},e={args:{oasText:"",refToSchema:""},render:n=>{const{oasText:r,refToSchema:o,...p}=n,i=S(r),s=l({source:i,path:o.split("/").slice(1)});return console.log("OAS:",r),console.log("Ref to schema:",o),console.debug("Prepared schema:",s),h.jsx(c,{...p,schema:s})}};e.storyName="Debug OAS 3.0";var a,t,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    oasText: '',
    refToSchema: ''
  },
  render: args => {
    const {
      oasText,
      refToSchema,
      ...viewerArgs
    } = args;
    const parsedOas = parseYamlSource(oasText);
    const schema = prepareJsonSchemaFromOAS({
      source: parsedOas,
      path: refToSchema.split('/').slice(1)
    });
    console.log('OAS:', oasText);
    console.log('Ref to schema:', refToSchema);
    console.debug('Prepared schema:', schema);
    return <JsonSchemaViewer {...viewerArgs} schema={schema} />;
  }
}`,...(m=(t=e.parameters)==null?void 0:t.docs)==null?void 0:m.source}}};const E=["DebugOas30"];export{e as DebugOas30,E as __namedExportsOrder,y as default};
