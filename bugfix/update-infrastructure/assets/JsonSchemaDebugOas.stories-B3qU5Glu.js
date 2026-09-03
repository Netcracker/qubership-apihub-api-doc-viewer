import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-ATHzeHXA.js";import{c as n,l as r}from"./AsyncApiOperationViewer-MuAs1xMh.js";import{r as i,t as a}from"./browser-ChQu38zI.js";import{d as o,r as s}from"./preprocess-BmBuk4Rv.js";function c(e){let t;try{t=JSON.parse(e)}catch(e){console.error(`Cannot parse JSON:`,e),t=void 0}try{t||=i(e)}catch(e){console.error(`Cannot parse YAML:`,e),t=void 0}return(!t||typeof t!=`object`)&&(t={}),console.debug(`Parsed source:`,t),t}var l,u,d,f;function p(){return(p=e((()=>{a(),r(),s(),l=t(),u={title:`Debug/Json Schema Viewer (OAS)`,component:n,parameters:{},argTypes:{oasText:{control:`text`},refToSchema:{control:`text`}},args:{oasText:``,refToSchema:``}},d={args:{oasText:``,refToSchema:``},render:e=>{let{oasText:t,refToSchema:r,...i}=e,a=c(t),s=o({source:a,path:r.split(`/`).slice(1)});return console.log(`OAS:`,t),console.log(`Ref to schema:`,r),console.debug(`Prepared schema:`,s),(0,l.jsx)(n,{...i,schema:s})}},d.storyName=`Debug OAS 3.0`,d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}},f=[`DebugOas30`]})))()}p();export{d as DebugOas30,f as __namedExportsOrder,u as default};