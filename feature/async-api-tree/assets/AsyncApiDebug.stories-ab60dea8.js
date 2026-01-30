import{j as u}from"./_commonjs-dynamic-modules-6308e768.js";import{A as c}from"./AsyncApiOperationViewer-9d291ba1.js";import{j as d}from"./js-yaml-38530ef5.js";import{p as l}from"./preprocess-c8dcc7de.js";import"./index-f46741a2.js";import"./GraphPropNodeViewer-4334d9f3.js";import"./index-415bee12.js";import"./GraphQLOperationViewer-cd79fa64.js";import"./GraphQLOperationDiffViewer-b8692e04.js";const w={title:"Async Api Viewer (Debug)",component:c,argTypes:{source:{control:{disable:!0},table:{disable:!0}},sourceText:{control:"text"},displayMode:{control:"select",options:["simple","detailed"],defaultValue:"detailed"},operationType:{control:"select",options:["send","receive"],defaultValue:"send"}},args:{sourceText:`{
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
}`,operationName:"",operationType:""},render:p=>{const{sourceText:o,...i}=p;let e;try{e=JSON.parse(o)}catch(n){console.error("Cannot parse JSON:",n),e=void 0}try{e||(e=d.load(o))}catch(n){console.error("Cannot parse YAML:",n),e=void 0}return(!e||typeof e!="object")&&(e={}),console.debug("Parsed source:",e),u.jsx(c,{...i,source:l({source:e})},o)}};var s,t,a;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    sourceText: \`{
  "asyncapi": "3.0.0",
  "operations": {
    "test-operation": {
      "action": "send"
    }
  }
}\`,
    operationName: '',
    operationType: ''
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
}`,...(a=(t=r.parameters)==null?void 0:t.docs)==null?void 0:a.source}}};const j=["Debug"];export{r as Debug,j as __namedExportsOrder,w as default};
