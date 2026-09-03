import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-ATHzeHXA.js";import{n,t as r}from"./AsyncApiOperationViewer-MuAs1xMh.js";import{r as i,t as a}from"./browser-ChQu38zI.js";import{a as o,g as s,h as c,r as l}from"./preprocess-BmBuk4Rv.js";var u,d,f,p;function m(){return(m=e((()=>{n(),a(),s(),l(),u=t(),d={title:`Debug/Async Api Viewer`,component:r,argTypes:{source:{control:{disable:!0},table:{disable:!0}},sourceText:{control:`text`},displayMode:{control:`select`,options:[`simple`,`detailed`],defaultValue:`detailed`}},args:{sourceText:`{
  "asyncapi": "3.0.0",
  "operations": {
    "send-operation-with-nothing": {
      "action": "send"
    }
  }
}`}},f={args:{devMode:!0,sourceText:`{
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
}`,operationKeys:{operationKey:`test-operation`,messageKey:`test-message`},referenceNamePropertyKey:c},render:e=>{let{sourceText:t,...n}=e,a;try{a=JSON.parse(t)}catch(e){console.error(`Cannot parse JSON:`,e),a=void 0}try{a||=i(t)}catch(e){console.error(`Cannot parse YAML:`,e),a=void 0}return(!a||typeof a!=`object`)&&(a={}),console.debug(`Parsed source:`,a),(0,u.jsx)(r,{...n,source:o({source:a})},t)}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source}}},p=[`Debug`]})))()}m();export{f as Debug,p as __namedExportsOrder,d as default};