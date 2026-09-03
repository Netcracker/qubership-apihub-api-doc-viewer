import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DRGMQe9r.js";import{Er as n,wr as r}from"./DiffBadge-mdVYnyeB.js";import{c as i,l as a}from"./AsyncApiOperationViewer-CX16bUTc.js";import{r as o,t as s}from"./browser-ChQu38zI.js";import{r as c,t as l,u}from"./preprocess-DoJcq6fV.js";function d(e){let t;try{t=JSON.parse(e)}catch(e){console.error(`Cannot parse JSON:`,e),t=void 0}try{t||=o(e)}catch(e){console.error(`Cannot parse YAML:`,e),t=void 0}return(!t||typeof t!=`object`)&&(t={}),console.debug(`Parsed source:`,t),t}var f,p,m,h;function g(){return(g=e((()=>{r(),s(),a(),c(),f=t(),p={title:`Debug/Json Schema Viewer`,component:i,parameters:{},argTypes:{schemaText:{control:`text`},componentsText:{control:`text`},schema:{control:{disable:!0},table:{disable:!0}}},args:{schemaText:``,componentsText:``}},m={args:{schemaText:``,componentsText:``},render:e=>{let{schemaText:t,componentsText:r,...a}=e,o=d(t),s=r?d(r):void 0,c=u({schema:o,additionalComponents:n(s)?s:void 0,target:l});return console.log(t),console.debug(`Prepared schema:`,c),(0,f.jsx)(i,{...a,schema:c})}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
    const parsedSchema = parseJsonOrYaml(schemaText);
    const parsedComponents = componentsText ? parseJsonOrYaml(componentsText) : undefined;
    const schema = prepareJsonSchema({
      schema: parsedSchema,
      additionalComponents: isObject(parsedComponents) ? parsedComponents : undefined,
      target: REQUEST_BODY_TARGET
    });
    console.log(schemaText);
    console.debug('Prepared schema:', schema);
    return <JsonSchemaViewer {...viewerArgs} schema={schema} />;
  }
}`,...m.parameters?.docs?.source}}},h=[`Debug`]})))()}g();export{m as Debug,h as __namedExportsOrder,p as default};