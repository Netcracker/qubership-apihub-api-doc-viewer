import{j as u}from"./_commonjs-dynamic-modules-6308e768.js";import{A as c}from"./AsyncApiOperationViewer-942628e7.js";import{j as d}from"./js-yaml-71a24e1f.js";import{T as l,p as m}from"./preprocess-22112daa.js";import"./index-f46741a2.js";import"./GraphPropNodeViewer-7b903ebd.js";import"./index-415bee12.js";import"./GraphQLOperationViewer-883c5723.js";import"./GraphQLOperationDiffViewer-212bd7b5.js";const N={title:"Debug/Async Api Viewer",component:c,argTypes:{source:{control:{disable:!0},table:{disable:!0}},sourceText:{control:"text"},displayMode:{control:"select",options:["simple","detailed"],defaultValue:"detailed"},operationType:{control:"select",options:["send","receive"],defaultValue:"send"}},args:{sourceText:`{
  "asyncapi": "3.0.0",
  "operations": {
    "send-operation-with-nothing": {
      "action": "send"
    }
  }
}`}},r={args:{sourceText:`{
  "asyncapi": "3.0.0",
  "operations": {
    "test-operation": {
      "action": "send"
    }
  }
}`,operationKey:"",operationType:"",referenceNamePropertyKey:l},render:p=>{const{sourceText:o,...i}=p;let e;try{e=JSON.parse(o)}catch(n){console.error("Cannot parse JSON:",n),e=void 0}try{e||(e=d.load(o))}catch(n){console.error("Cannot parse YAML:",n),e=void 0}return(!e||typeof e!="object")&&(e={}),console.debug("Parsed source:",e),u.jsx(c,{...i,source:m({source:e})},o)}};var s,t,a;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    sourceText: \`{
  "asyncapi": "3.0.0",
  "operations": {
    "test-operation": {
      "action": "send"
    }
  }
}\`,
    operationKey: '',
    operationType: '',
    referenceNamePropertyKey: TEST_REFERENCE_NAME_PROPERTY
  },
  render: args => {
    const {
      sourceText,
      ...viewerArgs
    } = args;
    let parsedSource: unknown = undefined;
    try {
      parsedSource = JSON.parse(sourceText);
    } catch (error) {
      console.error('Cannot parse JSON:', error);
      parsedSource = undefined;
    }
    try {
      if (!parsedSource) {
        parsedSource = YAML.load(sourceText);
      }
    } catch (error) {
      console.error('Cannot parse YAML:', error);
      parsedSource = undefined;
    }
    if (!parsedSource || typeof parsedSource !== 'object') {
      parsedSource = {};
    }
    console.debug('Parsed source:', parsedSource);
    return <AsyncApiOperationViewer key={sourceText} {...viewerArgs} source={prepareAsyncApiDocument({
      source: parsedSource
    })} />;
  }
}`,...(a=(t=r.parameters)==null?void 0:t.docs)==null?void 0:a.source}}};const O=["Debug"];export{r as Debug,O as __namedExportsOrder,N as default};
