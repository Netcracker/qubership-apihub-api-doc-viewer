import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-ATHzeHXA.js";import{_r as n,hr as r}from"./UxBadge-BIq1UQHP.js";import{o as i,s as a}from"./AsyncApiOperationViewer-DfoTMA5W.js";import{f as o,r as s,t as c}from"./preprocess-CZgi8RCV.js";import{n as l,t as u}from"./parse-yaml-source-C_EzBWAu.js";var d,f,p,m;function h(){return(h=e((()=>{a(),r(),s(),u(),d=t(),f={title:`Debug/Json Schema Viewer`,component:i,parameters:{},argTypes:{schemaText:{control:`text`},componentsText:{control:`text`},schema:{control:{disable:!0},table:{disable:!0}}},args:{schemaText:``,componentsText:``}},p={args:{schemaText:``,componentsText:``},render:e=>{let{schemaText:t,componentsText:r,...a}=e,s=l(t),u=r?l(r):void 0,f=o({schema:s,additionalComponents:n(u)?u:void 0,target:c});return console.log(t),console.debug(`Prepared schema:`,f),(0,d.jsx)(i,{...a,schema:f})}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    schemaText: '',
    componentsText: ''
  },
  render: args => {
    const {
      schemaText,
      componentsText,
      ...viewerArgs
    } = args;
    const parsedSchema = parseYamlSource(schemaText);
    const parsedComponents = componentsText ? parseYamlSource(componentsText) : undefined;
    const schema = prepareJsonSchema({
      schema: parsedSchema,
      additionalComponents: isObject(parsedComponents) ? parsedComponents : undefined,
      target: REQUEST_BODY_TARGET
    });
    console.log(schemaText);
    console.debug('Prepared schema:', schema);
    return <JsonSchemaViewer {...viewerArgs} schema={schema} />;
  }
}`,...p.parameters?.docs?.source}}},m=[`Debug`]})))()}h();export{p as Debug,m as __namedExportsOrder,f as default};