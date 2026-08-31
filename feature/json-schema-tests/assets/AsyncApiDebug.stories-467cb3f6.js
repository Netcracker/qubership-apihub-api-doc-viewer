import{j as u}from"./_commonjs-dynamic-modules-6308e768.js";import{A as c}from"./AsyncApiOperationViewer-b3ee9740.js";import{p as d}from"./public-api-99af098d.js";import{T as m,p as l}from"./preprocess-9f7c1da0.js";import"./index-f46741a2.js";import"./DiffBadge-3394d163.js";import"./IndexesNodeViewer-6c0f4422.js";import"./DdlTableDiffsViewer-b43d1e75.js";/* empty css              */import"./DdlTableViewer-64f3e8cb.js";import"./GraphQLOperationDiffViewer-da7f8f93.js";import"./GraphPropNodeViewer-6d57cd18.js";import"./index-415bee12.js";import"./GraphQLOperationViewer-beb63fb6.js";const v={title:"Debug/Async Api Viewer",component:c,argTypes:{source:{control:{disable:!0},table:{disable:!0}},sourceText:{control:"text"},displayMode:{control:"select",options:["simple","detailed"],defaultValue:"detailed"}},args:{sourceText:`{
  "asyncapi": "3.0.0",
  "operations": {
    "send-operation-with-nothing": {
      "action": "send"
    }
  }
}`}},r={args:{devMode:!0,sourceText:`{
  "asyncapi": "3.0.0",
  "operations": {
    "test-operation": {
      "action": "send",
      "channel": { "$ref": "#/channels/test-channel" },
      "messages": [
        { "$ref": "#/channels/test-channel/messages/test-message" }
      ]
    }
  },
  "channels": {
    "test-channel": {
      "messages": {
        "test-message": {
          "name": "Test Message"
        }
      }
    }
  }
}`,operationKeys:{operationKey:"test-operation",messageKey:"test-message"},referenceNamePropertyKey:m},render:p=>{const{sourceText:n,...i}=p;let e;try{e=JSON.parse(n)}catch(s){console.error("Cannot parse JSON:",s),e=void 0}try{e||(e=d(n))}catch(s){console.error("Cannot parse YAML:",s),e=void 0}return(!e||typeof e!="object")&&(e={}),console.debug("Parsed source:",e),u.jsx(c,{...i,source:l({source:e})},n)}};var o,t,a;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    devMode: true,
    sourceText: \`{
  "asyncapi": "3.0.0",
  "operations": {
    "test-operation": {
      "action": "send",
      "channel": { "$ref": "#/channels/test-channel" },
      "messages": [
        { "$ref": "#/channels/test-channel/messages/test-message" }
      ]
    }
  },
  "channels": {
    "test-channel": {
      "messages": {
        "test-message": {
          "name": "Test Message"
        }
      }
    }
  }
}\`,
    operationKeys: {
      operationKey: 'test-operation',
      messageKey: 'test-message'
    },
    referenceNamePropertyKey: TEST_REFERENCE_NAME_PROPERTY
  },
  render: (args: StoryArgs) => {
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
        parsedSource = parse(sourceText);
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
}`,...(a=(t=r.parameters)==null?void 0:t.docs)==null?void 0:a.source}}};const w=["Debug"];export{r as Debug,w as __namedExportsOrder,v as default};
