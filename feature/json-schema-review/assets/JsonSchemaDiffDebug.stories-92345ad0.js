import{j as C}from"./_commonjs-dynamic-modules-6308e768.js";import{c as x}from"./AsyncApiOperationViewer-3ee36e9c.js";import{D as g,a as u,i as p}from"./UxBadge-3d9cd0ec.js";import{p as D}from"./public-api-99af098d.js";import{g as E,R as A}from"./preprocess-8acbbf55.js";import"./index-f46741a2.js";import"./IndexesNodeViewer-343f36de.js";import"./DdlTableDiffsViewer-daaefaef.js";/* empty css              */import"./DdlTableViewer-d7742d03.js";import"./GraphQLOperationDiffViewer-a56ad3af.js";import"./GraphPropNodeViewer-0af21220.js";import"./index-415bee12.js";import"./GraphQLOperationViewer-19ba9549.js";const T={diffsMetaKey:g,aggregatedDiffsMetaKey:u},U={title:"Debug/Json Schema Diff Viewer",component:x,parameters:{},argTypes:{beforeSchemaText:{control:"text"},afterSchemaText:{control:"text"},beforeComponentsText:{control:"text"},afterComponentsText:{control:"text"},schema:{control:{disable:!0},table:{disable:!0}},diffMetaKeys:{control:{disable:!0},table:{disable:!0}}},args:{beforeSchemaText:"",afterSchemaText:"",beforeComponentsText:"",afterComponentsText:"",diffMetaKeys:T,hideUnchangedNodes:!1}},n={args:{beforeSchemaText:"",afterSchemaText:"",beforeComponentsText:"",afterComponentsText:"",expandedDepth:2,diffMetaKeys:T,hideUnchangedNodes:!1},render:t=>{const{beforeSchemaText:e,afterSchemaText:o,beforeComponentsText:a,afterComponentsText:s,...b}=t,l=r(e),S=r(o),m=a?r(a):void 0,f=s?r(s):void 0,c=E({beforeSchema:l,afterSchema:S,beforeAdditionalComponents:p(m)?m:void 0,afterAdditionalComponents:p(f)?f:void 0,target:A});return console.log(e),console.log(o),console.debug("Prepared diff schema:",c),C.jsx(x,{...b,schema:c})}};function r(t){let e;try{e=JSON.parse(t)}catch(o){console.warn("Cannot parse JSON:",o),e=void 0}try{e||(e=D(t))}catch(o){console.warn("Cannot parse YAML:",o),e=void 0}return(!e||typeof e!="object")&&(e={}),console.debug("Parsed source:",e),e}var i,d,h;n.parameters={...n.parameters,docs:{...(i=n.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
    return <JsonSchemaNextDiffsViewer {...viewerArgs} schema={schema} />;
  }
}`,...(h=(d=n.parameters)==null?void 0:d.docs)==null?void 0:h.source}}};const I=["Debug"];export{n as Debug,I as __namedExportsOrder,U as default};
