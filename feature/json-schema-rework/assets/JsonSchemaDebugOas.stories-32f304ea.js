import{j as h}from"./_commonjs-dynamic-modules-6308e768.js";import{p as l}from"./public-api-99af098d.js";import{b as m}from"./AsyncApiOperationViewer-a70170d2.js";import{f as S}from"./preprocess-821100d8.js";import"./index-f46741a2.js";import"./DiffBadge-9f300cf3.js";import"./IndexesNodeViewer-f5a98c95.js";import"./DdlTableDiffsViewer-43b4420e.js";/* empty css              */import"./DdlTableViewer-4b8c67a0.js";import"./GraphQLOperationDiffViewer-cd131da3.js";import"./GraphPropNodeViewer-65a947d0.js";import"./index-415bee12.js";import"./GraphQLOperationViewer-c4bf3b2a.js";const N={title:"Debug/Json Schema Viewer (OAS)",component:m,parameters:{},argTypes:{oasText:{control:"text"},refToSchema:{control:"text"}},args:{oasText:"",refToSchema:""}},o={args:{oasText:"",refToSchema:""},render:s=>{const{oasText:e,refToSchema:r,...p}=s,i=d(e),a=S({source:i,path:r.split("/").slice(1)});return console.log("OAS:",e),console.log("Ref to schema:",r),console.debug("Prepared schema:",a),h.jsx(m,{...p,schema:a})}};o.storyName="Debug OAS 3.0";function d(s){let e;try{e=JSON.parse(s)}catch(r){console.error("Cannot parse JSON:",r),e=void 0}try{e||(e=l(s))}catch(r){console.error("Cannot parse YAML:",r),e=void 0}return(!e||typeof e!="object")&&(e={}),console.debug("Parsed source:",e),e}var t,n,c;o.parameters={...o.parameters,docs:{...(t=o.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
    const parsedOas = parseJsonOrYaml(oasText);
    const schema = prepareJsonSchemaFromOAS({
      source: parsedOas,
      path: refToSchema.split('/').slice(1)
    });
    console.log('OAS:', oasText);
    console.log('Ref to schema:', refToSchema);
    console.debug('Prepared schema:', schema);
    return <JsonSchemaViewer {...viewerArgs} schema={schema} />;
  }
}`,...(c=(n=o.parameters)==null?void 0:n.docs)==null?void 0:c.source}}};const P=["DebugOas30"];export{o as DebugOas30,P as __namedExportsOrder,N as default};
