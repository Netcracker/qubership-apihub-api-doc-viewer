import{j as C}from"./_commonjs-dynamic-modules-6308e768.js";import{c as T}from"./AsyncApiOperationViewer-4b2b995c.js";import{D as g,a as u,i as c}from"./UxBadge-a3d5708d.js";import{f as D,R as E}from"./preprocess-fae22708.js";import{p as e}from"./parse-yaml-source-3e95a000.js";import"./index-f46741a2.js";import"./IndexesNodeViewer-04e95f65.js";import"./DdlTableDiffsViewer-b5691702.js";/* empty css              */import"./DdlTableViewer-34306a32.js";import"./GraphQLOperationDiffViewer-b8487c17.js";import"./GraphPropNodeViewer-c64786c2.js";import"./index-415bee12.js";import"./GraphQLOperationViewer-7b86c0e8.js";import"./test-diff-meta-keys-5677f54d.js";import"./public-api-99af098d.js";const h={diffsMetaKey:g,aggregatedDiffsMetaKey:u},N={title:"Debug/Json Schema Diff Viewer",component:T,parameters:{},argTypes:{beforeSchemaText:{control:"text"},afterSchemaText:{control:"text"},beforeComponentsText:{control:"text"},afterComponentsText:{control:"text"},schema:{control:{disable:!0},table:{disable:!0}},diffMetaKeys:{control:{disable:!0},table:{disable:!0}}},args:{beforeSchemaText:"",afterSchemaText:"",beforeComponentsText:"",afterComponentsText:"",diffMetaKeys:h,hideUnchangedNodes:!1}},o={args:{beforeSchemaText:"",afterSchemaText:"",beforeComponentsText:"",afterComponentsText:"",expandedDepth:2,diffMetaKeys:h,hideUnchangedNodes:!1},render:x=>{const{beforeSchemaText:t,afterSchemaText:n,beforeComponentsText:r,afterComponentsText:a,...b}=x,S=e(t),l=e(n),s=r?e(r):void 0,m=a?e(a):void 0,f=D({beforeSchema:S,afterSchema:l,beforeAdditionalComponents:c(s)?s:void 0,afterAdditionalComponents:c(m)?m:void 0,target:E});return console.log(t),console.log(n),console.debug("Prepared diff schema:",f),C.jsx(T,{...b,schema:f})}};var p,i,d;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    beforeSchemaText: '',
    afterSchemaText: '',
    beforeComponentsText: '',
    afterComponentsText: '',
    expandedDepth: 2,
    diffMetaKeys: DIFF_META_KEYS,
    hideUnchangedNodes: false
  },
  render: args => {
    const {
      beforeSchemaText,
      afterSchemaText,
      beforeComponentsText,
      afterComponentsText,
      ...viewerArgs
    } = args;
    const beforeSchema = parseYamlSource(beforeSchemaText);
    const afterSchema = parseYamlSource(afterSchemaText);
    const beforeComponents = beforeComponentsText ? parseYamlSource(beforeComponentsText) : undefined;
    const afterComponents = afterComponentsText ? parseYamlSource(afterComponentsText) : undefined;
    const schema = prepareJsonDiffSchema({
      beforeSchema,
      afterSchema,
      beforeAdditionalComponents: isObject(beforeComponents) ? beforeComponents : undefined,
      afterAdditionalComponents: isObject(afterComponents) ? afterComponents : undefined,
      target: REQUEST_BODY_TARGET
    });
    console.log(beforeSchemaText);
    console.log(afterSchemaText);
    console.debug('Prepared diff schema:', schema);
    return <JsonSchemaDiffsViewer {...viewerArgs} schema={schema} />;
  }
}`,...(d=(i=o.parameters)==null?void 0:i.docs)==null?void 0:d.source}}};const V=["Debug"];export{o as Debug,V as __namedExportsOrder,N as default};
