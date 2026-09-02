import{j as u}from"./_commonjs-dynamic-modules-6308e768.js";import{S as x,D,a as g,i as p}from"./DiffBadge-ceca5443.js";import{p as _}from"./public-api-99af098d.js";import{c as S}from"./AsyncApiOperationViewer-ca4ded2c.js";import{g as E,R as A}from"./preprocess-b5de1a20.js";import"./index-f46741a2.js";import"./IndexesNodeViewer-45426e65.js";import"./DdlTableDiffsViewer-90eb36a6.js";/* empty css              */import"./DdlTableViewer-5fe64823.js";import"./GraphQLOperationDiffViewer-e3d9068d.js";import"./GraphPropNodeViewer-6b50c183.js";import"./index-415bee12.js";import"./GraphQLOperationViewer-50742c46.js";const b={diffsMetaKey:D,aggregatedDiffsMetaKey:g},U={title:"Debug/Json Schema Diff Viewer",component:S,parameters:{},argTypes:{beforeSchemaText:{control:"text"},afterSchemaText:{control:"text"},beforeComponentsText:{control:"text"},afterComponentsText:{control:"text"},schema:{control:{disable:!0},table:{disable:!0}},metaKeys:{control:{disable:!0},table:{disable:!0}}},args:{beforeSchemaText:"",afterSchemaText:"",beforeComponentsText:"",afterComponentsText:"",layoutMode:x,metaKeys:b}},n={args:{beforeSchemaText:"",afterSchemaText:"",beforeComponentsText:"",afterComponentsText:"",expandedDepth:2,layoutMode:x,metaKeys:b},render:t=>{const{beforeSchemaText:e,afterSchemaText:o,beforeComponentsText:a,afterComponentsText:s,...l}=t,h=r(e),C=r(o),m=a?r(a):void 0,c=s?r(s):void 0,f=E({beforeSchema:h,afterSchema:C,beforeAdditionalComponents:p(m)?m:void 0,afterAdditionalComponents:p(c)?c:void 0,target:A});return console.log(e),console.log(o),console.debug("Prepared diff schema:",f),u.jsx(S,{...l,schema:f})}};function r(t){let e;try{e=JSON.parse(t)}catch(o){console.warn("Cannot parse JSON:",o),e=void 0}try{e||(e=_(t))}catch(o){console.warn("Cannot parse YAML:",o),e=void 0}return(!e||typeof e!="object")&&(e={}),console.debug("Parsed source:",e),e}var i,d,T;n.parameters={...n.parameters,docs:{...(i=n.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    beforeSchemaText: '',
    afterSchemaText: '',
    beforeComponentsText: '',
    afterComponentsText: '',
    expandedDepth: 2,
    layoutMode: SIDE_BY_SIDE_DIFFS_LAYOUT_MODE,
    metaKeys: DIFF_META_KEYS
  },
  render: args => {
    const {
      beforeSchemaText,
      afterSchemaText,
      beforeComponentsText,
      afterComponentsText,
      ...viewerArgs
    } = args;
    const beforeSchema = parseJsonOrYaml(beforeSchemaText);
    const afterSchema = parseJsonOrYaml(afterSchemaText);
    const beforeComponents = beforeComponentsText ? parseJsonOrYaml(beforeComponentsText) : undefined;
    const afterComponents = afterComponentsText ? parseJsonOrYaml(afterComponentsText) : undefined;
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
    return <JsonSchemaDiffViewer {...viewerArgs} schema={schema} />;
  }
}`,...(T=(d=n.parameters)==null?void 0:d.docs)==null?void 0:T.source}}};const L=["Debug"];export{n as Debug,L as __namedExportsOrder,U as default};
