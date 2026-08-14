import{j as l}from"./_commonjs-dynamic-modules-6308e768.js";import{b as i}from"./AsyncApiOperationViewer-489efbeb.js";import{e as T,R as x}from"./preprocess-3be277e1.js";import{p as g}from"./public-api-d6a34651.js";import{i as u}from"./index-71f1bfe0.js";import"./index-f46741a2.js";import"./take-diff-side-background-color-85ec54fb.js";import"./IndexesNodeViewer-05731b79.js";import"./DiffBadge-51a3ec54.js";import"./DdlTableDiffsViewer-78b6311e.js";/* empty css              */import"./DdlTableViewer-4b03edfb.js";import"./GraphQLOperationDiffViewer-aadc8f99.js";import"./GraphPropNodeViewer-49e74551.js";import"./index-c19463f3.js";import"./index-415bee12.js";import"./GraphQLOperationViewer-a2d41582.js";import"./JsonSchemaNextViewer-cd13c5ca.js";const B={title:"Debug/Json Schema Viewer",component:i,parameters:{},argTypes:{schemaText:{control:"text"},componentsText:{control:"text"},schema:{control:{disable:!0},table:{disable:!0}}},args:{schemaText:"",componentsText:""}},s={args:{schemaText:"",componentsText:""},render:r=>{const{schemaText:e,componentsText:o,...d}=r,h=a(e),t=o?a(o):void 0,n=T({schema:h,additionalComponents:u(t)?t:void 0,target:x});return console.log(e),console.debug("Prepared schema:",n),l.jsx(i,{...d,schema:n})}};function a(r){let e;try{e=JSON.parse(r)}catch(o){console.error("Cannot parse JSON:",o),e=void 0}try{e||(e=g(r))}catch(o){console.error("Cannot parse YAML:",o),e=void 0}return(!e||typeof e!="object")&&(e={}),console.debug("Parsed source:",e),e}var m,c,p;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(p=(c=s.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};const G=["Debug"];export{s as Debug,G as __namedExportsOrder,B as default};
