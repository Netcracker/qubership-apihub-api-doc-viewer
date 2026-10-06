import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-ATHzeHXA.js";import{o as n,s as r}from"./AsyncApiOperationViewer-DfoTMA5W.js";import{p as i,r as a}from"./preprocess-CZgi8RCV.js";import{n as o,t as s}from"./parse-yaml-source-C_EzBWAu.js";var c,l,u,d;function f(){return(f=e((()=>{r(),a(),s(),c=t(),l={title:`Debug/Json Schema Viewer (OAS)`,component:n,parameters:{},argTypes:{oasText:{control:`text`},refToSchema:{control:`text`},schema:{control:{disable:!0},table:{disable:!0}}},args:{oasText:``,refToSchema:``}},u={args:{oasText:``,refToSchema:``},render:e=>{let{oasText:t,refToSchema:r,...a}=e,s=o(t),l=i({source:s,path:r.split(`/`).slice(1)});return console.log(`OAS:`,t),console.log(`Ref to schema:`,r),console.debug(`Prepared schema:`,l),(0,c.jsx)(n,{...a,schema:l})}},u.storyName=`Debug OAS 3.0`,u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}},d=[`DebugOas30`]})))()}f();export{u as DebugOas30,d as __namedExportsOrder,l as default};