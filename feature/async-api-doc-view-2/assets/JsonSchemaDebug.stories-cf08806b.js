import{j as l}from"./_commonjs-dynamic-modules-6308e768.js";import{J as d}from"./AsyncApiOperationViewer-8635578c.js";import{c as T,R as x}from"./preprocess-477953b5.js";import{j as g}from"./js-yaml-71a24e1f.js";import{i as u}from"./GraphPropNodeViewer-6e707ea9.js";import"./index-f46741a2.js";import"./GraphQLOperationViewer-878bf703.js";import"./GraphQLOperationDiffViewer-cbd25613.js";import"./index-415bee12.js";const Y={title:"Debug/Json Schema Viewer",component:d,parameters:{},argTypes:{schemaText:{control:"text"},componentsText:{control:"text"},schema:{control:{disable:!0},table:{disable:!0}}},args:{schemaText:"",componentsText:""}},r={args:{schemaText:"",componentsText:""},render:s=>{const{schemaText:e,componentsText:o,...i}=s,h=a(e),n=o?a(o):void 0,t=T({schema:h,additionalComponents:u(n)?n:void 0,target:x});return console.log(e),console.debug("Prepared schema:",t),l.jsx(d,{...i,schema:t})}};function a(s){let e;try{e=JSON.parse(s)}catch(o){console.error("Cannot parse JSON:",o),e=void 0}try{e||(e=g.load(s))}catch(o){console.error("Cannot parse YAML:",o),e=void 0}return(!e||typeof e!="object")&&(e={}),console.debug("Parsed source:",e),e}var c,m,p;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(p=(m=r.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const w=["Debug"];export{r as Debug,w as __namedExportsOrder,Y as default};
