import{j as x}from"./_commonjs-dynamic-modules-6308e768.js";import{b as p}from"./AsyncApiOperationViewer-908de172.js";import{i as T}from"./UxBadge-190a23d2.js";import{d as l,R as g}from"./preprocess-39b8762b.js";import{p as n}from"./parse-yaml-source-3e95a000.js";import"./index-f46741a2.js";import"./IndexesNodeViewer-fee5cd8c.js";import"./DdlTableDiffsViewer-fd6285f4.js";/* empty css              */import"./DdlTableViewer-628f1b1b.js";import"./GraphQLOperationDiffViewer-8a73b026.js";import"./GraphPropNodeViewer-687f278e.js";import"./index-415bee12.js";import"./GraphQLOperationViewer-d1208066.js";import"./test-diff-meta-keys-5677f54d.js";import"./public-api-99af098d.js";const V={title:"Debug/Json Schema Viewer",component:p,parameters:{},argTypes:{schemaText:{control:"text"},componentsText:{control:"text"},schema:{control:{disable:!0},table:{disable:!0}}},args:{schemaText:"",componentsText:""}},e={args:{schemaText:"",componentsText:""},render:i=>{const{schemaText:o,componentsText:s,...d}=i,h=n(o),r=s?n(s):void 0,t=l({schema:h,additionalComponents:T(r)?r:void 0,target:g});return console.log(o),console.debug("Prepared schema:",t),x.jsx(p,{...d,schema:t})}};var a,m,c;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(c=(m=e.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};const B=["Debug"];export{e as Debug,B as __namedExportsOrder,V as default};
