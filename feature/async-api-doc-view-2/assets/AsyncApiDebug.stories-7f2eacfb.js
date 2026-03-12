import{j as d}from"./_commonjs-dynamic-modules-6308e768.js";import{A as c}from"./AsyncApiOperationViewer-42c07aa2.js";import{j as u}from"./js-yaml-71a24e1f.js";import{T as l,p as m}from"./preprocess-3454686a.js";import"./index-f46741a2.js";import"./GraphPropNodeViewer-84d76a10.js";import"./index-415bee12.js";import"./GraphQLOperationViewer-93bbd985.js";import"./GraphQLOperationDiffViewer-f401c79a.js";const b={title:"Debug/Async Api Viewer",component:c,argTypes:{source:{control:{disable:!0},table:{disable:!0}},sourceText:{control:"text"},displayMode:{control:"select",options:["simple","detailed"],defaultValue:"detailed"},operationType:{control:"select",options:["send","receive"],defaultValue:"send"}},args:{sourceText:`{
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
}`,operationKeys:{operationKey:"test-operation",messageKey:"test-message"},referenceNamePropertyKey:l},render:p=>{const{sourceText:n,...i}=p;let e;try{e=JSON.parse(n)}catch(s){console.error("Cannot parse JSON:",s),e=void 0}try{e||(e=u.load(n))}catch(s){console.error("Cannot parse YAML:",s),e=void 0}return(!e||typeof e!="object")&&(e={}),console.debug("Parsed source:",e),d.jsx(c,{...i,source:m({source:e})},n)}};var o,t,a;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(a=(t=r.parameters)==null?void 0:t.docs)==null?void 0:a.source}}};const M=["Debug"];export{r as Debug,M as __namedExportsOrder,b as default};
