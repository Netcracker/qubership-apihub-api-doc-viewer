import{j as l}from"./_commonjs-dynamic-modules-6308e768.js";import{b as m}from"./AsyncApiOperationViewer-0e18b0af.js";import{p as h}from"./public-api-99af098d.js";import{f as d}from"./preprocess-8acbbf55.js";import"./index-f46741a2.js";import"./UxBadge-3d9cd0ec.js";import"./IndexesNodeViewer-bc39d3de.js";import"./DdlTableDiffsViewer-5f4cf09a.js";/* empty css              */import"./DdlTableViewer-30ab278b.js";import"./GraphQLOperationDiffViewer-a56ad3af.js";import"./GraphPropNodeViewer-0af21220.js";import"./index-415bee12.js";import"./GraphQLOperationViewer-19ba9549.js";const D={title:"Debug/Json Schema Viewer (OAS)",component:m,parameters:{},argTypes:{oasText:{control:"text"},refToSchema:{control:"text"},schema:{control:{disable:!0},table:{disable:!0}}},args:{oasText:"",refToSchema:""}},o={args:{oasText:"",refToSchema:""},render:s=>{const{oasText:e,refToSchema:r,...p}=s,i=S(e),a=d({source:i,path:r.split("/").slice(1)});return console.log("OAS:",e),console.log("Ref to schema:",r),console.debug("Prepared schema:",a),l.jsx(m,{...p,schema:a})}};o.storyName="Debug OAS 3.0";function S(s){let e;try{e=JSON.parse(s)}catch(r){console.error("Cannot parse JSON:",r),e=void 0}try{e||(e=h(s))}catch(r){console.error("Cannot parse YAML:",r),e=void 0}return(!e||typeof e!="object")&&(e={}),console.debug("Parsed source:",e),e}var t,n,c;o.parameters={...o.parameters,docs:{...(t=o.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
    return <JsonSchemaNextViewer {...viewerArgs} schema={schema} />;
  }
}`,...(c=(n=o.parameters)==null?void 0:n.docs)==null?void 0:c.source}}};const P=["DebugOas30"];export{o as DebugOas30,P as __namedExportsOrder,D as default};
