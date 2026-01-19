import{j as u}from"./_commonjs-dynamic-modules-6308e768.js";import{A as s}from"./AsyncApiOperationViewer-39567cde.js";import{p as d}from"./preprocess-124810e4.js";import"./index-f46741a2.js";import"./GraphPropNodeViewer-e7edf85d.js";import"./index-415bee12.js";import"./JsoViewer-77806820.js";import"./GraphQLOperationViewer-242eb38e.js";import"./GraphQLOperationDiffViewer-cc9eefd1.js";const w={title:"Async Api Viewer (Debug)",component:s,argTypes:{source:{control:{disable:!0},table:{disable:!0}},sourceText:{control:"text"},displayMode:{control:"select",options:["simple","detailed"],defaultValue:"detailed"},operationType:{control:"select",options:["send","receive"],defaultValue:"send"}},args:{sourceText:`{
  "asyncapi": "3.0.0",
  "operations": {
    "send-operation-with-nothing": {
      "action": "send"
    }
  }
}`}},e={args:{sourceText:`{
  "asyncapi": "3.0.0",
  "operations": {
    "test-operation": {
      "action": "send"
    }
  }
}`,operationName:"test-operation",operationType:"send"},render:a=>{const{sourceText:p,...c}=a;let r={};try{r=JSON.parse(p)}catch{r={}}const i=r;return u.jsx(s,{...c,source:d({source:i})})}};var o,n,t;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    sourceText: \`{
  "asyncapi": "3.0.0",
  "operations": {
    "test-operation": {
      "action": "send"
    }
  }
}\`,
    operationName: 'test-operation',
    operationType: 'send'
  },
  render: args => {
    const {
      sourceText,
      ...viewerArgs
    } = args;
    let parsedSource: unknown = {};
    try {
      parsedSource = JSON.parse(sourceText);
    } catch {
      parsedSource = {};
    }

    // Custom transformation placeholder: replace with your own logic as needed.
    const transformedSource = parsedSource;
    return <AsyncApiOperationViewer {...viewerArgs} source={prepareAsyncApiDocument({
      source: transformedSource
    })} />;
  }
}`,...(t=(n=e.parameters)==null?void 0:n.docs)==null?void 0:t.source}}};const b=["Debug"];export{e as Debug,b as __namedExportsOrder,w as default};
