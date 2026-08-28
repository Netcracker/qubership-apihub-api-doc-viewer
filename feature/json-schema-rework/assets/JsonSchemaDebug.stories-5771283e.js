import{j as l}from"./_commonjs-dynamic-modules-6308e768.js";import{b as i}from"./AsyncApiOperationViewer-1c38bb10.js";import{e as T,R as x}from"./preprocess-9a34e6e2.js";import{p as g}from"./public-api-99af098d.js";import{i as u}from"./DiffBadge-04d5bd8d.js";import"./index-f46741a2.js";import"./IndexesNodeViewer-d4b52b40.js";import"./DdlTableDiffsViewer-a7bf7281.js";/* empty css              */import"./DdlTableViewer-72898774.js";import"./GraphQLOperationDiffViewer-65ccf201.js";import"./GraphPropNodeViewer-114b5f87.js";import"./index-415bee12.js";import"./GraphQLOperationViewer-f7e37286.js";const D={title:"Debug/Json Schema Viewer",component:i,parameters:{},argTypes:{schemaText:{control:"text"},componentsText:{control:"text"},schema:{control:{disable:!0},table:{disable:!0}}},args:{schemaText:"",componentsText:""}},s={args:{schemaText:"",componentsText:""},render:r=>{const{schemaText:e,componentsText:o,...d}=r,h=a(e),n=o?a(o):void 0,t=T({schema:h,additionalComponents:u(n)?n:void 0,target:x});return console.log(e),console.debug("Prepared schema:",t),l.jsx(i,{...d,schema:t})}};function a(r){let e;try{e=JSON.parse(r)}catch(o){console.error("Cannot parse JSON:",o),e=void 0}try{e||(e=g(r))}catch(o){console.error("Cannot parse YAML:",o),e=void 0}return(!e||typeof e!="object")&&(e={}),console.debug("Parsed source:",e),e}var c,m,p;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(p=(m=s.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const y=["Debug"];export{s as Debug,y as __namedExportsOrder,D as default};
