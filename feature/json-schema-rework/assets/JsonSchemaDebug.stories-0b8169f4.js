import{j as x}from"./_commonjs-dynamic-modules-6308e768.js";import{b as p}from"./AsyncApiOperationViewer-f43a0e0f.js";import{i as T}from"./UxBadge-a3d5708d.js";import{d as l,R as g}from"./preprocess-fae22708.js";import{p as n}from"./parse-yaml-source-3e95a000.js";import"./index-f46741a2.js";import"./IndexesNodeViewer-04e95f65.js";import"./DdlTableDiffsViewer-b5691702.js";/* empty css              */import"./DdlTableViewer-34306a32.js";import"./GraphQLOperationDiffViewer-b8487c17.js";import"./GraphPropNodeViewer-c64786c2.js";import"./index-415bee12.js";import"./GraphQLOperationViewer-7b86c0e8.js";import"./test-diff-meta-keys-5677f54d.js";import"./public-api-99af098d.js";const V={title:"Debug/Json Schema Viewer",component:p,parameters:{},argTypes:{schemaText:{control:"text"},componentsText:{control:"text"},schema:{control:{disable:!0},table:{disable:!0}}},args:{schemaText:"",componentsText:""}},e={args:{schemaText:"",componentsText:""},render:i=>{const{schemaText:o,componentsText:s,...d}=i,h=n(o),r=s?n(s):void 0,t=l({schema:h,additionalComponents:T(r)?r:void 0,target:g});return console.log(o),console.debug("Prepared schema:",t),x.jsx(p,{...d,schema:t})}};var a,m,c;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
