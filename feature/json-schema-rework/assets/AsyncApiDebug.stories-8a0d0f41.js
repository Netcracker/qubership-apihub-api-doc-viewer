import{j as u}from"./_commonjs-dynamic-modules-6308e768.js";import{A as c}from"./AsyncApiOperationViewer-489efbeb.js";import{p as m}from"./public-api-d6a34651.js";import{T as d,p as l}from"./preprocess-3be277e1.js";import"./index-f46741a2.js";import"./index-71f1bfe0.js";import"./take-diff-side-background-color-85ec54fb.js";import"./IndexesNodeViewer-05731b79.js";import"./DiffBadge-51a3ec54.js";import"./DdlTableDiffsViewer-78b6311e.js";/* empty css              */import"./DdlTableViewer-4b03edfb.js";import"./GraphQLOperationDiffViewer-aadc8f99.js";import"./GraphPropNodeViewer-49e74551.js";import"./index-c19463f3.js";import"./index-415bee12.js";import"./GraphQLOperationViewer-a2d41582.js";import"./JsonSchemaNextViewer-cd13c5ca.js";const _={title:"Debug/Async Api Viewer",component:c,argTypes:{source:{control:{disable:!0},table:{disable:!0}},sourceText:{control:"text"},displayMode:{control:"select",options:["simple","detailed"],defaultValue:"detailed"}},args:{sourceText:`{
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
}`,operationKeys:{operationKey:"test-operation",messageKey:"test-message"},referenceNamePropertyKey:d},render:p=>{const{sourceText:n,...i}=p;let e;try{e=JSON.parse(n)}catch(s){console.error("Cannot parse JSON:",s),e=void 0}try{e||(e=m(n))}catch(s){console.error("Cannot parse YAML:",s),e=void 0}return(!e||typeof e!="object")&&(e={}),console.debug("Parsed source:",e),u.jsx(c,{...i,source:l({source:e})},n)}};var o,t,a;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(a=(t=r.parameters)==null?void 0:t.docs)==null?void 0:a.source}}};const C=["Debug"];export{r as Debug,C as __namedExportsOrder,_ as default};
