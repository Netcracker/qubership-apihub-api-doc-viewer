import{j as l}from"./jsx-runtime-1438501e.js";import{b as i}from"./AsyncApiOperationViewer-634fbbbc.js";import{e as T,R as x}from"./preprocess-c82be1af.js";import{j as g}from"./js-yaml-71a24e1f.js";import{i as u}from"./GraphPropNodeViewer-c30a27f7.js";import"./index-f46741a2.js";import"./ErrorBoundaryFallback-8e30116b.js";import"./GraphQLOperationDiffViewer-1b3728f7.js";import"./GraphQLOperationViewer-87a9aa0b.js";import"./DdlTableViewer-6b3a3a32.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./index-415bee12.js";const R={title:"Debug/Json Schema Viewer",component:i,parameters:{},argTypes:{schemaText:{control:"text"},componentsText:{control:"text"},schema:{control:{disable:!0},table:{disable:!0}}},args:{schemaText:"",componentsText:""}},s={args:{schemaText:"",componentsText:""},render:r=>{const{schemaText:e,componentsText:o,...d}=r,h=a(e),n=o?a(o):void 0,t=T({schema:h,additionalComponents:u(n)?n:void 0,target:x});return console.log(e),console.debug("Prepared schema:",t),l.jsx(i,{...d,schema:t})}};function a(r){let e;try{e=JSON.parse(r)}catch(o){console.error("Cannot parse JSON:",o),e=void 0}try{e||(e=g.load(r))}catch(o){console.error("Cannot parse YAML:",o),e=void 0}return(!e||typeof e!="object")&&(e={}),console.debug("Parsed source:",e),e}var c,m,p;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(p=(m=s.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const _=["Debug"];export{s as Debug,_ as __namedExportsOrder,R as default};
