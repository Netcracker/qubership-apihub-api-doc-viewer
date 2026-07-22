import{j as u}from"./_commonjs-dynamic-modules-6308e768.js";import{A as c}from"./AsyncApiOperationViewer-d65f25e7.js";import{p as d}from"./public-api-d6a34651.js";import{T as m,p as l}from"./preprocess-4a9b8845.js";import"./index-f46741a2.js";import"./DiffBadge-20c083b3.js";import"./DdlTableViewer-7c4bbf4d.js";import"./index-ea5de852.js";import"./DdlTableDiffsViewer-8d4452e5.js";/* empty css              */import"./GraphQLOperationDiffViewer-2b919a94.js";import"./GraphPropNodeViewer-5fe6e1d3.js";import"./index-415bee12.js";import"./GraphQLOperationViewer-8cf6307f.js";const v={title:"Debug/Async Api Viewer",component:c,argTypes:{source:{control:{disable:!0},table:{disable:!0}},sourceText:{control:"text"},displayMode:{control:"select",options:["simple","detailed"],defaultValue:"detailed"}},args:{sourceText:`{
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
