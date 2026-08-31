import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DRGMQe9r.js";import{f as n,p as r}from"./AsyncApiOperationViewer-BMUjObKz.js";import{r as i,t as a}from"./browser-ChQu38zI.js";import{d as o,f as s,h as c,i as l,m as u,r as d}from"./preprocess-D1c9NRE6.js";var f,p,m,h,g;function _(){return(_=e((()=>{r(),a(),s(),c(),d(),f=t(),p=e=>{let t;try{t=JSON.parse(e)}catch(e){console.error(`Cannot parse JSON:`,e),t=void 0}try{t||=i(e)}catch(e){console.error(`Cannot parse YAML:`,e),t=void 0}return!t||typeof t!=`object`?{}:t},m={title:`Debug/Async Api Diffs Viewer`,component:n,argTypes:{mergedSource:{control:{disable:!0},table:{disable:!0}},beforeSourceText:{control:`text`},afterSourceText:{control:`text`},displayMode:{control:`select`,options:[`simple`,`detailed`],defaultValue:`detailed`}},args:{beforeSourceText:`{
  "asyncapi": "3.0.0",
  "operations": {
    "send-operation-with-nothing": {
      "action": "send"
    }
  }
}`,afterSourceText:`{
  "asyncapi": "3.0.0",
  "operations": {
    "send-operation-with-nothing": {
      "action": "send",
      "description": "Test description"
    }
  }
}`}},h={args:{devMode:!0,beforeSourceText:`{
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
}`,afterSourceText:`{
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
          "name": "Test Message",
          "description": "Test description"
        }
      }
    }
  }
}`,operationKeys:{operationKey:`test-operation`,messageKey:`test-message`},referenceNamePropertyKey:u},render:e=>{let{beforeSourceText:t,afterSourceText:r,...i}=e,a=p(t),s=p(r);return console.debug(`Parsed before source:`,a),console.debug(`Parsed after source:`,s),console.log(`TEST_DIFF_META_KEYS`,o),(0,f.jsx)(n,{...i,mergedSource:l({beforeSource:a,afterSource:s}),diffMetaKeys:o},`${btoa(t)}-${btoa(r)}`)}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    devMode: true,
    beforeSourceText: \`{
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
    afterSourceText: \`{
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
          "name": "Test Message",
          "description": "Test description"
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
      beforeSourceText,
      afterSourceText,
      ...viewerArgs
    } = args;
    const beforeParsedSource = parseSourceText(beforeSourceText);
    const afterParsedSource = parseSourceText(afterSourceText);
    console.debug('Parsed before source:', beforeParsedSource);
    console.debug('Parsed after source:', afterParsedSource);
    console.log('TEST_DIFF_META_KEYS', TEST_DIFF_META_KEYS);
    return <AsyncApiOperationDiffsViewer key={\`\${btoa(beforeSourceText)}-\${btoa(afterSourceText)}\`} {...viewerArgs} mergedSource={prepareAsyncApiDiffsDocument({
      beforeSource: beforeParsedSource,
      afterSource: afterParsedSource
    })} diffMetaKeys={TEST_DIFF_META_KEYS} />;
  }
}`,...h.parameters?.docs?.source}}},g=[`Debug`]})))()}_();export{h as Debug,g as __namedExportsOrder,m as default};